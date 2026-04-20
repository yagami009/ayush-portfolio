import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { siteContent } from "../content";

const { notes } = siteContent;

export function Writing() {
  const [query, setQuery] = useState("");
  const [expanded, setExpanded] = useState<string | null>(null);

  const filtered = notes.entries.filter(e =>
    query === "" ||
    e.title.toLowerCase().includes(query.toLowerCase()) ||
    e.excerpt.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div className="page-pad" style={{ maxWidth: 1180, margin: "0 auto" }}>
      <section style={{ paddingTop: 80, paddingBottom: 96 }}>
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          style={{ marginBottom: 48 }}
        >
          <div style={{ fontFamily: "var(--font-mono)", fontSize: 10, letterSpacing: "0.16em", color: "var(--accent)", marginBottom: 16 }}>FIELD NOTES</div>
          <div style={{ display: "grid", gridTemplateColumns: "1fr auto", gap: 32, alignItems: "end", flexWrap: "wrap" }}>
            <div>
              <h1 style={{ fontFamily: "var(--font-head)", fontSize: "clamp(32px, 5vw, 48px)", fontWeight: 700, letterSpacing: "-0.03em", color: "var(--fg)", marginBottom: 12 }}>
                {notes.title}
              </h1>
              <p style={{ fontSize: 15, color: "var(--fg2)", maxWidth: 480, lineHeight: 1.65 }}>{notes.intro}</p>
            </div>
            <div style={{ fontFamily: "var(--font-mono)", fontSize: 11, color: "var(--fg3)", letterSpacing: "0.06em", paddingBottom: 4 }}>
              {filtered.length} / {notes.entries.length} notes
            </div>
          </div>
        </motion.div>

        {/* Search */}
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.1 }} style={{ marginBottom: 24 }}>
          <input
            type="text"
            placeholder="Search notes..."
            value={query}
            onChange={e => setQuery(e.target.value)}
            style={{
              width: "100%", boxSizing: "border-box",
              background: "var(--bg2)", border: "1px solid var(--border)",
              borderRadius: 8, padding: "12px 16px",
              fontFamily: "var(--font-body)", fontSize: 13, color: "var(--fg)",
              outline: "none", transition: "border-color 0.15s",
            }}
            onFocus={e => (e.currentTarget.style.borderColor = "var(--fg3)")}
            onBlur={e => (e.currentTarget.style.borderColor = "var(--border)")}
          />
        </motion.div>

        {/* Entries */}
        <div style={{ display: "flex", flexDirection: "column", gap: 1, background: "var(--border)", border: "1px solid var(--border)", borderRadius: 10, overflow: "hidden" }}>
          <AnimatePresence mode="popLayout">
            {filtered.length === 0 ? (
              <motion.div
                key="empty"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                style={{ background: "var(--bg2)", padding: "48px 32px", textAlign: "center", color: "var(--fg3)", fontFamily: "var(--font-mono)", fontSize: 11 }}
              >
                No notes match "{query}"
              </motion.div>
            ) : filtered.map((entry) => (
              <motion.div
                key={entry.title}
                layout
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.2 }}
                style={{ background: "var(--bg2)", transition: "background 0.15s" }}
                onMouseEnter={e => (e.currentTarget.style.background = "var(--bg3)")}
                onMouseLeave={e => (e.currentTarget.style.background = "var(--bg2)")}
              >
                <button
                  onClick={() => setExpanded(expanded === entry.title ? null : entry.title)}
                  style={{
                    width: "100%", textAlign: "left", background: "none", border: "none",
                    padding: "28px 32px", cursor: "pointer",
                    display: "grid", gridTemplateColumns: "1fr auto", gap: 16, alignItems: "start",
                  }}
                >
                  <div>
                    <div style={{ fontFamily: "var(--font-mono)", fontSize: 10, letterSpacing: "0.08em", color: "var(--fg3)", marginBottom: 10 }}>{entry.date}</div>
                    <h2 style={{ fontFamily: "var(--font-head)", fontSize: 17, fontWeight: 600, letterSpacing: "-0.02em", color: "var(--fg)", marginBottom: 0 }}>
                      {entry.title}
                    </h2>
                  </div>
                  <span style={{
                    fontFamily: "var(--font-mono)", fontSize: 12, color: "var(--fg3)",
                    transition: "transform 0.2s", display: "inline-block",
                    transform: expanded === entry.title ? "rotate(45deg)" : "rotate(0deg)",
                    marginTop: 28,
                  }}>+</span>
                </button>
                <AnimatePresence>
                  {expanded === entry.title && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25 }}
                      style={{ overflow: "hidden" }}
                    >
                      <p style={{ fontSize: 14, color: "var(--fg2)", lineHeight: 1.8, maxWidth: 640, padding: "0 32px 28px" }}>
                        {entry.excerpt}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* Note */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.35 }}
          style={{ marginTop: 40, padding: "24px 28px", border: "1px solid var(--border)", borderRadius: 8, background: "var(--bg2)" }}
        >
          <div style={{ fontFamily: "var(--font-mono)", fontSize: 9, letterSpacing: "0.12em", color: "var(--fg3)", marginBottom: 8 }}>NOTE</div>
          <p style={{ fontSize: 13, color: "var(--fg3)", lineHeight: 1.65 }}>
            Writing is queued. The research exists — drafts are being shaped into public versions. They ship when they're ready, not before.
          </p>
        </motion.div>
      </section>
    </div>
  );
}
