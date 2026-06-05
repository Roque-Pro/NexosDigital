import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { supabase } from "@/integrations/supabase/client";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";
import { ArrowRight } from "lucide-react";
import { BlogPost } from "@/types";
import BlogNavbar from "@/components/BlogNavbar";
import { useSEO } from "@/hooks/useSEO";

const Blog = () => {
  const navigate = useNavigate();

  useSEO({
    title: "Blog TechNexos | Estratégias de Tecnologia, IA e Tráfego Pago",
    description: "Explore artigos técnicos, tendências de mercado e estratégias de crescimento digital. Onde tecnologia e business se encontram para gerar resultados.",
    keywords: [
      "blog tecnologia",
      "artigos automação",
      "estratégias tráfego pago",
      "tendências IA 2026",
      "marketing de performance",
      "TechNexos Blog",
      "transformação digital"
    ],
    ogTitle: "Blog TechNexos | Insights de Tecnologia & Performance",
    ogDescription: "Aprenda como escalar seu negócio com as melhores práticas de tecnologia.",
    ogUrl: "https://www.technexos.com.br/blog",
    canonicalUrl: "https://www.technexos.com.br/blog"
  });
  const { toast } = useToast();
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loadPosts();
  }, []);

  const loadPosts = async () => {
    try {
      const { data, error } = await supabase
        .from("blog_posts")
        .select("*")
        .eq("published", true)
        .order("created_at", { ascending: false });

      if (error) throw error;
      
      // Processa posts para garantir que featured_image está preenchido
      const processedData = (data || []).map(post => ({
        ...post,
        featured_image: post.featured_image || extractFirstImage(post.html_content)
      }));
      
      setPosts(processedData as any);
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

  const itemVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { duration: 0.3 },
    },
  };

  // Extrair primeira imagem do HTML
  const extractFirstImage = (htmlContent: string): string | null => {
    const imgRegex = /<img[^>]+src=["']([^"']+)["']/;
    const match = htmlContent.match(imgRegex);
    return match ? match[1] : null;
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-white via-white to-gray-50">
      <BlogNavbar />
      
      {/* Header */}
      <section className="relative pt-20 pb-16 px-4 sm:px-6 lg:px-8 mt-16">
        <div className="max-w-5xl mx-auto text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl sm:text-6xl md:text-7xl font-display font-black text-gray-900 mb-6 leading-tight"
          >
            Blog TechNexos{" "}
            <span className="bg-gradient-to-r from-blue-500 to-blue-700 bg-clip-text text-transparent">
              Consultoria
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed"
          >
            Insights, estratégias e tendências sobre transformação digital,
            automação, inteligência artificial e tecnologia para impulsionar seu negócio
          </motion.p>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="w-12 h-1 bg-gradient-to-r from-blue-600 to-indigo-500 rounded-full mx-auto"
          />
        </div>
      </section>

      {/* Posts Grid */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {loading ? (
            <div className="text-center py-12">
              <p className="text-gray-600">Carregando posts...</p>
            </div>
          ) : posts.length === 0 ? (
            <div className="text-center py-20 bg-white rounded-2xl border-2 border-dashed border-gray-200">
              <p className="text-gray-600 mb-6 text-lg">
                Nenhum post publicado ainda
              </p>
              <Button
                onClick={() => navigate("/")}
                className="bg-blue-600 hover:bg-blue-700 text-white font-bold"
              >
                Voltar para Home
              </Button>
            </div>
          ) : (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {posts.map((post) => {
                const imageUrl = (post as any).featured_image || extractFirstImage(post.html_content);
                return (
                <motion.div
                   key={post.id}
                   variants={itemVariants}
                   initial="hidden"
                   whileInView="visible"
                   viewport={{ once: true }}
                   onClick={() => navigate(`/blog/${post.slug}`)}
                   className="group cursor-pointer"
                 >
                   <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 border-2 border-gray-100 hover:border-blue-300 h-full flex flex-col">
                     {/* Image with fallback */}
                     <div className="w-full h-48 bg-gradient-to-br from-blue-200 via-blue-100 to-blue-300 group-hover:from-blue-300 group-hover:via-blue-200 group-hover:to-blue-400 transition-all duration-300 overflow-hidden">
                       {imageUrl ? (
                         <img 
                           src={imageUrl} 
                           alt={post.title}
                           className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                         />
                       ) : null}
                     </div>

                    {/* Content */}
                    <div className="p-6 flex-1 flex flex-col">
                      {/* Date */}
                      <p className="text-sm text-gray-500 mb-3">
                        {new Date(post.created_at).toLocaleDateString("pt-BR")}
                      </p>

                      {/* Title */}
                      <h3 className="text-xl font-display font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors line-clamp-3">
                        {post.title}
                      </h3>

                      {/* Excerpt */}
                      {post.excerpt && (
                        <p className="text-gray-600 text-sm mb-4 line-clamp-2 flex-1">
                          {post.excerpt}
                        </p>
                      )}

                      {/* Read time */}
                      <p className="text-xs text-gray-500 mb-4">
                        {Math.ceil(post.html_content.split(" ").length / 200)}{" "}
                        min de leitura
                      </p>

                      {/* CTA */}
                      <div className="flex items-center gap-2 text-blue-600 font-semibold group-hover:gap-3 transition-all">
                        Ler mais
                        <ArrowRight className="w-4 h-4" />
                      </div>
                    </div>
                    </div>
                    </motion.div>
                    );
                    })}
                    </div>
          )}
        </div>
      </section>

      {/* Bottom CTA */}
      {posts.length > 0 && (
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-blue-600 to-indigo-700">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl sm:text-5xl font-display font-black text-white mb-6">
                Sua Oficina com Gestão Profissional
              </h2>
              <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
                Conheça o <strong>AutoClub Pro</strong> e tenha um sistema completo com a sua marca.
                Aumente sua produtividade e organize sua empresa hoje mesmo.
              </p>
              <Button
                onClick={() => navigate("/autoclub-pro")}
                className="bg-white text-blue-600 hover:bg-white/90 font-bold px-8 py-6 text-lg"
              >
                Conhecer o AutoClub Pro
              </Button>
            </motion.div>
          </div>
        </section>
      )}
    </div>
  );
};

export default Blog;
