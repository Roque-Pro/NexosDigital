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
      <div className="min-h-screen bg-gradient-to-b from-white to-gray-50 flex items-center justify-center">
        <div className="text-center">
          <p className="text-gray-600">Carregando post...</p>
        </div>
      </div>
    );
  }

  if (!post) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-white to-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <Button
            onClick={() => navigate("/")}
            variant="ghost"
            size="sm"
            className="text-gray-600 hover:text-purple-600 mb-8"
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
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50">
      {/* Header */}
      <header className="border-b border-gray-200 sticky top-0 z-40 bg-white/80 backdrop-blur">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <Button
            onClick={() => navigate("/")}
            variant="ghost"
            size="sm"
            className="text-gray-600 hover:text-purple-600"
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
          <h1 className="text-5xl sm:text-6xl font-display font-black text-gray-900 mb-4 leading-tight">
            {post.title}
          </h1>
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
        </div>

        {/* Excerpt */}
        {post.excerpt && (
          <p className="text-xl text-gray-600 mb-8 leading-relaxed border-l-4 border-purple-500 pl-6">
            {post.excerpt}
          </p>
        )}

        {/* Divider */}
        <div className="w-12 h-1 bg-gradient-to-r from-purple-600 to-pink-500 rounded-full mb-12" />

        {/* HTML Content */}
        <div
          className="prose prose-lg max-w-none
            prose-headings:font-display prose-headings:font-bold prose-headings:text-gray-900
            prose-h1:text-4xl prose-h2:text-3xl prose-h3:text-2xl prose-h4:text-xl prose-h5:text-lg
            prose-p:text-gray-800 prose-p:leading-relaxed prose-p:mb-6 prose-p:text-base
            prose-a:text-purple-600 prose-a:underline hover:prose-a:text-purple-700
            prose-strong:font-bold prose-strong:text-gray-900
            prose-em:text-gray-800 prose-em:italic
            prose-code:bg-gray-100 prose-code:text-red-700 prose-code:px-2 prose-code:py-1 prose-code:rounded prose-code:font-mono prose-code:text-sm
            prose-pre:bg-gray-900 prose-pre:text-gray-100 prose-pre:p-4 prose-pre:rounded-lg prose-pre:overflow-auto
            prose-blockquote:border-l-4 prose-blockquote:border-purple-500 prose-blockquote:pl-6 prose-blockquote:italic prose-blockquote:text-gray-700 prose-blockquote:bg-gray-50 prose-blockquote:py-4 prose-blockquote:px-4
            prose-ul:list-disc prose-ul:ml-6 prose-ul:mb-6
            prose-ol:list-decimal prose-ol:ml-6 prose-ol:mb-6
            prose-li:text-gray-800 prose-li:mb-2
            prose-img:rounded-lg prose-img:shadow-lg prose-img:max-w-full prose-img:my-8
            prose-table:border-collapse prose-table:w-full prose-table:my-6
            prose-th:bg-purple-100 prose-th:font-bold prose-th:text-gray-900 prose-th:text-left prose-th:p-3 prose-th:border prose-th:border-gray-300
            prose-td:text-gray-800 prose-td:border prose-td:border-gray-300 prose-td:p-3
            prose-hr:border-gray-300 prose-hr:my-8"
          style={{
            color: '#1f2937',
          }}
          dangerouslySetInnerHTML={{ __html: post.html_content }}
        />
      </motion.div>

      {/* Footer CTA */}
      <div className="mt-16 bg-gradient-to-r from-purple-50 to-pink-50 py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-display font-bold text-gray-900 mb-4">
            Gostou? Vamos conversar!
          </h2>
          <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
            Quer transformar sua empresa com tecnologia? Solicite seu diagnóstico
            estratégico gratuito.
          </p>
          <Button
            onClick={() => window.location.href = "/diagnostico-gratuito"}
            className="bg-purple-600 hover:bg-purple-700 text-white font-bold px-8 py-6 text-lg"
          >
            Solicitar Diagnóstico Gratuito
          </Button>
        </div>
      </div>
    </div>
  );
};

export default BlogPostPage;
