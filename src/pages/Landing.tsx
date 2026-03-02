import { useState } from "react";
import { useNavigate } from "react-router-dom";
import roqueImage from "@/img/roque-rafael-proenca-consultor.png";
import { motion } from "framer-motion";
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
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const Landing = () => {
    const navigate = useNavigate();
    const [email, setEmail] = useState("");
    const [submitted, setSubmitted] = useState(false);

    const handleSubscribe = (e: React.FormEvent) => {
        e.preventDefault();
        if (email) {
            setSubmitted(true);
            setTimeout(() => {
                navigate("/plan-auth", { state: { email } });
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
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
                    {/* Logo */}
                    <div className="flex items-center gap-2 sm:gap-3">
                        <motion.div
                            whileHover={{ scale: 1.1, rotate: 5 }}
                            className="w-10 h-10 rounded-lg bg-gradient-to-br from-purple-500 to-purple-700 flex items-center justify-center shadow-lg shadow-purple-500/50"
                        >
                            <Code2 className="w-6 h-6 text-white" />
                        </motion.div>
                        <div>
                            <h1 className="text-lg sm:text-xl font-display font-bold text-gray-900">
                                Nexos Consultoria
                            </h1>
                            <p className="text-xs sm:text-sm text-gray-600">
                                Tecnologia que Transforma
                            </p>
                        </div>
                    </div>

                    {/* Navigation */}
                    <div className="flex items-center gap-2 sm:gap-3">
                        <Button
                            onClick={() => {
                                const element = document.getElementById("solucoes");
                                element?.scrollIntoView({ behavior: "smooth" });
                            }}
                            variant="ghost"
                            size="sm"
                            className="hidden sm:inline-flex text-gray-700 hover:text-purple-600"
                        >
                            Soluções
                        </Button>
                        <Button
                            onClick={() => {
                                const element = document.getElementById("faq");
                                element?.scrollIntoView({ behavior: "smooth" });
                            }}
                            variant="ghost"
                            size="sm"
                            className="hidden sm:inline-flex text-gray-700 hover:text-purple-600"
                        >
                            FAQ
                        </Button>
                        <Button
                            onClick={() => window.open("https://wa.me/5532991075164", "_blank")}
                            variant="ghost"
                            size="sm"
                            className="text-gray-700 hover:text-purple-600"
                        >
                            Contato
                        </Button>
                        <Button
                            onClick={() => navigate("/plan-auth")}
                            size="sm"
                            className="bg-purple-600 hover:bg-purple-700 text-white font-bold"
                        >
                            <span className="hidden sm:inline">Solicitar Diagnóstico</span>
                            <span className="sm:hidden">Diagnóstico</span>
                        </Button>
                        <Button
                            onClick={() => navigate("/auth")}
                            variant="outline"
                            size="sm"
                            className="border-gray-300 text-white hover:border-purple-400 hover:text-white"
                        >
                            <span className="hidden sm:inline">Acesso</span>
                            <span className="sm:hidden">Login</span>
                        </Button>
                    </div>
                </div>
            </header>

            {/* Hero + Problem Section Combined */}
            <section className="relative min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 pt-20 pb-12 lg:pt-24 lg:pb-20 bg-white">
                <div className="max-w-7xl mx-auto w-full">
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
                            {/* Main Headline */}
                            <motion.h1
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.2, duration: 0.8 }}
                                className="text-4xl sm:text-5xl md:text-6xl font-display font-black text-gray-900 mb-6 leading-tight"
                            >
                                Sua Empresa{" "}
                                <span className="bg-gradient-to-r from-purple-500 to-purple-700 bg-clip-text text-transparent">
                                    Merece Tecnologia
                                </span>
                                <br />
                                <span className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-800">
                                    de Verdade
                                </span>
                            </motion.h1>

                            {/* Subheadline */}
                            <motion.p
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.3, duration: 0.8 }}
                                className="text-lg sm:text-xl text-gray-600 mb-8 leading-relaxed"
                            >
                                Consultoria estratégica, desenvolvimento personalizado e implementação ponta a ponta.
                                <strong className="text-purple-600"> Da visão à realidade em poucos passos.</strong>
                            </motion.p>



                            {/* Value Highlight */}
                            <motion.div
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ delay: 0.6, duration: 0.8 }}
                                className="bg-white border-2 border-purple-200 rounded-2xl p-6 sm:p-8 mb-8 shadow-xl"
                            >
                                <div className="grid grid-cols-2 gap-4">
                                    <div className="text-center">
                                        <p className="text-gray-600 text-xs sm:text-sm mb-2">Investimento</p>
                                        <p className="text-3xl sm:text-4xl font-display font-black text-purple-600">
                                            Sob Demanda
                                        </p>
                                        <p className="text-xs text-gray-500 mt-2">
                                            Customizado
                                        </p>
                                    </div>
                                    <div className="text-center border-l border-gray-200">
                                        <p className="text-gray-600 text-xs sm:text-sm mb-2">Com Você Em</p>
                                        <div className="flex items-center justify-center gap-2">
                                            <Briefcase className="w-4 h-4 sm:w-5 sm:h-5 text-purple-500" />
                                            <p className="text-2xl sm:text-3xl font-display font-bold text-purple-600">
                                                100%
                                            </p>
                                        </div>
                                        <p className="text-xs text-gray-500 mt-2">
                                            Do Projeto
                                        </p>
                                    </div>
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
                            <div className="space-y-6">
                                <motion.div
                                    initial={{ opacity: 0, scale: 0.9 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    transition={{ delay: 0.4, duration: 0.8 }}
                                    className="relative rounded-3xl overflow-hidden shadow-2xl"
                                >
                                    <img
                                        src={roqueImage}
                                        alt="Roque Rafael Proença - Consultor Sênior"
                                        className="w-full h-auto object-cover"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                                    <motion.div
                                        initial={{ opacity: 0, x: -20 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        transition={{ delay: 0.8, duration: 0.6 }}
                                        className="absolute bottom-6 left-6 bg-white/95 backdrop-blur-md rounded-xl p-4 flex items-center gap-3 shadow-xl"
                                    >
                                        <Sparkles className="w-5 h-5 text-purple-600 flex-shrink-0" />
                                        <div>
                                            <p className="text-sm font-bold text-gray-900">
                                                Roque Rafael Proença
                                            </p>
                                            <p className="text-xs text-gray-600">
                                                10+ anos de consultoria
                                            </p>
                                        </div>
                                    </motion.div>
                                </motion.div>


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
                            Por isso criamos Nexos: para transformar sua visão em soluções reais,
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
                                        onClick={() => navigate("/plan-auth")}
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
                                    250+
                                </p>
                            </motion.div>
                            <p className="text-gray-700 text-sm font-semibold">
                                Empresas transformadas com tecnologia
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
                            Por que escolher <span className="text-purple-600">Nexos Consultoria</span>?
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
                            Metodologia Nexos
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
                                    onClick={() => navigate("/plan-auth")}
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
                                Nexos Consultoria
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
                                        Sobre Nexos
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
                            © 2024 Nexos Consultoria em Tecnologia. Todos os direitos reservados.
                        </p>
                        <p className="text-center text-xs text-gray-500">
                            Desenvolvido com 💜 para empresas que buscam transformação digital real
                        </p>
                    </div>
                </div>
            </footer>
        </div>
    );
};

export default Landing;
