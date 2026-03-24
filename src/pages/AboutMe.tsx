import { ArrowLeft, Award, Briefcase, Code2, Zap, Shield, Lightbulb, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import roqueImage from "@/img/roque-rafael-proenca-consultor.png";

const AboutMe = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-background">
      {/* Header com botão voltar */}
      <header className="sticky top-0 z-50 border-b border-border/50 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex items-center justify-between h-16">
          <Button
            variant="ghost"
            size="sm"
            onClick={() => navigate("/")}
            className="gap-2"
          >
            <ArrowLeft className="h-4 w-4" />
            Voltar
          </Button>
          <h1 className="text-lg font-semibold">Sobre Mim</h1>
          <div className="w-20" />
        </div>
      </header>

      {/* Hero intro */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-transparent to-transparent" />
        <div className="container relative z-10 max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-5xl font-bold mb-6 leading-tight">
              Transformando Ideias em{" "}
              <span className="text-primary glow-text">Soluções de IA</span> que
              Escalam
            </h2>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Especialista em arquitetura de soluções empresariais, automação
              inteligente e transformação digital.
            </p>
          </div>
        </div>
      </section>

      {/* Quem Sou Eu - Com Imagem */}
      <section className="py-16 border-t border-border/50">
        <div className="container max-w-5xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Texto */}
            <div className="prose prose-invert max-w-none">
              <h3 className="text-3xl font-bold mb-6">Quem Sou Eu</h3>
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                Sou um profissional apaixonado por tecnologia com formação sólida
                em <strong>Análise e Desenvolvimento de Sistemas (ADS)</strong> e
                especialização em arquitetura de soluções empresariais. Minha
                trajetória é marcada pela busca constante de excelência técnica e
                pela capacidade de transformar desafios complexos em soluções
                elegantes e escaláveis.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                Trabalho na interseção entre estratégia empresarial e inovação
                tecnológica, tendo desenvolvido expertise em design de sistemas de
                automação inteligentes que não apenas resolvem problemas
                imediatos, mas estabelecem bases sólidas para o crescimento
                futuro das organizações.
              </p>
            </div>

            {/* Imagem */}
            <div className="relative rounded-2xl overflow-hidden shadow-2xl w-full h-80 sm:h-96 lg:h-[500px] max-w-sm mx-auto lg:mx-0">
              <img
                src={roqueImage}
                alt="Roque Rafael Proença - Arquiteto de Soluções de IA"
                className="w-full h-full object-cover"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
              <div className="absolute bottom-4 sm:bottom-6 left-4 sm:left-6 bg-white/95 backdrop-blur-md rounded-lg sm:rounded-xl p-3 sm:p-4 flex items-center gap-2 sm:gap-3 shadow-xl">
                <Sparkles className="w-4 sm:w-5 h-4 sm:h-5 text-primary flex-shrink-0" />
                <div>
                  <p className="text-xs sm:text-sm font-bold text-foreground">
                    Roque Rafael Proença
                  </p>
                  <p className="text-xs text-muted-foreground">
                    Arquiteto de Soluções de IA
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Formação e Certificações */}
      <section className="py-16 bg-card/50">
        <div className="container max-w-3xl">
          <h3 className="text-3xl font-bold mb-12">Formação & Certificações</h3>

          <div className="space-y-8">
            {/* Educação principal */}
            <div className="border border-border/50 rounded-xl p-6 bg-background/50 backdrop-blur-sm hover:border-primary/50 transition-colors">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0">
                  <Award className="h-6 w-6 text-primary mt-1" />
                </div>
                <div>
                  <h4 className="text-xl font-bold mb-2">
                    Análise e Desenvolvimento de Sistemas
                  </h4>
                  <p className="text-muted-foreground mb-3">
                    Formação acadêmica com foco em arquitetura de sistemas,
                    engenharia de software e metodologias ágeis.
                  </p>
                  <p className="text-sm text-primary font-medium">
                    Fundação para carreira em soluções empresariais
                  </p>
                </div>
              </div>
            </div>

            {/* Cursos e especialização */}
            <div className="border border-border/50 rounded-xl p-6 bg-background/50 backdrop-blur-sm hover:border-primary/50 transition-colors">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0">
                  <Code2 className="h-6 w-6 text-primary mt-1" />
                </div>
                <div>
                  <h4 className="text-xl font-bold mb-4">
                    Especialização Contínua
                  </h4>
                  <ul className="space-y-3 text-muted-foreground">
                    <li className="flex gap-2">
                      <span className="text-primary font-bold">•</span>
                      <span>
                        <strong>Arquitetura de Sistemas Distribuídos</strong> —
                        Design de integrações orientadas a APIs
                      </span>
                    </li>
                    <li className="flex gap-2">
                      <span className="text-primary font-bold">•</span>
                      <span>
                        <strong>Automação Empresarial</strong> — Fluxos de
                        trabalho avançados com RPA, Power Automate e Copilot
                        Studio
                      </span>
                    </li>
                    <li className="flex gap-2">
                      <span className="text-primary font-bold">•</span>
                      <span>
                        <strong>IA e Machine Learning</strong> — Agentes de IA,
                        integração com plataformas Microsoft e Azure
                      </span>
                    </li>
                    <li className="flex gap-2">
                      <span className="text-primary font-bold">•</span>
                      <span>
                        <strong>Plataformas de Dados Empresariais</strong> —
                        Databricks, integração de data lakes e pipelines
                      </span>
                    </li>
                    <li className="flex gap-2">
                      <span className="text-primary font-bold">•</span>
                      <span>
                        <strong>Governança e Escalabilidade</strong> — Padrões
                        de arquitetura para produção, segurança e auditabilidade
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* O Que Ofereço */}
      <section className="py-16">
        <div className="container max-w-3xl">
          <h3 className="text-3xl font-bold mb-12">O Que Posso Oferecer</h3>

          <div className="prose prose-invert max-w-none mb-12">
            <p className="text-lg text-muted-foreground leading-relaxed">
              Para empresas que buscam transformação digital genuína, oferecço
              muito mais que implementação técnica. Trago visão estratégica,
              profundo conhecimento técnico e a capacidade de orientar equipes
              na jornada de automação e inteligência artificial.
            </p>
          </div>

          <div className="grid gap-6 mb-12">
            {/* Card 1 */}
            <div className="border border-border/50 rounded-xl p-6 bg-card/50 backdrop-blur-sm hover:border-primary/50 transition-colors">
              <div className="flex items-start gap-4">
                <Zap className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                <div>
                  <h4 className="text-xl font-bold mb-3">
                    Arquitetura de Soluções Inteligentes
                  </h4>
                  <p className="text-muted-foreground">
                    Design completo de sistemas de automação e IA de nível
                    empresarial. Integração de agentes de IA, APIs e plataformas
                    como Microsoft Copilot, Power Platform e Azure para criar
                    soluções escaláveis e prontas para produção.
                  </p>
                </div>
              </div>
            </div>

            {/* Card 2 */}
            <div className="border border-border/50 rounded-xl p-6 bg-card/50 backdrop-blur-sm hover:border-primary/50 transition-colors">
              <div className="flex items-start gap-4">
                <Briefcase className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                <div>
                  <h4 className="text-xl font-bold mb-3">
                    Automação de Processos Empresariais
                  </h4>
                  <p className="text-muted-foreground">
                    Transformação de workflows manuais em fluxos inteligentes e
                    automatizados. Projetos com RPA, Power Automate, Copilot
                    Studio e orquestração multiagentes que reduzem custos
                    operacionais e aumentam produtividade.
                  </p>
                </div>
              </div>
            </div>

            {/* Card 3 */}
            <div className="border border-border/50 rounded-xl p-6 bg-card/50 backdrop-blur-sm hover:border-primary/50 transition-colors">
              <div className="flex items-start gap-4">
                <Shield className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                <div>
                  <h4 className="text-xl font-bold mb-3">
                    Integração e Governança
                  </h4>
                  <p className="text-muted-foreground">
                    Arquitetura de integrações seguras entre agentes de IA,
                    plataformas de automação e sistemas empresariais,
                    particularmente Databricks. Estabeleço padrões de
                    governança, tratamento de exceções, aprovações e
                    auditabilidade para operações confiáveis.
                  </p>
                </div>
              </div>
            </div>

            {/* Card 4 */}
            <div className="border border-border/50 rounded-xl p-6 bg-card/50 backdrop-blur-sm hover:border-primary/50 transition-colors">
              <div className="flex items-start gap-4">
                <Lightbulb className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                <div>
                  <h4 className="text-xl font-bold mb-3">
                    Liderança Técnica & Orientação
                  </h4>
                  <p className="text-muted-foreground">
                    Desenvolvimento de padrões de arquitetura, modelos
                    reutilizáveis e frameworks de automação de IA. Orientação
                    estratégica e mentoring de equipes na implementação de
                    soluções inovadoras e avaliação de tecnologias emergentes.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Tech Stack */}
      <section className="py-16 border-t border-border/50">
        <div className="container max-w-3xl">
          <h3 className="text-3xl font-bold mb-12">Stack Tecnológico</h3>

          <div className="prose prose-invert max-w-none mb-12">
            <p className="text-lg text-muted-foreground leading-relaxed">
              Trabalho com as tecnologias mais modernas e escaláveis do mercado,
              selecionadas especificamente para entregar soluções de alta
              performance, segurança e manutenibilidade.
            </p>
          </div>

          <div className="grid gap-6">
            {/* Frontend */}
            <div className="border border-border/50 rounded-xl p-6 bg-card/50 backdrop-blur-sm hover:border-primary/50 transition-colors">
              <h4 className="text-lg font-bold mb-4 flex items-center gap-2">
                <Code2 className="h-5 w-5 text-primary" />
                Frontend & UI
              </h4>
              <div className="flex flex-wrap gap-3">
                {["React", "TypeScript", "Tailwind CSS", "Vite"].map((tech) => (
                  <div
                    key={tech}
                    className="px-4 py-2 bg-primary/10 border border-primary/30 rounded-lg text-sm font-medium text-primary hover:bg-primary/20 transition-colors"
                  >
                    {tech}
                  </div>
                ))}
              </div>
              <p className="text-sm text-muted-foreground mt-4">
                Desenvolvimento de interfaces reativas, responsivas e acessíveis
                com foco em UX/UI.
              </p>
            </div>

            {/* Backend */}
            <div className="border border-border/50 rounded-xl p-6 bg-card/50 backdrop-blur-sm hover:border-primary/50 transition-colors">
              <h4 className="text-lg font-bold mb-4 flex items-center gap-2">
                <Zap className="h-5 w-5 text-primary" />
                Backend & API
              </h4>
              <div className="flex flex-wrap gap-3">
                {["Node.js", "TypeScript", "SQL", "REST APIs"].map((tech) => (
                  <div
                    key={tech}
                    className="px-4 py-2 bg-primary/10 border border-primary/30 rounded-lg text-sm font-medium text-primary hover:bg-primary/20 transition-colors"
                  >
                    {tech}
                  </div>
                ))}
              </div>
              <p className="text-sm text-muted-foreground mt-4">
                Arquitetura de servidores robustos, APIs escaláveis e integração
                com plataformas empresariais.
              </p>
            </div>

            {/* Database & Infrastructure */}
            <div className="border border-border/50 rounded-xl p-6 bg-card/50 backdrop-blur-sm hover:border-primary/50 transition-colors">
              <h4 className="text-lg font-bold mb-4 flex items-center gap-2">
                <Shield className="h-5 w-5 text-primary" />
                Banco de Dados & Cloud
              </h4>
              <div className="flex flex-wrap gap-3">
                {[
                  "Supabase",
                  "PostgreSQL",
                  "Real-time Database",
                  "Cloud Storage",
                ].map((tech) => (
                  <div
                    key={tech}
                    className="px-4 py-2 bg-primary/10 border border-primary/30 rounded-lg text-sm font-medium text-primary hover:bg-primary/20 transition-colors"
                  >
                    {tech}
                  </div>
                ))}
              </div>
              <p className="text-sm text-muted-foreground mt-4">
                Banco de dados relacional com PostgreSQL via Supabase,
                integração real-time e armazenamento seguro em cloud.
              </p>
            </div>

            {/* AI & Automation */}
            <div className="border border-border/50 rounded-xl p-6 bg-card/50 backdrop-blur-sm hover:border-primary/50 transition-colors">
              <h4 className="text-lg font-bold mb-4 flex items-center gap-2">
                <Lightbulb className="h-5 w-5 text-primary" />
                IA & Automação
              </h4>
              <div className="flex flex-wrap gap-3">
                {[
                  "Microsoft Copilot",
                  "Power Automate",
                  "Agentes de IA",
                  "Azure AI",
                  "Databricks",
                ].map((tech) => (
                  <div
                    key={tech}
                    className="px-4 py-2 bg-primary/10 border border-primary/30 rounded-lg text-sm font-medium text-primary hover:bg-primary/20 transition-colors"
                  >
                    {tech}
                  </div>
                ))}
              </div>
              <p className="text-sm text-muted-foreground mt-4">
                Integração de agentes de IA, automação de processos empresariais
                e orquestração de workflows inteligentes.
              </p>
            </div>

            {/* Development Tools */}
            <div className="border border-border/50 rounded-xl p-6 bg-card/50 backdrop-blur-sm hover:border-primary/50 transition-colors">
              <h4 className="text-lg font-bold mb-4 flex items-center gap-2">
                <Code2 className="h-5 w-5 text-primary" />
                Ferramentas & Metodologia
              </h4>
              <div className="flex flex-wrap gap-3">
                {[
                  "Git/GitHub",
                  "Amp CLI",
                  "Docker",
                  "Testing",
                  "CI/CD",
                ].map((tech) => (
                  <div
                    key={tech}
                    className="px-4 py-2 bg-primary/10 border border-primary/30 rounded-lg text-sm font-medium text-primary hover:bg-primary/20 transition-colors"
                  >
                    {tech}
                  </div>
                ))}
              </div>
              <p className="text-sm text-muted-foreground mt-4">
                Desenvolvimento ágil com controle de versão, testes automatizados
                e deployment contínuo.
              </p>
            </div>
          </div>

          {/* Proficiency Statement */}
          <div className="mt-12 p-6 border border-primary/50 rounded-xl bg-primary/5">
            <p className="text-muted-foreground leading-relaxed">
              <strong className="text-foreground">
                Expertise em Full Stack Development:
              </strong>{" "}
              Capacidade comprovada de projetar e implementar soluções completas
              do frontend até o backend, com foco em escalabilidade, segurança e
              performance. Domínio profundo em integração de plataformas, IA
              empresarial e automação de processos.
            </p>
          </div>
        </div>
      </section>

      {/* Diferenciais */}
      <section className="py-16 bg-card/50">
        <div className="container max-w-3xl">
          <h3 className="text-3xl font-bold mb-12">Por Que Trabalhar Comigo</h3>

          <div className="grid gap-4 mb-12">
            <div className="flex gap-4 p-4 border border-border/50 rounded-lg bg-background/50">
              <span className="text-2xl font-bold text-primary min-w-fit">
                ✓
              </span>
              <div>
                <h4 className="font-semibold mb-1">
                  Expertise Comprovada em Automação Empresarial
                </h4>
                <p className="text-muted-foreground text-sm">
                  Experiência prática na implementação de soluções inteligentes
                  orientadas por IA em ambientes de produção.
                </p>
              </div>
            </div>

            <div className="flex gap-4 p-4 border border-border/50 rounded-lg bg-background/50">
              <span className="text-2xl font-bold text-primary min-w-fit">
                ✓
              </span>
              <div>
                <h4 className="font-semibold mb-1">
                  Domínio Técnico das Principais Plataformas
                </h4>
                <p className="text-muted-foreground text-sm">
                  Microsoft Copilot, Power Platform, Copilot Studio, Power
                  Automate, Azure e Databricks — as tecnologias que empresas
                  modernas precisam.
                </p>
              </div>
            </div>

            <div className="flex gap-4 p-4 border border-border/50 rounded-lg bg-background/50">
              <span className="text-2xl font-bold text-primary min-w-fit">
                ✓
              </span>
              <div>
                <h4 className="font-semibold mb-1">
                  Visão Estratégica e Pensamento Arquitetural
                </h4>
                <p className="text-muted-foreground text-sm">
                  Não apenas codificar — projetar soluções escaláveis, seguras e
                  prontas para o futuro.
                </p>
              </div>
            </div>

            <div className="flex gap-4 p-4 border border-border/50 rounded-lg bg-background/50">
              <span className="text-2xl font-bold text-primary min-w-fit">
                ✓
              </span>
              <div>
                <h4 className="font-semibold mb-1">
                  Orientação de Equipes e Centros de Excelência
                </h4>
                <p className="text-muted-foreground text-sm">
                  Capacidade comprovada de mentorar equipes e estabelecer
                  frameworks de automação que geram valor contínuo.
                </p>
              </div>
            </div>

            <div className="flex gap-4 p-4 border border-border/50 rounded-lg bg-background/50">
              <span className="text-2xl font-bold text-primary min-w-fit">
                ✓
              </span>
              <div>
                <h4 className="font-semibold mb-1">
                  Foco em ROI e Negócio
                </h4>
                <p className="text-muted-foreground text-sm">
                  Toda solução é pensada em termos de impacto empresarial —
                  redução de custos, aumento de produtividade e receita.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Proposta de Valor */}
      <section className="py-16">
        <div className="container max-w-3xl">
          <div className="relative border border-primary/50 rounded-2xl p-8 bg-gradient-to-br from-primary/5 to-transparent overflow-hidden">
            <div className="absolute top-0 right-0 w-40 h-40 bg-primary/10 rounded-full blur-3xl -mr-20 -mt-20" />

            <div className="relative z-10">
              <h3 className="text-3xl font-bold mb-6">
                Pronto para Transformar Sua Empresa?
              </h3>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                Se sua organização busca um profissional que combine conhecimento
                técnico profundo, visão estratégica e a capacidade de orientar
                equipes na era da automação e IA, vamos conversar.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="glow-md gap-2" asChild>
                  <a href="#contato">Solicitar Conversa</a>
                </Button>
                <Button variant="outline" size="lg" asChild>
                  <a href="#contato">Fale Comigo</a>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer spacer */}
      <section className="py-12" />
    </div>
  );
};

export default AboutMe;
