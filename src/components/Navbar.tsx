import { useState } from "react";
import { Menu, X, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link, useNavigate } from "react-router-dom";

const links = [
  { label: "Serviços", href: "#servicos" },
  { label: "Tráfego & SEO", href: "/trafego-e-seo", isLink: true },
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
            <a
              key={link.label}
              href={link.href}
              {...(link.isLink && { onClick: (e) => {
                e.preventDefault();
                navigate(link.href);
              }})}
              className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
            >
              {link.label}
            </a>
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
        <div className="border-t border-border/50 bg-background/95 backdrop-blur-xl md:hidden">
          <div className="container flex flex-col gap-4 py-6">
            {links.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={(e) => {
                  if (link.isLink) {
                    e.preventDefault();
                    navigate(link.href);
                  }
                  setOpen(false);
                }}
                className="text-base font-bold text-foreground transition-colors"
              >
                {link.label}
              </a>
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
