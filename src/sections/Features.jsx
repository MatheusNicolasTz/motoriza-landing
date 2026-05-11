import { features } from "../data/features.js"

export default function Features() {
  return (
    <section id="features" className="max-w-7xl mx-auto px-6 lg:px-10 py-20">
      <div className="max-w-2xl">
        <div className="text-sm font-semibold text-primary uppercase tracking-wider">Recursos</div>
        <h2 className="mt-2 text-3xl md:text-4xl font-extrabold tracking-tight text-ink">
          Estudar pra prova teorica<br />nunca foi tao rapido.
        </h2>
        <p className="mt-3 text-inkSoft">
          O Motoriza foi desenhado pra quem quer aprovar sem gastar mil reais em curso, e sem perder semanas decorando apostila.
        </p>
      </div>

      <div className="mt-10 grid md:grid-cols-2 lg:grid-cols-3 gap-5">
        {features.map((it) => (
          <div key={it.title} className="rounded-2xl bg-page ring-1 ring-line p-6 hover:ring-primary/50 transition">
            <div className="w-11 h-11 rounded-xl bg-primary/10 ring-1 ring-primary/30 grid place-items-center text-primary font-extrabold text-base">{it.icon}</div>
            <h3 className="mt-4 text-lg font-bold text-ink">{it.title}</h3>
            <p className="mt-2 text-sm text-inkSoft leading-relaxed">{it.desc}</p>
          </div>
        ))}
      </div>
    </section>
  )
}