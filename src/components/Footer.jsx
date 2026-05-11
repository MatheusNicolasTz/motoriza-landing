import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <footer className="border-t border-line py-10 bg-pageSoft">
      <div className="max-w-7xl mx-auto px-6 lg:px-10 flex flex-col gap-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-inkMuted">
          <div className="flex items-center gap-2 font-bold text-ink">
            <img src="/motoriza-icon.jpg" alt="Motoriza" className="w-7 h-7 rounded-lg object-cover" />
            Motoriza
          </div>
          <div>(c) {new Date().getFullYear()} Motoriza. Todos os direitos reservados.</div>
          <div className="flex gap-5">
            <Link to="/termos" className="hover:text-ink">Termos</Link>
            <Link to="/privacidade" className="hover:text-ink">Privacidade</Link>
            <a href="mailto:suporte@motorizacnh.com" className="hover:text-ink">Contato</a>
          </div>
        </div>
        <p className="text-xs text-inkMuted text-center md:text-left leading-relaxed">
          O Motoriza é um aplicativo independente de estudo. Não somos um programa
          oficial do Detran, do CONTRAN, do Denatran ou de qualquer órgão público,
          e não temos vínculo, parceria ou patrocínio com entidades governamentais.
        </p>
      </div>
    </footer>
  )
}
