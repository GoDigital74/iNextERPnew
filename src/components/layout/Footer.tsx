//1881c4
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
    { name: "Integrations", href: "#" },
    { name: "Modules", href: "#" },
    { name: "Changelog", href: "#" },
  ],
  industries: [
    { name: "Retail Stores", href: "#" },
    { name: "FMCG", href: "#" },
    { name: "Manufacturing", href: "#" },
    { name: "Wholesale & Distribution", href: "#" },
    { name: "Fashion & Garments", href: "#" },
  ],
  resources: [
    { name: "Blog", href: "#" },
    { name: "Case Studies", href: "#" },
    { name: "Help Center", href: "#" },
    { name: "Guides & Tutorials", href: "#" },
    { name: "API Documentation", href: "#" },
  ],
  company: [
    { name: "About Us", href: "#" },
    { name: "Careers", href: "#" },
    { name: "Contact Us", href: "#" },
    { name: "Partners", href: "#" },
    { name: "Privacy Policy", href: "#" },
  ],
};

export function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 border-t border-gray-800">
      <div className="container mx-auto px-4 md:px-8 py-16 lg:py-20">
        {/* Top Section: Links & Brand */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-12 lg:gap-8">
          {/* Brand & Contact Info */}
          <div className="lg:col-span-2 flex flex-col gap-6">
            {/* Updated Logo Block */}
            <Link href="/" className="group flex items-center gap-2 w-fit">
              <div className="relative h-12 w-12 transition-transform duration-300 group-hover:scale-105">
                <Image
                  src="/logo.webp"
                  alt="iNextERP"
                  fill
                  className="object-contain object-center"
                />
              </div>
              <span className="text-xl font-bold tracking-tight text-white transition-colors">
                Next<span className="text-[#1881c4]"> ERP</span>
              </span>
            </Link>

            <p className="text-sm leading-relaxed text-gray-400 max-w-sm">
              Transforming retail operations with intelligent inventory solutions that drive growth and efficiency.
            </p>

            <div className="flex flex-col gap-3 mt-2">
              <div className="flex items-center gap-3 text-sm hover:text-[#1881c4] transition-colors cursor-pointer">
                <Phone className="w-5 h-5 text-[#1881c4]" />
                8178844159 <br/>
                  8527262031<br/>
                      0120-4171793 (Landline)
              </div>
              <div className="flex items-center gap-3 text-sm hover:text-[#1881c4] transition-colors cursor-pointer">
                <Mail className="w-5 h-5 text-[#1881c4]" />
                sales@inexterpsolutions.com
              </div>
              <div className="flex items-start gap-3 text-sm hover:text-[#1881c4] transition-colors cursor-pointer">
                <MapPin className="w-5 h-5 text-[#1881c4] shrink-0 mt-0.5" />
                <span>
                  H-43, Sector 63, Noida<br />
                  Uttar Pradesh 201301 
                </span>
              </div>
            </div>
          </div>

          {/* Links Columns */}
          <div className="flex flex-col gap-4">
            <h4 className="text-white font-semibold mb-2">Products</h4>
            {FOOTER_LINKS.products.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-sm text-gray-400 hover:text-[#1881c4] transition-colors w-fit"
              >
                {link.name}
              </Link>
            ))}
          </div>

          <div className="flex flex-col gap-4">
            <h4 className="text-white font-semibold mb-2">Industries</h4>
            {FOOTER_LINKS.industries.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-sm text-gray-400 hover:text-[#1881c4] transition-colors w-fit"
              >
                {link.name}
              </Link>
            ))}
          </div>

          <div className="flex flex-col gap-4">
            <h4 className="text-white font-semibold mb-2">Resources</h4>
            {FOOTER_LINKS.resources.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-sm text-gray-400 hover:text-[#1881c4] transition-colors w-fit"
              >
                {link.name}
              </Link>
            ))}
          </div>

          <div className="flex flex-col gap-4">
            <h4 className="text-white font-semibold mb-2">Company</h4>
            {FOOTER_LINKS.company.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-sm text-gray-400 hover:text-[#1881c4] transition-colors w-fit"
              >
                {link.name}
              </Link>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom Bar: Copyright & Socials */}
      <div className="border-t border-gray-800 bg-gray-900/50">
        <div className="container mx-auto px-4 md:px-8 py-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="text-sm text-gray-500">
            © {new Date().getFullYear()} NextERP Solutions Pvt. Ltd. All rights
            reserved.
          </div>

          <div className="flex items-center gap-6">
            <Link
              href="#"
              aria-label="Facebook"
              className="text-gray-500 hover:text-[#1881c4] hover:scale-110 transition-all"
            >
              <FaFacebook className="w-6 h-6" />
            </Link>
            <Link
              href="#"
              aria-label="Twitter"
              className="text-gray-500 hover:text-[#1881c4] hover:scale-110 transition-all"
            >
              <FaTwitter className="w-6 h-6" />
            </Link>
            <Link
              href="#"
              aria-label="LinkedIn"
              className="text-gray-500 hover:text-[#1881c4] hover:scale-110 transition-all"
            >
              <FaLinkedin className="w-6 h-6" />
            </Link>
            <Link
              href="#"
              aria-label="Instagram"
              className="text-gray-500 hover:text-[#1881c4] hover:scale-110 transition-all"
            >
              <FaInstagram className="w-6 h-6" />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
