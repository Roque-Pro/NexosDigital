import { Repeat, Users, ClipboardList, Bell, LayoutDashboard, MessageCircle, Store } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const projects = [
  { icon: Repeat, title: "Sistema de assinaturas recorrentes", desc: "Gestão de planos, cobranças e renovações automáticas." },
  { icon: Users, title: "Gestão de clientes", desc: "Cadastro, histórico, controle de trocas e fidelização." },
  { icon: ClipboardList, title: "Ordens de serviço", desc: "Abertura, acompanhamento e fechamento de OS digitais." },
  { icon: Bell, title: "Automação de cobrança", desc: "Notificações, lembretes e integração com pagamento." },
  { icon: LayoutDashboard, title: "Painel administrativo", desc: "Dashboard completo com métricas e relatórios." },
  { icon: MessageCircle, title: "Integração WhatsApp/APIs", desc: "Comunicação automatizada e integrada ao sistema." },
  { icon: Store, title: "Marketplace local", desc: "Plataforma para conectar prestadores e clientes da região." },
];

export default function PortfolioSection() {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="projetos" className="py-24 relative">
      <div className="absolute inset-0 gradient-radial opacity-30" />
      <div className="container relative" ref={ref}>
        <div className="text-center mb-16">
          <h2 className="font-display text-3xl font-bold sm:text-4xl">Projetos <span className="text-primary">possíveis</span></h2>
          <p className="mt-4 text-muted-foreground max-w-xl mx-auto">Exemplos de sistemas que posso criar para o seu negócio.</p>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map(({ icon: Icon, title, desc }, i) => (
            <div
              key={title}
              className={`group rounded-xl border border-border/50 bg-card/50 p-5 backdrop-blur-sm transition-all hover:border-primary/30 ${isVisible ? "animate-fade-up" : "opacity-0"}`}
              style={{ animationDelay: `${i * 80}ms` }}
            >
              <Icon className="h-5 w-5 text-primary mb-3" />
              <h3 className="font-display font-semibold text-sm">{title}</h3>
              <p className="mt-1 text-xs text-muted-foreground">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
