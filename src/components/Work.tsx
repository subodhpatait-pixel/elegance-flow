import { motion } from "framer-motion";
import { Reveal } from "./Reveal";

const cases = [
  { client: "Aurelia", category: "Luxury skincare", metric: "+412% DTC revenue", year: "2025", tone: "from-[#e8ecf1] to-[#cfd9e6]" },
  { client: "Northwind", category: "B2B SaaS", metric: "$11M pipeline in 90 days", year: "2025", tone: "from-[#1a1a2e] to-[#2d3a55] text-background" },
  { client: "Maison 8", category: "Hospitality", metric: "3.1x repeat bookings", year: "2024", tone: "from-[#f5f3ee] to-[#e8e4dd]" },
  { client: "Obscura", category: "Fashion", metric: "Sold out 4 collections", year: "2024", tone: "from-[#3b82f6] to-[#4f46e5] text-background" },
];

export function Work() {
  return (
    <section id="work" className="relative py-32 lg:py-44 bg-mist/40">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="flex items-end justify-between mb-16 flex-wrap gap-6">
          <Reveal>
            <p className="text-xs tracking-[0.3em] uppercase text-muted-foreground mb-6">◆ Selected work</p>
            <h2 className="font-display text-5xl md:text-7xl leading-[1.0] tracking-tight">
              Quiet confidence,<br /><span className="italic">loud results.</span>
            </h2>
          </Reveal>
          <Reveal delay={0.15}>
            <a href="#contact" className="text-sm underline underline-offset-8 hover:text-primary transition">
              View full case studies →
            </a>
          </Reveal>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {cases.map((c, i) => (
            <Reveal key={c.client} delay={i * 0.08}>
              <motion.article
                whileHover={{ y: -6 }}
                transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                className={`relative overflow-hidden rounded-3xl aspect-[4/3] p-8 md:p-10 flex flex-col justify-between bg-gradient-to-br ${c.tone} shadow-soft`}
              >
                <div className="flex items-start justify-between text-xs tracking-[0.25em] uppercase opacity-70">
                  <span>{c.category}</span><span>{c.year}</span>
                </div>
                <div>
                  <h3 className="font-display text-5xl md:text-6xl tracking-tight">{c.client}</h3>
                  <p className="mt-4 font-display text-2xl md:text-3xl italic opacity-90">{c.metric}</p>
                </div>
              </motion.article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
