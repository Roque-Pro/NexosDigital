import { useState } from "react";
import { Menu, X, MessageCircle, ChevronDown } from "lucide-react";
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
      { label: "AutoClub Pro", href: "/autoclub-pro", isExternal: false },
      { label: "Autônomos", href: "/autonomos", isExternal: false },
      { label: "Social Jurídico", href: "https://www.socialjuridico.com.br", isExternal: true },
      { label: "Fisio+", href: "https://fisiomais-iota.vercel.app/", isExternal: true },
      { label: "Eu Faço", href: "https://eu-faco-mu.vercel.app/", isExternal: true },
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
                <DropdownMenuTrigger className="flex items-center gap-1 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors outline-none">
                  {link.label} <ChevronDown className="h-4 w-4" />
                </DropdownMenuTrigger>
                <DropdownMenuContent align="start" className="w-48">
                  {link.subLinks?.map((sub) => (
                    <DropdownMenuItem key={sub.label} asChild>
                      {sub.isExternal ? (
                        <a href={sub.href} target="_blank" rel="noopener noreferrer" className="w-full cursor-pointer">
                          {sub.label}
                        </a>
                      ) : (
                        <Link to={sub.href} className="w-full cursor-pointer">
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
          <Button size="sm" className="glow-sm gap-2" asChild>
            <a href="https://wa.me/5532991075164" target="_blank" rel="noopener noreferrer">
              <MessageCircle className="h-4 w-4" /> WhatsApp
            </a>
          </Button>
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
                  <div className="flex flex-col gap-3 pl-4 border-l border-primary/20">
                    {link.subLinks?.map((sub) => (
                      sub.isExternal ? (
                        <a
                          key={sub.label}
                          href={sub.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          onClick={() => setOpen(false)}
                          className="text-base font-bold text-foreground transition-colors"
                        >
                          {sub.label}
                        </a>
                      ) : (
                        <Link
                          key={sub.label}
                          to={sub.href}
                          onClick={() => setOpen(false)}
                          className="text-base font-bold text-foreground transition-colors"
                        >
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
            <Button size="sm" className="glow-sm gap-2 w-fit" asChild>
              <a href="https://wa.me/5532991075164" target="_blank" rel="noopener noreferrer">
                <MessageCircle className="h-4 w-4" /> WhatsApp
              </a>
            </Button>
          </div>
        </div>
      )}
    </nav>
  );
}
