import { useEffect, useState } from "react";
import { agentData, activityLogData } from "../content";
import { motion } from "framer-motion";

const statusStyle = {
  ACTIVE: { color: "#4ade80", label: "ACTIVE" },
  PROCESSING: { color: "var(--accent)", label: "PROCESSING" },
  IDLE: { color: "#3a3a3a", label: "IDLE" },
};

export function AgentPanel({ compact = false }: { compact?: boolean }) {
  const [tick, setTick] = useState(0);

  useEffect(() => {
    const id = setInterval(() => setTick((t) => t + 1), 60000);
    return () => clearInterval(id);
  }, []);

  return (
    <div>
      <div style={{
        display: "flex",
        alignItems: "center",
        gap: 10,
        marginBottom: 24,
        paddingBottom: 16,
        borderBottom: "1px solid var(--border)",
      }}>
        <span style={{
          width: 7, height: 7, borderRadius: "50%",
          background: "#4ade80", display: "inline-block",
        }} className="blink" />
        <span style={{
          fontFamily: "var(--font-mono)",
          fontSize: 10,
          letterSpacing: "0.12em",
          color: "#4ade80",
        }}>SYSTEM ONLINE</span>
        <span style={{
          fontFamily: "var(--font-mono)",
          fontSize: 10,
          color: "var(--fg3)",
          marginLeft: "auto",
        }}>last poll: {tick === 0 ? "just now" : `${tick}m ago`}</span>
      </div>

      <div style={{
        display: "grid",
        gridTemplateColumns: compact ? "repeat(2, 1fr)" : "repeat(auto-fit, minmax(220px, 1fr))",
        gap: 1,
        background: "var(--border)",
        marginBottom: 1,
      }}>
        {agentData.map((agent) => {
          const s = statusStyle[agent.status];
          return (
            <motion.div
              key={agent.id}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.3 }}
              style={{ background: "var(--bg2)", padding: "20px 20px 18px" }}
            >
              <div style={{
                display: "flex", justifyContent: "space-between",
                alignItems: "flex-start", marginBottom: 10,
              }}>
                <span style={{
                  fontFamily: "var(--font-mono)",
                  fontSize: 12, fontWeight: 700,
                  letterSpacing: "0.06em", color: "var(--fg)",
                }}>{agent.name}</span>
                <span style={{
                  fontFamily: "var(--font-mono)",
                  fontSize: 9, letterSpacing: "0.1em",
                  color: s.color,
                  border: `1px solid ${s.color}22`,
                  background: `${s.color}10`,
                  padding: "2px 7px", borderRadius: 4,
                }}>{s.label}</span>
              </div>
              <p style={{ fontSize: 12, color: "var(--fg3)", lineHeight: 1.55, marginBottom: 14 }}>
                {agent.role}
              </p>
              <div style={{
                fontFamily: "var(--font-mono)",
                fontSize: 10, color: "var(--fg3)",
              }}>
                <span style={{ color: "var(--accent)", opacity: 0.7 }}>{agent.lastTs}</span>
                {" — "}{agent.lastAction}
              </div>
            </motion.div>
          );
        })}
      </div>

      <div style={{ border: "1px solid var(--border)", borderTop: "none", background: "#0a0a0a" }}>
        <div style={{
          padding: "10px 16px",
          borderBottom: "1px solid var(--border)",
          fontFamily: "var(--font-mono)",
          fontSize: 9, color: "var(--fg3)",
          letterSpacing: "0.12em",
        }}>ACTIVITY LOG</div>
        {activityLogData.slice(0, compact ? 5 : 8).map((entry, i) => (
          <div key={i} style={{
            padding: "8px 16px",
            borderBottom: i < (compact ? 4 : 7) ? "1px solid #111" : "none",
            display: "flex", gap: 12, alignItems: "baseline",
          }}>
            <span style={{
              fontFamily: "var(--font-mono)", fontSize: 9,
              color: "var(--accent)", opacity: 0.8,
              letterSpacing: "0.06em", minWidth: 76, flexShrink: 0,
            }}>{entry.agent}</span>
            <span style={{
              fontFamily: "var(--font-mono)", fontSize: 9,
              color: "var(--fg3)", minWidth: 62, flexShrink: 0,
            }}>{entry.ts}</span>
            <span style={{ fontFamily: "var(--font-mono)", fontSize: 9, color: "#444" }}>
              {entry.action}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
