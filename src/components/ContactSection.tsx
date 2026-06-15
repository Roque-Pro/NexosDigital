import { useState } from "react";
import { MessageCircle, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { useToast } from "@/hooks/use-toast";

export default function ContactSection() {
  const { ref, isVisible } = useScrollAnimation();
  const { toast } = useToast();
  const [form, setForm] = useState({ nome: "", empresa: "", email: "", mensagem: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const { nome, email, mensagem } = form;
    if (!nome.trim() || !email.trim() || !mensagem.trim()) {
      toast({ title: "Preencha todos os campos obrigatórios.", variant: "destructive" });
      return;
    }
    const encoded = encodeURIComponent(`Olá! Meu nome é ${nome.trim()}${form.empresa ? `, empresa ${form.empresa.trim()}` : ""}. ${mensagem.trim()}`);
     window.open(`https://wa.me/5532991075164?text=${encoded}`, "_blank");
    toast({ title: "Redirecionando para o WhatsApp..." });
  };

  return (
    <section id="contato" className="py-24 relative">
      <div className="absolute inset-0 gradient-radial opacity-40" />
      <div className="container relative max-w-xl" ref={ref}>
        <div className={`text-center mb-12 ${isVisible ? "animate-fade-up" : "opacity-0"}`}>
          <h2 className="font-display text-3xl font-bold sm:text-4xl">Vamos <span className="text-primary">conversar?</span></h2>
          <p className="mt-4 text-muted-foreground">Solicite uma análise de captação e descubra como podemos lotar sua agenda com leads qualificados todos os dias.</p>
        </div>

        <form onSubmit={handleSubmit} className={`space-y-4 ${isVisible ? "animate-fade-up" : "opacity-0"}`} style={{ animationDelay: "200ms" }}>
          <Input placeholder="Seu nome *" value={form.nome} onChange={(e) => setForm({ ...form, nome: e.target.value })} className="bg-card/50 border-border/50" maxLength={100} />
          <Input placeholder="Sua empresa" value={form.empresa} onChange={(e) => setForm({ ...form, empresa: e.target.value })} className="bg-card/50 border-border/50" maxLength={100} />
          <Input type="email" placeholder="Seu e-mail *" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} className="bg-card/50 border-border/50" maxLength={255} />
          <Textarea placeholder="Como posso ajudar? *" value={form.mensagem} onChange={(e) => setForm({ ...form, mensagem: e.target.value })} className="bg-card/50 border-border/50 min-h-[100px]" maxLength={1000} />

          <Button type="submit" size="lg" className="w-full glow-md gap-2">
            Enviar e falar no WhatsApp <ArrowRight className="h-4 w-4" />
          </Button>
        </form>

        <div className="mt-8 text-center">
          <p className="text-xs text-muted-foreground mb-4">Ou fale diretamente:</p>
          <Button variant="outline" size="lg" className="gap-2 border-primary/30 text-primary hover:bg-primary/10" asChild>
            <a href="https://wa.me/5532991075164" target="_blank" rel="noopener noreferrer">
              <MessageCircle className="h-5 w-5" /> Chamar no WhatsApp
            </a>
          </Button>
        </div>

        <p className="mt-10 text-center text-sm text-muted-foreground font-medium">
          "O melhor momento para organizar sua empresa era ontem. O segundo melhor é agora."
        </p>
      </div>
    </section>
  );
}
