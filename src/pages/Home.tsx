import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { siteContent } from "../content";

const { hero, proofStrip, currentFocus, featuredWork, founderArc, recognition, operatingLayer, notes, about, links, brand, testimonials } = siteContent;

type FocusArea = typeof currentFocus.areas[0];
type WorkItem = typeof featuredWork[0];
type ArcStep = typeof founderArc.steps[0];
type NoteEntry = typeof notes.entries[0];

const SPRING_BASE = { type: "spring" as const, stiffness: 200, damping: 26 };
const SPRING_FAST = { type: "spring" as const, stiffness: 260, damping: 28 };
const SPRING_HERO = { type: "spring" as const, stiffness: 180, damping: 22 };

function fadeInUp(delay = 0) {
  return {
    initial: { opacity: 0, y: 24 },
    animate: { opacity: 1, y: 0 },
    transition: { ...SPRING_BASE, delay },
  };
}

function slideInLeft(delay = 0) {
  return {
    initial: { opacity: 0, x: -32, y: 8 },
    animate: { opacity: 1, x: 0, y: 0 },
    transition: { ...SPRING_HERO, delay },
  };
}

function scaleUp(delay = 0) {
  return {
    initial: { opacity: 0, scale: 0.93, y: 10 },
    animate: { opacity: 1, scale: 1, y: 0 },
    transition: { ...SPRING_FAST, delay },
  };
}

function Label({ children }: { children: string }) {
  return (
    <div style={{
      fontFamily: "var(--font-mono)",
      fontSize: 10, letterSpacing: "0.18em",
      color: "var(--accent)", marginBottom: 24,
    }}>{children.toUpperCase()}</div>
  );
}

function SectionHeading({ children, style = {} }: { children: string; style?: React.CSSProperties }) {
  return (
    <h2 style={{
      fontFamily: "var(--font-head)",
      fontSize: "clamp(26px, 3.5vw, 38px)",
      fontWeight: 700, letterSpacing: "-0.03em",
      color: "var(--fg)", lineHeight: 1.1, ...style,
    }}>{children}</h2>
  );
}

function Divider() {
  return <div style={{ width: "100%", height: 1, background: "var(--border)" }} />;
}

function InViewBlock({ children, delay = 0, style = {}, from = "up" }: {
  children: React.ReactNode; delay?: number; style?: React.CSSProperties; from?: "up" | "left" | "right";
}) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-64px" });
  const init = from === "left" ? { opacity: 0, x: -20, y: 0 } : from === "right" ? { opacity: 0, x: 20, y: 0 } : { opacity: 0, y: 28, x: 0 };
  return (
    <motion.div ref={ref}
      initial={init}
      animate={inView ? { opacity: 1, x: 0, y: 0 } : {}}
      transition={{ ...SPRING_BASE, delay }}
      style={style}
    >{children}</motion.div>
  );
}

function FocusCard({ area, index }: { area: FocusArea; index: number }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-40px" });
  return (
    <motion.div ref={ref}
      initial={{ opacity: 0, y: 16, scale: 0.97 }}
      animate={inView ? { opacity: 1, y: 0, scale: 1 } : {}}
      transition={{ ...SPRING_FAST, delay: index * 0.07 }}
      style={{ background: "var(--bg2)", padding: "28px 26px 26px", transition: "background 0.15s" }}
      onMouseEnter={e => (e.currentTarget.style.background = "var(--bg3)")}
      onMouseLeave={e => (e.currentTarget.style.background = "var(--bg2)")}
    >
      <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 14 }}>
        <div style={{ width: 4, height: 4, borderRadius: "50%", background: "var(--accent)", flexShrink: 0 }} />
        <span style={{ fontFamily: "var(--font-head)", fontSize: 13, fontWeight: 600, color: "var(--fg)", letterSpacing: "-0.01em" }}>{area.title}</span>
      </div>
      <p style={{ fontSize: 13, color: "var(--fg3)", lineHeight: 1.7 }}>{area.description}</p>
    </motion.div>
  );
}

