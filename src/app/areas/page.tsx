import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Areas Covered | TAR The Appliance Repairs",
  description: "Serving Croydon, London, Bromley, Dartford, Surrey and surrounding areas.",
};

export default function Areas() {
  const areas = ["Croydon", "South London", "North London", "East London", "West London", "Bromley", "Dartford", "Tonbridge", "Kent", "Surrey", "M25 Corridor"];

  return (
    <div className="min-h-screen bg-white pt-32">
      <div className="max-w-4xl mx-auto px-4">
        <h1 className="text-5xl font-bold text-navy mb-8">Areas Covered</h1>
        <p className="text-xl text-grey-600 mb-12">We cover Croydon, Greater London, and surrounding areas. Check your postcode below.</p>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {areas.map((area, i) => (
            <div key={i} className="bg-grey-100 rounded-lg p-6 text-center">
              <p className="font-semibold text-navy">{area}</p>
            </div>
          ))}
        </div>

        <div className="bg-electric-blue text-white rounded-lg p-8 text-center">
          <h2 className="text-2xl font-bold mb-4">Can't see your area?</h2>
          <p className="mb-4">Enter your postcode to check if we serve you.</p>
          <input type="text" placeholder="Enter postcode..." className="px-4 py-2 rounded-lg text-navy mb-4 w-full md:w-1/2" />
        </div>
      </div>
    </div>
  );
}
