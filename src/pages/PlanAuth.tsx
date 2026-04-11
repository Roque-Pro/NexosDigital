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

    // SEO para empresas com problemas de conversão de leads
    useSEO({
        title: "Diagnóstico Gratuito: Estruturação de Tráfego Pago e Conversão de Leads",
        description: "Sua empresa recebe contatos mas não converte? Diagnóstico gratuito que identifica onde você está perdendo clientes. Estruturação de tráfego + sistema de captação + processo de vendas.",
        keywords: [
            "diagnóstico tráfego pago",
            "conversão de leads",
            "captação de clientes",
            "estruturação de tráfego",
            "conversão de tráfego",
            "atendimento desorganizado",
            "sistema de vendas",
            "perda de leads",
            "tráfego sem conversão",
            "diagnóstico leads",
            "processo de vendas",
            "estratégia de tráfego",
            "diagnóstico gratuito pme",
        ],
        ogTitle: "Diagnóstico Gratuito: Por que você perde clientes no meio do caminho",
        ogDescription: "Recebe contatos mas não transforma em cliente? Descubra exatamente onde você está perdendo. Análise completa do tráfego até a conversão.",
        ogUrl: "https://www.technexos.com.br/diagnostico-gratuito",
        twitterTitle: "Diagnóstico: Onde você está perdendo clientes",
        twitterDescription: "Analise sua taxa de conversão de leads em 2 minutos.",
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

            {/* HERO SECTION - PROBLEMA CENTRAL: PERDA DE CLIENTES */}
            <section className="relative pt-24 pb-12 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-orange-50 via-white to-white overflow-x-hidden">
                <div className="max-w-3xl mx-auto text-center w-full">
                    {/* Aviso visual */}
                    <motion.div
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="mb-8 inline-block"
                    >
                        <div className="bg-orange-100 text-orange-800 px-4 py-2 rounded-full text-sm font-semibold">
                            ⚠️ Você está perdendo clientes sem nem saber
                        </div>
                    </motion.div>

                    {/* HEADLINE - FOCO EM CONVERSÃO */}
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="text-5xl sm:text-6xl font-black text-gray-900 mb-6 leading-tight"
                    >
                        Seu tráfego não é o problema.{" "}
                        <span className="bg-gradient-to-r from-orange-600 to-orange-500 bg-clip-text text-transparent">
                            Seu processo é.
                        </span>
                    </motion.h1>

                    {/* SUBHEADLINE - IDENTIFICAÇÃO IMEDIATA */}
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="text-xl text-gray-700 mb-6 leading-relaxed font-semibold"
                    >
                        Você investe em publicidade, recebe leads todos os dias, mas não consegue fechar a venda. Ou quando fecha, a conversão é tão baixa que o custo por cliente fica impossível de sustentar.
                    </motion.p>

                    {/* DOR ESPECÍFICA */}
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.3 }}
                        className="text-lg text-gray-600 mb-10 leading-relaxed"
                    >
                        Enquanto isso, seus concorrentes estão estruturando tudo: desde a forma como captam o lead, até como organizam o atendimento, passando por um processo de vendas que realmente converte.
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
                            className="bg-orange-600 hover:bg-orange-700 text-white font-black px-4 sm:px-8 py-6 sm:py-7 text-sm sm:text-lg shadow-lg shadow-orange-600/40 hover:shadow-orange-600/60 transition-all"
                        >
                            👉 Analisar minha taxa de conversão
                        </Button>
                    </motion.div>
                </div>
            </section>

            {/* LISTA DE PROBLEMAS - EFEITO IDENTIFICAÇÃO */}
            <section className="py-16 px-4 sm:px-6 lg:px-8">
                <div className="max-w-4xl mx-auto">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                        className="text-3xl font-black text-gray-900 text-center mb-12"
                    >
                        Você provavelmente reconhece algum desses problemas:
                    </motion.h2>

                    <div className="grid gap-4">
                        {[
                            { icon: "📞", text: "Recebe muitos contatos, mas poucos viram clientes", subtitle: "Seu atendimento é desorganizado. Um responde por WhatsApp, outro por email, ninguém tem histórico. Cliente se perde no meio" },
                            { icon: "💸", text: "Investe em tráfego, mas o custo por cliente adquirido é muito alto", subtitle: "Você sabe que está gastando mais do que deveria pra trazer um cliente. A questão é: por quê?" },
                            { icon: "🔄", text: "Não tem processo definido de vendas", subtitle: "Cada vendedor faz de um jeito. Algumas propostas levam 3 dias, outras 2 semanas. Sem padronização, tudo é mais lento e caro" },
                            { icon: "📊", text: "Não consegue acompanhar onde cada lead está no funil", subtitle: "Não sabe quantos estão em negociação, quantos desistiram, e por quê. Funciona na intuição, não em dados" },
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
                        className="mt-12 p-6 bg-orange-50 rounded-xl border-l-4 border-orange-500"
                    >
                        <p className="text-center text-gray-700 text-base leading-relaxed">
                            <span className="font-black text-gray-900">Aqui está o ponto:</span> Não adianta gerar tráfego se você não transforma isso em cliente. E não é um problema de tráfego. É um problema de falta de estrutura do tráfego até a conversão.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* APRESENTAÇÃO DO ESPECIALISTA */}
            <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-orange-50 to-white">
                <div className="max-w-4xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                        className="flex flex-col sm:flex-row items-start gap-8"
                    >
                        <div className="w-24 h-24 rounded-full bg-gradient-to-br from-orange-500 to-orange-700 flex items-center justify-center shadow-lg flex-shrink-0">
                            <span className="text-4xl">🎯</span>
                        </div>

                        <div>
                            <h3 className="text-2xl font-black text-gray-900 mb-3">
                                Roque Rafael
                            </h3>
                            <p className="text-gray-700 leading-relaxed mb-4">
                                Trabalho há anos ajudando empresas a estruturarem sua captação de leads e conversão. Vi o mesmo problema centenas de vezes: empresas gastando milhares em tráfego, recebendo leads de qualidade, mas perdendo a venda na hora do atendimento.
                            </p>
                            <p className="text-gray-700 leading-relaxed mb-4">
                                <span className="font-bold">O diferencial:</span> Não é sobre vender mais caro ou tocar mais vezes no cliente. É sobre criar um sistema que funcione. Desde a forma como você capta o lead, passando por como seu time responde, até como você fecha a venda. Estruturado. Documentado. Replicável.
                            </p>
                            <p className="text-gray-700 leading-relaxed">
                                Sem tecnologia desnecessária. Sem jargão técnico. Apenas: o que precisa funcionar pra você ganhar mais clientes.
                            </p>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* SEÇÃO DE PROVAS - CARROSSEL COM 5 CASES */}
            <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
                <div className="max-w-4xl mx-auto">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                        className="text-3xl font-black text-gray-900 text-center mb-4"
                    >
                        Como isso funciona na prática
                    </motion.h2>
                    <p className="text-center text-gray-600 text-lg mb-12">Cinco empresas diferentes. Mesmo problema. Solução estruturada.</p>

                    <div className="grid sm:grid-cols-2 lg:grid-cols-1 gap-6">
                        {[
                            { 
                                name: "Clínica de Estética", 
                                segment: "Saúde & Beleza",
                                before: "Recebia 15-20 leads por mês em Google Ads, mas apenas 2-3 viravam agendamentos",
                                what: "Estruturamos o processo: desde o primeiro contato até a venda. Criamos um padrão de resposta rápida no WhatsApp, um questionário de identificação de necessidade, e um follow-up automático",
                                after: "Aumentou pra 8-10 agendamentos mês. A taxa de conversão subiu de 10% pra 50%"
                            },
                            { 
                                name: "Agência de Marketing", 
                                segment: "Serviços B2B",
                                before: "Gerava muitos leads, mas levava 3-4 semanas pra fechar. Equipe desorganizada, sem processo claro",
                                what: "Estruturamos o funil: lead → qualificação → proposta → assinatura. Cada etapa com ferramentas e templates. Todo mundo sabia o que fazer",
                                after: "Tempo de fechamento caiu pra 1 semana. Equipe mais organizada. Margem melhorou porque sabia exatamente quanto custa fechar"
                            },
                            { 
                                name: "E-commerce de Moda", 
                                segment: "Varejo Online",
                                before: "Gastava muito em Facebook Ads, conversão era de 1%. Não tinha retargeting, não tinha follow-up com abandono de carrinho",
                                what: "Reestruturamos o fluxo: desde o pixel rastreando comportamento, até sequência de email automático pro carrinho abandonado",
                                after: "Conversão subiu pra 3%. Custo por aquisição caiu em 40%. Não mudou o tráfego, mudou o processo"
                            },
                            { 
                                name: "Consultório Advocatício", 
                                segment: "Serviços Profissionais",
                                before: "Recebia consultas, mas muitas desistiam antes de contratar. Não tinha sistema de acompanhamento",
                                what: "Criamos um processo de educação do cliente antes da venda. Material explicativo, chamada diagnóstica estruturada, propostas personalizadas",
                                after: "Taxa de conversão dobrou. Clientes mais qualificados. Menos devoluções. Cliente quer voltar"
                            },
                            { 
                                name: "Empresa B2B de Softwares", 
                                segment: "Tecnologia",
                                before: "Leads vinham da Cold Outreach, mas perdiam interesse nas primeiras 48 horas. Ninguém acompanhava",
                                what: "Estruturamos uma sequência de engajamento: primeiro email, video explicativo, calendário pra demo, follow-up automático",
                                after: "30% dos leads viraram demos. 40% das demos viraram clientes. Pipeline previsível"
                            }
                        ].map((caseItem, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, delay: index * 0.1 }}
                                viewport={{ once: true }}
                                className="bg-gradient-to-br from-orange-50 to-white rounded-xl p-8 border border-orange-200 shadow-sm hover:shadow-md transition-all"
                            >
                                <div className="flex items-start justify-between mb-4">
                                    <div>
                                        <h3 className="text-xl font-black text-gray-900">{caseItem.name}</h3>
                                        <p className="text-sm text-orange-600 font-bold">{caseItem.segment}</p>
                                    </div>
                                </div>
                                
                                <div className="space-y-4">
                                    <div>
                                        <p className="text-xs font-black text-gray-600 mb-1">SITUAÇÃO ANTES</p>
                                        <p className="text-gray-700 text-sm">{caseItem.before}</p>
                                    </div>
                                    
                                    <div>
                                        <p className="text-xs font-black text-gray-600 mb-1">O QUE FOI FEITO</p>
                                        <p className="text-gray-700 text-sm">{caseItem.what}</p>
                                    </div>
                                    
                                    <div>
                                        <p className="text-xs font-black text-orange-600 mb-1">RESULTADO</p>
                                        <p className="text-gray-900 text-sm font-bold">{caseItem.after}</p>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* COMO FUNCIONA O DIAGNÓSTICO */}
            <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-gray-50 to-white">
                <div className="max-w-4xl mx-auto">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                        className="text-3xl font-black text-gray-900 text-center mb-12"
                    >
                        Como funciona o diagnóstico gratuito
                    </motion.h2>

                    <div className="grid sm:grid-cols-3 gap-6">
                        {[
                            { icon: "📝", title: "1. Você preenche o formulário", desc: "Rápido. Não pedimos informações pessoais desnecessárias. Apenas o essencial: como você capta leads agora, qual é sua maior dificuldade, e um pouco do seu negócio." },
                            { icon: "🔍", title: "2. Analiso profundamente", desc: "Eu vejo onde você está perdendo clientes. Desde o primeiro contato até a negociação. Identifico o gargalo específico da sua empresa e calculo o impacto de corrigir isso." },
                            { icon: "📊", title: "3. Você recebe um plano claro", desc: "Nada genérico. Um diagnóstico escrito, com os problemas específicos encontrados e um passo a passo de como resolver. Sem jargão. Prático. Implementável." },
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

            {/* QUEBRA DE OBJEÇÕES */}
            <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-orange-50 to-white">
                <div className="max-w-4xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                        className="bg-white rounded-xl p-8 border-2 border-orange-300"
                    >
                        <div className="flex items-start gap-4 mb-6">
                            <span className="text-5xl">❓</span>
                            <div>
                                <h3 className="text-2xl font-black text-gray-900">
                                    Perguntas que você deve estar fazendo
                                </h3>
                                <p className="text-gray-600 text-sm mt-1">Respondemos as objeções mais comuns</p>
                            </div>
                        </div>

                        <ul className="space-y-4">
                            <li className="flex items-start gap-3">
                                <span className="font-black text-orange-600 mt-1">✓</span>
                                <div>
                                    <p className="text-gray-900 font-bold">"Não tenho orçamento para implementar mudanças agora"</p>
                                    <p className="text-gray-600 text-sm">O diagnóstico te mostra onde você está perdendo dinheiro. Muitas vezes a solução é reorganizar o que você já tem, não comprar coisa nova. Você decide depois da análise.</p>
                                </div>
                            </li>
                            <li className="flex items-start gap-3">
                                <span className="font-black text-orange-600 mt-1">✓</span>
                                <div>
                                    <p className="text-gray-900 font-bold">"Já tentei otimizar isso e não funcionou"</p>
                                    <p className="text-gray-600 text-sm">Provável que você tenha otimizado partes isoladas. O problema é falta de uma visão do sistema completo. Do lead até o cliente. A gente mapeiam tudo.</p>
                                </div>
                            </li>
                            <li className="flex items-start gap-3">
                                <span className="font-black text-orange-600 mt-1">✓</span>
                                <div>
                                    <p className="text-gray-900 font-bold">"Vou ter que mexer em tudo e virar confusão"</p>
                                    <p className="text-gray-600 text-sm">Nada. O plano que você recebe é priorizado. "Primeiro faça isso, depois isso outro". Tudo de forma que não paralisa seu negócio.</p>
                                </div>
                            </li>
                            <li className="flex items-start gap-3">
                                <span className="font-black text-orange-600 mt-1">✓</span>
                                <div>
                                    <p className="text-gray-900 font-bold">"Minha empresa é diferente, isso não funciona pra mim"</p>
                                    <p className="text-gray-600 text-sm">Por isso o diagnóstico é personalizado. Não é template. E é gratuito, sem compromisso. Você vê se faz sentido pra seu caso.</p>
                                </div>
                            </li>
                        </ul>
                    </motion.div>
                </div>
            </section>

            {/* ELEMENTO DE URGÊNCIA */}
            <section className="py-12 px-4 sm:px-6 lg:px-8">
                <div className="max-w-3xl mx-auto text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                        className="bg-orange-50 rounded-lg p-6 border border-orange-300"
                    >
                        <p className="text-gray-700 font-semibold text-base">
                            Enquanto você está lendo isso, seus concorrentes estão estruturando seus processos de vendas. A questão é: quanto tempo você vai esperar antes de organizar o seu?
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
                                Solicitar diagnóstico gratuito
                            </h2>
                            <p className="text-gray-600 text-base">2 minutos. Sem compromisso. Você receberá uma análise personalizada sobre onde está perdendo clientes.</p>
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
                                     Qual é seu maior desafio com leads/vendas? *
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
                                     className="w-full px-4 py-3 rounded-lg border-2 border-gray-300 bg-white !text-gray-900 font-bold focus:border-orange-500 focus:bg-white focus:outline-none transition-all appearance-none cursor-pointer text-base"
                                 >
                                     <option value="">Selecione uma opção...</option>
                                     <option value="atendimento">📞 Recebo muitos leads mas poucos viram clientes</option>
                                     <option value="conversao">💸 Minha taxa de conversão é muito baixa</option>
                                     <option value="processo">🔄 Meu processo de vendas é desorganizado</option>
                                     <option value="funil">📊 Não consigo acompanhar leads no funil</option>
                                     <option value="outro">❓ Outro desafio</option>
                                 </select>
                             </div>

                            {/* Descrição */}
                             <div className="space-y-2">
                                 <Label htmlFor="diagnosticDescription" className="font-black text-gray-900">
                                     Conte um pouco mais sobre seu negócio e o desafio específico *
                                 </Label>
                                 <textarea
                                     id="diagnosticDescription"
                                     placeholder="Ex: Sou clínica de estética. Recebo 20 leads por mês em Google Ads mas só 2-3 viram agendamentos. Não sei onde está o problema. Ou: E-commerce de roupas. Muitas pessoas veem meu produto mas poucos compram. Não tenho sistema de acompanhamento de carrinho abandonado..."
                                     value={diagnosticData.diagnosticDescription}
                                     onChange={(e) =>
                                         setDiagnosticData({
                                             ...diagnosticData,
                                             diagnosticDescription: e.target.value,
                                         })
                                     }
                                     required
                                     className="w-full px-4 py-3 rounded-lg border-2 border-gray-300 bg-white !text-gray-900 placeholder:!text-gray-400 font-base focus:border-orange-500 focus:bg-white focus:outline-none transition-all min-h-24 resize-none text-base"
                                 />
                             </div>

                            {/* CTA Button */}
                             <Button
                                 type="submit"
                                 className="w-full bg-orange-600 hover:bg-orange-700 text-white font-black py-6 text-lg mt-6 rounded-lg shadow-lg shadow-orange-600/40 hover:shadow-orange-600/60 transition-all"
                                 disabled={submitting}
                             >
                                 {submitting ? "⏳ Enviando..." : "🚀 Solicitar diagnóstico gratuito"}
                             </Button>

                             {/* Reassurance */}
                             <p className="text-center text-gray-600 text-sm mt-4">
                                 ✓ 100% gratuito • ✓ Sem compromisso • ✓ Resposta em até 48h
                             </p>
                        </form>

                        {/* Transparência */}
                         <div className="mt-10 pt-8 border-t border-gray-200">
                             <h3 className="font-black text-gray-900 mb-4 text-base">
                                 Por que eu faço isso gratuitamente?
                             </h3>
                             <ul className="space-y-3">
                                 <li className="flex items-start gap-3 text-sm">
                                     <CheckCircle className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-0.5" />
                                     <div>
                                         <p className="text-gray-900 font-bold">Porque você merece saber a verdade</p>
                                         <p className="text-gray-600">Muitos consultores cobram uma fortuna pra te vender algo. Eu prefiro te mostrar onde está o problema de verdade. Sem venda forçada.</p>
                                     </div>
                                 </li>
                                 <li className="flex items-start gap-3 text-sm">
                                     <CheckCircle className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-0.5" />
                                     <div>
                                         <p className="text-gray-900 font-bold">Porque confiança é o começo</p>
                                         <p className="text-gray-600">Se a análise fizer sentido pra você, você já sabe como vou trabalhar. Se não fizer, sem problema. Pelo menos você tem clareza.</p>
                                     </div>
                                 </li>
                                 <li className="flex items-start gap-3 text-sm">
                                     <CheckCircle className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-0.5" />
                                     <div>
                                         <p className="text-gray-900 font-bold">Porque empresas que estruturam crescem</p>
                                         <p className="text-gray-600">E empresas que crescem com lucro viram clientes de longo prazo. Isso é melhor que vender uma solução genérica pra quem não quer.</p>
                                     </div>
                                 </li>
                             </ul>
                         </div>
                    </motion.div>
                </div>
            </section>

            {/* CTA FINAL */}
             <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-orange-900 to-orange-800 text-white text-center overflow-x-hidden">
                 <motion.div
                     initial={{ opacity: 0, y: 20 }}
                     whileInView={{ opacity: 1, y: 0 }}
                     transition={{ duration: 0.8 }}
                     viewport={{ once: true }}
                     className="w-full px-2"
                 >
                     <h2 className="text-2xl sm:text-3xl font-black mb-4">
                         Enquanto você termina de ler isto, um competitor está estruturando seu processo de conversão
                     </h2>
                     <p className="text-orange-100 mb-8 max-w-2xl mx-auto text-base sm:text-lg">
                         2 minutos pra preencher. Vou analisar e você recebe um diagnóstico específico apontando exatamente onde você está perdendo clientes.
                     </p>
                     <Button
                         onClick={scrollToForm}
                         size="lg"
                         className="bg-white hover:bg-orange-50 text-orange-600 font-black px-4 sm:px-8 py-6 sm:py-6 text-sm sm:text-lg"
                     >
                         Solicitar meu diagnóstico agora
                     </Button>
                 </motion.div>
             </section>
        </div>
    );
};

export default PlanAuth;