function WorkCard({ work, isLast }: { work: WorkItem; isLast: boolean }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-40px" });
  return (
    <motion.div ref={ref}
      initial={{ opacity: 0, x: -14 }}
      animate={inView ? { opacity: 1, x: 0 } : {}}
      transition={{ ...SPRING_BASE }}
      className="work-card-grid"
      style={{
        background: "var(--bg2)",
        padding: "36px 32px",
        transition: "background 0.15s",
        borderBottom: isLast ? "none" : "1px solid var(--border)",
      }}
      onMouseEnter={e => (e.currentTarget.style.background = "var(--bg3)")}
      onMouseLeave={e => (e.currentTarget.style.background = "var(--bg2)")}
    >
      <div>
        <div style={{ fontFamily: "var(--font-mono)", fontSize: 9, letterSpacing: "0.1em", color: "var(--fg3)", marginBottom: 10 }}>{work.timeframe}</div>
        <h3 style={{ fontFamily: "var(--font-head)", fontSize: 18, fontWeight: 600, letterSpacing: "-0.02em", color: "var(--fg)", marginBottom: 8 }}>{work.title}</h3>
        <p style={{ fontFamily: "var(--font-mono)", fontSize: 10, color: "var(--accent)", letterSpacing: "0.04em", opacity: 0.9 }}>{work.role}</p>
      </div>
      <div>
        <p style={{ fontSize: 14, color: "var(--fg2)", lineHeight: 1.7, marginBottom: 20 }}>{work.summary}</p>
        <div className="work-card-detail">
          <div>
            <div style={{ fontFamily: "var(--font-mono)", fontSize: 9, letterSpacing: "0.1em", color: "var(--fg3)", marginBottom: 6 }}>WHAT IT WAS</div>
            <p style={{ fontSize: 12.5, color: "var(--fg3)", lineHeight: 1.65 }}>{work.whatItWas}</p>
          </div>
          <div>
            <div style={{ fontFamily: "var(--font-mono)", fontSize: 9, letterSpacing: "0.1em", color: "var(--fg3)", marginBottom: 6 }}>WHY IT MATTERED</div>
            <p style={{ fontSize: 12.5, color: "var(--fg3)", lineHeight: 1.65 }}>{work.whyItMattered}</p>
          </div>
        </div>
        <div style={{ display: "flex", flexWrap: "wrap", gap: 5, marginBottom: 16 }}>
          {work.themes.map(t => (
            <span key={t} style={{
              fontFamily: "var(--font-mono)", fontSize: 9, letterSpacing: "0.06em",
              color: "var(--fg3)", background: "var(--bg)", border: "1px solid var(--border)",
              padding: "3px 8px", borderRadius: 4,
            }}>{t}</span>
          ))}
        </div>
        <div style={{ borderLeft: "2px solid var(--accent)", paddingLeft: 14 }}>
          <p style={{ fontSize: 12.5, color: "var(--fg2)", lineHeight: 1.65, fontStyle: "italic" }}>{work.outcome}</p>
        </div>
      </div>
    </motion.div>
  );
}

function ArcStepItem({ step, index, isLast }: { step: ArcStep; index: number; isLast: boolean }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-40px" });
  return (
    <motion.div ref={ref}
      initial={{ opacity: 0, x: -20 }}
      animate={inView ? { opacity: 1, x: 0 } : {}}
      transition={{ ...SPRING_BASE, delay: index * 0.08 }}
      className="arc-step-row"
      style={{ paddingBottom: isLast ? 0 : 40, position: "relative" }}
    >
      <div className="arc-period">
        <div style={{ fontFamily: "var(--font-mono)", fontSize: 10, letterSpacing: "0.06em", color: isLast ? "var(--accent)" : "var(--fg3)", lineHeight: 1.4 }}>{step.period}</div>
      </div>
      <div className="arc-content">
        <div className="arc-dot" style={{
          background: isLast ? "var(--accent)" : "var(--bg3)",
          border: `1px solid ${isLast ? "var(--accent)" : "var(--border2)"}`,
        }} />
        <h3 style={{ fontFamily: "var(--font-head)", fontSize: 16, fontWeight: 600, letterSpacing: "-0.01em", color: "var(--fg)", marginBottom: 8 }}>{step.title}</h3>
        <p style={{ fontSize: 13.5, color: "var(--fg3)", lineHeight: 1.7, maxWidth: 580 }}>{step.body}</p>
      </div>
    </motion.div>
  );
}

