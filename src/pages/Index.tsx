import { Navigation } from "../components/Navigation";
import { HeroSection } from "../components/HeroSection";
import { ProcessSection } from "../components/ProcessSection";
import { OrderFormSection } from "../components/OrderFormSection";
import { ServicesSection } from "../components/ServicesSection";
import { ComparisonSection } from "../components/ComparisonSection";
import { PricingSection } from "../components/PricingSection";
import { SampleReportSection } from "../components/SampleReportSection";
import { TestimonialsSection } from "../components/TestimonialsSection";
import { EducationalSection } from "../components/EducationalSection";
import { AboutSection } from "../components/AboutSection";
import { BlogSection } from "../components/BlogSection";
import { FAQSection } from "../components/FAQSection";
import { CTASection } from "../components/CTASection";
import { ContactSection } from "../components/ContactSection";
import { Footer } from "../components/Footer";

const Index = () => {
  return (
    <main className="min-h-screen">
      <Navigation />
      <HeroSection />
      <ProcessSection />
      <ComparisonSection />
      <OrderFormSection />
      <ServicesSection />
      <PricingSection />
      <SampleReportSection />
      <TestimonialsSection />
      <EducationalSection />
      <AboutSection />
      <BlogSection />
      <FAQSection />
      <CTASection />
      <ContactSection />
      <Footer />
    </main>
  );
};

export default Index;
