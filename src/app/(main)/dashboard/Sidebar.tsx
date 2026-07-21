"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import {
  LayoutDashboard,
  ShoppingCart,
  Package,
  Users,
  BarChart3,
  Settings,
  Receipt,
  Building2,
} from "lucide-react";
import { useUIStore } from "@/store/useUIStore";
import { cn } from "@/lib/utils";

const MENU_ITEMS = [
  { icon: LayoutDashboard, label: "Overview", href: "/dashboard" },
  { icon: ShoppingCart, label: "POS Billing", href: "/dashboard/pos" },
  { icon: Package, label: "Inventory", href: "/dashboard/inventory" },
  { icon: Receipt, label: "Accounting", href: "/dashboard/accounting" },
  { icon: Users, label: "CRM & Sales", href: "/dashboard/crm" },
  { icon: Building2, label: "Multi-Branch", href: "/dashboard/branches" },
  { icon: BarChart3, label: "Reports", href: "/dashboard/reports" },
  { icon: Settings, label: "Settings", href: "/dashboard/settings" },
];

export function Sidebar() {
  const pathname = usePathname();
  const { sidebarOpen } = useUIStore();

  return (
    <aside
      className={cn(
        "fixed top-0 left-0 z-40 h-screen bg-white dark:bg-surface-900 border-r border-border transition-all duration-300 ease-in-out flex flex-col",
        sidebarOpen ? "w-64" : "w-20 hidden lg:flex", // Hide completely on mobile when closed
      )}
    >
      {/* Brand Logo */}
      <div className="h-16 flex items-center justify-center border-b border-border px-4">
        <Link
          href="/dashboard"
          className="flex items-center gap-2 group w-full overflow-hidden"
        >
          <div className="min-w-[32px] h-8 rounded-lg bg-[#1881c4]  flex items-center justify-center text-white font-bold text-xl">
            i
          </div>
          <AnimatePresence>
            {sidebarOpen && (
              <motion.span
                initial={{ opacity: 0, width: 0 }}
                animate={{ opacity: 1, width: "auto" }}
                exit={{ opacity: 0, width: 0 }}
                className="text-xl font-bold tracking-tight text-foreground whitespace-nowrap"
              >
                Next<span className="text-[#1881c4]">ERP</span>
              </motion.span>
            )}
          </AnimatePresence>
        </Link>
      </div>

      {/* Navigation Links */}
      <nav className="flex-1 overflow-y-auto py-4 px-3 flex flex-col gap-1 custom-scrollbar">
        {MENU_ITEMS.map((item) => {
          const isActive = pathname === item.href;
          return (
            <Link key={item.label} href={item.href}>
              <div
                className={cn(
                  "flex items-center gap-3 px-3 py-2.5 rounded-lg transition-all group relative",
                  isActive
                    ? "bg-primary-50 dark:bg-primary-900/20 text-primary-700 dark:text-primary-400 font-medium"
                    : "text-muted-foreground hover:bg-surface-100 dark:hover:bg-surface-800 hover:text-foreground",
                )}
              >
                <item.icon
                  className={cn(
                    "w-5 h-5 shrink-0 transition-colors",
                    isActive ? "text-[#1881c4]" : "group-hover:text-foreground",
                  )}
                />

                {sidebarOpen && (
                  <span className="whitespace-nowrap">{item.label}</span>
                )}

                {/* Tooltip for collapsed state */}
                {!sidebarOpen && (
                  <div className="absolute left-14 bg-surface-800 text-white text-xs px-2 py-1 rounded opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all whitespace-nowrap z-50">
                    {item.label}
                  </div>
                )}
              </div>
            </Link>
          );
        })}
      </nav>
    </aside>
  );
}
