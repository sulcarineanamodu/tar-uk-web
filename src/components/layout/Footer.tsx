import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-navy text-white py-12 border-t-4 border-electric-blue">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div>
            <div className="text-2xl font-bold mb-4">TAR<span className="text-electric-blue">.</span></div>
            <p className="text-grey-400 text-sm">Premium appliance repair across Croydon, London & the M25.</p>
          </div>
          <div>
            <h4 className="font-bold mb-4">Services</h4>
            <ul className="space-y-2 text-sm text-grey-400">
              <li><Link href="/washing-machine-repair" className="hover:text-white">Washing Machine</Link></li>
              <li><Link href="/oven-repair" className="hover:text-white">Oven Repair</Link></li>
              <li><Link href="/dishwasher-repair" className="hover:text-white">Dishwasher</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold mb-4">Company</h4>
            <ul className="space-y-2 text-sm text-grey-400">
              <li><Link href="/about" className="hover:text-white">About</Link></li>
              <li><Link href="/contact" className="hover:text-white">Contact</Link></li>
              <li><Link href="/faq" className="hover:text-white">FAQ</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold mb-4">Contact</h4>
            <p className="text-sm text-grey-400 mb-2">
              <a href="tel:02036911116" className="hover:text-white">020 3691 1116</a>
            </p>
            <p className="text-sm text-grey-400">
              <a href="mailto:info@theappliancerepairs.co.uk" className="hover:text-white">info@theappliancerepairs.co.uk</a>
            </p>
            <p className="text-sm text-grey-400 mt-2">126 Brierley, Croydon CR0 9DR</p>
          </div>
        </div>
        <div className="border-t border-grey-700 pt-8 text-center text-sm text-grey-500">
          <p>© 2010–2026 Manna Utilities and Management Ltd t/a T A R The Appliance Repairs · Company No. 07547485</p>
        </div>
      </div>
    </footer>
  );
}
