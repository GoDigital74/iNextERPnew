"use client";

import { Menu, Search, Bell, AlignLeft } from "lucide-react";
import { useUIStore } from "@/store/useUIStore";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Image from "next/image";

export function Header() {
  const { toggleSidebar } = useUIStore();

  return (
    <header className="h-16 bg-white/80 dark:bg-surface-900/80 backdrop-blur-md border-b border-border sticky top-0 z-30 flex items-center justify-between px-4 lg:px-8 transition-all">
      
      <div className="flex items-center gap-4 flex-1">
        <Button 
          variant="ghost" 
          size="icon" 
          onClick={toggleSidebar}
          className="text-muted-foreground hover:text-foreground"
        >
          <AlignLeft className="w-5 h-5" />
        </Button>

        {/* Global Search */}
        <div className="hidden md:flex items-center relative max-w-md w-full">
          <Search className="w-4 h-4 absolute left-3 text-muted-foreground" />
          <Input 
            placeholder="Search transactions, products, or customers..." 
            className="pl-9 bg-surface-50 dark:bg-surface-950 border-transparent focus-visible:ring-primary-500 rounded-full h-10"
          />
        </div>
      </div>

      <div className="flex items-center gap-3 md:gap-5">
        <Button variant="ghost" size="icon" className="relative text-muted-foreground hover:text-foreground">
          <Bell className="w-5 h-5" />
          <span className="absolute top-1.5 right-1.5 w-2 h-2 rounded-full bg-red-500 border-2 border-white dark:border-surface-900" />
        </Button>

        {/* User Profile */}
        <div className="flex items-center gap-3 pl-4 border-l border-border cursor-pointer group">
          <div className="text-right hidden sm:block">
            <p className="text-sm font-semibold text-foreground leading-none">Admin User</p>
            <p className="text-xs text-muted-foreground mt-1">Super Admin</p>
          </div>
          <div className="w-9 h-9 rounded-full bg-primary-100 overflow-hidden border border-border group-hover:ring-2 ring-primary-500 transition-all">
            <Image 
              src="https://i.pravatar.cc/150?u=admin" 
              alt="Profile" 
              width={36} 
              height={36} 
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </header>
  );
}
