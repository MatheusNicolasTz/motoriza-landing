import Navbar from "../components/Navbar.jsx"
import Footer from "../components/Footer.jsx"
import Hero from "../sections/Hero.jsx"
import Features from "../sections/Features.jsx"
import ComoFunciona from "../sections/ComoFunciona.jsx"
import Trilha from "../sections/Trilha.jsx"
import Pricing from "../sections/Pricing.jsx"
import Depoimentos from "../sections/Depoimentos.jsx"
import FAQ from "../sections/FAQ.jsx"
import CTA from "../sections/CTA.jsx"

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1">
        <Hero />
        <Features />
        <ComoFunciona />
        <Trilha />
        <Pricing />
        <Depoimentos />
        <FAQ />
        <CTA />
      </main>
      <Footer />
    </div>
  )
}