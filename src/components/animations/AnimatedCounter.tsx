'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import ScrollTriggerPlugin from 'gsap/dist/ScrollTrigger';

gsap.registerPlugin(ScrollTriggerPlugin);

interface AnimatedCounterProps {
  value: number;
  suffix?: string;
  prefix?: string;
}

export function AnimatedCounter({ value, suffix = '', prefix = '' }: AnimatedCounterProps) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!ref.current) return;

    const obj = { value: 0 };
    gsap.to(obj, {
      value: value,
      duration: 2,
      ease: 'power2.out',
      scrollTrigger: {
        trigger: ref.current,
        start: 'top 80%',
        toggleActions: 'play none none none',
      },
      onUpdate: () => {
        if (ref.current) {
          ref.current.textContent = `${prefix}${Math.floor(obj.value)}${suffix}`;
        }
      },
    });
  }, [value, suffix, prefix]);

  return <div ref={ref}>0</div>;
}
