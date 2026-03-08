import { ArrowRight, Play, Code, Zap, BarChart3 } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center pt-16 overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 bg-grid opacity-30" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] gradient-radial" />

      <div className="container relative z-10">
        <div className="mx-auto max-w-3xl text-center">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/5 px-4 py-1.5 text-xs font-medium text-primary">
            <Zap className="h-3 w-3" /> TechNexos Digital — Consultoria & Desenvolvimento Digital
          </div>

          <h1 className="font-display text-4xl font-bold leading-tight tracking-tight sm:text-5xl lg:text-6xl">
            Soluções digitais sob medida para empresas que querem{" "}
            <span className="text-primary glow-text">crescer com controle</span>
          </h1>

          <p className="mt-6 text-lg text-muted-foreground leading-relaxed max-w-2xl mx-auto">
            Transformo processos manuais em sistemas inteligentes. Diagnóstico, desenvolvimento, implantação e suporte — tudo para sua empresa operar com mais eficiência e lucro.
          </p>

          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button size="lg" className="glow-md text-base gap-2 px-8" asChild>
              <a href="#contato">
                Solicitar Diagnóstico Gratuito <ArrowRight className="h-4 w-4" />
              </a>
            </Button>
            <Button variant="outline" size="lg" className="text-base gap-2 px-8 border-border/60" asChild>
              <a href="#metodologia">
                <Play className="h-4 w-4" /> Ver Como Funciona
              </a>
            </Button>
          </div>
        </div>

        {/* Floating cards */}
        <div className="mt-16 grid grid-cols-3 gap-4 max-w-lg mx-auto opacity-60">
          {[
            { icon: Code, label: "Sistemas" },
            { icon: Zap, label: "Automação" },
            { icon: BarChart3, label: "Dashboards" },
          ].map(({ icon: Icon, label }) => (
            <div key={label} className="animate-float flex flex-col items-center gap-2 rounded-xl border border-border/50 bg-card/50 p-4 backdrop-blur-sm" style={{ animationDelay: `${Math.random() * 2}s` }}>
              <Icon className="h-5 w-5 text-primary" />
              <span className="text-xs text-muted-foreground">{label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
