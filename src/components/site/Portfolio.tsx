import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { SectionTag } from "./SectionTag"

const PROJECTS = [
  {
    title: "Modern Minimal Home",
    tag: "Residence",
    img: "https://images.unsplash.com/photo-1600210492493-0946911123ea?q=80&w=900&auto=format&fit=crop",
  },
  {
    title: "Luxury Apartment",
    tag: "Residence",
    img: "https://images.unsplash.com/photo-1556911220-e15b29be8c8f?q=80&w=900&auto=format&fit=crop",
  },
  {
    title: "Corporate Office",
    tag: "Commercial",
    img: "https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=900&auto=format&fit=crop",
  },
  {
    title: "Elegant Bedroom",
    tag: "Residence",
    img: "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?q=80&w=900&auto=format&fit=crop",
  },
]

export function Portfolio() {
  return (
    <section id="portfolio" className="bg-secondary/60 py-16 lg:py-20">
      <div className="container-x px-5 sm:px-8 lg:px-12">
        <SectionTag eyebrow="OUR WORK" title="Spaces We've Transformed" />

        <div className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {PROJECTS.map((p) => (
            <div
              key={p.title}
              className="group relative overflow-hidden rounded-xl"
            >
              <img
                src={p.img}
                alt={p.title}
                className="h-[280px] w-full object-cover transition-transform duration-500 group-hover:scale-105 lg:h-[320px]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />
              <div className="absolute inset-x-0 bottom-0 p-5">
                <h3 className="font-serif text-lg text-white">{p.title}</h3>
                <p className="text-xs text-white/75">{p.tag}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-11 flex justify-center">
          <Button size="lg" variant="outline" className="rounded-md bg-background">
            Explore All Projects <ArrowRight className="size-4" />
          </Button>
        </div>
      </div>
    </section>
  )
}
