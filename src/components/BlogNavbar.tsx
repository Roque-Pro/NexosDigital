import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Code2, Menu, X, ChevronDown, Car, Users, Scale, Activity, Wrench, Sparkles, Scissors } from "lucide-react";
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
        { label: "AutoClub Pro", href: "/autoclub-pro", isExternal: false, icon: <Car className="w-4 h-4" /> },
        { label: "Autônomos", href: "/autonomos", isExternal: false, icon: <Users className="w-4 h-4" /> },
        { label: "Riscos & Moldes", href: "/riscos_moldes_moda", isExternal: false, icon: <Scissors className="w-4 h-4" /> },
        { label: "Social Jurídico", href: "https://www.socialjuridico.com.br", isExternal: true, icon: <Scale className="w-4 h-4" /> },
        { label: "Fisio+", href: "/fisiomais/", icon: <Activity className="w-4 h-4" /> },
        { label: "Eu Faço", href: "https://eu-faco-mu.vercel.app/", isExternal: true, icon: <Wrench className="w-4 h-4" /> },
    ];

    return (
        <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md border-b border-blue-200/30 bg-white/80">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-2 sm:py-2 flex items-center justify-between gap-2 sm:gap-4">
                {/* Logo */}
                <div className="flex items-center gap-2 flex-shrink-0 cursor-pointer" onClick={() => navigate("/")}>
                    <motion.div
                        whileHover={{ scale: 1.1, rotate: 5 }}
                        className="w-9 h-9 sm:w-10 sm:h-10 rounded-lg bg-gradient-to-br from-blue-50 to-blue-600 flex items-center justify-center shadow-lg shadow-blue-500/50 flex-shrink-0"
                    >
                        <Code2 className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                    </motion.div>
                    <div className="hidden sm:block">
                        <h1 className="text-lg sm:text-xl font-display font-bold text-gray-900">
                            TechNexos
                        </h1>
                    </div>
                </div>

                {/* Navigation */}
                <div className="flex items-center gap-1 sm:gap-3 ml-auto relative">
                    <Button
                        onClick={() => navigate("/")}
                        variant="ghost"
                        size="sm"
                        className="hidden md:inline-flex text-gray-700 hover:text-blue-600 text-sm font-medium"
                    >
                        Home
                    </Button>

                    <Button
                        onClick={() => navigate("/trafego-pago")}
                        variant="ghost"
                        size="sm"
                        className="hidden md:inline-flex text-gray-700 hover:text-blue-600 text-sm font-medium"
                    >
                        Tráfego Pago
                    </Button>

                    <Button
                        onClick={() => navigate("/bi-datasul-fluig")}
                        variant="ghost"
                        size="sm"
                        className="hidden md:inline-flex text-gray-700 hover:text-blue-600 text-sm font-medium"
                    >
                        BI, Datasul & Fluig
                    </Button>

                    {/* Solutions Dropdown */}
                    <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                            <Button
                                variant="ghost"
                                size="sm"
                                className="hidden md:inline-flex text-gray-700 hover:text-blue-600 text-sm gap-1 outline-none font-bold group"
                            >
                                Soluções <ChevronDown className="h-4 w-4 transition-transform group-data-[state=open]:rotate-180" />
                            </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent align="end" className="w-56 p-2 rounded-2xl shadow-2xl border-blue-100 animate-in fade-in zoom-in-95 duration-200">
                            <div className="mb-2 px-2 py-1.5 text-[10px] font-black text-muted-foreground uppercase tracking-widest text-blue-400">Produtos & Serviços</div>
                            {solutions.map((sub) => (
                                <DropdownMenuItem key={sub.label} asChild className="rounded-xl focus:bg-blue-50 focus:text-blue-600 transition-colors cursor-pointer mb-1 last:mb-0">
                                    {sub.isExternal ? (
                                        <a href={sub.href} target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 w-full p-2 font-bold text-sm">
                                            <div className="w-8 h-8 rounded-lg bg-blue-50 flex items-center justify-center text-blue-600">
                                                {sub.icon}
                                            </div>
                                            {sub.label}
                                        </a>
                                    ) : (
                                        <Link to={sub.href} className="flex items-center gap-3 w-full p-2 font-bold text-sm">
                                            <div className="w-8 h-8 rounded-lg bg-blue-50 flex items-center justify-center text-blue-600">
                                                {sub.icon}
                                            </div>
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
                        className="hidden md:inline-flex text-gray-700 hover:text-blue-600 text-sm font-medium"
                    >
                        Sobre Mim
                    </Button>

                    <Button
                        onClick={() => navigate("/blog")}
                        variant="ghost"
                        size="sm"
                        className="hidden md:inline-flex text-gray-700 hover:text-blue-600 text-sm font-medium"
                    >
                        Blog
                    </Button>
                    
                    <Button
                        onClick={() => navigate("/google-meu-negocio-juiz-de-fora")}
                        variant="outline"
                        size="sm"
                        className="hidden lg:inline-flex rounded-full border-blue-200 bg-blue-50 font-bold text-blue-600 hover:bg-blue-600 hover:text-white transition-all gap-2"
                    >
                        <Sparkles className="w-4 h-4" /> + Clientes?
                    </Button>

                    <Button
                        onClick={() => window.open("https://wa.me/5532991075164", "_blank")}
                        size="sm"
                        className="hidden sm:inline-flex bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-full px-5 shadow-lg shadow-blue-100"
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
                    <div className="absolute top-full left-0 right-0 md:hidden bg-white border-t border-blue-100 shadow-xl max-h-[85vh] overflow-y-auto">
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
                                    navigate("/bi-datasul-fluig");
                                    setMobileMenuOpen(false);
                                }}
                                variant="ghost"
                                size="sm"
                                className="justify-start text-gray-700 hover:text-blue-600 hover:bg-blue-50"
                            >
                                BI, Datasul & Fluig
                            </Button>

                            {/* Mobile Solutions */}
                            <div className="flex flex-col gap-1 py-2 border-y border-gray-50">
                                <span className="px-3 text-[10px] font-black text-gray-400 uppercase tracking-widest mb-2">Nossas Soluções</span>
                                {solutions.map((sub) => (
                                    sub.isExternal ? (
                                        <a
                                            key={sub.label}
                                            href={sub.href}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            onClick={() => setMobileMenuOpen(false)}
                                            className="flex items-center gap-3 px-3 py-3 text-sm font-bold text-gray-700 hover:text-blue-600 hover:bg-blue-50 rounded-xl"
                                        >
                                            <div className="w-8 h-8 rounded-lg bg-blue-50 flex items-center justify-center text-blue-600">
                                                {sub.icon}
                                            </div>
                                            {sub.label}
                                        </a>
                                    ) : (
                                        <button
                                            key={sub.label}
                                            onClick={() => {
                                                navigate(sub.href);
                                                setMobileMenuOpen(false);
                                            }}
                                            className="flex items-center gap-3 px-3 py-3 text-sm font-bold text-gray-700 hover:text-blue-600 hover:bg-blue-50 rounded-xl text-left"
                                        >
                                            <div className="w-8 h-8 rounded-lg bg-blue-50 flex items-center justify-center text-blue-600">
                                                {sub.icon}
                                            </div>
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
                            
                            <div className="flex flex-col gap-2 pt-2">
                                <Button
                                    onClick={() => {
                                        navigate("/google-meu-negocio-juiz-de-fora");
                                        setMobileMenuOpen(false);
                                    }}
                                    className="bg-blue-50 text-blue-600 hover:bg-blue-100 font-bold border border-blue-200 py-6 rounded-xl text-base gap-2"
                                >
                                    <Sparkles className="w-5 h-5" /> + Clientes?
                                </Button>
                                <Button
                                    onClick={() => {
                                        window.open("https://wa.me/5532991075164", "_blank");
                                        setMobileMenuOpen(false);
                                    }}
                                    className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-6 rounded-xl text-base"
                                >
                                    Falar no WhatsApp
                                </Button>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </header>
    );
}
