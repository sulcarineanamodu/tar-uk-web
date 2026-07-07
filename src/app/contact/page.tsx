import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact TAR | The Appliance Repairs",
  description: "Get in touch with TAR. Phone, WhatsApp, email, or book online.",
};

export default function Contact() {
  return (
    <div className="min-h-screen bg-white pt-32">
      <div className="max-w-4xl mx-auto px-4">
        <h1 className="text-5xl font-bold text-navy mb-8">Contact Us</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="space-y-8">
            <div>
              <h3 className="font-bold text-navy mb-2">Phone</h3>
              <a href="tel:02036911116" className="text-electric-blue text-lg">020 3691 1116</a><br/>
              <a href="tel:02038071614" className="text-electric-blue text-lg">020 3807 1614</a>
            </div>
            <div>
              <h3 className="font-bold text-navy mb-2">WhatsApp</h3>
              <a href="https://wa.me/447386488103" target="_blank" rel="noopener noreferrer" className="text-electric-blue text-lg">
                07386 488103
              </a>
            </div>
            <div>
              <h3 className="font-bold text-navy mb-2">Email</h3>
              <a href="mailto:info@theappliancerepairs.co.uk" className="text-electric-blue">info@theappliancerepairs.co.uk</a>
            </div>
            <div>
              <h3 className="font-bold text-navy mb-2">Address</h3>
              <p className="text-grey-600">126 Brierley, New Addington<br/>Croydon, CR0 9DR</p>
            </div>
          </div>
          <div className="bg-electric-blue text-white rounded-lg p-8">
            <h2 className="text-2xl font-bold mb-4">Ready to Book?</h2>
            <p className="mb-6">Same-day or next-day appointments available.</p>
            <a href="/book" className="inline-block w-full text-center px-6 py-3 bg-white text-electric-blue rounded-lg font-bold hover:bg-grey-100">
              Book an Engineer →
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
