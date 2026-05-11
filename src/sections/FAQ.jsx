import { useState } from "react"

const items = [
  {
    q: "Em quanto tempo eu fico pronto pra prova?",
    a: "Depende do quanto voce ja sabe, mas a media dos usuarios chega a 80% de chance de aprovacao em 2 a 3 semanas, estudando 15 minutos por dia."
  },
  {
    q: "Quantas perguntas eu tenho de graca?",
    a: "15 perguntas por dia no quiz, todos os dias, sem cadastro. Pra estudar sem limite, o plano Pro libera tudo por 6 meses por R$ 49,90."
  },
  {
    q: "Funciona pra moto, carro ou ambos?",
    a: "Os tres. No onboarding voce escolhe sua categoria (B, A ou A+B) e a trilha se adapta - ate as questoes especificas da sua categoria sao priorizadas."
  },
  {
    q: "Funciona offline?",
    a: "Sim. Apos abrir o app uma vez conectado, todo o banco de questoes fica disponivel offline. Boa pra estudar no metro ou em lugar sem internet."
  },
  {
    q: "Por que 6 meses e nao mensal?",
    a: "Porque CNH ninguem tira em 1 mes - e em 6 meses voce ja passou na prova, fez as aulas praticas e tirou a habilitacao. Pagamento unico, sem renovacao automatica."
  },
  {
    q: "As questoes sao iguais as do DETRAN?",
    a: "Sao do mesmo banco oficial usado pelos DETRANs estaduais e do CONTRAN, atualizadas para o codigo de transito vigente."
  }
]

export default function FAQ() {
  return (
    <section id="faq" className="max-w-3xl mx-auto px-6 lg:px-10 py-20">
      <div className="text-center">
        <div className="text-sm font-semibold text-primary uppercase tracking-wider">FAQ</div>
        <h2 className="mt-2 text-3xl md:text-4xl font-extrabold tracking-tight text-ink">
          Perguntas frequentes.
        </h2>
      </div>

      <div className="mt-10 space-y-3">
        {items.map((it, i) => <Item key={i} item={it} />)}
      </div>
    </section>
  )
}

function Item({ item }) {
  const [open, setOpen] = useState(false)
  return (
    <div className="rounded-2xl bg-page ring-1 ring-line overflow-hidden">
      <button
        onClick={() => setOpen(!open)}
        className="w-full text-left px-5 py-4 flex items-center justify-between gap-4 hover:bg-pageSoft transition"
      >
        <span className="font-semibold text-ink">{item.q}</span>
        <span className={`text-primary text-xl transition-transform ${open ? "rotate-45" : ""}`}>+</span>
      </button>
      {open && (
        <div className="px-5 pb-4 text-sm text-inkSoft leading-relaxed">
          {item.a}
        </div>
      )}
    </div>
  )
}