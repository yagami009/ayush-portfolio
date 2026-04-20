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
    eyebrow: "Founder-engineer · systems builder",
    headline: "From neural interfaces\nto venture infrastructure\nto agentic systems.",
    subheadline: "Building intelligence where systems, infrastructure, and execution meet.",
    intro:
      "Previously founded Cerebralx (BCI), now building PerPitch and agentic systems. I work across AI security, local inference, and venture infrastructure.",
    primaryCta: { label: "View Work", href: "#work" },
    secondaryCta: { label: "Get in touch", href: "#contact" },
  },

  proofStrip: [
    {
      label: "Founded",
      value: "Cerebralx",
      detail: "BCI/LLM venture, 2019—2024",
    },
    {
      label: "Currently",
      value: "PerPitch",
      detail: "AI infrastructure for VC",
    },
    {
      label: "Recognition",
      value: "Youngest Entrepreneur",
      detail: "TiECon 2022",
    },
  ],

  notes: {
    title: "Field notes",
    intro: "Short logs from the build process. Fragments, not manifestos.",
    entries: [
      {
        date: "Apr 2026",
        title: "The offline-first constraint is the feature",
        excerpt:
          "Building the Cactus SDK agent app taught me that offline isn't a fallback — it's a design constraint that produces better architecture.",
      },
      {
        date: "Mar 2026",
        title: "Local is not free",
        excerpt:
          "On-device and local inference sound clean in theory. In practice, memory pressure and orchestration overhead force sharper architectural choices.",
      },
      {
        date: "Mar 2026",
        title: "Security changes the way you build agents",
        excerpt:
          "The interesting question isn't whether an agent can call a tool. It's what happens when the wrong input reaches the wrong capability boundary.",
      },
    ],
  },

  workCategories: [
    {
      name: "Ventures",
      description: "Companies founded and led",
      items: [
        { name: "Cerebralx", period: "2019 — 2024", detail: "BCI/LLM venture, hardware to fundraising" },
        { name: "PerPitch", period: "2024 — Present", detail: "AI infrastructure for VC evaluation" },
      ],
    },
    {
      name: "Systems",
      description: "Infrastructure and tooling",
      items: [
        { name: "Offline AI Agent", period: "Current", detail: "Local-first agent architecture" },
        { name: "Security Tooling", period: "Ongoing", detail: "AI security research & adversarial ML" },
      ],
    },
    {
      name: "Research",
      description: "Publications and deep dives",
      items: [
        { name: "BCI + LLM Integration", period: "2022 — 2024", detail: "SSVEP signal processing with language models" },
        { name: "Local Inference", period: "Current", detail: "On-device ML optimization" },
      ],
    },
  ],

  workArchive: {
    github: "https://github.com/yagami009",
    description: "Code, experiments, and open source contributions",
  },

  featuredWork: [
    {
      slug: "cerebralx",
      title: "Cerebralx",
      timeframe: "2019 — 2024",
      summary:
        "Founded and led a hardtech BCI venture. Built LLM-powered SSVEP brain-computer interface for verbally disabled communication.",
      role: "Founder",
      whatItWas:
        "An LLM-powered brain-computer interface for communication through thought decoding.",
      whyItMattered:
        "Full startup journey: hardware, firmware, ML, and 50+ investor pitches. Led to PerPitch.",
      themes: ["BCI", "LLM", "embedded", "fundraising"],
      outcome: "Founded PerPitch from this experience",
    },
    {
      slug: "perpitch",
      title: "PerPitch",
      timeframe: "2024 — Present",
      summary:
        "AI infrastructure for systematic founder evaluation in venture capital.",
      role: "Founder",
      whatItWas:
        "Better infrastructure for how early-stage founders are assessed.",
      whyItMattered:
        "Years of being evaluated taught me what the process lacks.",
      themes: ["AI", "founder-evaluation", "venture"],
      outcome: "Building now",
    },
    {
      slug: "offline-agent",
      title: "Offline AI Agent",
      timeframe: "Current",
      summary:
        "Cross-platform personal AI agent built around offline-first architecture.",
      role: "Builder",
      whatItWas:
        "Personal AI agent using Cactus SDK with local inference.",
      whyItMattered:
        "Exploring what AI looks like when offline constraints shape architecture.",
      themes: ["local-inference", "agents", "offline-first"],
      outcome: "In progress",
    },
  ],

  links: {
    x: "https://x.com/0xayush_mh",
    linkedin: "https://www.linkedin.com/in/ayush-mh/",
    github: "https://github.com/yagami009",
    email: "mahajan.ayush9909@gmail.com",
  },

  about: {
    paragraphs: [
      "I came up through a non-traditional path. Self-taught, hands-on, and more interested in building than collecting credentials.",
      "Over the years, I've worked across cybersecurity, embedded systems, electronics, firmware, machine learning deployment, and venture-backed product building. The common thread has never been a single industry. It has been systems.",
      "I'm most interested in the point where intelligence has to survive reality — where architecture, constraints, tooling, and execution matter more than demos.",
    ],
  },

  footer: {
    line: "Built with intent.",
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
