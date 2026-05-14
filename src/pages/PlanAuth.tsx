import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import {
  ArrowRight,
  CheckCircle2,
  Clock3,
  Gift,
  Lock,
  MessageSquareMore,
  Rocket,
  Search,
  ShieldCheck,
  Target,
  TrendingUp,
  Workflow,
  Code2,
  Menu,
  X,
} from "lucide-react";

import { supabase } from "@/integrations/supabase/client";
import { useAuth } from "@/hooks/useAuth";
import { useSEO } from "@/hooks/useSEO";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";

import diagnosticoHeroMan from "@/img/diagnostico-hero-man.jpg";

const highlights = [
  {
    icon: Clock3,
    title: "Rápido",
    description: "Leva menos de 2 minutos",
  },
  {
    icon: CheckCircle2,
    title: "Gratuito",
    description: "100% gratuito e sem compromisso",
  },
  {
    icon: Lock,
    title: "Seguro",
    description: "Seus dados estão protegidos",
  },
];

const diagnosisPoints = [
  {
    icon: Target,
    title: "Como atrair mais clientes com anúncios",
    description:
      "Analisamos suas campanhas e estratégias para trazer as pessoas certas até você.",
  },
  {
    icon: MessageSquareMore,
    title: "Onde sua empresa perde contatos",
    description:
      "Descubra falhas no atendimento que fazem você perder vendas todos os dias.",
  },
  {
    icon: Workflow,
    title: "O que pode ser automatizado",
    description:
      "Identificamos tarefas e processos que podem ser automatizados para você ganhar tempo e vender mais.",
  },
  {
    icon: TrendingUp,
    title: "Onde você está desperdiçando dinheiro",
    description:
      "Encontramos gargalos e investimentos que não estão trazendo retorno.",
  },
  {
    icon: Rocket,
    title: "Como transformar interesse em cliente",
    description:
      "Avaliamos seu funil de vendas e mostramos onde estão as oportunidades de fechamento.",
  },
];

const businessTypes = [
  { value: "", label: "Ex: Clínica, Restaurante, Loja, Serviços..." },
  { value: "clinica", label: "Clínica / Saúde" },
  { value: "restaurante", label: "Restaurante / Alimentação" },
  { value: "loja", label: "Loja / Varejo" },
  { value: "servicos", label: "Prestação de serviços" },
  { value: "industria", label: "Indústria / Distribuição" },
  { value: "outro", label: "Outro tipo de negócio" },
];

