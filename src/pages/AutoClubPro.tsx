import { useState, useEffect } from "react";
import { useSEO } from "@/hooks/useSEO";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppFloat from "@/components/WhatsAppFloat";
import YouTubeVideosSection from "@/components/YouTubeVideosSection";
import {
  CheckCircle2,
  TrendingUp,
  Clock,
  DollarSign,
  Users,
  BarChart3,
  Zap,
  Lock,
  Star,
  ArrowRight,
  Calendar,
  Headphones,
  ChevronDown,
  ChevronLeft,
  ChevronRight,
  X,
} from "lucide-react";

const AutoClubPro = () => {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [timeLeft, setTimeLeft] = useState(48 * 60 * 60); // 48 horas em segundos
  const [currentHeroIndex, setCurrentHeroIndex] = useState(0);

  const heroes = [
    {
      id: 1,
      backgroundImage: "https://images.unsplash.com/photo-1511818966892-d7d671e672a2?w=1600&h=900&fit=crop"
    },
    {
      id: 2,
      backgroundImage: "https://images.unsplash.com/photo-1511818966892-d7d671e672a2?w=1600&h=900&fit=crop"
    },
    {
      id: 3,
      backgroundImage: "https://images.unsplash.com/photo-1511818966892-d7d671e672a2?w=1600&h=900&fit=crop"
    }
  ];

  // SEO Absurdo - AutoClub Pro
  useSEO({
    title: "AutoClub Pro | Sistema Completo para Oficina, Vidraçaria, Auto Center e Pneuaria | R$ 3.700/ano | TechNexos",
    description: "AutoClub Pro - Sistema completo para oficinas, vidraçarias, auto centers e pneuarias. Gestão de clientes, vendas, comissões, estoque, agendamentos e integrações. MVP em 10 dias. R$ 3.700/ano com entrega em 10 dias. Suporte 24/7 via WhatsApp. Aumente seu faturamento até +300%.",
    keywords: [
      "autoclub pro",
      "sistema officina",
      "software auto center",
      "gestão vidraçaria",
      "sistema pneuaria",
      "controle estoque",
      "gestão comissões vendedor",
      "agendamentos automáticos",
      "integração whatsapp instagram facebook",
      "dashboard vendas",
      "sistema completo auto",
      "software gestão veiculos",
      "planos manutenção",
      "controle caixa",
      "gestão funcionários",
      "comissão automática vendedor",
      "sistema leads automático",
      "inteligência artificial vendas",
      "análise faturamento oficina",
      "automação processos auto",
      "software saas auto",
      "sistema cloud auto center",
      "software especializado oficina",
      "tecnologia oficina Brasil",
      "sistema gestão auto Brazil",
      "software pneuaria especializado",
      "gestão clientes oficina",
      "histórico vehicles management",
      "alerts reposição estoque",
    ],
    ogTitle: "AutoClub Pro | Sistema Profissional para Oficinas, Vidraçarias e Auto Centers",
    ogDescription: "Sistema especializado que aumenta seu faturamento até +300%. Gestão completa, integrações inteligentes e suporte 24/7. R$ 3.700/ano - MVP em 10 dias.",
    ogUrl: "https://www.technexos.com.br/autoclub-pro",
    twitterTitle: "AutoClub Pro - Sistema para Oficina e Auto Center",
    twitterDescription: "Transforme sua oficina/vidraçaria/auto center com sistema profissional. Aumente vendas, retenha clientes, automatize processos.",
    canonicalUrl: "https://www.technexos.com.br/autoclub-pro",
    googleSiteVerification: "TU7NzrXfsfOsd_Y-dzJPhTKTXodzzW3jeG5vTx6kxRI",
    schema: {
      "@context": "https://schema.org",
      "@type": "SoftwareApplication",
      "name": "AutoClub Pro",
      "applicationCategory": "BusinessApplication",
      "description": "Sistema completo para gestão de oficinas, vidraçarias, auto centers e pneuarias",
      "url": "https://www.technexos.com.br/autoclub-pro",
      "creator": {
        "@type": "Organization",
        "name": "TechNexos Consultoria em Tecnologia",
        "founder": {
          "@type": "Person",
          "name": "Roque Rafael Proença"
        }
      },
      "offers": {
        "@type": "Offer",
        "price": "3700",
        "priceCurrency": "BRL",
        "priceValidUntil": "2025-12-31",
        "description": "AutoClub Pro Sistema Profissional - R$ 3.700/ano",
        "availability": "https://schema.org/InStock",
        "deliveryTime": "P10D"
      },
      "features": [
        "Gestão Completa de Clientes",
        "Controle de Vendas",
        "Comissões Automáticas",
        "Gestão de Estoque",
        "Agendamentos Inteligentes",
        "Integração WhatsApp/Instagram/Facebook",
        "Dashboard Analytics",
        "Suporte 24/7"
      ],
      "aggregateRating": {
        "@type": "AggregateRating",
        "ratingValue": "5",
        "ratingCount": "50"
      }
    }
  });

  // Timer que reinicia a cada 48 horas
  useEffect(() => {
    const interval = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev <= 1) {
          return 48 * 60 * 60; // Reinicia para 48 horas
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  // Auto-rotate hero carousel
  useEffect(() => {
    const carouselInterval = setInterval(() => {
      setCurrentHeroIndex((prev) => (prev + 1) % heroes.length);
    }, 8000); // Muda a cada 8 segundos

    return () => clearInterval(carouselInterval);
  }, [heroes.length]);

  // Navegação do carrossel
  const nextHero = () => {
    setCurrentHeroIndex((prev) => (prev + 1) % heroes.length);
  };

  const prevHero = () => {
    setCurrentHeroIndex((prev) => (prev - 1 + heroes.length) % heroes.length);
  };

  // Função para formatar o tempo em HH:MM:SS
  const formatTime = (seconds: number) => {
    const hours = Math.floor(seconds / 3600);
    const minutes = Math.floor((seconds % 3600) / 60);
    const secs = seconds % 60;
    return `${hours.toString().padStart(2, "0")}:${minutes.toString().padStart(2, "0")}:${secs.toString().padStart(2, "0")}`;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Integrar com backend para salvar email
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setEmail("");
    }, 5000);
  };

  const features = [
    {
      title: "Gestão Completa de Clientes",
      description:
        "Banco de dados organizado com histórico completo, informações de veículos e planos de manutenção automáticos",
      icon: Users,
      benefit: "Você atende melhor, cliente se sente importante, volta mais vezes",
    },
    {
      title: "Vendas com Controle Real",
      description:
        "Registre vendas por vendedor, saiba quem vende mais, rastreie métodos de pagamento",
      icon: TrendingUp,
      benefit: "Vendedor motivado trabalha melhor. Você sabe quem está entregando",
    },
    {
      title: "Comissões Automáticas",
      description:
        "Calcula comissões automaticamente, histórico de ganhos, comprovante printável",
      icon: DollarSign,
      benefit: "Retém melhores vendedores. Sem brigas sobre comissão",
    },
    {
      title: "Gestão de Serviços",
      description:
        "Registre todos os serviços, associe funcionários, comissão automática",
      icon: Zap,
      benefit: "Clientes em plano recebem atenção diferenciada",
    },
    {
      title: "Controle de Estoque",
      description:
        "Código, categoria, preços, quantidade em tempo real, alertas de mínimo",
      icon: BarChart3,
      benefit: "Nunca mais falta produto. Estoque não some",
    },
    {
      title: "Agendamentos Inteligentes",
      description:
        "Clientes agendam pelo sistema, lembretes automáticos, visualização por dia/semana/mês",
      icon: Clock,
      benefit: "Menos ligações telefônicas. Cliente não esquece. Agenda sempre cheia",
    },
  ];

  const successStories = [
    {
      name: "Oficina Mendes",
      location: "Recife, PE",
      type: "Oficina Mecânica",
      quote:
        "Com AutoClub Pro, em 3 meses temos vendedor disparado à frente. Aumentamos comissão dele e a loja dobrou de faturamento.",
      results: [
        "Faturamento: +R$15.000/mês",
        "Clientes recorrentes: +35%",
        "Custo administrativo: -40%",
      ],
    },
    {
      name: "Pneuaria Express",
      location: "São Paulo, SP",
      type: "Auto Center / Pneuaria",
      quote:
        "Agora vejo que vendedor vende bem para qual tipo de cliente. Estoque otimizado, agendamento automático encheu minha agenda.",
      results: [
        "Clientes perdidos: 0 por mês",
        "Agendamentos: +45%",
        "Fidelização: +55%",
      ],
    },
    {
      name: "Vidraçaria Santos",
      location: "Brasília, DF",
      type: "Vidraçaria Automotiva",
      quote:
        "Sistema me mostrou que 60% do lucro vem de 3 tipos de vidro. Parei de estufar estoque com produtos que não vendem.",
      results: [
        "Margem de lucro: de 12% para 24%",
        "Capital parado: -50%",
        "Retorno de cliente: +45%",
      ],
    },
  ];

  const problems = [
    {
      problem: "Clientes espalhados em planilhas e anotações",
      result: "Perdem-se clientes, menos retorno",
      solution: "Banco de dados centralizado com histórico completo",
    },
    {
      problem: "Vendedores não sabem quanto já venderam",
      result: "Sem motivação, vendas caem",
      solution: "Dashboard de vendas em tempo real por vendedor",
    },
    {
      problem: "Estoque desaparece sem explicação",
      result: "Perda de lucro e desorganização",
      solution: "Rastreamento completo de movimentações",
    },
    {
      problem: "Comissões demorando semanas para calcular",
      result: "Desgaste com vendedor, brigas",
      solution: "Cálculo automático e comprovante instantâneo",
    },
    {
      problem: "Agendamentos viram bagunça no telefone",
      result: "Cliente não retorna, agenda vazia",
      solution: "Sistema de agendamento automático online",
    },
    {
      problem: "Lucro minguando sem saber por quê",
      result: "Decisões no escuro, negócio estagna",
      solution: "Dashboard executivo com métricas em tempo real",
    },
  ];

  const comparison = [
    {
      feature: "Comissão Automática",
      excel: "❌",
      antigos: "❌",
      autoclub: "✅",
    },
    {
      feature: "Agendamentos Inteligentes",
      excel: "❌",
      antigos: "⚠️",
      autoclub: "✅",
    },
    {
      feature: "Acesso Via Celular",
      excel: "❌",
      antigos: "⚠️",
      autoclub: "✅",
    },
    {
      feature: "Backup Automático",
      excel: "❌",
      antigos: "⚠️",
      autoclub: "✅",
    },
    {
      feature: "Relatórios em Tempo Real",
      excel: "❌",
      antigos: "⚠️",
      autoclub: "✅",
    },
    {
      feature: "Sem Técnico de TI",
      excel: "✅",
      antigos: "❌",
      autoclub: "✅",
    },
  ];

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      <main className="overflow-hidden">
        {/* Hero Carousel Container */}
        <div className="relative min-h-screen overflow-hidden">
          {/* Carousel Wrapper com transição suave */}
          <div 
            className="flex ease-in-out"
            style={{ 
              transform: `translateX(-${currentHeroIndex * 100}%)`,
              transition: 'transform 1.5s ease-in-out'
            }}
          >
            {/* Hero 1 */}
            <section className="relative w-full flex-shrink-0 flex items-center justify-center overflow-hidden bg-black pt-16 pb-16" style={{ minHeight: 'calc(100vh - 50px)' }}>
              {/* Background Image */}
              <div className="absolute inset-0 z-0">
                <img
                  src={heroes[currentHeroIndex].backgroundImage}
                  alt="Negócio Automotivo"
                  className="w-full h-full object-cover opacity-35 transition-opacity duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-black via-black/70 to-black/40"></div>
              </div>

              {/* Content */}
              <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
                <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-center">
                  {/* Left Side */}
                  <div className={`md:col-span-6 ${currentHeroIndex === 0 ? "text-white" : "text-yellow-50"}`} style={{ minHeight: '400px', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                    <div style={{ height: '50px', display: 'flex', alignItems: 'flex-end', marginBottom: '12px' }}>
                      <div className={`px-4 py-2 rounded-full text-sm font-semibold border inline-block ${currentHeroIndex === 0 ? "bg-blue-600/30 text-blue-300 border-blue-500/50" : "bg-orange-600/40 text-orange-200 border-orange-500/50"}`}>
                        {currentHeroIndex === 0 ? "🚗 Para Seu Negócio Automotivo" : "⚡ Solução Rápida e Eficiente"}
                      </div>
                    </div>

                    <h1 className="leading-tight mb-6 font-black text-5xl sm:text-6xl lg:text-7xl">
                      {currentHeroIndex === 0 ? (
                        <>Chega de <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">Bagunça no Seu Negócio</span></>
                      ) : (
                        <>Transforme Seu <span className="bg-gradient-to-r from-orange-400 to-yellow-400 bg-clip-text text-transparent">Negócio Agora</span></>
                      )}
                    </h1>

                    <div className="md:hidden flex justify-center mb-6">
                      <img src={currentHeroIndex === 0 ? "/car.png" : "/moto.png"} alt="Veículo" className="rounded-2xl shadow-2xl" style={{ maxHeight: '300px', objectFit: 'contain' }} />
                    </div>

                    <p className={`leading-relaxed mb-6 ${currentHeroIndex === 0 ? "text-xl text-slate-200" : "text-xl text-orange-100"}`}>
                      {currentHeroIndex === 0 
                        ? "AutoClub Pro é o sistema profissional que transforma seu negócio automotivo. Vidraçaria, oficina, auto center, pneuaria, pintura, funilaria..."
                        : "Aumente seu faturamento em até 300%. Sistema inteligente, fácil de usar, pronto em 10 dias. Suporte 24/7 via WhatsApp."
                      }
                    </p>

                    <div className="space-y-3 mb-8">
                      <div className="flex items-center gap-3">
                        <CheckCircle2 className={`h-5 w-5 flex-shrink-0 ${currentHeroIndex === 0 ? "text-blue-400" : "text-orange-400"}`} />
                        <div>
                          <p className={`font-bold text-sm ${currentHeroIndex === 0 ? "text-white" : "text-orange-50"}`}>{currentHeroIndex === 0 ? "Pronto em 10 Dias" : "Implementação Rápida"}</p>
                          <p className={`text-xs ${currentHeroIndex === 0 ? "text-slate-300" : "text-orange-200"}`}>{currentHeroIndex === 0 ? "Sistema personalizado" : "Sistema rodando em 10 dias"}</p>
                        </div>
                      </div>
                      <div className="flex items-center gap-3">
                        <CheckCircle2 className={`h-5 w-5 flex-shrink-0 ${currentHeroIndex === 0 ? "text-blue-400" : "text-orange-400"}`} />
                        <div>
                          <p className={`font-bold text-sm ${currentHeroIndex === 0 ? "text-white" : "text-orange-50"}`}>{currentHeroIndex === 0 ? "Suporte 24/7h" : "Suporte Premium"}</p>
                          <p className={`text-xs ${currentHeroIndex === 0 ? "text-slate-300" : "text-orange-200"}`}>{currentHeroIndex === 0 ? "Via WhatsApp" : "Consultoria incluída"}</p>
                        </div>
                      </div>
                    </div>

                    <div className="flex flex-col sm:flex-row gap-4">
                      <Button size="lg" className={`text-white px-8 py-6 font-bold ${currentHeroIndex === 0 ? "bg-blue-600 hover:bg-blue-700" : "bg-orange-600 hover:bg-orange-700"}`} onClick={() => document.getElementById("proposal")?.scrollIntoView({ behavior: "smooth" })}>
                        {currentHeroIndex === 0 ? "Ver Proposta" : "Começar Agora"}
                      </Button>
                      <Button size="lg" className={`text-white px-8 py-6 font-bold ${currentHeroIndex === 0 ? "bg-green-600 hover:bg-green-700" : "bg-red-600 hover:bg-red-700"}`} onClick={() => window.open("https://wa.me/5532991075164")}>
                        💬 WhatsApp
                      </Button>
                    </div>
                  </div>

                  {/* Right Side Image */}
                  <div className="hidden md:flex md:col-span-6 justify-end">
                    <div className="relative" style={{ width: '450px', height: '450px' }}>
                      <div className="absolute inset-0 rounded-3xl" style={{ background: 'radial-gradient(circle at center, rgba(255,255,255,0.4) 0%, rgba(255,255,255,0.15) 40%, transparent 70%)', filter: 'blur(20px)' }}></div>
                      <img src="/car.png" alt="Carro" className="relative rounded-3xl" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                    </div>
                  </div>
                </div>
              </div>

              {/* Scroll Indicator */}
              <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 z-10 text-center pointer-events-none">
                <p className="text-white text-xs font-semibold mb-2">Veja como funciona</p>
                <ChevronDown className="w-5 h-5 text-blue-400 animate-bounce mx-auto" />
              </div>
            </section>

            {/* Hero 2 - Duplicado com cores diferentes */}
            <section className="relative w-full flex-shrink-0 flex items-center justify-center overflow-hidden bg-black pt-16 pb-16" style={{ minHeight: 'calc(100vh - 50px)' }}>
            {/* Background Image */}
            <div className="absolute inset-0 z-0">
              <img
                src={heroes[1].backgroundImage}
                alt="Negócio Automotivo"
                className="w-full h-full object-cover opacity-35 transition-opacity duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-orange-950 via-orange-950/70 to-orange-950/40"></div>
            </div>

            {/* Content */}
            <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-center">
                {/* Left Side - Text - Takes 6 columns */}
                <div className={`md:col-span-6 order-1 md:order-1 text-yellow-50`} style={{ minHeight: '400px', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                  <div style={{ height: '50px', display: 'flex', alignItems: 'flex-end', marginBottom: '12px' }}>
                    <div className="inline-block">
                      <div className={`px-4 py-2 rounded-full text-sm font-semibold border bg-orange-600/40 text-orange-200 border-orange-500/50`}>
                        ⚡ Solução Rápida e Eficiente
                      </div>
                    </div>
                  </div>

                  <h1 className={`leading-tight mb-6 font-black text-5xl sm:text-6xl lg:text-7xl`}>
                    <>Transforme Seu <span className="bg-gradient-to-r from-orange-400 to-yellow-400 bg-clip-text text-transparent">Negócio Agora</span></>
                  </h1>

                  {/* Mobile Image - positioned between title and paragraph */}
                  <div className="md:hidden flex justify-center">
                    <div className="relative w-full max-w-sm">
                      <div className="absolute -inset-4 bg-gradient-to-r from-orange-600/30 to-yellow-600/30 rounded-3xl blur-3xl"></div>
                      <img
                        src="/moto.png"
                        alt="Moto"
                        className="relative rounded-2xl shadow-2xl w-full h-auto"
                        style={{ maxHeight: '400px', objectFit: 'contain' }}
                      />
                    </div>
                  </div>

                  <div>
                    <p className={`leading-relaxed text-lg text-orange-100`}>
                      Aumente seu faturamento em até 300%. Sistema inteligente, fácil de usar, pronto em 10 dias. Suporte 24/7 via WhatsApp.
                    </p>
                  </div>

                  {/* Value Props - Simples e Limpo */}
                  <div className="space-y-5 pt-6">
                    <div className="flex items-center gap-4">
                      <div className={`flex-shrink-0 p-2 rounded-lg bg-orange-600/40`}>
                        <CheckCircle2 className={`h-6 w-6 text-orange-400`} />
                      </div>
                      <div>
                        <p className={`font-bold text-orange-50`}>
                          Implementação Rápida
                        </p>
                        <p className={`text-sm text-orange-200`}>
                          Seu sistema rodando em 10 dias
                        </p>
                      </div>
                    </div>

                    <div className="flex items-center gap-4">
                      <div className={`flex-shrink-0 p-2 rounded-lg bg-orange-600/40`}>
                        <CheckCircle2 className={`h-6 w-6 text-orange-400`} />
                      </div>
                      <div>
                        <p className={`font-bold text-orange-50`}>
                          Suporte Premium 24/7
                        </p>
                        <p className={`text-sm text-orange-200`}>
                          Consultoria incluída
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* CTAs */}
                  <div className="flex flex-col sm:flex-row gap-4 pt-4">
                    <Button
                      size="lg"
                      className={`text-white px-8 py-6 font-bold shadow-lg rounded-lg bg-gradient-to-r from-orange-600 to-orange-700 hover:from-orange-700 hover:to-orange-800`}
                      onClick={() =>
                        document
                          .getElementById("proposal")
                          ?.scrollIntoView({ behavior: "smooth" })
                      }
                    >
                      Começar Agora <ArrowRight className="ml-2 w-4 h-4" />
                    </Button>
                    <Button
                      size="lg"
                      className={`text-white px-8 py-6 font-bold shadow-lg rounded-lg bg-red-600 hover:bg-red-700`}
                      onClick={() =>
                        window.open("https://wa.me/5532991075164", "_blank")
                      }
                    >
                      💬 WhatsApp
                    </Button>
                  </div>
                </div>

                {/* Right Side - Image - Takes 6 columns */}
                <div className="hidden md:flex md:col-span-6 justify-end items-center order-2 md:order-2">
                  <div className="relative" style={{ width: '500px', height: '500px' }}>
                    {/* Light Background */}
                    <div className="absolute inset-0 rounded-3xl" style={{
                      background: 'radial-gradient(circle at center, rgba(255,255,255,0.4) 0%, rgba(255,255,255,0.15) 40%, transparent 70%)',
                      filter: 'blur(20px)',
                      zIndex: 0
                    }}></div>
                    
                    {/* Image */}
                    <img
                      src="/moto.png"
                      alt="Moto"
                      className="relative rounded-3xl"
                      style={{ width: '100%', height: '100%', objectFit: 'contain', zIndex: 1 }}
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Scroll Indicator */}
            <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 z-10 text-center pointer-events-none">
              <p className="text-white text-xs font-semibold mb-2">Veja como funciona</p>
              <ChevronDown className="w-5 h-5 text-orange-400 animate-bounce mx-auto" />
            </div>
            </section>

            {/* Hero 3 - Verde com Caminhão */}
            <section className="relative w-full flex-shrink-0 flex items-center justify-center overflow-hidden bg-black pt-16 pb-16" style={{ minHeight: 'calc(100vh - 50px)' }}>
            {/* Background Image */}
            <div className="absolute inset-0 z-0">
              <img
                src={heroes[2].backgroundImage}
                alt="Negócio Automotivo"
                className="w-full h-full object-cover opacity-35 transition-opacity duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-green-950 via-green-950/70 to-green-950/40"></div>
            </div>

            {/* Content */}
            <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-center">
                {/* Left Side - Text - Takes 6 columns */}
                <div className={`md:col-span-6 order-1 md:order-1 text-emerald-50`} style={{ minHeight: '400px', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                  <div style={{ height: '50px', display: 'flex', alignItems: 'flex-end', marginBottom: '12px' }}>
                    <div className="inline-block">
                      <div className={`px-4 py-2 rounded-full text-sm font-semibold border bg-emerald-600/40 text-emerald-200 border-emerald-500/50`}>
                        📦 Gestão de Estoque
                      </div>
                    </div>
                  </div>

                  <h1 className={`leading-tight mb-6 font-black text-5xl sm:text-6xl lg:text-7xl`}>
                    Controle de <span className="bg-gradient-to-r from-emerald-400 to-teal-400 bg-clip-text text-transparent">Estoque Inteligente</span>
                  </h1>

                  {/* Mobile Image - positioned between title and paragraph */}
                  <div className="md:hidden flex justify-center">
                    <div className="relative w-full max-w-sm">
                      <div className="absolute -inset-4 bg-gradient-to-r from-emerald-600/30 to-teal-600/30 rounded-3xl blur-3xl"></div>
                      <img
                        src="/truck.png"
                        alt="Caminhão"
                        className="relative rounded-2xl shadow-2xl w-full h-auto"
                        style={{ maxHeight: '400px', objectFit: 'contain' }}
                      />
                    </div>
                  </div>

                  <div>
                    <p className={`leading-relaxed text-xl text-emerald-100`}>
                      Código, categoria, preços e quantidade em tempo real. Alertas de mínimo automáticos, evite falta de produtos e estoque parado.
                    </p>
                  </div>

                  {/* Value Props - Simples e Limpo */}
                  <div className="space-y-5 pt-6">
                    <div className="flex items-center gap-4">
                      <div className={`flex-shrink-0 p-2 rounded-lg bg-emerald-600/40`}>
                        <CheckCircle2 className={`h-6 w-6 text-emerald-400`} />
                      </div>
                      <div>
                        <p className={`font-bold text-emerald-50`}>
                          Alertas Automáticos
                        </p>
                        <p className={`text-sm text-emerald-200`}>
                          Quando estoque atinge mínimo
                        </p>
                      </div>
                    </div>

                    <div className="flex items-center gap-4">
                      <div className={`flex-shrink-0 p-2 rounded-lg bg-emerald-600/40`}>
                        <CheckCircle2 className={`h-6 w-6 text-emerald-400`} />
                      </div>
                      <div>
                        <p className={`font-bold text-emerald-50`}>
                          Rastreamento Completo
                        </p>
                        <p className={`text-sm text-emerald-200`}>
                          Histórico de movimentações
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* CTAs */}
                  <div className="flex flex-col sm:flex-row gap-4 pt-4">
                    <Button
                      size="lg"
                      className={`text-white px-8 py-6 font-bold shadow-lg rounded-lg bg-gradient-to-r from-emerald-600 to-emerald-700 hover:from-emerald-700 hover:to-emerald-800`}
                      onClick={() =>
                        document
                          .getElementById("proposal")
                          ?.scrollIntoView({ behavior: "smooth" })
                      }
                    >
                      Ver Detalhes <ArrowRight className="ml-2 w-4 h-4" />
                    </Button>
                    <Button
                      size="lg"
                      className={`text-white px-8 py-6 font-bold shadow-lg rounded-lg bg-teal-600 hover:bg-teal-700`}
                      onClick={() =>
                        window.open("https://wa.me/5532991075164", "_blank")
                      }
                    >
                      💬 WhatsApp
                    </Button>
                  </div>
                </div>

                {/* Right Side - Image - Takes 6 columns */}
                <div className="hidden md:flex md:col-span-6 justify-end items-center order-2 md:order-2">
                  <div className="relative" style={{ width: '500px', height: '500px' }}>
                    {/* Light Background */}
                    <div className="absolute inset-0 rounded-3xl" style={{
                      background: 'radial-gradient(circle at center, rgba(255,255,255,0.4) 0%, rgba(255,255,255,0.15) 40%, transparent 70%)',
                      filter: 'blur(20px)',
                      zIndex: 0
                    }}></div>
                    
                    {/* Image */}
                    <img
                      src="/truck.png"
                      alt="Caminhão"
                      className="relative rounded-3xl"
                      style={{ width: '100%', height: '100%', objectFit: 'contain', zIndex: 1 }}
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Scroll Indicator */}
            <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 z-10 text-center pointer-events-none">
              <p className="text-white text-xs font-semibold mb-2">Veja como funciona</p>
              <ChevronDown className="w-5 h-5 text-emerald-400 animate-bounce mx-auto" />
            </div>
            </section>
          </div>

          {/* Carousel Navigation - Botões */}
          <button
            onClick={prevHero}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 z-20 bg-white/20 hover:bg-white/40 text-white p-2 rounded-full transition"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          <button
            onClick={nextHero}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 z-20 bg-white/20 hover:bg-white/40 text-white p-2 rounded-full transition"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          {/* Carousel Dots - Indicadores */}
          <div className="absolute bottom-20 left-1/2 transform -translate-x-1/2 z-20 flex gap-2">
            {heroes.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentHeroIndex(idx)}
                className={`w-2 h-2 rounded-full transition ${
                  idx === currentHeroIndex ? "bg-white" : "bg-white/50"
                }`}
              />
            ))}
          </div>
          </div>

          {/* Problems Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 dark:from-black dark:via-slate-950 dark:to-black">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl sm:text-4xl font-bold text-center mb-4">
              Por Que Seu Negócio Automotivo Está Perdendo Dinheiro Agora
            </h2>
            <p className="text-center text-slate-600 dark:text-slate-400 mb-12 max-w-2xl mx-auto">
              Sem um sistema profissional, você está deixando dinheiro na mesa
              todos os dias. Seja vidraçaria, oficina, auto center ou pneuaria.
            </p>

            <div className="grid md:grid-cols-2 gap-6">
              {problems.map((item, idx) => (
                <div
                  key={idx}
                  className="bg-white dark:bg-slate-900 p-6 rounded-lg border border-slate-200 dark:border-slate-800"
                >
                  <div className="flex items-start gap-3 mb-3">
                    <div className="text-red-500 text-2xl">🔴</div>
                    <h3 className="font-semibold text-slate-900 dark:text-white">
                      {item.problem}
                    </h3>
                  </div>
                  <p className="text-red-500 dark:text-red-400 mb-3 text-sm font-semibold">
                    Resultado: {item.result}
                  </p>
                  <div className="flex items-start gap-2 text-green-600 dark:text-green-400">
                    <CheckCircle2 className="w-5 h-5 flex-shrink-0 mt-0.5" />
                    <span className="text-sm">{item.solution}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Features Section with Images */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 dark:from-black dark:via-slate-950 dark:to-black">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl sm:text-4xl font-bold text-center mb-4">
              O Sistema Que Seu Negócio Automotivo Merece
            </h2>
            <p className="text-center text-slate-600 dark:text-slate-400 mb-16 max-w-2xl mx-auto">
              6 módulos essenciais para resolver seus principais problemas,
              totalmente personalizados para vidraçaria, oficina, auto center, pneuaria, pintura ou qualquer outro negócio automotivo
            </p>

            {/* Feature 0: Captação de Clientes de Redes Sociais */}
            <div className="mb-20 grid md:grid-cols-2 gap-12 items-center md:flex-row-reverse">
              <div className="md:order-2">
                <h3 className="text-2xl font-bold mb-4 text-slate-900 dark:text-white">
                  ✅ Captação de Clientes de Redes Sociais
                </h3>
                <p className="text-slate-600 dark:text-slate-400 mb-4">
                  Você está perdendo clientes potenciais todo dia nas redes sociais. 
                  AutoClub Pro integra leads de Instagram, Facebook e WhatsApp 
                  diretamente no seu CRM. Todos os interessados entram no banco de 
                  dados automaticamente, com histórico de contato e acompanhamento.
                </p>
                <p className="text-slate-700 dark:text-slate-300 mb-6 font-semibold">
                  💡 Resultado: Nenhum lead perdido. Você acompanha todo 
                  interessado até se tornar cliente.
                </p>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                  <span className="text-slate-600 dark:text-slate-400">
                    Captura automática de leads de redes sociais
                  </span>
                </div>
                <div className="flex items-start gap-3 mt-2">
                  <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                  <span className="text-slate-600 dark:text-slate-400">
                    Histórico de acompanhamento de cada interessado
                  </span>
                </div>
                <div className="flex items-start gap-3 mt-2">
                  <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                  <span className="text-slate-600 dark:text-slate-400">
                    Funil de vendas integrado (lead → cliente)
                  </span>
                </div>
              </div>
              <div className="md:order-1 relative">
                <img
                   src="/cap-clientes.PNG"
                   alt="Captação de Clientes de Redes Sociais"
                   className="w-full h-auto object-contain rounded-lg shadow-lg border-2 border-slate-200 dark:border-slate-700 cursor-pointer hover:opacity-80 transition-opacity"
                   onClick={() => setSelectedImage("/cap-clientes.PNG")}
                 />
                <div className="absolute bottom-0 left-0 right-0 bg-black/60 text-white text-xs py-2 px-3 rounded-b-lg">
                  📸 CRM de Captação de Clientes de Redes Sociais
                </div>
              </div>
            </div>

            {/* Feature 1: Histórico Completo e Auditoria */}
            <div className="mb-20 grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h3 className="text-2xl font-bold mb-4 text-slate-900 dark:text-white">
                  ✅ Histórico Completo e Controle de Segurança
                </h3>
                <p className="text-slate-600 dark:text-slate-400 mb-4">
                  Toda movimentação do seu sistema fica registrada. Quem fez o quê, 
                  quando, por quê. AutoClub Pro oferece controle total com log de 
                  auditoria completo. Você sabe exatamente quem mexeu em cada 
                  documento, alteração de preço, exclusão de vendas ou mudança de dados. 
                  Segurança profissional para seu negócio.
                </p>
                <p className="text-slate-700 dark:text-slate-300 mb-6 font-semibold">
                  💡 Resultado: Controle total, segurança garantida, zero suspeitas 
                  sobre movimentações irregulares.
                </p>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                  <span className="text-slate-600 dark:text-slate-400">
                    Log de auditoria de todas as movimentações (quem/quando/o quê)
                  </span>
                </div>
                <div className="flex items-start gap-3 mt-2">
                  <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                  <span className="text-slate-600 dark:text-slate-400">
                    Rastreamento de alterações de dados e preços
                  </span>
                </div>
                <div className="flex items-start gap-3 mt-2">
                  <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                  <span className="text-slate-600 dark:text-slate-400">
                    Controle de permissões por usuário (gerente vê tudo, vendedor vê só suas vendas)
                  </span>
                </div>
              </div>
              <div className="relative">
                <img
                   src="/cap-historico.PNG"
                   alt="Histórico e Auditoria"
                   className="w-full h-auto object-contain rounded-lg shadow-lg border-2 border-slate-200 dark:border-slate-700 cursor-pointer hover:opacity-80 transition-opacity"
                   onClick={() => setSelectedImage("/cap-historico.PNG")}
                 />
                <div className="absolute bottom-0 left-0 right-0 bg-black/60 text-white text-xs py-2 px-3 rounded-b-lg">
                  📸 Log de Auditoria e Histórico de Movimentações
                </div>
              </div>
            </div>

            {/* Feature 2: Vendas e Comissões */}
            <div className="mb-20 grid md:grid-cols-2 gap-12 items-center md:flex-row-reverse">
              <div className="md:order-2">
                <h3 className="text-2xl font-bold mb-4 text-slate-900 dark:text-white">
                  ✅ Vendas com Controle Real + Comissões Automáticas
                </h3>
                <p className="text-slate-600 dark:text-slate-400 mb-4">
                  Sem mais brigas sobre comissão toda semana. AutoClub Pro
                  registra cada venda, calcula comissões automaticamente e gera
                  comprovante imprimível. Vendedor motivado trabalha melhor.
                </p>
                <p className="text-slate-700 dark:text-slate-300 mb-6 font-semibold">
                  💡 Resultado: Vendedor feliz, motivado, vende mais. Você sabe
                  exatamente quem está entregando.
                </p>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                  <span className="text-slate-600 dark:text-slate-400">
                    Saiba quanto cada vendedor vendeu (dia, semana, mês)
                  </span>
                </div>
                <div className="flex items-start gap-3 mt-2">
                  <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                  <span className="text-slate-600 dark:text-slate-400">
                    Cálculo automático de comissão
                  </span>
                </div>
                <div className="flex items-start gap-3 mt-2">
                  <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                  <span className="text-slate-600 dark:text-slate-400">
                    Comprovante imprimível (fim de brigas)
                  </span>
                </div>
              </div>
              <div className="md:order-1 relative">
                <img
                   src="/cap-vendas.PNG"
                   alt="Vendas e Comissões"
                   className="w-full h-auto object-contain rounded-lg shadow-lg border-2 border-slate-200 dark:border-slate-700 cursor-pointer hover:opacity-80 transition-opacity"
                   onClick={() => setSelectedImage("/cap-vendas.PNG")}
                 />
                <div className="absolute bottom-0 left-0 right-0 bg-black/60 text-white text-xs py-2 px-3 rounded-b-lg">
                  📸 Relatório de Vendas e Comissões por Vendedor
                </div>
              </div>
            </div>

            {/* Feature 3: Estoque */}
            <div className="mb-20 grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h3 className="text-2xl font-bold mb-4 text-slate-900 dark:text-white">
                  ✅ Controle de Estoque Profissional
                </h3>
                <p className="text-slate-600 dark:text-slate-400 mb-4">
                  Não mais produtos sumindo sem motivo. AutoClub Pro rastreia
                  cada movimentação de estoque, sabe quando fica abaixo do
                  mínimo e mostra quem pegou o quê e quando. Você otimiza
                  capital, nunca fica sem produto.
                </p>
                <p className="text-slate-700 dark:text-slate-300 mb-6 font-semibold">
                  💡 Resultado: Nunca mais falta produto quando cliente quer
                  comprar. Estoque não some.
                </p>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                  <span className="text-slate-600 dark:text-slate-400">
                    Rastreamento 100% de cada movimentação
                  </span>
                </div>
                <div className="flex items-start gap-3 mt-2">
                  <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                  <span className="text-slate-600 dark:text-slate-400">
                    Alertas automáticos quando fica abaixo do mínimo
                  </span>
                </div>
                <div className="flex items-start gap-3 mt-2">
                  <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                  <span className="text-slate-600 dark:text-slate-400">
                    Controle de fornecedores (melhor preço sempre)
                  </span>
                </div>
              </div>
              <div className="relative">
                <img
                   src="/cap-estoque.PNG"
                   alt="Controle de Estoque"
                   className="w-full h-auto object-contain rounded-lg shadow-lg border-2 border-slate-200 dark:border-slate-700 cursor-pointer hover:opacity-80 transition-opacity"
                   onClick={() => setSelectedImage("/cap-estoque.PNG")}
                 />
                <div className="absolute bottom-0 left-0 right-0 bg-black/60 text-white text-xs py-2 px-3 rounded-b-lg">
                  📸 Dashboard de Estoque com Alertas
                </div>
              </div>
            </div>

            {/* Feature 4: Agendamentos */}
            <div className="grid md:grid-cols-2 gap-12 items-center md:flex-row-reverse">
              <div className="md:order-2">
                <h3 className="text-2xl font-bold mb-4 text-slate-900 dark:text-white">
                  ✅ Agendamentos Inteligentes
                </h3>
                <p className="text-slate-600 dark:text-slate-400 mb-4">
                  Chega de bagunça no telefone. Com AutoClub Pro os clientes
                  agendam diretamente no sistema, recebem lembretes
                  automáticos e você vê a agenda cheia sempre. Menos ligações
                  telefônicas, mais organização.
                </p>
                <p className="text-slate-700 dark:text-slate-300 mb-6 font-semibold">
                  💡 Resultado: Menos ligações, cliente não esquece,
                  agenda sempre cheia.
                </p>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                  <span className="text-slate-600 dark:text-slate-400">
                    Clientes agendam online (você não fica no telefone)
                  </span>
                </div>
                <div className="flex items-start gap-3 mt-2">
                  <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                  <span className="text-slate-600 dark:text-slate-400">
                    Lembrete automático 1 dia antes
                  </span>
                </div>
                <div className="flex items-start gap-3 mt-2">
                  <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                  <span className="text-slate-600 dark:text-slate-400">
                    Visualização por dia, semana ou mês
                  </span>
                </div>
              </div>
              <div className="md:order-1 relative">
                <img
                   src="/cap-agendamento.PNG"
                   alt="Agendamentos"
                   className="w-full h-auto object-contain rounded-lg shadow-lg border-2 border-slate-200 dark:border-slate-700 cursor-pointer hover:opacity-80 transition-opacity"
                   onClick={() => setSelectedImage("/cap-agendamento.PNG")}
                 />
                <div className="absolute bottom-0 left-0 right-0 bg-black/60 text-white text-xs py-2 px-3 rounded-b-lg">
                  📸 Agenda Online com Lembretes Automáticos
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* YouTube Videos Section */}
        <YouTubeVideosSection />

        {/* Success Stories */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 dark:from-black dark:via-slate-950 dark:to-black">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl sm:text-4xl font-bold text-center mb-4">
              Casos de Sucesso - Diferentes Segmentos Automotivos
            </h2>
            <p className="text-center text-slate-600 dark:text-slate-400 mb-12 max-w-2xl mx-auto">
              Veja como negócios automotivos reais estão transformando seus resultados com AutoClub Pro
            </p>

            <div className="grid md:grid-cols-3 gap-8">
              {successStories.map((story, idx) => (
                <div
                  key={idx}
                  className="bg-white dark:bg-slate-900 p-8 rounded-xl border border-slate-200 dark:border-slate-800"
                >
                  <div className="flex gap-1 mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className="w-4 h-4 fill-yellow-400 text-yellow-400"
                      />
                    ))}
                  </div>
                  <p className="text-slate-700 dark:text-slate-300 mb-6 italic">
                    "{story.quote}"
                  </p>
                  <div className="border-t border-slate-200 dark:border-slate-800 pt-4">
                    <h4 className="font-bold text-slate-900 dark:text-white">
                      {story.name}
                    </h4>
                    <p className="text-xs font-semibold text-blue-600 dark:text-blue-400 mb-1">
                      {story.type}
                    </p>
                    <p className="text-sm text-slate-600 dark:text-slate-400 mb-4">
                      {story.location}
                    </p>
                    <ul className="space-y-2">
                      {story.results.map((result, i) => (
                        <li
                          key={i}
                          className="text-sm text-green-600 dark:text-green-400 flex items-start gap-2"
                        >
                          <CheckCircle2 className="w-4 h-4 flex-shrink-0 mt-0.5" />
                          <span>{result}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Why AutoClub Pro is Better - Image Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 dark:from-black dark:via-slate-950 dark:to-black">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              {/* Left Content */}
              <div className="space-y-8">
                <div>
                  <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-4">
                    Por Que AutoClub Pro é Melhor
                  </h2>
                  <div className="h-1 w-20 bg-gradient-to-r from-blue-600 to-blue-400 rounded-full"></div>
                </div>

                <p className="text-lg text-gray-700 dark:text-gray-300">
                  AutoClub Pro foi desenvolvido especificamente para negócios automotivos. Não é um sistema genérico. É uma solução inteligente, rápida e pronta para crescer com você.
                </p>

                {/* Benefits Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {[
                    { title: "Comissões Automáticas", desc: "Calcula sem erro, sem discussão" },
                    { title: "Agendamentos Inteligentes", desc: "Clientes não esquecem, agenda sempre cheia" },
                    { title: "Estoque em Tempo Real", desc: "Nunca mais falta produto nem sobra" },
                    { title: "Gestão de Clientes", desc: "Histórico completo, vendas recorrentes" },
                    { title: "Dashboard Executivo", desc: "Veja sua empresa funcionando em tempo real" },
                    { title: "Suporte 24/7", desc: "WhatsApp sempre disponível para você" },
                  ].map((benefit, idx) => (
                    <div
                      key={idx}
                      className="bg-white dark:bg-slate-800 p-4 rounded-lg border border-slate-200 dark:border-slate-700 hover:shadow-lg transition-shadow"
                    >
                      <h3 className="font-bold text-gray-900 dark:text-white mb-1 text-sm">
                        ✓ {benefit.title}
                      </h3>
                      <p className="text-xs text-gray-600 dark:text-gray-400">
                        {benefit.desc}
                      </p>
                    </div>
                  ))}
                </div>

                <div className="bg-gradient-to-r from-blue-600 to-blue-700 p-6 rounded-xl text-white">
                  <p className="font-bold mb-2">Resultado Real:</p>
                  <p className="text-sm">Empresas que usam AutoClub Pro aumentam faturamento em até 300% nos primeiros 3 meses, com 40% menos tempo administrativo.</p>
                </div>
              </div>

              {/* Right Image */}
              <div className="relative">
                <div className="absolute -inset-4 bg-gradient-to-r from-blue-600/20 to-blue-400/20 rounded-2xl blur-2xl"></div>
                <img
                  src="/oficina.webp"
                  alt="Oficina Profissional com AutoClub Pro"
                  className="relative w-full h-auto rounded-2xl shadow-2xl object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        {/* ROI Section - Redesigned */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 dark:from-black dark:via-slate-950 dark:to-black">
          <div className="max-w-6xl mx-auto">
            {/* Header */}
            <div className="text-center mb-16">
              <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">
                O Custo Real de Não Fazer Nada
              </h2>
              <p className="text-xl text-slate-300">Para Qualquer Negócio Automotivo</p>
            </div>

            {/* ROI Cards Grid */}
            <div className="grid md:grid-cols-2 gap-8 mb-12">
              {/* Cost of Inaction Card */}
              <div className="group relative">
                <div className="absolute inset-0 bg-gradient-to-r from-red-600 to-orange-400 rounded-2xl blur-xl opacity-20 group-hover:opacity-30 transition-opacity"></div>
                <div className="relative bg-gradient-to-br from-red-600/10 to-orange-400/10 backdrop-blur-xl border border-red-500/30 rounded-2xl p-8 h-full flex flex-col justify-center hover:border-red-400/60 transition-all">
                  <div className="mb-6">
                    <div className="inline-flex items-center gap-2 px-4 py-2 bg-red-500/20 rounded-full mb-6">
                      <span className="text-red-300 font-semibold text-sm">❌ Sem AutoClub Pro</span>
                    </div>
                  </div>
                  
                  <p className="text-sm text-gray-300 mb-6 leading-relaxed">
                    Se você ganha R$15.000/mês e perde 2-3 clientes por mês:
                  </p>
                  
                  <div className="mb-6">
                    <p className="text-6xl font-black bg-gradient-to-r from-red-400 to-orange-300 bg-clip-text text-transparent mb-2">
                      R$8.500+
                    </p>
                    <p className="text-lg text-red-200 font-semibold">/mês em perdas</p>
                  </div>

                  <div className="border-t border-red-400/20 pt-6">
                    <p className="text-sm text-red-200/80">
                      Você está perdendo <span className="font-bold text-red-300">MAIS que o custo anual</span> do AutoClub Pro em apenas <span className="font-bold text-red-300">UMA SEMANA</span>.
                    </p>
                  </div>
                </div>
              </div>

              {/* AutoClub Pro Benefits Card */}
              <div className="group relative">
                <div className="absolute inset-0 bg-gradient-to-r from-green-600 to-emerald-400 rounded-2xl blur-xl opacity-20 group-hover:opacity-30 transition-opacity"></div>
                <div className="relative bg-gradient-to-br from-green-600/10 to-emerald-400/10 backdrop-blur-xl border border-green-500/30 rounded-2xl p-8 h-full flex flex-col justify-between hover:border-green-400/60 transition-all">
                  <div className="mb-6">
                    <div className="inline-flex items-center gap-2 px-4 py-2 bg-green-500/20 rounded-full">
                      <span className="text-green-300 font-semibold text-sm">✓ Com AutoClub Pro</span>
                    </div>
                  </div>
                  
                  <p className="text-sm text-gray-300 mb-6">Você ganha:</p>
                  
                  <ul className="space-y-4">
                    <li className="flex items-start gap-3">
                      <div className="p-2 bg-green-500/20 rounded-lg flex-shrink-0 mt-0.5">
                        <CheckCircle2 className="w-5 h-5 text-green-400" />
                      </div>
                      <div>
                        <p className="font-semibold text-green-300">30% menos tempo</p>
                        <p className="text-xs text-gray-400">Administrativo automatizado</p>
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="p-2 bg-green-500/20 rounded-lg flex-shrink-0 mt-0.5">
                        <CheckCircle2 className="w-5 h-5 text-green-400" />
                      </div>
                      <div>
                        <p className="font-semibold text-green-300">15-25% mais faturamento</p>
                        <p className="text-xs text-gray-400">Em apenas 3 meses</p>
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="p-2 bg-green-500/20 rounded-lg flex-shrink-0 mt-0.5">
                        <CheckCircle2 className="w-5 h-5 text-green-400" />
                      </div>
                      <div>
                        <p className="font-semibold text-green-300">Sistema pronto em 10 dias</p>
                        <p className="text-xs text-gray-400">Otimizado e funcional</p>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* CTA Bottom */}
            <div className="text-center">
              <div className="inline-block">
                <p className="text-2xl font-bold text-white mb-4">
                  A diferença é apenas uma
                </p>
                <p className="text-4xl font-black bg-gradient-to-r from-blue-400 to-emerald-400 bg-clip-text text-transparent">
                  DECISÃO
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Proposal CTA Section - Redesigned */}
        <section
          id="proposal"
          className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 dark:from-black dark:via-slate-950 dark:to-black"
        >
          <div className="max-w-6xl mx-auto">
            {/* Header */}
            <div className="text-center mb-16">
              <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">
                AutoClub Pro - Sua Solução Personalizada
              </h2>
              <p className="text-xl text-blue-200 max-w-2xl mx-auto">
                Sistema sob medida para seu negócio automotivo. Tudo pronto em 10 dias, suporte 24/7.
              </p>
            </div>

            {/* Main Pricing Cards Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
              {/* Investimento Card */}
              <div className="group relative">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-blue-400 rounded-2xl blur-xl opacity-20 group-hover:opacity-30 transition-opacity"></div>
                <div className="relative bg-gradient-to-br from-blue-600/10 to-blue-400/10 backdrop-blur-xl border border-blue-500/30 rounded-2xl p-8 h-full flex flex-col justify-between hover:border-blue-400/60 transition-all">
                  <div>
                    <div className="flex items-center gap-3 mb-6">
                      <div className="p-3 bg-blue-500/20 rounded-lg">
                        <DollarSign className="w-6 h-6 text-blue-400" />
                      </div>
                      <h3 className="text-2xl font-bold text-white">Investimento</h3>
                    </div>
                    <div className="mb-6">
                      <p className="text-5xl font-black bg-gradient-to-r from-blue-400 to-blue-300 bg-clip-text text-transparent">
                        R$ 3.700
                      </p>
                      <p className="text-3xl font-bold text-white mt-2">/ano</p>
                    </div>
                  </div>
                  
                  {/* Pagamento */}
                  <div className="border-t border-blue-400/20 pt-6">
                    <p className="text-sm font-semibold text-blue-200 mb-4">Plano de Pagamento</p>
                    <div className="space-y-3">
                      <div className="flex items-center gap-3 text-sm">
                        <div className="w-8 h-8 rounded-full bg-blue-500/30 flex items-center justify-center text-blue-300 font-bold text-xs">1</div>
                        <span className="text-gray-300">30% no início</span>
                      </div>
                      <div className="flex items-center gap-3 text-sm">
                        <div className="w-8 h-8 rounded-full bg-blue-500/30 flex items-center justify-center text-blue-300 font-bold text-xs">2</div>
                        <span className="text-gray-300">30% em 10 dias</span>
                      </div>
                      <div className="flex items-center gap-3 text-sm">
                        <div className="w-8 h-8 rounded-full bg-green-500/30 flex items-center justify-center text-green-300 font-bold text-xs">3</div>
                        <span className="text-gray-300">40% ao ativar plataforma</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Entrega Card */}
              <div className="group relative">
                <div className="absolute inset-0 bg-gradient-to-r from-green-600 to-emerald-400 rounded-2xl blur-xl opacity-20 group-hover:opacity-30 transition-opacity"></div>
                <div className="relative bg-gradient-to-br from-green-600/10 to-emerald-400/10 backdrop-blur-xl border border-green-500/30 rounded-2xl p-8 h-full flex flex-col justify-center items-center text-center hover:border-green-400/60 transition-all">
                  <div className="p-4 bg-green-500/20 rounded-xl mb-6">
                    <Calendar className="w-8 h-8 text-green-400 mx-auto" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-4">Entrega Rápida</h3>
                  <p className="text-6xl font-black bg-gradient-to-r from-green-400 to-emerald-300 bg-clip-text text-transparent mb-4">
                    10
                  </p>
                  <p className="text-lg text-green-200 font-semibold mb-6">Dias</p>
                  <p className="text-sm text-gray-400">
                    Sistema totalmente configurado, testado e pronto para usar. Sua equipe treinada no dia 1.
                  </p>
                </div>
              </div>

              {/* Suporte Card */}
              <div className="group relative">
                <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-400 rounded-2xl blur-xl opacity-20 group-hover:opacity-30 transition-opacity"></div>
                <div className="relative bg-gradient-to-br from-purple-600/10 to-pink-400/10 backdrop-blur-xl border border-purple-500/30 rounded-2xl p-8 h-full flex flex-col justify-center items-center text-center hover:border-purple-400/60 transition-all">
                  <div className="p-4 bg-purple-500/20 rounded-xl mb-6">
                    <Headphones className="w-8 h-8 text-purple-400 mx-auto" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-4">Suporte Premium</h3>
                  <p className="text-3xl font-bold text-purple-300 mb-2">24/7</p>
                  <p className="text-sm text-purple-200 font-semibold mb-4">Via WhatsApp</p>
                  <p className="text-sm text-gray-400">
                    Equipe sempre disponível. Dúvidas, problemas ou ajustes — resolvemos em minutos.
                  </p>
                </div>
              </div>
            </div>

            {/* Countdown Timer */}
            <div className="relative mx-auto max-w-2xl">
              <div className="absolute inset-0 bg-gradient-to-r from-red-600 to-red-400 rounded-2xl blur-lg opacity-20"></div>
              <div className="relative bg-gradient-to-br from-red-600/10 to-red-400/10 backdrop-blur-xl border border-red-500/50 rounded-2xl p-8">
                <div className="flex items-center justify-center gap-3 mb-4">
                  <span className="text-2xl">⏱️</span>
                  <p className="text-lg font-bold text-red-200">Oferta com Tempo Limitado</p>
                </div>
                <p className="text-center text-5xl font-black text-red-400 font-mono tracking-widest">
                  {formatTime(timeLeft)}
                </p>
                <p className="text-center text-sm text-red-200/70 mt-3">
                  Após expirar, a próxima disponibilidade será em 48 horas
                </p>
              </div>
            </div>

          </div>
        </section>

        {/* What's Included Section - Redesigned */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 dark:from-black dark:via-slate-950 dark:to-black">
          <div className="max-w-6xl mx-auto">
            {/* Header */}
            <div className="text-center mb-16">
              <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">
                O Que Está Incluído
              </h2>
              <p className="text-xl text-slate-300">Para Seu Negócio Automotivo</p>
            </div>

            {/* Content Cards Grid */}
            <div className="grid md:grid-cols-2 gap-8">
              {/* Delivery Card */}
              <div className="group relative">
                <div className="absolute inset-0 bg-gradient-to-r from-green-600 to-emerald-400 rounded-2xl blur-xl opacity-20 group-hover:opacity-30 transition-opacity"></div>
                <div className="relative bg-gradient-to-br from-green-600/10 to-emerald-400/10 backdrop-blur-xl border border-green-500/30 rounded-2xl p-8 hover:border-green-400/60 transition-all">
                  <div className="flex items-center gap-3 mb-8">
                    <div className="p-3 bg-green-500/20 rounded-lg">
                      <span className="text-2xl">🚀</span>
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-white">Na Entrega</h3>
                      <p className="text-sm text-green-200">(10 dias)</p>
                    </div>
                  </div>

                  <ul className="space-y-4">
                    {[
                      "Sistema completamente personalizado para sua oficina",
                      "6 módulos configurados conforme sua necessidade",
                      "Banco de dados estruturado",
                      "Dashboard executivo funcional",
                      "Integração com seu fluxo de trabalho",
                      "Treinamento inicial da equipe",
                      "Documentação técnica completa",
                    ].map((item, idx) => (
                      <li
                        key={idx}
                        className="flex items-start gap-3 group/item"
                      >
                        <div className="p-1.5 bg-green-500/20 rounded-lg flex-shrink-0 mt-0.5">
                          <CheckCircle2 className="w-5 h-5 text-green-400" />
                        </div>
                        <span className="text-gray-300 group-hover/item:text-green-200 transition-colors text-sm leading-relaxed">
                          {item}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Optional Card */}
              <div className="group relative">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-cyan-400 rounded-2xl blur-xl opacity-20 group-hover:opacity-30 transition-opacity"></div>
                <div className="relative bg-gradient-to-br from-blue-600/10 to-cyan-400/10 backdrop-blur-xl border border-blue-500/30 rounded-2xl p-8 hover:border-blue-400/60 transition-all">
                  <div className="flex items-center gap-3 mb-8">
                    <div className="p-3 bg-blue-500/20 rounded-lg">
                      <span className="text-2xl">🎯</span>
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-white">Próximos Passos</h3>
                      <p className="text-sm text-blue-200">(Opcional)</p>
                    </div>
                  </div>

                  <ul className="space-y-4">
                    {[
                      "Suporte contínuo pós-entrega",
                      "Otimizações conforme uso real",
                      "Novos módulos e integrações",
                      "Treinamento avançado de equipe",
                      "Consultoria na gestão",
                      "Backup e segurança em nuvem",
                      "Planos de suporte 24/7",
                    ].map((item, idx) => (
                      <li
                        key={idx}
                        className="flex items-start gap-3 group/item"
                      >
                        <div className="p-1.5 bg-blue-500/20 rounded-lg flex-shrink-0 mt-0.5">
                          <CheckCircle2 className="w-5 h-5 text-blue-400" />
                        </div>
                        <span className="text-gray-300 group-hover/item:text-blue-200 transition-colors text-sm leading-relaxed">
                          {item}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 dark:from-black dark:via-slate-950 dark:to-black">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12">
              Perguntas Frequentes
            </h2>

            <div className="space-y-4">
              {[
                {
                  q: "Quanto tempo leva para estar operacional?",
                  a: "10 dias. O sistema já sai pronto, personalizado para sua oficina, com os dados iniciais carregados e equipe treinada.",
                },
                {
                  q: "Meus dados estão seguros?",
                  a: "Sim. Nuvem Amazon AWS, encriptado como banco. Backup automático diário. Seus dados são o bem mais valioso.",
                },
                {
                  q: "Preciso de computador poderoso?",
                  a: "Não. Roda em qualquer navegador, até smartphone desatualizado funciona. É cloud, tipo Gmail.",
                },
                {
                  q: "Preciso de técnico de TI?",
                  a: "Não precisa. É cloud. Acessa pelo navegador. Totalmente gerenciado. Você só usa.",
                },
                {
                  q: "E se precisar de mudanças depois?",
                  a: "Sem problema. O sistema é flexível e escalável. Você combina o suporte que funciona melhor para você.",
                },
                {
                  q: "Como funciona o treinamento?",
                  a: "Oferecemos treinamento inicial com toda a equipe no dia da entrega. Documentação completa e suporte para dúvidas.",
                },
              ].map((faq, idx) => (
                <div
                  key={idx}
                  className="bg-white dark:bg-slate-900 p-6 rounded-lg border border-slate-200 dark:border-slate-800"
                >
                  <h3 className="font-bold text-slate-900 dark:text-white mb-2">
                    P: {faq.q}
                  </h3>
                  <p className="text-slate-600 dark:text-slate-400">
                    R: {faq.a}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 dark:from-black dark:via-slate-950 dark:to-black">
          <div className="max-w-2xl mx-auto text-center text-white">
            <h2 className="text-3xl sm:text-4xl font-bold mb-6">
              Pronto para Transformar Seu Negócio Automotivo?
            </h2>
            <p className="text-lg mb-8 max-w-2xl mx-auto text-blue-100">
              AutoClub Pro é um investimento na transformação real do seu negócio.
              Independentemente se é vidraçaria, oficina, auto center ou pneuaria.
              Sistema personalizado, entrega rápida, suporte customizado.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
              <Button
                size="lg"
                className="bg-white hover:bg-blue-50 text-blue-600 text-lg px-10 py-6 font-bold"
                onClick={() =>
                  document
                    .getElementById("proposal")
                    ?.scrollIntoView({ behavior: "smooth" })
                }
              >
                📋 Receber Proposta
              </Button>
              <Button
                size="lg"
                className="bg-green-500 hover:bg-green-600 text-white text-lg px-10 py-6 font-bold"
                onClick={() =>
                  window.open("https://wa.me/5532991075164", "_blank")
                }
              >
                💬 Conversar Agora
              </Button>
            </div>

            <p className="text-blue-100 text-sm">
              Investimento: R$ 3.700/ano (30% • 30% em 10 dias • 40% com 1 mês) | Entrega: 10 dias | Suporte: 24/7h
            </p>
          </div>
        </section>
      </main>
      <Footer />
      <WhatsAppFloat />

      {/* Image Modal */}
      {selectedImage && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-4"
          onClick={() => setSelectedImage(null)}
        >
          <div 
            className="relative max-w-4xl max-h-[90vh] bg-white dark:bg-slate-900 rounded-lg shadow-2xl overflow-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-4 right-4 z-10 p-2 bg-black/50 hover:bg-black/70 rounded-lg text-white transition-colors"
            >
              <X className="w-6 h-6" />
            </button>
            <img
              src={selectedImage}
              alt="Modal"
              className="w-full h-auto object-contain"
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default AutoClubPro;
