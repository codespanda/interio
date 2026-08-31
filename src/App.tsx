import { Header } from "@/components/site/Header"
import { Hero } from "@/components/site/Hero"
import { Services } from "@/components/site/Services"
import { Portfolio } from "@/components/site/Portfolio"
import { Process } from "@/components/site/Process"
import { About } from "@/components/site/About"
import { Testimonials } from "@/components/site/Testimonials"
import { BlogCta } from "@/components/site/BlogCta"
import { Footer } from "@/components/site/Footer"

function App() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <Hero />
        <Services />
        <Portfolio />
        <Process />
        <About />
        <Testimonials />
        <BlogCta />
      </main>
      <Footer />
    </div>
  )
}

export default App
