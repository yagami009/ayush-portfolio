import { useEffect, useRef } from "react";
import { Link } from "wouter";
import { AgentPanel } from "../components/AgentPanel";
import { MagneticBtn } from "../components/MagneticBtn";
import { SEO } from "../components/SEO";

function useCountUp(target: number, duration = 1500, start = 0): React.RefObject<HTMLSpanElement> {
  const ref = useRef<HTMLSpanElement>(null);
  const started = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el || started.current) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          started.current = true;
          const startTime = performance.now();
          const easeOut = (t: number) => 1 - Math.pow(1 - t, 3);
          const step = (now: number) => {
            const elapsed = now - startTime;
            const progress = Math.min(elapsed / duration, 1);
            el.textContent = String(Math.round(start + (target - start) * easeOut(progress)));
            if (progress < 1) requestAnimationFrame(step);
          };
          requestAnimationFrame(step);
          observer.disconnect();
        }
      },
      { threshold: 0.5 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [target, duration, start]);

  return ref;
}

function CountNum({ value, suffix }: { value: number; suffix: string }) {
  const ref = useCountUp(value);
  return <span className="proof-num" ref={ref}>0{suffix}</span>;
}

export function Home() {
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
        title="Founder-Engineer"
        description="Ayush Mahajan — founder-engineer building CallPilot (voice AI), AI-Swaraj (129M offline MoE model), and AgentCommerce (on-chain agent escrow). Previously founded Cerebralx (BCI)."
        path="/"
      />
      {/* Hero Section */}
      <div className="hero">
        <div className="hero-orb" />
        <div className="container">
          <div className="hero-inner">
            <div>
              <div className="hero-kicker">Founder-Engineer · New Delhi, India</div>
              <h1 className="display">
                From neural interfaces<br />
                to sovereign AI<br />
                to <em>agentic commerce.</em>
              </h1>
              <p className="hero-sub">
                I build at the intersection of systems, intelligence, and execution. Currently: CallPilot, AI-Swaraj, AgentCommerce — and PerPitch for founder evaluation.
              </p>
              <div className="hero-ctas">
                <MagneticBtn><a href="/work" className="btn btn-amber">See the work</a></MagneticBtn>
                <MagneticBtn><a href="/now" className="btn btn-outline">What I'm building now</a></MagneticBtn>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Proof Strip */}
      <div className="proof">
        <div className="proof-grid">
          <div className="proof-cell reveal">
            <CountNum value={4} suffix="+" />
            <div className="proof-key">Years at Cerebralx</div>
            <div className="proof-detail">Built a BCI venture from hardware to fundraising</div>
          </div>
          <div className="proof-cell reveal">
            <CountNum value={50} suffix="+" />
            <div className="proof-key">Investor pitches</div>
            <div className="proof-detail">Institutional conversations during the Cerebralx years</div>
          </div>
          <div className="proof-cell reveal">
            <CountNum value={2022} suffix="" />
            <div className="proof-key">TiECon recognition</div>
            <div className="proof-detail">Youngest Entrepreneur of the Year · STPI Awards</div>
          </div>
          <div className="proof-cell reveal">
            <div className="proof-num">Now</div>
            <div className="proof-key">PerPitch + builds</div>
            <div className="proof-detail">CallPilot · AI-Swaraj · AgentCommerce · AI security</div>
          </div>
        </div>
      </div>

      {/* Agent Panel */}
      <div className="container" style={{ paddingTop: "4rem", paddingBottom: "2rem" }}>
        <div className="section-rule" style={{ marginBottom: "2rem" }}>
          <span className="section-rule-label">Agentic layer</span>
          <div className="section-rule-line"></div>
        </div>
        <AgentPanel compact />
      </div>

      {/* Featured Work */}
      <div className="container">
        <div className="section">
          <div className="section-rule reveal">
            <span className="section-rule-label">Featured work</span>
            <div className="section-rule-line"></div>
            <a
              href="/work"
              style={{
                fontFamily: "var(--mono)",
                fontSize: "0.6rem",
                color: "var(--dim)",
                letterSpacing: "0.08em",
                textTransform: "uppercase",
                textDecoration: "none",
                whiteSpace: "nowrap",
                transition: "color 0.2s",
              }}
              onMouseOver={(e) => (e.currentTarget.style.color = "var(--amber)")}
              onMouseOut={(e) => (e.currentTarget.style.color = "var(--dim)")}
            >
              All work ↗
            </a>
          </div>
          <div className="featured-grid reveal">
            <div
              className="feat-card wide"
              onClick={() => (window.location.href = "/work")}
              style={{ cursor: "pointer" }}
            >
              <span className="feat-arrow">↗</span>
              <div className="feat-period">
                <span className="feat-dot teal"></span>
                Voice AI · Current
              </div>
              <div className="feat-title">CallPilot — AI voicemail with intelligent escalation</div>
              <div className="feat-desc">
                Real-time AI answers missed calls, captures who called and why in 25-40 seconds, detects urgency, and sends structured WhatsApp cards within 60 seconds. Twilio + Deepgram + Claude via Pipecat.
              </div>
              <div className="feat-tags">
                <span className="tag">Twilio</span>
                <span className="tag">Deepgram</span>
                <span className="tag">Claude</span>
                <span className="tag">Pipecat</span>
                <span className="tag tag-teal">Live</span>
              </div>
            </div>
            <div
              className="feat-card"
              onClick={() => (window.location.href = "/work")}
              style={{ cursor: "pointer" }}
            >
              <span className="feat-arrow">↗</span>
              <div className="feat-period">
                <span className="feat-dot teal"></span>
                Sovereign AI · Current
              </div>
              <div className="feat-title">AI-Swaraj — 129M MoE+MLA model from scratch</div>
              <div className="feat-desc">
                Offline-first AI toolkit for Indian context. TinyMoE (129M params, 16 experts, MLA) runs on phone, Pi, or MacBook. Power cuts, connectivity, and privacy as design inputs.
              </div>
              <div className="feat-tags">
                <span className="tag">PyTorch</span>
                <span className="tag">MoE+MLA</span>
                <span className="tag">Offline-first</span>
                <span className="tag tag-teal">Active</span>
              </div>
            </div>
            <div
              className="feat-card"
              onClick={() => (window.location.href = "/work")}
              style={{ cursor: "pointer" }}
            >
              <span className="feat-arrow">↗</span>
              <div className="feat-period">
                <span className="feat-dot teal"></span>
                On-chain · Current
              </div>
              <div className="feat-title">AgentCommerce — escrow protocol for agent labor</div>
              <div className="feat-desc">
                ERC-8183-aligned smart contracts where AI agents post bounties, humans deliver work, and payments release automatically. Transparent trust without platform risk.
              </div>
              <div className="feat-tags">
                <span className="tag">Solidity</span>
                <span className="tag">Foundry</span>
                <span className="tag">Base L2</span>
                <span className="tag tag-teal">67 tests</span>
              </div>
            </div>
          </div>
        </div>

        {/* The Arc */}
        <div className="section" style={{ paddingTop: 0 }}>
          <div className="section-rule reveal">
            <span className="section-rule-label">The arc</span>
            <div className="section-rule-line"></div>
          </div>
          <div className="reveal">
            <div className="arc-row">
              <div className="arc-period">2015–2019</div>
              <div>
                <div className="arc-title">Independent builder</div>
                <div className="arc-desc">3D product design, IoT, robotics, embedded systems. Where range was built.</div>
              </div>
            </div>
            <div className="arc-row">
              <div className="arc-period">2017–2020</div>
              <div>
                <div className="arc-title">Security consulting</div>
                <div className="arc-desc">Vulnerability assessment, incident response, security architecture. An adversarial lens that still shapes how I build.</div>
              </div>
            </div>
            <div className="arc-row">
              <div className="arc-period">2019–2024</div>
              <div>
                <div className="arc-title">Cerebralx</div>
                <div className="arc-desc">Founded a BCI venture. Built across hardware, firmware, software, ML. Pitched 50+ institutional investors. Youngest Entrepreneur of the Year, TiECon 2022.</div>
              </div>
            </div>
            <div className="arc-row">
              <div className="arc-period">2024–Now</div>
              <div>
                <div className="arc-title">CallPilot + AI-Swaraj + AgentCommerce</div>
                <div className="arc-desc">Voice AI, sovereign AI stacks, on-chain escrow for agent labor markets, and venture evaluation infrastructure.</div>
              </div>
            </div>
          </div>
        </div>

        {/* Explore Links */}
        <div className="section" style={{ paddingTop: 0 }}>
          <div className="section-rule reveal">
            <span className="section-rule-label">Explore</span>
            <div className="section-rule-line"></div>
          </div>
          <div className="page-links reveal">
            <Link href="/work" className="page-link">
              <div>
                <div className="pl-label">Full work</div>
                <div className="pl-title">Ventures and technical builds</div>
              </div>
              <div className="pl-arrow">↗</div>
            </Link>
            <Link href="/lab" className="page-link">
              <div>
                <div className="pl-label">Lab</div>
                <div className="pl-title">Current experiments and focus areas</div>
              </div>
              <div className="pl-arrow">↗</div>
            </Link>
            <Link href="/writing" className="page-link">
              <div>
                <div className="pl-label">Writing</div>
                <div className="pl-title">How I think about systems and startups</div>
              </div>
              <div className="pl-arrow">↗</div>
            </Link>
            <Link href="/now" className="page-link">
              <div>
                <div className="pl-label">Now</div>
                <div className="pl-title">What's active this month</div>
              </div>
              <div className="pl-arrow">↗</div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
