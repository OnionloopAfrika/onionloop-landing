"use client"

import { useState } from "react"
import ModeToggle from "./ModeToggle"
import ProductDropdown from "./ProductDropdown"
import { OnionLoop } from "../icons/svgs"
import Link from "next/link"

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <nav className="bg-white sticky top-0 z-50 border-b border-gray-200 w-[95%] mx-auto my-2 md:rounded-full rounded-3xl shadow-md">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo and Mode Toggle */}
          <div className="flex items-center gap-8">
            <div className="flex items-center gap-4">
              <Link href="/" aria-label="OnionLoop Home">
              <OnionLoop />
              </Link>
              <div className="hidden md:block">
                <ModeToggle />
              </div>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <ProductDropdown />
            <a href="/about" className="text-sm text-(--text-main) hover:text-gray-900 transition-colors">
              About Us
            </a>
            <a href="/contact" className="text-sm text-(--text-main) hover:text-gray-900 transition-colors">
              Contact Us
            </a>
            <button className="bg-(--primary) text-white text-sm rounded-xl px-6 py-3 transition-colors">
              Create your account
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center gap-4">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="md:hidden pb-4 border-t border-gray-200 space-y-4 pt-4 flex items-center flex-col justify-center">
            <ModeToggle />
            <ProductDropdown />
            <a
              href="/about"
              className="block text-sm text-(--text-main) hover:text-gray-900 py-2 transition-colors"
            >
              About Us
            </a>
            <a
              href="/contact"
              className="block text-sm text-(--text-main) hover:text-gray-900 py-2 transition-colors"
            >
              Contact Us
            </a>
            <button className="w-full bg-(--primary) text-white text-sm rounded-lg px-6 py-3 transition-colors">
              Create your account
            </button>
          </div>
        )}
      </div>
    </nav>
  )
}
