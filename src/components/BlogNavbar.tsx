import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Code2, Menu, X, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export default function BlogNavbar() {
    const navigate = useNavigate();
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    const solutions = [
        { label: "AutoClub Pro", href: "/autoclub-pro", isExternal: false },
        { label: "Autônomos", href: "/autonomos", isExternal: false },
        { label: "Social Jurídico", href: "https://www.socialjuridico.com.br", isExternal: true },
        { label: "Fisio+", href: "https://fisiomais-iota.vercel.app/", isExternal: true },
        { label: "Eu Faço", href: "https://eu-faco-mu.vercel.app/", isExternal: true },
    ];

    return (
        <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md border-b border-blue-200/30 bg-white/80">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-2 sm:py-2 flex items-center justify-between gap-2 sm:gap-4">
                {/* Logo */}
                <div className="flex items-center gap-2 flex-shrink-0 cursor-pointer" onClick={() => navigate("/")}>
                    <motion.div
                        whileHover={{ scale: 1.1, rotate: 5 }}
                        className="w-9 h-9 sm:w-10 sm:h-10 rounded-lg bg-gradient-to-br from-blue-500 to-blue-700 flex items-center justify-center shadow-lg shadow-blue-500/50 flex-shrink-0"
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

                {/* Center Buttons - Mobile (Simplified for better fit) */}
                <div className="flex items-center gap-1 md:hidden">
                    <Button
                        onClick={() => navigate("/auth")}
                        size="sm"
                        className="border-2 border-blue-600 bg-white text-blue-600 hover:bg-blue-50 font-bold text-xs px-2 py-1.5 rounded transition-all"
                    >
                        <span>Acesso</span>
                    </Button>
                </div>

                {/* Navigation */}
                <div className="flex items-center gap-1 sm:gap-3 ml-auto relative">
                    <Button
                        onClick={() => navigate("/")}
                        variant="ghost"
                        size="sm"
                        className="hidden md:inline-flex text-gray-700 hover:text-blue-600 text-sm"
                    >
                        Home
                    </Button>

                    <Button
                        onClick={() => navigate("/trafego-pago")}
                        variant="ghost"
                        size="sm"
                        className="hidden md:inline-flex text-gray-700 hover:text-blue-600 text-sm"
                    >
                        Tráfego Pago
                    </Button>

                    <Button
                        onClick={() => navigate("/consultoria-totvs")}
                        variant="ghost"
                        size="sm"
                        className="hidden md:inline-flex text-gray-700 hover:text-blue-600 text-sm font-bold text-blue-600"
                    >
                        Consultoria TOTVS
                    </Button>

                    {/* Solutions Dropdown */}
                    <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                            <Button
                                variant="ghost"
                                size="sm"
                                className="hidden md:inline-flex text-gray-700 hover:text-blue-600 text-sm gap-1 outline-none font-bold"
                            >
                                Soluções <ChevronDown className="h-4 w-4" />
                            </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent align="end" className="w-48">
                            {solutions.map((sub) => (
                                <DropdownMenuItem key={sub.label} asChild>
                                    {sub.isExternal ? (
                                        <a href={sub.href} target="_blank" rel="noopener noreferrer" className="w-full cursor-pointer font-medium">
                                            {sub.label}
                                        </a>
                                    ) : (
                                        <Link to={sub.href} className="w-full cursor-pointer font-medium">
                                            {sub.label}
                                        </Link>
                                    )}
                                </DropdownMenuItem>
                            ))}
                        </DropdownMenuContent>
                    </DropdownMenu>

                    <Button
                        onClick={() => navigate("/about-me")}
                        variant="ghost"
                        size="sm"
                        className="hidden md:inline-flex text-gray-700 hover:text-blue-600 text-sm"
                    >
                        Sobre Mim
                    </Button>

                    <Button
                        onClick={() => navigate("/blog")}
                        variant="ghost"
                        size="sm"
                        className="hidden md:inline-flex text-gray-700 hover:text-blue-600 text-sm"
                    >
                        Blog
                    </Button>
                    <Button
                        onClick={() => window.open("https://wa.me/5532991075164", "_blank")}
                        variant="ghost"
                        size="sm"
                        className="hidden sm:inline-flex text-gray-700 hover:text-blue-600 text-sm"
                    >
                        Contato
                    </Button>

                    {/* Mobile Menu Toggle */}
                    <Button
                        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                        variant="ghost"
                        size="sm"
                        className="md:hidden text-gray-700 hover:text-blue-600"
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
                                className="justify-start text-gray-700 hover:text-blue-600 hover:bg-blue-50"
                            >
                                Home
                            </Button>
                            <Button
                                onClick={() => {
                                    navigate("/trafego-pago");
                                    setMobileMenuOpen(false);
                                }}
                                variant="ghost"
                                size="sm"
                                className="justify-start text-gray-700 hover:text-blue-600 hover:bg-blue-50"
                            >
                                Tráfego Pago
                            </Button>
                            <Button
                                onClick={() => {
                                    navigate("/consultoria-totvs");
                                    setMobileMenuOpen(false);
                                }}
                                variant="ghost"
                                size="sm"
                                className="justify-start text-gray-700 hover:text-blue-600 hover:bg-blue-50 font-bold text-blue-600"
                            >
                                Consultoria TOTVS
                            </Button>

                            {/* Mobile Solutions */}
                            <div className="flex flex-col gap-1 py-2 border-y border-gray-50">
                                <span className="px-3 text-[10px] font-black text-gray-400 uppercase tracking-widest mb-1">Soluções</span>
                                {solutions.map((sub) => (
                                    sub.isExternal ? (
                                        <a
                                            key={sub.label}
                                            href={sub.href}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            onClick={() => setMobileMenuOpen(false)}
                                            className="flex items-center px-3 py-2 text-sm font-bold text-gray-700 hover:text-blue-600 hover:bg-blue-50 rounded-lg"
                                        >
                                            {sub.label}
                                        </a>
                                    ) : (
                                        <button
                                            key={sub.label}
                                            onClick={() => {
                                                navigate(sub.href);
                                                setMobileMenuOpen(false);
                                            }}
                                            className="flex items-center px-3 py-2 text-sm font-bold text-gray-700 hover:text-blue-600 hover:bg-blue-50 rounded-lg text-left"
                                        >
                                            {sub.label}
                                        </button>
                                    )
                                ))}
                            </div>

                            <Button
                                onClick={() => {
                                    navigate("/about-me");
                                    setMobileMenuOpen(false);
                                }}
                                variant="ghost"
                                size="sm"
                                className="justify-start text-gray-700 hover:text-blue-600 hover:bg-blue-50"
                            >
                                Sobre Mim
                            </Button>
                            <Button
                                onClick={() => {
                                    navigate("/blog");
                                    setMobileMenuOpen(false);
                                }}
                                variant="ghost"
                                size="sm"
                                className="justify-start text-gray-700 hover:text-blue-600 hover:bg-blue-50"
                            >
                                Blog
                            </Button>
                            <Button
                                onClick={() => {
                                    window.open("https://wa.me/5532991075164", "_blank");
                                    setMobileMenuOpen(false);
                                }}
                                variant="ghost"
                                size="sm"
                                className="justify-start text-gray-700 hover:text-blue-600 hover:bg-blue-50"
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
