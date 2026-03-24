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
            icon: Clock,
            title: "+35% Agendamentos",
            description: "Agenda online preenchida 90%+",
            metric: "De 60% para 95% de ocupação",
        },
        {
            icon: TrendingUp,
            title: "+15-25% Faturamento",
            description: "Em apenas 3 meses de uso",
            metric: "Em 12 meses: 2-3x mais lucro",
        },
        {
            icon: Users,
            title: "Retenção de Clientes +50%",
            description: "Agendamentos automáticos reduzem cancelamento",
            metric: "Clientes voltam repetidamente",
        },
        {
            icon: DollarSign,
            title: "Comissão Automática",
            description: "Cálculo diário, sem brigas",
            metric: "Vendedores/técnicos motivados, vendas +42%",
        },
    ];

    const whyChoose = [
        {
            icon: Users,
            title: "Feito para Serviços Automotivos",
            description:
                "Especializado em vidraçarias, estética, películas, som, capotaria, ar-condicionado e pneuarias. Cada ramo tem suas necessidades específicas de agendamento.",
        },
        {
            icon: BarChart3,
            title: "Dashboard com Métricas que Importam",
            description:
                "Veja ocupação de agenda, taxa de cancelamento, qual técnico é mais produtivo, qual serviço dá mais lucro. Dados para tomar decisões.",
        },
        {
            icon: Zap,
            title: "Cloud - Sem TI",
            description:
                "Roda no navegador como Gmail. Nenhum técnico de TI precisa. Backup automático, dados seguros em servidor profissional.",
        },
        {
            icon: Lock,
            title: "Segurança e Privacidade",
            description:
                "Encriptado, backup diário automático, LGPD compliant. Dados de cliente e histórico de vendas são ouro puro.",
        },
    ];

    const quickStats = [
        { number: "850+", label: "Negócios de Serviços", color: "blue" },
        { number: "12.500", label: "Profissionais Usam", color: "green" },
        { number: "380.000+", label: "Agendamentos/Mês", color: "purple" },
        { number: "R$ 120M+", label: "Faturamento Processado", color: "amber" },
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
                        Sua Agenda Merece Estar <span className="bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">Sempre Cheia</span>
                    </h2>
                    <p className="text-lg text-slate-600 dark:text-slate-400">
                        AutoClub Pro: agendamentos online 24/7, gestão de clientes, comissões automáticas para vidraçarias, estética, películas, som, capotaria, ar-condicionado e pneuarias.
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
