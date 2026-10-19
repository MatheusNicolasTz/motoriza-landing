import PhoneMockup from "../components/PhoneMockup.jsx"
import LearningScreen from "../components/phone-screens/LearningScreen.jsx"

const IcTrendingUp = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="22 7 13.5 15.5 8.5 10.5 2 17"/>
    <polyline points="16 7 22 7 22 13"/>
  </svg>
)

const IcTarget = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="10"/>
    <circle cx="12" cy="12" r="6"/>
    <circle cx="12" cy="12" r="2"/>
  </svg>
)

const IcCpu = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="4" y="4" width="16" height="16" rx="2"/>
    <rect x="9" y="9" width="6" height="6"/>
    <line x1="9" y1="1" x2="9" y2="4"/><line x1="15" y1="1" x2="15" y2="4"/>
    <line x1="9" y1="20" x2="9" y2="23"/><line x1="15" y1="20" x2="15" y2="23"/>
    <line x1="20" y1="9" x2="23" y2="9"/><line x1="20" y1="14" x2="23" y2="14"/>
    <line x1="1" y1="9" x2="4" y2="9"/><line x1="1" y1="14" x2="4" y2="14"/>
  </svg>
)

const IcZap = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/>
  </svg>
)

const pilares = [
  {
    Icon: IcTrendingUp,
    title: "Chance real de aprovação, sempre visível",
    desc: "O app calcula sua probabilidade de passar na prova a cada sessão de estudo — sem achismo, sem falsa confiança."
  },
  {
    Icon: IcTarget,
    title: "Foco total nos seus pontos fracos",
    desc: "Se você erra sempre em sinalização, o Motoriza vai fundo nisso. Questões que você domina passam pra segundo plano."
  },
  {
    Icon: IcCpu,
    title: "Quanto mais você usa, mais ele aprende",
    desc: "O app mapeia seu histórico de erros e acertos, reconhece padrões e adapta o próximo ciclo de estudo pra você."
  }
]

/* ── componentes removidos — preview agora usa PhoneMockup + LearningScreen ── */
function _unused_CurvaChart() {
  // Pontos simulando progresso ao longo de 3 semanas (% aprovação)
  const points = [
    [0, 32], [1, 35], [2, 41], [3, 38], [4, 47], [5, 52],
    [6, 55], [7, 60], [8, 58], [9, 65], [10, 70], [11, 74],
    [12, 71], [13, 78], [14, 82], [15, 85]
  ]

  const W = 340
  const H = 140
  const padX = 10
  const padY = 10
  const maxX = 15
  const minY = 20
  const maxY = 95

  const toSvg = ([x, y]) => [
    padX + (x / maxX) * (W - padX * 2),
    H - padY - ((y - minY) / (maxY - minY)) * (H - padY * 2)
  ]

  const pathD = points
    .map((p, i) => {
      const [sx, sy] = toSvg(p)
      return i === 0 ? `M ${sx} ${sy}` : `L ${sx} ${sy}`
    })
    .join(" ")

  // Área sob a curva
  const [startX, startY] = toSvg(points[0])
  const [endX] = toSvg(points[points.length - 1])
  const areaD = `${pathD} L ${endX} ${H - padY} L ${startX} ${H - padY} Z`

  // Último ponto (85%)
  const [dotX, dotY] = toSvg(points[points.length - 1])

  return (
    <div className="relative w-full">
      <svg
        viewBox={`0 0 ${W} ${H}`}
        className="w-full"
        preserveAspectRatio="xMidYMid meet"
      >
        {/* Gradiente área */}
        <defs>
          <linearGradient id="areaGrad" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#2E96FF" stopOpacity="0.25" />
            <stop offset="100%" stopColor="#2E96FF" stopOpacity="0.02" />
          </linearGradient>
        </defs>

        {/* Linhas de grade horizontais */}
        {[30, 50, 70, 90].map((pct) => {
          const [, gy] = toSvg([0, pct])
          return (
            <g key={pct}>
              <line
                x1={padX}
                y1={gy}
                x2={W - padX}
                y2={gy}
                stroke="#34485A"
                strokeWidth="0.5"
                strokeDasharray="4 4"
              />
              <text x={padX} y={gy - 3} fill="#8FA5B5" fontSize="8">
                {pct}%
              </text>
            </g>
          )
        })}

        {/* Área preenchida */}
        <path d={areaD} fill="url(#areaGrad)" />

        {/* Linha da curva */}
        <path
          d={pathD}
          fill="none"
          stroke="#2E96FF"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />

        {/* Ponto final destacado */}
        <circle cx={dotX} cy={dotY} r="5" fill="#2E96FF" />
        <circle cx={dotX} cy={dotY} r="9" fill="#2E96FF" fillOpacity="0.2" />
      </svg>

      {/* Labels de semana */}
      <div className="flex justify-between px-2 -mt-1">
        {["Semana 1", "Semana 2", "Semana 3"].map((l) => (
          <span key={l} className="text-[10px] text-appMuted">{l}</span>
        ))}
      </div>
    </div>
  )
}

