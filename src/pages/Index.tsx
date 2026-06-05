import { useSEO } from "@/hooks/useSEO";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import ServicesSection from "@/components/ServicesSection";
import MethodologySection from "@/components/MethodologySection";
import ProblemsResultsSection from "@/components/ProblemsResultsSection";
import PortfolioSection from "@/components/PortfolioSection";
import AudienceSection from "@/components/AudienceSection";
import WhyMeSection from "@/components/WhyMeSection";
import FAQSection from "@/components/FAQSection";
import VideoSection from "@/components/VideoSection";
import BlogSection from "@/components/BlogSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import WhatsAppFloat from "@/components/WhatsAppFloat";
import AutoClubProDetailedSection from "@/components/AutoClubProDetailedSection";

const Index = () => {
  useSEO({
    title: "TechNexos Digital | Engenharia de Software e Estratégia de Performance",
    description: "Especialista em desenvolvimento de sistemas, automação, tráfego pago e SEO técnico. Transformamos tecnologia em lucro real para seu negócio.",
    keywords: [
      "desenvolvimento de sistemas",
      "gestão de tráfego pago",
      "automação comercial",
      "SEO técnico",
      "consultoria de tecnologia",
      "TechNexos Digital",
      "criação de sistemas",
      "marketing de performance"
    ],
    ogTitle: "TechNexos Digital | Tecnologia & Performance",
    ogDescription: "Soluções tecnológicas sob medida para escalar seu faturamento.",
    ogUrl: "https://www.technexos.com.br",
    canonicalUrl: "https://www.technexos.com.br"
  });

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      <main>
         <HeroSection />
         <ServicesSection />
         <MethodologySection />
         <ProblemsResultsSection />
         <PortfolioSection />
         <AutoClubProDetailedSection />
         <AudienceSection />
         <WhyMeSection />
         <FAQSection />
         <VideoSection />
         <BlogSection />
         <ContactSection />
       </main>
      <Footer />
      <WhatsAppFloat />
    </div>
  );
};

export default Index;
