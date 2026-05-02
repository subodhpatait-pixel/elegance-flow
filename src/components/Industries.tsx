import { Reveal } from "./Reveal";
import doctors from "@/assets/industry-doctors.jpg";
import clinics from "@/assets/industry-clinics.jpg";
import dentists from "@/assets/industry-dentists.jpg";
import dermatologists from "@/assets/industry-dermatologists.jpg";
import restaurants from "@/assets/industry-restaurants.jpg";
import cafes from "@/assets/industry-cafes.jpg";
import coachings from "@/assets/industry-coachings.jpg";
import offices from "@/assets/industry-offices.jpg";

const industries = [
  { title: "Doctors", body: "Personal practice sites that convert searches into appointments.", img: doctors },
  { title: "Clinics", body: "Multi-specialty clinic platforms with bookings & reviews.", img: clinics },
  { title: "Dentists", body: "Smile-forward branding with treatment-led funnels.", img: dentists },
  { title: "Dermatologists", body: "Premium skin & aesthetics sites that sell consultations.", img: dermatologists },
  { title: "Restaurants", body: "Menu-rich, reservation-ready experiences that drive footfall.", img: restaurants },
  { title: "Cafés", body: "Mood-led storytelling that turns walk-bys into regulars.", img: cafes },
  { title: "Coachings", body: "Lead-engine sites for batches, demos and admissions.", img: coachings },
  { title: "Offices", body: "Corporate identity sites built for credibility and hiring.", img: offices },
];

export function Industries() {
  return (
    <section id="industries" className="relative py-32 lg:py-44">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="grid lg:grid-cols-12 gap-10 mb-20">
          <Reveal as="div" className="lg:col-span-6">
            <p className="text-xs tracking-[0.3em] uppercase text-muted-foreground mb-6">
              ◆ Industries we serve
            </p>
            <h2 className="font-display text-5xl md:text-7xl leading-[1.0] tracking-tight text-balance">
              Built for the<br />
              <span className="italic gradient-accent-text">businesses we love.</span>
            </h2>
          </Reveal>
          <Reveal as="div" delay={0.15} className="lg:col-span-5 lg:col-start-8 self-end">
            <p className="text-lg text-muted-foreground leading-relaxed text-pretty">
              From neighbourhood cafés to multi-specialty clinics — we build
              websites and growth systems tailored to how each industry actually
              wins customers.
            </p>
          </Reveal>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 lg:gap-6">
          {industries.map((it, i) => (
            <Reveal key={it.title} delay={i * 0.05}>
              <article className="group relative overflow-hidden rounded-3xl bg-card border border-border shadow-soft h-full flex flex-col">
                <div className="relative aspect-[4/5] overflow-hidden">
                  <img
                    src={it.img}
                    alt={`${it.title} — websites and marketing by ElevateX`}
                    loading="lazy"
                    width={1024}
                    height={1024}
                    className="absolute inset-0 h-full w-full object-cover transition-transform duration-[1500ms] group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-foreground/60 via-foreground/0 to-transparent" />
                  <h3 className="absolute bottom-4 left-5 right-5 font-display text-3xl tracking-tight text-background">
                    {it.title}
                  </h3>
                </div>
                <p className="p-6 text-sm text-muted-foreground leading-relaxed">
                  {it.body}
                </p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
