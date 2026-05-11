const steps = [
  {
    n: "01",
    title: "Faca o teste de nivel",
    desc: "Responde umas perguntinhas e o app entende quanto voce ja sabe. Sem decoreba inicial."
  },
  {
    n: "02",
    title: "Estude com a trilha",
    desc: "Niveis curtos sobre Sinalizacao, Legislacao, Direcao Defensiva, Infracoes, Mecanica e mais."
  },
  {
    n: "03",
    title: "Faca o simulado e va pro DETRAN",
    desc: "Quando bater 80% de chance de aprovacao, a prova vira formalidade."
  }
]

export default function ComoFunciona() {
  return (
    <section id="como-funciona" className="bg-pageSoft">
      <div className="max-w-7xl mx-auto px-6 lg:px-10 py-20">
        <div className="max-w-2xl">
          <div className="text-sm font-semibold text-primary uppercase tracking-wider">Como funciona</div>
          <h2 className="mt-2 text-3xl md:text-4xl font-extrabold tracking-tight text-ink">
            Tres passos pra estar pronto.
          </h2>
        </div>

        <div className="mt-10 grid md:grid-cols-3 gap-5">
          {steps.map((s) => (
            <div key={s.n} className="rounded-2xl bg-page ring-1 ring-line p-6 relative overflow-hidden">
              <div className="absolute -right-4 -top-6 text-7xl font-extrabold text-primary/10">{s.n}</div>
              <div className="text-2xl font-extrabold text-primary">{s.n}</div>
              <h3 className="mt-3 text-xl font-bold text-ink">{s.title}</h3>
              <p className="mt-2 text-sm text-inkSoft leading-relaxed">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}