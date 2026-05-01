import { motion, useInView, useMotionValue, useTransform, animate } from "framer-motion";
import { useEffect, useRef } from "react";
import { Reveal } from "./Reveal";

function Counter({ to, suffix = "", decimals = 0 }: { to: number; suffix?: string; decimals?: number }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-50px" });
  const mv = useMotionValue(0);
  const rounded = useTransform(mv, (v) => v.toFixed(decimals));
  useEffect(() => {
    if (inView) animate(mv, to, { duration: 2, ease: [0.22, 1, 0.36, 1] });
  }, [inView, mv, to]);
  return (
    <span ref={ref} className="font-display tabular-nums">
      <motion.span>{rounded}</motion.span>{suffix}
    </span>
  );
}

const stats = [
  { value: 240, suffix: "M+", label: "Ad spend managed profitably" },
  { value: 4.8, suffix: "x", label: "Average ROAS across portfolio", decimals: 1 },
  { value: 92, suffix: "%", label: "Client retention beyond year one" },
  { value: 11, suffix: "", label: "Industries we've reshaped" },
];

export function Stats() {
  return (
    <section id="process" className="relative py-32 lg:py-40 bg-foreground text-background overflow-hidden">
      <div className="absolute inset-0 opacity-[0.06] pointer-events-none"
        style={{ backgroundImage: "radial-gradient(rgba(255,255,255,0.6) 1px, transparent 1px)", backgroundSize: "24px 24px" }} />
      <div className="relative mx-auto max-w-7xl px-6 lg:px-10">
        <Reveal as="div" className="max-w-3xl mb-20">
          <p className="text-xs tracking-[0.3em] uppercase text-background/50 mb-6">◆ Proof</p>
          <h2 className="font-display text-5xl md:text-7xl leading-[1.0] tracking-tight text-balance">
            Numbers that <span className="italic">speak quietly</span> — and compound loudly.
          </h2>
        </Reveal>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-4">
          {stats.map((s, i) => (
            <Reveal key={s.label} delay={i * 0.08} className="border-t border-background/15 pt-8">
              <div className="text-5xl md:text-7xl tracking-tight">
                <Counter to={s.value} suffix={s.suffix} decimals={s.decimals ?? 0} />
              </div>
              <p className="mt-6 text-sm text-background/60 max-w-[14ch]">{s.label}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
