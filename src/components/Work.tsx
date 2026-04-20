import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { projects } from "../content";

const statusColor = {
  active: "bg-emerald-500",
  completed: "bg-zinc-500",
  ongoing: "bg-amber-500",
};

const statusLabel = {
  active: "Active",
  completed: "Completed",
  ongoing: "Ongoing",
};

export function Work() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="work" className="px-6 md:px-12 py-24 border-t border-zinc-800/50">
      <div className="max-w-4xl mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 12 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="mb-14"
        >
          <p className="text-xs text-zinc-600 tracking-widest uppercase mb-3">Selected Work</p>
          <h2 className="text-3xl md:text-4xl font-semibold text-zinc-100 tracking-tight">
            Things I've built.
          </h2>
        </motion.div>

        <div className="space-y-px">
          {projects.map((project, i) => (
            <ProjectCard key={project.id} project={project} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}

function ProjectCard({
  project,
  index,
}: {
  project: (typeof projects)[0];
  index: number;
}) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 16 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.08, ease: [0.16, 1, 0.3, 1] }}
      className="group relative border border-zinc-800/0 hover:border-zinc-800 rounded-lg p-6 md:p-8 transition-all duration-300 hover:bg-zinc-900/40"
    >
      <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-4">
        <div className="flex items-center gap-3">
          <h3 className="text-lg font-semibold text-zinc-100 tracking-tight">
            {project.title}
          </h3>
          <span className="flex items-center gap-1.5">
            <span
              className={`w-1.5 h-1.5 rounded-full ${statusColor[project.status]}`}
            />
            <span className="text-xs text-zinc-600">{statusLabel[project.status]}</span>
          </span>
        </div>
        <div className="flex items-center gap-4">
          <span className="text-xs text-zinc-600 shrink-0">{project.year}</span>
          <span className="text-xs text-zinc-500 shrink-0 hidden md:block">
            {project.role}
          </span>
        </div>
      </div>

      <p className="text-sm text-zinc-400 leading-relaxed mb-4 max-w-2xl">
        {project.description}
      </p>

      <div className="border-l border-zinc-800 pl-4 mb-5">
        <p className="text-xs text-zinc-500 leading-relaxed italic">
          Why it matters: {project.why}
        </p>
      </div>

      <div className="flex flex-wrap gap-1.5">
        {project.tags.map((tag) => (
          <span
            key={tag}
            className="text-xs text-zinc-500 border border-zinc-800 rounded px-2 py-0.5"
          >
            {tag}
          </span>
        ))}
      </div>

      <div className="absolute right-6 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 hidden md:block">
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
          <path
            d="M3 8h10M8 3l5 5-5 5"
            stroke="rgba(161,161,170,0.4)"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>
    </motion.div>
  );
}
