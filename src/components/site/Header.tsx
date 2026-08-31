import { useState } from "react"
import { CalendarDays, Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Logo } from "./Logo"

const NAV_LINKS = [
  { label: "Home", href: "#home" },
  { label: "About Us", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Portfolio", href: "#portfolio" },
  { label: "Process", href: "#process" },
  { label: "Reviews", href: "#reviews" },
  { label: "Blog", href: "#blog" },
  { label: "Contact", href: "#contact" },
]

export function Header() {
  const [open, setOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background/95 backdrop-blur supports-backdrop-filter:bg-background/80">
      <div className="container-x flex items-center justify-between gap-4 px-5 py-4 sm:px-8 lg:px-12">
        <Logo />

        <nav className="hidden items-center gap-7 xl:flex">
          {NAV_LINKS.map((link, i) => (
            <a
              key={link.label}
              href={link.href}
              className={`relative text-[13px] font-medium tracking-wide text-foreground/80 transition-colors hover:text-accent ${
                i === 0 ? "text-foreground" : ""
              }`}
            >
              {link.label}
              {i === 0 && (
                <span className="absolute -bottom-[17px] left-0 h-[2px] w-full bg-accent" />
              )}
            </a>
          ))}
        </nav>

        <div className="hidden lg:block">
          <Button size="lg" className="rounded-md">
            <CalendarDays className="size-4" />
            Book a Consultation
          </Button>
        </div>

        <button
          className="inline-flex items-center justify-center rounded-md border border-border p-2 xl:hidden"
          onClick={() => setOpen((o) => !o)}
          aria-label="Toggle menu"
        >
          {open ? <X className="size-5" /> : <Menu className="size-5" />}
        </button>
      </div>

      {open && (
        <div className="border-t border-border bg-background xl:hidden">
          <nav className="flex flex-col gap-1 px-5 py-4 sm:px-8">
            {NAV_LINKS.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setOpen(false)}
                className="rounded-md px-2 py-2.5 text-sm font-medium text-foreground/85 hover:bg-secondary hover:text-accent"
              >
                {link.label}
              </a>
            ))}
            <Button size="lg" className="mt-2 w-full rounded-md">
              <CalendarDays className="size-4" />
              Book a Consultation
            </Button>
          </nav>
        </div>
      )}
    </header>
  )
}
