import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import roqueImage from "@/img/roque-rafael-proenca-consultor.png";
import { motion } from "framer-motion";
import { useSEO } from "@/hooks/useSEO";

// Performance tip: Some animations could be disabled on mobile with `prefers-reduced-motion`
// This is already handled by browsers respecting user preferences
import {
    Code2,
    Zap,
    TrendingUp,
    Users,
    Check,
    ArrowRight,
    Sparkles,
    Briefcase,
    Cpu,
    Rocket,
    DollarSign,
    AlertCircle,
    ChevronDown,
    Heart,
    Award,
    Phone,
    ArrowUp,
    Play,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";


const Landing = () => {
    const navigate = useNavigate();
    const [email, setEmail] = useState("");
    const [submitted, setSubmitted] = useState(false);
    const [showScrollTop, setShowScrollTop] = useState(false);

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

    // SEO Absurdo
    useSEO({
        title: "TechNexos Consultoria em Tecnologia | Transformação Digital Ponta a Ponta | Desenvolvimento Personalizado React Node.js AWS",
        description: "TechNexos - Consultoria em Tecnologia especializada em transformação digital, desenvolvimento personalizado, automação inteligente e implementação ágil. MVP em 18-40 dias. React, Node.js, AWS, TypeScript. Consultoria estratégica para oficinas, vidraçarias, auto centers e empresas de qualquer tamanho.",
        keywords: [
            "consultoria tecnologia",
            "desenvolvimento software",
            "transformação digital",
            "consultoria empresas",
            "soluções personalizadas",
            "react desenvolvimento",
            "node.js backend",
            "aws cloud",
            "typescript desenvolvedor",
            "automação processos",
            "sistema ERP",
            "desenvolvimento web",
            "consultoria roque rafael proença",
            "tecnologia que transforma",
            "mvp desenvolvimento rápido",
            "oficina software",
            "vidraçaria sistema",
            "auto center gestão",
            "dashboard analytics",
            "integração whatsapp",
            "saas desenvolvimento",
            "consultoria digital brasil",
            "tecnologia para negócios",
            "sistema de gestão completo",
            "desenvolvimento customizado",
            "suporte técnico 24/7",
            "implementação ponta a ponta",
            "metodologia ágil",
            "consultoria tecnológica brasil",
        ],
        ogTitle: "TechNexos - Consultoria em Tecnologia | Soluções Digitais Personalizadas",
        ogDescription: "Transforme seu negócio com consultoria estratégica + desenvolvimento personalizado + implementação ágil. Especialista Roque Rafael Proença. MVP em 18-40 dias.",
        ogUrl: "https://www.technexos.com.br",
        twitterTitle: "TechNexos Consultoria em Tecnologia",
        twitterDescription: "Soluções tecnológicas escaláveis e rentáveis. Desenvolvimento personalizado, automação inteligente e suporte 24/7.",
        canonicalUrl: "https://www.technexos.com.br",
        googleSiteVerification: "TU7NzrXfsfOsd_Y-dzJPhTKTXodzzW3jeG5vTx6kxRI",
        schema: {
            "@context": "https://schema.org",
            "@type": "ProfessionalService",
            "name": "TechNexos Consultoria em Tecnologia",
            "description": "Consultoria estratégica em tecnologia, desenvolvimento personalizado e implementação ágil",
            "url": "https://www.technexos.com.br",
            "telephone": "+55-32-99107-5164",
            "founder": {
                "@type": "Person",
                "name": "Roque Rafael Proença",
                "image": "https://www.technexos.com.br/src/img/roque-rafael-proenca-consultor.png",
                "jobTitle": "Consultor Tecnológico Especialista"
            },
            "address": {
                "@type": "PostalAddress",
                "addressCountry": "BR"
            },
            "areaServed": ["BR"],
            "knowsAbout": ["React", "Node.js", "AWS", "TypeScript", "Transformação Digital", "Automação", "ERP", "SaaS"],
            "offers": {
                "@type": "Offer",
                "name": "Consultoria em Tecnologia",
                "description": "Desenvolvimento personalizado e implementação de soluções digitais"
            }
        }
    });

    const handleSubscribe = (e: React.FormEvent) => {
        e.preventDefault();
        if (email) {
            setSubmitted(true);
            setTimeout(() => {
                navigate("/diagnostico-gratuito", { state: { email } });
            }, 1500);
        }
    };

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1,
                delayChildren: 0.2,
            },
        },
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.8, ease: "easeOut" },
        },
    };

    // Calculate annual pricing
    const monthlyPrice = 19.9;
    const annualPrice = 239.00;
    const annualPriceSavings = (monthlyPrice * 0.15 * 12).toFixed(2); // Simulating ~15% savings

    return (
        <div className="min-h-screen bg-gradient-to-b from-white via-white to-blue-50 overflow-hidden">
        {/* Animated background elements */}
        <div className="fixed inset-0 -z-10">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-200/20 rounded-full blur-3xl opacity-40 animate-pulse" />
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-blue-200/20 rounded-full blur-3xl opacity-40 animate-pulse" />
          <div className="absolute top-1/2 right-0 w-80 h-80 bg-blue-100/30 rounded-full blur-3xl opacity-30" />
        </div>

            {/* Header */}
            <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md border-b border-purple-200/30 bg-white/80">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3 sm:py-4 flex items-center justify-between">
                    {/* Logo - Shortened on Mobile */}
                    <div className="flex items-center gap-2 flex-shrink-0">
                        <motion.div
                            whileHover={{ scale: 1.1, rotate: 5 }}
                            className="w-9 h-9 sm:w-10 sm:h-10 rounded-lg bg-gradient-to-br from-purple-500 to-purple-700 flex items-center justify-center shadow-lg shadow-purple-500/50 flex-shrink-0"
                        >
                            <Code2 className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                        </motion.div>
                        <div className="hidden sm:block">
                            <h1 className="text-lg sm:text-xl font-display font-bold text-gray-900">
                                TechNexos
                            </h1>
                            <p className="text-xs text-gray-600">
                                Tecnologia que Transforma
                            </p>
                        </div>
                        <div className="sm:hidden">
                            <h1 className="text-sm font-display font-bold text-gray-900">
                                TechNexos
                            </h1>
                        </div>
                    </div>

                    {/* Navigation */}
                    <div className="flex items-center gap-1 sm:gap-3 ml-auto">
                        <Button
                            onClick={() => {
                                const element = document.getElementById("solucoes");
                                element?.scrollIntoView({ behavior: "smooth" });
                            }}
                            variant="ghost"
                            size="sm"
                            className="hidden md:inline-flex text-gray-700 hover:text-purple-600 text-sm"
                        >
                            Soluções
                        </Button>
                        <Button
                            onClick={() => {
                                const element = document.getElementById("tecnologias");
                                element?.scrollIntoView({ behavior: "smooth" });
                            }}
                            variant="ghost"
                            size="sm"
                            className="hidden md:inline-flex text-gray-700 hover:text-purple-600 text-sm"
                        >
                            Tecnologias
                        </Button>
                        <Button
                            onClick={() => {
                                const element = document.getElementById("faq");
                                element?.scrollIntoView({ behavior: "smooth" });
                            }}
                            variant="ghost"
                            size="sm"
                            className="hidden md:inline-flex text-gray-700 hover:text-purple-600 text-sm"
                        >
                            FAQ
                        </Button>
                        <Button
                            onClick={() => navigate("/blog")}
                            variant="ghost"
                            size="sm"
                            className="hidden md:inline-flex text-gray-700 hover:text-purple-600 text-sm"
                        >
                            Blog
                        </Button>
                        <Button
                            onClick={() => window.open("https://wa.me/5532991075164", "_blank")}
                            variant="ghost"
                            size="sm"
                            className="hidden sm:inline-flex text-gray-700 hover:text-purple-600 text-sm"
                        >
                            Contato
                        </Button>
                        <Button
                            onClick={() => navigate("/diagnostico-gratuito")}
                            size="sm"
                            className="bg-purple-600 hover:bg-purple-700 text-white font-bold text-xs sm:text-sm px-2 sm:px-3 py-1.5 sm:py-2"
                        >
                            <span className="hidden sm:inline">Diagnóstico</span>
                            <span className="sm:hidden">Diagnóstico</span>
                        </Button>
                        <Button
                            onClick={() => navigate("/auth")}
                            variant="outline"
                            size="sm"
                            className="border-gray-300 text-gray-700 hover:border-purple-400 hover:text-purple-600 text-xs sm:text-sm px-2 sm:px-3 py-1.5 sm:py-2"
                        >
                            <span className="hidden sm:inline">Acesso</span>
                            <span className="sm:hidden">Login</span>
                        </Button>
                    </div>
                </div>
            </header>

            {/* Hero Section - Redesigned */}
            <section className="relative min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 pt-20 pb-12 lg:pt-24 lg:pb-20 bg-gradient-to-b from-white via-white to-blue-50 overflow-hidden">
                {/* Background effects */}
                <div className="absolute top-20 right-20 w-96 h-96 bg-primary/10 rounded-full blur-3xl opacity-40" />
                <div className="absolute bottom-20 left-20 w-96 h-96 bg-purple-600/10 rounded-full blur-3xl opacity-40" />
                
                <div className="max-w-7xl mx-auto w-full relative z-10">
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.8 }}
                        className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center"
                    >
                        {/* Left Side - Content */}
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8 }}
                            className="order-2 lg:order-1"
                        >
                            {/* Badge */}
                            <motion.div
                                initial={{ opacity: 0, y: -10 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.1, duration: 0.6 }}
                                className="inline-flex items-center gap-2 rounded-full border border-purple-300/50 bg-purple-50/50 px-4 py-2 text-sm font-medium text-purple-700 mb-6"
                            >
                                <Zap className="h-4 w-4" /> Transformação Digital & Automação Inteligente
                            </motion.div>

                            {/* Main Headline - Enhanced */}
                             <motion.h1
                                 initial={{ opacity: 0, y: 20 }}
                                 animate={{ opacity: 1, y: 0 }}
                                 transition={{ delay: 0.2, duration: 0.8 }}
                                 className="text-5xl sm:text-6xl lg:text-7xl font-display font-black text-gray-900 mb-6 leading-tight"
                             >
                                 Automatize sua empresa com{" "}
                                 <span className="bg-gradient-to-r from-purple-500 to-purple-700 bg-clip-text text-transparent">
                                     IA e Inteligência
                                 </span>
                             </motion.h1>

                             {/* Enhanced Subheadline */}
                             <motion.div
                                 initial={{ opacity: 0, y: 20 }}
                                 animate={{ opacity: 1, y: 0 }}
                                 transition={{ delay: 0.3, duration: 0.8 }}
                                 className="space-y-4 mb-10"
                             >
                                 <p className="text-xl text-gray-700 leading-relaxed font-semibold">
                                     Arquiteto de soluções empresariais especializado em automação inteligente, agentes de IA e integração de plataformas.
                                 </p>
                                 <p className="text-lg text-gray-600 leading-relaxed">
                                     Transformo processos complexos em fluxos automatizados, escaláveis e prontos para o futuro. De diagnóstico estratégico à implementação e suporte — tudo orientado para ROI máximo.
                                 </p>
                             </motion.div>

                             {/* CTA Buttons */}
                             <motion.div
                                 initial={{ opacity: 0, y: 20 }}
                                 animate={{ opacity: 1, y: 0 }}
                                 transition={{ delay: 0.4, duration: 0.8 }}
                                 className="flex flex-col sm:flex-row items-center gap-4 mb-10"
                             >
                                 <Button
                                     onClick={() => {
                                         const element = document.getElementById("contato");
                                         element?.scrollIntoView({ behavior: "smooth" });
                                     }}
                                     size="lg"
                                     className="bg-purple-600 hover:bg-purple-700 text-white font-bold text-base px-8 h-14 rounded-lg gap-2 w-full sm:w-auto shadow-lg shadow-purple-500/30"
                                 >
                                     Solicitar Diagnóstico Gratuito <ArrowRight className="h-5 w-5" />
                                 </Button>
                                 <Button
                                     onClick={() => navigate("/about-me")}
                                     size="lg"
                                     className="border-2 border-purple-600 bg-white text-purple-600 hover:bg-purple-50 font-bold text-base px-8 h-14 rounded-lg gap-2 w-full sm:w-auto transition-all"
                                 >
                                     <Users className="h-5 w-5" /> Sobre Mim
                                 </Button>
                             </motion.div>

                             {/* Trust Indicators */}
                             <motion.div
                                 initial={{ opacity: 0, y: 20 }}
                                 animate={{ opacity: 1, y: 0 }}
                                 transition={{ delay: 0.5, duration: 0.8 }}
                                 className="flex flex-col sm:flex-row items-start sm:items-center gap-6 sm:gap-8 text-sm text-gray-600 border-t border-gray-200 pt-6"
                             >
                                 <div className="flex items-center gap-2">
                                     <span className="text-purple-600 font-bold text-lg">7+</span>
                                     <span>Anos em Arquitetura</span>
                                 </div>
                                 <div className="hidden sm:block w-px h-6 bg-gray-300" />
                                 <div className="flex items-center gap-2">
                                     <span className="text-purple-600 font-bold text-lg">100+</span>
                                     <span>Projetos de Automação</span>
                                 </div>
                                 <div className="hidden sm:block w-px h-6 bg-gray-300" />
                                 <div className="flex items-center gap-2">
                                     <span className="text-purple-600 font-bold text-lg">50+</span>
                                     <span>Empresas Transformadas</span>
                                 </div>
                             </motion.div>
                        </motion.div>

                        {/* Right Side - Image + Stats */}
                        <motion.div
                            initial={{ opacity: 0, x: 30 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.3, duration: 0.8 }}
                            className="order-1 lg:order-2"
                        >
                            {/* Hero Image */}
                            <div className="space-y-6 flex flex-col items-center lg:items-stretch">
                                <motion.div
                                    initial={{ opacity: 0, scale: 0.9 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    transition={{ delay: 0.4, duration: 0.8 }}
                                    className="relative rounded-2xl sm:rounded-3xl overflow-hidden shadow-2xl w-full max-w-sm sm:max-w-md lg:max-w-full h-64 sm:h-80 lg:h-96"
                                >
                                    <img
                                        src="/lamp"
                                        alt="Transformação Digital com IA e Automação"
                                        className="w-full h-full object-cover"
                                        loading="eager"
                                        decoding="async"
                                        width={500}
                                        height={500}
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                                </motion.div>

                                {/* Feature cards under image */}
                                <div className="grid grid-cols-3 gap-3">
                                    {[
                                        { label: "Arquitetura", icon: Code2 },
                                        { label: "Automação", icon: Zap },
                                        { label: "Inteligência", icon: TrendingUp },
                                    ].map(({ label, icon: Icon }) => (
                                        <motion.div
                                            key={label}
                                            initial={{ opacity: 0, y: 10 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            transition={{ delay: 0.6, duration: 0.6 }}
                                            className="p-3 bg-white rounded-lg border border-gray-200 shadow-sm text-center hover:border-purple-300 hover:shadow-md transition-all"
                                        >
                                            <Icon className="h-5 w-5 text-purple-600 mx-auto mb-2" />
                                            <p className="text-xs font-semibold text-gray-700">{label}</p>
                                        </motion.div>
                                    ))}
                                </div>
                            </div>
                        </motion.div>
                    </motion.div>
                </div>
            </section>

            {/* Why Section */}
            <section className="relative py-16 sm:py-20 px-4 sm:px-6 lg:px-8 bg-white">
                <div className="max-w-4xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                    >
                        <h2 className="text-3xl sm:text-4xl font-display font-black text-gray-900 mb-6">
                            Por que sua empresa precisa de consultoria tecnológica?
                        </h2>
                        <p className="text-lg sm:text-xl text-gray-600 mb-4 leading-relaxed">
                            Tecnologia desalinhada com seus objetivos é desperdício. Sem estratégia clara,
                            <strong className="text-gray-900"> sua empresa fica para trás da concorrência.</strong>
                        </p>
                        <p className="text-lg sm:text-xl text-gray-600 mb-10 leading-relaxed">
                            Por isso criamos TechNexos: para transformar sua visão em soluções reais,
                            <strong className="text-gray-900"> escaláveis e rentáveis,</strong> sem riscos e com resultados comprovados.
                        </p>
                    </motion.div>

                    {/* Benefits List */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2, duration: 0.8 }}
                        viewport={{ once: true }}
                        className="space-y-5"
                    >
                        <div className="flex items-start gap-4">
                            <div className="flex-shrink-0 w-6 h-6 rounded-full bg-purple-100 flex items-center justify-center mt-1">
                                <Check className="w-4 h-4 text-purple-600" />
                            </div>
                            <div>
                                <p className="font-bold text-gray-900 text-lg">Diagnóstico Profundo</p>
                                <p className="text-gray-600">
                                    Entendemos seu negócio antes de qualquer solução. Análise completa em 14 dias.
                                </p>
                            </div>
                        </div>
                        <div className="flex items-start gap-4">
                            <div className="flex-shrink-0 w-6 h-6 rounded-full bg-purple-100 flex items-center justify-center mt-1">
                                <Check className="w-4 h-4 text-purple-600" />
                            </div>
                            <div>
                                <p className="font-bold text-gray-900 text-lg">Implementação Ágil</p>
                                <p className="text-gray-600">
                                    Desenvolvimento iterativo. Você acompanha cada sprint. Resultados em 15-20 dias.
                                </p>
                            </div>
                        </div>
                        <div className="flex items-start gap-4">
                            <div className="flex-shrink-0 w-6 h-6 rounded-full bg-purple-100 flex items-center justify-center mt-1">
                                <Check className="w-4 h-4 text-purple-600" />
                            </div>
                            <div>
                                <p className="font-bold text-gray-900 text-lg">Suporte Contínuo</p>
                                <p className="text-gray-600">
                                    Não te abandonamos após a entrega. 6 meses de suporte técnico premium inclusos.
                                </p>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* CTA Diagnostic Section */}
            <section className="relative py-8 sm:py-12 px-4 sm:px-6 lg:px-8 bg-white">
                <div className="max-w-6xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                        className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-purple-600 via-purple-500 to-purple-700 p-8 sm:p-12 md:p-16 shadow-2xl"
                    >
                        {/* Decorative elements */}
                        <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 rounded-full -mr-48 -mt-48" />
                        <div className="absolute bottom-0 left-0 w-80 h-80 bg-white/10 rounded-full -ml-40 -mb-40" />

                        <div className="relative z-10">
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.2, duration: 0.8 }}
                                viewport={{ once: true }}
                                className="max-w-3xl mx-auto text-center"
                            >
                                {/* Eye-catching icon */}
                                <motion.div
                                    animate={{ y: [0, -10, 0] }}
                                    transition={{ duration: 3, repeat: Infinity }}
                                    className="inline-block mb-6"
                                >
                                    <div className="bg-white/20 backdrop-blur-md rounded-full p-4 border border-white/30">
                                        <Sparkles className="w-8 h-8 text-white" />
                                    </div>
                                </motion.div>

                                {/* Main Headline */}
                                <motion.h2
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.3, duration: 0.8 }}
                                    viewport={{ once: true }}
                                    className="text-4xl sm:text-5xl md:text-6xl font-display font-black text-white mb-6 leading-tight"
                                >
                                    Pronto para Transformar sua Empresa?
                                </motion.h2>

                                {/* Subheadline */}
                                <motion.p
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.4, duration: 0.8 }}
                                    viewport={{ once: true }}
                                    className="text-lg sm:text-xl text-white/90 mb-4 leading-relaxed"
                                >
                                    Conte-nos sobre sua empresa. Onde está o gargalo? Qual é o desafio que mais impede seu crescimento?
                                </motion.p>

                                <motion.p
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.5, duration: 0.8 }}
                                    viewport={{ once: true }}
                                    className="text-base sm:text-lg text-white/80 mb-10 font-medium"
                                >
                                    Nossa primeira consultoria é <strong className="text-white">100% gratuita</strong>. Vamos entender seus objetivos, identificar oportunidades e mostrar como tecnologia pode acelerar seu crescimento.
                                </motion.p>

                                {/* CTA Buttons */}
                                <motion.div
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.6, duration: 0.8 }}
                                    viewport={{ once: true }}
                                    className="flex flex-col sm:flex-row gap-4 justify-center"
                                >
                                    <Button
                                        onClick={() => navigate("/diagnostico-gratuito")}
                                        size="lg"
                                        className="bg-white text-purple-600 hover:bg-white/90 font-bold text-lg px-8 py-6 rounded-xl shadow-xl hover:shadow-2xl transition-all gap-2"
                                    >
                                        Começar Diagnóstico Gratuito <ArrowRight className="w-5 h-5" />
                                    </Button>
                                    <Button
                                        onClick={() => window.open("https://wa.me/5532991075164", "_blank")}
                                        size="lg"
                                        variant="outline"
                                        className="border-2 border-white text-white hover:bg-white/10 font-bold text-lg px-8 py-6 rounded-xl transition-all"
                                    >
                                        <Phone className="w-5 h-5" />
                                        Falar com Consultor
                                    </Button>
                                </motion.div>

                                {/* Trust indicators */}
                                <motion.div
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.7, duration: 0.8 }}
                                    viewport={{ once: true }}
                                    className="mt-12 pt-8 border-t border-white/20 flex flex-col sm:flex-row gap-6 sm:gap-12 justify-center text-sm text-white/90"
                                >
                                    <div className="flex items-center gap-2">
                                        <Check className="w-5 h-5 text-white" />
                                        <span>Sem compromisso</span>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <Check className="w-5 h-5 text-white" />
                                        <span>Análise em 14 dias</span>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <Check className="w-5 h-5 text-white" />
                                        <span>Consultoria com especialista</span>
                                    </div>
                                </motion.div>
                            </motion.div>
                        </div>
                    </motion.div>

                    {/* Stats Section - Moved below */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2, duration: 0.8 }}
                        viewport={{ once: true }}
                        className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6"
                    >
                        <div className="text-center bg-gradient-to-br from-purple-50 to-white border-2 border-purple-200 rounded-xl p-6 shadow-lg">
                            <motion.div
                                animate={{ scale: [1, 1.05, 1] }}
                                transition={{ duration: 2, repeat: Infinity }}
                            >
                                <p className="text-4xl sm:text-5xl font-display font-black text-purple-600 mb-2">
                                    87%
                                </p>
                            </motion.div>
                            <p className="text-gray-700 text-sm font-semibold">
                                Projetos entregues no prazo com 100% satisfação
                            </p>
                        </div>

                        <div className="text-center bg-gradient-to-br from-purple-50 to-white border-2 border-purple-200 rounded-xl p-6 shadow-lg">
                            <motion.div
                                animate={{ scale: [1, 1.05, 1] }}
                                transition={{ duration: 2, repeat: Infinity, delay: 0.2 }}
                            >
                                <p className="text-4xl sm:text-5xl font-display font-black text-purple-600 mb-2">
                                    2-3
                                </p>
                            </motion.div>
                            <p className="text-gray-700 text-sm font-semibold">
                                Projetos de consultoria por período
                            </p>
                        </div>

                        <div className="text-center bg-gradient-to-br from-emerald-50 to-white border-2 border-emerald-200 rounded-xl p-6 shadow-lg">
                            <motion.div
                                animate={{ scale: [1, 1.05, 1] }}
                                transition={{ duration: 2, repeat: Infinity, delay: 0.4 }}
                            >
                                <p className="text-4xl sm:text-5xl font-display font-black text-emerald-600 mb-2">
                                    3.5x
                                </p>
                            </motion.div>
                            <p className="text-gray-700 text-sm font-semibold">
                                ROI médio em 12 meses pós-implementação
                            </p>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Benefits Section */}
            <section
                id="solucoes"
                className="relative py-16 sm:py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-gray-50 to-white"
            >
                <div className="max-w-6xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                        className="text-center mb-12 sm:mb-16"
                    >
                        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-black text-gray-900 mb-4 sm:mb-6">
                            Por que escolher <span className="text-purple-600">TechNexos Consultoria</span>?
                        </h2>
                        <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
                            Expertise que transforma ideias em soluções reais e rentáveis
                        </p>
                    </motion.div>

                    <motion.div
                        variants={containerVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8"
                    >
                        {[
                            {
                                icon: Cpu,
                                title: "Tecnologia de Ponta",
                                description:
                                    "Stack moderno: React, Node.js, AWS. Infraestrutura escalável e segura para seu crescimento.",
                                color: "from-purple-500 to-purple-600",
                                light: "bg-purple-50",
                            },
                            {
                                icon: Rocket,
                                title: "Implementação Rápida",
                                description:
                                    "Metodologia Agile. Sprints de 1 semana. Você vê resultados em 15-20 dias, não em meses.",
                                color: "from-purple-500 to-purple-600",
                                light: "bg-purple-50",
                            },
                            {
                                icon: TrendingUp,
                                title: "ROI Comprovado",
                                description:
                                    "87% dos clientes veem 3.5x de retorno em 12 meses. Dados, não promessas.",
                                color: "from-emerald-500 to-emerald-600",
                                light: "bg-emerald-50",
                            },
                            {
                                icon: Users,
                                title: "Time Dedicado",
                                description:
                                    "Consultores sênior com 10+ anos. Developers com expertise comprovada. Seu sucesso é nosso.",
                                color: "from-blue-500 to-blue-600",
                                light: "bg-blue-50",
                            },
                            {
                                icon: Zap,
                                title: "Suporte Contínuo",
                                description:
                                    "6 meses de acompanhamento pós-entrega. Ajustes, treinamento e otimizações inclusos.",
                                color: "from-amber-500 to-amber-600",
                                light: "bg-amber-50",
                            },
                            {
                                icon: Award,
                                title: "Soluções Customizadas",
                                description:
                                    "Cada empresa é única. Nós entendemos seu negócio e criamos à medida para você.",
                                color: "from-pink-500 to-pink-600",
                                light: "bg-pink-50",
                            },
                        ].map((feature, index) => {
                            const Icon = feature.icon;
                            return (
                                <motion.div
                                    key={index}
                                    variants={itemVariants}
                                    whileHover={{ y: -5 }}
                                    className={`${feature.light} border-2 border-gray-200 hover:border-purple-300 rounded-2xl p-6 sm:p-8 transition-all duration-300 cursor-pointer group`}
                                >
                                    <motion.div
                                        whileHover={{ scale: 1.1, rotate: 5 }}
                                        className={`w-14 h-14 rounded-xl bg-gradient-to-br ${feature.color} flex items-center justify-center mb-6 shadow-lg`}
                                    >
                                        <Icon className="w-7 h-7 text-white" />
                                    </motion.div>
                                    <h3 className="text-xl sm:text-2xl font-display font-bold text-gray-900 mb-3">
                                        {feature.title}
                                    </h3>
                                    <p className="text-gray-600 text-base sm:text-lg leading-relaxed">
                                        {feature.description}
                                    </p>
                                </motion.div>
                            );
                        })}
                    </motion.div>
                </div>
            </section>

            {/* Plan Details Section */}
            <section className="relative py-16 sm:py-24 px-4 sm:px-6 lg:px-8 bg-white">
                <div className="max-w-6xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                        className="text-center mb-12 sm:mb-16"
                    >
                        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-black text-gray-900 mb-4">
                            Metodologia TechNexos
                        </h2>
                        <p className="text-lg sm:text-xl text-gray-600">
                            Ponta a ponta: Consulta → Desenvolvimento → Implementação → Suporte
                        </p>
                    </motion.div>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
                        {/* Left - Plan Features */}
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8 }}
                            viewport={{ once: true }}
                            className="space-y-4"
                        >
                            {[
                                {
                                    title: "Análise Estratégica",
                                    description:
                                        "Diagnóstico completo do seu negócio. Identificamos gargalos e oportunidades em 14 dias.",
                                },
                                {
                                    title: "Roadmap Personalizado",
                                    description:
                                        "Plano técnico customizado para sua empresa. Prioridades claras e milestones definidos.",
                                },
                                {
                                    title: "Desenvolvimento Ágil",
                                    description:
                                        "Sprints de 2 semanas. Você acompanha cada entrega. Transparência total.",
                                },
                                {
                                    title: "MVP em 15-20 Dias",
                                    description:
                                        "Primeira versão funcional entregue em 15-20 dias. Sem demora, com qualidade.",
                                },
                                {
                                    title: "Stack Moderno",
                                    description:
                                        "React, Node.js, AWS, PostgreSQL. Infraestrutura escalável e segura.",
                                },
                                {
                                    title: "Zero Surpresas",
                                    description:
                                        "Orçamento fechado. Sem custos ocultos. Transparência do início ao fim.",
                                },
                                {
                                    title: "Suporte Pós-Entrega",
                                    description:
                                        "6 meses de acompanhamento técnico. Treinamento da equipe incluído.",
                                },
                                {
                                    title: "Propriedade Total",
                                    description:
                                        "Código é seu. Nenhuma restrição. Você controla a solução 100%.",
                                },
                            ].map((item, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, x: -20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    transition={{ delay: index * 0.05, duration: 0.6 }}
                                    viewport={{ once: true }}
                                    className="flex gap-4 items-start p-4 rounded-lg hover:bg-purple-50 transition-colors"
                                >
                                    <div className="flex-shrink-0 w-6 h-6 rounded-full bg-purple-100 flex items-center justify-center mt-1">
                                        <Check className="w-4 h-4 text-purple-600" />
                                    </div>
                                    <div>
                                        <p className="font-bold text-gray-900">{item.title}</p>
                                        <p className="text-gray-600 text-sm">{item.description}</p>
                                    </div>
                                </motion.div>
                            ))}
                        </motion.div>

                        {/* Right - Pricing & CTA */}
                        <motion.div
                            initial={{ opacity: 0, x: 30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8 }}
                            viewport={{ once: true }}
                            className="flex flex-col"
                        >
                            <div className="bg-gradient-to-br from-purple-50 via-white to-purple-50 border-3 border-purple-300 rounded-3xl p-8 sm:p-12 shadow-2xl h-full flex flex-col justify-between">
                                <div>
                                    <h3 className="text-3xl sm:text-4xl font-display font-black text-gray-900 mb-2">
                                        Investimento em Transformação
                                    </h3>
                                    <p className="text-gray-600 text-lg mb-8">
                                        Personalizado. Escalável. Resultados em 15-20 dias.
                                    </p>

                                    <div className="bg-white rounded-2xl p-6 mb-8 border-2 border-purple-200">
                                        <p className="text-gray-600 text-sm mb-2">A partir de</p>
                                        <p className="text-5xl sm:text-6xl font-display font-black text-purple-600 mb-2">
                                            Sob Demanda
                                        </p>
                                        <p className="text-gray-600 text-base">
                                            Consultoria inclusa
                                            <strong className="text-purple-600 ml-1">
                                                + Desenvolvimento + Implementação
                                            </strong>
                                        </p>
                                    </div>

                                    <div className="bg-purple-50 border-l-4 border-purple-500 p-4 rounded-lg mb-8">
                                        <p className="text-sm text-gray-700">
                                            <strong className="text-purple-700">🚀 Oportunidade:</strong> Primeira consulta gratuita.
                                            Sem compromisso. Descubra como podemos crescer sua empresa.
                                        </p>
                                    </div>

                                    <div className="space-y-3 mb-8">
                                        <div className="flex items-center gap-3 text-gray-700">
                                            <Check className="w-5 h-5 text-purple-600 flex-shrink-0" />
                                            <span>Consultoria estratégica incluída</span>
                                        </div>
                                        <div className="flex items-center gap-3 text-gray-700">
                                            <Check className="w-5 h-5 text-purple-600 flex-shrink-0" />
                                            <span>6 meses de suporte técnico</span>
                                        </div>
                                        <div className="flex items-center gap-3 text-gray-700">
                                            <Check className="w-5 h-5 text-purple-600 flex-shrink-0" />
                                            <span>Propriedade total do código</span>
                                        </div>
                                        <div className="flex items-center gap-3 text-gray-700">
                                            <Check className="w-5 h-5 text-purple-600 flex-shrink-0" />
                                            <span>Cancelamento a qualquer momento</span>
                                        </div>
                                    </div>
                                </div>

                                <Button
                                    onClick={() => navigate("/diagnostico-gratuito")}
                                    size="lg"
                                    className="w-full bg-gradient-to-r from-purple-500 to-purple-600 hover:from-purple-600 hover:to-purple-700 text-white font-bold text-lg px-8 py-6 rounded-xl shadow-xl shadow-purple-500/30 hover:shadow-purple-500/50 transition-all"
                                >
                                    Solicitar Consultoria <ArrowRight className="w-5 h-5 ml-2" />
                                </Button>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Technologies Section */}
            <section id="tecnologias" className="relative py-16 sm:py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-white via-blue-50 to-white">
                {/* Animated background elements */}
                <div className="absolute inset-0 overflow-hidden -z-10">
                    <motion.div
                        animate={{ rotate: 360 }}
                        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                        className="absolute top-1/4 left-1/4 w-72 h-72 bg-blue-300/10 rounded-full blur-3xl"
                    />
                    <motion.div
                        animate={{ rotate: -360 }}
                        transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
                        className="absolute bottom-1/4 right-1/4 w-72 h-72 bg-purple-300/10 rounded-full blur-3xl"
                    />
                </div>

                <div className="max-w-6xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                        className="text-center mb-12 sm:mb-16"
                    >
                        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-black text-gray-900 mb-4">
                            Stack Tecnológico Robusto
                        </h2>
                        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                            Ferramentas e plataformas modernas, escaláveis e com altíssima demanda no mercado
                        </p>
                    </motion.div>

                    {/* Tech Grid com Design Criativo */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-12">
                        {[
                            {
                                name: "Supabase",
                                category: "Backend / Database",
                                description: "PostgreSQL serverless com autenticação integrada",
                                icon: "🗄️",
                                color: "from-green-500 to-emerald-600",
                                features: ["Real-time", "JWT Auth", "Escalável"],
                            },
                            {
                                name: "React",
                                category: "Frontend",
                                description: "Interface reativa e performática",
                                icon: "⚛️",
                                color: "from-blue-500 to-cyan-600",
                                features: ["Hooks", "Component-based", "SEO-ready"],
                            },
                            {
                                name: "TypeScript",
                                category: "Linguagem",
                                description: "Tipagem estática para código mais seguro",
                                icon: "📘",
                                color: "from-blue-600 to-blue-700",
                                features: ["Type Safety", "IDE Support", "Refactor Safe"],
                            },
                            {
                                name: "Tailwind CSS",
                                category: "Styling",
                                description: "Design system rápido e consistente",
                                icon: "🎨",
                                color: "from-cyan-500 to-blue-500",
                                features: ["Responsive", "Dark Mode", "Customizable"],
                            },
                            {
                                name: "Node.js",
                                category: "Runtime",
                                description: "JavaScript no servidor com performance",
                                icon: "🟢",
                                color: "from-green-500 to-lime-600",
                                features: ["Event-driven", "Non-blocking", "NPM Ecosystem"],
                            },
                            {
                                name: "AWS / Vercel",
                                category: "Cloud",
                                description: "Deploy global com alta disponibilidade",
                                icon: "☁️",
                                color: "from-orange-500 to-red-600",
                                features: ["CDN Global", "Auto-scaling", "99.99% SLA"],
                            },
                        ].map((tech, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, scale: 0.9 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                transition={{ delay: index * 0.1, duration: 0.6 }}
                                viewport={{ once: true }}
                                whileHover={{ y: -8, transition: { duration: 0.3 } }}
                                className="group relative h-full"
                            >
                                {/* Glow Effect */}
                                <div className={`absolute inset-0 bg-gradient-to-r ${tech.color} opacity-0 group-hover:opacity-20 rounded-2xl blur-xl transition-opacity duration-300`} />
                                
                                {/* Card */}
                                <div className={`relative h-full bg-white border-2 border-gray-200 group-hover:border-gray-300 rounded-2xl p-6 sm:p-8 transition-all duration-300 backdrop-blur-sm`}>
                                    {/* Header with Icon */}
                                    <div className="mb-6">
                                        <div className={`w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-br ${tech.color} rounded-xl flex items-center justify-center text-3xl sm:text-4xl mb-4 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                                            {tech.icon}
                                        </div>
                                        <h3 className="text-xl sm:text-2xl font-display font-bold text-gray-900 mb-1">
                                            {tech.name}
                                        </h3>
                                        <p className="text-xs sm:text-sm font-semibold text-gray-500 uppercase tracking-wide">
                                            {tech.category}
                                        </p>
                                    </div>

                                    {/* Description */}
                                    <p className="text-gray-600 text-sm sm:text-base mb-6 leading-relaxed">
                                        {tech.description}
                                    </p>

                                    {/* Features */}
                                    <div className="space-y-2">
                                        {tech.features.map((feature, fIdx) => (
                                            <div key={fIdx} className="flex items-center gap-2 text-sm text-gray-700">
                                                <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${tech.color}`} />
                                                {feature}
                                            </div>
                                        ))}
                                    </div>

                                    {/* Bottom accent */}
                                    <div className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${tech.color} opacity-0 group-hover:opacity-100 rounded-b-2xl transition-opacity duration-300`} />
                                </div>
                            </motion.div>
                        ))}
                    </div>

                    {/* Tech Stats */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                        className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-12"
                    >
                        <div className="text-center p-6 bg-gradient-to-br from-blue-50 to-cyan-50 border-2 border-blue-200 rounded-2xl">
                            <p className="text-3xl sm:text-4xl font-display font-black text-blue-600 mb-2">100%</p>
                            <p className="text-gray-700 font-semibold text-sm">Open Source & Escalável</p>
                        </div>
                        <div className="text-center p-6 bg-gradient-to-br from-purple-50 to-pink-50 border-2 border-purple-200 rounded-2xl">
                            <p className="text-3xl sm:text-4xl font-display font-black text-purple-600 mb-2">24/7</p>
                            <p className="text-gray-700 font-semibold text-sm">Suporte Técnico Premium</p>
                        </div>
                        <div className="text-center p-6 bg-gradient-to-br from-green-50 to-emerald-50 border-2 border-green-200 rounded-2xl">
                            <p className="text-3xl sm:text-4xl font-display font-black text-green-600 mb-2">∞</p>
                            <p className="text-gray-700 font-semibold text-sm">Performance Otimizada</p>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Testimonials Section */}
            <section className="relative py-16 sm:py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-gray-900 via-gray-900 to-black overflow-hidden">
                {/* Animated Grid Background */}
                <div className="absolute inset-0 -z-10">
                    <div className="absolute inset-0 opacity-10">
                        <div className="absolute w-full h-full" style={{
                            backgroundImage: `linear-gradient(0deg, transparent 24%, rgba(139, 92, 246, .05) 25%, rgba(139, 92, 246, .05) 26%, transparent 27%, transparent 74%, rgba(139, 92, 246, .05) 75%, rgba(139, 92, 246, .05) 76%, transparent 77%, transparent), linear-gradient(90deg, transparent 24%, rgba(139, 92, 246, .05) 25%, rgba(139, 92, 246, .05) 26%, transparent 27%, transparent 74%, rgba(139, 92, 246, .05) 75%, rgba(139, 92, 246, .05) 76%, transparent 77%, transparent)`,
                            backgroundSize: '50px 50px',
                        }} />
                    </div>
                    <motion.div
                        animate={{ scale: [1, 1.1, 1] }}
                        transition={{ duration: 8, repeat: Infinity }}
                        className="absolute top-1/3 left-1/3 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl"
                    />
                </div>

                <div className="max-w-6xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                        className="text-center mb-12 sm:mb-16"
                    >
                        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-black text-white mb-4">
                            O Que Dizem Sobre Nosso Trabalho
                        </h2>
                        <p className="text-lg text-gray-400 max-w-2xl mx-auto">
                            Resultados reais de clientes que transformaram seus negócios
                        </p>
                    </motion.div>

                    {/* Testimonials Carousel */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
                        {[
                            {
                                name: "Carlos Mendes",
                                role: "CEO, TechStart Brasil",
                                image: "👨‍💼",
                                text: "Roque transformou nossa visão em realidade em apenas 18 dias. O sistema está rodando perfeitamente, escalável e o código é impecável.",
                                rating: 5,
                                highlight: "MVP em 18 dias",
                            },
                            {
                                name: "Fernanda Silva",
                                role: "Diretora de Operações, E-commerce",
                                image: "👩‍💼",
                                text: "Depois da implementação, nosso ROI aumentou 340%. O sistema integra com tudo que precisamos. Suporte excepcional pós-entrega.",
                                rating: 5,
                                highlight: "ROI 340% ↑",
                            },
                            {
                                name: "Roberto Oliveira",
                                role: "Fundador, SaaS Consulting",
                                image: "👨‍💻",
                                text: "A qualidade do código é excepcional. TypeScript, React, tudo bem estruturado. Time deu suporte completo durante os 6 meses. Recomendo muito.",
                                rating: 5,
                                highlight: "Código Premium",
                            },
                        ].map((testimonial, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: index * 0.15, duration: 0.8 }}
                                viewport={{ once: true }}
                                whileHover={{ y: -12, transition: { duration: 0.3 } }}
                                className="group relative"
                            >
                                {/* Gradient Border Effect */}
                                <div className="absolute inset-0 bg-gradient-to-r from-purple-600 via-pink-600 to-purple-600 opacity-0 group-hover:opacity-100 rounded-2xl p-1 transition-opacity duration-300" />
                                
                                {/* Card Content */}
                                <div className="relative bg-gray-800/50 backdrop-blur-xl border border-gray-700 group-hover:border-transparent rounded-2xl p-6 sm:p-8 h-full">
                                    {/* Top Badge */}
                                    <div className="inline-block mb-4 px-3 py-1 bg-purple-500/20 border border-purple-400/50 rounded-full">
                                        <p className="text-sm font-semibold text-purple-200">
                                            {testimonial.highlight}
                                        </p>
                                    </div>

                                    {/* Stars */}
                                    <div className="flex gap-1 mb-4">
                                        {[...Array(testimonial.rating)].map((_, i) => (
                                            <motion.span
                                                key={i}
                                                initial={{ opacity: 0, scale: 0 }}
                                                whileInView={{ opacity: 1, scale: 1 }}
                                                transition={{ delay: 0.2 + i * 0.1 }}
                                                className="text-xl"
                                            >
                                                ⭐
                                            </motion.span>
                                        ))}
                                    </div>

                                    {/* Quote */}
                                    <p className="text-gray-200 text-base sm:text-lg leading-relaxed mb-6 font-light italic">
                                        "{testimonial.text}"
                                    </p>

                                    {/* Author */}
                                    <div className="flex items-center gap-4 pt-6 border-t border-gray-700">
                                        <div className="text-4xl">{testimonial.image}</div>
                                        <div>
                                            <p className="text-white font-semibold text-sm sm:text-base">
                                                {testimonial.name}
                                            </p>
                                            <p className="text-gray-400 text-xs sm:text-sm">
                                                {testimonial.role}
                                            </p>
                                        </div>
                                    </div>

                                    {/* Bottom accent */}
                                    <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-purple-600 via-pink-600 to-purple-600 opacity-0 group-hover:opacity-100 rounded-b-2xl transition-opacity duration-300" />
                                </div>
                            </motion.div>
                        ))}
                    </div>

                    {/* Testimonials Stats */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                        className="mt-12 sm:mt-16 p-8 sm:p-12 bg-gradient-to-r from-purple-900/30 to-pink-900/30 border border-purple-500/30 rounded-2xl backdrop-blur-sm"
                    >
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                            <div className="text-center">
                                <p className="text-3xl sm:text-4xl font-display font-black text-transparent bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text mb-2">
                                    100%
                                </p>
                                <p className="text-sm text-gray-400">Satisfação de Clientes</p>
                            </div>
                            <div className="text-center">
                                <p className="text-3xl sm:text-4xl font-display font-black text-transparent bg-gradient-to-r from-pink-400 to-purple-400 bg-clip-text mb-2">
                                    +300%
                                </p>
                                <p className="text-sm text-gray-400">ROI Médio</p>
                            </div>
                            <div className="text-center">
                                <p className="text-3xl sm:text-4xl font-display font-black text-transparent bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text mb-2">
                                    18-40
                                </p>
                                <p className="text-sm text-gray-400">Dias para MVP</p>
                            </div>
                            <div className="text-center">
                                <p className="text-3xl sm:text-4xl font-display font-black text-transparent bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text mb-2">
                                    10+
                                </p>
                                <p className="text-sm text-gray-400">Anos de Experiência</p>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* FAQ Section */}
            <section
                id="faq"
                className="relative py-16 sm:py-24 px-4 sm:px-6 lg:px-8 bg-gray-50"
            >
                <div className="max-w-4xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                        className="text-center mb-12 sm:mb-16"
                    >
                        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-black text-gray-900 mb-4">
                            Dúvidas Frequentes
                        </h2>
                        <p className="text-lg text-gray-600">
                            Respostas rápidas para suas perguntas
                        </p>
                    </motion.div>

                    <motion.div
                        variants={containerVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        className="space-y-4"
                    >
                        {[
                            {
                                question: "Por quanto tempo leva o projeto?",
                                answer:
                                    "MVP (primeira versão funcional) em 15-20 dias. Depois refinamos conforme sua feedback. Projetos completos são entregues em 20-40 dias.",
                            },
                            {
                                question: "Como funciona o acompanhamento após a entrega?",
                                answer:
                                    "Você recebe 6 meses de suporte técnico premium. Ajustes, otimizações, treinamento da equipe. Tudo sob demanda.",
                            },
                            {
                                question: "Qual é a tecnologia que vocês usam?",
                                answer:
                                    "React, Node.js, TypeScript, PostgreSQL, AWS. Stack moderno, escalável e com alta demanda no mercado.",
                            },
                            {
                                question: "O código será propriedade minha?",
                                answer:
                                    "Totalmente. Você recebe 100% do código-fonte. Nenhuma restrição. Você controla a solução completamente.",
                            },
                            {
                                question: "Como vocês cobram? Há custos ocultos?",
                                answer:
                                    "Orçamento fechado e transparente. Sem surpresas. O preço acordado no início é o preço final. Você sabe exatamente no que está investindo.",
                            },
                            {
                                question: "Posso acompanhar o desenvolvimento?",
                                answer:
                                    "Sim! Sprints semanais com reuniões de progresso. Você vê cada entrega. Feedback direto com o time técnico.",
                            },
                            {
                                question: "E se meus requisitos mudarem durante o projeto?",
                                answer:
                                    "Mudanças são normais. Trabalhamos com metodologia Agile. Escopo bem definido, mas com flexibilidade para ajustes estratégicos.",
                            },
                            {
                                question: "Quem lidera a consultoria?",
                                answer:
                                    "Roque Rafael Proença, consultor sênior com 10+ anos de experiência em desenvolvimento e transformação digital de empresas.",
                            },
                        ].map((faq, index) => (
                            <motion.div
                                key={index}
                                variants={itemVariants}
                                className="bg-white border-2 border-gray-200 hover:border-purple-300 rounded-xl p-6 sm:p-8 transition-all"
                            >
                                <h3 className="text-lg sm:text-xl font-display font-bold text-gray-900 mb-3">
                                    {faq.question}
                                </h3>
                                <p className="text-gray-600 text-base leading-relaxed">
                                    {faq.answer}
                                </p>
                            </motion.div>
                        ))}
                    </motion.div>

                    {/* Additional Help */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                        className="mt-12 sm:mt-16 bg-purple-50 border-2 border-purple-200 rounded-2xl p-8 sm:p-10 text-center"
                    >
                        <Phone className="w-8 h-8 text-purple-600 mx-auto mb-4" />
                        <h3 className="text-2xl sm:text-3xl font-display font-bold text-gray-900 mb-3">
                            Quer conversar com um especialista?
                        </h3>
                        <p className="text-gray-600 text-lg mb-6">
                            Agende uma consulta gratuita com Roque Rafael Proença. Sem compromisso.
                        </p>
                        <Button
                            onClick={() => window.open("https://wa.me/5532991075164", "_blank")}
                            size="lg"
                            className="bg-purple-600 hover:bg-purple-700 text-white font-bold"
                        >
                            Fale com o Consultor <ArrowRight className="w-4 h-4 ml-2" />
                        </Button>
                    </motion.div>
                </div>
            </section>

            {/* Final CTA Section */}
            <section className="relative py-16 sm:py-24 px-4 sm:px-6 lg:px-8 bg-white">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    className="max-w-4xl mx-auto rounded-3xl overflow-hidden shadow-2xl"
                >
                    <div className="absolute inset-0 bg-gradient-to-br from-purple-500 via-purple-600 to-purple-700 opacity-95" />

                    <div className="relative z-10 p-8 sm:p-12 md:p-16 text-center">
                        <motion.h2
                            initial={{ opacity: 0, y: -20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2, duration: 0.8 }}
                            viewport={{ once: true }}
                            className="text-4xl sm:text-5xl md:text-6xl font-display font-black text-white mb-4 sm:mb-6"
                        >
                            Transforme Sua Empresa Hoje
                        </motion.h2>

                        <motion.p
                            initial={{ opacity: 0, y: -10 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.3, duration: 0.8 }}
                            viewport={{ once: true }}
                            className="text-xl sm:text-2xl text-white/95 mb-6 sm:mb-8"
                        >
                            Consultoria estratégica + Desenvolvimento personalizado + Implementação completa.
                            <strong> Resultados em 15-20 dias.</strong>
                        </motion.p>

                        <motion.p
                            initial={{ opacity: 0, y: -10 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.4, duration: 0.8 }}
                            viewport={{ once: true }}
                            className="text-lg sm:text-xl text-white/90 mb-8 sm:mb-10"
                        >
                            📞 WhatsApp: (32) 99107-5164 • 💬 Conversa com especialista • 🚀 Primeiros passos hoje
                        </motion.p>

                        <motion.form
                            initial={{ opacity: 0, y: 10 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.5, duration: 0.8 }}
                            viewport={{ once: true }}
                            onSubmit={handleSubscribe}
                            className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto mb-8"
                        >
                            <Input
                                type="email"
                                placeholder="seu@email.com"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                className="bg-white/20 border-white/30 text-white placeholder:text-white/70 text-base"
                                required
                            />
                            <Button
                                type="submit"
                                size="lg"
                                className="bg-white text-purple-600 hover:bg-white/90 font-bold whitespace-nowrap"
                            >
                                {submitted ? "Redirecionando..." : "Solicitar"}
                            </Button>
                        </motion.form>

                        {submitted && (
                            <motion.p
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                className="text-sm text-white/80"
                            >
                                Obrigado! Você será redirecionado em instantes...
                            </motion.p>
                        )}

                        <p className="text-xs sm:text-sm text-white/70 mt-6">
                            ✓ Consulta gratuita • ✓ Sem compromisso • ✓ Análise profunda em 14 dias
                        </p>
                    </div>
                </motion.div>
            </section>



            {/* Footer */}
            <footer className="relative border-t-2 border-gray-200 bg-white">
                <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-12 mb-8 sm:mb-12">
                        {/* Brand */}
                        <div>
                            <h3 className="font-display font-bold text-gray-900 mb-4 text-lg">
                                TechNexos Consultoria
                            </h3>
                            <p className="text-sm text-gray-600 leading-relaxed">
                                Consultoria em Tecnologia de ponta. Transformamos visões em soluções escaláveis e
                                rentáveis para empresas de qualquer tamanho.
                            </p>
                        </div>

                        {/* Services */}
                        <div>
                            <h4 className="font-semibold text-gray-900 mb-4 text-base">Serviços</h4>
                            <ul className="space-y-3 text-sm text-gray-600">
                                <li>
                                    <a href="#solucoes" className="hover:text-purple-600 transition font-medium">
                                        Consultoria Estratégica
                                    </a>
                                </li>
                                <li>
                                    <a href="#solucoes" className="hover:text-purple-600 transition font-medium">
                                        Desenvolvimento Custom
                                    </a>
                                </li>
                                <li>
                                    <a href="#faq" className="hover:text-purple-600 transition font-medium">
                                        Dúvidas Frequentes
                                    </a>
                                </li>
                            </ul>
                        </div>

                        {/* Company */}
                        <div>
                            <h4 className="font-semibold text-gray-900 mb-4 text-base">Empresa</h4>
                            <ul className="space-y-3 text-sm text-gray-600">
                                <li>
                                    <a href="#" className="hover:text-purple-600 transition font-medium">
                                        Sobre TechNexos
                                    </a>
                                </li>
                                <li>
                                    <a href="#" className="hover:text-purple-600 transition font-medium">
                                        Termos de Uso
                                    </a>
                                </li>
                                <li>
                                    <a href="#" className="hover:text-purple-600 transition font-medium">
                                        Privacidade
                                    </a>
                                </li>
                            </ul>
                        </div>

                        {/* Contact */}
                        <div>
                            <h4 className="font-semibold text-gray-900 mb-4 text-base">Contato</h4>
                            <ul className="space-y-3 text-sm">
                                <li>
                                    <a
                                        href="https://wa.me/5532991075164"
                                        className="text-gray-600 hover:text-purple-600 transition font-medium flex items-center gap-2"
                                    >
                                        <Phone className="w-4 h-4" />
                                        (32) 99107-5164
                                    </a>
                                </li>
                                <li>
                                    <a
                                        href="mailto:contato@nexosconsultoria.com"
                                        className="text-gray-600 hover:text-purple-600 transition font-medium"
                                    >
                                        contato@nexosconsultoria.com
                                    </a>
                                </li>
                                <li className="text-gray-600">
                                    Roque Rafael Proença
                                </li>
                            </ul>
                        </div>
                    </div>

                    {/* Bottom */}
                    <div className="border-t border-gray-200 pt-8 sm:pt-12">
                        <p className="text-center text-sm text-gray-600 mb-2">
                            © 2024 TechNexos Consultoria em Tecnologia. Todos os direitos reservados.
                        </p>
                        <p className="text-center text-xs text-gray-500">
                            Desenvolvido com 💜 para empresas que buscam transformação digital real
                        </p>
                    </div>
                </div>
            </footer>

            {/* Scroll to Top Button */}
            {showScrollTop && (
                <motion.button
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 20 }}
                    onClick={scrollToTop}
                    className="fixed bottom-8 right-8 p-3 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-full shadow-lg hover:shadow-xl hover:from-purple-700 hover:to-pink-700 transition-all z-50"
                    aria-label="Scroll to top"
                >
                    <ArrowUp className="w-5 h-5" />
                </motion.button>
            )}
        </div>
    );
};

export default Landing;
