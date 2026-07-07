'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import ScrollTriggerPlugin from 'gsap/dist/ScrollTrigger';

interface ScrollTriggerProps {
  children: React.ReactNode;
  className?: string;
}

export function ScrollTriggerSection({ children, className = '' }: ScrollTriggerProps) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTriggerPlugin);
    if (!ref.current) return;

    const cards = ref.current.querySelectorAll('[data-scroll-trigger]');
    if (cards.length === 0) return;

    cards.forEach((card, index) => {
      gsap.fromTo(
        card,
        {
          opacity: 0,
          y: 50,
        },
        {
          opacity: 1,
          y: 0,
          duration: 0.6,
          delay: index * 0.1,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: card,
            start: 'top 80%',
            toggleActions: 'play none none none',
          },
        }
      );
    });

    return () => {
      ScrollTriggerPlugin.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <div ref={ref} className={className}>
      {children}
    </div>
  );
}
