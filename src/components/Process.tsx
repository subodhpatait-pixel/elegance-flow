import { Reveal } from "./Reveal";

const steps = [
  { n: "I", title: "Listen", body: "Two weeks immersed in your business, customers, data and category. We surface the unfair advantage already inside the brand." },
  { n: "II", title: "Architect", body: "Strategy, narrative and a 90-day growth blueprint with measurable milestones — signed off before a dollar moves." },
  { n: "III", title: "Launch", body: "Cross-channel execution: media, creative, content and lifecycle shipped weekly by a senior pod, never juniors." },
  { n: "IV", title: "Compound", body: "Quarterly reviews, ruthless iteration. Every learning is reinvested into the system, never billed twice." },
];

export function Process() {
  return (
    <section className="relative py-32 lg:py-44">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <Reveal className="max-w-3xl mb-20">
          <p className="text-xs tracking-[0.3em] uppercase text-muted-foreground mb-6">◆ Method</p>
          <h2 className="font-display text-5xl md:text-7xl leading-[1.0] tracking-tight text-balance">
            A four-act <span className="italic gradient-accent-text">operating system</span> for growth.
          </h2>
        </Reveal>

        <ol className="divide-y divide-border border-y border-border">
          {steps.map((s, i) => (
            <Reveal as="li" key={s.n} delay={i * 0.06}
              className="grid grid-cols-12 gap-6 py-10 lg:py-14 group hover:bg-mist/40 transition-colors px-2">
              <div className="col-span-2 md:col-span-1 font-display text-2xl text-muted-foreground">{s.n}</div>
              <h3 className="col-span-10 md:col-span-3 font-display text-3xl md:text-4xl tracking-tight">{s.title}</h3>
              <p className="col-span-12 md:col-span-7 md:col-start-6 text-muted-foreground text-lg leading-relaxed text-pretty max-w-2xl">
                {s.body}
              </p>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  );
}
