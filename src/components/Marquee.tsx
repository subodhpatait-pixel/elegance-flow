const clients = [
  "AURELIA", "NORTHWIND", "MAISON 8", "VANTA & CO.", "OBSCURA",
  "HELIOS", "BLACKLINE", "ATELIER 21", "KINFOLK", "MERIDIAN",
];

export function Marquee() {
  const list = [...clients, ...clients];
  return (
    <section aria-label="Trusted by" className="relative py-16 border-y border-border/60 bg-mist/40 overflow-hidden">
      <p className="text-center text-xs tracking-[0.3em] uppercase text-muted-foreground mb-8">
        Trusted by category-defining brands
      </p>
      <div className="flex marquee w-max gap-16 px-8 font-display text-3xl text-foreground/70">
        {list.map((c, i) => (
          <span key={i} className="whitespace-nowrap tracking-tight">{c}</span>
        ))}
      </div>
    </section>
  );
}
