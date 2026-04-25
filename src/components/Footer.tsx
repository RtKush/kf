import { Camera, Instagram, Youtube, Facebook } from "lucide-react";

export default function Footer() {
  return (
    <footer className="relative border-t border-white/5 py-14">
      <div className="container-cinematic">
        <div className="flex flex-col items-center gap-8 text-center">
          <div className="flex items-center gap-2.5">
            <span className="grid h-10 w-10 place-items-center rounded-full bg-gradient-to-br from-[var(--gold-soft)] to-[var(--gold-deep)] text-[var(--ink)]">
              <Camera className="h-4 w-4" strokeWidth={2.5} />
            </span>
            <div className="flex flex-col leading-none">
              <span className="font-display text-xl">Kriyansh Films</span>
              <span className="text-[0.6rem] uppercase tracking-[0.32em] text-[var(--gold)]">
                Wedding Cinema
              </span>
            </div>
          </div>

          <p className="max-w-md text-sm italic text-foreground/55">
            "Capturing emotions, not just moments."
          </p>

          <div className="gold-line w-24" />

          <div className="flex items-center gap-3">
            {[Instagram, Youtube, Facebook].map((Icon, i) => (
              <a
                key={i}
                href="#"
                aria-label="social"
                className="grid h-11 w-11 place-items-center rounded-full glass text-foreground/65 transition-all duration-300 hover:scale-110 hover:text-[var(--gold)] hover:shadow-[0_0_25px_-3px_var(--gold)]"
              >
                <Icon className="h-4 w-4" />
              </a>
            ))}
          </div>

          <div className="text-[0.65rem] uppercase tracking-[0.28em] text-foreground/40">
            © {new Date().getFullYear()} Kriyansh Films · Crafted with cinema in mind
          </div>
        </div>
      </div>
    </footer>
  );
}
