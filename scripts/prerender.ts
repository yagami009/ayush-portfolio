// Generate pre-rendered fallback HTML files for each route.
// Each file contains structured content for crawlers + the SPA JS bundle
// so React hydrates into an interactive page when JavaScript is available.
import { readFileSync, writeFileSync, mkdirSync, existsSync } from "node:fs";
import { join, dirname } from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const DIST = join(__dirname, "../dist/public");

interface Route {
  path: string;
  title: string;
  description: string;
  content: string;
}

// Core project data used across all pages for crawler content
const PROJECTS = `
  <article>
    <h3>CallPilot <small>LIVE</small></h3>
    <p>AI voicemail with intelligent escalation. Answers missed calls, captures intent in 25-40s, sends WhatsApp notification within 60s. 34 test calls, 24 API endpoints.</p>
  </article>
  <article>
    <h3>AI-Swaraj <small>PHASE 2</small></h3>
    <p>129M MoE+MLA model built from scratch for Indian context. 16 routed experts, Multi-head Latent Attention. Runs entirely offline. Loss 4.82 &rarr; 2.17.</p>
  </article>
  <article>
    <h3>AgentCommerce <small>67 TESTS</small></h3>
    <p>ERC-8183-aligned escrow protocol for AI-agent labor markets. Transparent, programmable trust. 12 contract functions, OpenZeppelin v5.6, Base L2.</p>
  </article>
  <article>
    <h3>PerPitch <small>ACTIVE</small></h3>
    <p>AI infrastructure for systematic founder evaluation. Behavioral tracking, execution velocity, longitudinal profiles.</p>
  </article>
  <article>
    <h3>Cerebralx <small>2019-2024</small></h3>
    <p>Brain-computer interface startup. LLM-powered SSVEP for verbally disabled communication. FDA hardware trials, 5 years of hardtech development.</p>
  </article>`;

const ROUTES: Route[] = [
  {
    path: "/",
    title: "Ayush Mahajan — Founder-Engineer",
    description: "Building CallPilot (voice AI), AI-Swaraj (129M offline MoE model), and AgentCommerce (on-chain agent escrow). Previously founded Cerebralx (BCI).",
    content: `
  <h2>From neural interfaces to sovereign AI to agentic commerce.</h2>
  <p>I build at the intersection of systems, intelligence, and execution.</p>
  <section><h2>Projects</h2>${PROJECTS}</section>`,
  },
  {
    path: "/work",
    title: "Work — Ayush Mahajan",
    description: "CallPilot (live voice AI voicemail), AI-Swaraj (129M MoE+MLA sovereign model), AgentCommerce (ERC-8183 escrow), and PerPitch — technical builds by Ayush Mahajan.",
    content: `
  <h2>Ventures &amp; Technical Builds</h2>
  <p>Two sections: the ventures I've founded and led; and the technical builds I'm shipping.</p>
  <section><h2>Ventures</h2>${PROJECTS}</section>`,
  },
  {
    path: "/lab",
    title: "Lab — Ayush Mahajan",
    description: "Current experiments — CallPilot voice AI, AI-Swaraj sovereign models, AgentCommerce on-chain escrow, AI security research.",
    content: `
  <h2>Lab</h2>
  <p>AI meets real-world constraints — voice, sovereignty, commerce, security.</p>
  <section><h2>Focus Areas</h2>
    <ul>
      <li>Voice AI — CallPilot: real-time call handling, Twilio+VAPI pipeline</li>
      <li>Sovereign AI — AI-Swaraj: 129M MoE+MLA, offline-first</li>
      <li>On-chain trust — AgentCommerce: ERC-8183 escrow, Base L2</li>
    </ul>
  </section>
  <section><h2>Stack</h2>
    <ul>
      <li>Voice: Twilio, VAPI, Asterisk, FastAPI, Deepgram</li>
      <li>ML: PyTorch, sentencepiece, safetensors, Flash Attention</li>
      <li>Web3: Solidity, Foundry, OpenZeppelin, Base</li>
      <li>Infra: Python, TypeScript, Docker, Vercel, Cloudflare</li>
    </ul>
  </section>`,
  },
  {
    path: "/writing",
    title: "Writing — Ayush Mahajan",
    description: "Notes from the build process — CallPilot voice AI, AI-Swaraj training, AgentCommerce smart contracts, AI security, and systems thinking by Ayush Mahajan.",
    content: `
  <h2>Writing</h2>
  <p>Notes from the build process—thinking out loud about voice AI, sovereign models, on-chain trust, and security.</p>
  <section>
    <article>
      <h3>CallPilot: 34 Calls to a Working AI Voicemail</h3>
      <p>What I learned from building a real-time voice AI that answers missed calls in 25 seconds.</p>
    </article>
    <article>
      <h3>Training a 129M MoE+MLA Model from Scratch</h3>
      <p>Lessons from AI-Swaraj — building a sovereign, offline-first model for Indian context.</p>
    </article>
    <article>
      <h3>AgentCommerce: When AI Needs to Pay Humans</h3>
      <p>Designing escrow protocols for agent-to-human labor markets.</p>
    </article>
  </section>`,
  },
  {
    path: "/now",
    title: "Now — Ayush Mahajan",
    description: "What Ayush Mahajan is actively building — CallPilot (live), AI-Swaraj (Phase 2), AgentCommerce (67 tests), and PerPitch.",
    content: `
  <h2>Now</h2>
  <p>What's active this month.</p>
  <section>
    <ol>
      <li><strong>CallPilot</strong> — Live. 34 calls routed, WhatsApp card within 60s.</li>
      <li><strong>AI-Swaraj</strong> — Phase 2. 129M MoE+MLA, loss 2.17, offline on phone.</li>
      <li><strong>AgentCommerce</strong> — 67 tests passing. ERC-8183 escrow, Base L2.</li>
      <li><strong>PerPitch</strong> — Active. Founder evaluation infrastructure.</li>
    </ol>
  </section>
  <section>
    <h2>Contact</h2>
    <ul>
      <li>Email: mahajan.ayush9909@gmail.com</li>
      <li>Book 30 min: calendly.com/mahajan-ayush9909/30min</li>
      <li>WhatsApp: +91 72060 77760</li>
    </ul>
  </section>`,
  },
];

