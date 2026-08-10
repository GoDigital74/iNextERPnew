"use client";

import { useEffect, useState, useCallback, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, Menu, X, ChevronDown } from "lucide-react";
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
    name: "Products",
    href: "/products/it-hardware",
    dropdown: [
      { name: "IT Hardware", href: "/products/it-hardware" },
      { name: "ERP Software", href: "/products/erp-software" },
      { name: "Cloud Service", href: "/products/cloud-service" },
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
      { name: "Integrations", href: "/services/erp-integrations" },
    ],
  },
  {
    name: "Industries",
    href: "/industries",
    dropdown: [
      {
        name: "Fashion & Apparel",
        href: "/industries/apparel-garment-erp-software",
      },
      {
        name: "Wholesale & Distribution",
        href: "/industries/wholesale-distribution-erp-software",
      },
      { name: "Retail industry", href: "/industries/retail-erp-software" },
      { name: "Manufacturing", href: "/industries/manufacturing-erp-software" },
    ],
  },
  { name: "Pricing", href: "/pricing" },
  { name: "Blog", href: "/blog" },
  { name: "Careers", href: "/careers" },
] as const;

// Animation variants (memoized outside component)
const dropdownVariants = {
  hidden: { opacity: 0, y: 8, scale: 0.98 },
  visible: { opacity: 1, y: 0, scale: 1 },
  exit: { opacity: 0, y: 4, scale: 0.98 },
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
    transition: { delay: i * 0.04, duration: 0.3 },
  }),
};

// Sub-components
const Logo = ({ onClick }: { onClick?: () => void }) => (
  <Link href="/" onClick={onClick} className="group flex items-center gap-2.5">
    <div className="relative h-10 w-10 shrink-0 transition-transform duration-300 group-hover:scale-105 md:h-11 md:w-11">
      <Image
        src="/logo.webp"
        alt="iNextERP"
        fill
        className="object-contain object-center"
        priority
        sizes="44px"
      />
    </div>
    <span className="text-lg font-bold tracking-tight text-ink-900 font-display md:text-xl">
      iNext<span className="text-brand-500">ERP</span>
    </span>
  </Link>
);

const DesktopDropdown = ({ items }: { items: DropdownItem[] }) => (
  <motion.div
    variants={dropdownVariants}
    initial="hidden"
    animate="visible"
    exit="exit"
    transition={{ duration: 0.18, ease: "easeOut" }}
    className="absolute left-0 top-[calc(100%+14px)] w-[270px] z-50"
  >
    <div className="glass-panel flex w-full flex-col overflow-hidden rounded-2xl p-2">
      {items.map((subLink) => (
        <Link
          key={subLink.href}
          href={subLink.href}
          className="group/item flex items-center justify-between rounded-xl px-4 py-3 text-sm font-medium text-ink-700 transition-colors hover:bg-brand-50 hover:text-brand-700"
        >
          {subLink.name}
          <ArrowRight className="h-3.5 w-3.5 opacity-0 transition-all group-hover/item:translate-x-1 group-hover/item:opacity-100" />
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
    <div className="mb-4 ml-4 flex flex-col gap-4 border-l border-ink-150 pl-4 py-2">
      {items.map((subLink) => (
        <Link
          key={subLink.href}
          href={subLink.href}
          className="text-base text-ink-500 hover:text-brand-600 transition-colors"
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
          setScrolled(window.scrollY > 24);
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
        link.dropdown.some((subLink) => pathname.startsWith(subLink.href)),
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
      `relative mx-auto flex max-w-7xl items-center justify-between rounded-2xl border px-5 py-3 shadow-lg transition-colors duration-300 ${
        scrolled || mobileOpen
          ? "border-ink-150 bg-white/95 shadow-ink-900/8 backdrop-blur-xl"
          : "border-ink-150/60 bg-white/70 shadow-ink-900/4 backdrop-blur-md"
      }`,
    [scrolled, mobileOpen],
  );

  return (
    <>
      <motion.header
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className="pointer-events-none fixed inset-x-0 top-0 z-50 px-4 pt-4 md:px-6"
      >
        <nav
          className={`pointer-events-auto ${navClasses}`}
          role="navigation"
          aria-label="Main navigation"
        >
          <Logo onClick={handleHomeClick} />

          {/* Desktop Navigation */}
          <ul className="hidden items-center gap-0.5 lg:flex">
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
                    href={link.href || "#"}
                    onClick={link.href === "/" ? handleHomeClick : undefined}
                    className={`flex items-center gap-1 rounded-lg px-3.5 py-2 text-[16px] font-medium transition-colors hover:text-brand-600 ${
                      isActive || hoveredNav === link.name
                        ? "text-brand-600"
                        : "text-ink-900"
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
                        className={`h-3.5 w-3.5 transition-transform duration-300 ${
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
          <div className="hidden lg:flex items-center">
            <Link
              href="/contact"
              className="group inline-flex items-center gap-2 rounded-xl bg-brand-500 px-5 py-2.5 text-sm font-semibold text-white shadow-[0_8px_20px_-6px_rgba(24,129,196,0.4)] transition-all hover:bg-brand-600 hover:shadow-[0_10px_24px_-4px_rgba(24,129,196,0.45)] active:scale-[0.98]"
            >
              Book Free Demo
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMobileMenu}
            className="flex h-10 w-10 items-center justify-center rounded-lg text-ink-800 transition-colors hover:bg-ink-100 lg:hidden active:scale-95"
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
            className="fixed inset-0 z-40 bg-ink-900/40 backdrop-blur-sm lg:hidden"
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
            className="fixed right-0 top-0 z-40 flex h-full w-[86vw] max-w-sm flex-col overflow-y-auto bg-white pt-24 border-l border-ink-150 lg:hidden"
            role="dialog"
            aria-modal="true"
            aria-label="Mobile navigation"
          >
            <nav className="flex flex-col gap-1 px-6 pb-6">
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
                    className="border-b border-ink-100 last:border-0"
                  >
                    {hasDropdown ? (
                      <div className="flex flex-col">
                        <div
                          className={`flex w-full items-center justify-between py-4 pr-2 text-lg font-medium transition-colors ${
                            isActive || isDropdownOpen
                              ? "text-brand-600"
                              : "text-ink-900 hover:text-brand-600"
                          }`}
                        >
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

                          <button
                            onClick={() => toggleMobileDropdown(link.name)}
                            className="flex h-9 w-9 items-center justify-center rounded-lg hover:bg-ink-100"
                            aria-expanded={isDropdownOpen}
                            aria-label={`Toggle ${link.name} submenu`}
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
                        className={`block py-4 pr-4 text-lg font-medium transition-colors hover:text-brand-600 ${
                          isActive ? "text-brand-600" : "text-ink-900"
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
            <div className="mt-auto border-t border-ink-150 bg-white px-6 py-6 sticky bottom-0">
              <Link
                href="/contact"
                onClick={closeMobileMenu}
                className="group flex w-full items-center justify-center gap-2 rounded-xl bg-brand-500 px-6 py-3.5 text-sm font-bold text-white shadow-[0_8px_20px_-6px_rgba(24,129,196,0.4)] transition-all hover:bg-brand-600 active:scale-95"
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
