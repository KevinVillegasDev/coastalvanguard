import type { Metadata } from "next";
import { Outfit, Syne } from "next/font/google";
import "./globals.css";

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
  display: "swap",
});

const syne = Syne({
  subsets: ["latin"],
  variable: "--font-syne",
  display: "swap",
  weight: ["400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "Coastal Vanguard | Full-Service Digital Agency — Web, SEO, Ads, Branding & More",
  description:
    "Coastal Vanguard builds everything digital your business needs. Websites, SEO, paid ads, social media, branding, and automation — one team, no runaround. Get a free website audit today.",
  keywords: [
    "digital agency",
    "web design",
    "SEO",
    "Google Business Profile",
    "social media management",
    "paid advertising",
    "branding",
    "website audit",
    "marketing automation",
    "CRM integration",
  ],
  openGraph: {
    title: "Coastal Vanguard | Full-Service Digital Agency",
    description:
      "One team for everything digital. Websites, SEO, ads, branding, automation — plus a free website audit to show you exactly where to start.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${outfit.variable} ${syne.variable}`}>
      <body className="font-sans">{children}</body>
    </html>
  );
}
