"use client";

import { useEffect, useState, useCallback, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, Menu, X, ChevronDown, Search } from "lucide-react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import Image from "next/image";

// Types
interface DropdownItem {
  name: string;
  href: string;
}

interface NavLink {
  name: string;
  href?: string;
  dropdown?: DropdownItem[];
}

// Constants
const NAV_LINKS: NavLink[] = [
  { name: "About Us", href: "/about" },
  {
    name: "products",
    href: "/products/it-hardware",
    dropdown: [
      { name: "IT Hardware", href: "/products/it-hardware" },
      { name: "Consumables Items", href: "/products/consumables-items" },
      { name: "Cloud Service", href: "/products/cloud-service" },
      { name: "Software / ERP", href: "/products/software-erp" },
    ],
  },
  {
    name: "Services",
    href: "/services/inventory-management",
    dropdown: [
      { name: "Inventory Management", href: "/services/inventory-management" },
      { name: "Points of Sale", href: "/services/points-of-sale" },
      { name: "Accounts", href: "/services/accounts" },
      { name: "Manufacturing", href: "/services/manufacturing" },
      { name: "CRM", href: "/services/crm" },
      { name: "HRM", href: "/services/hrm" },
      { name: "Integrations", href: "/services/integrations" },
    ],
  },

  { name: "Blog", href: "/blog", dropdown: [] },
  { name: "Careers", href: "/careers" },
  { name: "Contact", href: "/contact", dropdown: [] },
] as const;

const SALES_PHONE = "+91 98765 43210";

// Animation variants (memoized outside component)
const dropdownVariants = {
  hidden: { opacity: 0, y: 10, scale: 0.98 },
  visible: { opacity: 1, y: 0, scale: 1 },
  exit: { opacity: 0, y: 5, scale: 0.98 },
};

const mobileMenuVariants = {
  hidden: { x: "100%" },
  visible: { x: 0 },
};

const mobileItemVariants = {
  hidden: { opacity: 0, x: 20 },
  visible: (i: number) => ({
    opacity: 1,
    x: 0,
    transition: { delay: i * 0.05, duration: 0.3 },
  }),
};

// Sub-components
const Logo = ({ onClick }: { onClick?: () => void }) => (
  <Link href="/" onClick={onClick} className="group flex items-center gap-2">
    <div className="relative h-12 w-12 transition-transform duration-300 group-hover:scale-105">
      <Image
        src="/logo.webp"
        alt="iNextERP"
        fill
        className="object-contain object-center"
        priority
        sizes="48px"
      />
    </div>
    <span className="text-xl font-semibold tracking-tight text-white">
      iNext<span className="text-[#1881c4]"> ERP</span>
    </span>
  </Link>
);

const DesktopDropdown = ({ items }: { items: DropdownItem[] }) => (
  <motion.div
    variants={dropdownVariants}
    initial="hidden"
    animate="visible"
    exit="exit"
    transition={{ duration: 0.2, ease: "easeOut" }}
    className="absolute left-0 top-[calc(100%+18px)] w-[280px] z-50"
  >
    <div className="flex w-full flex-col overflow-hidden rounded-2xl border border-white/10 bg-[#0A0A0A]/80 backdrop-blur-xl p-4">
      {items.map((subLink) => (
        <Link
          key={subLink.href}
          href={subLink.href}
          className="group flex items-center justify-between rounded-lg px-4 py-3 text-sm font-medium text-white transition-colors hover:bg-white/5 hover:text-[#1881c4]"
        >
          {subLink.name}
          <ArrowRight className="h-4 w-4 opacity-0 transition-all group-hover:translate-x-1 group-hover:opacity-100" />
        </Link>
      ))}
    </div>
  </motion.div>
);

