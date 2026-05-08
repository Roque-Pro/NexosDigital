import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { useSEO } from "@/hooks/useSEO";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppFloat from "@/components/WhatsAppFloat";
import YouTubeVideosSection from "@/components/YouTubeVideosSection";
import logoClubeImg from "@/img/logo-autocub.png";
import clienteImg from "@/img/cliente.png";
import reparoVidrosImg from "@/img/Reparo de Vidros.png";
import autoCenterImg from "@/img/Auto Center.png";
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
    Headphones,
} from "lucide-react";

const AutoClubPro = () => {
    const [selectedImage, setSelectedImage] = useState<string | null>(null);

    // SEO
    useSEO({
        title: "AutoClub Pro | Sistema com Personalização Visual para Serviços Automotivos | TechNexos",
        description: "AutoClub Pro - Sistema de gestão com personalização visual 100% para vidraçarias, estética, películas, som, capotaria, ar-condicionado e pneuarias. Com identidade visual da sua marca. R$ 1.870 implementação + R$ 89/mês. 3 meses de suporte grátis.",
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
                "price": "1870",
                "priceCurrency": "BRL",
                "description": "AutoClub Pro - R$ 1.870 implementação + R$ 89/mês",
            }
        }
    });

    return (
        <div className="min-h-screen bg-white text-gray-900">
            <main>
                {/* HERO SECTION */}
                <section className="relative bg-white pt-20 pb-20 px-4 sm:px-6 lg:px-8">
                    <div className="max-w-6xl mx-auto">
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center min-h-[600px]">
                            {/* Left: Text */}
                            <div>
                                <div className="mb-12">
                                    <img src={logoClubeImg} alt="AutoClub Pro" className="h-40 mb-8" />
                                </div>

                                <motion.h1
                                    className="text-5xl sm:text-6xl lg:text-7xl font-extrabold leading-[1.1] mb-6 tracking-tight text-gray-900"
                                    initial={{ opacity: 0, y: 30 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.7, ease: "easeOut" }}
                                >
                                    Sua oficina ou auto center
                                    <br />
                                    com a{" "}
                                    <span className="relative inline-block">
                                        <span className="text-blue-600">cara certa</span>
                                        <motion.span
                                            className="absolute -bottom-2 left-0 h-1.5 rounded-full bg-blue-600"
                                            initial={{ width: 0 }}
                                            animate={{ width: "100%" }}
                                            transition={{ delay: 0.8, duration: 0.6, ease: "easeOut" }}
                                        />
                                    </span>
                                </motion.h1>

                                <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                                    Sistema de agendamentos, vendas e gestão com personalização visual 100% para sua oficina ou auto center. Não é genérico com logo de outro. É seu, do jeito que você trabalha.
                                </p>

                                {/* Benefits */}
                                <div className="space-y-4 mb-8">
                                    <div className="flex items-start gap-3">
                                        <CheckCircle2 className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" />
                                        <div>
                                            <p className="font-semibold text-gray-900">Implementado em 3 dias</p>
                                            <p className="text-sm text-gray-600">Sistema rodando na sua empresa</p>
                                        </div>
                                    </div>
                                    <div className="flex items-start gap-3">
                                        <CheckCircle2 className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" />
                                        <div>
                                            <p className="font-semibold text-gray-900">Personalização Visual 100%</p>
                                            <p className="text-sm text-gray-600">Cores, logo e identidade visual da sua empresa</p>
                                        </div>
                                    </div>
                                    <div className="flex items-start gap-3">
                                        <CheckCircle2 className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" />
                                        <div>
                                            <p className="font-semibold text-gray-900">Suporte 24/7 por WhatsApp</p>
                                            <p className="text-sm text-gray-600">Sempre ao seu lado quando precisar</p>
                                        </div>
                                    </div>
                                </div>

                                {/* CTA */}
                                <div className="flex flex-col sm:flex-row gap-4">
                                    <Button 
                                        size="lg"
                                        className="bg-blue-600 hover:bg-blue-700 text-white font-bold px-8 py-6"
                                        onClick={() => document.getElementById("pricing")?.scrollIntoView({ behavior: "smooth" })}
                                    >
                                        Ver Preço <ArrowRight className="ml-2 w-5 h-5" />
                                    </Button>
                                    <Button 
                                        size="lg"
                                        className="bg-gray-200 hover:bg-gray-300 text-gray-900 font-bold px-8 py-6"
                                        onClick={() => window.open("https://wa.me/5532991075164")}
                                    >
                                        💬 Conversar no WhatsApp
                                    </Button>
                                </div>
                            </div>

                            {/* Right: Image */}
                            <div className="relative h-[500px] rounded-2xl overflow-hidden shadow-2xl border-4 border-white">
                                <img 
                                    src={clienteImg} 
                                    alt="Cliente Satisfeito AutoClub Pro" 
                                    className="w-full h-full object-cover"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent pointer-events-none" />
                            </div>
                        </div>
                    </div>
                </section>

                {/* CREDIBILIDADE SECTION */}
                <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white border-b border-gray-200">
                    <div className="max-w-6xl mx-auto text-center">
                        <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
                            Somos o sistema homologado das maiores redes de oficinas do Brasil
                        </h2>
                        <p className="text-lg text-gray-600 max-w-3xl mx-auto mb-12">
                            Mas com <span className="font-semibold text-blue-600">uma diferença crucial:</span> cada implementação tem a identidade visual da sua empresa. Não é um sistema genérico com marca de outro.
                        </p>
                    </div>
                </section>

                {/* PERSONALIZAÇÃO SECTION */}
                <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-blue-50 to-slate-50">
                    <div className="max-w-6xl mx-auto">
                        <h2 className="text-3xl font-bold text-gray-900 mb-4 text-center">
                            Seu Sistema, Sua Marca
                        </h2>
                        <p className="text-center text-gray-600 mb-16 max-w-2xl mx-auto">
                            Exemplos de como o sistema se adapta à identidade visual da sua empresa
                        </p>

                        {/* 3 Images Grid */}
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
                            {[
                                { img: reparoVidrosImg, title: "Reparo de Vidros" },
                                { img: autoCenterImg, title: "Auto Center" },
                                { img: esteticaAutomotivaImg, title: "Estética Automotiva" }
                            ].map((item, idx) => (
                                <div key={idx} className="group cursor-pointer" onClick={() => setSelectedImage(item.img)}>
                                    <div className="relative h-64 bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all border border-gray-100">
                                        <img 
                                            src={item.img} 
                                            alt={item.title} 
                                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
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
                                    title: "Cores e Logo da Sua Empresa",
                                    desc: "Sistema inteiro com a paleta de cores e logo que representam seu negócio"
                                },
                                {
                                    title: "White Label Completo",
                                    desc: "Seus clientes veem o sistema com o nome e marca da sua empresa"
                                },
                                {
                                    title: "Workflows Customizados",
                                    desc: "Processos adaptados para a forma como você trabalha, não o contrário"
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

                {/* YouTube Videos */}
                <YouTubeVideosSection />

                {/* PROBLEMAS & SOLUÇÕES */}
                <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
                    <div className="max-w-6xl mx-auto">
                        <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4 text-center">
                            Problemas que você enfrenta todo dia
                        </h2>
                        <p className="text-center text-gray-600 mb-16 max-w-2xl mx-auto">
                            A maioria dos negócios automotivos enfrenta esses desafios. Você não está sozinho.
                        </p>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            {[
                                {
                                    problem: "Agenda com muitos gaps",
                                    solution: "Agendamentos online 24/7 que preenchem 90%+ da sua agenda"
                                },
                                {
                                    problem: "Clientes se perdem em anotações",
                                    solution: "CRM centralizado com histórico completo de cada cliente"
                                },
                                {
                                    problem: "Comissões causam brigas",
                                    solution: "Cálculo automático diário com comprovante digital"
                                },
                                {
                                    problem: "Estoque some sem motivo",
                                    solution: "Rastreamento 100% com log de quem pegou o quê e quando"
                                },
                                {
                                    problem: "Não sabe qual vendedor entrega",
                                    solution: "Dashboard em tempo real mostrando vendas de cada pessoa"
                                },
                                {
                                    problem: "Lucro cai sem saber por quê",
                                    solution: "Relatórios de margens por serviço e análise de custos"
                                }
                            ].map((item, idx) => (
                                <div key={idx} className="border-l-4 border-blue-600 pl-6 py-4">
                                    <p className="font-semibold text-gray-900 mb-2">❌ {item.problem}</p>
                                    <p className="text-green-600 text-sm font-semibold">✅ {item.solution}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* PREÇOS */}
                <section id="pricing" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-slate-50 to-blue-50">
                    <div className="max-w-4xl mx-auto">
                        <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4 text-center">
                            Investimento Acessível
                        </h2>
                        <p className="text-center text-gray-600 mb-16">
                            Implementação + 3 meses de suporte grátis 24/7
                        </p>

                        <div className="bg-white rounded-2xl shadow-xl p-12 border-2 border-blue-600">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                                {/* Left */}
                                <div>
                                    <h3 className="text-2xl font-bold text-gray-900 mb-8">O que está incluído</h3>
                                    <ul className="space-y-4">
                                        {[
                                            "Personalização visual completa do sistema",
                                            "Agendamentos online com lembretes",
                                            "Gestão de clientes (CRM)",
                                            "Controle de vendas e comissões",
                                            "Gestão de estoque",
                                            "Integração WhatsApp/Instagram/Facebook",
                                            "Dashboard de analytics",
                                            "3 meses de suporte grátis 24/7 via WhatsApp",
                                            "Treinamento completo da equipe"
                                        ].map((item, idx) => (
                                            <li key={idx} className="flex items-start gap-3">
                                                <CheckCircle2 className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                                                <span className="text-gray-700">{item}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>

                                {/* Right */}
                                <div className="flex flex-col justify-between">
                                    <div>
                                        <p className="text-sm text-gray-600 mb-2">Investimento Inicial</p>
                                        <p className="text-5xl font-bold text-blue-600 mb-2">R$ 1.870</p>
                                        <p className="text-gray-600 mb-8">Personalização visual completa do sistema</p>

                                        <p className="text-sm text-gray-600 mb-2">Depois</p>
                                        <p className="text-4xl font-bold text-gray-900 mb-1">R$ 89</p>
                                        <p className="text-gray-600 mb-8">Por mês de suporte 24/7 (cancelável)</p>

                                        <div className="bg-blue-50 p-4 rounded-lg mb-8">
                                            <p className="text-sm text-gray-700">
                                                <span className="font-semibold">💡 Retorno rápido:</span> A maioria dos clientes recupera o investimento em 1-2 meses apenas com agendamentos.
                                            </p>
                                        </div>
                                    </div>

                                    <Button 
                                        size="lg"
                                        className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-6"
                                        onClick={() => window.open("https://wa.me/5532991075164")}
                                    >
                                        Começar Agora
                                    </Button>
                                </div>
                            </div>
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
