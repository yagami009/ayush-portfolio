import { FaXTwitter, FaLinkedinIn } from "react-icons/fa6";
import { siteContent } from "../content";

export function Footer() {
  const { links, footer } = siteContent;

  const socials = [
    { label: "X", href: links.x, Icon: FaXTwitter },
    { label: "LinkedIn", href: links.linkedin, Icon: FaLinkedinIn },
  ];

  return (
    <footer style={{ borderTop: "1px solid var(--border)", background: "var(--bg)" }}>
      <div style={{
        maxWidth: 1180, margin: "0 auto", padding: "32px 36px",
        display: "flex", justifyContent: "space-between", alignItems: "center",
        flexWrap: "wrap", gap: 16,
      }}>
        <div style={{ display: "flex", gap: 20, alignItems: "center" }}>
          {socials.map(({ label, href, Icon }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={label}
              style={{ color: "var(--fg3)", transition: "color 0.15s", lineHeight: 0 }}
              onMouseEnter={e => (e.currentTarget.style.color = "var(--fg)")}
              onMouseLeave={e => (e.currentTarget.style.color = "var(--fg3)")}
            >
              <Icon size={16} />
            </a>
          ))}
        </div>
        <p style={{
          fontFamily: "var(--font-mono)", fontSize: 10,
          color: "var(--fg3)", letterSpacing: "0.04em",
        }}>{footer.line}</p>
      </div>
    </footer>
  );
}