const MobileDropdown = ({
  items,
  onClose,
}: {
  items: DropdownItem[];
  onClose: () => void;
}) => (
  <motion.div
    initial={{ height: 0, opacity: 0 }}
    animate={{ height: "auto", opacity: 1 }}
    exit={{ height: 0, opacity: 0 }}
    transition={{ duration: 0.2 }}
    className="overflow-hidden"
  >
    <div className="mb-4 ml-4 flex flex-col gap-4 border-l border-white/10 pl-4 py-2">
      {items.map((subLink) => (
        <Link
          key={subLink.href}
          href={subLink.href}
          className="text-base text-gray-400 hover:text-white transition-colors"
          onClick={onClose}
        >
          {subLink.name}
        </Link>
      ))}
    </div>
  </motion.div>
);

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [hoveredNav, setHoveredNav] = useState<string | null>(null);
  const [openMobileDropdown, setOpenMobileDropdown] = useState<string | null>(
    null,
  );
  const pathname = usePathname();

  // Scroll handler with throttling
  useEffect(() => {
    let ticking = false;
    const onScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          setScrolled(window.scrollY > 40);
          ticking = false;
        });
        ticking = true;
      }
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Make the dropdown open by default based on the current active URL route
  useEffect(() => {
    setMobileOpen(false);
    setHoveredNav(null);

    // Find if current URL matches any sub-link inside a dropdown
    const activeParentNav = NAV_LINKS.find(
      (link) =>
        link.dropdown &&
        link.dropdown.some((subLink) => pathname.startsWith(subLink.href))
    );
    
    // Set it to open automatically when on that route
    setOpenMobileDropdown(activeParentNav ? activeParentNav.name : null);
  }, [pathname]);

  // ESC key handler
  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setMobileOpen(false);
        setOpenMobileDropdown(null);
      }
    };
    document.addEventListener("keydown", handleEsc);
    return () => document.removeEventListener("keydown", handleEsc);
  }, []);

  // Body overflow control
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  // Memoized callbacks
  const handleHomeClick = useCallback(() => {
    if (pathname === "/") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  }, [pathname]);

  const toggleMobileMenu = useCallback(() => {
    setMobileOpen((prev) => !prev);
  }, []);

  const closeMobileMenu = useCallback(() => {
    setMobileOpen(false);
  }, []);

  const toggleMobileDropdown = useCallback((navName: string) => {
    setOpenMobileDropdown((prev) => (prev === navName ? null : navName));
  }, []);

  // Memoized nav classes
  const navClasses = useMemo(
    () =>
      `relative mx-auto flex max-w-7xl items-center justify-between rounded-2xl px-5 py-3 transition-all duration-500 border ${
        scrolled || mobileOpen
          ? "bg-[#0A0A0A]/60 backdrop-blur-xl border-white/10"
          : "bg-[#0A0A0A]/70 backdrop-blur-md border-white/5"
      }`,
    [scrolled, mobileOpen],
  );

  return (
    <>
      <motion.header
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        className="fixed inset-x-0 top-0 z-50 px-4 pt-4 md:px-8"
      >
        <nav
          className={navClasses}
          role="navigation"
          aria-label="Main navigation"
        >
          <Logo onClick={handleHomeClick} />

          {/* Desktop Navigation */}
          <ul className="hidden items-center gap-1 lg:flex">
            {NAV_LINKS.map((link) => {
              const isActive =
                link.href === "/"
                  ? pathname === "/"
                  : pathname.startsWith(link.href || "");
              const hasDropdown = link.dropdown && link.dropdown.length > 0;

              return (
                <li
                  key={link.name}
                  className="relative"
                  onMouseEnter={() => hasDropdown && setHoveredNav(link.name)}
                  onMouseLeave={() => hasDropdown && setHoveredNav(null)}
                >
                  <Link
                    href={ link.href || "#"}
                    onClick={link.href === "/" ? handleHomeClick : undefined}
                    className={`flex items-center gap-1.5 px-3.5 py-2 text-sm font-medium transition-colors hover:text-[#1881c4] ${
                      isActive || hoveredNav === link.name
                        ? "text-[#1881c4]"
                        : "text-white"
                    }`}
                    aria-current={isActive ? "page" : undefined}
                    aria-haspopup={hasDropdown ? "true" : undefined}
                    aria-expanded={
                      hasDropdown && hoveredNav === link.name ? "true" : "false"
                    }
                  >
                    {link.name}
                    {hasDropdown && (
                      <ChevronDown
                        className={`h-4 w-4 transition-transform duration-300 ${
                          hoveredNav === link.name ? "rotate-180" : ""
                        }`}
                        aria-hidden="true"
                      />
                    )}
                  </Link>

                  {hasDropdown && (
                    <AnimatePresence>
                      {hoveredNav === link.name && (
                        <DesktopDropdown items={link.dropdown!} />
                      )}
                    </AnimatePresence>
                  )}
                </li>
              );
            })}
          </ul>

          {/* Desktop Actions */}
          <div className="hidden lg:flex items-center gap-4">
            <button
              aria-label="Search"
              className="text-white hover:text-[#1881c4] transition-colors p-2 rounded-lg hover:bg-white/5"
            >
              <Search className="w-5 h-5" />
            </button>
            <a
              href={`tel:${SALES_PHONE.replace(/\s/g, "")}`}
              className="text-sm font-medium text-white border-l border-white/20 pl-4 hover:text-[#1881c4] transition-colors"
            >
              Sales: {SALES_PHONE}
            </a>
            <Link
              href="/contact"
              className="group inline-flex items-center gap-2 rounded-lg bg-[#1881c4] px-5 py-2.5 text-sm font-medium text-white transition-all hover:bg-[#4F7DF3] active:scale-95"
            >
              Book Free Demo
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMobileMenu}
            className="flex h-10 w-10 items-center justify-center rounded-lg text-white transition-colors hover:bg-white/10 lg:hidden active:scale-95"
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
            aria-expanded={mobileOpen}
            aria-controls="mobile-menu"
          >
            {mobileOpen ? (
              <X className="h-5 w-5" />
            ) : (
              <Menu className="h-5 w-5" />
            )}
          </button>
        </nav>
      </motion.header>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-40 bg-black/60 backdrop-blur-sm lg:hidden"
            onClick={closeMobileMenu}
            aria-hidden="true"
          />
        )}
      </AnimatePresence>

      {/* Mobile Menu Panel */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            id="mobile-menu"
            variants={mobileMenuVariants}
            initial="hidden"
            animate="visible"
            exit="hidden"
            transition={{ type: "spring", damping: 30, stiffness: 300 }}
            className="fixed right-0 top-0 z-40 flex h-full w-[80vw] max-w-sm flex-col overflow-y-auto bg-[#0A0A0A] pt-24 border-l border-white/10 lg:hidden"
            role="dialog"
            aria-modal="true"
            aria-label="Mobile navigation"
          >
            <nav className="flex flex-col gap-1 px-6 pb-20">
              {NAV_LINKS.map((link, i) => {
                const isActive =
                  link.href === "/"
                    ? pathname === "/"
                    : pathname.startsWith(link.href || "");
                const hasDropdown = link.dropdown && link.dropdown.length > 0;
                const isDropdownOpen = openMobileDropdown === link.name;

                return (
                  <motion.div
                    key={link.name}
                    custom={i}
                    variants={mobileItemVariants}
                    initial="hidden"
                    animate="visible"
                    className="border-b border-white/5 last:border-0"
                  >
                   {hasDropdown ? (
                      <div className="flex flex-col">
                        <div
                          className={`flex w-full items-center justify-between py-4 pr-4 text-lg font-medium transition-colors ${
                            isActive || isDropdownOpen
                              ? "text-[#1881c4]"
                              : "text-white hover:text-[#1881c4]"
                          }`}
                        >
                          {/* FIX: Make the text an actual clickable link */}
                          <Link 
                            href={link.href || "#"}
                            onClick={() => {
                              closeMobileMenu();
                              if (link.href === "/") handleHomeClick();
                            }}
                            className="flex-1 text-left"
                          >
                            {link.name}
                          </Link>
                          
                          {/* FIX: Make the chevron a separate button to toggle the dropdown */}
                          <button
                            onClick={() => toggleMobileDropdown(link.name)}
                            className="p-2 -mr-2"
                            aria-expanded={isDropdownOpen}
                          >
                            <ChevronDown
                              className={`h-5 w-5 transition-transform duration-300 ${
                                isDropdownOpen ? "rotate-180" : ""
                              }`}
                              aria-hidden="true"
                            />
                          </button>
                        </div>
                        <AnimatePresence>
                          {isDropdownOpen && (
                            <MobileDropdown
                              items={link.dropdown!}
                              onClose={closeMobileMenu}
                            />
                          )}
                        </AnimatePresence>
                      </div>
                    ) : (
                      <Link
                        href={link.href || "#"}
                        onClick={() => {
                          closeMobileMenu();
                          if (link.href === "/") handleHomeClick();
                        }}
                        className={`block py-4 pr-4 text-lg font-medium transition-colors hover:text-[#1881c4] ${
                          isActive ? "text-[#1881c4]" : "text-white"
                        }`}
                        aria-current={isActive ? "page" : undefined}
                      >
                        {link.name}
                      </Link>
                    )}
                  </motion.div>
                );
              })}
            </nav>

            {/* Mobile Footer */}
            <div className="mt-auto border-t border-white/10 bg-[#0A0A0A] px-6 py-6 sticky bottom-0">
              <a
                href={`tel:${SALES_PHONE.replace(/\s/g, "")}`}
                className="text-sm font-medium text-gray-400 flex items-center justify-between mb-4 hover:text-white transition-colors"
              >
                <span>Sales Contact:</span>
                <span className="text-white">{SALES_PHONE}</span>
              </a>
              <Link
                href="/contact"
                onClick={closeMobileMenu}
                className="group flex w-full items-center justify-center gap-2 rounded-lg bg-[#1881c4] px-6 py-3.5 text-sm font-bold text-white transition-all hover:bg-[#4F7DF3] active:scale-95"
              >
                Book Free Demo
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
