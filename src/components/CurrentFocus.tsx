import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { currentFocus } from "../content";

export function CurrentFocus() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section
      id="focus"
      className="px-6 md:px-12 py-24 border-t border-zinc-800/50"
    >
      <div className="max-w-4xl mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 12 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="mb-14"
        >
          <p className="text-xs text-zinc-600 tracking-widest uppercase mb-3">
            Current Focus
          </p>
          <h2 className="text-3xl md:text-4xl font-semibold text-zinc-100 tracking-tight">
            What I'm building now.
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-px bg-zinc-800/30 rounded-lg overflow-hidden border border-zinc-800/50">
          {currentFocus.map((item, i) => (
            <FocusCard key={item.area} item={item} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}

function FocusCard({
  item,
  index,
}: {
  item: (typeof currentFocus)[0];
  index: number;
}) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-40px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0 }}
      animate={inView ? { opacity: 1 } : {}}
      transition={{ duration: 0.5, delay: index * 0.06 }}
      className="bg-zinc-950 p-6 md:p-8 hover:bg-zinc-900/60 transition-colors duration-300"
    >
      <div className="flex items-center gap-2 mb-3">
        <span className="w-1.5 h-1.5 rounded-full bg-indigo-400 animate-pulse" />
        <h3 className="text-sm font-semibold text-zinc-200 tracking-tight">
          {item.area}
        </h3>
      </div>
      <p className="text-sm text-zinc-500 leading-relaxed">{item.description}</p>
    </motion.div>
  );
}
