'use client';

import dynamic from 'next/dynamic';

const AnimatedHero = dynamic(
  () => import('./AnimatedHero').then((m) => ({ default: m.AnimatedHero })),
  { ssr: false }
);

const ServicesGridAnimated = dynamic(
  () => import('./ServicesGridAnimated').then((m) => ({ default: m.ServicesGridAnimated })),
  { ssr: false }
);

const PricingSectionAnimated = dynamic(
  () => import('./PricingSectionAnimated').then((m) => ({ default: m.PricingSectionAnimated })),
  { ssr: false }
);

export function HomePageSections() {
  return (
    <>
      <AnimatedHero />
      <ServicesGridAnimated />
      <PricingSectionAnimated />
    </>
  );
}
