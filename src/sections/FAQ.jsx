import { useState } from "react"

const items = [
  {
    q: "Em quanto tempo eu fico pronto pra prova?",
    a: "Depende do quanto voce ja sabe. O app mostra sua chance de passar e ela sobe a cada treino: quando voce estiver passando com folga nos simulados completos (a prova pede 20 acertos em 30), esta pronto. Com 15 minutos por dia, ja da pra avancar bem."
  },
  {
    q: "Quantas perguntas eu tenho de graca?",
    a: "15 perguntas por dia no quiz, todos os dias, sem cadastro, e 1 simulado completo do Detran de presente. Pra estudar sem limite, o plano Pro libera tudo por 6 meses - voce ve o valor no app antes de pagar."
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
    a: "Porque o processo da CNH costuma levar meses - em 6 meses da pra passar na teorica com folga. Voce escolhe no app: pagamento unico de 6 meses, sem renovacao automatica, ou assinatura que renova e pode ser cancelada quando quiser."
  },
  {
    q: "As questoes sao parecidas com as do DETRAN?",
    a: "As questoes seguem o mesmo formato e os mesmos temas cobrados no exame teorico, baseados no Codigo de Transito Brasileiro (CTB) e nas resolucoes do CONTRAN. Nao reproduzimos questoes oficiais do DETRAN."
  }
]

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null)

  function toggle(i) {
    setOpenIndex(prev => (prev === i ? null : i))
  }

  return (
    <section id="faq" className="max-w-3xl mx-auto px-6 lg:px-10 py-20">
      <div className="text-center">
        <div className="text-sm font-semibold text-primary uppercase tracking-wider">FAQ</div>
        <h2 className="mt-2 text-3xl md:text-4xl font-extrabold tracking-tight text-ink">
          Perguntas frequentes.
        </h2>
      </div>

      <div className="mt-10 space-y-3">
        {items.map((it, i) => (
          <Item key={i} item={it} open={openIndex === i} onToggle={() => toggle(i)} />
        ))}
      </div>
    </section>
  )
}

function Item({ item, open, onToggle }) {
  return (
    <div className="rounded-2xl bg-page ring-1 ring-line overflow-hidden">
      <button
        onClick={onToggle}
        className="w-full text-left px-5 py-4 flex items-center justify-between gap-4 hover:bg-pageSoft transition"
        aria-expanded={open}
      >
        <span className="font-semibold text-ink">{item.q}</span>
        <span className={`text-primary text-xl transition-transform duration-200 ${open ? "rotate-45" : ""}`}>+</span>
      </button>
      {open && (
        <div className="px-5 pb-4 text-sm text-inkSoft leading-relaxed">
          {item.a}
        </div>
      )}
    </div>
  )
}