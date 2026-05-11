import { Link, NavLink } from "react-router-dom"

const linkBase = "text-[15px] text-inkSoft hover:text-ink transition-colors"

export default function Navbar() {
  return (
    <header className="w-full border-b border-line bg-page/80 backdrop-blur sticky top-0 z-30">
      <nav className="max-w-7xl mx-auto px-6 lg:px-10 py-4 flex items-center gap-6">
        <Link to="/" className="flex items-center gap-2 font-extrabold text-xl text-ink">
          <img src="/motoriza-icon.jpg" alt="Motoriza" className="w-9 h-9 rounded-xl object-cover" />
          <span>Motoriza</span>
        </Link>

        <ul className="hidden md:flex items-center gap-8 mx-auto">
          <li><a href="#features" className={linkBase}>Recursos</a></li>
          <li><a href="#como-funciona" className={linkBase}>Como funciona</a></li>
          <li><a href="#trilha" className={linkBase}>Trilha</a></li>
          <li><a href="#precos" className={linkBase}>Preco</a></li>
          <li><a href="#depoimentos" className={linkBase}>Depoimentos</a></li>
          <li><a href="#faq" className={linkBase}>FAQ</a></li>
        </ul>

        <div className="ml-auto flex items-center gap-3">
          <NavLink to="/login" className={linkBase}>Entrar</NavLink>
          <a href="#download" className="hidden sm:inline-flex items-center gap-2 rounded-xl bg-primary hover:bg-primaryDark text-white font-semibold px-4 py-2 transition">
            Baixar app
          </a>
        </div>
      </nav>
    </header>
  )
}