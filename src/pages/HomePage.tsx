import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import HeroSection from '@/components/features/HeroSection';
import ServicesSection from '@/components/features/ServicesSection';
import ProductsSection from '@/components/features/ProductsSection';
import PaymentSection from '@/components/features/PaymentSection';
import ContactSection from '@/components/features/ContactSection';
import { LanguageProvider } from '@/contexts/LanguageContext';

export default function HomePage() {
  return (
    <LanguageProvider>
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-1">
          <HeroSection />
          <ServicesSection />
          <ProductsSection />
          <PaymentSection />
          <ContactSection />
        </main>
        <Footer />
      </div>
    </LanguageProvider>
  );
}
