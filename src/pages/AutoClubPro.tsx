import { useState, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { useSEO } from "@/hooks/useSEO";
import { Button } from "@/components/ui/button";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import Footer from "@/components/Footer";
import WhatsAppFloat from "@/components/WhatsAppFloat";
import YouTubeVideosSection from "@/components/YouTubeVideosSection";
import BlogSection from "@/components/BlogSection";
import AutoClubProFeatures from "@/components/AutoClubProFeatures";
import logoClubeImg from "@/img/logo-autocub.png";
import clienteImg from "@/img/cliente.png";
import reparoVidrosImg from "@/img/reparo-de-vidros.png";
import autoCenterImg from "@/img/auto-center.png";
import esteticaAutomotivaImg from "@/img/Estética Automotiva.png";
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
    Car,
    Menu,
    X,
    Headphones,
    Code2,
    ChevronDown,
} from "lucide-react";

const AutoClubPro = () => {
    const navigate = useNavigate();
    const [selectedImage, setSelectedImage] = useState<string | null>(null);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    const solutions = [
        { label: "AutoClub Pro", href: "/autoclub-pro", isExternal: false },
        { label: "Autônomos", href: "/autonomos", isExternal: false },
        { label: "Social Jurídico", href: "https://www.socialjuridico.com.br", isExternal: true },
        { label: "Fisio+", href: "https://fisiomais-iota.vercel.app/", isExternal: true },
        { label: "Eu Faço", href: "https://eu-faco-mu.vercel.app/", isExternal: true },
    ];

    // SEO
    useSEO({
        title: "AutoClub Pro | Sistema com Personalização Visual para Serviços Automotivos | TechNexos",
        description: "AutoClub Pro - Sistema de gestão com personalização visual 100% para vidraçarias, estética, películas, som, capotaria, ar-condicionado e pneuarias. Com identidade visual da sua marca. R$ 1.258 implementação + R$ 89/mês. 3 meses de suporte grátis.",
        keywords: [
            "autoclub pro",
            "sistema gestão automotivo",
            "software vidraçaria",
            "sistema estética automotiva",
            "agendamentos online",
            "gestão comissões",
            "controle estoque automotivo",
        ],
        ogTitle: "AutoClub Pro | Personalização Visual para Seu Negócio Automotivo",
        ogDescription: "Sistema especializado para serviços automotivos com identidade visual da sua marca. Não é genérico. É seu.",
        ogUrl: "https://www.technexos.com.br/autoclub-pro",
        twitterTitle: "AutoClub Pro - Personalização Visual para Serviços Automotivos",
        twitterDescription: "Sistema de agendamentos, vendas e gestão com a cara da sua empresa.",
        canonicalUrl: "https://www.technexos.com.br/autoclub-pro",
        schema: {
            "@context": "https://schema.org",
            "@type": "SoftwareApplication",
            "name": "AutoClub Pro",
            "description": "Sistema de gestão com personalização visual para serviços automotivos",
            "url": "https://www.technexos.com.br/autoclub-pro",
            "offers": {
                "@type": "Offer",
                "price": "1258",
                "priceCurrency": "BRL",
                "description": "AutoClub Pro - R$ 1.258 implementação + R$ 89/mês",
            }
        }
    });

    return (
        <div className="min-h-screen bg-white text-gray-900">
            <header className="fixed left-0 right-0 top-0 z-50 border-b border-slate-100 bg-white/80 backdrop-blur-md">
                <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
                    <button
                        onClick={() => navigate("/")}
                        className="flex items-center gap-2 transition-opacity hover:opacity-80"
                    >
                        <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-600 shadow-lg shadow-blue-200">
                            <Code2 className="h-6 w-6 text-white" />
                        </div>
                        <h1 className="text-xl font-black tracking-tighter">
                            TechNexos<span className="text-blue-600">Digital</span>
                        </h1>
                    </button>

                    <nav className="hidden items-center gap-8 md:flex">
                        <button
                            onClick={() => navigate("/")}
                            className="text-sm font-bold text-slate-600 transition-colors hover:text-blue-600"
                        >
                            Página Principal
                        </button>
                        <button
                            onClick={() => navigate("/about-me")}
                            className="text-sm font-bold text-slate-600 transition-colors hover:text-blue-600"
                        >
                            Especialista
                        </button>
                        <DropdownMenu>
                            <DropdownMenuTrigger asChild>
                                <button className="flex items-center gap-1 text-sm font-bold text-blue-600 transition-colors hover:text-blue-700 outline-none">
                                    Soluções <ChevronDown className="h-4 w-4" />
                                </button>
                            </DropdownMenuTrigger>
                            <DropdownMenuContent align="start" className="w-48">
                                {solutions.map((sub) => (
                                    <DropdownMenuItem key={sub.label} asChild>
                                        {sub.isExternal ? (
                                            <a href={sub.href} target="_blank" rel="noopener noreferrer" className="w-full cursor-pointer font-medium">
                                                {sub.label}
                                            </a>
                                        ) : (
                                            <Link to={sub.href} className="w-full cursor-pointer font-medium">
                                                {sub.label}
                                            </Link>
                                        )}
                                    </DropdownMenuItem>
                                ))}
                            </DropdownMenuContent>
                        </DropdownMenu>
                        <button
                            onClick={() => navigate("/consultoria-totvs")}
                            className="text-sm font-bold text-slate-600 transition-colors hover:text-blue-600"
                        >
                            Consultoria TOTVS
                        </button>
                        <button
                            onClick={() => navigate("/blog")}
                            className="text-sm font-bold text-slate-600 transition-colors hover:text-blue-600"
                        >
                            Blog
                        </button>
                        <Button
                            onClick={() => navigate("/diagnostico-gratuito")}
                            variant="outline"
                            className="rounded-full border-blue-200 bg-blue-50 px-6 font-bold text-blue-700 hover:bg-blue-100 hover:text-blue-800"
                        >
                            Diagnóstico Gratuito
                        </Button>
                    </nav>

                    <button className="p-2 md:hidden" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
                        {mobileMenuOpen ? <X /> : <Menu />}
                    </button>
                </div>

                {mobileMenuOpen && (
                    <div className="absolute w-full space-y-4 border-t border-slate-100 bg-white p-4 shadow-xl md:hidden">
                        <button
                            onClick={() => {
                                navigate("/");
                                setMobileMenuOpen(false);
                            }}
                            className="block w-full p-2 text-left font-bold text-slate-700"
                        >
                            Página Principal
                        </button>
                        <button
                            onClick={() => {
                                navigate("/about-me");
                                setMobileMenuOpen(false);
                            }}
                            className="block w-full p-2 text-left font-bold text-slate-700"
                        >
                            Especialista
                        </button>
                        
                        {/* Mobile Solutions */}
                        <div className="flex flex-col gap-1 py-2 border-y border-slate-50">
                            <span className="px-2 text-[10px] font-black text-slate-400 uppercase tracking-widest mb-1">Soluções</span>
                            {solutions.map((sub) => (
                                sub.isExternal ? (
                                    <a
                                        key={sub.label}
                                        href={sub.href}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        onClick={() => setMobileMenuOpen(false)}
                                        className="block w-full p-2 text-left font-bold text-slate-700 hover:text-blue-600"
                                    >
                                        {sub.label}
                                    </a>
                                ) : (
                                    <button
                                        key={sub.label}
                                        onClick={() => {
                                            navigate(sub.href);
                                            setMobileMenuOpen(false);
                                        }}
                                        className="block w-full p-2 text-left font-bold text-slate-700 hover:text-blue-600"
                                    >
                                        {sub.label}
                                    </button>
                                )
                            ))}
                        </div>

                        <button
                            onClick={() => {
                                navigate("/consultoria-totvs");
                                setMobileMenuOpen(false);
                            }}
                            className="block w-full p-2 text-left font-bold text-slate-700"
                        >
                            Consultoria TOTVS
                        </button>
                        <button
                            onClick={() => {
                                navigate("/blog");
                                setMobileMenuOpen(false);
                            }}
                            className="block w-full p-2 text-left font-bold text-slate-700"
                        >
                            Blog
                        </button>
                        <Button
                            onClick={() => {
                                navigate("/diagnostico-gratuito");
                                setMobileMenuOpen(false);
                            }}
                            variant="outline"
                            className="w-full border-blue-200 bg-blue-50 py-6 font-bold text-blue-700 hover:bg-blue-100 hover:text-blue-800"
                        >
                            Diagnóstico Gratuito
                        </Button>
                    </div>
                )}
            </header>
            <main>
                {/* HERO SECTION */}
                <section className="relative bg-white pt-24 pb-24 px-4 sm:px-6 lg:px-8 overflow-hidden">
                    {/* Background decoration */}
                    <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/4 w-[600px] h-[600px] bg-blue-50 rounded-full blur-3xl opacity-50 -z-10" />
                    <div className="absolute bottom-0 left-0 translate-y-1/2 -translate-x-1/4 w-[400px] h-[400px] bg-slate-50 rounded-full blur-3xl opacity-50 -z-10" />

                    <div className="max-w-7xl mx-auto">
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center min-h-[700px]">
                            {/* Left: Text */}
                            <div className="relative z-10">
                                <motion.div
                                    initial={{ opacity: 0, x: -20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ duration: 0.5 }}
                                    className="mb-8"
                                >
                                    <img src={logoClubeImg} alt="AutoClub Pro" className="h-28 md:h-32 mb-6" />
                                </motion.div>

                                <motion.h1
                                    className="text-5xl sm:text-6xl lg:text-7xl font-black leading-[1.05] mb-8 tracking-tighter text-gray-900"
                                    initial={{ opacity: 0, y: 30 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.7, ease: "easeOut", delay: 0.2 }}
                                >
                                    O Sistema de Gestão <br />
                                    <span className="relative inline-block">
                                        <span className="text-blue-600">Automotiva</span>
                                        <motion.span
                                            className="absolute -bottom-2 left-0 h-2 rounded-full bg-blue-600/20"
                                            initial={{ width: 0 }}
                                            animate={{ width: "100%" }}
                                            transition={{ delay: 1, duration: 0.8, ease: "easeOut" }}
                                        />
                                    </span> com a sua marca.
                                </motion.h1>

                                <motion.p 
                                    className="text-xl text-gray-600 mb-10 leading-relaxed max-w-xl"
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    transition={{ delay: 0.4, duration: 0.8 }}
                                >
                                    Pare de usar softwares genéricos. O AutoClub Pro é a solução de elite para <strong>Vidros, Som, Estética e Centros Automotivos</strong> que carrega a sua identidade visual e profissionaliza sua operação.
                                </motion.p>

                                {/* Benefits Grid - NICHOS */}
                                <motion.div 
                                    className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-12"
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.6, duration: 0.6 }}
                                >
                                    <div className="flex items-start gap-4">
                                        <div className="w-12 h-12 rounded-2xl bg-blue-50 flex items-center justify-center text-blue-600 flex-shrink-0 shadow-sm group-hover:bg-blue-600 group-hover:text-white transition-all">
                                            <Zap className="w-6 h-6" />
                                        </div>
                                        <div>
                                            <p className="font-bold text-gray-900">Vidros Automotivos</p>
                                            <p className="text-sm text-gray-600">Gestão completa de estoque e serviços de vidraçaria.</p>
                                        </div>
                                    </div>
                                    <div className="flex items-start gap-4">
                                        <div className="w-12 h-12 rounded-2xl bg-blue-50 flex items-center justify-center text-blue-600 flex-shrink-0 shadow-sm">
                                            <Headphones className="w-6 h-6" />
                                        </div>
                                        <div>
                                            <p className="font-bold text-gray-900">Som & Acessórios</p>
                                            <p className="text-sm text-gray-600">Controle de instalações e comissões de equipe.</p>
                                        </div>
                                    </div>
                                    <div className="flex items-start gap-4">
                                        <div className="w-12 h-12 rounded-2xl bg-blue-50 flex items-center justify-center text-blue-600 flex-shrink-0 shadow-sm">
                                            <Star className="w-6 h-6" />
                                        </div>
                                        <div>
                                            <p className="font-bold text-gray-900">Estética Automotiva</p>
                                            <p className="text-sm text-gray-600">Agendamentos VIP e detalhamento de serviços.</p>
                                        </div>
                                    </div>
                                    <div className="flex items-start gap-4">
                                        <div className="w-12 h-12 rounded-2xl bg-blue-50 flex items-center justify-center text-blue-600 flex-shrink-0 shadow-sm">
                                            <Car className="w-6 h-6" />
                                        </div>
                                        <div>
                                            <p className="font-bold text-gray-900">Pneus & Mecânica</p>
                                            <p className="text-sm text-gray-600">Check-list digital e histórico completo por placa.</p>
                                        </div>
                                    </div>
                                </motion.div>

                                {/* CTA */}
                                <motion.div 
                                    className="flex flex-col sm:flex-row gap-4"
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.8, duration: 0.6 }}
                                >
                                    <Button 
                                        size="lg"
                                        className="bg-blue-600 hover:bg-blue-700 text-white font-bold px-10 py-7 text-lg rounded-xl shadow-lg shadow-blue-200 transition-all hover:scale-105"
                                        onClick={() => document.getElementById("pricing")?.scrollIntoView({ behavior: "smooth" })}
                                    >
                                        Ver Planos <ArrowRight className="ml-2 w-5 h-5" />
                                    </Button>
                                    <Button 
                                        size="lg"
                                        variant="outline"
                                        className="border-2 border-gray-200 hover:bg-gray-50 text-gray-900 font-bold px-10 py-7 text-lg rounded-xl transition-all"
                                        onClick={() => window.open("https://wa.me/5532991075164")}
                                    >
                                        💬 Consultoria Grátis
                                    </Button>
                                </motion.div>
                            </div>

                            {/* Right: Image / Visual */}
                            <motion.div 
                                className="relative"
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ delay: 0.5, duration: 1, ease: "easeOut" }}
                            >
                                <div className="relative z-10 rounded-[2.5rem] overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.15)] border-8 border-white group">
                                    <img 
                                        src={clienteImg} 
                                        alt="Auto Center Profissional" 
                                        className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-105"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-blue-900/40 via-transparent to-transparent opacity-60" />
                                    
                                    {/* Floating elements */}
                                    <div className="absolute bottom-8 left-8 right-8 bg-white/90 backdrop-blur-md p-6 rounded-2xl shadow-xl border border-white/50">
                                        <div className="flex items-center gap-4">
                                            <div className="w-12 h-12 rounded-full bg-blue-600 flex items-center justify-center text-white">
                                                <TrendingUp className="w-6 h-6" />
                                            </div>
                                            <div>
                                                <p className="text-xs font-bold text-blue-600 uppercase tracking-wider">Resultado Real</p>
                                                <p className="text-gray-900 font-bold italic leading-tight">"O sistema mudou a percepção dos meus clientes sobre a minha oficina."</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                
                                {/* Decorative elements */}
                                <div className="absolute -top-10 -right-10 w-40 h-40 bg-blue-600/10 rounded-full blur-3xl animate-pulse" />
                                <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-slate-600/10 rounded-full blur-3xl animate-pulse" />
                            </motion.div>
                        </div>
                    </div>
                </section>

                {/* COOPERATIVAS & ESTRUTURA SECTION */}
                <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white border-b border-gray-200">
                    <div className="max-w-6xl mx-auto">
                        <div className="text-center mb-16">
                            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-gray-900 mb-6">
                                Quer pegar serviços de <span className="text-blue-600">Cooperativas?</span>
                            </h2>
                            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                                Para ser um parceiro de grandes cooperativas e seguradoras, sua oficina precisa demonstrar muito mais que técnica: você precisa de <span className="font-bold text-gray-900">organização, estrutura e transparência.</span>
                            </p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                            <div className="text-center p-6">
                                <div className="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center text-blue-600 mx-auto mb-6">
                                    <BarChart3 className="w-8 h-8" />
                                </div>
                                <h3 className="text-xl font-bold mb-3 text-gray-900">Histórico impecável</h3>
                                <p className="text-gray-600">
                                    Cooperativas exigem rastreabilidade. Com o AutoClub Pro, você apresenta relatórios detalhados de cada veículo em segundos.
                                </p>
                            </div>
                            <div className="text-center p-6">
                                <div className="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center text-blue-600 mx-auto mb-6">
                                    <Users className="w-8 h-8" />
                                </div>
                                <h3 className="text-xl font-bold mb-3 text-gray-900">Estrutura Profissional</h3>
                                <p className="text-gray-600">
                                    Mostre que seu negócio é uma empresa séria. Um sistema organizado passa a confiança necessária para fechar contratos recorrentes.
                                </p>
                            </div>
                            <div className="text-center p-6">
                                <div className="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center text-blue-600 mx-auto mb-6">
                                    <Zap className="w-8 h-8" />
                                </div>
                                <h3 className="text-xl font-bold mb-3 text-gray-900">Agilidade no Check-in</h3>
                                <p className="text-gray-600">
                                    Receba o veículo e já abra a ordem de serviço digital na frente do perito ou do cliente, demonstrando controle total.
                                </p>
                            </div>
                        </div>

                        <div className="mt-16 bg-slate-900 rounded-3xl p-8 md:p-12 text-white relative overflow-hidden">
                            <div className="relative z-10 flex flex-col md:flex-row items-center gap-8">
                                <div className="flex-1 text-center md:text-left">
                                    <h3 className="text-2xl md:text-3xl font-bold mb-4">Prepare sua empresa para o próximo nível</h3>
                                    <p className="text-gray-300 text-lg">
                                        As cooperativas não escolhem apenas quem conserta bem, elas escolhem quem não dá dor de cabeça na gestão dos sinistros.
                                    </p>
                                </div>
                                <div className="flex-shrink-0">
                                    <Button 
                                        size="lg"
                                        className="bg-blue-600 hover:bg-blue-700 text-white font-bold px-8 py-6"
                                        onClick={() => window.open("https://wa.me/5532991075164")}
                                    >
                                        Quero estruturar meu negócio
                                    </Button>
                                </div>
                            </div>
                            {/* Abstract background element */}
                            <div className="absolute top-0 right-0 -mr-20 -mt-20 w-64 h-64 bg-blue-600/10 rounded-full blur-3xl"></div>
                        </div>
                    </div>
                </section>

                {/* PERSONALIZAÇÃO SECTION */}
                <section className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-blue-50 to-slate-50 relative overflow-hidden">
                    <div className="max-w-6xl mx-auto">
                        <div className="text-center mb-16">
                            <h2 className="text-4xl sm:text-5xl font-black text-gray-900 mb-6 tracking-tight">
                                White-Label Real: O Sistema é <span className="text-blue-600">100% SEU</span>
                            </h2>
                            <p className="text-gray-600 max-w-2xl mx-auto text-xl leading-relaxed">
                                Chega de usar sistemas genéricos que fazem propaganda para os outros. No AutoClub Pro, sua marca é a única protagonista.
                            </p>
                        </div>

                        {/* 3 Images Grid */}
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
                            {[
                                { img: reparoVidrosImg, title: "Sua Logo Aqui" },
                                { img: autoCenterImg, title: "Suas Cores" },
                                { img: esteticaAutomotivaImg, title: "Sua Autoridade" }
                            ].map((item, idx) => (
                                <div key={idx} className="group cursor-pointer" onClick={() => setSelectedImage(item.img)}>
                                    <div className="relative h-48 md:h-64 bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all border border-gray-100 flex items-center justify-center">
                                        <img 
                                            src={item.img} 
                                            alt={item.title} 
                                            className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-500"
                                        />
                                        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors" />
                                    </div>
                                    <p className="mt-4 font-bold text-gray-900 text-lg">
                                        {item.title}
                                    </p>
                                </div>
                            ))}
                        </div>

                        {/* Features Grid */}
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                            {[
                                {
                                    title: "Fim da Propaganda Grátis",
                                    desc: "Pare de usar softwares que estampam logos de terceiros. Seu cliente verá apenas a SUA marca em cada tela."
                                },
                                {
                                    title: "Personalização Visual Total",
                                    desc: "Adaptamos as cores e elementos visuais para que o sistema pareça ter sido desenvolvido exclusivamente para você."
                                },
                                {
                                    title: "Mais Valor Percebido",
                                    desc: "Uma empresa que possui seu próprio sistema passa uma imagem de muito mais solidez e profissionalismo para o mercado."
                                }
                            ].map((item, idx) => (
                                <div key={idx} className="bg-white p-6 rounded-lg border border-gray-200 hover:border-blue-300 transition-colors">
                                    <h3 className="font-bold text-gray-900 mb-2">{item.title}</h3>
                                    <p className="text-gray-600 text-sm">{item.desc}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* DETAILED FEATURES SECTION */}
                <AutoClubProFeatures />

                {/* YouTube Videos */}
                <YouTubeVideosSection />

                <BlogSection />

                {/* PROBLEMAS & SOLUÇÕES */}
                <section className="py-24 px-4 sm:px-6 lg:px-8 bg-white overflow-hidden">
                    <div className="max-w-6xl mx-auto">
                        <div className="text-center mb-16">
                            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-gray-900 mb-6">
                                Do caos da gestão para o <span className="text-blue-600">controle total</span>
                            </h2>
                            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                                Você não precisa mais aceitar a desorganização como parte do seu negócio. Veja como o AutoClub Pro transforma sua rotina:
                            </p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {[
                                {
                                    problem: "Agenda cheia de buracos e esquecimento de clientes",
                                    solution: "Recuperação automática de agendamentos e lembretes via WhatsApp",
                                    icon: <Calendar className="w-6 h-6" />
                                },
                                {
                                    problem: "Confusão em comissões que gera desmotivação na equipe",
                                    solution: "Cálculo automático de comissões com transparência total para o colaborador",
                                    icon: <DollarSign className="w-6 h-6" />
                                },
                                {
                                    problem: "Estoque que 'some' e prejuízos que você não sabe de onde vêm",
                                    solution: "Rastreamento rigoroso de peças com log de saída e avisos de estoque baixo",
                                    icon: <Zap className="w-6 h-6" />
                                },
                                {
                                    problem: "Dependência total do dono para saber o que acontece na loja",
                                    solution: "Dashboard em tempo real: acompanhe tudo pelo celular de onde estiver",
                                    icon: <BarChart3 className="w-6 h-6" />
                                },
                                {
                                    problem: "Clientes que voltam com dúvidas e você não tem o histórico",
                                    solution: "Prontuário digital completo do veículo com fotos e histórico de serviços",
                                    icon: <Users className="w-6 h-6" />
                                },
                                {
                                    problem: "Perda de tempo abrindo ordens de serviço em papel",
                                    solution: "Check-in digital ultra rápido que impressiona o cliente na chegada",
                                    icon: <Clock className="w-6 h-6" />
                                }
                            ].map((item, idx) => (
                                <div key={idx} className="group bg-slate-50 rounded-2xl p-8 border border-slate-100 hover:border-blue-200 transition-all hover:shadow-xl hover:shadow-blue-900/5">
                                    <div className="w-12 h-12 bg-white rounded-xl shadow-sm flex items-center justify-center text-blue-600 mb-6 group-hover:scale-110 transition-transform">
                                        {item.icon}
                                    </div>
                                    
                                    <div className="space-y-4">
                                        <div>
                                            <span className="text-[10px] font-bold uppercase tracking-widest text-red-500 block mb-1">Situação Atual</span>
                                            <p className="text-gray-500 text-sm leading-relaxed">
                                                {item.problem}
                                            </p>
                                        </div>
                                        
                                        <div className="pt-4 border-t border-slate-200">
                                            <span className="text-[10px] font-bold uppercase tracking-widest text-green-600 block mb-1">Com AutoClub Pro</span>
                                            <p className="text-gray-900 font-bold leading-tight">
                                                {item.solution}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                        
                        <div className="mt-16 text-center">
                            <p className="text-gray-500 italic mb-8">"O sistema não é apenas uma ferramenta, é o novo sócio organizado da sua empresa."</p>
                            <Button 
                                size="lg"
                                className="bg-slate-900 hover:bg-black text-white px-10 py-7 font-bold rounded-full transition-all"
                                onClick={() => document.getElementById("pricing")?.scrollIntoView({ behavior: "smooth" })}
                            >
                                Deixar a desorganização para trás
                            </Button>
                        </div>
                    </div>
                </section>

                {/* PREÇOS */}
                <section id="pricing" className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-slate-50 to-blue-50">
                    <div className="max-w-6xl mx-auto">
                        <div className="text-center mb-16">
                            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-gray-900 mb-4 tracking-tight">
                                Investimento Estratégico
                            </h2>
                            <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
                                Estrutura profissional de elite com suporte contínuo para sua oficina dominar o mercado.
                            </p>
                        </div>

                        {/* Step 01: Implementation (Centered) */}
                        <div className="max-w-2xl mx-auto mb-16 relative">
                            <motion.div 
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6 }}
                                className="bg-white rounded-3xl shadow-xl border-2 border-slate-100 p-8 md:p-12 flex flex-col justify-between relative"
                            >
                                <div className="absolute -top-4 -left-4 w-16 h-16 bg-slate-900 text-white rounded-2xl flex items-center justify-center font-black text-xl shadow-lg z-10">
                                    01
                                </div>
                                <div>
                                    <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-slate-100 text-slate-700 text-xs font-bold uppercase tracking-wider mb-6">
                                        <Zap className="w-3 h-3" /> O PONTO DE PARTIDA
                                    </div>
                                    <h3 className="text-3xl font-black text-gray-900 mb-2">Implementação de Elite</h3>
                                    <p className="text-gray-600 mb-8 leading-relaxed">
                                        O primeiro passo para transformar sua oficina. Construímos toda a sua estrutura digital do zero.
                                    </p>
                                    
                                    <div className="mb-8">
                                        <p className="text-5xl font-black text-gray-900 tracking-tighter">R$ 1.258</p>
                                        <p className="text-slate-500 font-medium text-sm mt-2 italic">Pagamento único (Investimento Inicial)</p>
                                    </div>

                                    <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-10">
                                        {[
                                            "Landing Page Profissional (Página de Vendas)",
                                            "Personalização Visual 100% (Sua Marca)",
                                            "Configuração Completa do Sistema CRM",
                                            "Treinamento VIP para você e sua equipe",
                                            "3 Meses de Suporte Premium Grátis"
                                        ].map((item, idx) => (
                                            <li key={idx} className="flex items-start gap-3">
                                                <div className="mt-1 bg-blue-50 rounded-full p-0.5">
                                                    <CheckCircle2 className="w-4 h-4 text-blue-600" />
                                                </div>
                                                <span className="text-gray-700 font-medium text-sm">{item}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>

                                <Button 
                                    size="lg"
                                    className="w-full bg-slate-900 hover:bg-black text-white font-bold py-7 text-lg rounded-2xl transition-all shadow-lg"
                                    onClick={() => window.open("https://wa.me/5532991075164")}
                                >
                                    Começar pelo Passo 01
                                </Button>
                            </motion.div>

                            {/* Connecting Arrow Down */}
                            <div className="absolute -bottom-12 left-1/2 -translate-x-1/2 z-20">
                                <div className="bg-white rounded-full p-3 shadow-lg border-2 border-slate-100">
                                    <ArrowRight className="w-6 h-6 text-blue-600 rotate-90" />
                                </div>
                            </div>
                        </div>

                        {/* Step 02: Choice of Plans */}
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch pt-8">
                            {/* Card 2: Essential Plan */}
                            <motion.div 
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6 }}
                                className="bg-white rounded-3xl shadow-xl border-2 border-blue-100 p-8 md:p-12 flex flex-col justify-between relative"
                            >
                                <div className="absolute -top-4 -left-4 w-12 h-12 bg-blue-600 text-white rounded-xl flex items-center justify-center font-black text-lg shadow-lg z-10">
                                    02
                                </div>
                                <div>
                                    <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-50 text-blue-600 text-xs font-bold uppercase tracking-wider mb-6">
                                        <TrendingUp className="w-3 h-3" /> MANUTENÇÃO ESSENCIAL
                                    </div>
                                    <h3 className="text-3xl font-black text-gray-900 mb-2">Plano Essencial</h3>
                                    <p className="text-gray-600 mb-8 leading-relaxed">
                                        A segurança e estabilidade que seu negócio precisa para nunca parar de crescer.
                                    </p>
                                    
                                    <div className="mb-8">
                                        <p className="text-5xl font-black text-gray-900 tracking-tighter">R$ 89<span className="text-xl font-normal text-gray-400">/mês</span></p>
                                        <p className="text-slate-500 font-medium text-sm mt-2 italic">Suporte VIP direto no WhatsApp</p>
                                    </div>

                                    <ul className="space-y-4 mb-10">
                                        {[
                                            "Suporte VIP 24/7 direto pelo WhatsApp",
                                            "Hospedagem Profissional Inclusa",
                                            "Manutenção Técnica e Segurança",
                                            "Consultoria Mensal de Processos",
                                            "Garantia de 99.9% de Estabilidade"
                                        ].map((item, idx) => (
                                            <li key={idx} className="flex items-start gap-3">
                                                <div className="mt-1 bg-blue-50 rounded-full p-0.5">
                                                    <CheckCircle2 className="w-4 h-4 text-blue-600" />
                                                </div>
                                                <span className="text-gray-700 font-medium text-sm">{item}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>

                                <Button 
                                    size="lg"
                                    className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-7 text-lg rounded-2xl transition-all shadow-lg"
                                    onClick={() => window.open("https://wa.me/5532991075164")}
                                >
                                    Escolher Plano Essencial
                                </Button>
                            </motion.div>

                            {/* Card 3: Performance SEO Plan */}
                            <motion.div 
                                initial={{ opacity: 0, x: 20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6, delay: 0.1 }}
                                className="bg-blue-900 rounded-3xl shadow-2xl border-4 border-blue-400 p-8 md:p-12 text-white flex flex-col justify-between transform lg:scale-105 relative"
                            >
                                <div className="absolute -top-4 -right-4 w-12 h-12 bg-white text-blue-900 rounded-xl flex items-center justify-center font-black text-lg shadow-lg z-10">
                                    02
                                </div>
                                <div>
                                    <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-800 text-blue-50 text-xs font-bold uppercase tracking-wider mb-6 border border-blue-700">
                                        <Star className="w-3 h-3 fill-yellow-400 text-yellow-400" /> MÁXIMA PERFORMANCE
                                    </div>
                                    <h3 className="text-3xl font-black mb-2">Performance SEO</h3>
                                    <p className="text-blue-100 mb-8 leading-relaxed">
                                        Para oficinas que querem dominar as buscas e atrair clientes qualificados todos os dias.
                                    </p>
                                    
                                    <div className="mb-8">
                                        <p className="text-5xl font-black tracking-tighter">R$ 197<span className="text-xl font-normal opacity-80">/mês</span></p>
                                        <p className="text-blue-200 font-medium text-sm mt-2 italic">Apareça no topo do Google</p>
                                    </div>

                                    <ul className="space-y-4 mb-10">
                                        {[
                                            "Tudo do Plano Essencial Inclusivo",
                                            "Apareça nas Primeiras Buscas do Google",
                                            "Blog Integrado para Atrair Novos Clientes",
                                            "Estratégia para Dominar sua Região",
                                            "Relatórios Prontos de Crescimento e Vendas"
                                        ].map((item, idx) => (
                                            <li key={idx} className="flex items-start gap-3">
                                                <div className="mt-1 bg-blue-500 rounded-full p-0.5 border border-blue-400">
                                                    <CheckCircle2 className="w-4 h-4 text-white" />
                                                </div>
                                                <span className="text-blue-50 font-medium text-sm">{item}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>

                                <div className="space-y-4">
                                    <Button 
                                        size="lg"
                                        className="w-full bg-white hover:bg-blue-50 text-blue-900 font-black py-7 text-xl rounded-2xl transition-all shadow-xl shadow-blue-900/20 hover:scale-[1.02]"
                                        onClick={() => window.open("https://wa.me/5532991075164")}
                                    >
                                        Garantir Performance SEO
                                    </Button>
                                    <p className="text-center text-xs text-blue-200 font-medium">
                                        🚀 O plano preferido das oficinas de sucesso
                                    </p>
                                </div>
                            </motion.div>
                        </div>

                        {/* Return Box */}
                        <div className="mt-16 bg-white/50 backdrop-blur-sm p-8 rounded-3xl border border-slate-200 text-center max-w-3xl mx-auto shadow-sm">
                            <p className="text-gray-700 italic text-lg leading-relaxed">
                                <span className="font-bold text-blue-600 underline">ROI Garantido:</span> Sua nova Landing Page + Sistema de Agendamentos costumam pagar todo o investimento em menos de 45 dias de operação.
                            </p>
                        </div>
                    </div>
                </section>

                {/* CTA FINAL */}
                <section className="py-20 px-4 sm:px-6 lg:px-8 bg-blue-600">
                    <div className="max-w-4xl mx-auto text-center text-white">
                        <h2 className="text-4xl sm:text-5xl font-bold mb-6">
                            Pronto para transformar seu negócio?
                        </h2>
                        <p className="text-xl mb-8 text-blue-100">
                            Fale conosco agora no WhatsApp. Vamos mostrar como negócios como o seu estão usando AutoClub Pro para ganhar +R$ 15.000/mês em 90 dias.
                        </p>
                        <Button 
                            size="lg"
                            className="bg-white hover:bg-gray-100 text-blue-600 font-bold px-12 py-6 text-lg"
                            onClick={() => window.open("https://wa.me/5532991075164")}
                        >
                            💬 Conversar no WhatsApp
                        </Button>
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
                        className="relative max-w-4xl max-h-[90vh] bg-white rounded-lg shadow-2xl overflow-auto"
                        onClick={(e) => e.stopPropagation()}
                    >
                        <button
                            onClick={() => setSelectedImage(null)}
                            className="absolute top-4 right-4 z-10 p-2 bg-black/50 hover:bg-black/70 rounded-lg text-white transition-colors"
                        >
                            ✕
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
