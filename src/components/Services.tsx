import { Reveal } from "./Reveal";
import abstract1 from "@/assets/abstract-1.jpg";
import abstract2 from "@/assets/abstract-2.jpg";

const services = [
  {
    n: "01",
    title: "Brand Strategy",
    body: "Positioning, narrative architecture and identity systems built to outlive trend cycles.",
  },
  {
    n: "02",
    title: "Performance Marketing",
    body: "Paid media engineered around a single metric: profitable, compounding revenue.",
  },
  {
    n: "03",
    title: "Content & Social",
    body: "Editorial-grade content that earns attention without renting it.",
  },
  {
    n: "04",
    title: "SEO & Lifecycle",
    body: "Organic visibility and retention loops that quietly carry the business.",
  },
];

export function Services() {
  return (
    <section id="services" className="relative py-32 lg:py-44">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="grid lg:grid-cols-12 gap-10 mb-20">
          <Reveal as="div" className="lg:col-span-5">
            <p className="text-xs tracking-[0.3em] uppercase text-muted-foreground mb-6">
              ◆ Services
            </p>
            <h2 className="font-display text-5xl md:text-7xl leading-[1.0] tracking-tight text-balance">
              Four disciplines.<br />
              <span className="italic gradient-accent-text">One growth engine.</span>
            </h2>
          </Reveal>
          <Reveal as="div" delay={0.15} className="lg:col-span-6 lg:col-start-7 self-end">
            <p className="text-lg text-muted-foreground leading-relaxed text-pretty">
              We don't sell deliverables. We build a single integrated system
              where strategy, media, content and lifecycle compound into the
              kind of growth that defines a category.
            </p>
          </Reveal>
        </div>

        {/* Bento grid */}
        <div className="grid grid-cols-1 md:grid-cols-6 gap-4 lg:gap-6 auto-rows-[minmax(220px,auto)]">
          {/* Big featured card */}
          <Reveal className="md:col-span-4 md:row-span-2 group relative overflow-hidden rounded-3xl bg-card border border-border shadow-soft p-10 flex flex-col justify-between">
            <div className="flex items-start justify-between">
              <span className="text-xs tracking-[0.25em] uppercase text-muted-foreground">{services[0].n}</span>
              <span className="text-xs text-muted-foreground">Foundational</span>
            </div>
            <div className="relative aspect-[16/9] my-8 overflow-hidden rounded-2xl">
              <img src={abstract1} alt="" loading="lazy" width={1024} height={1024}
                className="absolute inset-0 h-full w-full object-cover transition-transform duration-[1500ms] group-hover:scale-105" />
            </div>
            <div>
              <h3 className="font-display text-4xl md:text-5xl tracking-tight">{services[0].title}</h3>
              <p className="mt-4 text-muted-foreground max-w-md">{services[0].body}</p>
            </div>
          </Reveal>

          <Reveal delay={0.05} className="md:col-span-2 group relative overflow-hidden rounded-3xl bg-foreground text-background p-8 flex flex-col justify-between">
            <span className="text-xs tracking-[0.25em] uppercase text-background/60">{services[1].n}</span>
            <div>
              <h3 className="font-display text-3xl tracking-tight">{services[1].title}</h3>
              <p className="mt-3 text-sm text-background/70">{services[1].body}</p>
            </div>
          </Reveal>

          <Reveal delay={0.1} className="md:col-span-2 group relative overflow-hidden rounded-3xl bg-card border border-border p-0 flex flex-col">
            <div className="relative h-40 overflow-hidden">
              <img src={abstract2} alt="" loading="lazy" width={1024} height={1024}
                className="absolute inset-0 h-full w-full object-cover transition-transform duration-[1500ms] group-hover:scale-105" />
            </div>
            <div className="p-7 flex-1 flex flex-col justify-between">
              <span className="text-xs tracking-[0.25em] uppercase text-muted-foreground">{services[2].n}</span>
              <div>
                <h3 className="font-display text-3xl tracking-tight mt-3">{services[2].title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{services[2].body}</p>
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.15} className="md:col-span-3 group relative overflow-hidden rounded-3xl bg-mist p-8 flex flex-col justify-between">
            <span className="text-xs tracking-[0.25em] uppercase text-muted-foreground">{services[3].n}</span>
            <div>
              <h3 className="font-display text-3xl tracking-tight">{services[3].title}</h3>
              <p className="mt-3 text-sm text-muted-foreground max-w-sm">{services[3].body}</p>
            </div>
          </Reveal>

          <Reveal delay={0.2} className="md:col-span-3 group relative overflow-hidden rounded-3xl bg-card border border-border p-8 flex flex-col justify-center items-start">
            <p className="font-display text-5xl md:text-6xl gradient-accent-text leading-none">+318%</p>
            <p className="mt-4 text-sm text-muted-foreground max-w-xs">
              Median revenue lift across active retainer clients in the last 12 months.
            </p>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
