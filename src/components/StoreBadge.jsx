export default function StoreBadge({ store, href = "#", className = "" }) {
  const isApple = store === "apple"
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      aria-label={isApple ? "Baixe na App Store" : "Disponivel no Google Play"}
      className={`inline-flex items-center gap-3 rounded-xl bg-black text-white px-5 py-3 hover:bg-black/85 transition ${className}`}
    >
      <img
        src={isApple ? "/apple-icon.png" : "/google-play-icon.png"}
        alt={isApple ? "App Store" : "Google Play"}
        className="w-7 h-7 object-contain"
      />
      <div className="leading-tight text-left">
        <div className="text-[10px] opacity-70 uppercase tracking-wide">
          {isApple ? "Baixe na" : "Disponivel no"}
        </div>
        <div className="text-base font-semibold -mt-0.5">
          {isApple ? "App Store" : "Google Play"}
        </div>
      </div>
    </a>
  )
}