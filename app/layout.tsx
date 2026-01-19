"use client";

import "./globals.css";
import { Inter, Plus_Jakarta_Sans, Gentium_Book_Plus } from "next/font/google";
import { ModeProvider, useMode } from "./context/ModeContext";
import Navbar from "./components/layouts/Navbar";
import Footer from "./components/layouts/Footer";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  weight: ["300", "400", "500", "600", "700"],
})

const pjs = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-pjs",
  weight: ["200", "300", "400", "500", "600", "700", "800"],
})

const gentium = Gentium_Book_Plus({
  subsets: ["latin"],
  variable: "--font-gentium",
  weight: ["400", "700"],
});

function Shell({ children }: { children: React.ReactNode }) {
  const { mode } = useMode();

  return (
    <div data-mode={mode} className="min-h-screen transition-colors">
      <Navbar />
      <main className="w-full">{children}</main>
      <Footer />
    </div>
  );
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${pjs.variable} ${gentium.variable} font-sans bg-(--bg) text-(--text)`}>
        <ModeProvider>
          <Shell>{children}</Shell>
        </ModeProvider>
      </body>
    </html>
  );
}
