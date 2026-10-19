/* Replica da tela "Evolução" (ScoreScreen) do app Motoriza */

// ─── App theme (espelha src/theme/index.ts) ────────────────────────────────
const C = {
  primary:     '#2E96FF',
  success:     '#58CC02',
  warning:     '#FFC800',
  danger:      '#FF5A5A',
  bg:          '#15202A',
  surface:     '#1F2C36',
  surface2:    '#243341',
  border:      '#34485A',
  text:        '#FFFFFF',
  textSec:     '#C4D4DF',
  textMuted:   '#8FA5B5',
}

// ─── Ionicons-style SVG components ────────────────────────────────────────

const IcFlame = ({ s = 13, c = C.warning }) => (
  <svg width={s} height={s} viewBox="0 0 24 24" fill={c}>
    <path d="M12 2C10.5 5.5 8 8 8 12a4 4 0 008 0c0-2-1-3.5-2.5-5 .5 1.5.5 3-.5 3.5C12 9 12 5 12 2z"/>
  </svg>
)

const IcCheckCircle = ({ s = 13, c = C.primary }) => (
  <svg width={s} height={s} viewBox="0 0 24 24" fill={c}>
    <path d="M12 2a10 10 0 100 20A10 10 0 0012 2zm-1.4 13.4L6 10.8l1.4-1.4 3.2 3.2L16.6 7l1.4 1.4-7.4 7z"/>
  </svg>
)

const IcStar = ({ s = 13, c = C.warning }) => (
  <svg width={s} height={s} viewBox="0 0 24 24" fill={c}>
    <path d="M12 2l2.9 5.8 6.4.9-4.6 4.5 1.1 6.4-5.8-3.1-5.8 3.1 1.1-6.4L2.7 8.7l6.4-.9L12 2z"/>
  </svg>
)

const IcLayers = ({ s = 13, c = C.success }) => (
  <svg width={s} height={s} viewBox="0 0 24 24" fill="none" stroke={c} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <polygon points="12 2 2 7 12 12 22 7 12 2"/>
    <polyline points="2 17 12 22 22 17"/>
    <polyline points="2 12 12 17 22 12"/>
  </svg>
)

const IcAnalytics = ({ s = 13, c = C.primary }) => (
  <svg width={s} height={s} viewBox="0 0 24 24" fill={c}>
    <path d="M3 19h4v-8H3v8zm5 0h4V6H8v13zm5 0h4v-5h-4v5z"/>
  </svg>
)

const IcTrendingUp = ({ s = 12, c = C.success }) => (
  <svg width={s} height={s} viewBox="0 0 24 24" fill="none" stroke={c} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="22 7 13.5 15.5 8.5 10.5 2 17"/>
    <polyline points="16 7 22 7 22 13"/>
  </svg>
)

const IcArrowForward = ({ s = 11, c = C.primary }) => (
  <svg width={s} height={s} viewBox="0 0 24 24" fill="none" stroke={c} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <line x1="5" y1="12" x2="19" y2="12"/>
    <polyline points="12 5 19 12 12 19"/>
  </svg>
)

const IcShieldCheck = ({ s = 10, c = C.text }) => (
  <svg width={s} height={s} viewBox="0 0 24 24" fill="none" stroke={c} strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 2L4 6v6c0 5 3.5 9.7 8 11 4.5-1.3 8-6 8-11V6l-8-4z"/>
    <polyline points="9 12 11 14 15 10"/>
  </svg>
)

// Tab bar icons
const IcMap = ({ s = 14, c = C.textMuted }) => (
  <svg width={s} height={s} viewBox="0 0 24 24" fill="none" stroke={c} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <polygon points="3 6 9 3 15 6 21 3 21 18 15 21 9 18 3 21 3 6"/>
    <line x1="9" y1="3" x2="9" y2="18"/>
    <line x1="15" y1="6" x2="15" y2="21"/>
  </svg>
)

