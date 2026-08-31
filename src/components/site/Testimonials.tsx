import { useState } from "react"
import { Star, Quote } from "lucide-react"
import { SectionTag } from "./SectionTag"

const TESTIMONIALS = [
  {
    quote:
      "Interio Design Studio transformed our home beyond our expectations. Their creativity, attention to detail and professionalism are truly outstanding.",
    name: "Priya Sharma",
    role: "Homeowner",
  },
  {
    quote:
      "They understood our brand and delivered a workspace that motivates our team every day. Highly recommended!",
    name: "Rahul Mehta",
    role: "Director, TechNova",
  },
  {
    quote:
      "From design to execution, everything was seamless. The team is talented, responsive and a pleasure to work with.",
    name: "Ananya Verma",
    role: "Homeowner",
  },
]

export function Testimonials() {
  const [active, setActive] = useState(0)

  return (
    <section id="reviews" className="container-x px-5 py-16 sm:px-8 lg:px-12 lg:py-20">
      <SectionTag eyebrow="CLIENT LOVE" title="What Our Clients Say" />

      <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-3">
        {TESTIMONIALS.map((t) => (
          <div
            key={t.name}
            className="relative rounded-xl border border-border bg-card p-7"
          >
            <Quote className="size-8 text-secondary" fill="currentColor" strokeWidth={0} />
            <div className="mt-1 flex gap-0.5 text-accent">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} className="size-3.5" fill="currentColor" strokeWidth={0} />
              ))}
            </div>
            <p className="mt-3 text-[14px] leading-relaxed text-foreground/85">
              "{t.quote}"
            </p>
            <p className="mt-5 font-serif text-[15px] text-foreground">— {t.name}</p>
            <p className="text-xs text-muted-foreground">{t.role}</p>
          </div>
        ))}
      </div>

      <div className="mt-8 flex justify-center gap-2">
        {TESTIMONIALS.map((_, i) => (
          <button
            key={i}
            aria-label={`Show testimonial ${i + 1}`}
            onClick={() => setActive(i)}
            className={`h-2 rounded-full transition-all ${
              active === i ? "w-6 bg-accent" : "w-2 bg-border"
            }`}
          />
        ))}
      </div>
    </section>
  )
}
