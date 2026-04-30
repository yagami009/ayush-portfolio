import { useState, useEffect } from "react";
import { Link, useLocation } from "wouter";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "Work", href: "/work" },
  { label: "Lab", href: "/lab" },
  { label: "Writing", href: "/writing" },
  { label: "Now", href: "/now" },
];

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [location] = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 32);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav style={{
      position: "fixed",
      top: 0,
      left: 0,
      right: 0,
      height: "var(--nav-h)",
      zIndex: 500,
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      padding: "0 2.5rem",
      borderBottom: "1px solid var(--border)",
      background: "rgba(13,12,10,0.92)",
      backdropFilter: "blur(14px)",
    }}>
      <Link href="/">
        <span style={{
          fontFamily: "var(--serif)",
          fontSize: "0.95rem",
          fontWeight: 300,
          color: "var(--text)",
          textDecoration: "none",
          letterSpacing: "-0.01em",
        }}>Ayush Mahajan</span>
      </Link>

      <ul style={{
        display: "flex",
        alignItems: "center",
        listStyle: "none",
        margin: 0,
        padding: 0,
      }}>
        {navLinks.map(link => {
          const isActive = location === link.href || (link.href !== "/" && location.startsWith(link.href));
          return (
            <li key={link.label}>
              <Link href={link.href}>
                <span style={{
                  display: "block",
                  padding: "0 1rem",
                  fontSize: "0.72rem",
                  fontWeight: 400,
                  color: isActive ? "var(--text)" : "var(--muted)",
                  textDecoration: "none",
                  letterSpacing: "0.07em",
                  textTransform: "uppercase",
                  transition: "color 0.18s",
                  lineHeight: "var(--nav-h)",
                  borderBottom: isActive ? "2px solid var(--amber)" : "2px solid transparent",
                }}>{link.label}</span>
              </Link>
            </li>
          );
        })}
        <li>
          <a
            href="mailto:mahajan.ayush9909@gmail.com"
            style={{
              color: "var(--bg) !important",
              background: "var(--amber)",
              padding: "0.4rem 1rem !important",
              borderRadius: "var(--radius)",
              borderBottom: "none !important",
              lineHeight: "1.4 !important",
              fontSize: "0.72rem",
              fontWeight: 500,
              letterSpacing: "0.07em",
              textTransform: "uppercase",
              textDecoration: "none",
              transition: "opacity 0.18s",
              display: "inline-block",
            }}
            onMouseEnter={(e) => (e.currentTarget.style.opacity = "0.85")}
            onMouseLeave={(e) => (e.currentTarget.style.opacity = "1")}
          >Connect</a>
        </li>
      </ul>
    </nav>
  );
}
