import crypto from "node:crypto";
import { Timestamp } from "firebase-admin/firestore";

type StringMap = Record<string, string | string[] | null>;

export type ParsedEmailRecord = {
  id: string;
  sender: string;
  recipient: string;
  subject: string;
  strippedHtml: string;
  strippedText: string;
  source: "mailgun-route" | "mailgun-backfill";
  receivedAt: Timestamp;
};

function getFirstStringValue(value: FormDataEntryValue | null) {
  return typeof value === "string" ? value : "";
}

function makeId(parts: string[]) {
  return crypto.createHash("sha256").update(parts.join("|")).digest("hex");
}

export function verifyMailgunSignature({
  signingKey,
  timestamp,
  token,
  signature,
}: {
  signingKey: string;
  timestamp: string;
  token: string;
  signature: string;
}) {
  const expected = crypto
    .createHmac("sha256", signingKey)
    .update(`${timestamp}${token}`)
    .digest("hex");

  const expectedBuffer = Buffer.from(expected, "utf8");
  const signatureBuffer = Buffer.from(signature, "utf8");

  if (expectedBuffer.length !== signatureBuffer.length) {
    return false;
  }

  return crypto.timingSafeEqual(expectedBuffer, signatureBuffer);
}

export function parseIncomingMailgunFormData(
  formData: FormData,
  source: ParsedEmailRecord["source"],
) {
  const strippedHtml = getFirstStringValue(formData.get("stripped-html"));
  const strippedText = getFirstStringValue(formData.get("stripped-text"));
  const recipient = getFirstStringValue(formData.get("recipient"));
  const sender = getFirstStringValue(formData.get("sender"));
  const subject = getFirstStringValue(formData.get("subject"));
  const timestampSeconds = Number(
    getFirstStringValue(formData.get("timestamp")),
  );
  const receivedAt =
    Number.isFinite(timestampSeconds) && timestampSeconds > 0
      ? Timestamp.fromMillis(timestampSeconds * 1000)
      : Timestamp.now();

  return {
    id: makeId([recipient, sender, subject, String(timestampSeconds)]),
    sender,
    recipient,
    subject,
    strippedHtml,
    strippedText,
    source,
    receivedAt,
  } satisfies ParsedEmailRecord;
}

export function mapStoredMessageToFirestore({
  recipient,
  source,
  storageKey,
  message,
}: {
  recipient: string;
  source: ParsedEmailRecord["source"];
  storageKey: string;
  message: StringMap;
}) {
  const html =
    typeof message["body-html"] === "string" ? message["body-html"] : "";
  const strippedHtml =
    typeof message["stripped-html"] === "string"
      ? message["stripped-html"]
      : "";
  const strippedText =
    typeof message["stripped-text"] === "string"
      ? message["stripped-text"]
      : "";
  const subject = typeof message.Subject === "string" ? message.Subject : "";
  const sender = typeof message.sender === "string" ? message.sender : "";

  return {
    id: makeId([recipient, sender, subject, storageKey]),
    sender,
    recipient,
    subject,
    strippedHtml,
    strippedText,
    source,
    receivedAt: Timestamp.now(),
  } satisfies ParsedEmailRecord;
}
