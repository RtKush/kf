import { motion } from "framer-motion";
import { Phone, MessageCircle, Sparkles, Instagram, MapPin } from "lucide-react";

const PHONE = "+919876543210";
const PHONE_DISPLAY = "+91 98765 43210";
const WHATSAPP = "https://wa.me/919876543210?text=Hi%20Kriyansh%20Films%2C%20I%20would%20like%20to%20book%20my%20shoot.";

export default function Contact() {
  return (
    <section id="contact" className="relative overflow-hidden py-28 sm:py-36">
      {/* Aura background */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute left-1/2 top-1/2 h-[60rem] w-[60rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[var(--gold)]/10 blur-[140px]" />
        <motion.div
          aria-hidden
          animate={{ rotate: 360 }}
          transition={{ duration: 60, ease: "linear", repeat: Infinity }}
          className="absolute left-1/2 top-1/2 h-[42rem] w-[42rem] -translate-x-1/2 -translate-y-1/2 rounded-full"
          style={{
            background:
              "conic-gradient(from 0deg, transparent 0%, color-mix(in oklab, var(--gold) 18%, transparent) 25%, transparent 50%, color-mix(in oklab, var(--gold-deep) 14%, transparent) 75%, transparent 100%)",
            filter: "blur(60px)",
          }}
        />
      </div>

      <div className="container-cinematic">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mx-auto max-w-3xl text-center"
        >
          <span className="eyebrow inline-flex items-center gap-2">
            <Sparkles className="h-3 w-3" />
            Let's create magic together
          </span>
          <h2 className="mt-5 font-display text-4xl leading-[1.05] sm:text-6xl md:text-7xl">
            Just <em className="text-gold-gradient">one call</em> away.
          </h2>
          <div className="gold-line mx-auto my-7 w-32" />
          <p className="mx-auto max-w-xl text-base text-foreground/65 sm:text-lg">
            No long forms. No waiting. Pick up your phone — call us or message on
            WhatsApp and we'll lock your date in <span className="text-[var(--gold)]">5 minutes</span>.
          </p>
        </motion.div>

        {/* CTA Cards */}
        <div className="mt-16 grid gap-6 md:grid-cols-2 md:gap-8">
          {/* CALL */}
          <motion.a
            href={`tel:${PHONE}`}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            whileHover={{ y: -8 }}
            className="glass glass-shine group relative overflow-hidden rounded-[2rem] p-8 sm:p-10"
          >
            <div className="absolute -right-16 -top-16 h-60 w-60 rounded-full bg-[var(--gold)]/20 blur-3xl transition-all duration-500 group-hover:bg-[var(--gold)]/40" />

            {/* Pulsing icon */}
            <div className="relative mb-8 inline-flex">
              <span className="absolute inset-0 -z-0 animate-ping rounded-2xl bg-[var(--gold)]/40" />
              <span className="absolute inset-0 -z-0 rounded-2xl bg-[var(--gold)]/30 blur-xl" />
              <motion.span
                animate={{ rotate: [0, -10, 10, -10, 0] }}
                transition={{ duration: 1.4, repeat: Infinity, repeatDelay: 2 }}
                className="relative grid h-16 w-16 place-items-center rounded-2xl bg-gradient-to-br from-[var(--gold-soft)] to-[var(--gold-deep)] text-[var(--ink)] shadow-[0_10px_40px_-5px_var(--gold)]"
              >
                <Phone className="h-7 w-7" strokeWidth={2.5} />
              </motion.span>
            </div>

            <div className="text-[0.65rem] uppercase tracking-[0.28em] text-[var(--gold)]">
              Call Us Direct
            </div>
            <div className="mt-2 font-display text-3xl sm:text-4xl">
              Talk to the <em className="text-gold-gradient">director</em>
            </div>
            <div className="mt-6 font-mono text-2xl text-foreground/90 sm:text-3xl">
              {PHONE_DISPLAY}
            </div>
            <p className="mt-4 text-sm text-foreground/55">
              Available 9 AM – 11 PM, every day. Hindi · English · Marathi.
            </p>

            <div className="mt-8 inline-flex items-center gap-2 rounded-full bg-[var(--gold)]/15 px-5 py-2.5 text-xs font-semibold uppercase tracking-[0.2em] text-[var(--gold)] ring-1 ring-[var(--gold)]/30 transition-all group-hover:bg-[var(--gold)] group-hover:text-[var(--ink)]">
              Tap to call
              <motion.span
                animate={{ x: [0, 5, 0] }}
                transition={{ duration: 1.2, repeat: Infinity }}
              >
                →
              </motion.span>
            </div>
          </motion.a>

          {/* WHATSAPP */}
          <motion.a
            href={WHATSAPP}
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.15 }}
            whileHover={{ y: -8 }}
            className="glass glass-shine group relative overflow-hidden rounded-[2rem] p-8 sm:p-10"
          >
            <div className="absolute -right-16 -top-16 h-60 w-60 rounded-full bg-[#25D366]/30 blur-3xl transition-all duration-500 group-hover:bg-[#25D366]/50" />

            <div className="relative mb-8 inline-flex">
              <span className="absolute inset-0 -z-0 animate-ping rounded-2xl bg-[#25D366]/50" />
              <span className="absolute inset-0 -z-0 rounded-2xl bg-[#25D366]/40 blur-xl" />
              <motion.span
                animate={{ scale: [1, 1.08, 1] }}
                transition={{ duration: 1.6, repeat: Infinity }}
                className="relative grid h-16 w-16 place-items-center rounded-2xl bg-[#25D366] text-white shadow-[0_10px_40px_-5px_#25D366]"
              >
                <MessageCircle className="h-7 w-7 fill-white" strokeWidth={2} />
              </motion.span>
            </div>

            <div className="text-[0.65rem] uppercase tracking-[0.28em] text-[#25D366]">
              Chat on WhatsApp
            </div>
            <div className="mt-2 font-display text-3xl sm:text-4xl">
              Reply in <em className="text-gold-gradient">2 minutes</em>
            </div>
            <div className="mt-6 inline-flex items-center gap-2 rounded-xl bg-white/5 px-4 py-3 text-sm text-foreground/85 ring-1 ring-white/10">
              <span className="h-2 w-2 animate-pulse rounded-full bg-[#25D366]" />
              Online now · Last reply just now
            </div>
            <p className="mt-4 text-sm text-foreground/55">
              Send your date, venue & vibe — we'll send a treatment instantly.
            </p>

            <div className="mt-8 inline-flex items-center gap-2 rounded-full bg-[#25D366] px-5 py-2.5 text-xs font-semibold uppercase tracking-[0.2em] text-white shadow-[0_8px_30px_-5px_#25D366] transition-all group-hover:scale-105">
              Open WhatsApp
              <motion.span
                animate={{ x: [0, 5, 0] }}
                transition={{ duration: 1.2, repeat: Infinity }}
              >
                →
              </motion.span>
            </div>
          </motion.a>
        </div>

        {/* Bottom strip — locations & socials */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mt-10 flex flex-col items-center justify-between gap-5 rounded-2xl glass px-6 py-5 sm:flex-row sm:px-8"
        >
          <div className="flex items-center gap-3 text-sm text-foreground/70">
            <MapPin className="h-4 w-4 text-[var(--gold)]" />
            Mumbai · Delhi · Goa · Udaipur · Worldwide
          </div>
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-3 text-sm text-foreground/70 transition-colors hover:text-[var(--gold)]"
          >
            <Instagram className="h-4 w-4 transition-transform group-hover:scale-110" />
            <span>@kriyanshfilms · 248K followers</span>
          </a>
        </motion.div>
      </div>
    </section>
  );
}
