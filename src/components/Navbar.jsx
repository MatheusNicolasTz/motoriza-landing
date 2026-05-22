import { useState, useEffect, useRef } from "react"
import { Link } from "react-router-dom"

const linkBase = "text-[15px] text-inkSoft hover:text-ink transition-colors"

const navLinks = [
  { href: "#features", label: "Recursos" },
  { href: "#como-funciona", label: "Como funciona" },
  { href: "#trilha", label: "Trilha" },
  { href: "#depoimentos", label: "Depoimentos" },
  { href: "#faq", label: "FAQ" },
]

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)
  const menuRef = useRef(null)

  // Fecha o menu ao clicar fora
  useEffect(() => {
    if (!menuOpen) return
    function handleOutside(e) {
      if (menuRef.current && !menuRef.current.contains(e.target)) {
        setMenuOpen(false)
      }
    }
    document.addEventListener("mousedown", handleOutside)
    return () => document.removeEventListener("mousedown", handleOutside)
  }, [menuOpen])

  // Fecha ao pressionar Escape
  useEffect(() => {
    function handleKey(e) {
      if (e.key === "Escape") setMenuOpen(false)
    }
    document.addEventListener("keydown", handleKey)
    return () => document.removeEventListener("keydown", handleKey)
  }, [])

  function handleNavClick() {
    setMenuOpen(false)
  }

  return (
    <header className="w-full border-b border-line bg-page/80 backdrop-blur sticky top-0 z-30" ref={menuRef}>
      <nav className="max-w-7xl mx-auto px-6 lg:px-10 py-4 flex items-center gap-6">
        <Link to="/" className="flex items-center gap-2 font-extrabold text-xl text-ink">
          <img src="/motoriza-icon.jpg" alt="Motoriza" className="w-9 h-9 rounded-xl object-cover" />
          <span>Motoriza</span>
        </Link>

        {/* Links desktop */}
        <ul className="hidden md:flex items-center gap-8 mx-auto">
          {navLinks.map(l => (
            <li key={l.href}>
              <a href={l.href} className={linkBase}>{l.label}</a>
            </li>
          ))}
        </ul>

        <div className="ml-auto flex items-center gap-3">
          <a href="#download" className="hidden sm:inline-flex items-center gap-2 rounded-xl bg-primary hover:bg-primaryDark text-white font-semibold px-4 py-2 transition">
            Baixar app
          </a>

          {/* Hambúrguer — só aparece em mobile */}
          <button
            className="md:hidden flex flex-col justify-center items-center gap-[5px] w-9 h-9 rounded-lg hover:bg-pageSoft transition"
            onClick={() => setMenuOpen(o => !o)}
            aria-label={menuOpen ? "Fechar menu" : "Abrir menu"}
            aria-expanded={menuOpen}
          >
            <span className={`block w-5 h-0.5 bg-ink rounded transition-transform duration-200 ${menuOpen ? "translate-y-[7px] rotate-45" : ""}`} />
            <span className={`block w-5 h-0.5 bg-ink rounded transition-opacity duration-200 ${menuOpen ? "opacity-0" : ""}`} />
            <span className={`block w-5 h-0.5 bg-ink rounded transition-transform duration-200 ${menuOpen ? "-translate-y-[7px] -rotate-45" : ""}`} />
          </button>
        </div>
      </nav>

      {/* Menu mobile dropdown */}
      {menuOpen && (
        <div className="md:hidden border-t border-line bg-page/95 backdrop-blur px-6 py-4 flex flex-col gap-3">
          {navLinks.map(l => (
            <a key={l.href} href={l.href} onClick={handleNavClick} className="text-[15px] text-inkSoft hover:text-ink transition-colors py-1">
              {l.label}
            </a>
          ))}
          <a href="#download" onClick={handleNavClick} className="mt-2 inline-flex items-center justify-center gap-2 rounded-xl bg-primary hover:bg-primaryDark text-white font-semibold px-4 py-2.5 transition text-center">
            Baixar app
          </a>
        </div>
      )}
    </header>
  )
}