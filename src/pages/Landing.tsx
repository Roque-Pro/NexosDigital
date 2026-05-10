import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { useSEO } from "@/hooks/useSEO";
import {
    Code2,
    Zap,
    TrendingUp,
    Check,
    ArrowRight,
    Sparkles,
    ArrowUp,
    Menu,
    X,
    Server,
    ShieldCheck,
    MousePointer2,
    BarChart3,
    Cpu,
    Database,
    Layers,
    Globe,
    MessageSquare,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import WhatsAppFloat from "@/components/WhatsAppFloat";

const Landing = () => {
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

    // SEO de Elite
    useSEO({
        title: "TechNexos Digital | Desenvolvimento, Tráfego Pago e SEO de Performance",
        description: "Transforme seu negócio com ecossistemas digitais de alta performance. Engenharia de Software, Gestão de Tráfego e SEO Técnico. A inteligência que escala negócios como o AutoClub Pro.",
        keywords: [
            "desenvolvimento de sistemas",
            "tráfego pago",
            "gestão de tráfego",
            "SEO técnico",
            "JSON-LD",
            "marketing de performance",
            "TechNexos Digital",
            "desenvolvimento react node"
        ],
        ogTitle: "TechNexos Digital | Performance & Tecnologia",
        ogDescription: "Desenvolvimento sob medida unido à inteligência de marketing. Escala real para sua empresa.",
        ogUrl: "https://www.technexos.com.br",
        canonicalUrl: "https://www.technexos.com.br",
        schema: {
            "@context": "https://schema.org",
            "@type": "ProfessionalService",
            "name": "TechNexos Digital",
            "description": "Engenharia de software e performance digital",
            "url": "https://www.technexos.com.br",
            "telephone": "+55-32-99107-5164",
            "areaServed": ["BR"],
            "offers": {
                "@type": "Offer",
                "name": "Ecossistemas Digitais de Performance"
            }
        }
    });

    return (
        <div className="min-h-screen bg-white text-slate-900 overflow-hidden font-sans">
            {/* Header */}
            <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md border-b border-slate-100 bg-white/80">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
                    <div className="flex items-center gap-2">
                        <div className="w-10 h-10 rounded-xl bg-blue-600 flex items-center justify-center shadow-lg shadow-blue-200">
                            <Code2 className="text-white w-6 h-6" />
                        </div>
                        <h1 className="text-xl font-black tracking-tighter">
                            TechNexos<span className="text-blue-600">Digital</span>
                        </h1>
                    </div>

                    <nav className="hidden md:flex items-center gap-8">
                        <button onClick={() => document.getElementById("servicos")?.scrollIntoView({ behavior: "smooth" })} className="text-sm font-bold text-slate-600 hover:text-blue-600 transition-colors">Serviços</button>
                        <button onClick={() => navigate("/about-me")} className="text-sm font-bold text-slate-600 hover:text-blue-600 transition-colors">Especialista</button>
                        <button onClick={() => document.getElementById("faq")?.scrollIntoView({ behavior: "smooth" })} className="text-sm font-bold text-slate-600 hover:text-blue-600 transition-colors">FAQ</button>
                        <Button 
                            onClick={() => window.open("https://wa.me/5532991075164")}
                            className="bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-full px-6"
                        >
                            Consultoria Grátis
                        </Button>
                    </nav>

                    <button className="md:hidden p-2" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
                        {mobileMenuOpen ? <X /> : <Menu />}
                    </button>
                </div>

                {/* Mobile Menu */}
                {mobileMenuOpen && (
                    <div className="md:hidden bg-white border-t border-slate-100 p-4 space-y-4 absolute w-full shadow-xl">
                        <button onClick={() => { document.getElementById("servicos")?.scrollIntoView({ behavior: "smooth" }); setMobileMenuOpen(false); }} className="block w-full text-left font-bold p-2 text-slate-700">Serviços</button>
                        <button onClick={() => { navigate("/about-me"); setMobileMenuOpen(false); }} className="block w-full text-left font-bold p-2 text-slate-700">Especialista</button>
                        <Button 
                            onClick={() => window.open("https://wa.me/5532991075164")}
                            className="w-full bg-blue-600 font-bold py-6"
                        >
                            Falar no WhatsApp
                        </Button>
                    </div>
                )}
            </header>

            {/* Hero Section */}
            <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 px-4">
                <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-50 text-blue-700 text-xs font-black uppercase tracking-widest mb-8 border border-blue-100">
                            <span className="relative flex h-2 w-2">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                                <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-600"></span>
                            </span>
                            Especialista em Escala Digital
                        </div>
                        <h2 className="text-5xl sm:text-6xl lg:text-8xl font-black leading-[0.95] tracking-tighter mb-8 italic">
                            Transformamos <span className="text-blue-600">Código</span> em <span className="underline decoration-blue-600 underline-offset-8">Lucro Real.</span>
                        </h2>
                        <p className="text-xl text-slate-600 leading-relaxed max-w-xl mb-10">
                            Engenharia de Software de elite unida à inteligência de <strong>Tráfego Pago</strong> e <strong>SEO Técnico</strong>. Desenvolvemos o ecossistema digital que faz o AutoClub Pro dominar o mercado e escalar com previsibilidade.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4">
                            <Button 
                                onClick={() => window.open("https://wa.me/5532991075164")}
                                size="lg"
                                className="bg-blue-600 hover:bg-blue-700 text-white font-black h-16 px-10 text-lg rounded-2xl shadow-xl shadow-blue-100 transition-all hover:scale-105"
                            >
                                Analisar meu Projeto <ArrowRight className="ml-2" />
                            </Button>
                            <Button 
                                onClick={() => document.getElementById("servicos")?.scrollIntoView({ behavior: "smooth" })}
                                size="lg"
                                variant="outline"
                                className="border-2 border-slate-200 font-bold h-16 px-10 text-lg rounded-2xl hover:bg-slate-50 transition-all"
                            >
                                Nossos Serviços
                            </Button>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 1 }}
                        className="relative"
                    >
                        <div className="relative z-10 rounded-[3rem] overflow-hidden shadow-[0_32px_64px_rgba(0,0,0,0.1)] border-8 border-white group">
                            <img 
                                src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2426&auto=format&fit=crop" 
                                alt="Performance Digital" 
                                className="w-full h-auto transition-transform duration-700 group-hover:scale-105"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-blue-900/40 via-transparent to-transparent opacity-60" />
                            
                            <div className="absolute bottom-8 left-8 right-8 bg-white/95 backdrop-blur-md p-6 rounded-3xl shadow-2xl border border-white/50">
                                <div className="flex items-center gap-4">
                                    <div className="w-12 h-12 rounded-full bg-blue-600 flex items-center justify-center text-white">
                                        <TrendingUp className="w-6 h-6" />
                                    </div>
                                    <div>
                                        <p className="text-xs font-bold text-blue-600 uppercase tracking-widest">Case de Sucesso</p>
                                        <p className="text-slate-900 font-black italic">Engenharia focada em ROI Real.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="absolute -top-12 -right-12 w-64 h-64 bg-blue-400/10 rounded-full blur-3xl -z-10" />
                        <div className="absolute -bottom-12 -left-12 w-64 h-64 bg-slate-400/10 rounded-full blur-3xl -z-10" />
                    </motion.div>
                </div>
            </section>

            {/* Pillars Section */}
            <section className="py-24 px-4 bg-white border-b border-slate-50">
                <div className="max-w-7xl mx-auto">
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
                        <motion.div 
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="space-y-6 p-8 rounded-[2.5rem] hover:bg-slate-50 transition-colors group"
                        >
                            <div className="w-14 h-14 rounded-2xl bg-blue-600 flex items-center justify-center text-white shadow-lg shadow-blue-100 group-hover:scale-110 transition-transform">
                                <ShieldCheck className="w-7 h-7" />
                            </div>
                            <h3 className="text-3xl font-black tracking-tighter">Engenharia de Estabilidade</h3>
                            <p className="text-slate-600 leading-relaxed">Não apenas "sites", mas infraestruturas robustas. Focamos em tempo de carregamento sub-segundo e disponibilidade 99.9% para que sua operação nunca pare.</p>
                        </motion.div>

                        <motion.div 
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.1 }}
                            className="space-y-6 p-8 rounded-[2.5rem] hover:bg-slate-50 transition-colors group"
                        >
                            <div className="w-14 h-14 rounded-2xl bg-blue-600 flex items-center justify-center text-white shadow-lg shadow-blue-100 group-hover:scale-110 transition-transform">
                                <BarChart3 className="w-7 h-7" />
                            </div>
                            <h3 className="text-3xl font-black tracking-tighter">Marketing de Dados</h3>
                            <p className="text-slate-600 leading-relaxed">Tráfego pago sem tracking é desperdício. Implementamos telemetria avançada para medir cada centavo investido e o retorno gerado (ROAS).</p>
                        </motion.div>

                        <motion.div 
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.2 }}
                            className="space-y-6 p-8 rounded-[2.5rem] hover:bg-slate-50 transition-colors group"
                        >
                            <div className="w-14 h-14 rounded-2xl bg-blue-600 flex items-center justify-center text-white shadow-lg shadow-blue-100 group-hover:scale-110 transition-transform">
                                <MousePointer2 className="w-7 h-7" />
                            </div>
                            <h3 className="text-3xl font-black tracking-tighter">Design Conversivo</h3>
                            <p className="text-slate-600 leading-relaxed">A estética a serviço da venda. Criamos interfaces intuitivas que guiam o usuário pelo funil de vendas, maximizando a taxa de conversão do seu tráfego.</p>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Services Section */}
            <section id="servicos" className="py-24 bg-slate-50 px-4">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-20">
                        <h3 className="text-4xl sm:text-6xl font-black tracking-tighter mb-6">A Solução <span className="text-blue-600">Ponta a Ponta.</span></h3>
                        <p className="text-xl text-slate-600 max-w-2xl mx-auto">A mesma inteligência técnica do AutoClub Pro aplicada ao seu negócio.</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <div className="bg-white p-10 rounded-[2.5rem] shadow-xl border border-slate-100 hover:border-blue-300 transition-all group">
                            <div className="w-16 h-16 rounded-2xl bg-blue-50 flex items-center justify-center text-blue-600 mb-8 group-hover:scale-110 transition-transform">
                                <Code2 className="w-8 h-8" />
                            </div>
                            <h4 className="text-2xl font-black mb-4">Desenvolvimento Web & SaaS</h4>
                            <p className="text-slate-600 leading-relaxed mb-8">Sistemas robustos, rápidos e escaláveis com React, Node.js e AWS.</p>
                            <ul className="space-y-3">
                                <li className="flex items-center gap-2 text-sm font-bold text-slate-500"><Check className="text-blue-600 w-4 h-4" /> Arquitetura de Software</li>
                                <li className="flex items-center gap-2 text-sm font-bold text-slate-500"><Check className="text-blue-600 w-4 h-4" /> Dashboards Customizados</li>
                            </ul>
                        </div>

                        <div className="bg-white p-10 rounded-[2.5rem] shadow-xl border border-slate-100 hover:border-blue-300 transition-all group">
                            <div className="w-16 h-16 rounded-2xl bg-blue-50 flex items-center justify-center text-blue-600 mb-8 group-hover:scale-110 transition-transform">
                                <Zap className="w-8 h-8" />
                            </div>
                            <h4 className="text-2xl font-black mb-4">Gestão de Tráfego Pago</h4>
                            <p className="text-slate-600 leading-relaxed mb-8">Campanhas de Google Ads e Meta Ads focadas 100% em lucro e escala.</p>
                            <ul className="space-y-3">
                                <li className="flex items-center gap-2 text-sm font-bold text-slate-500"><Check className="text-blue-600 w-4 h-4" /> Google Search de Elite</li>
                                <li className="flex items-center gap-2 text-sm font-bold text-slate-500"><Check className="text-blue-600 w-4 h-4" /> Tracking de Conversão</li>
                            </ul>
                        </div>

                        <div className="bg-white p-10 rounded-[2.5rem] shadow-xl border border-slate-100 hover:border-blue-300 transition-all group">
                            <div className="w-16 h-16 rounded-2xl bg-blue-50 flex items-center justify-center text-blue-600 mb-8 group-hover:scale-110 transition-transform">
                                <TrendingUp className="w-8 h-8" />
                            </div>
                            <h4 className="text-2xl font-black mb-4">SEO Técnico & Orgânico</h4>
                            <p className="text-slate-600 leading-relaxed mb-8">Domine o Google com dados estruturados JSON-LD e arquitetura de autoridade.</p>
                            <ul className="space-y-3">
                                <li className="flex items-center gap-2 text-sm font-bold text-slate-500"><Check className="text-blue-600 w-4 h-4" /> Indexação Semântica</li>
                                <li className="flex items-center gap-2 text-sm font-bold text-slate-500"><Check className="text-blue-600 w-4 h-4" /> Meta-Tags Premium</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            {/* Methodology Section */}
            <section className="py-24 bg-white px-4 overflow-hidden">
                <div className="max-w-7xl mx-auto">
                    <div className="flex flex-col lg:flex-row gap-16 items-center">
                        <div className="flex-1">
                            <h3 className="text-4xl sm:text-6xl font-black tracking-tighter mb-8 italic">Nossa <span className="text-blue-600">Metodologia.</span></h3>
                            <div className="space-y-12">
                                <div className="flex gap-6">
                                    <div className="flex-shrink-0 w-12 h-12 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center font-black">01</div>
                                    <div>
                                        <h4 className="text-xl font-black mb-2 uppercase tracking-tighter">Diagnóstico & Estratégia</h4>
                                        <p className="text-slate-600">Mapeamos seus processos e identificamos os canais com maior potencial de retorno imediato.</p>
                                    </div>
                                </div>
                                <div className="flex gap-6">
                                    <div className="flex-shrink-0 w-12 h-12 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center font-black">02</div>
                                    <div>
                                        <h4 className="text-xl font-black mb-2 uppercase tracking-tighter">Engenharia & Implementação</h4>
                                        <p className="text-slate-600">Desenvolvemos as ferramentas e configuramos as campanhas com foco total em performance técnica.</p>
                                    </div>
                                </div>
                                <div className="flex gap-6">
                                    <div className="flex-shrink-0 w-12 h-12 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center font-black">03</div>
                                    <div>
                                        <h4 className="text-xl font-black mb-2 uppercase tracking-tighter">Escala & Otimização</h4>
                                        <p className="text-slate-600">Analisamos os dados em tempo real para escalar o que funciona e ajustar o que pode ser melhorado.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="flex-1 relative">
                            <div className="bg-slate-900 rounded-[3rem] p-8 sm:p-12 shadow-2xl text-white">
                                <div className="flex items-center gap-4 mb-8">
                                    <div className="w-3 h-3 rounded-full bg-red-500" />
                                    <div className="w-3 h-3 rounded-full bg-yellow-500" />
                                    <div className="w-3 h-3 rounded-full bg-green-500" />
                                </div>
                                <div className="space-y-6 font-mono text-sm sm:text-base">
                                    <p className="text-blue-400"># Analisando métricas de performance...</p>
                                    <p className="text-green-400">$ tech-nexos optimize --project="autoclub-pro"</p>
                                    <p className="text-slate-400">>> Carregando dados estruturados...</p>
                                    <p className="text-slate-400">>> Verificando Core Web Vitals...</p>
                                    <p className="text-white font-bold">LCP: 0.8s (Excelente)</p>
                                    <p className="text-white font-bold">ROAS: 4.8x (Escalando...)</p>
                                    <div className="w-full bg-slate-800 h-2 rounded-full overflow-hidden">
                                        <motion.div 
                                            initial={{ width: 0 }}
                                            whileInView={{ width: "100%" }}
                                            transition={{ duration: 2 }}
                                            className="bg-blue-500 h-full"
                                        />
                                    </div>
                                    <p className="text-blue-400 italic">// Sucesso: Ecossistema otimizado para lucro.</p>
                                </div>
                            </div>
                            <div className="absolute -z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-blue-100 rounded-full blur-[120px] opacity-50" />
                        </div>
                    </div>
                </div>
            </section>

            {/* Tech Stack Section */}
            <section className="py-24 bg-slate-50 px-4">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-16">
                        <h3 className="text-3xl sm:text-5xl font-black tracking-tighter mb-4">Stack de <span className="text-blue-600">Elite.</span></h3>
                        <p className="text-slate-600">As tecnologias que garantem sua vantagem competitiva.</p>
                    </div>
                    <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
                        {[
                            { icon: Cpu, name: "React / Next.js", desc: "Frontend Ultra Rápido" },
                            { icon: Server, name: "Node.js", desc: "Backend Escalável" },
                            { icon: Database, name: "Supabase / SQL", desc: "Dados Seguros" },
                            { icon: Layers, name: "Tailwind CSS", desc: "Design Moderno" },
                            { icon: Globe, name: "Vercel / AWS", desc: "Cloud de Alta Performance" },
                            { icon: MessageSquare, name: "WhatsApp API", desc: "Automação de Vendas" },
                        ].map((tech, i) => (
                            <motion.div 
                                key={i}
                                initial={{ opacity: 0, scale: 0.9 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.05 }}
                                className="bg-white p-6 rounded-3xl border border-slate-100 shadow-sm hover:shadow-md transition-shadow text-center"
                            >
                                <tech.icon className="w-8 h-8 mx-auto mb-4 text-blue-600" />
                                <p className="font-black text-sm mb-1">{tech.name}</p>
                                <p className="text-[10px] text-slate-400 uppercase font-bold tracking-widest">{tech.desc}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Final */}
            <section className="py-24 px-4 bg-blue-600 relative overflow-hidden">
                <div className="max-w-4xl mx-auto text-center relative z-10 text-white">
                    <Sparkles className="w-12 h-12 mx-auto mb-8 text-blue-200" />
                    <h3 className="text-4xl sm:text-6xl font-black mb-8 tracking-tighter">Pronto para dominar seu mercado?</h3>
                    <p className="text-xl text-blue-100 mb-12 max-w-2xl mx-auto italic">"Unimos engenharia e performance para transformar código em lucro real."</p>
                    <Button 
                        onClick={() => window.open("https://wa.me/5532991075164")}
                        size="lg"
                        className="bg-white text-blue-600 hover:bg-blue-50 font-black h-20 px-16 text-xl rounded-[2rem] shadow-2xl transition-all hover:scale-105"
                    >
                        Falar com o Especialista no WhatsApp
                    </Button>
                </div>
                <div className="absolute top-0 right-0 -mr-32 -mt-32 w-96 h-96 bg-white/10 rounded-full blur-3xl"></div>
                <div className="absolute bottom-0 left-0 -ml-32 -mb-32 w-96 h-96 bg-black/10 rounded-full blur-3xl"></div>
            </section>

            {/* FAQ Section */}
            <section id="faq" className="py-24 bg-white px-4">
                <div className="max-w-3xl mx-auto">
                    <div className="text-center mb-16">
                        <h3 className="text-3xl sm:text-5xl font-black tracking-tighter mb-4 italic">Dúvidas <span className="text-blue-600">Frequentes.</span></h3>
                        <p className="text-slate-600">Transparência total desde o primeiro contato.</p>
                    </div>

                    <Accordion type="single" collapsible className="w-full space-y-4">
                        <AccordionItem value="item-1" className="border border-slate-200 rounded-3xl px-6 py-2 overflow-hidden bg-slate-50/50">
                            <AccordionTrigger className="hover:no-underline font-black text-left text-slate-800">Como funciona o diagnóstico gratuito?</AccordionTrigger>
                            <AccordionContent className="text-slate-600 leading-relaxed">
                                Analisamos sua presença digital atual, identificamos gargalos técnicos e de marketing, e entregamos um plano de ação personalizado. Sem compromisso.
                            </AccordionContent>
                        </AccordionItem>
                        <AccordionItem value="item-2" className="border border-slate-200 rounded-3xl px-6 py-2 overflow-hidden bg-slate-50/50">
                            <AccordionTrigger className="hover:no-underline font-black text-left text-slate-800">Quanto tempo leva para ver resultados?</AccordionTrigger>
                            <AccordionContent className="text-slate-600 leading-relaxed">
                                Campanhas de tráfego pago geram leads em dias. Otimizações de SEO e performance técnica levam de 4 a 12 semanas para maturação completa no Google.
                            </AccordionContent>
                        </AccordionItem>
                        <AccordionItem value="item-3" className="border border-slate-200 rounded-3xl px-6 py-2 overflow-hidden bg-slate-50/50">
                            <AccordionTrigger className="hover:no-underline font-black text-left text-slate-800">Vocês atendem qualquer tipo de negócio?</AccordionTrigger>
                            <AccordionContent className="text-slate-600 leading-relaxed">
                                Focamos em empresas que buscam escala através de tecnologia e marketing de performance. Nosso expertise é maior em SaaS, E-commerce e Serviços de alto valor agregado.
                            </AccordionContent>
                        </AccordionItem>
                        <AccordionItem value="item-4" className="border border-slate-200 rounded-3xl px-6 py-2 overflow-hidden bg-slate-50/50">
                            <AccordionTrigger className="hover:no-underline font-black text-left text-slate-800">O que é SEO Técnico?</AccordionTrigger>
                            <AccordionContent className="text-slate-600 leading-relaxed">
                                É a otimização da infraestrutura do site (velocidade, dados estruturados, indexação) para garantir que o Google entenda e priorize seu conteúdo nas buscas.
                            </AccordionContent>
                        </AccordionItem>
                    </Accordion>
                </div>
            </section>

            {/* Footer Simple */}
            <footer className="py-12 bg-white border-t border-slate-100 text-center px-4">
                <div className="max-w-7xl mx-auto">
                    <div className="flex items-center justify-center gap-2 mb-6">
                        <div className="w-8 h-8 rounded-lg bg-blue-600 flex items-center justify-center">
                            <Code2 className="text-white w-5 h-5" />
                        </div>
                        <p className="font-black text-lg">TechNexos<span className="text-blue-600">Digital</span></p>
                    </div>
                    <p className="text-slate-400 text-sm">© 2026 TechNexos Digital. Tecnologia & Performance.</p>
                </div>
            </footer>

            {showScrollTop && (
                <motion.button
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    onClick={scrollToTop}
                    className="fixed bottom-8 right-8 p-4 bg-blue-600 text-white rounded-full shadow-2xl hover:bg-blue-700 transition-all z-50"
                >
                    <ArrowUp className="w-6 h-6" />
                </motion.button>
            )}

            <WhatsAppFloat />
        </div>
    );
};

export default Landing;
