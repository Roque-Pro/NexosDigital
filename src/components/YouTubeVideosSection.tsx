import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Play } from "lucide-react";

interface Video {
  id: string;
  title: string;
  youtubeId: string;
}

interface YouTubeVideosSectionProps {
  videos?: Video[];
}

export default function YouTubeVideosSection({
  videos = [
    {
      id: "1",
      title: "Captação de Clientes e CRM",
      youtubeId: "UWz7kwV3BIg",
    },
    {
      id: "2",
      title: "Serviços",
      youtubeId: "lb65vTYwOos",
    },
    {
      id: "3",
      title: "Estoque e Inventário",
      youtubeId: "0IzvOUTxmu8",
    },
    {
      id: "4",
      title: "Vendas",
      youtubeId: "nJmB5dxiuTY",
    },
    {
      id: "5",
      title: "Histórico e Segurança",
      youtubeId: "vZSjvvxvoL4",
    },
    {
      id: "6",
      title: "Painel Administrativo",
      youtubeId: "LsfPOtfy1Zw",
    },
  ],
}: YouTubeVideosSectionProps) {
  const [selectedVideo, setSelectedVideo] = useState<string | null>(null);

  const getYouTubeThumbnail = (youtubeId: string) => {
    return `https://img.youtube.com/vi/${youtubeId}/hqdefault.jpg`;
  };

  return (
    <>
      <section className="relative py-20 bg-gradient-to-b from-white via-slate-400 to-slate-700 dark:from-slate-900 dark:via-slate-700 dark:to-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-display font-bold text-white mb-4">
              Conheça o AutoClub Pro em Ação
            </h2>
            <p className="text-xl text-gray-100 max-w-2xl mx-auto">
              Veja como funciona cada módulo do sistema. 
              Abaixo você encontra vídeos demonstrando todas as funcionalidades da plataforma
            </p>
          </div>

          {/* Video Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {videos.map((video, index) => (
              <motion.div
                key={video.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group cursor-pointer"
                onClick={() => setSelectedVideo(video.youtubeId)}
              >
                <div className="relative overflow-hidden rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300">
                  {/* Thumbnail */}
                  <img
                    src={getYouTubeThumbnail(video.youtubeId)}
                    alt={video.title}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />

                  {/* Play Button Overlay */}
                  <div className="absolute inset-0 bg-black/40 group-hover:bg-black/50 transition-colors duration-300 flex items-center justify-center">
                    <motion.div
                      initial={{ scale: 0.8 }}
                      whileHover={{ scale: 1 }}
                      className="bg-red-600 rounded-full p-4 group-hover:bg-red-700 transition-colors"
                    >
                      <Play className="w-8 h-8 text-white fill-white" />
                    </motion.div>
                  </div>

                  {/* Title */}
                  <div className="p-5 bg-gradient-to-b from-white to-slate-50 border-t border-slate-100">
                    <h3 className="font-bold text-gray-900 text-base line-clamp-2 group-hover:text-blue-600 transition-colors leading-tight">
                      {video.title}
                    </h3>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Video Modal */}
      <AnimatePresence>
        {selectedVideo && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4"
            onClick={() => setSelectedVideo(null)}
          >
            <motion.div
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.9 }}
              className="relative w-full max-w-4xl"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button */}
              <button
                onClick={() => setSelectedVideo(null)}
                className="absolute -top-12 right-0 text-white hover:text-gray-300 transition-colors z-10"
              >
                <X className="w-8 h-8" />
              </button>

              {/* Video Container */}
              <div className="relative pt-[56.25%] bg-black rounded-lg overflow-hidden">
                <iframe
                  className="absolute inset-0 w-full h-full"
                  src={`https://www.youtube.com/embed/${selectedVideo}?autoplay=1`}
                  title="AutoClub Pro Video"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
