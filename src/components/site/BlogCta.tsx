import { ArrowRight, CalendarDays, Phone } from "lucide-react"
import { Button } from "@/components/ui/button"

const POSTS = [
  {
    tag: "TRENDS",
    title: "Top Interior Design Trends for 2024",
    date: "May 10, 2024",
    read: "5 min read",
    img: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?q=80&w=800&auto=format&fit=crop",
  },
  {
    tag: "TIPS & IDEAS",
    title: "How to Make Small Spaces Look Bigger",
    date: "May 02, 2024",
    read: "4 min read",
    img: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?q=80&w=800&auto=format&fit=crop",
  },
  {
    tag: "GUIDES",
    title: "Choosing the Right Colors for Your Home",
    date: "Apr 25, 2024",
    read: "6 min read",
    img: "https://images.unsplash.com/photo-1524758631624-e2822e304c36?q=80&w=800&auto=format&fit=crop",
  },
]

export function BlogCta() {
  return (
    <section id="blog" className="bg-secondary/60 py-16 lg:py-20">
      <div className="container-x grid grid-cols-1 gap-10 px-5 sm:px-8 lg:grid-cols-[1.6fr_1fr] lg:gap-8 lg:px-12">
        <div>
          <p className="text-xs font-semibold tracking-[0.22em] text-accent">CLIENT DIARIES</p>
          <h2 className="mt-3 font-serif text-3xl text-foreground sm:text-4xl">
            Ideas, Trends &amp; Inspiration
          </h2>

          <div className="mt-9 grid grid-cols-1 gap-6 sm:grid-cols-3">
            {POSTS.map((p) => (
              <a href="#" key={p.title} className="group block">
                <div className="overflow-hidden rounded-xl">
                  <img
                    src={p.img}
                    alt={p.title}
                    className="h-40 w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <p className="mt-4 text-[11px] font-semibold tracking-widest text-accent">
                  {p.tag}
                </p>
                <h3 className="mt-1 font-serif text-base leading-snug text-foreground">
                  {p.title}
                </h3>
                <p className="mt-1 text-xs text-muted-foreground">
                  {p.date} &middot; {p.read}
                </p>
                <span className="mt-2 inline-flex items-center gap-1 text-xs font-medium text-foreground/80 group-hover:text-accent">
                  Read More <ArrowRight className="size-3.5" />
                </span>
              </a>
            ))}
          </div>

          <div className="mt-10 flex justify-center sm:justify-start">
            <Button size="lg" variant="outline" className="rounded-md bg-background">
              View All Articles
            </Button>
          </div>
        </div>

        <div className="relative flex flex-col justify-between overflow-hidden rounded-2xl bg-foreground p-8 text-white sm:p-10">
          <div>
            <p className="text-[11px] font-semibold tracking-[0.22em] text-white/50">
              CLIENT SAYING
            </p>
            <h3 className="mt-3 font-serif text-2xl leading-snug sm:text-[1.7rem]">
              Let's Design Something Beautiful
            </h3>
            <p className="mt-3 text-sm leading-relaxed text-white/70">
              Share your ideas with us and let's create a space you'll love.
            </p>
          </div>

          <div className="mt-10">
            <Button size="lg" className="rounded-md bg-accent text-accent-foreground hover:bg-accent/90">
              <CalendarDays className="size-4" />
              Book a Consultation
            </Button>
            <p className="mt-5 flex items-center gap-2 text-sm text-white/70">
              or call us
            </p>
            <p className="mt-1 flex items-center gap-2 text-base font-medium">
              <Phone className="size-4 text-accent" /> +91 xxxxxxxx10
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
