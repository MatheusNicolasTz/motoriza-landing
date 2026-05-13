import Navbar from '../components/Navbar.jsx'
import Footer from '../components/Footer.jsx'

export default function ExcluirConta() {
  const lastUpdate = '13 de maio de 2026'
  const supportEmail = 'contato@motorizacnh.com'

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1 bg-page">
        <article className="max-w-3xl mx-auto px-6 lg:px-10 py-16">
          <p className="text-sm text-inkMuted">Última atualização: {lastUpdate}</p>
          <h1 className="text-4xl md:text-5xl font-extrabold text-ink mt-2 mb-6">
            Excluir sua conta do Motoriza
          </h1>

          <p className="text-lg text-inkMuted leading-relaxed mb-10">
            Você pode solicitar a exclusão da sua conta do Motoriza e de todos os
            dados pessoais associados a qualquer momento. Abaixo explicamos os
            dois caminhos disponíveis e quais dados são apagados ou mantidos.
          </p>

          <section className="prose-content space-y-6 text-ink leading-relaxed">
            <h2 className="text-2xl font-bold mt-8">1. Excluir pelo aplicativo</h2>
            <ol className="list-decimal pl-6 space-y-2">
              <li>Abra o Motoriza no seu celular e faça login.</li>
              <li>
                Toque no ícone de <strong>Conta</strong> (ou
                <strong> Configurações &rarr; Conta</strong>).
              </li>
              <li>
                Selecione <strong>Excluir conta</strong> e confirme a operação.
              </li>
              <li>
                Sua conta e seus dados pessoais serão removidos imediatamente dos
                nossos servidores.
              </li>
            </ol>

            <h2 className="text-2xl font-bold mt-8">2. Excluir por e-mail</h2>
            <p>
              Se você não consegue acessar o app, envie um e-mail para{' '}
              <a
                href={`mailto:${supportEmail}?subject=Excluir%20conta%20Motoriza`}
                className="text-brand font-semibold underline"
              >
                {supportEmail}
              </a>{' '}
              com o assunto <strong>“Excluir conta Motoriza”</strong>. O e-mail
              precisa ser enviado <strong>do mesmo endereço cadastrado no app</strong>{' '}
              para que possamos confirmar sua identidade.
            </p>
            <p>
              Processamos cada pedido em até <strong>7 dias úteis</strong> e
              enviamos uma confirmação assim que a exclusão for concluída.
            </p>

            <h2 className="text-2xl font-bold mt-8">3. Dados que serão apagados</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>Nome, e-mail e foto de perfil.</li>
              <li>Progresso de estudo: fases, acertos, erros, XP e níveis.</li>
              <li>Histórico de questões respondidas e estatísticas de desempenho.</li>
              <li>Preferências do app (tema, sons, lembretes).</li>
            </ul>

            <h2 className="text-2xl font-bold mt-8">4. Dados que podem ser retidos</h2>
            <p>
              Por obrigação legal e fiscal brasileira, podemos manter por até{' '}
              <strong>5 anos</strong> os seguintes registros, de forma desvinculada
              do seu perfil pessoal sempre que possível:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>
                Registros de compra e renovação da assinatura Pro (necessários
                para auditoria fiscal e atendimento ao Código de Defesa do
                Consumidor).
              </li>
              <li>
                Logs técnicos anônimos exigidos pelo Marco Civil da Internet
                (Lei 12.965/2014).
              </li>
            </ul>
            <p>
              Pagamentos são processados pela Google Play. Para cancelar uma
              assinatura ativa, acesse{' '}
              <a
                href="https://play.google.com/store/account/subscriptions"
                target="_blank"
                rel="noreferrer"
                className="text-brand font-semibold underline"
              >
                play.google.com/store/account/subscriptions
              </a>{' '}
              antes de pedir a exclusão da conta.
            </p>

            <h2 className="text-2xl font-bold mt-8">5. Dúvidas</h2>
            <p>
              Em caso de dúvidas sobre o processo, entre em contato pelo e-mail{' '}
              <a
                href={`mailto:${supportEmail}`}
                className="text-brand font-semibold underline"
              >
                {supportEmail}
              </a>
              . Saiba mais sobre como tratamos seus dados na nossa{' '}
              <a href="/privacidade" className="text-brand font-semibold underline">
                Política de Privacidade
              </a>
              .
            </p>
          </section>
        </article>
      </main>
      <Footer />
    </div>
  )
}
