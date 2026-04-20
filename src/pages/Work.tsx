import { useState, useRef } from "react";
import { Link } from "wouter";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { siteContent } from "../content";

const { featuredWork } = siteContent;

const allThemes = Array.from(new Set(featuredWork.flatMap(w => w.themes))).sort();

function WorkRow({ work, isLast }: { work: typeof featuredWork[0]; isLast: boolean }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-40px" });

  const statusLabel =
    work.timeframe === "Current" || work.timeframe === "In progress" ? "ACTIVE"
    : work.timeframe === "Recent" ? "RECENT"
    : "SHIPPED";
  const statusColor = statusLabel === "ACTIVE" ? "var(--accent)" : "var(--fg3)";

  return (
    <motion.div ref={ref}
      initial={{ opacity: 0, y: 12 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.45 }}
      className="work-row-inner"
      style={{
        background: "var(--bg2)", padding: "28px 24px",
        borderBottom: isLast ? "none" : "1px solid var(--border)",
        transition: "background 0.15s",
        cursor: "pointer",
      }}
      onMouseEnter={e => (e.currentTarget.style.background = "var(--bg3)")}
      onMouseLeave={e => (e.currentTarget.style.background = "var(--bg2)")}
      onClick={() => window.location.href = `/work/${work.slug}`}
    >
      <div>
        <div style={{ fontFamily: "var(--font-mono)", fontSize: 9, letterSpacing: "0.1em", color: "var(--fg3)", marginBottom: 8 }}>{work.timeframe}</div>
        <h3 style={{ fontFamily: "var(--font-head)", fontSize: 15, fontWeight: 600, letterSpacing: "-0.015em", color: "var(--fg)", marginBottom: 6 }}>{work.title}</h3>
        <div style={{ fontFamily: "var(--font-mono)", fontSize: 9, color: "var(--accent)", letterSpacing: "0.04em", opacity: 0.8 }}>{work.role}</div>
      </div>
      <div>
        <p style={{ fontSize: 13.5, color: "var(--fg2)", lineHeight: 1.7, marginBottom: 14 }}>{work.summary}</p>
        <div style={{ display: "flex", flexWrap: "wrap", gap: 5 }}>
          {work.themes.slice(0, 4).map(t => (
            <span key={t} style={{
              fontFamily: "var(--font-mono)", fontSize: 9, letterSpacing: "0.06em",
              color: "var(--fg3)", background: "var(--bg)", border: "1px solid var(--border)",
              padding: "3px 8px", borderRadius: 4,
            }}>{t}</span>
          ))}
          {work.themes.length > 4 && (
            <span style={{ fontFamily: "var(--font-mono)", fontSize: 9, color: "var(--fg3)", padding: "3px 0" }}>+{work.themes.length - 4}</span>
          )}
        </div>
      </div>
      <div style={{ display: "flex", flexDirection: "column", alignItems: "flex-end", gap: 10, paddingTop: 2 }}>
        <span style={{
          fontFamily: "var(--font-mono)", fontSize: 9, letterSpacing: "0.1em",
          color: statusColor, border: `1px solid ${statusColor}`,
          padding: "4px 10px", borderRadius: 4,
          background: statusLabel === "ACTIVE" ? "var(--accent2)" : "transparent",
          whiteSpace: "nowrap",
        }}>{statusLabel}</span>
        <Link
          href={`/work/${work.slug}`}
          onClick={e => e.stopPropagation()}
          style={{
            fontFamily: "var(--font-mono)", fontSize: 9, letterSpacing: "0.08em",
            color: "var(--fg3)", transition: "color 0.15s", whiteSpace: "nowrap",
          }}
          onMouseEnter={e => (e.currentTarget.style.color = "var(--accent)")}
          onMouseLeave={e => (e.currentTarget.style.color = "var(--fg3)")}
        >VIEW →</Link>
      </div>
    </motion.div>
  );
}

export function Work() {
  const [activeFilter, setActiveFilter] = useState<string | null>(null);

  const filtered = activeFilter
    ? featuredWork.filter(w => w.themes.includes(activeFilter))
    : featuredWork;

  return (
    <div className="page-pad" style={{ maxWidth: 1180, margin: "0 auto" }}>
      <section style={{ paddingTop: 80, paddingBottom: 96 }}>
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          style={{ marginBottom: 48 }}
        >
          <div style={{ fontFamily: "var(--font-mono)", fontSize: 10, letterSpacing: "0.16em", color: "var(--accent)", marginBottom: 16 }}>WORK</div>
          <h1 style={{ fontFamily: "var(--font-head)", fontSize: "clamp(32px, 5vw, 52px)", fontWeight: 700, letterSpacing: "-0.03em", color: "var(--fg)", marginBottom: 16 }}>
            Selected projects
          </h1>
          <p style={{ fontSize: 15, color: "var(--fg3)", maxWidth: 520, lineHeight: 1.7 }}>
            A mix of shipped systems, active builds, and ongoing research. Most of the real work isn't public yet.
          </p>
        </motion.div>

        {/* Filter chips */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.15 }}
          className="chips-row" style={{ marginBottom: 28 }}
        >
          <button
            onClick={() => setActiveFilter(null)}
            style={{
              fontFamily: "var(--font-mono)", fontSize: 9, letterSpacing: "0.08em",
              padding: "5px 12px", borderRadius: 5, border: "1px solid",
              borderColor: activeFilter === null ? "var(--accent)" : "var(--border)",
              color: activeFilter === null ? "var(--accent)" : "var(--fg3)",
              background: activeFilter === null ? "var(--accent2)" : "transparent",
              cursor: "pointer", transition: "all 0.15s",
            }}
          >ALL</button>
          {allThemes.map(theme => (
            <button
              key={theme}
              onClick={() => setActiveFilter(activeFilter === theme ? null : theme)}
              style={{
                fontFamily: "var(--font-mono)", fontSize: 9, letterSpacing: "0.08em",
                padding: "5px 12px", borderRadius: 5, border: "1px solid",
                borderColor: activeFilter === theme ? "var(--accent)" : "var(--border)",
                color: activeFilter === theme ? "var(--accent)" : "var(--fg3)",
                background: activeFilter === theme ? "var(--accent2)" : "transparent",
                cursor: "pointer", transition: "all 0.15s",
              }}
            >{theme}</button>
          ))}
        </motion.div>

        {/* Work list */}
        <div style={{ border: "1px solid var(--border)", borderRadius: 10, overflow: "hidden" }}>
          <AnimatePresence mode="wait">
            {filtered.length === 0 ? (
              <motion.div
                key="empty"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                style={{ padding: "48px 28px", textAlign: "center", color: "var(--fg3)", fontFamily: "var(--font-mono)", fontSize: 11 }}
              >
                No work items match this filter.
              </motion.div>
            ) : (
              <motion.div key={activeFilter ?? "all"} initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.2 }}>
                {filtered.map((work, i) => (
                  <WorkRow key={work.slug} work={work} isLast={i === filtered.length - 1} />
                ))}
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {activeFilter && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} style={{ marginTop: 16, textAlign: "center" }}>
            <button
              onClick={() => setActiveFilter(null)}
              style={{
                fontFamily: "var(--font-mono)", fontSize: 9, letterSpacing: "0.08em",
                color: "var(--fg3)", background: "none", border: "none", cursor: "pointer",
                transition: "color 0.15s",
              }}
              onMouseEnter={e => (e.currentTarget.style.color = "var(--fg)")}
              onMouseLeave={e => (e.currentTarget.style.color = "var(--fg3)")}
            >CLEAR FILTER ×</button>
          </motion.div>
        )}
      </section>
    </div>
  );
}
