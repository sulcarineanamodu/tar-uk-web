'use client';

import { motion } from 'framer-motion';
import { ReactNode } from 'react';

interface AnimatedButtonProps {
  children: ReactNode;
  href?: string;
  onClick?: () => void;
  variant?: 'primary' | 'secondary';
  className?: string;
}

export function AnimatedButton({
  children,
  href,
  onClick,
  variant = 'primary',
  className = '',
}: AnimatedButtonProps) {
  const baseClasses = `px-8 py-4 rounded-lg font-bold text-lg transition-all ${className}`;
  
  const variantClasses = {
    primary: 'bg-electric-blue text-white hover:shadow-lg',
    secondary: 'border-2 border-white text-white hover:bg-white/10',
  };

  const Component = href ? 'a' : 'button';

  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      transition={{ type: 'spring', stiffness: 400, damping: 10 }}
    >
      <Component
        href={href}
        onClick={onClick}
        className={`${baseClasses} ${variantClasses[variant]} inline-block`}
      >
        {children}
      </Component>
    </motion.div>
  );
}