function NoteCard({ entry, index }: { entry: NoteEntry; index: number }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-40px" });
  return (
    <motion.div ref={ref}
      initial={{ opacity: 0, y: 14, scale: 0.97 }}
      animate={inView ? { opacity: 1, y: 0, scale: 1 } : {}}
      transition={{ ...SPRING_FAST, delay: index * 0.08 }}
      style={{ background: "var(--bg2)", padding: "28px 26px", transition: "background 0.15s" }}
      onMouseEnter={e => (e.currentTarget.style.background = "var(--bg3)")}
      onMouseLeave={e => (e.currentTarget.style.background = "var(--bg2)")}
    >
      <div style={{ fontFamily: "var(--font-mono)", fontSize: 9, letterSpacing: "0.1em", color: "var(--fg3)", marginBottom: 14 }}>{entry.date}</div>
      <h3 style={{ fontFamily: "var(--font-head)", fontSize: 15, fontWeight: 600, letterSpacing: "-0.01em", color: "var(--fg)", marginBottom: 12 }}>{entry.title}</h3>
      <p style={{ fontSize: 13, color: "var(--fg3)", lineHeight: 1.7 }}>{entry.excerpt}</p>
    </motion.div>
  );
}

function ProofStrip() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-40px" });
  return (
    <div ref={ref} className="proof-grid">
      {proofStrip.map((item, i) => (
        <motion.div key={item.label}
          initial={{ opacity: 0, y: 20, scale: 0.96 }}
          animate={inView ? { opacity: 1, y: 0, scale: 1 } : {}}
          transition={{ ...SPRING_FAST, delay: i * 0.1 }}
          className="proof-item"
        >
          <div style={{ fontFamily: "var(--font-mono)", fontSize: 9, letterSpacing: "0.12em", color: "var(--fg3)", marginBottom: 8 }}>{item.label.toUpperCase()}</div>
          <div style={{ fontFamily: "var(--font-head)", fontSize: 20, fontWeight: 700, color: "var(--fg)", letterSpacing: "-0.02em", marginBottom: 8 }}>{item.value}</div>
          <div style={{ fontSize: 12, color: "var(--fg3)", lineHeight: 1.6 }}>{item.detail}</div>
        </motion.div>
      ))}
    </div>
  );
}

type FormState = "idle" | "sending" | "sent" | "error";

