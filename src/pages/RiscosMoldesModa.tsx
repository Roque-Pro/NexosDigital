import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { useSEO } from "@/hooks/useSEO";
import {
  Scissors,
  Layers,
  Sparkles,
  FileCode,
  FolderOpen,
  Cloud,
  Coins,
  ShieldCheck,
  Check,
  ArrowRight,
  Clock,
  MapPin,
  FileCheck2,
  Phone,
  Calculator,
  Grid
} from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import WhatsAppFloat from "@/components/WhatsAppFloat";

export default function RiscosMoldesModa() {
  const [monthlySpend, setMonthlySpend] = useState(15000);

  // Scroll to top on load
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // SEO configuration
  useSEO({
    title: "Riscos para Corte e Digitalização de Moldes | Technexos",
    description:
      "Digitalização de moldes, ampliação de tamanhos e riscos para corte com encaixe inteligente para confecções de Minas Gerais e Rio de Janeiro.",
    keywords: [
      "riscos para corte",
      "digitalização de moldes",
      "ampliação de moldes",
      "modelagem para confecção",
      "encaixe de moldes",
      "graduação de moldes",
      "moldes em PDF",
    ],
    ogTitle: "Riscos para Corte e Digitalização de Moldes | Technexos",
    ogDescription:
      "Digitalização de moldes, ampliação de tamanhos e riscos para corte com encaixe inteligente para confecções de Minas Gerais e Rio de Janeiro.",
    ogUrl: "https://technexos.com.br/riscos_moldes_moda",
    canonicalUrl: "https://technexos.com.br/riscos_moldes_moda",
    schema: {
      "@context": "https://schema.org",
      "@type": "LocalBusiness",
      "name": "Technexos - Digitalização de Moldes e Riscos para Corte",
      "description": "Serviços de digitalização de moldes, encaixe inteligente, ampliação e risco para corte em Minas Gerais e Rio de Janeiro.",
      "url": "https://technexos.com.br/riscos_moldes_moda",
      "telephone": "+55-32-99107-5164",
      "areaServed": ["Minas Gerais", "Rio de Janeiro"],
      "address": {
        "@type": "PostalAddress",
        "addressCountry": "BR"
      }
    }
  });

  // Calculator calculations (typically 8% to 15% fabric savings, let's assume 11% average)
  const savingsRate = 0.11; // 11% average savings
  const monthlySavings = monthlySpend * savingsRate;
  const annualSavings = monthlySavings * 12;

  const services = [
    {
      title: "Riscos para Corte",
      description: "Riscos otimizados gerados por plotter de alta precisão. Aproveitamento total do enfesto para maximizar sua lucratividade.",
      icon: <Scissors className="h-6 w-6 text-indigo-600" />,
      tag: "Mais Vendido"
    },
    {
      title: "Digitalização de Moldes",
      description: "Transformação de moldes físicos de papel em arquivos digitais impecáveis com precisão milimétrica. Adeus pilhas de papel.",
      icon: <FolderOpen className="h-6 w-6 text-indigo-600" />,
      tag: "Segurança"
    },
    {
      title: "Ampliação e Graduação",
      description: "Graduação profissional de tamanhos (PP ao EXG ou sob medida) respeitando a vestibilidade e a proporção da sua marca.",
      icon: <Layers className="h-6 w-6 text-indigo-600" />,
      tag: "Escalabilidade"
    },
    {
      title: "Conversão de Arquivos",
      description: "Exportação e conversão de modelagem nos principais formatos da indústria (PDF, DXF compatível com Audaces/Gerber e PLT).",
      icon: <FileCode className="h-6 w-6 text-indigo-600" />,
      tag: "Flexibilidade"
    },
    {
      title: "Encaixe Inteligente",
      description: "Algoritmos CAD de última geração que organizam as peças com a menor margem de perda possível. Economia matemática de tecido.",
      icon: <Grid className="h-6 w-6 text-indigo-600" />,
      tag: "Tecnologia"
    }
  ];

  const steps = [
    {
      number: "01",
      title: "Coleta ou Envio",
      description: "Você envia seus moldes pelos Correios/transportadora ou nós recolhemos em sua confecção (consulte cidades de MG e RJ)."
    },
    {
      number: "02",
      title: "Digitalização e Ajustes",
      description: "Digitalizamos cada peça em mesa digitalizadora profissional de alta precisão e revisamos contornos e marcações."
    },
    {
      number: "03",
      title: "Processamento e Encaixe",
      description: "Aplicamos encaixe inteligente para gerar riscos com aproveitamento máximo e preparamos as ampliações se contratadas."
    },
    {
      number: "04",
      title: "Entrega em 24 Horas",
      description: "Você recebe os arquivos digitais prontos e/ou os riscos físicos impressos em tempo recorde de até 24 horas."
    }
  ];

  const benefits = [
    {
      title: "Entrega em até 24 horas",
      desc: "Sua confecção não pode parar. Garantimos a entrega do seu risco ou arquivo digitalizado no menor tempo do mercado.",
      icon: <Clock className="h-5 w-5 text-emerald-500" />
    },
    {
      title: "Atendimento para MG e RJ",
      desc: "Suporte completo e logística ágil para as principais regiões de Minas Gerais e Rio de Janeiro.",
      icon: <MapPin className="h-5 w-5 text-emerald-500" />
    },
    {
      title: "Economia real de matéria-prima",
      desc: "Com o encaixe otimizado por software CAD, cada centímetro de tecido é aproveitado, reduzindo custos imediatamente.",
      icon: <Coins className="h-5 w-5 text-emerald-500" />
    },
    {
      title: "Segurança total do seu acervo",
      desc: "Seus moldes físicos guardados na nuvem. Proteção contra perdas, rasgos, incêndio ou desgaste natural do papel.",
      icon: <ShieldCheck className="h-5 w-5 text-emerald-500" />
    },
    {
      title: "Formatos profissionais universais",
      desc: "Exportamos em DXF, PLT e PDF, garantindo compatibilidade total com Audaces, Gerber, Lectra, Optitex e plotters.",
      icon: <FileCheck2 className="h-5 w-5 text-emerald-500" />
    }
  ];

  const faqs = [
    {
      q: "Posso enviar meus moldes pelos Correios?",
      a: "Sim! Recebemos moldes físicos de confecções de todo o país via Correios ou transportadoras. Logo após a digitalização, eles são arquivados ou devolvidos conforme sua preferência."
    },
    {
      q: "Vocês buscam os moldes?",
      a: "Oferecemos serviço de coleta física própria em diversas cidades de Minas Gerais e Rio de Janeiro. Entre em contato conosco pelo WhatsApp para verificar as condições e rotas disponíveis para a sua região."
    },
    {
      q: "Quais formatos de arquivo entregam?",
      a: "Entregamos seus moldes em formatos totalmente compatíveis com o mercado: DXF (universal para softwares CAD como Audaces, Optitex, Gerber), PLT (ideal para impressão direta em plotters) e PDF (pronto para visualização ou impressão comum em tamanho real)."
    },
    {
      q: "Quanto tempo leva?",
      a: "Nosso prazo de processamento e entrega padrão é de até 24 horas úteis a partir do momento em que os moldes físicos chegam até a nossa equipe ou são confirmados."
    },
    {
      q: "Atendem pequenas confecções?",
      a: "Com certeza! Nosso serviço é escalável. Atendemos desde modelistas independentes e marcas iniciantes com poucos moldes até grandes indústrias e facções de uniformes com grande volume diário."
    }
  ];

  const whatsappMessage = "Olá! Gostaria de um orçamento para riscos para corte e digitalização de moldes.";
  const whatsappUrl = `https://wa.me/5532991075164?text=${encodeURIComponent(whatsappMessage)}`;

  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-800 antialiased">
      {/* Navigation Header */}
      <header className="sticky top-0 z-40 w-full border-b border-slate-200/80 bg-white/90 backdrop-blur-md">
        <div className="container mx-auto flex h-20 items-center justify-between px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-2">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-indigo-600 shadow-md shadow-indigo-200">
              <Scissors className="h-5 w-5 text-white" />
            </div>
            <span className="text-xl font-extrabold tracking-tight text-slate-900">
              Technexos<span className="text-indigo-600">Moda</span>
            </span>
          </div>

          <nav className="hidden md:flex items-center gap-8">
            <a href="#beneficios" className="text-sm font-semibold text-slate-600 hover:text-indigo-600 transition-colors">Economia</a>
            <a href="#servicos" className="text-sm font-semibold text-slate-600 hover:text-indigo-600 transition-colors">Serviços</a>
            <a href="#como-funciona" className="text-sm font-semibold text-slate-600 hover:text-indigo-600 transition-colors">Como Funciona</a>
            <a href="#faq" className="text-sm font-semibold text-slate-600 hover:text-indigo-600 transition-colors">FAQ</a>
          </nav>

          <div className="flex items-center gap-4">
            <a
              href="tel:32991075164"
              className="hidden lg:flex items-center gap-2 text-sm font-bold text-slate-700 hover:text-indigo-600 transition-colors"
            >
              <Phone className="h-4 w-4" /> (32) 99107-5164
            </a>
            <Button
              asChild
              className="rounded-full bg-[#25D366] px-5 py-5 text-sm font-bold text-white shadow-lg shadow-green-500/20 hover:bg-[#20ba59] transition-all gap-2 hover:text-white"
            >
              <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
                Orçamento Grátis
              </a>
            </Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-indigo-900 via-indigo-950 to-slate-950 py-20 lg:py-32 text-white">
        {/* Background Grid Pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#312e81_1px,transparent_1px),linear-gradient(to_bottom,#312e81_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-20" />
        
        <div className="container mx-auto px-4 relative z-10 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:items-center">
            
            {/* Left Copy */}
            <div className="lg:col-span-7 space-y-6">
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="inline-flex items-center gap-2 rounded-full border border-indigo-500/30 bg-indigo-500/10 px-4 py-1.5 text-xs font-semibold tracking-wide text-indigo-300"
              >
                <Sparkles className="h-3.5 w-3.5 text-indigo-400" />
                Otimização CAD de Modelagem para Confecções
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl leading-[1.1] text-white"
              >
                Economize Tecido e <br className="hidden sm:inline" />
                <span className="bg-gradient-to-r from-indigo-400 via-teal-300 to-emerald-400 bg-clip-text text-transparent">
                  Preserve Seus Moldes
                </span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="text-base sm:text-lg lg:text-xl text-slate-300 max-w-2xl font-light leading-relaxed"
              >
                Transformamos moldes de papel em arquivos digitais profissionais, produzimos riscos para corte com encaixe inteligente e ajudamos sua confecção a reduzir desperdícios, ganhar espaço e proteger seu patrimônio de modelagem.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="flex flex-col sm:flex-row gap-4 pt-4"
              >
                <Button
                  asChild
                  className="rounded-xl bg-[#25D366] px-8 py-7 text-base font-bold text-white shadow-xl shadow-green-500/30 hover:bg-[#20ba59] hover:-translate-y-0.5 transition-all gap-2 hover:text-white"
                >
                  <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
                    Solicitar Orçamento pelo WhatsApp
                    <ArrowRight className="h-5 w-5" />
                  </a>
                </Button>
                <Button
                  asChild
                  variant="outline"
                  className="rounded-xl border-slate-700 bg-slate-900/50 hover:bg-slate-900 text-white px-8 py-7 text-base font-bold hover:text-white"
                >
                  <a href="#servicos">Conhecer os Serviços</a>
                </Button>
              </motion.div>

              {/* Regions Badges */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="flex flex-wrap items-center gap-6 pt-6 border-t border-slate-800 text-sm text-slate-400"
              >
                <span className="font-semibold text-slate-300">Região de atendimento:</span>
                <span className="flex items-center gap-1.5">
                  <span className="h-2 w-2 rounded-full bg-emerald-500"></span> Minas Gerais
                </span>
                <span className="flex items-center gap-1.5">
                  <span className="h-2 w-2 rounded-full bg-indigo-500"></span> Rio de Janeiro
                </span>
              </motion.div>
            </div>

            {/* Right Visual Layout */}
            <div className="lg:col-span-5 relative mt-6 lg:mt-0">
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6 }}
                className="relative mx-auto max-w-md lg:max-w-none"
              >
                <div className="absolute -inset-1 rounded-3xl bg-gradient-to-tr from-indigo-500 to-teal-400 opacity-30 blur-lg" />
                <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-slate-900/60 p-2 backdrop-blur-3xl">
                  <img
                    src="https://images.unsplash.com/photo-1524295988897-b13b5e492d5c?auto=format&fit=crop&w=800&q=80"
                    alt="Processo profissional de corte de tecido e modelagem digital"
                    className="w-full h-80 lg:h-96 object-cover rounded-xl"
                  />
                  <div className="absolute bottom-4 left-4 right-4 rounded-xl border border-white/15 bg-slate-950/80 p-4 backdrop-blur-md">
                    <div className="flex items-center justify-between text-xs text-indigo-300 font-bold mb-1">
                      <span>APROVEITAMENTO CAD</span>
                      <span className="text-emerald-400">+14.6% DE ECONOMIA</span>
                    </div>
                    <div className="h-1.5 w-full rounded-full bg-slate-800 overflow-hidden">
                      <div className="h-full w-[94%] bg-gradient-to-r from-indigo-500 to-emerald-400 rounded-full" />
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>

          </div>
        </div>
      </section>

      {/* Trust Stats Row */}
      <section className="bg-white py-8 border-b border-slate-100 shadow-sm relative z-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div>
              <p className="text-3xl lg:text-4xl font-extrabold text-indigo-600">Até 15%</p>
              <p className="text-xs lg:text-sm font-semibold text-slate-500 mt-1">Economia de Tecido</p>
            </div>
            <div className="border-l border-slate-200">
              <p className="text-3xl lg:text-4xl font-extrabold text-indigo-600">24 Horas</p>
              <p className="text-xs lg:text-sm font-semibold text-slate-500 mt-1">Prazo de Entrega Padrão</p>
            </div>
            <div className="border-l border-slate-200">
              <p className="text-3xl lg:text-4xl font-extrabold text-indigo-600">100% CAD</p>
              <p className="text-xs lg:text-sm font-semibold text-slate-500 mt-1">Precisão Milimétrica</p>
            </div>
            <div className="border-l border-slate-200">
              <p className="text-3xl lg:text-4xl font-extrabold text-indigo-600">MG & RJ</p>
              <p className="text-xs lg:text-sm font-semibold text-slate-500 mt-1">Região de Coleta e Entrega</p>
            </div>
          </div>
        </div>
      </section>

      {/* Interactive ROI Calculator Section */}
      <section id="beneficios" className="py-20 bg-slate-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
              Simule a Economia na Sua Produção
            </h2>
            <p className="mt-4 text-lg text-slate-600">
              Confecções que usam encaixe inteligente otimizado por computador reduzem o desperdício de tecido em média em 11%. Descubra quanto você deixará de perder todo mês.
            </p>
          </div>

          <div className="max-w-4xl mx-auto bg-white rounded-3xl border border-slate-200 shadow-xl overflow-hidden grid grid-cols-1 md:grid-cols-12">
            {/* Input Slider */}
            <div className="p-8 md:p-12 md:col-span-7 space-y-6 bg-slate-50/50">
              <div className="flex items-center gap-3">
                <div className="p-2 bg-indigo-100 rounded-lg text-indigo-600">
                  <Calculator className="h-5 w-5" />
                </div>
                <h3 className="text-lg font-bold text-slate-900">Configuração de Custos</h3>
              </div>

              <div className="space-y-4">
                <div className="flex justify-between items-center text-sm">
                  <span className="font-semibold text-slate-600">Gasto mensal estimado com tecidos:</span>
                  <span className="font-extrabold text-lg text-indigo-600">
                    {monthlySpend.toLocaleString("pt-BR", { style: "currency", currency: "BRL" })}
                  </span>
                </div>
                <input
                  type="range"
                  min="5000"
                  max="150000"
                  step="5000"
                  value={monthlySpend}
                  onChange={(e) => setMonthlySpend(Number(e.target.value))}
                  className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-indigo-600 focus:outline-none"
                />
                <div className="flex justify-between text-xs text-slate-400">
                  <span>R$ 5.000</span>
                  <span>R$ 75.000</span>
                  <span>R$ 150.000+</span>
                </div>
              </div>

              <div className="rounded-xl bg-indigo-50 border border-indigo-100 p-4 text-xs text-slate-600 leading-relaxed">
                <strong>💡 Por que economiza?</strong> O encaixe manual costuma deixar lacunas. Nossos softwares CAD calculam em segundos o encaixe milimétrico ideal, reduzindo as sobras de ponta de enfesto.
              </div>
            </div>

            {/* Results Counters */}
            <div className="p-8 md:p-12 md:col-span-5 bg-indigo-900 text-white flex flex-col justify-between relative overflow-hidden">
              {/* Background gradient glow */}
              <div className="absolute -right-12 -bottom-12 w-48 h-48 bg-emerald-500/20 rounded-full blur-2xl" />

              <div className="space-y-6 relative z-10">
                <span className="text-xs font-bold uppercase tracking-wider text-teal-300">Estimativa de Retorno</span>
                
                <div>
                  <span className="text-xs text-indigo-200 block">Economia Mensal Estimada</span>
                  <div className="text-3xl font-black text-emerald-400 mt-1">
                    {monthlySavings.toLocaleString("pt-BR", { style: "currency", currency: "BRL" })}
                  </div>
                </div>

                <div>
                  <span className="text-xs text-indigo-200 block">Economia Anual Acumulada</span>
                  <div className="text-4xl font-black text-white mt-1">
                    {annualSavings.toLocaleString("pt-BR", { style: "currency", currency: "BRL" })}
                  </div>
                </div>
              </div>

              <div className="pt-8 relative z-10">
                <Button
                  asChild
                  className="w-full bg-[#25D366] hover:bg-[#20ba59] font-bold text-white rounded-xl py-6 shadow-lg shadow-green-950/20 hover:text-white"
                >
                  <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2">
                    Garantir Minha Economia
                    <ArrowRight className="h-4 w-4" />
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Seção 1 – Economia de Matéria-Prima & Corte */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Image Illustration */}
            <div className="lg:col-span-5 order-last lg:order-first">
              <div className="relative">
                <div className="absolute -inset-2 rounded-2xl bg-gradient-to-tr from-emerald-500 to-indigo-500 opacity-20 blur-md" />
                <div className="relative bg-slate-900 text-white p-6 rounded-xl border border-slate-800 shadow-xl">
                  <div className="flex items-center justify-between border-b border-slate-800 pb-4 mb-4">
                    <span className="text-xs font-bold tracking-wider text-slate-400">ENCAIXE OTIMIZADO CAD</span>
                    <span className="px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-400 text-[10px] font-bold">94.8% APROVEITAMENTO</span>
                  </div>
                  
                  {/* Schematic drawing representing marker optimization */}
                  <div className="space-y-3">
                    <div className="relative h-12 w-full rounded border border-indigo-500/30 bg-indigo-500/5 overflow-hidden flex items-center px-4">
                      <div className="absolute top-2 left-2 w-16 h-8 border border-dashed border-indigo-400/50 bg-indigo-400/10 rounded flex items-center justify-center text-[10px]">Peça A</div>
                      <div className="absolute top-2 left-20 w-12 h-8 border border-dashed border-indigo-400/50 bg-indigo-400/10 rounded flex items-center justify-center text-[10px]">Peça B</div>
                      <div className="absolute top-2 left-[134px] w-24 h-8 border border-dashed border-indigo-400/50 bg-indigo-400/10 rounded flex items-center justify-center text-[10px]">Manga C</div>
                      <div className="absolute top-2 right-2 w-14 h-8 border border-dashed border-emerald-400/60 bg-emerald-400/10 rounded flex items-center justify-center text-[10px] text-emerald-400">Encaixe</div>
                    </div>
                    <div className="relative h-12 w-full rounded border border-indigo-500/30 bg-indigo-500/5 overflow-hidden flex items-center px-4">
                      <div className="absolute top-2 left-2 w-20 h-8 border border-dashed border-indigo-400/50 bg-indigo-400/10 rounded flex items-center justify-center text-[10px]">Gola D</div>
                      <div className="absolute top-2 left-24 w-16 h-8 border border-dashed border-indigo-400/50 bg-indigo-400/10 rounded flex items-center justify-center text-[10px]">Frente</div>
                      <div className="absolute top-2 left-44 w-12 h-8 border border-dashed border-indigo-400/50 bg-indigo-400/10 rounded flex items-center justify-center text-[10px]">Costas</div>
                      <div className="absolute top-2 right-2 w-20 h-8 border border-dashed border-emerald-400/60 bg-emerald-400/10 rounded flex items-center justify-center text-[10px] text-emerald-400">Sem Desperdício</div>
                    </div>
                  </div>

                  <div className="mt-6 flex justify-between items-center text-xs text-slate-400">
                    <span>Espaço Vazio Eliminado</span>
                    <span className="font-bold text-emerald-400">Aproveitamento Máximo</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Text details */}
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex h-9 items-center justify-center rounded-full bg-emerald-100 px-4 text-sm font-bold text-emerald-700">
                Mais Lucratividade
              </div>
              <h2 className="text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
                Economize Tecido com Encaixe Inteligente
              </h2>
              <p className="text-lg text-slate-600 leading-relaxed">
                Um risco mal planejado é sinônimo de retalhos no lixo e dinheiro desperdiçado. Com os nossos sistemas de encaixe automático inteligente, a geometria de cada molde é calculada com foco na máxima eficiência sobre a largura e comprimento do seu tecido.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                <div className="flex gap-2">
                  <Check className="h-5 w-5 text-emerald-500 shrink-0 mt-0.5" />
                  <span className="text-slate-700 text-sm">Menos desperdício de ponta de enfesto</span>
                </div>
                <div className="flex gap-2">
                  <Check className="h-5 w-5 text-emerald-500 shrink-0 mt-0.5" />
                  <span className="text-slate-700 text-sm">Cálculo exato de metragem necessária</span>
                </div>
                <div className="flex gap-2">
                  <Check className="h-5 w-5 text-emerald-500 shrink-0 mt-0.5" />
                  <span className="text-slate-700 text-sm">Alinhamento preciso de fio do molde</span>
                </div>
                <div className="flex gap-2">
                  <Check className="h-5 w-5 text-emerald-500 shrink-0 mt-0.5" />
                  <span className="text-slate-700 text-sm">Redução do tempo de corte manual</span>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Seção 2 e 3 – Proteja Seu Patrimônio & Ganhe Espaço */}
      <section className="py-20 bg-slate-100 border-y border-slate-200/50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Column 1 - Protect Heritage */}
            <div className="space-y-6">
              <div className="inline-flex h-9 items-center justify-center rounded-full bg-indigo-100 px-4 text-sm font-bold text-indigo-700">
                Segurança Patrimonial
              </div>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
                Nunca Mais Perca Seus Moldes
              </h3>
              <p className="text-slate-600 leading-relaxed text-base sm:text-lg">
                Moldes físicos de papel kraft ou cartolina sofrem com a ação do tempo: rasgam nas bordas, perdem furos de marcação, mofam, deformam ou são extraviados. Ao digitalizar suas peças, você cria uma cópia digital eterna, protegendo o know-how de modelagem da sua marca de qualquer imprevisto.
              </p>

              {/* Graphic Comparison card */}
              <div className="border border-slate-200 bg-white rounded-2xl p-4 sm:p-6 shadow-md grid grid-cols-2 gap-4">
                <div className="border-r border-slate-100 pr-2">
                  <div className="text-rose-500 font-bold text-xs uppercase mb-2">Acervo em Papel</div>
                  <ul className="text-xs text-slate-500 space-y-1.5">
                    <li className="flex items-center gap-1.5">⚠️ Rasga com o uso</li>
                    <li className="flex items-center gap-1.5">⚠️ Risco de mofo e umidade</li>
                    <li className="flex items-center gap-1.5">⚠️ Organização manual difícil</li>
                    <li className="flex items-center gap-1.5">⚠️ Ocupa espaço físico valioso</li>
                  </ul>
                </div>
                <div className="pl-2">
                  <div className="text-emerald-500 font-bold text-xs uppercase mb-2">Digitalizado (Nuvem)</div>
                  <ul className="text-xs text-slate-600 space-y-1.5">
                    <li className="flex items-center gap-1.5 text-emerald-600 font-medium">✅ Eterno e imutável</li>
                    <li className="flex items-center gap-1.5 text-emerald-600 font-medium">✅ Backup seguro na nuvem</li>
                    <li className="flex items-center gap-1.5 text-emerald-600 font-medium">✅ Pesquisa instantânea</li>
                    <li className="flex items-center gap-1.5 text-emerald-600 font-medium">✅ Zero espaço físico</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Column 2 - Gain Space and Organization */}
            <div className="space-y-6 lg:border-l lg:border-slate-200 lg:pl-16">
              <div className="inline-flex h-9 items-center justify-center rounded-full bg-teal-100 px-4 text-sm font-bold text-teal-700">
                Organização Ágil
              </div>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
                Transforme Pilhas de Papel em um Acervo Organizado
              </h3>
              <p className="text-slate-600 leading-relaxed text-base sm:text-lg">
                Esqueça o tempo gasto procurando aquela manga ou gola específica em pastas empoeiradas. Com sua modelagem organizada de forma lógica no computador ou na nuvem, você localiza qualquer arquivo em segundos. Envie rapidamente para facções parceiras ou recupere o histórico de modelos de coleções passadas com um clique.
              </p>
              
              <div className="relative overflow-hidden rounded-2xl border border-slate-200 bg-white p-2 shadow-md">
                <img
                  src="https://images.unsplash.com/photo-1581092921461-eab62e97a780?auto=format&fit=crop&w=800&q=80"
                  alt="Pesquisa e controle digital de acervos de roupas em tela"
                  className="w-full h-48 object-cover rounded-xl"
                />
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* Seção 4 – Serviços (Cards) */}
      <section id="servicos" className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
              Nossos Serviços Especializados
            </h2>
            <p className="mt-4 text-lg text-slate-600">
              Soluções completas com suporte técnico e software de ponta para otimizar os processos de corte da sua marca.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((svc, i) => (
              <div
                key={i}
                className="group relative rounded-2xl border border-slate-200 bg-white p-6 shadow-md transition-all hover:border-indigo-200 hover:shadow-lg flex flex-col justify-between hover:-translate-y-1 duration-250"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-indigo-50 text-indigo-600 transition-colors group-hover:bg-indigo-600 group-hover:text-white">
                      {svc.icon}
                    </div>
                    <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400 bg-slate-100 rounded-full px-2.5 py-1">
                      {svc.tag}
                    </span>
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-2">{svc.title}</h3>
                  <p className="text-sm text-slate-500 leading-relaxed">{svc.description}</p>
                </div>

                <div className="pt-6 mt-6 border-t border-slate-50 flex items-center text-xs font-bold text-indigo-600 group-hover:text-indigo-700">
                  <span>Solicitar Orçamento</span>
                  <ArrowRight className="ml-1 h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
                </div>

                {/* Clickable cover anchor for conversion */}
                <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="absolute inset-0 z-10" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Seção 5 – Como Funciona (Timeline) */}
      <section id="como-funciona" className="py-20 bg-slate-50 border-t border-slate-200/50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
              Processo Ágil e Descomplicado
            </h2>
            <p className="mt-4 text-lg text-slate-600">
              Da entrega do papel à modelagem pronta no seu e-mail ou plotter, fazemos tudo em 4 etapas rápidas.
            </p>
          </div>

          <div className="relative max-w-5xl mx-auto">
            {/* Decorative Central Line (Desktop) */}
            <div className="hidden lg:block absolute top-1/2 left-4 right-4 h-0.5 bg-indigo-100 -translate-y-1/2 z-0" />

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 relative z-10">
              {steps.map((step, idx) => (
                <div key={idx} className="bg-white border border-slate-200/70 rounded-2xl p-6 shadow-sm flex flex-col justify-between h-full relative">
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <span className="text-3xl font-black text-indigo-100 group-hover:text-indigo-600 transition-colors">
                        {step.number}
                      </span>
                      <div className="h-2 w-2 rounded-full bg-indigo-500" />
                    </div>
                    <h3 className="text-lg font-bold text-slate-900 mb-2">{step.title}</h3>
                    <p className="text-xs sm:text-sm text-slate-500 leading-relaxed">{step.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Seção 6 – Diferenciais */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Text / Copy */}
            <div className="lg:col-span-7 space-y-6">
              <h2 className="text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
                Por que escolher a Technexos para sua modelagem?
              </h2>
              <p className="text-lg text-slate-600 leading-relaxed">
                Aliamos tecnologia de softwares industriais ao conhecimento profundo do processo de confecção para entregar mais agilidade para a sua marca.
              </p>

              <div className="space-y-4 pt-2">
                {benefits.map((benefit, i) => (
                  <div key={i} className="flex gap-4 p-4 rounded-xl hover:bg-slate-50 transition-colors">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-emerald-50">
                      {benefit.icon}
                    </div>
                    <div>
                      <h4 className="font-bold text-slate-900">{benefit.title}</h4>
                      <p className="text-sm text-slate-500 mt-0.5">{benefit.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Graphic Badge box */}
            <div className="lg:col-span-5 relative">
              <div className="absolute -inset-2 rounded-3xl bg-gradient-to-tr from-indigo-500 to-teal-400 opacity-20 blur-xl" />
              <div className="relative border border-slate-200 bg-white p-8 rounded-2xl shadow-xl space-y-6">
                <div className="flex items-center gap-3">
                  <div className="w-1.5 h-8 bg-indigo-600 rounded-full" />
                  <h3 className="text-xl font-bold text-slate-900">Região de Coleta</h3>
                </div>
                
                <p className="text-sm text-slate-600 leading-relaxed">
                  Contamos com uma estrutura logística preparada para coletar e entregar moldes com agilidade nas principais microrregiões industriais de <strong>Minas Gerais</strong> e do <strong>Rio de Janeiro</strong>.
                </p>

                <div className="space-y-3 border-t border-slate-100 pt-4">
                  <div className="flex items-center gap-2 text-xs font-semibold text-slate-600">
                    <MapPin className="h-4 w-4 text-indigo-500 shrink-0" />
                    <span>Minas Gerais (Regiões Industriais & Polo de Moda)</span>
                  </div>
                  <div className="flex items-center gap-2 text-xs font-semibold text-slate-600">
                    <MapPin className="h-4 w-4 text-indigo-500 shrink-0" />
                    <span>Rio de Janeiro (Capital, Região Serrana & Norte Fluminense)</span>
                  </div>
                </div>

                <div className="rounded-xl bg-slate-900 text-white p-4 text-center">
                  <span className="text-[10px] font-bold text-slate-400 block uppercase">ENTRE EM CONTATO PARA ROTA DE COLETA</span>
                  <a href={whatsappUrl} className="font-extrabold text-sm text-emerald-400 hover:underline mt-1 inline-block">
                    Verificar disponibilidade para minha cidade
                  </a>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Seção 7 – Perguntas Frequentes (FAQ) */}
      <section id="faq" className="py-20 bg-slate-50 border-t border-slate-200/50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
              Perguntas Frequentes
            </h2>
            <p className="mt-4 text-lg text-slate-600">
              Tire suas principais dúvidas sobre o envio de moldes, prazos e compatibilidade de arquivos.
            </p>
          </div>

          <div className="max-w-3xl mx-auto bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 shadow-sm">
            <Accordion type="single" collapsible className="space-y-4">
              {faqs.map((faq, index) => {
                const itemId = `faq-item-${index}`;
                return (
                  <AccordionItem key={index} value={itemId} className="border-b border-slate-100 pb-4 last:border-b-0 last:pb-0">
                    <AccordionTrigger className="text-left font-bold text-slate-900 hover:text-indigo-600 transition-colors py-2 text-base sm:text-lg">
                      {faq.q}
                    </AccordionTrigger>
                    <AccordionContent className="text-slate-500 pt-2 text-sm sm:text-base leading-relaxed">
                      {faq.a}
                    </AccordionContent>
                  </AccordionItem>
                );
              })}
            </Accordion>
          </div>
        </div>
      </section>

      {/* Seção Final (CTA) */}
      <section className="py-20 bg-gradient-to-br from-indigo-950 to-slate-950 text-white text-center relative overflow-hidden">
        {/* Glow effect */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-indigo-500/10 rounded-full blur-3xl" />

        <div className="container mx-auto px-4 relative z-10 sm:px-6 lg:px-8 max-w-4xl space-y-6">
          <h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl md:text-5xl leading-tight">
            Sua Modelagem é um Patrimônio. <br />
            <span className="bg-gradient-to-r from-indigo-400 to-teal-300 bg-clip-text text-transparent">
              Proteja, Organize e Produza Gastando Menos.
            </span>
          </h2>
          <p className="text-slate-300 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
            Solicite um orçamento e descubra como a digitalização de moldes e os riscos para corte podem aumentar a eficiência da sua produção.
          </p>
          <div className="pt-4 flex flex-col sm:flex-row justify-center gap-4">
            <Button
              asChild
              className="rounded-xl bg-[#25D366] px-8 py-7 text-base font-bold text-white shadow-xl shadow-green-500/30 hover:bg-[#20ba59] hover:-translate-y-0.5 transition-all gap-2 hover:text-white"
            >
              <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
                Falar no WhatsApp
                <Phone className="h-5 w-5" />
              </a>
            </Button>
            <Button
              asChild
              variant="outline"
              className="rounded-xl border-slate-700 bg-slate-900/50 hover:bg-slate-900 text-white px-8 py-7 text-base font-bold hover:text-white"
            >
              <a href="tel:32991075164">Ligar para Nós</a>
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-slate-200 bg-white py-12">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
          <div className="flex items-center justify-center gap-2">
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-indigo-600 text-white">
              <Scissors className="h-4 w-4" />
            </div>
            <span className="font-extrabold text-lg text-slate-900">
              Technexos<span className="text-indigo-600">Moda</span>
            </span>
          </div>

          <div className="text-xs sm:text-sm text-slate-500 max-w-md mx-auto space-y-2">
            <p className="font-semibold text-slate-700">Atendimento especializado para Minas Gerais e Rio de Janeiro.</p>
            <p>Telefone / WhatsApp: (32) 99107-5164</p>
          </div>

          <p className="text-xs text-slate-400 pt-6 border-t border-slate-100">
            © {new Date().getFullYear()} Technexos. Todos os direitos reservados.
          </p>
        </div>
      </footer>

      {/* Custom float button passing our custom WhatsApp message and phone */}
      <WhatsAppFloat phone="32991075164" message={whatsappMessage} />
    </div>
  );
}
