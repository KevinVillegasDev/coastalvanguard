import Image from "next/image";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative border-t border-white/5 bg-abyss">
      {/* Subtle gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-deep/50 to-transparent pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 py-12">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          {/* Logo and Copyright */}
          <div className="flex flex-col sm:flex-row items-center gap-4">
            <Image
              src="/logo.png"
              alt="Coastal Vanguard"
              width={180}
              height={45}
              className="h-12 w-auto"
              style={{
                filter: "drop-shadow(0 0 15px rgba(0, 194, 184, 0.2))",
              }}
            />
            <div className="h-6 w-px bg-white/10 hidden sm:block" />
            <span className="text-fog/40 text-sm">
              {currentYear} Coastal Vanguard. All rights reserved.
            </span>
          </div>

          {/* Quick Links */}
          <nav className="flex items-center gap-8 text-sm">
            <a
              href="#services"
              className="text-fog/50 hover:text-white transition-colors duration-300"
            >
              Services
            </a>
            <a
              href="#about"
              className="text-fog/50 hover:text-white transition-colors duration-300"
            >
              About
            </a>
            <a
              href="#contact"
              className="text-fog/50 hover:text-white transition-colors duration-300"
            >
              Contact
            </a>
          </nav>
        </div>

        {/* Bottom decorative line */}
        <div className="mt-8 pt-8 border-t border-white/5 flex items-center justify-center">
          <p className="text-fog/30 text-xs tracking-wider">
            Navigating the future of marketing
          </p>
        </div>
      </div>
    </footer>
  );
}
