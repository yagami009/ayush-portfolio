export function Footer() {
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
    </footer>
  );
}
