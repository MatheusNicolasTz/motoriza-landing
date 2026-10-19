// Link da Play Store com a origem do clique (utm) no "referrer".
// A Play repassa esse referrer ao app na instalação e o Firebase Analytics
// atribui o first_open à campanha: dá para ver qual vídeo/post trouxe instalações.
//
// Use links assim nas redes: https://motorizacnh.com/?utm_source=tiktok&utm_campaign=quiz-cruzamento
const BASE = 'https://play.google.com/store/apps/details?id=com.tzdev.motoriza'
const KEY = 'motoriza_utm'
const FIELDS = ['utm_source', 'utm_medium', 'utm_campaign', 'utm_content']

/** Guarda a primeira origem da visita (sobrevive à navegação dentro do site). */
function firstTouch() {
  try {
    const saved = sessionStorage.getItem(KEY)
    if (saved) return JSON.parse(saved)
  } catch {}
  const q = new URLSearchParams(window.location.search)
  const utm = {}
  for (const f of FIELDS) if (q.get(f)) utm[f] = q.get(f)
  if (!utm.utm_source && document.referrer) {
    try {
      const host = new URL(document.referrer).hostname.replace(/^www\./, '')
      if (host && host !== window.location.hostname) utm.utm_source = host
    } catch {}
  }
  try { sessionStorage.setItem(KEY, JSON.stringify(utm)) } catch {}
  return utm
}

/** `place` diz qual botão do site foi clicado (hero, precos, cta…). */
export function playStoreUrl(place) {
  const utm = firstTouch()
  const ref = new URLSearchParams()
  ref.set('utm_source', utm.utm_source || 'site')
  ref.set('utm_medium', utm.utm_medium || 'landing')
  if (utm.utm_campaign) ref.set('utm_campaign', utm.utm_campaign)
  ref.set('utm_content', utm.utm_content || place || 'site')
  return `${BASE}&referrer=${encodeURIComponent(ref.toString())}`
}

export function utmSource() {
  return firstTouch().utm_source || 'site'
}
