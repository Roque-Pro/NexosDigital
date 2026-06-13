import { useEffect } from "react";
import { motion } from "framer-motion";
import { 
  Settings, 
  Code2, 
  Zap, 
  FileCode2, 
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
    title: "Consultoria TOTVS Fluig & RM | Especialista Roque Rafael Proença",
    description: "Consultoria técnica especializada em TOTVS Fluig e RM. Automação de processos (BPM), Fórmulas Visuais, suporte estratégico e desenvolvimento sob medida para o seu ERP.",
    keywords: [
      "Consultoria TOTVS",
      "TOTVS Fluig",
      "TOTVS RM",
      "Fórmulas Visuais RM",
      "BPM Fluig",
      "Automação de Processos",
      "Roque Rafael Proença",
      "especialista totvs",
      "suporte rm totvs",
      "desenvolvimento fluig",
      "integração erp totvs"
    ],
    ogTitle: "Consultoria Especialista TOTVS Fluig & RM | Roque Pro",
    ogDescription: "Potencialize seu ERP com Fórmulas Visuais, BPM e suporte estratégico de alto nível.",
    ogUrl: "https://www.technexos.com.br/consultoria-totvs",
    twitterTitle: "Consultoria Especialista TOTVS Fluig & RM",
    twitterDescription: "Transformando o ecossistema TOTVS em vantagem competitiva para sua empresa.",
    canonicalUrl: "https://www.technexos.com.br/consultoria-totvs",
    schema: {
      "@context": "https://schema.org",
      "@type": "ConsultingService",
      "name": "Consultoria TOTVS Fluig & RM",
      "description": "Serviços especializados em customização e suporte para sistemas TOTVS.",
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
// ... (rest of the component) ...

      title: "Automação de Workflow de Compras",
      system: "Fluig",
      description: "Redução de 70% no tempo de aprovação de pedidos através da implementação de um fluxo BPM inteligente com integrações automáticas.",
      result: "Eficiência Operacional"
    },
    {
      title: "Otimização de Fórmulas Visuais",
      system: "RM",
      description: "Desenvolvimento de fórmulas complexas para automação de cálculos tributários e validações de folha, eliminando erros manuais.",
      result: "Conformidade & Precisão"
    },
    {
      title: "Portal de Fornecedores Customizado",
      system: "Fluig + RM",
      description: "Criação de interface intuitiva no Fluig integrada ao RM para gestão de documentos e notas fiscais de fornecedores externos.",
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
                Consultoria Especializada
              </span>
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight text-slate-900 mb-8 leading-tight">
                Potencialize seu ERP <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-600 to-blue-600">TOTVS Fluig & RM</span>
              </h1>
              <p className="text-xl md:text-2xl text-slate-600 leading-relaxed max-w-2xl mb-10">
                Soluções técnicas avançadas em Fórmulas Visuais, Automação de Processos (BPM) e Suporte Estratégico para levar sua operação ao próximo nível.
              </p>
              <div className="flex flex-col sm:flex-row items-center gap-4">
                <Button size="lg" className="h-14 px-8 text-lg rounded-full bg-cyan-600 hover:bg-cyan-700 shadow-lg transition-all gap-2" asChild>
                  <a href="https://wa.me/5532991075164" target="_blank" rel="noopener noreferrer">
                    Agendar Consultoria <MessageCircle className="w-5 h-5" />
                  </a>
                </Button>
                <Button variant="ghost" size="lg" className="h-14 px-8 text-lg rounded-full border border-slate-200" onClick={() => {
                  document.getElementById('servicos')?.scrollIntoView({ behavior: 'smooth' });
                }}>
                  Conhecer Serviços
                </Button>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Intro Section - Fluig & RM */}
      <section id="servicos" className="py-24 bg-white border-y border-slate-100">
        <div className="container px-4 mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Fluig Card */}
            <motion.div 
              whileHover={{ y: -5 }}
              className="p-8 md:p-12 rounded-[2.5rem] bg-gradient-to-br from-slate-900 to-slate-800 text-white shadow-2xl relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 p-8 opacity-10">
                <Workflow className="w-32 h-32" />
              </div>
              <div className="relative z-10">
                <div className="w-16 h-16 bg-cyan-500 rounded-2xl flex items-center justify-center mb-8 shadow-lg shadow-cyan-500/20">
                  <Cpu className="w-8 h-8 text-white" />
                </div>
                <h2 className="text-3xl font-bold mb-6">TOTVS Fluig</h2>
                <p className="text-slate-300 text-lg mb-8 leading-relaxed">
                  Apresento-me como seu parceiro na jornada de transformação digital com Fluig. Atuo no contexto geral da plataforma, desde a criação de portais corporativos até a automação complexa de processos (BPM).
                </p>
                <ul className="space-y-4 mb-10">
                  {[
                    "Desenvolvimento de Workflows (BPMN)",
                    "Criação de Portais e Widgets Customizados",
                    "Integração via API (REST/SOAP)",
                    "Gestão de Identidade e Acessos"
                  ].map((item, i) => (
                    <li key={i} className="flex items-center gap-3 text-slate-200">
                      <CheckCircle2 className="w-5 h-5 text-cyan-400" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
                <div className="pt-8 border-t border-slate-700">
                  <p className="text-sm text-slate-400 italic font-medium">Focado em agilidade e colaboração entre departamentos.</p>
                </div>
              </div>
            </motion.div>

            {/* RM Card */}
            <motion.div 
              whileHover={{ y: -5 }}
              className="p-8 md:p-12 rounded-[2.5rem] bg-white border border-slate-200 shadow-xl relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 p-8 opacity-5">
                <Database className="w-32 h-32" />
              </div>
              <div className="relative z-10">
                <div className="w-16 h-16 bg-blue-600 rounded-2xl flex items-center justify-center mb-8 shadow-lg shadow-blue-600/20">
                  <FileCode2 className="w-8 h-8 text-white" />
                </div>
                <h2 className="text-3xl font-bold text-slate-900 mb-6">TOTVS RM</h2>
                <p className="text-slate-600 text-lg mb-8 leading-relaxed">
                  Especialista em suporte técnico e desenvolvimento avançado para a linha RM. Meu foco é extrair o máximo de performance do seu ERP através de customizações inteligentes e seguras.
                </p>
                <ul className="space-y-4 mb-10">
                  {[
                    "Desenvolvimento de Fórmulas Visuais complexas",
                    "Suporte Técnico em RH, Financeiro e Gestão",
                    "Criação de Relatórios (Gerador de Saídas)",
                    "Consultoria em Banco de Dados SQL Server"
                  ].map((item, i) => (
                    <li key={i} className="flex items-center gap-3 text-slate-700">
                      <CheckCircle2 className="w-5 h-5 text-blue-600" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
                <div className="pt-8 border-t border-slate-100">
                  <p className="text-sm text-slate-400 italic font-medium">Robustez e precisão para os dados vitais da sua empresa.</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* About Me Section */}
      <section className="py-24 bg-slate-50 overflow-hidden">
        <div className="container px-4 mx-auto max-w-6xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="relative">
              <div className="absolute -inset-4 bg-cyan-500/20 rounded-[2rem] blur-2xl opacity-50" />
              <div className="relative rounded-[2rem] overflow-hidden shadow-2xl bg-white border-4 border-white aspect-square lg:aspect-auto lg:h-[600px]">
                <img
                  src={roqueImage}
                  alt="Roque Rafael Proença"
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
                Roque Rafael Proença: <br /> Sua ponte para a eficiência.
              </h2>
              <div className="space-y-6 text-lg text-slate-600 leading-relaxed">
                <p>
                  Com mais de 15 anos de experiência no mercado de tecnologia, especializei-me em transformar o ecossistema TOTVS em uma vantagem competitiva para empresas de diversos portes.
                </p>
                <p>
                  Minha abordagem une a visão técnica profunda com o entendimento das necessidades de negócio, garantindo que cada fórmula visual ou processo Fluig entregue valor real e mensurável.
                </p>
                <div className="grid grid-cols-2 gap-8 pt-8 border-t border-slate-200">
                  <div>
                    <h5 className="font-bold text-slate-900 text-3xl mb-1">15+</h5>
                    <p className="text-sm text-slate-500">Anos de Mercado</p>
                  </div>
                  <div>
                    <h5 className="font-bold text-slate-900 text-3xl mb-1">100%</h5>
                    <p className="text-sm text-slate-500">Foco em Resultados</p>
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
              Exemplos de como a consultoria estratégica transformou operações complexas em fluxos de trabalho simplificados.
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
              <h2 className="text-3xl md:text-5xl font-bold mb-8 italic">"Sua empresa não precisa de mais software, ela precisa de mais eficiência."</h2>
              <p className="text-xl text-cyan-50 mb-12 leading-relaxed max-w-2xl mx-auto">
                Vamos conversar sobre como posso destravar o potencial do seu TOTVS Fluig e RM hoje mesmo.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
                <Button size="lg" variant="secondary" className="h-16 px-10 text-xl font-bold rounded-full shadow-xl hover:scale-105 transition-transform" asChild>
                  <a href="https://wa.me/5532991075164" target="_blank" rel="noopener noreferrer">
                    Iniciar Consultoria Agora
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
