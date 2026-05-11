import { Link } from 'react-router-dom'
import Navbar from '../components/Navbar.jsx'
import Footer from '../components/Footer.jsx'

export default function Termos() {
  const lastUpdate = '11 de maio de 2026'

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1 bg-page">
        <article className="max-w-3xl mx-auto px-6 lg:px-10 py-16">
          <p className="text-sm text-inkMuted">Última atualização: {lastUpdate}</p>
          <h1 className="text-4xl md:text-5xl font-extrabold text-ink mt-2 mb-6">
            Termos de Uso
          </h1>

          <div className="rounded-2xl border border-amber-300 bg-amber-50 p-5 mb-10">
            <p className="text-sm font-semibold text-amber-900 mb-1">
              Aviso importante
            </p>
            <p className="text-sm text-amber-900 leading-relaxed">
              O Motoriza é um aplicativo <strong>independente</strong> de estudo
              para a prova teórica da CNH. <strong>Não somos um programa oficial
              do Detran, do CONTRAN, do Denatran, do Ministério da Infraestrutura
              nem de qualquer órgão público</strong>. Não temos vínculo, parceria
              ou patrocínio com qualquer entidade governamental. Nossas questões
              são elaboradas com base em editais e materiais públicos e servem
              apenas como apoio de estudo — a prova oficial é aplicada
              exclusivamente pelo Detran do seu estado.
            </p>
          </div>

          <section className="prose-content space-y-6 text-ink leading-relaxed">
            <h2 className="text-2xl font-bold mt-8">1. Aceitação dos termos</h2>
            <p>
              Ao baixar, instalar, acessar ou utilizar o aplicativo Motoriza
              (“app”, “serviço”), você declara que leu, entendeu e concorda em se
              vincular a estes Termos de Uso. Se você não concorda com qualquer
              parte destes termos, não utilize o serviço.
            </p>

            <h2 className="text-2xl font-bold mt-8">2. Sobre o serviço</h2>
            <p>
              O Motoriza oferece simulados, trilhas de estudo, revisões e
              materiais para preparação à prova teórica da Carteira Nacional de
              Habilitação (CNH). O conteúdo é elaborado a partir de editais e
              fontes públicas e tem caráter exclusivamente educativo.
            </p>
            <p>
              Não garantimos aprovação na prova oficial. O resultado da sua prova
              depende exclusivamente do Detran do seu estado e do seu desempenho
              individual.
            </p>

            <h2 className="text-2xl font-bold mt-8">3. Conta de usuário</h2>
            <p>
              Para usar recursos como sincronização de progresso, você precisa
              criar uma conta com e-mail e senha ou usar login social (Google).
              Você é responsável por manter a confidencialidade da sua senha e
              por todas as atividades realizadas na sua conta.
            </p>

            <h2 className="text-2xl font-bold mt-8">4. Plano gratuito e premium</h2>
            <p>
              Parte do conteúdo é gratuita. Recursos premium podem ser oferecidos
              mediante assinatura ou pagamento único, com condições, preços e
              forma de cancelamento descritas no momento da compra. Pagamentos
              feitos pelas lojas (Google Play, App Store) seguem também as
              políticas dessas plataformas.
            </p>

            <h2 className="text-2xl font-bold mt-8">5. Uso permitido</h2>
            <p>
              Você concorda em não:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>
                copiar, redistribuir, vender ou licenciar o conteúdo do Motoriza
                sem autorização por escrito;
              </li>
              <li>
                tentar acessar áreas restritas, contas de outros usuários ou
                burlar mecanismos de segurança;
              </li>
              <li>
                usar o app para qualquer finalidade ilegal ou que viole direitos
                de terceiros;
              </li>
              <li>
                usar bots, scrapers ou automações para extrair conteúdo do app.
              </li>
            </ul>

            <h2 className="text-2xl font-bold mt-8">6. Propriedade intelectual</h2>
            <p>
              Todo o conteúdo do Motoriza — incluindo textos, questões, ilustrações,
              marca, logotipo e código — pertence aos seus titulares e é protegido
              por leis de direitos autorais. Você recebe apenas uma licença
              pessoal, limitada, não exclusiva e não transferível para uso do app.
            </p>

            <h2 className="text-2xl font-bold mt-8">7. Limitação de responsabilidade</h2>
            <p>
              O Motoriza é fornecido “como está”. Não nos responsabilizamos por:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>resultados específicos na prova oficial do Detran;</li>
              <li>indisponibilidades temporárias de servidores ou da internet;</li>
              <li>perda de dados causada por desinstalação, troca de dispositivo ou falhas externas;</li>
              <li>
                decisões tomadas pelo usuário com base no conteúdo do app — o app
                é apoio de estudo, não substitui aulas práticas, médico, psicólogo
                ou instrutor credenciado.
              </li>
            </ul>

            <h2 className="text-2xl font-bold mt-8">8. Alterações</h2>
            <p>
              Podemos atualizar estes termos para refletir mudanças no serviço ou
              na legislação. Quando houver alteração relevante, avisaremos pelo
              app ou pelo e-mail cadastrado. O uso continuado após a alteração
              significa concordância com a nova versão.
            </p>

            <h2 className="text-2xl font-bold mt-8">9. Encerramento</h2>
            <p>
              Você pode deletar sua conta a qualquer momento pelas configurações
              do app. Podemos suspender ou encerrar contas que violem estes
              termos.
            </p>

            <h2 className="text-2xl font-bold mt-8">10. Legislação aplicável</h2>
            <p>
              Estes termos são regidos pelas leis brasileiras. Eventuais
              controvérsias serão resolvidas no foro do domicílio do usuário,
              conforme o Código de Defesa do Consumidor.
            </p>

            <h2 className="text-2xl font-bold mt-8">11. Contato</h2>
            <p>
              Dúvidas, sugestões ou pedidos sobre estes termos:{' '}
              <a className="text-primary font-semibold" href="mailto:suporte@motorizacnh.com">
                suporte@motorizacnh.com
              </a>.
            </p>
          </section>

          <div className="mt-12 text-sm">
            <Link to="/privacidade" className="text-primary font-semibold hover:underline">
              Ver Política de Privacidade →
            </Link>
          </div>
        </article>
      </main>
      <Footer />
    </div>
  )
}
