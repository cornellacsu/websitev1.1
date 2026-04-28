import Link from "next/link";
import { Fragment } from "react";

import { adminDb } from "@/lib/firebase-admin";
import { parseEmailTextForCard } from "@/lib/parse-mail";

type EmailDoc = {
  id: string;
  sender: string;
  recipient: string;
  subject: string;
  strippedHtml: string;
  strippedText: string;
  source: string;
  receivedAt?: {
    toDate?: () => Date;
  };
};

function splitBodyContent(body: string) {
  const paragraphParts: string[] = [];
  const bulletItems: string[] = [];

  const paragraphs = body
    .split(/\n\s*\n/)
    .map((paragraph) => paragraph.trim())
    .filter(Boolean);

  for (const paragraph of paragraphs) {
    const lines = paragraph
      .split("\n")
      .map((line) => line.trim())
      .filter(Boolean);

    const currentParagraphParts: string[] = [];

    for (const line of lines) {
      if (line.startsWith("-")) {
        const bullet = line.replace(/^-+\s*/, "").trim();
        if (bullet) {
          bulletItems.push(bullet);
        }
        continue;
      }

      if (line.includes(" - ")) {
        const parts = line
          .split(/\s+-\s+/)
          .map((part) => part.trim())
          .filter(Boolean);

        if (parts.length > 1) {
          currentParagraphParts.push(parts[0]!);
          bulletItems.push(...parts.slice(1));
          continue;
        }
      }

      currentParagraphParts.push(line);
    }

    if (currentParagraphParts.length) {
      paragraphParts.push(currentParagraphParts.join(" "));
    }
  }

  return {
    paragraphParts,
    bulletItems,
  };
}

function renderFormattedText(text: string) {
  const segments = text
    .split(/(\[\[LINK:[^[\]]+\|[^[\]]+\]\]|\*\*.*?\*\*)/g)
    .filter(Boolean);

  return segments.map((segment, index) => {
    const linkMatch = segment.match(/^\[\[LINK:(.+)\|(.+)\]\]$/);
    if (linkMatch) {
      segment.replace(linkMatch[1], "");
      return (
        <a
          key={index}
          href={linkMatch[2]}
          target="_blank"
          rel="noreferrer"
          className="font-medium text-red-300 underline decoration-red-500/60 underline-offset-4 transition hover:text-white"
        >
          {renderFormattedText(linkMatch[1])}
        </a>
      );
    }

    const boldMatch = segment.match(/^\*\*(.*)\*\*$/);

    if (boldMatch) {
      return (
        <strong key={index} className="font-semibold text-white">
          {boldMatch[1]}
        </strong>
      );
    }

    return <Fragment key={index}>{segment}</Fragment>;
  });
}

async function getEmails() {
  const snapshot = await adminDb
    .collection("mailgunEmails")
    .orderBy("receivedAt", "desc")
    .limit(25)
    .get();

  return snapshot.docs.map((doc) => ({
    id: doc.id,
    ...(doc.data() as Omit<EmailDoc, "id">),
  }));
}

