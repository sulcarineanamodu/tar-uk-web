import { services } from "@/lib/services";
import { notFound } from "next/navigation";
import type { Metadata } from "next";

interface Props {
  params: Promise<{
    service: string;
  }>;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { service: serviceSlug } = await params;
  const service = Object.values(services).find(s => s.slug === serviceSlug);
  if (!service) return {};

  return {
    title: `${service.title} | TAR The Appliance Repairs`,
    description: service.description,
  };
}

export async function generateStaticParams() {
  return Object.values(services).map(service => ({
    service: service.slug,
  }));
}

export default async function ServicePage({ params }: Props) {
  const { service: serviceSlug } = await params;
  const service = Object.values(services).find(s => s.slug === serviceSlug);

  if (!service) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Hero */}
      <section className="bg-gradient-to-br from-navy-dark via-navy to-charcoal text-white pt-32 pb-16">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">{service.title}</h1>
          <p className="text-xl text-grey-200 mb-8">{service.description}</p>
          <div className="flex flex-wrap gap-4 justify-center">
            <a href="/book" className="px-8 py-3 bg-electric-blue text-white rounded-lg font-bold hover:shadow-lg">
              Book Now →
            </a>
            <a href="tel:02036911116" className="px-8 py-3 border-2 border-white text-white rounded-lg font-bold hover:bg-white/10">
              Call 020 3691 1116
            </a>
          </div>
        </div>
      </section>

      {/* What is this service */}
      <section className="py-16 bg-grey-50">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-navy mb-6">What is {service.name} Repair?</h2>
          <p className="text-lg text-grey-600 mb-8">{service.whatIs}</p>
        </div>
      </section>

      {/* Signs you need repair */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-navy mb-8">Signs You Need {service.name} Repair</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {service.signs.map((sign, i) => (
              <div key={i} className="flex gap-4">
                <div className="flex-shrink-0 w-6 h-6 bg-electric-blue text-white rounded-full flex items-center justify-center font-bold text-sm">
                  ✓
                </div>
                <p className="text-grey-700">{sign}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How we repair it */}
      <section className="py-16 bg-grey-50">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-navy mb-8">Our {service.name} Repair Process</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {service.process.map((step, i) => (
              <div key={i} className="text-center">
                <div className="inline-block w-12 h-12 bg-electric-blue text-white rounded-full flex items-center justify-center font-bold text-lg mb-4">
                  {i + 1}
                </div>
                <h3 className="font-bold text-navy mb-2">{step.title}</h3>
                <p className="text-sm text-grey-600">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Brands */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-navy mb-8">Brands We Repair</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {service.brands.map((brand, i) => (
              <div key={i} className="bg-grey-100 rounded-lg p-4 text-center">
                <p className="font-semibold text-navy">{brand}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 bg-grey-50">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-navy mb-8">{service.name} Repair FAQ</h2>
          <div className="space-y-6">
            {service.faqItems.map((item, i) => (
              <div key={i} className="bg-white rounded-lg p-6 border border-grey-200">
                <h3 className="font-bold text-navy mb-3">{item.question}</h3>
                <p className="text-grey-600">{item.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="py-16 bg-navy text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Transparent Pricing</h2>
          <div className="inline-block bg-white/10 rounded-lg p-8">
            <p className="text-grey-200 mb-2">Fixed Labour for {service.name} Repair</p>
            <p className="text-5xl font-bold mb-4">£78-£90</p>
            <p className="text-grey-300">Call-out included • No hidden fees • Parts quoted separately</p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-navy mb-6">Ready to Book Your {service.name} Repair?</h2>
          <p className="text-lg text-grey-600 mb-8">Same-day or next-day appointments available</p>
          <div className="flex flex-wrap gap-4 justify-center">
            <a href="/book" className="px-8 py-4 bg-electric-blue text-white rounded-lg font-bold hover:shadow-lg">
              Book an Engineer →
            </a>
            <a href="tel:02036911116" className="px-8 py-4 border-2 border-electric-blue text-electric-blue rounded-lg font-bold hover:bg-electric-blue hover:text-white">
              Call 020 3691 1116
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
