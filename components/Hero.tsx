import React, { useState, useEffect } from 'react';
import { User } from 'lucide-react';
import { PORTAL_URL, PEDIDO_ELETRONICO_URL } from '../constants.ts';
import FadeInOnScroll from './FadeInOnScroll.tsx';

const Hero: React.FC = () => {
  const [imageLoaded, setImageLoaded] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setImageLoaded(true), 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section id="home" className="relative w-full min-h-screen flex items-center justify-center overflow-hidden pt-20 bg-brand-dark">
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1587854692152-cbe660dbde88?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80" 
          alt="Distribuição Farmacêutica" 
          onLoad={() => setImageLoaded(true)}
          className={`w-full h-full object-cover transition-opacity duration-1000 ease-out ${imageLoaded ? 'opacity-40' : 'opacity-0'}`}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-brand-dark via-brand-dark/90 to-brand-dark/70" />
        
        <div className="absolute top-20 right-0 w-96 h-96 bg-brand-light/10 rounded-full blur-3xl animate-pulse" style={{ animationDuration: '4s' }}></div>
        <div className="absolute bottom-0 left-20 w-64 h-64 bg-brand-light/5 rounded-full blur-3xl animate-pulse" style={{ animationDuration: '6s' }}></div>
      </div>

      <div className="container mx-auto px-6 relative z-10 flex flex-col items-center justify-center text-center mt-10">
        
        <FadeInOnScroll className="text-white space-y-8 max-w-4xl flex flex-col items-center">
          
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight tracking-tight">
            Solidez e Credibilidade na <br/>
            <span className="text-brand-light mt-2 inline-block">Distribuição Farmacêutica</span>
          </h1>
          
          <p className="text-lg md:text-xl text-gray-300 max-w-3xl font-light leading-relaxed">
            Há mais de 50 anos, unimos tradição, tecnologia avançada e um portfólio diversificado para abastecer farmácias e drogarias com máxima eficiência e segurança.
          </p>

          <div className="flex flex-col sm:flex-row gap-5 pt-8 w-full sm:w-auto">
            <a 
              href={PORTAL_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 bg-transparent hover:bg-white/10 text-white border border-white/30 rounded-lg font-semibold backdrop-blur-sm transition-all flex items-center justify-center uppercase text-sm tracking-widest group cursor-pointer w-full sm:w-auto"
            >
              <User className="mr-2 w-4 h-4 opacity-70 group-hover:opacity-100" />
              Área do Cliente
            </a>

            <a 
              href={PEDIDO_ELETRONICO_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="group px-10 py-4 bg-brand-light hover:bg-white hover:text-brand-dark text-brand-dark rounded-lg font-bold shadow-xl shadow-brand-light/20 transition-all flex items-center justify-center uppercase text-sm tracking-widest cursor-pointer w-full sm:w-auto relative overflow-hidden"
            >
              <span className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300"></span>
              <span className="relative flex items-center">
                Pedido Eletrônico
              </span>
            </a>
          </div>
        </FadeInOnScroll>

      </div>
    </section>
  );
};

export default Hero;