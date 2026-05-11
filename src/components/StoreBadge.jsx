export default function StoreBadge({ store, href, className = "" }) {
  const isApple = store === "apple"

  const label = isApple ? "App Store" : "Google Play"
  const prefix = isApple ? "Em breve" : "Disponivel no"
  const icon = isApple ? "/apple-icon.png" : "/google-play-icon.png"

  const baseClass = `inline-flex items-center gap-3 rounded-xl bg-black text-white px-5 py-3 transition ${className}`

  const content = (
    <>
      <img src={icon} alt={label} className="w-7 h-7 object-contain" />
      <div className="leading-tight text-left">
        <div className="text-[10px] opacity-70 uppercase tracking-wide">{prefix}</div>
        <div className="text-base font-semibold -mt-0.5">{label}</div>
      </div>
    </>
  )

  if (isApple) {
    return (
      <div className={`${baseClass} opacity-60 cursor-not-allowed`}>
        {content}
      </div>
    )
  }

  if (href && href !== "#") {
    return (
      <a href={href} target="_blank" rel="noreferrer" aria-label={`Disponivel no ${label}`} className={`${baseClass} hover:bg-black/85`}>
        {content}
      </a>
    )
  }

  return (
    <button type="button" aria-label={`${label} disponivel em breve`} className={`${baseClass} hover:bg-black/85`}>
      {content}
    </button>
  )
}
