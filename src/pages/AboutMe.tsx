import { ArrowLeft, Award, Briefcase, Code2, Zap, Shield, Lightbulb, Sparkles, Target, Rocket, Users, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import roqueImage from "@/img/roque-rafael-proenca-consultor.png";
import BlogNavbar from "@/components/BlogNavbar";
import BlogSection from "@/components/BlogSection";
import { useEffect } from "react";

const AboutMe = () => {
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-[#fafafa]">
      <BlogNavbar />

      {/* Hero Section - Impactante */}
      <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden bg-white">
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none opacity-20">
          <div className="absolute -top-[10%] -left-[10%] w-[40%] h-[40%] bg-blue-400 rounded-full blur-[120px]" />
          <div className="absolute top-[20%] -right-[10%] w-[30%] h-[50%] bg-purple-400 rounded-full blur-[120px]" />
        </div>
        
        <div className="container relative z-10 px-4 mx-auto">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight text-slate-900 mb-8 leading-tight">
              Transformando Ideias em <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">Sistemas Lucrativos</span>
            </h1>
            <p className="text-xl md:text-2xl text-slate-600 leading-relaxed max-w-2xl mx-auto mb-10">
              Arquiteto de Soluções & Consultor Tecnológico com foco em resultados reais e impacto no negócio.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button size="lg" className="h-14 px-8 text-lg rounded-full shadow-lg hover:shadow-xl transition-all gap-2" asChild>
                <a href="https://wa.me/5532991075164" target="_blank" rel="noopener noreferrer">
                  Vamos construir o futuro juntos? <Rocket className="w-5 h-5" />
                </a>
              </Button>
              <Button variant="ghost" size="lg" className="h-14 px-8 text-lg rounded-full" onClick={() => navigate("/")}>
                Ver Projetos
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Quem Sou Eu - O Profissional */}
      <section className="py-24 bg-white border-y border-slate-100">
        <div className="container px-4 mx-auto max-w-6xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="order-2 lg:order-1 relative group">
              <div className="absolute -inset-4 bg-gradient-to-tr from-blue-500/20 to-purple-500/20 rounded-[2rem] blur-2xl opacity-50 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="relative rounded-[2rem] overflow-hidden shadow-2xl bg-slate-50 border-4 border-white aspect-[4/5] lg:aspect-auto lg:h-[600px]">
                <img
                  src={roqueImage}
                  alt="Roque Rafael Proença"
                  className="w-full h-full object-cover object-top hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/40 via-transparent to-transparent" />
                <div className="absolute bottom-8 left-8 right-8 p-6 bg-white/90 backdrop-blur-md rounded-2xl border border-white/20 shadow-xl">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-blue-600 flex items-center justify-center text-white font-bold text-xl">
                      RP
                    </div>
                    <div>
                      <h4 className="font-bold text-slate-900 text-lg">Roque Rafael Proença</h4>
                      <p className="text-sm text-slate-600">Arquiteto de Soluções & Estrategista Digital</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="order-1 lg:order-2">
              <div className="flex items-center gap-2 text-blue-600 font-bold uppercase tracking-wider text-sm mb-4">
                <Users className="w-4 h-4" />
                <span>Quem Sou Eu</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-8 leading-tight">
                Mais de 15 anos de vivência no ecossistema digital.
              </h2>
              <div className="space-y-6 text-lg text-slate-600 leading-relaxed">
                <p>
                  Sou <strong>Roque Rafael Proença</strong>, um Arquiteto de Soluções e Consultor Tecnológico apaixonado por transformar ideias brutas em sistemas <strong>robustos, escaláveis e, acima de tudo, lucrativos</strong>.
                </p>
                <p>
                  Formado em ADS pela Estácio de Sá, especializei-me em construir pontes entre as necessidades reais de negócio e as infinitas possibilidades tecnológicas. Minha trajetória é marcada pela busca constante de excelência técnica e pela capacidade de transformar desafios complexos em soluções elegantes.
                </p>
                <div className="grid grid-cols-2 gap-8 pt-6 border-t border-slate-100">
                  <div>
                    <h5 className="font-bold text-slate-900 text-2xl mb-1">15+</h5>
                    <p className="text-sm text-slate-500">Anos de Experiência</p>
                  </div>
                  <div>
                    <h5 className="font-bold text-slate-900 text-2xl mb-1">200+</h5>
                    <p className="text-sm text-slate-500">Projetos Entregues</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Minha Filosofia - Destaque */}
      <section className="py-24 bg-slate-900 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-blue-600/10 blur-[150px]" />
        <div className="container px-4 mx-auto relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <Lightbulb className="w-12 h-12 text-blue-400 mx-auto mb-8" />
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-8">Minha Filosofia</h2>
            <blockquote className="text-2xl md:text-3xl lg:text-4xl font-medium text-slate-300 italic leading-snug">
              "Acredito que a tecnologia não deve ser um custo, mas um motor de crescimento. Meu trabalho não termina na entrega do código; ele começa na compreensão do seu desafio e só se completa quando vejo o impacto positivo nos seus resultados."
            </blockquote>
          </div>
        </div>
      </section>

      {/* O Que Eu Faço - Serviços */}
      <section className="py-24 bg-white">
        <div className="container px-4 mx-auto max-w-6xl">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="flex items-center justify-center gap-2 text-blue-600 font-bold uppercase tracking-wider text-sm mb-4">
              <Zap className="w-4 h-4" />
              <span>Expertise</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">O que eu faço e como posso te ajudar</h2>
            <p className="text-lg text-slate-600">
              Soluções ponta a ponta para acelerar sua transformação digital e garantir competitividade no mercado.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: <Target className="w-8 h-8 text-blue-600" />,
                title: "Consultoria Estratégica",
                desc: "Diagnóstico 360º da sua estrutura tecnológica para identificar gargalos e oportunidades de otimização."
              },
              {
                icon: <Code2 className="w-8 h-8 text-purple-600" />,
                title: "Desenvolvimento Customizado",
                desc: "Construção de MVPs ágeis até sistemas corporativos complexos, com foco em escalabilidade e segurança."
              },
              {
                icon: <Lightbulb className="w-8 h-8 text-amber-500" />,
                title: "Automação & IA",
                desc: "Implementação de inteligência artificial e agentes inteligentes para otimizar processos repetitivos e reduzir custos."
              },
              {
                icon: <Shield className="w-8 h-8 text-emerald-600" />,
                title: "Arquitetura Cloud",
                desc: "Infraestrutura segura e resiliente (AWS/Azure) para suportar o crescimento exponencial do seu negócio."
              },
              {
                icon: <Users className="w-8 h-8 text-indigo-600" />,
                title: "Mentoria Técnica",
                desc: "Capacitação de times de tecnologia e liderança técnica para garantir a evolução contínua dos produtos."
              },
              {
                icon: <Zap className="w-8 h-8 text-rose-500" />,
                title: "Governança de Dados",
                desc: "Estruturação de dados e integrações complexas para gerar insights acionáveis e decisões inteligentes."
              }
            ].map((service, index) => (
              <div key={index} className="group p-8 rounded-3xl bg-slate-50 border border-slate-100 hover:border-blue-200 hover:bg-white hover:shadow-xl transition-all duration-300">
                <div className="mb-6 p-4 w-fit rounded-2xl bg-white shadow-sm group-hover:scale-110 transition-transform duration-300">
                  {service.icon}
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-4">{service.title}</h3>
                <p className="text-slate-600 leading-relaxed">{service.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Por Que Me Escolher - Diferenciais */}
      <section className="py-24 bg-slate-50">
        <div className="container px-4 mx-auto max-w-6xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="flex items-center gap-2 text-blue-600 font-bold uppercase tracking-wider text-sm mb-4">
                <Award className="w-4 h-4" />
                <span>Diferenciais</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-8 leading-tight">
                Por que confiar o seu negócio à minha consultoria?
              </h2>
              
              <div className="space-y-6">
                {[
                  { title: "Experiência Real", desc: "Mais de 200 projetos entregues com sucesso em diversos setores do mercado." },
                  { title: "Foco total em ROI", desc: "Cada decisão técnica é pautada pelo retorno direto sobre o investimento da sua empresa." },
                  { title: "Agilidade Comprovada", desc: "Metodologias ágeis que garantem entregas rápidas (MVP pronto entre 18 a 40 dias)." },
                  { title: "Parceria Estratégica", desc: "Não sou apenas um fornecedor; atuo como um parceiro comprometido com o seu sucesso." }
                ].map((item, index) => (
                  <div key={index} className="flex gap-4 p-6 rounded-2xl bg-white border border-slate-200 shadow-sm hover:shadow-md transition-shadow">
                    <div className="flex-shrink-0 w-8 h-8 rounded-full bg-blue-50 text-blue-600 flex items-center justify-center font-bold">
                      {index + 1}
                    </div>
                    <div>
                      <h4 className="font-bold text-slate-900 mb-1">{item.title}</h4>
                      <p className="text-slate-600 text-sm">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative">
              <div className="bg-slate-900 rounded-[2.5rem] p-10 text-white shadow-2xl relative z-10">
                <div className="absolute top-0 right-0 p-8">
                  <Sparkles className="w-12 h-12 text-blue-500 opacity-20" />
                </div>
                <h3 className="text-2xl font-bold mb-6">Expertise Técnica</h3>
                <div className="space-y-8">
                  {[
                    { label: "Frontend", techs: ["React", "TypeScript", "Tailwind CSS", "Next.js"] },
                    { label: "Backend & API", techs: ["Node.js", "Python", "Go", "REST/GraphQL"] },
                    { label: "Cloud & Data", techs: ["AWS", "Azure", "Supabase", "PostgreSQL"] },
                    { label: "AI & Automation", techs: ["OpenAI", "LangChain", "n8n", "Make"] }
                  ].map((stack, index) => (
                    <div key={index}>
                      <div className="text-slate-400 text-xs font-bold uppercase tracking-widest mb-3">{stack.label}</div>
                      <div className="flex flex-wrap gap-2">
                        {stack.techs.map((t) => (
                          <span key={t} className="px-3 py-1 bg-slate-800 border border-slate-700 rounded-full text-xs font-medium text-slate-300">
                            {t}
                          </span>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
                <div className="mt-12 pt-8 border-t border-slate-800 flex items-center gap-4">
                  <div className="p-3 bg-blue-600 rounded-xl">
                    <Shield className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <div className="text-sm font-bold">Garantia de Qualidade</div>
                    <div className="text-xs text-slate-400">Código limpo, seguro e escalável.</div>
                  </div>
                </div>
              </div>
              <div className="absolute -bottom-6 -right-6 w-full h-full bg-blue-600 rounded-[2.5rem] -z-10 opacity-10" />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Final - Construir o Futuro */}
      <section className="py-24 bg-white relative">
        <div className="container px-4 mx-auto max-w-4xl text-center">
          <div className="bg-gradient-to-br from-blue-600 to-indigo-700 rounded-[3rem] p-12 lg:p-20 text-white shadow-2xl relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
              <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
                <path d="M0 0 L100 0 L100 100 Z" fill="white" />
              </svg>
            </div>
            
            <div className="relative z-10">
              <h2 className="text-3xl md:text-5xl font-bold mb-8">Vamos construir o futuro juntos?</h2>
              <p className="text-xl text-blue-100 mb-12 leading-relaxed">
                Se você busca excelência técnica, transparência e resultados tangíveis, estou pronto para elevar sua empresa ao próximo nível.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
                <Button size="lg" variant="secondary" className="h-16 px-10 text-xl font-bold rounded-full shadow-xl hover:scale-105 transition-transform" asChild>
                  <a href="https://wa.me/5532991075164" target="_blank" rel="noopener noreferrer">
                    Falar com o Consultor
                  </a>
                </Button>
                <div className="text-sm text-blue-200">
                  Resposta rápida via WhatsApp
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <BlogSection />

      {/* Footer spacer */}
      <section className="py-12" />
    </div>
  );
};

export default AboutMe;
