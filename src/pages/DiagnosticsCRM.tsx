import { useState, useEffect } from "react";
import { Navigate } from "react-router-dom";
import { supabase } from "@/integrations/supabase/client";
import { useAuth } from "@/hooks/useAuth";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import {
    Code2,
    ChevronDown,
    Search,
    Trash2,
    Download,
    Users,
    LogOut,
    BookOpen,
    Clapperboard,
    Sparkles,
    FileText,
    Play,
    Square,
    Clock,
} from "lucide-react";
import { motion } from "framer-motion";

interface Diagnostic {
    id: string;
    name: string;
    phone: string;
    company: string | null;
    area: string;
    description: string;
    status: string;
    budget_estimate: number | null;
    notes: string | null;
    created_at: string;
}

interface BlogAutomationSettings {
    enabled: boolean;
    interval_minutes: number;
    next_run_at: string | null;
    last_run_at: string | null;
    last_success_at: string | null;
    last_status: string;
    last_error: string | null;
    last_generated_slug: string | null;
    publish_enabled: boolean;
}

const DiagnosticsCRM = () => {
    const { session } = useAuth();
    const { toast } = useToast();
    const [diagnostics, setDiagnostics] = useState<Diagnostic[]>([]);
    const [loading, setLoading] = useState(true);
    const [searchTerm, setSearchTerm] = useState("");
    const [filterStatus, setFilterStatus] = useState("all");
    const [expandedId, setExpandedId] = useState<string | null>(null);

    // Automation States
    const [isAutoRunning, setIsAutoRunning] = useState(false);
    const [intervalMinutes, setIntervalMinutes] = useState(90);
    const [nextRun, setNextRun] = useState<Date | null>(null);

    const [lastRunAt, setLastRunAt] = useState<Date | null>(null);
    const [lastStatus, setLastStatus] = useState("idle");
    const [lastError, setLastError] = useState<string | null>(null);
    const [lastGeneratedSlug, setLastGeneratedSlug] = useState<string | null>(null);
    const [automationSaving, setAutomationSaving] = useState(false);

    // Função para pegar hora atual de Brasília (UTC-3)

    // Verificar autenticação
    const applyAutomationSettings = (settings: BlogAutomationSettings) => {
        setIsAutoRunning(settings.enabled);
        setIntervalMinutes(settings.interval_minutes || 90);
        setNextRun(settings.next_run_at ? new Date(settings.next_run_at) : null);
        setLastRunAt(settings.last_run_at ? new Date(settings.last_run_at) : null);
        setLastStatus(settings.last_status || "idle");
        setLastError(settings.last_error || null);
        setLastGeneratedSlug(settings.last_generated_slug || null);
    };

    const loadAutomationSettings = async () => {
        try {
            const { data, error } = await supabase
                .from("blog_posts")
                .select("html_content")
                .eq("slug", "__blog-automation-settings__")
                .maybeSingle();

            if (error) throw error;

            const rawSettings = data?.html_content ? JSON.parse(data.html_content) : null;

            if (!rawSettings) {
                applyAutomationSettings({
                    enabled: false,
                    interval_minutes: 90,
                    next_run_at: null,
                    last_run_at: null,
                    last_success_at: null,
                    last_status: "idle",
                    last_error: null,
                    last_generated_slug: null,
                    publish_enabled: true,
                });
                return;
            }

            applyAutomationSettings(rawSettings as BlogAutomationSettings);
        } catch (error: any) {
            toast({
                title: "Erro na automação",
                description: error.message || "Não foi possível carregar o agendamento do blog.",
                variant: "destructive",
            });
        }
    };

    if (!session) {
        return <Navigate to="/auth" replace />;
    }
    useEffect(() => {
        fetchDiagnostics();
        loadAutomationSettings();
    }, []);

    const persistAutomationSettings = async (enabled: boolean, newIntervalMinutes = intervalMinutes) => {
        setAutomationSaving(true);

        const now = new Date();
        const nextRunAt = enabled ? new Date(now.getTime() + newIntervalMinutes * 60000).toISOString() : null;
        const nextStatus = enabled ? "scheduled" : "paused";

        try {
            const settingsPayload = {
                enabled,
                interval_minutes: newIntervalMinutes,
                next_run_at: nextRunAt,
                last_run_at: lastRunAt ? lastRunAt.toISOString() : null,
                last_success_at: null,
                last_status: nextStatus,
                last_error: enabled ? null : lastError,
                last_generated_slug: lastGeneratedSlug,
                publish_enabled: true,
            };

            const { data: settingsPost, error: settingsLookupError } = await supabase
                .from("blog_posts")
                .select("id")
                .eq("slug", "__blog-automation-settings__")
                .maybeSingle();

            if (settingsLookupError) throw settingsLookupError;

            const { error } = settingsPost
                ? await supabase
                    .from("blog_posts")
                    .update({
                        title: "Configura??o interna da automa??o",
                        excerpt: "Registro interno do agendamento do blog",
                        html_content: JSON.stringify(settingsPayload),
                        published: false,
                        updated_at: now.toISOString(),
                    })
                    .eq("id", settingsPost.id)
                : await supabase.from("blog_posts").insert({
                    title: "Configura??o interna da automa??o",
                    slug: "__blog-automation-settings__",
                    excerpt: "Registro interno do agendamento do blog",
                    html_content: JSON.stringify(settingsPayload),
                    published: false,
                    created_at: now.toISOString(),
                    updated_at: now.toISOString(),
                });

            if (error) throw error;

            setIsAutoRunning(enabled);
            setIntervalMinutes(newIntervalMinutes);
            setNextRun(nextRunAt ? new Date(nextRunAt) : null);
            setLastStatus(nextStatus);
            if (enabled) {
                setLastError(null);
            }

            toast({
                title: enabled ? "Automa??o agendada" : "Automa??o pausada",
                description: enabled
                    ? `A publica??o autom?tica ficou agendada para rodar a cada ${newIntervalMinutes} minutos.`
                    : "O agendamento autom?tico foi pausado.",
            });
        } catch (error: any) {
            toast({
                title: "Erro na automa??o",
                description: error.message || "N?o foi poss?vel salvar a automa??o do blog.",
                variant: "destructive",
            });
        } finally {
            setAutomationSaving(false);
        }
    };

    const toggleAutomation = async () => {
        await persistAutomationSettings(!isAutoRunning);
    };

    const handleIntervalChange = async (value: string) => {
        const parsedValue = Math.max(1, parseInt(value, 10) || 1);
        setIntervalMinutes(parsedValue);

        if (isAutoRunning) {
            await persistAutomationSettings(true, parsedValue);
        }
    };

    const generateSitemap = async () => {
        try {
            const baseUrl = "https://www.technexos.com.br";
            const staticPages = ["", "/google-meu-negocio-juiz-de-fora", "/autoclub-pro", "/about-me", "/blog"];
            const now = new Date().toISOString().split('T')[0];
            
            let xml = `<?xml version="1.0" encoding="UTF-8"?>\n`;
            xml += `<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n`;
            
            // Static Pages
            staticPages.forEach(route => {
                xml += `  <url>\n`;
                xml += `    <loc>${baseUrl}${route}</loc>\n`;
                xml += `    <lastmod>${now}</lastmod>\n`;
                xml += `    <changefreq>weekly</changefreq>\n`;
                xml += `    <priority>${route === "" ? "1.0" : "0.8"}</priority>\n`;
                xml += `  </url>\n`;
            });
            
            // Dynamic Blog Posts
            const { data: blogPosts } = await supabase
                .from("blog_posts")
                .select("slug, updated_at")
                .eq("published", true);
            
            if (blogPosts) {
                blogPosts.forEach(post => {
                    const postDate = new Date(post.updated_at || Date.now()).toISOString().split('T')[0];
                    xml += `  <url>\n`;
                    xml += `    <loc>${baseUrl}/blog/${post.slug}</loc>\n`;
                    xml += `    <lastmod>${postDate}</lastmod>\n`;
                    xml += `    <changefreq>monthly</changefreq>\n`;
                    xml += `    <priority>0.6</priority>\n`;
                    xml += `  </url>\n`;
                });
            }
            
            xml += `</urlset>`;

            const blob = new Blob([xml], { type: "application/xml" });
            const url = window.URL.createObjectURL(blob);
            const a = document.createElement("a");
            a.href = url;
            a.download = "sitemap.xml";
            a.click();
            window.URL.revokeObjectURL(url);
            
            toast({ title: "Sitemap XML Gerado", description: "sitemap.xml pronto para o Google Search Console." });
        } catch (error) {
            toast({ title: "Erro", description: "Falha ao gerar sitemap XML", variant: "destructive" });
        }
    };

    const fetchDiagnostics = async () => {
        setLoading(true);
        try {
            const { data, error } = await supabase
                .from("diagnostics")
                .select("*")
                .order("created_at", { ascending: false });

            if (error) throw error;
            setDiagnostics(data || []);
        } catch (error: any) {
            toast({
                title: "Erro",
                description: error.message || "Erro ao carregar diagnósticos",
                variant: "destructive",
            });
        } finally {
            setLoading(false);
        }
    };

    // Filtrar diagnósticos
    const filteredDiagnostics = diagnostics.filter((d) => {
        const matchSearch =
            d.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
            d.phone.includes(searchTerm) ||
            d.company?.toLowerCase().includes(searchTerm.toLowerCase());

        const matchStatus = filterStatus === "all" || d.status === filterStatus;

        return matchSearch && matchStatus;
    });

    // Atualizar status
    const updateStatus = async (id: string, newStatus: string) => {
        try {
            const { error } = await supabase
                .from("diagnostics")
                .update({ status: newStatus })
                .eq("id", id);

            if (error) throw error;

            setDiagnostics(
                diagnostics.map((d) => (d.id === id ? { ...d, status: newStatus } : d))
            );

            toast({
                title: "Status atualizado",
                description: `Diagnóstico movido para ${newStatus}`,
            });
        } catch (error: any) {
            toast({
                title: "Erro",
                description: error.message,
                variant: "destructive",
            });
        }
    };

    // Atualizar orçamento
    const updateBudget = async (id: string, budget: number) => {
        try {
            const { error } = await supabase
                .from("diagnostics")
                .update({ budget_estimate: budget })
                .eq("id", id);

            if (error) throw error;

            setDiagnostics(
                diagnostics.map((d) =>
                    d.id === id ? { ...d, budget_estimate: budget } : d
                )
            );

            toast({
                title: "Orçamento atualizado",
            });
        } catch (error: any) {
            toast({
                title: "Erro",
                description: error.message,
                variant: "destructive",
            });
        }
    };

    // Atualizar notas
    const updateNotes = async (id: string, notes: string) => {
        try {
            const { error } = await supabase
                .from("diagnostics")
                .update({ notes })
                .eq("id", id);

            if (error) throw error;

            setDiagnostics(
                diagnostics.map((d) => (d.id === id ? { ...d, notes } : d))
            );

            toast({
                title: "Notas salvas",
            });
        } catch (error: any) {
            toast({
                title: "Erro",
                description: error.message,
                variant: "destructive",
            });
        }
    };

    // Deletar
    const deleteDiagnostic = async (id: string) => {
        if (!confirm("Tem certeza que deseja deletar este diagnóstico?")) return;

        try {
            const { error } = await supabase.from("diagnostics").delete().eq("id", id);

            if (error) throw error;

            setDiagnostics(diagnostics.filter((d) => d.id !== id));

            toast({
                title: "Deletado",
                description: "Diagnóstico removido",
            });
        } catch (error: any) {
            toast({
                title: "Erro",
                description: error.message,
                variant: "destructive",
            });
        }
    };

    // Exportar CSV
    const exportCSV = () => {
        const headers = [
            "Nome",
            "WhatsApp",
            "Empresa",
            "Área",
            "Descrição",
            "Status",
            "Orçamento",
            "Data",
        ];
        const rows = filteredDiagnostics.map((d) => [
            d.name,
            d.phone,
            d.company || "-",
            d.area,
            d.description.replace(/"/g, '""'),
            d.status,
            d.budget_estimate || "-",
            new Date(d.created_at).toLocaleDateString("pt-BR"),
        ]);

        const csv = [
            headers.join(","),
            ...rows.map((row) => row.map((cell) => `"${cell}"`).join(",")),
        ].join("\n");

        const blob = new Blob([csv], { type: "text/csv" });
        const url = window.URL.createObjectURL(blob);
        const a = document.createElement("a");
        a.href = url;
        a.download = `diagnosticos_${new Date().toISOString().split("T")[0]}.csv`;
        a.click();
    };

    // Logout
    const handleLogout = async () => {
        await supabase.auth.signOut();
        window.location.href = "/";
    };

    const stats = {
        total: diagnostics.length,
        new: diagnostics.filter((d) => d.status === "new").length,
        contacted: diagnostics.filter((d) => d.status === "contacted").length,
        quoted: diagnostics.filter((d) => d.status === "quoted").length,
        won: diagnostics.filter((d) => d.status === "won").length,
    };

    const statusColors: Record<string, string> = {
        new: "bg-blue-900 text-blue-300 border border-blue-500",
        contacted: "bg-amber-900 text-amber-300 border border-amber-500",
        quoted: "bg-purple-900 text-purple-300 border border-purple-500",
        won: "bg-emerald-900 text-emerald-300 border border-emerald-500",
        lost: "bg-red-900 text-red-300 border border-red-500",
    };

    return (
        <div className="min-h-screen bg-slate-950">
            {/* Header */}
            <div className="border-b border-indigo-500 bg-gradient-to-r from-indigo-950 via-slate-900 to-purple-950 sticky top-0 z-40 shadow-2xl">
                <div className="max-w-7xl mx-auto px-6 py-5 flex items-center justify-between">
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        className="flex items-center gap-3"
                    >
                        <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-indigo-400 to-purple-600 flex items-center justify-center">
                            <Code2 className="w-6 h-6 text-white" />
                        </div>
                        <div>
                            <h1 className="text-xl font-display font-bold text-white">
                                CRM Diagnósticos
                            </h1>
                            <p className="text-xs text-indigo-300">Gerenciar captações</p>
                        </div>
                    </motion.div>

                    <div className="flex items-center gap-3">
                        <Button
                            onClick={() => (window.location.href = "/blog-admin")}
                            className="bg-indigo-500 hover:bg-indigo-600 text-white font-bold text-sm"
                        >
                            <BookOpen className="w-4 h-4 mr-2" />
                            Blog
                        </Button>
                        <Button
                            onClick={() => (window.location.href = "/instagram-reels-admin")}
                            className="bg-pink-500 hover:bg-pink-600 text-white font-bold text-sm"
                        >
                            <Clapperboard className="w-4 h-4 mr-2" />
                            Reels
                        </Button>
                        <Button
                            onClick={generateSitemap}
                            variant="outline"
                            className="border-indigo-500 text-indigo-400 hover:bg-indigo-500/10 font-bold"
                        >
                            <FileText className="w-4 h-4 mr-2" />
                            Sitemap
                        </Button>
                        <Button
                            onClick={exportCSV}
                            className="bg-emerald-500 hover:bg-emerald-600 text-white font-bold text-sm"
                        >
                            <Download className="w-4 h-4 mr-2" />
                            Exportar
                        </Button>
                        <Button
                            onClick={handleLogout}
                            className="bg-red-500 hover:bg-red-600 text-white font-bold text-sm"
                        >
                            <LogOut className="w-4 h-4 mr-2" />
                            Sair
                        </Button>
                    </div>
                </div>
            </div>

            {/* Conteúdo */}
            <div className="max-w-7xl mx-auto p-6">
                {/* AI Automation Control Panel */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="bg-slate-900 border-2 border-purple-500 rounded-2xl p-6 mb-8 shadow-[0_0_20px_rgba(168,85,247,0.2)]"
                >
                    <div className="flex flex-col md:flex-row items-center justify-between gap-6">
                        <div className="flex items-center gap-4">
                            <div className={`p-3 rounded-xl ${isAutoRunning ? 'bg-purple-600 animate-pulse' : 'bg-slate-800'} border border-purple-400`}>
                                <Sparkles className="w-6 h-6 text-white" />
                            </div>
                            <div>
                                <h3 className="text-xl font-bold text-white">Automação Inteligente (Gemini)</h3>
                                <p className="text-purple-300 text-sm">Postagens automáticas e estratégicas a cada intervalo.</p>
                            </div>
                        </div>

                        <div className="flex items-center gap-6">
                            <div className="flex items-center gap-3 bg-slate-800 p-2 rounded-lg border border-purple-500/30">
                                <Clock className="w-4 h-4 text-purple-400" />
                                <div className="flex items-center gap-2">
                                    <Input 
                                        type="number" 
                                        value={intervalMinutes}
                                        onChange={(e) => void handleIntervalChange(e.target.value)}
                                        className="w-20 h-8 bg-slate-700 border-purple-500 text-white text-center"
                                    />
                                    <span className="text-purple-300 text-xs font-bold uppercase">minutos</span>
                                </div>
                            </div>

                            <Button
                                onClick={() => void toggleAutomation()}
                                disabled={automationSaving}
                                className={`h-12 px-8 font-black text-lg transition-all ${isAutoRunning ? 'bg-red-600 hover:bg-red-700' : 'bg-purple-600 hover:bg-purple-700'} shadow-lg`}
                            >
                                {isAutoRunning ? (
                                    <><Square className="w-5 h-5 mr-2" /> Parar</>
                                ) : (
                                    <><Play className="w-5 h-5 mr-2" /> Iniciar</>
                                )}
                            </Button>
                        </div>
                    </div>
                    {isAutoRunning && nextRun && (
                        <div className="mt-4 text-center">
                            <p className="text-xs text-purple-400 font-mono">
                                Próxima geração em: {nextRun.toLocaleTimeString()}
                            </p>
                        </div>
                    )}
                </motion.div>

                {/* Stats */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="grid grid-cols-2 sm:grid-cols-5 gap-3 mb-6"
                >
                    <div className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-lg p-4 border border-indigo-500 shadow-lg text-center">
                        <p className="text-indigo-300 text-xs font-semibold mb-1">Total</p>
                        <p className="text-3xl font-bold text-white">{stats.total}</p>
                    </div>
                    <div className="bg-gradient-to-br from-blue-900 to-blue-950 rounded-lg p-4 border border-blue-500 shadow-lg text-center">
                        <p className="text-blue-300 text-xs font-semibold mb-1">Novo</p>
                        <p className="text-3xl font-bold text-blue-300">{stats.new}</p>
                    </div>
                    <div className="bg-gradient-to-br from-amber-900 to-amber-950 rounded-lg p-4 border border-amber-500 shadow-lg text-center">
                        <p className="text-amber-300 text-xs font-semibold mb-1">Contatado</p>
                        <p className="text-3xl font-bold text-amber-300">{stats.contacted}</p>
                    </div>
                    <div className="bg-gradient-to-br from-purple-900 to-purple-950 rounded-lg p-4 border border-purple-500 shadow-lg text-center">
                        <p className="text-purple-300 text-xs font-semibold mb-1">Orçado</p>
                        <p className="text-3xl font-bold text-purple-300">{stats.quoted}</p>
                    </div>
                    <div className="bg-gradient-to-br from-emerald-900 to-emerald-950 rounded-lg p-4 border border-emerald-500 shadow-lg text-center">
                        <p className="text-emerald-300 text-xs font-semibold mb-1">Ganho</p>
                        <p className="text-3xl font-bold text-emerald-300">{stats.won}</p>
                    </div>
                </motion.div>

                {/* Filtros */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="mb-6 flex flex-col sm:flex-row gap-3"
                >
                    <div className="flex-1 relative">
                        <Search className="absolute left-3 top-3 w-4 h-4 text-indigo-400" />
                        <Input
                            placeholder="Buscar por nome, WhatsApp ou empresa..."
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                            className="pl-10 text-sm bg-slate-800 border-indigo-500 text-white placeholder-slate-400"
                        />
                    </div>
                    <select
                        value={filterStatus}
                        onChange={(e) => setFilterStatus(e.target.value)}
                        className="px-3 py-2 rounded-lg border border-indigo-500 bg-slate-800 text-white text-sm font-medium"
                    >
                        <option value="all">Todos os Status</option>
                        <option value="new">Novo</option>
                        <option value="contacted">Contatado</option>
                        <option value="quoted">Orçado</option>
                        <option value="won">Ganho</option>
                        <option value="lost">Perdido</option>
                    </select>
                </motion.div>

                {/* Lista */}
                {loading ? (
                    <div className="bg-slate-800 rounded-lg p-8 text-center border border-indigo-500">
                        <p className="text-indigo-300">Carregando...</p>
                    </div>
                ) : filteredDiagnostics.length === 0 ? (
                    <div className="bg-slate-800 rounded-lg p-8 text-center border border-indigo-500">
                        <Users className="w-12 h-12 text-indigo-500 mx-auto mb-3" />
                        <p className="text-indigo-300 font-semibold">Nenhum diagnóstico</p>
                    </div>
                ) : (
                    <div className="space-y-3">
                        {filteredDiagnostics.map((diagnostic) => (
                            <motion.div
                                key={diagnostic.id}
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                className="bg-slate-800 rounded-lg border border-indigo-500 overflow-hidden shadow-lg"
                            >
                                {/* Header */}
                                <div
                                    onClick={() =>
                                        setExpandedId(
                                            expandedId === diagnostic.id ? null : diagnostic.id
                                        )
                                    }
                                    className="p-4 cursor-pointer hover:bg-slate-700 transition-colors"
                                >
                                    <div className="flex items-center justify-between gap-4">
                                        <div className="flex-1 min-w-0">
                                            <p className="font-bold text-white truncate">
                                                {diagnostic.name}
                                            </p>
                                            <p className="text-xs text-indigo-300 truncate">
                                                {new Date(diagnostic.created_at).toLocaleDateString(
                                                    "pt-BR"
                                                )}
                                            </p>
                                        </div>

                                        <div className="hidden sm:flex items-center gap-4">
                                            <a
                                                href={`https://wa.me/${diagnostic.phone.replace(/\D/g, "")}`}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="text-sm text-indigo-400 hover:text-indigo-300 font-semibold"
                                                onClick={(e) => e.stopPropagation()}
                                            >
                                                {diagnostic.phone}
                                            </a>
                                            <span className="text-sm text-indigo-300 bg-slate-700 px-2 py-1 rounded border border-indigo-500">
                                                {diagnostic.area}
                                            </span>
                                            <span
                                                className={`text-xs font-bold px-2 py-1 rounded ${statusColors[diagnostic.status] ||
                                                    "bg-slate-700 text-slate-300"
                                                    }`}
                                            >
                                                {diagnostic.status}
                                            </span>
                                        </div>

                                        <ChevronDown
                                            className={`w-5 h-5 text-indigo-400 transition-transform ${expandedId === diagnostic.id ? "rotate-180" : ""
                                                }`}
                                        />
                                    </div>
                                </div>

                                {/* Detalhe */}
                                {expandedId === diagnostic.id && (
                                    <motion.div
                                        initial={{ opacity: 0, height: 0 }}
                                        animate={{ opacity: 1, height: "auto" }}
                                        className="bg-slate-900 border-t border-indigo-500 p-4 space-y-4"
                                    >
                                        <div>
                                            <Label className="text-xs font-bold text-indigo-300 mb-2 block">
                                                Descrição do Problema
                                            </Label>
                                            <p className="text-sm text-white bg-slate-800 p-3 rounded border border-indigo-500">
                                                {diagnostic.description}
                                            </p>
                                        </div>

                                        {diagnostic.company && (
                                            <div>
                                                <Label className="text-xs font-bold text-indigo-300 mb-2 block">
                                                    Empresa
                                                </Label>
                                                <p className="text-sm text-white bg-slate-800 p-3 rounded border border-indigo-500">
                                                    {diagnostic.company}
                                                </p>
                                            </div>
                                        )}

                                        <div className="grid sm:grid-cols-3 gap-3">
                                            <div>
                                                <Label className="text-xs font-bold text-indigo-300 mb-2 block">
                                                    Status
                                                </Label>
                                                <select
                                                    value={diagnostic.status}
                                                    onChange={(e) =>
                                                        updateStatus(diagnostic.id, e.target.value)
                                                    }
                                                    className="w-full text-sm px-2 py-2 rounded border border-indigo-500 bg-slate-800 text-white font-medium"
                                                >
                                                    <option value="new">Novo</option>
                                                    <option value="contacted">Contatado</option>
                                                    <option value="quoted">Orçado</option>
                                                    <option value="won">Ganho</option>
                                                    <option value="lost">Perdido</option>
                                                </select>
                                            </div>

                                            <div>
                                                <Label className="text-xs font-bold text-indigo-300 mb-2 block">
                                                    Orçamento (R$)
                                                </Label>
                                                <Input
                                                    type="number"
                                                    value={diagnostic.budget_estimate || ""}
                                                    onChange={(e) => {
                                                        const val = e.target.value
                                                            ? parseFloat(e.target.value)
                                                            : null;
                                                        updateBudget(diagnostic.id, val as number);
                                                    }}
                                                    placeholder="0.00"
                                                    className="text-sm bg-slate-800 border-indigo-500 text-white placeholder-slate-400"
                                                />
                                            </div>

                                            <div>
                                                <Label className="text-xs font-bold text-indigo-300 mb-2 block">
                                                    WhatsApp
                                                </Label>
                                                <a
                                                    href={`https://wa.me/${diagnostic.phone.replace(/\D/g, "")}`}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="flex items-center justify-center h-9 text-sm font-bold bg-emerald-600 text-white rounded hover:bg-emerald-700"
                                                >
                                                    Enviar mensagem
                                                </a>
                                            </div>
                                        </div>

                                        <div>
                                            <Label className="text-xs font-bold text-indigo-300 mb-2 block">
                                                Notas Internas
                                            </Label>
                                            <textarea
                                                value={diagnostic.notes || ""}
                                                onChange={(e) =>
                                                    updateNotes(diagnostic.id, e.target.value)
                                                }
                                                placeholder="Adicionar notas sobre este cliente..."
                                                className="w-full text-sm px-3 py-2 rounded border border-indigo-500 bg-slate-800 text-white placeholder-slate-400 min-h-20 resize-none"
                                            />
                                        </div>

                                        <div className="flex gap-2 justify-end pt-2 border-t border-indigo-500">
                                            <Button
                                                onClick={() => deleteDiagnostic(diagnostic.id)}
                                                className="bg-red-600 hover:bg-red-700 text-white text-sm font-bold"
                                            >
                                                <Trash2 className="w-4 h-4 mr-2" />
                                                Deletar
                                            </Button>
                                        </div>
                                    </motion.div>
                                )}
                            </motion.div>
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
};

export default DiagnosticsCRM;
