"use client";

import Footer from "./components/layouts/Footer";
import Navbar from "./components/layouts/Navbar";
import { useMode } from "./context/ModeContext";

export default function Shell({ children }: Readonly<{ children: React.ReactNode }>) {
  const { mode } = useMode();

  return (
    <div data-mode={mode} className="min-h-screen transition-colors">
      <Navbar />
      <main className="w-full">{children}</main>
      <Footer />
    </div>
  );
}