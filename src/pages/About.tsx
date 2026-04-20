import { motion } from "framer-motion";
import { siteContent } from "../content";
import { MapPin, Mail, Twitter, Linkedin, Github } from "lucide-react";

const SPRING_BASE = { type: "spring" as const, stiffness: 200, damping: 26 };

function fadeInUp(delay = 0) {
  return {
    initial: { opacity: 0, y: 24 },
    animate: { opacity: 1, y: 0 },
    transition: { ...SPRING_BASE, delay },
  };
}

export function About() {
  const { about, brand, links } = siteContent;

  return (
    <div className="page-pad" style={{ maxWidth: 880, margin: "0 auto", paddingTop: 100, paddingBottom: 100 }}>
      <motion.div {...fadeInUp(0)}>
        <div
          style={{
            fontFamily: "var(--font-mono)",
            fontSize: 10,
            letterSpacing: "0.18em",
            color: "var(--accent)",
            marginBottom: 24,
          }}
        >
          ABOUT
        </div>

        <h1
          style={{
            fontFamily: "var(--font-head)",
            fontSize: "clamp(32px, 4vw, 48px)",
            fontWeight: 700,
            letterSpacing: "-0.03em",
            color: "var(--fg)",
            marginBottom: 32,
            lineHeight: 1.1,
          }}
        >
          Ayush Mahajan
        </h1>
      </motion.div>

      <div style={{ display: "grid", gridTemplateColumns: "1fr 280px", gap: 64, alignItems: "start" }}>
        <motion.div {...fadeInUp(0.1)}>
          <div style={{ marginBottom: 48 }}>
            {about.paragraphs.map((paragraph, index) => (
              <p
                key={index}
                style={{
                  fontSize: 16,
                  color: index === 0 ? "var(--fg)" : "var(--fg2)",
                  lineHeight: 1.8,
                  marginBottom: 24,
                  fontWeight: index === 0 ? 500 : 400,
                }}
              >
                {paragraph}
              </p>
            ))}
          </div>

          <div style={{ borderTop: "1px solid var(--border)", paddingTop: 32 }}>
            <h2
              style={{
                fontFamily: "var(--font-head)",
                fontSize: 20,
                fontWeight: 600,
                color: "var(--fg)",
                marginBottom: 20,
              }}
            >
              What I'm building
            </h2>
            <ul style={{ listStyle: "none", padding: 0 }}>
              {[
                "Agentic systems with durable workflows",
                "AI security research and tooling",
                "Local-first AI infrastructure",
                "Founder evaluation platforms (PerPitch)",
              ].map((item, index) => (
                <li
                  key={index}
                  style={{
                    fontSize: 15,
                    color: "var(--fg2)",
                    lineHeight: 1.7,
                    marginBottom: 12,
                    paddingLeft: 20,
                    position: "relative",
                  }}
                >
                  <span
                    style={{
                      position: "absolute",
                      left: 0,
                      color: "var(--accent)",
                    }}
                  >
                    —
                  </span>
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div style={{ borderTop: "1px solid var(--border)", paddingTop: 32, marginTop: 32 }}>
            <h2
              style={{
                fontFamily: "var(--font-head)",
                fontSize: 20,
                fontWeight: 600,
                color: "var(--fg)",
                marginBottom: 20,
              }}
            >
              Previously
            </h2>
            <ul style={{ listStyle: "none", padding: 0 }}>
              {[
                "Founded Cerebralx (BCI/LLM venture, 2019-2024)",
                "50+ investor pitches across accelerators and VC",
                "Freelance security consulting (2017-2020)",
                "Youngest Entrepreneur of the Year, TiECon 2022",
              ].map((item, index) => (
                <li
                  key={index}
                  style={{
                    fontSize: 15,
                    color: "var(--fg2)",
                    lineHeight: 1.7,
                    marginBottom: 12,
                    paddingLeft: 20,
                    position: "relative",
                  }}
                >
                  <span
                    style={{
                      position: "absolute",
                      left: 0,
                      color: "var(--fg3)",
                    }}
                  >
                    →
                  </span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </motion.div>

        <motion.div {...fadeInUp(0.2)}>
          <div
            style={{
              background: "var(--bg2)",
              border: "1px solid var(--border)",
              borderRadius: 12,
              padding: 28,
            }}
          >
            <div
              style={{
                width: 80,
                height: 80,
                borderRadius: "50%",
                background: "var(--accent2)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                marginBottom: 20,
                fontFamily: "var(--font-head)",
                fontSize: 32,
                fontWeight: 700,
                color: "var(--accent)",
              }}
            >
              AM
            </div>

            <h3
              style={{
                fontFamily: "var(--font-head)",
                fontSize: 18,
                fontWeight: 600,
                color: "var(--fg)",
                marginBottom: 4,
              }}
            >
              {brand.name}
            </h3>
            <p
              style={{
                fontSize: 14,
                color: "var(--fg3)",
                marginBottom: 24,
              }}
            >
              {brand.role}
            </p>

            <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
              <div style={{ display: "flex", alignItems: "center", gap: 10, fontSize: 14, color: "var(--fg2)" }}>
                <MapPin size={16} style={{ color: "var(--fg3)" }} />
                {brand.location}
              </div>
              <a
                href={`mailto:${links.email}`}
                style={{ display: "flex", alignItems: "center", gap: 10, fontSize: 14, color: "var(--fg2)" }}
              >
                <Mail size={16} style={{ color: "var(--fg3)" }} />
                {links.email}
              </a>
            </div>

            <div style={{ borderTop: "1px solid var(--border)", marginTop: 24, paddingTop: 24 }}>
              <div
                style={{
                  fontFamily: "var(--font-mono)",
                  fontSize: 10,
                  letterSpacing: "0.1em",
                  color: "var(--fg3)",
                  marginBottom: 16,
                  textTransform: "uppercase",
                }}
              >
                Connect
              </div>
              <div style={{ display: "flex", gap: 12 }}>
                <a
                  href={links.x}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    width: 40,
                    height: 40,
                    borderRadius: 8,
                    background: "var(--bg)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: "var(--fg3)",
                    transition: "all 0.15s ease",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.color = "var(--fg)";
                    e.currentTarget.style.background = "var(--bg3)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.color = "var(--fg3)";
                    e.currentTarget.style.background = "var(--bg)";
                  }}
                >
                  <Twitter size={18} />
                </a>
                <a
                  href={links.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    width: 40,
                    height: 40,
                    borderRadius: 8,
                    background: "var(--bg)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: "var(--fg3)",
                    transition: "all 0.15s ease",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.color = "var(--fg)";
                    e.currentTarget.style.background = "var(--bg3)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.color = "var(--fg3)";
                    e.currentTarget.style.background = "var(--bg)";
                  }}
                >
                  <Linkedin size={18} />
                </a>
                <a
                  href={links.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    width: 40,
                    height: 40,
                    borderRadius: 8,
                    background: "var(--bg)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: "var(--fg3)",
                    transition: "all 0.15s ease",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.color = "var(--fg)";
                    e.currentTarget.style.background = "var(--bg3)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.color = "var(--fg3)";
                    e.currentTarget.style.background = "var(--bg)";
                  }}
                >
                  <Github size={18} />
                </a>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