export default async function MailgunPage() {
  const emails = await getEmails();

  return (
    <main className="min-h-screen bg-gradient-to-b from-black via-gray-950 to-black px-6 py-20 text-white">
      <div className="mx-auto max-w-6xl">
        <div className="mb-10 flex items-end justify-between gap-4">
          <div>
            <p className="mb-2 text-sm uppercase tracking-[0.3em] text-red-400">
              Mailgun Inbox
            </p>
            <h1 className="text-4xl font-semibold">
              Parsed email text in Firestore
            </h1>
            <p className="mt-3 max-w-3xl text-gray-400">
              This page reads the most recent stored emails from Firestore and
              shows the reduced Mailgun record shape.
            </p>
          </div>
          <Link
            href="/"
            className="rounded-full border border-gray-700 px-4 py-2 text-sm text-gray-300 transition hover:border-red-500 hover:text-white"
          >
            Back Home
          </Link>
        </div>

        <div className="space-y-6">
          {emails.length === 0 ? (
            <div className="rounded-3xl border border-dashed border-gray-700 bg-gray-950/80 p-8 text-gray-400">
              No emails have been stored yet. Point a Mailgun route at{" "}
              <code>/api/mailgun/inbound</code> and then send a test message to
              your target address.
            </div>
          ) : null}

          <div className="grid gap-6 lg:grid-cols-2">
            {emails.map((email) => {
              const receivedAt = email.receivedAt?.toDate?.();
              const parseSource = email.strippedText || email.subject;
              const card = parseEmailTextForCard(String(parseSource));
              const sections = card.sections.filter(
                (section) => section.items.length > 0,
              );

              return (
                <article
                  key={email.id}
                  className="group relative overflow-hidden rounded-3xl border border-gray-800 bg-gradient-to-br from-gray-950 via-black to-gray-900 p-6 shadow-[0_20px_60px_rgba(0,0,0,0.45)] transition duration-300 hover:-translate-y-1 hover:border-red-900/70"
                >
                  <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(220,38,38,0.18),transparent_32%),radial-gradient(circle_at_bottom_left,rgba(255,255,255,0.05),transparent_25%)] opacity-80" />
                  <div className="relative">
                    <div className="mb-5 flex flex-wrap items-center gap-3">
                      <span className="text-xs uppercase tracking-[0.22em] text-gray-500">
                        {card.date ||
                          (receivedAt
                            ? receivedAt.toLocaleString()
                            : "Unknown time")}
                      </span>
                    </div>

                    <div className="mb-5 border-b border-gray-800/80 pb-4">
                      <h2 className="text-2xl font-semibold text-white">
                        {card.title || email.subject || "(No subject)"}
                      </h2>
                    </div>

                    {sections.length ? (
                      <div className="space-y-5">
                        {sections.slice(2).map((section, index) => (
                          <section key={`${section.heading}_${index}`}>
                            <h3 className="mb-3 text-sm font-semibold uppercase tracking-[0.22em] text-red-300">
                              {section.heading}
                            </h3>

                            <div className="space-y-3">
                              {section.items.map((item) => (
                                <div
                                  key={`${section.heading}-${item.title}`}
                                  className="rounded-2xl border border-gray-800 bg-gray-950/80 p-4 transition group-hover:border-gray-700"
                                >
                                  {(() => {
                                    const { paragraphParts, bulletItems } =
                                      splitBodyContent(item.body);

                                    return (
                                      <>
                                        <p className="font-semibold text-white">
                                          {renderFormattedText(item.title)}
                                        </p>

                                        {paragraphParts.length
                                          ? paragraphParts.map(
                                              (paragraph, paragraphIndex) => (
                                                <p
                                                  key={`${item.title}_paragraph_${paragraphIndex}`}
                                                  className="mt-2 text-sm leading-6 text-gray-400"
                                                >
                                                  {renderFormattedText(
                                                    paragraph,
                                                  )}
                                                </p>
                                              ),
                                            )
                                          : null}

                                        {bulletItems.length ? (
                                          <ul className="mt-3 space-y-2 pl-5 text-sm leading-6 text-gray-300 list-disc marker:text-red-400">
                                            {bulletItems.map(
                                              (bullet, bulletIndex) => (
                                                <li
                                                  key={`${item.title}_bullet_${bulletIndex}`}
                                                >
                                                  {renderFormattedText(bullet)}
                                                </li>
                                              ),
                                            )}
                                          </ul>
                                        ) : null}
                                      </>
                                    );
                                  })()}
                                </div>
                              ))}
                            </div>
                          </section>
                        ))}
                      </div>
                    ) : (
                      <div className="rounded-2xl border border-gray-800 bg-gray-950/70 p-4">
                        <p className="text-sm font-medium uppercase tracking-[0.2em] text-red-300">
                          Raw Extract
                        </p>
                        <pre className="mt-3 whitespace-pre-wrap text-sm leading-6 text-gray-300">
                          {email.strippedText ||
                            email.strippedHtml ||
                            "No parsed content available."}
                        </pre>
                      </div>
                    )}
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </div>
    </main>
  );
}
