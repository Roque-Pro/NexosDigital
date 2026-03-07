import { Button } from "@/components/ui/button";
import {
  ArrowRight,
  CheckCircle2,
  Users,
  TrendingUp,
  Clock,
  DollarSign,
  BarChart3,
  Zap,
  Lock,
  Star,
} from "lucide-react";
import { Link } from "react-router-dom";

const AutoClubProDetailedSection = () => {
  const mainBenefits = [
    {
      icon: TrendingUp,
      title: "+15-25% Faturamento",
      description: "Em apenas 3 meses de uso do sistema",
      metric: "Em 12 meses: 2-3x mais lucro",
    },
    {
      icon: Clock,
      title: "-30% Tempo Admin",
      description: "Automação de todos os processos",
      metric: "Trabalhe 30h/semana, não 50h",
    },
    {
      icon: Users,
      title: "Retenção +35%",
      description: "Clientes retornam mais vezes",
      metric: "De -3 clientes/mês para 0",
    },
    {
      icon: DollarSign,
      title: "Comissão Automática",
      description: "Sem brigas, sem confusão",
      metric: "Vendedores motivados, vendas +42%",
    },
  ];

  const whyChoose = [
    {
      icon: Users,
      title: "Criado para Seu Tipo de Negócio",
      description:
        "Não é um ERP genérico. AutoClub Pro foi feito ESPECIALMENTE para Oficinas, Auto Centers, Vidraçarias e Lojas de Acessórios.",
    },
    {
      icon: BarChart3,
      title: "Dashboard que Funciona",
      description:
        "Abra o painel e veja seu negócio inteiro em 10 segundos. Quanto vendeu, quem vendeu mais, o que vende mais.",
    },
    {
      icon: Zap,
      title: "Cloud - Sem TI",
      description:
        "Roda no navegador como Gmail. Nenhum técnico de TI precisa mexer. Backup automático, dados seguros na AWS.",
    },
    {
      icon: Lock,
      title: "Segurança Total",
      description:
        "Encriptado como banco, backup diário automático. Seus dados são o bem mais precioso.",
    },
  ];

  const quickStats = [
    { number: "2.347+", label: "Oficinas Ativas", color: "blue" },
    { number: "15.923", label: "Funcionários Gerenciam", color: "green" },
    { number: "428.491", label: "Clientes Históricos", color: "purple" },
    { number: "R$ 94M", label: "Vendas Processadas", color: "amber" },
  ];

  const painPoints = [
    {
      pain: "Clientes espalhados em anotações",
      solution: "Banco de dados centralizado com histórico completo",
    },
    {
      pain: "Não sabe qual vendedor vende mais",
      solution: "Dashboard mostra tudo: vendedor, produto, cliente, comissão",
    },
    {
      pain: "Estoque some sem explicação",
      solution: "Rastreamento 100% com histórico de movimentações",
    },
    {
      pain: "Comissão é briga toda semana",
      solution: "Cálculo automático, comprovante printável, fim de brigas",
    },
    {
      pain: "Agendamento virou bagunça",
      solution: "Clientes agendam online, recebem lembrete automática",
    },
    {
      pain: "Não sabe por que lucro cai",
      solution: "Relatórios completos em tempo real, dados para decidir",
    },
  ];

  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-slate-50 via-white to-blue-50 dark:from-slate-950 dark:via-slate-900 dark:to-blue-950/30">
      <div className="max-w-6xl mx-auto">
        {/* Top Badge */}
        <div className="text-center mb-12">
          <div className="inline-block bg-blue-100 dark:bg-blue-900/40 text-blue-700 dark:text-blue-300 px-4 py-2 rounded-full text-sm font-semibold border border-blue-200 dark:border-blue-800 mb-6">
            🚗 Novo: AutoClub Pro - Sistema de Gestão Inteligente
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold mb-4 text-slate-900 dark:text-white">
            Sua Oficina Merece Crescer com{" "}
            <span className="bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">
              Inteligência
            </span>
          </h2>
          <p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
            AutoClub Pro é o sistema completo que mais de{" "}
            <strong>2.347 oficinas</strong> usam para transformar seu negócio.
            Gestão de clientes, vendas, estoque, agendamentos e comissões —
            tudo automatizado.
          </p>
        </div>

        {/* Main Benefits Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {mainBenefits.map((benefit, idx) => {
            const IconComponent = benefit.icon;
            return (
              <div
                key={idx}
                className="group bg-white dark:bg-slate-900 p-6 rounded-xl border border-slate-200 dark:border-slate-800 hover:border-blue-500 dark:hover:border-blue-500 hover:shadow-lg transition-all"
              >
                <div className="mb-4 p-3 bg-gradient-to-br from-blue-100 to-cyan-100 dark:from-blue-900/30 dark:to-cyan-900/30 rounded-lg w-fit group-hover:scale-110 transition-transform">
                  <IconComponent className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">
                  {benefit.title}
                </h3>
                <p className="text-slate-600 dark:text-slate-400 text-sm mb-4">
                  {benefit.description}
                </p>
                <p className="text-sm font-semibold text-green-600 dark:text-green-400">
                  💡 {benefit.metric}
                </p>
              </div>
            );
          })}
        </div>

        {/* Problem-Solution Section */}
        <div className="mb-20">
          <h3 className="text-3xl font-bold text-center mb-2 text-slate-900 dark:text-white">
            Seus Principais Problemas. Resolvidos.
          </h3>
          <p className="text-center text-slate-600 dark:text-slate-400 mb-8 max-w-2xl mx-auto">
            Sem AutoClub Pro, você está deixando dinheiro na mesa. Veja como
            resolvemos cada um desses problemas:
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {painPoints.map((item, idx) => (
              <div
                key={idx}
                className="bg-white dark:bg-slate-900 p-6 rounded-lg border border-slate-200 dark:border-slate-800 hover:shadow-lg transition-all"
              >
                <div className="flex gap-3 mb-3">
                  <div className="text-red-500 text-xl flex-shrink-0">❌</div>
                  <p className="font-semibold text-slate-900 dark:text-white">
                    {item.pain}
                  </p>
                </div>
                <div className="flex gap-3 pl-0">
                  <div className="text-green-500 text-xl flex-shrink-0">✅</div>
                  <p className="text-sm text-slate-600 dark:text-slate-400">
                    {item.solution}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Why Choose Section */}
        <div className="mb-20">
          <h3 className="text-3xl font-bold text-center mb-12 text-slate-900 dark:text-white">
            Por Que AutoClub Pro é Diferente
          </h3>

          <div className="grid md:grid-cols-2 gap-8">
            {whyChoose.map((reason, idx) => {
              const IconComponent = reason.icon;
              return (
                <div
                  key={idx}
                  className="flex gap-4 bg-white dark:bg-slate-900 p-8 rounded-xl border border-slate-200 dark:border-slate-800"
                >
                  <div className="flex-shrink-0 mt-1">
                    <div className="flex items-center justify-center h-12 w-12 rounded-lg bg-gradient-to-br from-blue-100 to-cyan-100 dark:from-blue-900/30 dark:to-cyan-900/30">
                      <IconComponent className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                    </div>
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-slate-900 dark:text-white mb-2">
                      {reason.title}
                    </h4>
                    <p className="text-slate-600 dark:text-slate-400">
                      {reason.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Real Results */}
        <div className="mb-20">
          <h3 className="text-3xl font-bold text-center mb-2 text-slate-900 dark:text-white">
            Resultados Reais de Oficinas de Verdade
          </h3>
          <p className="text-center text-slate-600 dark:text-slate-400 mb-8">
            Oficinas como a sua já estão crescendo
          </p>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                name: "Oficina Mendes",
                city: "Recife, PE",
                quote: "De -R$3k/mês para +R$8k/mês em 2 meses",
                results: [
                  "Faturamento: +R$15.000/mês",
                  "Clientes recorrentes: +35%",
                  "Tempo admin: -40%",
                ],
              },
              {
                name: "Auto Center Pneus & CIA",
                city: "São Paulo, SP",
                quote: "Agendamento automático encheu minha agenda",
                results: [
                  "Clientes perdidos: 0/mês",
                  "Agendamentos: +45%",
                  "Fidelização: +55%",
                ],
              },
              {
                name: "Vidraçaria Santos",
                city: "Brasília, DF",
                quote: "Margem de lucro dobrou com dados corretos",
                results: [
                  "Margem: de 12% para 24%",
                  "Capital parado: -50%",
                  "Retorno cliente: +45%",
                ],
              },
            ].map((case_, idx) => (
              <div
                key={idx}
                className="bg-white dark:bg-slate-900 p-8 rounded-xl border-2 border-yellow-300 dark:border-yellow-600 shadow-lg"
              >
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-4 h-4 fill-yellow-400 text-yellow-400"
                    />
                  ))}
                </div>
                <p className="text-slate-700 dark:text-slate-300 italic mb-6 text-sm">
                  "{case_.quote}"
                </p>
                <h4 className="font-bold text-slate-900 dark:text-white">
                  {case_.name}
                </h4>
                <p className="text-sm text-slate-600 dark:text-slate-400 mb-4">
                  {case_.city}
                </p>
                <div className="space-y-2">
                  {case_.results.map((result, i) => (
                    <p
                      key={i}
                      className="text-sm text-green-600 dark:text-green-400 flex items-start gap-2"
                    >
                      <CheckCircle2 className="w-4 h-4 flex-shrink-0 mt-0.5" />
                      <span>{result}</span>
                    </p>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Social Proof Stats */}
        <div className="mb-20">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {quickStats.map((stat, idx) => (
              <div
                key={idx}
                className={`p-6 rounded-xl border-2 text-center ${
                  stat.color === "blue"
                    ? "bg-blue-50 dark:bg-blue-900/20 border-blue-300 dark:border-blue-700"
                    : stat.color === "green"
                      ? "bg-green-50 dark:bg-green-900/20 border-green-300 dark:border-green-700"
                      : stat.color === "purple"
                        ? "bg-purple-50 dark:bg-purple-900/20 border-purple-300 dark:border-purple-700"
                        : "bg-amber-50 dark:bg-amber-900/20 border-amber-300 dark:border-amber-700"
                }`}
              >
                <p
                  className={`text-3xl font-bold mb-1 ${
                    stat.color === "blue"
                      ? "text-blue-600 dark:text-blue-400"
                      : stat.color === "green"
                        ? "text-green-600 dark:text-green-400"
                        : stat.color === "purple"
                          ? "text-purple-600 dark:text-purple-400"
                          : "text-amber-600 dark:text-amber-400"
                  }`}
                >
                  {stat.number}
                </p>
                <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 font-semibold">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* The Math - ROI */}
        <div className="mb-20 bg-gradient-to-r from-blue-900 to-slate-900 text-white p-8 sm:p-12 rounded-2xl">
          <h3 className="text-2xl sm:text-3xl font-bold mb-8 text-center">
            A Matemática é Simples
          </h3>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white/10 p-6 rounded-lg backdrop-blur-sm border border-white/20">
              <h4 className="text-xl font-bold mb-4 flex items-center gap-2">
                <span>❌</span> Se você NÃO usar AutoClub Pro
              </h4>
              <ul className="space-y-3 text-blue-100">
                <li className="flex items-start gap-2">
                  <span className="text-red-400">•</span>
                  <span>Perde 2-3 clientes/mês = R$8.500+/mês</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-400">•</span>
                  <span>Trabalha 50h/semana</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-400">•</span>
                  <span>Margem 5-8% quando deveria ser 15-25%</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-400">•</span>
                  <span>Brigas sobre comissão toda semana</span>
                </li>
              </ul>
            </div>

            <div className="bg-green-500/20 p-6 rounded-lg backdrop-blur-sm border border-green-400/30">
              <h4 className="text-xl font-bold mb-4 flex items-center gap-2">
                <span>✅</span> Com AutoClub Pro (R$297/mês)
              </h4>
              <ul className="space-y-3 text-green-100">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 flex-shrink-0 text-green-400" />
                  <span>Retém clientes = Volta mais vezes</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 flex-shrink-0 text-green-400" />
                  <span>Trabalha 30h/semana</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 flex-shrink-0 text-green-400" />
                  <span>Margem real: 15-25%+</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 flex-shrink-0 text-green-400" />
                  <span>Comissão automática = Vendedor feliz</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="mt-8 p-6 bg-white/10 backdrop-blur-sm rounded-lg border border-white/20 text-center">
            <p className="text-lg font-semibold mb-2">
              Se você perde 1 cliente/mês (R$400-600/mês × 12 = R$4.800-7.200/ano):
            </p>
            <p className="text-3xl font-bold text-yellow-300">
              PERDER 1 CLIENTE = CUSTO DO SISTEMA × 8 ANOS
            </p>
            <p className="text-blue-200 mt-3">
              Você pode esperar perder mais um cliente essa semana? Ou entra agora?
            </p>
          </div>
        </div>

        {/* Big CTA Button */}
        <div className="mb-20">
          <div className="bg-white dark:bg-slate-900 border-2 border-blue-500 p-12 rounded-2xl shadow-2xl text-center">
            <h3 className="text-3xl sm:text-4xl font-bold mb-4 text-slate-900 dark:text-white">
              Pronto para Transformar Seu Negócio?
            </h3>
            <p className="text-lg text-slate-600 dark:text-slate-400 mb-8 max-w-2xl mx-auto">
              Comece agora com 30 dias de teste grátis. Sem cartão de crédito.
              Sem compromisso. Veja por si mesmo como AutoClub Pro funciona.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
              <Link to="/autoclub-pro">
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white text-lg px-10 py-7 font-bold shadow-lg"
                >
                  ⚡ COMEÇAR MEU TESTE GRÁTIS AGORA{" "}
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </Link>
              <Button
                size="lg"
                variant="outline"
                className="text-base px-10 py-7 border-2 border-slate-300 dark:border-slate-600"
              >
                📅 Agendar Demo (15 min)
              </Button>
            </div>

            <div className="flex flex-wrap justify-center gap-6 text-sm text-slate-600 dark:text-slate-400">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-green-600 dark:text-green-400" />
                <span>30 dias grátis</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-green-600 dark:text-green-400" />
                <span>Sem cartão</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-green-600 dark:text-green-400" />
                <span>Cancelar quando quiser</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom guarantee */}
        <div className="bg-slate-100 dark:bg-slate-800 p-8 rounded-xl text-center">
          <h4 className="text-lg font-bold mb-3 text-slate-900 dark:text-white">
            🏆 Garantia 100% de Satisfação
          </h4>
          <p className="text-slate-700 dark:text-slate-300 mb-4">
            Se em 30 dias você não registrar uma venda, não ver estoque
            atualizado ou não entender como usar...
          </p>
          <p className="text-xl font-bold text-green-600 dark:text-green-400">
            Seu dinheiro volta. Sem perguntas.
          </p>
          <p className="text-sm text-slate-600 dark:text-slate-400 mt-4">
            Porque estamos 100% confiantes que AutoClub Pro vai transformar seu
            negócio.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AutoClubProDetailedSection;
