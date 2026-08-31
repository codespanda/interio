import { MapPin, Phone, Mail, Globe, ArrowRight } from "lucide-react"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Logo } from "./Logo"

const SOCIALS = [
  {
    label: "Facebook",
    path: "M13.5 9H15V6.5h-1.75C11.13 6.5 10 7.63 10 9.25V11H8.5v2.5H10V18h2.5v-4.5h1.75L15 11h-2.5V9.5c0-.3.2-.5.5-.5z",
  },
  {
    label: "Instagram",
    path: "M8 4h8a4 4 0 0 1 4 4v8a4 4 0 0 1-4 4H8a4 4 0 0 1-4-4V8a4 4 0 0 1 4-4Zm4 3.5A4.5 4.5 0 1 0 16.5 12 4.5 4.5 0 0 0 12 7.5Zm0 2A2.5 2.5 0 1 1 9.5 12 2.5 2.5 0 0 1 12 9.5ZM16.75 6.25a1 1 0 1 0 1 1 1 1 0 0 0-1-1Z",
  },
  {
    label: "LinkedIn",
    path: "M6.94 8.5a1.94 1.94 0 1 0 0-3.88 1.94 1.94 0 0 0 0 3.88ZM5.5 10h2.9v9H5.5v-9Zm5.2 0h2.78v1.23h.04c.39-.73 1.34-1.5 2.76-1.5 2.95 0 3.5 1.94 3.5 4.47V19h-2.9v-4.28c0-1.02-.02-2.34-1.42-2.34-1.42 0-1.64 1.11-1.64 2.26V19h-2.9v-9Z",
  },
  {
    label: "YouTube",
    path: "M21 12s0-3.15-.4-4.66a2.5 2.5 0 0 0-1.76-1.77C17.34 5.17 12 5.17 12 5.17s-5.34 0-6.84.4A2.5 2.5 0 0 0 3.4 7.34C3 8.85 3 12 3 12s0 3.15.4 4.66a2.5 2.5 0 0 0 1.76 1.77c1.5.4 6.84.4 6.84.4s5.34 0 6.84-.4a2.5 2.5 0 0 0 1.76-1.77c.4-1.51.4-4.66.4-4.66Zm-11 3V9l5 3-5 3Z",
  },
]

const QUICK_LINKS = ["Home", "About Us", "Services", "Portfolio", "Process", "Blog", "Contact"]
const SERVICES = [
  "Residential Design",
  "Commercial Design",
  "Modular Kitchen",
  "Turnkey Interiors",
  "Space Planning",
]

export function Footer() {
  return (
    <footer id="contact" className="bg-[#1a1512] text-white/70">
      <div className="container-x grid grid-cols-1 gap-10 px-5 py-14 sm:px-8 sm:grid-cols-2 lg:grid-cols-[1.3fr_0.8fr_1fr_1fr_1fr] lg:px-12">
        <div>
          <Logo dark />
          <p className="mt-5 max-w-xs text-sm leading-relaxed">
            We design beautiful, functional and inspiring spaces that reflect you.
          </p>
          <div className="mt-6 flex gap-3">
            {SOCIALS.map((s) => (
              <a
                key={s.label}
                href="#"
                aria-label={s.label}
                className="flex size-9 items-center justify-center rounded-full border border-white/15 transition-colors hover:border-accent hover:text-accent"
              >
                <svg viewBox="0 0 24 24" className="size-4 fill-current">
                  <path d={s.path} />
                </svg>
              </a>
            ))}
          </div>
        </div>

        <div>
          <h4 className="text-xs font-semibold tracking-widest text-white/50">QUICK LINKS</h4>
          <ul className="mt-5 space-y-3 text-sm">
            {QUICK_LINKS.map((l) => (
              <li key={l}>
                <a href="#" className="transition-colors hover:text-accent">
                  {l}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="text-xs font-semibold tracking-widest text-white/50">OUR SERVICES</h4>
          <ul className="mt-5 space-y-3 text-sm">
            {SERVICES.map((l) => (
              <li key={l}>
                <a href="#" className="transition-colors hover:text-accent">
                  {l}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="text-xs font-semibold tracking-widest text-white/50">CONTACT US</h4>
          <ul className="mt-5 space-y-3.5 text-sm">
            <li className="flex gap-2.5">
              <MapPin className="size-4 shrink-0 text-accent" />
              123, Design Street, New Delhi &ndash; 110001, India
            </li>
            <li className="flex gap-2.5">
              <Phone className="size-4 shrink-0 text-accent" /> +91 xxxxxxxx10
            </li>
            <li className="flex gap-2.5">
              <Mail className="size-4 shrink-0 text-accent" /> hello@interiostudio.com
            </li>
            <li className="flex gap-2.5">
              <Globe className="size-4 shrink-0 text-accent" /> www.interiostudio.com
            </li>
          </ul>
        </div>

        <div>
          <h4 className="text-xs font-semibold tracking-widest text-white/50">NEWSLETTER</h4>
          <p className="mt-5 text-sm">Subscribe for design tips, trends &amp; updates.</p>
          <form className="mt-4 flex overflow-hidden rounded-md border border-white/15">
            <Input
              type="email"
              placeholder="Enter your email"
              className="rounded-none border-0 bg-transparent text-white placeholder:text-white/40 focus-visible:ring-0"
            />
            <Button type="submit" className="rounded-none bg-accent px-4 text-accent-foreground hover:bg-accent/90">
              <ArrowRight className="size-4" />
            </Button>
          </form>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="container-x flex flex-col items-center justify-between gap-3 px-5 py-5 text-xs text-white/50 sm:flex-row sm:px-8 lg:px-12">
          <p>&copy; 2024 Interio Design Studio. All Rights Reserved.</p>
          <div className="flex gap-5">
            <a href="#" className="hover:text-accent">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-accent">
              Terms &amp; Conditions
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
