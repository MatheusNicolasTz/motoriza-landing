import { useState } from 'react'
import { createPortal } from 'react-dom'
import { utmSource } from '../lib/playStore.js'

// O app ainda é só Android. Em vez de um selo "Em breve" que não leva a lugar
// nenhum, quem tem iPhone deixa o e-mail para ser avisado no lançamento.
// Grava em Firestore (coleção iphoneWaitlist); se a regra ainda não estiver
// publicada, cai no e-mail de contato para o pedido não se perder.
const CONTACT = 'contato@motorizacnh.com'

export default function IphoneNotify({ className = '' }) {
  const [open, setOpen] = useState(false)
  const [email, setEmail] = useState('')
  const [state, setState] = useState('idle') // idle | sending | done

  async function submit(e) {
    e.preventDefault()
    const value = email.trim().toLowerCase()
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) return
    setState('sending')
    try {
      // Firebase só carrega quando alguém pede o aviso: não pesa na abertura do site
      // e, se a configuração falhar, só este botão cai no plano B (e-mail), nunca a página.
      const [{ auth }, { getFirestore, collection, addDoc, serverTimestamp }] = await Promise.all([
        import('../lib/firebase.js'),
        import('firebase/firestore'),
      ])
      const db = getFirestore(auth.app)
      await addDoc(collection(db, 'iphoneWaitlist'), {
        email: value,
        source: utmSource().slice(0, 60),
        createdAt: serverTimestamp(),
      })
      setState('done')
    } catch {
      const subject = encodeURIComponent('Me avise quando o Motoriza chegar no iPhone')
      const body = encodeURIComponent(`Quero ser avisado no lançamento para iPhone. Meu e-mail: ${value}`)
      window.location.href = `mailto:${CONTACT}?subject=${subject}&body=${body}`
      setState('done')
    }
  }

  return (
    <>
      <button
        type="button"
        onClick={() => setOpen(true)}
        className={`inline-flex items-center gap-3 rounded-xl bg-black text-white px-5 py-3 transition hover:bg-black/85 ${className}`}
      >
        <img src="/apple-icon.png" alt="" className="w-7 h-7 object-contain" />
        <div className="leading-tight text-left">
          <div className="text-[10px] opacity-70 uppercase tracking-wide">Tem iPhone?</div>
          <div className="text-base font-semibold -mt-0.5">Me avise</div>
        </div>
      </button>

      {/* Portal no body: dentro do hero (que tem transform) o "fixed" não cobriria a tela toda */}
      {open && createPortal(
        <div
          className="fixed inset-0 z-50 grid place-items-center px-4"
          style={{ backgroundColor: 'rgba(15, 23, 42, 0.6)' }}
          onClick={() => setOpen(false)}
          role="dialog"
          aria-modal="true"
          aria-label="Aviso do lançamento para iPhone"
        >
          <div className="w-full max-w-sm rounded-2xl bg-page p-6 ring-1 ring-line text-left" onClick={(e) => e.stopPropagation()}>
            {state === 'done' ? (
              <>
                <h3 className="text-xl font-extrabold text-ink">Pronto!</h3>
                <p className="mt-2 text-sm text-inkSoft">Você vai receber um e-mail quando o Motoriza chegar na App Store.</p>
                <button type="button" onClick={() => setOpen(false)} className="mt-5 w-full rounded-xl bg-primary hover:bg-primaryDark text-white font-semibold py-3 transition">
                  Fechar
                </button>
              </>
            ) : (
              <form onSubmit={submit}>
                <h3 className="text-xl font-extrabold text-ink">O Motoriza ainda não está no iPhone</h3>
                <p className="mt-2 text-sm text-inkSoft">Deixe seu e-mail e avisamos quando lançar na App Store.</p>
                <input
                  type="email"
                  required
                  autoFocus
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="seu@email.com"
                  className="mt-4 w-full rounded-xl ring-1 ring-line bg-pageSoft px-4 py-3 text-ink outline-none focus:ring-2 focus:ring-primary"
                />
                <button type="submit" disabled={state === 'sending'} className="mt-3 w-full rounded-xl bg-primary hover:bg-primaryDark text-white font-semibold py-3 transition disabled:opacity-60">
                  {state === 'sending' ? 'Enviando…' : 'Quero ser avisado'}
                </button>
                <p className="mt-3 text-[11px] text-inkMuted">Usamos seu e-mail só para esse aviso. Nada de spam.</p>
              </form>
            )}
          </div>
        </div>,
        document.body
      )}
    </>
  )
}
