import { useEffect } from "react";
import { motion } from "framer-motion";
import { 
  Code2, 
  Users, 
  CheckCircle2, 
  MessageCircle, 
  ArrowRight,
  Database,
  Cpu,
  Workflow
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { useSEO } from "@/hooks/useSEO";
import BlogNavbar from "@/components/BlogNavbar";
import roqueImage from "@/img/roque-rafael-proenca-consultor.png";

const TotvsConsultancy = () => {
  useSEO({
    title: "Consultoria Fluig Especialista | Desenvolvedor Fluig Sob Demanda",
    description: "Consultoria Fluig especializada com Roque Rafael. Destrave processos BPMN, datasets lentos e integrações API no TOTVS Fluig. Atendimento direto com o desenvolvedor, sem burocracia.",
    keywords: [
      "Consultoria Fluig",
      "Desenvolvedor Fluig",
      "Suporte Fluig",
      "TOTVS Fluig",
      "BPMN Fluig",
      "Datasets Fluig",
      "Widgets Customizados Fluig",
      "integração API REST SOAP Fluig",
      "especialista fluig",
      "Roque Rafael Proença",
      "consultor fluig sob demanda"
    ],
    ogTitle: "Consultoria Fluig | Desenvolvedor Especialista Sob Demanda",
    ogDescription: "Destrave seus processos, datasets e integrações no TOTVS Fluig sem a burocracia das grandes consultorias.",
    ogUrl: "https://www.technexos.com.br/consultoria-totvs",
    twitterTitle: "Consultoria Fluig Especialista",
    twitterDescription: "Atendimento direto com desenvolvedor especialista Fluig. Resultado rápido, sem intermediários.",
    canonicalUrl: "https://www.technexos.com.br/consultoria-totvs",
    schema: {
      "@context": "https://schema.org",
      "@type": "ConsultingService",
      "name": "Consultoria Fluig Especializada",
      "description": "Serviços especializados em desenvolvimento e suporte para plataforma TOTVS Fluig, incluindo BPMN, datasets, widgets customizados e integrações API.",
      "provider": {
        "@type": "Person",
        "name": "Roque Rafael Proença"
      },
      "areaServed": "BR",
      "serviceType": "ERP Consulting"
    }
  });

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const cases = [
    {
      title: "Automação de Workflow de Compras (BPMN)",
      system: "Fluig",
      description: "Redução de 70% no tempo de aprovação de pedidos com fluxo BPM inteligente integrado ao RM via API REST. Eliminação de gargalos operacionais e rastreabilidade total.",
      result: "+70% Eficiência"
    },
    {
      title: "Otimização de Datasets Lentos",
      system: "Fluig",
      description: "Reestruturação de datasets Fluig que travavam relatórios críticos. Aplicação de índices SQL Server e boas práticas Node.js para reduzir o tempo de resposta de minutos para segundos.",
      result: "Performance Recuperada"
    },
    {
      title: "Portal de Fornecedores Fluig + RM",
      system: "Fluig + RM",
      description: "Widget customizado no Fluig com integração nativa ao RM para gestão de notas fiscais e documentos. Automação que eliminou retrabalho manual da equipe fiscal.",
      result: "Integração Total"
    }
  ];

  return (
    <div className="min-h-screen bg-slate-50">
      <BlogNavbar />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden bg-white">
        <div className="absolute top-0 right-0 w-1/3 h-full bg-cyan-50/50 -skew-x-12 transform origin-top" />
        <div className="container relative z-10 px-4 mx-auto">
          <div className="max-w-4xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <span className="inline-block px-4 py-1.5 mb-6 text-sm font-bold tracking-wider text-cyan-600 uppercase bg-cyan-50 rounded-full">
                Consultoria Fluig Especializada
              </span>
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight text-slate-900 mb-8 leading-tight">
                Destrave seus Processos, Datasets e Integrações no{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-600 to-blue-600">TOTVS Fluig</span>
              </h1>
              <p className="text-xl md:text-2xl text-slate-600 leading-relaxed max-w-2xl mb-10">
                Atendimento direto com o desenvolvedor especialista — sem burocracia, sem contratos mensais engessados. Resolvo gargalos em BPMN, datasets lentos, widgets quebrados e integrações API no Fluig com a agilidade que sua operação exige.
              </p>
              <div className="flex flex-col sm:flex-row items-center gap-4">
                <Button size="lg" className="h-14 px-8 text-lg rounded-full bg-cyan-600 hover:bg-cyan-700 shadow-lg transition-all gap-2" asChild>
                  <a href="https://wa.me/5532991075164" target="_blank" rel="noopener noreferrer">
                    Falar Direto com o Especialista Fluig <MessageCircle className="w-5 h-5" />
                  </a>
                </Button>
                <Button variant="ghost" size="lg" className="h-14 px-8 text-lg rounded-full border border-slate-200" onClick={() => {
                  document.getElementById('servicos')?.scrollIntoView({ behavior: 'smooth' });
                }}>
                  Ver Soluções Técnicas
                </Button>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Pain Points Section */}
      <section className="py-16 bg-slate-50 border-y border-slate-100">
        <div className="container px-4 mx-auto max-w-5xl">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-4">
              Problemas Críticos no Fluig que Travam sua Operação?
            </h2>
            <p className="text-lg text-slate-600">
              Se você reconhece algum desses sintomas, precisa de um especialista Fluig sob demanda agora.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { icon: Workflow, title: "BPMN Lentos ou Quebrados", desc: "Processos que não fluem, aprovações travadas e retrabalho manual que custa tempo e dinheiro." },
              { icon: Database, title: "Datasets com Performance Crítica", desc: "Relatórios que demoram minutos para carregar. Impacto direto na tomada de decisão da sua empresa." },
              { icon: Code2, title: "Integrações API Paradas", desc: "APIs REST/SOAP que pararam de funcionar após atualizações. Sistemas que não conversam entre si." }
            ].map((item, i) => (
              <motion.div
                key={i}
                whileHover={{ y: -3 }}
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

      {/* Services Section - Foco Total Fluig */}
      <section id="servicos" className="py-24 bg-white">
        <div className="container px-4 mx-auto">
          <div className="max-w-4xl mx-auto">
            <motion.div
              whileHover={{ y: -5 }}
              className="p-8 md:p-12 rounded-[2.5rem] bg-gradient-to-br from-slate-900 to-slate-800 text-white shadow-2xl relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 p-8 opacity-10">
                <Workflow className="w-32 h-32" />
              </div>
              <div className="relative z-10">
                <div className="flex items-center gap-3 mb-8">
                  <div className="w-16 h-16 bg-cyan-500 rounded-2xl flex items-center justify-center shadow-lg shadow-cyan-500/20">
                    <Cpu className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <h2 className="text-3xl font-bold">TOTVS Fluig</h2>
                    <p className="text-cyan-300 text-sm font-medium">Desenvolvimento & Suporte Especializado</p>
                  </div>
                </div>
                <p className="text-slate-300 text-lg mb-8 leading-relaxed">
                  Especialista Fluig com domínio comprovado em todo o ecossistema da plataforma. Atuo direto na resolucão dos seus gargalos — de BPMN complexos a integrações nativas com o RM/ERP, garantindo que seus dados conversem perfeitamente.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-4 mb-10">
                  {[
                    "Desenvolvimento de Workflows BPMN",
                    "Criação de Portais e Widgets Customizados",
                    "Otimização de Datasets Lentos",
                    "Integração via API REST/SOAP",
                    "Automação de Processos com Node.js e JavaScript",
                    "Gestão de Identidade e Acessos (IAM)",
                    "Consultoria em Performance Fluig",
                    "Integração Nativa com Ecossistema RM/ERP"
                  ].map((item, i) => (
                    <li key={i} className="flex items-center gap-3 text-slate-200 list-none">
                      <CheckCircle2 className="w-5 h-5 text-cyan-400 flex-shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </div>
                <div className="pt-8 border-t border-slate-700 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                  <p className="text-sm text-slate-400 italic font-medium">Resultado: agilidade, fim dos erros manuais, eliminação de gargalos operacionais.</p>
                  <Button size="sm" variant="secondary" className="rounded-full whitespace-nowrap" asChild>
                    <a href="https://wa.me/5532991075164" target="_blank" rel="noopener noreferrer">
                      Solicitar Análise Técnica <ArrowRight className="w-4 h-4 ml-1" />
                    </a>
                  </Button>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* About Me Section - Quebra de Objeções */}
      <section className="py-24 bg-slate-50 overflow-hidden">
        <div className="container px-4 mx-auto max-w-6xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="relative">
              <div className="absolute -inset-4 bg-cyan-500/20 rounded-[2rem] blur-2xl opacity-50" />
              <div className="relative rounded-[2rem] overflow-hidden shadow-2xl bg-white border-4 border-white aspect-square lg:aspect-auto lg:h-[600px]">
                <img
                  src={roqueImage}
                  alt="Roque Rafael Proença - Especialista Fluig"
                  className="w-full h-full object-cover object-top"
                />
              </div>
            </div>
            <div>
              <div className="flex items-center gap-2 text-cyan-600 font-bold uppercase tracking-wider text-sm mb-4">
                <Users className="w-4 h-4" />
                <span>Especialista Responsável</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-8 leading-tight">
                Roque Rafael Proença: <br /> Seu Desenvolvedor Fluig Sob Demanda.
              </h2>
              <div className="space-y-6 text-lg text-slate-600 leading-relaxed">
                <p>
                  Com mais de 15 anos de mercado, sou o desenvolvedor especialista que estará pessoalmente na resolucão dos seus problemas no Fluig. Diferente das grandes consultorias parceiras TOTVS, você não enfrenta intermediários comerciais nem burocracia — o contato é direto comigo.
                </p>
                <p>
                  Minha abordagem une visão técnica profunda em BPMN, datasets, widgets customizados e APIs REST/SOAP com o entendimento das necessidades de negócio. Cada entrega é feita sob medida, sem contratos mensais engessados — você paga pelo resultado.
                </p>
                <div className="grid grid-cols-2 gap-8 pt-8 border-t border-slate-200">
                  <div>
                    <h5 className="font-bold text-slate-900 text-3xl mb-1">15+</h5>
                    <p className="text-sm text-slate-500">Anos de Mercado</p>
                  </div>
                  <div>
                    <h5 className="font-bold text-slate-900 text-3xl mb-1">100%</h5>
                    <p className="text-sm text-slate-500">Atendimento Direto</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Cases Section */}
      <section className="py-24 bg-white">
        <div className="container px-4 mx-auto max-w-6xl">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">Casos Reais, Resultados Reais</h2>
            <p className="text-lg text-slate-600">
              Exemplos reais de como a consultoria Fluig sob demanda resolveu gargalos críticos em empresas de médio e grande porte.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {cases.map((item, index) => (
              <div key={index} className="p-8 rounded-3xl bg-slate-50 border border-slate-100 hover:shadow-xl transition-all group">
                <div className="mb-6 text-cyan-600 font-bold text-sm tracking-widest uppercase">{item.system}</div>
                <h3 className="text-xl font-bold text-slate-900 mb-4">{item.title}</h3>
                <p className="text-slate-600 mb-6 leading-relaxed">{item.description}</p>
                <div className="pt-4 border-t border-slate-200 flex items-center justify-between">
                  <span className="text-sm font-bold text-slate-900">{item.result}</span>
                  <CheckCircle2 className="w-5 h-5 text-green-500" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-white relative">
        <div className="container px-4 mx-auto max-w-5xl text-center">
          <div className="bg-gradient-to-br from-cyan-600 to-blue-700 rounded-[3rem] p-12 lg:p-20 text-white shadow-2xl relative overflow-hidden">
            <div className="relative z-10">
              <h2 className="text-3xl md:text-5xl font-bold mb-8">
                Seu Processo no Fluig Travou? <br />
                <span className="italic">"Sua empresa não precisa de mais software, ela precisa de mais eficiência."</span>
              </h2>
              <p className="text-xl text-cyan-50 mb-12 leading-relaxed max-w-2xl mx-auto">
                Pare de perder tempo com burocracia. Fale agora diretamente com o especialista responsável e receba uma análise técnica do seu cenário Fluig.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
                <Button size="lg" variant="secondary" className="h-16 px-10 text-xl font-bold rounded-full shadow-xl hover:scale-105 transition-transform" asChild>
                  <a href="https://wa.me/5532991075164" target="_blank" rel="noopener noreferrer">
                    Falar Direto com o Especialista Fluig <MessageCircle className="w-5 h-5 ml-2" />
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer Spacer */}
      <section className="py-12 bg-white" />
    </div>
  );
};

export default TotvsConsultancy;
