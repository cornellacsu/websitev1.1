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

const SECTION_HEADINGS = [
  "On-Campus Opportunities",
  "Off-Campus Opportunities",
];

export function parseEmailTextForCard(text: unknown): ParsedEmailCard {
  const rawText = typeof text === "string" ? text : "";
  const normalizedText = normalizeText(rawText);

  if (!normalizedText) {
    return emptyEmailCard();
  }

  const withBoldMarkers = normalizeBoldMarkers(normalizedText);
  const lines = withBoldMarkers
    .split("\n")
    .map((line) => line.trim())
    .filter(Boolean);

  const title =
    extractSubject(withBoldMarkers) ??
    getFirstUsefulLine(lines) ??
    "Untitled Email";

  const date = extractDate(withBoldMarkers);
  const sections = extractSectionsFromText(lines);
  const links = dedupeLinks(extractLinksFromText(withBoldMarkers));

  return {
    title,
    date,
    summary: makeSummary(withBoldMarkers),
    sections,
    links,
    plainText: withBoldMarkers,
  };
}

function emptyEmailCard(): ParsedEmailCard {
  return {
    title: "Untitled Email",
    summary: "",
    sections: [],
    links: [],
    plainText: "",
  };
}

function extractSectionsFromText(lines: string[]): EmailSection[] {
  const sections: EmailSection[] = [];
  let currentSection: EmailSection | null = null;
  let currentItem: EmailItem | null = null;

  for (const rawLine of lines) {
    const line = rawLine.trim();

    if (!line || isNoiseLine(line) || shouldStopParsing(line)) {
      continue;
    }

    const normalizedHeading = matchSectionHeading(line);
    if (normalizedHeading) {
      finalizeCurrentItem(currentSection, currentItem);
      if (currentSection?.items.length) {
        sections.push(currentSection);
      }

      currentSection = { heading: normalizedHeading, items: [] };
      currentItem = null;
      continue;
    }

    if (!currentSection) {
      continue;
    }

    if (isNumberedItem(line)) {
      finalizeCurrentItem(currentSection, currentItem);
      currentItem = {
        title: stripNumberPrefix(line),
        body: "",
        links: [],
      };
      continue;
    }

    if (isBulletItem(line)) {
      if (!currentItem) {
        currentItem = {
          title: "Details",
          body: "",
          links: [],
        };
      }

      appendBodyLine(currentItem, normalizeBulletLine(line));
      continue;
    }

    if (!currentItem) {
      currentItem = {
        title: line,
        body: "",
        links: [],
      };
      continue;
    }

    appendBodyLine(currentItem, line);
  }

  finalizeCurrentItem(currentSection, currentItem);
  if (currentSection?.items.length) {
    sections.push(currentSection);
  }

  return sections;
}

function finalizeCurrentItem(
  section: EmailSection | null,
  item: EmailItem | null,
) {
  if (!section || !item) {
    return;
  }

  const links = dedupeLinks(extractLinksFromText(item.body));
  section.items.push({
    ...item,
    body: cleanBodyText(item.body),
    links,
  });
}

function appendBodyLine(item: EmailItem, line: string) {
  item.body = item.body ? `${item.body}\n${line}` : line;
}

function normalizeText(text: string) {
  const withoutImages = text.replace(/\[image[^\]]*\]/gi, "");
  const withoutTail = withoutImages.replace(
    /Olina Zheng\s*[‘'’]27[\s\S]*$/i,
    "",
  );

  return withoutTail
    .replace(/\r/g, "")
    .replace(/[ \t]+\n/g, "\n")
    .replace(/\n{3,}/g, "\n\n")
    .trim();
}

function normalizeBoldMarkers(text: string) {
  return text
    .replace(
      /\*\s*([^*]+?)\s*\*/g,
      (_match, inner: string) => `**${inner.trim()}**`,
    )
    .replace(/\*{3,}/g, "**");
}

function extractLinksFromText(text: string): EmailLink[] {
  const matches = [...text.matchAll(/([^\n<]+?)\s*<([^>\n]+)>/g)];

  return matches
    .map((match) => {
      const label = cleanInlineText(match[1] ?? "");
      const rawHref = cleanInlineText(match[2] ?? "");
      const href = normalizeBracketLink(rawHref);

      if (!href) {
        return null;
      }

      return {
        text: label || rawHref,
        href,
      };
    })
    .filter((link): link is EmailLink => Boolean(link));
}

function dedupeLinks(links: EmailLink[]) {
  const seen = new Set<string>();

  return links.filter((link) => {
    const key = `${link.text}|${link.href}`;
    if (seen.has(key)) {
      return false;
    }

    seen.add(key);
    return true;
  });
}

