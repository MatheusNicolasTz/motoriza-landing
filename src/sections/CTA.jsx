import StoreBadge from "../components/StoreBadge.jsx"

export default function CTA() {
  return (
    <section className="max-w-7xl mx-auto px-6 lg:px-10 pb-24">
      <div className="rounded-3xl bg-gradient-to-br from-primary to-primaryDark p-10 md:p-14 flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
        <div>
          <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight text-white">
            Pronto pra tirar sua CNH<br />sem ficar refem da apostila?
          </h2>
          <p className="mt-3 text-white/85 max-w-lg">
            15 perguntas gratis por dia, simulado oficial e revisao inteligente. Comece em 30 segundos.
          </p>
        </div>
        <div className="flex flex-wrap gap-3">
          <StoreBadge store="apple" />
          <StoreBadge store="google" />
        </div>
      </div>
    </section>
  )
}