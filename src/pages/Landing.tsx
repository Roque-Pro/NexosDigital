import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { useSEO } from "@/hooks/useSEO";
import {
  Code2,
  Zap,
  TrendingUp,
  Check,
  ArrowRight,
  Sparkles,
  ArrowUp,
  Menu,
  X,
  Server,
  ShieldCheck,
  MousePointer2,
  BarChart3,
  Cpu,
  Database,
  Layers,
  Globe,
  MessageSquare,
  BriefcaseBusiness,
  Gauge,
  LineChart,
  SearchCheck,
  Workflow,
  Settings2,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import WhatsAppFloat from "@/components/WhatsAppFloat";

const strategicSteps = [
  {
    icon: SearchCheck,
    title: "Diagnóstico técnico e comercial",
    description:
      "Mapeamos a operação, os canais de aquisição e os gargalos de conversão para priorizar o que gera impacto real no seu faturamento.",
  },
  {
    icon: Workflow,
    title: "Estruturação do ecossistema",
    description:
      "Conectamos site, páginas, tracking, campanhas, CRM e automações para que marketing e vendas parem de trabalhar de forma fragmentada.",
  },
  {
    icon: Settings2,
    title: "Otimização contínua",
    description:
      "Depois da implantação, acompanhamos números, removemos atritos e refinamos a estrutura para sustentar crescimento com mais previsibilidade.",
  },
];

const deliveryBlocks = [
  {
    icon: BriefcaseBusiness,
    title: "Projetos orientados a receita",
    description:
      "Cada entrega nasce para resolver um objetivo concreto: gerar mais leads qualificados, vender mais ou reduzir desperdício operacional.",
  },
  {
    icon: Gauge,
    title: "Performance técnica como base",
    description:
      "Sites rápidos, sistemas estáveis, rastreamento confiável e páginas desenhadas para suportar tráfego e conversão ao mesmo tempo.",
  },
  {
    icon: LineChart,
    title: "Crescimento medido em dados",
    description:
      "Você acompanha indicadores objetivos: origem dos leads, custo por aquisição, taxa de conversão, evolução orgânica e retorno sobre mídia.",
  },
];

const Landing = () => {
  const navigate = useNavigate();
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 300);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  useSEO({
    title:
      "TechNexos Digital | Desenvolvimento, tráfego pago e SEO para crescer com previsibilidade",
    description:
      "A TechNexos desenvolve sites, sistemas, operações de tráfego pago e SEO técnico para empresas que precisam gerar demanda, converter melhor e escalar com mais controle.",
    keywords: [
      "desenvolvimento de sistemas",
      "desenvolvimento web",
      "criação de sites profissionais",
      "tráfego pago",
      "gestão de tráfego",
      "SEO técnico",
      "seo para empresas",
      "landing page de alta conversão",
      "automação comercial",
      "marketing de performance",
      "TechNexos Digital",
      "desenvolvimento react node",
    ],
    ogTitle: "TechNexos Digital | Sistemas, tráfego pago e SEO técnico",
    ogDescription:
      "Estruturamos sua presença digital para atrair demanda, melhorar conversão e transformar tecnologia em crescimento mensurável.",
    ogUrl: "https://www.technexos.com.br",
    canonicalUrl: "https://www.technexos.com.br",
    schema: {
      "@context": "https://schema.org",
      "@type": "ProfessionalService",
      name: "TechNexos Digital",
      description:
        "Desenvolvimento web, tráfego pago, SEO técnico e automação para crescimento digital",
      url: "https://www.technexos.com.br",
      telephone: "+55-32-99107-5164",
      areaServed: ["BR"],
      serviceType: [
        "Desenvolvimento Web",
        "Desenvolvimento de Sistemas",
        "Gestão de Tráfego Pago",
        "SEO Técnico",
        "Automação Comercial",
      ],
      offers: {
        "@type": "Offer",
        name: "Ecossistemas Digitais de Performance",
      },
      sameAs: ["https://www.instagram.com/technexosdigital/"],
    },
  });

  return (
    <div className="min-h-screen overflow-hidden bg-white font-sans text-slate-900">
      <header className="fixed left-0 right-0 top-0 z-50 border-b border-slate-100 bg-white/80 backdrop-blur-md">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-2">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-600 shadow-lg shadow-blue-200">
              <Code2 className="h-6 w-6 text-white" />
            </div>
            <h1 className="text-xl font-black tracking-tighter">
              TechNexos<span className="text-blue-600">Digital</span>
            </h1>
          </div>

          <nav className="hidden items-center gap-8 md:flex">
            <button
              onClick={() =>
                document.getElementById("servicos")?.scrollIntoView({ behavior: "smooth" })
              }
              className="text-sm font-bold text-slate-600 transition-colors hover:text-blue-600"
            >
              Serviços
            </button>
            <button
              onClick={() => navigate("/about-me")}
              className="text-sm font-bold text-slate-600 transition-colors hover:text-blue-600"
            >
              Especialista
            </button>
            <button
              onClick={() =>
                document.getElementById("faq")?.scrollIntoView({ behavior: "smooth" })
              }
              className="text-sm font-bold text-slate-600 transition-colors hover:text-blue-600"
            >
              FAQ
            </button>
            <Button
              onClick={() => window.open("https://wa.me/5532991075164")}
              className="rounded-full bg-blue-600 px-6 font-bold text-white hover:bg-blue-700"
            >
              Consultoria Grátis
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
                document.getElementById("servicos")?.scrollIntoView({ behavior: "smooth" });
                setMobileMenuOpen(false);
              }}
              className="block w-full p-2 text-left font-bold text-slate-700"
            >
              Serviços
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
            <Button
              onClick={() => window.open("https://wa.me/5532991075164")}
              className="w-full bg-blue-600 py-6 font-bold"
            >
              Falar no WhatsApp
            </Button>
          </div>
        )}
      </header>

      <section className="relative px-4 pb-20 pt-32 lg:pb-32 lg:pt-48">
        <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-16 lg:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-blue-100 bg-blue-50 px-4 py-1.5 text-xs font-black uppercase tracking-widest text-blue-700">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-blue-400 opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-blue-600" />
              </span>
              Especialista em Escala Digital
            </div>
            <h2 className="mb-8 text-5xl font-black italic leading-[0.95] tracking-tighter sm:text-6xl lg:text-8xl">
              Transformamos <span className="text-blue-600">tecnologia</span> em{" "}
              <span className="underline decoration-blue-600 underline-offset-8">
                crescimento real.
              </span>
            </h2>
            <p className="mb-10 max-w-2xl text-xl leading-relaxed text-slate-600">
              A TechNexos une <strong>desenvolvimento web e sistemas</strong>,{" "}
              <strong>tráfego pago</strong> e <strong>SEO técnico</strong> para empresas
              que precisam vender mais com estrutura. Criamos operações digitais que
              atraem demanda, convertem com mais eficiência e sustentam escala sem
              improviso.
            </p>
            <div className="mb-10 grid max-w-2xl grid-cols-1 gap-4 sm:grid-cols-3">
              <div className="rounded-3xl border border-slate-200 bg-white px-5 py-4 shadow-sm">
                <p className="text-sm font-black text-slate-900">Sites e sistemas</p>
                <p className="mt-1 text-sm text-slate-500">
                  Projetos rápidos, estáveis e prontos para vender.
                </p>
              </div>
              <div className="rounded-3xl border border-slate-200 bg-white px-5 py-4 shadow-sm">
                <p className="text-sm font-black text-slate-900">Tráfego com tracking</p>
                <p className="mt-1 text-sm text-slate-500">
                  Campanhas orientadas por dados e ROI.
                </p>
              </div>
              <div className="rounded-3xl border border-slate-200 bg-white px-5 py-4 shadow-sm">
                <p className="text-sm font-black text-slate-900">SEO técnico</p>
                <p className="mt-1 text-sm text-slate-500">
                  Autoridade orgânica com base sólida.
                </p>
              </div>
            </div>
            <div className="flex flex-col gap-4 sm:flex-row">
              <Button
                onClick={() => window.open("https://wa.me/5532991075164")}
                size="lg"
                className="h-16 rounded-2xl bg-blue-600 px-10 text-lg font-black text-white shadow-xl shadow-blue-100 transition-all hover:scale-105 hover:bg-blue-700"
              >
                Analisar meu Projeto <ArrowRight className="ml-2" />
              </Button>
              <Button
                onClick={() =>
                  document.getElementById("servicos")?.scrollIntoView({ behavior: "smooth" })
                }
                size="lg"
                variant="outline"
                className="h-16 rounded-2xl border-2 border-slate-200 px-10 text-lg font-bold transition-all hover:bg-slate-50"
              >
                Nossos Serviços
              </Button>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
            className="relative"
          >
            <div className="group relative z-10 overflow-hidden rounded-[3rem] border-8 border-white shadow-[0_32px_64px_rgba(0,0,0,0.1)]">
              <img
                src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2426&auto=format&fit=crop"
                alt="Performance Digital"
                className="h-auto w-full transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-blue-900/40 via-transparent to-transparent opacity-60" />

              <div className="absolute bottom-8 left-8 right-8 rounded-3xl border border-white/50 bg-white/95 p-6 shadow-2xl backdrop-blur-md">
                <div className="flex items-center gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-blue-600 text-white">
                    <TrendingUp className="h-6 w-6" />
                  </div>
                  <div>
                    <p className="text-xs font-bold uppercase tracking-widest text-blue-600">
                      Estrutura para crescer
                    </p>
                    <p className="font-black italic text-slate-900">
                      Tecnologia, aquisição e conversão trabalhando juntas.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="absolute -right-12 -top-12 -z-10 h-64 w-64 rounded-full bg-blue-400/10 blur-3xl" />
            <div className="absolute -bottom-12 -left-12 -z-10 h-64 w-64 rounded-full bg-slate-400/10 blur-3xl" />
          </motion.div>
        </div>
      </section>

      <section className="border-b border-slate-50 bg-white px-4 py-24">
        <div className="mx-auto max-w-7xl">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-3">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="group space-y-6 rounded-[2.5rem] p-8 transition-colors hover:bg-slate-50"
            >
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-600 text-white shadow-lg shadow-blue-100 transition-transform group-hover:scale-110">
                <ShieldCheck className="h-7 w-7" />
              </div>
              <h3 className="text-3xl font-black tracking-tighter">Engenharia de estabilidade</h3>
              <p className="leading-relaxed text-slate-600">
                Não entregamos apenas um site bonito. Estruturamos ambientes rápidos,
                confiáveis e preparados para receber tráfego, leads e operação sem travar
                seu crescimento.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="group space-y-6 rounded-[2.5rem] p-8 transition-colors hover:bg-slate-50"
            >
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-600 text-white shadow-lg shadow-blue-100 transition-transform group-hover:scale-110">
                <BarChart3 className="h-7 w-7" />
              </div>
              <h3 className="text-3xl font-black tracking-tighter">Marketing orientado por dados</h3>
              <p className="leading-relaxed text-slate-600">
                Tráfego sem mensuração é desperdício. Implementamos tracking, leitura de
                funil e análise de desempenho para que cada investimento tenha contexto.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="group space-y-6 rounded-[2.5rem] p-8 transition-colors hover:bg-slate-50"
            >
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-600 text-white shadow-lg shadow-blue-100 transition-transform group-hover:scale-110">
                <MousePointer2 className="h-7 w-7" />
              </div>
              <h3 className="text-3xl font-black tracking-tighter">Design que ajuda a vender</h3>
              <p className="leading-relaxed text-slate-600">
                Interface, copy e estrutura de navegação precisam reduzir fricção. Criamos
                páginas e fluxos que ajudam o usuário a avançar até a ação.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      <section id="servicos" className="bg-slate-50 px-4 py-24">
        <div className="mx-auto max-w-7xl">
          <div className="mb-20 text-center">
            <h3 className="mb-6 text-4xl font-black tracking-tighter sm:text-6xl">
              A solução <span className="text-blue-600">ponta a ponta.</span>
            </h3>
            <p className="mx-auto max-w-3xl text-xl text-slate-600">
              Não entregamos peças soltas. Estruturamos aquisição, presença digital e
              conversão para que seu investimento em marketing tenha base técnica e
              resultado prático.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            <div className="group rounded-[2.5rem] border border-slate-100 bg-white p-10 shadow-xl transition-all hover:border-blue-300">
              <div className="mb-8 flex h-16 w-16 items-center justify-center rounded-2xl bg-blue-50 text-blue-600 transition-transform group-hover:scale-110">
                <Code2 className="h-8 w-8" />
              </div>
              <h4 className="mb-4 text-2xl font-black">Desenvolvimento Web & SaaS</h4>
              <p className="mb-8 leading-relaxed text-slate-600">
                Construímos sites institucionais, landing pages, painéis e sistemas sob
                medida com foco em velocidade, estabilidade e experiência de conversão.
              </p>
              <ul className="space-y-3">
                <li className="flex items-center gap-2 text-sm font-bold text-slate-500">
                  <Check className="h-4 w-4 text-blue-600" /> Arquitetura de Software
                </li>
                <li className="flex items-center gap-2 text-sm font-bold text-slate-500">
                  <Check className="h-4 w-4 text-blue-600" /> Dashboards Customizados
                </li>
                <li className="flex items-center gap-2 text-sm font-bold text-slate-500">
                  <Check className="h-4 w-4 text-blue-600" /> Landing Pages para Captação
                </li>
              </ul>
            </div>

            <div className="group rounded-[2.5rem] border border-slate-100 bg-white p-10 shadow-xl transition-all hover:border-blue-300">
              <div className="mb-8 flex h-16 w-16 items-center justify-center rounded-2xl bg-blue-50 text-blue-600 transition-transform group-hover:scale-110">
                <Zap className="h-8 w-8" />
              </div>
              <h4 className="mb-4 text-2xl font-black">Gestão de Tráfego Pago</h4>
              <p className="mb-8 leading-relaxed text-slate-600">
                Planejamos, configuramos e otimizamos campanhas no Google Ads e Meta Ads
                para gerar demanda qualificada com leitura clara de custo, retorno e
                escala.
              </p>
              <ul className="space-y-3">
                <li className="flex items-center gap-2 text-sm font-bold text-slate-500">
                  <Check className="h-4 w-4 text-blue-600" /> Google Search de Elite
                </li>
                <li className="flex items-center gap-2 text-sm font-bold text-slate-500">
                  <Check className="h-4 w-4 text-blue-600" /> Tracking de Conversão
                </li>
                <li className="flex items-center gap-2 text-sm font-bold text-slate-500">
                  <Check className="h-4 w-4 text-blue-600" /> Estratégia de Escala e ROAS
                </li>
              </ul>
            </div>

            <div className="group rounded-[2.5rem] border border-slate-100 bg-white p-10 shadow-xl transition-all hover:border-blue-300">
              <div className="mb-8 flex h-16 w-16 items-center justify-center rounded-2xl bg-blue-50 text-blue-600 transition-transform group-hover:scale-110">
                <TrendingUp className="h-8 w-8" />
              </div>
              <h4 className="mb-4 text-2xl font-black">SEO Técnico & Orgânico</h4>
              <p className="mb-8 leading-relaxed text-slate-600">
                Ajustamos estrutura, performance, dados semânticos e arquitetura de
                conteúdo para aumentar relevância, indexação e geração de demanda
                orgânica.
              </p>
              <ul className="space-y-3">
                <li className="flex items-center gap-2 text-sm font-bold text-slate-500">
                  <Check className="h-4 w-4 text-blue-600" /> Indexação Semântica
                </li>
                <li className="flex items-center gap-2 text-sm font-bold text-slate-500">
                  <Check className="h-4 w-4 text-blue-600" /> Meta-Tags Premium
                </li>
                <li className="flex items-center gap-2 text-sm font-bold text-slate-500">
                  <Check className="h-4 w-4 text-blue-600" /> Core Web Vitals e Schema
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[linear-gradient(135deg,#08152a_0%,#0d2d66_100%)] px-4 py-24 text-white">
        <div className="mx-auto max-w-7xl">
          <div className="mb-16 max-w-3xl">
            <p className="mb-4 text-sm font-black uppercase tracking-[0.25em] text-blue-200">
              Como trabalhamos
            </p>
            <h3 className="mb-6 text-4xl font-black tracking-tighter sm:text-6xl">
              Menos achismo. Mais estrutura para vender.
            </h3>
            <p className="text-lg leading-relaxed text-blue-100">
              Quando um negócio não cresce no digital, o problema raramente está em um
              único ponto. Normalmente faltam clareza estratégica, integração entre canais
              e uma operação preparada para converter.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            {strategicSteps.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.08 }}
                className="rounded-[2.25rem] border border-white/10 bg-white/5 p-8 backdrop-blur-sm"
              >
                <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-white/10 text-blue-200">
                  <item.icon className="h-8 w-8" />
                </div>
                <p className="mb-3 text-sm font-black text-blue-200">0{index + 1}</p>
                <h4 className="mb-4 text-2xl font-black">{item.title}</h4>
                <p className="leading-relaxed text-blue-100">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="overflow-hidden bg-white px-4 py-24">
        <div className="mx-auto flex max-w-7xl flex-col items-center gap-16 lg:flex-row">
          <div className="flex-1">
            <h3 className="mb-8 text-4xl font-black italic tracking-tighter sm:text-6xl">
              Nossa <span className="text-blue-600">metodologia.</span>
            </h3>
            <div className="space-y-12">
              <div className="flex gap-6">
                <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-blue-100 font-black text-blue-600">
                  01
                </div>
                <div>
                  <h4 className="mb-2 text-xl font-black uppercase tracking-tighter">
                    Diagnóstico & Estratégia
                  </h4>
                  <p className="text-slate-600">
                    Mapeamos processos, funis, canais e oportunidades para definir uma rota
                    de crescimento compatível com o momento da sua empresa.
                  </p>
                </div>
              </div>
              <div className="flex gap-6">
                <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-blue-100 font-black text-blue-600">
                  02
                </div>
                <div>
                  <h4 className="mb-2 text-xl font-black uppercase tracking-tighter">
                    Engenharia & Implementação
                  </h4>
                  <p className="text-slate-600">
                    Desenvolvemos a estrutura digital, configuramos campanhas e implantamos
                    rastreamento para transformar estratégia em operação.
                  </p>
                </div>
              </div>
              <div className="flex gap-6">
                <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-blue-100 font-black text-blue-600">
                  03
                </div>
                <div>
                  <h4 className="mb-2 text-xl font-black uppercase tracking-tighter">
                    Escala & Otimização
                  </h4>
                  <p className="text-slate-600">
                    Analisamos dados em tempo real para escalar o que traz retorno e ajustar
                    rapidamente o que limita sua conversão.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="relative flex-1">
            <div className="rounded-[3rem] bg-slate-900 p-8 text-white shadow-2xl sm:p-12">
              <div className="mb-8 flex items-center gap-4">
                <div className="h-3 w-3 rounded-full bg-red-500" />
                <div className="h-3 w-3 rounded-full bg-yellow-500" />
                <div className="h-3 w-3 rounded-full bg-green-500" />
              </div>
              <div className="space-y-6 font-mono text-sm sm:text-base">
                <p className="text-blue-400"># Analisando métricas de performance...</p>
                <p className="text-green-400">$ tech-nexos optimize --project="autoclub-pro"</p>
                <p className="text-slate-400">&gt;&gt; Carregando dados estruturados...</p>
                <p className="text-slate-400">&gt;&gt; Verificando Core Web Vitals...</p>
                <p className="font-bold text-white">LCP: 0.8s (Excelente)</p>
                <p className="font-bold text-white">ROAS: 4.8x (Escalando...)</p>
                <div className="h-2 w-full overflow-hidden rounded-full bg-slate-800">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: "100%" }}
                    transition={{ duration: 2 }}
                    className="h-full bg-blue-500"
                  />
                </div>
                <p className="italic text-blue-400">
                  // Sucesso: ecossistema otimizado para lucro.
                </p>
              </div>
            </div>
            <div className="absolute left-1/2 top-1/2 -z-10 h-[120%] w-[120%] -translate-x-1/2 -translate-y-1/2 rounded-full bg-blue-100 opacity-50 blur-[120px]" />
          </div>
        </div>
      </section>

      <section className="bg-slate-50 px-4 py-24">
        <div className="mx-auto max-w-7xl">
          <div className="mx-auto mb-16 max-w-3xl text-center">
            <p className="mb-4 text-sm font-black uppercase tracking-[0.25em] text-blue-600">
              O que sua empresa ganha
            </p>
            <h3 className="mb-6 text-4xl font-black tracking-tighter sm:text-6xl">
              Uma operação digital mais forte do que apenas “estar online”.
            </h3>
            <p className="text-xl text-slate-600">
              A TechNexos atua para que cada serviço entregue reforce o próximo. Seu site
              vende melhor, seu tráfego desperdiça menos e seu SEO passa a construir
              demanda recorrente.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            {deliveryBlocks.map((block, index) => (
              <motion.div
                key={block.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.08 }}
                className="rounded-[2.5rem] border border-slate-100 bg-white p-10 shadow-xl"
              >
                <div className="mb-8 flex h-16 w-16 items-center justify-center rounded-2xl bg-blue-50 text-blue-600">
                  <block.icon className="h-8 w-8" />
                </div>
                <h4 className="mb-4 text-2xl font-black">{block.title}</h4>
                <p className="leading-relaxed text-slate-600">{block.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-slate-50 px-4 py-24">
        <div className="mx-auto max-w-7xl">
          <div className="mb-16 text-center">
            <h3 className="mb-4 text-3xl font-black tracking-tighter sm:text-5xl">
              Stack de <span className="text-blue-600">elite.</span>
            </h3>
            <p className="text-slate-600">
              As tecnologias que garantem uma operação mais confiável, rápida e escalável.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-6 md:grid-cols-4 lg:grid-cols-6">
            {[
              { icon: Cpu, name: "React / Next.js", desc: "Frontend Ultra Rápido" },
              { icon: Server, name: "Node.js", desc: "Backend Escalável" },
              { icon: Database, name: "Supabase / SQL", desc: "Dados Seguros" },
              { icon: Layers, name: "Tailwind CSS", desc: "Design Moderno" },
              { icon: Globe, name: "Vercel / AWS", desc: "Cloud de Alta Performance" },
              { icon: MessageSquare, name: "WhatsApp API", desc: "Automação de Vendas" },
            ].map((tech, i) => (
              <motion.div
                key={tech.name}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className="rounded-3xl border border-slate-100 bg-white p-6 text-center shadow-sm transition-shadow hover:shadow-md"
              >
                <tech.icon className="mx-auto mb-4 h-8 w-8 text-blue-600" />
                <p className="mb-1 text-sm font-black">{tech.name}</p>
                <p className="text-[10px] font-bold uppercase tracking-widest text-slate-400">
                  {tech.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-blue-600 px-4 py-24">
        <div className="relative z-10 mx-auto max-w-4xl text-center text-white">
          <Sparkles className="mx-auto mb-8 h-12 w-12 text-blue-200" />
          <h3 className="mb-8 text-4xl font-black tracking-tighter sm:text-6xl">
            Pronto para transformar tráfego, tecnologia e SEO em crescimento?
          </h3>
          <p className="mx-auto mb-12 max-w-2xl text-xl italic text-blue-100">
            Estruturamos a base técnica, a geração de demanda e a conversão para sua
            empresa crescer com mais consistência.
          </p>
          <Button
            onClick={() => window.open("https://wa.me/5532991075164")}
            size="lg"
            className="h-20 rounded-[2rem] bg-white px-16 text-xl font-black text-blue-600 shadow-2xl transition-all hover:scale-105 hover:bg-blue-50"
          >
            Falar com o Especialista no WhatsApp
          </Button>
        </div>
        <div className="absolute -mr-32 -mt-32 right-0 top-0 h-96 w-96 rounded-full bg-white/10 blur-3xl" />
        <div className="absolute -mb-32 -ml-32 bottom-0 left-0 h-96 w-96 rounded-full bg-black/10 blur-3xl" />
      </section>

      <section id="faq" className="bg-white px-4 py-24">
        <div className="mx-auto max-w-3xl">
          <div className="mb-16 text-center">
            <h3 className="mb-4 text-3xl font-black italic tracking-tighter sm:text-5xl">
              Dúvidas <span className="text-blue-600">frequentes.</span>
            </h3>
            <p className="text-slate-600">Transparência total desde o primeiro contato.</p>
          </div>

          <Accordion type="single" collapsible className="w-full space-y-4">
            <AccordionItem
              value="item-1"
              className="overflow-hidden rounded-3xl border border-slate-200 bg-slate-50/50 px-6 py-2"
            >
              <AccordionTrigger className="text-left font-black text-slate-800 hover:no-underline">
                Como funciona o diagnóstico gratuito?
              </AccordionTrigger>
              <AccordionContent className="leading-relaxed text-slate-600">
                Analisamos sua presença digital atual, identificamos gargalos técnicos e
                comerciais, e entregamos uma direção prática do que precisa ser corrigido,
                priorizado ou escalado.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem
              value="item-2"
              className="overflow-hidden rounded-3xl border border-slate-200 bg-slate-50/50 px-6 py-2"
            >
              <AccordionTrigger className="text-left font-black text-slate-800 hover:no-underline">
                Quanto tempo leva para ver resultados?
              </AccordionTrigger>
              <AccordionContent className="leading-relaxed text-slate-600">
                Tráfego pago pode gerar demanda em poucos dias. SEO e melhorias técnicas
                precisam de maturação, normalmente entre 4 e 12 semanas, dependendo do
                cenário atual da empresa.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem
              value="item-3"
              className="overflow-hidden rounded-3xl border border-slate-200 bg-slate-50/50 px-6 py-2"
            >
              <AccordionTrigger className="text-left font-black text-slate-800 hover:no-underline">
                Vocês atendem qualquer tipo de negócio?
              </AccordionTrigger>
              <AccordionContent className="leading-relaxed text-slate-600">
                Faz sentido principalmente para empresas que precisam estruturar aquisição,
                conversão e operação digital. Atendemos com frequência negócios de
                serviços, software, operação comercial e projetos de maior valor agregado.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem
              value="item-4"
              className="overflow-hidden rounded-3xl border border-slate-200 bg-slate-50/50 px-6 py-2"
            >
              <AccordionTrigger className="text-left font-black text-slate-800 hover:no-underline">
                O que entra no SEO técnico?
              </AccordionTrigger>
              <AccordionContent className="leading-relaxed text-slate-600">
                Inclui velocidade, estrutura semântica, Core Web Vitals, schema, meta
                dados, arquitetura de páginas e ajustes para o Google entender e priorizar
                melhor o seu site.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </section>

      <footer className="border-t border-slate-100 bg-white px-4 py-12 text-center">
        <div className="mx-auto max-w-7xl">
          <div className="mb-6 flex items-center justify-center gap-2">
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-blue-600">
              <Code2 className="h-5 w-5 text-white" />
            </div>
            <p className="text-lg font-black">
              TechNexos<span className="text-blue-600">Digital</span>
            </p>
          </div>
          <p className="text-sm text-slate-400">
            © 2026 TechNexos Digital. Tecnologia & Performance.
          </p>
        </div>
      </footer>

      {showScrollTop && (
        <motion.button
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 z-50 rounded-full bg-blue-600 p-4 text-white shadow-2xl transition-all hover:bg-blue-700"
        >
          <ArrowUp className="h-6 w-6" />
        </motion.button>
      )}

      <WhatsAppFloat />
    </div>
  );
};

export default Landing;
