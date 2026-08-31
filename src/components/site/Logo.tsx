export function Logo({ dark = false }: { dark?: boolean }) {
  return (
    <a href="#home" className="flex items-center gap-2.5 shrink-0">
      <svg
        width="34"
        height="34"
        viewBox="0 0 34 34"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="shrink-0"
      >
        <path
          d="M4 30V6L17 17L30 6V30"
          stroke="#b8874f"
          strokeWidth="1.6"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
      <span className="leading-[1.05]">
        <span
          className={`block font-serif text-[19px] tracking-[0.12em] ${
            dark ? "text-white" : "text-foreground"
          }`}
        >
          INTERIO
        </span>
        <span className="block text-[9px] tracking-[0.28em] text-muted-foreground">
          DESIGN STUDIO
        </span>
      </span>
    </a>
  )
}
