import { useState } from "react";
import { Share2, Linkedin, Facebook } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

interface ShareBlogPostProps {
    title: string;
    slug: string;
    excerpt?: string;
}

export default function ShareBlogPost({ title, slug, excerpt }: ShareBlogPostProps) {
    const [open, setOpen] = useState(false);

    const postUrl = `https://www.technexos.com.br/blog/${slug}`;
    const encodedUrl = encodeURIComponent(postUrl);
    const encodedTitle = encodeURIComponent(title);

    const shareOptions = [
        {
            name: "LinkedIn",
            icon: Linkedin,
            color: "bg-blue-50 hover:bg-blue-100 text-blue-700",
            action: () => {
                window.open(
                    `https://www.linkedin.com/sharing/share-offsite/?url=${encodedUrl}`,
                    "_blank",
                    "width=600,height=600"
                );
                setTimeout(() => setOpen(false), 300);
            },
        },
        {
            name: "Facebook",
            icon: Facebook,
            color: "bg-blue-50 hover:bg-blue-100 text-blue-600",
            action: () => {
                window.open(
                    `https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}`,
                    "_blank",
                    "width=600,height=600"
                );
                setTimeout(() => setOpen(false), 300);
            },
        },
    ];

    return (
        <div className="relative inline-block">
            {/* Botão Principal */}
            <motion.button
                onClick={() => setOpen(!open)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold rounded-lg hover:from-purple-700 hover:to-pink-700 transition-all shadow-lg hover:shadow-xl"
            >
                <Share2 className="w-5 h-5" />
                Compartilhar
            </motion.button>

            {/* Menu Flutuante */}
            <AnimatePresence>
                {open && (
                    <>
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9, y: -10 }}
                            animate={{ opacity: 1, scale: 1, y: 0 }}
                            exit={{ opacity: 0, scale: 0.9, y: -10 }}
                            transition={{ duration: 0.2 }}
                            className="absolute top-full mt-4 left-0 bg-white rounded-2xl shadow-2xl border border-gray-200 p-6 z-50 w-96"
                        >
                            {/* Header */}
                            <div className="mb-6">
                                <h3 className="text-gray-900 font-display font-bold text-lg mb-2">
                                    Compartilhe este artigo
                                </h3>
                                <p className="text-sm text-gray-600 line-clamp-2 font-medium">{title}</p>
                                {excerpt && (
                                    <p className="text-xs text-gray-500 mt-2 line-clamp-2">{excerpt}</p>
                                )}
                            </div>

                            {/* Divider */}
                            <div className="h-px bg-gradient-to-r from-purple-200 to-pink-200 mb-6" />

                            {/* Opções de Compartilhamento */}
                            <div className="space-y-3">
                                {shareOptions.map((option) => (
                                    <motion.button
                                        key={option.name}
                                        onClick={option.action}
                                        whileHover={{ x: 6 }}
                                        className={`w-full flex items-center gap-4 px-5 py-4 rounded-xl transition-all font-semibold ${option.color} border border-transparent hover:border-gray-300`}
                                    >
                                        <option.icon className="w-6 h-6 flex-shrink-0" />
                                        <span>{option.name}</span>
                                        <span className="ml-auto text-xs opacity-60">↗</span>
                                    </motion.button>
                                ))}
                            </div>

                            {/* Footer */}
                            <div className="mt-6 pt-6 border-t border-gray-100 text-xs text-gray-500 text-center">
                                Compartilhe para inspirar transformação digital na sua rede!
                            </div>

                            {/* Seta decorativa */}
                            <div className="absolute -top-2 left-6 w-4 h-4 bg-white border-l border-t border-gray-200 transform rotate-45" />
                        </motion.div>

                        {/* Overlay para fechar */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            onClick={() => setOpen(false)}
                            className="fixed inset-0 z-40"
                        />
                    </>
                )}
            </AnimatePresence>
        </div>
    );
}
