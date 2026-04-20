import { useState, useEffect } from "react";
import { Link, useLocation } from "wouter";
import { siteContent } from "../content";

const navLinks = [
  { label: "Work", href: "#work" },
  { label: "Focus", href: "#current-focus" },
  { label: "Arc", href: "#arc" },
  { label: "Notes", href: "#notes" },
  { label: "About", href: "#about" },
];

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [location] = useLocation();
  const isHome = location === "/";

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 32);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [menuOpen]);

  const handleAnchor = (href: string) => (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    setMenuOpen(false);
    const id = href.replace("#", "");
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  const navBg = scrolled || menuOpen ? "rgba(13,13,13,0.96)" : "transparent";
  const navBorder = scrolled || menuOpen ? "1px solid var(--border)" : "1px solid transparent";

  return (
    <>
      {/* Page blur overlay */}
      <div
        onClick={() => setMenuOpen(false)}
        style={{
          position: "fixed", inset: 0, zIndex: 98,
          backdropFilter: menuOpen ? "blur(6px)" : "blur(0px)",
          WebkitBackdropFilter: menuOpen ? "blur(6px)" : "blur(0px)",
          background: menuOpen ? "rgba(0,0,0,0.35)" : "rgba(0,0,0,0)",
          opacity: menuOpen ? 1 : 0,
          pointerEvents: menuOpen ? "all" : "none",
          transition: "opacity 0.3s ease, backdrop-filter 0.3s ease, background 0.3s ease",
        }}
      />
      <nav style={{
        position: "fixed", top: 0, left: 0, right: 0, zIndex: 100,
        background: navBg, borderBottom: navBorder,
        backdropFilter: (scrolled || menuOpen) ? "blur(20px)" : "none",
        transition: "background 0.3s, border-color 0.3s",
      }}>
        <div className="page-pad" style={{
          maxWidth: 1180, margin: "0 auto", height: 60,
          display: "flex", alignItems: "center", justifyContent: "space-between",
        }}>
          <Link href="/" onClick={() => setMenuOpen(false)}>
            <span style={{
              fontFamily: "var(--font-head)", fontWeight: 700, fontSize: 14,
              letterSpacing: "-0.01em", color: "var(--fg)", cursor: "pointer",
              opacity: (scrolled || menuOpen) ? 1 : 0.9, transition: "opacity 0.2s",
              whiteSpace: "nowrap",
            }}>{siteContent.brand.name}</span>
          </Link>

          {/* Desktop links */}
          <div className="nav-desktop-links">
            {isHome ? (
              navLinks.map(link => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={handleAnchor(link.href)}
                  style={{
                    fontFamily: "var(--font-body)", fontSize: 13, fontWeight: 500,
                    color: "var(--fg3)", padding: "6px 12px", borderRadius: 6, cursor: "pointer",
                    transition: "color 0.15s, background 0.15s",
                  }}
                  onMouseEnter={e => { e.currentTarget.style.color = "var(--fg)"; e.currentTarget.style.background = "var(--bg3)"; }}
                  onMouseLeave={e => { e.currentTarget.style.color = "var(--fg3)"; e.currentTarget.style.background = "transparent"; }}
                >{link.label}</a>
              ))
            ) : (
              <Link href="/">
                <span style={{
                  fontFamily: "var(--font-body)", fontSize: 13, fontWeight: 500,
                  color: "var(--fg3)", padding: "6px 12px", borderRadius: 6, cursor: "pointer",
                  transition: "color 0.15s, background 0.15s",
                }}
                  onMouseEnter={e => { e.currentTarget.style.color = "var(--fg)"; e.currentTarget.style.background = "var(--bg3)"; }}
                  onMouseLeave={e => { e.currentTarget.style.color = "var(--fg3)"; e.currentTarget.style.background = "transparent"; }}
                >Home</span>
              </Link>
            )}
            <Link href="/blog">
              <span style={{
                fontFamily: "var(--font-body)", fontSize: 13, fontWeight: 500,
                color: location.startsWith("/blog") ? "var(--fg)" : "var(--fg3)",
                padding: "6px 12px", borderRadius: 6, cursor: "pointer",
                transition: "color 0.15s, background 0.15s",
              }}
                onMouseEnter={e => { e.currentTarget.style.color = "var(--fg)"; e.currentTarget.style.background = "var(--bg3)"; }}
                onMouseLeave={e => {
                  e.currentTarget.style.color = location.startsWith("/blog") ? "var(--fg)" : "var(--fg3)";
                  e.currentTarget.style.background = "transparent";
                }}
              >Writing</span>
            </Link>
            <a href={`mailto:${siteContent.links.email}`} style={{
              marginLeft: 10, fontFamily: "var(--font-body)", fontSize: 12, fontWeight: 600,
              color: "var(--bg)", background: "var(--accent)",
              padding: "7px 16px", borderRadius: 6, cursor: "pointer",
              letterSpacing: "0.01em", transition: "opacity 0.15s",
            }}
              onMouseEnter={e => (e.currentTarget.style.opacity = "0.85")}
              onMouseLeave={e => (e.currentTarget.style.opacity = "1")}
            >Contact</a>
          </div>

          {/* Hamburger button (mobile only) */}
          <button
            className="nav-hamburger-btn"
            onClick={() => setMenuOpen(o => !o)}
            aria-label={menuOpen ? "Close menu" : "Open menu"}
          >
            {menuOpen ? "✕" : "☰"}
          </button>
        </div>
      </nav>

      {/* Mobile slide-down panel */}
      <div className={`nav-mobile-panel${menuOpen ? " open" : ""}`}>
        {isHome ? (
          navLinks.map(link => (
            <a
              key={link.label}
              href={link.href}
              onClick={handleAnchor(link.href)}
              style={{
                fontFamily: "var(--font-body)", fontSize: 15, fontWeight: 500,
                color: "var(--fg2)", padding: "12px 4px", borderBottom: "1px solid var(--border)",
                cursor: "pointer", transition: "color 0.15s",
              }}
              onMouseEnter={e => (e.currentTarget.style.color = "var(--fg)")}
              onMouseLeave={e => (e.currentTarget.style.color = "var(--fg2)")}
            >{link.label}</a>
          ))
        ) : (
          <Link href="/">
            <span
              onClick={() => setMenuOpen(false)}
              style={{
                fontFamily: "var(--font-body)", fontSize: 15, fontWeight: 500,
                color: "var(--fg2)", padding: "12px 4px", borderBottom: "1px solid var(--border)",
                cursor: "pointer", transition: "color 0.15s",
              }}
              onMouseEnter={e => (e.currentTarget.style.color = "var(--fg)")}
              onMouseLeave={e => (e.currentTarget.style.color = "var(--fg2)")}
            >Home</span>
          </Link>
        )}
        <Link href="/blog">
          <span
            onClick={() => setMenuOpen(false)}
            style={{
              fontFamily: "var(--font-body)", fontSize: 15, fontWeight: 500,
              color: location.startsWith("/blog") ? "var(--fg)" : "var(--fg2)",
              padding: "12px 4px", borderBottom: "1px solid var(--border)",
              cursor: "pointer", transition: "color 0.15s",
            }}
            onMouseEnter={e => (e.currentTarget.style.color = "var(--fg)")}
            onMouseLeave={e => (e.currentTarget.style.color = location.startsWith("/blog") ? "var(--fg)" : "var(--fg2)")}
          >Writing</span>
        </Link>
        <a
          href={`mailto:${siteContent.links.email}`}
          onClick={() => setMenuOpen(false)}
          style={{
            marginTop: 12, fontFamily: "var(--font-body)", fontSize: 13, fontWeight: 600,
            color: "var(--bg)", background: "var(--accent)",
            padding: "12px 20px", borderRadius: 7, cursor: "pointer",
            letterSpacing: "0.01em", textAlign: "center",
          }}
        >Contact</a>
      </div>
    </>
  );
}
