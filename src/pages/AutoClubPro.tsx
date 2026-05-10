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
                <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-blue-50 to-slate-50">
                    <div className="max-w-6xl mx-auto">
                        <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4 text-center">
                            Identidade Própria: O Sistema é <span className="text-blue-600">SEU</span>
                        </h2>
                        <p className="text-center text-gray-600 mb-16 max-w-2xl mx-auto text-lg">
                            Chega de usar sistemas genéricos que fazem propaganda para os outros. No AutoClub Pro, sua marca é a protagonista, não a nossa.
                        </p>

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

                {/* YouTube Videos */}
                <YouTubeVideosSection />

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
                                            "Landing Page Profissional (Página de Vendas) da sua empresa",
                                            "Personalização visual completa do sistema",
                                            "Área de Clientes para agendamento",
                                            "Gestão de clientes (CRM)",
                                            "Controle de vendas e comissões",
                                            "Gestão de estoque",
                                            "Integração WhatsApp/Instagram/Facebook",
                                            "Dashboard de analytics",
                                            "3 meses de suporte grátis 24/7 via WhatsApp",
                                            "Treinamento completo da equipe"
                                        ].map((item, idx) => (
                                            <li key={idx} className="flex items-start gap-3">
                                                <CheckCircle2 className={`w-5 h-5 mt-0.5 flex-shrink-0 ${idx < 3 ? "text-blue-600 animate-pulse" : "text-green-600"}`} />
                                                <span className={`text-gray-700 ${idx < 3 ? "font-bold text-blue-900" : ""}`}>{item}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>

                                {/* Right */}
                                <div className="flex flex-col justify-between">
                                    <div>
                                        <p className="text-xs font-bold text-gray-500 uppercase tracking-widest mb-2">Investimento Implementação</p>
                                        <div className="mb-4">
                                            <p className="text-6xl font-black text-gray-900 tracking-tighter">
                                                R$ 2.650
                                            </p>
                                            <p className="text-blue-600 font-bold text-lg mt-1">
                                                Em até 12x no cartão de crédito
                                            </p>
                                        </div>
                                        <p className="text-gray-600 mb-8 leading-tight">Implementação completa + Sua Landing Page Personalizada</p>

                                        <p className="text-xs font-bold text-gray-500 uppercase tracking-widest mb-2">Manutenção e Suporte</p>
                                        <p className="text-4xl font-bold text-gray-900 mb-1">R$ 89<span className="text-lg font-normal text-gray-500">/mês</span></p>
                                        <p className="text-gray-600 mb-8 italic">Suporte 24/7 (cancelável a qualquer momento)</p>

                                        <div className="bg-blue-50 p-4 rounded-xl border border-blue-100 mb-8">
                                            <p className="text-sm text-gray-700">
                                                <span className="font-semibold">💡 Retorno Rápido:</span> Sua nova Landing Page + Sistema de Agendamentos costumam pagar o investimento em menos de 45 dias.
                                            </p>
                                        </div>
                                    </div>

                                    <Button 
                                        size="lg"
                                        className="w-full bg-blue-600 hover:bg-blue-700 text-white font-black py-8 text-xl shadow-lg shadow-blue-200 transition-all hover:scale-[1.02]"
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
