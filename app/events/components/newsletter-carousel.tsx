"use client";
import { Dialog } from "@/app/components/custom/dialog";
import { ChevronDown, ChevronUp, ExternalLink, Link2 } from "lucide-react";
import { Fragment, useEffect, useRef, useState } from "react";
import { EmailDoc } from "../page";
import { parseEmailTextForCard } from "@/lib/parse-mail";

interface Newsletter {
  id: string;
  date: string;
  title: string;
  highlights: EmailSection[];
  content: EmailSection[];
}

export type ParsedEmailCard = {
  title: string;
  date?: string;
  summary: string;
  sections: EmailSection[];
  links: EmailLink[];
  plainText: string;
};

export type EmailSection = {
  heading: string;
  items: EmailItem[];
};

export type EmailItem = {
  title: string;
  body: string;
  links: EmailLink[];
};

export type EmailLink = {
  text: string;
  href: string;
};

export function NewsletterCarousel({ emails }: { emails: EmailDoc[] }) {
  const [showAllNewsletters, setShowAllNewsletters] = useState(false);
  const [selectedNewsletter, setSelectedNewsletter] =
    useState<Newsletter | null>(null);
  const newsletterRef = useRef<HTMLDivElement>(null);
  const newsletters: Newsletter[] = emails.map((email) => {
    const parseSource = email.strippedText || email.subject;
    const card = parseEmailTextForCard(String(parseSource));
    return {
      id: email.id,
      date: card.date?.toLocaleString() ?? "",
      title: email.subject.trim().replace("Fwd: [ACSU]: ", "") || card.title,
      highlights: card.sections.slice(0, 2),
      content: card.sections.slice(2),
    };
  });
  const displayedNewsletters = showAllNewsletters
    ? newsletters
    : newsletters.slice(0, 3);

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
        return (
          <a
            key={index}
            href={linkMatch[2]}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-1 align-baseline font-medium text-red-300 decoration-red-500/60 transition hover:text-white"
          >
            <Link2 className="h-3 w-3 flex-shrink-0" />
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

  // Handle click outside newsletter section
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        newsletterRef.current &&
        !newsletterRef.current.contains(event.target as Node) &&
        showAllNewsletters
      ) {
        setShowAllNewsletters(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [showAllNewsletters]);

  return (
    <div ref={newsletterRef} className="mb-16">
      {/* <div className="flex items-center justify-between mb-6">
        <h2 className="text-3xl font-bold text-white">Weekly Newsletters</h2>
        <a
          href="#"
          className="text-red-500 hover:text-red-400 text-sm font-semibold flex items-center gap-1"
        >
          View Archive <ExternalLink size={14} />
        </a>
      </div> */}

      {/* Newsletters Grid - Medium Style */}
      <div className="space-y-6">
        <h2 className="text-3xl font-bold text-white mb-8">
          Weekly Newsletters
        </h2>
        <div className="flex flex-wrap justify-between transition-all duration-300">
          {displayedNewsletters.slice(0, 3).map((newsletter, idx) => (
            <button
              key={idx}
              onClick={() => setSelectedNewsletter(newsletter)}
              className="flex flex-col flex-start justify-between w-[380px] cursor-pointer group bg-gray-900/50 border border-gray-800 rounded-lg overflow-hidden hover:border-red-600 transition-all hover:-translate-y-1 text-left"
            >
              <div>
                {/* Date Badge */}
                <div className="py-3 bg-gradient-to-r from-red-600/20 to-red-800/20 border-b border-gray-800 px-4">
                  <span className="text-red-400 text-sm font-mono">
                    {newsletter.date}
                  </span>
                </div>

                {/* Content */}
                <div className="px-6 pt-6">
                  <h3 className="mb-3 line-clamp-2 overflow-hidden text-ellipsis text-lg font-bold text-white transition-colors group-hover:text-red-500">
                    {newsletter.title}
                  </h3>

                  <div className="space-y-3 mb-4 overflow-auto">
                    {newsletter.highlights.map((section, index) => (
                      <section key={`${section.heading}_${index}`}>
                        <h3 className="mb-2 text-sm font-semibold uppercase tracking-[0.22em] text-red-300">
                          {section.heading}
                        </h3>

                        <ul className="space-y-2">
                          {section.items.map((item) => (
                            <li
                              key={`${section.heading}-${item.title}`}
                              className="flex gap-3 items-center rounded-2xl px-3"
                            >
                              <span className="h-1 w-1 flex-shrink-0 rounded-full bg-red-400 shadow-[0_0_12px_rgba(248,113,113,0.6)]" />
                              <p className="text-gray-400 text-xs line-clamp-1 font-semibold">
                                {renderFormattedText(item.title)}
                              </p>
                            </li>
                          ))}
                        </ul>
                      </section>
                    ))}
                  </div>
                </div>
              </div>
              <div className="p-6 -mt-5 flex items-center text-red-500 text-sm font-semibold">
                Read more →
              </div>
            </button>
          ))}
        </div>

        {/* Expanded newsletters with scrollbar */}
        {showAllNewsletters && displayedNewsletters.length > 3 && (
          <div className="max-h-96 overflow-y-auto pr-2 space-y-4 border-t border-gray-800 pt-6">
            {displayedNewsletters.slice(3).map((newsletter, idx) => (
              <button
                key={idx + 3}
                onClick={() => setSelectedNewsletter(newsletter)}
                className="cursor-pointer group flex gap-4 bg-gray-900/50 border border-gray-800 rounded-lg p-4 hover:border-red-600 transition-all w-full text-left"
              >
                <div className="flex-1">
                  <span className="text-red-400 text-xs font-mono mb-2 block">
                    {newsletter.date}
                  </span>
                  <h3 className="mb-2 line-clamp-1 overflow-hidden text-ellipsis text-base font-bold text-white transition-colors group-hover:text-red-500">
                    {newsletter.title}
                  </h3>
                  {/* <div className="flex flex-wrap gap-2">
                    {newsletter.highlights
                      .slice(0, 2)
                      .map((highlight, hIdx) => (
                        <span key={hIdx} className="text-gray-400 text-xs">
                          • {highlight}
                        </span>
                      ))}
                  </div> */}
                </div>
                <ExternalLink
                  className="text-gray-400 group-hover:text-red-500 transition-colors flex-shrink-0"
                  size={18}
                />
              </button>
            ))}
          </div>
        )}

        {/* Show More / Show Less Button */}
        <div className="text-center">
          <button
            onClick={() => setShowAllNewsletters(!showAllNewsletters)}
            className="cursor-pointer inline-flex items-center gap-2 bg-gray-900 hover:bg-gray-800/60 border border-gray-800/40 hover:border-gray-600/40 text-gray-300 font-semibold text-sm px-6 py-3 rounded-lg transition-all"
          >
            {showAllNewsletters ? (
              <>
                Show Less <ChevronUp size={18} />
              </>
            ) : (
              <>
                Show More Newsletters <ChevronDown size={18} />
              </>
            )}
          </button>
        </div>
      </div>

      {/* Newsletter Dialog */}
      <Dialog
        isOpen={!!selectedNewsletter}
        onClose={() => setSelectedNewsletter(null)}
      >
        {selectedNewsletter && (
          <article
            key={selectedNewsletter.id}
            className="group relative overflow-hidden rounded-3xl border border-gray-800 bg-gradient-to-br from-gray-950 via-black to-gray-900 p-6 shadow-[0_20px_60px_rgba(0,0,0,0.45)] transition duration-300 hover:-translate-y-1 hover:border-red-900/70"
          >
            <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255, 255, 255, 0.42),transparent_32%),radial-gradient(circle_at_bottom_left,rgba(255, 255, 255, 0.42),transparent_25%)] opacity-80" />
            <div className="relative">
              <div className="mb-5 flex flex-wrap items-center gap-3">
                <span className="text-xs uppercase tracking-[0.22em] text-gray-500">
                  {selectedNewsletter.date || "Unknown time"}
                </span>
              </div>

              <div className="mb-5 border-b border-gray-800/80 pb-4">
                <h2 className="text-2xl font-semibold text-white">
                  {selectedNewsletter.title || "(No subject)"}
                </h2>
              </div>

              <div className="space-y-5">
                {selectedNewsletter.content.map((section, index) => (
                  <section key={`${section.heading}_${index}`}>
                    <h3 className="mb-3 text-sm font-semibold uppercase tracking-[0.22em] text-red-300">
                      {section.heading}
                    </h3>

                    <div className="space-y-3">
                      {section.items.map((item) => (
                        <div
                          key={`${section.heading}-${item.title}`}
                          className="rounded-2xl bg-[radial-gradient(circle_at_top_left,rgba(220,38,38,0.18),transparent_32%),radial-gradient(circle_at_bottom_right,rgba(220,38,38,0.18),transparent_25%)] p-4 transition"
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
                                          className="mt-2 text-sm leading-6 text-gray-300"
                                        >
                                          {renderFormattedText(paragraph)}
                                        </p>
                                      ),
                                    )
                                  : null}

                                {bulletItems.length ? (
                                  <ul className="mt-3 space-y-2 pl-5 text-sm leading-6 text-gray-300 list-disc marker:text-red-400">
                                    {bulletItems.map((bullet, bulletIndex) => (
                                      <li
                                        key={`${item.title}_bullet_${bulletIndex}`}
                                      >
                                        {renderFormattedText(bullet)}
                                      </li>
                                    ))}
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
            </div>
          </article>
        )}
      </Dialog>
    </div>
  );
}
