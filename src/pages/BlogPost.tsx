import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { supabase } from "@/integrations/supabase/client";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";
import { ArrowLeft } from "lucide-react";
import { BlogPost } from "@/types";
import ShareBlogPost from "@/components/ShareBlogPost";
import StrategicBacklinks from "@/components/StrategicBacklinks";
import BlogNavbar from "@/components/BlogNavbar";
import BlogSection from "@/components/BlogSection";
import { injectOpenGraphTags, fetchBlogMetadata } from "@/lib/og-tags";
import { injectBlogSchema } from "@/lib/seo-optimization";

const BlogPostPage = () => {
    const { slug } = useParams<{ slug: string }>();
    const navigate = useNavigate();
    const { toast } = useToast();
    const [post, setPost] = useState<BlogPost | null>(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        loadPost();
        
        // Injetar Google AdSense no head se não estiver presente
        const adSenseScript = document.querySelector('script[src*="googlesyndication"]');
        if (!adSenseScript) {
            const script = document.createElement('script');
            script.async = true;
            script.src = 'https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-3146585413190904';
            script.crossOrigin = 'anonymous';
            document.head.appendChild(script);
        }
    }, [slug]);

    // Atualizar meta tags quando post carregar
    useEffect(() => {
        if (post) {
            updateMetaTags(post);
            const firstImage = extractFirstImage(post.html_content);
            
            // Injetar Open Graph Tags
            const metadata = {
                title: post.title,
                description: post.excerpt || post.html_content.substring(0, 160),
                imageUrl: firstImage || "https://www.technexos.com.br/og-image-blog.png",
                url: `https://www.technexos.com.br/blog/${post.slug}`,
                author: "Roque Rafael Proença",
                publishedAt: post.created_at,
                type: 'article' as const,
            };
            injectOpenGraphTags(metadata);
            
            // Injetar Schema.org JSON-LD para rich snippets
            injectBlogSchema(
                {
                    title: post.title,
                    slug: post.slug,
                    excerpt: post.excerpt || post.html_content.substring(0, 160),
                    htmlContent: post.html_content,
                    publishedAt: post.created_at,
                },
                firstImage
            );
        }
    }, [post]);

    const extractFirstImage = (htmlContent: string): string | null => {
        const imgRegex = /<img[^>]+src=["']([^"']+)["']/;
        const match = htmlContent.match(imgRegex);
        return match ? match[1] : null;
    };

    const updateMetaTags = (post: BlogPost) => {
        const postUrl = `https://www.technexos.com.br/blog/${post.slug}`;
        const description = post.excerpt || post.html_content.substring(0, 160);
        // Usar primeira imagem do post ou imagem padrão
        const firstImage = extractFirstImage(post.html_content);
        const imageUrl = firstImage || "https://www.technexos.com.br/og-image-blog.png";

        // Title
        document.title = `${post.title} | TechNexos Blog`;

        // Meta tags básicas
        updateMetaTag("name", "description", description);
        updateMetaTag("name", "keywords", `${post.title}, blog, tecnologia, consultoria`);

        // Open Graph - Essencial para compartilhamento
        updateMetaTag("property", "og:type", "article");
        updateMetaTag("property", "og:title", post.title);
        updateMetaTag("property", "og:description", description);
        updateMetaTag("property", "og:url", postUrl); // URL específica do post
        updateMetaTag("property", "og:image", imageUrl);
        updateMetaTag("property", "og:image:type", "image/png");
        updateMetaTag("property", "og:image:width", "1200");
        updateMetaTag("property", "og:image:height", "630");
        updateMetaTag("property", "og:image:alt", post.title);
        updateMetaTag("property", "og:site_name", "TechNexos");
        updateMetaTag("property", "og:locale", "pt_BR");

        // Twitter Card
        updateMetaTag("name", "twitter:card", "summary_large_image");
        updateMetaTag("name", "twitter:title", post.title);
        updateMetaTag("name", "twitter:description", description);
        updateMetaTag("name", "twitter:image", imageUrl);

        // Article specific
        updateMetaTag("property", "article:published_time", post.created_at);
        updateMetaTag("property", "article:author", "Roque Rafael Proença");
        updateMetaTag("property", "article:section", "Tecnologia");

        // Canonical URL (muito importante para SEO)
        let canonical = document.querySelector('link[rel="canonical"]');
        if (!canonical) {
            canonical = document.createElement("link");
            canonical.setAttribute("rel", "canonical");
            document.head.appendChild(canonical);
        }
        canonical.setAttribute("href", postUrl);

        // Meta URL
        updateMetaTag("property", "og:url", postUrl);
    };

    const updateMetaTag = (
        attribute: "name" | "property",
        attributeValue: string,
        content: string
    ) => {
        let element = document.querySelector(
            `meta[${attribute}="${attributeValue}"]`
        );
        if (!element) {
            element = document.createElement("meta");
            element.setAttribute(attribute, attributeValue);
            document.head.appendChild(element);
        }
        element.setAttribute("content", content);
    };

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
            <div className="min-h-screen bg-white flex items-center justify-center">
                <div className="text-center">
                    <p className="text-gray-600">Carregando post...</p>
                </div>
            </div>
        );
    }

    if (!post) {
        return (
            <div className="min-h-screen bg-white">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                    <Button
                        onClick={() => navigate("/")}
                        className="bg-blue-600 hover:bg-blue-700 text-white mb-8"
                    >
                        <ArrowLeft className="w-4 h-4 mr-2" />
                        Voltar para Home
                    </Button>
                    <div className="text-center py-12">
                        <p className="text-gray-600">Post não encontrado</p>
                    </div>
                </div>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-white">
            <BlogNavbar />

            {/* Content */}
            <motion.div style={{ paddingTop: "5rem" }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12"
            >
                {/* Title */}
                <div className="mb-10">
                    <h1 className="text-5xl sm:text-6xl font-display font-black text-gray-900 mb-4 leading-tight">
                        {post.title}
                    </h1>
                    <div className="flex items-center justify-between gap-4">
                        <div className="flex items-center gap-4 text-gray-600">
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
                        <ShareBlogPost 
                            title={post.title} 
                            slug={post.slug}
                            excerpt={post.excerpt}
                        />
                    </div>
                </div>

                {/* Excerpt */}
                {post.excerpt && (
                    <p className="text-xl text-gray-700 mb-8 leading-relaxed border-l-4 border-blue-600 pl-6">
                        {post.excerpt}
                    </p>
                )}

                {/* Divider */}
                <div className="w-12 h-1 bg-gradient-to-r from-blue-600 to-indigo-500 rounded-full mb-12" />

                {/* HTML Content */}
                <div
                    className="prose prose-lg max-w-none
                prose-headings:font-display prose-headings:font-bold prose-headings:text-gray-900
                prose-h1:text-4xl prose-h2:text-3xl prose-h3:text-2xl prose-h4:text-xl prose-h5:text-lg
                prose-p:text-gray-700 prose-p:leading-relaxed prose-p:mb-6 prose-p:text-base
                prose-a:text-blue-600 prose-a:underline hover:prose-a:text-blue-700
                prose-strong:font-bold prose-strong:text-gray-900
                prose-em:text-gray-700 prose-em:italic
                prose-code:bg-gray-100 prose-code:text-gray-900 prose-code:px-2 prose-code:py-1 prose-code:rounded prose-code:font-mono prose-code:text-sm prose-code:border prose-code:border-gray-300
                prose-pre:bg-gray-900 prose-pre:text-white prose-pre:p-4 prose-pre:rounded-lg prose-pre:overflow-auto prose-pre:border prose-pre:border-gray-700
                prose-blockquote:border-l-4 prose-blockquote:border-blue-600 prose-blockquote:pl-6 prose-blockquote:italic prose-blockquote:text-gray-700 prose-blockquote:bg-gray-50 prose-blockquote:py-4 prose-blockquote:px-4 prose-blockquote:border prose-blockquote:border-gray-300
                prose-ul:list-disc prose-ul:ml-6 prose-ul:mb-6
                prose-ol:list-decimal prose-ol:ml-6 prose-ol:mb-6
                prose-li:text-gray-700 prose-li:mb-2
                prose-img:rounded-lg prose-img:shadow-lg prose-img:max-w-full prose-img:my-8
                prose-table:border-collapse prose-table:w-full prose-table:my-6
                prose-th:bg-gray-200 prose-th:font-bold prose-th:text-gray-900 prose-th:text-left prose-th:p-3 prose-th:border prose-th:border-gray-300
                prose-td:text-gray-700 prose-td:border prose-td:border-gray-300 prose-td:p-3
                prose-hr:border-gray-300 prose-hr:my-8"
                   style={{
                       color: '#111827',
                   }}
                    dangerouslySetInnerHTML={{ __html: post.html_content }}
                />

                {/* Strategic Backlinks Section */}
                <StrategicBacklinks postSlug={post.slug} />
            </motion.div>

            {/* Latest Posts */}
            <BlogSection />

            {/* Footer CTA */}
            <div className="mt-16 bg-gradient-to-r from-blue-600 to-indigo-700 py-12 border-t border-blue-300">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h2 className="text-3xl font-display font-bold text-white mb-4">
                        Sua Oficina no Próximo Nível
                    </h2>
                    <p className="text-white/90 mb-8 max-w-2xl mx-auto">
                        Pare de usar sistemas genéricos. Conheça o <strong>AutoClub Pro</strong>, o sistema de gestão automotiva 
                        totalmente personalizado com a sua marca e cores.
                    </p>
                    <Button
                        onClick={() => window.location.href = "/autoclub-pro"}
                        className="bg-white text-blue-600 hover:bg-white/90 font-bold px-8 py-6 text-lg"
                    >
                        Conhecer o AutoClub Pro
                    </Button>
                </div>
            </div>
        </div>
    );
};

export default BlogPostPage;
