import Image from "next/image";

const serviceLinks = [
  "Web Design & Development",
  "SEO & Local Search",
  "Google Business Profile",
  "Social Media",
  "Paid Advertising",
  "Branding & Creative",
  "Automation & CRM",
  "Analytics & Reporting",
];

const companyLinks = [
  { label: "Services", href: "#services" },
  { label: "Process", href: "#process" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
];

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative border-t border-white/5 bg-abyss">
      {/* Subtle gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-deep/50 to-transparent pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8">
          {/* Column 1: Logo + Tagline */}
          <div>
            <Image
              src="/logo.png"
              alt="Coastal Vanguard"
              width={180}
              height={45}
              className="h-12 w-auto mb-4"
              style={{
                filter: "drop-shadow(0 0 15px rgba(0, 194, 184, 0.2))",
              }}
            />
            <p className="text-fog/40 text-sm leading-relaxed max-w-xs">
              One team for everything digital. Websites, SEO, ads, branding,
              automation — built to grow your business.
            </p>
          </div>

          {/* Column 2: Services */}
          <div>
            <h4 className="text-white font-display font-semibold text-sm uppercase tracking-wider mb-4">
              Services
            </h4>
            <ul className="space-y-2">
              {serviceLinks.map((service) => (
                <li key={service}>
                  <a
                    href="#services"
                    className="text-fog/50 hover:text-white transition-colors duration-300 text-sm"
                  >
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Company + Contact */}
          <div>
            <h4 className="text-white font-display font-semibold text-sm uppercase tracking-wider mb-4">
              Company
            </h4>
            <ul className="space-y-2 mb-6">
              {companyLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-fog/50 hover:text-white transition-colors duration-300 text-sm"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
            <a
              href="mailto:info@coastalvanguard.com"
              className="text-fog/60 hover:text-white transition-colors duration-300 text-sm"
            >
              info@coastalvanguard.com
            </a>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 pt-8 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4">
          <span className="text-fog/40 text-sm">
            &copy; {currentYear} Coastal Vanguard. All rights reserved.
          </span>
          <p className="text-fog/30 text-xs tracking-wider">
            Full-service digital solutions for modern businesses
          </p>
        </div>
      </div>
    </footer>
  );
}