function _unused_AprovacaoCard() {
  return (
    <div className="rounded-2xl bg-appSurface ring-1 ring-appBorder p-6 flex flex-col gap-5">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <p className="text-xs text-appMuted uppercase tracking-wider">Sua chance agora</p>
          <p className="text-4xl font-extrabold text-primary mt-0.5">85%</p>
        </div>
        <div className="w-14 h-14 rounded-xl bg-primary/15 ring-1 ring-primary/30 grid place-items-center">
          <svg viewBox="0 0 24 24" className="w-7 h-7 fill-none stroke-primary stroke-2">
            <polyline points="22 7 13.5 15.5 8.5 10.5 2 17" />
            <polyline points="16 7 22 7 22 13" />
          </svg>
        </div>
      </div>

      {/* Barra de progresso */}
      <div>
        <div className="flex justify-between text-xs text-appMuted mb-1.5">
          <span>Progresso de aprovação</span>
          <span className="text-primary font-semibold">85 / 100</span>
        </div>
        <div className="h-2 rounded-full bg-appSurface2 ring-1 ring-appBorder overflow-hidden">
          <div
            className="h-full rounded-full bg-primary transition-all"
            style={{ width: "85%" }}
          />
        </div>
      </div>

      {/* Curva */}
      <div>
        <p className="text-xs text-appMuted mb-2 uppercase tracking-wider">Evolução — últimas 3 semanas</p>
        <CurvaChart />
      </div>

      {/* Focos adaptativos */}
      <div className="grid grid-cols-2 gap-2">
        {[
          { label: "Sinalização", pct: 91, color: "bg-success" },
          { label: "Legislação", pct: 78, color: "bg-primary" },
          { label: "Infrações", pct: 65, color: "bg-yellow-400" },
          { label: "Mecânica", pct: 55, color: "bg-danger" }
        ].map(({ label, pct, color }) => (
          <div key={label} className="rounded-xl bg-appSurface2 px-3 py-2">
            <div className="flex justify-between items-center mb-1">
              <span className="text-[11px] text-appTextSec">{label}</span>
              <span className="text-[11px] font-bold text-appText">{pct}%</span>
            </div>
            <div className="h-1 rounded-full bg-appBorder overflow-hidden">
              <div className={`h-full rounded-full ${color}`} style={{ width: `${pct}%` }} />
            </div>
          </div>
        ))}
      </div>

      <p className="text-[11px] text-appMuted text-center">
        ↓ Foco automático em <span className="text-danger font-semibold">Mecânica</span> e <span className="text-yellow-400 font-semibold">Infrações</span> no próximo ciclo
      </p>
    </div>
  )
}

export default function AprendizadoAdaptativo() {
  return (
    <section id="aprendizado" className="bg-pageSoft">
      <div className="max-w-7xl mx-auto px-6 lg:px-10 py-20">
        {/* Cabeçalho */}
        <div className="max-w-2xl">
          <div className="text-sm font-semibold text-primary uppercase tracking-wider">
            Aprendizado adaptativo
          </div>
          <h2 className="mt-2 text-3xl md:text-4xl font-extrabold tracking-tight text-ink">
            O app aprende com você.<br />E muda o plano de estudo.
          </h2>
          <p className="mt-3 text-inkSoft">
            Cada questão respondida alimenta um modelo que conhece seu histórico, identifica onde você trava
            e calcula em tempo real qual é a sua chance real de passar na prova do DETRAN.
          </p>
        </div>

        {/* Layout 2 colunas */}
        <div className="mt-12 grid lg:grid-cols-2 gap-12 items-center">
          {/* Coluna esquerda — pilares */}
          <div className="flex flex-col gap-6">
            {pilares.map((p) => (
              <div key={p.title} className="flex gap-4">
                <div className="w-11 h-11 shrink-0 rounded-xl bg-primary/10 ring-1 ring-primary/30 grid place-items-center text-primary">
                  <p.Icon />
                </div>
                <div>
                  <h3 className="font-bold text-ink">{p.title}</h3>
                  <p className="mt-1 text-sm text-inkSoft leading-relaxed">{p.desc}</p>
                </div>
              </div>
            ))}

            {/* Badge de destaque */}
            <div className="mt-2 inline-flex items-center gap-2 rounded-xl bg-primary/8 ring-1 ring-primary/20 px-4 py-3 self-start">
              <span className="text-primary"><IcZap /></span>
              <p className="text-sm text-inkSoft">
                Quando sua chance bater <span className="font-bold text-primary">80%</span>, o Motoriza avisa que
                você está pronto para marcar a prova.
              </p>
            </div>
          </div>

          {/* Coluna direita — phone mockup */}
          <div className="flex justify-center lg:justify-end">
            <PhoneMockup screen={<LearningScreen />} />
          </div>
        </div>
      </div>
    </section>
  )
}
