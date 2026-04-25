import { createFileRoute } from "@tanstack/react-router";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Owner from "@/components/Owner";
import Team from "@/components/Team";
import Drone from "@/components/Drone";
import Packages from "@/components/Packages";
import Services from "@/components/Services";
import Portfolio from "@/components/Portfolio";
import Reels from "@/components/Reels";
import Counters from "@/components/Counters";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import CustomCursor from "@/components/CustomCursor";
import heroImg from "@/assets/hero-wedding.jpg";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: "Kriyansh Films — Luxury Wedding Cinema & Photography" },
      {
        name: "description",
        content:
          "Kriyansh Films crafts cinematic wedding films and editorial photography for couples who want their story told beautifully. Drone, gimbal, same-day reels.",
      },
      { property: "og:title", content: "Kriyansh Films — Luxury Wedding Cinema" },
      { property: "og:description", content: "Capturing emotions, not just moments. Boutique wedding films & photography." },
      { property: "og:image", content: heroImg },
      { name: "twitter:image", content: heroImg },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
});

function Index() {
  return (
    <main className="relative">
      <CustomCursor />
      <Navbar />
      <Hero />
      <Owner />
      <Team />
      <Drone />
      <Packages />
      <Services />
      <Portfolio />
      <Reels />
      <Counters />
      <Contact />
      <Footer />
      <WhatsAppButton />
    </main>
  );
}
