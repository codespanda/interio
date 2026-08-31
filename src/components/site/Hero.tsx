import { ArrowRight, CalendarDays, Sparkles, Clock, ShieldCheck, Users } from "lucide-react"
import { Button } from "@/components/ui/button"

const FEATURES = [
  { icon: Sparkles, label: "Creative Designs" },
  { icon: Clock, label: "On-Time Delivery" },
  { icon: ShieldCheck, label: "Premium Quality" },
  { icon: Users, label: "Client Focused" },
]

export function Hero() {
  return (
    <section id="home" className="container-x px-5 pt-10 pb-16 sm:px-8 lg:px-12 lg:pt-14">
      <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-14">
        <div>
          <p className="text-xs font-semibold tracking-[0.22em] text-accent">
            WELCOME TO INTERIO
          </p>
          <h1 className="mt-4 font-serif text-4xl leading-[1.12] text-foreground sm:text-5xl lg:text-[3.4rem]">
            Designing Spaces
            <br />
            That Inspire
            <br />
            <span className="italic text-accent">Beautiful</span> Living
          </h1>
          <p className="mt-5 max-w-md text-[15px] leading-relaxed text-muted-foreground">
            We create timeless interiors that reflect your personality, elevate your
            lifestyle and bring your dream spaces to life.
          </p>

          <div className="mt-7 flex flex-wrap gap-3">
            <Button size="lg" className="rounded-md">
              Our Projects <ArrowRight className="size-4" />
            </Button>
            <Button size="lg" variant="outline" className="rounded-md bg-background">
              <CalendarDays className="size-4" />
              Book a Consultation
            </Button>
          </div>

          <div className="mt-10 grid grid-cols-2 gap-y-5 sm:grid-cols-4 sm:gap-4">
            {FEATURES.map((f) => (
              <div key={f.label} className="flex items-center gap-2.5">
                <f.icon className="size-5 shrink-0 text-accent" strokeWidth={1.75} />
                <span className="text-[13px] font-medium leading-tight text-foreground/85">
                  {f.label}
                </span>
              </div>
            ))}
          </div>
        </div>

        <div className="relative">
          <img
            src="https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?q=80&w=1400&auto=format&fit=crop"
            alt="Elegant modern living room interior design"
            className="h-[320px] w-full rounded-2xl object-cover sm:h-[420px] lg:h-[520px]"
          />
        </div>
      </div>
    </section>
  )
}
