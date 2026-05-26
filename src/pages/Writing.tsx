import { useEffect, useState } from "react";
import { SEO } from "../components/SEO";
import { useScrollDepth } from "../lib/useTracking";

const posts = [
  {
    id: "p1",
    date: "May 2026",
    title: "CallPilot: 34 Calls to a Working AI Voicemail",
    excerpt: "What I learned from building a real-time voice AI that answers missed calls, captures intent in 25 seconds, and escalates emergencies before the caller hangs up.",
    tags: [{ label: "Voice AI" }, { label: "CallPilot", variant: "teal" }, { label: "Systems" }],
    content: {
      sections: [
        { title: "The latency budget", body: "A missed call rings for 25 seconds before going to voicemail. That's the entire window. Your AI has to: pick up, greet, understand the caller's intent, classify urgency, and send a WhatsApp notification — all within 60 seconds. Every millisecond of latency eats into comprehension time." },
        { title: "Escalation is the real product", body: "Voicemail is transcription. CallPilot is triage. The difference: detecting that a caller said 'emergency' or mentioned your name means the difference between a WhatsApp card and a live conference bridge handoff. Escalation turns a passive system into an active one." },
        { title: "Why most voice AI demos break", body: "WebRTC is easy. PSTN is hard. Latency spikes, codec mismatches, VAD tuning, barge-in handling — the telco layer is where voice projects go to die. Pipecat + Deepgram Aura gave me the real-time pipeline. Everything else was wiring." },
      ],
      conclusion: "Voice AI isn't a prompt problem. It's a systems problem with a latency budget measured in seconds, not tokens.",
    },
  },
  {
    id: "p2",
    date: "May 2026",
    title: "Training a 129M MoE+MLA Model from Scratch",
    excerpt: "Building AI-Swaraj taught me that offline isn't a fallback — it's a design constraint that produces better architecture. Loss 4.82→2.17, 16 routed experts, MLA attention.",
    tags: [{ label: "AI" }, { label: "AI-Swaraj", variant: "teal" }, { label: "Training" }],
    content: {
      sections: [
        { title: "Why MoE + MLA", body: "India has 1.4 billion people and terrible cloud reliability. A dense 129M model is forgettable. But 16 routed experts + 1 shared expert with Multi-head Latent Attention means each token only activates ~8M parameters — tiny compute, but the model still sees diverse knowledge across all experts." },
        { title: "The training loop", body: "TinyStories as a curriculum. Loss from 4.82 to 2.17. Each expert specializes — some handle dialogue, some narrative, some reasoning patterns. MLA compresses KV cache so the model runs on a phone without OOMing. The architecture isn't flash — it's built for the constraint." },
        { title: "The offline-first constraint", body: "Power cuts, 2G connectivity, ₹0 recurring cost. These aren't obstacles — they're design inputs. If your AI requires cloud, it's not for India. AI-Swaraj runs entirely on device because the use case demands it." },
      ],
      conclusion: "The offline-first constraint is the feature. Network availability shouldn't determine what intelligence you can access.",
    },
  },
  {
    id: "p3",
    date: "May 2026",
    title: "AgentCommerce: When AI Needs to Pay Humans",
    excerpt: "AI agents will eventually need to commission human work. But centralized platforms hold escrow in black boxes. ERC-8183-aligned smart contracts make trust transparent.",
    tags: [{ label: "Web3" }, { label: "AgentCommerce", variant: "teal" }, { label: "Smart contracts" }],
    content: {
      sections: [
        { title: "The problem with platform escrow", body: "When an AI agent posts a bounty for human work — design, research, code review — centralized platforms hold the funds in opacity. You trust the platform's disbursement logic, their dispute resolution, their fee structure. That trust is assumed, not verified." },
        { title: "Transparent trust via smart contracts", body: "ERC-8183 defines how agents and humans transact on-chain. Agent posts a bounty with escrowed funds. Human delivers work. Smart contract verifies completion and releases payment. No platform middleman, no hidden fees, no gatekeeping. 12 contract functions, 67 Foundry tests, OpenZeppelin v5.6." },
        { title: "Why this matters now", body: "Agent-to-human labor markets are coming. The question isn't if — it's whether the trust layer will be open and verifiable, or locked inside another platform. AgentCommerce is the open alternative." },
      ],
      conclusion: "Programmable trust shouldn't require trusting a platform. Escrow should be transparent by default.",
    },
  },
  {
    id: "p4",
    date: "Apr 2026",
    title: "Founder Evaluation at Scale: What VCs Get Wrong",
    excerpt: "After pitching to 50+ investors and building evaluation infrastructure, I've seen both sides. Here's what actually predicts founder success — and why current methods miss most of it.",
    tags: [{ label: "Startups" }, { label: "VC" }, { label: "PerPitch", variant: "amber" }],
    content: {
      sections: [
        { title: "The current state", body: "Most early-stage evaluation is gut feeling (bias-heavy), pattern matching (misses outliers), static snapshots (ignores trajectory), and social-proof dependent (misses hidden talent)." },
        { title: "What actually matters", body: "Execution velocity. Can they ship? Not prototype — ship to users. The best founders have a trail of shipped products, not just ideas.\n\nResponse to pressure. How do they handle 'no'? The best founders iterate between meetings. They don't just persist — they adapt.\n\nCoachability vs. conviction. There's a sweet spot. Too coachable means no original thought. Too convicted means ignoring market signals.\n\nTechnical range. Can the technical founder discuss business model? Can the business founder understand technical constraints? The best have range." },
        { title: "The PerPitch approach", body: "Behavioral tracking across pitch iterations. Systematic founder improvement metrics. Bias-reducing evaluation frameworks. Longitudinal founder profiles." },
      ],
      conclusion: "The best founders aren't born — they're built. The infrastructure for evaluating them should reflect that.",
    },
  },
  {
    id: "p5",
    date: "Apr 2026",
    title: "AI Security Red Flags Every Founder Should Know",
    excerpt: "From prompt injection to RCE via tool execution — the attack surface of AI agents is larger than most realize. What I've learned building and researching agent security.",
    tags: [{ label: "AI" }, { label: "Security" }, { label: "Agents" }],
    content: {
      sections: [
        { title: "Prompt injection", body: "Modern attacks use indirect injection via retrieved documents, multi-turn context manipulation, and visual prompts. Most developers skip explicit defences until it's too late." },
        { title: "Tool execution exploits", body: "Your agent may have access to web search, code execution, file system, and APIs with your credentials. Each is a potential RCE surface. The question isn't 'can the agent use the tool?' — it's 'should it, given this specific context?'" },
        { title: "The 'helpful' assistant problem", body: "LLMs are optimised to be helpful. Attackers exploit this: without explicit authorisation checks, an agent prompted by a malicious document may comply with instructions it shouldn't." },
        { title: "RAG poisoning", body: "If your agent retrieves from external sources — web pages, documentation, databases — the retrieval itself becomes an attack vector. Poisoned content influences agent behaviour downstream." },
      ],
      conclusion: "Security isn't a feature you add later. It shapes the entire architecture. Build with failure modes in mind from day one.",
    },
  },
  {
    id: "p6",
    date: "Mar 2026",
    title: "Structure Beats Prompt Cleverness",
    excerpt: "The more serious the system gets, the less impressive pure prompting feels. Why durable workflows, state, and memory matter more than well-crafted system prompts.",
    tags: [{ label: "AI" }, { label: "Agent architecture" }, { label: "Systems" }],
    content: {
      sections: [
        { title: "The prompt engineering trap", body: "Early AI development focused on prompting — craft the perfect instructions, tune the examples, optimise the wording. This works for demos. Production systems face different challenges: handling interruptions and resumption, managing long-running tasks across sessions, debugging why a specific output occurred." },
        { title: "When structure wins", body: "Prompt-heavy: one massive system prompt with branching logic. Hard to debug, painful to scale. Structure-heavy: clear state machine, explicit memory layer, tool definitions with schemas, minimal system prompt. Slower to demo — but it works when things get real." },
        { title: "The LangGraph lesson", body: "Tools like LangGraph force structure: nodes, edges, state. At first this feels like overhead. Then you build something that runs for hours, needs to resume after a crash, or requires audit trails." },
      ],
      conclusion: "My current projects start with structure first: what are the states? What memory do we need? How do tools connect? Prompts come last, after the architecture is solid. Clever prompts impress in demos. Structure wins in production.",
    },
  },
  {
    id: "p7",
    date: "Mar 2026",
    title: "From Being Evaluated to Building the Evaluator",
    excerpt: "Fundraising for years changes the way you see startup infrastructure. How PerPitch came from moving from founder-side friction to system design for the ecosystem itself.",
    tags: [{ label: "Startups" }, { label: "Fundraising" }, { label: "PerPitch", variant: "amber" }],
    content: {
      sections: [
        { title: "The Cerebralx years", body: "I spent nearly five years building Cerebralx. That meant pitching constantly. 50+ investor conversations. Accelerator applications. Demo days. Each pitch taught me something about how founders are judged — not theory, but the reality of decision-making under uncertainty." },
        { title: "What I observed", body: "The evaluation process was inconsistent (same pitch, different reactions by mood), pattern-matching heavy, static (snapshots not trajectory), and social-proof dependent (warm intros over cold outreach, regardless of merit)." },
        { title: "The friction becomes the product", body: "Every frustrating pitch experience became a data point. What would systematic founder evaluation look like? How do you capture trajectory, not just snapshots? Can behavioural patterns predict outcomes better than pedigree?" },
      ],
      conclusion: "Lived experience is the best product research. Sometimes you're building the thing you wish existed.",
    },
  },
];

