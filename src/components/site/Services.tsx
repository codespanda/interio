import { ArrowRight, Sofa, Building2, ChefHat, BedDouble, LayoutGrid } from "lucide-react"
import { Button } from "@/components/ui/button"
import { SectionTag } from "./SectionTag"

const SERVICES = [
  {
    icon: Sofa,
    title: "Residential Design",
    desc: "Beautiful and functional spaces tailored for your home.",
  },
  {
    icon: Building2,
    title: "Commercial Design",
    desc: "Inspiring workspaces that enhance productivity and brand value.",
  },
  {
    icon: ChefHat,
    title: "Modular Kitchen",
    desc: "Stylish, ergonomic kitchens designed for modern living.",
  },
  {
    icon: BedDouble,
    title: "Turnkey Interiors",
    desc: "End-to-end interior solutions with seamless execution.",
  },
  {
    icon: LayoutGrid,
    title: "Space Planning",
    desc: "Smart layouts that maximize space and functionality.",
  },
]

export function Services() {
  return (
    <section id="services" className="container-x px-5 py-16 sm:px-8 lg:px-12 lg:py-20">
      <SectionTag eyebrow="WHAT WE DO" title="Our Interior Design Services" />

      <div className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-5">
        {SERVICES.map((s) => (
          <div
            key={s.title}
            className="rounded-xl border border-border bg-card p-7 text-center transition-shadow hover:shadow-md"
          >
            <div className="mx-auto flex size-14 items-center justify-center rounded-full bg-secondary">
              <s.icon className="size-6 text-accent" strokeWidth={1.5} />
            </div>
            <h3 className="mt-5 font-serif text-lg text-foreground">{s.title}</h3>
            <p className="mt-2 text-[13.5px] leading-relaxed text-muted-foreground">
              {s.desc}
            </p>
          </div>
        ))}
      </div>

      <div className="mt-11 flex justify-center">
        <Button size="lg" className="rounded-md">
          View All Services <ArrowRight className="size-4" />
        </Button>
      </div>
    </section>
  )
}
