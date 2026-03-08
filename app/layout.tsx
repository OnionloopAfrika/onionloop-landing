import type { Metadata, Viewport } from "next";
import "./globals.css";
import {
  Inter,
  Plus_Jakarta_Sans,
  Gentium_Book_Plus,
  Poppins
} from "next/font/google";
import { ModeProvider } from "./context/ModeContext";
import AOSProvider from "./context/AOSProvider";
import Shell from "./shell";
const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  weight: ["300", "400", "500", "600", "700"],
});

const pjs = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-pjs",
  weight: ["200", "300", "400", "500", "600", "700", "800"],
});

const gentium = Gentium_Book_Plus({
  subsets: ["latin"],
  variable: "--font-gentium",
  weight: ["400", "700"],
});

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-poppins"
});

export const viewport: Viewport = {
  themeColor: "#024E44",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL("https://www.staging.onionloopafrika.com"),
  title: {
    default: "Onionloop | Fast, Secure & Rewarding Payments in Africa",
    template: "%s | Onionloop Africa",
  },
  description: "Onionloop makes payments simple for everyday people and businesses across Africa. Scan QR codes, send money instantly, and earn rewards with every transaction.",
  keywords: ["Onionloop", "QR payments Africa", "instant money transfer", "digital wallet Nigeria", "business payment solutions Africa", "secure payments"],
  authors: [{ name: "Onionloop Team" }],
  creator: "Onionloop Africa",
  publisher: "Onionloop",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: "website",
    locale: "en_NG",
    url: "https://www.staging.onionloopafrika.com",
    siteName: "Onionloop Africa",
    title: "Onionloop | Making Payments Simple and Rewarding",
    description: "Join the loop. Experience the future of African payments with instant QR transfers and encrypted security.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Onionloop Africa - Simple Payments",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Onionloop | Simple & Rewarding Payments",
    description: "Scan. Pay. Chat. Join the payment revolution in Africa with Onionloop.",
    images: ["/og-image.png"],
    creator: "@onionloop",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: "/image.png",
    shortcut: "/image.png",
    apple: "/image.png",
  },
  manifest: "/site.webmanifest",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.variable} ${pjs.variable} ${gentium.variable} ${poppins.variable} font-sans bg-(--bg) text-(--text) antialiased`}>
        <AOSProvider>
          <ModeProvider>
            <Shell>
              <main className="w-full">{children}</main>
            </Shell>
          </ModeProvider>
        </AOSProvider>
      </body>
    </html>
  );
}