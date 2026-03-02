import { XCircle, CheckCircle } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const problems = [
  "Dependência de planilhas e processos manuais",
  "Atendimento desorganizado e sem histórico",
  "Falta de controle financeiro e previsibilidade",
  "Erros humanos constantes e retrabalho",
  "Dados espalhados em vários lugares",
  "Dificuldade para escalar a operação",
];

const results = [
  "Controle total dos processos em tempo real",
  "Mais lucro com menos esforço operacional",
  "Velocidade e padronização nas entregas",
  "Zero retrabalho com automação inteligente",
  "Dados centralizados e decisões baseadas em fatos",
  "Crescimento escalável e sustentável",
];

export default function ProblemsResultsSection() {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="resultados" className="py-24">
      <div className="container" ref={ref}>
        <div className="text-center mb-16">
          <h2 className="font-display text-3xl font-bold sm:text-4xl">Pare de <span className="text-primary">perder tempo</span></h2>
          <p className="mt-4 text-muted-foreground max-w-xl mx-auto">Veja o que muda quando sua empresa opera com um sistema sob medida.</p>
        </div>

        <div className={`grid gap-6 md:grid-cols-2 ${isVisible ? "animate-fade-up" : "opacity-0"}`}>
          {/* Problems */}
          <div className="rounded-xl border border-destructive/20 bg-destructive/5 p-6 space-y-4">
            <h3 className="font-display text-lg font-semibold text-destructive">Sem sistema</h3>
            {problems.map((p) => (
              <div key={p} className="flex items-start gap-3">
                <XCircle className="h-5 w-5 shrink-0 text-destructive/70 mt-0.5" />
                <span className="text-sm text-muted-foreground">{p}</span>
              </div>
            ))}
          </div>

          {/* Results */}
          <div className="rounded-xl border border-primary/20 bg-primary/5 p-6 space-y-4">
            <h3 className="font-display text-lg font-semibold text-primary">Com sistema sob medida</h3>
            {results.map((r) => (
              <div key={r} className="flex items-start gap-3">
                <CheckCircle className="h-5 w-5 shrink-0 text-primary/70 mt-0.5" />
                <span className="text-sm text-muted-foreground">{r}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
