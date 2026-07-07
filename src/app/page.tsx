import { Metadata } from "next";
import dynamic from "next/dynamic";

const AnimatedHero = dynamic(() => import("@/components/sections/AnimatedHero").then(m => ({ default: m.AnimatedHero })), { ssr: false });
const ServicesGridAnimated = dynamic(() => import("@/components/sections/ServicesGridAnimated").then(m => ({ default: m.ServicesGridAnimated })), { ssr: false });
const PricingSectionAnimated = dynamic(() => import("@/components/sections/PricingSectionAnimated").then(m => ({ default: m.PricingSectionAnimated })), { ssr: false });

export const metadata: Metadata = {
  title: "Premium Appliance Repairs | TAR The Appliance Repairs",
  description:
    "Same-day appliance repair across Croydon, London & M25. Fixed labour pricing (£78-£90), 12-month guarantee, certified engineers. Trusted by 100+ customers.",
};

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <AnimatedHero />
      <ServicesGridAnimated />
      <PricingSectionAnimated />
    </main>
  );
}
