import Image from "next/image";

const serviceLinks = [
  "Web & Development",
  "SEO & Local Search",
  "Paid Advertising",
  "Automation & CRM",
  "Analytics",
];

export default function Footer() {
  return (
    <footer>
      <div className="wrap">
        <div className="foot-top">
          <div className="foot-brand">
            <a href="#top" className="brand" aria-label="Coastal Vanguard home">
              <Image
                src="/logo-white.png"
                alt="Coastal Vanguard"
                width={591}
                height={118}
              />
            </a>
            <p>
              Full-service digital agency — web, SEO, ads, branding and more.
              One team for your entire digital ecosystem.
            </p>
          </div>
          <div className="foot-cols">
            <div className="foot-col">
              <h4>Services</h4>
              {serviceLinks.map((label) => (
                <a key={label} href="#services">
                  {label}
                </a>
              ))}
            </div>
            <div className="foot-col">
              <h4>Company</h4>
              <a href="#process">Process</a>
              <a href="#results">Results</a>
              <a href="#audit">Free audit</a>
            </div>
            <div className="foot-col">
              <h4>Contact</h4>
              <a href="mailto:info@coastalvanguard.com">
                info@coastalvanguard.com
              </a>
              <span>Reply within 24 hours</span>
            </div>
          </div>
        </div>
        <div className="foot-bottom">
          <span>
            © {new Date().getFullYear()} Coastal Vanguard · More than a
            template.
          </span>
          <span className="live">
            <span className="d" aria-hidden="true" />
            Taking on new projects
          </span>
        </div>
      </div>
    </footer>
  );
}
