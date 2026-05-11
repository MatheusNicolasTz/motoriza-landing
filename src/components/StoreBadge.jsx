import { useState } from "react"

export default function StoreBadge({ store, href, className = "" }) {
  const isApple = store === "apple"
  const [showSoon, setShowSoon] = useState(false)

  const label = isApple ? "App Store" : "Google Play"
  const prefix = isApple ? "Baixe na" : "Disponivel no"
  const icon = isApple ? "/apple-icon.png" : "/google-play-icon.png"

  const content = (
    <>
      <img src={icon} alt={label} className="w-7 h-7 object-contain" />
      <div className="leading-tight text-left">
        <div className="text-[10px] opacity-70 uppercase tracking-wide">
          {showSoon ? "Em breve" : prefix}
        </div>
        <div className="text-base font-semibold -mt-0.5">{label}</div>
      </div>
    </>
  )

  const baseClass = `inline-flex items-center gap-3 rounded-xl bg-black text-white px-5 py-3 hover:bg-black/85 transition ${className}`

  if (href && href !== "#") {
    return (
      <a href={href} target="_blank" rel="noreferrer" aria-label={`${prefix} ${label}`} className={baseClass}>
        {content}
      </a>
    )
  }

  return (
    <button
      type="button"
      onClick={() => {
        setShowSoon(true)
        setTimeout(() => setShowSoon(false), 2000)
      }}
      aria-label={`${label} em breve`}
      className={baseClass}
    >
      {content}
    </button>
  )
}
