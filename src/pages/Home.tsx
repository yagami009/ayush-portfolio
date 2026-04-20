import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { siteContent } from "../content";

const { hero, proofStrip, featuredWork, links } = siteContent;

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
        <InViewBlock style={{ marginBottom: 40 }}>
          <div style={{ fontFamily: "var(--font-mono)", fontSize: 10, letterSpacing: "0.14em", color: "var(--accent)", marginBottom: 16 }}>
            SELECTED WORK
          </div>
          <h2 style={{ fontFamily: "var(--font-head)", fontSize: "clamp(24px, 3vw, 32px)", fontWeight: 700, color: "var(--fg)" }}>
            Three projects.
          </h2>
        </InViewBlock>

        <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
          {featuredWork.map((work, i) => (
            <InViewBlock key={work.slug} delay={i * 0.1}>
              <div style={{ background: "var(--bg2)", border: "1px solid var(--border)", borderRadius: 10, padding: "28px 24px" }}>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: 12, flexWrap: "wrap", gap: 8 }}>
                  <h3 style={{ fontFamily: "var(--font-head)", fontSize: 18, fontWeight: 600, color: "var(--fg)" }}>{work.title}</h3>
                  <span style={{ fontFamily: "var(--font-mono)", fontSize: 10, color: "var(--fg3)" }}>{work.timeframe}</span>
                </div>
                <p style={{ fontSize: 14, color: "var(--fg2)", lineHeight: 1.6, marginBottom: 12 }}>{work.summary}</p>
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
