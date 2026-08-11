export type TocItem = {
  id: string;
  text: string;
  level: 2 | 3;
};

type PortableTextSpan = {
  _type: string;
  text?: string;
};

type PortableTextBlock = {
  _key: string;
  _type: string;
  style?: string;
  children?: PortableTextSpan[];
};

// Anchor ids are keyed off the block's own Sanity _key, not a slugified
// version of its text — that sidesteps duplicate-heading collisions entirely
// and lets the PortableText heading renderer derive the exact same id.
export function extractHeadings(body: unknown): TocItem[] {
  if (!Array.isArray(body)) return [];

  return (body as PortableTextBlock[])
    .filter(
      (block) =>
        block._type === "block" && (block.style === "h2" || block.style === "h3")
    )
    .map((block) => ({
      id: `heading-${block._key}`,
      text: (block.children ?? [])
        .map((span) => span.text ?? "")
        .join("")
        .trim(),
      level: (block.style === "h2" ? 2 : 3) as 2 | 3,
    }))
    .filter((item) => item.text.length > 0);
}
