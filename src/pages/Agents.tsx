import { AgentPanel } from "../components/AgentPanel";

export function Agents() {
  return (
    <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 24px" }}>
      <section style={{ paddingTop: 64, paddingBottom: 80 }}>
        <div
          style={{
            marginBottom: 48,
            paddingBottom: 24,
            borderBottom: "1px solid var(--border)",
          }}
        >
          <div
            style={{
              fontFamily: "var(--font-mono)",
              fontSize: 11,
              color: "var(--dim)",
              letterSpacing: "0.14em",
              marginBottom: 12,
            }}
          >
            /AGENTS
          </div>
          <h1
            style={{
              fontSize: 40,
              fontWeight: 700,
              letterSpacing: "-0.025em",
              color: "var(--fg)",
              marginBottom: 16,
            }}
          >
            AI Workforce
          </h1>
          <p
            style={{
              fontSize: 14,
              color: "var(--dim)",
              lineHeight: 1.6,
              maxWidth: 600,
            }}
          >
            A private AI company running autonomously. Four agents handle
            research, operations, archiving, and publishing. This is the public
            status view — the data feed is mocked for now; the architecture is
            real.
          </p>
        </div>

        <AgentPanel />

        <div
          style={{
            marginTop: 48,
            padding: "20px 24px",
            borderLeft: "2px solid var(--accent)",
            background: "#080808",
          }}
        >
          <div
            style={{
              fontFamily: "var(--font-mono)",
              fontSize: 10,
              letterSpacing: "0.1em",
              color: "var(--accent)",
              marginBottom: 8,
            }}
          >
            ARCHITECTURE NOTE
          </div>
          <p style={{ fontSize: 13, color: "var(--dim)", lineHeight: 1.6 }}>
            Orchestrated via Paperclip. Executed through OpenClaw. The mock data
            endpoint matches the shape of the real system — swapping in live data
            is a config change, not a rebuild. Real API connections are not yet
            public.
          </p>
        </div>
      </section>
    </div>
  );
}
