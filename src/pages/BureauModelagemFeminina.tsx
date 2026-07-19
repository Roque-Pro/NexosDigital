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
  Heart,
  Gift,
  Shirt,
  ShoppingBag,
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

const whatsappNumber = "5532991075164";

const primaryService = {
  icon: Palette,
  title: "Modelagem Feminina com Audaces: Moldes Profissionais para Sua Coleção",
  subtitle: "Do croqui ao molde pronto — modelagem feminina especializada com Roque Rafael Proença e Maria Mousanira.",
  copy: `Criamos a <b>modelagem digital completa</b> da sua coleção feminina, partindo do seu croqui, foto de referência ou peça física. Utilizamos o <b>software Audaces</b> para desenvolver moldes com <b>precisão milimétrica</b>, garantindo caimento perfeito, encaixe otimizado e redução de desperdício de tecido.

Trabalhamos com <b>modelistas especializados em Audaces</b>: Roque Rafael Proença e Maria Mousanira, profissionais com vasta experiência em <b>modelagem, ampliação e risco</b> — tanto digital quanto manual. Sua coleção feminina recebe atendimento personalizado do início ao fim.

Entregamos sua modelagem pronta para produção: <b>graduada na grade de tamanhos</b> que você precisa (do PP ao Plus Size), com <b>ficha técnica detalhada</b>, consumo de tecido por peça e risco de encaixe otimizado.`,
  delivery: "Moldes digitais (.DXF/.PLOT/.PDF) + grade completa + encaixe + ficha técnica.",
};

