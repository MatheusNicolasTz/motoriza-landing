const niveis = [
  { n: 1, name: "Sinalizacao I", topic: "Placas de regulamentacao" },
  { n: 2, name: "Sinalizacao II", topic: "Advertencia e indicacao" },
  { n: 3, name: "Legislacao I", topic: "CTB basico" },
  { n: 4, name: "Legislacao II", topic: "Documentos e habilitacao" },
  { n: 5, name: "Defensiva I", topic: "Pedestres e ciclistas" },
  { n: 6, name: "Defensiva II", topic: "Direcao em chuva e noite" },
  { n: 7, name: "Infracoes I", topic: "Leves e medias" },
  { n: 8, name: "Infracoes II", topic: "Graves e gravissimas" },
  { n: 9, name: "Oficina", topic: "Mecanica basica" },
  { n: 10, name: "Painel & Luzes", topic: "Sinalizacao do veiculo" },
  { n: 11, name: "Comandos do Carro", topic: "Operacao correta" },
  { n: 12, name: "Simuladao", topic: "30 questoes no formato da prova" }
]

export default function Trilha() {
  return (
    <section id="trilha" className="max-w-7xl mx-auto px-6 lg:px-10 py-20">
      <div className="max-w-2xl">
        <div className="text-sm font-semibold text-primary uppercase tracking-wider">Trilha completa</div>
        <h2 className="mt-2 text-3xl md:text-4xl font-extrabold tracking-tight text-ink">
          12 niveis cobrindo a prova inteira.
        </h2>
        <p className="mt-3 text-inkSoft">
          Cada nivel tem questoes baseadas no CTB e nas resolucoes do CONTRAN, explicacao passo a passo e revisao automatica dos seus erros.
        </p>
      </div>

      <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
        {niveis.map((l) => (
          <div key={l.n} className="flex items-center gap-3 rounded-xl bg-page ring-1 ring-line px-4 py-3">
            <span className="w-9 h-9 rounded-lg bg-primary/10 ring-1 ring-primary/30 grid place-items-center text-primary font-bold text-sm">
              {l.n}
            </span>
            <div className="min-w-0">
              <div className="text-sm font-semibold text-ink truncate">{l.name}</div>
              <div className="text-xs text-inkMuted truncate">{l.topic}</div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}