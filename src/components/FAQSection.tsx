import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const faqs = [
  { q: "Quanto custa um sistema sob medida?", a: "O investimento depende da complexidade do projeto. Após o diagnóstico gratuito, apresento uma proposta clara com escopo, prazo e valor. Sem surpresas." },
  { q: "Em quanto tempo fica pronto?", a: "Projetos simples levam de 2 a 4 semanas. Projetos mais robustos podem levar de 1 a 3 meses. Você acompanha cada etapa." },
  { q: "Preciso ter equipe de TI?", a: "Não. Eu cuido de toda a parte técnica — desenvolvimento, implantação, treinamento e suporte. Sua equipe só precisa usar o sistema." },
  { q: "O sistema funciona no celular?", a: "Sim. Todos os sistemas são responsivos e funcionam perfeitamente em celulares, tablets e computadores." },
  { q: "Posso pedir melhorias depois?", a: "Com certeza. O sistema evolui junto com seu negócio. Novas funcionalidades podem ser adicionadas a qualquer momento." },
  { q: "Você dá suporte?", a: "Sim. Ofereço suporte contínuo após a entrega, com atendimento ágil para dúvidas, ajustes e melhorias." },
  { q: "O que acontece se eu quiser integração com WhatsApp ou pagamentos?", a: "Trabalho com diversas integrações — WhatsApp, gateways de pagamento, e-mail, ERPs e mais. Basta me informar a necessidade." },
];

export default function FAQSection() {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="faq" className="py-24">
      <div className="container max-w-2xl" ref={ref}>
        <div className="text-center mb-16">
          <h2 className="font-display text-3xl font-bold sm:text-4xl">Perguntas <span className="text-primary">frequentes</span></h2>
        </div>

        <div className={isVisible ? "animate-fade-up" : "opacity-0"}>
          <Accordion type="single" collapsible className="space-y-2">
            {faqs.map(({ q, a }, i) => (
              <AccordionItem key={i} value={`faq-${i}`} className="rounded-xl border border-border/50 bg-card/50 px-5 backdrop-blur-sm">
                <AccordionTrigger className="text-left text-sm font-medium hover:no-underline hover:text-primary">{q}</AccordionTrigger>
                <AccordionContent className="text-sm text-muted-foreground leading-relaxed">{a}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
}
