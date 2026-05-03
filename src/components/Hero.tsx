import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import heroWave from "@/assets/hero-wave.jpg";

export function Hero() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], [0, 200]);
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.08]);

  const ease = [0.22, 1, 0.36, 1] as const;

  return (
    <section ref={ref} className="relative min-h-screen pt-32 pb-24 overflow-hidden">
      <div className="absolute inset-0 bg-hero-glow pointer-events-none" />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-10">
        <motion.div style={{ y, opacity }} className="max-w-5xl">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease }}
            className="text-sm tracking-[0.3em] uppercase text-muted-foreground mb-8 flex items-center gap-3"
          >
            <span className="h-px w-10 bg-foreground/40" />
            A digital marketing studio
          </motion.p>

          <h1 className="font-display text-[clamp(3rem,9vw,9rem)] leading-[0.95] tracking-tight text-balance">
            {["Where", "brands", "become", "an"].map((word, i) => (
              <motion.span
                key={word}
                initial={{ opacity: 0, y: 60 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.1 + i * 0.08, ease }}
                className="inline-block mr-[0.25em]"
              >
                {word}
              </motion.span>
            ))}
            <motion.span
              initial={{ opacity: 0, y: 60 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.4, ease }}
              className="block italic gradient-accent-text"
            >
              empire.
            </motion.span>
          </h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.7, ease }}
            className="mt-10 max-w-xl text-lg text-muted-foreground leading-relaxed text-pretty"
          >
            ElevateX is a boutique growth studio crafting strategy, story and
            performance for ambitious brands. We turn attention into revenue —
            and revenue into legacy.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.9, ease }}
            className="mt-12 flex flex-wrap items-center gap-4"
          >
            <a
              href="#contact"
              className="group inline-flex items-center gap-3 rounded-full bg-foreground text-background px-7 py-4 text-sm font-medium hover:bg-primary transition-colors"
            >
              Book a strategy call
              <span className="transition-transform group-hover:translate-x-1">→</span>
            </a>
            <a
              href="#work"
              className="inline-flex items-center gap-2 px-2 py-4 text-sm text-foreground/80 hover:text-foreground transition"
            >
              See selected work
            </a>
          </motion.div>
        </motion.div>

        <motion.div
          style={{ scale, y: useTransform(scrollYProgress, [0, 1], [0, -100]) }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.2, delay: 0.3 }}
          className="mt-20 relative aspect-[16/7] rounded-3xl overflow-hidden shadow-elegant"
        >
          <img
            src={heroWave}
            alt="Editorial silk wave"
            width={1536}
            height={1024}
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background/40 via-transparent to-transparent" />
        </motion.div>
      </div>
    </section>
  );
}
