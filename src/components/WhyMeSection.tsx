import { Target, Eye, HeadphonesIcon, TrendingUp } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const reasons = [
  { icon: Target, title: "Processo estruturado", desc: "Do diagnóstico ao suporte, cada etapa é planejada para entregar resultado." },
  { icon: Eye, title: "Visão de negócio", desc: "Não entrego só código — entrego soluções que fazem sentido para o seu mercado." },
  { icon: HeadphonesIcon, title: "Suporte contínuo", desc: "Não desapareço depois da entrega. Acompanho, ajusto e evoluo o sistema." },
  { icon: TrendingUp, title: "Resultado mensurável", desc: "Foco em métricas reais: redução de custos, aumento de produtividade e lucro." },
];

export default function WhyMeSection() {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section className="py-24 relative">
      <div className="absolute inset-0 gradient-radial opacity-30" />
      <div className="container relative" ref={ref}>
        <div className="text-center mb-16">
          <h2 className="font-display text-3xl font-bold sm:text-4xl">Por que trabalhar <span className="text-primary">comigo</span></h2>
        </div>

        <div className={`grid gap-6 sm:grid-cols-2 max-w-3xl mx-auto ${isVisible ? "animate-fade-up" : "opacity-0"}`}>
          {reasons.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="flex gap-4 rounded-xl border border-border/50 bg-card/50 p-5">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/10">
                <Icon className="h-5 w-5 text-primary" />
              </div>
              <div>
                <h3 className="font-display font-semibold">{title}</h3>
                <p className="mt-1 text-sm text-muted-foreground">{desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
