import { useEffect } from "react";
import { motion } from "framer-motion";
import { 
  Zap, 
  Globe, 
  Database, 
  MessageCircle, 
  CheckCircle2, 
  Clock, 
  Rocket, 
  ShieldCheck,
  TrendingUp,
  ArrowRight,
  Users,
  Star,
  Check
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { useSEO } from "@/hooks/useSEO";
import BlogNavbar from "@/components/BlogNavbar";
import Footer from "@/components/Footer";
import WhatsAppFloat from "@/components/WhatsAppFloat";

const Autonomos = () => {
  useSEO({
    title: "Soluções Digitais para Autônomos & Profissionais Liberais | TechNexos",
    description: "Saia do amadorismo. Tenha sua Página de Vendas, Blog e CRM integrados com entrega em 24h. Ideal para Advogados, Médicos, Consultores e Freelancers.",
    keywords: [
      "site para advogados",
      "página para médicos",
      "CRM para consultores",
      "blog para psicólogos",
      "presença digital autônomos",
      "marketing para profissionais liberais"
    ],
  });

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const professions = [
    { name: "Advogados", benefit: "Autoridade e captura de leads jurídicos qualificados." },
    { name: "Médicos & Dentistas", benefit: "Agendamentos facilitados e prontuário digital." },
    { name: "Psicólogos & Terapeutas", benefit: "Presença acolhedora e blog para educação de pacientes." },
    { name: "Contadores", benefit: "Portal para troca de documentos e atração de novos CNPJs." },
    { name: "Personal Trainers", benefit: "Venda de consultorias e gestão de alunos ativa." },
    { name: "Consultores & Mentores", benefit: "Landing pages que vendem seu conhecimento 24/7." },
    { name: "Arquitetos & Engenheiros", benefit: "Portfólio de alto impacto visual e gestão de orçamentos." },
    { name: "Corretores de Imóveis", benefit: "Destaque seus imóveis e centralize contatos no CRM." },
    { name: "Freelancers de TI", benefit: "Demonstre senioridade e organize seus projetos." },
    { name: "Esteticistas & Cabeleireiros", benefit: "Vitrine de serviços e controle de agendamentos WhatsApp." }
  ];

  const features = [
    {
      title: "Landing Page Magnética",
      description: "Não é apenas um site. É uma máquina de conversão desenhada para destacar sua expertise e transformar visitantes em clientes reais.",
      icon: <Globe className="w-8 h-8 text-blue-600" />
    },
    {
      title: "Blog Estratégico (SEO)",
      description: "Domine o Google. Um espaço pronto para você postar conteúdos que educam seu público e atraem tráfego orgânico qualificado.",
      icon: <TrendingUp className="w-8 h-8 text-blue-600" />
    },
    {
      title: "CRM Inteligente",
      description: "Organize sua vida. Centralize todos os contatos, histórico de conversas e agendamentos em um dashboard intuitivo.",
      icon: <Database className="w-8 h-8 text-blue-600" />
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <BlogNavbar />

      {/* Hero Section */}
      <section className="relative pt-32 pb-24 lg:pt-48 lg:pb-40 overflow-hidden">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-blue-50/50 skew-x-12 transform origin-top-right -z-10" />
        <div className="container px-4 mx-auto">
          <div className="max-w-4xl">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-100 text-blue-700 font-bold text-sm mb-6 animate-pulse border border-blue-200">
                <Clock className="w-4 h-4" /> ENTREGA GARANTIDA EM 24 HORAS
              </div>
              <h1 className="text-5xl md:text-7xl font-black tracking-tighter text-slate-900 mb-8 leading-[0.95]">
                Sua Carreira Merece <br />
                <span className="text-blue-600 underline decoration-blue-200 underline-offset-8">Respeito Digital.</span>
              </h1>
              <p className="text-xl md:text-2xl text-slate-600 leading-relaxed max-w-2xl mb-12">
                Pare de depender apenas de indicações e redes sociais. Tenha um <span className="font-bold text-slate-900">Ecossistema Profissional</span> (Página + Blog + CRM) que coloca você no topo do mercado em tempo recorde.
              </p>
              <div className="flex flex-col sm:flex-row items-center gap-6">
                <Button size="lg" className="h-16 px-10 text-xl font-black rounded-2xl bg-blue-600 hover:bg-blue-700 shadow-xl shadow-blue-200 transition-all hover:scale-105 gap-3" asChild>
                  <a href="https://wa.me/5532991075164" target="_blank" rel="noopener noreferrer">
                    Iniciar Minha Estrutura <Rocket className="w-6 h-6" />
                  </a>
                </Button>
                <div className="flex items-center gap-3 text-slate-500 font-bold">
                  <ShieldCheck className="w-6 h-6 text-green-500" />
                  Foco em Conversão Real
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* professions Section */}
      <section className="py-24 bg-slate-900 text-white">
        <div className="container px-4 mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-black tracking-tighter mb-4 italic">Projetado para quem faz acontecer.</h2>
            <p className="text-slate-400 text-xl max-w-2xl mx-auto">Não importa sua área, se você é um profissional de elite, nossa estrutura foi feita para você.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
            {professions.map((p, i) => (
              <motion.div 
                key={i}
                whileHover={{ scale: 1.05 }}
                className="bg-white/5 border border-white/10 p-6 rounded-3xl backdrop-blur-sm"
              >
                <div className="flex items-center gap-2 mb-4">
                  <Star className="w-4 h-4 text-yellow-400 fill-yellow-400" />
                  <span className="font-black text-lg">{p.name}</span>
                </div>
                <p className="text-sm text-slate-400 leading-relaxed">{p.benefit}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Main Features Grid */}
      <section className="py-24 bg-slate-50">
        <div className="container px-4 mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {features.map((feature, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white p-10 rounded-[3rem] border border-slate-100 shadow-xl hover:shadow-2xl transition-all group"
              >
                <div className="w-16 h-16 bg-blue-50 rounded-2xl flex items-center justify-center mb-8 group-hover:bg-blue-600 group-hover:text-white transition-all">
                  {feature.icon}
                </div>
                <h3 className="text-2xl font-black text-slate-900 mb-4">{feature.title}</h3>
                <p className="text-slate-600 text-lg leading-relaxed">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 24h Promise Section */}
      <section className="py-24 bg-white overflow-hidden">
        <div className="container px-4 mx-auto">
          <div className="flex flex-col lg:flex-row items-center gap-20">
            <div className="flex-1 relative">
              <div className="absolute -inset-10 bg-blue-600/5 rounded-full blur-3xl animate-pulse" />
              <div className="relative z-10 p-12 bg-blue-600 rounded-[4rem] text-white shadow-3xl overflow-hidden">
                <div className="absolute top-0 right-0 p-10 opacity-10">
                  <Zap className="w-64 h-64" />
                </div>
                <h2 className="text-4xl md:text-5xl font-black mb-8 italic tracking-tighter">Sua empresa no ar <br /> enquanto o mundo dorme.</h2>
                <div className="space-y-6">
                  <div className="flex items-center gap-6 p-6 bg-white/10 rounded-3xl backdrop-blur-sm border border-white/20 transition-all hover:bg-white/20">
                    <div className="text-4xl font-black text-blue-200">01</div>
                    <div className="text-xl font-bold font-display tracking-tight">Briefing & Estratégia (30min)</div>
                  </div>
                  <div className="flex items-center gap-6 p-6 bg-white/10 rounded-3xl backdrop-blur-sm border border-white/20 transition-all hover:bg-white/20">
                    <div className="text-4xl font-black text-blue-200">02</div>
                    <div className="text-xl font-bold font-display tracking-tight">Desenvolvimento Acelerado</div>
                  </div>
                  <div className="flex items-center gap-6 p-6 bg-white/10 rounded-3xl backdrop-blur-sm border border-white/20 transition-all hover:bg-white/20">
                    <div className="text-4xl font-black text-blue-200">03</div>
                    <div className="text-xl font-bold font-display tracking-tight">Lançamento em 24 Horas</div>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex-1">
              <h2 className="text-4xl md:text-6xl font-black text-slate-900 mb-8 tracking-tighter leading-tight">Chega de perder tempo com <span className="text-blue-600">plataformas complexas.</span></h2>
              <p className="text-xl text-slate-600 leading-relaxed mb-10">
                Muitos autônomos travam na tecnologia. Nós removemos essa barreira. Entregamos tudo pronto, configurado e rodando para que sua única preocupação seja atender seus novos clientes.
              </p>
              <ul className="space-y-4 mb-12">
                {[
                  "Design Responsivo (Foco em Smartphones)",
                  "Estratégia de SEO integrada desde o dia 1",
                  "Treinamento rápido para usar seu CRM",
                  "Suporte humanizado via WhatsApp"
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-4 text-lg font-bold text-slate-700">
                    <div className="bg-green-100 p-1 rounded-full">
                      <Check className="w-4 h-4 text-green-600" />
                    </div>
                    {item}
                  </li>
                ))}
              </ul>
              <Button size="lg" className="h-16 px-10 text-xl font-black rounded-2xl bg-slate-900 hover:bg-black text-white" asChild>
                <a href="https://wa.me/5532991075164" target="_blank" rel="noopener noreferrer">
                  Falar com Roque Pro Agora
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-slate-50">
        <div className="container px-4 mx-auto max-w-5xl">
          <div className="bg-gradient-to-br from-blue-900 to-slate-900 rounded-[3rem] p-12 md:p-20 text-center relative overflow-hidden shadow-2xl">
            <div className="absolute top-0 left-0 w-full h-full opacity-10">
              <div className="absolute top-0 left-0 w-64 h-64 bg-blue-500 rounded-full -translate-x-1/2 -translate-y-1/2 blur-3xl" />
              <div className="absolute bottom-0 right-0 w-64 h-64 bg-blue-500 rounded-full translate-x-1/2 translate-y-1/2 blur-3xl" />
            </div>
            <div className="relative z-10">
              <h2 className="text-3xl md:text-5xl font-black text-white mb-8 tracking-tighter italic">"O amadorismo custa caro. O profissionalismo se paga."</h2>
              <p className="text-xl text-blue-100 mb-12 max-w-2xl mx-auto leading-relaxed">
                Não deixe para amanhã a autoridade digital que você pode ter hoje.
              </p>
              <Button size="lg" className="h-16 px-12 text-xl font-black rounded-2xl bg-white text-blue-900 hover:bg-blue-50 hover:scale-105 transition-all shadow-xl" asChild>
                <a href="https://wa.me/5532991075164" target="_blank" rel="noopener noreferrer">
                  Começar Minha Transformação Digital <ArrowRight className="ml-2 w-6 h-6" />
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
      <WhatsAppFloat />
    </div>
  );
};

export default Autonomos;
