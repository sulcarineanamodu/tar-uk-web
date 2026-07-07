import { Metadata } from "next";
import { HomePageSections } from "@/components/sections/HomePageSections";

export const metadata: Metadata = {
  title: "Premium Appliance Repairs | TAR The Appliance Repairs",
  description:
    "Same-day appliance repair across Croydon, London & M25. Fixed labour pricing (£78-£90), 12-month guarantee, certified engineers. Trusted by 100+ customers.",
};

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <HomePageSections />
    </main>
  );
}
