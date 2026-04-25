import { motion } from "framer-motion";
import { Camera, Film, Plane, Heart, Clapperboard, Sparkles } from "lucide-react";

const services = [
  { icon: Camera, title: "Traditional Photography", desc: "Timeless stills, perfectly lit, perfectly composed.", tag: "Stills" },
  { icon: Film, title: "Cinematography", desc: "Cinema-grade films shot on Sony FX & RED bodies.", tag: "Motion" },
  { icon: Plane, title: "Drone Shoot", desc: "Sweeping aerials that turn venues into landscapes.", tag: "Aerial" },
  { icon: Heart, title: "Wedding Highlights", desc: "5–8 minute films you'll rewatch on every anniversary.", tag: "Story" },
  { icon: Clapperboard, title: "Reels Creation", desc: "Same-day social cuts, sound-designed for the algorithm.", tag: "Social" },
  { icon: Sparkles, title: "Pre-Wedding Films", desc: "Destination shoots, treatment-led, narrative driven.", tag: "Concept" },
];

export default function Services() {
  return (
    <section id="services" className="relative py-28 sm:py-36">
      <div className="container-cinematic">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mx-auto mb-16 max-w-2xl text-center"
        >
          <span className="eyebrow">What We Do</span>
          <h2 className="mt-4 font-display text-4xl leading-tight sm:text-5xl md:text-6xl">
            A complete <em className="text-gold-gradient">visual atelier.</em>
          </h2>
        </motion.div>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((s, i) => {
            const Icon = s.icon;
            return (
              <motion.div
                key={s.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ delay: i * 0.08, duration: 0.7 }}
                whileHover={{ y: -8 }}
                className="group relative overflow-hidden rounded-[1.5rem] glass glass-shine p-7 transition-all duration-500 hover:border-[var(--gold)]/30 hover:shadow-[0_20px_60px_-15px_var(--gold)]"
              >
                {/* Decorative gold orb */}
                <div className="absolute -right-12 -top-12 h-40 w-40 rounded-full bg-[var(--gold)]/10 blur-3xl opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

                <div className="flex items-start justify-between">
                  <motion.div
                    whileHover={{ rotate: 8, scale: 1.1 }}
                    transition={{ type: "spring", stiffness: 200 }}
                    className="grid h-14 w-14 place-items-center rounded-2xl bg-gradient-to-br from-[var(--gold)]/20 to-[var(--gold-deep)]/10 text-[var(--gold)] ring-1 ring-[var(--gold)]/30"
                  >
                    <Icon className="h-6 w-6" strokeWidth={1.6} />
                  </motion.div>
                  <span className="text-[0.6rem] uppercase tracking-[0.28em] text-foreground/40">
                    {s.tag}
                  </span>
                </div>

                <h3 className="mt-6 font-display text-2xl leading-tight">{s.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-foreground/65">{s.desc}</p>

                <div className="mt-6 flex items-center gap-2 text-[0.7rem] uppercase tracking-[0.22em] text-[var(--gold)]/0 transition-all duration-300 group-hover:text-[var(--gold)]">
                  <span>Explore</span>
                  <span className="transition-transform group-hover:translate-x-1">→</span>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
