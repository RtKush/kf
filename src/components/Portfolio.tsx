import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Play, X } from "lucide-react";
import p1 from "@/assets/portfolio-1.jpg";
import p2 from "@/assets/portfolio-2.jpg";
import p3 from "@/assets/portfolio-3.jpg";
import p4 from "@/assets/portfolio-4.jpg";
import p5 from "@/assets/portfolio-5.jpg";
import p6 from "@/assets/portfolio-6.jpg";

type Item = { src: string; title: string; tag: string; type: "photo" | "video"; span: string };

const items: Item[] = [
  { src: p1, title: "Aanya & Vikram", tag: "Mehndi", type: "photo", span: "sm:col-span-1 sm:row-span-2" },
  { src: p2, title: "The Pheras", tag: "Cinema", type: "video", span: "sm:col-span-2 sm:row-span-1" },
  { src: p3, title: "Bridal Portrait", tag: "Editorial", type: "photo", span: "sm:col-span-1 sm:row-span-1" },
  { src: p4, title: "First Dance", tag: "Reception", type: "video", span: "sm:col-span-1 sm:row-span-1" },
  { src: p5, title: "Quiet Moment", tag: "Candid", type: "photo", span: "sm:col-span-1 sm:row-span-2" },
  { src: p6, title: "Baraat Night", tag: "Aerial", type: "video", span: "sm:col-span-2 sm:row-span-1" },
];

export default function Portfolio() {
  const [active, setActive] = useState<Item | null>(null);

  return (
    <section id="portfolio" className="relative py-28 sm:py-36">
      <div className="container-cinematic">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-14 flex flex-col items-end justify-between gap-6 sm:flex-row sm:items-end"
        >
          <div>
            <span className="eyebrow">Selected Work</span>
            <h2 className="mt-4 font-display text-4xl leading-tight sm:text-5xl md:text-6xl">
              The <em className="text-gold-gradient">Portfolio.</em>
            </h2>
          </div>
          <p className="max-w-sm text-sm text-foreground/60 sm:text-right">
            A handful of recent stories. Click any frame to step inside.
          </p>
        </motion.div>

        <div className="grid auto-rows-[220px] grid-cols-1 gap-4 sm:auto-rows-[260px] sm:grid-cols-3 lg:grid-cols-4 lg:auto-rows-[280px]">
          {items.map((it, i) => (
            <motion.button
              key={it.src}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: i * 0.08, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
              onClick={() => setActive(it)}
              data-cursor="hover"
              className={`group relative overflow-hidden rounded-3xl ${it.span} text-left ring-1 ring-white/5 transition-all duration-500 hover:ring-[var(--gold)]/40 hover:shadow-[0_25px_80px_-20px_var(--gold)]`}
            >
              <motion.img
                src={it.src}
                alt={it.title}
                loading="lazy"
                width={1280}
                height={1280}
                className="h-full w-full object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent opacity-90 transition-opacity duration-500 group-hover:opacity-100" />

              {/* Play / View overlay */}
              <div className="absolute inset-0 flex items-center justify-center opacity-0 transition-opacity duration-500 group-hover:opacity-100">
                <motion.div
                  whileHover={{ scale: 1.1 }}
                  className="grid h-16 w-16 place-items-center rounded-full bg-[var(--gold)] text-[var(--ink)] shadow-[0_0_40px_var(--gold)]"
                >
                  <Play className="h-6 w-6 translate-x-0.5 fill-current" />
                </motion.div>
              </div>

              <div className="absolute inset-x-0 bottom-0 flex items-end justify-between p-5">
                <div>
                  <div className="text-[0.62rem] uppercase tracking-[0.28em] text-[var(--gold)]">{it.tag}</div>
                  <div className="mt-1 font-display text-xl text-white">{it.title}</div>
                </div>
                <span className="rounded-full border border-white/20 bg-white/5 px-2.5 py-1 text-[0.55rem] uppercase tracking-[0.22em] text-white/80 backdrop-blur">
                  {it.type}
                </span>
              </div>
            </motion.button>
          ))}
        </div>
      </div>

      {/* Modal */}
      <AnimatePresence>
        {active && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setActive(null)}
            className="fixed inset-0 z-[100] grid place-items-center bg-black/80 p-4 backdrop-blur-xl"
          >
            <motion.div
              initial={{ scale: 0.85, opacity: 0, y: 30 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.85, opacity: 0, y: 30 }}
              transition={{ type: "spring", stiffness: 220, damping: 24 }}
              onClick={(e) => e.stopPropagation()}
              className="glass-strong relative max-h-[90vh] w-full max-w-5xl overflow-hidden rounded-3xl"
            >
              <button
                onClick={() => setActive(null)}
                className="absolute right-4 top-4 z-10 grid h-10 w-10 place-items-center rounded-full bg-black/50 text-white backdrop-blur transition-colors hover:bg-[var(--gold)] hover:text-[var(--ink)]"
                aria-label="Close"
              >
                <X className="h-5 w-5" />
              </button>
              <img
                src={active.src}
                alt={active.title}
                className="max-h-[80vh] w-full object-contain"
              />
              <div className="flex items-center justify-between bg-black/40 p-5">
                <div>
                  <div className="text-[0.62rem] uppercase tracking-[0.28em] text-[var(--gold)]">{active.tag}</div>
                  <div className="mt-1 font-display text-2xl">{active.title}</div>
                </div>
                <span className="text-xs uppercase tracking-[0.2em] text-foreground/60">Kriyansh Films</span>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
