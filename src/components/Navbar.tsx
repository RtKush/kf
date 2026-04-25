import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Camera } from "lucide-react";

const links = [
  { href: "#home", label: "Home" },
  { href: "#about", label: "Director" },
  { href: "#team", label: "Team" },
  { href: "#packages", label: "Packages" },
  { href: "#services", label: "Services" },
  { href: "#portfolio", label: "Portfolio" },
  { href: "#contact", label: "Contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, delay: 1.4, ease: [0.22, 1, 0.36, 1] }}
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled ? "py-3" : "py-5"
      }`}
    >
      <div
        className={`container-cinematic flex items-center justify-between rounded-full px-5 py-3 transition-all duration-500 ${
          scrolled ? "glass-strong" : ""
        }`}
      >
        <a href="#home" className="flex items-center gap-2.5">
          <span className="grid h-9 w-9 place-items-center rounded-full bg-gradient-to-br from-[var(--gold-soft)] to-[var(--gold-deep)] text-[var(--ink)] shadow-[0_0_20px_-4px_var(--gold)]">
            <Camera className="h-4 w-4" strokeWidth={2.5} />
          </span>
          <div className="flex flex-col leading-none">
            <span className="font-display text-lg tracking-wide text-foreground">Kriyansh</span>
            <span className="text-[0.6rem] uppercase tracking-[0.32em] text-[var(--gold)]">Films</span>
          </div>
        </a>

        <nav className="hidden items-center gap-7 lg:flex">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="group relative text-[0.78rem] font-medium uppercase tracking-[0.2em] text-foreground/75 transition-colors hover:text-[var(--gold)]"
            >
              {l.label}
              <span className="absolute -bottom-1.5 left-1/2 h-px w-0 -translate-x-1/2 bg-[var(--gold)] transition-all duration-300 group-hover:w-full" />
            </a>
          ))}
        </nav>

        <a href="#contact" className="hidden btn-gold lg:inline-flex">Book Now</a>

        <button
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle menu"
          className="grid h-10 w-10 place-items-center rounded-full glass lg:hidden"
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.25 }}
            className="container-cinematic mt-3 lg:hidden"
          >
            <div className="glass-strong flex flex-col gap-1 rounded-3xl p-4">
              {links.map((l) => (
                <a
                  key={l.href}
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="rounded-2xl px-4 py-3 text-sm uppercase tracking-[0.18em] text-foreground/80 transition-colors hover:bg-white/5 hover:text-[var(--gold)]"
                >
                  {l.label}
                </a>
              ))}
              <a href="#contact" onClick={() => setOpen(false)} className="btn-gold mt-2 justify-center">
                Book Now
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
