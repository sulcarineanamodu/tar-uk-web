import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Premium Appliance Repairs | TAR The Appliance Repairs",
  description:
    "Same-day appliance repair across Croydon, London & M25. Fixed labour pricing (£78-£90), 12-month guarantee, certified engineers. Trusted by 100+ customers.",
};

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <section className="min-h-screen bg-gradient-to-br from-navy-dark via-navy to-charcoal pt-32 pb-20 flex items-center justify-center">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h1 className="text-6xl font-bold text-white mb-6">
            Same-Day Appliance Repairs, Engineered for Modern Homes
          </h1>
          <p className="text-xl text-grey-200 mb-8">
            Premium appliance repair across Croydon, London and the M25 — fixed labour pricing, expert engineers, 12-month guarantee.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <a href="/book" className="px-8 py-4 bg-electric-blue text-white rounded-lg font-bold hover:shadow-lg transition-all">
              Book an Engineer →
            </a>
            <a href="tel:02036911116" className="px-8 py-4 border-2 border-white text-white rounded-lg font-bold hover:bg-white/10 transition-all">
              Call 020 3691 1116
            </a>
          </div>
        </div>
      </section>

      <section className="py-20 bg-grey-100">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-navy mb-4">Our Services</h2>
          <p className="text-lg text-grey-500 mb-12">
            We repair all major appliances with fixed transparent pricing.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {["Washing Machine", "Oven", "Dishwasher", "Fridge & Freezer", "Tumble Dryer", "Cooker"].map((service) => (
              <div key={service} className="bg-white rounded-lg shadow p-8">
                <h3 className="text-xl font-bold text-navy mb-2">{service}</h3>
                <p className="text-grey-500">Expert repairs with fixed pricing</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-navy text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-4">Transparent Pricing</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
            <div className="bg-white/10 rounded-lg p-8">
              <p className="text-3xl font-bold text-electric-blue mb-2">£78</p>
              <p className="text-grey-200">Most Appliances</p>
            </div>
            <div className="bg-white/10 rounded-lg p-8">
              <p className="text-3xl font-bold text-electric-blue mb-2">£90</p>
              <p className="text-grey-200">Dishwashers & Fridges</p>
            </div>
          </div>
          <p className="text-grey-300 mb-8">Call-out included • No hidden fees • 12-month guarantee</p>
          <a href="/book" className="inline-block px-8 py-3 bg-electric-blue text-white rounded-lg font-bold hover:shadow-lg transition-all">
            Book Your Repair
          </a>
        </div>
      </section>
    </div>
  );
}
