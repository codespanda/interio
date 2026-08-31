import { MessageSquare, PenTool, ClipboardCheck, Hammer, PackageCheck } from "lucide-react"
import { SectionTag } from "./SectionTag"

const STEPS = [
  {
    icon: MessageSquare,
    num: "01",
    title: "Consultation",
    desc: "We understand your needs, style and budget.",
  },
  {
    icon: PenTool,
    num: "02",
    title: "Concept & Design",
    desc: "We create layouts, moodboards and 3D visuals.",
  },
  {
    icon: ClipboardCheck,
    num: "03",
    title: "Planning & Approval",
    desc: "Finalizing designs, materials and timelines.",
  },
  {
    icon: Hammer,
    num: "04",
    title: "Execution",
    desc: "Our expert team brings the design to life with precision.",
  },
  {
    icon: PackageCheck,
    num: "05",
    title: "Handover",
    desc: "We deliver a stunning space, ready for you to enjoy.",
  },
]

export function Process() {
  return (
    <section id="process" className="container-x px-5 py-16 sm:px-8 lg:px-12 lg:py-20">
      <SectionTag eyebrow="OUR PROCESS" title="From Concept to Creation" />

      <div className="relative mt-14 grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-5 lg:gap-6">
        <div className="pointer-events-none absolute top-8 right-0 left-0 hidden border-t border-dashed border-border lg:block" />
        {STEPS.map((s) => (
          <div key={s.num} className="relative flex flex-col items-center text-center">
            <div className="relative z-10 flex size-16 items-center justify-center rounded-full border border-border bg-secondary">
              <s.icon className="size-6 text-accent" strokeWidth={1.5} />
            </div>
            <span className="mt-4 text-xs font-semibold tracking-widest text-accent">
              {s.num}
            </span>
            <h3 className="mt-1 font-serif text-lg text-foreground">{s.title}</h3>
            <p className="mt-2 max-w-[200px] text-[13.5px] leading-relaxed text-muted-foreground">
              {s.desc}
            </p>
          </div>
        ))}
      </div>
    </section>
  )
}
