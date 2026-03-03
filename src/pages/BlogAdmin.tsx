import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { supabase } from "@/integrations/supabase/client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import { ArrowLeft, Plus, Edit2, Trash2, Eye, Save } from "lucide-react";
import { BlogPost } from "@/types";

const BlogAdmin = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [loading, setLoading] = useState(true);
  const [editingId, setEditingId] = useState<string | null>(null);
  const [showForm, setShowForm] = useState(false);

  const [formData, setFormData] = useState({
    title: "",
    slug: "",
    html_content: "",
    excerpt: "",
    published: false,
  });

  useEffect(() => {
    loadPosts();
  }, []);

  const loadPosts = async () => {
    try {
      const { data, error } = await supabase
        .from("blog_posts")
        .select("*")
        .order("created_at", { ascending: false });

      if (error) throw error;
      setPosts(data || []);
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
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Header */}
      <header className="bg-white border-b border-gray-200 sticky top-0 z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <Button
              onClick={() => navigate("/crm")}
              variant="ghost"
              size="sm"
              className="text-gray-600 hover:text-purple-600"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Voltar
            </Button>
            <h1 className="text-3xl font-display font-bold text-gray-900">
              Blog Admin
            </h1>
          </div>
          <Button
            onClick={() => {
              resetForm();
              setShowForm(!showForm);
            }}
            className="bg-purple-600 hover:bg-purple-700 text-white font-bold"
          >
            <Plus className="w-4 h-4 mr-2" />
            Novo Post
          </Button>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Form */}
        {showForm && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-white rounded-2xl p-8 shadow-xl border-2 border-purple-200 mb-12"
          >
            <h2 className="text-2xl font-display font-bold text-gray-900 mb-6">
              {editingId ? "Editar Post" : "Criar Novo Post"}
            </h2>

            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Título */}
              <div className="space-y-2">
                <Label className="font-semibold text-gray-900">Título *</Label>
                <Input
                  placeholder="Título do post"
                  value={formData.title}
                  onChange={handleTitleChange}
                  required
                  className="border-gray-300"
                />
              </div>

              {/* Slug */}
              <div className="space-y-2">
                <Label className="font-semibold text-gray-900">Slug *</Label>
                <Input
                  placeholder="slug-do-post"
                  value={formData.slug}
                  onChange={(e) =>
                    setFormData({ ...formData, slug: e.target.value })
                  }
                  required
                  className="border-gray-300"
                />
                <p className="text-sm text-gray-500">
                  URL: /blog/{formData.slug}
                </p>
              </div>

              {/* Excerpt */}
              <div className="space-y-2">
                <Label className="font-semibold text-gray-900">
                  Resumo (opcional)
                </Label>
                <textarea
                  placeholder="Resumo do post"
                  value={formData.excerpt}
                  onChange={(e) =>
                    setFormData({ ...formData, excerpt: e.target.value })
                  }
                  className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-500 min-h-20 resize-none !text-gray-900 bg-white"
                />
              </div>

              {/* HTML Content */}
              <div className="space-y-2">
                <Label className="font-semibold text-gray-900">
                  Conteúdo HTML *
                </Label>
                <div className="bg-gray-50 rounded-lg border-2 border-dashed border-gray-300 p-4">
                  <p className="text-sm text-gray-600 mb-3">
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
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-500 min-h-64 resize-vertical font-mono text-sm !text-gray-900 bg-white"
                  />
                </div>
              </div>

              {/* Publicado */}
              <div className="flex items-center gap-3">
                <input
                  type="checkbox"
                  id="published"
                  checked={formData.published}
                  onChange={(e) =>
                    setFormData({ ...formData, published: e.target.checked })
                  }
                  className="w-5 h-5 rounded border-gray-300 text-purple-600 cursor-pointer"
                />
                <label
                  htmlFor="published"
                  className="text-gray-900 font-semibold cursor-pointer"
                >
                  Publicar agora
                </label>
              </div>

              {/* Buttons */}
              <div className="flex gap-3 pt-4">
                <Button
                  type="submit"
                  className="bg-gradient-to-r from-purple-600 to-purple-700 hover:from-purple-700 hover:to-purple-800 text-white font-bold"
                >
                  <Save className="w-4 h-4 mr-2" />
                  {editingId ? "Atualizar" : "Criar"} Post
                </Button>
                <Button
                  type="button"
                  onClick={resetForm}
                  variant="outline"
                  className="text-gray-700 border-gray-300"
                >
                  Cancelar
                </Button>
              </div>
            </form>
          </motion.div>
        )}

        {/* Posts List */}
        <div>
          <h2 className="text-2xl font-display font-bold text-gray-900 mb-6">
            Posts Publicados ({posts.length})
          </h2>

          {loading ? (
            <div className="text-center py-12">
              <p className="text-gray-600">Carregando posts...</p>
            </div>
          ) : posts.length === 0 ? (
            <div className="text-center py-12 bg-white rounded-2xl border-2 border-dashed border-gray-200">
              <p className="text-gray-600 mb-4">Nenhum post criado ainda</p>
              <Button
                onClick={() => setShowForm(true)}
                className="bg-purple-600 hover:bg-purple-700 text-white"
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
                  className="bg-white rounded-2xl p-6 shadow-lg border-2 border-gray-200 hover:border-purple-300 transition-all"
                >
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        <h3 className="text-xl font-display font-bold text-gray-900">
                          {post.title}
                        </h3>
                        {post.published ? (
                          <span className="inline-block px-3 py-1 bg-green-100 text-green-700 rounded-full text-xs font-semibold">
                            Publicado
                          </span>
                        ) : (
                          <span className="inline-block px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-xs font-semibold">
                            Rascunho
                          </span>
                        )}
                      </div>
                      <p className="text-gray-600 text-sm mb-2">
                        /blog/{post.slug}
                      </p>
                      {post.excerpt && (
                        <p className="text-gray-700 mb-3 line-clamp-2">
                          {post.excerpt}
                        </p>
                      )}
                      <p className="text-gray-500 text-xs">
                        Criado em{" "}
                        {new Date(post.created_at).toLocaleDateString("pt-BR")}
                      </p>
                    </div>

                    <div className="flex gap-2 ml-4">
                      <Button
                        onClick={() =>
                          window.open(`/blog/${post.slug}`, "_blank")
                        }
                        variant="outline"
                        size="sm"
                        className="text-blue-600 border-blue-300"
                      >
                        <Eye className="w-4 h-4" />
                      </Button>
                      <Button
                        onClick={() => handleEdit(post)}
                        variant="outline"
                        size="sm"
                        className="text-purple-600 border-purple-300"
                      >
                        <Edit2 className="w-4 h-4" />
                      </Button>
                      <Button
                        onClick={() => handleDelete(post.id)}
                        variant="outline"
                        size="sm"
                        className="text-red-600 border-red-300"
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
