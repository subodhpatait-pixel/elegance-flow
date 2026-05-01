import { createFileRoute } from "@tanstack/react-router";
import { Nav } from "@/components/Nav";
import { Hero } from "@/components/Hero";
import { Marquee } from "@/components/Marquee";
import { Services } from "@/components/Services";
import { Work } from "@/components/Work";
import { Stats } from "@/components/Stats";
import { Process } from "@/components/Process";
import { Testimonial } from "@/components/Testimonial";
import { Contact } from "@/components/Contact";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "ElevateX — Where brands become empires" },
      { name: "description", content: "ElevateX is a boutique digital marketing studio crafting strategy, performance and story for ambitious brands." },
      { property: "og:title", content: "ElevateX — Where brands become empires" },
      { property: "og:description", content: "Boutique digital marketing studio. Strategy, performance, content & lifecycle." },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <main className="relative bg-background text-foreground">
      <Nav />
      <Hero />
      <Marquee />
      <Services />
      <Work />
      <Stats />
      <Process />
      <Testimonial />
      <Contact />
    </main>
  );
}
