import PhoneMockup from "../components/PhoneMockup.jsx"
import StoreBadge from "../components/StoreBadge.jsx"

export default function Hero() {
  return (
    <section className="relative max-w-7xl mx-auto px-6 lg:px-10 pt-12 lg:pt-20 pb-20 grid lg:grid-cols-2 gap-12 items-center">
      <div>
        <div className="inline-flex items-center gap-2 bg-danger/10 rounded-full pl-2 pr-4 py-1.5 ring-1 ring-danger/20">
          <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-danger text-white text-xs font-bold">!</span>
          <span className="text-sm text-inkSoft"><strong className="text-ink">1 em cada 3 pessoas</strong> reprova na prova teórica da CNH</span>
        </div>

        <h1 className="mt-6 text-5xl md:text-6xl font-extrabold leading-[1.05] tracking-tight">
          Passe na <span className="text-primary">prova teórica</span>
          <br />sem decorar apostila.
        </h1>

        <p className="mt-6 text-inkSoft max-w-md text-lg leading-relaxed">
          O <strong className="text-ink">Motoriza</strong> transforma o estudo da prova teorica em um quiz rapido e divertido.
          Trilha de niveis, revisao automatica de erros e simulado completo - direto no seu celular.
        </p>

        <div id="download" className="mt-8 flex flex-wrap gap-3">
          <StoreBadge store="apple" />
          <StoreBadge store="google" />
        </div>

        <div className="mt-8 flex items-center gap-4 text-sm text-inkMuted">
          <span className="bg-success text-white text-xs font-extrabold uppercase tracking-widest px-3 py-1.5 rounded-lg">Grátis</span>
          <span><strong className="text-ink">15 perguntas gratis por dia</strong> - sem cadastro</span>
        </div>
      </div>

      <div className="relative h-[620px]">
        <CurvedArrow />
        <PhoneMockup className="absolute left-2 top-6 -rotate-[5deg]" screen={<img src="/print1.png" alt="Tela inicial do Motoriza" className="w-full h-full object-cover object-top" />} />
        <PhoneMockup className="absolute right-0 top-24 rotate-[5deg]" screen={<img src="/print2.png" alt="Quiz do Motoriza" className="w-full h-full object-cover object-top" />} />

        <FloatingTag className="left-[44%] -top-2" title="Sequencia" value="7 dias" tone="success" />
        <FloatingTag className="right-2 top-2" title="Chance de passar" value="92%" tone="primary" />
        <FloatingTag className="left-[36%] bottom-6" title="Acertos" value="84%" tone="primary" />
      </div>
    </section>
  )
}

function FloatingTag({ className = "", title, value, tone = "primary" }) {
  const dot = tone === "success" ? "bg-success" : "bg-primary"
  return (
    <div className={`absolute bg-page rounded-2xl px-3.5 py-2.5 ring-1 ring-line ${className}`}>
      <div className="flex items-center gap-2">
        <span className={`w-2 h-2 rounded-full ${dot}`} />
        <div className="text-[10px] uppercase tracking-wide text-inkMuted">{title}</div>
      </div>
      <div className="text-base font-bold text-ink mt-0.5">{value}</div>
    </div>
  )
}

function CurvedArrow() {
  return (
    <svg className="absolute left-[20%] top-[28%] w-[60%] h-32 text-primary/40 pointer-events-none" viewBox="0 0 200 80" fill="none">
      <path d="M10 60 C 60 0, 140 0, 190 50" stroke="currentColor" strokeWidth="2" strokeDasharray="5 5" />
      <path d="M185 42 L 192 52 L 180 56" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none" />
    </svg>
  )
}