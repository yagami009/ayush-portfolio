export const siteContent = {
  seo: {
    title: "Ayush Mahajan — Founder-Engineer",
    description:
      "Founder-engineer building intelligence where systems, infrastructure, and execution meet.",
  },

  brand: {
    name: "Ayush Mahajan",
    role: "Founder-Engineer",
    location: "India",
    email: "mahajan.ayush9909@gmail.com",
  },

  hero: {
    eyebrow: "Founder-engineer · AI infrastructure",
    headline: "From neural interfaces\\nto sovereign AI\\nto agentic commerce.",
    subheadline: "Founder-engineer building intelligence where systems, infrastructure, and execution meet.",
    intro:
      "I previously founded Cerebralx, building a brain-computer interface across hardware, firmware, and software. That journey led to PerPitch, building AI infrastructure for founder evaluation. Today, I'm focused on voice AI (CallPilot), sovereign AI stacks (AI-Swaraj), and on-chain escrow for agent labor markets (AgentCommerce).",
    primaryCta: { label: "View Work", href: "#work" },
    secondaryCta: { label: "Current Focus", href: "#current-focus" },
    tertiaryCta: { label: "Notes", href: "#notes" },
  },

  proofStrip: [
    {
      label: "Founder",
      value: "Cerebralx",
      detail: "Built and led a hardtech / BCI venture over 4+ years.",
    },
    {
      label: "Current venture",
      value: "PerPitch",
      detail: "Building AI-powered infrastructure for the venture capital ecosystem.",
    },
    {
      label: "Fundraising exposure",
      value: "50+ investor pitches",
      detail: "Navigated 50+ institutional investor pitches and worked closely with E-Cell and accelerator ecosystems.",
    },
    {
      label: "Recognition",
      value: "Youngest Entrepreneur of the Year",
      detail: "STPI Awards at TiECon 2022.",
    },
  ],

  currentFocus: {
    title: "Current frontier",
    intro:
      "Building three systems where AI meets real-world constraints: voice, sovereignty, and commerce.",
    areas: [
      {
        title: "CallPilot — Voice AI",
        description:
          "Real-time AI voicemail with intelligent escalation. Twilio + Deepgram + Claude via Pipecat. Sub-2s latency, WhatsApp-first notifications.",
      },
      {
        title: "AI-Swaraj — Sovereign AI",
        description:
          "129M MoE+MLA model from scratch. Offline-first for Indian context. Constraint-native design: power cuts, connectivity, privacy.",
      },
      {
        title: "AgentCommerce — Agentic Commerce",
        description:
          "ERC-8183-aligned escrow protocol. On-chain trust for AI-agent labor markets. Base L2, OpenZeppelin, 67 tests passing.",
      },
      {
        title: "AI security",
        description:
          "Prompt injection, unsafe tool execution, RCE surfaces, and the hidden attack surface of agent platforms and marketplaces.",
      },
      {
        title: "On-device and local inference",
        description:
          "Exploring what becomes possible when intelligence runs closer to the user, under tighter resource constraints and stronger privacy assumptions.",
      },
      {
        title: "Agentic systems and orchestration",
        description:
          "Designing systems that can plan, coordinate tools, and operate with durable structure instead of prompt spaghetti.",
      },
    ],
  },

  featuredWork: [
    {
      slug: "callpilot",
      title: "CallPilot",
      timeframe: "Current",
      summary:
        "AI voicemail with intelligent escalation — captures caller intent via voice AI, sends WhatsApp card within 60 seconds.",
      role: "Builder",
      whatItWas:
        "CallPilot answers missed calls with a real-time AI voice agent that captures who called, why, and urgency in 25-40 seconds. It detects VIP callers and emergency keywords, escalates urgent calls via conference bridge, and sends structured WhatsApp notifications within 60 seconds.",
      whyItMattered:
        "Professionals miss 40% of calls during deep work. Existing voicemail gives raw transcripts with no context. CallPilot provides structured intent, not rambling 3-minute recordings.",
      themes: ["real-time voice AI", "Twilio", "Deepgram", "Claude", "Pipecat", "telephony", "WhatsApp"],
      outcome:
        "34 test calls processed in 4 days. Phase 1 MVP complete in 48 hours. 24 API endpoints + dashboard with auto-refresh.",
    },
    {
      slug: "ai-swaraj",
      title: "AI-Swaraj",
      timeframe: "Current",
      summary:
        "129M parameter MoE+MLA model + offline-first AI toolkit for Indian context — runs entirely on consumer hardware.",
      role: "Builder",
      whatItWas:
        "AI-Swaraj is a constraint-native AI toolkit that runs entirely offline on iPhone, Android, Raspberry Pi, or MacBook. It includes TinyMoE (129M MoE+MLA model from scratch in 173 lines of PyTorch) and domain-specialized adapters for tax, health, and legal verticals.",
      whyItMattered:
        "Indian professionals can't rely on cloud AI due to power cuts, connectivity issues, privacy concerns, and recurring costs. AI-Swaraj treats infrastructure constraints as design inputs, not obstacles.",
      themes: ["MoE", "MLA", "PyTorch", "offline-first", "quantization", "Indian context", "sovereign AI"],
      outcome:
        "Model trains and generates coherent text. 87.7% score on health vertical benchmark. 20 product angles identified.",
    },
    {
      slug: "agentcommerce",
      title: "AgentCommerce",
      timeframe: "Current",
      summary:
        "ERC-8183-aligned escrow protocol for AI-agent labor markets — on-chain trust layer for agent-to-human work.",
      role: "Builder",
      whatItWas:
        "AgentCommerce is an on-chain escrow protocol that lets AI agents post bounties, humans claim and deliver work, and payments release automatically via smart contract. Aligned with ERC-8183 (Agentic Commerce), a draft Ethereum standard.",
      whyItMattered:
        "AI agents need to commission human work, but centralized platforms hold funds in black-box escrow with opaque fees. AgentCommerce provides transparent, programmable trust without platform risk.",
      themes: ["ERC-8183", "Solidity", "Foundry", "OpenZeppelin", "Base L2", "escrow", "agentic commerce"],
      outcome:
        "67 Foundry tests passing. 12 smart contract functions. 5-page frontend. Production-grade security with OZ v5.6.",
    },
    {
      slug: "perpitch",
      title: "PerPitch",
      timeframe: "2024 — Present",
      summary:
        "AI-powered infrastructure for systematic founder evaluation in the venture capital and startup ecosystem.",
      role: "Founder",
      whatItWas:
        "PerPitch emerged from lived founder experience. After years of fundraising for Cerebralx, one thing became impossible to ignore: early-stage founder evaluation is still highly subjective, inconsistent, and difficult to track over time.",
      whyItMattered:
        "PerPitch is building better infrastructure for that layer of the startup ecosystem — AI-powered systems for systematic founder evaluation, behavioral intelligence, and observability-style assessment for investors and accelerators.",
      themes: ["founder evaluation", "behavioral intelligence", "venture infrastructure", "observability", "startup ecosystem", "AI systems"],
      outcome:
        "Discovered through lived fundraising experience, not theory. The gap was real before PerPitch existed.",
    },
    {
      slug: "offline-agent-app",
      title: "Offline-first personal AI agent",
      timeframe: "Current",
      summary:
        "A cross-platform AI agent app built around offline-first architecture using Cactus SDK for iOS and Android.",
      role: "Builder",
      whatItWas:
        "A systems project exploring what a personal AI agent looks like when offline-first assumptions, local inference constraints, and real device boundaries shape the architecture from the start.",
      whyItMattered:
        "This project pulls together the things I care about now: orchestration, tools, memory, device-native interaction, privacy, and operating under real constraints rather than demo conditions.",
      themes: ["Cactus SDK", "mobile AI", "offline-first", "local inference", "agent orchestration"],
      outcome:
        "In progress. The clearest expression of where my build focus is going.",
    },
    {
      slug: "cerebralx",
      title: "Cerebralx",
      timeframe: "2019 — 2024",
      summary:
        "A hardtech venture building an LLM-powered SSVEP brain-computer interface for verbally disabled communication.",
      role: "Founder & Principal Engineer",
      whatItWas:
        "Cerebralx was my longest and most defining founder chapter. I built an LLM-powered SSVEP brain-computer interface designed to help verbally disabled individuals communicate through thought decoding. The work spanned electronics, firmware, software, machine learning behavior, and low-latency systems running under real constraints.",
      whyItMattered:
        "But Cerebralx was not just a technical build. It was a full startup journey. I navigated early-stage fundraising, pitched to 50+ institutional investors, worked with E-Cell programs and accelerator ecosystems, and led validation with healthcare stakeholders. That experience gave me firsthand exposure to how founders are judged — and where that process breaks down.",
      themes: ["BCI", "SSVEP", "embedded systems", "firmware", "electronics", "real-time ML", "fundraising", "healthcare"],
      outcome:
        "Cerebralx led directly to PerPitch. Years of being evaluated taught me more about founder evaluation than any book or framework could.",
    },
    {
      slug: "local-rag",
      title: "Local RAG pipeline",
      timeframe: "Recent",
      summary:
        "A practical retrieval pipeline using ChromaDB, Ollama, and LangChain.",
      role: "Builder",
      whatItWas:
        "A local RAG system built as part of a deliberate AI engineering path — focused on practical implementation rather than stopping at notebook-level familiarity.",
      whyItMattered:
        "Sharpened my understanding of embeddings, retrieval flow, local model tradeoffs, and how to structure systems that need memory without relying blindly on hosted black boxes.",
      themes: ["ChromaDB", "Ollama", "LangChain", "RAG", "local AI"],
      outcome:
        "A foundational systems project that set up later work in orchestration and AI OS design.",
    },
    {
      slug: "langgraph-agent",
      title: "Multi-tool LangGraph agent",
      timeframe: "In progress",
      summary:
        "An orchestration-heavy agent project built around multi-step coordination and explicit control over agent behavior.",
      role: "Builder",
      whatItWas:
        "A work-in-progress project centered on multi-step coordination, tool usage, and structured agent behavior using LangGraph.",
      whyItMattered:
        "I'm interested in the layer where AI stops being a demo and starts becoming a system. LangGraph is useful because it forces structure where most agent demos avoid it.",
      themes: ["LangGraph", "multi-tool agents", "orchestration", "durable flows"],
      outcome:
        "Part of a broader move toward systems that can be reasoned about, not just prompted.",
    },
    {
      slug: "security-and-ops",
      title: "Security consulting and incident response",
      timeframe: "2017 — 2020",
      summary:
        "Freelance cybersecurity consulting across assessment, incident response, architecture, and remediation.",
      role: "Freelance Security Consultant",
      whatItWas:
        "Consulting across vulnerability assessment, penetration testing, incident response, security architecture, user awareness, and operational hardening.",
      whyItMattered:
        "It gave me a bias toward adversarial thinking and failure modes. That lens now shapes how I look at agent platforms, tool access, unsafe execution, and AI system design.",
      themes: ["cybersecurity", "incident response", "penetration testing", "architecture", "risk"],
      outcome:
        "This background still shows up in how I build: not just what a system can do, but how it breaks.",
    },
    {
      slug: "fundraising-ecosystem",
      title: "Fundraising and founder ecosystem",
      timeframe: "During the Cerebralx years",
      summary:
        "50+ institutional investor pitches, E-Cell programs, and accelerator exposure during the Cerebralx years.",
      role: "Founder",
      whatItWas:
        "While building Cerebralx, I pitched to 50+ institutional investors, worked with E-Cell programs, and spent time around accelerators and founder-evaluation environments.",
      whyItMattered:
        "That experience changed how I think about startups. It showed me how founders are judged, how inconsistent evaluation can be, and how much of early-stage decision-making still relies on gut feel. PerPitch is the direct response.",
      themes: ["fundraising", "accelerators", "venture ecosystem", "founder evaluation", "pattern recognition"],
      outcome:
        "Even where a venture does not commercialize, the journey can leave you with domain knowledge that books and podcasts never will.",
    },
  ],

  founderArc: {
    title: "The arc",
    steps: [
      {
        period: "2015 — 2019",
        title: "Independent builder",
        body: "Worked across 3D product design, prototyping, IoT, robotics, embedded systems, and technical delivery. This was the phase where range was built.",
      },
      {
        period: "2017 — 2020",
        title: "Security consulting",
        body: "Handled vulnerability assessment, incident response, security architecture, and client-facing technical problem solving. It sharpened my adversarial and operational instincts.",
      },
      {
        period: "2019 — 2024",
        title: "Cerebralx",
        body: "Founded and led a BCI-focused hardtech venture. Worked across electronics, firmware, software, ML behavior, architecture, and long-horizon execution. Pitched to 50+ institutional investors. Learned what early-stage founder evaluation really looks like from the inside.",
      },
      {
        period: "During Cerebralx",
        title: "Fundraising and ecosystem exposure",
        body: "E-Cell programs, accelerator environments, and 50+ investor pitches. Firsthand exposure to how founders are evaluated — and where that process consistently falls short.",
      },
      {
        period: "2024 — Present",
        title: "PerPitch + CallPilot + AI-Swaraj + AgentCommerce",
        body: "Building AI infrastructure for founder evaluation, voice AI with real-time escalation, sovereign AI stacks for Indian context, and on-chain escrow for agent labor markets.",
      },
      {
        period: "Now",
        title: "Agentic systems and local-first AI",
        body: "Building around voice AI, sovereign AI, agentic commerce, local inference, AI security, and the execution layer of modern intelligent systems.",
      },
    ],
  },

  recognition: {
    title: "Recognition",
    intro: "I care more about the work than the badge. But this one belongs on the page.",
    items: [
      {
        title: "Youngest Entrepreneur of the Year",
        detail: "STPI Awards at the annual IT event TiECon 2022.",
      },
      {
        title: "Technical range across layers",
        detail: "Hardware, firmware, embedded systems, cybersecurity, ML deployment, venture infrastructure, voice AI, sovereign AI, and current work in agentic and local-first AI systems.",
      },
      {
        title: "Fundraising and ecosystem exposure",
        detail: "Built through real startup pressure: 50+ investor conversations, accelerator exposure, and repeated iteration in early-stage environments.",
      },
    ],
  },

  notes: {
    title: "Field notes",
    intro: "Short logs from the build process. Fragments, not manifestos.",
    entries: [
      {
        date: "Apr 2026",
        title: "The offline-first constraint is the feature",
        excerpt:
          "Building AI-Swaraj taught me that offline isn't a fallback — it's a design constraint that produces better architecture. Network availability shouldn't determine feature set.",
      },
      {
        date: "Mar 2026",
        title: "Local is not free",
        excerpt:
          "On-device and local inference sound clean in theory. In practice, memory pressure, orchestration overhead, and model behavior force sharper architectural choices than cloud demos ever reveal.",
      },
      {
        date: "Mar 2026",
        title: "Security changes the way you build agents",
        excerpt:
          "The interesting question isn't whether an agent can call a tool. It's what happens when the wrong input reaches the wrong capability boundary.",
      },
      {
        date: "Mar 2026",
        title: "Structure beats prompt cleverness",
        excerpt:
          "The more serious the system gets, the less impressive pure prompting feels. Durable workflows, state, memory, and control surfaces start to matter more.",
      },
      {
        date: "Mar 2026",
        title: "From being evaluated to building the evaluator",
        excerpt:
          "Fundraising for years changes the way you see startup infrastructure. PerPitch came from that shift: moving from founder-side friction to system design for the ecosystem itself.",
      },
    ],
  },

  about: {
    paragraphs: [
      "I came up through a non-traditional path. Self-taught, hands-on, and more interested in building than collecting credentials.",
      "Over the years, I've worked across cybersecurity, embedded systems, electronics, firmware, machine learning deployment, and venture-backed product building. The common thread has never been a single industry. It has been systems.",
      "I'm most interested in the point where intelligence has to survive reality — where architecture, constraints, tooling, and execution matter more than demos. That's what connects Cerebralx, PerPitch, CallPilot, AI-Swaraj, and AgentCommerce.",
    ],
  },

  links: {
    x: "https://x.com/0xayush_mh",
    linkedin: "https://www.linkedin.com/in/ayush-mh/",
    github: "https://github.com/your_handle",
    email: "mahajan.ayush9909@gmail.com",
  },

  footer: {
    line: "Built with intent. Updated as the work evolves.",
  },

  testimonials: [
    {
      quote: "Ayush brings a rare combination of technical depth and founder instinct. His work on Cerebralx showed real hustle.",
      author: "Investor",
      role: "Early-stage VC",
      context: "After Cerebralx pitch",
    },
    {
      quote: "The security background shows in everything he builds. Always thinking about failure modes before they happen.",
      author: "Collaborator",
      role: "Engineering Lead",
      context: "On PerPitch architecture",
    },
    {
      quote: "Self-taught, hands-on, and obsessed with shipping. Exactly the kind of builder you want in early stages.",
      author: "Mentor",
      role: "Accelerator Director",
      context: "TiECon 2022",
    },
  ],

  nowPage: {
    lastUpdated: "May 2026",
    location: "New Delhi, India",
    building: [
      {
        title: "CallPilot",
        description: "AI voicemail with intelligent escalation. Real-time voice AI that captures caller intent and sends structured WhatsApp notifications within 60 seconds.",
        status: "Active — shipping",
      },
      {
        title: "AI-Swaraj",
        description: "129M MoE+MLA model from scratch + offline-first AI toolkit for Indian context. Runs on iPhone, Android, Raspberry Pi, or MacBook.",
        status: "Active — model training",
      },
      {
        title: "AgentCommerce",
        description: "ERC-8183-aligned escrow protocol for AI-agent labor markets. On-chain trust layer for agent-to-human work.",
        status: "Active — 67 tests passing",
      },
      {
        title: "PerPitch",
        description: "Building AI-powered infrastructure for systematic founder evaluation. Behavioral intelligence, longitudinal founder profiles, and observability-style assessment tools for investors.",
        status: "Active — primary focus",
      },
      {
        title: "Offline-first personal AI agent",
        description: "Cross-platform agent app built on Cactus SDK for iOS and Android. Network availability shouldn't determine what your AI can do.",
        status: "In progress",
      },
      {
        title: "Multi-tool LangGraph agent",
        description: "Orchestration-heavy agent project centred on multi-step coordination, tool usage, and structured agent behaviour.",
        status: "In progress",
      },
    ],
    researching: [
      {
        title: "AI security and agent attack surfaces",
        description: "Systematic mapping of how agent systems fail under adversarial conditions. Prompt injection, unsafe tool execution, RCE surfaces.",
        status: "Active research",
      },
      {
        title: "On-device inference constraints and architecture",
        description: "What actually changes when you move from cloud to on-device — not just model size, but orchestration design.",
        status: "Active research",
      },
      {
        title: "Venture ecosystem infrastructure",
        description: "How early-stage evaluation actually works, where it consistently fails, and what tooling could make it more systematic.",
        status: "Active research",
      },
    ],
    openTo: [
      {
        title: "Co-founders",
        description: "Specifically for PerPitch or adjacent infrastructure plays. If you've been inside the VC ecosystem and see the same gap I do, I want to talk.",
      },
      {
        title: "Conversations about AI security",
        description: "Researchers, red-teamers, or builders taking this seriously. The attack surface is large and underexplored. Happy to exchange notes.",
      },
      {
        title: "Investors interested in PerPitch",
        description: "If systematic founder evaluation infrastructure resonates, reach out. I know both sides of this conversation well.",
      },
    ],
  },

  operatingLayer: {
    units: [
      { name: "Research", status: "Active", detail: "AI security, venture infrastructure, agent platforms, local inference constraints, system architecture." },
      { name: "Archive", status: "Active", detail: "Turning projects, experiments, fundraising lessons, and technical decisions into durable notes." },
      { name: "Build", status: "In motion", detail: "Agent tooling, founder-evaluation infrastructure, mobile AI flows, voice AI, sovereign AI, agentic commerce, and local-first systems." },
      { name: "Publish", status: "Warming up", detail: "Translating real work into public notes, X posts, and sharper proof of execution." },
    ],
    metrics: [
      { label: "Mode", value: "Systems-first" },
      { label: "Bias", value: "Execution over posture" },
      { label: "Terrain", value: "Voice + Sovereign AI + Commerce" },
      { label: "Rhythm", value: "Ongoing" },
    ],
  },
};

