import { useEffect, useRef, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export function CustomCursor() {
  const [visible, setVisible] = useState(false);
  const [hovered, setHovered] = useState(false);
  const [isTouch, setIsTouch] = useState(false);

  const rawX = useMotionValue(-100);
  const rawY = useMotionValue(-100);

  const x = useSpring(rawX, { stiffness: 400, damping: 35, mass: 0.4 });
  const y = useSpring(rawY, { stiffness: 400, damping: 35, mass: 0.4 });

  useEffect(() => {
    if (window.matchMedia("(pointer: coarse)").matches) {
      setIsTouch(true);
      return;
    }

    const onMove = (e: MouseEvent) => {
      rawX.set(e.clientX);
      rawY.set(e.clientY);
      if (!visible) setVisible(true);
    };

    const onEnter = (e: MouseEvent) => {
      const el = e.target as HTMLElement;
      if (el.closest("a, button, [data-cursor-hover]")) setHovered(true);
    };

    const onLeave = (e: MouseEvent) => {
      const el = e.target as HTMLElement;
      if (el.closest("a, button, [data-cursor-hover]")) setHovered(false);
    };

    const onOut = () => setVisible(false);

    window.addEventListener("mousemove", onMove);
    document.addEventListener("mouseover", onEnter);
    document.addEventListener("mouseout", onLeave);
    document.addEventListener("mouseleave", onOut);

    return () => {
      window.removeEventListener("mousemove", onMove);
      document.removeEventListener("mouseover", onEnter);
      document.removeEventListener("mouseout", onLeave);
      document.removeEventListener("mouseleave", onOut);
    };
  }, [visible, rawX, rawY]);

  if (isTouch) return null;

  return (
    <>
      <motion.div
        style={{
          position: "fixed",
          top: 0, left: 0,
          x, y,
          translateX: "-50%",
          translateY: "-50%",
          width: hovered ? 32 : 8,
          height: hovered ? 32 : 8,
          borderRadius: "50%",
          background: hovered ? "transparent" : "var(--accent)",
          border: hovered ? "1.5px solid var(--accent)" : "none",
          pointerEvents: "none",
          zIndex: 99999,
          opacity: visible ? 1 : 0,
          mixBlendMode: "normal",
          transition: "width 0.2s ease, height 0.2s ease, background 0.2s ease, border 0.2s ease, opacity 0.2s ease",
        }}
      />
      <style>{`* { cursor: none !important; }`}</style>
    </>
  );
}
