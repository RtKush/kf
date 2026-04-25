import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import teamImg from "@/assets/team-walk.jpg";
import { Camera, Video, Plane, Aperture, Film } from "lucide-react";

const crew = [
  { name: "Lead Cinematographer", icon: Video },
  { name: "Photo Director", icon: Camera },
  { name: "Drone Operator", icon: Plane },
  { name: "Gimbal Specialist", icon: Aperture },
  { name: "Editor", icon: Film },
];

export default function Team() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], ["10%", "-10%"]);
  const blur = useTransform(scrollYProgress, [0, 0.4, 0.6, 1], [4, 0, 0, 4]);
  const filter = useTransform(blur, (b) => `blur(${b}px)`);

  return (
    <section id="team" ref={ref} className="relative overflow-hidden py-28 sm:py-36">
      <div className="container-cinematic">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mx-auto mb-14 max-w-2xl text-center"
        >
          <span className="eyebrow">The Crew Walks In</span>
          <h2 className="mt-4 font-display text-4xl leading-tight sm:text-5xl md:text-6xl">
            Five storytellers,
            <br />
            <em className="text-gold-gradient">one rhythm.</em>
          </h2>
          <p className="mx-auto mt-5 max-w-lg text-foreground/65">
            Every event begins with the same scene — our team in matched black,
            cameras in hand, walking the venue together before a single frame is shot.
          </p>
        </motion.div>

        {/* Cinematic team image with parallax + blur in/out */}
        <div className="relative mx-auto aspect-[16/9] max-w-6xl overflow-hidden rounded-[2rem]">
          <motion.div style={{ y, filter }} className="absolute -inset-12">
            <img
              src={teamImg}
              alt="Kriyansh Films team walking into a wedding venue"
              loading="lazy"
              width={1920}
              height={1080}
              className="h-full w-full object-cover"
            />
          </motion.div>
          {/* Cinematic vignette + bars */}
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-background via-transparent to-background/40" />
          <div className="pointer-events-none absolute inset-0 ring-1 ring-inset ring-white/10" />
          {/* Letterbox bars */}
          <motion.div
            initial={{ height: 80 }}
            whileInView={{ height: 40 }}
            transition={{ duration: 1.2, ease: [0.77, 0, 0.18, 1] }}
            viewport={{ once: true }}
            className="pointer-events-none absolute inset-x-0 top-0 bg-[var(--ink)]"
          />
          <motion.div
            initial={{ height: 80 }}
            whileInView={{ height: 40 }}
            transition={{ duration: 1.2, ease: [0.77, 0, 0.18, 1] }}
            viewport={{ once: true }}
            className="pointer-events-none absolute inset-x-0 bottom-0 bg-[var(--ink)]"
          />

          {/* Crew chips walking in */}
          <div className="absolute inset-x-0 bottom-12 flex flex-wrap items-center justify-center gap-3 px-4 sm:bottom-16">
            {crew.map((c, i) => {
              const Icon = c.icon;
              return (
                <motion.div
                  key={c.name}
                  initial={{ opacity: 0, x: -40, filter: "blur(8px)" }}
                  whileInView={{ opacity: 1, x: 0, filter: "blur(0px)" }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 + i * 0.18, duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
                  className="glass flex items-center gap-2 rounded-full px-3 py-1.5 sm:px-4 sm:py-2"
                >
                  <Icon className="h-3.5 w-3.5 text-[var(--gold)]" />
                  <span className="text-[0.7rem] font-medium uppercase tracking-[0.18em] text-foreground/85 sm:text-xs">
                    {c.name}
                  </span>
                </motion.div>
              );
            })}
          </div>

          {/* Timecode HUD */}
          <div className="absolute left-5 top-5 flex items-center gap-2 text-[0.65rem] uppercase tracking-[0.22em] text-[var(--gold)]/80">
            <span className="h-2 w-2 animate-pulse rounded-full bg-red-500" />
            REC · 24fps · 4K
          </div>
          <div className="absolute right-5 top-5 text-[0.65rem] uppercase tracking-[0.22em] text-foreground/60">
            Scene 01 · Take 01
          </div>
        </div>
      </div>
    </section>
  );
}
