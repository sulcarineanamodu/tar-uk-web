import { localSEOPages } from "@/lib/local-seo";
import { notFound } from "next/navigation";
import type { Metadata } from "next";

interface Props {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const page = localSEOPages.find(p => p.slug === slug);
  if (!page) return {};

  return {
    title: page.title,
    description: page.description,
  };
}

export async function generateStaticParams() {
  return localSEOPages.map(page => ({
    slug: page.slug,
  }));
}

export default async function AreaPage({ params }: Props) {
  const { slug } = await params;
  const page = localSEOPages.find(p => p.slug === slug);

  if (!page) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Hero */}
      <section className="bg-gradient-to-br from-navy-dark via-navy to-charcoal text-white pt-32 pb-16">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">{page.heroHeadline}</h1>
          <p className="text-xl text-grey-200 mb-8">{page.description}</p>
          <div className="flex flex-wrap gap-4 justify-center">
            <a href="/book" className="px-8 py-3 bg-electric-blue text-white rounded-lg font-bold hover:shadow-lg">Book Now →</a>
            <a href="tel:02036911116" className="px-8 py-3 border-2 border-white text-white rounded-lg font-bold hover:bg-white/10">Call 020 3691 1116</a>
          </div>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-16 bg-grey-50">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-navy mb-6">About Our Service in {page.city}</h2>
          <p className="text-lg text-grey-600">{page.intro}</p>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-navy mb-8">Why Choose TAR in {page.city}</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {page.whyChoose.map((reason, i) => (
              <div key={i} className="flex gap-4">
                <div className="flex-shrink-0 w-6 h-6 bg-electric-blue text-white rounded-full flex items-center justify-center font-bold text-sm">✓</div>
                <p className="text-grey-700">{reason}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-grey-50 text-center">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-navy mb-6">Ready to Book in {page.city}?</h2>
          <a href="/book" className="inline-block px-8 py-4 bg-electric-blue text-white rounded-lg font-bold hover:shadow-lg">
            Book an Engineer →
          </a>
        </div>
      </section>
    </div>
  );
}
