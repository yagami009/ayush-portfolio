import { useEffect } from "react";
import { Link } from "wouter";

export function Now() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry, i) => {
          if (entry.isIntersecting) {
            setTimeout(() => {
              entry.target.classList.add("in");
            }, i * 55);
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
          <div className="eyebrow">Now</div>
          <h1 className="display">What I'm <em>working on</em></h1>
          <p className="lead" style={{ marginTop: "1.25rem" }}>
            A live view of where my attention is. Inspired by Derek Sivers' /now page idea. Updated when things change significantly.
          </p>
          <div className="now-meta">
            <span className="now-meta-dot"></span>
            Last updated: April 2026 · New Delhi, India
          </div>
        </div>
      </div>

      <div className="container">
        <div className="section">
          {/* Building Section */}
          <div className="now-block reveal">
            <div className="section-rule">
              <span className="section-rule-label">Building</span>
              <div className="section-rule-line"></div>
            </div>
            <div className="now-items">
              <div className="now-item">
                <div className="now-item-num">01</div>
                <div>
                  <div className="now-item-title">PerPitch</div>
                  <div className="now-item-body">
                    Building AI-powered infrastructure for systematic founder evaluation. The gap between how investors assess founders and what actually predicts success is large — and measurable. PerPitch is the infrastructure for that measurement layer: behavioral intelligence, longitudinal founder profiles, and observability-style assessment tools for investors and accelerators.
                  </div>
                  <div className="now-item-status s-active">
                    <span className="s-dot"></span>
                    Active — primary focus
                  </div>
                </div>
              </div>
              <div className="now-item">
                <div className="now-item-num">02</div>
                <div>
                  <div className="now-item-title">Offline-first personal AI agent</div>
                  <div className="now-item-body">
                    Cross-platform agent app built on Cactus SDK for iOS and Android. The constraint: offline-first from the start, not retrofitted. Network availability shouldn't determine what your AI can do. This pulls together everything I care about right now — orchestration, local inference, device-native interaction, memory, and privacy.
                  </div>
                  <div className="now-item-status s-progress">
                    <span className="s-dot"></span>
                    In progress
                  </div>
                </div>
              </div>
              <div className="now-item">
                <div className="now-item-num">03</div>
                <div>
                  <div className="now-item-title">Multi-tool LangGraph agent</div>
                  <div className="now-item-body">
                    Orchestration-heavy agent project centred on multi-step coordination, tool usage, and structured agent behaviour. The interesting part isn't the tools — it's the control flow. How do you design an agent system you can reason about when things go wrong, not just prompt when things go right?
                  </div>
                  <div className="now-item-status s-progress">
                    <span className="s-dot"></span>
                    In progress
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Researching Section */}
          <div className="now-block reveal">
            <div className="section-rule">
              <span className="section-rule-label">Researching</span>
              <div className="section-rule-line"></div>
            </div>
            <div className="now-items">
              <div className="now-item">
                <div className="now-item-num">01</div>
                <div>
                  <div className="now-item-title">AI security and agent attack surfaces</div>
                  <div className="now-item-body">
                    Systematic mapping of how agent systems fail under adversarial conditions. Prompt injection variants, unsafe tool execution, RCE surfaces in code-running agents, RAG poisoning, and capability boundary confusion in multi-tool flows. My security consulting background makes this a natural convergence point.
                  </div>
                  <div className="now-item-status s-research">
                    <span className="s-dot"></span>
                    Active research
                  </div>
                </div>
              </div>
              <div className="now-item">
                <div className="now-item-num">02</div>
                <div>
                  <div className="now-item-title">On-device inference constraints and architecture</div>
                  <div className="now-item-body">
                    What actually changes when you move from cloud to on-device — not just model size, but orchestration design, memory management, battery awareness, and graceful degradation. The Cactus SDK build is making this practical, not theoretical.
                  </div>
                  <div className="now-item-status s-research">
                    <span className="s-dot"></span>
                    Active research
                  </div>
                </div>
              </div>
              <div className="now-item">
                <div className="now-item-num">03</div>
                <div>
                  <div className="now-item-title">Venture ecosystem infrastructure</div>
                  <div className="now-item-body">
                    How early-stage evaluation actually works, where it consistently fails, and what tooling could make it more systematic. Feeding directly into PerPitch. Partly academic, partly observational — I've seen this from both sides of the table.
                  </div>
                  <div className="now-item-status s-research">
                    <span className="s-dot"></span>
                    Active research
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Not Doing Section */}
          <div className="now-block reveal">
            <div className="section-rule">
              <span className="section-rule-label">Not doing right now</span>
              <div className="section-rule-line"></div>
            </div>
            <p className="body-sm" style={{ maxWidth: "500px", marginBottom: "1.5rem" }}>
              Listing what I'm not doing is as important as listing what I am.
            </p>
            <div className="not-list">
              <div className="not-item">Taking on freelance work or consulting outside of specific collaborations</div>
              <div className="not-item">Building products just to ship something — everything is intentional right now</div>
              <div className="not-item">Attending events for the sake of networking</div>
              <div className="not-item">Learning new frameworks or languages without a specific build reason</div>
            </div>
          </div>

          {/* What I'm Open To Section */}
          <div className="now-block reveal">
            <div className="section-rule">
              <span className="section-rule-label">What I'm open to</span>
              <div className="section-rule-line"></div>
            </div>
            <div className="now-items">
              <div className="now-item">
                <div className="now-item-num">→</div>
                <div>
                  <div className="now-item-title">Co-founders</div>
                  <div className="now-item-body">
                    Specifically for PerPitch or adjacent infrastructure plays. If you've been inside the VC or accelerator ecosystem and see the same gap I do, I want to talk.
                  </div>
                </div>
              </div>
              <div className="now-item">
                <div className="now-item-num">→</div>
                <div>
                  <div className="now-item-title">Conversations about AI security in agent systems</div>
                  <div className="now-item-body">
                    Researchers, red-teamers, or builders taking this seriously. The attack surface is large and underexplored. Happy to exchange notes.
                  </div>
                </div>
              </div>
              <div className="now-item">
                <div className="now-item-num">→</div>
                <div>
                  <div className="now-item-title">Investors interested in PerPitch</div>
                  <div className="now-item-body">
                    If the problem — systematic founder evaluation infrastructure — resonates, reach out. I know both sides of this conversation well.
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Contact CTA */}
          <div className="contact-strip reveal">
            <div>
              <div className="cs-h3">If any of this resonates, reach out.</div>
              <p className="cs-p">
                I try to respond to every message that's specific and genuine. No templates, no pitches — just tell me what you're working on and why you're writing.
              </p>
            </div>
            <a href="mailto:mahajan.ayush9909@gmail.com" className="btn btn-amber">Send a message</a>
          </div>
        </div>
      </div>

      <style>{`
        .page-hero { padding: 6rem 0 4rem; border-bottom: 1px solid var(--border); }
        .now-meta {
          font-family: var(--mono);
          font-size: 0.62rem;
          color: var(--dim);
          letter-spacing: 0.08em;
          display: flex;
          align-items: center;
          gap: 0.6rem;
          margin-top: 2rem;
        }
        .now-meta-dot { width: 5px; height: 5px; border-radius: 50%; background: var(--teal); animation: pulse 2.5s ease-in-out infinite; }
        .body-sm { font-size: 0.86rem; color: var(--muted); line-height: 1.75; font-weight: 300; }
        .now-block { margin-bottom: 4rem; }
        .now-items { display: flex; flex-direction: column; }
        .now-item {
          display: grid;
          grid-template-columns: 28px 1fr;
          gap: 1.25rem;
          padding: 1.5rem 0;
          border-bottom: 1px solid var(--border);
          align-items: start;
        }
        .now-item:first-child { border-top: 1px solid var(--border); }
        .now-item-num { font-family: var(--mono); font-size: 0.6rem; color: var(--dim); padding-top: 0.2rem; }
        .now-item-title { font-family: var(--serif); font-size: 1rem; font-weight: 300; color: var(--text); margin-bottom: 0.4rem; line-height: 1.3; }
        .now-item-body { font-size: 0.83rem; color: var(--muted); line-height: 1.7; font-weight: 300; margin-bottom: 0.6rem; }
        .now-item-status {
          display: inline-flex;
          align-items: center;
          gap: 0.4rem;
          font-family: var(--mono);
          font-size: 0.58rem;
          letter-spacing: 0.07em;
          text-transform: uppercase;
        }
        .s-dot { width: 4px; height: 4px; border-radius: 50%; }
        .s-active { color: var(--teal); }
        .s-active .s-dot { background: var(--teal); animation: pulse 2s ease infinite; }
        .s-progress { color: var(--amber); }
        .s-progress .s-dot { background: var(--amber); animation: pulse 2s ease 0.3s infinite; }
        .s-research { color: #6a6a8a; }
        .s-research .s-dot { background: #6a6a8a; }
        .not-list { display: flex; flex-direction: column; }
        .not-item {
          display: flex;
          align-items: center;
          gap: 1rem;
          padding: 0.9rem 0;
          border-bottom: 1px solid var(--border);
          font-size: 0.83rem;
          color: var(--dim);
          font-weight: 300;
        }
        .not-item:first-child { border-top: 1px solid var(--border); }
        .not-item::before { content: '—'; font-family: var(--mono); font-size: 0.7rem; color: var(--dim); flex-shrink: 0; }
        .contact-strip {
          display: grid;
          grid-template-columns: 1fr auto;
          gap: 3rem;
          align-items: center;
          padding: 3rem;
          background: var(--bg2);
          border: 1px solid var(--border);
        }
        .cs-h3 { font-family: var(--serif); font-size: 1.4rem; font-weight: 300; color: var(--text); margin-bottom: 0.5rem; }
        .cs-p { font-size: 0.84rem; color: var(--muted); line-height: 1.7; font-weight: 300; max-width: 460px; }

        @media (max-width: 700px) {
          .contact-strip { grid-template-columns: 1fr; gap: 1.5rem; }
          .now-item { grid-template-columns: 1fr; gap: 0.25rem; }
          .now-item-num { display: none; }
        }
      `}</style>
    </div>
  );
}
