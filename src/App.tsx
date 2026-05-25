import { Switch, Route, Router as WouterRouter } from "wouter";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/react";
import { HelmetProvider } from "react-helmet-async";
import { Nav } from "./components/Nav";
import { Footer } from "./components/Footer";
import { Home } from "./pages/Home";
import { Work } from "./pages/Work";
import { Writing } from "./pages/Writing";
import { Lab } from "./pages/Lab";
import { Now } from "./pages/Now";
import { useEffect, useRef, useState } from "react";

function NotFound() {
  return (
    <div style={{
      maxWidth: 1200, margin: "0 auto", padding: "96px 24px",
      fontFamily: "var(--mono)", color: "var(--dim)",
    }}>
      <div style={{ fontSize: 11, letterSpacing: "0.14em", marginBottom: 12 }}>404</div>
      <div style={{ fontSize: 24, fontWeight: 300, color: "var(--text)" }}>NOT FOUND</div>
    </div>
  );
}

function Cursor() {
  const dotRef = useRef<HTMLDivElement>(null);
  const [hovered, setHovered] = useState(false);
  const pos = useRef({ x: -100, y: -100 });
  const target = useRef({ x: -100, y: -100 });
  const raf = useRef<number>(0);

  useEffect(() => {
    const onMove = (e: MouseEvent) => {
      target.current = { x: e.clientX, y: e.clientY };
      const onHover = (e: MouseEvent) => {
        const el = e.target as HTMLElement;
        setHovered(!!el.closest("a, button, [role=button]"));
      };
      window.addEventListener("mouseover", onHover);
      return () => window.removeEventListener("mouseover", onHover);
    };
    window.addEventListener("mousemove", onMove);
    const loop = () => {
      pos.current.x += (target.current.x - pos.current.x) * 0.12;
      pos.current.y += (target.current.y - pos.current.y) * 0.12;
      if (dotRef.current) {
        dotRef.current.style.transform = `translate(${pos.current.x}px, ${pos.current.y}px) translate(-50%, -50%) scale(${hovered ? 2 : 1})`;
      }
      raf.current = requestAnimationFrame(loop);
    };
    raf.current = requestAnimationFrame(loop);
    return () => {
      window.removeEventListener("mousemove", onMove);
      cancelAnimationFrame(raf.current);
    };
  }, []);

  return <div ref={dotRef} className="cursor-dot" />;
}

function MagneticBtn({ children, className }: { children: React.ReactNode; className?: string }) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const onMove = (e: MouseEvent) => {
      const rect = el.getBoundingClientRect();
      const cx = rect.left + rect.width / 2;
      const cy = rect.top + rect.height / 2;
      const dx = (e.clientX - cx) * 0.22;
      const dy = (e.clientY - cy) * 0.22;
      el.style.transform = `translate(${dx}px, ${dy}px)`;
    };
    const onLeave = () => { el.style.transform = ""; };
    el.addEventListener("mousemove", onMove);
    el.addEventListener("mouseleave", onLeave);
    return () => {
      el.removeEventListener("mousemove", onMove);
      el.removeEventListener("mouseleave", onLeave);
    };
  }, []);

  return <div ref={ref} className={className} style={{ display: "inline-block", transition: "transform 0.18s ease-out" }}>{children}</div>;
}

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/work" component={Work} />
      <Route path="/writing" component={Writing} />
      <Route path="/lab" component={Lab} />
      <Route path="/now" component={Now} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <WouterRouter base={import.meta.env.BASE_URL.replace(/\/$/, "")}>
      <HelmetProvider>
        <Cursor />
        <div style={{ minHeight: "100vh", display: "flex", flexDirection: "column" }}>
          <header>
            <Nav />
          </header>
          <main style={{ flex: 1 }}>
            <Router />
          </main>
          <Footer />
        </div>
        <Analytics />
        <SpeedInsights />
      </HelmetProvider>
    </WouterRouter>
  );
}

export default App;

