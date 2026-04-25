import { motion } from "framer-motion";
import directorImg from "@/assets/director.jpg";
import { Phone, Sparkles } from "lucide-react";

export default function Owner() {
  return (
    <section id="about" className="relative py-28 sm:py-36">
      <div className="container-cinematic grid items-center gap-14 lg:grid-cols-2 lg:gap-20">
        {/* Image with floating glass frame */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          className="relative mx-auto w-full max-w-md"
        >
          <div className="absolute -inset-6 -z-10 rounded-[2rem] bg-[var(--gold)]/8 blur-3xl" />
          <motion.div
            animate={{ y: [0, -14, 0] }}
            transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
            className="glass-strong glass-shine relative overflow-hidden rounded-[2rem] p-3"
          >
            <img
              src={directorImg}
              alt="Director — Kriyansh Films"
              loading="lazy"
              width={1024}
              height={1280}
              className="aspect-[4/5] w-full rounded-3xl object-cover"
            />
            <div className="pointer-events-none absolute inset-3 rounded-3xl ring-1 ring-inset ring-[var(--gold)]/20" />
          </motion.div>

          {/* Floating badges */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4, type: "spring", stiffness: 180 }}
            className="glass absolute -left-6 top-10 hidden rounded-2xl px-4 py-3 sm:block"
          >
            <div className="flex items-center gap-2.5">
              <Sparkles className="h-4 w-4 text-[var(--gold)]" />
              <div className="leading-tight">
                <div className="text-xs text-foreground/60">Award Winner</div>
                <div className="text-sm font-semibold">Best Wedding Film 2024</div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.6, type: "spring", stiffness: 180 }}
            className="glass absolute -right-4 bottom-12 hidden rounded-2xl px-4 py-3 sm:block"
          >
            <div className="leading-tight">
              <div className="text-2xl font-display text-gold-gradient">5+</div>
              <div className="text-[0.65rem] uppercase tracking-[0.18em] text-foreground/60">Years Crafting</div>
            </div>
          </motion.div>
        </motion.div>

        {/* Content */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.9 }}
        >
          <span className="eyebrow">Meet the Director</span>
          <h2 className="mt-4 font-display text-4xl leading-[1.1] sm:text-5xl md:text-6xl">
            A vision built on <em className="text-gold-gradient">stillness</em>,
            <br />
            executed with <em className="text-gold-gradient">precision.</em>
          </h2>
          <div className="gold-line my-8 w-24" />
          <p className="text-base leading-relaxed text-foreground/70 sm:text-lg">
            I'm <span className="text-foreground">Kriyansh Mehra</span> — founder and lead director.
            For nearly a decade I've stood quietly in the corners of weddings,
            waiting for the look between fathers and daughters, the laugh that
            breaks the silence, the tear no one else saw. My team and I don't
            shoot weddings. We compose them.
          </p>

          <div className="mt-8 grid grid-cols-3 gap-4 text-center">
            {[
              { v: "500+", l: "Weddings" },
              { v: "37", l: "Cities" },
              { v: "4.9", l: "Avg Rating" },
            ].map((s) => (
              <div key={s.l} className="glass rounded-2xl px-4 py-5">
                <div className="font-display text-2xl text-gold-gradient sm:text-3xl">{s.v}</div>
                <div className="mt-1 text-[0.65rem] uppercase tracking-[0.22em] text-foreground/55">{s.l}</div>
              </div>
            ))}
          </div>

          <a href="#contact" className="btn-gold mt-10 inline-flex items-center gap-2">
            <Phone className="h-3.5 w-3.5" />
            Contact Now
          </a>
        </motion.div>
      </div>
    </section>
  );
}