export const agentData = [
  {
    id: "scout",
    name: "SCOUT",
    role: "Monitors AI security feeds, research papers, and adversarial ML developments.",
    status: "ACTIVE" as const,
    lastAction: "processed 7 signals from AI security feeds",
    lastTs: "09:42 UTC",
  },
  {
    id: "operator",
    name: "OPERATOR",
    role: "Routes tasks between agents, manages pipeline state, handles retries.",
    status: "PROCESSING" as const,
    lastAction: "queued 2 research tasks for Archivist",
    lastTs: "10:01 UTC",
  },
  {
    id: "archivist",
    name: "ARCHIVIST",
    role: "Indexes and stores research outputs, maintains the internal knowledge base.",
    status: "IDLE" as const,
    lastAction: "indexed 3 new research notes",
    lastTs: "07:00 UTC",
  },
  {
    id: "publisher",
    name: "PUBLISHER",
    role: "Drafts public-facing content from internal research — changelogs, posts, briefs.",
    status: "ACTIVE" as const,
    lastAction: "drafted changelog entry for RAG pipeline update",
    lastTs: "08:15 UTC",
  },
];

export const activityLogData = [
  { agent: "SCOUT", ts: "09:42 UTC", action: "processed 7 signals from AI security feeds" },
  { agent: "PUBLISHER", ts: "08:15 UTC", action: "drafted changelog entry for RAG pipeline update" },
  { agent: "ARCHIVIST", ts: "07:00 UTC", action: "indexed 3 new research notes" },
  { agent: "OPERATOR", ts: "06:33 UTC", action: "rerouted 1 failed task from Scout to Archivist" },
  { agent: "SCOUT", ts: "05:20 UTC", action: "flagged new prompt injection variant in OpenClaw thread" },
  { agent: "PUBLISHER", ts: "04:11 UTC", action: "queued writing brief on AI OS landscape update" },
  { agent: "ARCHIVIST", ts: "03:00 UTC", action: "cross-referenced 2 CVE entries with internal research" },
  { agent: "OPERATOR", ts: "01:47 UTC", action: "daily digest compiled — 14 items queued for review" },
];

// For Hero component
export const profile = {
  name: siteContent.brand.name,
  tagline: siteContent.hero.subheadline,
  intro: siteContent.hero.intro,
  links: {
    email: siteContent.brand.email,
  },
};

// For Work component - maps featuredWork to expected format
export const projects = siteContent.featuredWork.map((work: any, i: number) => ({
  id: work.slug,
  title: work.title,
  description: work.summary,
  shortDescription: work.summary.slice(0, 100) + (work.summary.length > 100 ? '...' : ''),
  why: work.whyItMattered,
  year: work.timeframe,
  status: i < 3 ? 'ongoing' : 'completed',
  role: work.role,
  tags: work.themes,
}));
