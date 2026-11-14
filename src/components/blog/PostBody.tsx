import type { PostBlock } from "@/types";
import { RichText } from "@/components/blog/RichText";

/**
 * Renders typed article copy (PostBlock[]) inside the `article-prose` scope.
 * Element styles live in globals.css under `article-prose` so the long-form
 * typography stays in one place; this file only maps blocks to semantics.
 */
export function PostBody({ blocks }: { blocks: readonly PostBlock[] }) {
  return (
    <div className="article-prose">
      {blocks.map((block, i) => {
        switch (block.type) {
          case "p":
            return (
              <p key={i}>
                <RichText text={block.text} />
              </p>
            );
          case "h2":
            return (
              <h2 key={i} id={block.id} className="scroll-mt-32">
                {block.text}
              </h2>
            );
          case "h3":
            return <h3 key={i}>{block.text}</h3>;
          case "ul":
            return (
              <ul key={i}>
                {block.items.map((item, j) => (
                  <li key={j}>
                    <RichText text={item} />
                  </li>
                ))}
              </ul>
            );
          case "ol":
            return (
              <ol key={i}>
                {block.items.map((item, j) => (
                  <li key={j}>
                    <RichText text={item} />
                  </li>
                ))}
              </ol>
            );
          case "quote":
            return (
              <figure key={i} className="article-quote">
                <blockquote>
                  <p>{block.text}</p>
                </blockquote>
                {block.cite && <figcaption>— {block.cite}</figcaption>}
              </figure>
            );
          case "callout":
            return (
              <aside key={i} className="article-callout">
                <p className="article-callout-title">{block.title}</p>
                <p>
                  <RichText text={block.text} />
                </p>
              </aside>
            );
          case "table":
            return (
              <div key={i} className="article-table-wrap">
                <table>
                  <thead>
                    <tr>
                      {block.head.map((h, j) => (
                        <th key={j} scope="col">
                          {h}
                        </th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {block.rows.map((row, j) => (
                      <tr key={j}>
                        {row.map((cell, k) => (
                          <td key={k}>
                            <RichText text={cell} />
                          </td>
                        ))}
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            );
          case "image":
            return (
              <figure key={i} className="article-figure">
                <img
                  src={block.src}
                  alt={block.alt}
                  width={block.width}
                  height={block.height}
                  loading="lazy"
                  decoding="async"
                />
                {block.caption && <figcaption>{block.caption}</figcaption>}
              </figure>
            );
        }
      })}
    </div>
  );
}

/** Table-of-contents entries built from the article's h2 blocks. */
export function tocOf(blocks: readonly PostBlock[]) {
  return blocks
    .filter((b): b is Extract<PostBlock, { type: "h2" }> => b.type === "h2")
    .map((b) => ({ id: b.id, text: b.text }));
}
