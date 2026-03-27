import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import PageHeader from "@/components/PageHeader";
import { motion } from "framer-motion";
import { ArrowLeft, Download, Loader, Play, Copy, CheckCircle } from "lucide-react";

interface Reel {
  id: string;
  videoUrl: string;
  caption: string;
  hashtags: string[];
  duration: number;
  status: "processing" | "ready" | "error";
  downloadUrl?: string;
  timestamp?: string;
}

const InstagramReelsAdmin = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  const [youtubeUrl, setYoutubeUrl] = useState("");
  const [reels, setReels] = useState<Reel[]>([]);
  const [processing, setProcessing] = useState(false);
  const [selectedReel, setSelectedReel] = useState<Reel | null>(null);
  const [customCaption, setCustomCaption] = useState("");
  const [customHashtags, setCustomHashtags] = useState("");

  const extractYoutubeId = (url: string) => {
    const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|\&v=)([^#\&\?]*).*/;
    const match = url.match(regExp);
    return match && match[2].length === 11 ? match[2] : null;
  };

  const processVideoWithRunway = async (youtubeId: string) => {
    setProcessing(true);
    try {
      const youtubeDownloadUrl = `https://www.youtube.com/watch?v=${youtubeId}`;
      
      // Chamar nossa Vercel Function (proxy para Runway ML)
      const runwayResponse = await fetch("/api/runway", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          action: "create",
          youtubeUrl: youtubeDownloadUrl,
        }),
      });

      if (!runwayResponse.ok) {
        const errorData = await runwayResponse.json();
        throw new Error(errorData.error || "Erro ao processar vídeo com Runway ML");
      }

      const taskData = await runwayResponse.json();
      const taskId = taskData.id;

      // Aguardar processamento (pooling)
      let processedData = null;
      let attempts = 0;
      const maxAttempts = 60; // 5 minutos com 5s de intervalo

      while (attempts < maxAttempts) {
        const statusResponse = await fetch(
          `/api/runway`,
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              action: "status",
              taskId: taskId,
            }),
          }
        );

        const statusData = await statusResponse.json();

        if (statusData.status === "completed") {
          processedData = statusData;
          break;
        } else if (statusData.status === "failed") {
          throw new Error("Processamento do vídeo falhou");
        }

        // Aguardar 5 segundos antes de verificar novamente
        await new Promise((resolve) => setTimeout(resolve, 5000));
        attempts++;
      }

      if (!processedData) {
        throw new Error("Tempo limite de processamento excedido");
      }

      // Extrair informações do vídeo processado
      const downloadUrl = processedData.output?.video_url;
      const duration = processedData.output?.duration || 30;
      const captions = processedData.output?.captions || [];

      // Gerar legenda e hashtags padrão
      const defaultCaption = `Confira este recorte imperdível! 🎬✨\n\nTransformação digital e automação inteligente em ação.\n\n#TechNexos #AutomaçãoInteligente #IA #TransformaçãoDigital #Inovação`;
      
      const defaultHashtags = [
        "#TechNexos",
        "#AutomaçãoInteligente",
        "#IA",
        "#TransformaçãoDigital",
        "#Inovação",
        "#TecnologiaQueTrasforma",
        "#ConsultoriaTech",
        "#NegóciosInteligentes"
      ];

      const newReel: Reel = {
        id: `reel-${Date.now()}`,
        videoUrl: youtubeDownloadUrl,
        caption: defaultCaption,
        hashtags: defaultHashtags,
        duration,
        status: "ready",
        downloadUrl,
        timestamp: new Date().toLocaleString("pt-BR"),
      };

      setReels([newReel, ...reels]);
      setSelectedReel(newReel);
      setCustomCaption(defaultCaption);
      setCustomHashtags(defaultHashtags.join(" "));

      toast({
        title: "✅ Vídeo Processado com Sucesso!",
        description: "Seu reel está pronto para download com legenda e qualidade profissional.",
      });
    } catch (error: any) {
      console.error("Erro ao processar vídeo:", error);
      toast({
        title: "❌ Erro ao Processar",
        description: error.message || "Ocorreu um erro ao processar o vídeo. Tente novamente.",
        variant: "destructive",
      });
      
      const errorReel: Reel = {
        id: `reel-${Date.now()}`,
        videoUrl: youtubeUrl,
        caption: "",
        hashtags: [],
        duration: 0,
        status: "error",
        timestamp: new Date().toLocaleString("pt-BR"),
      };
      setReels([errorReel, ...reels]);
    } finally {
      setProcessing(false);
    }
  };

  const handleProcessVideo = async () => {
    if (!youtubeUrl.trim()) {
      toast({
        title: "URL vazia",
        description: "Insira um link válido do YouTube",
        variant: "destructive",
      });
      return;
    }

    const youtubeId = extractYoutubeId(youtubeUrl);
    if (!youtubeId) {
      toast({
        title: "URL inválida",
        description: "Insira um link válido do YouTube (youtu.be ou youtube.com)",
        variant: "destructive",
      });
      return;
    }

    setYoutubeUrl("");
    await processVideoWithRunway(youtubeId);
  };

  const downloadReel = async (reel: Reel) => {
    if (!reel.downloadUrl) return;

    try {
      const link = document.createElement("a");
      link.href = reel.downloadUrl;
      link.download = `reel-${reel.id}.mp4`;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);

      toast({
        title: "✅ Download Iniciado",
        description: "Seu reel está sendo baixado. Pronto para postar no Instagram!",
      });
    } catch (error) {
      toast({
        title: "Erro ao baixar",
        description: "Tente novamente",
        variant: "destructive",
      });
    }
  };

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
    toast({
      title: "✅ Copiado!",
      description: "Legenda copiada para área de transferência",
    });
  };

  return (
    <div>
      <PageHeader
        title="Gerador de Reels Instagram"
        description="Crie reels de primeira qualidade a partir de vídeos do YouTube"
      />

      <div className="max-w-6xl mx-auto">
        {/* Input YouTube */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="glass-card p-8 rounded-lg border border-border mb-8"
        >
          <h2 className="text-2xl font-bold mb-6">📹 Criar Novo Reel</h2>
          
          <div className="space-y-4">
            <div>
              <Label className="text-base font-semibold mb-2">Link do YouTube</Label>
              <Input
                placeholder="Cole aqui: https://youtu.be/... ou https://youtube.com/watch?v=..."
                value={youtubeUrl}
                onChange={(e) => setYoutubeUrl(e.target.value)}
                className="text-base h-12"
                disabled={processing}
              />
              <p className="text-xs text-muted-foreground mt-2">
                Formatos aceitos: youtu.be/xxxxx ou youtube.com/watch?v=xxxxx
              </p>
            </div>

            <Button
              onClick={handleProcessVideo}
              disabled={processing || !youtubeUrl.trim()}
              size="lg"
              className="w-full gradient-primary text-primary-foreground font-bold text-base glow-primary"
            >
              {processing ? (
                <>
                  <Loader className="w-5 h-5 mr-2 animate-spin" />
                  Processando... (aguarde até 5 min)
                </>
              ) : (
                <>
                  <Play className="w-5 h-5 mr-2" />
                  Processar Vídeo com Runway ML
                </>
              )}
            </Button>
          </div>
        </motion.div>

        {/* Reel Selecionado */}
        {selectedReel && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="glass-card p-8 rounded-lg border border-primary/30 mb-8"
          >
            <div className="flex items-center gap-3 mb-6">
              {selectedReel.status === "ready" && (
                <>
                  <CheckCircle className="w-6 h-6 text-green-500" />
                  <h2 className="text-2xl font-bold">✅ Reel Pronto!</h2>
                </>
              )}
              {selectedReel.status === "error" && (
                <h2 className="text-2xl font-bold text-destructive">❌ Erro no Processamento</h2>
              )}
            </div>

            {selectedReel.status === "ready" && (
              <div className="space-y-6">
                {/* Preview */}
                <div className="relative w-full max-w-sm mx-auto aspect-video bg-black rounded-lg overflow-hidden border-2 border-primary">
                  <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-primary/20 to-transparent">
                    <div className="text-center">
                      <Play className="w-16 h-16 text-primary mx-auto mb-4" />
                      <p className="text-white font-semibold">Vídeo pronto para download</p>
                      <p className="text-white/70 text-sm mt-1">Duração: {selectedReel.duration}s</p>
                    </div>
                  </div>
                </div>

                {/* Legenda */}
                <div>
                  <Label className="text-base font-semibold mb-2">📝 Legenda (customizável)</Label>
                  <Textarea
                    value={customCaption}
                    onChange={(e) => setCustomCaption(e.target.value)}
                    className="min-h-24 resize-none"
                    placeholder="Edite a legenda do reel..."
                  />
                  <div className="flex gap-2 mt-2">
                    <Button
                      onClick={() => copyToClipboard(customCaption)}
                      variant="outline"
                      size="sm"
                      className="gap-2"
                    >
                      <Copy className="w-4 h-4" />
                      Copiar Legenda
                    </Button>
                  </div>
                </div>

                {/* Hashtags */}
                <div>
                  <Label className="text-base font-semibold mb-2">#️⃣ Hashtags (customizáveis)</Label>
                  <Textarea
                    value={customHashtags}
                    onChange={(e) => setCustomHashtags(e.target.value)}
                    className="min-h-20 resize-none"
                    placeholder="Edite as hashtags separadas por espaço..."
                  />
                  <div className="flex gap-2 mt-2">
                    <Button
                      onClick={() => copyToClipboard(customHashtags)}
                      variant="outline"
                      size="sm"
                      className="gap-2"
                    >
                      <Copy className="w-4 h-4" />
                      Copiar Hashtags
                    </Button>
                  </div>
                </div>

                {/* Botões de Ação */}
                <div className="flex gap-3 pt-4 border-t border-border">
                  <Button
                    onClick={() => downloadReel(selectedReel)}
                    className="flex-1 gradient-primary text-primary-foreground font-bold text-base glow-primary gap-2"
                    size="lg"
                  >
                    <Download className="w-5 h-5" />
                    Baixar Reel (MP4)
                  </Button>
                </div>

                <p className="text-xs text-muted-foreground text-center">
                  💡 Dica: Copie a legenda e as hashtags, faça o download do vídeo e poste no Instagram Stories ou Feed com qualidade profissional!
                </p>
              </div>
            )}
          </motion.div>
        )}

        {/* Histórico de Reels */}
        {reels.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="glass-card p-8 rounded-lg border border-border"
          >
            <h3 className="text-xl font-bold mb-4">📊 Histórico de Reels</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {reels.map((reel) => (
                <motion.div
                  key={reel.id}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className={`p-4 rounded-lg border-2 cursor-pointer transition-all ${
                    reel.status === "ready"
                      ? "border-green-500 bg-green-500/5 hover:bg-green-500/10"
                      : reel.status === "processing"
                      ? "border-blue-500 bg-blue-500/5"
                      : "border-destructive bg-destructive/5"
                  }`}
                  onClick={() => reel.status === "ready" && setSelectedReel(reel)}
                >
                  <div className="flex items-start justify-between mb-2">
                    <span className="text-sm font-medium">
                      {reel.status === "ready" && "✅ Pronto"}
                      {reel.status === "processing" && "⏳ Processando"}
                      {reel.status === "error" && "❌ Erro"}
                    </span>
                    <span className="text-xs text-muted-foreground">{reel.timestamp}</span>
                  </div>
                  <p className="text-xs text-muted-foreground line-clamp-2">{reel.videoUrl}</p>
                  {reel.status === "ready" && reel.duration && (
                    <p className="text-xs font-semibold text-primary mt-2">⏱️ {reel.duration}s</p>
                  )}
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}
      </div>
    </div>
  );
};

export default InstagramReelsAdmin;
