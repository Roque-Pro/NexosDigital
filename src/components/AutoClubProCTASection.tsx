import { Button } from "@/components/ui/button";
import { ArrowRight, Zap, TrendingUp, DollarSign } from "lucide-react";
import { Link } from "react-router-dom";

const AutoClubProCTASection = () => {
    return (
        <section className="relative py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
            {/* Background decorations */}
            <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-slate-50 dark:from-blue-950/30 dark:to-slate-950/30 pointer-events-none" />
            <div className="absolute top-20 right-0 w-72 h-72 bg-blue-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 dark:opacity-10 pointer-events-none" />
            <div className="absolute -bottom-8 left-20 w-72 h-72 bg-cyan-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 dark:opacity-10 pointer-events-none" />

            <div className="relative max-w-5xl mx-auto">
                {/* Top badge */}
                <div className="text-center mb-8">
                    <div className="inline-block bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 px-4 py-2 rounded-full text-sm font-semibold mb-4">
                        📅 Agendamentos Online 24/7
                    </div>
                </div>

                {/* Main content */}
                <div className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 overflow-hidden shadow-xl p-8 sm:p-12">
                    <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-slate-900 dark:text-white">
                        Sua Agenda Sempre Cheia, Seu Lucro Decolando
                    </h2>
                    <p className="text-slate-600 dark:text-slate-400 text-lg mb-8">
                        AutoClub Pro: agendamentos online, gestão de clientes, comissões automáticas para vidraçarias, estética, películas, som, capotaria, ar-condicionado e pneuarias. Mais de <strong>850 negócios de serviços</strong> já usam.
                    </p>

                    {/* CTA Buttons */}
                    <div className="flex flex-col sm:flex-row gap-4">
                        <Link to="/autoclub-pro" className="flex-1">
                            <Button
                                size="lg"
                                className="w-full bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white"
                            >
                                Conhecer AutoClub Pro <ArrowRight className="ml-2 w-4 h-4" />
                            </Button>
                        </Link>
                        <Button
                            size="lg"
                            variant="outline"
                            className="flex-1 border-blue-300 text-blue-600 dark:text-blue-400 hover:bg-blue-50 dark:hover:bg-blue-900/20"
                        >
                            Agendar Demo
                        </Button>
                    </div>

                    <p className="text-xs text-slate-600 dark:text-slate-400 mt-4">
                        ✅ 30 dias grátis • ✅ Sem cartão de crédito
                    </p>
                </div>
            </div>
        </section>
    );
};

export default AutoClubProCTASection;
