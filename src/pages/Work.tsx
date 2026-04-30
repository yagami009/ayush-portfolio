import { useEffect } from "react";

export function Work() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setTimeout(() => {
              entry.target.classList.add("in");
            }, 0);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.07 }
    );

    document.querySelectorAll(".reveal").forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <div className="page">
      <div className="page-hero">
        <div className="container">
          <div className="eyebrow">Work</div>
          <h1 className="display">Ventures &amp; <em>technical builds</em></h1>
          <p className="lead" style={{ marginTop: "1.25rem" }}>
            Two sections: the ventures I've founded and led; and the technical builds I'm shipping or have shipped. Different in scale, the same in how I approach them.
          </p>
        </div>
      </div>

      <div className="container">
        <div className="section">
          {/* Ventures Section */}
          <div className="section-rule reveal">
            <span className="section-rule-label">Ventures</span>
            <div className="section-rule-line"></div>
          </div>

          <div className="venture reveal">
            <div>
              <div className="v-period">2019–2024</div>
              <div className="v-role">Founder &amp; Principal Engineer</div>
              <div className="v-tags">
                <span className="v-tag">Hardtech · BCI / SSVEP</span>
                <span className="v-tag">Embedded systems</span>
                <span className="v-tag">Firmware</span>
                <span className="v-tag">Real-time ML</span>
                <span className="v-tag">Fundraising</span>
                <span className="v-tag">Healthcare</span>
              </div>
            </div>
            <div>
              <div className="v-title">Cerebralx</div>
              <div className="v-summary">LLM-powered SSVEP brain-computer interface for verbally disabled communication.</div>
              <div className="v-body">
                <p>Cerebralx was my longest and most defining chapter. I built an SSVEP brain-computer interface designed to help verbally disabled individuals communicate through thought decoding. The work spanned electronics, firmware, software, machine learning behaviour, and low-latency systems running under real constraints — not demo conditions.</p>
                <p>But Cerebralx was not just a technical build. It was a full startup journey. I navigated early-stage fundraising, pitched to 50+ institutional investors, worked with E-Cell programs and accelerator ecosystems, and led validation with healthcare stakeholders. The Youngest Entrepreneur of the Year recognition at TiECon 2022 came during this period.</p>
                <p>That experience gave me firsthand exposure to how founders are judged — and where that process consistently breaks down.</p>
              </div>
              <div className="v-outcome">
                <span className="v-outcome-label">Outcome</span>
                <span>Cerebralx led directly to PerPitch. Years of being evaluated taught me more about founder evaluation than any book or framework could. The gap was real before the product existed.</span>
              </div>
            </div>
          </div>

          <div className="venture reveal">
            <div>
              <div className="v-period">2024–Present</div>
              <div className="v-role">Founder</div>
              <div className="v-tags">
                <span className="v-tag">Venture infra</span>
                <span className="v-tag">AI systems</span>
                <span className="v-tag">Behavioral intelligence</span>
                <span className="v-tag">Observability</span>
                <span className="v-tag">Startup ecosystem</span>
              </div>
            </div>
            <div>
              <div className="v-title">PerPitch</div>
              <div className="v-summary">AI-powered infrastructure for systematic founder evaluation in the venture capital ecosystem.</div>
              <div className="v-body">
                <p>PerPitch emerged from lived founder experience. After years of fundraising for Cerebralx, one thing became impossible to ignore: early-stage founder evaluation is still highly subjective, inconsistent, and difficult to track over time. Same pitch, different reactions — depending on mood, warm intros, and pattern-matching to prior winners.</p>
                <p>PerPitch is building better infrastructure for that layer of the startup ecosystem — AI-powered systems for systematic founder evaluation, behavioral intelligence, and observability-style assessment for investors and accelerators. The goal isn't to replace human judgment. It's to inform it with structured data instead of gut feel, and trajectory instead of static snapshots.</p>
              </div>
              <div className="v-outcome">
                <span className="v-outcome-label">Status</span>
                <span>Active. Discovered through lived fundraising experience, not theory. The friction became the product.</span>
              </div>
            </div>
          </div>

          <div className="venture reveal">
            <div>
              <div className="v-period">2017–2020</div>
              <div className="v-role">Freelance Security Consultant</div>
              <div className="v-tags">
                <span className="v-tag">Pentest</span>
                <span className="v-tag">Incident response</span>
                <span className="v-tag">Security architecture</span>
                <span className="v-tag">Risk assessment</span>
              </div>
            </div>
            <div>
              <div className="v-title">Security consulting</div>
              <div className="v-summary">Freelance cybersecurity work across assessment, incident response, architecture, and remediation.</div>
              <div className="v-body">
                <p>Consulting across vulnerability assessment, penetration testing, incident response, security architecture, and operational hardening. Client-facing, pressure-tested, and hands-on across multiple sectors.</p>
                <p>This background gave me a bias toward adversarial thinking and failure modes. That lens now shapes how I approach agent platforms, tool access, unsafe execution, and AI system design — not just what a system can do, but how it breaks.</p>
              </div>
              <div className="v-outcome">
                <span className="v-outcome-label">Legacy</span>
                <span>Still shows up in everything I build. AI security is a direct evolution of this instinct applied to a new attack surface.</span>
              </div>
            </div>
          </div>
        </div>

        {/* Technical Builds Section */}
        <div className="section" style={{ paddingTop: 0 }}>
          <div className="section-rule reveal">
            <span className="section-rule-label">Technical builds</span>
            <div className="section-rule-line"></div>
          </div>
          <div className="builds-grid reveal">
            <div className="build-card">
              <div className="build-status s-progress">
                <span className="s-dot"></span>
                In progress
              </div>
              <div className="build-title">Offline-first personal AI agent</div>
              <div className="build-desc">Cross-platform agent app built with Cactus SDK for iOS and Android. Offline-first assumptions and local inference constraints shape the architecture from the start — not retrofitted.</div>
              <div className="build-insight">"Offline isn't a fallback. It's a design constraint that produces better architecture."</div>
              <div className="build-tags">
                <span className="tag">Cactus SDK</span>
                <span className="tag">iOS / Android</span>
                <span className="tag">Local inference</span>
                <span className="tag">Orchestration</span>
              </div>
            </div>
            <div className="build-card">
              <div className="build-status s-progress">
                <span className="s-dot"></span>
                In progress
              </div>
              <div className="build-title">Multi-tool LangGraph agent</div>
              <div className="build-desc">Orchestration-heavy agent project built around multi-step coordination and explicit control over agent behaviour. LangGraph because it forces structure — nodes, edges, state — where most agent demos avoid it.</div>
              <div className="build-insight">"Structure isn't bureaucracy. It's the foundation for systems that can be reasoned about, not just prompted."</div>
              <div className="build-tags">
                <span className="tag">LangGraph</span>
                <span className="tag">Multi-tool</span>
                <span className="tag">Durable flows</span>
                <span className="tag">State machines</span>
              </div>
            </div>
            <div className="build-card">
              <div className="build-status s-done">
                <span className="s-dot"></span>
                Completed
              </div>
              <div className="build-title">Local RAG pipeline</div>
              <div className="build-desc">Practical retrieval pipeline using ChromaDB, Ollama, and LangChain — built as part of a deliberate AI engineering path. Past notebook-level familiarity, into real implementation tradeoffs.</div>
              <div className="build-insight">Sharpened understanding of embeddings, retrieval flow, local model tradeoffs, and how to structure memory without relying on hosted black boxes.</div>
              <div className="build-tags">
                <span className="tag">ChromaDB</span>
                <span className="tag">Ollama</span>
                <span className="tag">LangChain</span>
                <span className="tag">RAG</span>
                <span className="tag">Local AI</span>
              </div>
            </div>
            <div className="build-card">
              <div className="build-status s-active">
                <span className="s-dot"></span>
                Ongoing research
              </div>
              <div className="build-title">AI security surface mapping</div>
              <div className="build-desc">Systematic exploration of the attack surface of AI agents: prompt injection variants, unsafe tool execution, RCE via code-running agents, RAG poisoning, and capability boundary confusion in chained multi-tool flows.</div>
              <div className="build-insight">"The interesting question isn't whether an agent can call a tool. It's what happens when the wrong input reaches the wrong capability boundary."</div>
              <div className="build-tags">
                <span className="tag">Prompt injection</span>
                <span className="tag">Tool execution</span>
                <span className="tag">RCE surfaces</span>
                <span className="tag">Agent security</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        .page-hero { padding: 6rem 0 4rem; border-bottom: 1px solid var(--border); }
        .venture {
          padding: 3.5rem 0;
          border-bottom: 1px solid var(--border);
          display: grid;
          grid-template-columns: 190px 1fr;
          gap: 4rem;
          align-items: start;
        }
        .v-period { font-family: var(--mono); font-size: 0.6rem; color: var(--amber); letter-spacing: 0.1em; text-transform: uppercase; margin-bottom: 0.5rem; }
        .v-role { font-family: var(--mono); font-size: 0.6rem; color: var(--dim); letter-spacing: 0.08em; margin-bottom: 1.25rem; line-height: 1.6; }
        .v-tags { display: flex; flex-direction: column; gap: 0.35rem; }
        .v-tag { font-family: var(--mono); font-size: 0.58rem; color: var(--dim); letter-spacing: 0.06em; }
        .v-title { font-family: var(--serif); font-size: 1.75rem; font-weight: 300; letter-spacing: -0.015em; color: var(--text); line-height: 1.15; margin-bottom: 0.5rem; }
        .v-summary { font-size: 0.95rem; color: var(--amber); font-weight: 300; margin-bottom: 1.5rem; font-family: var(--serif); font-style: italic; }
        .v-body { font-size: 0.88rem; color: var(--muted); line-height: 1.8; font-weight: 300; margin-bottom: 1.5rem; }
        .v-body p { margin-bottom: 1rem; }
        .v-body p:last-child { margin-bottom: 0; }
        .v-outcome {
          display: flex;
          gap: 0.75rem;
          align-items: start;
          padding: 1rem 1.25rem;
          background: var(--bg2);
          border-left: 2px solid var(--amber);
          font-size: 0.82rem;
          color: var(--muted);
          line-height: 1.65;
          font-weight: 300;
        }
        .v-outcome-label { font-family: var(--mono); font-size: 0.58rem; color: var(--amber); letter-spacing: 0.1em; text-transform: uppercase; white-space: nowrap; padding-top: 0.15rem; }
        .builds-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 1px; background: var(--border); border: 1px solid var(--border); }
        .build-card { background: var(--bg); padding: 2rem; transition: background 0.2s; position: relative; }
        .build-card:hover { background: var(--bg3); }
        .build-status { display: inline-flex; align-items: center; gap: 0.4rem; font-family: var(--mono); font-size: 0.58rem; letter-spacing: 0.08em; text-transform: uppercase; margin-bottom: 1rem; }
        .s-dot { width: 5px; height: 5px; border-radius: 50%; }
        .s-active .s-dot { background: var(--teal); animation: pulse 2s ease infinite; }
        .s-progress .s-dot { background: var(--amber); animation: pulse 2s ease 0.4s infinite; }
        .s-done .s-dot { background: var(--dim); }
        .s-active { color: var(--teal); }
        .s-progress { color: var(--amber); }
        .s-done { color: var(--dim); }
        .build-title { font-family: var(--serif); font-size: 1.15rem; font-weight: 300; color: var(--text); line-height: 1.25; margin-bottom: 0.65rem; }
        .build-desc { font-size: 0.82rem; color: var(--muted); line-height: 1.7; font-weight: 300; margin-bottom: 1.1rem; }
        .build-insight { font-size: 0.78rem; color: var(--dim); line-height: 1.6; border-top: 1px solid var(--border); padding-top: 0.85rem; margin-top: 0.85rem; font-style: italic; font-family: var(--serif); }
        .build-tags { display: flex; gap: 0.35rem; flex-wrap: wrap; margin-top: 0.85rem; }

        @media (max-width: 760px) {
          .venture { grid-template-columns: 1fr; gap: 1.5rem; }
          .v-tags { flex-direction: row; flex-wrap: wrap; }
          .builds-grid { grid-template-columns: 1fr; }
        }
      `}</style>
    </div>
  );
}
