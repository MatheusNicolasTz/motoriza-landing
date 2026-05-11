import Navbar from "../components/Navbar.jsx"
import Footer from "../components/Footer.jsx"

export default function Login() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1 flex items-center justify-center px-6 py-16">
        <div className="w-full max-w-md rounded-3xl bg-page ring-1 ring-line p-8">
          <h1 className="text-3xl font-extrabold tracking-tight text-ink">Entrar</h1>
          <p className="mt-2 text-inkSoft text-sm">
            O login da web ainda esta em construcao. Por enquanto, baixe o Motoriza no celular pra entrar com a sua conta Google ou e-mail.
          </p>
          <a href="/" className="mt-6 inline-flex items-center justify-center w-full rounded-xl bg-primary hover:bg-primaryDark text-white font-semibold py-3 transition">
            Voltar para Home
          </a>
        </div>
      </main>
      <Footer />
    </div>
  )
}