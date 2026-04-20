import { useRef, useEffect, useState } from "react";
import { motion, useInView } from "framer-motion";
import { operatingLayer } from "../content";

const statusColors = {
  active: { dot: "bg-emerald-500", text: "text-emerald-500", label: "active" },
  idle: { dot: "bg-zinc-600", text: "text-zinc-600", label: "idle" },
};

function useTick(interval = 3200) {
  const [tick, setTick] = useState(0);
  useEffect(() => {
    const id = setInterval(() => setTick((t) => t + 1), interval);
    return () => clearInterval(id);
  }, [interval]);
  return tick;
}

export function OperatingLayer() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const tick = useTick();
  const signalIndex = tick % operatingLayer.signals.length;

  return (
    <section className="px-6 md:px-12 py-24 border-t border-zinc-800/50">
      <div className="max-w-4xl mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 12 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="mb-14"
        >
          <p className="text-xs text-zinc-600 tracking-widest uppercase mb-3">
            Operating Layer
          </p>
          <h2 className="text-3xl md:text-4xl font-semibold text-zinc-100 tracking-tight">
            How the work runs.
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-4">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.1, duration: 0.5 }}
            className="md:col-span-1 border border-zinc-800/50 rounded-lg p-6 bg-zinc-900/30"
          >
            <p className="text-xs text-zinc-600 tracking-widest uppercase mb-5">
              Active Units
            </p>
            <div className="space-y-3">
              {operatingLayer.units.map((unit) => {
                const style = statusColors[unit.status];
                return (
                  <div
                    key={unit.id}
                    className="flex items-center justify-between"
                  >
                    <div className="flex items-center gap-2">
                      <span
                        className={`w-1.5 h-1.5 rounded-full ${style.dot} ${
                          unit.status === "active" ? "animate-pulse" : ""
                        }`}
                      />
                      <span className="text-sm text-zinc-300">{unit.label}</span>
                    </div>
                    <span className={`text-xs ${style.text} font-mono`}>
                      {style.label}
                    </span>
                  </div>
                );
              })}
            </div>

            <div className="mt-8 pt-6 border-t border-zinc-800/50 grid grid-cols-3 gap-3">
              <div className="text-center">
                <p className="text-xl font-semibold text-zinc-100 tabular-nums">
                  {operatingLayer.rhythm.buildsThisMonth}
                </p>
                <p className="text-[10px] text-zinc-600 mt-0.5 leading-tight">
                  builds this month
                </p>
              </div>
              <div className="text-center">
                <p className="text-xl font-semibold text-zinc-100 tabular-nums">
                  {operatingLayer.rhythm.notesPublished}
                </p>
                <p className="text-[10px] text-zinc-600 mt-0.5 leading-tight">
                  notes published
                </p>
              </div>
              <div className="text-center">
                <p className="text-xl font-semibold text-zinc-100 tabular-nums">
                  {operatingLayer.rhythm.experimentsRunning}
                </p>
                <p className="text-[10px] text-zinc-600 mt-0.5 leading-tight">
                  experiments live
                </p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="md:col-span-2 border border-zinc-800/50 rounded-lg p-6 bg-zinc-900/30"
          >
            <p className="text-xs text-zinc-600 tracking-widest uppercase mb-5">
              Recent Signals
            </p>
            <div className="space-y-2 mb-8">
              {operatingLayer.signals.map((signal, i) => {
                const isActive = i === signalIndex;
                return (
                  <motion.div
                    key={signal}
                    className={`flex items-center gap-3 rounded px-3 py-2 transition-colors duration-700 ${
                      isActive ? "bg-zinc-800/60" : "bg-transparent"
                    }`}
                  >
                    <span
                      className={`w-1 h-1 rounded-full shrink-0 transition-colors duration-700 ${
                        isActive ? "bg-indigo-400" : "bg-zinc-700"
                      }`}
                    />
                    <span
                      className={`text-sm font-mono transition-colors duration-700 ${
                        isActive ? "text-zinc-200" : "text-zinc-600"
                      }`}
                    >
                      {signal}
                    </span>
                  </motion.div>
                );
              })}
            </div>

            <div className="border-t border-zinc-800/50 pt-5">
              <p className="text-xs text-zinc-600 tracking-widest uppercase mb-3">
                Build Rhythm
              </p>
              <div className="flex gap-1 h-8 items-end">
                {Array.from({ length: 28 }).map((_, i) => {
                  const height = Math.max(
                    20,
                    Math.min(
                      100,
                      40 + Math.sin(i * 0.7 + 1.3) * 30 + Math.random() * 10
                    )
                  );
                  const isRecent = i > 22;
                  return (
                    <div
                      key={i}
                      className={`flex-1 rounded-sm transition-opacity ${
                        isRecent ? "opacity-90" : "opacity-30"
                      }`}
                      style={{
                        height: `${height}%`,
                        background: isRecent
                          ? "rgba(99,102,241,0.5)"
                          : "rgba(63,63,70,0.6)",
                      }}
                    />
                  );
                })}
              </div>
              <div className="flex justify-between mt-1">
                <span className="text-[10px] text-zinc-700">28d ago</span>
                <span className="text-[10px] text-zinc-700">today</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
