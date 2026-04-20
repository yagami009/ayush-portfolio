import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { about, profile } from "../content";

export function About() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section
      id="about"
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
            About
          </p>
          <h2 className="text-3xl md:text-4xl font-semibold text-zinc-100 tracking-tight">
            Who I am.
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-5 gap-12 md:gap-16">
          <div className="md:col-span-3 space-y-5">
            {about.paragraphs.map((para, i) => (
              <motion.p
                key={i}
                initial={{ opacity: 0, y: 10 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.1 + i * 0.07, duration: 0.5 }}
                className="text-sm text-zinc-400 leading-loose"
              >
                {para}
              </motion.p>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="md:col-span-2 space-y-6"
          >
            <div>
              <p className="text-xs text-zinc-600 tracking-widest uppercase mb-3">
                Background
              </p>
              <ul className="space-y-2">
                {[
                  "Embedded systems & hardware",
                  "BCI / neurotechnology",
                  "Wearable devices",
                  "AI systems & agents",
                  "Recommendation engines",
                  "Product & execution",
                ].map((item) => (
                  <li key={item} className="flex items-center gap-2">
                    <span className="w-1 h-1 rounded-full bg-zinc-600 shrink-0" />
                    <span className="text-sm text-zinc-500">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <p className="text-xs text-zinc-600 tracking-widest uppercase mb-3">
                Companies
              </p>
              <div className="space-y-1">
                <p className="text-sm text-zinc-400">
                  Cerebralx{" "}
                  <span className="text-zinc-600">— Founder & CEO</span>
                </p>
              </div>
            </div>

            <div>
              <p className="text-xs text-zinc-600 tracking-widest uppercase mb-3">
                Status
              </p>
              <p className="text-sm text-zinc-500">{profile.availability}</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
