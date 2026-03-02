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
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import WhatsAppFloat from "@/components/WhatsAppFloat";

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      <main>
         <HeroSection />
         <ServicesSection />
         <MethodologySection />
         <ProblemsResultsSection />
         <PortfolioSection />
         <AudienceSection />
         <WhyMeSection />
         <FAQSection />
         <VideoSection />
         <ContactSection />
       </main>
      <Footer />
      <WhatsAppFloat />
    </div>
  );
};

export default Index;
