import { motion } from "framer-motion";
import heroImg from "@/assets/hero-wedding.jpg";
import { ChevronDown } from "lucide-react";

export default function Hero() {
  return (
    <section id="home" className="relative isolate flex min-h-[100svh] items-center justify-center overflow-hidden">
      {/* Background "video" — using cinematic still with Ken Burns motion (works as poster + parallax) */}
      <motion.div
        initial={{ scale: 1.15 }}
        animate={{ scale: 1 }}
        transition={{ duration: 12, ease: "easeOut" }}
        className="absolute inset-0 -z-20"
      >
        <img
          src={heroImg}
          alt="Cinematic wedding by Kriyansh Films"
          className="h-full w-full object-cover"
          width={1920}
          height={1080}
        />
      </motion.div>

      {/* Gradient overlays */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-black/50 via-black/40 to-background" />
      <div className="absolute inset-0 -z-10 bg-gradient-to-t from-background via-transparent to-background/30" />
      <div
        className="absolute inset-0 -z-10 opacity-40 mix-blend-overlay"
        style={{
          background:
            "radial-gradient(ellipse at center, transparent 0%, transparent 40%, rgba(0,0,0,0.8) 100%)",
        }}
      />

      {/* Camera shutter intro */}
      <div className="pointer-events-none absolute inset-0 z-30">
        <div className="shutter-top absolute inset-x-0 top-0 h-1/2 bg-[var(--ink)]" />
        <div className="shutter-bottom absolute inset-x-0 bottom-0 h-1/2 bg-[var(--ink)]" />
      </div>

      {/* Floating gold accents */}
      <motion.div
        aria-hidden
        className="absolute left-[8%] top-[20%] -z-10 h-72 w-72 rounded-full bg-[var(--gold)]/10 blur-3xl animate-drift"
      />
      <motion.div
        aria-hidden
        className="absolute right-[6%] bottom-[12%] -z-10 h-96 w-96 rounded-full bg-[var(--gold-deep)]/15 blur-3xl animate-drift"
        style={{ animationDelay: "-7s" }}
      />

      {/* Content */}
      <div className="container-cinematic relative z-10 pt-24 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 1.5 }}
          className="mx-auto inline-flex items-center gap-3 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 backdrop-blur-md"
        >
          <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-[var(--gold)]" />
          <span className="eyebrow text-[0.65rem]">Luxury Wedding Cinema · Est. 2019</span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1.7 }}
          className="mt-6 font-display text-5xl font-medium leading-[1.05] text-foreground sm:text-7xl md:text-8xl lg:text-[8.5rem]"
        >
          Capturing <em className="not-italic text-gold-gradient">Emotions</em>,
          <br className="hidden sm:block" />
          <span className="font-light italic text-foreground/85">not just moments.</span>
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, scaleX: 0 }}
          animate={{ opacity: 1, scaleX: 1 }}
          transition={{ duration: 1, delay: 2.0 }}
          className="gold-line mx-auto mt-10 w-40"
        />

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 2.1 }}
          className="mx-auto mt-6 max-w-xl text-base font-light leading-relaxed text-foreground/70 sm:text-lg"
        >
          A boutique wedding film studio crafting timeless cinema for couples who
          want their story told the way it deserves — with soul.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 2.3 }}
          className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row"
        >
          <a href="#contact" className="btn-gold">Book Your Date</a>
          <a href="#portfolio" className="btn-ghost-gold">View Portfolio</a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, y: [0, 10, 0] }}
          transition={{ opacity: { delay: 3, duration: 1 }, y: { repeat: Infinity, duration: 2.5 } }}
          className="mt-20 flex flex-col items-center gap-2 text-foreground/50"
        >
          <span className="text-[0.65rem] uppercase tracking-[0.32em]">Scroll</span>
          <ChevronDown className="h-4 w-4" />
        </motion.div>
      </div>
    </section>
  );
}
