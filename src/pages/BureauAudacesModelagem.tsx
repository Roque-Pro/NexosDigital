import { useState } from "react";
import { motion } from "framer-motion";
import { useSEO } from "@/hooks/useSEO";
import {
  Layers,
  Grid,
  Printer,
  FileCode,
  FileText,
  Check,
  ArrowRight,
  Sparkles,
  TrendingUp,
  Coins,
  Clock,
  ShieldCheck,
  MapPin,
  Menu,
  X,
  ChevronDown,
  Phone,
  Scissors,
  Ruler,
  Cpu,
  BarChart3,
  Zap,
  Target,
  Percent,
  Palette,
  Star,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import { supabase } from "@/integrations/supabase/client";
import WhatsAppFloat from "@/components/WhatsAppFloat";
import heroAudaces from "@/img/moldes/logo audaces ( no hero da pagina e substitua a atual ).png";
import moldesAntigos from "@/img/moldes/moldes antigos.jpg";
import operandoAudaces from "@/img/moldes/operando audaces e criando moldes.jpg";
import encaixeAudaces from "@/img/moldes/encaixe em audaces.jpg";
import encaixePdf from "@/img/moldes/encaixe pronto em pdf.jpg";

const primaryService = {
  icon: Palette,
  title: "Modelagem Digital para Confecção de Moda",
  subtitle: "Do croqui ao molde pronto para corte — todo o desenvolvimento da sua coleção em um só lugar.",
  copy: `Criamos a <b>modelagem digital completa</b> da sua coleção, partindo do seu croqui, foto de referência ou peça física. Utilizamos o <b>software Audaces</b> para desenvolver moldes com <b>precisão milimétrica</b>, garantindo caimento perfeito, encaixe otimizado e redução de desperdício de tecido.

Entregamos sua modelagem pronta para produção: <b>graduada na grade de tamanhos</b> que você precisa (do PP ao Plus Size), com <b>ficha técnica detalhada</b>, consumo de tecido por peça e risco de encaixe otimizado.

Ideal para <b>confecções de moda feminina, masculina, infantil, fitness, moda praia, lingerie e uniformes</b>. Você terceiriza todo o processo de modelagem e recebe tudo pronto — sem precisar de equipe interna ou investimento em software.`,
  delivery: "Moldes digitais (.DXF/.PLOT/.PDF) + grade completa + encaixe + ficha técnica.",
};

const secondaryServices = [
  {
    icon: Layers,
    title: "Gradação e Ampliação de Moldes",
    subtitle: "Escalonamento técnico e preciso da sua grade de tamanhos.",
    copy: "Chega de roupas que deformam nos tamanhos maiores. Realizamos a <b>ampliação milimétrica</b> da sua peça base para grades completas (Adulto, Infantil e Plus Size) seguindo rigorosamente a tabela de medidas do mercado no <b>sistema Audaces</b>.",
    delivery: "Arquivo digital universal ou risco impresso pronto.",
  },
  {
    icon: Grid,
    title: "Encaixe Automático com Máximo Aproveitamento",
    subtitle: "O cálculo exato focado na lucratividade da sua fábrica.",
    copy: "O preço do tecido dita o seu lucro. Usamos algoritmos avançados do Audaces para criar o <b>risco de encaixe perfeito</b>, garantindo o <b>aproveitamento máximo do enfesto</b>. Você recebe o relatório completo de rendimento e consumo por peça antes de cortar.",
    delivery: "Mapa de corte otimizado enviado digitalmente ou plotado.",
  },
  {
    icon: Printer,
    title: "Bureau de Plotagem e Impressão de Riscos",
    subtitle: "Solução ágil para quem corta na mesa manual.",
    copy: "Imprima seus riscos e encaixes com <b>alta fidelidade de linhas</b> nas larguras padrão da indústria têxtil. Opção de impressão em <b>papel termocolante</b> para facilitar o corte manual. Retirada rápida para Juiz de Fora e região.",
    delivery: "Rolos de papel de alta densidade em até 24 horas.",
  },
  {
    icon: FileCode,
    title: "Exportação Digital e Arquivos Universais",
    subtitle: "Engenharia de produto completa para marcas e facções.",
    copy: "Ideal para marcas que terceirizam a costura em oficinas externas. Exportamos sua coleção em <b>formatos universais (.DXF e .PLOT)</b>, 100% compatíveis com qualquer máquina de corte automática (Gerber, Lectra, Audaces) ou plotter do país.",
    delivery: "Pasta digital estruturada em nuvem pronta para envio nacional.",
  },
];

const benefits = [
  {
    icon: Percent,
    title: "Até 15% de economia de tecido",
    desc: "Encaixe automatizado Audaces que reduz desperdícios e aumenta o aproveitamento do seu enfesto.",
  },
  {
    icon: Clock,
    title: "Entrega em até 24 horas",
    desc: "Processo ágil de digitalização, gradação e plotagem para não parar sua produção.",
  },
  {
    icon: Coins,
    title: "Precisão que reduz custos",
    desc: "Gradação milimétrica que elimina erros de escala e retrabalhos na costura.",
  },
  {
    icon: ShieldCheck,
    title: "Arquivos universais .DXF/.PLOT",
    desc: "Compatibilidade total com Audaces, Gerber, Lectra, Optitex e qualquer plotter do mercado.",
  },
  {
    icon: MapPin,
    title: "Atendimento Nacional",
    desc: "Enviamos arquivos digitais para todo o Brasil. Plotagem física para Juiz de Fora e região.",
  },
];

const faqs = [
  {
    q: "O que é modelagem digital para confecção de moda?",
    a: "É o processo de criar moldes de roupas utilizando software especializado (Audaces) em vez de métodos manuais no papel. Nós desenvolvemos a modelagem digital completa da sua coleção a partir do seu croqui, foto ou peça física — incluindo gradação de tamanhos, encaixe otimizado e ficha técnica. Você recebe arquivos digitais universais prontos para produção (.DXF, .PLOT, .PDF).",
  },
  {
    q: "Preciso ter o software Audaces para contratar o serviço?",
    a: "Não! Nós temos toda a infraestrutura: software Audaces atualizado, sistema de encaixe automatizado e plotter de grande formato. Você nos envia suas referências (croqui, foto ou molde) e nós devolvemos tudo pronto: modelagem completa, ampliada na sua grade, encaixada e exportada nos formatos que você precisa.",
  },
  {
    q: "Como funciona o desenvolvimento de uma modelagem do zero?",
    a: "Você nos envia o croqui, foto da peça desejada ou uma roupa de referência. Informa a tabela de medidas, tecido e grade de tamanhos. Nós criamos os moldes digitais no Audaces, fazemos a gradação, geramos o encaixe otimizado e entregamos os arquivos prontos para corte. Você ainda pode solicitar ajustes até aprovar a modelagem final.",
  },
  {
    q: "Quanto posso economizar no tecido com o encaixe otimizado?",
    a: "Nosso encaixe automatizado no Audaces reduz entre 8% e 15% do consumo de tecido em comparação com encaixes manuais ou mal planejados. Para uma confecção que produz 1.000 peças por mês, isso pode representar milhares de reais em economia anual. O relatório de rendimento é entregue antes da aprovação.",
  },
  {
    q: "Vocês atendem qualquer segmento de moda?",
    a: "Sim! Trabalhamos com moda feminina, masculina, infantil, fitness, moda praia, lingerie, uniformes, moda plus size e moda íntima. Atendemos desde pequenos ateliês até indústrias de grande porte, em todo o Brasil.",
  },
  {
    q: "Quais formatos de arquivo vocês entregam?",
    a: "Entregamos nos principais formatos da indústria têxtil: .DXF (universal, compatível com Audaces, Gerber, Lectra, Optitex), .PLOT (para impressão direta em plotter) e PDF (para visualização e conferência). Também fornecemos ficha técnica com consumo de tecido por peça.",
  },
  {
    q: "Vocês aceitam moldes físicos de papel para digitalizar?",
    a: "Sim! Digitalizamos seus moldes físicos em mesa digitalizadora profissional com precisão milimétrica. Após a digitalização, você pode optar por receber os papéis de volta ou descartá-los — seu acervo fica seguro na nuvem e pode ser reutilizado a qualquer momento.",
  },
];

const whatsappMessage = "Olá! Gostaria de solicitar um orçamento para modelagem digital para confecção de moda no Audaces.";

export default function BureauAudacesModelagem() {
  const { toast } = useToast();
  const [submitting, setSubmitting] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    company: "",
    description: "",
  });

  useSEO({
    title: "Modelagem Digital para Confecção de Moda | Bureau Audaces TechNexos",
    description:
      "Serviço completo de modelagem digital para confecções de moda. Desenvolvimento de moldes, gradação, encaixe otimizado e plotagem. Até 15% de economia de tecido. Atendimento nacional.",
    keywords: [
      "modelagem digital para confecção",
      "modelagem de roupas terceirizada",
      "serviço de modelagem para confecção de moda",
      "bureau de modelagem audaces",
      "desenvolvimento de moldes para confecção",
      "graducação de moldes digital",
      "encaixe automático de tecido",
      "plotagem de riscos para confecção",
      "terceirização de modelagem",
      "molde digital para indústria têxtil",
      "engenharia de modelagem confecção",
      "aproveitamento de tecido audaces",
    ],
    ogTitle: "Modelagem Digital para Confecção de Moda | Bureau Audaces TechNexos",
    ogDescription:
      "Do croqui ao molde pronto: desenvolvimento completo de modelagem digital Audaces para sua confecção. Gradação, encaixe otimizado e plotagem rápida.",
    ogUrl: "https://www.technexos.com.br/bureau-audaces-modelagem",
    canonicalUrl: "https://www.technexos.com.br/bureau-audaces-modelagem",
    schema: {
      "@context": "https://schema.org",
      "@type": "Service",
      name: "Modelagem Digital para Confecção de Moda",
      description:
        "Serviço completo de modelagem digital para confecções de moda: desenvolvimento de moldes no Audaces, gradação, encaixe automático, plotagem e exportação de arquivos DXF/PLOT universais.",
      provider: {
        "@type": "ProfessionalService",
        name: "TechNexos Digital",
        url: "https://www.technexos.com.br",
      },
      areaServed: "BR",
      url: "https://www.technexos.com.br/bureau-audaces-modelagem",
    },
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);

    try {
      if (!formData.name || !formData.phone || !formData.description) {
        throw new Error("Preencha todos os campos obrigatórios.");
      }

      const { error } = await supabase.from("diagnostics").insert({
        name: formData.name,
        phone: formData.phone,
        company: formData.company || null,
        area: "modelagem_audaces",
        description: formData.description,
        created_at: new Date().toISOString(),
      });

      if (error) throw error;

      toast({
        title: "Solicitação enviada!",
        description: "Em breve entraremos em contato pelo WhatsApp para falar sobre sua modelagem.",
      });

      setFormData({ name: "", phone: "", company: "", description: "" });
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
    document.getElementById("orcamento-form")?.scrollIntoView({ behavior: "smooth" });
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

      {/* Header */}
      <header className="fixed left-0 right-0 top-0 z-50 border-b border-slate-100 bg-white/80 backdrop-blur-md">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
          <button
            onClick={() => window.location.href = "/"}
            className="flex items-center gap-2 transition-opacity hover:opacity-80"
          >
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-indigo-600 shadow-lg shadow-indigo-200">
              <Scissors className="h-6 w-6 text-white" />
            </div>
            <div className="text-left">
              <h1 className="text-sm font-black tracking-tighter sm:text-base">
                TechNexos<span className="text-indigo-600">Modelagem</span>
              </h1>
            </div>
          </button>

          <nav className="hidden items-center gap-8 md:flex">
            <a href="#servicos" className="text-sm font-bold text-slate-600 hover:text-indigo-600">Serviços</a>
            <a href="#beneficios" className="text-sm font-bold text-slate-600 hover:text-indigo-600">Economia</a>
            <a href="#faq" className="text-sm font-bold text-slate-600 hover:text-indigo-600">FAQ</a>
            <Button
              onClick={scrollToForm}
              className="rounded-full bg-indigo-600 px-6 font-bold text-white hover:bg-indigo-700"
            >
              Solicitar Orçamento
            </Button>
          </nav>

          <button className="p-2 md:hidden" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
            {mobileMenuOpen ? <X className="text-slate-700" /> : <Menu className="text-slate-700" />}
          </button>
        </div>

        {mobileMenuOpen && (
          <div className="absolute w-full space-y-3 border-t border-slate-100 bg-white p-4 shadow-xl md:hidden">
            <a href="#servicos" onClick={() => setMobileMenuOpen(false)} className="block p-2 text-sm font-bold text-slate-700">Serviços</a>
            <a href="#beneficios" onClick={() => setMobileMenuOpen(false)} className="block p-2 text-sm font-bold text-slate-700">Economia</a>
            <a href="#faq" onClick={() => setMobileMenuOpen(false)} className="block p-2 text-sm font-bold text-slate-700">FAQ</a>
            <Button onClick={() => { scrollToForm(); setMobileMenuOpen(false); }} className="w-full bg-indigo-600 font-bold text-white">
              Solicitar Orçamento
            </Button>
          </div>
        )}
      </header>

      {/* Hero Section */}
      <section className="relative mt-[60px] overflow-hidden bg-gradient-to-br from-slate-900 via-indigo-950 to-slate-950 text-white">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_rgba(99,102,241,0.15),_transparent_50%)]" />
        <div className="relative mx-auto grid max-w-7xl gap-10 px-4 pb-16 pt-12 lg:grid-cols-[1.1fr_0.9fr] lg:px-10 lg:pt-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex flex-col justify-center"
          >
            <div className="inline-flex items-center gap-2 rounded-full border border-indigo-500/30 bg-indigo-500/10 px-4 py-1.5 text-xs font-semibold tracking-wide text-indigo-300 mb-6 w-fit">
              <Sparkles className="h-3.5 w-3.5 text-indigo-400" />
              Modelagem Digital Profissional
            </div>

            <h1 className="text-3xl font-extrabold leading-tight sm:text-4xl lg:text-[3.2rem] lg:leading-[1.1]">
              Modelagem Digital para Confecção de Moda: Sua Coleção Desenvolvida do Zero com <span className="bg-gradient-to-r from-indigo-400 to-emerald-400 bg-clip-text text-transparent">Precisão Audaces</span>.
            </h1>

            <div className="my-6 h-1 w-16 rounded-full bg-gradient-to-r from-indigo-500 to-emerald-400" />

            <p className="max-w-2xl text-base leading-relaxed text-slate-300 sm:text-lg">
              Terceirize sua modelagem e receba <b>moldes digitais profissionais</b> prontos para produção. Do croqui ao risco de encaixe, oferecemos o <b>desenvolvimento completo da sua coleção</b> no software Audaces — com gradação, encaixe otimizado e economia de até <b>15% de tecido</b>.
            </p>

            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <Button
                onClick={scrollToForm}
                className="h-14 rounded-xl bg-emerald-500 px-8 text-base font-black text-white shadow-xl shadow-emerald-500/30 hover:bg-emerald-600 hover:scale-105 transition-all"
              >
                Solicitar Orçamento via WhatsApp
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <a
                href="#servico-principal"
                className="flex h-14 items-center justify-center rounded-xl border border-slate-600 bg-slate-800/50 px-8 text-base font-bold text-white hover:bg-slate-800 transition-all"
              >
                Ver Serviço Principal
              </a>
            </div>

            <div className="mt-8 flex flex-wrap items-center gap-6 text-sm text-slate-400 border-t border-slate-800 pt-6">
              <span className="flex items-center gap-1.5"><Star className="h-4 w-4 text-emerald-400" /> Do croqui ao molde pronto</span>
              <span className="flex items-center gap-1.5"><Target className="h-4 w-4 text-emerald-400" /> Até 15% economia de tecido</span>
              <span className="flex items-center gap-1.5"><Clock className="h-4 w-4 text-indigo-400" /> Entrega rápida</span>
              <span className="flex items-center gap-1.5"><MapPin className="h-4 w-4 text-emerald-400" /> Atendimento Nacional</span>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative flex items-center justify-center"
          >
            <div className="relative w-full max-w-lg">
              <div className="absolute -inset-1 rounded-3xl bg-gradient-to-tr from-indigo-500 to-emerald-400 opacity-30 blur-lg" />
              <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-slate-900/60 backdrop-blur-3xl">
                <img src={heroAudaces} alt="Logo Audaces - Modelagem Digital para Confecção de Moda" className="w-full h-72 sm:h-80 lg:h-96 object-contain rounded-t-2xl bg-slate-900 p-8" />
                <div className="border-t border-white/10 bg-slate-950/90 p-4">
                  <div className="flex items-center justify-between text-xs text-indigo-300 font-bold mb-1">
                    <span>MODELAGEM DIGITAL AUDACES</span>
                    <span className="text-emerald-400">94.8% APROVEITAMENTO</span>
                  </div>
                  <div className="h-1.5 w-full rounded-full bg-slate-800 overflow-hidden">
                    <div className="h-full w-[94.8%] bg-gradient-to-r from-indigo-500 to-emerald-400 rounded-full" />
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Trust Stats */}
      <section className="bg-white py-8 border-b border-slate-100 shadow-sm">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div>
              <p className="text-3xl lg:text-4xl font-extrabold text-indigo-600">Até 15%</p>
              <p className="text-xs lg:text-sm font-semibold text-slate-500 mt-1">Economia de Tecido</p>
            </div>
            <div className="border-l border-slate-200">
              <p className="text-3xl lg:text-4xl font-extrabold text-indigo-600">100% Digital</p>
              <p className="text-xs lg:text-sm font-semibold text-slate-500 mt-1">Modelagem no Audaces</p>
            </div>
            <div className="border-l border-slate-200">
              <p className="text-3xl lg:text-4xl font-extrabold text-indigo-600">.DXF/.PLOT</p>
              <p className="text-xs lg:text-sm font-semibold text-slate-500 mt-1">Formatos Universais</p>
            </div>
            <div className="border-l border-slate-200">
              <p className="text-3xl lg:text-4xl font-extrabold text-indigo-600">Nacional</p>
              <p className="text-xs lg:text-sm font-semibold text-slate-500 mt-1">Atendimento em Todo Brasil</p>
            </div>
          </div>
        </div>
      </section>

      {/* Primary Service Section */}
      <section id="servico-principal" className="bg-white px-4 py-20 lg:px-10">
        <div className="mx-auto max-w-7xl">
          <div className="mx-auto max-w-3xl text-center mb-14">
            <div className="inline-flex h-9 items-center justify-center rounded-full bg-indigo-100 px-4 text-sm font-bold text-indigo-700 mb-4">
              <Star className="h-4 w-4 mr-1.5" /> Serviço Principal
            </div>
            <h2 className="text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
              {primaryService.title}
            </h2>
            <p className="mt-4 text-lg text-slate-600">
              {primaryService.subtitle}
            </p>
          </div>

          <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 items-center">
            <div className="lg:col-span-7">
              <div className="relative overflow-hidden rounded-2xl border border-slate-200 shadow-lg">
                <img
                  src={operandoAudaces}
                  alt="Profissional operando software Audaces - Modelagem Digital para Confecção de Moda"
                  className="w-full h-64 sm:h-80 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-transparent to-transparent" />
                <p className="absolute bottom-4 left-6 text-white text-sm font-bold">
                  Profissional operando Audaces — desenvolvimento de modelagem digital
                </p>
              </div>

              <div className="mt-8 space-y-4">
                <p className="text-base leading-relaxed text-slate-700" dangerouslySetInnerHTML={{ __html: primaryService.copy.split('\n\n')[0] }} />
                <p className="text-base leading-relaxed text-slate-700" dangerouslySetInnerHTML={{ __html: primaryService.copy.split('\n\n')[1] }} />
                <p className="text-base leading-relaxed text-slate-700" dangerouslySetInnerHTML={{ __html: primaryService.copy.split('\n\n')[2] }} />
              </div>

              <div className="mt-6 flex items-center gap-2 text-sm font-bold text-emerald-600 bg-emerald-50 rounded-full px-4 py-2 w-fit">
                <Check className="h-4 w-4" />
                {primaryService.delivery}
              </div>
            </div>

            <div className="lg:col-span-4 lg:col-start-9">
              <div className="rounded-2xl border border-indigo-100 bg-gradient-to-br from-indigo-50 to-white p-6 shadow-lg">
                <h3 className="text-lg font-black text-slate-900 mb-4">O que está incluso:</h3>
                <ul className="space-y-3">
                  {[
                    { icon: Palette, text: "Desenvolvimento de moldes do zero (croqui/foto/peça física)" },
                    { icon: Layers, text: "Gradação completa na grade desejada (PP ao Plus Size)" },
                    { icon: Grid, text: "Encaixe otimizado com máximo aproveitamento de tecido" },
                    { icon: FileText, text: "Ficha técnica com consumo por peça e rendimento" },
                    { icon: FileCode, text: "Entrega em .DXF, .PLOT e .PDF — compatível com qualquer máquina" },
                    { icon: Printer, text: "Opção de plotagem física em papel de alta densidade" },
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-indigo-100 text-indigo-600 mt-0.5">
                        <item.icon className="h-4 w-4" />
                      </div>
                      <span className="text-sm text-slate-700 font-medium">{item.text}</span>
                    </li>
                  ))}
                </ul>
                <Button
                  onClick={scrollToForm}
                  className="mt-6 w-full h-12 rounded-xl bg-indigo-600 font-black text-white hover:bg-indigo-700 shadow-lg shadow-indigo-500/30 transition-all"
                >
                  Solicitar Orçamento
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Secondary Services Section */}
      <section id="servicos" className="bg-slate-50 px-4 py-20 lg:px-10">
        <div className="mx-auto max-w-7xl">
          <div className="mx-auto max-w-3xl text-center mb-14">
            <h2 className="text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
              Serviços Complementares
            </h2>
            <p className="mt-4 text-lg text-slate-600">
              Além da modelagem digital, oferecemos soluções especializadas para cada etapa da sua produção têxtil.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
            {secondaryServices.map((svc, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="group relative rounded-2xl border border-slate-200 bg-white p-6 shadow-md transition-all hover:border-indigo-200 hover:shadow-lg hover:-translate-y-1 sm:p-8"
              >
                <div className="flex items-start gap-5">
                  <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl bg-indigo-50 text-indigo-600 transition-colors group-hover:bg-indigo-600 group-hover:text-white">
                    <svc.icon className="h-7 w-7" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="text-xl font-bold text-slate-900">{svc.title}</h3>
                    <p className="mt-1 text-sm font-semibold text-indigo-600">{svc.subtitle}</p>
                    <p className="mt-3 text-sm leading-relaxed text-slate-600" dangerouslySetInnerHTML={{ __html: svc.copy }} />
                    <div className="mt-4 flex items-center gap-2 text-xs font-bold text-emerald-600 bg-emerald-50 rounded-full px-3 py-1.5 w-fit">
                      <Check className="h-3.5 w-3.5" />
                      {svc.delivery}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Digitalização Section */}
      <section className="bg-white px-4 py-20 lg:px-10 border-b border-slate-100">
        <div className="mx-auto max-w-7xl">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 items-center">
            <div className="lg:col-span-6">
              <div className="inline-flex h-9 items-center justify-center rounded-full bg-red-100 px-4 text-sm font-bold text-red-700 mb-4">
                <FileText className="h-4 w-4 mr-1.5" /> Acervo Digital
              </div>
              <h2 className="text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
                Digitalizamos Seus Moldes Físicos e Entregamos <span className="text-indigo-600">Prontos para Produção</span>
              </h2>
              <p className="mt-4 text-lg text-slate-600 leading-relaxed">
                Tem moldes de papel kraft ocupando espaço no seu ateliê? Nós <b>digitalizamos todo o seu acervo</b> com precisão milimétrica e devolvemos em formato digital — incluindo gradação, encaixe e ficha técnica.
              </p>
              <div className="mt-8 space-y-5">
                <div className="flex gap-4 p-4 rounded-xl bg-slate-50 border border-slate-200">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-red-50">
                    <FileText className="h-6 w-6 text-red-600" />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900">Digitalização de Acervo Físico</h4>
                    <p className="text-sm text-slate-500 mt-1">Escaneamos seus moldes de papel em mesa digitalizadora profissional com <b>precisão milimétrica</b>. Cada peça vira um arquivo .DXF ou PDF fiel ao original, pronto para ser reutilizado.</p>
                  </div>
                </div>
                <div className="flex gap-4 p-4 rounded-xl bg-slate-50 border border-slate-200">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-indigo-50">
                    <Layers className="h-6 w-6 text-indigo-600" />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900">Gradação e Encaixe Já Inclusos</h4>
                    <p className="text-sm text-slate-500 mt-1">Além de digitalizar, já entregamos os moldes <b>ampliados na grade desejada</b> (PP ao EXG) e <b>encaixados</b> no Audaces com máximo aproveitamento de tecido.</p>
                  </div>
                </div>
                <div className="flex gap-4 p-4 rounded-xl bg-slate-50 border border-slate-200">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-emerald-50">
                    <Printer className="h-6 w-6 text-emerald-600" />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900">PDF e DXF Prontos para Corte</h4>
                    <p className="text-sm text-slate-500 mt-1">Você recebe o <b>risco de encaixe finalizado em PDF</b> e os arquivos .DXF universais. Basta abrir, imprimir na sua plotter ou enviar para a facção. <b>Zero espera.</b></p>
                  </div>
                </div>
              </div>
              <div className="mt-8 flex flex-col sm:flex-row gap-4">
                <Button
                  onClick={scrollToForm}
                  className="h-14 rounded-xl bg-indigo-600 px-8 text-base font-black text-white shadow-xl shadow-indigo-500/30 hover:bg-indigo-700 transition-all"
                >
                  Digitalizar Meu Acervo
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
                <a
                  href="#faq"
                  className="flex h-14 items-center justify-center rounded-xl border border-slate-300 bg-white px-8 text-base font-bold text-slate-700 hover:bg-slate-50 transition-all"
                >
                  Dúvidas Frequentes
                </a>
              </div>
            </div>

            <div className="lg:col-span-5 lg:col-start-8">
              <div className="relative">
                <div className="absolute -inset-2 rounded-3xl bg-gradient-to-tr from-red-500 to-indigo-500 opacity-20 blur-xl" />
                <div className="relative bg-white p-3 rounded-2xl border border-slate-200 shadow-xl">
                  <div className="flex items-center justify-between bg-red-50 rounded-t-xl px-4 py-2 border-b border-red-100">
                    <span className="text-xs font-bold tracking-wider text-red-700">PDF + DXF PRONTOS</span>
                    <span className="flex items-center gap-1 text-[10px] font-bold text-red-600 bg-white px-2 py-0.5 rounded">
                      <FileText className="h-3 w-3" /> .DXF/.PDF
                    </span>
                  </div>
                  <img
                    src={moldesAntigos}
                    alt="Moldes físicos antigos digitalizados em PDF e DXF para produção"
                    className="w-full rounded-b-xl"
                  />
                  <div className="bg-slate-900 text-white rounded-b-xl px-4 py-3 flex items-center justify-between text-xs">
                    <span className="text-emerald-400 font-bold">● Pronto para produção</span>
                    <span className="text-slate-400">Ampliação + Encaixe realizados</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section id="beneficios" className="bg-white px-4 py-20 lg:px-10">
        <div className="mx-auto max-w-7xl">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 items-center">
            <div className="lg:col-span-5">
              <div className="inline-flex h-9 items-center justify-center rounded-full bg-emerald-100 px-4 text-sm font-bold text-emerald-700 mb-4">
                <TrendingUp className="h-4 w-4 mr-1.5" /> Lucratividade
              </div>
              <h2 className="text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
                Por Que Terceirizar Sua Modelagem Digital?
              </h2>
              <p className="mt-4 text-lg text-slate-600 leading-relaxed">
                Elimine custos com software, equipe interna e retrabalho. Nossa engenharia de modelagem digital no Audaces entrega precisão milimétrica, economia de tecido e agilidade que sua confecção precisa para crescer.
              </p>
              <div className="mt-8 space-y-4">
                {benefits.map((b, i) => (
                  <div key={i} className="flex gap-4 p-3 rounded-xl hover:bg-slate-50 transition-colors">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-indigo-50">
                      <b.icon className="h-5 w-5 text-indigo-600" />
                    </div>
                    <div>
                      <h4 className="font-bold text-slate-900 text-sm">{b.title}</h4>
                      <p className="text-xs text-slate-500 mt-0.5">{b.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="lg:col-span-6 lg:col-start-7">
              <div className="relative space-y-6">
                <div className="absolute -inset-2 rounded-3xl bg-gradient-to-tr from-indigo-500 to-emerald-400 opacity-20 blur-xl" />
                <div className="relative bg-slate-900 text-white p-4 rounded-2xl border border-slate-800 shadow-xl">
                  <div className="flex items-center justify-between border-b border-slate-800 pb-3 mb-3">
                    <span className="text-xs font-bold tracking-wider text-slate-400">ENCAIXE OTIMIZADO AUDACES</span>
                    <span className="px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-400 text-[10px] font-bold">94.8%</span>
                  </div>
                  <img
                    src={encaixeAudaces}
                    alt="Encaixe automatizado Audaces com aproveitamento máximo de tecido"
                    className="w-full rounded-lg"
                  />
                </div>
                <div className="relative bg-slate-900 text-white p-4 rounded-2xl border border-slate-800 shadow-xl">
                  <div className="flex items-center justify-between border-b border-slate-800 pb-3 mb-3">
                    <span className="text-xs font-bold tracking-wider text-slate-400">RISCO PRONTO EM PDF</span>
                    <span className="px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-400 text-[10px] font-bold">ENTREGUE</span>
                  </div>
                  <img
                    src={encaixePdf}
                    alt="Risco de encaixe finalizado em PDF pronto para entrega"
                    className="w-full rounded-lg"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Form Section */}
      <section id="orcamento-form" className="bg-indigo-950 px-4 py-20 lg:px-10">
        <div className="mx-auto max-w-7xl">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-[0.9fr_1.1fr] items-center">
            <div className="space-y-6">
              <div className="border-l-4 border-emerald-400 pl-6">
                <h2 className="text-3xl font-extrabold text-white sm:text-4xl">
                  Solicite seu Orçamento de Modelagem Digital
                </h2>
                <p className="mt-4 text-lg text-indigo-200 leading-relaxed">
                  Preencha os dados abaixo e receba uma proposta personalizada de modelagem digital para sua confecção. Entraremos em contato pelo <b className="text-white">WhatsApp</b> em até <b className="text-white">24 horas</b>.
                </p>
              </div>

              <div className="rounded-2xl border border-indigo-800 bg-indigo-900/50 p-6">
                <div className="flex items-center gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-emerald-500/20">
                    <Zap className="h-6 w-6 text-emerald-400" />
                  </div>
                  <p className="text-sm text-indigo-200">
                    Orçamento <b className="text-white">personalizado</b> para seu tipo de coleção e volume de produção. Sem compromisso.
                  </p>
                </div>
              </div>

              <div className="flex flex-wrap gap-3">
                {["Modelagem Digital", "Gradação", "Encaixe", "Plotagem", "DXF/PLOT"].map((tag) => (
                  <span key={tag} className="px-3 py-1.5 rounded-full border border-indigo-700 text-xs font-bold text-indigo-300">
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="rounded-2xl bg-white p-6 shadow-2xl sm:p-10"
            >
              <h3 className="text-center text-xl font-black text-slate-900 sm:text-2xl">
                Solicitar Orçamento de Modelagem Digital
              </h3>
              <form onSubmit={handleSubmit} className="mt-8 space-y-5">
                <div className="space-y-1.5">
                  <Label htmlFor="name" className="font-bold text-slate-700">
                    Nome do Responsável Técnico ou Dono da Confecção
                  </Label>
                  <Input
                    id="name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="Seu nome completo"
                    required
                    className="h-12 bg-slate-50 border-slate-200 text-slate-900 focus:bg-white focus:border-indigo-500 focus:ring-indigo-500 transition-all placeholder:text-slate-400"
                  />
                </div>

                <div className="space-y-1.5">
                  <Label htmlFor="phone" className="font-bold text-slate-700">
                    WhatsApp Comercial (com DDD)
                  </Label>
                  <Input
                    id="phone"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    placeholder="(00) 00000-0000"
                    required
                    className="h-12 bg-slate-50 border-slate-200 text-slate-900 focus:bg-white focus:border-indigo-500 focus:ring-indigo-500 transition-all placeholder:text-slate-400"
                  />
                </div>

                <div className="space-y-1.5">
                  <Label htmlFor="company" className="font-bold text-slate-700">
                    Nome da Confecção ou Marca de Roupa
                  </Label>
                  <Input
                    id="company"
                    value={formData.company}
                    onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                    placeholder="Ex.: Minha Confecção Ltda."
                    className="h-12 bg-slate-50 border-slate-200 text-slate-900 focus:bg-white focus:border-indigo-500 focus:ring-indigo-500 transition-all placeholder:text-slate-400"
                  />
                </div>

                <div className="space-y-1.5">
                  <Label htmlFor="description" className="font-bold text-slate-700">
                    Conte um pouco sobre sua coleção ou o que precisa desenvolver
                  </Label>
                  <textarea
                    id="description"
                    value={formData.description}
                    onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                    placeholder="Ex.: Preciso desenvolver a modelagem de 5 modelos de moda feminina do PP ao GG, com encaixe para malha e receber tudo em DXF e PDF..."
                    required
                    className="min-h-28 w-full rounded-md border border-slate-200 bg-slate-50 p-3 text-sm text-slate-900 outline-none focus:bg-white focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 transition-all placeholder:text-slate-400"
                  />
                </div>

                <Button
                  type="submit"
                  disabled={submitting}
                  className="w-full h-14 bg-emerald-500 font-black text-white hover:bg-emerald-600 shadow-lg shadow-emerald-500/30 transition-all"
                >
                  {submitting ? "Enviando..." : "Solicitar Orçamento de Modelagem Digital"}
                </Button>

                <div className="flex items-center justify-center gap-2 text-[10px] text-slate-500 sm:text-xs">
                  <ShieldCheck className="h-4 w-4" />
                  <span>Dados protegidos. Não enviamos spam. Orçamento sem compromisso.</span>
                </div>
              </form>
            </motion.div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="bg-slate-50 px-4 py-20 lg:px-10">
        <div className="mx-auto max-w-3xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
              Perguntas Frequentes
            </h2>
            <p className="mt-4 text-lg text-slate-600">
              Tire suas principais dúvidas sobre modelagem digital para confecção de moda.
            </p>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, i) => (
              <details
                key={i}
                className="group rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition-all open:shadow-md open:border-indigo-200"
              >
                <summary className="flex cursor-pointer items-center justify-between text-sm font-bold text-slate-900 sm:text-base [&::-webkit-details-marker]:hidden">
                  {faq.q}
                  <ChevronDown className="h-5 w-5 shrink-0 text-slate-400 transition-transform group-open:rotate-180" />
                </summary>
                <p className="mt-4 text-sm leading-relaxed text-slate-600 border-t border-slate-100 pt-4">
                  {faq.a}
                </p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="relative overflow-hidden bg-gradient-to-br from-indigo-900 via-indigo-950 to-slate-950 px-4 py-20 text-center text-white">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-indigo-500/10 rounded-full blur-3xl" />
        <div className="relative z-10 mx-auto max-w-4xl space-y-6">
          <h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl md:text-5xl leading-tight">
            Sua Confecção Merece Modelagem Digital de Verdade. <br />
            <span className="bg-gradient-to-r from-indigo-400 to-emerald-400 bg-clip-text text-transparent">
              Economia, Precisão e Velocidade para Sua Coleção.
            </span>
          </h2>
          <p className="text-indigo-200 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
            Solicite um orçamento e descubra como a modelagem digital Audaces pode transformar sua produção.
          </p>
          <div className="pt-4 flex flex-col sm:flex-row justify-center gap-4">
            <Button
              onClick={scrollToForm}
              className="h-14 rounded-xl bg-emerald-500 px-10 text-base font-black text-white shadow-xl shadow-emerald-500/30 hover:bg-emerald-600 transition-all"
            >
              Solicitar Orçamento Agora
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <a
              href="tel:32991075164"
              className="flex h-14 items-center justify-center rounded-xl border border-slate-600 bg-slate-800/50 px-8 text-base font-bold text-white hover:bg-slate-800 transition-all"
            >
              <Phone className="mr-2 h-5 w-5" /> (32) 99107-5164
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-slate-200 bg-white py-12">
        <div className="mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
          <div className="flex items-center justify-center gap-2 mb-4">
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-indigo-600 text-white">
              <Scissors className="h-4 w-4" />
            </div>
            <span className="font-extrabold text-lg text-slate-900">
              TechNexos<span className="text-indigo-600">Modelagem</span>
            </span>
          </div>
          <p className="text-xs sm:text-sm text-slate-500 max-w-md mx-auto">
            Modelagem digital para confecção de moda no Audaces. Atendimento nacional via arquivos digitais e plotagem para Juiz de Fora e região.
          </p>
          <p className="text-xs text-slate-400 mt-6 pt-6 border-t border-slate-100">
            &copy; {new Date().getFullYear()} TechNexos. Todos os direitos reservados.
          </p>
        </div>
      </footer>

      <WhatsAppFloat message={whatsappMessage} />
    </div>
  );
}