function ContactForm({ email }: { email: string }) {
  const [name, setName] = useState("");
  const [senderEmail, setSenderEmail] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState<FormState>("idle");

  const inputStyle: React.CSSProperties = {
    width: "100%", boxSizing: "border-box",
    background: "var(--bg3)", border: "1px solid var(--border)",
    borderRadius: 7, padding: "11px 14px",
    fontFamily: "var(--font-body)", fontSize: 13, color: "var(--fg)",
    outline: "none", transition: "border-color 0.15s",
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !senderEmail || !message) return;
    setStatus("sending");
    try {
      const res = await fetch(`https://formsubmit.co/ajax/${email}`, {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({ name, email: senderEmail, message }),
      });
      if (res.ok) { setStatus("sent"); setName(""); setSenderEmail(""); setMessage(""); }
      else setStatus("error");
    } catch {
      setStatus("error");
    }
  };

  if (status === "sent") {
    return (
      <motion.div initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} style={{ textAlign: "center", padding: "24px 0" }}>
        <div style={{ fontFamily: "var(--font-mono)", fontSize: 10, letterSpacing: "0.12em", color: "var(--accent)", marginBottom: 10 }}>SENT</div>
        <p style={{ fontSize: 14, color: "var(--fg2)" }}>Message received. I'll get back to you.</p>
      </motion.div>
    );
  }

  return (
    <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: 12, width: "100%", maxWidth: 480 }}>
      <div className="form-name-row">
        <input
          placeholder="Name" required value={name} onChange={e => setName(e.target.value)}
          style={inputStyle}
          onFocus={e => (e.currentTarget.style.borderColor = "var(--fg3)")}
          onBlur={e => (e.currentTarget.style.borderColor = "var(--border)")}
        />
        <input
          type="email" placeholder="Email" required value={senderEmail} onChange={e => setSenderEmail(e.target.value)}
          style={inputStyle}
          onFocus={e => (e.currentTarget.style.borderColor = "var(--fg3)")}
          onBlur={e => (e.currentTarget.style.borderColor = "var(--border)")}
        />
      </div>
      <textarea
        placeholder="What are you building?" required value={message} onChange={e => setMessage(e.target.value)}
        rows={4}
        style={{ ...inputStyle, resize: "vertical", fontFamily: "var(--font-body)" }}
        onFocus={e => (e.currentTarget.style.borderColor = "var(--fg3)")}
        onBlur={e => (e.currentTarget.style.borderColor = "var(--border)")}
      />
      <button type="submit" disabled={status === "sending"} style={{
        fontFamily: "var(--font-body)", fontSize: 13, fontWeight: 600,
        background: "var(--accent)", color: "var(--bg)",
        padding: "13px 32px", borderRadius: 7, cursor: status === "sending" ? "wait" : "pointer",
        border: "none", transition: "opacity 0.15s", letterSpacing: "0.01em",
        opacity: status === "sending" ? 0.6 : 1, alignSelf: "flex-start",
      }}>
        {status === "sending" ? "Sending..." : "Send message"}
      </button>
      {status === "error" && (
        <p style={{ fontFamily: "var(--font-mono)", fontSize: 10, color: "#e57373", letterSpacing: "0.06em" }}>
          Something went wrong — try emailing directly at {email}
        </p>
      )}
    </form>
  );
}

