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
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-slate-50 via-white to-blue-50 dark:from-slate-950 dark:via-slate-900 dark:to-blue-950/30">
      <div className="max-w-4xl mx-auto">
        {/* Top */}
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold mb-3 text-slate-900 dark:text-white">
            Sua Empresa Merece Crescer com <span className="bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">Inteligência</span>
          </h2>
          <p className="text-lg text-slate-600 dark:text-slate-400">
            AutoClub Pro: gestão de clientes, vendas, estoque e comissões automatizadas para oficinas, auto centers e vidraçarias.
          </p>
        </div>

        {/* CTA Button */}
        <div className="text-center">
          <Link 
            to="/autoclub-pro" 
            onClick={() => window.scrollTo({ top: 0, behavior: "instant" })}
          >
           <Button
             size="lg"
             className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white px-12 py-6 font-bold shadow-lg"
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
