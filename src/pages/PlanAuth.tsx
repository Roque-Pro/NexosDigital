import { useState, useEffect } from "react";
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
    icon: Target,
    title: "Qualificação",
    description: "Leads pré-perfilados para seu negócio",
  },
  {
    icon: Rocket,
    title: "Repasse",
    description: "Entrega direta no seu WhatsApp",
  },
  {
    icon: TrendingUp,
    title: "Tráfego Pago",
    description: "Anúncios focados em conversão real",
  },
];

const diagnosisPoints = [
  {
    icon: Target,
    title: "Perfil Ideal do Cliente",
    description:
      "Definimos quem é seu comprador mais lucrativo e onde ele está nas redes sociais.",
  },
  {
    icon: Search,
    title: "Captação Estratégica",
    description:
      "Atraímos leads quentes através de tráfego pago (Google, Meta e Instagram) direto para você.",
  },
  {
    icon: Workflow,
    title: "Repasse e Velocidade",
    description:
      "Implementamos a entrega dos contatos em tempo real para sua equipe comercial não perder o timing.",
  },
  {
    icon: ShieldCheck,
    title: "Filtro de Curiosos",
    description:
      "Configuramos filtros para evitar desperdício de tempo e focar apenas em quem quer comprar.",
  },
  {
    icon: Rocket,
    title: "Escala e Volume",
    description:
      "Mostramos como multiplicar seu volume de clientes mês após mês de forma previsível.",
  },
];

