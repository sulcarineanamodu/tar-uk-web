import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { AnimationProviders } from "@/components/providers/AnimationProviders";
import { AnimatedNavbar } from "@/components/layout/AnimatedNavbar";
import Footer from "@/components/layout/Footer";
import "@/styles/globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export const metadata: Metadata = {
  metadataBase: new URL("https://tar-uk.co.uk"),
  title: "TAR The Appliance Repairs | Premium Same-Day Repair Service",
  description:
    "Premium appliance repair across Croydon, London & M25. Fixed labour pricing, same-day service, 12-month guarantee. Trusted by 100+ customers.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <style>{`
          * { margin: 0; padding: 0; box-sizing: border-box; }
          html { scroll-behavior: smooth; }
          body { font-family: 'Inter', sans-serif; background: white; color: #1E293B; line-height: 1.6; }
        `}</style>
      </head>
      <body className={`${inter.variable} font-inter bg-white text-grey-800`}>
        <AnimationProviders>
          <AnimatedNavbar />
          {children}
          <Footer />
        </AnimationProviders>
      </body>
    </html>
  );
}
