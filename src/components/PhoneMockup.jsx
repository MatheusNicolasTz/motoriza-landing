export default function PhoneMockup({ className = "", screen }) {
  return (
    <div className={`w-[280px] h-[580px] rounded-[44px] bg-black p-[10px] ring-1 ring-black/10 ${className}`}>
      <div className="w-full h-full rounded-[36px] overflow-hidden bg-appBg relative">
        {/* Screen content */}
        <div className="absolute inset-0">{screen}</div>
        {/* Dynamic island */}
        <div className="absolute top-2 left-1/2 -translate-x-1/2 w-24 h-[22px] rounded-full bg-black z-30" />
        {/* Bottom indicator */}
        <div className="absolute bottom-1.5 left-1/2 -translate-x-1/2 w-28 h-[3px] rounded-full bg-white/80 z-30" />
      </div>
    </div>
  )
}