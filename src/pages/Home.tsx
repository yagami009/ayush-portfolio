import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { siteContent } from "../content";

const { hero, proofStrip, featuredWork, links, notes, workCategories, workArchive, skills, currently } = siteContent;

const SPRING_BASE = { type: "spring" as const, stiffness: 200, damping: 26 };
const SPRING_FAST = { type: "spring" as const, stiffness: 260, damping: 28 };

function fadeInUp(delay = 0) {
  return {
    initial: { opacity: 0, y: 24 },
    animate: { opacity: 1, y: 0 },
    transition: { ...SPRING_BASE, delay },
  };
}

function Divider() {
  return <div style={{ width: "100%", height: 1, background: "var(--border)" }} />;
}

function InViewBlock({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-64px" });
  return (
    <motion.div ref={ref}
      initial={{ opacity: 0, y: 28 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ ...SPRING_BASE, delay }}
    >{children}</motion.div>
  );
}

function ProofStrip() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-40px" });
  return (
    <div ref={ref} style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 32 }}>
      {proofStrip.map((item, i) => (
        <motion.div key={item.label}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ ...SPRING_FAST, delay: i * 0.1 }}
        >
          <div style={{ fontFamily: "var(--font-mono)", fontSize: 10, letterSpacing: "0.1em", color: "var(--fg3)", marginBottom: 8 }}>
            {item.label.toUpperCase()}
          </div>
          <div style={{ fontFamily: "var(--font-head)", fontSize: 20, fontWeight: 700, color: "var(--fg)", marginBottom: 4 }}>
            {item.value}
          </div>
          <div style={{ fontSize: 13, color: "var(--fg2)", lineHeight: 1.5 }}>{item.detail}</div>
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
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 10 }}>
        <input placeholder="Name" required value={name} onChange={e => setName(e.target.value)} style={inputStyle} />
        <input type="email" placeholder="Email" required value={senderEmail} onChange={e => setSenderEmail(e.target.value)} style={inputStyle} />
      </div>
      <textarea placeholder="What are you building?" required value={message} onChange={e => setMessage(e.target.value)} rows={4} style={{ ...inputStyle, resize: "vertical" }} />
      <button type="submit" disabled={status === "sending"} style={{
        fontFamily: "var(--font-body)", fontSize: 13, fontWeight: 600,
        background: "var(--accent)", color: "var(--bg)",
        padding: "13px 32px", borderRadius: 7, cursor: status === "sending" ? "wait" : "pointer",
        border: "none", letterSpacing: "0.01em", opacity: status === "sending" ? 0.6 : 1, alignSelf: "flex-start",
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
    <div className="page-pad" style={{ maxWidth: 960, margin: "0 auto" }}>
      {/* HERO */}
      <section style={{ minHeight: "90vh", display: "flex", flexDirection: "column", justifyContent: "center", paddingTop: 80, paddingBottom: 60 }}>
        <motion.p {...fadeInUp(0.05)} style={{ fontFamily: "var(--font-mono)", fontSize: 11, letterSpacing: "0.14em", color: "var(--fg3)", marginBottom: 32 }}>
          {hero.eyebrow}
        </motion.p>

        <motion.h1 {...fadeInUp(0.15)} style={{
          fontFamily: "var(--font-head)",
          fontSize: "clamp(32px, 5vw, 56px)",
          fontWeight: 700, lineHeight: 1.05,
          letterSpacing: "-0.03em", color: "var(--fg)",
          marginBottom: 24, whiteSpace: "pre-line",
        }}>{hero.headline}</motion.h1>

        <motion.p {...fadeInUp(0.3)} style={{
          fontSize: "clamp(16px, 1.6vw, 18px)",
          color: "var(--fg2)",
          maxWidth: 480, lineHeight: 1.6,
          marginBottom: 16,
        }}>{hero.subheadline}</motion.p>

        <motion.p {...fadeInUp(0.4)} style={{ fontSize: 14, color: "var(--fg3)", maxWidth: 520, lineHeight: 1.7, marginBottom: 40 }}>
          {hero.intro}
        </motion.p>

        <motion.div {...fadeInUp(0.5)} style={{ display: "flex", flexWrap: "wrap", gap: 10 }}>
          <a href="#work" onClick={e => { e.preventDefault(); document.getElementById("work")?.scrollIntoView({ behavior: "smooth" }); }} style={{
            fontFamily: "var(--font-body)", fontSize: 13, fontWeight: 600,
            background: "var(--accent)", color: "var(--bg)",
            padding: "11px 24px", borderRadius: 6, cursor: "pointer",
          }}>{hero.primaryCta.label}</a>
          <a href="#contact" onClick={e => { e.preventDefault(); document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" }); }} style={{
            fontFamily: "var(--font-body)", fontSize: 13, fontWeight: 500,
            color: "var(--fg2)", padding: "11px 24px", borderRadius: 6, cursor: "pointer",
            border: "1px solid var(--border)",
          }}>{hero.secondaryCta.label}</a>
        </motion.div>
      </section>

      <Divider />

      {/* PROOF STRIP */}
      <section style={{ padding: "48px 0" }}>
        <ProofStrip />
      </section>

      <Divider />

      {/* SELECTED WORK */}
      <section id="work" style={{ paddingTop: 80, paddingBottom: 80 }}>
        {/* Header */}
        <InViewBlock style={{ marginBottom: 48 }}>
          <div style={{ fontFamily: "var(--font-mono)", fontSize: 10, letterSpacing: "0.14em", color: "var(--accent)", marginBottom: 16 }}>
            SELECTED WORK
          </div>
          <h2 style={{ fontFamily: "var(--font-head)", fontSize: "clamp(24px, 3vw, 32px)", fontWeight: 700, color: "var(--fg)", marginBottom: 12 }}>
            Ventures, systems, and research.
          </h2>
          <p style={{ fontSize: 14, color: "var(--fg3)", maxWidth: 560, lineHeight: 1.6 }}>
            A chronological arc across hardware, AI infrastructure, and security — from founding ventures to exploring agentic systems.
          </p>
        </InViewBlock>

        {/* Timeline / Categories Grid */}
        <InViewBlock delay={0.1}>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: 1, background: "var(--border)", marginBottom: 48 }}>
            {workCategories.map((cat, i) => (
              <div key={cat.name} style={{ background: "var(--bg)", padding: "28px 24px" }}>
                <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 8 }}>
                  <div style={{ width: 8, height: 8, borderRadius: "50%", background: i === 0 ? "var(--accent)" : i === 1 ? "var(--blue)" : "var(--green)" }} />
                  <div style={{ fontFamily: "var(--font-mono)", fontSize: 11, letterSpacing: "0.1em", color: "var(--fg3)" }}>
                    {cat.name.toUpperCase()}
                  </div>
                </div>
                <div style={{ fontSize: 13, color: "var(--fg2)", marginBottom: 16 }}>{cat.description}</div>
                <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
                  {cat.items.map(item => (
                    <div key={item.name}>
                      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", gap: 8 }}>
                        <div style={{ fontFamily: "var(--font-head)", fontSize: 14, fontWeight: 600, color: "var(--fg)" }}>{item.name}</div>
                        <div style={{ fontFamily: "var(--font-mono)", fontSize: 10, color: "var(--fg3)", whiteSpace: "nowrap" }}>{item.period}</div>
                      </div>
                      <div style={{ fontSize: 12, color: "var(--fg2)", marginTop: 2 }}>{item.detail}</div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </InViewBlock>

        {/* Featured Deep Dives */}
        <InViewBlock delay={0.2}>
          <div style={{ marginBottom: 24 }}>
            <div style={{ fontFamily: "var(--font-mono)", fontSize: 10, letterSpacing: "0.1em", color: "var(--fg3)", marginBottom: 16 }}>
              DEEP DIVES
            </div>
          </div>
        </InViewBlock>

        <div style={{ display: "flex", flexDirection: "column", gap: 16, marginBottom: 32 }}>
          {featuredWork.map((work, i) => (
            <InViewBlock key={work.slug} delay={0.25 + i * 0.08}>
              <div style={{ background: "var(--bg2)", border: "1px solid var(--border)", borderRadius: 10, padding: "28px 24px" }}>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: 12, flexWrap: "wrap", gap: 8 }}>
                  <div>
                    <h3 style={{ fontFamily: "var(--font-head)", fontSize: 18, fontWeight: 600, color: "var(--fg)", marginBottom: 4 }}>{work.title}</h3>
                    <div style={{ fontSize: 12, color: "var(--fg3)" }}>{work.role} · {work.timeframe}</div>
                  </div>
                  <span style={{ fontFamily: "var(--font-mono)", fontSize: 10, color: "var(--outcome)", background: "var(--accent2)", padding: "2px 8px", borderRadius: 4 }}>
                    {work.outcome}
                  </span>
                </div>
                <p style={{ fontSize: 14, color: "var(--fg2)", lineHeight: 1.6, marginBottom: 16 }}>{work.summary}</p>
                <div style={{ display: "flex", flexWrap: "wrap", gap: 6 }}>
                  {work.themes.map(t => (
                    <span key={t} style={{ fontFamily: "var(--font-mono)", fontSize: 10, color: "var(--fg3)", background: "var(--bg)", border: "1px solid var(--border)", padding: "2px 8px", borderRadius: 4 }}>
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </InViewBlock>
          ))}
        </div>

        {/* Archive Links */}
        <InViewBlock delay={0.5}>
          <div style={{ display: "flex", flexWrap: "wrap", gap: 16, alignItems: "center", paddingTop: 8 }}>
            <a
              href={workArchive.github}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: "flex", alignItems: "center", gap: 8,
                fontFamily: "var(--font-body)", fontSize: 13, fontWeight: 500,
                color: "var(--fg)", padding: "10px 16px", borderRadius: 6,
                border: "1px solid var(--border)", transition: "background 0.15s",
              }}
              onMouseEnter={e => (e.currentTarget.style.background = "var(--bg2)")}
              onMouseLeave={e => (e.currentTarget.style.background = "transparent")}
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
              </svg>
              GitHub
            </a>
            <span style={{ fontSize: 13, color: "var(--fg3)" }}>{workArchive.description}</span>
          </div>
        </InViewBlock>

        {/* Skills Heatmap */}
        <InViewBlock delay={0.6}>
          <div style={{ marginTop: 48, paddingTop: 32, borderTop: "1px solid var(--border)" }}>
            <div style={{ fontFamily: "var(--font-mono)", fontSize: 10, letterSpacing: "0.1em", color: "var(--fg3)", marginBottom: 20 }}>
              DEPTH AREAS
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
              {skills.map((skill, i) => (
                <div key={skill.name} style={{ display: "flex", flexDirection: "column", gap: 6 }}>
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", gap: 12 }}>
                    <div style={{ fontFamily: "var(--font-head)", fontSize: 14, fontWeight: 600, color: "var(--fg)" }}>
                      {skill.name}
                    </div>
                    <div style={{ display: "flex", gap: 4 }}>
                      {[1, 2, 3, 4, 5].map(dot => (
                        <div
                          key={dot}
                          style={{
                            width: 6, height: 6, borderRadius: "50%",
                            background: dot <= skill.level ? "var(--accent)" : "var(--border)",
                            transition: "opacity 0.15s",
                          }}
                        />
                      ))}
                    </div>
                  </div>
                  <div style={{ fontSize: 12, color: "var(--fg2)", lineHeight: 1.5 }}>
                    {skill.detail}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </InViewBlock>

        {/* Currently Building */}
        <InViewBlock delay={0.7}>
          <div style={{
            marginTop: 32, padding: "20px 24px",
            background: "var(--bg2)", border: "1px solid var(--border)", borderRadius: 10,
          }}>
            <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 12 }}>
              <div style={{
                width: 8, height: 8, borderRadius: "50%", background: "var(--green)",
                animation: "pulse 2s ease-in-out infinite",
              }} />
              <div style={{ fontFamily: "var(--font-mono)", fontSize: 10, letterSpacing: "0.1em", color: "var(--green)" }}>
                NOW
              </div>
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
              <div style={{ fontSize: 14, color: "var(--fg)" }}>
                <span style={{ color: "var(--fg3)" }}>Building:</span> {currently.building}
              </div>
              <div style={{ fontSize: 14, color: "var(--fg)" }}>
                <span style={{ color: "var(--fg3)" }}>Reading:</span> {currently.reading}
              </div>
              <div style={{ fontSize: 14, color: "var(--fg)" }}>
                <span style={{ color: "var(--fg3)" }}>Thinking:</span> {currently.thinking}
              </div>
            </div>
          </div>
        </InViewBlock>
      </section>

      <Divider />

      {/* FIELD NOTES */}
      <section style={{ paddingTop: 80, paddingBottom: 60 }}>
        <InViewBlock>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", marginBottom: 24 }}>
            <div>
              <div style={{ fontFamily: "var(--font-mono)", fontSize: 10, letterSpacing: "0.14em", color: "var(--accent)", marginBottom: 12 }}>
                {notes.title.toUpperCase()}
              </div>
              <p style={{ fontSize: 14, color: "var(--fg3)", maxWidth: 480 }}>{notes.intro}</p>
            </div>
            <a href="/blog" style={{ fontFamily: "var(--font-body)", fontSize: 13, fontWeight: 500, color: "var(--fg2)", textDecoration: "underline", textUnderlineOffset: 3 }}>View all</a>
          </div>

          <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
            {notes.entries.map((entry, i) => (
              <InViewBlock key={entry.title} delay={i * 0.08}>
                <a href="/blog" style={{ display: "block", textDecoration: "none" }}>
                  <div style={{
                    padding: "20px 0",
                    borderBottom: i < notes.entries.length - 1 ? "1px solid var(--border)" : "none",
                    cursor: "pointer",
                    transition: "opacity 0.15s",
                  }}
                    onMouseEnter={e => (e.currentTarget.style.opacity = "0.7")}
                    onMouseLeave={e => (e.currentTarget.style.opacity = "1")}
                  >
                    <div style={{ display: "flex", gap: 24, flexWrap: "wrap" }}>
                      <div style={{ fontFamily: "var(--font-mono)", fontSize: 11, color: "var(--fg3)", minWidth: 80 }}>{entry.date}</div>
                      <div style={{ flex: 1 }}>
                        <div style={{ fontFamily: "var(--font-head)", fontSize: 16, fontWeight: 600, color: "var(--fg)", marginBottom: 6 }}>{entry.title}</div>
                        <div style={{ fontSize: 14, color: "var(--fg2)", lineHeight: 1.6 }}>{entry.excerpt}</div>
                      </div>
                    </div>
                  </div>
                </a>
              </InViewBlock>
            ))}
          </div>
        </InViewBlock>
      </section>

      <Divider />

      {/* CONTACT */}
      <section id="contact" style={{ paddingTop: 80, paddingBottom: 100 }}>
        <InViewBlock>
          <div style={{ textAlign: "center", maxWidth: 560, margin: "0 auto" }}>
            <div style={{ fontFamily: "var(--font-mono)", fontSize: 10, letterSpacing: "0.14em", color: "var(--accent)", marginBottom: 16 }}>GET IN TOUCH</div>
            <h2 style={{ fontFamily: "var(--font-head)", fontSize: "clamp(24px, 3vw, 36px)", fontWeight: 700, color: "var(--fg)", marginBottom: 12 }}>
              Working on something hard?
            </h2>
            <p style={{ fontSize: 15, color: "var(--fg3)", lineHeight: 1.6, marginBottom: 32 }}>
              If you're building in AI systems or venture infrastructure — reach out.
            </p>
            <ContactForm email={links.email} />
          </div>
        </InViewBlock>
      </section>
    </div>
  );
}
