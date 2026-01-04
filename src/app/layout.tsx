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
  title: "Coastal Vanguard | Custom Marketing & Automation Solutions",
  description:
    "Transform your business with intelligent marketing strategies and cutting-edge automation solutions. Coastal Vanguard delivers results that matter.",
  keywords: [
    "marketing automation",
    "digital marketing",
    "business automation",
    "CRM integration",
    "marketing strategy",
  ],
  openGraph: {
    title: "Coastal Vanguard | Custom Marketing & Automation Solutions",
    description:
      "Transform your business with intelligent marketing strategies and cutting-edge automation solutions.",
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
      <body className="font-sans grain">{children}</body>
    </html>
  );
}
