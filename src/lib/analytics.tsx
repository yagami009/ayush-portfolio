import { useEffect } from "react";
import { useLocation } from "wouter";
import posthog from "posthog-js";

// Initialize PostHog — the write key will be set via VITE_POSTHOG_KEY env var
// If no key is set, PostHog becomes a no-op (all calls are swallowed)
const POSTHOG_KEY = import.meta.env.VITE_POSTHOG_KEY as string | undefined;
const POSTHOG_HOST = import.meta.env.VITE_POSTHOG_HOST as string | undefined;

if (POSTHOG_KEY) {
  posthog.init(POSTHOG_KEY, {
    api_host: POSTHOG_HOST || "https://us.i.posthog.com",
    person_profiles: "identified_only",
    capture_pageview: false, // We track pageviews manually for SPA
    capture_pageleave: true,
    debug: import.meta.env.DEV,
  });
}

export function PostHogProvider({ children }: { children: React.ReactNode }) {
  const [location] = useLocation();

  useEffect(() => {
    if (POSTHOG_KEY) {
      posthog.capture("$pageview", { $pathname: location });
    }
  }, [location]);

  return <>{children}</>;
}

// Convenience helpers for custom event tracking
export const track = {
  // Navigation
  pageView: (path: string) => posthog.capture("$pageview", { $pathname: path }),

  // Project interactions
  projectView: (project: string) => posthog.capture("project_viewed", { project }),
  projectClick: (project: string) => posthog.capture("project_clicked", { project }),

  // CTA / Contact
  contactClick: (method: string) => posthog.capture("contact_clicked", { method }),
  calendlyClick: () => posthog.capture("calendly_clicked"),
  whatsappClick: () => posthog.capture("whatsapp_clicked"),
  emailClick: () => posthog.capture("email_clicked"),

  // External links
  socialClick: (platform: string) => posthog.capture("social_clicked", { platform }),
  externalLink: (url: string) => posthog.capture("external_link_clicked", { url }),

  // Writing
  writingPostView: (postId: string, title: string) =>
    posthog.capture("writing_post_viewed", { post_id: postId, title }),

  // Scroll depth (called from scroll observer)
  scrollDepth: (page: string, percent: number) =>
    posthog.capture("scroll_depth", { page, percent }),

  // Page section visibility
  sectionVisible: (section: string) => posthog.capture("section_visible", { section }),
};

export default posthog;