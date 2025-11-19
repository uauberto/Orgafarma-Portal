import React, { useEffect, useState, useRef } from 'react';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';

const stats = [
  { label: 'Clientes Ativos', value: '25k+' },
  { label: 'SKUs Disponíveis', value: '20k' },
  { label: 'Anos de Mercado', value: '+55' }, 
  { label: 'Estados', value: '4' },
];

const AnimatedCounter = ({ value }: { value: string }) => {
  const [count, setCount] = useState(0);
  const elementRef = useRef<HTMLDivElement>(null);
  const isVisible = useIntersectionObserver(elementRef, { threshold: 0.3 });

  const numberMatch = value.match(/\d+/);
  const targetNumber = numberMatch ? parseInt(numberMatch[0], 10) : 0;
  
  const parts = value.split(/\d+/);
  const prefix = parts[0];
  const suffix = parts[1];

  useEffect(() => {
    if (!isVisible || targetNumber === 0) return;

    let startTime: number | null = null;
    const duration = 2000; 

    const animate = (currentTime: number) => {
      if (!startTime) startTime = currentTime;
      const progress = Math.min((currentTime - startTime) / duration, 1);
      
      const easeOut = 1 - Math.pow(1 - progress, 4);
      
      setCount(Math.floor(easeOut * targetNumber));

      if (progress < 1) {
        requestAnimationFrame(animate);
      } else {
        setCount(targetNumber); 
      }
    };

    requestAnimationFrame(animate);
  }, [isVisible, targetNumber]);

  return (
    <div ref={elementRef} className="text-5xl md:text-6xl font-bold text-white mb-2 tracking-tight group-hover:scale-110 transition-transform duration-500 inline-block">
      <span>{prefix}</span>
      <span>{count}</span>
      <span>{suffix}</span>
    </div>
  );
};

const StatsSection: React.FC = () => {
  return (
    <section className="py-24 bg-brand-dark relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden">
        <div className="absolute -top-24 -right-24 w-96 h-96 bg-brand-light rounded-full opacity-5 blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-[#051a30] to-transparent opacity-50"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-12 text-center divide-x divide-brand-light/10">
          {stats.map((stat, index) => (
            <div key={index} className="p-4 group">
              <AnimatedCounter value={stat.value} />
              <div className="text-brand-light font-bold text-xs uppercase tracking-[0.2em] mt-4">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;