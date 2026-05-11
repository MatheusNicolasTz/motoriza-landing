// Carcaca fiel ao app: borda preta arredondada, notch, status bar e bottom indicator.
export default function PhoneMockup({ className = "", screen }) {
  return (
    <div className={`w-[280px] h-[580px] rounded-[44px] bg-black p-[10px] ring-1 ring-black/10 ${className}`}>
      <div className="w-full h-full rounded-[36px] overflow-hidden bg-appBg relative">
        {/* Status bar */}
        <div className="absolute top-0 inset-x-0 h-9 z-20 flex items-center justify-between px-6 text-white text-[11px] font-semibold">
          <span>9:41</span>
          <span className="flex items-center gap-1">
            <span className="w-3.5 h-2 rounded-[1px] bg-white" />
            <span className="w-3.5 h-2 rounded-[1px] bg-white" />
            <span className="w-5 h-2.5 rounded-[2px] border border-white relative">
              <span className="absolute inset-0.5 bg-white rounded-[1px]" />
            </span>
          </span>
        </div>
        {/* Dynamic island */}
        <div className="absolute top-2 left-1/2 -translate-x-1/2 w-24 h-[22px] rounded-full bg-black z-30" />
        {/* Screen content */}
        <div className="absolute inset-0 pt-9">{screen}</div>
        {/* Bottom indicator */}
        <div className="absolute bottom-1.5 left-1/2 -translate-x-1/2 w-28 h-[3px] rounded-full bg-white/80 z-30" />
      </div>
    </div>
  )
}