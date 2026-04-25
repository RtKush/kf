import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import droneImg from "@/assets/drone-shot.jpg";
import { Plane } from "lucide-react";

export default function Drone() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const bgY = useTransform(scrollYProgress, [0, 1], ["-15%", "15%"]);
  const droneX = useTransform(scrollYProgress, [0, 1], ["-30%", "60%"]);
  const droneY = useTransform(scrollYProgress, [0, 0.5, 1], ["20%", "-10%", "30%"]);

  return (
    <section ref={ref} className="relative overflow-hidden py-28 sm:py-36">
      {/* Background drone shot with parallax */}
      <motion.div style={{ y: bgY }} className="absolute inset-0 -z-20">
        <img
          src={droneImg}
          alt="Aerial drone view of a luxury wedding venue"
          loading="lazy"
          width={1920}
          height={1080}
          className="h-full w-full scale-110 object-cover opacity-50"
        />
      </motion.div>
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-background via-background/70 to-background" />

      {/* Flying drone icon */}
      <motion.div
        style={{ x: droneX, y: droneY }}
        className="pointer-events-none absolute left-0 top-1/2 z-10"
      >
        <motion.div
          animate={{ rotate: [-4, 4, -4] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          className="relative"
        >
          <div className="absolute inset-0 -z-10 h-16 w-16 rounded-full bg-[var(--gold)]/30 blur-2xl" />
          <Plane className="h-12 w-12 -rotate-45 text-[var(--gold)] drop-shadow-[0_0_20px_var(--gold)]" />
        </motion.div>
      </motion.div>

      <div className="container-cinematic relative z-20">
        <div className="mx-auto max-w-3xl text-center">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="eyebrow"
          >
            From 400 Feet Up
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9 }}
            className="mt-4 font-display text-4xl leading-tight sm:text-5xl md:text-7xl"
          >
            Cinematic
            <br />
            <em className="text-gold-gradient">Aerial Cinema.</em>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="mx-auto mt-6 max-w-xl text-foreground/65"
          >
            Licensed pilots flying the latest DJI cinema drones. Sweeping reveals,
            buttery 4K orbits, and that one shot that makes everyone stop scrolling.
          </motion.p>
        </div>

        <div className="mt-16 grid gap-5 sm:grid-cols-3">
          {[
            { v: "4K · 60fps", l: "Capture" },
            { v: "ProRes RAW", l: "Format" },
            { v: "DGCA Certified", l: "Pilots" },
          ].map((s, i) => (
            <motion.div
              key={s.l}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.12 }}
              className="glass glass-shine rounded-3xl px-6 py-7 text-center"
            >
              <div className="font-display text-2xl text-gold-gradient">{s.v}</div>
              <div className="mt-2 text-[0.65rem] uppercase tracking-[0.28em] text-foreground/55">
                {s.l}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
