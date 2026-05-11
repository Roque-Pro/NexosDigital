import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { Code2, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function BlogNavbar() {
    const navigate = useNavigate();
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    return (
        <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md border-b border-purple-200/30 bg-white/80">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-2 sm:py-2 flex items-center justify-between gap-2 sm:gap-4">
                {/* Logo */}
                <div className="flex items-center gap-2 flex-shrink-0 cursor-pointer" onClick={() => navigate("/")}>
                    <motion.div
                        whileHover={{ scale: 1.1, rotate: 5 }}
                        className="w-9 h-9 sm:w-10 sm:h-10 rounded-lg bg-gradient-to-br from-purple-500 to-purple-700 flex items-center justify-center shadow-lg shadow-purple-500/50 flex-shrink-0"
                    >
                        <Code2 className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                    </motion.div>
                    <div className="hidden sm:block">
                        <h1 className="text-lg sm:text-xl font-display font-bold text-gray-900">
                            TechNexos
                        </h1>
                    </div>
                    <div className="sm:hidden">
                        <h1 className="text-sm font-display font-bold text-gray-900">
                            TechNexos
                        </h1>
                    </div>
                </div>

                {/* Center Buttons - Mobile */}
                <div className="flex items-center gap-1 md:hidden">
                    <Button
                        onClick={() => navigate("/diagnostico-gratuito")}
                        size="sm"
                        className="bg-purple-600 hover:bg-purple-700 text-white font-bold text-xs px-2 py-1.5"
                    >
                        <span>Diagnóstico</span>
                    </Button>
                    <Button
                        onClick={() => navigate("/auth")}
                        size="sm"
                        className="border-2 border-purple-600 bg-white text-purple-600 hover:bg-purple-50 font-bold text-xs px-2 py-1.5 rounded transition-all"
                    >
                        <span>Login</span>
                    </Button>
                </div>

                {/* Navigation */}
                <div className="flex items-center gap-1 sm:gap-3 ml-auto relative">
                    <Button
                        onClick={() => navigate("/")}
                        variant="ghost"
                        size="sm"
                        className="hidden md:inline-flex text-gray-700 hover:text-purple-600 text-sm"
                    >
                        Home
                    </Button>

                    <Button
                        onClick={() => navigate("/about-me")}
                        variant="ghost"
                        size="sm"
                        className="hidden md:inline-flex text-gray-700 hover:text-purple-600 text-sm"
                    >
                        Sobre Mim
                    </Button>
                    <Button
                        onClick={() => window.open("https://wa.me/5532991075164", "_blank")}
                        variant="ghost"
                        size="sm"
                        className="hidden sm:inline-flex text-gray-700 hover:text-purple-600 text-sm"
                    >
                        Contato
                    </Button>

                    {/* Desktop Buttons */}
                    <Button
                        onClick={() => navigate("/diagnostico-gratuito")}
                        size="sm"
                        className="hidden md:inline-flex bg-purple-600 hover:bg-purple-700 text-white font-bold text-xs sm:text-sm px-2 sm:px-3 py-1.5 sm:py-2"
                    >
                        <span>Diagnóstico</span>
                    </Button>
                    <Button
                        onClick={() => navigate("/auth")}
                        size="sm"
                        className="hidden md:inline-flex border-2 border-purple-600 bg-white text-purple-600 hover:bg-purple-50 font-bold text-xs sm:text-sm px-3 sm:px-4 py-1.5 sm:py-2 rounded transition-all"
                    >
                        <span>Acesso</span>
                    </Button>

                    {/* Mobile Menu Toggle */}
                    <Button
                        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                        variant="ghost"
                        size="sm"
                        className="md:hidden text-gray-700 hover:text-purple-600"
                    >
                        {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
                    </Button>
                </div>

                {/* Mobile Menu Dropdown */}
                {mobileMenuOpen && (
                    <div className="absolute top-full left-0 right-0 md:hidden bg-white border-t border-purple-200/30 shadow-lg">
                        <div className="flex flex-col gap-2 p-4">
                            <Button
                                onClick={() => {
                                    navigate("/");
                                    setMobileMenuOpen(false);
                                }}
                                variant="ghost"
                                size="sm"
                                className="justify-start text-gray-700 hover:text-purple-600 hover:bg-purple-50"
                            >
                                Home
                            </Button>
                            <Button
                                onClick={() => {
                                    navigate("/about-me");
                                    setMobileMenuOpen(false);
                                }}
                                variant="ghost"
                                size="sm"
                                className="justify-start text-gray-700 hover:text-purple-600 hover:bg-purple-50"
                            >
                                Sobre Mim
                            </Button>
                            <Button
                                onClick={() => {
                                    window.open("https://wa.me/5532991075164", "_blank");
                                    setMobileMenuOpen(false);
                                }}
                                variant="ghost"
                                size="sm"
                                className="justify-start text-gray-700 hover:text-purple-600 hover:bg-purple-50"
                            >
                                Contato
                            </Button>
                        </div>
                    </div>
                )}
            </div>
        </header>
    );
}
