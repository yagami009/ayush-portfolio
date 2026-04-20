import { useParams, Link } from "wouter";
import { motion } from "framer-motion";
import { siteContent } from "../content";

const { featuredWork } = siteContent;

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5, delay },
});

export function WorkDetail() {
  const { slug } = useParams<{ slug: string }>();
  const work = featuredWork.find(w => w.slug === slug);

  if (!work) {
    return (
      <div style={{ maxWidth: 1180, margin: "0 auto", padding: "96px 36px" }}>
        <div style={{ fontFamily: "var(--font-mono)", fontSize: 10, letterSpacing: "0.14em", color: "var(--fg3)", marginBottom: 16 }}>404</div>
        <h1 style={{ fontFamily: "var(--font-head)", fontSize: 32, fontWeight: 700, color: "var(--fg)", marginBottom: 24 }}>Project not found</h1>
        <Link href="/work" style={{ fontFamily: "var(--font-mono)", fontSize: 11, color: "var(--accent)", letterSpacing: "0.08em" }}>← Back to work</Link>
      </div>
    );
  }

  const statusLabel = work.timeframe === "Current" || work.timeframe === "In progress" ? "ACTIVE" : work.timeframe === "Recent" ? "RECENT" : "SHIPPED";
  const statusColor = statusLabel === "ACTIVE" ? "var(--accent)" : "var(--fg3)";

  return (
    <div className="page-pad" style={{ maxWidth: 1180, margin: "0 auto" }}>
      <section style={{ paddingTop: 72, paddingBottom: 100 }}>

        {/* Back nav */}
        <motion.div {...fadeUp(0)} style={{ marginBottom: 52 }}>
          <Link href="/work" style={{
            display: "inline-flex", alignItems: "center", gap: 6,
            fontFamily: "var(--font-mono)", fontSize: 10, letterSpacing: "0.1em",
            color: "var(--fg3)", transition: "color 0.15s",
          }}
            onMouseEnter={e => (e.currentTarget.style.color = "var(--fg)")}
            onMouseLeave={e => (e.currentTarget.style.color = "var(--fg3)")}
          >
            ← WORK
          </Link>
        </motion.div>

        {/* Header */}
        <motion.div {...fadeUp(0.05)} style={{ marginBottom: 64, borderBottom: "1px solid var(--border)", paddingBottom: 48 }}>
          <div style={{ display: "flex", alignItems: "flex-start", justifyContent: "space-between", gap: 32, flexWrap: "wrap", marginBottom: 20 }}>
            <div>
              <div style={{ fontFamily: "var(--font-mono)", fontSize: 9, letterSpacing: "0.12em", color: "var(--fg3)", marginBottom: 12 }}>{work.timeframe}</div>
              <h1 style={{
                fontFamily: "var(--font-head)", fontSize: "clamp(32px, 5vw, 56px)",
                fontWeight: 700, letterSpacing: "-0.035em", color: "var(--fg)", marginBottom: 8,
              }}>{work.title}</h1>
              <div style={{ fontFamily: "var(--font-mono)", fontSize: 10, color: "var(--accent)", letterSpacing: "0.06em" }}>{work.role}</div>
            </div>
            <span style={{
              fontFamily: "var(--font-mono)", fontSize: 9, letterSpacing: "0.1em",
              color: statusColor, border: `1px solid ${statusColor}`,
              padding: "5px 12px", borderRadius: 4,
              background: statusLabel === "ACTIVE" ? "var(--accent2)" : "transparent",
              whiteSpace: "nowrap", alignSelf: "flex-start", marginTop: 8,
            }}>{statusLabel}</span>
          </div>
          <p style={{ fontSize: 16, color: "var(--fg2)", lineHeight: 1.75, maxWidth: 680 }}>{work.summary}</p>
        </motion.div>

        {/* Body grid */}
        <div className="section-head-2col" style={{ gap: 64, marginBottom: 64 }}>
          <motion.div {...fadeUp(0.1)}>
            <div style={{ fontFamily: "var(--font-mono)", fontSize: 9, letterSpacing: "0.12em", color: "var(--accent)", marginBottom: 16 }}>WHAT IT WAS</div>
            <p style={{ fontSize: 14.5, color: "var(--fg2)", lineHeight: 1.85 }}>{work.whatItWas}</p>
          </motion.div>
          <motion.div {...fadeUp(0.15)}>
            <div style={{ fontFamily: "var(--font-mono)", fontSize: 9, letterSpacing: "0.12em", color: "var(--accent)", marginBottom: 16 }}>WHY IT MATTERED</div>
            <p style={{ fontSize: 14.5, color: "var(--fg2)", lineHeight: 1.85 }}>{work.whyItMattered}</p>
          </motion.div>
        </div>

        {/* Outcome */}
        <motion.div {...fadeUp(0.2)} style={{
          background: "var(--bg2)", border: "1px solid var(--border)", borderRadius: 10,
          padding: "32px 36px", marginBottom: 48,
        }}>
          <div style={{ fontFamily: "var(--font-mono)", fontSize: 9, letterSpacing: "0.12em", color: "var(--accent)", marginBottom: 14 }}>OUTCOME</div>
          <p style={{ fontSize: 15, color: "var(--fg)", lineHeight: 1.8, fontWeight: 500 }}>{work.outcome}</p>
        </motion.div>

        {/* Themes */}
        <motion.div {...fadeUp(0.25)}>
          <div style={{ fontFamily: "var(--font-mono)", fontSize: 9, letterSpacing: "0.12em", color: "var(--fg3)", marginBottom: 16 }}>THEMES</div>
          <div style={{ display: "flex", flexWrap: "wrap", gap: 6 }}>
            {work.themes.map(t => (
              <span key={t} style={{
                fontFamily: "var(--font-mono)", fontSize: 10, letterSpacing: "0.06em",
                color: "var(--fg2)", background: "var(--bg2)", border: "1px solid var(--border)",
                padding: "5px 12px", borderRadius: 5,
              }}>{t}</span>
            ))}
          </div>
        </motion.div>

      </section>
    </div>
  );
}
