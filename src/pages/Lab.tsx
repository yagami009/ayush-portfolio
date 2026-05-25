import { useEffect } from "react";
import { SEO } from "../components/SEO";

export function Lab() {
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
      <SEO
        title="Lab"
        description="Current experiments and focus areas — CallPilot voice AI, AI-Swaraj sovereign models, AgentCommerce on-chain escrow, AI security research, and local inference. By Ayush Mahajan."
        path="/lab"
      />
      <div className="page-hero">
        <div className="container">
          <div className="eyebrow">Lab</div>
          <h1 className="display">Experiments &amp; <em>thinking out loud</em></h1>
          <p className="lead" style={{ marginTop: "1.25rem" }}>
            The layer between research and shipped work. Focus areas, operating state, field notes, and the stack I'm working with.
          </p>
        </div>
      </div>

      <div className="container">
        <div className="section">
          <div className="section-rule reveal">
            <span className="section-rule-label">Current focus areas</span>
            <div className="section-rule-line"></div>
          </div>
          <p className="body-sm reveal" style={{ maxWidth: "560px", marginBottom: "2.5rem" }}>
            My current work is concentrated on building systems where AI meets real-world constraints — voice, sovereignty, commerce, and security.
          </p>
          <div className="focus-grid reveal">
            <div className="focus-cell">
              <div className="fc-num">01</div>
              <div className="fc-title">CallPilot — Voice AI</div>
              <div className="fc-desc">Real-time AI voicemail with intelligent escalation. Captures who called, why, and urgency in 25-40 seconds — sends structured WhatsApp card within 60 seconds.</div>
            </div>
            <div className="focus-cell">
              <div className="fc-num">02</div>
              <div className="fc-title">AI-Swaraj — Sovereign AI</div>
              <div className="fc-desc">129M MoE+MLA model built from scratch. Offline-first for Indian context — runs on phone, Pi, or MacBook. Constraint-native design: power cuts, connectivity, privacy.</div>
            </div>
            <div className="focus-cell">
              <div className="fc-num">03</div>
              <div className="fc-title">AgentCommerce — On-chain trust</div>
              <div className="fc-desc">ERC-8183-aligned escrow protocol for AI-agent labor markets. Transparent, programmable trust for agent-to-human work. Base L2, 67 tests passing.</div>
            </div>
            <div className="focus-cell">
              <div className="fc-num">04</div>
              <div className="fc-title">AI security</div>
              <div className="fc-desc">Prompt injection, unsafe tool execution, RCE surfaces, RAG poisoning, and the hidden attack surface of agent platforms. Background in security makes this a natural convergence point.</div>
            </div>
            <div className="focus-cell">
              <div className="fc-num">05</div>
              <div className="fc-title">On-device &amp; local inference</div>
              <div className="fc-desc">Exploring what becomes possible when intelligence runs under tighter resource constraints and stronger privacy assumptions. Not just smaller models — better architecture.</div>
            </div>
            <div className="focus-cell">
              <div className="fc-num">06</div>
              <div className="fc-title">Agentic systems &amp; orchestration</div>
              <div className="fc-desc">Designing systems that can plan, coordinate tools, and operate with durable structure instead of prompt spaghetti. State machines, explicit memory, control surfaces.</div>
            </div>
          </div>
        </div>

        {/* Operating Layer */}
        <div className="section" style={{ paddingTop: 0 }}>
          <div className="section-rule reveal">
            <span className="section-rule-label">Operating layer</span>
            <div className="section-rule-line"></div>
          </div>
          <p className="body-sm reveal" style={{ maxWidth: "500px", marginBottom: "2.5rem" }}>
            A public-facing view of where effort is going right now. Updated regularly.
          </p>
          <div className="op-grid reveal">
            <div className="op-cell">
              <div className="op-unit">Research</div>
              <div className="op-row">
                <span className="op-dot"></span>
                <span className="op-status-text">Active</span>
              </div>
              <div className="op-detail">Voice AI (CallPilot), sovereign AI stacks (AI-Swaraj), on-chain escrow (AgentCommerce), agent platforms, local inference constraints, system architecture.</div>
            </div>
            <div className="op-cell">
              <div className="op-unit">Archive</div>
              <div className="op-row">
                <span className="op-dot"></span>
                <span className="op-status-text">Active</span>
              </div>
              <div className="op-detail">Turning projects, experiments, fundraising lessons, and technical decisions into durable notes.</div>
            </div>
            <div className="op-cell">
              <div className="op-unit">Build</div>
              <div className="op-row">
                <span className="op-dot amber"></span>
                <span className="op-status-text">In motion</span>
              </div>
              <div className="op-detail">CallPilot, AI-Swaraj, AgentCommerce, founder-evaluation infrastructure, mobile AI flows, and local-first systems.</div>
            </div>
            <div className="op-cell">
              <div className="op-unit">Publish</div>
              <div className="op-row">
                <span className="op-dot amber"></span>
                <span className="op-status-text">Warming up</span>
              </div>
              <div className="op-detail">Translating real work into public notes, X posts, and sharper proof of execution.</div>
            </div>
          </div>
          <div className="op-meta reveal">
            <div className="op-meta-cell">Mode: <span>Systems-first</span></div>
            <div className="op-meta-cell">Bias: <span>Execution over posture</span></div>
            <div className="op-meta-cell">Terrain: <span>Voice + Sovereign AI + Commerce</span></div>
            <div className="op-meta-cell">Rhythm: <span>Ongoing</span></div>
          </div>
        </div>

        {/* Field Notes */}
        <div className="section" style={{ paddingTop: 0 }}>
          <div className="section-rule reveal">
            <span className="section-rule-label">Field notes</span>
            <div className="section-rule-line"></div>
          </div>
          <p className="body-sm reveal" style={{ maxWidth: "480px", marginBottom: "2.5rem" }}>
            Short logs from the build process. Fragments, not manifestos.
          </p>
          <div className="notes-grid reveal">
            <div className="note-card">
              <div className="note-meta">May 2026</div>
              <div className="note-headline">25 seconds to understand a missed call.</div>
              <div className="note-body">CallPilot showed me that voice AI isn't a prompt problem — it's a latency budget problem. You have 25 seconds of ring time, then 35 seconds to classify intent and escalate. Every millisecond of TTS latency eats into comprehension time.</div>
            </div>
            <div className="note-card">
              <div className="note-meta">Apr 2026</div>
              <div className="note-headline">The offline-first constraint is the feature.</div>
              <div className="note-body">Building AI-Swaraj taught me that offline isn't a fallback — it's a design constraint that produces better architecture. Power cuts, connectivity, privacy — these are inputs, not obstacles.</div>
            </div>
            <div className="note-card">
              <div className="note-meta">Apr 2026</div>
              <div className="note-headline">{"Programmable trust > platform trust."}</div>
              <div className="note-body">AgentCommerce started from a simple question: when an AI agent needs to pay a human, why trust a platform's escrow? Smart contracts make trust transparent and verifiable by default.</div>
            </div>
            <div className="note-card">
              <div className="note-meta">Mar 2026</div>
              <div className="note-headline">Security changes the way you build agents.</div>
              <div className="note-body">The interesting question isn't whether an agent can call a tool. It's what happens when the wrong input reaches the wrong capability boundary.</div>
            </div>
            <div className="note-card">
              <div className="note-meta">Mar 2026</div>
              <div className="note-headline">Structure beats prompt cleverness.</div>
              <div className="note-body">The more serious the system gets, the less impressive pure prompting feels. Durable workflows, state, memory, and control surfaces start to matter more.</div>
            </div>
            <div className="note-card">
              <div className="note-meta">Ongoing</div>
              <div className="note-headline">Constraints clarify what matters.</div>
              <div className="note-body">Every system I've built under real limits — milliseconds for BCI, kilobytes for firmware, battery for mobile AI — taught me more than any unconstrained environment. Demo conditions lie.</div>
            </div>
          </div>
        </div>

        {/* Current Stack */}
        <div className="section" style={{ paddingTop: 0 }}>
          <div className="section-rule reveal">
            <span className="section-rule-label">Current stack</span>
            <div className="section-rule-line"></div>
          </div>
          <div className="reveal">
            <div className="stack-row">
              <div className="stack-cat">Voice AI</div>
              <div className="stack-items">
                <span className="tag">Twilio</span>
                <span className="tag">Deepgram</span>
                <span className="tag">Pipecat</span>
                <span className="tag">Claude</span>
              </div>
            </div>
            <div className="stack-row">
              <div className="stack-cat">Sovereign AI</div>
              <div className="stack-items">
                <span className="tag">PyTorch</span>
                <span className="tag">MoE+MLA</span>
                <span className="tag">GGUF / Quantized</span>
                <span className="tag">Cactus SDK</span>
              </div>
            </div>
            <div className="stack-row">
              <div className="stack-cat">On-chain</div>
              <div className="stack-items">
                <span className="tag">Solidity</span>
                <span className="tag">Foundry</span>
                <span className="tag">OpenZeppelin</span>
                <span className="tag">Base L2</span>
              </div>
            </div>
            <div className="stack-row">
              <div className="stack-cat">Orchestration</div>
              <div className="stack-items">
                <span className="tag">LangGraph</span>
                <span className="tag">LangChain</span>
                <span className="tag">Custom state machines</span>
              </div>
            </div>
            <div className="stack-row">
              <div className="stack-cat">Local inference</div>
              <div className="stack-items">
                <span className="tag">Ollama</span>
                <span className="tag">Cactus SDK</span>
                <span className="tag">GGUF / quantized models</span>
              </div>
            </div>
            <div className="stack-row">
              <div className="stack-cat">Retrieval</div>
              <div className="stack-items">
                <span className="tag">ChromaDB</span>
                <span className="tag">sqlite-vss</span>
                <span className="tag">Local embeddings</span>
              </div>
            </div>
            <div className="stack-row">
              <div className="stack-cat">Mobile</div>
              <div className="stack-items">
                <span className="tag">iOS</span>
                <span className="tag">Android</span>
                <span className="tag">Offline-first architecture</span>
              </div>
            </div>
            <div className="stack-row">
              <div className="stack-cat">Security</div>
              <div className="stack-items">
                <span className="tag">Prompt injection analysis</span>
                <span className="tag">Tool sandboxing</span>
                <span className="tag">Capability scoping</span>
              </div>
            </div>
            <div className="stack-row">
              <div className="stack-cat">Hardware era</div>
              <div className="stack-items">
                <span className="tag">Embedded systems</span>
                <span className="tag">Firmware</span>
                <span className="tag">Electronics design</span>
                <span className="tag">Real-time ML</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        .page-hero { padding: 6rem 0 4rem; border-bottom: 1px solid var(--border); }
        .body-sm { font-size: 0.86rem; color: var(--muted); line-height: 1.75; font-weight: 300; }
        .focus-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 1px; background: var(--border); border: 1px solid var(--border); }
        .focus-cell { background: var(--bg); padding: 2rem; transition: background 0.2s; }
        .focus-cell:hover { background: var(--bg3); }
        .fc-num { font-family: var(--mono); font-size: 0.58rem; color: var(--dim); letter-spacing: 0.08em; margin-bottom: 1.1rem; }
        .fc-title { font-family: var(--serif); font-size: 1.05rem; font-weight: 300; color: var(--text); margin-bottom: 0.6rem; line-height: 1.3; }
        .fc-desc { font-size: 0.81rem; color: var(--muted); line-height: 1.65; font-weight: 300; }
        .op-grid { display: grid; grid-template-columns: repeat(4, 1fr); gap: 1px; background: var(--border); border: 1px solid var(--border); }
        .op-cell { background: var(--bg); padding: 1.75rem; }
        .op-unit { font-family: var(--mono); font-size: 0.6rem; color: var(--amber); letter-spacing: 0.1em; text-transform: uppercase; margin-bottom: 0.7rem; }
        .op-row { display: flex; align-items: center; gap: 0.4rem; margin-bottom: 0.7rem; }
        .op-dot { width: 5px; height: 5px; border-radius: 50%; background: var(--teal); }
        .op-dot.amber { background: var(--amber); animation: pulse 2s ease infinite; }
        .op-status-text { font-family: var(--mono); font-size: 0.58rem; color: var(--dim); letter-spacing: 0.06em; text-transform: uppercase; }
        .op-detail { font-size: 0.8rem; color: var(--muted); line-height: 1.6; font-weight: 300; }
        .op-meta { display: grid; grid-template-columns: repeat(4, 1fr); gap: 1px; background: var(--border); border: 1px solid var(--border); border-top: none; }
        .op-meta-cell { background: var(--bg2); padding: 1rem 1.75rem; font-family: var(--mono); font-size: 0.6rem; color: var(--dim); letter-spacing: 0.06em; }
        .op-meta-cell span { color: var(--muted); }
        .notes-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 1px; background: var(--border); border: 1px solid var(--border); }
        .note-card { background: var(--bg); padding: 2rem; transition: background 0.2s; }
        .note-card:hover { background: var(--bg3); }
        .note-meta { font-family: var(--mono); font-size: 0.58rem; color: var(--dim); letter-spacing: 0.08em; text-transform: uppercase; margin-bottom: 0.9rem; }
        .note-headline { font-family: var(--serif); font-style: italic; font-size: 1rem; font-weight: 300; color: var(--text); margin-bottom: 0.65rem; line-height: 1.35; }
        .note-body { font-size: 0.82rem; color: var(--muted); line-height: 1.7; font-weight: 300; }
        .stack-row { display: grid; grid-template-columns: 140px 1fr; gap: 2.5rem; padding: 1.25rem 0; border-bottom: 1px solid var(--border); align-items: center; }
        .stack-row:first-child { border-top: 1px solid var(--border); }
        .stack-cat { font-family: var(--mono); font-size: 0.6rem; color: var(--amber); letter-spacing: 0.08em; text-transform: uppercase; }
        .stack-items { display: flex; gap: 0.4rem; flex-wrap: wrap; }

        @media (max-width: 860px) {
          .focus-grid { grid-template-columns: repeat(2, 1fr); }
          .op-grid { grid-template-columns: repeat(2, 1fr); }
          .op-meta { grid-template-columns: repeat(2, 1fr); }
          .notes-grid { grid-template-columns: 1fr; }
          .stack-row { grid-template-columns: 1fr; gap: 0.5rem; }
        }
      `}</style>
    </div>
  );
}
