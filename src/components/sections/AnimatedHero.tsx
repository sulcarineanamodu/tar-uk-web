'use client';

import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import gsap from 'gsap';
import { Canvas } from '@react-three/fiber';
import { Points, PointMaterial } from '@react-three/drei';
import * as THREE from 'three';

// Particle field background
function ParticleField() {
  const pointsRef = useRef<THREE.Points>(null);
  const count = 3000;
  
  useEffect(() => {
    if (!pointsRef.current) return;
    
    const positions = new Float32Array(count * 3);
    for (let i = 0; i < count * 3; i += 3) {
      positions[i] = (Math.random() - 0.5) * 2000;
      positions[i + 1] = (Math.random() - 0.5) * 2000;
      positions[i + 2] = (Math.random() - 0.5) * 2000;
    }

    const geometry = new THREE.BufferGeometry();
    geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    
    if (pointsRef.current.geometry) {
      pointsRef.current.geometry = geometry;
    }
  }, []);

  return (
    <Points ref={pointsRef} limit={count}>
      <PointMaterial transparent color="#2563EB" size={2} sizeAttenuation={true} />
    </Points>
  );
}

export function AnimatedHero() {
  const headlineRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const ctasRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // GSAP SplitText animation on headline
    if (headlineRef.current) {
      const words = headlineRef.current.querySelectorAll('.word');
      gsap.to(words, {
        opacity: 1,
        y: 0,
        duration: 0.6,
        stagger: 0.1,
        delay: 0.3,
        ease: 'power3.out',
      });
    }

    // Fade up on subtitle
    if (subtitleRef.current) {
      gsap.to(subtitleRef.current, {
        opacity: 1,
        y: 0,
        duration: 0.8,
        delay: 0.8,
        ease: 'power3.out',
      });
    }

    // Fade up on CTAs
    if (ctasRef.current) {
      const btns = ctasRef.current.querySelectorAll('a');
      gsap.to(btns, {
        opacity: 1,
        y: 0,
        duration: 0.6,
        stagger: 0.15,
        delay: 1.2,
        ease: 'power3.out',
      });
    }
  }, []);

  return (
    <div className="relative h-screen flex flex-col items-center justify-center overflow-hidden">
      {/* Three.js Particle Background */}
      <div className="absolute inset-0 z-0">
        <Canvas camera={{ position: [0, 0, 500] }}>
          <ParticleField />
        </Canvas>
      </div>

      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-navy-dark via-navy to-charcoal opacity-80 z-10" />

      {/* Content */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
        className="relative z-20 max-w-5xl mx-auto px-4 text-center"
      >
        <h1
          ref={headlineRef}
          className="text-6xl md:text-7xl font-bold text-white mb-6 leading-tight"
        >
          {['Same-Day', 'Appliance', 'Repairs,', 'Engineered', 'for', 'Modern', 'Homes'].map((word, i) => (
            <span key={i} className="word inline-block opacity-0 translate-y-8 mx-2">
              {word}
            </span>
          ))}
        </h1>

        <p
          ref={subtitleRef}
          className="text-xl md:text-2xl text-grey-200 mb-12 opacity-0 translate-y-8 max-w-3xl mx-auto"
        >
          Fixed labour pricing (£78–£90), 12-month guarantee, trusted by 100+ customers.
        </p>

        <div ref={ctasRef} className="flex flex-wrap gap-4 justify-center">
          {[
            { text: 'Book an Engineer →', href: '/book', variant: 'primary' },
            { text: 'Call 020 3691 1116', href: 'tel:02036911116', variant: 'secondary' },
          ].map((cta, i) => (
            <motion.a
              key={i}
              href={cta.href}
              whileHover={{ scale: 1.05, boxShadow: '0 20px 40px rgba(37, 99, 235, 0.3)' }}
              whileTap={{ scale: 0.95 }}
              className={`px-8 py-4 rounded-lg font-bold text-lg transition-all opacity-0 translate-y-8 ${
                cta.variant === 'primary'
                  ? 'bg-electric-blue text-white'
                  : 'border-2 border-white text-white hover:bg-white/10'
              }`}
            >
              {cta.text}
            </motion.a>
          ))}
        </div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        animate={{ y: [0, 12, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20"
      >
        <div className="text-white text-sm mb-2">Scroll to explore</div>
        <svg className="w-6 h-6 text-white mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </motion.div>
    </div>
  );
}
