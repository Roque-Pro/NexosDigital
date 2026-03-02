import { Wrench, Building2, Stethoscope, Scale, Home, Truck, Briefcase, ShoppingBag } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const segments = [
  { icon: Wrench, label: "Oficinas e auto centers" },
  { icon: Building2, label: "Lojas de material de construção" },
  { icon: Stethoscope, label: "Clínicas e consultórios" },
  { icon: Scale, label: "Escritórios de advocacia" },
  { icon: Home, label: "Imobiliárias" },
  { icon: Truck, label: "Distribuidoras" },
  { icon: Briefcase, label: "Prestadores de serviços" },
  { icon: ShoppingBag, label: "Pequenos e médios comércios" },
];

export default function AudienceSection() {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section className="py-24">
      <div className="container" ref={ref}>
        <div className="text-center mb-16">
          <h2 className="font-display text-3xl font-bold sm:text-4xl">Para quem é <span className="text-primary">ideal</span></h2>
          <p className="mt-4 text-muted-foreground max-w-xl mx-auto">Cada negócio tem suas particularidades — e o sistema se adapta ao seu.</p>
        </div>

        <div className={`grid grid-cols-2 gap-3 sm:grid-cols-4 max-w-3xl mx-auto ${isVisible ? "animate-fade-up" : "opacity-0"}`}>
          {segments.map(({ icon: Icon, label }) => (
            <div key={label} className="flex flex-col items-center gap-3 rounded-xl border border-border/50 bg-card/30 p-5 text-center transition-all hover:border-primary/30">
              <Icon className="h-6 w-6 text-primary" />
              <span className="text-xs text-muted-foreground font-medium">{label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