export function Home() {
  return (
    <div className="page-pad" style={{ maxWidth: 1180, margin: "0 auto" }}>

      {/* ═══ HERO ═══ */}
      <section style={{ minHeight: "100vh", display: "flex", flexDirection: "column", justifyContent: "center", paddingTop: 80, paddingBottom: 80 }}>
        <motion.p {...slideInLeft(0.05)} style={{ fontFamily: "var(--font-mono)", fontSize: 11, letterSpacing: "0.14em", color: "var(--fg3)", marginBottom: 36 }}>
          {hero.eyebrow}
        </motion.p>

        <motion.h1 {...slideInLeft(0.15)} style={{
          fontFamily: "var(--font-head)",
          fontSize: "clamp(36px, 5.8vw, 72px)",
          fontWeight: 700, lineHeight: 1.0,
          letterSpacing: "-0.04em", color: "var(--fg)",
          marginBottom: 36, whiteSpace: "pre-line",
        }}>{hero.headline}</motion.h1>

        <motion.p {...fadeInUp(0.32)} style={{
          fontSize: "clamp(17px, 1.8vw, 20px)",
          fontWeight: 400, color: "var(--fg2)",
          maxWidth: 540, lineHeight: 1.5,
          marginBottom: 20, letterSpacing: "-0.01em",
        }}>{hero.subheadline}</motion.p>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.9, ease: "easeOut", delay: 0.46 }}
          style={{ fontSize: 14, color: "var(--fg3)", maxWidth: 560, lineHeight: 1.8, marginBottom: 52 }}
        >
          {hero.intro}
        </motion.p>

        <motion.div {...scaleUp(0.58)} style={{ display: "flex", flexWrap: "wrap", gap: 10 }}>
          <a href="#work" onClick={e => { e.preventDefault(); document.getElementById("work")?.scrollIntoView({ behavior: "smooth" }); }} style={{
            fontFamily: "var(--font-body)", fontSize: 13, fontWeight: 600,
            background: "var(--accent)", color: "var(--bg)",
            padding: "12px 28px", borderRadius: 7, cursor: "pointer", letterSpacing: "0.01em",
            transition: "opacity 0.15s",
          }}
            onMouseEnter={e => (e.currentTarget.style.opacity = "0.85")}
            onMouseLeave={e => (e.currentTarget.style.opacity = "1")}
          >{hero.primaryCta.label}</a>
          <a href="#current-focus" onClick={e => { e.preventDefault(); document.getElementById("current-focus")?.scrollIntoView({ behavior: "smooth" }); }} style={{
            fontFamily: "var(--font-body)", fontSize: 13, fontWeight: 500,
            color: "var(--fg2)", padding: "12px 28px", borderRadius: 7, cursor: "pointer",
            border: "1px solid var(--border2)", transition: "border-color 0.15s, color 0.15s",
          }}
            onMouseEnter={e => { const el = e.currentTarget as HTMLElement; el.style.borderColor = "var(--fg3)"; el.style.color = "var(--fg)"; }}
            onMouseLeave={e => { const el = e.currentTarget as HTMLElement; el.style.borderColor = "var(--border2)"; el.style.color = "var(--fg2)"; }}
          >{hero.secondaryCta.label}</a>
        </motion.div>
      </section>

      <Divider />

      {/* ═══ PROOF STRIP ═══ */}
      <section style={{ padding: "56px 0" }}>
        <ProofStrip />
      </section>

      <Divider />

      {/* ═══ CURRENT FRONTIER ═══ */}
      <section id="current-focus" style={{ paddingTop: 88, paddingBottom: 88 }}>
        <InViewBlock from="left" style={{ marginBottom: 52 }}>
          <Label>Current frontier</Label>
          <div className="section-head-2col" style={{ gap: 48 }}>
            <SectionHeading>{currentFocus.title}</SectionHeading>
            <p style={{ fontSize: 14, color: "var(--fg3)", lineHeight: 1.8, paddingTop: 4 }}>{currentFocus.intro}</p>
          </div>
        </InViewBlock>
        <div className="three-col-grid" style={{ border: "1px solid var(--border)", borderRadius: 10, overflow: "hidden" }}>
          {currentFocus.areas.map((area, i) => <FocusCard key={area.title} area={area} index={i} />)}
        </div>
      </section>

      <Divider />

      {/* ═══ SELECTED WORK ═══ */}
      <section id="work" style={{ paddingTop: 88, paddingBottom: 88 }}>
        <InViewBlock from="left" style={{ marginBottom: 52 }}>
          <Label>Selected work</Label>
          <SectionHeading>Seven chapters of building.</SectionHeading>
        </InViewBlock>
        <div style={{ border: "1px solid var(--border)", borderRadius: 10, overflow: "hidden" }}>
          {featuredWork.map((work, i) => <WorkCard key={work.slug} work={work} isLast={i === featuredWork.length - 1} />)}
        </div>
      </section>

      <Divider />

      {/* ═══ FOUNDER ARC ═══ */}
      <section id="arc" style={{ paddingTop: 88, paddingBottom: 88 }}>
        <InViewBlock from="left" style={{ marginBottom: 56 }}>
          <Label>Founder arc</Label>
          <SectionHeading>{founderArc.title}</SectionHeading>
        </InViewBlock>
        <div style={{ position: "relative" }}>
          <div className="arc-timeline-line" />
          {founderArc.steps.map((step, i) => (
            <ArcStepItem key={step.title} step={step} index={i} isLast={i === founderArc.steps.length - 1} />
          ))}
        </div>
      </section>

      <Divider />

      {/* ═══ RECOGNITION ═══ */}
      <section style={{ paddingTop: 72, paddingBottom: 72 }}>
        <InViewBlock from="left" style={{ marginBottom: 40 }}>
          <Label>Recognition</Label>
          <div className="section-head-2col" style={{ gap: 32 }}>
            <SectionHeading>{recognition.title}</SectionHeading>
            <p style={{ fontSize: 13.5, color: "var(--fg3)", lineHeight: 1.7, paddingTop: 4 }}>{recognition.intro}</p>
          </div>
        </InViewBlock>
        <InViewBlock>
          <div className="three-col-grid" style={{ border: "1px solid var(--border)", borderRadius: 10, overflow: "hidden" }}>
            {recognition.items.map(item => (
              <div key={item.title} style={{ background: "var(--bg2)", padding: "28px 24px" }}>
                <h4 style={{ fontFamily: "var(--font-head)", fontSize: 14, fontWeight: 600, color: "var(--fg)", marginBottom: 10, letterSpacing: "-0.01em" }}>{item.title}</h4>
                <p style={{ fontSize: 12.5, color: "var(--fg3)", lineHeight: 1.65 }}>{item.detail}</p>
              </div>
            ))}
          </div>
        </InViewBlock>
      </section>

      <Divider />

      {/* ═══ OPERATING LAYER ═══ */}
      <section style={{ paddingTop: 88, paddingBottom: 88 }}>
        <InViewBlock from="left" style={{ marginBottom: 52 }}>
          <Label>Operating layer</Label>
          <div className="section-head-2col" style={{ gap: 40 }}>
            <SectionHeading>{operatingLayer.title}</SectionHeading>
            <p style={{ fontSize: 13.5, color: "var(--fg3)", lineHeight: 1.8, paddingTop: 4 }}>{operatingLayer.intro}</p>
          </div>
        </InViewBlock>
        <InViewBlock>
          <div style={{ border: "1px solid var(--border)", borderRadius: 10, overflow: "hidden" }}>
            <div className="four-col-grid">
              {operatingLayer.units.map(unit => {
                const statusColor = unit.status === "Active" ? "#4ade80" : unit.status === "In motion" ? "var(--accent)" : "var(--fg3)";
                return (
                  <div key={unit.name} style={{ background: "var(--bg2)", padding: "24px 22px" }}>
                    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: 12 }}>
                      <span style={{ fontFamily: "var(--font-head)", fontSize: 14, fontWeight: 600, color: "var(--fg)" }}>{unit.name}</span>
                      <span style={{ fontFamily: "var(--font-mono)", fontSize: 8, letterSpacing: "0.1em", color: statusColor }}>{unit.status.toUpperCase()}</span>
                    </div>
                    <p style={{ fontSize: 12, color: "var(--fg3)", lineHeight: 1.65 }}>{unit.detail}</p>
                  </div>
                );
              })}
            </div>
            <div className="four-col-grid" style={{ background: "#0f0f0f", borderTop: "1px solid var(--border)", padding: "16px 0" }}>
              {operatingLayer.metrics.map((m, i) => (
                <div key={m.label} style={{ padding: "0 22px", borderRight: i < 3 ? "1px solid var(--border)" : "none" }}>
                  <div style={{ fontFamily: "var(--font-mono)", fontSize: 9, color: "var(--fg3)", letterSpacing: "0.1em", marginBottom: 4 }}>{m.label.toUpperCase()}</div>
                  <div style={{ fontFamily: "var(--font-head)", fontSize: 13, color: "var(--fg)", fontWeight: 600 }}>{m.value}</div>
                </div>
              ))}
            </div>
          </div>
        </InViewBlock>
      </section>

      <Divider />

      {/* ═══ FIELD NOTES ═══ */}
      <section id="notes" style={{ paddingTop: 88, paddingBottom: 88 }}>
        <InViewBlock from="left" style={{ marginBottom: 52 }}>
          <Label>Field notes</Label>
          <div className="section-head-2col" style={{ gap: 40 }}>
            <SectionHeading>{notes.title}</SectionHeading>
            <p style={{ fontSize: 13.5, color: "var(--fg3)", lineHeight: 1.8, paddingTop: 4 }}>{notes.intro}</p>
          </div>
        </InViewBlock>
        <div className="two-col-grid" style={{ border: "1px solid var(--border)", borderRadius: 10, overflow: "hidden" }}>
          {notes.entries.map((entry, i) => <NoteCard key={entry.title} entry={entry} index={i} />)}
        </div>
      </section>

      <Divider />

      {/* ═══ ABOUT ═══ */}
      <section id="about" style={{ paddingTop: 88, paddingBottom: 88 }}>
        <InViewBlock from="left" style={{ marginBottom: 52 }}>
          <Label>About</Label>
        </InViewBlock>
        <div className="section-head-2col" style={{ gap: 64 }}>
          <InViewBlock>
            {about.paragraphs.map((p, i) => (
              <p key={i} style={{ fontSize: 15, color: i === 0 ? "var(--fg)" : "var(--fg2)", lineHeight: 1.8, marginBottom: 20, fontWeight: i === 0 ? 500 : 400 }}>{p}</p>
            ))}
          </InViewBlock>
          <InViewBlock delay={0.15}>
            <div style={{ border: "1px solid var(--border)", borderRadius: 10, overflow: "hidden", marginBottom: 16 }}>
              {[
                { label: "Path", value: "Self-taught, non-traditional" },
                { label: "Bias", value: "Execution over posturing" },
                { label: "Lens", value: "Systems thinking, adversarial instincts" },
                { label: "Now", value: "Making intelligence operational" },
                { label: "Location", value: brand.location },
              ].map((row, i, arr) => (
                <div key={row.label} style={{
                  background: "var(--bg2)", padding: "14px 20px",
                  display: "flex", justifyContent: "space-between", alignItems: "center", gap: 16,
                  borderBottom: i < arr.length - 1 ? "1px solid var(--border)" : "none",
                }}>
                  <span style={{ fontFamily: "var(--font-mono)", fontSize: 10, letterSpacing: "0.08em", color: "var(--fg3)" }}>{row.label.toUpperCase()}</span>
                  <span style={{ fontSize: 13, color: "var(--fg)", fontWeight: 500, textAlign: "right" }}>{row.value}</span>
                </div>
              ))}
            </div>
          </InViewBlock>
        </div>
      </section>

      <Divider />

      {/* ═══ TESTIMONIALS ═══ */}
      <section style={{ paddingTop: 88, paddingBottom: 88 }}>
        <InViewBlock from="left" style={{ marginBottom: 52 }}>
          <Label>What people say</Label>
          <SectionHeading>Words from collaborators.</SectionHeading>
        </InViewBlock>
        <div className="three-col-grid" style={{ border: "1px solid var(--border)", borderRadius: 10, overflow: "hidden" }}>
          {testimonials.map((t, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ ...SPRING_BASE, delay: i * 0.1 }}
              style={{
                background: "var(--bg2)",
                padding: "32px 28px",
                borderRight: i < testimonials.length - 1 ? "1px solid var(--border)" : "none",
              }}
            >
              <p
                style={{
                  fontSize: 15,
                  color: "var(--fg2)",
                  lineHeight: 1.7,
                  marginBottom: 24,
                  fontStyle: "italic",
                }}
              >
                "{t.quote}"
              </p>
              <div>
                <div
                  style={{
                    fontFamily: "var(--font-head)",
                    fontSize: 14,
                    fontWeight: 600,
                    color: "var(--fg)",
                    marginBottom: 4,
                  }}
                >
                  {t.author}
                </div>
                <div
                  style={{
                    fontFamily: "var(--font-mono)",
                    fontSize: 10,
                    letterSpacing: "0.06em",
                    color: "var(--fg3)",
                  }}
                >
                  {t.role} · {t.context}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      <Divider />

      {/* ═══ CONTACT CTA ═══ */}
      <section style={{ paddingTop: 88, paddingBottom: 100 }}>
        <InViewBlock>
          <div className="contact-cta-card" style={{
            background: "var(--bg2)", border: "1px solid var(--border)", borderRadius: 12,
            display: "flex", flexDirection: "column", alignItems: "center", textAlign: "center",
          }}>
            <div style={{ fontFamily: "var(--font-mono)", fontSize: 10, letterSpacing: "0.16em", color: "var(--accent)", marginBottom: 20 }}>GET IN TOUCH</div>
            <h2 style={{
              fontFamily: "var(--font-head)", fontSize: "clamp(26px, 3.5vw, 42px)",
              fontWeight: 700, letterSpacing: "-0.03em", color: "var(--fg)",
              marginBottom: 16, maxWidth: 560,
            }}>
              Working on something hard?
            </h2>
            <p style={{ fontSize: 15, color: "var(--fg3)", lineHeight: 1.8, maxWidth: 480, marginBottom: 36 }}>
              If you're building in AI systems, thinking about security and agentic infrastructure, or looking for someone with range — reach out.
            </p>
            <ContactForm email={links.email} />
          </div>
        </InViewBlock>
      </section>

    </div>
  );
}