const IcClipboard = ({ s = 14, c = C.textMuted }) => (
  <svg width={s} height={s} viewBox="0 0 24 24" fill="none" stroke={c} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <path d="M8 6H5a1 1 0 00-1 1v13a1 1 0 001 1h14a1 1 0 001-1V7a1 1 0 00-1-1h-3"/>
    <rect x="8" y="2" width="8" height="5" rx="1"/>
    <line x1="9" y1="12" x2="15" y2="12"/>
    <line x1="9" y1="16" x2="13" y2="16"/>
  </svg>
)

const IcBarChart = ({ s = 14, c = C.textMuted }) => (
  <svg width={s} height={s} viewBox="0 0 24 24" fill="none" stroke={c} strokeWidth="1.8" strokeLinecap="round">
    <line x1="18" y1="20" x2="18" y2="10"/>
    <line x1="12" y1="20" x2="12" y2="4"/>
    <line x1="6" y1="20" x2="6" y2="14"/>
  </svg>
)

const IcPerson = ({ s = 14, c = C.textMuted }) => (
  <svg width={s} height={s} viewBox="0 0 24 24" fill="none" stroke={c} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="8" r="4"/>
    <path d="M4 20c0-4 3.6-7 8-7s8 3 8 7"/>
  </svg>
)

// ─── data ─────────────────────────────────────────────────────────────────
const SESSIONS = [32, 38, 35, 44, 50, 48, 57, 62, 59, 68, 74, 71, 79, 83, 85]

function MiniChart() {
  const W = 220, H = 80
  const PL = 18, PR = 6, PT = 6, PB = 16
  const n = SESSIONS.length
  const innerW = W - PL - PR
  const innerH = H - PT - PB

  const xFor = (i) => PL + (i / (n - 1)) * innerW
  const yFor = (v) => PT + innerH - ((v - 20) / 70) * innerH

  const pts = SESSIONS.map((v, i) => ({ x: xFor(i), y: yFor(v) }))

  let line = `M ${pts[0].x} ${pts[0].y}`
  for (let i = 1; i < pts.length; i++) {
    const p = pts[i - 1], cur = pts[i]
    const mx = (p.x + cur.x) / 2
    line += ` C ${mx} ${p.y} ${mx} ${cur.y} ${cur.x} ${cur.y}`
  }
  const last = pts[pts.length - 1]
  const area = `${line} L ${last.x} ${PT + innerH} L ${pts[0].x} ${PT + innerH} Z`

  return (
    <svg viewBox={`0 0 ${W} ${H}`} style={{ width: '100%', display: 'block' }}>
      <defs>
        <linearGradient id="lcg" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor={C.primary} stopOpacity="0.3"/>
          <stop offset="100%" stopColor={C.primary} stopOpacity="0"/>
        </linearGradient>
      </defs>
      {[50, 75, 100].map(v => {
        const y = yFor(v)
        return (
          <g key={v}>
            <line x1={PL} y1={y} x2={W - PR} y2={y} stroke={C.border} strokeWidth="0.5" strokeDasharray="3 3"/>
            <text x={PL - 3} y={y + 3} fontSize="6" fill={C.textMuted} textAnchor="end">{v}</text>
          </g>
        )
      })}
      <path d={area} fill="url(#lcg)"/>
      <path d={line} fill="none" stroke={C.primary} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      <circle cx={pts[0].x} cy={pts[0].y} r="3" fill={C.text} stroke={C.primary} strokeWidth="1.5"/>
      <circle cx={last.x} cy={last.y} r="4" fill={C.primary}/>
      <circle cx={last.x} cy={last.y} r="7" fill={C.primary} fillOpacity="0.2"/>
      <text x={PL} y={H - 3} fontSize="7" fill={C.textMuted}>1ª sessão</text>
      <text x={W - PR} y={H - 3} fontSize="7" fill={C.textMuted} textAnchor="end">15ª sessão</text>
    </svg>
  )
}

