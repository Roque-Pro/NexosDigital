import { useState } from "react";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppFloat from "@/components/WhatsAppFloat";
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
  X,
} from "lucide-react";

const AutoClubPro = () => {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

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
      solution: "Banco de dados centralizado com histórico completo",
    },
    {
      problem: "Vendedores não sabem quanto já venderam",
      solution: "Dashboard de vendas em tempo real por vendedor",
    },
    {
      problem: "Estoque desaparece sem explicação",
      solution: "Rastreamento completo de movimentações",
    },
    {
      problem: "Comissões demorando semanas para calcular",
      solution: "Cálculo automático e comprovante instantâneo",
    },
    {
      problem: "Agendamentos viram bagunça no telefone",
      solution: "Sistema de agendamento automático online",
    },
    {
      problem: "Lucro minguando sem saber por quê",
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
        {/* Hero Image Section */}
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-black pt-20 pb-10">
          {/* Background Image */}
          <div className="absolute inset-0 z-0">
            <img
              src="https://images.unsplash.com/photo-1511818966892-d7d671e672a2?w=1600&h=900&fit=crop"
              alt="Negócio Automotivo"
              className="w-full h-full object-cover opacity-35"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black via-black/70 to-black/40"></div>
          </div>

          {/* Content */}
          <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 gap-16 items-center">
              {/* Left Side - Text */}
              <div className="text-white space-y-8">
                <div>
                  <div className="inline-block mb-8">
                    <div className="bg-blue-600/30 text-blue-300 px-4 py-2 rounded-full text-sm font-semibold border border-blue-500/50">
                      🚗 Para Seu Negócio Automotivo
                    </div>
                  </div>

                  <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black leading-tight mb-6">
                    Chega de{" "}
                    <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                      Bagunça
                    </span>
                  </h1>

                  <p className="text-xl text-slate-200 leading-relaxed">
                    AutoClub Pro é o sistema profissional que transforma seu negócio automotivo. 
                    Vidraçaria, oficina, auto center, pneuaria, pintura, funilaria...
                  </p>
                </div>

                {/* Value Props - Simples e Limpo */}
                <div className="space-y-5 pt-6">
                  <div className="flex items-center gap-4">
                    <div className="flex-shrink-0 p-2 bg-blue-600/30 rounded-lg">
                      <CheckCircle2 className="h-6 w-6 text-blue-400" />
                    </div>
                    <div>
                      <p className="font-bold text-white">Pronto em 10 Dias</p>
                      <p className="text-sm text-slate-300">Sistema personalizado e funcional</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-4">
                    <div className="flex-shrink-0 p-2 bg-blue-600/30 rounded-lg">
                      <DollarSign className="h-6 w-6 text-blue-400" />
                    </div>
                    <div>
                      <p className="font-bold text-white">R$ 4.500/ano</p>
                      <p className="text-sm text-slate-300">30% início • 30% em 10 dias • 40% após 1 mês</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-4">
                    <div className="flex-shrink-0 p-2 bg-blue-600/30 rounded-lg">
                      <CheckCircle2 className="h-6 w-6 text-blue-400" />
                    </div>
                    <div>
                      <p className="font-bold text-white">Suporte Total 24/7h</p>
                      <p className="text-sm text-slate-300">Via WhatsApp sempre disponível</p>
                    </div>
                  </div>
                </div>

                {/* CTAs */}
                <div className="flex flex-col sm:flex-row gap-4 pt-4">
                  <Button
                    size="lg"
                    className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white px-8 py-6 font-bold shadow-lg rounded-lg"
                    onClick={() =>
                      document
                        .getElementById("proposal")
                        ?.scrollIntoView({ behavior: "smooth" })
                    }
                  >
                    Ver Proposta <ArrowRight className="ml-2 w-4 h-4" />
                  </Button>
                  <Button
                    size="lg"
                    className="bg-green-600 hover:bg-green-700 text-white px-8 py-6 font-bold shadow-lg rounded-lg"
                    onClick={() =>
                      window.open("https://wa.me/5532991075164", "_blank")
                    }
                  >
                    💬 WhatsApp
                  </Button>
                </div>
              </div>

              {/* Right Side - Image */}
              <div className="hidden md:flex justify-end items-center">
                <div className="relative w-full max-w-xl">
                  {/* Glow Background */}
                  <div className="absolute -inset-4 bg-gradient-to-r from-blue-600/30 to-cyan-600/30 rounded-3xl blur-3xl"></div>
                  
                  {/* Image */}
                  <img
                    src="/src/img/car.png"
                    alt="Carro de Luxo"
                    className="relative rounded-2xl shadow-2xl"
                    style={{ width: '450px', height: '450px', objectFit: 'cover' }}
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Scroll Indicator */}
          <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 z-10 text-center">
            <p className="text-white text-xs font-semibold mb-2">Veja como funciona</p>
            <ChevronDown className="w-5 h-5 text-blue-400 animate-bounce mx-auto" />
          </div>
        </section>

        {/* Problems Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-slate-50 dark:bg-slate-950">
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
                  <p className="text-slate-600 dark:text-slate-400 mb-3">
                    Resultado: Margem de lucro 5-8% quando deveria ser 15-25%
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
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-background">
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
                   src="/src/img/cap-clientes.PNG"
                   alt="Captação de Clientes de Redes Sociais"
                   className="w-full h-auto object-contain rounded-lg shadow-lg border-2 border-slate-200 dark:border-slate-700 cursor-pointer hover:opacity-80 transition-opacity"
                   onClick={() => setSelectedImage("/src/img/cap-clientes.PNG")}
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
                   src="/src/img/cap-historico.PNG"
                   alt="Histórico e Auditoria"
                   className="w-full h-auto object-contain rounded-lg shadow-lg border-2 border-slate-200 dark:border-slate-700 cursor-pointer hover:opacity-80 transition-opacity"
                   onClick={() => setSelectedImage("/src/img/cap-historico.PNG")}
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
                   src="/src/img/cap-vendas.PNG"
                   alt="Vendas e Comissões"
                   className="w-full h-auto object-contain rounded-lg shadow-lg border-2 border-slate-200 dark:border-slate-700 cursor-pointer hover:opacity-80 transition-opacity"
                   onClick={() => setSelectedImage("/src/img/cap-vendas.PNG")}
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
                   src="/src/img/cap-estoque.PNG"
                   alt="Controle de Estoque"
                   className="w-full h-auto object-contain rounded-lg shadow-lg border-2 border-slate-200 dark:border-slate-700 cursor-pointer hover:opacity-80 transition-opacity"
                   onClick={() => setSelectedImage("/src/img/cap-estoque.PNG")}
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
                   src="/src/img/cap-agendamento.PNG"
                   alt="Agendamentos"
                   className="w-full h-auto object-contain rounded-lg shadow-lg border-2 border-slate-200 dark:border-slate-700 cursor-pointer hover:opacity-80 transition-opacity"
                   onClick={() => setSelectedImage("/src/img/cap-agendamento.PNG")}
                 />
                <div className="absolute bottom-0 left-0 right-0 bg-black/60 text-white text-xs py-2 px-3 rounded-b-lg">
                  📸 Agenda Online com Lembretes Automáticos
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Success Stories */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-slate-50 dark:bg-slate-950">
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

        {/* Comparison Table */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-background">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12">
              Por Que AutoClub Pro é Melhor
            </h2>

            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b-2 border-slate-300 dark:border-slate-700">
                    <th className="text-left py-4 px-4 font-bold text-slate-900 dark:text-white">
                      Função
                    </th>
                    <th className="text-center py-4 px-4 font-bold text-slate-900 dark:text-white">
                      Excel
                    </th>
                    <th className="text-center py-4 px-4 font-bold text-slate-900 dark:text-white">
                      Sistemas Antigos
                    </th>
                    <th className="text-center py-4 px-4 font-bold bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400">
                      AutoClub Pro
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {comparison.map((row, idx) => (
                    <tr
                      key={idx}
                      className="border-b border-slate-200 dark:border-slate-800"
                    >
                      <td className="py-4 px-4 font-medium text-slate-900 dark:text-white">
                        {row.feature}
                      </td>
                      <td className="text-center py-4 px-4">{row.excel}</td>
                      <td className="text-center py-4 px-4">{row.antigos}</td>
                      <td className="text-center py-4 px-4 bg-blue-50 dark:bg-blue-900/20 text-green-600 dark:text-green-400 font-bold">
                        {row.autoclub}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* ROI Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-blue-900 to-slate-900 text-white">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl sm:text-4xl font-bold mb-8">
              O Custo Real de Não Fazer Nada (Para Qualquer Negócio Automotivo)
            </h2>

            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <div className="bg-white/10 p-8 rounded-lg backdrop-blur-sm">
                <p className="text-lg mb-4">
                  Se você ganha R$15.000/mês e perde 2-3 clientes por mês:
                </p>
                <p className="text-3xl font-bold mb-2">R$8.500+/mês</p>
                <p className="text-blue-200">
                  Você está perdendo MAIS que o custo anual do AutoClub Pro EM
                  UMA SEMANA. Seja vidraçaria, oficina ou pneuaria.
                </p>
              </div>

              <div className="bg-green-500/20 p-8 rounded-lg backdrop-blur-sm border border-green-400/30">
                <p className="text-lg mb-4">Com AutoClub Pro você ganha:</p>
                <ul className="text-left space-y-3 text-green-200">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 flex-shrink-0 mt-0.5" />
                    <span>30% menos tempo administrativo</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 flex-shrink-0 mt-0.5" />
                    <span>15-25% em faturamento em 3 meses</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 flex-shrink-0 mt-0.5" />
                    <span>Sistema pronto e otimizado em 10 dias</span>
                  </li>
                </ul>
              </div>
            </div>

            <p className="text-xl text-blue-200">
              A diferença é apenas UMA DECISÃO
            </p>
          </div>
        </section>

        {/* Proposal CTA Section */}
        <section
          id="proposal"
          className="py-16 px-4 sm:px-6 lg:px-8 bg-slate-50 dark:bg-slate-950"
        >
          <div className="max-w-2xl mx-auto">
            <div className="bg-white dark:bg-slate-900 p-8 sm:p-12 rounded-xl border-2 border-blue-500 shadow-lg">
              <h2 className="text-2xl sm:text-3xl font-bold mb-2 text-center">
                AutoClub Pro - Sua Solução Personalizada
              </h2>
              <p className="text-center text-slate-600 dark:text-slate-400 mb-8">
                Sistema sob medida para seu negócio automotivo (vidraçaria, oficina, auto center, pneuaria, pintura...)
              </p>

              {/* Pricing & Details */}
              <div className="space-y-6 mb-8 p-6 bg-gradient-to-r from-blue-50 to-cyan-50 dark:from-blue-900/20 dark:to-cyan-900/20 rounded-lg border border-blue-200 dark:border-blue-800">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="text-center">
                    <div className="flex items-center justify-center gap-2 mb-3">
                      <DollarSign className="w-7 h-7 text-blue-600 dark:text-blue-400" />
                      <h3 className="text-xl font-bold text-slate-900 dark:text-white">
                         Investimento
                       </h3>
                     </div>
                    <p className="text-5xl font-black text-blue-600 dark:text-blue-400 mb-1">
                      R$ 4.500
                    </p>
                    <p className="text-sm text-slate-600 dark:text-slate-400 mb-4">/ano</p>
                    <div className="space-y-2 text-sm mt-2">
                      <p className="font-semibold text-slate-700 dark:text-slate-300">
                        Pagamento:
                       </p>
                      <div className="space-y-1 text-slate-600 dark:text-slate-400">
                        <p>30% no início</p>
                        <p>30% em 10 dias</p>
                        <p className="flex items-center justify-center gap-2">40% com 1 mês da plataforma no AR <span className="w-2 h-2 bg-green-500 rounded-full"></span></p>
                      </div>
                     </div>
                  </div>

                  <div className="text-center">
                    <div className="flex items-center justify-center gap-2 mb-2">
                      <Calendar className="w-6 h-6 text-green-600 dark:text-green-400" />
                      <h3 className="text-lg font-semibold text-slate-900 dark:text-white">
                        Entrega
                      </h3>
                    </div>
                    <p className="text-4xl font-bold text-green-600 dark:text-green-400">
                      10 Dias
                    </p>
                    <p className="text-sm text-slate-600 dark:text-slate-400 mt-2">
                      Sistema totalmente pronto e otimizado
                    </p>
                  </div>
                </div>

                <div className="text-center border-t border-blue-200 dark:border-blue-800 pt-6">
                  <div className="flex items-center justify-center gap-2 mb-2">
                    <Headphones className="w-6 h-6 text-purple-600 dark:text-purple-400" />
                    <h3 className="text-lg font-semibold text-slate-900 dark:text-white">
                      Suporte
                    </h3>
                  </div>
                  <p className="text-xl font-semibold text-purple-600 dark:text-purple-400">
                    24/7h Via WhatsApp
                  </p>
                  <p className="text-sm text-slate-600 dark:text-slate-400 mt-2">
                    Suporte total sempre disponível
                  </p>
                </div>
              </div>


            </div>
          </div>
        </section>

        {/* What's Included Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-background">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12">
              O Que Está Incluído (Para Seu Negócio Automotivo)
            </h2>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white dark:bg-slate-900 p-8 rounded-xl border border-slate-200 dark:border-slate-800">
                <h3 className="text-xl font-bold mb-6 text-slate-900 dark:text-white">
                  🚀 Na Entrega (10 dias)
                </h3>
                <ul className="space-y-3">
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
                      className="flex items-start gap-3 text-slate-700 dark:text-slate-300"
                    >
                      <CheckCircle2 className="w-5 h-5 text-green-600 dark:text-green-400 flex-shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-white dark:bg-slate-900 p-8 rounded-xl border border-slate-200 dark:border-slate-800">
                <h3 className="text-xl font-bold mb-6 text-slate-900 dark:text-white">
                  🎯 Próximos Passos (Opcional)
                </h3>
                <ul className="space-y-3">
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
                      className="flex items-start gap-3 text-slate-700 dark:text-slate-300"
                    >
                      <CheckCircle2 className="w-5 h-5 text-blue-600 dark:text-blue-400 flex-shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-slate-50 dark:bg-slate-950">
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
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-blue-600 to-blue-800">
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
              Investimento: R$ 4.500/ano (30% • 30% em 10 dias • 40% com 1 mês) | Entrega: 10 dias | Suporte: 24/7h
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
