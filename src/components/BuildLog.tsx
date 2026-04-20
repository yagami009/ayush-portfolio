import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { buildLog } from "../content";

function formatDate(dateStr: string) {
  const d = new Date(dateStr);
  return d.toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
  });
}

export function BuildLog() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="log" className="px-6 md:px-12 py-24 border-t border-zinc-800/50">
      <div className="max-w-4xl mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 12 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="mb-14"
        >
          <p className="text-xs text-zinc-600 tracking-widest uppercase mb-3">
            Build Log
          </p>
          <h2 className="text-3xl md:text-4xl font-semibold text-zinc-100 tracking-tight">
            Field notes.
          </h2>
          <p className="text-sm text-zinc-500 mt-3 max-w-lg">
            Short updates on what I'm shipping, noticing, and thinking about.
            Not a blog. Not a newsletter. Just the work.
          </p>
        </motion.div>

        <div className="relative">
          <div className="absolute left-[5.5rem] top-0 bottom-0 w-px bg-zinc-800/60 hidden md:block" />

          <div className="space-y-0">
            {buildLog.map((entry, i) => (
              <LogEntry key={entry.date} entry={entry} index={i} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function LogEntry({
  entry,
  index,
}: {
  entry: (typeof buildLog)[0];
  index: number;
}) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-30px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: -10 }}
      animate={inView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.45, delay: index * 0.06, ease: "easeOut" }}
      className="flex flex-col md:flex-row gap-3 md:gap-0 group py-5 border-b border-zinc-800/30 last:border-0"
    >
      <div className="md:w-24 shrink-0 flex md:flex-col md:items-end md:pr-6 items-center gap-2">
        <span className="text-xs text-zinc-600 font-mono whitespace-nowrap">
          {formatDate(entry.date)}
        </span>
        <div className="hidden md:block w-2 h-2 rounded-full border border-zinc-700 bg-zinc-950 group-hover:border-indigo-500 group-hover:bg-indigo-900/30 transition-colors relative z-10" />
      </div>
      <div className="md:pl-8 flex-1">
        <p className="text-sm text-zinc-400 leading-relaxed group-hover:text-zinc-300 transition-colors duration-200">
          {entry.note}
        </p>
      </div>
    </motion.div>
  );
}
