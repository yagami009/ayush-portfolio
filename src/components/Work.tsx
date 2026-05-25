import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { projects } from "../content";

const statusColor: Record<string, string> = {
  ongoing: "bg-amber-500",
  completed: "bg-zinc-500",
  active: "bg-emerald-500",
};

const statusLabel: Record<string, string> = {
  ongoing: "Ongoing",
  completed: "Completed",
  active: "Active",
};

const fadeUp = (delay: number) => ({
  initial: { opacity: 0, y: 18 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.55, ease: [0.16, 1, 0.3, 1], delay },
});

export function Work() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid");

  return (
    <section id="work" className="py-24 px-6 md:px-12">
      <div className="max-w-6xl mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 12 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
          className="flex items-center justify-between mb-12 border-b border-zinc-800 pb-6"
        >
          <div className="flex items-center gap-3">
            <span className="font-mono text-xs text-zinc-500 uppercase tracking-wider">
              01 — Featured Work
            </span>
          </div>

          <div className="flex gap-2">
            <button
              onClick={() => setViewMode("grid")}
              className={`font-mono text-xs uppercase tracking-wider px-3 py-1 border rounded transition-all ${
                viewMode === "grid"
                  ? "border-amber-500 text-amber-500 bg-amber-500/10"
                  : "border-zinc-800 text-zinc-500 hover:border-zinc-600"
              }`}
            >
              Grid
            </button>
            <button
              onClick={() => setViewMode("list")}
              className={`font-mono text-xs uppercase tracking-wider px-3 py-1 border rounded transition-all ${
                viewMode === "list"
                  ? "border-amber-500 text-amber-500 bg-amber-500/10"
                  : "border-zinc-800 text-zinc-500 hover:border-zinc-600"
              }`}
            >
              List
            </button>
          </div>
        </motion.div>

        {viewMode === "grid" ? <GridView /> : <ListView />}
      </div>
    </section>
  );
}

function GridView() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
      {projects.map((project, i) => (
        <ProjectCardGrid key={project.id} project={project} index={i} isFeatured={i === 0} />
      ))}
    </div>
  );
}

function ListView() {
  return (
    <div className="flex flex-col border-t border-zinc-800">
      {projects.map((project, i) => (
        <ProjectCardList key={project.id} project={project} index={i} />
      ))}
    </div>
  );
}

function ProjectCardGrid({
  project,
  index,
  isFeatured,
}: {
  project: (typeof projects)[0];
  index: number;
  isFeatured: boolean;
}) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  const [isHovered, setIsHovered] = useState(false);

  const colSpan = isFeatured
    ? "md:col-span-2 lg:col-span-2 lg:row-span-2"
    : "md:col-span-1";
  const sizeClasses = isFeatured ? "min-h-[300px] p-8" : "min-h-[200px] p-6";

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.55, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
      className={`group relative bg-zinc-900/40 border border-zinc-800 rounded-lg overflow-hidden cursor-pointer transition-all duration-300 hover:border-zinc-700 hover:-translate-y-0.5 ${colSpan} ${sizeClasses}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div
        className="absolute w-32 h-32 rounded-full blur-[40px] pointer-events-none transition-opacity duration-300"
        style={{
          background: index % 2 === 0 ? "#e09830" : "#2a9e7a",
          opacity: isHovered ? 0.1 : 0,
          top: "20%",
          right: "20%",
        }}
      />

      <div className="relative z-10 h-full flex flex-col">
        <div className="flex justify-between items-start mb-4">
          <div className="flex items-center gap-2">
            <span
              className={`w-1.5 h-1.5 rounded-full ${statusColor[project.status]}`}
              style={{
                animation:
                  project.status === "ongoing"
                    ? "pulse 2.5s ease-in-out infinite"
                    : "none",
              }}
            />

            <span className="font-mono text-xs text-zinc-500 uppercase tracking-wider">
              {statusLabel[project.status]}
            </span>
          </div>

          <span className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform text-zinc-600">
            ↗
          </span>
        </div>

        <h3
          className={`font-serif font-light text-zinc-50 mb-3 leading-tight ${
            isFeatured ? "text-2xl" : "text-lg"
          }`}
        >
          {project.title}
        </h3>

        <p
          className={`text-zinc-400 font-light leading-relaxed ${
            isFeatured ? "text-sm max-w-[80%]" : "text-xs"
          }`}
        >
          {isFeatured
            ? project.description
            : project.shortDescription || project.description}
        </p>

        <div className="flex flex-wrap gap-2 mt-auto pt-4">
          {project.tags.slice(0, isFeatured ? undefined : 3).map((tag) => (
            <span
              key={tag}
              className="font-mono text-xs capitalize tracking-wide px-2 py-1 border border-zinc-800 rounded text-zinc-500"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
}

function ProjectCardList({
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
      transition={{
        duration: 0.55,
        delay: index * 0.08,
        ease: [0.16, 1, 0.3, 1],
      }}
      className="group grid grid-cols-[100px_1fr_auto_40px] gap-6 items-center py-5 border-b border-zinc-800 cursor-pointer hover:bg-zinc-900/20 transition-colors"
    >
      <span className="font-mono text-xs text-zinc-500 uppercase tracking-wider">
        {project.year}
      </span>

      <div className="flex flex-col gap-1">
        <span className="font-serif text-base font-light text-zinc-50">{project.title}</span>
        <span className="text-xs text-zinc-500 font-light truncate">{project.shortDescription}</span>
      </div>

      <div className="flex gap-2">
        {project.tags.slice(0, 2).map((tag) => (
          <span
            key={tag}
            className="font-mono text-xs uppercase px-2 py-1 border border-zinc-800 rounded text-zinc-500"
          >
            {tag}
          </span>
        ))}
      </div>

      <span className="text-zinc-600 group-hover:text-amber-500 group-hover:translate-x-1 transition-all">
        →
      </span>
    </motion.div>
  );
}
