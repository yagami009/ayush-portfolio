import { useEffect, useRef } from "react";
import { track } from "./analytics";

export function useScrollDepth(pageName: string) {
  const tracked = useRef(new Set<number>());

  useEffect(() => {
    const thresholds = [25, 50, 75, 100];
    const onScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (docHeight <= 0) return;
      const percent = Math.round((scrollTop / docHeight) * 100);
      for (const t of thresholds) {
        if (percent >= t && !tracked.current.has(t)) {
          tracked.current.add(t);
          track.scrollDepth(pageName, t);
        }
      }
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [pageName]);
}

export function useSectionVisible(sectionName: string) {
  const ref = useRef<HTMLElement>(null);
  const seen = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !seen.current) {
          seen.current = true;
          track.sectionVisible(sectionName);
        }
      },
      { threshold: 0.3 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [sectionName]);

  return ref;
}