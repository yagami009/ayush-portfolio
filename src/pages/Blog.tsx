import { Link } from "wouter";
import { motion } from "framer-motion";
import { getAllPosts, formatDate, BlogPost } from "../lib/blog";
import { siteContent } from "../content";
import { useBlogSearch } from "../hooks/useBlogSearch";
import { useTagFilter } from "../hooks/useTagFilter";
import { SearchBox } from "../components/SearchBox";
import { TagFilter } from "../components/TagFilter";

const SPRING_BASE = { type: "spring" as const, stiffness: 200, damping: 26 };

function fadeInUp(delay = 0) {
  return {
    initial: { opacity: 0, y: 24 },
    animate: { opacity: 1, y: 0 },
    transition: { ...SPRING_BASE, delay },
  };
}

function BlogCard({ post, index }: { post: BlogPost; index: number }) {
  return (
    <motion.article
      {...fadeInUp(index * 0.08)}
      style={{
        background: "var(--bg2)",
        border: "1px solid var(--border)",
        borderRadius: 10,
        padding: "32px",
        transition: "background 0.15s, border-color 0.15s",
        cursor: "pointer",
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.background = "var(--bg3)";
        e.currentTarget.style.borderColor = "var(--border2)";
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.background = "var(--bg2)";
        e.currentTarget.style.borderColor = "var(--border)";
      }}
    >
      <Link href={`/blog/${post.slug}`}>
        <div>
          <div
            style={{
              fontFamily: "var(--font-mono)",
              fontSize: 10,
              letterSpacing: "0.1em",
              color: "var(--fg3)",
              marginBottom: 12,
            }}
          >
            {formatDate(post.date)}
          </div>
          <h2
            style={{
              fontFamily: "var(--font-head)",
              fontSize: 20,
              fontWeight: 600,
              letterSpacing: "-0.02em",
              color: "var(--fg)",
              marginBottom: 12,
              lineHeight: 1.3,
            }}
          >
            {post.title}
          </h2>
          <p
            style={{
              fontSize: 14,
              color: "var(--fg3)",
              lineHeight: 1.7,
              marginBottom: 16,
            }}
          >
            {post.excerpt}
          </p>
          <div style={{ display: "flex", flexWrap: "wrap", gap: 6 }}>
            {post.tags.map((tag) => (
              <span
                key={tag}
                style={{
                  fontFamily: "var(--font-mono)",
                  fontSize: 9,
                  letterSpacing: "0.06em",
                  color: "var(--fg3)",
                  background: "var(--bg)",
                  border: "1px solid var(--border)",
                  padding: "3px 8px",
                  borderRadius: 4,
                  textTransform: "uppercase",
                }}
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </Link>
    </motion.article>
  );
}

export function Blog() {
  const posts = getAllPosts();
  const { brand } = siteContent;

  // Combine search and tag filter
  const {
    selectedTag,
    filteredPosts: postsByTag,
    handleSelectTag,
    hasFilter
  } = useTagFilter(posts);

  const {
    query,
    results: searchResults,
    handleSearch,
    hasResults
  } = useBlogSearch(hasFilter ? postsByTag : posts);

  const displayPosts = query ? searchResults : postsByTag;
  const hasContent = displayPosts.length > 0;

  return (
    <div className="page-pad" style={{ maxWidth: 880, margin: "0 auto", paddingTop: 100, paddingBottom: 100 }}>
      <motion.div {...fadeInUp(0)} style={{ marginBottom: 48 }}>
        <div
          style={{
            fontFamily: "var(--font-mono)",
            fontSize: 10,
            letterSpacing: "0.18em",
            color: "var(--accent)",
            marginBottom: 24,
          }}
        >
          WRITING
        </div>
        <h1
          style={{
            fontFamily: "var(--font-head)",
            fontSize: "clamp(32px, 4vw, 48px)",
            fontWeight: 700,
            letterSpacing: "-0.03em",
            color: "var(--fg)",
            marginBottom: 16,
          }}
        >
          Field Notes
        </h1>
        <p
          style={{
            fontSize: 15,
            color: "var(--fg3)",
            lineHeight: 1.7,
            maxWidth: 540,
            marginBottom: 32,
          }}
        >
          Thoughts on AI systems, founder journeys, and building intelligence where
          systems meet execution.
        </p>

        <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
          <SearchBox value={query} onSearch={handleSearch} />
          {!query && <TagFilter posts={posts} selectedTag={selectedTag} onSelectTag={handleSelectTag} />}
        </div>
      </motion.div>

      <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
        {hasContent ? (
          displayPosts.map((post, index) => (
            <BlogCard key={post.slug} post={post} index={index} />
          ))
        ) : (
          <motion.div
            {...fadeInUp(0)}
            style={{
              textAlign: "center",
              padding: "40px 20px",
              color: "var(--fg3)",
            }}
          >
            <p style={{ fontSize: 15, marginBottom: 8 }}>No articles found</p>
            <p style={{ fontSize: 13 }}>
              {query ? "Try a different search term" : "No posts in this category"}
            </p>
          </motion.div>
        )}
      </div>

      <motion.div {...fadeInUp(0.4)} style={{ marginTop: 64, textAlign: "center" }}>
        <p
          style={{
            fontFamily: "var(--font-mono)",
            fontSize: 11,
            color: "var(--fg3)",
            letterSpacing: "0.04em",
          }}
        >
          Subscribe via{" "}
          <a
            href="/rss.xml"
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: "var(--accent)", textDecoration: "none" }}
          >
            RSS
          </a>
          {" "}or{" "}
          <a
            href="https://x.com/0xayush_mh"
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: "var(--accent)", textDecoration: "none" }}
          >
            X
          </a>
        </p>
      </motion.div>
    </div>
  );
}
