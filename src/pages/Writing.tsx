import { useEffect, useState } from "react";

const posts = [
  {
    id: "p1",
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
    id: "p2",
    date: "Apr 2026",
    title: "Building Offline-First AI Agents",
    excerpt: "Why the future of AI agents isn't in the cloud. Local LLMs, edge inference, and the architecture of truly personal AI — and the constraints that make it genuinely hard.",
    tags: [{ label: "Architecture" }, { label: "Local AI" }, { label: "Agents" }],
    content: {
      sections: [
        { title: "The problem with cloud-first agents", body: "Every API call is a privacy risk, a latency penalty (200–800ms), a dependency on someone else's uptime, and a cost that scales with usage. When your agent is processing your thoughts, local is the only ethical default." },
        { title: "Architecture decisions", body: "On-device: smaller models (1–3B parameters) for simple tasks. Local network: self-hosted 7–13B models for complex reasoning. Cloud: only for tasks requiring external data or heavy compute.\n\nStorage: SQLite with vector extensions gives local vector search, no external dependencies, full privacy, and surprising performance." },
        { title: "Lessons from Cerebralx", body: "Building a BCI taught me that milliseconds matter. When someone is trying to communicate through thought, you can't wait for a server response. The same principle applies to personal AI." },
      ],
      conclusion: "Constraints don't limit what you can build. They clarify what matters. The cloud is a fallback, not the default.",
    },
  },
  {
    id: "p3",
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
    id: "p4",
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
    id: "p5",
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
  {
    id: "p6",
    date: "Mar 2026",
    title: "Local Is Not Free: The Hidden Costs of On-Device Inference",
    excerpt: "On-device and local inference sound clean in theory. In practice, the constraints force sharper architectural choices than cloud demos ever reveal.",
    tags: [{ label: "AI" }, { label: "Local inference" }, { label: "Architecture" }],
    content: {
      sections: [
        { title: "The memory wall", body: "Cloud inference lets you provision gigabytes without thinking. On-device? Every megabyte counts. A 7B model at 4-bit quantisation still needs ~4GB for weights alone. Add KV cache and application overhead and you're pushing device limits fast." },
        { title: "Orchestration overhead", body: "Cloud agents assume infinite scale. Local agents must manage model loading/unloading (seconds, not milliseconds), context window across sessions, background processing without killing battery, and concurrent operations on limited threads. The orchestration layer becomes the product." },
        { title: "Model behaviour under constraints", body: "Quantised models behave differently. They hallucinate more, follow instructions less precisely, and exhibit edge cases you won't see in cloud deployments. This has to be designed around, not ignored." },
      ],
      conclusion: "Constraints don't limit what you can build. They clarify what matters.",
    },
  },
  {
    id: "p7",
    date: "Mar 2026",
    title: "Security Changes the Way You Build Agents",
    excerpt: "The interesting question isn't whether an agent can call a tool. It's what happens when the wrong input reaches the wrong capability boundary.",
    tags: [{ label: "AI" }, { label: "Security" }, { label: "Tool use" }],
    content: {
      sections: [
        { title: "The demo vs. the reality", body: "Most agent demos show the happy path. Production systems face adversarial inputs constantly — from users, from retrieved content, from chained tool outputs." },
        { title: "The three failure modes", body: "Prompt injection. Malicious input overrides system instructions. Solutions exist but require explicit implementation. Most skip this until too late.\n\nUnsafe tool execution. An agent with file system access can delete files. One with database access can drop tables. The question isn't 'can the agent use the tool?' but 'should it, given this specific context?'\n\nCapability boundary confusion. When agents chain multiple tools, a prompt injection in step 1 can influence tool selection in step 3." },
        { title: "Security-first architecture", body: "Input validation before LLM processing. Capability scoping per tool, per session. Human confirmation for destructive operations. Logging and observability to detect anomalies." },
      ],
      conclusion: "Security isn't overhead. It's a design constraint that produces more robust systems.",
    },
  },
];

export function Writing() {
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
                      <span key={i} className={`tag${tag.variant === "amber" ? " tag-amber" : ""}`}>{tag.label}</span>
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
