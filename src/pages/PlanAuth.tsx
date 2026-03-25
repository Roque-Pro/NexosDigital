import { useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import { AlertCircle, ArrowLeft as ArrowLeftIcon, CheckCircle, Clock } from "lucide-react";
import { motion } from "framer-motion";
import { supabase } from "@/integrations/supabase/client";
import { useAuth } from "@/hooks/useAuth";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";

const PlanAuth = () => {
    const navigate = useNavigate();
    const { session, loading } = useAuth();
    const { toast } = useToast();
    const [submitting, setSubmitting] = useState(false);
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
                            ⚠️ Você está perdendo dinheiro agora
                        </div>
                    </motion.div>

                    {/* HEADLINE - OPÇÃO 1 (padrão) */}
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="text-5xl sm:text-6xl font-black text-gray-900 mb-6 leading-tight"
                    >
                        Seus clientes saem por aquela porta e você fica aqui{" "}
                        <span className="bg-gradient-to-r from-red-600 to-red-500 bg-clip-text text-transparent">
                            perdendo dinheiro
                        </span>
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="text-xl text-gray-700 mb-6 leading-relaxed font-semibold"
                    >
                        Enquanto você está trabalhando, clientes entram e saem pela porta. E você aqui, sem saber quantos voltam e quanto dinheiro realmente ficou.
                    </motion.p>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.3 }}
                        className="text-lg text-gray-600 mb-10 leading-relaxed"
                    >
                        Isso acontece <span className="font-bold text-gray-900">todos os dias</span> em praticamente todas as oficinas que não conseguem ver o quadro completo.
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
                            👉 Descobrir onde perco dinheiro
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
                        Se você tem uma oficina, provavelmente está passando por isso:
                    </motion.h2>

                    <div className="grid gap-4">
                        {[
                            { icon: "📉", text: "Você perde clientes porque não consegue responder rapidamente", subtitle: "Cliente liga, você está ocupado, passa para concorrente" },
                            { icon: "⏱️", text: "Não sabe quanto tempo um serviço leva", subtitle: "Estimativa errada = lucro errado. Sempre faltando organização" },
                            { icon: "🏢", text: "Não aproveita as seguradoras corretamente", subtitle: "A maioria das oficinas deixa 40-60% do potencial de renda nas seguradoras" },
                            { icon: "💰", text: "No fim do mês não sabe se ganhou ou perdeu dinheiro", subtitle: "Tudo misturado em planilha, na cabeça, em pedaço de papel" },
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
                            <span className="font-black text-gray-900">Aqui vem o problema:</span> A maioria das oficinas cresce baseada em "experiência" e "achismo". Ninguém senta para realmente ver onde o dinheiro está indo.
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
                            <span className="text-4xl">🔧</span>
                        </div>

                        <div>
                            <h3 className="text-2xl font-black text-gray-900 mb-3">
                                Roque Rafael
                            </h3>
                            <p className="text-gray-700 leading-relaxed mb-4">
                                Passei anos vendo o mesmo padrão: oficina com muita demanda, mas perdendo clientes porque não consegue atender rápido. Oficina faturando bem, mas não sabe quanto é lucro de verdade. Oficina trabalhando com seguradoras, mas deixando dinheiro na mesa.
                            </p>
                            <p className="text-gray-700 leading-relaxed mb-4">
                                O que eu faço é simples: <span className="font-bold">analiso sua oficina e aponto exatamente onde você está perdendo oportunidade de ganhar mais.</span>
                            </p>
                            <p className="text-gray-700 leading-relaxed">
                                Sem vendas. Sem promessas. Só análise real do que está acontecendo com seu negócio.
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
                            { icon: "🎯", title: "Análise de perda", desc: "Vou apontar exatamente onde você está perdendo dinheiro e clientes" },
                            { icon: "📊", title: "Números reais", desc: "Quanto você poderia estar ganhando se controlasse melhor tudo" },
                            { icon: "🛣️", title: "Caminho claro", desc: "Um plano simples de como sair dessa situação, sem complicação" },
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

            {/* DESTAQUE SEGURADORAS - DIFERENCIAL CHAVE */}
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
                            <span className="text-5xl">🏢</span>
                            <div>
                                <h3 className="text-2xl font-black text-gray-900">
                                    Sobre as seguradoras...
                                </h3>
                                <p className="text-gray-600 text-sm mt-1">O diferencial mais importante</p>
                            </div>
                        </div>

                        <ul className="space-y-4">
                            <li className="flex items-start gap-3">
                                <span className="font-black text-purple-600 mt-1">✓</span>
                                <div>
                                    <p className="text-gray-900 font-bold">Quase toda oficina perde com seguradoras</p>
                                    <p className="text-gray-600 text-sm">Você deixa 40-60% do seu faturamento potencial na mesa sem perceber</p>
                                </div>
                            </li>
                            <li className="flex items-start gap-3">
                                <span className="font-black text-purple-600 mt-1">✓</span>
                                <div>
                                    <p className="text-gray-900 font-bold">O jeito que você faz não funciona para seguradoras</p>
                                    <p className="text-gray-600 text-sm">Precisa de processos diferentes, mas você trata igual a cliente direto. Deixa boa parte do faturamento na mesa.</p>
                                </div>
                            </li>
                            <li className="flex items-start gap-3">
                                <span className="font-black text-purple-600 mt-1">✓</span>
                                <div>
                                    <p className="text-gray-900 font-bold">Isso impacta direto no seu bolso</p>
                                    <p className="text-gray-600 text-sm">Quando você estrutura seguradoras, o faturamento muda bastante</p>
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
                            Se você não sabe exatamente quanto está perdendo por mês… esse já é o problema. E é por isso que você precisa preencher o formulário.
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
                                Me conta o que está acontecendo
                            </h2>
                            <p className="text-gray-600 text-base">Leva menos de 1 minuto. Vou analisar e te mostro exatamente onde está o problema.</p>
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
                                    Nome da sua oficina <span className="text-gray-500 font-normal">(opcional)</span>
                                </Label>
                                <Input
                                    id="diagnosticCompany"
                                    placeholder="Ex: Vidros do João"
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
                                    Qual é seu maior problema AGORA? *
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
                                    <option value="seguradoras">🏢 Não trabalho bem com seguradoras</option>
                                    <option value="clientes">📉 Perco clientes por falta de organização</option>
                                    <option value="agendamento">⏱️ Bagunça no agendamento / controle de serviços</option>
                                    <option value="financeiro">💰 Falta de controle financeiro</option>
                                </select>
                            </div>

                            {/* Descrição */}
                            <div className="space-y-2">
                                <Label htmlFor="diagnosticDescription" className="font-black text-gray-900">
                                    Conte um pouco mais sobre o que está acontecendo *
                                </Label>
                                <textarea
                                    id="diagnosticDescription"
                                    placeholder="Ex: Tenho muitos clientes na porta, mas não consigo atender rápido. Preciso saber como as seguradoras funcionam melhor. Não sei quanto estou ganhando por mês..."
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
                                {submitting ? "⏳ Enviando..." : "🚀 Enviar meu diagnóstico agora"}
                            </Button>

                            {/* Reassurance */}
                            <p className="text-center text-gray-600 text-sm mt-4">
                                ✓ Gratuito • ✓ Sem compromisso • ✓ Resposta em poucas horas
                            </p>
                        </form>

                        {/* Transparência */}
                        <div className="mt-10 pt-8 border-t border-gray-200">
                            <h3 className="font-black text-gray-900 mb-4 text-base">
                                Por que é gratuito?
                            </h3>
                            <ul className="space-y-3">
                                <li className="flex items-start gap-3 text-sm">
                                    <CheckCircle className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-0.5" />
                                    <div>
                                        <p className="text-gray-900 font-bold">Sem cobrar nada</p>
                                        <p className="text-gray-600">Sem cartão de crédito, sem enganação</p>
                                    </div>
                                </li>
                                <li className="flex items-start gap-3 text-sm">
                                    <CheckCircle className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-0.5" />
                                    <div>
                                        <p className="text-gray-900 font-bold">Sem compromisso</p>
                                        <p className="text-gray-600">Você vai receber minha análise. Depois decide se quer continuar</p>
                                    </div>
                                </li>
                                <li className="flex items-start gap-3 text-sm">
                                    <CheckCircle className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-0.5" />
                                    <div>
                                        <p className="text-gray-900 font-bold">Análise real e personalizada</p>
                                        <p className="text-gray-600">Focada na sua oficina, seus problemas, suas oportunidades</p>
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
                        Enquanto você fica aqui, seus clientes estão indo embora
                    </h2>
                    <p className="text-gray-300 mb-8 max-w-2xl mx-auto text-base sm:text-lg">
                        Preenche o formulário. Vou te mostrar onde você está perdendo dinheiro.
                    </p>
                    <Button
                        onClick={scrollToForm}
                        size="lg"
                        className="bg-red-600 hover:bg-red-700 text-white font-black px-4 sm:px-8 py-6 sm:py-6 text-sm sm:text-lg"
                    >
                        Descobrir onde perco dinheiro
                    </Button>
                </motion.div>
            </section>
        </div>
    );
};

export default PlanAuth;
