"use client";

import { usePathname } from "next/navigation";
import Footer from "./components/layouts/Footer";
import Navbar from "./components/layouts/Navbar";
import { useMode } from "./context/ModeContext";

export default function Shell({ children }: Readonly<{ children: React.ReactNode }>) {
  const { mode } = useMode();
  const pathname = usePathname();

  const isOnboarding = pathname.startsWith("/onboarding");

  return (
    <div data-mode={mode} className="min-h-screen transition-colors">
      {!isOnboarding && (
        <div className="w-full p-4 sticky top-0 z-50">
          {/* Background blur and mask layer positioned behind the navbar content */}
          <div className="absolute inset-0 bg-white/5 backdrop-blur-md [mask-image:linear-gradient(to_bottom,black_80%,transparent_100%)] pointer-events-none" />
          
          {/* Navbar content wrapper sits safely above the mask, preventing dropdowns from hiding */}
          <div className="relative z-10">
            <Navbar />
          </div>
        </div>
      )}
      
      <main className="w-full">{children}</main>
      
      {!isOnboarding && <Footer />}
    </div>
  );
}