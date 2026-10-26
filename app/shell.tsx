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
        <div className="w-full px-1 py-2 sticky top-0 z-50 bg-white/5 backdrop-blur-md [mask-image:linear-gradient(to_bottom,black_80%,transparent_100%)]">
          <Navbar />
        </div>
      )}

      <main className="w-full">{children}</main>

      {!isOnboarding && <Footer />}
    </div>
  );
}