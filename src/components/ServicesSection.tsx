import { Code, Zap, Link2, BarChart3, Monitor, Headphones } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const services = [
  { icon: Code, title: "Sistemas sob medida", desc: "Software desenvolvido exclusivamente para o fluxo do seu negócio." },
  { icon: Zap, title: "Automação de processos", desc: "Elimine tarefas repetitivas e reduza erros humanos." },
  { icon: Link2, title: "Integrações e APIs", desc: "Conecte ferramentas e centralize operações em um só lugar." },
  { icon: BarChart3, title: "Dashboards e relatórios", desc: "Dados em tempo real para decisões mais rápidas e seguras." },
  { icon: Monitor, title: "Digitalização de operações", desc: "Saia do papel e das planilhas para o digital." },
  { icon: Headphones, title: "Otimização de atendimento", desc: "Automatize respostas e melhore a experiência do seu cliente." },
];

export default function ServicesSection() {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="servicos" className="py-24 relative">
      <div className="container" ref={ref}>
        <div className="text-center mb-16">
          <h2 className="font-display text-3xl font-bold sm:text-4xl">O que eu <span className="text-primary">faço</span></h2>
          <p className="mt-4 text-muted-foreground max-w-xl mx-auto">Soluções completas para transformar a operação da sua empresa.</p>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {services.map(({ icon: Icon, title, desc }, i) => (
            <div
              key={title}
              className={`group rounded-xl border border-border/50 bg-card/50 p-6 backdrop-blur-sm transition-all duration-300 hover:border-primary/40 hover:glow-sm ${isVisible ? "animate-fade-up" : "opacity-0"}`}
              style={{ animationDelay: `${i * 100}ms` }}
            >
              <div className="mb-4 inline-flex rounded-lg bg-primary/10 p-3">
                <Icon className="h-5 w-5 text-primary" />
              </div>
              <h3 className="font-display text-lg font-semibold">{title}</h3>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
