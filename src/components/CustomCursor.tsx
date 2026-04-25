import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export default function CustomCursor() {
  const [enabled, setEnabled] = useState(false);
  const [active, setActive] = useState(false);
  const x = useMotionValue(-100);
  const y = useMotionValue(-100);
  const sx = useSpring(x, { stiffness: 350, damping: 28, mass: 0.4 });
  const sy = useSpring(y, { stiffness: 350, damping: 28, mass: 0.4 });

  useEffect(() => {
    const fine = window.matchMedia("(hover: hover) and (pointer: fine)").matches;
    if (!fine) return;
    setEnabled(true);
    document.documentElement.classList.add("cinematic-cursor");

    const move = (e: MouseEvent) => {
      x.set(e.clientX);
      y.set(e.clientY);
    };
    const over = (e: MouseEvent) => {
      const t = e.target as HTMLElement;
      setActive(!!t.closest("a, button, [data-cursor='hover']"));
    };
    window.addEventListener("mousemove", move);
    window.addEventListener("mouseover", over);
    return () => {
      window.removeEventListener("mousemove", move);
      window.removeEventListener("mouseover", over);
      document.documentElement.classList.remove("cinematic-cursor");
    };
  }, [x, y]);

  if (!enabled) return null;
  return (
    <>
      <motion.div
        className="pointer-events-none fixed left-0 top-0 z-[9999] -translate-x-1/2 -translate-y-1/2"
        style={{ x: sx, y: sy }}
      >
        <motion.div
          animate={{ scale: active ? 1.6 : 1, rotate: active ? 90 : 0 }}
          transition={{ type: "spring", stiffness: 260, damping: 22 }}
          className="relative h-10 w-10"
        >
          <div className="absolute inset-0 rounded-full border border-[var(--gold)]/70" />
          <div className="absolute inset-[6px] rounded-full border border-[var(--gold)]/40" />
          <div className="absolute left-1/2 top-1/2 h-1.5 w-1.5 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[var(--gold)]" />
        </motion.div>
      </motion.div>
      <motion.div
        className="pointer-events-none fixed left-0 top-0 z-[9998] -translate-x-1/2 -translate-y-1/2"
        style={{ x, y }}
      >
        <div className="h-1 w-1 rounded-full bg-[var(--gold-soft)]" />
      </motion.div>
    </>
  );
}
