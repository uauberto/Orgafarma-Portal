import React, { useRef, ReactNode } from 'react';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver.ts';

interface FadeInOnScrollProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  threshold?: number;
}

const FadeInOnScroll: React.FC<FadeInOnScrollProps> = ({ 
  children, 
  className = '', 
  delay = 0,
  threshold = 0.1
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const isVisible = useIntersectionObserver(ref, { threshold });

  return (
    <div
      ref={ref}
      className={`transition-all duration-1000 ease-out transform ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
      } ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
};

export default FadeInOnScroll;