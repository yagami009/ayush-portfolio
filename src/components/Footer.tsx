import { useEffect, useState } from "react";

export function Footer() {
  const [time, setTime] = useState("");

  useEffect(() => {
    const update = () => {
      const now = new Date();
      setTime(now.toUTCString().slice(17, 25));
    };
    update();
    const id = setInterval(update, 1000);
    return () => clearInterval(id);
  }, []);

  return (
    <footer style={{
      borderTop: "1px solid var(--border)",
      padding: "2rem 2.5rem",
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      flexWrap: "wrap",
      gap: "0.75rem",
    }}>
      <span style={{
        fontFamily: "var(--mono)",
        fontSize: "0.62rem",
        color: "var(--dim)",
        letterSpacing: "0.06em",
      }}>Ayush Mahajan · Founder-Engineer · India</span>
      <span style={{
        fontFamily: "var(--mono)",
        fontSize: "0.62rem",
        color: "var(--dim)",
        letterSpacing: "0.06em",
      }}>Built with intent. Updated as the work evolves.</span>
      {time && (
        <span style={{
          fontFamily: "var(--mono)",
          fontSize: "0.62rem",
          color: "var(--teal)",
          letterSpacing: "0.06em",
        }}>UTC {time}</span>
      )}
    </footer>
  );
}
