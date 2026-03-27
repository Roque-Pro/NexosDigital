import { useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import { AlertCircle, ArrowLeft as ArrowLeftIcon, CheckCircle, Clock } from "lucide-react";
import { motion } from "framer-motion";
import { supabase } from "@/integrations/supabase/client";
import { useAuth } from "@/hooks/useAuth";
import { useSEO } from "@/hooks/useSEO";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";

const PlanAuth = () => {
    const navigate = useNavigate();
    const { session, loading } = useAuth();
    const { toast } = useToast();
    const [submitting, setSubmitting] = useState(false);

    // SEO para pequenas e médias empresas
    useSEO({
        title: "Diagnóstico Gratuito de Lucros | Análise para Pequenas e Médias Empresas",
        description: "Descubra onde sua pequena ou média empresa está perdendo dinheiro. Análise gratuita com roadmap claro para estruturar processos, aumentar margem e escalar. Comércio, serviços, SaaS, indústria.",
        keywords: [
            "diagnóstico pequena média empresa",
            "análise lucros pequena empresa",
            "consultoria media empresa",
            "margem de lucro empresa",
            "estrutura empresa",
            "escalar negócio",
            "organização empresarial",
            "análise financeira empresa",
            "diagnóstico gratuito empresa",
            "consultoria gestão",
            "pequenas médias empresas brasil",
            "pequeno negócio",
            "empresa crescimento",
            "fluxo de caixa",
            "rentabilidade empresa",
        ],
        ogTitle: "Diagnóstico Gratuito - Descubra quanto você está perdendo",
        ogDescription: "Análise personalizada que mostra exatamente onde sua pequena ou média empresa está deixando dinheiro na mesa. Sem cartão, sem compromisso.",
        ogUrl: "https://www.technexos.com.br/diagnostico-gratuito",
        twitterTitle: "Análise Gratuita para sua Pequena ou Média Empresa",
        twitterDescription: "Descobrir sua verdadeira margem de lucro em menos de 2 minutos.",
        canonicalUrl: "https://www.technexos.com.br/diagnostico-gratuito",
    });

    const [diagnosticData, setDiagnosticData] = useState({
        diagnosticName: "",
        diagnosticPhone: "",
        diagnosticCompany: "",
        diagnosticArea: "",
        diagnosticDescription: "",
    });

    if (loading) {
        return (
            <div className="min-h-screen bg-background flex items-center justify-center">
                <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-purple-500 to-purple-700 flex items-center justify-center shadow-lg shadow-purple-500/50 animate-pulse">
                    <AlertCircle className="w-6 h-6 text-white" />
                </div>
            </div>
        );
    }

    const handleDiagnosticSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setSubmitting(true);

        try {
            if (!diagnosticData.diagnosticName || !diagnosticData.diagnosticPhone || !diagnosticData.diagnosticArea || !diagnosticData.diagnosticDescription) {
                throw new Error("Por favor, preencha todos os campos obrigatórios.");
            }

            const { data, error } = await supabase
                .from("diagnostics")
                .insert({
                    name: diagnosticData.diagnosticName,
                    phone: diagnosticData.diagnosticPhone,
                    company: diagnosticData.diagnosticCompany || null,
                    area: diagnosticData.diagnosticArea,
                    description: diagnosticData.diagnosticDescription,
                    created_at: new Date().toISOString(),
                });

            if (error) throw error;

            toast({
                title: "Diagnóstico Enviado!",
                description: "Vou analisar sua situação e entro em contato em poucas horas.",
            });

            setTimeout(() => {
                navigate("/");
            }, 2000);
        } catch (error: any) {
            toast({
                title: "Erro",
                description: error.message || "Ocorreu um erro ao enviar o diagnóstico. Tente novamente.",
                variant: "destructive",
            });
        } finally {
            setSubmitting(false);
        }
    };

    const scrollToForm = () => {
        const formElement = document.getElementById("diagnostic-form");
        formElement?.scrollIntoView({ behavior: "smooth" });
    };

    return (
        <div className="min-h-screen bg-white">
            {/* Botão Voltar */}
            <button
                onClick={() => navigate("/")}
                className="fixed top-6 left-6 z-50 flex items-center gap-2 text-gray-600 hover:text-purple-600 transition-colors"
            >
                <ArrowLeftIcon className="w-5 h-5" />
                <span className="text-sm font-medium">Voltar</span>
            </button>

            {/* HERO SECTION - EMOÇÃO E PERDA IMEDIATA */}
            <section className="relative pt-24 pb-12 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-red-50 via-white to-white overflow-x-hidden">
                <div className="max-w-3xl mx-auto text-center w-full">
                    {/* Aviso visual */}
                    <motion.div
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="mb-8 inline-block"
                    >
                        <div className="bg-red-100 text-red-800 px-4 py-2 rounded-full text-sm font-semibold">
                            ⚠️ Sua empresa está deixando dinheiro na mesa
                        </div>
                    </motion.div>

                    {/* HEADLINE - PME */}
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="text-5xl sm:text-6xl font-black text-gray-900 mb-6 leading-tight"
                    >
                        Você trabalha todos os dias, mas{" "}
                        <span className="bg-gradient-to-r from-red-600 to-red-500 bg-clip-text text-transparent">
                            não sabe quanto está ganhando
                        </span>
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="text-xl text-gray-700 mb-6 leading-relaxed font-semibold"
                    >
                        Seu negócio cresce, mas os lucros não acompanham. Processos desorganizados, clientes perdidos, faturamento confuso. Isso drena muito mais do que você imagina.
                    </motion.p>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.3 }}
                        className="text-lg text-gray-600 mb-10 leading-relaxed"
                    >
                        Isso acontece <span className="font-bold text-gray-900">todos os dias</span> em praticamente todas as pequenas e médias empresas que crescem sem uma estrutura adequada.
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                        className="flex justify-center w-full px-2"
                    >
                        <Button
                            onClick={scrollToForm}
                            size="lg"
                            className="bg-red-600 hover:bg-red-700 text-white font-black px-4 sm:px-8 py-6 sm:py-7 text-sm sm:text-lg shadow-lg shadow-red-600/40 hover:shadow-red-600/60 transition-all"
                        >
                            👉 Descobrir quantos lucros estou perdendo
                        </Button>
                    </motion.div>
                </div>
            </section>

            {/* DORES ESPECÍFICAS - LISTA VISUAL */}
            <section className="py-16 px-4 sm:px-6 lg:px-8">
                <div className="max-w-4xl mx-auto">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                        className="text-3xl font-black text-gray-900 text-center mb-12"
                    >
                        Se você tem uma pequena ou média empresa, provavelmente está passando por isso:
                    </motion.h2>

                    <div className="grid gap-4">
                        {[
                            { icon: "📉", text: "Processos desorganizados causam perda de clientes e vendas", subtitle: "Sem um sistema unificado, comunicação falha, prazos descumpridos, cliente vai para concorrente" },
                            { icon: "⏱️", text: "Não consegue medir a rentabilidade real de cada cliente ou projeto", subtitle: "Custos espalhados, precificação incorreta. Você vende, mas não sabe quanto lucrou de verdade" },
                            { icon: "💼", text: "Dificuldade em escalar o negócio sem aumentar proporcionalmente os custos", subtitle: "Cresce manualmente, sem automação. Quanto mais vende, mais trabalho manual, menos margem" },
                            { icon: "💰", text: "Fluxo de caixa desconfortável no final do mês", subtitle: "Tudo misturado em planilha, na cabeça, em pedaço de papel. Não sabe quanto entra, quanto sai" },
                        ].map((pain, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.6, delay: index * 0.1 }}
                                viewport={{ once: true }}
                                className="flex items-start gap-5 p-6 bg-gradient-to-r from-gray-50 to-white rounded-xl border border-gray-200 hover:border-red-300 hover:bg-red-50 transition-all"
                            >
                                <span className="text-4xl flex-shrink-0">{pain.icon}</span>
                                <div>
                                    <p className="text-gray-900 font-bold text-lg">{pain.text}</p>
                                    <p className="text-gray-600 text-sm mt-2">{pain.subtitle}</p>
                                </div>
                            </motion.div>
                        ))}
                    </div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.5 }}
                        viewport={{ once: true }}
                        className="mt-12 p-6 bg-blue-50 rounded-xl border-l-4 border-blue-500"
                    >
                        <p className="text-center text-gray-700 text-base leading-relaxed">
                            <span className="font-black text-gray-900">Aqui vem o problema:</span> A maioria das pequenas e médias empresas cresce baseada em volume. Ninguém senta para realmente analisar: onde está o dinheiro saindo? Qual é a margem real? Como deixar de trabalhar "por hora" e crescer por resultado?
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* AUTORIDADE SEÇÃO - SEM CURRÍCULO */}
            <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-gray-50 to-white">
                <div className="max-w-4xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                        className="flex flex-col sm:flex-row items-start gap-8"
                    >
                        <div className="w-24 h-24 rounded-full bg-gradient-to-br from-purple-500 to-purple-700 flex items-center justify-center shadow-lg flex-shrink-0">
                            <span className="text-4xl">📊</span>
                        </div>

                        <div>
                            <h3 className="text-2xl font-black text-gray-900 mb-3">
                                Roque Rafael
                            </h3>
                            <p className="text-gray-700 leading-relaxed mb-4">
                                Passei anos vendo o mesmo padrão em pequenas e médias empresas: empresa que vende bem, mas não sabe a margem. Crescimento desorganizado, sem controle de custos. Muita atividade, pouco resultado. Faturamento bonito, lucro feio.
                            </p>
                            <p className="text-gray-700 leading-relaxed mb-4">
                                O que eu faço é simples: <span className="font-bold">analiso sua empresa e aponto exatamente onde está o desperdício, qual é a margem real, como escalar sem destruir sua saúde mental e de bolso.</span>
                            </p>
                            <p className="text-gray-700 leading-relaxed">
                                Sem vendas. Sem promessas. Só análise real do que está acontecendo com seu negócio. Baseado em dados, não em achismo.
                            </p>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* O QUE VOCÊ VAI RECEBER - PRÁTICO */}
            <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
                <div className="max-w-4xl mx-auto">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                        className="text-3xl font-black text-gray-900 text-center mb-12"
                    >
                        O que você vai receber (sem pagar nada)
                    </motion.h2>

                    <div className="grid sm:grid-cols-3 gap-6">
                        {[
                            { icon: "🎯", title: "Custos reais", desc: "Onde está indo seu dinheiro. CAC, churn, overhead, custos escondidos que matam a margem" },
                            { icon: "📊", title: "Margem verdadeira", desc: "Quanto você realmente lucra por cliente, por projeto, por produto. Não adivinhe." },
                            { icon: "🚀", title: "Próximos passos", desc: "Roadmap claro: o que mudar primeiro, como automatizar, onde cortar sem perder" },
                        ].map((benefit, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.8, delay: index * 0.1 }}
                                viewport={{ once: true }}
                                className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-xl p-6 border border-gray-200 text-center"
                            >
                                <div className="text-4xl mb-4">{benefit.icon}</div>
                                <h3 className="text-lg font-black text-gray-900 mb-2">
                                    {benefit.title}
                                </h3>
                                <p className="text-gray-600 text-sm leading-relaxed">
                                    {benefit.desc}
                                </p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* DESTAQUE RAMOS ATENDIDOS - DIFERENCIAL CHAVE */}
            <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-purple-50 to-pink-50">
                <div className="max-w-4xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                        className="bg-white rounded-xl p-8 border-2 border-purple-300"
                    >
                        <div className="flex items-start gap-4 mb-6">
                            <span className="text-5xl">⚙️</span>
                            <div>
                                <h3 className="text-2xl font-black text-gray-900">
                                    Foco em sistemas e automação
                                </h3>
                                <p className="text-gray-600 text-sm mt-1">A maioria dos problemas de lucro vem de processos manuais e tecnologia errada</p>
                            </div>
                        </div>

                        <ul className="space-y-4">
                            <li className="flex items-start gap-3">
                                <span className="font-black text-purple-600 mt-1">✓</span>
                                <div>
                                    <p className="text-gray-900 font-bold">Você tem sistemas espalhados</p>
                                    <p className="text-gray-600 text-sm">Excel, WhatsApp, papel, 3 softwares diferentes. Cada um custando e nenhum falando com o outro</p>
                                </div>
                            </li>
                            <li className="flex items-start gap-3">
                                <span className="font-black text-purple-600 mt-1">✓</span>
                                <div>
                                    <p className="text-gray-900 font-bold">Gasta dinheiro em ferramentas desnecessárias</p>
                                    <p className="text-gray-600 text-sm">Assinaturas que ninguém usa. Softwares que custam caro mas fazem pouco. Integração inexistente</p>
                                </div>
                            </li>
                            <li className="flex items-start gap-3">
                                <span className="font-black text-purple-600 mt-1">✓</span>
                                <div>
                                    <p className="text-gray-900 font-bold">Processos que deveriam ser automáticos são manuais</p>
                                    <p className="text-gray-600 text-sm">Pessoa passa 3 horas digitando dados. Sistema poderia fazer em 30 segundos. Custo invisível na sua folha</p>
                                </div>
                            </li>
                            <li className="flex items-start gap-3">
                                <span className="font-black text-purple-600 mt-1">✓</span>
                                <div>
                                    <p className="text-gray-900 font-bold">Não consegue escalar porque tudo é manual</p>
                                    <p className="text-gray-600 text-sm">Cresce = contrata mais gente. Sem automação, margem cai. Tecnologia certa resolveria isso</p>
                                </div>
                            </li>
                        </ul>
                    </motion.div>
                </div>
            </section>

            {/* ELEMENTO DE EXCLUSÃO */}
            <section className="py-12 px-4 sm:px-6 lg:px-8">
                <div className="max-w-3xl mx-auto text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                        className="bg-gray-100 rounded-lg p-6 border border-gray-300"
                    >
                        <p className="text-gray-700 font-semibold text-base">
                            Se você não consegue responder com segurança quanto é sua margem de lucro real… esse é o problema. É exatamente para isso que o diagnóstico existe.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* FORMULÁRIO - SEÇÃO FINAL */}
            <section id="diagnostic-form" className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-white via-gray-50 to-white">
                <div className="max-w-2xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                        className="bg-white rounded-2xl p-8 sm:p-12 shadow-xl border border-gray-200"
                    >
                        {/* Header */}
                        <div className="mb-8">
                            <h2 className="text-3xl sm:text-4xl font-black text-gray-900 mb-2">
                                Descreva sua empresa
                            </h2>
                            <p className="text-gray-600 text-base">Leva menos de 2 minutos. Vou analisar seus dados e responder com um diagnóstico detalhado.</p>
                        </div>

                        <form onSubmit={handleDiagnosticSubmit} className="space-y-5">
                            {/* Nome */}
                            <div className="space-y-2">
                                <Label htmlFor="diagnosticName" className="font-black text-gray-900">
                                    Seu nome *
                                </Label>
                                <Input
                                    id="diagnosticName"
                                    placeholder="João Silva"
                                    value={diagnosticData.diagnosticName}
                                    onChange={(e) =>
                                        setDiagnosticData({
                                            ...diagnosticData,
                                            diagnosticName: e.target.value,
                                        })
                                    }
                                    required
                                    className="border-2 border-gray-300 !text-gray-900 placeholder:!text-gray-400 focus:border-purple-500 focus:bg-white focus:outline-none transition-all rounded-lg bg-white text-base"
                                />
                            </div>

                            {/* WhatsApp */}
                            <div className="space-y-2">
                                <Label htmlFor="diagnosticPhone" className="font-black text-gray-900">
                                    Seu WhatsApp *
                                </Label>
                                <Input
                                    id="diagnosticPhone"
                                    placeholder="(XX) 99999-9999"
                                    value={diagnosticData.diagnosticPhone}
                                    onChange={(e) =>
                                        setDiagnosticData({
                                            ...diagnosticData,
                                            diagnosticPhone: e.target.value,
                                        })
                                    }
                                    required
                                    className="border-2 border-gray-300 !text-gray-900 placeholder:!text-gray-400 focus:border-purple-500 focus:bg-white focus:outline-none transition-all rounded-lg bg-white text-base"
                                />
                            </div>

                            {/* Empresa */}
                            <div className="space-y-2">
                                <Label htmlFor="diagnosticCompany" className="font-black text-gray-900">
                                    Nome da sua empresa <span className="text-gray-500 font-normal">(opcional)</span>
                                </Label>
                                <Input
                                    id="diagnosticCompany"
                                    placeholder="Ex: Tech Solutions Ltda"
                                    value={diagnosticData.diagnosticCompany}
                                    onChange={(e) =>
                                        setDiagnosticData({
                                            ...diagnosticData,
                                            diagnosticCompany: e.target.value,
                                        })
                                    }
                                    className="border-2 border-gray-300 !text-gray-900 placeholder:!text-gray-400 focus:border-purple-500 focus:bg-white focus:outline-none transition-all rounded-lg bg-white text-base"
                                />
                            </div>

                            {/* Área */}
                            <div className="space-y-2">
                                <Label htmlFor="diagnosticArea" className="font-black text-gray-900">
                                    Qual é seu maior desafio AGORA? *
                                </Label>
                                <select
                                    id="diagnosticArea"
                                    value={diagnosticData.diagnosticArea}
                                    onChange={(e) =>
                                        setDiagnosticData({
                                            ...diagnosticData,
                                            diagnosticArea: e.target.value,
                                        })
                                    }
                                    required
                                    className="w-full px-4 py-3 rounded-lg border-2 border-gray-300 bg-white !text-gray-900 font-bold focus:border-purple-500 focus:bg-white focus:outline-none transition-all appearance-none cursor-pointer text-base"
                                >
                                    <option value="">Selecione uma opção...</option>
                                    <option value="processos">📋 Processos desorganizados e falta de controle</option>
                                    <option value="margem">💹 Não sei minha margem real de lucro</option>
                                    <option value="escala">🚀 Dificuldade em escalar sem perder lucratividade</option>
                                    <option value="fluxo">💰 Fluxo de caixa apertado ou imprevisível</option>
                                    <option value="outro">🔄 Outro desafio</option>
                                </select>
                            </div>

                            {/* Descrição */}
                            <div className="space-y-2">
                                <Label htmlFor="diagnosticDescription" className="font-black text-gray-900">
                                    Descreva um pouco seu negócio e o desafio *
                                </Label>
                                <textarea
                                    id="diagnosticDescription"
                                    placeholder="Ex: Sou agência de marketing com 5 clientes. Faturamos bem, mas não consigo dar aumento. Acho que temos muito custo fixo. Ou então: Comércio online, crescimento rápido mas margem caiu. Tenho medo de parar de crescer..."
                                    value={diagnosticData.diagnosticDescription}
                                    onChange={(e) =>
                                        setDiagnosticData({
                                            ...diagnosticData,
                                            diagnosticDescription: e.target.value,
                                        })
                                    }
                                    required
                                    className="w-full px-4 py-3 rounded-lg border-2 border-gray-300 bg-white !text-gray-900 placeholder:!text-gray-400 font-base focus:border-purple-500 focus:bg-white focus:outline-none transition-all min-h-24 resize-none text-base"
                                />
                            </div>

                            {/* CTA Button */}
                            <Button
                                type="submit"
                                className="w-full bg-red-600 hover:bg-red-700 text-white font-black py-6 text-lg mt-6 rounded-lg shadow-lg shadow-red-600/40 hover:shadow-red-600/60 transition-all"
                                disabled={submitting}
                            >
                                {submitting ? "⏳ Enviando..." : "🚀 Solicitar análise gratuita"}
                            </Button>

                            {/* Reassurance */}
                            <p className="text-center text-gray-600 text-sm mt-4">
                                ✓ Gratuito e confidencial • ✓ Sem venda pesada • ✓ Análise completa em 48h
                            </p>
                        </form>

                        {/* Transparência */}
                        <div className="mt-10 pt-8 border-t border-gray-200">
                            <h3 className="font-black text-gray-900 mb-4 text-base">
                                Por que uma análise gratuita?
                            </h3>
                            <ul className="space-y-3">
                                <li className="flex items-start gap-3 text-sm">
                                    <CheckCircle className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-0.5" />
                                    <div>
                                        <p className="text-gray-900 font-bold">Sem riscos</p>
                                        <p className="text-gray-600">Nenhum cartão de crédito, nenhuma taxa escondida. Apenas dados que você já sabe</p>
                                    </div>
                                </li>
                                <li className="flex items-start gap-3 text-sm">
                                    <CheckCircle className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-0.5" />
                                    <div>
                                        <p className="text-gray-900 font-bold">Sem compromisso</p>
                                        <p className="text-gray-600">Você recebe a análise completa. Depois apenas descobre se nossa abordagem faz sentido para você</p>
                                    </div>
                                </li>
                                <li className="flex items-start gap-3 text-sm">
                                    <CheckCircle className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-0.5" />
                                    <div>
                                        <p className="text-gray-900 font-bold">Análise específica para seu negócio</p>
                                        <p className="text-gray-600">Baseado no seu ramo, tamanho, desafios. Não é template genérico</p>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* CTA FINAL */}
            <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-gray-900 to-gray-800 text-white text-center overflow-x-hidden">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    className="w-full px-2"
                >
                    <h2 className="text-2xl sm:text-3xl font-black mb-4">
                        Enquanto você toma essa decisão, seus concorrentes estão estruturando
                    </h2>
                    <p className="text-gray-300 mb-8 max-w-2xl mx-auto text-base sm:text-lg">
                        Preenche o formulário rápido. Vou analisar e te enviar uma diagnóstico detalhado com dados reais.
                    </p>
                    <Button
                        onClick={scrollToForm}
                        size="lg"
                        className="bg-red-600 hover:bg-red-700 text-white font-black px-4 sm:px-8 py-6 sm:py-6 text-sm sm:text-lg"
                    >
                        Ver minha análise gratuita
                    </Button>
                </motion.div>
            </section>
        </div>
    );
};

export default PlanAuth;
