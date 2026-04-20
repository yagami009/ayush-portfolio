import { useState, useEffect } from "react";
import { Link, useLocation } from "wouter";
import { siteContent } from "../content";
import { ThemeToggle } from "./ThemeToggle";

interface NavLinkItem {
  label: string;
  href: string;
  isAnchor?: boolean;
}

const navLinks: NavLinkItem[] = [
  { label: "Work", href: "#work", isAnchor: true },
  { label: "Writing", href: "/blog" },
  { label: "About", href: "/about" },
];

function NavLink({
  link,
  isActive,
  onClick,
  isMobile = false,
}: {
  link: NavLinkItem;
  isActive: boolean;
  onClick?: () => void;
  isMobile?: boolean;
}) {
  const baseStyle = {
    fontFamily: "var(--font-body)",
    fontWeight: 500,
    cursor: "pointer",
    transition: "color 0.15s, background 0.15s",
  };

  const desktopStyle = {
    ...baseStyle,
    fontSize: 13,
    color: isActive ? "var(--fg)" : "var(--fg3)",
    padding: "6px 12px",
    borderRadius: 6,
  };

  const mobileStyle = {
    ...baseStyle,
    fontSize: 15,
    color: isActive ? "var(--fg)" : "var(--fg2)",
    padding: "12px 4px",
    borderBottom: "1px solid var(--border)",
  };

  const handleClick = (e: React.MouseEvent) => {
    if (link.isAnchor) {
      e.preventDefault();
      const id = link.href.replace("#", "");
      const el = document.getElementById(id);
      if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
    onClick?.();
  };

  const style = isMobile ? mobileStyle : desktopStyle;

  const handleMouseEnter = (e: React.MouseEvent<HTMLElement>) => {
    e.currentTarget.style.color = "var(--fg)";
    if (!isMobile) e.currentTarget.style.background = "var(--bg3)";
  };

  const handleMouseLeave = (e: React.MouseEvent<HTMLElement>) => {
    e.currentTarget.style.color = isActive ? "var(--fg)" : isMobile ? "var(--fg2)" : "var(--fg3)";
    if (!isMobile) e.currentTarget.style.background = "transparent";
  };

  if (link.isAnchor) {
    return (
      <a
        href={link.href}
        onClick={handleClick}
        style={style}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        {link.label}
      </a>
    );
  }

  return (
    <Link href={link.href}>
      <span
        onClick={handleClick}
        style={style}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        {link.label}
      </span>
    </Link>
  );
}

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

  const closeMenu = () => setMenuOpen(false);

  const navBg = scrolled || menuOpen ? "rgba(13,13,13,0.96)" : "transparent";
  const navBorder = scrolled || menuOpen ? "1px solid var(--border)" : "1px solid transparent";

  const isLinkActive = (link: NavLinkItem) => {
    if (link.href === "/blog") return location.startsWith("/blog");
    if (link.href === "/about") return location === "/about";
    return false;
  };

  return (
    <>
      {/* Page blur overlay */}
      <div
        onClick={closeMenu}
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
          <Link href="/" onClick={closeMenu}>
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
                <NavLink key={link.label} link={link} isActive={isLinkActive(link)} />
              ))
            ) : (
              <NavLink link={{ label: "Home", href: "/" }} isActive={false} />
            )}
            <a href={`mailto:${siteContent.links.email}`} style={{
              marginLeft: 10, fontFamily: "var(--font-body)", fontSize: 12, fontWeight: 600,
              color: "var(--bg)", background: "var(--accent)",
              padding: "7px 16px", borderRadius: 6, cursor: "pointer",
              letterSpacing: "0.01em", transition: "opacity 0.15s",
            }}
              onMouseEnter={e => (e.currentTarget.style.opacity = "0.85")}
              onMouseLeave={e => (e.currentTarget.style.opacity = "1")}
            >Contact</a>
            <ThemeToggle />
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
            <NavLink key={link.label} link={link} isActive={isLinkActive(link)} onClick={closeMenu} isMobile />
          ))
        ) : (
          <NavLink link={{ label: "Home", href: "/" }} isActive={false} onClick={closeMenu} isMobile />
        )}
        <a
          href={`mailto:${siteContent.links.email}`}
          onClick={closeMenu}
          style={{
            marginTop: 12, fontFamily: "var(--font-body)", fontSize: 13, fontWeight: 600,
            color: "var(--bg)", background: "var(--accent)",
            padding: "12px 20px", borderRadius: 7, cursor: "pointer",
            letterSpacing: "0.01em", textAlign: "center",
          }}
        >Contact</a>
        <div style={{ marginTop: 12, display: "flex", justifyContent: "center" }}>
          <ThemeToggle />
        </div>
      </div>
    </>
  );
}