const secondaryServices = [
  {
    icon: Layers,
    title: "Ampliação e Gradação de Moldes Femininos",
    subtitle: "Escalonamento técnico e preciso da sua grade de tamanhos.",
    copy: "Chega de roupas que deformam nos tamanhos maiores. Realizamos a <b>ampliação milimétrica</b> da sua peça base para grades completas (PP ao Plus Size) seguindo rigorosamente a tabela de medidas do mercado no <b>sistema Audaces</b>. Ideal para coleções femininas que precisam de precisão em cada numeração.",
    delivery: "Arquivo digital universal ou risco impresso pronto.",
  },
  {
    icon: Grid,
    title: "Encaixe Automático com Máximo Aproveitamento",
    subtitle: "O cálculo exato focado na lucratividade do seu ateliê.",
    copy: "O preço do tecido dita o seu lucro. Usamos algoritmos avançados do Audaces para criar o <b>risco de encaixe perfeito</b>, garantindo o <b>aproveitamento máximo do enfesto</b>. Você recebe o relatório completo de rendimento e consumo por peça antes de cortar.",
    delivery: "Mapa de corte otimizado enviado digitalmente ou plotado.",
  },
  {
    icon: Printer,
    title: "Bureau de Plotagem para Moda Feminina",
    subtitle: "Solução ágil para quem corta na mesa manual.",
    copy: "Imprima seus riscos e encaixes com <b>alta fidelidade de linhas</b> nas larguras padrão da indústria têxtil. Opção de impressão em <b>papel termocolante</b> para facilitar o corte manual. Retirada rápida para Juiz de Fora e região.",
    delivery: "Rolos de papel de alta densidade em até 24 horas.",
  },
  {
    icon: FileCode,
    title: "Exportação Digital para Facções e Marcas",
    subtitle: "Engenharia de produto completa para marcas femininas e facções.",
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

const moldSuggestions = [
  {
    name: "Blusa Feminina Manga Curta",
    description: "Molde digital de blusa feminina com manga curta, ideal para malha e tecido plano. Do PP ao GG.",
    image: "https://images.unsplash.com/photo-1434389677669-e08b4cda3a90?w=400&q=80",
    whatsapp: `Olá! Tenho interesse no molde de Blusa Feminina Manga Curta.`,
  },
  {
    name: "Vestido Envelope Plus Size",
    description: "Molde de vestido envelope para plus size, modelagem ampliada no Audaces com encaixe otimizado.",
    image: "https://images.unsplash.com/photo-1595777457583-95e059d581b8?w=400&q=80",
    whatsapp: `Olá! Tenho interesse no molde de Vestido Envelope Plus Size.`,
  },
  {
    name: "Calça Pantalona Feminina",
    description: "Molde de calça pantalona feminina, cintura alta com cós. Grade do PP ao EXG. Audaces.",
    image: "https://images.unsplash.com/photo-1594938298603-c8148c8c7f30?w=400&q=80",
    whatsapp: `Olá! Tenho interesse no molde de Calça Pantalona Feminina.`,
  },
  {
    name: "Saia Midi Reta com Fenda",
    description: "Molde digital de saia midi reta com fenda lateral. Do PP ao Plus Size. Pronto para produção.",
    image: "https://images.unsplash.com/photo-1583496661160-fb5886a0aaaa?w=400&q=80",
    whatsapp: `Olá! Tenho interesse no molde de Saia Midi Reta com Fenda.`,
  },
];

const moldSubgroups = [
  {
    name: "Blusas e Camisetas",
    description: "Moldes de blusas femininas, camisetas básicas, regatas, blusas com manga longa e curta. Modelagem do PP ao Plus Size.",
    icon: Shirt,
  },
  {
    name: "Vestidos e Macacões",
    description: "Vestidos envelope, tubinho, soltinhos, longos e midi. Macacões pantalona, curtos e jumpsuits.",
    icon: Gift,
  },
  {
    name: "Calças e Shorts",
    description: "Calças pantalona, skinny, reta, wide leg, cargo. Shorts jeans e de malha. Cintura alta e baixa.",
    icon: ShoppingBag,
  },
  {
    name: "Saias",
    description: "Saias midi, curta, lápis, godê, evasê, longa. Com elástico, com fenda, plissadas.",
    icon: Heart,
  },
  {
    name: "Jaquetas e Blazers",
    description: "Blazers femininos, jaquetas jeans, jaquetas de couro, coletes e casacos.",
    icon: Layers,
  },
  {
    name: "Plus Size",
    description: "Modelagem ampliada para plus size com caimento perfeito. Blusas, vestidos, calças e saias.",
    icon: Target,
  },
];

const faqs = [
  {
    q: "O que é modelagem digital feminina no Audaces?",
    a: "É o processo de criar moldes de roupas femininas utilizando o software Audaces, com precisão milimétrica. Nós desenvolvemos a modelagem digital completa da sua coleção a partir do seu croqui, foto ou peça física — incluindo gradação de tamanhos, encaixe otimizado e ficha técnica. Você recebe arquivos digitais universais prontos para produção (.DXF, .PLOT, .PDF).",
  },
  {
    q: "Preciso ter o software Audaces para contratar?",
    a: "Não! Nós temos toda a infraestrutura: software Audaces atualizado, sistema de encaixe automatizado e plotter de grande formato. Você nos envia suas referências (croqui, foto ou molde) e nós devolvemos tudo pronto. Nossos modelistas Roque Rafael Proença e Maria Mousanira cuidam de todo o processo.",
  },
  {
    q: "Vocês atendem ateliês pequenos ou só indústrias?",
    a: "Atendemos desde pequenos ateliês caseiros até indústrias de grande porte. Nosso serviço é ideal para costureiras, estilistas e marcas que querem terceirizar a modelagem e focar no que fazem de melhor: criar e vender.",
  },
  {
    q: "Quanto posso economizar no tecido com o encaixe otimizado?",
    a: "Nosso encaixe automatizado no Audaces reduz entre 8% e 15% do consumo de tecido em comparação com encaixes manuais ou mal planejados. Para quem produz 500 peças por mês, isso pode representar uma economia significativa no final do ano.",
  },
  {
    q: "Quais peças femininas vocês modelam?",
    a: "Trabalhamos com todos os segmentos da moda feminina: blusas, vestidos, calças, shorts, saias, jaquetas, blazers, macacões, plus size, lingerie, moda praia e fitness. Também fazemos kits completos de coleção.",
  },
  {
    q: "Quanto tempo leva para ficar pronto?",
    a: "Entregamos modelagens simples em até 24 horas. Coleções completas podem levar de 3 a 7 dias dependendo da quantidade de peças e complexidade. Consulte-nos pelo WhatsApp para prazos exatos.",
  },
  {
    q: "Vocês vendem kits de moldes prontos?",
    a: "Sim! Temos opções de kits de moldes femininos já desenvolvidos: blusas, vestidos, calças e saias em várias numerações. Consulte nosso catálogo pelo WhatsApp e adquira o molde que precisa.",
  },
];

const whatsappMessage = "Olá! Gostaria de solicitar um orçamento para modelagem feminina no Audaces. Pode me ajudar?";

export default function BureauModelagemFeminina() {
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
    title: "Modelagem Feminina no Audaces | Bureau de Moldes para Roupas Femininas",
    description:
      "Serviço completo de modelagem feminina no Audaces com Roque Rafael Proença e Maria Mousanira. Moldes de blusas, vestidos, calças, plus size. Atendimento nacional. Solicite orçamento.",
    keywords: [
      "moldes de roupas femininas",
      "modelagem feminina audaces",
      "moldes de blusas femininas",
      "moldes de vestidos femininos",
      "moldes de calças femininas",
      "moldes plus size",
      "bureau de modelagem feminina",
      "ampliação de moldes femininos",
      "risco de encaixe audaces",
      "modelagem digital para confecção feminina",
      "moldes de roupas femininas para imprimir",
      "modelagem de roupa feminina",
      "moldes para costura feminina",
      "kits de moldes femininos",
      "modelagem plus size",
    ],
    ogTitle: "Modelagem Feminina no Audaces | Bureau de Moldes para Roupas Femininas",
    ogDescription:
      "Moldes femininos profissionais no Audaces com Roque Rafael Proença e Maria Mousanira. Blusas, vestidos, calças, plus size. Atendimento nacional.",
    ogUrl: "https://www.technexos.com.br/bureau-modelagem-feminina",
    canonicalUrl: "https://www.technexos.com.br/bureau-modelagem-feminina",
    schema: {
      "@context": "https://schema.org",
      "@type": "Service",
      name: "Modelagem Feminina no Audaces",
      description:
        "Serviço completo de modelagem feminina no Audaces: desenvolvimento de moldes, gradação, encaixe automático e plotagem para confecções de moda feminina.",
      provider: {
        "@type": "ProfessionalService",
        name: "TechNexos Digital",
        url: "https://www.technexos.com.br",
      },
      areaServed: "BR",
      url: "https://www.technexos.com.br/bureau-modelagem-feminina",
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
        area: "modelagem_feminina",
        description: formData.description,
        created_at: new Date().toISOString(),
      });

      if (error) throw error;

      toast({
        title: "Solicitação enviada!",
        description: "Em breve entraremos em contato pelo WhatsApp para falar sobre sua modelagem feminina.",
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
      <header className="fixed left-0 right-0 top-0 z-50 border-b border-rose-100 bg-white/80 backdrop-blur-md">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-2">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-rose-500 shadow-lg shadow-rose-200">
              <Scissors className="h-6 w-6 text-white" />
            </div>
            <div className="text-left">
              <span className="text-sm font-black tracking-tighter sm:text-base">
                TechNexos<span className="text-rose-500">Moda Feminina</span>
              </span>
            </div>
          </div>

          <nav className="hidden items-center gap-8 md:flex">
            <Button
              onClick={scrollToForm}
              className="rounded-full bg-rose-500 px-6 font-bold text-white hover:bg-rose-600"
            >
              Solicitar Orçamento
            </Button>
          </nav>

          <button className="p-2 md:hidden" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
            {mobileMenuOpen ? <X className="text-slate-700" /> : <Menu className="text-slate-700" />}
          </button>
        </div>

        {mobileMenuOpen && (
          <div className="absolute w-full space-y-3 border-t border-rose-100 bg-white p-4 shadow-xl md:hidden">
            <Button onClick={() => { scrollToForm(); setMobileMenuOpen(false); }} className="w-full bg-rose-500 font-bold text-white">
              Solicitar Orçamento
            </Button>
          </div>
        )}
      </header>

      {/* Hero Section */}
      <section className="relative mt-[60px] overflow-hidden bg-gradient-to-br from-rose-900 via-pink-950 to-violet-950 text-white">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_rgba(244,114,182,0.15),_transparent_50%)]" />
        <div className="relative mx-auto grid max-w-7xl gap-10 px-4 pb-16 pt-12 lg:grid-cols-[1.1fr_0.9fr] lg:px-10 lg:pt-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex flex-col justify-center"
          >
            <div className="inline-flex items-center gap-2 rounded-full border border-rose-500/30 bg-rose-500/10 px-4 py-1.5 text-xs font-semibold tracking-wide text-rose-300 mb-6 w-fit">
              <Sparkles className="h-3.5 w-3.5 text-rose-400" />
              Modelagem Feminina Profissional
            </div>

            <h1 className="text-3xl font-extrabold leading-tight sm:text-4xl lg:text-[3.2rem] lg:leading-[1.1]">
              Modelagem Feminina no Audaces: Moldes de Roupas Femininas com <span className="bg-gradient-to-r from-rose-400 to-violet-400 bg-clip-text text-transparent">Precisão Profissional</span>.
            </h1>

            <div className="my-6 h-1 w-16 rounded-full bg-gradient-to-r from-rose-500 to-violet-400" />

            <p className="max-w-2xl text-base leading-relaxed text-rose-200 sm:text-lg">
              <b>Roque Rafael Proença</b> e <b>Maria Mousanira</b> — modelistas especializados em Audaces, ampliação e risco digital e manual. Terceirize sua modelagem feminina e receba <b>moldes profissionais</b> prontos para produção. Do croqui ao encaixe otimizado, sua coleção feminina completa em um só lugar.
            </p>

            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <Button
                onClick={scrollToForm}
                className="h-14 rounded-xl bg-rose-500 px-8 text-base font-black text-white shadow-xl shadow-rose-500/30 hover:bg-rose-600 hover:scale-105 transition-all"
              >
                Solicitar Orçamento via WhatsApp
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <a
                href="#sugestoes-moldes"
                className="flex h-14 items-center justify-center rounded-xl border border-rose-700 bg-rose-800/50 px-8 text-base font-bold text-white hover:bg-rose-800 transition-all"
              >
                Ver Sugestões de Moldes
              </a>
            </div>

            <div className="mt-8 flex flex-wrap items-center gap-6 text-sm text-rose-300 border-t border-rose-800 pt-6">
              <span className="flex items-center gap-1.5"><Star className="h-4 w-4 text-rose-400" /> Modelistas Especializados</span>
              <span className="flex items-center gap-1.5"><Target className="h-4 w-4 text-rose-400" /> Do PP ao Plus Size</span>
              <span className="flex items-center gap-1.5"><Clock className="h-4 w-4 text-violet-400" /> Entrega Rápida</span>
              <span className="flex items-center gap-1.5"><MapPin className="h-4 w-4 text-rose-400" /> Atendimento Nacional</span>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative flex items-center justify-center"
          >
            <div className="relative w-full max-w-lg">
              <div className="absolute -inset-1 rounded-3xl bg-gradient-to-tr from-rose-500 to-violet-400 opacity-30 blur-lg" />
              <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-slate-900/60 backdrop-blur-3xl">
                <img src={heroAudaces} alt="Logo Audaces - Modelagem Feminina Profissional" className="w-full h-72 sm:h-80 lg:h-96 object-contain rounded-t-2xl bg-slate-900 p-8" />
                <div className="border-t border-white/10 bg-slate-950/90 p-4">
                  <div className="flex items-center justify-between text-xs text-rose-300 font-bold mb-1">
                    <span>MODELAGEM FEMININA AUDACES</span>
                    <span className="text-rose-400">94.8% APROVEITAMENTO</span>
                  </div>
                  <div className="h-1.5 w-full rounded-full bg-slate-800 overflow-hidden">
                    <div className="h-full w-[94.8%] bg-gradient-to-r from-rose-500 to-violet-400 rounded-full" />
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Form Section */}
      <section id="orcamento-form" className="bg-rose-950 px-4 py-20 lg:px-10">
        <div className="mx-auto max-w-7xl">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-[0.9fr_1.1fr] items-center">
            <div className="space-y-6">
              <div className="border-l-4 border-rose-400 pl-6">
                <h2 className="text-3xl font-extrabold text-white sm:text-4xl">
                  Solicite seu Orçamento de Modelagem Feminina
                </h2>
                <p className="mt-4 text-lg text-rose-200 leading-relaxed">
                  Preencha os dados abaixo e receba uma proposta personalizada de modelagem feminina para sua coleção. Entraremos em contato pelo <b className="text-white">WhatsApp</b> em até <b className="text-white">24 horas</b>.
                </p>
              </div>

              <div className="rounded-2xl border border-rose-800 bg-rose-900/50 p-6">
                <div className="flex items-center gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-rose-500/20">
                    <Zap className="h-6 w-6 text-rose-400" />
                  </div>
                  <p className="text-sm text-rose-200">
                    Orçamento <b className="text-white">personalizado</b> para seu tipo de coleção e volume de produção. Sem compromisso.
                  </p>
                </div>
              </div>

              <div className="flex flex-wrap gap-3">
                {["Modelagem Feminina", "Ampliação", "Encaixe", "Plotagem", "DXF/PLOT"].map((tag) => (
                  <span key={tag} className="px-3 py-1.5 rounded-full border border-rose-700 text-xs font-bold text-rose-300">
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
                Solicitar Orçamento de Modelagem Feminina
              </h3>
              <form onSubmit={handleSubmit} className="mt-8 space-y-5">
                <div className="space-y-1.5">
                  <Label htmlFor="name" className="font-bold text-slate-700">
                    Nome do Responsável ou Dono do Ateliê
                  </Label>
                  <Input
                    id="name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="Seu nome completo"
                    required
                    className="h-12 bg-slate-50 border-slate-200 text-slate-900 focus:bg-white focus:border-rose-500 focus:ring-rose-500 transition-all placeholder:text-slate-400"
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
                    className="h-12 bg-slate-50 border-slate-200 text-slate-900 focus:bg-white focus:border-rose-500 focus:ring-rose-500 transition-all placeholder:text-slate-400"
                  />
                </div>

                <div className="space-y-1.5">
                  <Label htmlFor="company" className="font-bold text-slate-700">
                    Nome da Marca ou Ateliê
                  </Label>
                  <Input
                    id="company"
                    value={formData.company}
                    onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                    placeholder="Ex.: Meu Ateliê de Moda Feminina"
                    className="h-12 bg-slate-50 border-slate-200 text-slate-900 focus:bg-white focus:border-rose-500 focus:ring-rose-500 transition-all placeholder:text-slate-400"
                  />
                </div>

                <div className="space-y-1.5">
                  <Label htmlFor="description" className="font-bold text-slate-700">
                    Conte um pouco sobre sua coleção feminina
                  </Label>
                  <textarea
                    id="description"
                    value={formData.description}
                    onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                    placeholder="Ex.: Preciso da modelagem de 5 blusas femininas e 3 vestidos do PP ao GG, com encaixe para malha..."
                    required
                    className="min-h-28 w-full rounded-md border border-slate-200 bg-slate-50 p-3 text-sm text-slate-900 outline-none focus:bg-white focus:border-rose-500 focus:ring-1 focus:ring-rose-500 transition-all placeholder:text-slate-400"
                  />
                </div>

                <Button
                  type="submit"
                  disabled={submitting}
                  className="w-full h-14 bg-rose-500 font-black text-white hover:bg-rose-600 shadow-lg shadow-rose-500/30 transition-all"
                >
                  {submitting ? "Enviando..." : "Solicitar Orçamento de Modelagem Feminina"}
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

      {/* Trust Stats */}
      <section className="bg-white py-8 border-b border-rose-100 shadow-sm">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div>
              <p className="text-3xl lg:text-4xl font-extrabold text-rose-500">Até 15%</p>
              <p className="text-xs lg:text-sm font-semibold text-slate-500 mt-1">Economia de Tecido</p>
            </div>
            <div className="border-l border-rose-200">
              <p className="text-3xl lg:text-4xl font-extrabold text-rose-500">100% Digital</p>
              <p className="text-xs lg:text-sm font-semibold text-slate-500 mt-1">Modelagem no Audaces</p>
            </div>
            <div className="border-l border-rose-200">
              <p className="text-3xl lg:text-4xl font-extrabold text-rose-500">.DXF/.PLOT</p>
              <p className="text-xs lg:text-sm font-semibold text-slate-500 mt-1">Formatos Universais</p>
            </div>
            <div className="border-l border-rose-200">
              <p className="text-3xl lg:text-4xl font-extrabold text-rose-500">Nacional</p>
              <p className="text-xs lg:text-sm font-semibold text-slate-500 mt-1">Atendimento em Todo Brasil</p>
            </div>
          </div>
        </div>
      </section>

      {/* Primary Service Section */}
      <section id="servico-principal" className="bg-white px-4 py-20 lg:px-10">
        <div className="mx-auto max-w-7xl">
          <div className="mx-auto max-w-3xl text-center mb-14">
            <div className="inline-flex h-9 items-center justify-center rounded-full bg-rose-100 px-4 text-sm font-bold text-rose-700 mb-4">
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
                  alt="Profissional operando software Audaces - Modelagem Feminina"
                  className="w-full h-64 sm:h-80 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-transparent to-transparent" />
                <p className="absolute bottom-4 left-6 text-white text-sm font-bold">
                  Roque Rafael Proença e Maria Mousanira — modelistas especializados em Audaces
                </p>
              </div>

              <div className="mt-8 space-y-4">
                <p className="text-base leading-relaxed text-slate-700" dangerouslySetInnerHTML={{ __html: primaryService.copy.split('\n\n')[0] }} />
                <p className="text-base leading-relaxed text-slate-700" dangerouslySetInnerHTML={{ __html: primaryService.copy.split('\n\n')[1] }} />
                <p className="text-base leading-relaxed text-slate-700" dangerouslySetInnerHTML={{ __html: primaryService.copy.split('\n\n')[2] }} />
              </div>

              <div className="mt-6 flex items-center gap-2 text-sm font-bold text-rose-600 bg-rose-50 rounded-full px-4 py-2 w-fit">
                <Check className="h-4 w-4" />
                {primaryService.delivery}
              </div>
            </div>

            <div className="lg:col-span-4 lg:col-start-9">
              <div className="rounded-2xl border border-rose-100 bg-gradient-to-br from-rose-50 to-white p-6 shadow-lg">
                <h3 className="text-lg font-black text-slate-900 mb-4">O que está incluso:</h3>
                <ul className="space-y-3">
                  {[
                    { icon: Palette, text: "Desenvolvimento de moldes femininos do zero (croqui/foto/peça física)" },
                    { icon: Layers, text: "Gradação completa do PP ao Plus Size" },
                    { icon: Grid, text: "Encaixe otimizado com máximo aproveitamento de tecido" },
                    { icon: FileText, text: "Ficha técnica com consumo por peça e rendimento" },
                    { icon: FileCode, text: "Entrega em .DXF, .PLOT e .PDF — compatível com qualquer máquina" },
                    { icon: Printer, text: "Opção de plotagem física em papel de alta densidade" },
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-rose-100 text-rose-600 mt-0.5">
                        <item.icon className="h-4 w-4" />
                      </div>
                      <span className="text-sm text-slate-700 font-medium">{item.text}</span>
                    </li>
                  ))}
                </ul>
                <Button
                  onClick={scrollToForm}
                  className="mt-6 w-full h-12 rounded-xl bg-rose-500 font-black text-white hover:bg-rose-600 shadow-lg shadow-rose-500/30 transition-all"
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
              Serviços Especializados em Moda Feminina
            </h2>
            <p className="mt-4 text-lg text-slate-600">
              Além da modelagem feminina, oferecemos soluções completas para cada etapa da sua produção.
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
                className="group relative rounded-2xl border border-slate-200 bg-white p-6 shadow-md transition-all hover:border-rose-200 hover:shadow-lg hover:-translate-y-1 sm:p-8"
              >
                <div className="flex items-start gap-5">
                  <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl bg-rose-50 text-rose-600 transition-colors group-hover:bg-rose-500 group-hover:text-white">
                    <svc.icon className="h-7 w-7" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="text-xl font-bold text-slate-900">{svc.title}</h3>
                    <p className="mt-1 text-sm font-semibold text-rose-600">{svc.subtitle}</p>
                    <p className="mt-3 text-sm leading-relaxed text-slate-600" dangerouslySetInnerHTML={{ __html: svc.copy }} />
                    <div className="mt-4 flex items-center gap-2 text-xs font-bold text-rose-600 bg-rose-50 rounded-full px-3 py-1.5 w-fit">
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

      {/* Mold Suggestions Section */}
      <section id="sugestoes-moldes" className="bg-gradient-to-br from-rose-50 via-white to-violet-50 px-4 py-20 lg:px-10">
        <div className="mx-auto max-w-7xl">
          <div className="mx-auto max-w-3xl text-center mb-14">
            <div className="inline-flex h-9 items-center justify-center rounded-full bg-violet-100 px-4 text-sm font-bold text-violet-700 mb-4">
              <Heart className="h-4 w-4 mr-1.5" /> Sugestões de Moldes Femininos
            </div>
            <h2 className="text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
              Moldes de Roupas Femininas Prontos
            </h2>
            <p className="mt-4 text-lg text-slate-600">
              Veja algumas sugestões de moldes femininos que desenvolvemos no Audaces. Clique no botão do WhatsApp para solicitar o seu ou pedir um orçamento personalizado.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {moldSuggestions.map((mold, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="group rounded-2xl border border-rose-100 bg-white shadow-md overflow-hidden hover:shadow-xl hover:-translate-y-1 transition-all"
              >
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={mold.image}
                    alt={mold.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                  <span className="absolute bottom-3 left-3 text-white text-xs font-bold bg-rose-500/80 px-2 py-1 rounded-full">
                    Molde Digital
                  </span>
                </div>
                <div className="p-5">
                  <h3 className="text-base font-bold text-slate-900">{mold.name}</h3>
                  <p className="mt-2 text-xs text-slate-500 leading-relaxed">
                    {mold.description}
                  </p>
                  <a
                    href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(mold.whatsapp)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-4 flex h-10 w-full items-center justify-center gap-2 rounded-xl bg-emerald-500 text-xs font-black text-white hover:bg-emerald-600 transition-all"
                  >
                    <Phone className="h-4 w-4" /> Solicitar via WhatsApp
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Mold Subgroups Section */}
      <section id="subgrupos" className="bg-white px-4 py-20 lg:px-10">
        <div className="mx-auto max-w-7xl">
          <div className="mx-auto max-w-3xl text-center mb-14">
            <div className="inline-flex h-9 items-center justify-center rounded-full bg-rose-100 px-4 text-sm font-bold text-rose-700 mb-4">
              <Layers className="h-4 w-4 mr-1.5" /> Subgrupos de Moldes Femininos
            </div>
            <h2 className="text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
              Variedade de Moldes de Roupas Femininas
            </h2>
            <p className="mt-4 text-lg text-slate-600">
              Trabalhamos com todos os segmentos da moda feminina. São blusas, vestidos, calças, saias, jaquetas e muito mais — do PP ao Plus Size.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {moldSubgroups.map((group, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="group rounded-2xl border border-rose-100 bg-gradient-to-br from-white to-rose-50 p-6 shadow-sm hover:shadow-lg hover:border-rose-200 transition-all"
              >
                <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-rose-100 text-rose-600 mb-4 group-hover:bg-rose-500 group-hover:text-white transition-colors">
                  <group.icon className="h-7 w-7" />
                </div>
                <h3 className="text-lg font-bold text-slate-900">{group.name}</h3>
                <p className="mt-2 text-sm text-slate-600 leading-relaxed">{group.description}</p>
                <a
                  href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(`Olá! Quero saber mais sobre moldes de ${group.name.toLowerCase()}.`)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-4 inline-flex items-center gap-2 text-sm font-bold text-rose-600 hover:text-rose-700 transition-colors"
                >
                  Consultar via WhatsApp <ArrowRight className="h-4 w-4" />
                </a>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Digitalização Section */}
      <section className="bg-slate-50 px-4 py-20 lg:px-10 border-b border-rose-100">
        <div className="mx-auto max-w-7xl">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 items-center">
            <div className="lg:col-span-6">
              <div className="inline-flex h-9 items-center justify-center rounded-full bg-red-100 px-4 text-sm font-bold text-red-700 mb-4">
                <FileText className="h-4 w-4 mr-1.5" /> Acervo Digital
              </div>
              <h2 className="text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
                Digitalizamos Seus Moldes Físicos e Entregamos <span className="text-rose-500">Prontos para Produção</span>
              </h2>
              <p className="mt-4 text-lg text-slate-600 leading-relaxed">
                Tem moldes de papel kraft ocupando espaço no seu ateliê? Nós <b>digitalizamos todo o seu acervo</b> com precisão milimétrica e devolvemos em formato digital — incluindo gradação, encaixe e ficha técnica.
              </p>
              <div className="mt-8 space-y-5">
                <div className="flex gap-4 p-4 rounded-xl bg-white border border-slate-200">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-red-50">
                    <FileText className="h-6 w-6 text-red-600" />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900">Digitalização de Acervo Físico</h4>
                    <p className="text-sm text-slate-500 mt-1">Escaneamos seus moldes de papel em mesa digitalizadora profissional com <b>precisão milimétrica</b>. Cada peça vira um arquivo .DXF ou PDF fiel ao original, pronto para ser reutilizado.</p>
                  </div>
                </div>
                <div className="flex gap-4 p-4 rounded-xl bg-white border border-slate-200">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-rose-50">
                    <Layers className="h-6 w-6 text-rose-500" />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900">Gradação e Encaixe Já Inclusos</h4>
                    <p className="text-sm text-slate-500 mt-1">Além de digitalizar, já entregamos os moldes <b>ampliados na grade desejada</b> (PP ao Plus Size) e <b>encaixados</b> no Audaces com máximo aproveitamento de tecido.</p>
                  </div>
                </div>
                <div className="flex gap-4 p-4 rounded-xl bg-white border border-slate-200">
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
                  className="h-14 rounded-xl bg-rose-500 px-8 text-base font-black text-white shadow-xl shadow-rose-500/30 hover:bg-rose-600 transition-all"
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
                <div className="absolute -inset-2 rounded-3xl bg-gradient-to-tr from-red-500 to-rose-500 opacity-20 blur-xl" />
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
                    <span className="text-rose-400 font-bold">● Pronto para produção</span>
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
              <div className="inline-flex h-9 items-center justify-center rounded-full bg-rose-100 px-4 text-sm font-bold text-rose-700 mb-4">
                <TrendingUp className="h-4 w-4 mr-1.5" /> Vantagens
              </div>
              <h2 className="text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
                Por Que Terceirizar Sua Modelagem Feminina?
              </h2>
              <p className="mt-4 text-lg text-slate-600 leading-relaxed">
                Elimine custos com software, equipe interna e retrabalho. Nossa engenharia de modelagem feminina no Audaces entrega precisão milimétrica, economia de tecido e agilidade que seu ateliê precisa para crescer.
              </p>
              <div className="mt-8 space-y-4">
                {benefits.map((b, i) => (
                  <div key={i} className="flex gap-4 p-3 rounded-xl hover:bg-rose-50 transition-colors">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-rose-50">
                      <b.icon className="h-5 w-5 text-rose-500" />
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
                <div className="absolute -inset-2 rounded-3xl bg-gradient-to-tr from-rose-500 to-violet-400 opacity-20 blur-xl" />
                <div className="relative bg-slate-900 text-white p-4 rounded-2xl border border-slate-800 shadow-xl">
                  <div className="flex items-center justify-between border-b border-slate-800 pb-3 mb-3">
                    <span className="text-xs font-bold tracking-wider text-slate-400">ENCAIXE OTIMIZADO AUDACES</span>
                    <span className="px-2 py-0.5 rounded bg-rose-500/20 text-rose-400 text-[10px] font-bold">94.8%</span>
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
                    <span className="px-2 py-0.5 rounded bg-rose-500/20 text-rose-400 text-[10px] font-bold">ENTREGUE</span>
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

      {/* FAQ Section */}
      <section id="faq" className="bg-slate-50 px-4 py-20 lg:px-10">
        <div className="mx-auto max-w-3xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
              Perguntas Frequentes
            </h2>
            <p className="mt-4 text-lg text-slate-600">
              Tire suas principais dúvidas sobre modelagem feminina no Audaces.
            </p>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, i) => (
              <details
                key={i}
                className="group rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition-all open:shadow-md open:border-rose-200"
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
      <section className="relative overflow-hidden bg-gradient-to-br from-rose-900 via-pink-950 to-violet-950 px-4 py-20 text-center text-white">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-rose-500/10 rounded-full blur-3xl" />
        <div className="relative z-10 mx-auto max-w-4xl space-y-6">
          <h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl md:text-5xl leading-tight">
            Sua Moda Feminina Merece Moldes Profissionais. <br />
            <span className="bg-gradient-to-r from-rose-400 to-violet-400 bg-clip-text text-transparent">
              Qualidade, Precisão e Velocidade para Sua Coleção.
            </span>
          </h2>
          <p className="text-rose-200 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
            Solicite um orçamento e descubra como a modelagem feminina Audaces pode transformar sua produção.
          </p>
          <div className="pt-4 flex flex-col sm:flex-row justify-center gap-4">
            <Button
              onClick={scrollToForm}
              className="h-14 rounded-xl bg-rose-500 px-10 text-base font-black text-white shadow-xl shadow-rose-500/30 hover:bg-rose-600 transition-all"
            >
              Solicitar Orçamento Agora
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <a
              href="tel:32991075164"
              className="flex h-14 items-center justify-center rounded-xl border border-rose-700 bg-rose-800/50 px-8 text-base font-bold text-white hover:bg-rose-800 transition-all"
            >
              <Phone className="mr-2 h-5 w-5" /> (32) 99107-5164
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-rose-200 bg-white py-12">
        <div className="mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
          <div className="flex items-center justify-center gap-2 mb-4">
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-rose-500 text-white">
              <Scissors className="h-4 w-4" />
            </div>
            <span className="font-extrabold text-lg text-slate-900">
              TechNexos<span className="text-rose-500">Moda Feminina</span>
            </span>
          </div>
          <p className="text-xs sm:text-sm text-slate-500 max-w-md mx-auto">
            Modelagem feminina no Audaces com Roque Rafael Proença e Maria Mousanira. Atendimento nacional via arquivos digitais e plotagem para Juiz de Fora e região.
          </p>
          <p className="text-xs text-slate-400 mt-6 pt-6 border-t border-rose-100">
            &copy; {new Date().getFullYear()} TechNexos. Todos os direitos reservados.
          </p>
        </div>
      </footer>

      <WhatsAppFloat message={whatsappMessage} />
    </div>
  );
}
