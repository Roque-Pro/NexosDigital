import { useState } from "react";
import { Menu, X, MessageCircle, ChevronDown, Car, Users, Scale, Activity, Wrench, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link, useNavigate } from "react-router-dom";
import { NavLink } from "@/components/NavLink";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const links = [
  { label: "Serviços", href: "#servicos" },
  { label: "Consultoria TOTVS", href: "/consultoria-totvs", isLink: true },
  { 
    label: "Soluções", 
    isDropdown: true,
    subLinks: [
      { label: "AutoClub Pro", href: "/autoclub-pro", isExternal: false, icon: <Car className="w-4 h-4" /> },
      { label: "Autônomos", href: "/autonomos", isExternal: false, icon: <Users className="w-4 h-4" /> },
      { label: "Social Jurídico", href: "https://www.socialjuridico.com.br", isExternal: true, icon: <Scale className="w-4 h-4" /> },
      { label: "Fisio+", href: "https://fisiomais-iota.vercel.app/", isExternal: true, icon: <Activity className="w-4 h-4" /> },
      { label: "Eu Faço", href: "https://eu-faco-mu.vercel.app/", isExternal: true, icon: <Wrench className="w-4 h-4" /> },
    ]
  },
  { label: "Tráfego Pago", href: "/trafego-pago", isLink: true },
  { label: "Blog", href: "/blog", isLink: true },
  { label: "Sobre Mim", href: "/about-me", isLink: true },
  { label: "Metodologia", href: "#metodologia" },
  { label: "Resultados", href: "#resultados" },
  { label: "Projetos", href: "#projetos" },
  { label: "FAQ", href: "#faq" },
  { label: "Contato", href: "#contato" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 border-b border-border/50 bg-background/80 backdrop-blur-xl">
      <div className="container flex h-16 items-center justify-between">
         <Link to="/" className="flex items-center gap-2 cursor-pointer hover:opacity-80 transition-opacity">
           <span className="text-primary text-2xl font-black">&lt;/&gt;</span>
           <div className="hidden md:flex items-center gap-1 font-display text-lg font-bold tracking-tight text-foreground">
             TechNexos<span className="text-primary">Digital</span>
           </div>
         </Link>

        {/* Desktop */}
        <div className="hidden items-center gap-6 md:flex">
          {links.map((link) => (
            link.isDropdown ? (
              <DropdownMenu key={link.label}>
                <DropdownMenuTrigger className="flex items-center gap-1 text-sm font-medium text-muted-foreground hover:text-foreground transition-all outline-none group">
                  {link.label} <ChevronDown className="h-4 w-4 transition-transform group-data-[state=open]:rotate-180" />
                </DropdownMenuTrigger>
                <DropdownMenuContent align="start" className="w-56 p-2 rounded-2xl shadow-2xl border-primary/10 animate-in fade-in zoom-in-95 duration-200">
                  <div className="mb-2 px-2 py-1.5 text-[10px] font-black text-muted-foreground uppercase tracking-widest">Nossas Verticais</div>
                  {link.subLinks?.map((sub) => (
                    <DropdownMenuItem key={sub.label} asChild className="rounded-xl focus:bg-primary/5 focus:text-primary transition-colors cursor-pointer mb-1 last:mb-0">
                      {sub.isExternal ? (
                        <a href={sub.href} target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 w-full p-2 font-bold text-sm">
                          <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center text-primary">
                            {sub.icon}
                          </div>
                          {sub.label}
                        </a>
                      ) : (
                        <Link to={sub.href} className="flex items-center gap-3 w-full p-2 font-bold text-sm">
                          <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center text-primary">
                            {sub.icon}
                          </div>
                          {sub.label}
                        </Link>
                      )}
                    </DropdownMenuItem>
                  ))}
                </DropdownMenuContent>
              </DropdownMenu>
            ) : link.isLink ? (
              <NavLink
                key={link.label}
                to={link.href}
                className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
                activeClassName="text-primary font-bold"
              >
                {link.label}
              </NavLink>
            ) : (
              <a
                key={link.label}
                href={link.href}
                className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
              >
                {link.label}
              </a>
            )
          ))}
          
          <div className="flex items-center gap-2">
            <Button variant="outline" size="sm" className="rounded-full border-primary/20 bg-primary/5 font-bold text-primary hover:bg-primary hover:text-white transition-all gap-2" onClick={() => navigate("/diagnostico-gratuito")}>
              <Sparkles className="w-4 h-4" /> Diagnóstico Gratuito
            </Button>
            <Button size="sm" className="glow-sm gap-2 rounded-full" asChild>
              <a href="https://wa.me/5532991075164" target="_blank" rel="noopener noreferrer">
                <MessageCircle className="h-4 w-4" /> WhatsApp
              </a>
            </Button>
          </div>
        </div>

        {/* Mobile toggle */}
        <button className="md:hidden text-foreground" onClick={() => setOpen(!open)} aria-label="Menu">
          {open ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="border-t border-border/50 bg-background/95 backdrop-blur-xl md:hidden max-h-[80vh] overflow-y-auto">
          <div className="container flex flex-col gap-4 py-6">
            {links.map((link) => (
              link.isDropdown ? (
                <div key={link.label} className="flex flex-col gap-2">
                  <span className="text-base font-bold text-muted-foreground uppercase text-[10px] tracking-widest">
                    {link.label}
                  </span>
                  <div className="grid grid-cols-1 gap-2 pl-2">
                    {link.subLinks?.map((sub) => (
                      sub.isExternal ? (
                        <a
                          key={sub.label}
                          href={sub.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          onClick={() => setOpen(false)}
                          className="flex items-center gap-3 p-3 rounded-xl bg-muted/50 border border-border/50 text-base font-bold text-foreground transition-colors"
                        >
                          <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center text-primary">
                            {sub.icon}
                          </div>
                          {sub.label}
                        </a>
                      ) : (
                        <Link
                          key={sub.label}
                          to={sub.href}
                          onClick={() => setOpen(false)}
                          className="flex items-center gap-3 p-3 rounded-xl bg-muted/50 border border-border/50 text-base font-bold text-foreground transition-colors"
                        >
                          <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center text-primary">
                            {sub.icon}
                          </div>
                          {sub.label}
                        </Link>
                      )
                    ))}
                  </div>
                </div>
              ) : link.isLink ? (
                <NavLink
                  key={link.label}
                  to={link.href}
                  onClick={() => setOpen(false)}
                  className="text-base font-bold text-foreground transition-colors"
                  activeClassName="text-primary"
                >
                  {link.label}
                </NavLink>
              ) : (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="text-base font-bold text-foreground transition-colors"
                >
                  {link.label}
                </a>
              )
            ))}
            <div className="flex flex-col gap-2 pt-4 border-t border-border/50">
              <Button className="glow-sm gap-2 w-full rounded-xl py-6 text-lg font-bold" onClick={() => { navigate("/diagnostico-gratuito"); setOpen(false); }}>
                <Sparkles className="w-5 h-5" /> Diagnóstico Gratuito
              </Button>
              <Button variant="outline" className="gap-2 w-full rounded-xl py-6 text-lg font-bold" asChild>
                <a href="https://wa.me/5532991075164" target="_blank" rel="noopener noreferrer">
                  <MessageCircle className="w-5 h-5 text-green-500" /> WhatsApp
                </a>
              </Button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
