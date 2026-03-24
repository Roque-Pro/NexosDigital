import { useState, useEffect } from "react";
import { useSEO } from "@/hooks/useSEO";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppFloat from "@/components/WhatsAppFloat";
import YouTubeVideosSection from "@/components/YouTubeVideosSection";
import mec1Img from "@/img/mec1.png";
import carImg from "@/img/car.png";
import fundoHeroImg from "@/img/fundo-hero.png";
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
    Headphones,
    ChevronDown,
    ChevronLeft,
    ChevronRight,
    X,
} from "lucide-react";

const AutoClubPro = () => {
    const [email, setEmail] = useState("");
    const [submitted, setSubmitted] = useState(false);
    const [selectedImage, setSelectedImage] = useState<string | null>(null);
    const [timeLeft, setTimeLeft] = useState(48 * 60 * 60); // 48 horas em segundos
    const [currentHeroIndex, setCurrentHeroIndex] = useState(0);

    const heroes = [
        {
            id: 1,
            backgroundImage: fundoHeroImg
        },
        {
            id: 2,
            backgroundImage: fundoHeroImg
        },
        {
            id: 3,
            backgroundImage: fundoHeroImg
        }
    ];

    // SEO Absurdo - AutoClub Pro
    useSEO({
        title: "AutoClub Pro | Sistema de Agendamentos para Vidros, Estética, Películas, Som, Capotaria, Ar-condicionado e Pneus | R$ 349 + R$ 89/mês | TechNexos",
        description: "AutoClub Pro - Sistema completo para vidraçarias, estética automotiva, películas/envelopamento, som/acessórios, capotaria, ar-condicionado e pneuarias. Gestão de clientes, agendamentos, comissões, estoque e integrações. MVP em 10 dias. R$ 349 de implementação + R$ 89/mês. Suporte 24/7 via WhatsApp. Aumente seu faturamento até +300%.",
        keywords: [
            "autoclub pro",
            "sistema vidros automotivos",
            "software estética automotiva",
            "gestão películas envelopamento",
            "sistema som acessórios automotivos",
            "software capotaria automotiva",
            "sistema ar-condicionado automotivo",
            "gestão pneus rodas",
            "agendamentos automotivos",
            "gestão comissões vendedor",
            "controle estoque automotivo",
            "integração whatsapp instagram facebook",
            "dashboard vendas automotiva",
            "software especializado automotivo",
            "sistema agendamentos online",
            "gestão clientes automotiva",
            "comissão automática vendedor",
            "software saas automotivo",
            "sistema cloud negócio automotivo",
            "tecnologia automotiva Brasil",
            "sistema gestão auto especializado",
            "gestão funcionários automotivo",
            "retenção clientes automotiva",
            "alerts reposição estoque",
            "análise faturamento serviços auto",
            "automação processos automotivos",
        ],
        ogTitle: "AutoClub Pro | Sistema Profissional para Serviços Automotivos com Agendamento",
        ogDescription: "Sistema especializado para vidros, estética, películas, som, capotaria, ar-condicionado e pneus. Aumenta faturamento até +300%. Gestão completa, integrações inteligentes e suporte 24/7. R$ 349 implementação + R$ 89/mês.",
        ogUrl: "https://www.technexos.com.br/autoclub-pro",
        twitterTitle: "AutoClub Pro - Sistema de Agendamentos para Serviços Automotivos",
        twitterDescription: "Transforme seu negócio de vidros, estética, películas, som, capotaria, ar-condicionado ou pneus. Aumente vendas, retenha clientes, automatize agendamentos.",
        canonicalUrl: "https://www.technexos.com.br/autoclub-pro",
        googleSiteVerification: "TU7NzrXfsfOsd_Y-dzJPhTKTXodzzW3jeG5vTx6kxRI",
        schema: {
            "@context": "https://schema.org",
            "@type": "SoftwareApplication",
            "name": "AutoClub Pro",
            "applicationCategory": "BusinessApplication",
            "description": "Sistema completo de agendamentos e gestão para vidraçarias, estética automotiva, películas/envelopamento, som/acessórios, capotaria, ar-condicionado automotivo e pneuarias",
            "url": "https://www.technexos.com.br/autoclub-pro",
            "creator": {
                "@type": "Organization",
                "name": "TechNexos Consultoria em Tecnologia",
                "founder": {
                    "@type": "Person",
                    "name": "Roque Rafael Proença"
                }
            },
            "offers": {
                "@type": "Offer",
                "price": "3700",
                "priceCurrency": "BRL",
                "priceValidUntil": "2025-12-31",
                "description": "AutoClub Pro Sistema Profissional - R$ 349 implementação + R$ 89/mês",
                "availability": "https://schema.org/InStock",
                "deliveryTime": "P10D"
            },
            "features": [
                "Gestão Completa de Clientes",
                "Controle de Vendas",
                "Comissões Automáticas",
                "Gestão de Estoque",
                "Agendamentos Inteligentes",
                "Integração WhatsApp/Instagram/Facebook",
                "Dashboard Analytics",
                "Suporte 24/7"
            ],
            "aggregateRating": {
                "@type": "AggregateRating",
                "ratingValue": "5",
                "ratingCount": "50"
            }
        }
    });

    // Timer que reinicia a cada 48 horas
    useEffect(() => {
        const interval = setInterval(() => {
            setTimeLeft((prev) => {
                if (prev <= 1) {
                    return 48 * 60 * 60; // Reinicia para 48 horas
                }
                return prev - 1;
            });
        }, 1000);

        return () => clearInterval(interval);
    }, []);

    // Auto-rotate hero carousel
    useEffect(() => {
        const carouselInterval = setInterval(() => {
            setCurrentHeroIndex((prev) => (prev + 1) % heroes.length);
        }, 8000); // Muda a cada 8 segundos

        return () => clearInterval(carouselInterval);
    }, [heroes.length]);

    // Navegação do carrossel
    const nextHero = () => {
        setCurrentHeroIndex((prev) => (prev + 1) % heroes.length);
    };

    const prevHero = () => {
        setCurrentHeroIndex((prev) => (prev - 1 + heroes.length) % heroes.length);
    };

    // Função para formatar o tempo em HH:MM:SS
    const formatTime = (seconds: number) => {
        const hours = Math.floor(seconds / 3600);
        const minutes = Math.floor((seconds % 3600) / 60);
        const secs = seconds % 60;
        return `${hours.toString().padStart(2, "0")}:${minutes.toString().padStart(2, "0")}:${secs.toString().padStart(2, "0")}`;
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // TODO: Integrar com backend para salvar email
        setSubmitted(true);
        setTimeout(() => {
            setSubmitted(false);
            setEmail("");
        }, 5000);
    };

    // Dores dos Negócios Automotivos de Serviços
    const painPoints = [
        {
            title: "Clientes espalhados em anotações",
            icon: Users,
            color: "from-red-500 to-orange-500"
        },
        {
            title: "Agenda cheia de gaps e cancelamentos",
            icon: Clock,
            color: "from-red-500 to-orange-500"
        },
        {
            title: "Não sabe qual vendedor fecha mais",
            icon: TrendingUp,
            color: "from-red-500 to-orange-500"
        },
        {
            title: "Estoque de peças desaparece",
            icon: BarChart3,
            color: "from-red-500 to-orange-500"
        },
        {
            title: "Comissão é briga toda semana",
            icon: DollarSign,
            color: "from-red-500 to-orange-500"
        },
        {
            title: "Não sabe por que lucro cai",
            icon: Zap,
            color: "from-red-500 to-orange-500"
        },
    ];

    // Funcionalidades Agrupadas
    const features = [
        {
            category: "Gestão de Agendamentos",
            features: [
                {
                    title: "Agendamentos Inteligentes",
                    description: "Clientes marcam online 24/7, lembretes automáticos por SMS/WhatsApp, calendário sem gaps",
                    icon: Clock,
                    benefit: "Agenda 100% preenchida. Cancelamentos reduzem. Cliente nunca esquece",
                },
                {
                    title: "Gestão Completa de Clientes",
                    description: "Histórico de cada cliente, veículos, preferências, datas de volta, histórico de gastos",
                    icon: Users,
                    benefit: "Personalização total. Cliente sente importância, volta sempre",
                },
            ]
        },
        {
            category: "Vendas e Financeiro",
            features: [
                {
                    title: "Controle de Vendas por Vendedor",
                    description: "Quem vendeu, quanto vendeu, taxa de fechamento, comissão em tempo real",
                    icon: TrendingUp,
                    benefit: "Vendedor motivado. Você sabe exatamente quem entrega resultados",
                },
                {
                    title: "Comissões Automáticas",
                    description: "Calcula sem erro, histórico completo de ganhos, comprovante digital printável",
                    icon: DollarSign,
                    benefit: "Retém melhores vendedores. Fim das brigas sobre comissão",
                },
                {
                    title: "Controle de Estoque",
                    description: "Peças, produtos, código de barras, preços em tempo real, alertas de mínimo automáticos",
                    icon: BarChart3,
                    benefit: "Nunca falta produto importante. Estoque não desaparece",
                },
            ]
        },
        {
            category: "Automação e Inteligência",
            features: [
                {
                    title: "Gestão de Serviços",
                    description: "Registre cada tipo de serviço (vidro, película, som, etc), associe técnicos, precificação automática",
                    icon: Zap,
                    benefit: "Cada cliente sabe o que esperar. Margem melhor controlada",
                },
                {
                    title: "Dashboard Executivo",
                    description: "Visualize tudo em tempo real: faturamento do dia, agendamentos futuros, produtos mais vendidos",
                    icon: CheckCircle2,
                    benefit: "Tome decisões com dados, não no escuro",
                },
            ]
        },
    ];

    const successStories = [
        {
            name: "Vidraçaria Premium",
            location: "São Paulo, SP",
            type: "Vidros Automotivos",
            image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=400&h=300&fit=crop",
            quote:
                "AutoClub Pro preencheu nossa agenda de forma consistente. Antes tínhamos muitos gaps. Agora cliente agenda online e não cancela mais.",
            results: [
                "Ocupação da agenda: de 60% para 95%",
                "Agendamentos por mês: +65%",
                "Faturamento: +R$18.000/mês",
            ],
        },
        {
            name: "Estética Pro Veículos",
            location: "Belo Horizonte, MG",
            type: "Estética Automotiva",
            image: "https://images.unsplash.com/photo-1487754180144-351b8e906e6c?w=400&h=300&fit=crop",
            quote:
                "Com agendamentos automáticos, nossa equipe de 6 pessoas ficou muito mais produtiva. Ficamos sabendo quem é nosso melhor técnico, aumentamos comissão dele e faturamento disparou.",
            results: [
                "Produtividade técnicos: +42%",
                "Clientes recorrentes: +50%",
                "Faturamento: +R$22.000/mês",
            ],
        },
        {
            name: "Películas & Envelopamento Total",
            location: "Recife, PE",
            type: "Películas e Envelopamento",
            image: "https://images.unsplash.com/photo-1530124566582-a618bc2615dc?w=400&h=300&fit=crop",
            quote:
                "Sistema mostrou que 70% da nossa margem de lucro vem de 2 tipos de serviços. Otimizamos estoque, reduzimos desperdício e nossa margem subiu de 18% para 32%.",
            results: [
                "Margem de lucro: de 18% para 32%",
                "Capital parado em estoque: -45%",
                "Taxa de retorno cliente: +48%",
            ],
        },
    ];

    const problems = [
        {
            problem: "Clientes espalhados em WhatsApp, planilhas e anotações",
            result: "Histórico perdido, cliente pensa que foi esquecido, nunca volta",
            solution: "Banco de dados centralizado com histórico completo de cada cliente",
        },
        {
            problem: "Agenda com gaps imensos e cancelamentos de última hora",
            result: "Técnicos ociosos, faturamento imprévisível, equipe desocupada",
            solution: "Agendamentos online com lembretes automáticos, reduz cancelamentos em até 60%",
        },
        {
            problem: "Vendedores/técnicos não sabem quanto já venderam ou serviços prestaram",
            result: "Sem motivação, competição interna, brigas",
            solution: "Dashboard em tempo real: cada um vê seu histórico e comissão",
        },
        {
            problem: "Estoque de peças desaparece sem rastreamento",
            result: "Roubos, desperdício, capital parado, falta produto na hora",
            solution: "Rastreamento 100% com código de barras e histórico de todas movimentações",
        },
        {
            problem: "Comissões demorando semanas ou meses para calcular",
            result: "Desgaste com vendedor/técnico, brigas todo mês, até saem da empresa",
            solution: "Cálculo automático diário, comprovante digital, zero discussão",
        },
        {
            problem: "Lucro cai sem saber exatamente por quê",
            result: "Decisões no escuro, desperdício continua, margem fica cada vez pior",
            solution: "Dashboard com margens por serviço, volume de agendamentos, taxa de cancelamento",
        },
    ];

    const comparison = [
        {
            feature: "Comissão Automática",
            excel: "❌",
            antigos: "❌",
            autoclub: "✅",
        },
        {
            feature: "Agendamentos Inteligentes",
            excel: "❌",
            antigos: "⚠️",
            autoclub: "✅",
        },
        {
            feature: "Acesso Via Celular",
            excel: "❌",
            antigos: "⚠️",
            autoclub: "✅",
        },
        {
            feature: "Backup Automático",
            excel: "❌",
            antigos: "⚠️",
            autoclub: "✅",
        },
        {
            feature: "Relatórios em Tempo Real",
            excel: "❌",
            antigos: "⚠️",
            autoclub: "✅",
        },
        {
            feature: "Sem Técnico de TI",
            excel: "✅",
            antigos: "❌",
            autoclub: "✅",
        },
    ];

    return (
        <div className="min-h-screen bg-background text-foreground">
            <Navbar />
            <main className="overflow-hidden">
                {/* Hero Carousel Container */}
                <div className="relative min-h-screen overflow-hidden">
                    {/* Carousel Wrapper com transição suave */}
                    <div
                        className="flex ease-in-out"
                        style={{
                            transform: `translateX(-${currentHeroIndex * 100}%)`,
                            transition: 'transform 1.5s ease-in-out'
                        }}
                    >
                        {/* Hero 1 */}
                        <section className="relative w-full flex-shrink-0 flex items-center justify-center overflow-hidden bg-black pt-16 pb-16" style={{ minHeight: 'calc(100vh - 50px)' }}>
                            {/* Background Image */}
                            <div className="absolute inset-0 z-0">
                                <img
                                    src={heroes[currentHeroIndex].backgroundImage}
                                    alt="Negócio Automotivo"
                                    className="w-full h-full object-cover opacity-35 transition-opacity duration-500"
                                    loading="eager"
                                    decoding="async"
                                />
                                <div className="absolute inset-0 bg-gradient-to-r from-black via-black/70 to-black/40"></div>
                            </div>

                            {/* Content */}
                            <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
                                <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-center">
                                    {/* Left Side */}
                                    <div className={`md:col-span-6 ${currentHeroIndex === 0 ? "text-white" : "text-yellow-50"}`} style={{ minHeight: '400px', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                                        <div style={{ height: '50px', display: 'flex', alignItems: 'flex-end', marginBottom: '12px' }}>
                                            <div className={`px-4 py-2 rounded-full text-sm font-semibold border inline-block ${currentHeroIndex === 0 ? "bg-blue-600/30 text-blue-300 border-blue-500/50" : currentHeroIndex === 1 ? "bg-orange-600/40 text-orange-200 border-orange-500/50" : "bg-purple-600/40 text-purple-200 border-purple-500/50"}`}>
                                                {currentHeroIndex === 0 ? "🚗 Vidraçaria com Agendamentos" : currentHeroIndex === 1 ? "✨ Estética Automotiva Premium" : "🎨 Películas & Envelopamento"}
                                            </div>
                                        </div>

                                        <h1 className="leading-tight mb-6 font-black text-5xl sm:text-6xl lg:text-7xl">
                                            {currentHeroIndex === 0 ? (
                                                <>Vidros Sempre<br /><span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">Agendados.</span></>
                                            ) : currentHeroIndex === 1 ? (
                                                <>Transforme a Estética<br /><span className="bg-gradient-to-r from-orange-400 to-yellow-400 bg-clip-text text-transparent">em Lucro.</span></>
                                            ) : (
                                                <>Películas & Envelopamento<br /><span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">Sempre Agendados.</span></>
                                            )}
                                        </h1>

                                        <div className="md:hidden flex justify-center mb-6">
                                            <img src={currentHeroIndex === 0 ? mec1Img : carImg} alt="Veículo" className="rounded-2xl shadow-2xl" style={{ maxHeight: '300px', objectFit: 'contain' }} />
                                        </div>

                                        <p className={`leading-relaxed mb-6 ${currentHeroIndex === 0 ? "text-xl text-slate-200" : currentHeroIndex === 1 ? "text-xl text-orange-100" : "text-xl text-purple-100"}`}>
                                            {currentHeroIndex === 0
                                                ? "Vidraçarias com agenda 60% vazia ganham +R$8.000/mês em 90 dias. Clientes marcam online 24/7, agenda sempre preenchida, zero cancelamentos."
                                                : currentHeroIndex === 1
                                                    ? "Estéticas que usam AutoClub Pro aumentam produtividade dos técnicos em 42%. Agenda cheia, clientes fidelizados, comissão automática."
                                                    : "Películas e envelopamento têm margem de 30%+ mas perdem clientes por falta de agendamentos. Com AutoClub Pro: agenda 95% preenchida, +R$15.000/mês."
                                            }
                                        </p>

                                        <div className="space-y-3 mb-8">
                                            <div className="flex items-center gap-3">
                                                <CheckCircle2 className={`h-5 w-5 flex-shrink-0 ${currentHeroIndex === 0 ? "text-blue-400" : "text-orange-400"}`} />
                                                <div>
                                                    <p className={`font-bold text-sm ${currentHeroIndex === 0 ? "text-white" : "text-orange-50"}`}>{currentHeroIndex === 0 ? "Pronto em 3 Dias" : "Implementação Rápida"}</p>
                                                                               <p className={`text-xs ${currentHeroIndex === 0 ? "text-slate-300" : "text-orange-200"}`}>{currentHeroIndex === 0 ? "Sistema personalizado" : "Sistema rodando em 3 dias"}</p>
                                                </div>
                                            </div>
                                            <div className="flex items-center gap-3">
                                                <CheckCircle2 className={`h-5 w-5 flex-shrink-0 ${currentHeroIndex === 0 ? "text-blue-400" : "text-orange-400"}`} />
                                                <div>
                                                    <p className={`font-bold text-sm ${currentHeroIndex === 0 ? "text-white" : "text-orange-50"}`}>{currentHeroIndex === 0 ? "Suporte 24/7h" : "Suporte Premium"}</p>
                                                    <p className={`text-xs ${currentHeroIndex === 0 ? "text-slate-300" : "text-orange-200"}`}>{currentHeroIndex === 0 ? "Via WhatsApp" : "Consultoria incluída"}</p>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="flex flex-col sm:flex-row gap-4">
                                            <Button size="lg" className={`text-white px-8 py-6 font-bold ${currentHeroIndex === 0 ? "bg-blue-600 hover:bg-blue-700" : "bg-orange-600 hover:bg-orange-700"}`} onClick={() => document.getElementById("proposal")?.scrollIntoView({ behavior: "smooth" })}>
                                                {currentHeroIndex === 0 ? "Ver Proposta" : "Começar Agora"}
                                            </Button>
                                            <Button size="lg" className={`text-white px-8 py-6 font-bold ${currentHeroIndex === 0 ? "bg-green-600 hover:bg-green-700" : "bg-red-600 hover:bg-red-700"}`} onClick={() => window.open("https://wa.me/5532991075164")}>
                                                💬 WhatsApp
                                            </Button>
                                        </div>
                                    </div>

                                    {/* Right Side Image */}
                                    <div className="hidden md:flex md:col-span-6 justify-end">
                                        <div className="relative" style={{ width: '550px', height: '550px' }}>
                                            <div className="absolute inset-0 rounded-3xl" style={{ background: 'radial-gradient(circle at center, rgba(255,255,255,0.4) 0%, rgba(255,255,255,0.15) 40%, transparent 70%)', filter: 'blur(20px)' }}></div>
                                            <img src={mec1Img} alt="Carro" className="relative rounded-3xl" style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'bottom', transform: 'translateY(100px)' }} />
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Scroll Indicator */}
                            <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 z-10 text-center pointer-events-none">
                                <p className="text-white text-xs font-semibold mb-2">Veja como funciona</p>
                                <ChevronDown className="w-5 h-5 text-blue-400 animate-bounce mx-auto" />
                            </div>
                        </section>

                        {/* Hero 2 - Duplicado com cores diferentes */}
                        <section className="relative w-full flex-shrink-0 flex items-center justify-center overflow-hidden bg-black pt-16 pb-16" style={{ minHeight: 'calc(100vh - 50px)' }}>
                            {/* Background Image */}
                            <div className="absolute inset-0 z-0">
                                <img
                                    src={heroes[1].backgroundImage}
                                    alt="Negócio Automotivo"
                                    className="w-full h-full object-cover opacity-35 transition-opacity duration-500"
                                />
                                <div className="absolute inset-0 bg-gradient-to-r from-orange-950 via-orange-950/70 to-orange-950/40"></div>
                            </div>

                            {/* Content */}
                            <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                                <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-center">
                                    {/* Left Side - Text - Takes 6 columns */}
                                    <div className={`md:col-span-6 order-1 md:order-1 text-yellow-50`} style={{ minHeight: '400px', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                                        <div style={{ height: '50px', display: 'flex', alignItems: 'flex-end', marginBottom: '12px' }}>
                                            <div className="inline-block">
                                                <div className={`px-4 py-2 rounded-full text-sm font-semibold border bg-orange-600/40 text-orange-200 border-orange-500/50`}>
                                                    ✨ Estética Automotiva
                                                </div>
                                            </div>
                                        </div>

                                        <h1 className={`leading-tight mb-6 font-black text-5xl sm:text-6xl lg:text-7xl`}>
                                            <>Estética Automotiva<br /><span className="bg-gradient-to-r from-orange-400 to-yellow-400 bg-clip-text text-transparent">Com Agendamentos.</span></>
                                        </h1>

                                        {/* Mobile Image - positioned between title and paragraph */}
                                        <div className="md:hidden flex justify-center">
                                            <div className="relative w-full max-w-sm">
                                                <div className="absolute -inset-4 bg-gradient-to-r from-orange-600/30 to-yellow-600/30 rounded-3xl blur-3xl"></div>
                                                <img
                                                    src={carImg}
                                                    alt="Carro"
                                                    className="relative rounded-2xl shadow-2xl w-full h-auto"
                                                    style={{ maxHeight: '400px', objectFit: 'contain' }}
                                                />
                                            </div>
                                        </div>

                                        <div>
                                            <p className={`leading-relaxed text-lg text-orange-100`}>
                                                Estética automotiva cresce quando técnicos não ficam ociosos. Com agendamentos online, você preenche 90%+ da agenda. Mais clientes, mais técnicos trabalhando, mais lucro. Sistema pronto em 10 dias.
                                            </p>
                                        </div>

                                        {/* Value Props - Simples e Limpo */}
                                        <div className="space-y-5 pt-6">
                                            <div className="flex items-center gap-4">
                                                <div className={`flex-shrink-0 p-2 rounded-lg bg-orange-600/40`}>
                                                    <CheckCircle2 className={`h-6 w-6 text-orange-400`} />
                                                </div>
                                                <div>
                                                    <p className={`font-bold text-orange-50`}>
                                                       Implementação Rápida
                                                     </p>
                                                     <p className={`text-sm text-orange-200`}>
                                                       Seu sistema rodando em 3 dias
                                                     </p>
                                                </div>
                                            </div>

                                            <div className="flex items-center gap-4">
                                                <div className={`flex-shrink-0 p-2 rounded-lg bg-orange-600/40`}>
                                                    <CheckCircle2 className={`h-6 w-6 text-orange-400`} />
                                                </div>
                                                <div>
                                                    <p className={`font-bold text-orange-50`}>
                                                        Suporte Premium 24/7
                                                    </p>
                                                    <p className={`text-sm text-orange-200`}>
                                                        Consultoria incluída
                                                    </p>
                                                </div>
                                            </div>
                                        </div>

                                        {/* CTAs */}
                                        <div className="flex flex-col sm:flex-row gap-4 pt-4">
                                            <Button
                                                size="lg"
                                                className={`text-white px-8 py-6 font-bold shadow-lg rounded-lg bg-gradient-to-r from-orange-600 to-orange-700 hover:from-orange-700 hover:to-orange-800`}
                                                onClick={() =>
                                                    document
                                                        .getElementById("proposal")
                                                        ?.scrollIntoView({ behavior: "smooth" })
                                                }
                                            >
                                                Começar Agora <ArrowRight className="ml-2 w-4 h-4" />
                                            </Button>
                                            <Button
                                                size="lg"
                                                className={`text-white px-8 py-6 font-bold shadow-lg rounded-lg bg-red-600 hover:bg-red-700`}
                                                onClick={() =>
                                                    window.open("https://wa.me/5532991075164", "_blank")
                                                }
                                            >
                                                💬 WhatsApp
                                            </Button>
                                        </div>
                                    </div>

                                    {/* Right Side - Image - Takes 6 columns */}
                                    <div className="hidden md:flex md:col-span-6 justify-end items-center order-2 md:order-2">
                                        <div className="relative" style={{ width: '500px', height: '500px' }}>
                                            {/* Light Background */}
                                            <div className="absolute inset-0 rounded-3xl" style={{
                                                background: 'radial-gradient(circle at center, rgba(255,255,255,0.4) 0%, rgba(255,255,255,0.15) 40%, transparent 70%)',
                                                filter: 'blur(20px)',
                                                zIndex: 0
                                            }}></div>

                                            {/* Image */}
                                            <img
                                                src={carImg}
                                                alt="Carro"
                                                className="relative rounded-3xl"
                                                style={{ width: '100%', height: '100%', objectFit: 'contain', zIndex: 1 }}
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Scroll Indicator */}
                            <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 z-10 text-center pointer-events-none">
                                <p className="text-white text-xs font-semibold mb-2">Veja como funciona</p>
                                <ChevronDown className="w-5 h-5 text-orange-400 animate-bounce mx-auto" />
                            </div>
                        </section>

                        {/* Hero 3 - Verde com Caminhão */}
                        <section className="relative w-full flex-shrink-0 flex items-center justify-center overflow-hidden bg-black pt-16 pb-16" style={{ minHeight: 'calc(100vh - 50px)' }}>
                            {/* Background Image */}
                            <div className="absolute inset-0 z-0">
                                <img
                                    src={heroes[2].backgroundImage}
                                    alt="Negócio Automotivo"
                                    className="w-full h-full object-cover opacity-35 transition-opacity duration-500"
                                />
                                <div className="absolute inset-0 bg-gradient-to-r from-green-950 via-green-950/70 to-green-950/40"></div>
                            </div>

                            {/* Content */}
                            <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                                <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-center">
                                    {/* Left Side - Text - Takes 6 columns */}
                                    <div className={`md:col-span-6 order-1 md:order-1 text-emerald-50`} style={{ minHeight: '400px', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                                        <div style={{ height: '50px', display: 'flex', alignItems: 'flex-end', marginBottom: '12px' }}>
                                            <div className="inline-block">
                                                <div className={`px-4 py-2 rounded-full text-sm font-semibold border bg-purple-600/40 text-purple-200 border-purple-500/50`}>
                                                    🎨 Películas & Envelopamento
                                                </div>
                                            </div>
                                        </div>

                                        <h1 className={`leading-tight mb-6 font-black text-5xl sm:text-6xl lg:text-7xl`}>
                                            Películas & Envelopamento<br /><span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">Sempre Agendados.</span>
                                        </h1>

                                        {/* Mobile Image - positioned between title and paragraph */}
                                        <div className="md:hidden flex justify-center">
                                            <div className="relative w-full max-w-sm">
                                                <div className="absolute -inset-4 bg-gradient-to-r from-emerald-600/30 to-teal-600/30 rounded-3xl blur-3xl"></div>
                                                <img
                                                    src="/truck.png"
                                                    alt="Caminhão"
                                                    className="relative rounded-2xl shadow-2xl w-full h-auto"
                                                    style={{ maxHeight: '400px', objectFit: 'contain' }}
                                                />
                                            </div>
                                        </div>

                                        <div>
                                            <p className={`leading-relaxed text-xl text-purple-100`}>
                                                Películas e envelopamento exigem agendamentos bem sincronizados. Com AutoClub Pro: clientes marcam, você gerencia equipe, não perde ninguém. Margem de 30%+ com agenda 95% preenchida. Lucro garantido.
                                            </p>
                                        </div>

                                        {/* Value Props - Simples e Limpo */}
                                        <div className="space-y-5 pt-6">
                                            <div className="flex items-center gap-4">
                                                <div className={`flex-shrink-0 p-2 rounded-lg bg-purple-600/40`}>
                                                    <CheckCircle2 className={`h-6 w-6 text-purple-400`} />
                                                </div>
                                                <div>
                                                    <p className={`font-bold text-purple-50`}>
                                                        Agendamentos Automáticos
                                                    </p>
                                                    <p className={`text-sm text-purple-200`}>
                                                        Cliente marca e recebe lembrete
                                                    </p>
                                                </div>
                                            </div>

                                            <div className="flex items-center gap-4">
                                                <div className={`flex-shrink-0 p-2 rounded-lg bg-purple-600/40`}>
                                                    <CheckCircle2 className={`h-6 w-6 text-purple-400`} />
                                                </div>
                                                <div>
                                                    <p className={`font-bold text-purple-50`}>
                                                        Gestão de Equipe
                                                    </p>
                                                    <p className={`text-sm text-purple-200`}>
                                                        Atribua técnicos, controle comissão
                                                    </p>
                                                </div>
                                            </div>
                                        </div>

                                        {/* CTAs */}
                                        <div className="flex flex-col sm:flex-row gap-4 pt-4">
                                            <Button
                                                size="lg"
                                                className={`text-white px-8 py-6 font-bold shadow-lg rounded-lg bg-gradient-to-r from-purple-600 to-purple-700 hover:from-purple-700 hover:to-purple-800`}
                                                onClick={() =>
                                                    document
                                                        .getElementById("proposal")
                                                        ?.scrollIntoView({ behavior: "smooth" })
                                                }
                                            >
                                                Ver Detalhes <ArrowRight className="ml-2 w-4 h-4" />
                                            </Button>
                                            <Button
                                                size="lg"
                                                className={`text-white px-8 py-6 font-bold shadow-lg rounded-lg bg-teal-600 hover:bg-teal-700`}
                                                onClick={() =>
                                                    window.open("https://wa.me/5532991075164", "_blank")
                                                }
                                            >
                                                💬 WhatsApp
                                            </Button>
                                        </div>
                                    </div>

                                    {/* Right Side - Image - Takes 6 columns */}
                                    <div className="hidden md:flex md:col-span-6 justify-end items-center order-2 md:order-2">
                                        <div className="relative" style={{ width: '500px', height: '500px' }}>
                                            {/* Light Background */}
                                            <div className="absolute inset-0 rounded-3xl" style={{
                                                background: 'radial-gradient(circle at center, rgba(255,255,255,0.4) 0%, rgba(255,255,255,0.15) 40%, transparent 70%)',
                                                filter: 'blur(20px)',
                                                zIndex: 0
                                            }}></div>

                                            {/* Image */}
                                            <img
                                                src="/truck.png"
                                                alt="Caminhão"
                                                className="relative rounded-3xl"
                                                style={{ width: '100%', height: '100%', objectFit: 'contain', zIndex: 1 }}
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Scroll Indicator */}
                            <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 z-10 text-center pointer-events-none">
                                <p className="text-white text-xs font-semibold mb-2">Veja como funciona</p>
                                <ChevronDown className="w-5 h-5 text-emerald-400 animate-bounce mx-auto" />
                            </div>
                        </section>
                    </div>

                    {/* Carousel Navigation - Botões */}
                    <button
                        onClick={prevHero}
                        className="absolute left-4 top-1/2 transform -translate-y-1/2 z-20 bg-white/20 hover:bg-white/40 text-white p-2 rounded-full transition"
                    >
                        <ChevronLeft className="w-6 h-6" />
                    </button>

                    <button
                        onClick={nextHero}
                        className="absolute right-4 top-1/2 transform -translate-y-1/2 z-20 bg-white/20 hover:bg-white/40 text-white p-2 rounded-full transition"
                    >
                        <ChevronRight className="w-6 h-6" />
                    </button>

                    {/* Carousel Dots - Indicadores */}
                    <div className="absolute bottom-20 left-1/2 transform -translate-x-1/2 z-20 flex gap-2">
                        {heroes.map((_, idx) => (
                            <button
                                key={idx}
                                onClick={() => setCurrentHeroIndex(idx)}
                                className={`w-2 h-2 rounded-full transition ${idx === currentHeroIndex ? "bg-white" : "bg-white/50"
                                    }`}
                            />
                        ))}
                    </div>
                </div>

                {/* Problems Section - Reorganizado com novo design */}
                <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 dark:from-black dark:via-slate-950 dark:to-black">
                    <div className="max-w-5xl mx-auto">
                        <h2 className="text-3xl sm:text-4xl font-bold text-center mb-4 text-white">
                            Você Reconhece Algum Desses Problemas?
                        </h2>
                        <p className="text-center text-slate-400 mb-12 max-w-2xl mx-auto">
                            A maioria dos negócios de serviços automotivos enfrenta esses desafios todo dia. Você não está sozinho.
                        </p>

                        <div className="grid md:grid-cols-2 gap-6">
                            {problems.map((item, idx) => (
                                <div
                                    key={idx}
                                    className="bg-slate-800 dark:bg-slate-900 p-6 rounded-lg border-2 border-red-500/30 hover:border-red-500/60 transition-all"
                                >
                                    <div className="flex items-start gap-3 mb-4">
                                        <div className="text-red-400 text-2xl flex-shrink-0">❌</div>
                                        <h3 className="font-bold text-slate-100">
                                            {item.problem}
                                        </h3>
                                    </div>
                                    <p className="text-red-300 mb-4 text-sm font-semibold pl-9">
                                        → {item.result}
                                    </p>
                                    <div className="flex items-start gap-2 text-green-400 pl-9">
                                        <CheckCircle2 className="w-4 h-4 flex-shrink-0 mt-0.5" />
                                        <span className="text-sm">{item.solution}</span>
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* CTA para próxima seção */}
                        <div className="text-center mt-12">
                            <p className="text-lg font-semibold text-slate-200 mb-4">
                                Temos a solução para todos esses problemas ↓
                            </p>
                        </div>
                    </div>
                </section>

                {/* YouTube Videos Section */}
                <YouTubeVideosSection />

                {/* SEÇÃO 2: BENEFÍCIOS + FUNCIONALIDADES - Features Section with Images */}
                <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 dark:from-black dark:via-slate-950 dark:to-black">
                    <div className="max-w-6xl mx-auto">
                        <h2 className="text-3xl sm:text-4xl font-bold text-center mb-4 text-white">
                            Veja Como Funciona a Solução
                        </h2>
                        <p className="text-center text-slate-400 mb-16 max-w-2xl mx-auto">
                            6 módulos essenciais que trabalham juntos para organizar seu negócio e aumentar seu lucro:
                            totalmente personalizados para vidraçaria, estética, películas, som, capotaria, ar-condicionado, pneuaria ou qualquer outro negócio automotivo
                        </p>

                        {/* Feature 0: Captação de Clientes de Redes Sociais */}
                        <div className="mb-20 grid md:grid-cols-2 gap-12 items-center md:flex-row-reverse">
                            <div className="md:order-2">
                                <h3 className="text-2xl font-bold mb-4 text-slate-900 dark:text-white">
                                    ✅ Captação de Clientes de Redes Sociais
                                </h3>
                                <p className="text-slate-600 dark:text-slate-400 mb-4">
                                    Você está perdendo clientes potenciais todo dia nas redes sociais.
                                    AutoClub Pro integra leads de Instagram, Facebook e WhatsApp
                                    diretamente no seu CRM. Todos os interessados entram no banco de
                                    dados automaticamente, com histórico de contato e acompanhamento.
                                </p>
                                <p className="text-slate-700 dark:text-slate-300 mb-6 font-semibold">
                                    💡 Resultado: Nenhum lead perdido. Você acompanha todo
                                    interessado até se tornar cliente.
                                </p>
                                <div className="flex items-start gap-3">
                                    <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                                    <span className="text-slate-600 dark:text-slate-400">
                                        Captura automática de leads de redes sociais
                                    </span>
                                </div>
                                <div className="flex items-start gap-3 mt-2">
                                    <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                                    <span className="text-slate-600 dark:text-slate-400">
                                        Histórico de acompanhamento de cada interessado
                                    </span>
                                </div>
                                <div className="flex items-start gap-3 mt-2">
                                    <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                                    <span className="text-slate-600 dark:text-slate-400">
                                        Funil de vendas integrado (lead → cliente)
                                    </span>
                                </div>
                            </div>
                            <div className="md:order-1 relative">
                                <img
                                    src="/cap-clientes.PNG"
                                    alt="Captação de Clientes de Redes Sociais"
                                    className="w-full h-auto object-contain rounded-lg shadow-lg border-2 border-slate-200 dark:border-slate-700 cursor-pointer hover:opacity-80 transition-opacity"
                                    onClick={() => setSelectedImage("/cap-clientes.PNG")}
                                    loading="lazy"
                                />
                                <div className="absolute bottom-0 left-0 right-0 bg-black/60 text-white text-xs py-2 px-3 rounded-b-lg">
                                    📸 CRM de Captação de Clientes de Redes Sociais
                                </div>
                            </div>
                        </div>

                        {/* Feature 1: Histórico Completo e Auditoria */}
                        <div className="mb-20 grid md:grid-cols-2 gap-12 items-center">
                            <div>
                                <h3 className="text-2xl font-bold mb-4 text-slate-900 dark:text-white">
                                    ✅ Histórico Completo e Controle de Segurança
                                </h3>
                                <p className="text-slate-600 dark:text-slate-400 mb-4">
                                    Toda movimentação do seu sistema fica registrada. Quem fez o quê,
                                    quando, por quê. AutoClub Pro oferece controle total com log de
                                    auditoria completo. Você sabe exatamente quem mexeu em cada
                                    documento, alteração de preço, exclusão de vendas ou mudança de dados.
                                    Segurança profissional para seu negócio.
                                </p>
                                <p className="text-slate-700 dark:text-slate-300 mb-6 font-semibold">
                                    💡 Resultado: Controle total, segurança garantida, zero suspeitas
                                    sobre movimentações irregulares.
                                </p>
                                <div className="flex items-start gap-3">
                                    <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                                    <span className="text-slate-600 dark:text-slate-400">
                                        Log de auditoria de todas as movimentações (quem/quando/o quê)
                                    </span>
                                </div>
                                <div className="flex items-start gap-3 mt-2">
                                    <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                                    <span className="text-slate-600 dark:text-slate-400">
                                        Rastreamento de alterações de dados e preços
                                    </span>
                                </div>
                                <div className="flex items-start gap-3 mt-2">
                                    <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                                    <span className="text-slate-600 dark:text-slate-400">
                                        Controle de permissões por usuário (gerente vê tudo, vendedor vê só suas vendas)
                                    </span>
                                </div>
                            </div>
                            <div className="relative">
                                <img
                                    src="/cap-historico.PNG"
                                    alt="Histórico e Auditoria"
                                    className="w-full h-auto object-contain rounded-lg shadow-lg border-2 border-slate-200 dark:border-slate-700 cursor-pointer hover:opacity-80 transition-opacity"
                                    onClick={() => setSelectedImage("/cap-historico.PNG")}
                                    loading="lazy"
                                />
                                <div className="absolute bottom-0 left-0 right-0 bg-black/60 text-white text-xs py-2 px-3 rounded-b-lg">
                                    📸 Log de Auditoria e Histórico de Movimentações
                                </div>
                            </div>
                        </div>

                        {/* Feature 2: Vendas e Comissões */}
                        <div className="mb-20 grid md:grid-cols-2 gap-12 items-center md:flex-row-reverse">
                            <div className="md:order-2">
                                <h3 className="text-2xl font-bold mb-4 text-slate-900 dark:text-white">
                                    ✅ Vendas com Controle Real + Comissões Automáticas
                                </h3>
                                <p className="text-slate-600 dark:text-slate-400 mb-4">
                                    Sem mais brigas sobre comissão toda semana. AutoClub Pro
                                    registra cada venda, calcula comissões automaticamente e gera
                                    comprovante imprimível. Vendedor motivado trabalha melhor.
                                </p>
                                <p className="text-slate-700 dark:text-slate-300 mb-6 font-semibold">
                                    💡 Resultado: Vendedor feliz, motivado, vende mais. Você sabe
                                    exatamente quem está entregando.
                                </p>
                                <div className="flex items-start gap-3">
                                    <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                                    <span className="text-slate-600 dark:text-slate-400">
                                        Saiba quanto cada vendedor vendeu (dia, semana, mês)
                                    </span>
                                </div>
                                <div className="flex items-start gap-3 mt-2">
                                    <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                                    <span className="text-slate-600 dark:text-slate-400">
                                        Cálculo automático de comissão
                                    </span>
                                </div>
                                <div className="flex items-start gap-3 mt-2">
                                    <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                                    <span className="text-slate-600 dark:text-slate-400">
                                        Comprovante imprimível (fim de brigas)
                                    </span>
                                </div>
                            </div>
                            <div className="md:order-1 relative">
                                <img
                                    src="/cap-vendas.PNG"
                                    alt="Vendas e Comissões"
                                    className="w-full h-auto object-contain rounded-lg shadow-lg border-2 border-slate-200 dark:border-slate-700 cursor-pointer hover:opacity-80 transition-opacity"
                                    onClick={() => setSelectedImage("/cap-vendas.PNG")}
                                    loading="lazy"
                                />
                                <div className="absolute bottom-0 left-0 right-0 bg-black/60 text-white text-xs py-2 px-3 rounded-b-lg">
                                    📸 Relatório de Vendas e Comissões por Vendedor
                                </div>
                            </div>
                        </div>

                        {/* Feature 3: Estoque */}
                        <div className="mb-20 grid md:grid-cols-2 gap-12 items-center">
                            <div>
                                <h3 className="text-2xl font-bold mb-4 text-slate-900 dark:text-white">
                                    ✅ Controle de Estoque Profissional
                                </h3>
                                <p className="text-slate-600 dark:text-slate-400 mb-4">
                                    Não mais produtos sumindo sem motivo. AutoClub Pro rastreia
                                    cada movimentação de estoque, sabe quando fica abaixo do
                                    mínimo e mostra quem pegou o quê e quando. Você otimiza
                                    capital, nunca fica sem produto.
                                </p>
                                <p className="text-slate-700 dark:text-slate-300 mb-6 font-semibold">
                                    💡 Resultado: Nunca mais falta produto quando cliente quer
                                    comprar. Estoque não some.
                                </p>
                                <div className="flex items-start gap-3">
                                    <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                                    <span className="text-slate-600 dark:text-slate-400">
                                        Rastreamento 100% de cada movimentação
                                    </span>
                                </div>
                                <div className="flex items-start gap-3 mt-2">
                                    <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                                    <span className="text-slate-600 dark:text-slate-400">
                                        Alertas automáticos quando fica abaixo do mínimo
                                    </span>
                                </div>
                                <div className="flex items-start gap-3 mt-2">
                                    <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                                    <span className="text-slate-600 dark:text-slate-400">
                                        Controle de fornecedores (melhor preço sempre)
                                    </span>
                                </div>
                            </div>
                            <div className="relative">
                                <img
                                    src="/cap-estoque.PNG"
                                    alt="Controle de Estoque"
                                    className="w-full h-auto object-contain rounded-lg shadow-lg border-2 border-slate-200 dark:border-slate-700 cursor-pointer hover:opacity-80 transition-opacity"
                                    onClick={() => setSelectedImage("/cap-estoque.PNG")}
                                    loading="lazy"
                                />
                                <div className="absolute bottom-0 left-0 right-0 bg-black/60 text-white text-xs py-2 px-3 rounded-b-lg">
                                    📸 Dashboard de Estoque com Alertas
                                </div>
                            </div>
                        </div>

                        {/* Feature 4: Agendamentos */}
                        <div className="grid md:grid-cols-2 gap-12 items-center md:flex-row-reverse">
                            <div className="md:order-2">
                                <h3 className="text-2xl font-bold mb-4 text-slate-900 dark:text-white">
                                    ✅ Agendamentos Inteligentes
                                </h3>
                                <p className="text-slate-600 dark:text-slate-400 mb-4">
                                    Chega de bagunça no telefone. Com AutoClub Pro os clientes
                                    agendam diretamente no sistema, recebem lembretes
                                    automáticos e você vê a agenda cheia sempre. Menos ligações
                                    telefônicas, mais organização.
                                </p>
                                <p className="text-slate-700 dark:text-slate-300 mb-6 font-semibold">
                                    💡 Resultado: Menos ligações, cliente não esquece,
                                    agenda sempre cheia.
                                </p>
                                <div className="flex items-start gap-3">
                                    <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                                    <span className="text-slate-600 dark:text-slate-400">
                                        Clientes agendam online (você não fica no telefone)
                                    </span>
                                </div>
                                <div className="flex items-start gap-3 mt-2">
                                    <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                                    <span className="text-slate-600 dark:text-slate-400">
                                        Lembrete automático 1 dia antes
                                    </span>
                                </div>
                                <div className="flex items-start gap-3 mt-2">
                                    <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                                    <span className="text-slate-600 dark:text-slate-400">
                                        Visualização por dia, semana ou mês
                                    </span>
                                </div>
                            </div>
                            <div className="md:order-1 relative">
                                <img
                                    src="/cap-agendamento.PNG"
                                    alt="Agendamentos"
                                    className="w-full h-auto object-contain rounded-lg shadow-lg border-2 border-slate-200 dark:border-slate-700 cursor-pointer hover:opacity-80 transition-opacity"
                                    onClick={() => setSelectedImage("/cap-agendamento.PNG")}
                                    loading="lazy"
                                />
                                <div className="absolute bottom-0 left-0 right-0 bg-black/60 text-white text-xs py-2 px-3 rounded-b-lg">
                                    📸 Agenda Online com Lembretes Automáticos
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* SEÇÃO 3: Credibilidade - Casos de Sucesso */}
                <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 dark:from-black dark:via-slate-950 dark:to-black">
                    <div className="max-w-5xl mx-auto">
                        <h2 className="text-3xl sm:text-4xl font-bold text-center mb-4 text-white">
                            Clientes Reais. Resultados Reais.
                        </h2>
                        <p className="text-center text-slate-400 mb-12 max-w-2xl mx-auto">
                            Veja como vidraçarias, lojas de estética, películas, som, capotaria, ar-condicionado e pneuarias estão ganhando mais dinheiro com AutoClub Pro
                        </p>

                        <div className="grid md:grid-cols-3 gap-8">
                            {successStories.map((story, idx) => (
                                <div
                                    key={idx}
                                    className="bg-white dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800 overflow-hidden flex flex-col p-8"
                                >
                                    <div className="flex flex-col flex-grow">
                                        <div className="flex gap-1 mb-4">
                                            {[...Array(5)].map((_, i) => (
                                                <Star
                                                    key={i}
                                                    className="w-4 h-4 fill-yellow-400 text-yellow-400"
                                                />
                                            ))}
                                        </div>
                                        <p className="text-slate-700 dark:text-slate-300 mb-6 italic">
                                            "{story.quote}"
                                        </p>
                                        <div className="border-t border-slate-200 dark:border-slate-800 pt-4">
                                            <h4 className="font-bold text-slate-900 dark:text-white">
                                                {story.name}
                                            </h4>
                                            <p className="text-xs font-semibold text-blue-600 dark:text-blue-400 mb-1">
                                                {story.type}
                                            </p>
                                            <p className="text-sm text-slate-600 dark:text-slate-400 mb-4">
                                                {story.location}
                                            </p>
                                            <ul className="space-y-2">
                                                {story.results.map((result, i) => (
                                                    <li
                                                        key={i}
                                                        className="text-sm text-green-600 dark:text-green-400 flex items-start gap-2"
                                                    >
                                                        <CheckCircle2 className="w-4 h-4 flex-shrink-0 mt-0.5" />
                                                        <span>{result}</span>
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Why AutoClub Pro is Better - Image Section */}
                <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 dark:from-black dark:via-slate-950 dark:to-black">
                    <div className="max-w-7xl mx-auto">
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                            {/* Left Content */}
                            <div className="space-y-8">
                                <div>
                                    <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-4">
                                        Por Que AutoClub Pro é Melhor
                                    </h2>
                                    <div className="h-1 w-20 bg-gradient-to-r from-blue-600 to-blue-400 rounded-full"></div>
                                </div>

                                <p className="text-lg text-gray-700 dark:text-gray-300">
                                    AutoClub Pro foi desenvolvido especificamente para negócios de serviços automotivos que dependem de agendamentos. Não é um ERP genérico. É uma solução especializada em vidraçarias, estética, películas, som, capotaria, ar-condicionado e pneuarias.
                                </p>

                                {/* Benefits Grid */}
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                    {[
                                        { title: "Agendamentos Online", desc: "Cliente marca 24/7, lembretes automáticos" },
                                        { title: "Gestão de Clientes", desc: "Histórico, preferências, datas de volta" },
                                        { title: "Comissões Automáticas", desc: "Calcula sem erro, comprovante diário" },
                                        { title: "Controle de Estoque", desc: "Peças e produtos com rastreamento 100%" },
                                        { title: "Dashboard com Margens", desc: "Veja qual serviço dá mais lucro" },
                                        { title: "Suporte 24/7", desc: "WhatsApp, email, ajudamos tudo" },
                                    ].map((benefit, idx) => (
                                        <div
                                            key={idx}
                                            className="bg-white dark:bg-slate-800 p-4 rounded-lg border border-slate-200 dark:border-slate-700 hover:shadow-lg transition-shadow"
                                        >
                                            <h3 className="font-bold text-gray-900 dark:text-white mb-1 text-sm">
                                                ✓ {benefit.title}
                                            </h3>
                                            <p className="text-xs text-gray-600 dark:text-gray-400">
                                                {benefit.desc}
                                            </p>
                                        </div>
                                    ))}
                                </div>

                                <div className="bg-gradient-to-r from-blue-600 to-blue-700 p-6 rounded-xl text-white">
                                    <p className="font-bold mb-2">Resultado Real dos Nossos Clientes:</p>
                                    <p className="text-sm">Empresas de serviços automotivos aumentam faturamento em 15-25% nos primeiros 3 meses (e até 300% em 12 meses), com agenda 90%+ preenchida e 30% menos tempo administrativo.</p>
                                </div>
                            </div>

                            {/* Right Image */}
                            <div className="relative">
                                <div className="absolute -inset-4 bg-gradient-to-r from-blue-600/20 to-blue-400/20 rounded-2xl blur-2xl"></div>
                                <img
                                    src="/oficina.webp"
                                    alt="Negócio Automotivo Profissional com AutoClub Pro"
                                    className="relative w-full h-auto rounded-2xl shadow-2xl object-cover"
                                />
                            </div>
                        </div>
                    </div>
                </section>

                {/* ROI Section - Redesigned */}
                <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 dark:from-black dark:via-slate-950 dark:to-black">
                    <div className="max-w-6xl mx-auto">
                        {/* Header */}
                        <div className="text-center mb-16">
                            <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">
                                O Custo Real de Não Fazer Nada
                            </h2>
                            <p className="text-xl text-slate-300">Para Negócios de Serviços Automotivos com Agendamentos</p>
                        </div>

                        {/* ROI Cards Grid */}
                        <div className="grid md:grid-cols-2 gap-8 mb-12">
                            {/* Cost of Inaction Card */}
                            <div className="group relative">
                                <div className="absolute inset-0 bg-gradient-to-r from-red-600 to-orange-400 rounded-2xl blur-xl opacity-20 group-hover:opacity-30 transition-opacity"></div>
                                <div className="relative bg-gradient-to-br from-red-600/10 to-orange-400/10 backdrop-blur-xl border border-red-500/30 rounded-2xl p-8 h-full flex flex-col justify-center hover:border-red-400/60 transition-all">
                                    <div className="mb-6">
                                        <div className="inline-flex items-center gap-2 px-4 py-2 bg-red-500/20 rounded-full mb-6">
                                            <span className="text-red-300 font-semibold text-sm">❌ Sem AutoClub Pro</span>
                                        </div>
                                    </div>

                                    <p className="text-sm text-gray-300 mb-6 leading-relaxed">
                                        Se você tem 60% de ocupação de agenda com gaps imensos e perde 15-20% dos clientes por falta de agendamento:
                                    </p>

                                    <div className="mb-6">
                                        <p className="text-6xl font-black bg-gradient-to-r from-red-400 to-orange-300 bg-clip-text text-transparent mb-2">
                                            R$12.000+
                                        </p>
                                        <p className="text-lg text-red-200 font-semibold">/mês em receita perdida</p>
                                    </div>

                                    <div className="border-t border-red-400/20 pt-6">
                                        <p className="text-sm text-red-200/80">
                                            Você está deixando de faturar <span className="font-bold text-red-300">MAIS que o custo anual</span> do AutoClub Pro em apenas <span className="font-bold text-red-300">30 DIAS</span>.
                                        </p>
                                    </div>
                                </div>
                            </div>

                            {/* AutoClub Pro Benefits Card */}
                            <div className="group relative">
                                <div className="absolute inset-0 bg-gradient-to-r from-green-600 to-emerald-400 rounded-2xl blur-xl opacity-20 group-hover:opacity-30 transition-opacity"></div>
                                <div className="relative bg-gradient-to-br from-green-600/10 to-emerald-400/10 backdrop-blur-xl border border-green-500/30 rounded-2xl p-8 h-full flex flex-col justify-between hover:border-green-400/60 transition-all">
                                    <div className="mb-6">
                                        <div className="inline-flex items-center gap-2 px-4 py-2 bg-green-500/20 rounded-full">
                                            <span className="text-green-300 font-semibold text-sm">✓ Com AutoClub Pro</span>
                                        </div>
                                    </div>

                                    <p className="text-sm text-gray-300 mb-6">Você ganha:</p>

                                    <ul className="space-y-4">
                                        <li className="flex items-start gap-3">
                                            <div className="p-2 bg-green-500/20 rounded-lg flex-shrink-0 mt-0.5">
                                                <CheckCircle2 className="w-5 h-5 text-green-400" />
                                            </div>
                                            <div>
                                                <p className="font-semibold text-green-300">+35% agendamentos</p>
                                                <p className="text-xs text-gray-400">Agenda online 24/7 preenche 90%+ dos slots</p>
                                            </div>
                                        </li>
                                        <li className="flex items-start gap-3">
                                            <div className="p-2 bg-green-500/20 rounded-lg flex-shrink-0 mt-0.5">
                                                <CheckCircle2 className="w-5 h-5 text-green-400" />
                                            </div>
                                            <div>
                                                <p className="font-semibold text-green-300">15-25% mais faturamento</p>
                                                <p className="text-xs text-gray-400">Em apenas 3 meses</p>
                                            </div>
                                        </li>
                                        <li className="flex items-start gap-3">
                                            <div className="p-2 bg-green-500/20 rounded-lg flex-shrink-0 mt-0.5">
                                                <CheckCircle2 className="w-5 h-5 text-green-400" />
                                            </div>
                                            <div>
                                                <p className="font-semibold text-green-300">Sistema rodando em 3 dias</p>
                                                <p className="text-xs text-gray-400">Agendamentos já funcionando imediatamente</p>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        {/* CTA Bottom */}
                        <div className="text-center">
                            <div className="inline-block">
                                <p className="text-2xl font-bold text-white mb-4">
                                    A diferença é apenas uma
                                </p>
                                <p className="text-4xl font-black bg-gradient-to-r from-blue-400 to-emerald-400 bg-clip-text text-transparent">
                                    DECISÃO
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* SEÇÃO 5: Como Funciona a Implantação + Investimento */}
                <section
                    id="proposal"
                    className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 dark:from-black dark:via-slate-950 dark:to-black"
                >
                    <div className="max-w-6xl mx-auto">
                        {/* Header */}
                        <div className="text-center mb-16">
                            <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">
                              Como Funciona a Implantação
                            </h2>
                            <p className="text-xl text-blue-200 max-w-2xl mx-auto">
                              Implementação completa em 3 dias + 12 meses de suporte 24/7. Tudo incluído.
                            </p>
                        </div>

                        {/* Main Pricing Cards Grid */}
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
                            {/* Investimento Card */}
                            <div className="group relative">
                                <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-blue-400 rounded-2xl blur-xl opacity-20 group-hover:opacity-30 transition-opacity"></div>
                                <div className="relative bg-gradient-to-br from-blue-600/10 to-blue-400/10 backdrop-blur-xl border border-blue-500/30 rounded-2xl p-8 h-full flex flex-col justify-between hover:border-blue-400/60 transition-all">
                                    <div>
                                        <div className="flex items-center gap-3 mb-6">
                                            <div className="p-3 bg-blue-500/20 rounded-lg">
                                                <DollarSign className="w-6 h-6 text-blue-400" />
                                            </div>
                                            <h3 className="text-2xl font-bold text-white">Investimento</h3>
                                        </div>
                                        <div className="mb-6">
                                            <p className="text-sm font-semibold text-blue-300 mb-4">Comece Agora Por Apenas</p>
                                            <p className="text-5xl font-black bg-gradient-to-r from-blue-400 to-blue-300 bg-clip-text text-transparent">
                                                R$ 349,00
                                            </p>
                                            <p className="text-lg font-semibold text-white mt-2">Implementação + R$ 89/mês</p>
                                        </div>
                                    </div>

                                    {/* Pagamento */}
                                    <div className="border-t border-blue-400/20 pt-6">
                                        <p className="text-sm font-semibold text-blue-200 mb-4">Plano de Pagamento Accessível</p>
                                        <div className="space-y-3">
                                            <div className="flex items-center gap-3 text-sm">
                                                <div className="w-8 h-8 rounded-full bg-blue-500/30 flex items-center justify-center text-blue-300 font-bold text-xs">1</div>
                                                <span className="text-gray-300">R$ 349,00 na implementação</span>
                                            </div>
                                            <div className="flex items-center gap-3 text-sm">
                                                <div className="w-8 h-8 rounded-full bg-green-500/30 flex items-center justify-center text-green-300 font-bold text-xs">2</div>
                                                <span className="text-gray-300">R$ 89,00 mensais (cancelável)</span>
                                            </div>
                                        </div>
                                        <p className="text-xs text-blue-300 mt-4 italic">
                                            💡 Sem contrato de longa duração. Cancele quando quiser.
                                        </p>
                                    </div>
                                </div>
                            </div>

                            {/* Entrega Card */}
                            <div className="group relative">
                                <div className="absolute inset-0 bg-gradient-to-r from-green-600 to-emerald-400 rounded-2xl blur-xl opacity-20 group-hover:opacity-30 transition-opacity"></div>
                                <div className="relative bg-gradient-to-br from-green-600/10 to-emerald-400/10 backdrop-blur-xl border border-green-500/30 rounded-2xl p-8 h-full flex flex-col justify-center items-center text-center hover:border-green-400/60 transition-all">
                                    <div className="p-4 bg-green-500/20 rounded-xl mb-6">
                                        <Calendar className="w-8 h-8 text-green-400 mx-auto" />
                                    </div>
                                    <h3 className="text-2xl font-bold text-white mb-4">Entrega Rápida</h3>
                                    <p className="text-6xl font-black bg-gradient-to-r from-green-400 to-emerald-300 bg-clip-text text-transparent mb-4">
                                        3
                                    </p>
                                    <p className="text-lg text-green-200 font-semibold mb-6">Dias</p>
                                    <p className="text-sm text-gray-400">
                                        Sistema totalmente configurado, testado e pronto para usar. Sua equipe treinada no dia 1.
                                    </p>
                                </div>
                            </div>

                            {/* Suporte Card */}
                            <div className="group relative">
                                <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-400 rounded-2xl blur-xl opacity-20 group-hover:opacity-30 transition-opacity"></div>
                                <div className="relative bg-gradient-to-br from-purple-600/10 to-pink-400/10 backdrop-blur-xl border border-purple-500/30 rounded-2xl p-8 h-full flex flex-col justify-center items-center text-center hover:border-purple-400/60 transition-all">
                                    <div className="p-4 bg-purple-500/20 rounded-xl mb-6">
                                        <Headphones className="w-8 h-8 text-purple-400 mx-auto" />
                                    </div>
                                    <h3 className="text-2xl font-bold text-white mb-4">Suporte Premium</h3>
                                    <p className="text-3xl font-bold text-purple-300 mb-2">24/7</p>
                                    <p className="text-sm text-purple-200 font-semibold mb-4">Via WhatsApp</p>
                                    <p className="text-sm text-gray-400">
                                        Equipe sempre disponível. Dúvidas, problemas ou ajustes — resolvemos em minutos.
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Countdown Timer */}
                        <div className="relative mx-auto max-w-2xl">
                            <div className="absolute inset-0 bg-gradient-to-r from-red-600 to-red-400 rounded-2xl blur-lg opacity-20"></div>
                            <div className="relative bg-gradient-to-br from-red-600/10 to-red-400/10 backdrop-blur-xl border border-red-500/50 rounded-2xl p-8">
                                <div className="flex items-center justify-center gap-3 mb-4">
                                    <span className="text-2xl">⏱️</span>
                                    <p className="text-lg font-bold text-red-200">Oferta com Tempo Limitado</p>
                                </div>
                                <p className="text-center text-5xl font-black text-red-400 font-mono tracking-widest">
                                    {formatTime(timeLeft)}
                                </p>
                            </div>
                        </div>

                    </div>
                </section>

                {/* What's Included Section - Redesigned */}
                <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 dark:from-black dark:via-slate-950 dark:to-black">
                    <div className="max-w-6xl mx-auto">
                        {/* Header */}
                        <div className="text-center mb-16">
                            <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">
                                O Que Está Incluído
                            </h2>
                            <p className="text-xl text-slate-300">Para Seu Negócio Automotivo</p>
                        </div>

                        {/* Content Cards Grid */}
                        <div className="grid md:grid-cols-2 gap-8">
                            {/* Delivery Card */}
                            <div className="group relative">
                                <div className="absolute inset-0 bg-gradient-to-r from-green-600 to-emerald-400 rounded-2xl blur-xl opacity-20 group-hover:opacity-30 transition-opacity"></div>
                                <div className="relative bg-gradient-to-br from-green-600/10 to-emerald-400/10 backdrop-blur-xl border border-green-500/30 rounded-2xl p-8 hover:border-green-400/60 transition-all">
                                    <div className="flex items-center gap-3 mb-8">
                                        <div className="p-3 bg-green-500/20 rounded-lg">
                                            <span className="text-2xl">🚀</span>
                                        </div>
                                        <div>
                                            <h3 className="text-2xl font-bold text-white">Na Entrega</h3>
                                            <p className="text-sm text-green-200">(3 dias)</p>
                                        </div>
                                    </div>

                                    <ul className="space-y-4">
                                        {[
                                            "Sistema completamente personalizado para seu negócio de serviços automotivos",
                                            "6 módulos configurados conforme sua necessidade",
                                            "Banco de dados estruturado",
                                            "Dashboard executivo funcional",
                                            "Integração com seu fluxo de trabalho",
                                            "Treinamento inicial da equipe",
                                            "Documentação técnica completa",
                                        ].map((item, idx) => (
                                            <li
                                                key={idx}
                                                className="flex items-start gap-3 group/item"
                                            >
                                                <div className="p-1.5 bg-green-500/20 rounded-lg flex-shrink-0 mt-0.5">
                                                    <CheckCircle2 className="w-5 h-5 text-green-400" />
                                                </div>
                                                <span className="text-gray-300 group-hover/item:text-green-200 transition-colors text-sm leading-relaxed">
                                                    {item}
                                                </span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>

                            {/* Optional Card */}
                            <div className="group relative">
                                <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-cyan-400 rounded-2xl blur-xl opacity-20 group-hover:opacity-30 transition-opacity"></div>
                                <div className="relative bg-gradient-to-br from-blue-600/10 to-cyan-400/10 backdrop-blur-xl border border-blue-500/30 rounded-2xl p-8 hover:border-blue-400/60 transition-all">
                                    <div className="flex items-center gap-3 mb-8">
                                        <div className="p-3 bg-blue-500/20 rounded-lg">
                                            <span className="text-2xl">🎯</span>
                                        </div>
                                        <div>
                                            <h3 className="text-2xl font-bold text-white">Próximos Passos</h3>
                                            <p className="text-sm text-blue-200">(Opcional)</p>
                                        </div>
                                    </div>

                                    <ul className="space-y-4">
                                        {[
                                            "Suporte contínuo pós-entrega",
                                            "Otimizações conforme uso real",
                                            "Novos módulos e integrações",
                                            "Treinamento avançado de equipe",
                                            "Consultoria na gestão",
                                            "Backup e segurança em nuvem",
                                            "Planos de suporte 24/7",
                                        ].map((item, idx) => (
                                            <li
                                                key={idx}
                                                className="flex items-start gap-3 group/item"
                                            >
                                                <div className="p-1.5 bg-blue-500/20 rounded-lg flex-shrink-0 mt-0.5">
                                                    <CheckCircle2 className="w-5 h-5 text-blue-400" />
                                                </div>
                                                <span className="text-gray-300 group-hover/item:text-blue-200 transition-colors text-sm leading-relaxed">
                                                    {item}
                                                </span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* SEÇÃO 4: Segurança, Garantia e Suporte */}
                <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 dark:from-black dark:via-slate-950 dark:to-black">
                    <div className="max-w-3xl mx-auto">
                        <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12 text-white">
                            Dúvidas Comuns - Respondidas
                        </h2>

                        <div className="space-y-4">
                            {[
                                {
                                   q: "Quanto tempo leva para estar operacional?",
                                   a: "3 dias. O sistema já sai pronto, personalizado para seu negócio, com os dados iniciais carregados e equipe treinada.",
                                 },
                                {
                                    q: "Meus dados estão seguros?",
                                    a: "Sim. Nuvem Amazon AWS, encriptado como banco. Backup automático diário. Seus dados são o bem mais valioso.",
                                },
                                {
                                    q: "Preciso de computador poderoso?",
                                    a: "Não. Roda em qualquer navegador, até smartphone desatualizado funciona. É cloud, tipo Gmail.",
                                },
                                {
                                    q: "Preciso de técnico de TI?",
                                    a: "Não precisa. É cloud. Acessa pelo navegador. Totalmente gerenciado. Você só usa.",
                                },
                                {
                                    q: "E se precisar de mudanças depois?",
                                    a: "Sem problema. O sistema é flexível e escalável. Você combina o suporte que funciona melhor para você.",
                                },
                                {
                                    q: "Como funciona o treinamento?",
                                    a: "Oferecemos treinamento inicial com toda a equipe no dia da entrega. Documentação completa e suporte para dúvidas.",
                                },
                            ].map((faq, idx) => (
                                <div
                                    key={idx}
                                    className="bg-white dark:bg-slate-900 p-6 rounded-lg border border-slate-200 dark:border-slate-800"
                                >
                                    <h3 className="font-bold text-slate-900 dark:text-white mb-2">
                                        P: {faq.q}
                                    </h3>
                                    <p className="text-slate-600 dark:text-slate-400">
                                        R: {faq.a}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* SEÇÃO 6: CTA Final - Chamada para WhatsApp */}
                <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-green-900 via-emerald-900 to-green-900 dark:from-black dark:via-slate-950 dark:to-black">
                    <div className="max-w-3xl mx-auto text-center text-white">
                        <h2 className="text-4xl sm:text-5xl font-bold mb-6">
                            Quer Conhecer o Sistema?
                        </h2>
                        <p className="text-xl mb-8 max-w-2xl mx-auto text-emerald-100">
                            Clique abaixo e fale conosco no WhatsApp. Mostraremos como negócios de serviços automotivos como o seu usam AutoClub Pro para ganhar +R$15.000/mês em 3 meses.
                        </p>

                        <div className="flex flex-col gap-4 justify-center mb-8">
                            <Button
                                size="lg"
                                className="bg-green-500 hover:bg-green-600 text-white text-lg px-12 py-7 font-bold shadow-xl w-full sm:w-fit sm:mx-auto"
                                onClick={() =>
                                    window.open("https://wa.me/5532991075164", "_blank")
                                }
                            >
                                💬 Falar com a Gente no WhatsApp
                                <ArrowRight className="ml-2 w-5 h-5" />
                            </Button>
                        </div>
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
                        className="relative max-w-4xl max-h-[90vh] bg-white dark:bg-slate-900 rounded-lg shadow-2xl overflow-auto"
                        onClick={(e) => e.stopPropagation()}
                    >
                        <button
                            onClick={() => setSelectedImage(null)}
                            className="absolute top-4 right-4 z-10 p-2 bg-black/50 hover:bg-black/70 rounded-lg text-white transition-colors"
                        >
                            <X className="w-6 h-6" />
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
