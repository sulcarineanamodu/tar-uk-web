'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { Waves, UtensilsCrossed, Droplets, Refrigerator, Wind } from 'lucide-react';
import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import ScrollTriggerPlugin from 'gsap/dist/ScrollTrigger';

export function ServicesGridAnimated() {
  const services = [
    { icon: Waves, name: 'Washing Machine', description: 'Expert repairs for all washing machine issues', href: '/washing-machine-repair', color: 'from-blue-light to-electric-blue' },
    { icon: UtensilsCrossed, name: 'Oven Repair', description: 'Fast and reliable oven repair services', href: '/oven-repair', color: 'from-orange-400 to-orange-500' },
    { icon: UtensilsCrossed, name: 'Cooker Repair', description: 'Professional cooker and hob repairs', href: '/cooker-repair', color: 'from-red-400 to-red-500' },
    { icon: Droplets, name: 'Dishwasher', description: 'Comprehensive dishwasher repair', href: '/dishwasher-repair', color: 'from-cyan-400 to-cyan-500' },
    { icon: Refrigerator, name: 'Fridge & Freezer', description: 'Keep your food fresh with our repairs', href: '/fridge-freezer-repair', color: 'from-blue-400 to-blue-500' },
    { icon: Wind, name: 'Tumble Dryer', description: 'Efficient dryer repair and maintenance', href: '/tumble-dryer-repair', color: 'from-purple-400 to-purple-500' },
  ];

  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTriggerPlugin);
    if (!containerRef.current) return;

    const cards = containerRef.current.querySelectorAll('[data-service-card]');
    cards.forEach((card, index) => {
      gsap.fromTo(
        card,
        { opacity: 0, y: 60 },
        {
          opacity: 1,
          y: 0,
          duration: 0.6,
          delay: index * 0.1,
          ease: 'power3.out',
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
    <section className="py-20 md:py-32 bg-grey-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-navy mb-4">Everything We Repair</h2>
          <p className="text-xl text-grey-600">From washing machines to fridges, we fix it all</p>
        </div>

        <div ref={containerRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={service.name}
                data-service-card
                whileHover={{ y: -8, rotateZ: 2 }}
                whileTap={{ scale: 0.98 }}
                className="group relative"
              >
                <Link href={service.href}>
                  <div className="bg-white rounded-2xl p-8 shadow-card hover:shadow-xl transition-all duration-300 h-full">
                    <motion.div
                      whileHover={{ scale: 1.1, rotate: 10 }}
                      className={`inline-flex p-4 rounded-xl bg-gradient-to-br ${service.color} text-white mb-6`}
                    >
                      <Icon size={32} />
                    </motion.div>

                    <h3 className="text-xl font-bold text-navy mb-3 group-hover:text-electric-blue transition-colors">
                      {service.name}
                    </h3>
                    <p className="text-grey-600 mb-6">{service.description}</p>

                    <motion.div
                      initial={{ opacity: 0, x: -10 }}
                      whileHover={{ opacity: 1, x: 0 }}
                      className="inline-flex items-center text-electric-blue font-bold"
                    >
                      Learn More →
                    </motion.div>
                  </div>
                </Link>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
