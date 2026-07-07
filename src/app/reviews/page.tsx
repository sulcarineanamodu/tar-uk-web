import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Customer Reviews | TAR The Appliance Repairs",
  description: "4.7★ rated by 100+ customers. Read what our clients say.",
};

export default function Reviews() {
  const reviews = [
    { name: "John M.", rating: 5, text: "Excellent service. Quick, professional, and fixed the issue same-day.", appliance: "Washing Machine" },
    { name: "Sarah T.", rating: 5, text: "Great value for money. Engineers explained everything clearly.", appliance: "Oven" },
    { name: "Michael P.", rating: 5, text: "Best repair company I've used. No surprises, fair pricing.", appliance: "Fridge" },
    { name: "Emma D.", rating: 5, text: "Called in the morning, engineer came same afternoon. Very impressed.", appliance: "Dishwasher" },
  ];

  return (
    <div className="min-h-screen bg-white pt-32">
      <div className="max-w-4xl mx-auto px-4">
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold text-navy mb-4">Customer Reviews</h1>
          <p className="text-3xl font-bold text-electric-blue">4.7★</p>
          <p className="text-grey-600">from 100+ customers</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {reviews.map((review, i) => (
            <div key={i} className="bg-grey-50 rounded-lg p-6 border border-grey-200">
              <div className="flex justify-between items-start mb-3">
                <p className="font-bold text-navy">{review.name}</p>
                <span className="text-sm text-electric-blue">★★★★★</span>
              </div>
              <p className="text-grey-600 mb-3 italic">"{review.text}"</p>
              <p className="text-sm text-grey-500">{review.appliance}</p>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a href="https://share.google/oBWuBBN0YkVPmYRnE" target="_blank" rel="noopener noreferrer" className="px-8 py-3 border-2 border-electric-blue text-electric-blue rounded-lg font-bold hover:bg-electric-blue hover:text-white">
            Read All Reviews on Google →
          </a>
        </div>
      </div>
    </div>
  );
}
