export default function HomeScreen() {
  return (
    <div className="absolute inset-0 overflow-hidden" style={{ backgroundColor: '#5CB030' }}>
      {/* Road SVG */}
      <svg className="absolute inset-0 w-full h-full pointer-events-none" viewBox="0 0 260 524" preserveAspectRatio="xMidYMid slice">
        <path d="M 130 175 C 130 230 55 230 55 288 C 55 346 130 346 130 402"
          stroke="#1A1A1A" strokeWidth="44" fill="none" strokeLinecap="round" />
        <path d="M 130 175 C 130 230 55 230 55 288 C 55 346 130 346 130 402"
          stroke="#2E2E2E" strokeWidth="38" fill="none" strokeLinecap="round" />
        <path d="M 130 175 C 130 230 55 230 55 288 C 55 346 130 346 130 402"
          stroke="#FDB813" strokeWidth="3" strokeDasharray="12 12" fill="none" strokeLinecap="round" />
      </svg>

      {/* Header */}
      <div className="absolute top-0 inset-x-0 z-10 px-3 pt-2 pb-3 flex items-center justify-between"
        style={{ backgroundColor: '#15202A', borderBottomLeftRadius: 24, borderBottomRightRadius: 24 }}>
        <div>
          <div className="font-bold uppercase" style={{ fontSize: 9, letterSpacing: '0.18em', color: '#C4D4DF' }}>
            SUA JORNADA
          </div>
          <div className="font-extrabold text-white" style={{ fontSize: 18, lineHeight: 1.2 }}>Motoriza</div>
          <div className="mt-1 flex items-center gap-1 rounded-full px-2 py-0.5 w-fit"
            style={{ backgroundColor: 'rgba(255,255,255,0.1)' }}>
            <span style={{ fontSize: 10 }}>🔥</span>
            <span className="font-bold text-white" style={{ fontSize: 10 }}>7 dias</span>
          </div>
        </div>
        {/* Speedometer */}
        <div className="relative flex items-center justify-center rounded-full"
          style={{ width: 56, height: 56, backgroundColor: 'rgba(0,0,0,0.18)' }}>
          <svg width="56" height="56" viewBox="0 0 56 56">
            <circle cx="28" cy="28" r="22" stroke="#34485A" strokeWidth="5" fill="none" />
            <circle cx="28" cy="28" r="22"
              stroke="#FDB813" strokeWidth="5" fill="none"
              strokeDasharray={`${(2 * Math.PI * 22 * 0.42).toFixed(1)} ${(2 * Math.PI * 22).toFixed(1)}`}
              strokeLinecap="round"
              transform="rotate(-90 28 28)"
            />
          </svg>
          <div className="absolute inset-0 flex flex-col items-center justify-center">
            <span className="font-extrabold text-white" style={{ fontSize: 11, lineHeight: 1 }}>42%</span>
            <span className="font-bold" style={{ fontSize: 8, color: 'rgba(255,255,255,0.7)', lineHeight: 1, marginTop: 1 }}>km/h</span>
          </div>
        </div>
      </div>

      {/* Node 1 — Sinalização I — completed — cyan */}
      <div className="absolute flex flex-col items-center" style={{ left: 104, top: 149 }}>
        <div className="relative flex items-center justify-center rounded-full"
          style={{ width: 52, height: 52, backgroundColor: '#1CB0F6' }}>
          <span style={{ fontSize: 20 }}>🚩</span>
          <div className="absolute flex items-center justify-center bg-white rounded-full"
            style={{ width: 20, height: 20, bottom: -2, right: -2 }}>
            <span style={{ color: '#58CC02', fontSize: 13, lineHeight: 1 }}>✓</span>
          </div>
        </div>
        <div className="mt-1.5 rounded-full border px-2 py-0.5"
          style={{ backgroundColor: '#15202A', borderColor: '#34485A' }}>
          <span className="font-bold text-white" style={{ fontSize: 8 }}>Sinalização I</span>
        </div>
      </div>

      {/* Node 2 — Legislação I — current — orange */}
      <div className="absolute flex flex-col items-center" style={{ left: 29, top: 262 }}>
        {/* ESTUDAR tooltip */}
        <div className="absolute flex flex-col items-center" style={{ top: -44, left: '50%', transform: 'translateX(-50%)', zIndex: 2 }}>
          <div className="rounded-[8px] border-2 border-white px-2.5 py-1"
            style={{ backgroundColor: '#FFC800', whiteSpace: 'nowrap' }}>
            <span className="font-extrabold" style={{ color: '#1A1A1A', fontSize: 9, letterSpacing: '0.06em' }}>ESTUDAR</span>
          </div>
          <div style={{ width: 0, height: 0, borderLeft: '5px solid transparent', borderRight: '5px solid transparent', borderTop: '5px solid #FFC800', marginTop: -1 }} />
        </div>
        {/* Pulse ring */}
        <div className="absolute rounded-full" style={{ inset: -8, border: '2.5px solid #FF9600', opacity: 0.4 }} />
        <div className="flex items-center justify-center rounded-full border-[3px] border-white"
          style={{ width: 52, height: 52, backgroundColor: '#FF9600' }}>
          <span style={{ fontSize: 18 }}>📖</span>
        </div>
        <div className="mt-1.5 rounded-full border px-2 py-0.5"
          style={{ backgroundColor: '#15202A', borderColor: '#34485A' }}>
          <span className="font-bold text-white" style={{ fontSize: 8 }}>Legislação I</span>
        </div>
      </div>

      {/* Car on current node (centered, rotated to face down) */}
      <div className="absolute pointer-events-none" style={{ left: 39, top: 270, transform: 'rotate(90deg)', transformOrigin: 'center' }}>
        <svg width="32" height="26" viewBox="0 0 44 34" aria-hidden>
          <path d="M4 22 C 4 16, 12 10, 22 10 C 32 10, 40 16, 40 22 L 40 26 L 4 26 Z" fill="#E53935" />
          <path d="M10 13 L 18 9 L 26 9 L 34 13 L 30 18 L 14 18 Z" fill="#7FBDFF" opacity="0.9" />
          <circle cx="12" cy="26" r="3.5" fill="#111" />
          <circle cx="32" cy="26" r="3.5" fill="#111" />
          <circle cx="12" cy="26" r="1.6" fill="#555" />
          <circle cx="32" cy="26" r="1.6" fill="#555" />
          <circle cx="6" cy="18" r="3" fill="#FFF176" opacity="0.9" />
          <circle cx="38" cy="18" r="3" fill="#FFF176" opacity="0.9" />
        </svg>
      </div>

      {/* Node 3 — Defensiva I — locked */}
      <div className="absolute flex flex-col items-center" style={{ left: 104, top: 376 }}>
        <div className="flex items-center justify-center rounded-full"
          style={{ width: 52, height: 52, backgroundColor: '#34485A' }}>
          <LockIcon />
        </div>
        <div className="mt-1.5 rounded-full border px-2 py-0.5"
          style={{ backgroundColor: '#15202A', borderColor: '#34485A' }}>
          <span className="font-bold" style={{ color: '#C4D4DF', fontSize: 8 }}>Defensiva I</span>
        </div>
      </div>

      {/* Bottom tab bar */}
      <div className="absolute inset-x-2 flex items-center justify-around rounded-2xl border px-1 py-1"
        style={{ bottom: 6, backgroundColor: '#15202A', borderColor: '#34485A' }}>
        {[
          { icon: '🛣️', label: 'Trilha', active: true },
          { icon: '📋', label: 'Simulados' },
          { icon: '📚', label: 'Aprend.' },
          { icon: '👤', label: 'Perfil' },
        ].map(({ icon, label, active }) => (
          <div key={label} className="flex flex-col items-center gap-0.5 px-1.5 py-0.5 rounded-xl"
            style={{ backgroundColor: active ? 'rgba(46,150,255,0.15)' : 'transparent' }}>
            <span style={{ fontSize: 14 }}>{icon}</span>
            <span className="font-semibold" style={{ fontSize: 8, color: active ? '#2E96FF' : '#8FA5B5' }}>{label}</span>
          </div>
        ))}
      </div>
    </div>
  )
}

function LockIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
      <rect x="5" y="11" width="14" height="10" rx="2" fill="#8FA5B5" />
      <path d="M8 11V7a4 4 0 018 0v4" stroke="#8FA5B5" strokeWidth="2" strokeLinecap="round" />
    </svg>
  )
}
