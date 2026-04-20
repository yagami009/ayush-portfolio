import { Link } from "wouter";
import { motion } from "framer-motion";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { getPostBySlug, formatDate } from "../lib/blog";
import { ArrowLeft } from "lucide-react";

const SPRING_BASE = { type: "spring" as const, stiffness: 200, damping: 26 };

function fadeInUp(delay = 0) {
  return {
    initial: { opacity: 0, y: 24 },
    animate: { opacity: 1, y: 0 },
    transition: { ...SPRING_BASE, delay },
  };
}

export function BlogPost({ params }: { params: { slug: string } }) {
  const post = getPostBySlug(params.slug);

  if (!post) {
    return (
      <div
        className="page-pad"
        style={{
          maxWidth: 880,
          margin: "0 auto",
          paddingTop: 120,
          textAlign: "center",
        }}
      >
        <h1 style={{ fontFamily: "var(--font-head)", fontSize: 24, color: "var(--fg)", marginBottom: 16 }}>
          Post not found
        </h1>
        <Link href="/blog">
          <span style={{ color: "var(--accent)", cursor: "pointer" }}>← Back to writing</span>
        </Link>
      </div>
    );
  }

  return (
    <div
      className="page-pad"
      style={{ maxWidth: 720, margin: "0 auto", paddingTop: 100, paddingBottom: 100 }}
    >
      <motion.div {...fadeInUp(0)} style={{ marginBottom: 48 }}>
        <Link href="/blog">
          <span
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 6,
              fontFamily: "var(--font-mono)",
              fontSize: 11,
              color: "var(--fg3)",
              cursor: "pointer",
              marginBottom: 32,
              transition: "color 0.15s",
            }}
            onMouseEnter={(e) => (e.currentTarget.style.color = "var(--fg)")}
            onMouseLeave={(e) => (e.currentTarget.style.color = "var(--fg3)")}
          >
            <ArrowLeft size={14} />
            Back to writing
          </span>
        </Link>

        <div
          style={{
            fontFamily: "var(--font-mono)",
            fontSize: 10,
            letterSpacing: "0.1em",
            color: "var(--fg3)",
            marginBottom: 16,
          }}
        >
          {formatDate(post.date)}
        </div>

        <h1
          style={{
            fontFamily: "var(--font-head)",
            fontSize: "clamp(28px, 4vw, 40px)",
            fontWeight: 700,
            letterSpacing: "-0.03em",
            color: "var(--fg)",
            marginBottom: 24,
            lineHeight: 1.2,
          }}
        >
          {post.title}
        </h1>

        <div style={{ display: "flex", flexWrap: "wrap", gap: 6, marginBottom: 48 }}>
          {post.tags.map((tag) => (
            <span
              key={tag}
              style={{
                fontFamily: "var(--font-mono)",
                fontSize: 9,
                letterSpacing: "0.06em",
                color: "var(--fg3)",
                background: "var(--bg2)",
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
      </motion.div>

      <motion.article
        {...fadeInUp(0.1)}
        style={{
          fontSize: 15,
          color: "var(--fg2)",
          lineHeight: 1.8,
        }}
        className="blog-post-content"
      >
        <ReactMarkdown
          remarkPlugins={[remarkGfm]}
          components={{
            h1: ({ children }) => (
              <h1
                style={{
                  fontFamily: "var(--font-head)",
                  fontSize: 24,
                  fontWeight: 600,
                  color: "var(--fg)",
                  marginTop: 48,
                  marginBottom: 20,
                  letterSpacing: "-0.02em",
                }}
              >
                {children}
              </h1>
            ),
            h2: ({ children }) => (
              <h2
                style={{
                  fontFamily: "var(--font-head)",
                  fontSize: 20,
                  fontWeight: 600,
                  color: "var(--fg)",
                  marginTop: 40,
                  marginBottom: 16,
                  letterSpacing: "-0.01em",
                }}
              >
                {children}
              </h2>
            ),
            h3: ({ children }) => (
              <h3
                style={{
                  fontFamily: "var(--font-head)",
                  fontSize: 17,
                  fontWeight: 600,
                  color: "var(--fg)",
                  marginTop: 32,
                  marginBottom: 12,
                }}
              >
                {children}
              </h3>
            ),
            p: ({ children }) => (
              <p style={{ marginBottom: 16, color: "var(--fg2)" }}>{children}</p>
            ),
            code: ({ children, inline }: { children: React.ReactNode; inline?: boolean }) =>
              inline ? (
                <code
                  style={{
                    fontFamily: "var(--font-mono)",
                    fontSize: 13,
                    background: "var(--bg2)",
                    padding: "2px 6px",
                    borderRadius: 4,
                    color: "var(--accent)",
                  }}
                >
                  {children}
                </code>
              ) : (
                <pre
                  style={{
                    background: "var(--bg2)",
                    border: "1px solid var(--border)",
                    borderRadius: 8,
                    padding: 16,
                    overflow: "auto",
                    marginBottom: 24,
                  }}
                >
                  <code
                    style={{
                      fontFamily: "var(--font-mono)",
                      fontSize: 13,
                      color: "var(--fg2)",
                    }}
                  >
                    {children}
                  </code>
                </pre>
              ),
            blockquote: ({ children }) => (
              <blockquote
                style={{
                  borderLeft: "2px solid var(--accent)",
                  paddingLeft: 16,
                  marginLeft: 0,
                  marginBottom: 24,
                  color: "var(--fg3)",
                  fontStyle: "italic",
                }}
              >
                {children}
              </blockquote>
            ),
            ul: ({ children }) => (
              <ul style={{ marginBottom: 16, paddingLeft: 24 }}>{children}</ul>
            ),
            ol: ({ children }) => (
              <ol style={{ marginBottom: 16, paddingLeft: 24 }}>{children}</ol>
            ),
            li: ({ children }) => (
              <li style={{ marginBottom: 8, color: "var(--fg2)" }}>{children}</li>
            ),
            a: ({ children, href }) => (
              <a
                href={href}
                style={{ color: "var(--accent)", textDecoration: "none" }}
                target="_blank"
                rel="noopener noreferrer"
              >
                {children}
              </a>
            ),
          }}
        >
          {post.content}
        </ReactMarkdown>
      </motion.article>

      <motion.div {...fadeInUp(0.2)} style={{ marginTop: 64, paddingTop: 32, borderTop: "1px solid var(--border)" }}>
        <p style={{ fontFamily: "var(--font-mono)", fontSize: 11, color: "var(--fg3)", marginBottom: 16 }}>
          Written by {post.author}
        </p>
        <Link href="/blog">
          <span
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 6,
              fontFamily: "var(--font-mono)",
              fontSize: 11,
              color: "var(--accent)",
              cursor: "pointer",
            }}
          >
            <ArrowLeft size={14} />
            Read more writing
          </span>
        </Link>
      </motion.div>
    </div>
  );
}
