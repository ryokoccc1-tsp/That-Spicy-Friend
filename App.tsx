import { Routes, Route, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import Navbar from './components/Navbar';
import MouseAmbient from './components/MouseAmbient';
import Hero from './components/Hero';
import SocialProof from './components/SocialProof';
import Features from './components/Features';
import ProductShowcase from './components/ProductShowcase';
import Benefits from './components/Benefits';
import Testimonials from './components/Testimonials';
import Pricing from './components/Pricing';
import FAQ from './components/FAQ';
import CTA from './components/CTA';
import Footer from './components/Footer';
import ScrollReveal from './components/ScrollReveal';
import { LanguageProvider } from './context/LanguageContext';
import KindPage from './pages/KindPage';
import ClearPage from './pages/ClearPage';
import SpicyPage from './pages/SpicyPage';

function Home() {
  return (
    <>
      <Navbar />
      <Hero />

      <ScrollReveal>
        <SocialProof />
      </ScrollReveal>

      <ScrollReveal delay={100}>
        <Features />
      </ScrollReveal>

      <ScrollReveal delay={150}>
        <ProductShowcase />
      </ScrollReveal>

      <ScrollReveal delay={100}>
        <Benefits />
      </ScrollReveal>

      <ScrollReveal delay={150}>
        <Testimonials />
      </ScrollReveal>

      <ScrollReveal delay={100}>
        <Pricing />
      </ScrollReveal>

      <ScrollReveal delay={150}>
        <FAQ />
      </ScrollReveal>

      <ScrollReveal>
        <CTA />
      </ScrollReveal>

      <Footer />
    </>
  );
}

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

export default function App() {
  return (
    <LanguageProvider>
      <div className="min-h-screen bg-cream text-ink font-sans selection:bg-gold/20">
        <MouseAmbient />
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/kind" element={<KindPage />} />
          <Route path="/clear" element={<ClearPage />} />
          <Route path="/spicy" element={<SpicyPage />} />
        </Routes>
      </div>
    </LanguageProvider>
  );
}
