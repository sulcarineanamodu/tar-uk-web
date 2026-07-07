import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About TAR | The Appliance Repairs",
  description: "15+ years of premium appliance repair service in Croydon and Greater London.",
};

export default function About() {
  return (
    <div className="min-h-screen bg-white pt-32">
      <div className="max-w-4xl mx-auto px-4">
        <h1 className="text-5xl font-bold text-navy mb-8">About TAR</h1>
        <p className="text-xl text-grey-600 mb-12">15+ years of trusted appliance repair service in Croydon, London and beyond.</p>
        <div className="space-y-8">
          <div>
            <h2 className="text-3xl font-bold text-navy mb-4">Our Story</h2>
            <p className="text-lg text-grey-600">TAR has served Croydon and Greater London for 15+ years. We're built on expertise, honesty, and putting customers first.</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center py-12">
            <div><p className="text-4xl font-bold text-electric-blue">15+</p><p className="text-grey-600">Years</p></div>
            <div><p className="text-4xl font-bold text-electric-blue">5K+</p><p className="text-grey-600">Repairs</p></div>
            <div><p className="text-4xl font-bold text-electric-blue">4.7★</p><p className="text-grey-600">Rating</p></div>
            <div><p className="text-4xl font-bold text-electric-blue">100%</p><p className="text-grey-600">Certified</p></div>
          </div>
        </div>
      </div>
    </div>
  );
}
