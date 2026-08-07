import Link from "next/link";
import Image from "next/image";
import { Mail, Phone, MapPin } from "lucide-react";
import {
  FaFacebook,
  FaTwitter,
  FaLinkedin,
  FaInstagram,
} from "react-icons/fa6";

const FOOTER_LINKS = {
  products: [
    { name: "Features", href: "#" },
    { name: "Pricing", href: "#" },
    { name: "Integrations", href: "/services/erp-integrations" },
    { name: "Modules", href: "#" },
    { name: "Changelog", href: "#" },
  ],
  industries: [
    { name: "Retail industry", href: "/industries/retail-erp-software" },
    { name: "FMCG", href: "/industries/fmcg-manufacturing-erp-software" },
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
    { name: "API Documentation", href: "#" },
  ],
  company: [
    { name: "About Us", href: "/about" },
    { name: "Careers", href: "/careers" },
    { name: "Contact Us", href: "/contact" },
    { name: "Partners", href: "#" },
    { name: "Privacy Policy", href: "#" },
  ],
};

const SOCIALS = [
  { icon: FaFacebook, label: "Facebook", href: "#" },
  { icon: FaTwitter, label: "Twitter", href: "#" },
  { icon: FaLinkedin, label: "LinkedIn", href: "#" },
  { icon: FaInstagram, label: "Instagram", href: "#" },
];

function FooterColumn({
  title,
  links,
}: {
  title: string;
  links: { name: string; href: string }[];
}) {
  return (
    <div className="flex flex-col gap-4">
      <h4 className="text-sm font-semibold text-ink-900">{title}</h4>
      <ul className="flex flex-col gap-3">
        {links.map((link) => (
          <li key={link.name}>
            <Link
              href={link.href}
              className="text-sm text-ink-500 transition-colors hover:text-brand-600"
            >
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
    <footer className="relative border-t border-ink-150 bg-white text-ink-600">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-linear-to-r from-transparent via-brand-300 to-transparent" />

      <div className="section-container relative py-16 lg:py-20">
        {/* Top Section: Links & Brand */}
        <div className="grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-6 lg:gap-8">
          {/* Brand & Contact Info */}
          <div className="flex flex-col gap-6 lg:col-span-2">
            <Link href="/" className="group flex w-fit items-center gap-2.5">
              <div className="relative h-11 w-11 shrink-0 transition-transform duration-300 group-hover:scale-105">
                <Image
                  src="/logo.webp"
                  alt="iNextERP"
                  fill
                  className="object-contain object-center"
                />
              </div>
              <span className="font-display text-xl font-bold tracking-tight text-ink-900">
                iNext<span className="text-brand-500">ERP</span>
              </span>
            </Link>

            <p className="max-w-sm text-sm leading-relaxed text-ink-500">
              Transforming retail operations with intelligent inventory
              solutions that drive growth and efficiency.
            </p>

            <ul className="mt-2 flex flex-col gap-3.5">
              <li>
                <a
                  href="tel:+918527262031"
                  className="flex items-start gap-3 text-sm transition-colors hover:text-brand-600"
                >
                  <Phone className="mt-0.5 h-4.5 w-4.5 shrink-0 text-brand-500" />
                  <span>
                    Talk to an expert:
                    <br />
                    8527262031 / 9211995156
                  </span>
                </a>
              </li>
              <li>
                <a
                  href="mailto:sales@inexterpsolutions.com"
                  className="flex items-center gap-3 text-sm transition-colors hover:text-brand-600"
                >
                  <Mail className="h-4.5 w-4.5 shrink-0 text-brand-500" />
                  sales@inexterpsolutions.com
                </a>
              </li>
              <li className="flex items-start gap-3 text-sm">
                <MapPin className="mt-0.5 h-4.5 w-4.5 shrink-0 text-brand-500" />
                <span>
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
        </div>
      </div>

      {/* Bottom Bar: Copyright & Socials */}
      <div className="relative border-t border-ink-150">
        <div className="section-container flex flex-col items-center justify-between gap-4 py-6 md:flex-row">
          <p className="text-sm text-ink-400">
            © {new Date().getFullYear()} NextERP Solutions Pvt. Ltd. All
            rights reserved.
          </p>

          <div className="flex items-center gap-2">
            {SOCIALS.map(({ icon: Icon, label, href }) => (
              <Link
                key={label}
                href={href}
                aria-label={label}
                className="flex h-9 w-9 items-center justify-center rounded-full text-ink-400 transition-all hover:bg-brand-50 hover:text-brand-600"
              >
                <Icon className="h-4.5 w-4.5" />
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
