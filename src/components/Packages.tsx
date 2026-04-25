import { motion } from "framer-motion";
import { Check, Sparkles } from "lucide-react";

const packages = [
  {
    name: "Silver",
    tier: 1,
    price: "₹85,000",
    original: "₹1,20,000",
    features: ["1 Photographer", "1 Cinematographer", "Edited Album (60+ pics)", "3-min Highlight Reel", "1 Day Coverage"],
  },
  {
    name: "Gold",
    tier: 2,
    price: "₹1,45,000",
    original: "₹2,10,000",
    features: ["2 Photographers", "2 Cinematographers", "Premium Album (150+ pics)", "7-min Cinematic Film", "Drone Coverage", "2 Days Coverage"],
  },
  {
    name: "Platinum",
    tier: 3,
    price: "₹2,40,000",
    original: "₹3,40,000",
    popular: true,
    features: ["3 Photographers", "3 Cinematographers", "Coffee-Table Album", "Cinematic Trailer + Film", "Drone + Gimbal", "Same-Day Reel", "3 Days Coverage"],
  },
  {
    name: "Diamond",
    tier: 4,
    price: "₹3,90,000",
    original: "₹5,50,000",
    features: ["Full Crew (5+)", "Multi-Cam Setup", "Luxury Hardcover Album", "Feature-Length Film", "Aerial + Underwater", "Live Streaming", "Unlimited Days"],
  },
];

export default function Packages() {
  return (
    <section id="packages" className="relative py-28 sm:py-36">
      <div className="container-cinematic">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mx-auto mb-16 max-w-2xl text-center"
        >
          <span className="eyebrow">Investment</span>
          <h2 className="mt-4 font-display text-4xl leading-tight sm:text-5xl md:text-6xl">
            Curated <em className="text-gold-gradient">Packages</em>
          </h2>
          <p className="mt-5 text-foreground/65">
            Transparent pricing. Tailored coverage. Every wedding, treated like a feature film.
          </p>
        </motion.div>

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {packages.map((p, i) => (
            <motion.article
              key={p.name}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: i * 0.1, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
              whileHover={{ y: -10 }}
              className={`group relative flex flex-col rounded-[1.75rem] p-7 ${
                p.popular ? "glass-strong" : "glass"
              } glass-shine transition-all duration-500 hover:shadow-[0_30px_80px_-20px_var(--gold)]`}
            >
              {p.popular && (
                <div className="absolute inset-0 -z-10 rounded-[1.75rem] bg-gradient-to-br from-[var(--gold)]/15 via-transparent to-transparent" />
              )}

              {/* 30% OFF badge */}
              <div className="animate-badge-pop absolute -right-3 -top-3 z-10 grid h-16 w-16 place-items-center rounded-full bg-gradient-to-br from-[var(--gold-soft)] to-[var(--gold-deep)] text-[var(--ink)] shadow-[0_0_30px_-4px_var(--gold)]">
                <div className="text-center leading-none">
                  <div className="text-base font-bold">30%</div>
                  <div className="text-[0.55rem] font-bold uppercase tracking-wider">Off</div>
                </div>
              </div>

              <div className="flex items-baseline gap-2">
                <span className="font-display text-3xl text-foreground">{p.name}</span>
                {p.popular && <Sparkles className="h-4 w-4 text-[var(--gold)]" />}
              </div>
              <div className="gold-line mt-4 w-12" />

              <div className="mt-6 flex items-baseline gap-2">
                <motion.span
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 + 0.3, type: "spring", stiffness: 200 }}
                  className="font-display text-4xl text-gold-gradient sm:text-5xl"
                >
                  {p.price}
                </motion.span>
                <span className="text-sm text-foreground/40 line-through">{p.original}</span>
              </div>
              <span className="mt-1 text-[0.65rem] uppercase tracking-[0.22em] text-foreground/45">
                Limited Season Offer
              </span>

              <ul className="mt-7 space-y-3 text-sm">
                {p.features.map((f) => (
                  <li key={f} className="flex items-start gap-3">
                    <span className="mt-0.5 grid h-5 w-5 shrink-0 place-items-center rounded-full bg-[var(--gold)]/15 text-[var(--gold)]">
                      <Check className="h-3 w-3" strokeWidth={3} />
                    </span>
                    <span className="text-foreground/80">{f}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-auto pt-8">
                <a
                  href="#contact"
                  className={`block w-full rounded-full px-6 py-3.5 text-center text-[0.72rem] font-semibold uppercase tracking-[0.22em] transition-all duration-300 ${
                    p.popular
                      ? "bg-gradient-to-r from-[var(--gold-deep)] to-[var(--gold)] text-[var(--ink)] hover:shadow-[0_10px_40px_-8px_var(--gold)]"
                      : "border border-[var(--gold)]/40 text-[var(--gold-soft)] hover:border-[var(--gold)] hover:bg-[var(--gold)]/10"
                  }`}
                >
                  Choose {p.name}
                </a>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
