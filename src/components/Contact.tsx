import { Reveal } from "./Reveal";

export function Contact() {
  return (
    <section id="contact" className="relative py-32 lg:py-44 bg-foreground text-background overflow-hidden">
      <div className="absolute inset-0 opacity-[0.05] pointer-events-none"
        style={{ background: "radial-gradient(ellipse at 50% 0%, oklch(0.62 0.19 258), transparent 60%)" }} />
      <div className="relative mx-auto max-w-6xl px-6 lg:px-10">
        <Reveal className="max-w-4xl">
          <p className="text-xs tracking-[0.3em] uppercase text-background/50 mb-8">◆ Let's build</p>
          <h2 className="font-display text-6xl md:text-8xl lg:text-9xl leading-[0.95] tracking-tight text-balance">
            Have an <span className="italic">empire</span> in mind?
          </h2>
          <p className="mt-10 max-w-xl text-lg text-background/70 leading-relaxed">
            We take on a maximum of six new partners per quarter. Tell us about
            your business and we'll respond within 48 hours with a clear point
            of view — not a deck.
          </p>
        </Reveal>

        <Reveal delay={0.15} className="mt-16 grid md:grid-cols-2 gap-12">
          <a href="mailto:hello@elevatex.studio"
            className="group block border-t border-background/20 pt-6">
            <span className="text-xs tracking-[0.25em] uppercase text-background/50">Email</span>
            <p className="mt-3 font-display text-3xl md:text-4xl tracking-tight group-hover:text-primary transition">
              hello@elevatex.studio →
            </p>
          </a>
          <a href="#" className="group block border-t border-background/20 pt-6">
            <span className="text-xs tracking-[0.25em] uppercase text-background/50">Studio</span>
            <p className="mt-3 font-display text-3xl md:text-4xl tracking-tight group-hover:text-primary transition">
              New York · London →
            </p>
          </a>
        </Reveal>

        <Reveal delay={0.3} className="mt-24 flex items-center justify-between flex-wrap gap-6 border-t border-background/15 pt-8 text-sm text-background/50">
          <p>© {new Date().getFullYear()} ElevateX Studio. All rights reserved.</p>
          <div className="flex gap-8">
            <a href="#" className="hover:text-background transition">Instagram</a>
            <a href="#" className="hover:text-background transition">LinkedIn</a>
            <a href="#" className="hover:text-background transition">Dribbble</a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