export function Writing() {
  useScrollDepth("writing");
  const [openPost, setOpenPost] = useState<string | null>(null);

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

  const togglePost = (id: string) => {
    setOpenPost(openPost === id ? null : id);
  };

  return (
    <div className="page">
      <SEO
        title="Writing"
        description="Notes from the build process — CallPilot voice AI, AI-Swaraj training, AgentCommerce smart contracts, AI security, founder evaluation, and systems thinking. By Ayush Mahajan."
        path="/writing"
        type="article"
      />
      <div className="page-hero">
        <div className="container">
          <div className="eyebrow">Writing</div>
          <h1 className="display">How I <em>think</em></h1>
          <p className="lead" style={{ marginTop: "1.25rem" }}>
            Notes from the build process — AI systems, security, startup infrastructure, and founder evaluation. Click any post to read it here.
          </p>
        </div>
      </div>

      <div className="container">
        <div className="section">
          {posts.map((post) => (
            <div key={post.id}>
              <div
                className={`post-row reveal ${openPost === post.id ? "open" : ""}`}
                onClick={() => togglePost(post.id)}
                style={{ cursor: "pointer" }}
              >
                <div className="post-date">{post.date}</div>
                <div>
                  <div className="post-title">{post.title}</div>
                  <div className="post-excerpt">{post.excerpt}</div>
                  <div className="post-tag-list">
                    {post.tags.map((tag, i) => (
                      <span key={i} className={`tag${tag.variant === "amber" ? " tag-amber" : tag.variant === "teal" ? " tag-teal" : ""}`}>{tag.label}</span>
                    ))}
                  </div>
                </div>
                <div className="post-arrow">{openPost === post.id ? "↑" : "↓"}</div>
              </div>
              {openPost === post.id && (
                <div className="post-full open">
                  <button className="close-btn" onClick={() => togglePost(post.id)}>↑ Collapse</button>
                  <div className="post-full-body">
                    {post.content.sections.map((section, i) => (
                      <div key={i}>
                        <h4>{section.title}</h4>
                        {section.body.split("\n\n").map((paragraph, j) => (
                          <p key={j}>{paragraph}</p>
                        ))}
                      </div>
                    ))}
                    <div className="conclusion">{post.content.conclusion}</div>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      <style>{`
        .page-hero { padding: 6rem 0 4rem; border-bottom: 1px solid var(--border); }
        .post-row {
          display: grid;
          grid-template-columns: 100px 1fr 16px;
          gap: 2.5rem;
          align-items: start;
          padding: 2rem 0;
          border-bottom: 1px solid var(--border);
          cursor: pointer;
          transition: background 0.15s;
        }
        .post-row:first-child { border-top: 1px solid var(--border); }
        .post-row:hover .post-title { color: var(--amber); }
        .post-date { font-family: var(--mono); font-size: 0.6rem; color: var(--dim); letter-spacing: 0.06em; padding-top: 0.25rem; }
        .post-title { font-family: var(--serif); font-size: 1.15rem; font-weight: 300; color: var(--text); line-height: 1.3; margin-bottom: 0.5rem; transition: color 0.18s; }
        .post-excerpt { font-size: 0.82rem; color: var(--muted); line-height: 1.65; font-weight: 300; max-width: 580px; }
        .post-tag-list { display: flex; gap: 0.35rem; flex-wrap: wrap; margin-top: 0.75rem; }
        .post-arrow { font-size: 0.8rem; color: var(--dim); padding-top: 0.25rem; transition: transform 0.18s, color 0.18s; flex-shrink: 0; }
        .post-row:hover .post-arrow { transform: translate(0, 3px); color: var(--amber); }
        .post-row.open .post-arrow { transform: translate(0, 3px); color: var(--amber); }
        .post-full {
          display: none;
          border-bottom: 1px solid var(--border);
          background: var(--bg2);
          padding: 2rem 2.5rem 2.5rem;
          margin: 0 -2.5rem;
        }
        .post-full.open { display: block; }
        .post-full-body { max-width: 640px; margin-left: calc(100px + 2.5rem); }
        .post-full-body h4 { font-family: var(--serif); font-size: 1rem; font-weight: 400; color: var(--text); margin: 1.5rem 0 0.5rem; font-style: italic; }
        .post-full-body p { font-size: 0.85rem; color: var(--muted); line-height: 1.8; font-weight: 300; margin-bottom: 0.75rem; white-space: pre-wrap; }
        .post-full-body strong { color: var(--text); font-weight: 400; }
        .conclusion {
          font-family: var(--serif);
          font-style: italic;
          font-size: 0.9rem;
          color: var(--text);
          border-left: 2px solid var(--amber);
          padding-left: 1rem;
          margin-top: 1.5rem;
          line-height: 1.65;
        }
        .close-btn {
          font-family: var(--mono);
          font-size: 0.6rem;
          color: var(--dim);
          letter-spacing: 0.08em;
          text-transform: uppercase;
          cursor: pointer;
          margin-bottom: 1.5rem;
          display: inline-flex;
          align-items: center;
          gap: 0.4rem;
          border: none;
          background: none;
          padding: 0;
          transition: color 0.15s;
        }
        .close-btn:hover { color: var(--muted); }

        @media (max-width: 700px) {
          .post-row { grid-template-columns: 1fr 16px; gap: 0.5rem; }
          .post-date { display: none; }
          .post-full-body { margin-left: 0; }
          .post-full { margin: 0 -1.5rem; padding: 1.5rem; }
        }
      `}</style>
    </div>
  );
}
