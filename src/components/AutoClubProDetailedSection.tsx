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
          <h2 className="text-4xl sm:text-5xl font-bold mb-4 text-slate-900 dark:text-white">
            Sua Empresa de Reparos Automotivos Merece Crescer com{" "}
            <span className="bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">
              Inteligência
            </span>
          </h2>
          <p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
            AutoClub Pro: Sistema completo para <strong>oficinas mecânicas, auto centers, vidraçarias, pneuarias, pintura, funilaria e lojas de acessórios</strong>. Gestão de clientes, vendas, estoque, agendamentos e comissões — tudo automatizado.
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

          {/* CTA Button */}
          <div className="text-center mt-20">
          <Link 
            to="/autoclub-pro" 
            onClick={() => window.scrollTo({ top: 0, behavior: "instant" })}
          >
           <Button
             size="lg"
             className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white px-12 py-7 font-bold shadow-lg text-lg"
           >
             🚀 Conhecer o AutoClub Pro <ArrowRight className="ml-2 w-5 h-5" />
           </Button>
          </Link>
          </div>



      </div>
    </section>
  );
};

export default AutoClubProDetailedSection;
