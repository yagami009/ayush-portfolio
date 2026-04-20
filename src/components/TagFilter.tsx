import { useMemo } from "react";
import type { BlogPost } from "../lib/blog";

interface TagFilterProps {
  posts: BlogPost[];
  selectedTag: string | null;
  onSelectTag: (tag: string | null) => void;
}

export function TagFilter({ posts, selectedTag, onSelectTag }: TagFilterProps) {
  const allTags = useMemo(() => {
    const tags = new Set<string>();
    posts.forEach((post) => {
      post.tags.forEach((tag) => tags.add(tag));
    });
    return Array.from(tags).sort();
  }, [posts]);

  if (allTags.length === 0) return null;

  return (
    <div style={{ marginBottom: 32 }}>
      <div
        style={{
          fontFamily: "var(--font-mono)",
          fontSize: 10,
          letterSpacing: "0.1em",
          color: "var(--fg3)",
          marginBottom: 12,
          textTransform: "uppercase",
        }}
      >
        Filter by topic
      </div>
      <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
        <button
          onClick={() => onSelectTag(null)}
          style={{
            fontFamily: "var(--font-mono)",
            fontSize: 11,
            letterSpacing: "0.06em",
            padding: "6px 12px",
            borderRadius: 4,
            border: "1px solid var(--border)",
            background: selectedTag === null ? "var(--accent)" : "var(--bg2)",
            color: selectedTag === null ? "var(--bg)" : "var(--fg3)",
            cursor: "pointer",
            transition: "all 0.15s ease",
          }}
        >
          All
        </button>
        {allTags.map((tag) => (
          <button
            key={tag}
            onClick={() => onSelectTag(tag)}
            style={{
              fontFamily: "var(--font-mono)",
              fontSize: 11,
              letterSpacing: "0.06em",
              padding: "6px 12px",
              borderRadius: 4,
              border: "1px solid var(--border)",
              background: selectedTag === tag ? "var(--accent)" : "var(--bg2)",
              color: selectedTag === tag ? "var(--bg)" : "var(--fg3)",
              cursor: "pointer",
              transition: "all 0.15s ease",
            }}
          >
            {tag}
          </button>
        ))}
      </div>
    </div>
  );
}
