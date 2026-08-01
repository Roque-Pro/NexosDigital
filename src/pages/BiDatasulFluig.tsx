import { useEffect } from "react";
import { motion } from "framer-motion";
import {
  BarChart3,
  Database,
  Workflow,
  CheckCircle2,
  MessageCircle,
  ArrowRight,
  Users,
  TrendingUp,
  Zap,
  FileSpreadsheet,
  Rocket,
  ShieldCheck,
  Building2,
  FlaskConical,
  Factory,
  Truck,
  LineChart,
  SearchCheck,
  Cpu,
  Bot
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { useSEO } from "@/hooks/useSEO";
import BlogNavbar from "@/components/BlogNavbar";
import roqueImage from "@/img/roque-rafael-proenca-consultor.png";

const WHATSAPP = "https://wa.me/5532991075164";

const BiDatasulFluig = () => {
  useSEO({
    title: "Consultoria BI, Datasul e Fluig | Especialista TOTVS | TechNexos",
    description:
      "Consultoria especializada em BI, TOTVS Datasul e TOTVS Fluig. Painéis inteligentes, ERP otimizado e automação de processos BPM com atendimento direto com o especialista. Diagnóstico gratuito e resultado em semanas.",
    keywords: [
      "consultoria BI Datasul Fluig",
      "consultoria TOTVS",
      "especialista Datasul",
      "especialista Fluig",
      "business intelligence TOTVS",
      "painéis BI Datasul",
      "automação de processos Fluig",
      "implanta o Datasul",
      "suporte Datasul",
      "desenvolvimento Fluig BPM",
      "consultoria ERP TOTVS",
      "Roque Rafael Proença"
    ],
    ogTitle: "Consultoria BI, Datasul e Fluig | Especialista TOTVS Sob Demanda",
    ogDescription:
      "Seu ERP rodando, seus dados virando decisão e seus processos automatizados. Consultoria TOTVS (Datasul + Fluig + BI) com atendimento direto com o especialista.",
    ogUrl: "https://www.technexos.com.br/bi-datasul-fluig",
    twitterTitle: "Consultoria BI, Datasul e Fluig | TechNexos",
    twitterDescription:
      "Painéis de BI, ERP Datasul otimizado e automação Fluig. Atendimento direto com o especialista, sem burocracia.",
    canonicalUrl: "https://www.technexos.com.br/bi-datasul-fluig",
    schema: {
      "@context": "https://schema.org",
      "@type": "ProfessionalService",
      "name": "TechNexos - Consultoria BI, Datasul e Fluig",
      "description":
        "Consultoria especializada em Business Intelligence (BI), TOTVS Datasul e TOTVS Fluig para empresas de médio porte: painéis de indicadores, otimização de ERP e automação de processos BPM.",
      "provider": {
        "@type": "Person",
        "name": "Roque Rafael Proença"
      },
      "areaServed": "BR",
      "serviceType": "ERP & Business Intelligence Consulting",
      "priceRange": "$$"
    }
  });

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const services = [
    {
      icon: BarChart3,
      title: "Business Intelligence (BI)",
      badge: "Decisão baseada em dados",
      description:
        "Seus dados parados em planilhas não valem nada. Estruturamos um ambiente de BI completo — ETL, Data Warehouse e painéis interativos — que transforma números crus em decisões de negócio em tempo real.",
      items: [
        "Diagnóstico de maturidade de dados",
        "Modelagem dimensional e ETL (integração de fontes)",
        "Dashboards executivos e operacionais sob medida",
        "Indicadores de vendas, estoque, financeiro e produção",
        "Automação de relatórios recorrentes (tchau, planilha!)",
        "Treinamento da sua equipe para autonomia total"
      ]
    },
    {
      icon: Database,
      title: "TOTVS Datasul",
      badge: "ERP rodando como deve",
      description:
        "O Datasul é um dos ERPs mais poderosos do mercado — mas só entrega valor quando está bem configurado. Otimizamos o seu ambiente para eliminar gargalos, reduzir custos de licença e destravar módulos que você paga e não usa.",
      items: [
        "Implementação, upgrade e parametrização",
        "Otimização de performance e consultas SQL",
        "Customizações e desenvolvimentos sob medida",
        "Integração nativa com Fluig e sistemas legados",
        "Suporte especializado contínuo (sem dor de cabeça)",
        "Redução de retrabalho na equipe operacional"
      ]
    },
    {
      icon: Workflow,
      title: "TOTVS Fluig",
      badge: "Processos que andam sozinhos",
      description:
        "Aprovações que travam, documentos que se perdem, retrabalho sem fim. Com o Fluig, automatizamos fluxos de BPM, portais e integrações para sua operação rodar no piloto automático — com rastreabilidade total.",
      items: [
        "Modelagem e automação de workflows BPMN",
        "Portais, widgets e formulários customizados",
        "Otimização de datasets e performance",
        "Integração via API REST/SOAP (Datasul, RM, outros)",
        "Assinatura eletrônica e gestão de documentos",
        "Desenvolvimento Node.js/JavaScript sob demanda"
      ]
    }
  ];

  const clients = [
    { name: "Tintas Iquine", segment: "Indústria Química", type: "BI + Datasul" },
    { name: "Cincal", segment: "Estruturas Metálicas", type: "Datasul + Fluig" },
    { name: "Romaço", segment: "Cabos e Cordas", type: "BI + Fluig" },
    { name: "Laticínios Verde Campo", segment: "Alimentos e Laticínios", type: "Datasul" },
    { name: "Minasmáquinas", segment: "Comércio de Máquinas", type: "BI + Datasul" },
    { name: "TecnoFast", segment: "Fixadores Industriais", type: "Fluig + BI" }
  ];

  const cases = [
    {
      title: "Painel de Gestão em Tempo Real",
      system: "BI",
      description:
        "Unificamos 14 planilhas de vendas, estoque e financeiro em um único dashboard executivo. A diretoria passou a decidir com dados de hoje, não do mês passado.",
      result: "Fim das planilhas duplicadas"
    },
    {
      title: "ERP Datasul 60% Mais Rápido",
      system: "Datasul",
      description:
        "Consultas que travavam a operação foram otimizadas com reestruturação de índices e boas práticas SQL. Fechamento mensal que levava 5 dias passou a fechar em 1.",
      result: "Fechamento em 1 dia"
    },
    {
      title: "Workflow de Compras Automatizado",
      system: "Fluig",
      description:
        "Fluxo BPMN integrado ao Datasul eliminou aprovações manuais por e-mail. Rastreabilidade total, menos erros e liberação de pedidos em horas.",
      result: "-70% tempo de aprovação"
    }
  ];

  const faqs = [
    {
      q: "Vocês atendem empresas fora de Juiz de Fora?",
      a: "Sim! A maior parte do nosso trabalho é remota, com reuniões online e entregas acompanhadas de perto. Já atendemos clientes em vários estados do Brasil, do Sul ao Nordeste."
    },
    {
      q: "Preciso trocar meu ERP para trabalhar com vocês?",
      a: "Não. Nosso foco é extrair o máximo do que você já tem. Otimizamos seu Datasul, automatizamos processos no Fluig e construímos BI sobre os seus dados atuais — sem começar do zero."
    },
    {
      q: "Qual o prazo para ver os primeiros resultados?",
      a: "No BI, um painel piloto costuma sair em 2 a 4 semanas. No Fluig, um fluxo simples pode ser entregue em dias. No Datasul, a otimização traz ganhos imediatos de performance. Tudo depende do diagnóstico."
    },
    {
      q: "Vocês fazem contrato mensal engessado?",
      a: "Trabalhamos por projeto ou por assinatura de suporte, como preferir. Você escolhe o modelo — sem fidelidade punitiva e com escopo claro desde o início."
    },
    {
      q: "Nossa empresa é pequena. Vale a pena contratar uma consultoria TOTVS?",
      a: "A consultoria se paga quando ela elimina retrabalho, destrava o ERP e evita decisões erradas por falta de dado. Se o seu Datasul ou Fluig custa mais em dor de cabeça do que gera valor, a resposta é sim."
    },
    {
      q: "Vocês dão suporte após a entrega?",
      a: "Sim. Todo projeto inclui período de garantia e treinamento da sua equipe. Depois, você pode contratar suporte contínuo com atendimento direto — sem filas de call center."
    }
  ];

  return (
    <div className="min-h-screen bg-slate-50">
      <BlogNavbar />

      {/* ================= HERO ================= */}
      <section className="relative pt-32 pb-20 lg:pt-44 lg:pb-32 overflow-hidden bg-gradient-to-br from-slate-950 via-slate-900 to-blue-950">
        <div className="absolute -top-32 -right-32 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl" />
        <div className="absolute top-40 -left-32 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl" />
        <div className="absolute inset-0 opacity-[0.04]" style={{ backgroundImage: "radial-gradient(circle at 1px 1px, #fff 1px, transparent 0)", backgroundSize: "40px 40px" }} />
        <div className="container relative z-10 px-4 mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="max-w-4xl"
          >
            <span className="inline-flex items-center gap-2 px-4 py-1.5 mb-6 text-sm font-bold tracking-wider text-cyan-300 uppercase bg-cyan-500/10 border border-cyan-400/20 rounded-full">
              <Zap className="w-4 h-4" /> Consultoria Especializada TOTVS
            </span>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight text-white mb-8 leading-tight">
              Seu ERP Parado? Seus Dados no Escuro?{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">
                Nós Destravamos BI, Datasul e Fluig.
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-slate-300 leading-relaxed max-w-2xl mb-10">
              Consultoria TOTVS que transforma dados em decisão, otimiza seu Datasul e automatiza seus processos no Fluig. <strong className="text-white">Atendimento direto com o especialista</strong> — sem burocracia, sem contratos engessados, resultado em semanas.
            </p>
            <div className="flex flex-col sm:flex-row items-center gap-4">
              <Button size="lg" className="h-14 px-8 text-lg rounded-full bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 shadow-xl shadow-blue-500/30 transition-all gap-2" asChild>
                <a href={WHATSAPP} target="_blank" rel="noopener noreferrer">
                  Diagnóstico Gratuito Agora <MessageCircle className="w-5 h-5" />
                </a>
              </Button>
              <Button size="lg" variant="ghost" className="h-14 px-8 text-lg rounded-full border border-slate-600 text-white hover:bg-white/10" onClick={() => {
                document.getElementById("servicos")?.scrollIntoView({ behavior: "smooth" });
              }}>
                Ver Soluções <ArrowRight className="w-5 h-5" />
              </Button>
            </div>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16 pt-10 border-t border-white/10"
          >
            {[
              { value: "15+", label: "Anos de Mercado" },
              { value: "100+", label: "Projetos Entregues" },
              { value: "40%", label: "Média de Ganho de Eficiência" },
              { value: "24h", label: "Resposta ao Primeiro Contato" }
            ].map((stat, i) => (
              <div key={i} className="text-center md:text-left">
                <div className="text-3xl md:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">{stat.value}</div>
                <div className="text-sm text-slate-400 mt-1">{stat.label}</div>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ================= PAIN POINTS ================= */}
      <section className="py-20 bg-slate-50 border-b border-slate-100">
        <div className="container px-4 mx-auto max-w-5xl">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              Sua Operação Sofre Com Isso?
            </h2>
            <p className="text-lg text-slate-600">
              Se você se reconhece em algum dos sinais abaixo, uma consultoria especializada TOTVS pode ser o melhor investimento do seu ano.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { icon: FileSpreadsheet, title: "Planilhas Infinitas", desc: "Você e sua equipe afogados em Excel, com dados duplicados e ninguém confiando nos números." },
              { icon: Database, title: "Datasul Travado", desc: "Consultas lentas, fechamento demorado, módulos que você paga e não usa. ERP no limite do sufoco." },
              { icon: Workflow, title: "Processos Manuais", desc: "Aprovações por e-mail, papel para lá e para cá, retrabalho e zero rastreabilidade." }
            ].map((item, i) => (
              <motion.div
                key={i}
                whileHover={{ y: -4 }}
                className="p-6 rounded-2xl bg-white border border-slate-200 shadow-sm"
              >
                <div className="w-12 h-12 bg-red-50 rounded-xl flex items-center justify-center mb-4">
                  <item.icon className="w-6 h-6 text-red-500" />
                </div>
                <h3 className="font-bold text-slate-900 mb-2">{item.title}</h3>
                <p className="text-sm text-slate-600">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= SERVICES ================= */}
      <section id="servicos" className="py-24 bg-white">
        <div className="container px-4 mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="inline-block px-4 py-1.5 mb-4 text-sm font-bold tracking-wider text-blue-600 uppercase bg-blue-50 rounded-full">O que fazemos</span>
            <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-6">
              Três Pilares. Uma Operação Sem Gargalos.
            </h2>
            <p className="text-lg text-slate-600">
              BI para decidir, Datasul para operar e Fluig para automatizar. Juntos, eles formam a base de uma empresa moderna e competitiva.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {services.map((service, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                whileHover={{ y: -6 }}
                className="group rounded-[2rem] bg-slate-50 border border-slate-100 p-8 hover:shadow-2xl hover:shadow-blue-500/10 transition-all flex flex-col"
              >
                <div className="flex items-center justify-between mb-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-600 to-cyan-500 rounded-2xl flex items-center justify-center shadow-lg shadow-blue-500/20 group-hover:scale-110 transition-transform">
                    <service.icon className="w-8 h-8 text-white" />
                  </div>
                  <span className="text-xs font-bold text-blue-600 bg-blue-50 px-3 py-1 rounded-full">{service.badge}</span>
                </div>
                <h3 className="text-2xl font-bold text-slate-900 mb-4">{service.title}</h3>
                <p className="text-slate-600 leading-relaxed mb-8 flex-grow">{service.description}</p>
                <ul className="space-y-3 mb-8">
                  {service.items.map((item, j) => (
                    <li key={j} className="flex items-start gap-3 text-sm text-slate-700">
                      <CheckCircle2 className="w-5 h-5 text-emerald-500 flex-shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
                <Button variant="outline" className="rounded-full w-full border-blue-200 text-blue-700 hover:bg-blue-50 gap-2" asChild>
                  <a href={WHATSAPP} target="_blank" rel="noopener noreferrer">
                    Quero Essa Solução <ArrowRight className="w-4 h-4" />
                  </a>
                </Button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= METHODOLOGY ================= */}
      <section className="py-24 bg-slate-900 relative overflow-hidden">
        <div className="absolute -bottom-40 left-1/2 -translate-x-1/2 w-[40rem] h-[40rem] bg-blue-600/10 rounded-full blur-3xl" />
        <div className="container relative z-10 px-4 mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="inline-block px-4 py-1.5 mb-4 text-sm font-bold tracking-wider text-cyan-300 uppercase bg-cyan-500/10 border border-cyan-400/20 rounded-full">Como trabalhamos</span>
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
              Do Diagnóstico ao Resultado em 4 Passos
            </h2>
            <p className="text-lg text-slate-400">
              Metodologia enxuta e transparente. Você acompanha cada etapa, sem surpresa e sem pagar por enrolação.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: SearchCheck, step: "01", title: "Diagnóstico", desc: "Mapeamos seu cenário: qualidade dos dados, configuração do ERP e processos que mais travam." },
              { icon: Rocket, step: "02", title: "Plano de Ação", desc: "Definimos escopo, prioridades, prazo e investimento. Sem letras miúdas, tudo claro." },
              { icon: Cpu, step: "03", title: "Implementação", desc: "Executamos com entregas semanais. Painéis no ar, ERP otimizado, fluxos automatizados." },
              { icon: TrendingUp, step: "04", title: "Evolução Contínua", desc: "Treinamos sua equipe e seguimos acompanhando. A tecnologia evolui com o seu negócio." }
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="relative rounded-3xl bg-white/5 border border-white/10 p-8 backdrop-blur-sm hover:bg-white/10 transition-colors"
              >
                <div className="text-5xl font-black text-white/10 absolute top-6 right-6">{item.step}</div>
                <div className="w-12 h-12 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-xl flex items-center justify-center mb-6">
                  <item.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{item.title}</h3>
                <p className="text-sm text-slate-400 leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= CASES ================= */}
      <section className="py-24 bg-white">
        <div className="container px-4 mx-auto max-w-6xl">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">Casos Reais, Resultados Medidos</h2>
            <p className="text-lg text-slate-600">
              Projetos que tiraram empresas do papel para o controle total da operação.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {cases.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="p-8 rounded-3xl bg-slate-50 border border-slate-100 hover:shadow-xl transition-all group"
              >
                <div className="mb-6 text-blue-600 font-bold text-sm tracking-widest uppercase">{item.system}</div>
                <h3 className="text-xl font-bold text-slate-900 mb-4">{item.title}</h3>
                <p className="text-slate-600 mb-6 leading-relaxed">{item.description}</p>
                <div className="pt-4 border-t border-slate-200 flex items-center justify-between">
                  <span className="text-sm font-bold text-slate-900">{item.result}</span>
                  <CheckCircle2 className="w-5 h-5 text-green-500" />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= CLIENTS ================= */}
      <section className="py-24 bg-slate-50">
        <div className="container px-4 mx-auto max-w-6xl">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="inline-block px-4 py-1.5 mb-4 text-sm font-bold tracking-wider text-blue-600 uppercase bg-blue-50 rounded-full">Clientes atendidos</span>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
              Empresas de Médio Porte Que Confiaram na TechNexos
            </h2>
            <p className="text-lg text-slate-600">
              Da indústria ao comércio, ajudamos empresas como a sua a tirar o máximo do ecossistema TOTVS.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {clients.map((client, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.08 }}
                whileHover={{ y: -4 }}
                className="flex items-center gap-5 rounded-2xl bg-white border border-slate-200 p-6 hover:shadow-xl hover:shadow-blue-500/10 transition-all"
              >
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-blue-50 to-blue-100 border border-blue-100 flex items-center justify-center flex-shrink-0">
                  <Building2 className="w-7 h-7 text-blue-600" />
                </div>
                <div>
                  <h3 className="font-bold text-slate-900">{client.name}</h3>
                  <p className="text-sm text-slate-500">{client.segment}</p>
                  <span className="inline-block mt-2 text-xs font-bold text-cyan-700 bg-cyan-50 px-2.5 py-1 rounded-full">
                    {client.type}
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
          <p className="text-center text-xs text-slate-400 mt-10">
            Relações comerciais e de projeto. Resultados variam conforme o cenário de cada operação.
          </p>
        </div>
      </section>

      {/* ================= ABOUT ================= */}
      <section className="py-24 bg-white overflow-hidden">
        <div className="container px-4 mx-auto max-w-6xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="relative order-2 lg:order-1">
              <div className="absolute -inset-4 bg-blue-500/20 rounded-[2rem] blur-2xl opacity-50" />
              <div className="relative rounded-[2rem] overflow-hidden shadow-2xl bg-white border-4 border-white aspect-square lg:aspect-auto lg:h-[560px]">
                <img
                  src={roqueImage}
                  alt="Roque Rafael Proença - Especialista em BI, Datasul e Fluig"
                  className="w-full h-full object-cover object-top"
                />
              </div>
            </div>
            <div className="order-1 lg:order-2">
              <div className="flex items-center gap-2 text-blue-600 font-bold uppercase tracking-wider text-sm mb-4">
                <Users className="w-4 h-4" />
                <span>Especialista Responsável</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-8 leading-tight">
                Roque Rafael Proença: <br /> O Especialista Que Cuida do Seu Projeto Pessoalmente.
              </h2>
              <div className="space-y-6 text-lg text-slate-600 leading-relaxed">
                <p>
                  Com mais de 15 anos de mercado, sou o especialista que estará do início ao fim na sua implantação. Diferente das grandes consultorias parceiras TOTVS, você não fala com comercial nem espera retorno de call center — o contato é direto comigo.
                </p>
                <p>
                  Minha abordagem une visão técnica profunda em BI, Datasul e Fluig com o entendimento do seu negócio. Cada entrega é sob medida e você paga pelo resultado, não por horas de reunião.
                </p>
                <div className="flex items-center gap-4 p-5 rounded-2xl bg-slate-50 border border-slate-100">
                  <ShieldCheck className="w-8 h-8 text-emerald-500 flex-shrink-0" />
                  <p className="text-sm text-slate-600 font-medium">
                    Confidencialidade total. Seus dados e processos ficam seguros — trabalhamos com NDA e boas práticas de segurança.
                  </p>
                </div>
                <div className="grid grid-cols-3 gap-6 pt-6 border-t border-slate-200">
                  <div>
                    <h5 className="font-bold text-slate-900 text-2xl mb-1">15+</h5>
                    <p className="text-xs text-slate-500">Anos de Mercado</p>
                  </div>
                  <div>
                    <h5 className="font-bold text-slate-900 text-2xl mb-1">100%</h5>
                    <p className="text-xs text-slate-500">Atendimento Direto</p>
                  </div>
                  <div>
                    <h5 className="font-bold text-slate-900 text-2xl mb-1">NDA</h5>
                    <p className="text-xs text-slate-500">Sigilo Garantido</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================= WHY US ================= */}
      <section className="py-24 bg-slate-50">
        <div className="container px-4 mx-auto max-w-5xl">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
              Por Que a TechNexos?
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { icon: LineChart, title: "Especialista Técnico, Não Revendedor", desc: "Não empurramos licença nem módulo. Analisamos seu cenário e recomendamos o que de fato resolve." },
              { icon: Zap, title: "Ritmo de Start-up, Cabeça de Consultoria", desc: "Agilidade de quem entrega, profundidade de quem entende de TOTVS de verdade." },
              { icon: Bot, title: "Tecnologia Atual, Custo Inteligente", desc: "BI moderno, automação com IA e boas práticas — para o seu orçamento de médio porte." }
            ].map((item, i) => (
              <motion.div
                key={i}
                whileHover={{ y: -4 }}
                className="p-8 rounded-3xl bg-white border border-slate-100 shadow-sm text-center"
              >
                <div className="w-14 h-14 mx-auto bg-gradient-to-br from-blue-600 to-cyan-500 rounded-2xl flex items-center justify-center mb-6 shadow-lg shadow-blue-500/20">
                  <item.icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="font-bold text-slate-900 mb-3">{item.title}</h3>
                <p className="text-sm text-slate-600 leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= FAQ ================= */}
      <section id="faq" className="py-24 bg-white">
        <div className="container px-4 mx-auto max-w-3xl">
          <div className="text-center mb-14">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Perguntas Frequentes</h2>
            <p className="text-lg text-slate-600">Tudo o que você precisa saber antes de começar.</p>
          </div>
          <Accordion type="single" collapsible className="space-y-3">
            {faqs.map(({ q, a }, i) => (
              <AccordionItem key={i} value={`faq-${i}`} className="rounded-xl border border-slate-200 bg-slate-50 px-5">
                <AccordionTrigger className="text-left text-sm md:text-base font-semibold text-slate-900 hover:no-underline hover:text-blue-600">
                  {q}
                </AccordionTrigger>
                <AccordionContent className="text-sm md:text-base text-slate-600 leading-relaxed">{a}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      {/* ================= FINAL CTA ================= */}
      <section className="py-24 bg-slate-50 relative">
        <div className="container px-4 mx-auto max-w-5xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="bg-gradient-to-br from-slate-900 via-blue-900 to-cyan-900 rounded-[3rem] p-12 lg:p-20 text-white shadow-2xl relative overflow-hidden"
          >
            <div className="absolute -top-24 -right-24 w-72 h-72 bg-cyan-500/20 rounded-full blur-3xl" />
            <div className="absolute -bottom-24 -left-24 w-72 h-72 bg-blue-500/20 rounded-full blur-3xl" />
            <div className="relative z-10">
              <h2 className="text-3xl md:text-5xl font-bold mb-8 leading-tight">
                Sua Operação Não Pode Esperar Mais Um Semestre. <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-400">Comece Pelo Diagnóstico Gratuito.</span>
              </h2>
              <p className="text-xl text-slate-300 mb-12 leading-relaxed max-w-2xl mx-auto">
                Em uma conversa de 30 minutos, mostramos exatamente onde estão seus gargalos e o que dá para destravar já. Sem compromisso, sem planilha de vendas.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
                <Button size="lg" className="h-16 px-10 text-xl font-bold rounded-full bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 shadow-xl shadow-blue-500/30 hover:scale-105 transition-transform" asChild>
                  <a href={WHATSAPP} target="_blank" rel="noopener noreferrer">
                    Falar Direto com o Especialista <MessageCircle className="w-5 h-5 ml-2" />
                  </a>
                </Button>
              </div>
              <p className="mt-8 text-sm text-slate-400">
                Resposta em até 24h úteis · Atendimento para todo o Brasil · Sigilo garantido
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer Spacer */}
      <section className="py-10 bg-slate-50" />
    </div>
  );
};

export default BiDatasulFluig;
