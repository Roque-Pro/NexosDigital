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
    title: "Diagnóstico Gratuito para descobrir onde sua empresa perde clientes",
    description:
      "Em menos de 2 minutos, você recebe um diagnóstico gratuito com oportunidades reais para atrair mais clientes e aumentar seu faturamento.",
    keywords: [
      "diagnóstico gratuito",
      "diagnóstico de vendas",
      "atrair clientes",
      "converter leads",
      "automação comercial",
      "faturamento empresarial",
      "processo comercial",
      "gargalos de vendas",
    ],
    ogTitle: "Descubra onde sua empresa está perdendo clientes",
    ogDescription:
      "Receba um diagnóstico gratuito e descubra os gargalos que travam o crescimento da sua empresa.",
    ogUrl: "https://www.technexos.com.br/diagnostico-gratuito",
    twitterTitle: "Diagnóstico gratuito para sua empresa",
    twitterDescription:
      "Descubra oportunidades reais para atrair mais clientes e vender melhor.",
    canonicalUrl: "https://www.technexos.com.br/diagnostico-gratuito",
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
        description: error.message || "Tente novamente em instantes.",
        variant: "destructive",
      });
    } finally {
      setSubmitting(false);
    }
  };

  const scrollToForm = () => {
    document.getElementById("diagnostic-form")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="min-h-screen bg-white text-slate-900">
      <header className="fixed left-0 right-0 top-0 z-50 border-b border-slate-100 bg-white/80 backdrop-blur-md">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
          <button
            onClick={() => navigate("/")}
            className="flex items-center gap-2 transition-opacity hover:opacity-80"
          >
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-600 shadow-lg shadow-blue-200">
              <Code2 className="h-6 w-6 text-white" />
            </div>
            <h1 className="text-xl font-black tracking-tighter">
              TechNexos<span className="text-blue-600">Digital</span>
            </h1>
          </button>

          <nav className="hidden items-center gap-8 md:flex">
            <button
              onClick={() => navigate("/")}
              className="text-sm font-bold text-slate-600 transition-colors hover:text-blue-600"
            >
              Página Principal
            </button>
            <button
              onClick={() => navigate("/about-me")}
              className="text-sm font-bold text-slate-600 transition-colors hover:text-blue-600"
            >
              Especialista
            </button>
            <button
              onClick={() => navigate("/autoclub-pro")}
              className="text-sm font-bold text-slate-600 transition-colors hover:text-blue-600"
            >
              AutoClub Pro
            </button>
            <Button
              onClick={() => navigate("/diagnostico-gratuito")}
              variant="outline"
              className="rounded-full border-blue-200 bg-blue-50 px-6 font-bold text-blue-700 hover:bg-blue-100 hover:text-blue-800"
            >
              Diagnóstico Gratuito
            </Button>
          </nav>

          <button className="p-2 md:hidden" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
            {mobileMenuOpen ? <X /> : <Menu />}
          </button>
        </div>

        {mobileMenuOpen && (
          <div className="absolute w-full space-y-4 border-t border-slate-100 bg-white p-4 shadow-xl md:hidden">
            <button
              onClick={() => {
                navigate("/");
                setMobileMenuOpen(false);
              }}
              className="block w-full p-2 text-left font-bold text-slate-700"
            >
              Página Principal
            </button>
            <button
              onClick={() => {
                navigate("/about-me");
                setMobileMenuOpen(false);
              }}
              className="block w-full p-2 text-left font-bold text-slate-700"
            >
              Especialista
            </button>
            <button
              onClick={() => {
                navigate("/autoclub-pro");
                setMobileMenuOpen(false);
              }}
              className="block w-full p-2 text-left font-bold text-slate-700"
            >
              AutoClub Pro
            </button>
            <Button
              onClick={() => {
                navigate("/diagnostico-gratuito");
                setMobileMenuOpen(false);
              }}
              variant="outline"
              className="w-full border-blue-200 bg-blue-50 py-6 font-bold text-blue-700 hover:bg-blue-100 hover:text-blue-800"
            >
              Diagnóstico Gratuito
            </Button>
          </div>
        )}
      </header>

      <section className="relative overflow-hidden bg-[#06121f] text-white">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(255,196,37,0.12),_transparent_30%),radial-gradient(circle_at_bottom_right,_rgba(255,255,255,0.06),_transparent_30%)]" />
        <div className="relative mx-auto grid max-w-7xl gap-10 px-5 pb-12 pt-8 lg:grid-cols-[1.05fr_0.95fr] lg:px-10 lg:pb-0 lg:pt-10">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="flex flex-col justify-between"
          >
            <div>
              <div className="mb-10">
                <div className="flex items-center gap-2">
                  <span className="text-[2.25rem] font-black tracking-tight text-white sm:text-[3.25rem]">
                    TechNexos
                  </span>
                  <Search className="h-8 w-8 text-[#f6bf22] sm:h-10 sm:w-10" />
                </div>
                <p className="mt-1 text-xs font-semibold uppercase tracking-[0.2em] text-white/80 sm:text-sm">
                  Automação • Tráfego • Resultados
                </p>
              </div>

              <h1 className="max-w-3xl text-4xl font-black leading-[1.08] sm:text-5xl lg:text-[4.2rem]">
                Descubra onde sua empresa está{" "}
                <span className="text-[#f6bf22]">perdendo clientes</span> (e dinheiro)
                todos os dias.
              </h1>

              <div className="my-8 h-1.5 w-20 rounded-full bg-[#f6bf22]" />

              <p className="max-w-2xl text-lg leading-relaxed text-white/88 sm:text-2xl">
                Em menos de 2 minutos, você recebe um{" "}
                <span className="font-bold text-[#f6bf22]">diagnóstico gratuito</span> com
                oportunidades reais para atrair mais clientes e aumentar seu faturamento.
              </p>
            </div>

            <div className="mt-10 rounded-[28px] border border-white/20 bg-white/4 p-4 backdrop-blur-sm sm:p-5">
              <div className="grid gap-4 sm:grid-cols-3">
                {highlights.map(({ icon: Icon, title, description }) => (
                  <div
                    key={title}
                    className="flex items-center gap-4 rounded-2xl border border-white/10 bg-[#071524]/70 px-4 py-4"
                  >
                    <div className="flex h-14 w-14 items-center justify-center rounded-full border border-white/30">
                      <Icon className="h-7 w-7 text-white" />
                    </div>
                    <div>
                      <p className="text-lg font-bold">{title}</p>
                      <p className="text-sm leading-snug text-white/78">{description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <Button
              onClick={scrollToForm}
              className="mt-8 h-14 w-full max-w-md rounded-xl bg-[#f6bf22] text-base font-black text-[#08111d] hover:bg-[#ffd24d] lg:hidden"
            >
              Receber diagnóstico gratuito
            </Button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 36 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.85, delay: 0.15 }}
            className="relative flex items-end justify-center"
          >
            <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-[#06121f] to-transparent lg:hidden" />
            <img
              src={diagnosticoHeroMan}
              alt="Homem analisando dados no computador"
              className="relative z-10 max-h-[690px] w-full max-w-[560px] rounded-[32px] object-cover object-center shadow-[0_30px_80px_rgba(0,0,0,0.45)] lg:rounded-none lg:shadow-none"
            />
          </motion.div>
        </div>
      </section>

      <section className="bg-white px-5 py-16 lg:px-10 lg:py-20">
        <div className="mx-auto max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mx-auto max-w-4xl text-center"
          >
            <h2 className="text-3xl font-black leading-tight text-[#0b1320] sm:text-[3rem]">
              Seu diagnóstico analisa{" "}
              <span className="text-[#1a64d6]">5 pontos-chave</span>
            </h2>
            <p className="mt-3 text-xl text-slate-700 sm:text-[2rem] sm:leading-tight">
              que podem estar travando o crescimento da sua empresa:
            </p>
          </motion.div>

          <div className="mt-14 grid gap-8 md:grid-cols-2 xl:grid-cols-5">
            {diagnosisPoints.map(({ icon: Icon, title, description }, index) => (
              <motion.div
                key={title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.55, delay: index * 0.08 }}
                className="relative rounded-[28px] border border-slate-200 bg-white px-6 pb-8 pt-7 text-center shadow-[0_16px_40px_rgba(15,23,42,0.06)]"
              >
                <div className="mx-auto mb-7 flex h-11 w-11 items-center justify-center rounded-full bg-[#1a64d6] text-sm font-black text-white">
                  {(index + 1).toString().padStart(2, "0")}
                </div>
                <div className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-[24px] bg-slate-50">
                  <Icon className="h-11 w-11 text-[#071524]" />
                </div>
                <h3 className="text-xl font-black leading-snug text-[#0b1320]">{title}</h3>
                <p className="mt-4 text-base leading-7 text-slate-600">{description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section id="diagnostic-form" className="bg-[#f4f6fb] px-5 py-16 lg:px-10 lg:py-20">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.92fr_1.08fr] lg:items-start">
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.65 }}
            className="pt-2"
          >
            <div className="max-w-xl border-l-4 border-[#f6bf22] pl-6">
              <h2 className="text-4xl font-black leading-tight text-[#0b1320]">
                Vamos descobrir juntos?
              </h2>
              <p className="mt-5 text-xl leading-9 text-slate-700">
                Preencha os dados ao lado e receba seu diagnóstico personalizado com
                insights práticos para sua empresa{" "}
                <span className="font-black text-[#0b1320]">
                  vender mais e crescer de verdade.
                </span>
              </p>
            </div>

            <div className="mt-10 rounded-[26px] bg-white p-6 shadow-[0_18px_40px_rgba(15,23,42,0.08)]">
              <div className="flex items-center gap-4">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-[#08111d]">
                  <Gift className="h-8 w-8 text-[#f6bf22]" />
                </div>
                <p className="text-lg leading-8 text-slate-700">
                  Seu diagnóstico é 100% gratuito e feito sob medida para a realidade
                  do seu negócio.
                </p>
              </div>
            </div>

            <p
              className="mt-8 text-center text-3xl text-[#1f4ea6]"
              style={{ fontFamily: '"Brush Script MT", "Segoe Script", cursive' }}
            >
              Menos achismo, mais resultado.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.65 }}
            className="rounded-[30px] bg-white p-6 shadow-[0_24px_50px_rgba(15,23,42,0.08)] sm:p-8 lg:p-10"
          >
            <h3 className="text-center text-3xl font-black text-[#0b1320]">
              Receber meu diagnóstico gratuito
            </h3>

            <form onSubmit={handleDiagnosticSubmit} className="mt-8 space-y-5">
              <div className="space-y-2">
                <Label htmlFor="diagnosticName" className="text-base font-black text-[#0b1320]">
                  Nome completo
                </Label>
                <Input
                  id="diagnosticName"
                  value={diagnosticData.diagnosticName}
                  onChange={(e) =>
                    setDiagnosticData({ ...diagnosticData, diagnosticName: e.target.value })
                  }
                  placeholder="Digite seu nome"
                  required
                  className="h-14 rounded-xl border-slate-300 bg-white text-base text-slate-900 placeholder:text-slate-400 focus-visible:ring-[#1a64d6]"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="diagnosticPhone" className="text-base font-black text-[#0b1320]">
                  Seu WhatsApp
                </Label>
                <Input
                  id="diagnosticPhone"
                  value={diagnosticData.diagnosticPhone}
                  onChange={(e) =>
                    setDiagnosticData({ ...diagnosticData, diagnosticPhone: e.target.value })
                  }
                  placeholder="(00) 00000-0000"
                  required
                  className="h-14 rounded-xl border-slate-300 bg-white text-base text-slate-900 placeholder:text-slate-400 focus-visible:ring-[#1a64d6]"
                />
              </div>

              <div className="space-y-2">
                <Label
                  htmlFor="diagnosticCompany"
                  className="text-base font-black text-[#0b1320]"
                >
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
                  placeholder="Ex.: Nome da sua empresa"
                  className="h-14 rounded-xl border-slate-300 bg-white text-base text-slate-900 placeholder:text-slate-400 focus-visible:ring-[#1a64d6]"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="diagnosticArea" className="text-base font-black text-[#0b1320]">
                  Qual o seu tipo de negócio?
                </Label>
                <select
                  id="diagnosticArea"
                  value={diagnosticData.diagnosticArea}
                  onChange={(e) =>
                    setDiagnosticData({ ...diagnosticData, diagnosticArea: e.target.value })
                  }
                  required
                  className="flex h-14 w-full rounded-xl border border-slate-300 bg-white px-4 text-base text-slate-900 outline-none transition focus:border-[#1a64d6]"
                >
                  {businessTypes.map((option) => (
                    <option key={option.value || "placeholder"} value={option.value}>
                      {option.label}
                    </option>
                  ))}
                </select>
              </div>

              <div className="space-y-2">
                <Label
                  htmlFor="diagnosticDescription"
                  className="text-base font-black text-[#0b1320]"
                >
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
                  placeholder="Ex.: Poucos clientes, vendas baixas, processos desorganizados..."
                  required
                  className="min-h-28 w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-base text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-[#1a64d6]"
                />
              </div>

              <Button
                type="submit"
                disabled={submitting}
                className="mt-2 flex h-16 w-full items-center justify-center gap-3 rounded-xl bg-[#f6bf22] text-lg font-black text-[#08111d] hover:bg-[#ffd24d]"
              >
                <Lock className="h-5 w-5" />
                {submitting
                  ? "Enviando diagnóstico..."
                  : "RECEBER DIAGNÓSTICO GRATUITO"}
              </Button>

              <div className="flex items-center justify-center gap-2 pt-1 text-sm text-slate-500">
                <ShieldCheck className="h-4 w-4" />
                <span>Seus dados estão protegidos. Não enviamos spam.</span>
              </div>
            </form>
          </motion.div>
        </div>
      </section>

      <section className="bg-[#071524] px-5 py-8 text-white lg:px-10">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-6 lg:flex-row">
          <div className="flex items-center gap-4 text-center lg:text-left">
            <div className="flex h-14 w-14 flex-shrink-0 items-center justify-center rounded-full border border-[#f6bf22]">
              <Rocket className="h-7 w-7 text-[#f6bf22]" />
            </div>
            <p className="max-w-xl text-2xl leading-snug text-white/92">
              Você pode estar deixando dinheiro na mesa sem perceber.{" "}
              <span className="font-black text-[#f6bf22]">Descubra agora.</span>
            </p>
          </div>

          <ArrowRight className="hidden h-10 w-10 text-[#f6bf22] lg:block" />

          <p className="max-w-xl text-center text-2xl leading-snug text-white/92 lg:text-left">
            Comece agora e veja o que sua empresa pode estar perdendo todos os dias.
          </p>
        </div>
      </section>
    </div>
  );
};

export default PlanAuth;
