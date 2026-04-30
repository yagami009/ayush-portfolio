import { useEffect } from "react";
import { Link } from "wouter";

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
      {/* Hero Section */}
      <div className="hero">
        <div className="container">
          <div className="hero-inner">
            <div>
              <div className="hero-kicker">Founder-Engineer · New Delhi, India</div>
              <h1 className="display">
                From neural interfaces<br />
                to venture infrastructure<br />
                to <em>agentic systems.</em>
              </h1>
              <p className="hero-sub">
                I build at the intersection of systems, intelligence, and execution. Currently: PerPitch — AI infrastructure for how early-stage founders are evaluated.
              </p>
              <div className="hero-ctas">
                <a href="/work" className="btn btn-amber">See the work</a>
                <a href="/now" className="btn btn-outline">What I'm building now</a>
              </div>
            </div>
            <div className="hero-side">
              <div className="side-label">
                <span className="pulse-dot"></span>
                Active right now
              </div>
              <div className="now-item">
                <div className="now-item-tag">Venture</div>
                <div className="now-item-text">PerPitch — AI-powered founder evaluation infrastructure for investors and accelerators.</div>
              </div>
              <div className="now-item">
                <div className="now-item-tag">Build</div>
                <div className="now-item-text">Offline-first AI agent app using Cactus SDK — iOS and Android, local inference first.</div>
              </div>
              <div className="now-item">
                <div className="now-item-tag">Research</div>
                <div className="now-item-text">AI security: prompt injection, unsafe tool execution, RCE surfaces in agent platforms.</div>
              </div>
              <div className="now-item">
                <div className="now-item-tag">Systems</div>
                <div className="now-item-text">Multi-tool LangGraph agent — orchestration-heavy, structure-first.</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Proof Strip */}
      <div className="proof">
        <div className="proof-grid">
          <div className="proof-cell reveal">
            <div className="proof-num">4+</div>
            <div className="proof-key">Years at Cerebralx</div>
            <div className="proof-detail">Built a BCI venture from hardware to fundraising</div>
          </div>
          <div className="proof-cell reveal">
            <div className="proof-num">50+</div>
            <div className="proof-key">Investor pitches</div>
            <div className="proof-detail">Institutional conversations during the Cerebralx years</div>
          </div>
          <div className="proof-cell reveal">
            <div className="proof-num">2022</div>
            <div className="proof-key">TiECon recognition</div>
            <div className="proof-detail">Youngest Entrepreneur of the Year · STPI Awards</div>
          </div>
          <div className="proof-cell reveal">
            <div className="proof-num">Now</div>
            <div className="proof-key">PerPitch + builds</div>
            <div className="proof-detail">Venture infra · local AI · agent systems · AI security</div>
          </div>
        </div>
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
                <span className="feat-dot"></span>
                Hardtech · BCI · 2019–2024
              </div>
              <div className="feat-title">Cerebralx — brain-computer interface for verbal disability</div>
              <div className="feat-desc">
                Nearly five years building an LLM-powered SSVEP BCI — electronics, firmware, software, real-time ML. Also a full startup: fundraising, 50+ investor pitches, accelerators, healthcare validation. Defined everything that came after.
              </div>
              <div className="feat-tags">
                <span className="tag">SSVEP</span>
                <span className="tag">Embedded</span>
                <span className="tag">Real-time ML</span>
                <span className="tag">Fundraising</span>
                <span className="tag tag-amber">Founder</span>
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
                Venture infra · 2024–Present
              </div>
              <div className="feat-title">PerPitch — AI founder evaluation infrastructure</div>
              <div className="feat-desc">
                After years of being evaluated, I built the system I wished existed. Behavioral intelligence and observability for how investors and accelerators assess founders.
              </div>
              <div className="feat-tags">
                <span className="tag">AI systems</span>
                <span className="tag">Venture infra</span>
                <span className="tag tag-teal">Active</span>
              </div>
            </div>
            <div
              className="feat-card"
              onClick={() => (window.location.href = "/lab")}
              style={{ cursor: "pointer" }}
            >
              <span className="feat-arrow">↗</span>
              <div className="feat-period">
                <span className="feat-dot"></span>
                Systems · In progress
              </div>
              <div className="feat-title">Offline-first personal AI agent</div>
              <div className="feat-desc">
                Cross-platform agent app where offline constraints and real device limits shape architecture from day one. Cactus SDK, iOS and Android, local inference only.
              </div>
              <div className="feat-tags">
                <span className="tag">Cactus SDK</span>
                <span className="tag">Local inference</span>
                <span className="tag">Orchestration</span>
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
                <div className="arc-title">PerPitch + current builds</div>
                <div className="arc-desc">Venture evaluation infrastructure, local AI agents, AI security research, agent orchestration systems.</div>
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
