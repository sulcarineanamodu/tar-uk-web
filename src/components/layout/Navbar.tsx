"use client";

import Link from "next/link";
import { useState } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <Link href="/" className="text-2xl font-bold text-navy">
            TAR<span className="text-electric-blue">.</span>
          </Link>
          <div className="hidden md:flex items-center gap-8">
            <Link href="/" className="text-navy hover:text-electric-blue">Home</Link>
            <Link href="/services" className="text-navy hover:text-electric-blue">Services</Link>
            <Link href="/pricing" className="text-navy hover:text-electric-blue">Pricing</Link>
            <Link href="/contact" className="text-navy hover:text-electric-blue">Contact</Link>
            <a href="tel:02036911116" className="px-4 py-2 bg-electric-blue text-white rounded-lg font-medium">
              020 3691 1116
            </a>
            <Link href="/book" className="px-4 py-2 bg-electric-blue text-white rounded-lg font-medium">
              Book →
            </Link>
          </div>
          <button onClick={() => setIsOpen(!isOpen)} className="md:hidden">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
            </svg>
          </button>
        </div>
        {isOpen && (
          <div className="md:hidden bg-grey-50 py-4 space-y-2">
            <Link href="/" className="block px-4 py-2 text-navy hover:bg-grey-100">Home</Link>
            <Link href="/services" className="block px-4 py-2 text-navy hover:bg-grey-100">Services</Link>
            <Link href="/pricing" className="block px-4 py-2 text-navy hover:bg-grey-100">Pricing</Link>
            <Link href="/contact" className="block px-4 py-2 text-navy hover:bg-grey-100">Contact</Link>
            <a href="tel:02036911116" className="block px-4 py-2 text-navy hover:bg-grey-100">020 3691 1116</a>
            <Link href="/book" className="block px-4 py-2 bg-electric-blue text-white rounded">Book</Link>
          </div>
        )}
      </div>
    </nav>
  );
}
