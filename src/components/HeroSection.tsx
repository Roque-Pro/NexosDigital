import { ArrowRight, Play, Code, Zap, BarChart3, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center pt-16 overflow-hidden">
      {/* Background effects - Enhanced */}
      <div className="absolute inset-0 bg-grid opacity-30" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] gradient-radial" />
      
      {/* Additional glow effects */}
      <div className="absolute top-20 right-20 w-96 h-96 bg-primary/10 rounded-full blur-3xl opacity-50" />
      <div className="absolute bottom-20 left-20 w-96 h-96 bg-purple-600/10 rounded-full blur-3xl opacity-50" />

      <div className="container relative z-10">
        <div className="mx-auto max-w-4xl">
          {/* Badge */}
          <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/5 px-4 py-1.5 text-xs font-medium text-primary">
            <Zap className="h-3 w-3" /> TechNexos Digital — Transformação & Automação Inteligente
          </div>

          {/* Main heading with better typography */}
          <h1 className="font-display text-5xl sm:text-6xl lg:text-7xl font-bold leading-tight tracking-tight mb-8">
            Automatize sua empresa com{" "}
            <span className="text-primary glow-text">IA e Inteligência</span>
          </h1>

          {/* Enhanced subtitle */}
          <div className="space-y-4 mb-12 max-w-2xl">
            <p className="text-xl text-muted-foreground leading-relaxed">
              Arquiteto de soluções empresariais especializado em automação inteligente, agentes de IA e integração de plataformas.
            </p>
            <p className="text-lg text-muted-foreground/80 leading-relaxed">
              Transformo processos complexos em fluxos automatizados, escaláveis e prontos para o futuro. De diagnóstico estratégico à implementação e suporte — tudo orientado para ROI máximo.
            </p>
          </div>

          {/* CTA Buttons - Improved layout */}
          <div className="mt-12 flex flex-col sm:flex-row items-center gap-4">
            <Button size="lg" className="glow-md text-base gap-2 px-8 h-14 text-white font-semibold" asChild>
              <a href="#contato">
                Solicitar Diagnóstico Gratuito <ArrowRight className="h-5 w-5" />
              </a>
            </Button>
            <Button variant="outline" size="lg" className="text-base gap-2 px-8 h-14 font-semibold border-border/60 hover:border-primary/50" asChild>
              <a href="#metodologia">
                <Play className="h-5 w-5" /> Ver Como Funciona
              </a>
            </Button>
          </div>

          {/* Trust indicators */}
          <div className="mt-16 flex flex-col sm:flex-row items-center justify-center gap-8 text-sm text-muted-foreground">
            <div className="flex items-center gap-2">
              <span className="text-primary font-bold text-lg">7+</span>
              <span>Anos em Arquitetura de Soluções</span>
            </div>
            <div className="hidden sm:block w-px h-6 bg-border/50" />
            <div className="flex items-center gap-2">
              <span className="text-primary font-bold text-lg">100+</span>
              <span>Projetos de Automação</span>
            </div>
            <div className="hidden sm:block w-px h-6 bg-border/50" />
            <div className="flex items-center gap-2">
              <span className="text-primary font-bold text-lg">50+</span>
              <span>Empresas Transformadas</span>
            </div>
          </div>
        </div>

        {/* Enhanced Floating cards */}
        <div className="mt-24 grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-2xl mx-auto">
          {[
            { 
              icon: Code, 
              label: "Arquitetura",
              description: "Design de sistemas escaláveis"
            },
            { 
              icon: Zap, 
              label: "Automação",
              description: "IA e workflows inteligentes"
            },
            { 
              icon: BarChart3, 
              label: "Inteligência",
              description: "Análise e dashboards avançados"
            },
          ].map(({ icon: Icon, label, description }) => (
            <div 
              key={label} 
              className="group animate-float relative rounded-xl border border-border/50 bg-card/50 p-6 backdrop-blur-sm hover:border-primary/50 hover:bg-card/80 transition-all duration-300" 
              style={{ animationDelay: `${Math.random() * 2}s` }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-primary/0 to-primary/5 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="relative z-10">
                <Icon className="h-6 w-6 text-primary mb-3 group-hover:scale-110 transition-transform" />
                <h3 className="font-semibold mb-2">{label}</h3>
                <p className="text-xs text-muted-foreground/80">{description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
