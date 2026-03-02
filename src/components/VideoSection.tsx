export default function VideoSection() {
  const videos = [
    {
      id: "Es05YuumB2o",
      title: "Como entender se vale a pena automatizar meu processo de Marketing?",
      subtitle: "",
      description: "Quando vale a pena investir na automatização do seu processo de Marketing? Antes de apostar em um software, é preciso considerar alguns pontos. Assista o vídeo do CEO da NoTopo, Danilo Alba, e entenda melhor sobre o tema!",
    },
    {
      id: "DyRAGeEFeeY",
      title: "A Importância do Sistema de Informação para a Gestão de Empresas",
      subtitle: "",
      description: "Um sistema de informação bem estruturado é fundamental para a gestão eficiente de qualquer empresa. Descobra como a integração de dados, automação de processos e relatórios em tempo real transformam a tomada de decisão, reduzem custos operacionais e posicionam seu negócio para crescimento sustentável.",
    },
    {
      id: "IvMdA471dPw",
      title: "Como Automatizar Qualquer Planilha Excel com Python",
      subtitle: "",
      description: "Transforme suas rotinas manuais em Excel em soluções automatizadas e inteligentes usando Python. Aprenda como eliminar erros de digitação, economizar horas de trabalho e criar fluxos de dados que funcionam automaticamente, sem precisar tocar no Excel novamente.",
    },
  ];

  return (
    <section className="relative py-20 px-4 sm:px-6 lg:px-8 bg-background/50">
      <div className="container mx-auto max-w-6xl">
        {/* Header */}
        <div className="mb-16 text-center">
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
            Conteúdos <span className="text-primary">Relacionados</span> e Educacionais
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Acesse recursos valiosos sobre automação, sistemas de informação e transformação digital para empresas.
          </p>
        </div>

        {/* Videos Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
          {videos.map((video, index) => (
            <div
              key={index}
              className="group relative rounded-2xl overflow-hidden border border-border/50 bg-card/30 backdrop-blur-sm hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/10"
            >
              {/* Video Container */}
              <div className="relative w-full overflow-hidden bg-black aspect-video">
                <iframe
                  width="100%"
                  height="100%"
                  src={`https://www.youtube.com/embed/${video.id}?rel=0`}
                  title={video.title}
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="absolute inset-0"
                />
              </div>

              {/* Content */}
              <div className="p-6 sm:p-8">
                {video.subtitle && (
                  <div className="mb-2">
                    <p className="text-primary text-sm font-semibold uppercase tracking-wide">
                      {video.subtitle}
                    </p>
                  </div>
                )}
                <h3 className="text-xl sm:text-2xl font-bold mb-3 text-foreground group-hover:text-primary transition-colors">
                  {video.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {video.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-16 text-center">
          <p className="text-muted-foreground mb-6">
            Quer um vídeo case exclusivo de seu projeto?
          </p>
          <a
            href="https://wa.me/5532991075164"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-primary text-primary-foreground font-semibold hover:bg-primary/90 transition-colors glow-md"
          >
            Solicitar Demonstração
          </a>
        </div>
      </div>
    </section>
  );
}
