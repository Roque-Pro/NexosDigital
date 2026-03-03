import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { supabase } from "@/integrations/supabase/client";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";
import { ArrowLeft } from "lucide-react";
import { BlogPost } from "@/types";

const BlogPostPage = () => {
    const { slug } = useParams<{ slug: string }>();
    const navigate = useNavigate();
    const { toast } = useToast();
    const [post, setPost] = useState<BlogPost | null>(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        loadPost();
    }, [slug]);

    const loadPost = async () => {
        try {
            if (!slug) throw new Error("Slug não fornecido");

            const { data, error } = await supabase
                .from("blog_posts")
                .select("*")
                .eq("slug", slug)
                .eq("published", true)
                .single();

            if (error) {
                if (error.code === "PGRST116") {
                    toast({
                        title: "Post não encontrado",
                        description: "Este post não existe ou não foi publicado",
                        variant: "destructive",
                    });
                    navigate("/");
                } else {
                    throw error;
                }
            } else {
                setPost(data);
            }
        } catch (error: any) {
            toast({
                title: "Erro",
                description: "Erro ao carregar post: " + error.message,
                variant: "destructive",
            });
        } finally {
            setLoading(false);
        }
    };

    if (loading) {
        return (
            <div className="min-h-screen bg-slate-950 flex items-center justify-center">
                <div className="text-center">
                    <p className="text-indigo-300">Carregando post...</p>
                </div>
            </div>
        );
    }

    if (!post) {
        return (
            <div className="min-h-screen bg-slate-950">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                    <Button
                        onClick={() => navigate("/")}
                        className="bg-indigo-600 hover:bg-indigo-700 text-white mb-8"
                    >
                        <ArrowLeft className="w-4 h-4 mr-2" />
                        Voltar para Home
                    </Button>
                    <div className="text-center py-12">
                        <p className="text-indigo-300">Post não encontrado</p>
                    </div>
                </div>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-slate-950">
            {/* Header */}
            <header className="border-b border-indigo-500 sticky top-0 z-40 bg-slate-900/80 backdrop-blur">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
                    <Button
                        onClick={() => navigate("/")}
                        className="bg-indigo-600 hover:bg-indigo-700 text-white"
                    >
                        <ArrowLeft className="w-4 h-4 mr-2" />
                        Voltar
                    </Button>
                </div>
            </header>

            {/* Content */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12"
            >
                {/* Title */}
                <div className="mb-8">
                    <h1 className="text-5xl sm:text-6xl font-display font-black text-white mb-4 leading-tight">
                        {post.title}
                    </h1>
                    <div className="flex items-center gap-4 text-indigo-300">
                        <time dateTime={post.created_at}>
                            {new Date(post.created_at).toLocaleDateString("pt-BR", {
                                year: "numeric",
                                month: "long",
                                day: "numeric",
                            })}
                        </time>
                        <span>•</span>
                        <span>
                            {Math.ceil(post.html_content.split(" ").length / 200)} min de
                            leitura
                        </span>
                    </div>
                </div>

                {/* Excerpt */}
                {post.excerpt && (
                    <p className="text-xl text-indigo-100 mb-8 leading-relaxed border-l-4 border-indigo-500 pl-6">
                        {post.excerpt}
                    </p>
                )}

                {/* Divider */}
                <div className="w-12 h-1 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-full mb-12" />

                {/* HTML Content */}
                <div
                    className="prose prose-lg max-w-none
            prose-headings:font-display prose-headings:font-bold prose-headings:text-white
            prose-h1:text-4xl prose-h2:text-3xl prose-h3:text-2xl prose-h4:text-xl prose-h5:text-lg
            prose-p:text-indigo-100 prose-p:leading-relaxed prose-p:mb-6 prose-p:text-base
            prose-a:text-indigo-400 prose-a:underline hover:prose-a:text-indigo-300
            prose-strong:font-bold prose-strong:text-white
            prose-em:text-indigo-100 prose-em:italic
            prose-code:bg-slate-800 prose-code:text-indigo-300 prose-code:px-2 prose-code:py-1 prose-code:rounded prose-code:font-mono prose-code:text-sm prose-code:border prose-code:border-indigo-500
            prose-pre:bg-slate-900 prose-pre:text-indigo-100 prose-pre:p-4 prose-pre:rounded-lg prose-pre:overflow-auto prose-pre:border prose-pre:border-indigo-500
            prose-blockquote:border-l-4 prose-blockquote:border-indigo-500 prose-blockquote:pl-6 prose-blockquote:italic prose-blockquote:text-indigo-200 prose-blockquote:bg-slate-800 prose-blockquote:py-4 prose-blockquote:px-4 prose-blockquote:border prose-blockquote:border-indigo-500
            prose-ul:list-disc prose-ul:ml-6 prose-ul:mb-6
            prose-ol:list-decimal prose-ol:ml-6 prose-ol:mb-6
            prose-li:text-indigo-100 prose-li:mb-2
            prose-img:rounded-lg prose-img:shadow-lg prose-img:max-w-full prose-img:my-8
            prose-table:border-collapse prose-table:w-full prose-table:my-6
            prose-th:bg-indigo-900 prose-th:font-bold prose-th:text-white prose-th:text-left prose-th:p-3 prose-th:border prose-th:border-indigo-500
            prose-td:text-indigo-100 prose-td:border prose-td:border-indigo-500 prose-td:p-3
            prose-hr:border-indigo-500 prose-hr:my-8"
                    style={{
                        color: '#e0e7ff',
                    }}
                    dangerouslySetInnerHTML={{ __html: post.html_content }}
                />
            </motion.div>

            {/* Footer CTA */}
            <div className="mt-16 bg-gradient-to-r from-indigo-900 to-purple-900 py-12 border-t border-indigo-500">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h2 className="text-3xl font-display font-bold text-white mb-4">
                        Gostou? Vamos conversar!
                    </h2>
                    <p className="text-indigo-200 mb-8 max-w-2xl mx-auto">
                        Quer transformar sua empresa com tecnologia? Solicite seu diagnóstico
                        estratégico gratuito.
                    </p>
                    <Button
                        onClick={() => window.location.href = "/diagnostico-gratuito"}
                        className="bg-indigo-600 hover:bg-indigo-700 text-white font-bold px-8 py-6 text-lg"
                    >
                        Solicitar Diagnóstico Gratuito
                    </Button>
                </div>
            </div>
        </div>
    );
};

export default BlogPostPage;
