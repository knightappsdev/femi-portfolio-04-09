import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Portfolio from './components/Portfolio';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Footer from './components/Footer';
import WhatsAppButton from './components/WhatsAppButton';
import ScrollToTop from './components/ScrollToTop';
import ExitIntentCapture from './components/ExitIntentCapture';
import VisitorTracking from './components/VisitorTracking';
import CookieConsent from './components/CookieConsent';

function App() {
  return (
    <div className="min-h-screen bg-dark-950 text-white">
      <Header />
      <Hero />
      <About />
      <Skills />
      <Portfolio />
      <Testimonials />
      <Contact />
      <Footer />
      <WhatsAppButton />
      <ScrollToTop />
      <ExitIntentCapture />
      <VisitorTracking />
      <CookieConsent />
    </div>
  );
}

export default App;
