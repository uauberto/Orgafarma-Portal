import React from 'react';
import { ABOUT_TEXT, CORPORATE_IDENTITY, HISTORY_DATA } from '../constants.ts';
import { Target, Eye, Scale, LucideIcon } from 'lucide-react';
import FadeInOnScroll from './FadeInOnScroll.tsx';

const iconMap: Record<string, LucideIcon> = {
  Target,
  Eye,
  Scale
};

const AboutSection: React.FC = () => {
  return (
    <section id="about" className="py-24 bg-white overflow-hidden">
      <div className="container mx-auto px-6">
        
        <div className="flex flex-col lg:flex-row gap-16 items-center mb-24">
          <div className="lg:w-1/2 space-y-6">
            <div className="inline-block px-4 py-1 bg-brand-light/10 rounded-full mb-2">
               <span className="text-brand-dark font-bold tracking-widest uppercase text-xs">Institucional</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-brand-dark leading-tight">
              {ABOUT_TEXT.title}
            </h2>
            <p className="text-gray-600 text-lg leading-relaxed font-light text-justify">
              {ABOUT_TEXT.content}
            </p>
          </div>
          <div className="lg:w-1/2 relative">
            <div className="absolute inset-0 bg-brand-light rounded-2xl transform rotate-3 opacity-20"></div>
            <FadeInOnScroll delay={200}>
              <img 
                src="https://images.unsplash.com/photo-1576602976047-174e57a47881?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80" 
                alt="Estoque Farmacêutico" 
                className="relative rounded-2xl shadow-xl w-full h-80 object-cover"
              />
            </FadeInOnScroll>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-32">
          {CORPORATE_IDENTITY.map((item, index) => {
            const Icon = iconMap[item.iconName] || Target;
            return (
              <FadeInOnScroll key={index} delay={index * 150} className="h-full">
                <div 
                  className="bg-brand-surface p-8 rounded-xl border-t-4 border-brand-light hover:shadow-lg transition-shadow duration-300 group h-full"
                >
                  <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center mb-6 shadow-sm text-brand-dark group-hover:text-brand-light group-hover:scale-110 transition-all">
                    <Icon size={24} />
                  </div>
                  <h3 className="text-xl font-bold text-brand-dark mb-4">{item.title}</h3>
                  <p className="text-sm text-gray-600 leading-relaxed">{item.content}</p>
                </div>
              </FadeInOnScroll>
            );
          })}
        </div>

        <div id="history" className="relative">
           <div className="text-center mb-16">
              <span className="text-brand-light font-bold tracking-widest uppercase text-sm">Linha do Tempo</span>
              <h2 className="text-3xl md:text-4xl font-bold text-brand-dark mt-2">Nossa História</h2>
           </div>

           <div className="relative max-w-5xl mx-auto">
             <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-gray-200 -translate-x-1/2 md:translate-x-0"></div>

             {HISTORY_DATA.map((item, index) => (
               <div key={index} className={`relative mb-12 flex flex-col md:flex-row items-center ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}>
                 
                 <div className="flex-1 hidden md:block"></div>
                 
                 <div className="absolute left-4 md:left-1/2 w-6 h-6 bg-brand-light rounded-full border-4 border-white shadow-md z-10 -translate-x-1/2 md:translate-x-1/2"></div>

                 <div className="flex-1 w-full pl-12 md:pl-0 md:px-10">
                   <FadeInOnScroll delay={index * 100} className={index % 2 === 0 ? 'md:text-left' : 'md:text-right'}>
                     <div className={`bg-white p-6 rounded-xl shadow-md border border-gray-100 hover:border-brand-light/50 transition-colors relative`}>
                        <span className="text-4xl font-black text-brand-light/20 absolute top-4 right-4 md:right-auto md:left-4 pointer-events-none">
                          {item.year}
                        </span>
                        <h3 className="text-xl font-bold text-brand-dark mb-2 relative z-10">{item.year} - {item.title}</h3>
                        <p className="text-gray-600 text-sm relative z-10">
                          {item.description}
                        </p>
                     </div>
                   </FadeInOnScroll>
                 </div>

               </div>
             ))}
           </div>
        </div>

      </div>
    </section>
  );
};

export default AboutSection;