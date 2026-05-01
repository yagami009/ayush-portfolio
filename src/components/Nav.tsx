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
  const [scrollProgress, setScrollProgress] = useState(0);
  const [location] = useLocation();

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 32);
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      setScrollProgress(docHeight > 0 ? (window.scrollY / docHeight) * 100 : 0);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav>
      <div className="nav-progress" style={{ width: `${scrollProgress}%` }} />
      <Link href="/">
        <span className="nav-logo-wrap">
          <span className="nav-status-dot" />
          <span className="nav-logo">Ayush Mahajan</span>
        </span>
      </Link>

      <ul className="nav-links">
        {navLinks.map(link => {
          const isActive = location === link.href || (link.href !== "/" && location.startsWith(link.href));
          return (
            <li key={link.label}>
              <Link href={link.href}>
                <span className={`nav-link ${isActive ? "active" : ""}`}>
                  {link.label}
                </span>
              </Link>
            </li>
          );
        })}
        <li>
          <a href="mailto:mahajan.ayush9909@gmail.com" className="nav-cta">
            Connect
          </a>
        </li>
      </ul>
    </nav>
  );
}
