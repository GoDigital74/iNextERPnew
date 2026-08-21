import Link from "next/link";
import Image from "next/image";
import { Mail, Phone, MapPin, ArrowUp } from "lucide-react";
import {
  FaFacebook,
  FaTwitter,
  FaLinkedin,
  FaInstagram,
  FaApple,
  FaGooglePlay,
} from "react-icons/fa6";

const FOOTER_LINKS = {
  products: [
    { name: "Features", href: "#" },
    { name: "Pricing", href: "/pricing" },
    { name: "Integrations", href: "/services/erp-integrations" },
    { name: "Modules", href: "#" },
  ],
  industries: [
    { name: "Retail industry", href: "/industries/retail-erp-software" },
    { name: "Manufacturing", href: "/industries/manufacturing-erp-software" },
    {
      name: "Wholesale & Distribution",
      href: "/industries/wholesale-distribution-erp-software",
    },
    {
      name: "Fashion & Garments",
      href: "/industries/apparel-garment-erp-software",
    },
  ],
  resources: [
    { name: "Blog", href: "/blog" },
    { name: "Case Studies", href: "#" },
    { name: "Help Center", href: "#" },
    { name: "Guides & Tutorials", href: "#" },
    
  ],
  company: [
    { name: "About Us", href: "/about" },
    { name: "Careers", href: "/careers" },
    { name: "Contact Us", href: "/contact" },
    { name: "Privacy Policy", href: "/privacy-policy" },
    { name: "Terms & Conditions", href: "/terms-and-conditions" },
  ],
};

const APP_LINKS = [
  {
    icon: FaApple,
    label: "App Store",
    href: "https://apps.apple.com/in/app/inexterp-solutions/id6751819828",
  },
  {
    icon: FaGooglePlay,
    label: "Play Store",
    href: "https://play.google.com/store/apps/details?id=com.inextsales",
  },
];

const SOCIALS = [
  { icon: FaFacebook, label: "Facebook", href: "https://www.facebook.com/inexterpsolution" },
  { icon: FaTwitter, label: "Twitter", href: "https://x.com/InexterpS50262" },
  { icon: FaLinkedin, label: "LinkedIn", href: "https://www.linkedin.com/company/inexterp-solutions-pvt-ltd" },
  { icon: FaInstagram, label: "Instagram", href: "https://www.instagram.com/inexterpsolutions" },
];

