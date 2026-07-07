import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Brands We Repair | TAR The Appliance Repairs",
  description: "We repair all major appliance brands. Bosch, Samsung, Hotpoint, Indesit, AEG, and more.",
};

export default function Brands() {
  const brands = ["AEG", "Ariston", "Baumatic", "Beko", "Bosch", "Britannia", "Candy", "Electrolux", "Hotpoint", "Indesit", "Lamona", "Neff", "Rangemaster", "Samsung", "Siemens", "Zanussi"];

  return (
    <div className="min-h-screen bg-white pt-32">
      <div className="max-w-4xl mx-auto px-4">
        <h1 className="text-5xl font-bold text-navy mb-8">Brands We Repair</h1>
        <p className="text-xl text-grey-600 mb-12">We repair all major appliance brands. If your brand isn't listed, call us — we likely repair it.</p>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {brands.map((brand, i) => (
            <div key={i} className="bg-grey-100 rounded-lg p-6 text-center">
              <p className="font-semibold text-navy">{brand}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
