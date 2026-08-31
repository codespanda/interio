export function SectionTag({
  eyebrow,
  title,
  center = true,
  light = false,
}: {
  eyebrow: string
  title: string
  center?: boolean
  light?: boolean
}) {
  return (
    <div className={center ? "text-center" : ""}>
      <p className="text-xs font-semibold tracking-[0.22em] text-accent">{eyebrow}</p>
      <h2
        className={`mt-3 font-serif text-3xl sm:text-4xl ${
          light ? "text-white" : "text-foreground"
        }`}
      >
        {title}
      </h2>
    </div>
  )
}
