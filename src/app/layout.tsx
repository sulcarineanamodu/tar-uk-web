import type { Metadata } from "next";
import { Inter } from "next/font/google";

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
          * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
          }
          html { scroll-behavior: smooth; }
          body { font-family: 'Inter', sans-serif; background: white; color: #1E293B; line-height: 1.6; }
          a { text-decoration: none; }
          button { border: none; cursor: pointer; font-family: inherit; }
        `}</style>
      </head>
      <body className={`${inter.variable}`} style={{ fontFamily: 'Inter, sans-serif' }}>
        {children}
      </body>
    </html>
  );
}
