import { ExternalLink } from "lucide-react";
import { motion } from "framer-motion";

interface BacklinksProps {
  postSlug: string;
}

const StrategicBacklinks = ({ postSlug }: BacklinksProps) => {
  // 15 backlinks estratégicos - Autoridade alta, tema relacionado (Brasil)
  const backlinks = [
    {
      text: "Automação de Processos RPA no Brasil",
      url: "https://www.tiespecialista.com.br/automacao-rpa",
      domain: "TI Especialista",
      category: "Pesquisa",
    },
    {
      text: "Inteligência Artificial e Machine Learning",
      url: "https://www.inovablog.com.br/ia-machine-learning",
      domain: "Inova Blog",
      category: "IA/ML",
    },
    {
      text: "Transformação Digital Empresarial",
      url: "https://www.consultoriabr.com.br/transformacao-digital",
      domain: "Consultoria BR",
      category: "Consultoria",
    },
    {
      text: "Cloud Computing e Infraestrutura",
      url: "https://www.cloudcomputing.com.br",
      domain: "Cloud Computing Brasil",
      category: "Cloud",
    },
    {
      text: "Otimização de Processos Empresariais",
      url: "https://www.bpmmagazine.com.br/processos",
      domain: "BPM Magazine",
      category: "Consultoria",
    },
    {
      text: "Automação Inteligente com IA",
      url: "https://www.tecnoblog.net/ia-automacao",
      domain: "Tecnoblog",
      category: "Tecnologia",
    },
    {
      text: "DevOps e Infraestrutura Ágil",
      url: "https://www.devops.com.br",
      domain: "DevOps Brasil",
      category: "DevOps",
    },
    {
      text: "Segurança de Dados e LGPD",
      url: "https://www.segurancadigital.com.br/lgpd",
      domain: "Segurança Digital",
      category: "Segurança",
    },
    {
      text: "Análise de Dados e Business Intelligence",
      url: "https://www.bigdatabrasil.com.br",
      domain: "Big Data Brasil",
      category: "BI/Analytics",
    },
    {
      text: "Inovação Tecnológica Digital",
      url: "https://www.inovacaobrasil.com.br",
      domain: "Inovação Brasil",
      category: "Inovação",
    },
    {
      text: "Eficiência Operacional com Tecnologia",
      url: "https://www.eficienciabr.com.br/tecnologia",
      domain: "Eficiência BR",
      category: "Consultoria",
    },
    {
      text: "Automação de Marketing e CRM",
      url: "https://www.marketingautomacao.com.br",
      domain: "Marketing Automação",
      category: "Marketing Tech",
    },
    {
      text: "Inteligência Artificial Generativa",
      url: "https://www.iabrasil.org.br/ia-generativa",
      domain: "IA Brasil",
      category: "IA",
    },
    {
      text: "Cultura Digital e Transformação",
      url: "https://www.culturadigital.org.br",
      domain: "Cultura Digital BR",
      category: "Consultoria",
    },
    {
      text: "Soluções Empresariais Escaláveis",
      url: "https://www.empresastecnologia.com.br",
      domain: "Empresas & Tecnologia",
      category: "Enterprise",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -10 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.4 },
    },
  };

  return (
    <section className="my-16 py-12 bg-gradient-to-r from-purple-50 via-white to-pink-50 rounded-2xl border-2 border-purple-200">
      <div className="max-w-4xl mx-auto px-6">
        <div className="mb-8">
          <h3 className="text-2xl font-display font-bold text-gray-900 mb-3">
            Recursos Relacionados e Referências
          </h3>
          <p className="text-gray-600 text-sm">
            Explore fontes especializadas e líderes de mercado sobre automação, tecnologia e IA
          </p>
        </div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "0px 0px -100px 0px" }}
          className="grid md:grid-cols-2 gap-3"
        >
          {backlinks.map((link, index) => (
            <motion.a
              key={index}
              variants={itemVariants}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center justify-between p-4 bg-white rounded-lg border-2 border-gray-200 hover:border-purple-400 hover:shadow-md transition-all duration-300"
            >
              <div className="flex-1">
                <div className="font-semibold text-gray-900 group-hover:text-purple-600 transition-colors line-clamp-2 text-sm">
                  {link.text}
                </div>
                <div className="flex items-center gap-2 mt-2">
                  <span className="text-xs font-medium px-2 py-1 bg-purple-100 text-purple-700 rounded-full">
                    {link.category}
                  </span>
                  <span className="text-xs text-gray-500">{link.domain}</span>
                </div>
              </div>
              <ExternalLink className="w-4 h-4 text-gray-400 group-hover:text-purple-600 transition-colors ml-3 flex-shrink-0" />
            </motion.a>
          ))}
        </motion.div>

        <div className="mt-8 p-4 bg-purple-100 rounded-lg border border-purple-300">
          <p className="text-sm text-purple-900">
            <span className="font-semibold">💡 Dica SEO:</span> Estes links para autoridades setoriais amplificam a relevância do seu conteúdo. Cada referência contribui para melhor posicionamento em buscas e estabelece sua expertise.
          </p>
        </div>
      </div>
    </section>
  );
};

export default StrategicBacklinks;
