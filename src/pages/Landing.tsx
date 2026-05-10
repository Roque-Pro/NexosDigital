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
} from "lucide-react";
import { Button } from "@/components/ui/button";
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
                        <h2 className="text-5xl sm:text-6xl lg:text-8xl font-black leading-[0.95] tracking-tighter mb-8">
                            Seu ecossistema de vendas com <span className="text-blue-600">Alta Performance.</span>
                        </h2>
                        <p className="text-xl text-slate-600 leading-relaxed max-w-xl mb-10">
                            Engenharia de Software de elite unida à inteligência de <strong>Tráfego Pago</strong> e <strong>SEO Técnico</strong>. Desenvolvemos o sistema e a estratégia que fazem o AutoClub Pro dominar o mercado.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4">
                            <Button 
                                onClick={() => window.open("https://wa.me/5532991075164")}
                                size="lg"
                                className="bg-blue-600 hover:bg-blue-700 text-white font-black h-16 px-10 text-lg rounded-2xl shadow-xl shadow-blue-100 transition-all hover:scale-105"
                            >
                                Escalar meu Negócio <ArrowRight className="ml-2" />
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
