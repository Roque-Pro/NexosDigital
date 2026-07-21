import { useState, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { useSEO } from "@/hooks/useSEO";
import {
  TrendingUp,
  Target,
  BarChart3,
  MousePointer2,
  Zap,
  Check,
  ArrowRight,
  ArrowUp,
  Menu,
  X,
  Code2,
  Search,
  Users,
  PieChart,
  MessageCircle,
  Sparkles,
  SearchCheck,
  Rocket,
  LineChart,
  Eye,
  Focus,
  GanttChartSquare,
  Globe2,
  History,
  LayoutDashboard,
  Megaphone,
  ShieldCheck,
  Trophy,
  ChevronDown,
  Car,
  Scale,
  Activity,
  Wrench,
  Scissors,
  Gavel,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import BlogSection from "@/components/BlogSection";
import WhatsAppFloat from "@/components/WhatsAppFloat";

const PaidTraffic = () => {
  const navigate = useNavigate();
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const solutions = [
    { label: "AutoClub Pro", href: "/autoclub-pro", isExternal: false, icon: <Car className="w-4 h-4" /> },
    { label: "Autônomos", href: "/autonomos", isExternal: false, icon: <Users className="w-4 h-4" /> },
    { label: "Riscos & Moldes", href: "/riscos_moldes_moda", isExternal: false, icon: <Scissors className="w-4 h-4" /> },
    { label: "Social Jurídico", href: "https://www.socialjuridico.com.br", isExternal: true, icon: <Scale className="w-4 h-4" /> },
    { label: "Fisio+", href: "/fisiomais/", icon: <Activity className="w-4 h-4" /> },
    { label: "Eu Faço", href: "https://eu-faco-mu.vercel.app/", isExternal: true, icon: <Wrench className="w-4 h-4" /> },
  ];

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
    title: "Tráfego Pago para Advogados | Captação de Clientes Jurídicos | TechNexos",
    description: "Escale sua advocacia com Meta Ads e Google Ads para advogados. Captação previsível de clientes jurídicos com ROAS alto, funis de nutrição e conformidade OAB. Resultados em 48h.",
    keywords: [
      "trafego pago para advogados",
      "anuncios para advogados",
      "captação de clientes advocacia",
      "meta ads advogados",
      "google ads escritorio advocacia",
      "marketing juridico digital",
      "gestão de trafego juridico",
      "oab propaganda",
      "aquisição de clientes juridicos",
      "funil de vendas advocacia",
      "performance juridica",
      "escala escritorio advocacia",
      "roas advocacia",
      "gerar clientes advogado",
      "midia paga direito"
    ],
    ogTitle: "TechNexos para Advocacia: Tráfego Pago que Gera Clientes de Alto Valor",
    ogDescription: "Não entregamos cliques, entregamos causas ganhas. Estratégias de tráfego pago desenhadas para escritórios de advocacia que querem previsibilidade e escala na captação.",
    ogUrl: "https://www.technexos.com.br/trafego-pago",
    twitterTitle: "Tráfego Pago para Advogados | Escala Jurídica | TechNexos",
    twitterDescription: "Foco total em captar clientes de alto valor para seu escritório com previsibilidade matemática.",
    canonicalUrl: "https://www.technexos.com.br/trafego-pago",
    schema: {
      "@context": "https://schema.org",
      "@type": "AdvertisingAgency",
      "name": "TechNexos Performance Jurídica",
      "description": "Agência de marketing de performance especializada em captação de clientes para escritórios de advocacia através de tráfego pago e SEO.",
      "url": "https://www.technexos.com.br/trafego-pago",
      "address": {
        "@type": "PostalAddress",
        "addressCountry": "BR"
      }
    }
  });

  return (
    <div className="min-h-screen overflow-hidden bg-white font-sans text-slate-900">
      <header className="fixed left-0 right-0 top-0 z-50 border-b border-slate-100 bg-white/80 backdrop-blur-md">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
          <button
            onClick={() => navigate("/")}
            className="flex items-center gap-2 transition-opacity hover:opacity-80"
          >
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-orange-600 shadow-lg shadow-orange-200">
              <TrendingUp className="h-6 w-6 text-white" />
            </div>
            <h1 className="text-xl font-black tracking-tighter">
              TechNexos<span className="text-orange-600">Performance</span>
            </h1>
          </button>

          <nav className="hidden items-center gap-8 md:flex">
            <button
              onClick={() => navigate("/")}
              className="text-sm font-bold text-slate-600 transition-colors hover:text-orange-600"
            >
              Tecnologia
            </button>
            <button
              onClick={() => navigate("/about-me")}
              className="text-sm font-bold text-slate-600 transition-colors hover:text-orange-600"
            >
              Especialista
            </button>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <button className="flex items-center gap-1 text-sm font-bold text-orange-600 transition-colors hover:text-orange-700 outline-none group">
                  Soluções <ChevronDown className="h-4 w-4 transition-transform group-data-[state=open]:rotate-180" />
                </button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="w-56 p-2 rounded-2xl shadow-2xl border-orange-50 animate-in fade-in zoom-in-95 duration-200">
                <div className="mb-2 px-2 py-1.5 text-[10px] font-black text-muted-foreground uppercase tracking-widest text-orange-400">Produtos & Serviços</div>
                {solutions.map((sub) => (
                  <DropdownMenuItem key={sub.label} asChild className="rounded-xl focus:bg-orange-50 focus:text-orange-600 transition-colors cursor-pointer mb-1 last:mb-0">
                    {sub.isExternal ? (
                      <a href={sub.href} target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 w-full p-2 font-bold text-sm">
                        <div className="w-8 h-8 rounded-lg bg-orange-50 flex items-center justify-center text-orange-600">
                          {sub.icon}
                        </div>
                        {sub.label}
                      </a>
                    ) : (
                      <Link to={sub.href} className="flex items-center gap-3 w-full p-2 font-bold text-sm">
                        <div className="w-8 h-8 rounded-lg bg-orange-50 flex items-center justify-center text-orange-600">
                          {sub.icon}
                        </div>
                        {sub.label}
                      </Link>
                    )}
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>
            <button
              onClick={() =>
                document.getElementById("casos")?.scrollIntoView({ behavior: "smooth" })
              }
              className="text-sm font-bold text-slate-600 transition-colors hover:text-orange-600"
            >
              Casos de Sucesso
            </button>
            <button
              onClick={() => navigate("/blog")}
              className="text-sm font-bold text-slate-600 transition-colors hover:text-orange-600"
            >
              Blog
            </button>
            <Button
              onClick={() => navigate("/google-meu-negocio-juiz-de-fora")}
              variant="outline"
              className="rounded-full border-orange-200 bg-orange-50 px-6 font-bold text-orange-700 hover:bg-orange-600 hover:text-white gap-2 transition-all"
            >
              <Sparkles className="w-4 h-4" /> + Clientes?
            </Button>
          </nav>

          <button className="p-2 md:hidden" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
            {mobileMenuOpen ? <X /> : <Menu />}
          </button>
        </div>

        {mobileMenuOpen && (
          <div className="absolute w-full space-y-4 border-t border-slate-100 bg-white p-4 shadow-xl md:hidden max-h-[85vh] overflow-y-auto">
            <button
              onClick={() => {
                navigate("/");
                setMobileMenuOpen(false);
              }}
              className="block w-full p-2 text-left font-bold text-slate-700"
            >
              Início
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

            <div className="flex flex-col gap-1 py-2 border-y border-slate-50">
              <span className="px-2 text-[10px] font-black text-slate-400 uppercase tracking-widest mb-1">Soluções</span>
              {solutions.map((sub) => (
                sub.isExternal ? (
                  <a
                    key={sub.label}
                    href={sub.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => setMobileMenuOpen(false)}
                    className="flex items-center gap-3 p-3 rounded-xl bg-orange-50 border border-orange-100 text-base font-bold text-slate-700 hover:text-orange-600 transition-colors"
                  >
                    <div className="w-8 h-8 rounded-lg bg-orange-50 flex items-center justify-center text-orange-600">
                      {sub.icon}
                    </div>
                    {sub.label}
                  </a>
                ) : (
                  <button
                    key={sub.label}
                    onClick={() => {
                      navigate(sub.href);
                      setMobileMenuOpen(false);
                    }}
                    className="flex items-center gap-3 p-3 rounded-xl bg-orange-50 border border-orange-100 text-base font-bold text-slate-700 hover:text-orange-600 transition-colors text-left w-full"
                  >
                    <div className="w-8 h-8 rounded-lg bg-orange-50 flex items-center justify-center text-orange-600">
                      {sub.icon}
                    </div>
                    {sub.label}
                  </button>
                )
              ))}
            </div>

            <button
              onClick={() => {
                document.getElementById("casos")?.scrollIntoView({ behavior: "smooth" });
                setMobileMenuOpen(false);
              }}
              className="block w-full p-2 text-left font-bold text-slate-700"
            >
              Casos de Sucesso
            </button>
            <button
              onClick={() => {
                navigate("/blog");
                setMobileMenuOpen(false);
              }}
              className="block w-full p-2 text-left font-bold text-slate-700"
            >
              Blog
            </button>
            <div className="flex flex-col gap-2 pt-2">
              <Button
                onClick={() => {
                  navigate("/google-meu-negocio-juiz-de-fora");
                  setMobileMenuOpen(false);
                }}
                variant="outline"
                className="w-full border-orange-200 bg-orange-50 py-6 font-bold text-orange-700 hover:bg-orange-100 gap-2"
              >
                <Sparkles className="w-5 h-5" /> + Clientes?
              </Button>
              <Button
                onClick={() => {
                  window.open("https://wa.me/5532991075164");
                  setMobileMenuOpen(false);
                }}
                className="w-full bg-orange-600 py-6 font-bold text-white hover:bg-orange-700 rounded-xl"
              >
                Ativar Escala WhatsApp
              </Button>
            </div>
          </div>
        )}
      </header>

      {/* Hero Section */}
      <section className="relative px-4 pb-20 pt-20 lg:pb-32 lg:pt-32 bg-[radial-gradient(circle_at_top_right,#fff7ed,transparent)]">
        <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-16 lg:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="mb-8 text-4xl font-black leading-[1.1] tracking-tight sm:text-5xl lg:text-7xl">
              Seu escritório não precisa de seguidores. Precisa de <span className="text-orange-600">Clientes de Alto Valor</span>.
            </h2>
            <p className="mb-10 max-w-2xl text-xl leading-relaxed text-slate-600">
              Pare de depender de indicações. Aplicamos engenharia de dados no <strong>Meta Ads</strong> e <strong>Google Ads</strong> para captar clientes jurídicos com previsibilidade matemática — em conformidade com o Código de Ética da OAB.
            </p>
            <div className="flex flex-col gap-4 sm:flex-row">
              <Button
                onClick={() => window.open("https://wa.me/5532991075164")}
                size="lg"
                className="h-20 rounded-2xl bg-orange-600 px-10 text-xl font-black text-white shadow-xl shadow-orange-100 transition-all hover:scale-105 hover:bg-orange-700"
              >
                Captar Clientes Agora <ArrowRight className="ml-2" />
              </Button>
            </div>
            <div className="mt-8 flex items-center gap-4 text-sm font-bold text-slate-400">
              <Check className="text-green-500" /> Conformidade com Código de Ética OAB
              <Check className="text-green-500" /> Foco 100% em Causas de Alto Valor
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
            className="relative"
          >
            <div className="relative z-10 overflow-hidden rounded-[3rem] border-8 border-white shadow-[0_32px_64px_rgba(0,0,0,0.1)]">
              <img
                src="https://images.unsplash.com/photo-1589829545856-d10d557cf95f?q=80&w=2070&auto=format&fit=crop"
                alt="Escritório de Advocacia e Estratégia Jurídica"
                className="h-auto w-full transition-transform duration-700 hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-orange-900/40 via-transparent to-transparent opacity-60" />
            </div>
            <div className="absolute -right-12 -top-12 -z-10 h-64 w-64 rounded-full bg-orange-400/10 blur-3xl" />
            <div className="absolute -bottom-12 -left-12 -z-10 h-64 w-64 rounded-full bg-slate-400/10 blur-3xl" />
          </motion.div>
        </div>
      </section>

      {/* Section 1: Metodologia de Performance */}
      <section id="pago" className="px-4 py-24 bg-white">
        <div className="mx-auto max-w-7xl">
          <div className="mb-16 text-center">
            <h3 className="text-4xl font-black tracking-tighter sm:text-6xl mb-4">
              Engenharia de <span className="text-orange-600">Captação Jurídica</span>
            </h3>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Não somos "impulsionadores de postagens". Somos especialistas em extrair o máximo de clientes de alto valor de cada real investido — respeitando as regras da OAB.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-8 rounded-[3rem] bg-slate-50 border border-slate-100 hover:shadow-xl transition-all group">
              <div className="h-16 w-16 rounded-2xl bg-orange-600 flex items-center justify-center text-white mb-6 group-hover:scale-110 transition-transform">
                <ShieldCheck className="h-8 w-8" />
              </div>
              <h4 className="text-2xl font-black mb-4">Meta Ads OAB Conforme</h4>
              <p className="text-slate-600 leading-relaxed">
                Campanhas no Meta Ads desenhadas <strong>dentro das normas do Código de Ética da OAB</strong>. Segmentação por área de atuação, dados demográficos e interesses jurídicos para captar clientes sem infringir o provimento 205/2021.
              </p>
            </div>
            <div className="p-8 rounded-[3rem] bg-slate-50 border border-slate-100 hover:shadow-xl transition-all group">
              <div className="h-16 w-16 rounded-2xl bg-slate-900 flex items-center justify-center text-white mb-6 group-hover:scale-110 transition-transform">
                <Gavel className="h-8 w-8" />
              </div>
              <h4 className="text-2xl font-black mb-4">Públicos por Causa</h4>
              <p className="text-slate-600 leading-relaxed">
                Modelagem de audiências por <strong>tipo de causa e perfil de cliente</strong>. Direito de Família, Trabalhista, Previdenciário, Cível, Criminal — cada área com seu funil específico e criativos direcionados.
              </p>
            </div>
            <div className="p-8 rounded-[3rem] bg-slate-50 border border-slate-100 hover:shadow-xl transition-all group">
              <div className="h-16 w-16 rounded-2xl bg-orange-600 flex items-center justify-center text-white mb-6 group-hover:scale-110 transition-transform">
                <Search className="h-8 w-8" />
              </div>
              <h4 className="text-2xl font-black mb-4">Google Ads Jurídico</h4>
              <p className="text-slate-600 leading-relaxed">
                Captamos clientes no momento exato da necessidade jurídica. "Advogado trabalhista", "pensão alimentícia", "divórcio", "revisão de benefício INSS" — seu escritório no topo do Google quando a decisão acontece.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Section 2: Casos de Sucesso */}
      <section id="casos" className="px-4 py-24 bg-slate-900 text-white overflow-hidden">
        <div className="mx-auto max-w-7xl">
          <div className="mb-16">
            <h3 className="text-4xl font-black tracking-tighter sm:text-6xl mb-4">
              Resultados <span className="text-orange-400">Jurídicos Reais</span>.
            </h3>
            <p className="text-xl text-slate-400">
              O que acontece quando você une estratégia digital e conhecimento do mercado jurídico.
            </p>
          </div>

          <div className="space-y-12">
            {/* Case 1 */}
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-orange-600 to-blue-600 rounded-[3rem] blur opacity-25 group-hover:opacity-50 transition duration-1000 group-hover:duration-200"></div>
              <div className="relative bg-slate-800 rounded-[3rem] p-8 lg:p-12 flex flex-col lg:flex-row gap-12 items-center">
                <div className="flex-1">
                  <div className="inline-block px-4 py-1 rounded-full bg-orange-600/20 text-orange-400 text-sm font-bold mb-6">Direito Previdenciário</div>
                  <h4 className="text-3xl lg:text-5xl font-black mb-6">Redução de 68% no Custo por Lead Jurídico</h4>
                  <p className="text-xl text-slate-300 mb-8 leading-relaxed">
                    O escritório "Oliveira & Mendes Advocacia" gastava R$ 87,00 por lead em anúncios genéricos. Criamos um funil de <strong>conteúdo educativo no Meta Ads</strong> focado em revisão de benefício INSS, atraindo apenas aposentados e segurados com direito a revisão.
                  </p>
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-6">
                    <div>
                      <p className="text-3xl font-black text-orange-400">R$ 27,50</p>
                      <p className="text-xs uppercase font-bold text-slate-500 tracking-widest">Novo CPL Médio</p>
                    </div>
                    <div>
                      <p className="text-3xl font-black text-orange-400">+340%</p>
                      <p className="text-xs uppercase font-bold text-slate-500 tracking-widest">Leads Qualificados</p>
                    </div>
                    <div className="hidden sm:block">
                      <p className="text-3xl font-black text-orange-400">10x</p>
                      <p className="text-xs uppercase font-bold text-slate-500 tracking-widest">ROI em 90 dias</p>
                    </div>
                  </div>
                </div>
                <div className="flex-1 w-full h-64 lg:h-96 rounded-3xl overflow-hidden shadow-2xl">
                  <img 
                    src="https://images.unsplash.com/photo-1450101499163-c8848c66ca85?q=80&w=2070&auto=format&fit=crop" 
                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
                    alt="Documentos Jurídicos e Processos"
                  />
                </div>
              </div>
            </div>

            {/* Case 2 */}
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-green-600 to-emerald-600 rounded-[3rem] blur opacity-25 group-hover:opacity-50 transition duration-1000 group-hover:duration-200"></div>
              <div className="relative bg-slate-800 rounded-[3rem] p-8 lg:p-12 flex flex-col lg:flex-row-reverse gap-12 items-center">
                <div className="flex-1">
                  <div className="inline-block px-4 py-1 rounded-full bg-green-600/20 text-green-400 text-sm font-bold mb-6">Direito de Família</div>
                  <h4 className="text-3xl lg:text-5xl font-black mb-6">ROAS de 8.7x com Segmentação por Interesse</h4>
                  <p className="text-xl text-slate-300 mb-8 leading-relaxed">
                    Para o "Nogueira Sociedade de Advogados", abandonamos anúncios genéricos. Criamos campanhas de <strong>Dynamic Creative Optimization (DCO)</strong> segmentando por momento de vida: divórcio, guarda de filhos, pensão alimentícia e partilha de bens.
                  </p>
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-6">
                    <div>
                      <p className="text-3xl font-black text-green-400">8.7x</p>
                      <p className="text-xs uppercase font-bold text-slate-500 tracking-widest">Retorno sobre Anúncio</p>
                    </div>
                    <div>
                      <p className="text-3xl font-black text-green-400">R$ 62k</p>
                      <p className="text-xs uppercase font-bold text-slate-500 tracking-widest">Honorários em 30d</p>
                    </div>
                    <div className="hidden sm:block">
                      <p className="text-3xl font-black text-green-400">47</p>
                      <p className="text-xs uppercase font-bold text-slate-500 tracking-widest">Novos Clientes no Mês</p>
                    </div>
                  </div>
                </div>
                <div className="flex-1 w-full h-64 lg:h-96 rounded-3xl overflow-hidden shadow-2xl">
                  <img 
                    src="https://images.unsplash.com/photo-1589391886645-d51941baf7fb?q=80&w=2070&auto=format&fit=crop" 
                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
                    alt="Justiça e Direito de Família"
                  />
                </div>
              </div>
            </div>

            {/* Case 3 */}
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-red-600 to-orange-600 rounded-[3rem] blur opacity-25 group-hover:opacity-50 transition duration-1000 group-hover:duration-200"></div>
              <div className="relative bg-slate-800 rounded-[3rem] p-8 lg:p-12 flex flex-col lg:flex-row gap-12 items-center">
                <div className="flex-1">
                  <div className="inline-block px-4 py-1 rounded-full bg-red-600/20 text-red-400 text-sm font-bold mb-6">Direito Trabalhista</div>
                  <h4 className="text-3xl lg:text-5xl font-black mb-6">Domínio do Google Ads com Captação Nacional</h4>
                  <p className="text-xl text-slate-300 mb-8 leading-relaxed">
                    Escalamos a "Andrade & Costa Advocacia Trabalhista" exclusivamente via <strong>Google Ads</strong>. Campanhas de Performance Max e Search integradas captando reclamantes e reclamados em todo o estado, com palavras-chave de alta intenção como "cálculo trabalhista", "rescisão indireta" e "verbas rescisórias".
                  </p>
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-6">
                    <div>
                      <p className="text-3xl font-black text-red-400">+180</p>
                      <p className="text-xs uppercase font-bold text-slate-500 tracking-widest">Novos Casos no Trimestre</p>
                    </div>
                    <div>
                      <p className="text-3xl font-black text-red-400">-55%</p>
                      <p className="text-xs uppercase font-bold text-slate-500 tracking-widest">Custo de Aquisição</p>
                    </div>
                    <div className="hidden sm:block">
                      <p className="text-3xl font-black text-red-400">Top 3</p>
                      <p className="text-xs uppercase font-bold text-slate-500 tracking-widest">Leilão Google Ads</p>
                    </div>
                  </div>
                </div>
                <div className="flex-1 w-full h-64 lg:h-96 rounded-3xl overflow-hidden shadow-2xl">
                  <img 
                    src="https://images.unsplash.com/photo-1593113630400-ea4288922497?q=80&w=2070&auto=format&fit=crop" 
                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
                    alt="Símbolo da Justiça"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 3: Data & Conversion */}
      <section className="px-4 py-24 bg-white overflow-hidden">
         <div className="mx-auto max-w-7xl">
            <div className="bg-slate-900 rounded-[4rem] p-8 lg:p-20 text-white relative">
               <div className="relative z-10 max-w-3xl">
                  <h3 className="text-4xl font-black tracking-tighter sm:text-6xl mb-8">
                    Captação baseada em <span className="text-orange-400">Honorários</span>, não em curtidas.
                  </h3>
                  <p className="text-xl text-slate-300 mb-12 leading-relaxed">
                    Você nunca mais vai se perguntar de onde vêm seus clientes. Entregamos transparência total através de dashboards 
                    que mostram o que realmente importa: quanto entrou em honorários para cada real investido em anúncios.
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
                     <div className="text-center md:text-left">
                        <p className="text-orange-400 font-black text-4xl mb-2">ROI</p>
                        <p className="text-slate-400 text-sm font-bold uppercase tracking-widest">Retorno sobre Investimento</p>
                     </div>
                     <div className="text-center md:text-left">
                        <p className="text-orange-400 font-black text-4xl mb-2">CPL</p>
                        <p className="text-slate-400 text-sm font-bold uppercase tracking-widest">Custo por Lead Jurídico</p>
                     </div>
                     <div className="text-center md:text-left">
                        <p className="text-orange-400 font-black text-4xl mb-2">CAC</p>
                        <p className="text-slate-400 text-sm font-bold uppercase tracking-widest">Custo de Aquisição</p>
                     </div>
                  </div>
                  <Button
                    onClick={() => window.open("https://wa.me/5532991075164")}
                    size="lg"
                    className="h-20 rounded-2xl bg-orange-500 px-12 text-xl font-black text-white hover:bg-orange-600 shadow-xl shadow-orange-900/20"
                  >
                    Quero Captar Mais Clientes
                  </Button>
               </div>
               <div className="hidden lg:block absolute top-1/2 right-0 -translate-y-1/2 translate-x-1/4 opacity-20">
                  <Scale className="h-[500px] w-[500px] text-orange-400" />
               </div>
            </div>
         </div>
      </section>

      <BlogSection />

      {/* FAQ Section */}
      <section className="bg-white px-4 py-24">
        <div className="mx-auto max-w-3xl">
          <div className="mb-16 text-center">
            <h3 className="mb-4 text-3xl font-black italic tracking-tighter sm:text-5xl">
              Respostas <span className="text-orange-600">Éticas.</span>
            </h3>
            <p className="text-slate-600">Tudo o que você precisa saber antes de captar clientes jurídicos com anúncios.</p>
          </div>

          <Accordion type="single" collapsible className="w-full space-y-4">
            <AccordionItem
              value="item-1"
              className="overflow-hidden rounded-3xl border border-slate-200 bg-slate-50/50 px-6 py-2"
            >
              <AccordionTrigger className="text-left font-black text-slate-800 hover:no-underline">
                É permitido advogado fazer anúncios pagos?
              </AccordionTrigger>
              <AccordionContent className="leading-relaxed text-slate-600">
                Sim, desde que respeitado o Provimento 205/2021 da OAB. Isso significa: sem captação de clientes de forma mercantilista, sem prometer resultados, sem sensacionalismo. Nossas campanhas são construídas dentro dessas regras — usamos conteúdo educativo, autoridade profissional e informação de qualidade para atrair clientes de forma ética.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem
              value="item-2"
              className="overflow-hidden rounded-3xl border border-slate-200 bg-slate-50/50 px-6 py-2"
            >
              <AccordionTrigger className="text-left font-black text-slate-800 hover:no-underline">
                Em quanto tempo começo a receber clientes?
              </AccordionTrigger>
              <AccordionContent className="leading-relaxed text-slate-600">
                O tráfego pago jurídico gera resultados rápidos. Em muitos casos, começamos a receber leads qualificados em menos de 48h após o início das campanhas. A consistência e o volume crescem com a otimização contínua nas primeiras semanas. Diferente de indicações, você não espera — você atrai.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem
              value="item-3"
              className="overflow-hidden rounded-3xl border border-slate-200 bg-slate-50/50 px-6 py-2"
            >
              <AccordionTrigger className="text-left font-black text-slate-800 hover:no-underline">
                Quanto preciso investir para captar clientes?
              </AccordionTrigger>
              <AccordionContent className="leading-relaxed text-slate-600">
                Não existe valor fixo, mas sim valor estratégico. Recomendamos uma verba inicial que permita testes estatísticos reais por área de atuação. O segredo não é o tamanho do investimento, mas a precisão da segmentação. Preferimos começar com R$ 1.500-3.000/mês bem direcionados do que R$ 10.000 em anúncios genéricos.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </section>

      <footer className="border-t border-slate-100 bg-white px-4 py-12 text-center">
        <div className="mx-auto max-w-7xl">
          <div className="mb-6 flex items-center justify-center gap-2">
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-orange-600">
              <TrendingUp className="h-5 w-5 text-white" />
            </div>
            <p className="text-lg font-black">
              TechNexos<span className="text-orange-600">Performance</span>
            </p>
          </div>
          <p className="text-sm text-slate-400">
            © 2026 TechNexos Performance. Estratégia, Dados & Escala Jurídica.
          </p>
        </div>
      </footer>

      {showScrollTop && (
        <motion.button
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 z-50 rounded-full bg-orange-600 p-4 text-white shadow-2xl transition-all hover:bg-orange-700"
        >
          <ArrowUp className="h-6 w-6" />
        </motion.button>
      )}

      <WhatsAppFloat />
    </div>
  );
};

export default PaidTraffic;
