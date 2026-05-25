import { useEffect } from "react";
import { SEO } from "../components/SEO";
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
      <SEO
        title="Now"
        description="What Ayush Mahajan is actively building — CallPilot (voice AI, live), AI-Swaraj (sovereign AI, Phase 2), AgentCommerce (on-chain escrow, 67 tests), and PerPitch (founder evaluation)."
        path="/now"
      />
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
                  <div className="now-item-title">CallPilot</div>
                  <div className="now-item-body">
                    AI voicemail with intelligent escalation. Answers missed calls, captures who called and why in 25-40 seconds, detects urgency, and sends structured WhatsApp cards within 60 seconds. Twilio + Deepgram Aura + Claude via Pipecat. 34 calls tested, MVP shipping.
                  </div>
                  <div className="now-item-status s-active">
                    <span className="s-dot"></span>
                    Live — shipping
                  </div>
                </div>
              </div>
              <div className="now-item">
                <div className="now-item-num">02</div>
                <div>
                  <div className="now-item-title">AI-Swaraj</div>
                  <div className="now-item-body">
                    129M MoE+MLA model built from scratch for Indian context. Runs entirely offline on phone, Pi, or MacBook. Loss dropped from 4.82 to 2.17 on TinyStories. 87.7% health eval score. Constraint-native design: power cuts, connectivity, privacy.
                  </div>
                  <div className="now-item-status s-active">
                    <span className="s-dot"></span>
                    Active — model training
                  </div>
                </div>
              </div>
              <div className="now-item">
                <div className="now-item-num">03</div>
                <div>
                  <div className="now-item-title">AgentCommerce</div>
                  <div className="now-item-body">
                    ERC-8183-aligned escrow protocol for AI-agent labor markets. AI agents post bounties, humans deliver work, payments release via smart contract. No black-box escrow, no opaque platform fees. 67 Foundry tests passing, 12 contract functions.
                  </div>
                  <div className="now-item-status s-active">
                    <span className="s-dot"></span>
                    Active — 67 tests passing
                  </div>
                </div>
              </div>
              <div className="now-item">
                <div className="now-item-num">04</div>
                <div>
                  <div className="now-item-title">PerPitch</div>
                  <div className="now-item-body">
                    Building AI-powered infrastructure for systematic founder evaluation. Behavioral intelligence, longitudinal founder profiles, and observability-style assessment tools for investors and accelerators.
                  </div>
                  <div className="now-item-status s-active">
                    <span className="s-dot"></span>
                    Active
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
          <div id="contact" className="contact-strip reveal">
            <div>
              <div className="cs-h3">If any of this resonates, reach out.</div>
              <p className="cs-p">
                I try to respond to every message that's specific and genuine. No templates, no pitches — just tell me what you're working on and why you're writing.
              </p>
              <div className="cs-links">
                <a href="mailto:mahajan.ayush9909@gmail.com" className="cs-link">
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="4" width="20" height="16" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>
                  <span>Email</span>
                </a>
                <a href="https://calendly.com/mahajan-ayush9909/30min" target="_blank" rel="noopener noreferrer" className="cs-link">
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="4" width="18" height="18" rx="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/><path d="m9 16 2 2 4-4"/></svg>
                  <span>Book 30min</span>
                </a>
                <a href="https://wa.me/917206077760?text=Hey%20Ayush%2C%20I%20came%20across%20your%20portfolio" target="_blank" rel="noopener noreferrer" className="cs-link">
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413z"/></svg>
                  <span>WhatsApp</span>
                </a>
              </div>
            </div>
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
        .cs-links { display: flex; gap: 1.5rem; margin-top: 1.25rem; }
        .cs-link {
          display: inline-flex; align-items: center; gap: 0.45rem;
          font-family: var(--mono); font-size: 0.68rem; letter-spacing: 0.06em;
          color: var(--dim); text-decoration: none;
          transition: color 0.15s;
        }
        .cs-link:hover { color: var(--amber); }

        @media (max-width: 700px) {
          .contact-strip { grid-template-columns: 1fr; gap: 1.5rem; }
          .now-item { grid-template-columns: 1fr; gap: 0.25rem; }
          .now-item-num { display: none; }
        }
      `}</style>
    </div>
  );
}
