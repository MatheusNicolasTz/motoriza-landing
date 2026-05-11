const depoimentos = [
  {
    nome: "Ana Paula M.",
    cidade: "São Paulo, SP",
    cor: "bg-primary",
    foto: "/avatars/m-1.jpg",
    estrelas: 5,
    texto: "Passei na primeira tentativa! Estudei 15 minutos por dia durante 3 semanas no ônibus pro trabalho. As questões são exatamente iguais às que caíram na minha prova. Recomendo demais.",
    destaque: "Aprovada na 1ª tentativa",
    temFoto: true,
    fotoLabel: "CNH da Ana Paula",
  },
  {
    nome: "Ricardo T.",
    cidade: "Belo Horizonte, MG",
    cor: "bg-[#FF9600]",
    foto: "/avatars/h-1.png",
    estrelas: 5,
    texto: "Tentei duas vezes antes e não passava. Com o Motoriza entendi onde eu errava, a revisão automática de erros é genial. Na terceira tentativa tirei 28/30.",
    destaque: "28 de 30 acertos",
    temFoto: false,
  },
  {
    nome: "Camila R.",
    cidade: "Curitiba, PR",
    cor: "bg-[#CE82FF]",
    foto: "/avatars/m-2.png",
    estrelas: 5,
    texto: "Minha filha de 18 anos usou e passou sem dificuldade. O formato de quiz é muito mais fácil de absorver do que ficar lendo apostila. Gastamos R$ 49,90 em vez de R$ 400 num cursinho.",
    destaque: "Economizou no cursinho",
    temFoto: true,
    fotoLabel: "CNH da Camila",
  },
  {
    nome: "Thiago N.",
    cidade: "Fortaleza, CE",
    cor: "bg-success",
    foto: "/avatars/h-2.png",
    estrelas: 5,
    texto: "Travei em sinalização por meses. O app identificou meu ponto fraco e ficou me bombardeando de questões sobre placas até eu zerar. Funcionou. Prova feita em 12 minutos.",
    destaque: "Prova feita em 12 min",
    temFoto: false,
  },
  {
    nome: "Larissa F.",
    cidade: "Rio de Janeiro, RJ",
    cor: "bg-danger",
    foto: "/avatars/m-3.png",
    estrelas: 5,
    texto: "Perfeito pra quem não tem tempo. Fiz no intervalo do almoço durante 2 semanas e passei com folga. O simulado completo é idêntico ao DETRAN-RJ.",
    destaque: "2 semanas de estudo",
    temFoto: true,
    fotoLabel: "CNH da Larissa",
  },
  {
    nome: "Gabriel S.",
    cidade: "Porto Alegre, RS",
    cor: "bg-[#1CB0F6]",
    foto: "/avatars/h-3.png",
    estrelas: 5,
    texto: "Achei que ia levar meses, mas o app organiza tudo tão bem que em 18 dias eu já estava com 90%+ nas simulações. Passei com nota máxima. Vale muito cada centavo.",
    destaque: "Nota máxima na prova",
    temFoto: false,
  },
]

function Estrelas({ n }) {
  return (
    <div className="flex gap-0.5">
      {Array.from({ length: 5 }).map((_, i) => (
        <svg key={i} width="14" height="14" viewBox="0 0 24 24" fill={i < n ? "#FFC800" : "#E5EAF0"}>
          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
        </svg>
      ))}
    </div>
  )
}

function Avatar({ nome, cor, foto }) {
  const iniciais = nome.split(" ").slice(0, 2).map(p => p[0]).join("")
  if (foto) {
    return (
      <img
        src={foto}
        alt={nome}
        className="w-10 h-10 rounded-full object-cover flex-shrink-0 ring-2 ring-line"
        loading="lazy"
        onError={(e) => { e.currentTarget.style.display = 'none' }}
      />
    )
  }
  return (
    <div className={`w-10 h-10 rounded-full ${cor} flex items-center justify-center text-white font-extrabold text-sm flex-shrink-0`}>
      {iniciais}
    </div>
  )
}

function Card({ d }) {
  return (
    <div className="rounded-2xl bg-page ring-1 ring-line p-5 flex flex-col gap-3 break-inside-avoid">
      <div className="flex items-start justify-between gap-3">
        <div className="flex items-center gap-3">
          <Avatar nome={d.nome} cor={d.cor} foto={d.foto} />
          <div>
            <div className="font-bold text-ink text-sm">{d.nome}</div>
            <div className="text-xs text-inkMuted">{d.cidade}</div>
          </div>
        </div>
        <span className="flex-shrink-0 inline-flex items-center gap-1 bg-success/10 text-success text-[10px] font-extrabold uppercase tracking-wide px-2.5 py-1 rounded-full ring-1 ring-success/20">
          <svg width="10" height="10" viewBox="0 0 24 24" fill="currentColor">
            <path d="M20 6L9 17l-5-5" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
          </svg>
          CNH aprovada
        </span>
      </div>

      <Estrelas n={d.estrelas} />

      <p className="text-sm text-inkSoft leading-relaxed">"{d.texto}"</p>

      <div className="inline-flex items-center gap-1.5 bg-primary/8 text-primary text-xs font-semibold px-3 py-1.5 rounded-full w-fit">
        <svg width="12" height="12" viewBox="0 0 24 24" fill="none">
          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" fill="currentColor"/>
        </svg>
        {d.destaque}
      </div>

    </div>
  )
}

export default function Depoimentos() {
  return (
    <section id="depoimentos" className="bg-pageSoft">
      <div className="max-w-7xl mx-auto px-6 lg:px-10 py-20">

        <div className="max-w-2xl mx-auto text-center mb-12">
          <div className="text-sm font-semibold text-primary uppercase tracking-wider">Depoimentos</div>
          <h2 className="mt-2 text-3xl md:text-4xl font-extrabold tracking-tight text-ink">
            Quem estudou, passou.
          </h2>
          <p className="mt-3 text-inkSoft">
            Mais de <strong className="text-ink">2.400 aprovados</strong> nos últimos 6 meses.
            Veja o que eles falam, e o que aparece no bolso depois.
          </p>
        </div>

        {/* Grid masonry 3 colunas */}
        <div className="columns-1 sm:columns-2 lg:columns-3 gap-5 space-y-5">
          {depoimentos.map((d) => (
            <Card key={d.nome} d={d} />
          ))}
        </div>

        {/* Barra de confiança */}
        <div className="mt-14 flex flex-wrap items-center justify-center gap-8 text-sm text-inkMuted">
          <div className="flex items-center gap-2">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="#FFC800">
              <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
            </svg>
            <span><strong className="text-ink">4,9</strong> de média nas avaliações</span>
          </div>
          <div className="w-px h-4 bg-line hidden sm:block" />
          <div className="flex items-center gap-2">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" className="text-success">
              <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2"/>
              <path d="M8 12l3 3 5-5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            <span><strong className="text-ink">+2.400</strong> aprovações registradas</span>
          </div>
          <div className="w-px h-4 bg-line hidden sm:block" />
          <div className="flex items-center gap-2">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" className="text-primary">
              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2z" stroke="currentColor" strokeWidth="2"/>
              <path d="M12 6v6l4 2" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
            </svg>
            <span>Média de <strong className="text-ink">18 dias</strong> até a aprovação</span>
          </div>
        </div>

      </div>
    </section>
  )
}
