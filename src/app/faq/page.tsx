import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "FAQ | TAR The Appliance Repairs",
  description: "Frequently asked questions about appliance repair, pricing, and service.",
};

export default function FAQ() {
  const faqs = [
    { q: "How much does repair cost?", a: "£78 for most appliances, £90 for dishwashers, fridges and freezers. Call-out included." },
    { q: "How quickly can you come?", a: "Same-day or next-day appointments available most days." },
    { q: "Do you charge extra for return visits?", a: "No. If parts are needed, there's no extra labour charge for the return visit." },
    { q: "What's the guarantee?", a: "12-month labour guarantee on all repairs with fitted parts." },
    { q: "Do you repair all brands?", a: "Yes, we repair all major brands including Bosch, Samsung, Hotpoint, Indesit, AEG, and many more." },
    { q: "Are your engineers qualified?", a: "Yes, all fully trained, certified, and insured." },
  ];

  return (
    <div className="min-h-screen bg-white pt-32">
      <div className="max-w-4xl mx-auto px-4">
        <h1 className="text-5xl font-bold text-navy mb-12">Frequently Asked Questions</h1>
        <div className="space-y-6">
          {faqs.map((item, i) => (
            <div key={i} className="border-b border-grey-200 pb-6">
              <h3 className="font-bold text-navy mb-2 text-lg">{item.q}</h3>
              <p className="text-grey-600">{item.a}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
