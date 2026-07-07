'use client';

import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import gsap from 'gsap';
import ScrollTriggerPlugin from 'gsap/dist/ScrollTrigger';

export function PricingSectionAnimated() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTriggerPlugin);
    if (!containerRef.current) return;

    const cards = containerRef.current.querySelectorAll('[data-price-card]');
    cards.forEach((card, index) => {
      gsap.fromTo(
        card,
        { opacity: 0, scale: 0.9, y: 40 },
        {
          opacity: 1,
          scale: 1,
          y: 0,
          duration: 0.6,
          delay: index * 0.15,
          ease: 'back.out',
          scrollTrigger: {
            trigger: card,
            start: 'top 85%',
            toggleActions: 'play none none none',
          },
        }
      );
    });
  }, []);

  return (
    <section className="py-20 md:py-32 bg-gradient-to-br from-navy to-navy-dark text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Transparent Pricing</h2>
          <p className="text-xl text-grey-200">Fixed labour. No surprises. Call-out included.</p>
        </div>

        <div ref={containerRef} className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-3xl mx-auto">
          {[
            { price: '£78', title: 'Most Appliances', items: ['Washing Machines', 'Ovens', 'Cookers', 'Tumble Dryers', 'Microwaves'] },
            { price: '£90', title: 'Premium Appliances', items: ['Dishwashers', 'Fridges', 'Freezers', 'Washer Dryers', 'Complex Repairs'] },
          ].map((card, i) => (
            <motion.div
              key={i}
              data-price-card
              whileHover={{ y: -8, boxShadow: '0 20px 50px rgba(37, 99, 235, 0.3)' }}
              className={`rounded-2xl p-8 ${
                i === 1 ? 'bg-electric-blue ring-2 ring-safety-green' : 'bg-white/10 backdrop-blur-sm'
              }`}
            >
              <h3 className="text-2xl font-bold mb-2">{card.title}</h3>
              <p className="text-5xl font-bold mb-6">{card.price}</p>
              <ul className="space-y-3">
                {card.items.map((item, j) => (
                  <li key={j} className="flex items-center gap-3">
                    <span className="w-2 h-2 bg-safety-green rounded-full" />
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
