import StoreBadge from "../components/StoreBadge.jsx"

const includesFree = [
  "15 perguntas no quiz por dia",
  "Trilha basica (3 primeiros niveis)",
  "Revisao de erros"
]
const includesPro = [
  "Quiz ilimitado (sem limite diario)",
  "Todos os 12 niveis + niveis Pro",
  "Banco completo de 1.500+ questoes",
  "Simulado completo do DETRAN",
  "Estimativa real de aprovacao",
  "Modo offline",
  "Sem anuncios"
]

export default function Pricing() {
  return (
    <section id="precos" className="bg-pageSoft">
      <div className="max-w-7xl mx-auto px-6 lg:px-10 py-20">
        <div className="max-w-2xl mx-auto text-center">
          <div className="text-sm font-semibold text-primary uppercase tracking-wider">Preco</div>
          <h2 className="mt-2 text-3xl md:text-4xl font-extrabold tracking-tight text-ink">
            Mais barato que uma aula da auto-escola.
          </h2>
          <p className="mt-3 text-inkSoft">
            Comece de graca - <strong className="text-ink">15 perguntas por dia</strong>, todos os dias.
            Quando estiver pronto pra acelerar, vire Pro por 6 meses.
          </p>
        </div>

        <div className="mt-12 grid md:grid-cols-2 gap-5 max-w-4xl mx-auto">
          {/* Plano gratis */}
          <div className="rounded-2xl bg-page ring-1 ring-line p-8">
            <div className="text-sm font-semibold text-inkMuted uppercase tracking-wider">Gratis</div>
            <div className="mt-2 text-3xl font-extrabold text-ink">Comece de graca</div>
            <p className="mt-3 text-sm text-inkSoft">Pra conhecer o app sem compromisso.</p>
            <ul className="mt-6 space-y-2.5">
              {includesFree.map((it) => <Item key={it} text={it} />)}
            </ul>
            <button className="mt-8 w-full rounded-xl bg-pageSoft hover:bg-line ring-1 ring-line text-ink font-semibold py-3 transition">
              Baixar gratis
            </button>
          </div>

          {/* Plano Pro 6 meses */}
          <div className="rounded-2xl bg-gradient-to-br from-primary/10 to-primary/5 ring-2 ring-primary p-8 relative">
            <div className="absolute -top-3 left-8 bg-primary text-white text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full">
              Recomendado
            </div>
            <div className="text-sm font-semibold text-primary uppercase tracking-wider">Pro - acesso por 6 meses</div>
            <div className="mt-2 text-3xl font-extrabold text-ink">Pagamento unico</div>
            <p className="mt-3 text-sm text-inkSoft">Acesso completo ate o dia da sua prova. Veja o valor atualizado dentro do app.</p>
            <ul className="mt-6 space-y-2.5">
              {includesPro.map((it) => <Item key={it} text={it} highlight />)}
            </ul>
            <button className="mt-8 w-full rounded-xl bg-primary hover:bg-primaryDark text-white font-semibold py-3 transition">
              Quero ser Pro
            </button>
          </div>
        </div>

        <div className="mt-10 flex flex-wrap justify-center gap-3">
          <StoreBadge store="apple" />
          <StoreBadge store="google" />
        </div>
      </div>
    </section>
  )
}

function Item({ text, highlight }) {
  return (
    <li className="flex items-start gap-2.5 text-sm text-ink">
      <span className={`mt-0.5 w-5 h-5 rounded-full grid place-items-center text-xs font-bold ${highlight ? "bg-primary text-white" : "bg-success/15 text-successDark"}`}>
        ✓
      </span>
      <span>{text}</span>
    </li>
  )
}