const businessTypes = [
  { value: "", label: "Selecione seu nicho de atuação..." },
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
    title: "Captação de Leads Quentes | Receba Clientes Qualificados via Tráfego Pago",
    description:
      "Pare de caçar clientes. Nós captamos e repassamos leads quentes e prontos para comprar através de Tráfego Pago Estratégico. Diga para nós: como você gosta dos seus leads?",
    keywords: [
      "captação de leads",
      "leads quentes",
      "tráfego pago",
      "comprar leads",
      "geração de demanda",
      "clientes qualificados",
      "vendas pelo whatsapp",
      "marketing de performance",
      "repasse de leads",
      "perfil de cliente ideal",
    ],
    ogTitle: "Receba Leads Quentes e Prontos para Comprar | TechNexos",
    ogDescription:
      "Entrega de clientes qualificados via tráfego pago direto no seu WhatsApp. Diga-nos o perfil de lead que você busca.",
    ogUrl: "https://www.technexos.com.br/diagnostico-gratuito",
    twitterTitle: "Captação e Repasse de Leads Qualificados",
    twitterDescription:
      "Receba leads quentes e qualificados através de tráfego pago estratégico. Escala e previsibilidade para suas vendas.",
    canonicalUrl: "https://www.technexos.com.br/diagnostico-gratuito",
    schema: {
      "@context": "https://schema.org",
      "@type": "Service",
      name: "Captação e Repasse de Leads TechNexos",
      description:
        "Serviço de geração e distribuição de leads qualificados através de tráfego pago para empresas.",
      provider: {
        "@type": "ProfessionalService",
        name: "TechNexos Digital",
        url: "https://www.technexos.com.br",
      },
      areaServed: "BR",
      url: "https://www.technexos.com.br/diagnostico-gratuito",
      offers: {
        "@type": "Offer",
        price: "0",
        priceCurrency: "BRL",
        availability: "https://schema.org/InStock",
      },
    },
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
        title: "Solicitação enviada!",
        description: "Em breve entraremos em contato para falar sobre seus novos leads.",
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
    <div className="min-h-screen w-full overflow-x-hidden bg-white text-slate-900">
      <style>{`
        * { box-sizing: border-box; }
        html, body { 
          margin: 0;
          padding: 0;
          width: 100%;
          max-width: 100vw;
          overflow-x: hidden;
        }
      `}</style>
      
      <header className="fixed left-0 right-0 top-0 z-50 border-b border-slate-100 bg-white/80 backdrop-blur-md">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
          <button
            onClick={() => navigate("/")}
            className="flex items-center gap-2 transition-opacity hover:opacity-80"
          >
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-600 shadow-lg shadow-blue-200">
              <Code2 className="h-6 w-6 text-white" />
            </div>
            <h1 className="text-lg font-black tracking-tighter sm:text-xl">
              TechNexos<span className="text-blue-600">Digital</span>
            </h1>
          </button>

          <nav className="hidden items-center gap-8 md:flex">
            <button onClick={() => navigate("/")} className="text-sm font-bold text-slate-600 hover:text-blue-600">Página Principal</button>
            <button onClick={() => navigate("/about-me")} className="text-sm font-bold text-slate-600 hover:text-blue-600">Especialista</button>
            <button onClick={() => navigate("/autoclub-pro")} className="text-sm font-bold text-slate-600 hover:text-blue-600">AutoClub Pro</button>
            <Button onClick={() => navigate("/diagnostico-gratuito")} variant="outline" className="rounded-full border-blue-200 bg-blue-50 px-6 font-bold text-blue-700">
              + Clientes?
            </Button>
          </nav>

          <button className="p-2 md:hidden" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
            {mobileMenuOpen ? <X /> : <Menu />}
          </button>
        </div>

        {mobileMenuOpen && (
          <div className="absolute w-full space-y-4 border-t border-slate-100 bg-white p-4 shadow-xl md:hidden">
            <button onClick={() => { navigate("/"); setMobileMenuOpen(false); }} className="block w-full p-2 text-left font-bold text-slate-700">Página Principal</button>
            <button onClick={() => { navigate("/about-me"); setMobileMenuOpen(false); }} className="block w-full p-2 text-left font-bold text-slate-700">Especialista</button>
            <button onClick={() => { navigate("/autoclub-pro"); setMobileMenuOpen(false); }} className="block w-full p-2 text-left font-bold text-slate-700">AutoClub Pro</button>
            <Button onClick={() => { navigate("/diagnostico-gratuito"); setMobileMenuOpen(false); }} variant="outline" className="w-full border-blue-200 bg-blue-50 py-6 font-bold text-blue-700">
              + Clientes?
            </Button>
          </div>
        )}
      </header>

      <section className="relative mt-[60px] overflow-hidden bg-[#06121f] text-white">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(255,196,37,0.12),_transparent_30%)]" />
        <div className="relative mx-auto grid max-w-7xl gap-10 px-4 pb-12 pt-8 lg:grid-cols-[1.05fr_0.95fr] lg:px-10 lg:pt-10">
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="flex flex-col justify-center">
            <div className="mb-6 sm:mb-10">
              <div className="flex items-center gap-2">
                <span className="text-3xl font-black tracking-tight text-white sm:text-5xl lg:text-[3.25rem]">TechNexos</span>
                <TrendingUp className="h-6 w-6 text-[#f6bf22] sm:h-10 sm:w-10" />
              </div>
              <p className="mt-2 text-[10px] font-semibold uppercase tracking-[0.2em] text-white/80 sm:text-sm">Tráfego Pago • Leads • Escala</p>
            </div>

            <h1 className="text-3xl font-black leading-tight sm:text-5xl lg:text-[4.2rem]">
              Pare de caçar clientes. Receba <span className="text-[#f6bf22]">Leads Quentes</span> e Prontos para Comprar.
            </h1>

            <div className="my-6 h-1.5 w-16 rounded-full bg-[#f6bf22] sm:my-8 sm:w-20" />

            <p className="max-w-2xl text-lg leading-relaxed text-white/90 sm:text-2xl">
              Através de Tráfego Pago e Captação Inteligente, entregamos clientes qualificados direto no seu WhatsApp. <span className="font-bold text-[#f6bf22]">Diga-nos: como você gosta dos seus leads?</span>
            </p>

            <div className="mt-8 rounded-[24px] border border-white/20 bg-white/5 p-4 backdrop-blur-sm">
              <div className="grid gap-3 sm:grid-cols-3">
                {highlights.map(({ icon: Icon, title, description }) => (
                  <div key={title} className="flex items-center gap-3 rounded-xl border border-white/10 bg-[#071524]/70 p-3">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-white/20">
                      <Icon className="h-5 w-5 text-[#f6bf22]" />
                    </div>
                    <div>
                      <p className="text-sm font-bold">{title}</p>
                      <p className="text-[11px] text-white/70 leading-tight">{description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <Button onClick={scrollToForm} className="mt-8 h-14 w-full rounded-xl bg-[#f6bf22] text-base font-black text-[#08111d] hover:bg-[#ffd24d] lg:hidden">
              Quero receber leads qualificados
            </Button>
          </motion.div>

          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="relative flex items-center justify-center">
            <img src={diagnosticoHeroMan} alt="Captação de Leads" className="relative z-10 w-full max-w-lg rounded-[24px] object-cover shadow-2xl lg:rounded-none lg:shadow-none" />
          </motion.div>
        </div>
      </section>

      <section className="bg-white px-4 py-16 lg:px-10">
        <div className="mx-auto max-w-7xl">
          <div className="mx-auto max-w-4xl text-center">
            <h2 className="text-2xl font-black leading-tight text-[#0b1320] sm:text-5xl">Como funciona nossa <span className="text-[#1a64d6]">Máquina de Clientes</span></h2>
            <p className="mt-4 text-lg text-slate-700 sm:text-2xl">Transformamos investimento em anúncios em contatos reais na sua mão:</p>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
            {diagnosisPoints.map(({ icon: Icon, title, description }, index) => (
              <motion.div key={title} className="relative rounded-[24px] border border-slate-100 bg-white p-6 text-center shadow-lg">
                <div className="mx-auto mb-4 flex h-10 w-10 items-center justify-center rounded-full bg-[#1a64d6] text-sm font-bold text-white">{index + 1}</div>
                <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-2xl bg-slate-50">
                  <Icon className="h-8 w-8 text-[#071524]" />
                </div>
                <h3 className="text-lg font-bold leading-tight text-[#0b1320]">{title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-slate-600">{description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section id="diagnostic-form" className="bg-[#f4f6fb] px-4 py-16 lg:px-10">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="space-y-6">
            <div className="border-l-4 border-[#f6bf22] pl-6">
              <h2 className="text-3xl font-black text-[#0b1320] sm:text-4xl">Diga-nos o que você precisa</h2>
              <p className="mt-4 text-lg text-slate-700 sm:text-xl leading-relaxed">
                Preencha os dados abaixo e entraremos em contato para estruturar sua <span className="font-bold text-[#0b1320]">nova fonte inesgotável de clientes qualificados.</span>
              </p>
            </div>
            <div className="rounded-[20px] bg-white p-5 shadow-sm sm:p-6">
              <div className="flex items-center gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[#08111d]">
                  <Rocket className="h-6 w-6 text-[#f6bf22]" />
                </div>
                <p className="text-sm font-medium text-slate-700 sm:text-base">Captação através de Tráfego Pago focado 100% no seu ROI.</p>
              </div>
            </div>
            <p className="text-center text-xl font-bold italic text-[#1f4ea6] sm:text-2xl">Venda para quem quer comprar.</p>
          </div>

          <motion.div className="rounded-[24px] bg-white p-5 shadow-xl sm:p-10">
            <h3 className="text-center text-xl font-black text-[#0b1320] sm:text-2xl">Solicitar Captação de Leads</h3>
            <form onSubmit={handleDiagnosticSubmit} className="mt-8 space-y-4">
              <div className="space-y-1.5">
                <Label htmlFor="diagnosticName" className="font-bold text-slate-700">Seu Nome</Label>
                <Input 
                  id="diagnosticName" 
                  value={diagnosticData.diagnosticName} 
                  onChange={(e) => setDiagnosticData({ ...diagnosticData, diagnosticName: e.target.value })} 
                  placeholder="Seu nome completo" 
                  required 
                  className="h-12 bg-slate-50 border-slate-200 text-slate-900 focus:bg-white focus:border-blue-500 focus:ring-blue-500 transition-all placeholder:text-slate-400" 
                />
              </div>
              <div className="space-y-1.5">
                <Label htmlFor="diagnosticPhone" className="font-bold text-slate-700">WhatsApp para receber os Leads</Label>
                <Input 
                  id="diagnosticPhone" 
                  value={diagnosticData.diagnosticPhone} 
                  onChange={(e) => setDiagnosticData({ ...diagnosticData, diagnosticPhone: e.target.value })} 
                  placeholder="(00) 00000-0000" 
                  required 
                  className="h-12 bg-slate-50 border-slate-200 text-slate-900 focus:bg-white focus:border-blue-500 focus:ring-blue-500 transition-all placeholder:text-slate-400" 
                />
              </div>
              <div className="space-y-1.5">
                <Label htmlFor="diagnosticCompany" className="font-bold text-slate-700">Nome da sua Empresa</Label>
                <Input 
                  id="diagnosticCompany" 
                  value={diagnosticData.diagnosticCompany} 
                  onChange={(e) => setDiagnosticData({ ...diagnosticData, diagnosticCompany: e.target.value })} 
                  placeholder="Ex.: Sua Empresa" 
                  className="h-12 bg-slate-50 border-slate-200 text-slate-900 focus:bg-white focus:border-blue-500 focus:ring-blue-500 transition-all placeholder:text-slate-400" 
                />
              </div>
              <div className="space-y-1.5">
                <Label htmlFor="diagnosticArea" className="font-bold text-slate-700">Qual seu nicho de atuação?</Label>
                <select 
                  id="diagnosticArea" 
                  value={diagnosticData.diagnosticArea} 
                  onChange={(e) => setDiagnosticData({ ...diagnosticData, diagnosticArea: e.target.value })} 
                  required 
                  className="flex h-12 w-full rounded-md border border-slate-200 bg-slate-50 px-3 py-2 text-sm text-slate-900 outline-none focus:bg-white focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all"
                >
                  {businessTypes.map((option) => (
                    <option key={option.value} value={option.value} className="bg-white text-slate-900">{option.label}</option>
                  ))}
                </select>
              </div>
              <div className="space-y-1.5">
                <Label htmlFor="diagnosticDescription" className="font-bold text-slate-700">Como você gosta dos seus leads?</Label>
                <textarea 
                  id="diagnosticDescription" 
                  value={diagnosticData.diagnosticDescription} 
                  onChange={(e) => setDiagnosticData({ ...diagnosticData, diagnosticDescription: e.target.value })} 
                  placeholder="Ex: perfil do cliente, região de atendimento, volume mensal desejado..." 
                  required 
                  className="min-h-24 w-full rounded-md border border-slate-200 bg-slate-50 p-3 text-sm text-slate-900 outline-none focus:bg-white focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all placeholder:text-slate-400" 
                />
              </div>
              <Button type="submit" disabled={submitting} className="w-full h-14 bg-[#f6bf22] font-black text-[#08111d] hover:bg-[#ffd24d]">
                {submitting ? "Enviando..." : "QUERO RECEBER LEADS QUALIFICADOS"}
              </Button>
              <div className="flex items-center justify-center gap-2 text-[10px] text-slate-500 sm:text-xs">
                <ShieldCheck className="h-4 w-4" />
                <span>Dados protegidos. Não enviamos spam.</span>
              </div>
            </form>
          </motion.div>
        </div>
      </section>

      <footer className="bg-[#071524] px-4 py-12 text-white">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-6 lg:flex-row">
          <div className="flex flex-col items-center gap-4 text-center sm:flex-row sm:text-left">
            <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full border border-[#f6bf22]">
              <Rocket className="h-6 w-6 text-[#f6bf22]" />
            </div>
            <p className="max-w-md text-lg font-bold sm:text-xl">
              Pare de perder vendas por falta de clientes. <span className="text-[#f6bf22]">Receba leads agora.</span>
            </p>
          </div>
          <p className="max-w-xs text-center text-sm text-white/70 lg:text-left">Comece agora e veja seu faturamento crescer com clientes qualificados todos os dias.</p>
        </div>
      </footer>
    </div>
  );
};

export default PlanAuth;
