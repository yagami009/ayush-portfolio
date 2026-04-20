import { Switch, Route, Router as WouterRouter } from "wouter";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/react";
import { Nav } from "./components/Nav";
import { Footer } from "./components/Footer";
import { CustomCursor } from "./components/CustomCursor";
import { Home } from "./pages/Home";
import { Work } from "./pages/Work";
import { WorkDetail } from "./pages/WorkDetail";
import { Writing } from "./pages/Writing";
import { Agents } from "./pages/Agents";
import { Blog } from "./pages/Blog";
import { BlogPost } from "./pages/BlogPost";
import { About } from "./pages/About";

function NotFound() {
  return (
    <div style={{
      maxWidth: 1200, margin: "0 auto", padding: "96px 24px",
      fontFamily: "var(--font-mono)", color: "var(--dim)",
    }}>
      <div style={{ fontSize: 11, letterSpacing: "0.14em", marginBottom: 12 }}>404</div>
      <div style={{ fontSize: 24, fontWeight: 700, color: "var(--fg)" }}>NOT FOUND</div>
    </div>
  );
}

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/work" component={Work} />
      <Route path="/work/:slug" component={WorkDetail} />
      <Route path="/writing" component={Writing} />
      <Route path="/blog" component={Blog} />
      <Route path="/blog/:slug" component={BlogPost} />
      <Route path="/agents" component={Agents} />
      <Route path="/about" component={About} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <WouterRouter base={import.meta.env.BASE_URL.replace(/\/$/, "")}>
      <CustomCursor />
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
