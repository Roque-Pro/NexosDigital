import { useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import { Code2, AlertCircle, ArrowLeft as ArrowLeftIcon, CheckCircle, Zap, Target, Clock } from "lucide-react";
import { motion } from "framer-motion";
import { supabase } from "@/integrations/supabase/client";
import { useAuth } from "@/hooks/useAuth";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";

const PlanAuth = () => {
  const navigate = useNavigate();
  const { session, loading } = useAuth();
  const { toast } = useToast();
  const [submitting, setSubmitting] = useState(false);
  const [diagnosticData, setDiagnosticData] = useState({
    diagnosticName: "",
    diagnosticPhone: "",
    diagnosticCompany: "",
    diagnosticArea: "",
    diagnosticDescription: "",
  });

  if (loading) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-purple-500 to-purple-700 flex items-center justify-center shadow-lg shadow-purple-500/50 animate-pulse">
          <Code2 className="w-6 h-6 text-white" />
        </div>
      </div>
    );
  }

  if (session) {
    return <Navigate to="/client-dashboard" replace />;
  }

  const handleDiagnosticSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);

    try {
      // Validar campos obrigatórios
      if (!diagnosticData.diagnosticName || !diagnosticData.diagnosticPhone || !diagnosticData.diagnosticArea || !diagnosticData.diagnosticDescription) {
        throw new Error("Por favor, preencha todos os campos obrigatórios.");
      }

      // Salvar dados do diagnóstico no Supabase
      const { data, error } = await supabase
        .from("diagnostics")
        .insert({
          name: diagnosticData.diagnosticName,
          phone: diagnosticData.diagnosticPhone,
          company: diagnosticData.diagnosticCompany || null,
          area: diagnosticData.diagnosticArea,
          description: diagnosticData.diagnosticDescription,
          created_at: new Date().toISOString(),
        });

      if (error) throw error;

      toast({
        title: "Diagnóstico Enviado com Sucesso!",
        description: "Vamos analisar suas informações e entraremos em contato em breve.",
      });

      // Limpar formulário e voltar para home após 2 segundos
      setTimeout(() => {
        navigate("/");
      }, 2000);
    } catch (error: any) {
      toast({
        title: "Erro",
        description: error.message || "Ocorreu um erro ao enviar o diagnóstico. Tente novamente.",
        variant: "destructive",
      });
    } finally {
      setSubmitting(false);
    }
  };

  const scrollToForm = () => {
    const formElement = document.getElementById("diagnostic-form");
    formElement?.scrollIntoView({ behavior: "smooth" });
  };

  const benefits = [
    {
      icon: Target,
      title: "Análise do gargalo operacional",
      description: "Identificamos exatamente onde você está perdendo tempo e dinheiro"
    },
    {
      icon: Zap,
      title: "Solução personalizada",
      description: "Sugestão de tecnologia adequada para seu cenário específico"
    },
    {
      icon: Clock,
      title: "Estimativa de investimento",
      description: "Você saberá o custo e tempo para implementação"
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 via-white to-gray-50">
      {/* Botão Voltar */}
      <button
        onClick={() => navigate("/")}
        className="fixed top-6 left-6 z-50 flex items-center gap-2 text-gray-600 hover:text-purple-600 transition-colors"
      >
        <ArrowLeftIcon className="w-5 h-5" />
        <span className="text-sm font-medium">Voltar</span>
      </button>

      {/* HERO SECTION */}
      <section className="relative pt-32 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl sm:text-5xl md:text-6xl font-display font-black text-gray-900 mb-6 leading-tight"
          >
            Descubra onde sua empresa está{" "}
            <span className="bg-gradient-to-r from-purple-500 to-purple-700 bg-clip-text text-transparent">
              perdendo tempo e dinheiro
            </span>
            <br />
            com processos manuais
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl text-gray-600 mb-10 leading-relaxed"
          >
            Eu analiso seu cenário e mostro como a automação pode organizar, acelerar e estruturar sua operação.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <Button
              onClick={scrollToForm}
              size="lg"
              className="bg-gradient-to-r from-purple-500 to-purple-700 hover:from-purple-600 hover:to-purple-800 text-white font-bold px-8 py-6 text-lg"
            >
              🔎 Solicitar Diagnóstico
            </Button>
          </motion.div>
        </div>
      </section>

      {/* AUTORIDADE SECTION */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="flex flex-col sm:flex-row items-center gap-8 bg-white rounded-2xl p-8 shadow-lg border border-purple-100/50"
          >
            {/* Foto */}
            <div className="flex-shrink-0">
              <div className="w-24 h-24 rounded-full bg-gradient-to-br from-purple-500 to-purple-700 flex items-center justify-center shadow-lg">
                <Code2 className="w-12 h-12 text-white" />
              </div>
            </div>

            {/* Texto */}
            <div>
              <h3 className="text-2xl font-display font-bold text-gray-900 mb-2">
                Roque Rafael
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Sou especialista em automação e desenvolvimento de sistemas sob medida. Ajudo empresas a transformar processos desorganizados em fluxos estruturados e previsíveis.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* O QUE VOCÊ VAI RECEBER */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-4xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-3xl sm:text-4xl font-display font-bold text-gray-900 text-center mb-12"
          >
            O que você vai receber
          </motion.h2>

          <div className="grid sm:grid-cols-3 gap-6">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-xl p-6 border border-purple-100/50"
              >
                <benefit.icon className="w-10 h-10 text-purple-600 mb-4" />
                <h3 className="text-lg font-display font-bold text-gray-900 mb-2">
                  {benefit.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {benefit.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* MENSAGEM MOTIVACIONAL */}
      <section className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-lg text-gray-700 italic border-l-4 border-purple-500 pl-6"
          >
            "Empresas que estruturam seus processos crescem com previsibilidade. As que improvisam vivem apagando incêndio."
          </motion.p>
        </div>
      </section>

      {/* FORMULÁRIO */}
      <section id="diagnostic-form" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-2xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="bg-white rounded-2xl p-8 sm:p-10 shadow-xl border border-purple-100"
          >
            {/* Header do Formulário */}
            <div className="flex items-center gap-3 mb-8">
              <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-purple-500 to-purple-700 flex items-center justify-center">
                <AlertCircle className="w-6 h-6 text-white" />
              </div>
              <div>
                <h2 className="text-2xl sm:text-3xl font-display font-bold text-gray-900">
                  Solicite seu Diagnóstico Estratégico
                </h2>
              </div>
            </div>

            <p className="text-gray-600 mb-8 text-lg">
              Preencha as informações abaixo. Leva menos de 2 minutos.
            </p>

            <form onSubmit={handleDiagnosticSubmit} className="space-y-5">
              {/* Nome */}
              <div className="space-y-2">
                <Label htmlFor="diagnosticName" className="font-semibold text-gray-900">
                  Seu nome *
                </Label>
                <Input
                  id="diagnosticName"
                  placeholder="Seu nome"
                  value={diagnosticData.diagnosticName}
                  onChange={(e) =>
                    setDiagnosticData({
                      ...diagnosticData,
                      diagnosticName: e.target.value,
                    })
                  }
                  required
                  className="border-gray-300"
                />
              </div>

              {/* WhatsApp */}
              <div className="space-y-2">
                <Label htmlFor="diagnosticPhone" className="font-semibold text-gray-900">
                  Seu melhor WhatsApp *
                </Label>
                <Input
                  id="diagnosticPhone"
                  placeholder="(32) 99107-5164"
                  value={diagnosticData.diagnosticPhone}
                  onChange={(e) =>
                    setDiagnosticData({
                      ...diagnosticData,
                      diagnosticPhone: e.target.value,
                    })
                  }
                  required
                  className="border-gray-300"
                />
              </div>

              {/* Empresa */}
              <div className="space-y-2">
                <Label htmlFor="diagnosticCompany" className="font-semibold text-gray-900">
                  Nome da empresa <span className="text-gray-400">(opcional)</span>
                </Label>
                <Input
                  id="diagnosticCompany"
                  placeholder="Nome da sua empresa"
                  value={diagnosticData.diagnosticCompany}
                  onChange={(e) =>
                    setDiagnosticData({
                      ...diagnosticData,
                      diagnosticCompany: e.target.value,
                    })
                  }
                  className="border-gray-300"
                />
              </div>

              {/* Área */}
              <div className="space-y-2">
                <Label htmlFor="diagnosticArea" className="font-semibold text-gray-900">
                  Área onde sente maior dificuldade *
                </Label>
                <select
                  id="diagnosticArea"
                  value={diagnosticData.diagnosticArea}
                  onChange={(e) =>
                    setDiagnosticData({
                      ...diagnosticData,
                      diagnosticArea: e.target.value,
                    })
                  }
                  required
                  className="w-full px-4 py-2 rounded-lg border border-gray-300 bg-white text-gray-900 font-medium focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                >
                  <option value="">Selecione uma opção</option>
                  <option value="vendas">Vendas</option>
                  <option value="atendimento">Atendimento</option>
                  <option value="financeiro">Financeiro</option>
                  <option value="operacional">Operacional</option>
                  <option value="gestao">Gestão</option>
                  <option value="outro">Outro</option>
                </select>
              </div>

              {/* Descrição */}
              <div className="space-y-2">
                <Label htmlFor="diagnosticDescription" className="font-semibold text-gray-900">
                  O que hoje mais atrasa ou desorganiza sua empresa? *
                </Label>
                <textarea
                  id="diagnosticDescription"
                  placeholder="Ex: controle manual em planilhas, retrabalho, falta de integração, demora no atendimento..."
                  value={diagnosticData.diagnosticDescription}
                  onChange={(e) =>
                    setDiagnosticData({
                      ...diagnosticData,
                      diagnosticDescription: e.target.value,
                    })
                  }
                  required
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 bg-white text-gray-900 font-medium focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent min-h-24 resize-none"
                />
              </div>

              {/* Botão */}
              <Button
                type="submit"
                className="w-full bg-gradient-to-r from-purple-500 to-purple-700 hover:from-purple-600 hover:to-purple-800 text-white font-bold py-3 text-lg mt-8"
                disabled={submitting}
              >
                {submitting ? "Enviando..." : "Solicitar Diagnóstico"}
              </Button>
            </form>

            {/* O que acontece depois */}
            <div className="mt-10 pt-8 border-t border-gray-200">
              <h3 className="font-display font-bold text-gray-900 mb-4">
                Após o envio:
              </h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-purple-600 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700"><strong>Sua solicitação será analisada</strong> em detalhes</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-purple-600 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700"><strong>Você receberá uma estimativa inicial</strong> do investimento</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-purple-600 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700"><strong>Entrarei em contato</strong> para validar os detalhes</span>
                </li>
              </ul>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer CTA */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-2xl font-display font-bold text-gray-900 mb-4">
            Pronto para transformar sua empresa?
          </h2>
          <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
            Deixe-me analisar seu cenário e mostrar o caminho para organização, controle e crescimento previsível.
          </p>
          <Button
            onClick={scrollToForm}
            size="lg"
            className="bg-gradient-to-r from-purple-500 to-purple-700 hover:from-purple-600 hover:to-purple-800 text-white font-bold"
          >
            Solicitar Diagnóstico
          </Button>
        </motion.div>
      </section>
    </div>
  );
};

export default PlanAuth;
