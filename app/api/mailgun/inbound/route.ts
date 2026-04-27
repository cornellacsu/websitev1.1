import { NextResponse } from "next/server";

import { adminDb } from "@/lib/firebase-admin";
import {
  parseIncomingMailgunFormData,
  verifyMailgunSignature,
} from "@/lib/mailgun";

export const runtime = "nodejs";

export async function GET() {
  return NextResponse.json({ ok: true });
}

export async function POST(request: Request) {
  const signingKey = process.env.MAILGUN_WEBHOOK_SIGNING_KEY;

  if (!signingKey) {
    return NextResponse.json(
      { error: "MAILGUN_WEBHOOK_SIGNING_KEY is not configured." },
      { status: 500 },
    );
  }

  const formData = await request.formData();
  const timestamp = String(formData.get("timestamp") ?? "");
  const token = String(formData.get("token") ?? "");
  const signature = String(formData.get("signature") ?? "");

  const isValid = verifyMailgunSignature({
    signingKey,
    timestamp,
    token,
    signature,
  });

  if (!isValid) {
    return NextResponse.json(
      { error: "Invalid Mailgun signature." },
      { status: 406 },
    );
  }

  const record = parseIncomingMailgunFormData(formData, "mailgun-route");
  const targetRecipient =
    process.env.MAILGUN_TARGET_RECIPIENT?.trim().toLowerCase();

  if (targetRecipient && record.recipient.toLowerCase() !== targetRecipient) {
    return NextResponse.json({
      ok: true,
      skipped: true,
      reason: "recipient_mismatch",
    });
  }

  await adminDb
    .collection("mailgunEmails")
    .doc(record.id)
    .set(record, { merge: true });

  return NextResponse.json({
    ok: true,
    id: record.id,
    recipient: record.recipient,
    subject: record.subject,
  });
}