function MetricCard({ Icon, label, value, color }) {
  return (
    <div style={{
      flex: 1,
      backgroundColor: C.surface2,
      borderRadius: 10,
      border: `1px solid ${C.border}`,
      padding: '7px 5px',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      gap: 2,
    }}>
      <Icon s={13} c={color}/>
      <span style={{ color, fontSize: 13, fontWeight: 800, lineHeight: 1.1, fontFamily: 'Inter, sans-serif' }}>{value}</span>
      <span style={{ color: C.textMuted, fontSize: 7, textAlign: 'center', lineHeight: 1.2, fontFamily: 'Inter, sans-serif' }}>{label}</span>
    </div>
  )
}

const F = { family: "'Inter', -apple-system, BlinkMacSystemFont, sans-serif" }

export default function LearningScreen() {
  return (
    <div style={{
      position: 'absolute', inset: 0,
      backgroundColor: C.bg,
      display: 'flex', flexDirection: 'column',
      fontFamily: F.family,
      overflow: 'hidden',
    }}>
      {/* Dynamic island spacing */}
      <div style={{ height: 30 }} />

      {/* Header */}
      <div style={{
        padding: '0 14px 10px',
        display: 'flex', alignItems: 'center', justifyContent: 'space-between',
      }}>
        <div>
          <div style={{ color: C.textMuted, fontSize: 9, letterSpacing: '0.15em', textTransform: 'uppercase' }}>
            Seu desempenho
          </div>
          <div style={{ color: C.text, fontSize: 17, fontWeight: 800, lineHeight: 1.2 }}>Evolução</div>
        </div>
        <div style={{
          display: 'flex', alignItems: 'center', gap: 4,
          backgroundColor: C.surface, border: `1px solid ${C.border}`,
          borderRadius: 999, padding: '3px 8px',
        }}>
          <IcFlame s={11} c={C.warning}/>
          <span style={{ color: C.warning, fontSize: 10, fontWeight: 700 }}>7 dias</span>
        </div>
      </div>

      {/* License card */}
      <div style={{
        margin: '0 10px',
        backgroundColor: C.surface,
        borderRadius: 14,
        border: `1px solid ${C.border}`,
        overflow: 'hidden',
      }}>
        {/* Blue top band */}
        <div style={{
          backgroundColor: C.primary,
          padding: '7px 12px',
          display: 'flex', alignItems: 'center', justifyContent: 'space-between',
        }}>
          <div>
            <div style={{ color: 'rgba(255,255,255,0.75)', fontSize: 8, letterSpacing: '0.12em', textTransform: 'uppercase' }}>
              Carteira do Aprendiz
            </div>
            <div style={{ color: C.text, fontSize: 13, fontWeight: 800 }}>João Silva</div>
          </div>
          <div style={{
            display: 'flex', alignItems: 'center', gap: 4,
            backgroundColor: 'rgba(0,0,0,0.2)', borderRadius: 999,
            padding: '2px 7px',
          }}>
            <IcShieldCheck s={10} c={C.text}/>
            <span style={{ color: C.text, fontSize: 9, fontWeight: 700 }}>Confiante</span>
          </div>
        </div>

        {/* Stats row */}
        <div style={{ display: 'flex', padding: '8px 0', borderBottom: `1px solid ${C.border}` }}>
          {[
            { value: '84%', label: 'Acertos' },
            { value: '2.840', label: 'XP' },
            { value: '142', label: 'Questões' },
          ].map((s, i, arr) => (
            <div key={s.label} style={{
              flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center',
              borderRight: i < arr.length - 1 ? `1px solid ${C.border}` : 'none',
            }}>
              <span style={{ color: C.text, fontSize: 13, fontWeight: 800 }}>{s.value}</span>
              <span style={{ color: C.textMuted, fontSize: 8 }}>{s.label}</span>
            </div>
          ))}
        </div>

        {/* XP bar */}
        <div style={{ padding: '6px 12px' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 4 }}>
            <span style={{ color: C.textMuted, fontSize: 8 }}>Próximo nível</span>
            <span style={{ color: C.textSec, fontSize: 8, fontWeight: 600 }}>40 / 200 XP</span>
          </div>
          <div style={{ height: 5, borderRadius: 999, backgroundColor: C.border, overflow: 'hidden' }}>
            <div style={{ width: '20%', height: '100%', borderRadius: 999, backgroundColor: C.primary }} />
          </div>
        </div>
      </div>

      {/* Metrics grid */}
      <div style={{ padding: '10px 10px 0' }}>
        <div style={{ color: C.textSec, fontSize: 9, fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', marginBottom: 6 }}>
          Desempenho
        </div>
        <div style={{ display: 'flex', gap: 5 }}>
          <MetricCard Icon={IcCheckCircle} label="Acertos"    value="84%" color={C.primary}  />
          <MetricCard Icon={IcStar}        label="XP total"   value="2.8k" color={C.warning}  />
          <MetricCard Icon={IcLayers}      label="Níveis"     value="7/12" color={C.success}  />
          <MetricCard Icon={IcAnalytics}   label="Aprovação"  value="78%" color={C.primary}  />
        </div>
      </div>

      {/* Learning curve */}
      <div style={{ padding: '10px 10px 0', flex: 1 }}>
        <div style={{ color: C.textSec, fontSize: 9, fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', marginBottom: 6 }}>
          Curva de aprendizagem
        </div>
        <div style={{
          backgroundColor: C.surface, borderRadius: 12,
          border: `1px solid ${C.border}`, padding: '8px 10px',
        }}>
          {/* Before → Now compare row */}
          <div style={{ display: 'flex', alignItems: 'center', gap: 6, marginBottom: 8 }}>
            <div style={{ textAlign: 'center' }}>
              <div style={{ color: C.textMuted, fontSize: 8 }}>Antes</div>
              <div style={{ color: C.textSec, fontSize: 13, fontWeight: 800 }}>32%</div>
            </div>
            <IcArrowForward s={11} c={C.primary}/>
            <div style={{ textAlign: 'center' }}>
              <div style={{ color: C.textMuted, fontSize: 8 }}>Agora</div>
              <div style={{ color: C.success, fontSize: 13, fontWeight: 800 }}>85%</div>
            </div>
            <div style={{
              marginLeft: 'auto',
              display: 'flex', alignItems: 'center', gap: 3,
              backgroundColor: 'rgba(88,204,2,0.15)', border: '1px solid rgba(88,204,2,0.3)',
              borderRadius: 999, padding: '2px 6px',
            }}>
              <IcTrendingUp s={10} c={C.success}/>
              <span style={{ color: C.success, fontSize: 10, fontWeight: 700 }}>+53%</span>
            </div>
          </div>

          <MiniChart />
        </div>
      </div>

      {/* Bottom tab bar */}
      <div style={{
        margin: '6px 8px 6px',
        backgroundColor: C.surface,
        border: `1px solid ${C.border}`,
        borderRadius: 14,
        display: 'flex', justifyContent: 'space-around',
        padding: '5px 2px',
      }}>
        {[
          { Ic: IcMap,       label: 'Trilha',    active: false },
          { Ic: IcClipboard, label: 'Simulados', active: false },
          { Ic: IcBarChart,  label: 'Evolução',  active: true  },
          { Ic: IcPerson,    label: 'Perfil',    active: false },
        ].map(({ Ic, label, active }) => (
          <div key={label} style={{
            display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 1,
            padding: '2px 8px', borderRadius: 10,
            backgroundColor: active ? 'rgba(46,150,255,0.15)' : 'transparent',
          }}>
            <Ic s={14} c={active ? C.primary : C.textMuted}/>
            <span style={{ fontSize: 8, fontWeight: 600, color: active ? C.primary : C.textMuted }}>{label}</span>
          </div>
        ))}
      </div>
    </div>
  )
}
