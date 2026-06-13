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
  ArrowRight
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { useSEO } from "@/hooks/useSEO";
import BlogNavbar from "@/components/BlogNavbar";
import Footer from "@/components/Footer";
import WhatsAppFloat from "@/components/WhatsAppFloat";

const Autonomos = () => {
  useSEO({
    title: "Soluções para Autônomos | Página, Blog e CRM em 24h | TechNexos",
    description: "Profissionalize seu trabalho autônomo. Tenha uma página de alta conversão, blog para SEO e CRM para gestão de clientes em apenas 24 horas.",
    keywords: [
      "site para autônomos",
      "página de vendas 24h",
      "CRM para profissionais liberais",
      "blog para autônomos",
      "presença digital rápida"
    ],
  });

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const features = [
    {
      title: "Página de Alta Conversão",
      description: "Uma landing page otimizada para transformar visitantes em clientes, com design premium e foco total na sua autoridade.",
      icon: <Globe className="w-8 h-8 text-blue-600" />
    },
    {
      title: "Blog Integrado para SEO",
      description: "Compartilhe seu conhecimento e atraia tráfego orgânico do Google com um blog moderno e fácil de gerenciar.",
      icon: <TrendingUp className="w-8 h-8 text-blue-600" />
    },
    {
      title: "CRM de Gestão",
      description: "Não perca nenhum lead. Gerencie seus contatos, agendamentos e histórico de clientes em um só lugar.",
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
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-100 text-blue-700 font-bold text-sm mb-6 animate-pulse">
                <Clock className="w-4 h-4" /> ENTREGA EM ATÉ 24 HORAS
              </div>
              <h1 className="text-5xl md:text-7xl font-black tracking-tighter text-slate-900 mb-8 leading-[0.95]">
                Sua Presença Digital <br />
                <span className="text-blue-600 underline decoration-blue-200 underline-offset-8">Completa & Profissional</span>
              </h1>
              <p className="text-xl md:text-2xl text-slate-600 leading-relaxed max-w-2xl mb-12">
                Para você que é autônomo e não tem tempo a perder. Página de Vendas, Blog e CRM integrados para você focar no que faz de melhor: <span className="font-bold text-slate-900 italic">seu trabalho.</span>
              </p>
              <div className="flex flex-col sm:flex-row items-center gap-6">
                <Button size="lg" className="h-16 px-10 text-xl font-black rounded-2xl bg-blue-600 hover:bg-blue-700 shadow-xl shadow-blue-200 transition-all hover:scale-105 gap-3" asChild>
                  <a href="https://wa.me/5532991075164" target="_blank" rel="noopener noreferrer">
                    Quero Meu Ecossistema Digital <Rocket className="w-6 h-6" />
                  </a>
                </Button>
                <div className="flex items-center gap-3 text-slate-500 font-bold">
                  <ShieldCheck className="w-6 h-6 text-green-500" />
                  Sem Mensalidades Abusivas
                </div>
              </div>
            </motion.div>
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
                <h2 className="text-4xl md:text-5xl font-black mb-8 italic tracking-tighter">O Relógio não para, <br /> seu negócio também não.</h2>
                <div className="space-y-6">
                  <div className="flex items-center gap-6 p-6 bg-white/10 rounded-3xl backdrop-blur-sm border border-white/20 transition-all hover:bg-white/20">
                    <div className="text-4xl font-black text-blue-200">01</div>
                    <div className="text-xl font-bold">Diagnóstico em 30min</div>
                  </div>
                  <div className="flex items-center gap-6 p-6 bg-white/10 rounded-3xl backdrop-blur-sm border border-white/20 transition-all hover:bg-white/20">
                    <div className="text-4xl font-black text-blue-200">02</div>
                    <div className="text-xl font-bold">Produção Acelerada</div>
                  </div>
                  <div className="flex items-center gap-6 p-6 bg-white/10 rounded-3xl backdrop-blur-sm border border-white/20 transition-all hover:bg-white/20">
                    <div className="text-4xl font-black text-blue-200">03</div>
                    <div className="text-xl font-bold">No Ar em 24 Horas</div>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex-1">
              <h2 className="text-4xl md:text-6xl font-black text-slate-900 mb-8 tracking-tighter">Por que esperar semanas se podemos fazer <span className="text-blue-600">HOJE?</span></h2>
              <p className="text-xl text-slate-600 leading-relaxed mb-10">
                Sabemos que cada dia sem uma presença digital profissional é um dia de oportunidades perdidas. Nossa metodologia ágil foi desenhada especificamente para autônomos que precisam de resultados imediatos.
              </p>
              <ul className="space-y-4 mb-12">
                {[
                  "Design Responsivo para Celular",
                  "Configuração de Domínio Personalizado",
                  "Otimização de Velocidade (Páginas Instantâneas)",
                  "Botões Diretos para seu WhatsApp"
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-4 text-lg font-bold text-slate-700">
                    <CheckCircle2 className="w-6 h-6 text-green-500" />
                    {item}
                  </li>
                ))}
              </ul>
              <Button size="lg" className="h-16 px-10 text-xl font-black rounded-2xl bg-slate-900 hover:bg-black text-white" asChild>
                <a href="https://wa.me/5532991075164" target="_blank" rel="noopener noreferrer">
                  Falar com Especialista Agora
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
              <h2 className="text-3xl md:text-5xl font-black text-white mb-8 tracking-tighter italic">"Profissionalize sua presença antes que seu concorrente o faça."</h2>
              <p className="text-xl text-blue-100 mb-12 max-w-2xl mx-auto leading-relaxed">
                Pare de ser 'só um autônomo'. Torne-se uma autoridade digital em 24 horas.
              </p>
              <Button size="lg" className="h-16 px-12 text-xl font-black rounded-2xl bg-white text-blue-900 hover:bg-blue-50 hover:scale-105 transition-all shadow-xl" asChild>
                <a href="https://wa.me/5532991075164" target="_blank" rel="noopener noreferrer">
                  Começar Minha Transformação <ArrowRight className="ml-2 w-6 h-6" />
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
