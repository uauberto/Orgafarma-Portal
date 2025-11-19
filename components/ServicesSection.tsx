import React from 'react';
import { SERVICES } from '../constants';
import { Truck, ShieldCheck, Activity, Users, LucideIcon } from 'lucide-react';
import FadeInOnScroll from './FadeInOnScroll';

// Map string icon names to components
const iconMap: Record<string, LucideIcon> = {
  Truck,
  ShieldCheck,
  Activity,
  Users
};

const ServicesSection: React.FC = () => {
  return (
    <section id="services" className="py-24 bg-brand-surface">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
          <div className="max-w-2xl">
            <span className="text-brand-light font-bold tracking-widest uppercase text-sm mb-2 block">O que oferecemos</span>
            <h2 className="text-3xl md:text-4xl font-bold text-brand-dark leading-tight">
              Soluções integradas para o mercado farmacêutico
            </h2>
          </div>
          <div className="h-px bg-gray-300 flex-1 hidden md:block mb-6 ml-8"></div>
          <p className="text-gray-600 max-w-md text-sm md:text-base leading-relaxed">
            Nossa infraestrutura garante a integridade do produto desde a indústria até o ponto de venda.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {SERVICES.map((service, index) => {
            const Icon = iconMap[service.iconName] || Activity;
            return (
              <FadeInOnScroll key={index} delay={index * 100} className="h-full">
                <div 
                  className="group bg-white p-8 rounded-xl shadow-sm hover:shadow-2xl hover:shadow-brand-dark/10 transition-all duration-500 hover:-translate-y-2 border-b-4 border-transparent hover:border-brand-light h-full"
                >
                  <div className="w-14 h-14 bg-brand-surface rounded-lg flex items-center justify-center mb-6 group-hover:bg-brand-dark transition-colors duration-500">
                    <Icon className="w-7 h-7 text-brand-dark group-hover:text-brand-light transition-colors duration-500 group-hover:animate-bounce" />
                  </div>
                  <h3 className="text-lg font-bold text-brand-dark mb-3 group-hover:text-brand-light transition-colors">{service.title}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed">
                    {service.description}
                  </p>
                </div>
              </FadeInOnScroll>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;