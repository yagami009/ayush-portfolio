import { Switch, Route, Router as WouterRouter } from "wouter";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/react";
import { Nav } from "./components/Nav";
import { Footer } from "./components/Footer";
import { Home } from "./pages/Home";
import { Work } from "./pages/Work";
import { Writing } from "./pages/Writing";
import { Lab } from "./pages/Lab";
import { Now } from "./pages/Now";

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
    </WouterRouter>
  );
}

export default App;
