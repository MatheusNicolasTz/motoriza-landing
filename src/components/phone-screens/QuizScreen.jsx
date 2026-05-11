export default function QuizScreen() {
  return (
    <div className="absolute inset-0 flex flex-col" style={{ backgroundColor: '#15202A' }}>

      {/* Top bar */}
      <div className="flex items-center gap-3 px-3 py-2 border-b" style={{ borderColor: '#34485A' }}>
        {/* Close button */}
        <div className="flex items-center justify-center rounded-full"
          style={{ width: 28, height: 28, color: '#6B8294', fontSize: 20, lineHeight: 1 }}>×</div>

        {/* Progress bar — road with car */}
        <div className="flex-1 relative rounded-full overflow-hidden" style={{ height: 14, backgroundColor: '#3F4A50' }}>
          {/* Yellow dashes center line */}
          <div className="absolute inset-0 flex items-center px-1">
            <div className="w-full" style={{
              height: 2,
              backgroundImage: 'repeating-linear-gradient(90deg, #FDB813 0px, #FDB813 6px, transparent 6px, transparent 12px)'
            }} />
          </div>
          {/* Green fill */}
          <div className="absolute inset-y-0 left-0 rounded-full" style={{ width: '40%', backgroundColor: '#58CC02', zIndex: 1 }} />
          {/* Car icon at progress edge */}
          <div className="absolute top-1/2 -translate-y-1/2" style={{ left: 'calc(40% - 7px)', zIndex: 2 }}>
            <svg width="14" height="10" viewBox="0 0 44 30">
              <path d="M4 20 C 4 14, 12 8, 22 8 C 32 8, 40 14, 40 20 L 40 24 L 4 24 Z" fill="#E53935" />
              <path d="M10 11 L 18 7 L 26 7 L 34 11 L 30 16 L 14 16 Z" fill="#7FBDFF" opacity="0.9" />
            </svg>
          </div>
        </div>

        {/* Fuel gauge */}
        <div className="flex items-center gap-1">
          <FuelIcon />
          <span className="font-bold" style={{ fontSize: 11, color: '#FF9600' }}>60%</span>
        </div>
      </div>

      {/* Scrollable content */}
      <div className="flex-1 flex flex-col overflow-hidden px-4 pt-3 gap-3">

        {/* Question text */}
        <div className="font-extrabold text-white leading-snug" style={{ fontSize: 15 }}>
          Qual o significado desta placa?
        </div>

        {/* Traffic sign box */}
        <div className="flex items-center justify-center rounded-[12px] py-3 border"
          style={{ backgroundColor: '#1C2A35', borderColor: '#34485A' }}>
          <PlacaR1 size={68} />
        </div>

        {/* Answer buttons */}
        <div className="flex flex-col gap-2">
          <AnswerBtn text="Dê a preferência" state="dimmed" />
          <AnswerBtn text="Parada obrigatória" state="correct" />
          <AnswerBtn text="Proibido virar à esq." state="dimmed" />
          <AnswerBtn text="Velocidade máx. 30" state="dimmed" />
        </div>
      </div>

      {/* Footer — correct state */}
      <div className="px-4 pt-2.5 pb-3 border-t" style={{ borderColor: '#34485A', backgroundColor: '#15202A' }}>
        <div className="flex items-center gap-2 mb-2">
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
            <circle cx="12" cy="12" r="11" fill="#58CC02" />
            <path d="M7 12l3 3 7-7" stroke="#fff" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
          <span className="font-extrabold" style={{ color: '#58CC02', fontSize: 18 }}>Correto!</span>
        </div>
        <div className="w-full flex items-center justify-center rounded-[14px] font-extrabold text-white uppercase"
          style={{
            backgroundColor: '#58CC02',
            borderBottom: '4px solid #58A700',
            fontSize: 12,
            letterSpacing: '0.08em',
            minHeight: 42,
          }}>
          CONTINUAR
        </div>
      </div>
    </div>
  )
}

function AnswerBtn({ text, state }) {
  const s = {
    default:  { bg: '#15202A', border: '#34485A', color: '#C4D4DF', opacity: 1 },
    correct:  { bg: 'rgba(88,204,2,0.22)', border: '#58CC02', color: '#58CC02', opacity: 1 },
    wrong:    { bg: 'rgba(255,75,75,0.18)', border: '#FF5A5A', color: '#FF5A5A', opacity: 1 },
    dimmed:   { bg: '#15202A', border: '#34485A', color: '#6B8294', opacity: 0.5 },
  }[state] || { bg: '#15202A', border: '#34485A', color: '#C4D4DF', opacity: 1 }

  return (
    <div className="flex items-center justify-center rounded-[14px] px-3"
      style={{
        backgroundColor: s.bg,
        border: `2px solid ${s.border}`,
        borderBottom: `4px solid ${s.border}`,
        minHeight: 44,
        opacity: s.opacity,
      }}>
      <span className="font-bold text-center w-full" style={{ fontSize: 11, color: s.color }}>{text}</span>
    </div>
  )
}

function PlacaR1({ size = 80 }) {
  const s = size
  const pts = [[30,0],[70,0],[100,30],[100,70],[70,100],[30,100],[0,70],[0,30]]
    .map(([x, y]) => `${(x/100*s).toFixed(1)},${(y/100*s).toFixed(1)}`).join(' ')
  return (
    <svg width={s} height={s} viewBox={`0 0 ${s} ${s}`} aria-hidden>
      <polygon points={pts} fill="#D9252A" stroke="#FFFFFF" strokeWidth={s * 0.06} />
      <text
        x={s / 2} y={s * 0.63}
        textAnchor="middle"
        fontWeight="900"
        fontSize={s * 0.28}
        fill="#FFFFFF"
        fontFamily="Inter, system-ui, sans-serif"
      >PARE</text>
    </svg>
  )
}

function FuelIcon() {
  return (
    <svg width="16" height="18" viewBox="0 0 24 28" fill="none">
      <rect x="2" y="4" width="13" height="20" rx="2" fill="#8FA5B5" />
      <rect x="4" y="8" width="9" height="8" rx="1" fill="#15202A" />
      <path d="M15 8h3a2 2 0 012 2v4" stroke="#8FA5B5" strokeWidth="2" strokeLinecap="round" />
      <circle cx="20" cy="15" r="2" fill="#FF9600" />
    </svg>
  )
}
