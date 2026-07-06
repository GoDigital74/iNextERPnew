import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";

export default function MarketingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="relative min-h-screen flex flex-col selection:bg-primary-500 selection:text-white">
      {/* The Navbar is fixed/sticky, so it sits on top. 
        We use flex-col and min-h-screen to ensure the footer is always pushed to the bottom.
      */}
      <Navbar />
      
      {/* The main content area expands to fill available space. 
        All marketing pages (like page.tsx) will be injected here.
      */}
      <main className="flex-1 flex flex-col w-full">
        {children}
      </main>

      <Footer />
    </div>
  );
}