function FooterColumn({
  title,
  links,
}: {
  title: string;
  links: { name: string; href: string }[];
}) {
  return (
    <div className="flex flex-col gap-5">
      <h4 className="text-xs font-bold uppercase tracking-[0.12em] text-white">
        {title}
      </h4>
      <ul className="flex flex-col gap-3.5">
        {links.map((link) => (
          <li key={link.name}>
            <Link
              href={link.href}
              className="group inline-flex items-center text-sm text-white/55 transition-colors duration-200 hover:text-white"
            >
              <span className="mr-0 h-px w-0 bg-accent-400 transition-all duration-200 ease-out group-hover:mr-2 group-hover:w-3" />
              {link.name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export function Footer() {
  return (
    <footer className="footer-section relative overflow-hidden text-white/70">
      {/* Ambient brand glow, echoing the hero/pricing sections */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -left-24 -top-16 h-80 w-80 rounded-full bg-brand-400/20 blur-[130px]" />
        <div className="absolute right-0 top-1/4 h-96 w-96 rounded-full bg-accent-500/15 blur-[140px]" />
      </div>

      {/* Top hairline accent */}
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-accent-400/70 to-transparent" />

      <div className="section-container relative py-16 lg:py-20">
        {/* Top Section: Links & Brand */}
        <div className="grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-7 lg:gap-8">
          {/* Brand & Contact Info */}
          <div className="flex flex-col gap-6 lg:col-span-2">
            <Link href="/" className="group flex w-fit items-center gap-2.5">
              <div className="relative h-11 w-11 shrink-0 overflow-hidden rounded-xl bg-white shadow-lg shadow-black/20 ring-1 ring-white/10 transition-transform duration-300 group-hover:scale-105">
                <Image
                  src="/logo.webp"
                  alt="iNextERP"
                  fill
                  className="object-contain object-center p-1"
                />
              </div>
              <span className="font-display text-xl font-bold tracking-tight text-white">
                iNext<span className="text-accent-300">ERP</span>
              </span>
            </Link>

            <p className="max-w-sm text-sm leading-relaxed text-white/55">
              Transforming retail operations with intelligent inventory
              solutions that drive growth and efficiency.
            </p>

            <ul className="mt-2 flex flex-col gap-4">
              <li>
                <a
                  href="tel:+918527262031"
                  className="group flex items-start gap-3 text-sm transition-colors"
                >
                  <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-white/10 text-accent-300 transition-colors duration-200 group-hover:bg-accent-500 group-hover:text-white">
                    <Phone className="h-4 w-4" />
                  </span>
                  <span className="pt-1.5 text-white/70 transition-colors group-hover:text-white">
                    Talk to an expert:
                    <br />
                    8527262031 / 9211995156
                  </span>
                </a>
              </li>
              <li>
                <a
                  href="mailto:sales@inexterpsolutions.com"
                  className="group flex items-center gap-3 text-sm transition-colors"
                >
                  <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-white/10 text-accent-300 transition-colors duration-200 group-hover:bg-accent-500 group-hover:text-white">
                    <Mail className="h-4 w-4" />
                  </span>
                  <span className="text-white/70 transition-colors group-hover:text-white">
                    sales@inexterpsolutions.com
                  </span>
                </a>
              </li>
              <li className="flex items-start gap-3 text-sm">
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-white/10 text-accent-300">
                  <MapPin className="h-4 w-4" />
                </span>
                <span className="pt-1.5 text-white/70">
                  H-43, Sector 63, Noida
                  <br />
                  Uttar Pradesh 201301
                </span>
              </li>
            </ul>
          </div>

          {/* Links Columns */}
          <FooterColumn title="Products" links={FOOTER_LINKS.products} />
          <FooterColumn title="Industries" links={FOOTER_LINKS.industries} />
          <FooterColumn title="Resources" links={FOOTER_LINKS.resources} />
          <FooterColumn title="Company" links={FOOTER_LINKS.company} />

          {/* Download App */}
          <div className="flex flex-col gap-5">
            <h4 className="text-xs font-bold uppercase tracking-[0.12em] text-white">
              Download Our App
            </h4>
            <div className="flex flex-col gap-3">
              {APP_LINKS.map(({ icon: Icon, label, href }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center gap-2 rounded-lg border border-white/10 bg-white/5 px-4 py-2.5 text-sm text-white/70 transition-all duration-200 hover:-translate-y-0.5 hover:border-accent-400/40 hover:bg-white/10 hover:text-white"
                >
                  <Icon className="h-4 w-4 text-accent-300 transition-colors group-hover:text-accent-200" />
                  {label}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar: Copyright & Socials */}
      <div className="relative border-t border-white/10">
        <div className="section-container flex flex-col items-center justify-between gap-4 py-5 md:flex-row">
          <div className="flex flex-col items-center gap-x-4 gap-y-2 sm:flex-row">
            <p className="text-sm text-white/50">
              © {new Date().getFullYear()} iNextERP Solutions Pvt. Ltd. All
              rights reserved.
            </p>

            <span aria-hidden className="hidden h-3.5 w-px bg-white/15 sm:block" />

            <p className="text-sm text-white/50">
              Designed by{" "}
              <a
                href="https://www.godigitalagency.in/"
                target="_blank"
                rel="noopener noreferrer nofollow"
                className="font-semibold text-white/75 underline-offset-4 transition-colors hover:text-accent-300 hover:underline"
              >
                GoDigital Agency
              </a>
            </p>
          </div>

          <div className="flex items-center gap-5">
            {SOCIALS.map(({ icon: Icon, label, href }) => (
              <Link
                key={label}
                href={href}
                aria-label={label}
                className="flex h-9 w-9 items-center justify-center rounded-full border border-white/10 bg-white/5 text-white/60 transition-all duration-200 hover:-translate-y-0.5 hover:border-accent-400/40 hover:bg-accent-500 hover:text-white"
              >
                <Icon className="h-7 w-7" />
              </Link>
            ))}

            <a
              href="#"
              aria-label="Back to top"
              className="ml-1 flex h-9 w-9 items-center justify-center rounded-full border border-white/10 bg-white/5 text-white/60 transition-all duration-200 hover:-translate-y-0.5 hover:border-white/40 hover:bg-white hover:text-brand-700"
            >
              <ArrowUp className="h-6 w-6" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
