import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Pricing | TAR The Appliance Repairs",
  description: "Transparent, fixed labour pricing. £78-£90. No hidden fees.",
};

export default function Pricing() {
  return (
    <div className="min-h-screen bg-white pt-32">
      <div className="max-w-4xl mx-auto px-4">
        <h1 className="text-5xl font-bold text-navy mb-8">Transparent Pricing</h1>
        <p className="text-xl text-grey-600 mb-12">Fixed labour. No surprises. Call-out included. Parts quoted separately.</p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-grey-50 rounded-lg p-8">
            <p className="text-2xl font-bold text-electric-blue mb-2">£78</p>
            <p className="text-grey-600 mb-4">Most Appliances</p>
            <ul className="space-y-2 text-sm text-grey-600">
              <li>✓ Washing Machines</li>
              <li>✓ Ovens</li>
              <li>✓ Cookers</li>
              <li>✓ Tumble Dryers</li>
              <li>✓ Microwaves</li>
            </ul>
          </div>
          <div className="bg-gradient-to-br from-electric-blue to-blue-light text-white rounded-lg p-8">
            <p className="text-2xl font-bold mb-2">£90</p>
            <p className="mb-4">Premium Appliances</p>
            <ul className="space-y-2 text-sm">
              <li>✓ Dishwashers</li>
              <li>✓ Fridges</li>
              <li>✓ Freezers</li>
              <li>✓ Washer Dryers</li>
              <li>✓ Complex Repairs</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
