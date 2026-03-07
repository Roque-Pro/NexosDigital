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
            🚗 Sistema Completo de Gestão
          </div>
        </div>

        {/* Main content */}
        <div className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 overflow-hidden shadow-xl">
          <div className="grid md:grid-cols-2 gap-0">
            {/* Left side - Content */}
            <div className="p-8 sm:p-12 flex flex-col justify-center">
              <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-slate-900 dark:text-white">
                Seu Negócio Merece Crescer com Inteligência
              </h2>
              <p className="text-slate-600 dark:text-slate-400 text-lg mb-8">
                AutoClub Pro é o sistema completo que mais de{" "}
                <strong>2.347 oficinas</strong> usam para ganhar mais em menos
                tempo. Gestão de clientes, vendas, estoque, agendamentos e
                comissões automáticas em uma só plataforma.
              </p>

              {/* Features list */}
              <div className="space-y-4 mb-8">
                <div className="flex items-start gap-3">
                  <div className="mt-1 p-2 bg-green-100 dark:bg-green-900/30 rounded">
                    <TrendingUp className="w-5 h-5 text-green-600 dark:text-green-400" />
                  </div>
                  <div>
                    <p className="font-semibold text-slate-900 dark:text-white">
                      +15-25% em Faturamento
                    </p>
                    <p className="text-sm text-slate-600 dark:text-slate-400">
                      Em apenas 3 meses de uso
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="mt-1 p-2 bg-green-100 dark:bg-green-900/30 rounded">
                    <Zap className="w-5 h-5 text-green-600 dark:text-green-400" />
                  </div>
                  <div>
                    <p className="font-semibold text-slate-900 dark:text-white">
                      30% Menos Tempo Admin
                    </p>
                    <p className="text-sm text-slate-600 dark:text-slate-400">
                      Automação completa de processos
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="mt-1 p-2 bg-green-100 dark:bg-green-900/30 rounded">
                    <DollarSign className="w-5 h-5 text-green-600 dark:text-green-400" />
                  </div>
                  <div>
                    <p className="font-semibold text-slate-900 dark:text-white">
                      R$ 297/mês
                    </p>
                    <p className="text-sm text-slate-600 dark:text-slate-400">
                      +30% de desconto essa semana
                    </p>
                  </div>
                </div>
              </div>

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
                ✅ 30 dias grátis • ✅ Sem cartão de crédito • ✅ Cancelar
                quando quiser
              </p>
            </div>

            {/* Right side - Image/Visual */}
            <div className="hidden md:flex items-center justify-center p-8 bg-gradient-to-br from-blue-100 dark:from-blue-900/30 to-cyan-100 dark:to-cyan-900/20">
              <div className="text-center">
                <div className="mb-6 inline-block p-4 bg-white dark:bg-slate-800 rounded-full shadow-lg">
                  <Zap className="w-12 h-12 text-blue-600 dark:text-blue-400" />
                </div>
                <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">
                  Dashboard Executivo
                </h3>
                <p className="text-slate-700 dark:text-slate-300 mb-6 max-w-sm">
                  Visualize seu negócio inteiro em um único painel. Vendas,
                  estoque, comissões e muito mais em tempo real.
                </p>

                {/* Stats */}
                <div className="space-y-3 bg-white/50 dark:bg-slate-800/50 p-4 rounded-lg backdrop-blur-sm">
                  <div className="text-sm">
                    <p className="text-xs text-slate-600 dark:text-slate-400 mb-1">
                      Vendas Hoje
                    </p>
                    <p className="text-2xl font-bold text-green-600 dark:text-green-400">
                      R$ 4.200
                    </p>
                  </div>
                  <div className="text-sm">
                    <p className="text-xs text-slate-600 dark:text-slate-400 mb-1">
                      Melhor Vendedor
                    </p>
                    <p className="text-lg font-bold text-slate-900 dark:text-white">
                      João (+35% vs média)
                    </p>
                  </div>
                  <div className="text-sm">
                    <p className="text-xs text-slate-600 dark:text-slate-400 mb-1">
                      Estoque Crítico
                    </p>
                    <p className="text-lg font-bold text-amber-600 dark:text-amber-400">
                      3 Itens
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Social proof */}
        <div className="mt-8 grid grid-cols-3 gap-4 text-center">
          <div className="p-4 bg-white dark:bg-slate-900 rounded-lg border border-slate-200 dark:border-slate-800">
            <p className="text-2xl sm:text-3xl font-bold text-blue-600 dark:text-blue-400">
              2.347
            </p>
            <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400">
              Oficinas Ativas
            </p>
          </div>
          <div className="p-4 bg-white dark:bg-slate-900 rounded-lg border border-slate-200 dark:border-slate-800">
            <p className="text-2xl sm:text-3xl font-bold text-blue-600 dark:text-blue-400">
              4.8★
            </p>
            <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400">
              1.293 Avaliações
            </p>
          </div>
          <div className="p-4 bg-white dark:bg-slate-900 rounded-lg border border-slate-200 dark:border-slate-800">
            <p className="text-2xl sm:text-3xl font-bold text-blue-600 dark:text-blue-400">
              R$ 94M
            </p>
            <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400">
              Vendas Processadas
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AutoClubProCTASection;
