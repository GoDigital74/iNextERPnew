"use client";

import { useEffect, useState, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, Menu, X, ChevronDown, Search } from "lucide-react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import Image from "next/image";

const NAV_LINKS = [
  {
    name: "Products",
    href: "/products",
    dropdown: [
      { name: "Inventory Management", href: "/products/inventory-management" },
      { name: "Points of Sale", href: "/products/points-of-sale" },
      { name: "Accounts", href: "/products/accounts" },
      { name: "Manufacturing", href: "/products/manufacturing" },
      { name: "CRM", href: "/products/crm" },
      { name: "HRM", href: "/products/hrm" },
      { name: "Integrations", href: "/products/integrations" },
    ],
  },
  {
    name: "Services",
    href: "/services",
    dropdown: [
      { name: "IT Hardware", href: "/services/it-hardware" },
      { name: "Consumables Items", href: "/services/consumables-items" },
      { name: "Cloud Service", href: "/services/cloud-service" },
      { name: "Software / ERP", href: "/services/software-erp" },
    ],
  },
  { name: "Industries", href: "/industries", dropdown: [] },
  { name: "Modules", href: "/modules" },
  { name: "Resources", href: "/resources", dropdown: [] },
  { name: "Pricing", href: "/pricing" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [hoveredNav, setHoveredNav] = useState<string | null>(null);
  const [openMobileDropdown, setOpenMobileDropdown] = useState<string | null>(
    null,
  );
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileOpen(false);
    setOpenMobileDropdown(null);
    setHoveredNav(null);
  }, [pathname]);

  // Close mobile menu on escape key
  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape") setMobileOpen(false);
    };
    document.addEventListener("keydown", handleEsc);
    return () => document.removeEventListener("keydown", handleEsc);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  const handleHomeClick = useCallback(() => {
    if (pathname === "/") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  }, [pathname]);

  const toggleMobileDropdown = (navName: string) => {
    setOpenMobileDropdown((prev) => (prev === navName ? null : navName));
  };

  return (
    <>
      <motion.header
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        className="fixed inset-x-0 top-0 z-50 px-4 pt-4 md:px-8"
      >
        <nav
          className={`relative mx-auto flex max-w-7xl items-center justify-between rounded-2xl px-5 py-3 transition-all duration-500 border ${
            scrolled || mobileOpen
              ? "bg-[#0A0A0A]/60 backdrop-blur-xl border-white/10 shadow-lg shadow-black/40"
              : "bg-[#0A0A0A]/50 backdrop-blur-md border-white/10 shadow-md shadow-black/10"
          }`}
        >
          <Link
            href="/"
            onClick={handleHomeClick}
            className="group flex items-center gap-2" /* Added gap-2 for tight spacing */
          >
            {/* Changed w-44 to w-12 to tightly wrap the circular icon */}
            <div className="relative h-12 w-12 transition-transform duration-300 group-hover:scale-105">
              <Image
                src="/logo.webp"
                alt="iNextERP"
                fill
                className="object-contain object-center"
                priority
              />
            </div>
            <span className="text-xl font-semibold tracking-tight text-white">
              Next<span className="text-[#1881c4]"> ERP</span>
            </span>
          </Link>

          {/* Desktop Nav */}
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
                  onMouseEnter={() => setHoveredNav(link.name)}
                  onMouseLeave={() => setHoveredNav(null)}
                >
                  <Link
                    href={hasDropdown ? "#" : link.href || "#"}
                    onClick={link.href === "/" ? handleHomeClick : undefined}
                    className={`flex items-center gap-1.5 px-3.5 py-2 text-sm font-medium transition-colors hover:text-[#1881c4] ${
                      isActive || hoveredNav === link.name
                        ? "text-[#1881c4]"
                        : "text-white"
                    }`}
                  >
                    {link.name}
                    {hasDropdown && (
                      <ChevronDown
                        className={`h-4 w-4 transition-transform duration-300 ${hoveredNav === link.name ? "rotate-180" : ""}`}
                      />
                    )}
                  </Link>

                  {/* DESKTOP DROPDOWN (No Images) */}
                  {hasDropdown && (
                    <AnimatePresence>
                      {hoveredNav === link.name && (
                        <motion.div
                          initial={{ opacity: 0, y: 10, scale: 0.98 }}
                          animate={{ opacity: 1, y: 0, scale: 1 }}
                          exit={{ opacity: 0, y: 5, scale: 0.98 }}
                          transition={{ duration: 0.2, ease: "easeOut" }}
                          className="absolute left-0 top-full pt-4 w-[280px]"
                        >
                          <div className="flex w-full flex-col overflow-hidden rounded-2xl border border-white/10 bg-[#0A0A0A]/80 backdrop-blur-xl shadow-2xl shadow-black/60 p-3">
                            {link.dropdown?.map((subLink) => (
                              <Link
                                key={subLink.name}
                                href={subLink.href}
                                className="group flex items-center justify-between rounded-lg px-4 py-3 text-sm font-medium text-white transition-colors hover:bg-white/5 hover:text-[#1881c4]"
                              >
                                {subLink.name}
                                <ArrowRight className="h-4 w-4 opacity-0 transition-all group-hover:translate-x-1 group-hover:opacity-100" />
                              </Link>
                            ))}
                          </div>
                        </motion.div>
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
              className="text-white hover:text-[#1881c4] transition-colors"
            >
              <Search className="w-5 h-5" />
            </button>
            <div className="text-sm font-medium text-white border-l border-white/20 pl-4">
              Sales: +91 98765 43210
            </div>
            <Link
              href="/contact"
              className="group hidden items-center gap-2 rounded-lg bg-[#1881c4] px-5 py-2.5 text-sm font-medium text-white transition-all hover:bg-[#4F7DF3] lg:inline-flex shadow-lg shadow-[#1881c4]/20"
            >
              Book Free Demo
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
            </Link>
          </div>

          {/* Mobile Hamburger Button */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="flex h-10 w-10 items-center justify-center rounded-lg text-white transition-colors hover:bg-white/10 lg:hidden"
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
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
            onClick={() => setMobileOpen(false)}
          />
        )}
      </AnimatePresence>

      {/* Mobile Menu Panel */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", damping: 30, stiffness: 300 }}
            className="fixed right-0 top-0 z-40 flex h-full w-[80vw] max-w-sm flex-col overflow-y-auto bg-[#0A0A0A] pt-24 border-l border-white/10 shadow-2xl lg:hidden custom-scrollbar"
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
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.05, duration: 0.3 }}
                    className="border-b border-white/5 last:border-0"
                  >
                    {hasDropdown ? (
                      <div className="flex flex-col">
                        <button
                          onClick={() => toggleMobileDropdown(link.name)}
                          className={`flex w-full items-center justify-between py-4 pr-4 text-lg font-medium transition-colors hover:text-[#1881c4] ${
                            isActive || isDropdownOpen
                              ? "text-[#1881c4]"
                              : "text-white"
                          }`}
                        >
                          {link.name}
                          <ChevronDown
                            className={`h-5 w-5 transition-transform duration-300 ${
                              isDropdownOpen ? "rotate-180" : ""
                            }`}
                          />
                        </button>
                        <AnimatePresence>
                          {isDropdownOpen && (
                            <motion.div
                              initial={{ height: 0, opacity: 0 }}
                              animate={{ height: "auto", opacity: 1 }}
                              exit={{ height: 0, opacity: 0 }}
                              className="overflow-hidden"
                            >
                              <div className="mb-4 ml-4 flex flex-col gap-4 border-l border-white/10 pl-4 py-2">
                                {link.dropdown?.map((subLink) => (
                                  <Link
                                    key={subLink.name}
                                    href={subLink.href}
                                    className="text-base text-gray-400 hover:text-white transition-colors"
                                    onClick={() => setMobileOpen(false)}
                                  >
                                    {subLink.name}
                                  </Link>
                                ))}
                              </div>
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </div>
                    ) : (
                      <Link
                        href={link.href || "#"}
                        onClick={() => {
                          setMobileOpen(false);
                          if (link.href === "/") handleHomeClick();
                        }}
                        className={`block py-4 pr-4 text-lg font-medium transition-colors hover:text-[#1881c4] ${
                          isActive ? "text-[#1881c4]" : "text-white"
                        }`}
                      >
                        {link.name}
                      </Link>
                    )}
                  </motion.div>
                );
              })}
            </nav>

            <div className="mt-auto border-t border-white/10 bg-[#0A0A0A] px-6 py-6 sticky bottom-0 z-10">
              <div className="text-sm font-medium text-gray-400 flex items-center justify-between mb-4">
                <span>Sales Contact:</span>
                <span className="text-white">+91 98765 43210</span>
              </div>
              <Link
                href="/contact"
                onClick={() => setMobileOpen(false)}
                className="group flex w-full items-center justify-center gap-2 rounded-lg bg-[#1881c4] px-6 py-3.5 text-sm font-bold text-white transition-all hover:bg-[#4F7DF3] active:scale-[0.98]"
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
