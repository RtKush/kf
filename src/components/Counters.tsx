import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";

function Counter({ to, suffix = "", duration = 2 }: { to: number; suffix?: string; duration?: number }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-50px" });
  const [n, setN] = useState(0);

  useEffect(() => {
    if (!inView) return;
    let raf = 0;
    const start = performance.now();
    const tick = (t: number) => {
      const p = Math.min(1, (t - start) / (duration * 1000));
      const eased = 1 - Math.pow(1 - p, 3);
      setN(Math.round(to * eased));
      if (p < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [inView, to, duration]);

  return (
    <span ref={ref}>
      {n.toLocaleString()}
      {suffix}
    </span>
  );
}

const stats = [
  { v: 999999, s: "+", l: "Memories Captured" },
  { v: 500, s: "+", l: "Weddings Covered" },
  { v: 1000, s: "+", l: "Happy Clients" },
  { v: 5, s: "+", l: "Years of Cinema" },
];

export default function Counters() {
  return (
    <section className="relative py-24 sm:py-28">
      <div className="container-cinematic">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="glass-strong relative overflow-hidden rounded-[2rem] px-6 py-14 sm:px-12"
        >
          <div className="absolute -left-20 -top-20 h-60 w-60 rounded-full bg-[var(--gold)]/20 blur-3xl" />
          <div className="absolute -bottom-20 -right-20 h-60 w-60 rounded-full bg-[var(--gold-deep)]/20 blur-3xl" />

          <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
            {stats.map((s, i) => (
              <motion.div
                key={s.l}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="text-center"
              >
                <div className="font-display text-4xl text-gold-gradient sm:text-5xl lg:text-6xl">
                  <Counter to={s.v} suffix={s.s} duration={s.v > 10000 ? 3 : 2} />
                </div>
                <div className="gold-line mx-auto mt-4 w-10" />
                <div className="mt-3 text-[0.7rem] uppercase tracking-[0.28em] text-foreground/60">
                  {s.l}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
