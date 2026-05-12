import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
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
} from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import WhatsAppFloat from "@/components/WhatsAppFloat";

const TrafficAndSEO = () => {
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
    title: "Tráfego Pago, Google Ads e SEO | TechNexos Digital",
    description: "Multiplique seu faturamento com tráfego pago (Meta Ads, Google Ads) e SEO estratégico. Atraímos leads qualificados e transformamos cliques em lucro real.",
    keywords: [
      "tráfego pago",
      "google ads",
      "meta ads",
      "facebook ads",
      "instagram ads",
      "gestão de tráfego",
      "seo",
      "seo orgânico",
      "ranking google",
      "marketing de performance",
      "geração de leads",
      "vendas online",
    ],
    ogTitle: "Acelere suas Vendas com Tráfego e SEO | TechNexos",
    ogDescription: "Não é apenas tráfego, é lucro. Estratégias de Meta Ads, Google Ads e SEO para empresas que buscam escala e previsibilidade.",
    ogUrl: "https://www.technexos.com.br/trafego-e-seo",
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
              Desenvolvimento
            </button>
            <button
              onClick={() =>
                document.getElementById("pago")?.scrollIntoView({ behavior: "smooth" })
              }
              className="text-sm font-bold text-slate-600 transition-colors hover:text-orange-600"
            >
              Tráfego Pago
            </button>
            <button
              onClick={() =>
                document.getElementById("organico")?.scrollIntoView({ behavior: "smooth" })
              }
              className="text-sm font-bold text-slate-600 transition-colors hover:text-orange-600"
            >
              SEO & Orgânico
            </button>
            <Button
              onClick={() => window.open("https://wa.me/5532991075164")}
              className="rounded-full bg-orange-600 font-bold text-white hover:bg-orange-700"
            >
              Falar com Especialista
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
              Desenvolvimento
            </button>
            <button
              onClick={() => {
                document.getElementById("pago")?.scrollIntoView({ behavior: "smooth" });
                setMobileMenuOpen(false);
              }}
              className="block w-full p-2 text-left font-bold text-slate-700"
            >
              Tráfego Pago
            </button>
            <button
              onClick={() => {
                document.getElementById("organico")?.scrollIntoView({ behavior: "smooth" });
                setMobileMenuOpen(false);
              }}
              className="block w-full p-2 text-left font-bold text-slate-700"
            >
              SEO & Orgânico
            </button>
            <Button
              onClick={() => window.open("https://wa.me/5532991075164")}
              className="w-full bg-orange-600 py-6 font-bold text-white hover:bg-orange-700"
            >
              Falar no WhatsApp
            </Button>
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
              Pare de gastar com anúncios. Comece a <span className="text-orange-600">lucrar</span>.
            </h2>
            <p className="mb-10 max-w-2xl text-xl leading-relaxed text-slate-600">
              Transformamos cliques em clientes qualificados. Unimos <strong>Google Ads</strong>, 
              <strong> Meta Ads</strong> e <strong>SEO Técnico</strong> para criar uma máquina de vendas
              previsível para o seu negócio.
            </p>
            <div className="flex flex-col gap-4 sm:flex-row">
              <Button
                onClick={() => window.open("https://wa.me/5532991075164")}
                size="lg"
                className="h-20 rounded-2xl bg-orange-600 px-10 text-xl font-black text-white shadow-xl shadow-orange-100 transition-all hover:scale-105 hover:bg-orange-700"
              >
                Quero Escalar Minhas Vendas <ArrowRight className="ml-2" />
              </Button>
            </div>
            <div className="mt-8 flex items-center gap-4 text-sm font-bold text-slate-400">
              <Check className="text-green-500" /> Sem contratos de fidelidade abusivos
              <Check className="text-green-500" /> Foco total em ROI
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
                src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop"
                alt="Dashboards de Performance"
                className="h-auto w-full transition-transform duration-700 hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-orange-900/40 via-transparent to-transparent opacity-60" />
            </div>
            <div className="absolute -right-12 -top-12 -z-10 h-64 w-64 rounded-full bg-orange-400/10 blur-3xl" />
            <div className="absolute -bottom-12 -left-12 -z-10 h-64 w-64 rounded-full bg-slate-400/10 blur-3xl" />
          </motion.div>
        </div>
      </section>

      {/* Section 1: Tráfego Pago */}
      <section id="pago" className="px-4 py-24 bg-white">
        <div className="mx-auto max-w-7xl">
          <div className="flex flex-col lg:flex-row gap-16 items-center">
            <div className="flex-1 order-2 lg:order-1">
              <div className="grid grid-cols-2 gap-4">
                <div className="rounded-[2rem] bg-orange-50 p-6 shadow-sm border border-orange-100">
                   <Target className="h-10 w-10 text-orange-600 mb-4" />
                   <h4 className="font-black text-lg mb-2">Público Certo</h4>
                   <p className="text-sm text-slate-600">Apareça exatamente para quem já quer comprar seu produto.</p>
                </div>
                <div className="rounded-[2rem] bg-blue-50 p-6 shadow-sm border border-blue-100">
                   <MousePointer2 className="h-10 w-10 text-blue-600 mb-4" />
                   <h4 className="font-black text-lg mb-2">Cliques Baratos</h4>
                   <p className="text-sm text-slate-600">Otimização contínua para reduzir seu custo por lead.</p>
                </div>
                <div className="rounded-[2rem] bg-green-50 p-6 shadow-sm border border-green-100 col-span-2">
                   <BarChart3 className="h-10 w-10 text-green-600 mb-4" />
                   <h4 className="font-black text-lg mb-2">Escala Previsível</h4>
                   <p className="text-sm text-slate-600">Sabe exatamente quanto colocar e quanto vai voltar de faturamento.</p>
                </div>
              </div>
            </div>
            <div className="flex-1 order-1 lg:order-2">
              <h3 className="text-4xl font-black tracking-tighter sm:text-6xl mb-8">
                Tráfego Pago que <span className="text-orange-600">Domina</span> o Mercado.
              </h3>
              <p className="text-xl text-slate-600 mb-8 leading-relaxed">
                Não fazemos "postzinho" impulsionado. Criamos estratégias de <strong>mídia de elite</strong>
                no Google e Meta para capturar a intenção de compra e gerar demanda imediata.
              </p>
              <ul className="space-y-4 mb-10">
                <li className="flex items-start gap-3">
                  <div className="mt-1 h-6 w-6 rounded-full bg-orange-100 flex items-center justify-center text-orange-600 flex-shrink-0 font-bold">✓</div>
                  <p className="font-bold text-slate-700">Google Ads (Rede de Pesquisa, Display e Youtube)</p>
                </li>
                <li className="flex items-start gap-3">
                  <div className="mt-1 h-6 w-6 rounded-full bg-orange-100 flex items-center justify-center text-orange-600 flex-shrink-0 font-bold">✓</div>
                  <p className="font-bold text-slate-700">Meta Ads (Facebook e Instagram de alta conversão)</p>
                </li>
                <li className="flex items-start gap-3">
                  <div className="mt-1 h-6 w-6 rounded-full bg-orange-100 flex items-center justify-center text-orange-600 flex-shrink-0 font-bold">✓</div>
                  <p className="font-bold text-slate-700">Remarketing Persuasivo (Não deixe o cliente fugir)</p>
                </li>
              </ul>
              <Button
                onClick={() => window.open("https://wa.me/5532991075164")}
                size="lg"
                className="h-16 rounded-2xl bg-slate-900 px-10 text-lg font-black text-white hover:bg-slate-800"
              >
                Dominar o Google e Meta
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Section 2: SEO & Orgânico */}
      <section id="organico" className="px-4 py-24 bg-slate-50">
        <div className="mx-auto max-w-7xl">
          <div className="flex flex-col lg:flex-row gap-16 items-center">
            <div className="flex-1">
              <h3 className="text-4xl font-black tracking-tighter sm:text-6xl mb-8">
                Ouro <span className="text-orange-600">Orgânico</span>: Onde seus concorrentes não chegam.
              </h3>
              <p className="text-xl text-slate-600 mb-8 leading-relaxed">
                Anúncios param quando o dinheiro acaba. O <strong>SEO</strong> constrói um ativo que cresce 
                todos os meses, trazendo clientes sem que você pague por cada clique.
              </p>
              <div className="space-y-6">
                 <div className="flex gap-4">
                    <div className="h-12 w-12 rounded-2xl bg-white shadow-md flex items-center justify-center text-orange-600 flex-shrink-0">
                       <SearchCheck className="h-6 w-6" />
                    </div>
                    <div>
                       <h5 className="font-black text-xl mb-1">SEO Técnico de Elite</h5>
                       <p className="text-slate-500">Ajustamos o código para que o Google ame o seu site.</p>
                    </div>
                 </div>
                 <div className="flex gap-4">
                    <div className="h-12 w-12 rounded-2xl bg-white shadow-md flex items-center justify-center text-orange-600 flex-shrink-0">
                       <Rocket className="h-6 w-6" />
                    </div>
                    <div>
                       <h5 className="font-black text-xl mb-1">Posicionamento Estratégico</h5>
                       <p className="text-slate-500">Esteja na frente de quem busca pelo seu serviço agora.</p>
                    </div>
                 </div>
              </div>
              <Button
                onClick={() => window.open("https://wa.me/5532991075164")}
                size="lg"
                variant="outline"
                className="mt-10 h-16 rounded-2xl border-2 border-orange-600 text-orange-600 px-10 text-lg font-black hover:bg-orange-50"
              >
                Quero aparecer no Google
              </Button>
            </div>
            <div className="flex-1">
              <div className="relative">
                <div className="rounded-[3rem] overflow-hidden shadow-2xl">
                   <img 
                    src="https://images.unsplash.com/photo-1432888622747-4eb9a8efeb07?q=80&w=2074&auto=format&fit=crop" 
                    alt="SEO e Estratégia" 
                    className="w-full h-auto"
                   />
                </div>
                <div className="absolute -bottom-6 -right-6 bg-white p-8 rounded-3xl shadow-xl border border-slate-100 max-w-xs">
                   <p className="text-4xl font-black text-orange-600 mb-2">+150%</p>
                   <p className="font-bold text-slate-700">Aumento médio de visitas orgânicas em 6 meses.</p>
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
                    Chega de <span className="text-orange-400">fumaça</span>. Veja os números.
                  </h3>
                  <p className="text-xl text-slate-300 mb-12 leading-relaxed">
                    Você terá acesso a um dashboard em tempo real para ver quanto investiu e quanto
                    voltou. Transparência total, sem termos técnicos complicados.
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
                     <div className="text-center md:text-left">
                        <p className="text-orange-400 font-black text-4xl mb-2">ROI</p>
                        <p className="text-slate-400 text-sm font-bold uppercase tracking-widest">Retorno sobre Investimento</p>
                     </div>
                     <div className="text-center md:text-left">
                        <p className="text-orange-400 font-black text-4xl mb-2">CPL</p>
                        <p className="text-slate-400 text-sm font-bold uppercase tracking-widest">Custo por Lead Qualificado</p>
                     </div>
                     <div className="text-center md:text-left">
                        <p className="text-orange-400 font-black text-4xl mb-2">ROAS</p>
                        <p className="text-slate-400 text-sm font-bold uppercase tracking-widest">Retorno sobre Gasto em Anúncio</p>
                     </div>
                  </div>
                  <Button
                    onClick={() => window.open("https://wa.me/5532991075164")}
                    size="lg"
                    className="h-20 rounded-2xl bg-orange-500 px-12 text-xl font-black text-white hover:bg-orange-600 shadow-xl shadow-orange-900/20"
                  >
                    Falar com quem entende de lucro
                  </Button>
               </div>
               <div className="hidden lg:block absolute top-1/2 right-0 -translate-y-1/2 translate-x-1/4 opacity-20">
                  <PieChart className="h-[500px] w-[500px] text-orange-400" />
               </div>
            </div>
         </div>
      </section>

      {/* FAQ Section */}
      <section className="bg-white px-4 py-24">
        <div className="mx-auto max-w-3xl">
          <div className="mb-16 text-center">
            <h3 className="mb-4 text-3xl font-black italic tracking-tighter sm:text-5xl">
              Perguntas <span className="text-orange-600">Diretas.</span>
            </h3>
            <p className="text-slate-600">O que você realmente quer saber sobre tráfego.</p>
          </div>

          <Accordion type="single" collapsible className="w-full space-y-4">
            <AccordionItem
              value="item-1"
              className="overflow-hidden rounded-3xl border border-slate-200 bg-slate-50/50 px-6 py-2"
            >
              <AccordionTrigger className="text-left font-black text-slate-800 hover:no-underline">
                Qual o investimento ideal para ter retorno?
              </AccordionTrigger>
              <AccordionContent className="leading-relaxed text-slate-600">
                O investimento é personalizado conforme seu objetivo e mercado. O importante não é o valor de início, 
                mas sim a estratégia por trás para garantir que cada real colocado traga o máximo de leads qualificados possíveis.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem
              value="item-2"
              className="overflow-hidden rounded-3xl border border-slate-200 bg-slate-50/50 px-6 py-2"
            >
              <AccordionTrigger className="text-left font-black text-slate-800 hover:no-underline">
                O resultado é imediato?
              </AccordionTrigger>
              <AccordionContent className="leading-relaxed text-slate-600">
                No tráfego pago (Google/Meta), os leads começam a chegar nas primeiras 48h. 
                O SEO é um jogo de médio prazo (3 a 6 meses) para dominância absoluta.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem
              value="item-3"
              className="overflow-hidden rounded-3xl border border-slate-200 bg-slate-50/50 px-6 py-2"
            >
              <AccordionTrigger className="text-left font-black text-slate-800 hover:no-underline">
                Vocês garantem vendas?
              </AccordionTrigger>
              <AccordionContent className="leading-relaxed text-slate-600">
                Garantimos tráfego qualificado e leads prontos para comprar. A venda final
                depende do seu time comercial e da qualidade do seu produto/serviço, mas nós
                ajudamos a otimizar todo esse processo.
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
            © 2026 TechNexos Performance. Tráfego, SEO & Lucratividade.
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

export default TrafficAndSEO;
