import { motion } from "framer-motion";
import { Play, Pause, Volume2, VolumeX } from "lucide-react";
import { useEffect, useRef, useState } from "react";

// Free cinematic stock footage (Mixkit – royalty free, no attribution required)
const reels = [
  {
    src: "https://assets.mixkit.co/videos/4787/4787-720.mp4",
    poster: "https://assets.mixkit.co/videos/4787/4787-thumbnail-720.jpg",
    title: "Aanya & Vikram",
    location: "Udaipur · Dec 2024",
    duration: "07:24",
  },
  {
    src: "https://assets.mixkit.co/videos/4769/4769-720.mp4",
    poster: "https://assets.mixkit.co/videos/4769/4769-thumbnail-720.jpg",
    title: "Riya & Arjun",
    location: "Goa · Feb 2025",
    duration: "05:12",
  },
  {
    src: "https://assets.mixkit.co/videos/39764/39764-720.mp4",
    poster: "https://assets.mixkit.co/videos/39764/39764-thumbnail-720.jpg",
    title: "Meera & Rohan",
    location: "Mumbai · Mar 2025",
    duration: "08:48",
  },
];

export default function Reels() {
  const [active, setActive] = useState(0);
  const [playing, setPlaying] = useState(true);
  const [muted, setMuted] = useState(true);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const v = videoRef.current;
    if (!v) return;
    if (playing) v.play().catch(() => setPlaying(false));
    else v.pause();
  }, [playing, active]);

  return (
    <section className="relative py-28 sm:py-36">
      <div className="container-cinematic">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mx-auto mb-14 max-w-2xl text-center"
        >
          <span className="eyebrow">Wedding Films</span>
          <h2 className="mt-4 font-display text-4xl leading-tight sm:text-5xl md:text-6xl">
            <em className="text-gold-gradient">Cinema</em> in motion.
          </h2>
        </motion.div>

        {/* Featured reel */}
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="relative mx-auto aspect-video max-w-5xl overflow-hidden rounded-[2rem] bg-black ring-1 ring-white/10 shadow-[0_30px_120px_-20px_rgba(0,0,0,0.8)]"
        >
          <video
            ref={videoRef}
            key={reels[active].src}
            src={reels[active].src}
            poster={reels[active].poster}
            autoPlay
            loop
            muted={muted}
            playsInline
            preload="metadata"
            className="absolute inset-0 h-full w-full object-cover"
          />

          <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/85 via-transparent to-black/30" />

          {/* Letterbox */}
          <div className="pointer-events-none absolute inset-x-0 top-0 h-10 bg-black/85" />
          <div className="pointer-events-none absolute inset-x-0 bottom-0 h-10 bg-black/85" />

          {/* Center play/pause */}
          <button
            onClick={() => setPlaying((p) => !p)}
            className="group absolute inset-0 grid place-items-center"
            aria-label={playing ? "Pause" : "Play"}
          >
            <motion.span
              initial={false}
              animate={{ opacity: playing ? 0 : 1, scale: playing ? 0.8 : 1 }}
              whileHover={{ scale: 1.08 }}
              className="grid h-20 w-20 place-items-center rounded-full bg-[var(--gold)]/95 text-[var(--ink)] shadow-[0_0_60px_var(--gold)] backdrop-blur sm:h-24 sm:w-24"
            >
              {playing ? <Pause className="h-7 w-7 fill-current" /> : <Play className="h-7 w-7 translate-x-0.5 fill-current" />}
            </motion.span>
          </button>

          {/* Mute toggle */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              setMuted((m) => !m);
            }}
            className="absolute right-5 top-14 z-10 grid h-11 w-11 place-items-center rounded-full bg-black/60 text-white/90 backdrop-blur ring-1 ring-white/15 transition hover:bg-[var(--gold)] hover:text-[var(--ink)]"
            aria-label={muted ? "Unmute" : "Mute"}
          >
            {muted ? <VolumeX className="h-4 w-4" /> : <Volume2 className="h-4 w-4" />}
          </button>

          {/* Bottom info */}
          <div className="absolute bottom-14 left-6 right-6 flex items-end justify-between">
            <div>
              <div className="text-[0.62rem] uppercase tracking-[0.28em] text-[var(--gold)]">
                <span className="mr-2 inline-block h-1.5 w-1.5 animate-pulse rounded-full bg-[var(--gold)]" />
                Now Playing
              </div>
              <div className="mt-1 font-display text-2xl text-white sm:text-3xl">{reels[active].title}</div>
              <div className="mt-0.5 text-xs text-white/60">{reels[active].location}</div>
            </div>
            <div className="font-mono text-xs text-white/70">{reels[active].duration}</div>
          </div>
        </motion.div>

        {/* Thumbnail row */}
        <div className="mx-auto mt-6 flex max-w-5xl gap-3 overflow-x-auto pb-2">
          {reels.map((r, i) => (
            <button
              key={r.title}
              onClick={() => {
                setActive(i);
                setPlaying(true);
              }}
              className={`group relative aspect-video w-44 shrink-0 overflow-hidden rounded-xl ring-1 transition-all duration-300 ${
                i === active ? "ring-[var(--gold)] shadow-[0_0_25px_-5px_var(--gold)]" : "ring-white/10 hover:ring-white/30"
              }`}
            >
              <img src={r.poster} alt={r.title} loading="lazy" className="h-full w-full object-cover" />
              <div className="absolute inset-0 bg-black/40 transition-opacity group-hover:bg-black/20" />
              <div className="absolute inset-0 grid place-items-center opacity-0 transition-opacity group-hover:opacity-100">
                <Play className="h-6 w-6 fill-white text-white" />
              </div>
              <div className="absolute bottom-1.5 left-2 text-[0.6rem] font-medium text-white">{r.title}</div>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
