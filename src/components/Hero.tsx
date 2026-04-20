import { motion } from "framer-motion";
import { profile } from "../content";

const fadeUp = (delay: number) => ({
  initial: { opacity: 0, y: 18 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.65, ease: [0.16, 1, 0.3, 1], delay },
});

export function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col justify-center px-6 md:px-12 pt-24 pb-20 overflow-hidden">
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 80% 50% at 50% -20%, rgba(99,102,241,0.07) 0%, transparent 70%)",
        }}
      />
      <div
        className="absolute bottom-0 left-0 right-0 h-px"
        style={{
          background:
            "linear-gradient(90deg, transparent 0%, rgba(99,102,241,0.2) 40%, rgba(99,102,241,0.2) 60%, transparent 100%)",
        }}
      />

      <div className="max-w-4xl mx-auto w-full">
        <motion.p
          {...fadeUp(0.1)}
          className="text-xs text-zinc-500 tracking-widest uppercase mb-8"
        >
          Founder · Engineer · Builder
        </motion.p>

        <motion.h1
          {...fadeUp(0.2)}
          className="text-5xl md:text-7xl font-semibold tracking-tight text-zinc-50 leading-none mb-6"
        >
          {profile.name}
        </motion.h1>

        <motion.p
          {...fadeUp(0.3)}
          className="text-xl md:text-2xl text-zinc-400 font-light leading-snug mb-8 max-w-2xl"
        >
          {profile.tagline}
        </motion.p>

        <motion.p
          {...fadeUp(0.4)}
          className="text-base text-zinc-500 leading-relaxed max-w-xl mb-12"
        >
          {profile.intro}
        </motion.p>

        <motion.div {...fadeUp(0.5)} className="flex flex-wrap gap-3">
          <a
            href="#work"
            className="inline-flex items-center gap-2 bg-zinc-100 text-zinc-900 text-sm font-medium px-5 py-2.5 rounded hover:bg-white transition-colors"
          >
            View Work
            <svg
              width="14"
              height="14"
              viewBox="0 0 14 14"
              fill="none"
              className="opacity-60"
            >
              <path
                d="M1 7h12M7 1l6 6-6 6"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </a>
          <a
            href="#focus"
            className="inline-flex items-center gap-2 border border-zinc-700 text-zinc-400 text-sm font-medium px-5 py-2.5 rounded hover:border-zinc-500 hover:text-zinc-200 transition-all"
          >
            Current Focus
          </a>
          <a
            href={`mailto:${profile.links.email}`}
            className="inline-flex items-center gap-2 text-zinc-500 text-sm font-medium px-5 py-2.5 rounded hover:text-zinc-300 transition-colors"
          >
            Get in touch
          </a>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.8 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <div className="w-px h-8 bg-gradient-to-b from-zinc-600 to-transparent" />
      </motion.div>
    </section>
  );
}
