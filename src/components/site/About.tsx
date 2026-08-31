import { UserRound, Award, Star, Users2 } from "lucide-react"
import { Button } from "@/components/ui/button"

const STATS = [
  { icon: UserRound, value: "10+", label: "Years of Experience" },
  { icon: Award, value: "250+", label: "Projects Completed" },
  { icon: Star, value: "98%", label: "Client Satisfaction" },
  { icon: Users2, value: "50+", label: "Design Experts" },
]

export function About() {
  return (
    <section id="about" className="container-x px-5 py-16 sm:px-8 lg:px-12 lg:py-20">
      <div className="grid grid-cols-1 gap-6 rounded-2xl bg-secondary/60 p-6 sm:p-10 lg:grid-cols-[1fr_1.1fr_0.85fr] lg:items-center lg:gap-8">
        <div>
          <p className="text-xs font-semibold tracking-[0.22em] text-accent">ABOUT US</p>
          <h2 className="mt-3 font-serif text-3xl leading-tight text-foreground sm:text-4xl">
            Designing with Passion. Delivering with Purpose.
          </h2>
          <p className="mt-4 text-[14.5px] leading-relaxed text-muted-foreground">
            Interio Design Studio is a team of passionate designers and creatives who
            believe every space has the power to inspire. We blend creativity,
            functionality and craftsmanship to create interiors that are timeless and
            uniquely yours.
          </p>
          <p className="mt-4 font-serif text-base italic text-foreground/80">
            — Interio Design Studio
          </p>
          <Button className="mt-6 rounded-md">About Us</Button>
        </div>

        <img
          src="https://images.unsplash.com/photo-1567016432779-094069958ea5?q=80&w=1000&auto=format&fit=crop"
          alt="Cozy designed living room corner with green armchair"
          className="h-[300px] w-full rounded-xl object-cover lg:h-[380px]"
        />

        <div className="grid grid-cols-2 gap-5 rounded-xl bg-background p-6 sm:p-7 lg:grid-cols-1">
          {STATS.map((s) => (
            <div key={s.label} className="flex items-center gap-3">
              <div className="flex size-11 shrink-0 items-center justify-center rounded-full bg-secondary">
                <s.icon className="size-5 text-accent" strokeWidth={1.5} />
              </div>
              <div>
                <p className="font-serif text-xl text-foreground">{s.value}</p>
                <p className="text-xs text-muted-foreground">{s.label}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