const PlanAuth = () => {
  const navigate = useNavigate();
  const { loading } = useAuth();
  const { toast } = useToast();

  const [submitting, setSubmitting] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useSEO({
    title:
      "Diagnóstico Gratuito | Descubra onde sua empresa perde clientes e dinheiro",
    description:
      "Receba um diagnóstico gratuito e descubra onde sua empresa perde clientes, desperdiça dinheiro e deixa oportunidades passarem.",
  });

  const [diagnosticData, setDiagnosticData] = useState({
    diagnosticName: "",
    diagnosticPhone: "",
    diagnosticCompany: "",
    diagnosticArea: "",
    diagnosticDescription: "",
  });

  if (loading) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-[#06121f]">
        <div className="h-12 w-12 animate-spin rounded-full border-4 border-[#f6bf22] border-t-transparent" />
      </div>
    );
  }

  const handleDiagnosticSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    setSubmitting(true);

    try {
      if (
        !diagnosticData.diagnosticName ||
        !diagnosticData.diagnosticPhone ||
        !diagnosticData.diagnosticArea ||
        !diagnosticData.diagnosticDescription
      ) {
        throw new Error("Preencha todos os campos obrigatórios.");
      }

      const { error } = await supabase.from("diagnostics").insert({
        name: diagnosticData.diagnosticName,
        phone: diagnosticData.diagnosticPhone,
        company: diagnosticData.diagnosticCompany || null,
        area: diagnosticData.diagnosticArea,
        description: diagnosticData.diagnosticDescription,
        created_at: new Date().toISOString(),
      });

      if (error) throw error;

      toast({
        title: "Diagnóstico enviado!",
        description: "Recebemos seus dados e vamos analisar sua empresa.",
      });

      setDiagnosticData({
        diagnosticName: "",
        diagnosticPhone: "",
        diagnosticCompany: "",
        diagnosticArea: "",
        diagnosticDescription: "",
      });
    } catch (error: any) {
      toast({
        title: "Erro ao enviar",
        description: error.message || "Tente novamente.",
        variant: "destructive",
      });
    } finally {
      setSubmitting(false);
    }
  };

  const scrollToForm = () => {
    document
      .getElementById("diagnostic-form")
      ?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="min-h-screen w-full overflow-x-hidden bg-white text-slate-900">
      <style>{`
        * {
          box-sizing: border-box;
        }

        html,
        body,
        #root {
          width: 100%;
          max-width: 100%;
          overflow-x: hidden;
          margin: 0;
          padding: 0;
        }

        img,
        svg,
        video,
        canvas {
          max-width: 100%;
          height: auto;
        }
      `}</style>

      <header className="fixed left-0 right-0 top-0 z-50 border-b border-slate-100 bg-white/90 backdrop-blur-md">
        <div className="mx-auto flex w-full max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
          <button
            onClick={() => navigate("/")}
            className="flex min-w-0 items-center gap-2"
          >
            <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-xl bg-blue-600">
              <Code2 className="h-6 w-6 text-white" />
            </div>

            <h1 className="truncate text-lg font-black tracking-tight sm:text-xl">
              TechNexos
              <span className="text-blue-600">Digital</span>
            </h1>
          </button>

          <nav className="hidden items-center gap-8 md:flex">
            <button
              onClick={() => navigate("/")}
              className="text-sm font-bold text-slate-600 hover:text-blue-600"
            >
              Página Principal
            </button>

            <button
              onClick={() => navigate("/about-me")}
              className="text-sm font-bold text-slate-600 hover:text-blue-600"
            >
              Especialista
            </button>

            <button
              onClick={() => navigate("/autoclub-pro")}
              className="text-sm font-bold text-slate-600 hover:text-blue-600"
            >
              AutoClub Pro
            </button>
          </nav>

          <button
            className="p-2 md:hidden"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X /> : <Menu />}
          </button>
        </div>

        {mobileMenuOpen && (
          <div className="w-full border-t border-slate-100 bg-white p-4 md:hidden">
            <div className="flex flex-col gap-3">
              <button
                onClick={() => navigate("/")}
                className="rounded-lg p-3 text-left font-bold text-slate-700"
              >
                Página Principal
              </button>

              <button
                onClick={() => navigate("/about-me")}
                className="rounded-lg p-3 text-left font-bold text-slate-700"
              >
                Especialista
              </button>

              <button
                onClick={() => navigate("/autoclub-pro")}
                className="rounded-lg p-3 text-left font-bold text-slate-700"
              >
                AutoClub Pro
              </button>
            </div>
          </div>
        )}
      </header>

      <section className="relative overflow-hidden bg-[#06121f] pt-28 text-white">
        <div className="mx-auto grid w-full max-w-7xl gap-10 px-4 pb-14 sm:px-6 lg:grid-cols-2 lg:px-8">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="min-w-0"
          >
            <div className="flex flex-wrap items-center gap-3">
              <span className="break-words text-3xl font-black sm:text-5xl">
                TechNexos
              </span>

              <Search className="h-8 w-8 text-[#f6bf22]" />
            </div>

            <p className="mt-2 text-sm uppercase tracking-[0.2em] text-white/80">
              Automação • Tráfego • Resultados
            </p>

            <h1 className="mt-8 break-words text-4xl font-black leading-tight sm:text-5xl lg:text-6xl">
              Descubra onde sua empresa está{" "}
              <span className="text-[#f6bf22]">
                perdendo clientes e dinheiro
              </span>
            </h1>

            <p className="mt-8 max-w-2xl break-words text-lg leading-relaxed text-white/90 sm:text-xl">
              Em menos de 2 minutos, você recebe um diagnóstico gratuito com
              oportunidades reais para atrair mais clientes e aumentar seu
              faturamento.
            </p>

            <div className="mt-10 grid gap-4 sm:grid-cols-3">
              {highlights.map(({ icon: Icon, title, description }) => (
                <div
                  key={title}
                  className="rounded-2xl border border-white/10 bg-white/5 p-4"
                >
                  <Icon className="mb-4 h-8 w-8 text-[#f6bf22]" />

                  <p className="text-lg font-bold">{title}</p>

                  <p className="mt-1 text-sm text-white/80">
                    {description}
                  </p>
                </div>
              ))}
            </div>

            <Button
              onClick={scrollToForm}
              className="mt-8 h-14 w-full rounded-xl bg-[#f6bf22] text-base font-black text-[#08111d] hover:bg-[#ffd24d] sm:w-auto sm:px-10"
            >
              Receber diagnóstico gratuito
            </Button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="flex items-center justify-center"
          >
            <img
              src={diagnosticoHeroMan}
              alt="Diagnóstico empresarial"
              className="w-full max-w-[520px] rounded-[28px] object-cover shadow-2xl"
            />
          </motion.div>
        </div>
      </section>

      <section className="bg-white px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="mx-auto max-w-4xl text-center">
            <h2 className="break-words text-3xl font-black leading-tight text-[#0b1320] sm:text-5xl">
              Seu diagnóstico analisa{" "}
              <span className="text-[#1a64d6]">
                5 pontos-chave
              </span>
            </h2>

            <p className="mt-4 text-lg text-slate-700 sm:text-2xl">
              que podem estar travando o crescimento da sua empresa.
            </p>
          </div>

          <div className="mt-14 grid gap-6 md:grid-cols-2 xl:grid-cols-5">
            {diagnosisPoints.map(({ icon: Icon, title, description }, index) => (
              <div
                key={title}
                className="rounded-[28px] border border-slate-200 bg-white p-6 shadow-sm"
              >
                <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-full bg-[#1a64d6] text-white">
                  {index + 1}
                </div>

                <Icon className="mb-6 h-10 w-10 text-[#071524]" />

                <h3 className="break-words text-xl font-black leading-snug text-[#0b1320]">
                  {title}
                </h3>

                <p className="mt-4 break-words text-base leading-7 text-slate-600">
                  {description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section
        id="diagnostic-form"
        className="overflow-hidden bg-[#f4f6fb] px-4 py-16 sm:px-6 lg:px-8"
      >
        <div className="mx-auto grid w-full max-w-7xl gap-10 lg:grid-cols-2">
          <div className="min-w-0">
            <div className="border-l-4 border-[#f6bf22] pl-5">
              <h2 className="break-words text-3xl font-black leading-tight text-[#0b1320] sm:text-5xl">
                Vamos descobrir juntos?
              </h2>

              <p className="mt-5 break-words text-lg leading-8 text-slate-700 sm:text-xl">
                Preencha os dados ao lado e receba seu diagnóstico
                personalizado com insights práticos para sua empresa vender
                mais e crescer de verdade.
              </p>
            </div>

            <div className="mt-10 rounded-[26px] bg-white p-6 shadow-lg">
              <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
                <div className="flex h-16 w-16 flex-shrink-0 items-center justify-center rounded-full bg-[#08111d]">
                  <Gift className="h-8 w-8 text-[#f6bf22]" />
                </div>

                <p className="break-words text-lg leading-8 text-slate-700">
                  Seu diagnóstico é 100% gratuito e feito sob medida para a
                  realidade do seu negócio.
                </p>
              </div>
            </div>

            <p className="mt-8 break-words text-center text-2xl italic text-[#1f4ea6] sm:text-3xl">
              Menos achismo, mais resultado.
            </p>
          </div>

          <div className="w-full min-w-0 rounded-[30px] bg-white p-5 shadow-xl sm:p-8 lg:p-10">
            <h3 className="break-words text-center text-2xl font-black text-[#0b1320] sm:text-3xl">
              Receber meu diagnóstico gratuito
            </h3>

            <form
              onSubmit={handleDiagnosticSubmit}
              className="mt-8 space-y-5"
            >
              <div className="space-y-2">
                <Label htmlFor="diagnosticName">
                  Nome completo
                </Label>

                <Input
                  id="diagnosticName"
                  value={diagnosticData.diagnosticName}
                  onChange={(e) =>
                    setDiagnosticData({
                      ...diagnosticData,
                      diagnosticName: e.target.value,
                    })
                  }
                  placeholder="Digite seu nome"
                  className="h-14 w-full"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="diagnosticPhone">
                  Seu WhatsApp
                </Label>

                <Input
                  id="diagnosticPhone"
                  value={diagnosticData.diagnosticPhone}
                  onChange={(e) =>
                    setDiagnosticData({
                      ...diagnosticData,
                      diagnosticPhone: e.target.value,
                    })
                  }
                  placeholder="(00) 00000-0000"
                  className="h-14 w-full"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="diagnosticCompany">
                  Nome da empresa
                </Label>

                <Input
                  id="diagnosticCompany"
                  value={diagnosticData.diagnosticCompany}
                  onChange={(e) =>
                    setDiagnosticData({
                      ...diagnosticData,
                      diagnosticCompany: e.target.value,
                    })
                  }
                  placeholder="Nome da empresa"
                  className="h-14 w-full"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="diagnosticArea">
                  Qual o seu tipo de negócio?
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
                  className="h-14 w-full rounded-xl border border-slate-300 px-4"
                >
                  {businessTypes.map((option) => (
                    <option
                      key={option.value || "placeholder"}
                      value={option.value}
                    >
                      {option.label}
                    </option>
                  ))}
                </select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="diagnosticDescription">
                  Qual sua principal dificuldade hoje?
                </Label>

                <textarea
                  id="diagnosticDescription"
                  value={diagnosticData.diagnosticDescription}
                  onChange={(e) =>
                    setDiagnosticData({
                      ...diagnosticData,
                      diagnosticDescription: e.target.value,
                    })
                  }
                  placeholder="Poucos clientes, vendas baixas..."
                  className="min-h-[140px] w-full rounded-xl border border-slate-300 px-4 py-3"
                />
              </div>

              <Button
                type="submit"
                disabled={submitting}
                className="h-16 w-full rounded-xl bg-[#f6bf22] text-base font-black text-[#08111d] hover:bg-[#ffd24d] sm:text-lg"
              >
                {submitting
                  ? "Enviando diagnóstico..."
                  : "RECEBER DIAGNÓSTICO GRATUITO"}
              </Button>

              <div className="flex flex-wrap items-center justify-center gap-2 text-center text-sm text-slate-500">
                <ShieldCheck className="h-4 w-4 flex-shrink-0" />

                <span className="break-words">
                  Seus dados estão protegidos. Não enviamos spam.
                </span>
              </div>
            </form>
          </div>
        </div>
      </section>

      <section className="overflow-hidden bg-[#071524] px-4 py-14 text-white sm:px-6 lg:px-8">
        <div className="mx-auto flex max-w-7xl flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
          <div className="flex flex-col gap-5 sm:flex-row sm:items-center">
            <div className="flex h-16 w-16 flex-shrink-0 items-center justify-center rounded-full border border-[#f6bf22]">
              <Rocket className="h-8 w-8 text-[#f6bf22]" />
            </div>

            <p className="max-w-2xl break-words text-xl font-bold leading-relaxed sm:text-2xl">
              Você pode estar deixando dinheiro na mesa sem perceber.
              <span className="text-[#f6bf22]">
                {" "}
                Descubra agora.
              </span>
            </p>
          </div>

          <ArrowRight className="hidden h-10 w-10 text-[#f6bf22] lg:block" />

          <p className="max-w-xl break-words text-xl leading-relaxed text-white/90 sm:text-2xl">
            Comece agora e veja o que sua empresa pode estar perdendo todos os dias.
          </p>
        </div>
      </section>
    </div>
  );
};

export default PlanAuth;
