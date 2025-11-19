import React, { useState, useEffect } from 'react';
import Header from './components/Header.tsx';
import Hero from './components/Hero.tsx';
import ServicesSection from './components/ServicesSection.tsx';
import StatsSection from './components/StatsSection.tsx';
import AboutSection from './components/AboutSection.tsx';
import Footer from './components/Footer.tsx';
import PrivacyPolicy from './components/PrivacyPolicy.tsx';
import TermsOfUse from './components/TermsOfUse.tsx';
import BackToTop from './components/BackToTop.tsx';
import { REGISTER_URL } from './constants.ts';

const App: React.FC = () => {
  const [currentView, setCurrentView] = useState('home');

  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash;
      if (hash === '#privacy') {
        setCurrentView('privacy');
      } else if (hash === '#terms') {
        setCurrentView('terms');
      } else {
        setCurrentView('home');
      }
    };

    window.addEventListener('hashchange', handleHashChange);
    handleHashChange();

    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const renderContent = () => {
    switch (currentView) {
      case 'privacy':
        return <PrivacyPolicy />;
      case 'terms':
        return <TermsOfUse />;
      default:
        return (
          <>
            <Hero />
            <StatsSection />
            <ServicesSection />
            <AboutSection />
            
            <section className="py-24 bg-white container mx-auto px-6">
              <div className="bg-gradient-to-br from-brand-light to-brand-dark rounded-3xl p-12 md:p-24 text-center text-white relative overflow-hidden shadow-2xl shadow-brand-dark/20 group">
                <div className="absolute top-0 left-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-5"></div>
                <div className="absolute -top-24 -left-24 w-64 h-64 bg-white opacity-10 rounded-full blur-3xl group-hover:scale-150 transition-transform duration-1000"></div>
                <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-brand-dark opacity-50 rounded-full blur-3xl group-hover:scale-110 transition-transform duration-1000"></div>
                
                <div className="relative z-10 max-w-3xl mx-auto">
                  <h2 className="text-3xl md:text-5xl font-bold mb-6 tracking-tight">Parceria que gera valor</h2>
                  <p className="text-blue-50 text-lg mb-10 font-light leading-relaxed">
                    Junte-se a rede de farmácias que mais cresce no país. Garantia de procedência, agilidade e atendimento humanizado.
                  </p>
                  <a 
                    href={REGISTER_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block bg-white text-brand-dark px-10 py-4 rounded-full font-bold hover:bg-brand-surface transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-1 uppercase tracking-widest text-sm"
                  >
                    Quero Ser Cliente
                  </a>
                </div>
              </div>
            </section>
          </>
        );
    }
  };

  return (
    <div className="font-sans text-slate-900 bg-white selection:bg-brand-light/30 selection:text-brand-dark">
      <Header />
      <main>
        {renderContent()}
      </main>
      <Footer />
      <BackToTop />
    </div>
  );
};

export default App;