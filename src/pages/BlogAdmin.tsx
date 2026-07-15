import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { supabase } from "@/integrations/supabase/client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import { ArrowLeft, Plus, Edit2, Trash2, Eye, Save, Sparkles, FileText, Play, Square, Clock } from "lucide-react";
import { BlogPost } from "@/types";

const BlogAdmin = () => {
    const navigate = useNavigate();
    const { toast } = useToast();
    const [posts, setPosts] = useState<BlogPost[]>([]);
    const [loading, setLoading] = useState(true);
    const [editingId, setEditingId] = useState<string | null>(null);
    const [showForm, setShowForm] = useState(false);

    // Automation States
    const [isAutoRunning, setIsAutoRunning] = useState(false);
    const [intervalMinutes, setIntervalMinutes] = useState(90);
    const [nextRun, setNextRun] = useState<Date | null>(null);

    const [formData, setFormData] = useState({
        title: "",
        slug: "",
        html_content: "",
        excerpt: "",
        published: false,
    });

    useEffect(() => {
        loadPosts();
        
        // Recover automation state
        const savedAuto = localStorage.getItem("blog_automation_active") === "true";
        const savedInterval = localStorage.getItem("blog_automation_interval");
        if (savedAuto) setIsAutoRunning(true);
        if (savedInterval) setIntervalMinutes(parseInt(savedInterval));
    }, []);

    // Chamada direta via Fetch para desviar de interceptores globais/RPC fantasmas
    useEffect(() => {
        let timer: NodeJS.Timeout;
        if (isAutoRunning) {
            const runAuto = async () => {
                try {
                    toast({ title: "IA", description: "Iniciando geração automática de post..." });
                    
                    // Extrai com segurança as credenciais de conexão do cliente Supabase
                    const supabaseUrl = (supabase as any).supabaseUrl;
                    const anonKey = (supabase as any).supabaseKey;

                    // Requisição limpa para a Edge Function
                    const response = await fetch(`${supabaseUrl}/functions/v1/auto-generate-post`, {
                        method: 'POST',
                        headers: {
                            'Content-Type': 'application/json',
                            'Authorization': `Bearer ${anonKey}`,
                            'apikey': anonKey
                        }
                    });

                    if (!response.ok) {
                        const errorData = await response.json().catch(() => ({}));
                        throw new Error(errorData.error || `Erro HTTP: ${response.status}`);
                    }

                    toast({ title: "Sucesso", description: "Post gerado automaticamente pela IA!" });
                    loadPosts();
                } catch (error: any) {
                    console.error("Auto post error:", error);
                    toast({ title: "Erro na IA", description: error.message, variant: "destructive" });
                }
                setNextRun(new Date(Date.now() + intervalMinutes * 60000));
            };

            if (!nextRun) {
                setNextRun(new Date(Date.now() + intervalMinutes * 60000));
            }

            timer = setInterval(() => {
                if (new Date() >= (nextRun || new Date())) {
                    runAuto();
                }
            }, 60000);
        }
        return () => clearInterval(timer);
    }, [isAutoRunning, intervalMinutes, nextRun]);

    const toggleAutomation = () => {
        const newState = !isAutoRunning;
        setIsAutoRunning(newState);
        localStorage.setItem("blog_automation_active", String(newState));
        localStorage.setItem("blog_automation_interval", String(intervalMinutes));
        if (newState) {
            setNextRun(new Date(Date.now() + intervalMinutes * 60000));
            toast({ title: "Automação Ativada", description: `Posts serão gerados a cada ${intervalMinutes} minutos.` });
        }
    };

    const generateSitemap = async () => {
        try {
            const baseUrl = "https://www.technexos.com.br";
            const staticPages = ["", "/google-meu-negocio-juiz-de-fora", "/autoclub-pro", "/about-me", "/blog"];
            const now = new Date().toISOString().split("T")[0];

            let sitemap = `<?xml version="1.0" encoding="UTF-8"?>\n`;
            sitemap += `<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n`;

            staticPages.forEach((route) => {
                sitemap += `  <url>\n`;
                sitemap += `    <loc>${baseUrl}${route}</loc>\n`;
                sitemap += `    <lastmod>${now}</lastmod>\n`;
                sitemap += `    <changefreq>weekly</changefreq>\n`;
                sitemap += `    <priority>${route === "" ? "1.0" : route === "/google-meu-negocio-juiz-de-fora" ? "0.95" : route === "/autoclub-pro" ? "0.9" : route === "/about-me" ? "0.8" : "0.7"}</priority>\n`;
                sitemap += `  </url>\n`;
            });

            const { data: blogPosts } = await supabase
                .from("blog_posts")
                .select("slug, updated_at")
                .eq("published", true);

            if (blogPosts) {
                blogPosts.forEach((post) => {
                    const postDate = new Date(post.updated_at || Date.now()).toISOString().split("T")[0];
                    sitemap += `  <url>\n`;
                    sitemap += `    <loc>${baseUrl}/blog/${post.slug}</loc>\n`;
                    sitemap += `    <lastmod>${postDate}</lastmod>\n`;
                    sitemap += `    <changefreq>monthly</changefreq>\n`;
                    sitemap += `    <priority>0.6</priority>\n`;
                    sitemap += `  </url>\n`;
                });
            }

            sitemap += `</urlset>`;

            const blob = new Blob([sitemap], { type: "application/xml" });
            const url = window.URL.createObjectURL(blob);
            const a = document.createElement("a");
            a.href = url;
            a.download = "sitemap.xml";
            a.click();
            window.URL.revokeObjectURL(url);
            
            toast({ title: "Sitemap Gerado", description: "sitemap.xml baixado com sucesso." });
        } catch (error) {
            toast({ title: "Erro", description: "Falha ao gerar sitemap", variant: "destructive" });
        }
    };

    const loadPosts = async () => {
        try {
            const { data, error } = await supabase
                .from("blog_posts")
                .select("*")
                .order("created_at", { ascending: false });

            if (error) throw error;
            setPosts((data || []).filter((post) => post.slug !== "__blog-automation-settings__"));
        } catch (error: any) {
            toast({
                title: "Erro",
                description: "Erro ao carregar posts: " + error.message,
                variant: "destructive",
            });
        } finally {
            setLoading(false);
        }
    };

    const generateSlug = (title: string) => {
        return title
            .toLowerCase()
            .trim()
            .replace(/[^\w\s-]/g, "")
            .replace(/\s+/g, "-")
            .replace(/-+/g, "-");
    };

    const handleTitleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const title = e.target.value;
        setFormData({
            ...formData,
            title,
            slug: generateSlug(title),
        });
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        if (!formData.title || !formData.slug || !formData.html_content) {
            toast({
                title: "Erro",
                description: "Preencha todos os campos obrigatórios",
                variant: "destructive",
            });
            return;
        }

        try {
            const now = new Date().toISOString();

            if (editingId) {
                // Update
                const { error } = await supabase
                    .from("blog_posts")
                    .update({
                        title: formData.title,
                        slug: formData.slug,
                        html_content: formData.html_content,
                        excerpt: formData.excerpt,
                        published: formData.published,
                        updated_at: now,
                    })
                    .eq("id", editingId);

                if (error) throw error;

                toast({
                    title: "Sucesso",
                    description: "Post atualizado com sucesso",
                });
            } else {
                // Create
                const { error } = await supabase.from("blog_posts").insert({
                    title: formData.title,
                    slug: formData.slug,
                    html_content: formData.html_content,
                    excerpt: formData.excerpt,
                    published: formData.published,
                    created_at: now,
                    updated_at: now,
                });

                if (error) throw error;

                toast({
                    title: "Sucesso",
                    description: "Post criado com sucesso",
                });
            }

            resetForm();
            loadPosts();
        } catch (error: any) {
            toast({
                title: "Erro",
                description: error.message,
                variant: "destructive",
            });
        }
    };

    const handleEdit = (post: BlogPost) => {
        setFormData({
            title: post.title,
            slug: post.slug,
            html_content: post.html_content,
            excerpt: post.excerpt || "",
            published: post.published,
        });
        setEditingId(post.id);
        setShowForm(true);
    };

    const handleDelete = async (id: string) => {
        if (!confirm("Tem certeza que deseja deletar este post?")) return;

        try {
            const { error } = await supabase.from("blog_posts").delete().eq("id", id);

            if (error) throw error;

            toast({
                title: "Sucesso",
                description: "Post deletado com sucesso",
            });

            loadPosts();
        } catch (error: any) {
            toast({
                title: "Erro",
                description: error.message,
                variant: "destructive",
            });
        }
    };

    const resetForm = () => {
        setFormData({
            title: "",
            slug: "",
            html_content: "",
            excerpt: "",
            published: false,
        });
        setEditingId(null);
        setShowForm(false);
    };

    return (
        <div className="min-h-screen bg-slate-950">
            {/* Header */}
            <header className="bg-gradient-to-r from-indigo-950 via-slate-900 to-purple-950 border-b border-indigo-500 sticky top-0 z-40 shadow-2xl">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 flex items-center justify-between">
                    <div className="flex items-center gap-4">
                        <Button
                            onClick={() => navigate("/crm")}
                            className="bg-indigo-600 hover:bg-indigo-700 text-white font-bold"
                        >
                            <ArrowLeft className="w-4 h-4 mr-2" />
                            Voltar
                        </Button>
                        <h1 className="text-3xl font-display font-bold text-white">
                            Blog Admin
                        </h1>
                    </div>
                    <div className="flex gap-3">
                        <Button
                            onClick={generateSitemap}
                            variant="outline"
                            className="border-indigo-500 text-indigo-400 hover:bg-indigo-500/10 font-bold"
                        >
                            <FileText className="w-4 h-4 mr-2" />
                            Sitemap.txt
                        </Button>
                        <Button
                            onClick={() => {
                                resetForm();
                                setShowForm(!showForm);
                            }}
                            data-testid="blog-new-post"
                            className="bg-indigo-600 hover:bg-indigo-700 text-white font-bold"
                        >
                            <Plus className="w-4 h-4 mr-2" />
                            Novo Post
                        </Button>
                    </div>
                </div>
            </header>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                {/* AI Automation Control Panel */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="bg-slate-900 border-2 border-purple-500 rounded-2xl p-6 mb-12 shadow-[0_0_20px_rgba(168,85,247,0.2)]"
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
                                        onChange={(e) => setIntervalMinutes(parseInt(e.target.value) || 1)}
                                        className="w-20 h-8 bg-slate-700 border-purple-500 text-white text-center"
                                    />
                                    <span className="text-purple-300 text-xs font-bold uppercase">minutos</span>
                                </div>
                            </div>

                            <Button
                                onClick={toggleAutomation}
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

                {/* Form */}
                {showForm && (
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="bg-slate-800 rounded-2xl p-8 shadow-xl border-2 border-indigo-500 mb-12"
                    >
                        <h2 className="text-2xl font-display font-bold text-white mb-6">
                            {editingId ? "Editar Post" : "Criar Novo Post"}
                        </h2>

                        <form onSubmit={handleSubmit} className="space-y-6">
                            {/* Título */}
                            <div className="space-y-2">
                                <Label className="font-semibold text-indigo-300">Título *</Label>
                                <Input
                                    placeholder="Título do post"
                                    value={formData.title}
                                    onChange={handleTitleChange}
                                    required
                                    className="bg-slate-700 border-indigo-500 text-white placeholder-slate-400"
                                />
                            </div>

                            {/* Slug */}
                            <div className="space-y-2">
                                <Label className="font-semibold text-indigo-300">Slug *</Label>
                                <Input
                                    data-testid="blog-slug"
                                    placeholder="slug-do-post"
                                    value={formData.slug}
                                    onChange={(e) =>
                                        setFormData({ ...formData, slug: e.target.value })
                                    }
                                    required
                                    className="bg-slate-700 border-indigo-500 text-white placeholder-slate-400"
                                />
                                <p className="text-sm text-indigo-300">
                                    URL: /blog/{formData.slug}
                                </p>
                            </div>

                            {/* Excerpt */}
                            <div className="space-y-2">
                                <Label className="font-semibold text-indigo-300">
                                    Resumo (opcional)
                                </Label>
                                <textarea
                                    data-testid="blog-excerpt"
                                    placeholder="Resumo do post"
                                    value={formData.excerpt}
                                    onChange={(e) =>
                                        setFormData({ ...formData, excerpt: e.target.value })
                                    }
                                    className="w-full px-4 py-2 rounded-lg border border-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 min-h-20 resize-none !text-white bg-slate-700 placeholder-slate-400"
                                />
                            </div>

                            {/* HTML Content */}
                            <div className="space-y-2">
                                <Label className="font-semibold text-indigo-300">
                                    Conteúdo HTML *
                                </Label>
                                <div className="bg-slate-900 rounded-lg border-2 border-dashed border-indigo-500 p-4">
                                    <p className="text-sm text-indigo-300 mb-3">
                                        Cole seu HTML aqui. Você pode incluir imagens, links,
                                        formatação, etc.
                                    </p>
                                    <textarea
                                        placeholder='<h1>Título</h1><p>Seu conteúdo aqui...</p>'
                                        value={formData.html_content}
                                        onChange={(e) =>
                                            setFormData({
                                                ...formData,
                                                html_content: e.target.value,
                                            })
                                        }
                                        required
                                        className="w-full px-4 py-3 rounded-lg border border-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 min-h-64 resize-vertical font-mono text-sm !text-white bg-slate-800 placeholder-slate-400"
                                    />
                                </div>
                            </div>

                            {/* Publicado */}
                            <div className="flex items-center gap-3">
                                <input
                                    type="checkbox"
                                    id="published"
                                    data-testid="blog-published"
                                    checked={formData.published}
                                    onChange={(e) =>
                                        setFormData({ ...formData, published: e.target.checked })
                                    }
                                    className="w-5 h-5 rounded border-indigo-500 text-indigo-600 cursor-pointer"
                                />
                                <label
                                    htmlFor="published"
                                    className="text-indigo-300 font-semibold cursor-pointer"
                                >
                                    Publicar agora
                                </label>
                            </div>

                            {/* Buttons */}
                            <div className="flex gap-3 pt-4">
                                <Button
                                    type="submit"
                                    data-testid="blog-submit"
                                    className="bg-gradient-to-r from-indigo-600 to-indigo-700 hover:from-indigo-700 hover:to-indigo-800 text-white font-bold"
                                >
                                    <Save className="w-4 h-4 mr-2" />
                                    {editingId ? "Atualizar" : "Criar"} Post
                                </Button>
                                <Button
                                    type="button"
                                    onClick={resetForm}
                                    className="bg-red-600 hover:bg-red-700 text-white font-bold"
                                >
                                    Cancelar
                                </Button>
                            </div>
                        </form>
                    </motion.div>
                )}

                {/* Posts List */}
                <div>
                    <h2 className="text-2xl font-display font-bold text-white mb-6">
                        Posts Publicados ({posts.length})
                    </h2>

                    {loading ? (
                        <div className="text-center py-12">
                            <p className="text-indigo-300">Carregando posts...</p>
                        </div>
                    ) : posts.length === 0 ? (
                        <div className="text-center py-12 bg-slate-800 rounded-2xl border-2 border-dashed border-indigo-500">
                            <p className="text-indigo-300 mb-4">Nenhum post criado ainda</p>
                            <Button
                                onClick={() => setShowForm(true)}
                                className="bg-indigo-600 hover:bg-indigo-700 text-white"
                            >
                                <Plus className="w-4 h-4 mr-2" />
                                Criar Primeiro Post
                            </Button>
                        </div>
                    ) : (
                        <div className="grid gap-6">
                            {posts.map((post) => (
                                <motion.div
                                    key={post.id}
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    className="bg-slate-800 rounded-2xl p-6 shadow-lg border-2 border-indigo-500 hover:border-indigo-400 transition-all"
                                >
                                    <div className="flex items-start justify-between">
                                        <div className="flex-1">
                                            <div className="flex items-center gap-3 mb-2">
                                                <h3 className="text-xl font-display font-bold text-white">
                                                    {post.title}
                                                </h3>
                                                {post.published ? (
                                                    <span className="inline-block px-3 py-1 bg-emerald-900 text-emerald-300 rounded-full text-xs font-semibold border border-emerald-500">
                                                        Publicado
                                                    </span>
                                                ) : (
                                                    <span className="inline-block px-3 py-1 bg-slate-700 text-slate-300 rounded-full text-xs font-semibold border border-slate-600">
                                                        Rascunho
                                                    </span>
                                                )}
                                            </div>
                                            <p className="text-indigo-300 text-sm mb-2">
                                                /blog/{post.slug}
                                            </p>
                                            {post.excerpt && (
                                                <p className="text-slate-300 mb-3 line-clamp-2">
                                                    {post.excerpt}
                                                </p>
                                            )}
                                            <p className="text-slate-400 text-xs">
                                                Criado em{" "}
                                                {new Date(post.created_at).toLocaleDateString("pt-BR")}
                                            </p>
                                        </div>

                                        <div className="flex gap-2 ml-4">
                                            <Button
                                                onClick={() =>
                                                    window.open(`/blog/${post.slug}`, "_blank")
                                                }
                                                className="bg-blue-600 hover:bg-blue-700 text-white"
                                            >
                                                <Eye className="w-4 h-4" />
                                            </Button>
                                            <Button
                                                onClick={() => handleEdit(post)}
                                                className="bg-indigo-600 hover:bg-indigo-700 text-white"
                                            >
                                                <Edit2 className="w-4 h-4" />
                                            </Button>
                                            <Button
                                                onClick={() => handleDelete(post.id)}
                                                className="bg-red-600 hover:bg-red-700 text-white"
                                            >
                                                <Trash2 className="w-4 h-4" />
                                            </Button>
                                        </div>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default BlogAdmin;