import Navbar from "../components/Navbar.jsx"
import Footer from "../components/Footer.jsx"

export default function Blog() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1 max-w-3xl mx-auto px-6 py-16">
        <h1 className="text-4xl font-extrabold tracking-tight text-ink">Blog</h1>
        <p className="mt-3 text-inkSoft">Em breve: dicas pra prova teorica, atualizacoes do CTB, e historias de quem passou de primeira.</p>
      </main>
      <Footer />
    </div>
  )
}