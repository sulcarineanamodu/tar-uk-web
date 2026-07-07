'use client';

import { ReactNode } from 'react';
import { AnimatePresence } from 'framer-motion';

export function AnimationProviders({ children }: { children: ReactNode }) {
  return (
    <AnimatePresence mode="wait">
      {children}
    </AnimatePresence>
  );
}
