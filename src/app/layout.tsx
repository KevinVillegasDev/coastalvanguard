import type { Metadata } from "next";
import { Bricolage_Grotesque, Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const bricolage = Bricolage_Grotesque({
  subsets: ["latin"],
  variable: "--font-bricolage",
  display: "swap",
  axes: ["opsz"],
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains-mono",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://coastalvanguard.com"),
  title: "Coastal Vanguard — One team for your whole digital presence",
  description:
    "Coastal Vanguard is a full-service digital agency — web, SEO, Google & Meta ads, automation and analytics, handled by one accountable team. No middlemen, no vendor lock-in.",
  keywords: [
    "digital agency",
    "web design",
    "SEO",
    "Google Business Profile",
    "paid advertising",
    "website audit",
    "marketing automation",
    "CRM integration",
    "analytics",
  ],
  openGraph: {
    title: "Coastal Vanguard — One team for your whole digital presence",
    description:
      "Full-service digital agency — web, SEO, Google & Meta ads, automation and analytics, handled by one accountable team. Start with a free website audit.",
    type: "website",
    url: "/",
    siteName: "Coastal Vanguard",
    images: [
      {
        url: "/hero-peak.jpg",
        width: 1672,
        height: 941,
        alt: "Coastal Vanguard — one team for your whole digital presence",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${bricolage.variable} ${inter.variable} ${jetbrainsMono.variable}`}
      suppressHydrationWarning
    >
      <body>
        {/* Gates entrance animations behind JS before first paint; without JS the CSS
            shows everything. If hydration never lands (bundle blocked/failed), drop the
            gate after 3.5s so the page is never left blank — ScrollFx sets the flag. */}
        <script
          dangerouslySetInnerHTML={{
            __html:
              "document.documentElement.classList.add('js');setTimeout(function(){if(!window.__cvHydrated)document.documentElement.classList.remove('js')},3500);",
          }}
        />
        {children}
      </body>
    </html>
  );
}
