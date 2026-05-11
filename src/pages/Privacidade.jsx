import { Link } from 'react-router-dom'
import Navbar from '../components/Navbar.jsx'
import Footer from '../components/Footer.jsx'

export default function Privacidade() {
  const lastUpdate = '11 de maio de 2026'

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1 bg-page">
        <article className="max-w-3xl mx-auto px-6 lg:px-10 py-16">
          <p className="text-sm text-inkMuted">Última atualização: {lastUpdate}</p>
          <h1 className="text-4xl md:text-5xl font-extrabold text-ink mt-2 mb-6">
            Política de Privacidade
          </h1>

          <div className="rounded-2xl border border-amber-300 bg-amber-50 p-5 mb-10">
            <p className="text-sm font-semibold text-amber-900 mb-1">
              Aviso importante
            </p>
            <p className="text-sm text-amber-900 leading-relaxed">
              O Motoriza é um aplicativo <strong>independente</strong> de estudo
              para a prova teórica da CNH. <strong>Não somos um programa oficial
              do Detran, do CONTRAN, do Denatran nem de qualquer órgão público</strong>.
              Esta política descreve como tratamos os dados de quem usa nosso app
             , ela não se confunde com a política de privacidade do Detran ou
              de qualquer outro órgão governamental.
            </p>
          </div>

          <section className="prose-content space-y-6 text-ink leading-relaxed">
            <h2 className="text-2xl font-bold mt-8">1. Quem somos</h2>
            <p>
              “Motoriza” é o nome do aplicativo e marca operados pela equipe
              responsável pelo serviço (“nós”). Esta Política descreve quais
              dados pessoais coletamos, por que coletamos, como usamos, com quem
              compartilhamos e quais são os seus direitos como titular dos dados,
              em conformidade com a Lei Geral de Proteção de Dados (LGPD,
              Lei 13.709/2018).
            </p>

            <h2 className="text-2xl font-bold mt-8">2. Quais dados coletamos</h2>
            <p>
              Para que o app funcione, coletamos apenas o essencial:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>
                <strong>Dados de cadastro:</strong> nome (que você digita), e-mail
                e, opcionalmente, foto de perfil. Se você optar por login com
                Google, recebemos seu nome, e-mail e foto pública da conta Google.
              </li>
              <li>
                <strong>Dados de uso do app:</strong> tipo de CNH escolhido,
                progresso nas trilhas, questões respondidas, acertos e erros,
                XP/níveis e preferências de notificação. Esses dados ficam
                sincronizados com sua conta para você não perder o progresso ao
                trocar de celular.
              </li>
              <li>
                <strong>Dados técnicos:</strong> modelo do aparelho, sistema
                operacional, versão do app e identificadores anônimos usados pelo
                Firebase para garantir que o serviço funcione corretamente.
              </li>
            </ul>
            <p>
              Não coletamos CPF, RG, endereço residencial, dados bancários ou
              qualquer documento oficial. Pagamentos eventuais são processados
              diretamente pela Google Play ou App Store, não recebemos os dados
              do seu cartão.
            </p>

            <h2 className="text-2xl font-bold mt-8">3. Para que usamos seus dados</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>autenticar você e manter sua conta ativa;</li>
              <li>sincronizar seu progresso entre dispositivos;</li>
              <li>personalizar a trilha e a dificuldade das questões;</li>
              <li>enviar notificações de lembrete (somente se você autorizar);</li>
              <li>melhorar o app, corrigir bugs e priorizar funcionalidades;</li>
              <li>responder seus contatos enviados ao suporte.</li>
            </ul>

            <h2 className="text-2xl font-bold mt-8">4. Base legal (LGPD)</h2>
            <p>
              Tratamos seus dados com base em: (i) <em>execução de contrato</em>,
              para entregar o serviço que você contratou ao criar a conta; (ii)
              <em>consentimento</em>, para envio de notificações e comunicações
              opcionais; (iii) <em>legítimo interesse</em>, para análise de uso
              agregada e segurança da plataforma.
            </p>

            <h2 className="text-2xl font-bold mt-8">5. Compartilhamento</h2>
            <p>
              <strong>Não vendemos seus dados.</strong> Compartilhamos apenas com
              prestadores de serviço necessários ao funcionamento do app, como:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>
                <strong>Google Firebase</strong>, autenticação, banco de dados
                em nuvem (Firestore) e notificações;
              </li>
              <li>
                <strong>Google Play / Apple App Store</strong>, distribuição do
                app e, quando aplicável, processamento de assinaturas;
              </li>
              <li>
                <strong>Autoridades públicas</strong>, apenas mediante ordem
                judicial ou obrigação legal.
              </li>
            </ul>

            <h2 className="text-2xl font-bold mt-8">6. Armazenamento e segurança</h2>
            <p>
              Os dados ficam armazenados em servidores do Google Cloud (Firebase),
              com criptografia em trânsito (HTTPS/TLS) e controle de acesso por
              regras de segurança do Firestore. Mesmo assim, nenhum sistema é
              100% imune, recomendamos senha forte e não compartilhar suas
              credenciais.
            </p>

            <h2 className="text-2xl font-bold mt-8">7. Prazo de retenção</h2>
            <p>
              Mantemos seus dados enquanto sua conta estiver ativa. Quando você
              deleta a conta pelo próprio app, removemos os dados pessoais
              associados em até 30 dias, ressalvadas obrigações legais de
              guarda (ex.: registros de acesso por 6 meses, conforme Marco
              Civil da Internet).
            </p>

            <h2 className="text-2xl font-bold mt-8">8. Seus direitos</h2>
            <p>
              Pela LGPD, você pode a qualquer momento solicitar:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>confirmação da existência de tratamento;</li>
              <li>acesso aos seus dados;</li>
              <li>correção de dados incompletos, inexatos ou desatualizados;</li>
              <li>anonimização, bloqueio ou eliminação;</li>
              <li>portabilidade dos dados;</li>
              <li>revogação do consentimento.</li>
            </ul>
            <p>
              Para exercer qualquer um destes direitos, escreva para{' '}
              <a className="text-primary font-semibold" href="mailto:suporte@motorizacnh.com">
                suporte@motorizacnh.com
              </a>{' '}
              a partir do e-mail cadastrado na sua conta.
            </p>

            <h2 className="text-2xl font-bold mt-8">9. Crianças e adolescentes</h2>
            <p>
              O Motoriza é destinado a maiores de 18 anos (idade mínima para
              tirar a CNH no Brasil). Se você tem entre 16 e 18 anos e está
              tirando a Permissão para Dirigir, recomendamos uso com
              acompanhamento dos pais ou responsáveis.
            </p>

            <h2 className="text-2xl font-bold mt-8">10. Alterações nesta Política</h2>
            <p>
              Podemos atualizar esta Política. Avisaremos pelo app ou pelo e-mail
              cadastrado quando houver mudanças relevantes. A data no topo desta
              página indica a versão vigente.
            </p>

            <h2 className="text-2xl font-bold mt-8">11. Contato e encarregado (DPO)</h2>
            <p>
              Encarregado pelo tratamento de dados:{' '}
              <a className="text-primary font-semibold" href="mailto:suporte@motorizacnh.com">
                suporte@motorizacnh.com
              </a>.
            </p>
          </section>

          <div className="mt-12 text-sm">
            <Link to="/termos" className="text-primary font-semibold hover:underline">
              Ver Termos de Uso →
            </Link>
          </div>
        </article>
      </main>
      <Footer />
    </div>
  )
}