function isNumberedItem(line: string) {
  return /^\d+[\).]\s+/.test(line);
}

function isBulletItem(line: string) {
  return /^[-*]\s+/.test(line);
}

function normalizeBulletLine(line: string) {
  return `- ${line.replace(/^[-*]\s+/, "").trim()}`;
}

function stripNumberPrefix(text: string) {
  return text.replace(/^\d+[\).]\s*/, "").trim();
}

function matchSectionHeading(line: string) {
  return SECTION_HEADINGS.find(
    (heading) => heading.toLowerCase() === line.toLowerCase(),
  );
}

function extractSubject(text: string): string | undefined {
  return text.match(/^Subject:\s*(.+)$/im)?.[1]?.trim();
}

function extractDate(text: string): string | undefined {
  return text.match(
    /(Monday|Tuesday|Wednesday|Thursday|Friday|Saturday|Sunday),?\s+[A-Z][a-z]+\s+\d{1,2}(st|nd|rd|th)?,?\s+\d{4}/i,
  )?.[0];
}

function getFirstUsefulLine(lines: string[]) {
  return lines.find((line) => line.length > 5 && !isNoiseLine(line));
}

function makeSummary(text: string, maxLength = 240) {
  const cleaned = cleanInlineText(text);
  return cleaned.length > maxLength
    ? `${cleaned.slice(0, maxLength).trim()}...`
    : cleaned;
}

function cleanInlineText(text: string) {
  return text.replace(/\s+/g, " ").trim();
}

function cleanBodyText(text: string) {
  const normalizedLines = text
    .split("\n")
    .map((line) => replaceAngleLinksWithMarkers(cleanInlineText(line)))
    .filter(Boolean);

  const mergedLines: string[] = [];

  for (const line of normalizedLines) {
    const previousLine = mergedLines.at(-1);

    if (previousLine && shouldMergeWithPreviousLine(previousLine, line)) {
      mergedLines[mergedLines.length - 1] = `${previousLine} ${line}`.replace(
        /\s+/g,
        " ",
      );
      continue;
    }

    mergedLines.push(line);
  }

  return mergedLines.join("\n");
}

function replaceAngleLinksWithMarkers(text: string) {
  const urlRegex = /<([^>\n]+)>/g;
  let result = "";
  let lastIndex = 0;

  for (const match of text.matchAll(urlRegex)) {
    const matchIndex = match.index ?? 0;
    const rawHref = cleanInlineText(match[1] ?? "");
    const href = normalizeBracketLink(rawHref);
    const prefix = text.slice(lastIndex, matchIndex);

    if (!href) {
      continue;
    }

    const markerBoundary = prefix.lastIndexOf("]]");
    const preservedPrefix =
      markerBoundary >= 0 ? prefix.slice(0, markerBoundary + 2) : "";
    const rawLabel =
      markerBoundary >= 0 ? prefix.slice(markerBoundary + 2) : prefix;
    const label = cleanInlineText(rawLabel);

    result += preservedPrefix;
    result += label
      ? `[[LINK:${label}|${href}]]`
      : `[[LINK:${rawHref}|${href}]]`;

    lastIndex = matchIndex + match[0].length;
  }

  result += text.slice(lastIndex);
  return result;
}

function normalizeBracketLink(value: string) {
  const cleaned = cleanInlineText(value);

  if (!cleaned) {
    return null;
  }

  if (/^[a-z][a-z0-9+.-]*:/i.test(cleaned)) {
    return cleaned;
  }

  if (/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(cleaned)) {
    return `mailto:${cleaned}`;
  }

  if (!/\s/.test(cleaned)) {
    return `https://${cleaned.replace(/^\/+/, "")}`;
  }

  return null;
}

function shouldMergeWithPreviousLine(previousLine: string, line: string) {
  if (!previousLine || !line) {
    return false;
  }

  if (line.startsWith("- ")) {
    return false;
  }

  if (/^\[\[LINK:/.test(line)) {
    return true;
  }

  if (/^[a-z(]/.test(line)) {
    return true;
  }

  if (/[,:;/-]$/.test(previousLine)) {
    return true;
  }

  return !/[.!?]$/.test(previousLine);
}

function isNoiseLine(line: string) {
  return [
    /forwarded message/i,
    /^from:/i,
    /^date:/i,
    /^to:/i,
    /^subject:/i,
    /posted by/i,
    /to unsubscribe/i,
    /^website$/i,
    /^facebook$/i,
    /^instagram$/i,
    /^calendar$/i,
  ].some((pattern) => pattern.test(line));
}

function shouldStopParsing(text: string) {
  return /Olina Zheng\s*[‘'’]27/i.test(text);
}
