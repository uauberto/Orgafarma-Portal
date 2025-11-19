import { useEffect, useState, RefObject } from 'react';

export const useIntersectionObserver = (
  ref: RefObject<HTMLElement | null>, 
  options: IntersectionObserverInit = { threshold: 0.2 }
) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (!ref.current) return;

    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setIsVisible(true);
        observer.disconnect();
      }
    }, options);

    observer.observe(ref.current);

    return () => {
      observer.disconnect();
    };
  }, [ref, options.threshold, options.root, options.rootMargin]);

  return isVisible;
};