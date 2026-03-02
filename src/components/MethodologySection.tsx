import { Search, Map, FileText, Layout, Code, Rocket, HeadphonesIcon } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const steps = [
  { icon: Search, title: "Diagnóstico", desc: "Entendo seu negócio, seus desafios e objetivos." },
  { icon: Map, title: "Mapeamento", desc: "Identifico gargalos e oportunidades nos processos." },
  { icon: FileText, title: "Escopo", desc: "Defino funcionalidades, regras e prioridades." },
  { icon: Layout, title: "Protótipo", desc: "Valido a solução com você antes de desenvolver." },
  { icon: Code, title: "Desenvolvimento", desc: "Construo o sistema com qualidade e testes." },
  { icon: Rocket, title: "Implantação", desc: "Coloco no ar e treino sua equipe." },
  { icon: HeadphonesIcon, title: "Suporte", desc: "Acompanho, ajusto e evoluo conforme necessidade." },
];

export default function MethodologySection() {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="metodologia" className="py-24 relative">
      <div className="absolute inset-0 gradient-radial opacity-40" />
      <div className="container relative" ref={ref}>
        <div className="text-center mb-16">
          <h2 className="font-display text-3xl font-bold sm:text-4xl">Como <span className="text-primary">funciona</span></h2>
          <p className="mt-4 text-muted-foreground max-w-xl mx-auto">Um processo estruturado do diagnóstico ao suporte contínuo.</p>
        </div>

        <div className="relative max-w-2xl mx-auto">
          {/* Vertical line */}
          <div className="absolute left-6 top-0 bottom-0 w-px bg-border/60 hidden sm:block" />

          <div className="space-y-8">
            {steps.map(({ icon: Icon, title, desc }, i) => (
              <div
                key={title}
                className={`flex gap-4 sm:gap-6 ${isVisible ? "animate-fade-up" : "opacity-0"}`}
                style={{ animationDelay: `${i * 100}ms` }}
              >
                <div className="relative z-10 flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-primary/40 bg-card">
                  <Icon className="h-5 w-5 text-primary" />
                </div>
                <div className="pt-2">
                  <h3 className="font-display font-semibold">{`${i + 1}. ${title}`}</h3>
                  <p className="mt-1 text-sm text-muted-foreground">{desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
