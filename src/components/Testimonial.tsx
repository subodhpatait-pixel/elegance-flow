import { Reveal } from "./Reveal";

export function Testimonial() {
  return (
    <section className="relative py-32 lg:py-44">
      <div className="mx-auto max-w-5xl px-6 lg:px-10 text-center">
        <Reveal>
          <p className="text-xs tracking-[0.3em] uppercase text-muted-foreground mb-10">◆ A client said</p>
        </Reveal>
        <Reveal delay={0.1}>
          <blockquote className="font-display text-3xl md:text-5xl lg:text-6xl leading-[1.15] tracking-tight text-balance">
            “ElevateX didn't run our marketing — they <span className="italic gradient-accent-text">rewrote what our company could become</span>. Within a year we were the category.”
          </blockquote>
        </Reveal>
        <Reveal delay={0.25}>
          <div className="mt-12 flex items-center justify-center gap-4 text-sm text-muted-foreground">
            <span className="h-px w-10 bg-foreground/30" />
            <span>Léa Marchetti, CEO of Maison 8</span>
            <span className="h-px w-10 bg-foreground/30" />
          </div>
        </Reveal>
      </div>
    </section>
  );
}
