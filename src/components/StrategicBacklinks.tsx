import { ExternalLink } from "lucide-react";
import { motion } from "framer-motion";

interface BacklinksProps {
  postSlug: string;
}

const StrategicBacklinks = ({ postSlug }: BacklinksProps) => {
  // 15 backlinks estratégicos - Autoridade alta, tema relacionado (Brasil)
  const backlinks = [
    {
      text: "Inteligência Artificial no Brasil",
      url: "https://tecnoblog.net/tema/inteligencia-artificial/",
      domain: "Tecnoblog",
      category: "IA/ML",
    },
    {
      text: "Transformação Digital Empresarial",
      url: "https://blog.equinix.com/blog/2025/05/07/the-digital-pulse-of-latin-america-brazils-rise-as-a-global-tech-innovator/",
      domain: "Equinix Blog",
      category: "Consultoria",
    },
    {
      text: "Segurança e Privacidade Digital",
      url: "https://tecnoblog.net/tema/seguranca-e-privacidade/",
      domain: "Tecnoblog",
      category: "Segurança",
    },
    {
      text: "Software e Desenvolvimento",
      url: "https://tecnoblog.net/tema/software/",
      domain: "Tecnoblog",
      category: "Desenvolvimento",
    },
    {
      text: "Cloud Computing e Infraestrutura",
      url: "https://www.sap.com/products/technology-platform.html",
      domain: "SAP",
      category: "Cloud",
    },
    {
      text: "Negócios e Mercado de Tecnologia",
      url: "https://tecnoblog.net/tema/negocios-e-mercado/",
      domain: "Tecnoblog",
      category: "Tecnologia",
    },
    {
      text: "Soluções Enterprise e Escalabilidade",
      url: "https://www.ibm.com/cloud/what-is-digital-transformation",
      domain: "IBM Cloud",
      category: "Enterprise",
    },
    {
      text: "Automação e Processos Inteligentes",
      url: "https://www.uipath.com/pt-br/automation/rpa",
      domain: "UiPath",
      category: "Automação",
    },
    {
      text: "Análise de Dados e Business Intelligence",
      url: "https://www.microsoft.com/pt-br/dynamics365/business-insights",
      domain: "Microsoft",
      category: "BI/Analytics",
    },
    {
      text: "Inovação Tecnológica",
      url: "https://www.accenture.com/br-pt/insights/technology",
      domain: "Accenture",
      category: "Inovação",
    },
    {
      text: "Eficiência Operacional Empresarial",
      url: "https://www.oracle.com/br/erp/what-is-digital-transformation/",
      domain: "Oracle",
      category: "Consultoria",
    },
    {
      text: "Marketing Automation e CRM",
      url: "https://www.salesforce.com/br/products/crm/",
      domain: "Salesforce",
      category: "Marketing Tech",
    },
    {
      text: "Inteligência Artificial Generativa",
      url: "https://www.google.com/intl/pt-BR/cloud/solutions/ai/",
      domain: "Google Cloud",
      category: "IA",
    },
    {
      text: "Cultura Digital e Transformação",
      url: "https://www2.deloitte.com/br/pt/pages/technology/solutions/transformacao-digital.html",
      domain: "Deloitte",
      category: "Consultoria",
    },
    {
      text: "Tecnologia e Internet",
      url: "https://tecnoblog.net/tema/internet/",
      domain: "Tecnoblog",
      category: "Tecnologia",
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