function main() {
  const indexPath = join(DIST, "index.html");
  if (!existsSync(indexPath)) {
    console.error("Build output not found. Run `pnpm build` first.");
    process.exit(1);
  }

  // Read the Vite-built index.html to extract the JS/CSS bundle references
  const originalHtml = readFileSync(indexPath, "utf-8");

  // Extract the CSS link and JS script tags from the built index.html
  const cssMatch = originalHtml.match(/<link[^>]*href="[^"]*\.css"[^>]*>/)?.[0] || "";
  const jsMatch = originalHtml.match(/<script[^>]*src="[^"]*\.js"[^>]*><\/script>/)?.[0] || "";

  console.log("Generating pre-rendered HTML files...\n");

  for (const route of ROUTES) {
    const routePath = route.path === "/" ? "/index.html" : `${route.path}/index.html`;
    const outPath = join(DIST, routePath);
    const dir = dirname(outPath);
    if (!existsSync(dir)) mkdirSync(dir, { recursive: true });

    const html = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>${route.title}</title>
  <meta name="description" content="${route.description}" />
  <meta name="robots" content="index, follow" />
  <link rel="canonical" href="https://ayushmh.com${route.path === "/" ? "" : route.path}" />
  <meta property="og:type" content="website" />
  <meta property="og:title" content="${route.title}" />
  <meta property="og:description" content="${route.description}" />
  <meta property="og:image" content="https://ayushmh.com/opengraph.jpg" />
  <meta property="og:url" content="https://ayushmh.com${route.path === "/" ? "" : route.path}" />
  <meta property="og:site_name" content="Ayush Mahajan" />
  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:title" content="${route.title}" />
  <meta name="twitter:description" content="${route.description}" />
  <meta name="twitter:image" content="https://ayushmh.com/opengraph.jpg" />
  <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
  ${cssMatch}
  <style>
    .seo-content{font-family:Inter,system-ui,sans-serif;max-width:720px;margin:0 auto;padding:2rem;color:#e0e0e0;background:#0a0a0a}
    .seo-content h2{font-size:1.6rem;font-weight:300;margin:1.5rem 0 .5rem}
    .seo-content h3{font-size:1.1rem;font-weight:500;margin:1rem 0 .25rem}
    .seo-content p{font-size:.9rem;color:#a0a0a0;line-height:1.7;margin:.25rem 0 1rem}
    .seo-content small{font-size:.7rem;color:#6a6a8a;margin-left:.5rem}
    .seo-content ul,.seo-content ol{padding-left:1.5rem}
    .seo-content li{padding:.25rem 0;color:#a0a0a0;font-size:.85rem}
    .seo-content a{color:#e0a040}
    #root .seo-content{display:none}
  </style>
</head>
<body>
  <div id="root">
    <div class="seo-content">
      ${route.content}
      <footer style="margin-top:3rem;padding-top:1rem;border-top:1px solid #222;font-size:.8rem;color:#6a6a8a">
        <p>Ayush Mahajan — Founder-Engineer — New Delhi, India</p>
        <p>
          <a href="https://ayushmh.com">Site</a> ·
          <a href="https://www.linkedin.com/in/ayush-mh/">LinkedIn</a> ·
          <a href="https://x.com/0xayush_mh">X</a> ·
          <a href="https://github.com/yagami009">GitHub</a> ·
          <a href="https://calendly.com/mahajan-ayush9909/30min">Book 30min</a>
        </p>
      </footer>
    </div>
  </div>
  ${jsMatch}
</body>
</html>`;

    writeFileSync(outPath, html, "utf-8");
    console.log(`  ✓ ${route.path} -> ${routePath}`);
  }

  // Verify the root index.html was replaced
  const rootHtml = readFileSync(indexPath, "utf-8");
  if (rootHtml.includes("seo-content")) {
    console.log("\n  ✓ Root index.html contains pre-rendered content");
  }

  console.log("\nPre-rendering complete! Each route has static HTML for crawlers.");
  console.log("When React hydrates, the interactive SPA takes over for users.");
}

main();