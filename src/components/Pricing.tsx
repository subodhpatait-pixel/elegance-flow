import { Reveal } from "./Reveal";

const plans = [
  {
    name: "Essentials",
    tag: "Website + Care",
    setup: "₹40,000",
    setupNote: "one-time build",
    recurring: "₹3,000",
    recurringNote: "per month",
    description:
      "A polished website plus everything it takes to keep it fast, found and flawless month after month.",
    features: [
      "Custom website design & development",
      "Hosting included",
      "Ongoing management & debugging",
      "On-page SEO optimization",
      "Monthly performance report",
    ],
    featured: false,
  },
  {
    name: "Growth",
    tag: "Website + Marketing",
    setup: "₹35,000",
    setupNote: "one-time build",
    recurring: "₹4,999",
    recurringNote: "per month",
    description:
      "For brands ready to scale — a high-converting website paired with paid media and social to drive demand.",
    features: [
      "Custom website design & development",
      "Hosting included",
      "Meta Ads management",
      "Google Ads management",
      "Social media management",
    ],
    featured: true,
  },
  {
    name: "Launch",
    tag: "Website + SEO",
    setup: "₹39,999",
    setupNote: "one-time build",
    recurring: "Included",
    recurringNote: "SEO foundation",
    description:
      "A premium website launch with a complete SEO foundation engineered to rank from day one.",
    features: [
      "Custom website design & development",
      "Hosting included",
      "Technical SEO setup",
      "Keyword & content strategy",
      "Analytics & search console setup",
    ],
    featured: false,
  },
];

export function Pricing() {
  return (
    <section id="pricing" className="relative py-32 lg:py-44">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="grid lg:grid-cols-12 gap-10 mb-20">
          <Reveal as="div" className="lg:col-span-6">
            <p className="text-xs tracking-[0.3em] uppercase text-muted-foreground mb-6">
              ◆ Plans & Pricing
            </p>
            <h2 className="font-display text-5xl md:text-7xl leading-[1.0] tracking-tight text-balance">
              Three plans.<br />
              <span className="italic gradient-accent-text">Built for ambition.</span>
            </h2>
          </Reveal>
          <Reveal as="div" delay={0.15} className="lg:col-span-5 lg:col-start-8 self-end">
            <p className="text-lg text-muted-foreground leading-relaxed text-pretty">
              Transparent pricing. No hidden retainers. Choose the package that
              matches the stage of your business — every plan ships a
              production-grade website, then compounds from there.
            </p>
          </Reveal>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 lg:gap-6">
          {plans.map((plan, i) => (
            <Reveal
              key={plan.name}
              delay={i * 0.08}
              className={`relative flex flex-col rounded-3xl p-8 lg:p-10 border transition-all ${
                plan.featured
                  ? "bg-foreground text-background border-foreground shadow-soft md:-translate-y-4"
                  : "bg-card border-border shadow-soft"
              }`}
            >
              {plan.featured && (
                <span className="absolute top-5 right-5 text-[10px] tracking-[0.25em] uppercase bg-background text-foreground px-3 py-1 rounded-full">
                  Most Picked
                </span>
              )}
              <div>
                <p
                  className={`text-xs tracking-[0.3em] uppercase mb-3 ${
                    plan.featured ? "text-background/60" : "text-muted-foreground"
                  }`}
                >
                  {plan.tag}
                </p>
                <h3 className="font-display text-4xl md:text-5xl tracking-tight">
                  {plan.name}
                </h3>
                <p
                  className={`mt-4 text-sm leading-relaxed ${
                    plan.featured ? "text-background/70" : "text-muted-foreground"
                  }`}
                >
                  {plan.description}
                </p>
              </div>

              <div
                className={`mt-8 pt-8 border-t ${
                  plan.featured ? "border-background/20" : "border-border"
                }`}
              >
                <div className="flex items-baseline gap-2">
                  <span className="font-display text-4xl md:text-5xl tracking-tight">
                    {plan.setup}
                  </span>
                  <span
                    className={`text-xs ${
                      plan.featured ? "text-background/60" : "text-muted-foreground"
                    }`}
                  >
                    {plan.setupNote}
                  </span>
                </div>
                <div className="mt-3 flex items-baseline gap-2">
                  <span className="font-display text-2xl tracking-tight">
                    + {plan.recurring}
                  </span>
                  <span
                    className={`text-xs ${
                      plan.featured ? "text-background/60" : "text-muted-foreground"
                    }`}
                  >
                    {plan.recurringNote}
                  </span>
                </div>
              </div>

              <ul className="mt-8 space-y-3 flex-1">
                {plan.features.map((f) => (
                  <li key={f} className="flex items-start gap-3 text-sm">
                    <span
                      className={`mt-1.5 inline-block h-1 w-3 flex-shrink-0 ${
                        plan.featured ? "bg-background/70" : "bg-foreground/70"
                      }`}
                    />
                    <span
                      className={
                        plan.featured ? "text-background/85" : "text-foreground/85"
                      }
                    >
                      {f}
                    </span>
                  </li>
                ))}
              </ul>

              <a
                href="#contact"
                className={`mt-10 inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-medium transition-colors ${
                  plan.featured
                    ? "bg-background text-foreground hover:bg-primary hover:text-background"
                    : "bg-foreground text-background hover:bg-primary"
                }`}
              >
                Choose {plan.name}
                <span className="transition-transform group-hover:translate-x-0.5">→</span>
              </a>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.3}>
          <p className="mt-12 text-center text-xs tracking-[0.2em] uppercase text-muted-foreground">
            All prices in INR · GST extra · Custom scopes available on request
          </p>
        </Reveal>
      </div>
    </section>
  );
}
