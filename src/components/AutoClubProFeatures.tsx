import { motion } from "framer-motion";
import { 
    MessageSquare, 
    UserPlus, 
    Car, 
    Calendar, 
    Workflow, 
    Package, 
    Receipt, 
    Users, 
    FileText, 
    BarChart3,
    Search,
    ShieldCheck,
    Smartphone,
    TrendingUp,
    Zap,
    Cpu
} from "lucide-react";

const features = [
    {
        category: "Experiência do Cliente",
        items: [
            {
                title: "Atendente Virtual 24h",
                description: "Uma página dedicada que recebe seu cliente, tira dúvidas e inicia o atendimento de forma automática.",
                icon: MessageSquare,
                color: "bg-blue-500",
            },
            {
                title: "Funil de Cadastro Inteligente",
                description: "Capture os dados do seu cliente de forma fluida, transformando visitantes em leads qualificados.",
                icon: UserPlus,
                color: "bg-indigo-500",
            },
            {
                title: "Área do Cliente VIP",
                description: "Espaço exclusivo para o cliente cadastrar seus veículos, gerenciar agendamentos e ver histórico.",
                icon: Smartphone,
                color: "bg-purple-500",
            },
            {
                title: "Histórico por Placa",
                description: "Tudo o que já foi feito no carro, organizado por placa. Transparência que gera fidelidade.",
                icon: Search,
                color: "bg-cyan-500",
            }
        ]
    },
    {
        category: "Gestão de Performance",
        items: [
            {
                title: "Workflow de Ponta a Ponta",
                description: "Controle total: do agendamento à entrega do veículo, passando por todas as etapas da oficina.",
                icon: Workflow,
                color: "bg-emerald-500",
            },
            {
                title: "Estoque com Indicadores",
                description: "Gestão inteligente de peças com alertas de reposição e métricas de consumo em tempo real.",
                icon: Package,
                color: "bg-amber-500",
            },
            {
                title: "Vendas e Cupons Premium",
                description: "Emissão de cupons de venda personalizados com sua marca, passando muito mais profissionalismo.",
                icon: Receipt,
                color: "bg-orange-500",
            },
            {
                title: "Gestão de Equipe & Elite",
                description: "Cadastro de colaboradores, cálculo automático de comissões e ranking de produtividade.",
                icon: Users,
                color: "bg-rose-500",
            },
            {
                title: "Financeiro com Relatórios PDF",
                description: "Painel financeiro completo com geração de relatórios profissionais em PDF para sua contabilidade.",
                icon: FileText,
                color: "bg-slate-700",
            },
            {
                title: "Dashboard de Indicadores",
                description: "Acompanhe suas vendas, ticket médio e crescimento através de gráficos intuitivos e modernos.",
                icon: BarChart3,
                color: "bg-blue-600",
            }
        ]
    }
];

const AutoClubProFeatures = () => {
    return (
        <section className="py-24 px-4 sm:px-6 lg:px-8 bg-white overflow-hidden">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-20">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                    >
                        <span className="inline-block px-4 py-1.5 mb-6 text-sm font-bold tracking-wider text-blue-600 uppercase bg-blue-50 rounded-full">
                            Funcionalidades de Elite
                        </span>
                        <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-gray-900 mb-6 tracking-tight">
                            Tudo o que você precisa para <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">
                                dominar o mercado automotivo
                            </span>
                        </h2>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                            O AutoClub Pro não é apenas um sistema, é o motor que faltava para acelerar a gestão da sua empresa.
                        </p>
                    </motion.div>
                </div>

                <div className="space-y-20">
                    {features.map((section, sectionIdx) => (
                        <div key={sectionIdx}>
                            <motion.h3 
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                className="text-2xl font-bold text-gray-900 mb-10 flex items-center gap-3"
                            >
                                <div className="w-8 h-1 bg-blue-600 rounded-full" />
                                {section.category}
                            </motion.h3>

                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                                {section.items.map((item, itemIdx) => (
                                    <motion.div
                                        key={itemIdx}
                                        initial={{ opacity: 0, y: 20 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ duration: 0.5, delay: itemIdx * 0.1 }}
                                        whileHover={{ y: -8 }}
                                        className="group p-8 rounded-[2rem] bg-slate-50 border border-slate-100 hover:bg-white hover:shadow-2xl hover:shadow-blue-900/10 transition-all duration-300"
                                    >
                                        <div className={`w-14 h-14 ${item.color} rounded-2xl flex items-center justify-center text-white mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                                            <item.icon className="w-7 h-7" />
                                        </div>
                                        <h4 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-blue-600 transition-colors">
                                            {item.title}
                                        </h4>
                                        <p className="text-gray-600 leading-relaxed">
                                            {item.description}
                                        </p>
                                    </motion.div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>

                {/* Bottom Highlight */}
                <motion.div 
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    className="mt-20 p-8 md:p-12 rounded-[3rem] bg-gradient-to-br from-blue-600 to-indigo-700 text-white text-center relative overflow-hidden"
                >
                    <div className="relative z-10">
                        <Cpu className="w-12 h-12 mx-auto mb-6 text-blue-200 animate-pulse" />
                        <h3 className="text-3xl font-bold mb-4">Tecnologia que trabalha por você</h3>
                        <p className="text-blue-100 text-lg max-w-2xl mx-auto mb-8">
                            Nossa solução vai muito além do básico. Cada tela foi pensada para economizar seu tempo e aumentar o lucro da sua operação.
                        </p>
                        <div className="flex flex-wrap justify-center gap-6">
                            <div className="flex items-center gap-2">
                                <ShieldCheck className="w-5 h-5 text-blue-300" />
                                <span className="font-semibold text-sm">Segurança de Dados</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <Zap className="w-5 h-5 text-blue-300" />
                                <span className="font-semibold text-sm">Alta Velocidade</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <TrendingUp className="w-5 h-5 text-blue-300" />
                                <span className="font-semibold text-sm">Escalabilidade</span>
                            </div>
                        </div>
                    </div>
                    
                    {/* Decorative Blobs */}
                    <div className="absolute top-0 right-0 -mr-20 -mt-20 w-80 h-80 bg-white/10 rounded-full blur-3xl" />
                    <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-80 h-80 bg-blue-400/20 rounded-full blur-3xl" />
                </motion.div>
            </div>
        </section>
    );
};

export default AutoClubProFeatures;
