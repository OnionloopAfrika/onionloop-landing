"use client"

import { OnionLoop } from "../icons/svgs"
import JoinTheLoop from "../sections/JoinTheLoop"


export default function Footer() {

  return (
    <footer className="bg-white w-full px-4 py-8 md:py-12">
      <JoinTheLoop />
      {/* Mobile Layout */}
      <div className="md:hidden space-y-6">
        {/* Newsletter */}
        <div className="pb-6 border-b border-dotted border-gray-300">
          <h3 className="text-lg font-bold text-(--primary) mb-2">Join our newsletter</h3>
          <p className="text-sm text-(--text-tertiary) mb-4">Get all the latest Onionloop news delivered to your inbox.</p>
          <div className="flex gap-2 border border-gray-300 rounded-lg max-w-full">
            <input
              type="email"
              placeholder="Email address"
              className="flex-1 px-3 py-3 text-sm"
            />
            <button className="px-4 py-3 bg-(--primary) text-white text-sm font-medium rounded-lg hover:bg-[#0a5a31] transition-colors">
              Subscribe
            </button>
          </div>
        </div>

        {/* Product */}

        {/* ======================================================= */}
        <div className="pb-6 border-b border-dotted border-gray-300">
          <h4 className="text-sm font-normal text-(--text-tertiary) mb-3">Product For Personal</h4>
          <ul className="space-y-2">
            <li>
              <a href="/product/personal/qr-payments" className="text-sm text-(--text-tertiary) hover:text-(--primary) font-semibold">
                QR Payment
              </a>
            </li>
            <li>
              <a href="/product/personal/payment-confirmation" className="text-sm text-(--text-tertiary) hover:text-(--primary) font-semibold">
                Cash Services
              </a>
            </li>
            <li>
              <a href="/product/personal/personal-wallet" className="text-sm text-(--text-tertiary) hover:text-(--primary) font-semibold">
                Personal Wallet
              </a>
            </li>
            <li>
              <a href="/product/personal/money-transfer" className="text-sm text-(--text-tertiary) hover:text-(--primary) font-semibold">
                Money Transfers
              </a>
            </li>
            <li>
              <a href="/product/personal/in-app-messaging" className="text-sm text-(--text-tertiary) hover:text-(--primary) font-semibold">
                In app Messaging
              </a>
            </li>
            <li>
              <a href="/product/personal/rewards" className="text-sm text-(--text-tertiary) hover:text-(--primary) font-semibold">
                Earn Rewards
              </a>
            </li>
          </ul>
        </div>

        {/* =============================  */}
        <div className="pb-6 border-b border-dotted border-gray-300">
          <h4 className="text-sm font-normal text-(--text-tertiary) mb-3">Product For Business</h4>
          <ul className="space-y-2">
            <li>
              <a href="/product/business/agency-banking" className="text-sm text-(--text-tertiary) hover:text-(--primary) font-semibold">
                Agency Banking
              </a>
            </li>
            <li>
              <a href="/product/business/payment-review" className="text-sm text-(--text-tertiary) hover:text-(--primary) font-semibold">
                Payment Review
              </a>
            </li>
            <li>
              <a href="/product/business/payment-resolution" className="text-sm text-(--text-tertiary) hover:text-(--primary) font-semibold">
                Payment Resolution
              </a>
            </li>
            <li>
              <a href="/product/business/business-wallet" className="text-sm text-(--text-tertiary) hover:text-(--primary) font-semibold">
                Business Wallet
              </a>
            </li>
            <li>
              <a href="/product/business/business-management" className="text-sm text-(--text-tertiary) hover:text-(--primary) font-semibold">
                Business Management
              </a>
            </li>
            <li>
              <a href="/product/business/withdrawals" className="text-sm text-(--text-tertiary) hover:text-(--primary) font-semibold">
                Withdrawals
              </a>
            </li>
          </ul>
        </div>



        {/* Company */}
        <div className="pb-6 border-b border-dotted border-gray-300">
          <h4 className="text-sm font-normal text-(--text-tertiary) mb-3">Company</h4>
          <ul className="space-y-2">
            <li>
              <a href="/about" className="text-sm text-(--text-tertiary) hover:text-(--primary) font-semibold">
                About Us
              </a>
            </li>
            <li>
              <a href="/contact" className="text-sm text-(--text-tertiary) hover:text-(--primary) font-semibold">
                Contact Us
              </a>
            </li>
            <li>
              <a href="/faq" className="text-sm text-(--text-tertiary) hover:text-(--primary) font-semibold">
                FAQ
              </a>
            </li>
          </ul>
        </div>

        {/* Support */}
        <div className="pb-6 border-b border-dotted border-gray-300">
          <h4 className="text-sm font-normal text-(--text-tertiary) mb-3">Support</h4>
          <ul className="space-y-2">
            <li>
              <a href="/terms-of-service" className="text-sm text-(--text-tertiary) hover:text-(--primary) font-semibold">
                Terms of Service
              </a>
            </li>
            <li>
              <a href="/privacy-policy" className="text-sm text-(--text-tertiary) hover:text-(--primary) font-semibold">
                Privacy Policy
              </a>
            </li>
            <li>
              <a href="/security" className="text-sm text-(--text-tertiary) hover:text-(--primary) font-semibold">
                Security
              </a>
            </li>
          </ul>
        </div>

        {/* Social */}
        <div className="flex items-center gap-4">
          <span className="text-xs font-medium text-(--text-tertiary)">Connect with us</span>
          <div className="flex gap-3">
            <a
              aria-label="Facebook"
              href="#"
              className="w-9 h-9 bg-(--primary) rounded-full flex items-center justify-center text-white hover:bg-(--primary)/20 transition-colors"
            >
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M20 10C20 4.5 15.5 0 10 0C4.5 0 0 4.5 0 10C0 15 3.625 19.125 8.375 19.875V12.875H5.875V10H8.375V7.75C8.375 5.25 9.875 3.875 12.125 3.875C13.25 3.875 14.375 4.125 14.375 4.125V6.625H13.125C11.875 6.625 11.5 7.375 11.5 8.125V10H14.25L13.75 12.875H11.375V20C16.375 19.25 20 15 20 10Z" fill="white" />
              </svg>

            </a>
            <a
              aria-label="X"
              href="#"
              className="w-9 h-9 bg-(--primary) rounded-full flex items-center justify-center text-white hover:bg-(--primary)/20 transition-colors"
            >
              <svg width="20" height="17" viewBox="0 0 20 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M20 1.875C19.25 2.25 18.5 2.375 17.625 2.5C18.5 2 19.125 1.25 19.375 0.25C18.625 0.75 17.75 1 16.75 1.25C16 0.5 14.875 0 13.75 0C11.125 0 9.125 2.5 9.75 5C6.375 4.875 3.375 3.25 1.25 0.75C0.125 2.625 0.75 5 2.5 6.25C1.875 6.25 1.25 6 0.625 5.75C0.625 7.625 2 9.375 3.875 9.875C3.25 10 2.625 10.125 2 10C2.5 11.625 4 12.875 5.875 12.875C4.375 14 2.125 14.625 0 14.375C1.875 15.5 4 16.25 6.25 16.25C13.875 16.25 18.125 9.875 17.875 4C18.75 3.5 19.5 2.75 20 1.875Z" fill="white" />
              </svg>
            </a>
            <a
              aria-label="Instagram"
              href="#"
              className="w-9 h-9 bg-(--primary) rounded-full flex items-center justify-center text-white hover:bg-(--primary)/20 transition-colors"
            >
              <svg width="21" height="21" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M10.375 1.875C13.125 1.875 13.5 1.875 14.625 1.875C15.625 1.875 16.125 2.125 16.5 2.25C17 2.5 17.375 2.625 17.75 3C18.125 3.375 18.375 3.75 18.5 4.25C18.625 4.625 18.75 5.125 18.875 6.125C18.875 7.25 18.875 7.5 18.875 10.375C18.875 13.25 18.875 13.5 18.875 14.625C18.875 15.625 18.625 16.125 18.5 16.5C18.25 17 18.125 17.375 17.75 17.75C17.375 18.125 17 18.375 16.5 18.5C16.125 18.625 15.625 18.75 14.625 18.875C13.5 18.875 13.25 18.875 10.375 18.875C7.5 18.875 7.25 18.875 6.125 18.875C5.125 18.875 4.625 18.625 4.25 18.5C3.75 18.25 3.375 18.125 3 17.75C2.625 17.375 2.375 17 2.25 16.5C2.125 16.125 2 15.625 1.875 14.625C1.875 13.5 1.875 13.25 1.875 10.375C1.875 7.5 1.875 7.25 1.875 6.125C1.875 5.125 2.125 4.625 2.25 4.25C2.5 3.75 2.625 3.375 3 3C3.375 2.625 3.75 2.375 4.25 2.25C4.625 2.125 5.125 2 6.125 1.875C7.25 1.875 7.625 1.875 10.375 1.875ZM10.375 0C7.5 0 7.25 0 6.125 0C5 0 4.25 0.250001 3.625 0.500001C3 0.750001 2.375 1.125 1.75 1.75C1.125 2.375 0.875001 2.875 0.500001 3.625C0.250001 4.25 0.125 5 0 6.125C0 7.25 0 7.625 0 10.375C0 13.25 0 13.5 0 14.625C0 15.75 0.250001 16.5 0.500001 17.125C0.750001 17.75 1.125 18.375 1.75 19C2.375 19.625 2.875 19.875 3.625 20.25C4.25 20.5 5 20.625 6.125 20.75C7.25 20.75 7.625 20.75 10.375 20.75C13.125 20.75 13.5 20.75 14.625 20.75C15.75 20.75 16.5 20.5 17.125 20.25C17.75 20 18.375 19.625 19 19C19.625 18.375 19.875 17.875 20.25 17.125C20.5 16.5 20.625 15.75 20.75 14.625C20.75 13.5 20.75 13.125 20.75 10.375C20.75 7.625 20.75 7.25 20.75 6.125C20.75 5 20.5 4.25 20.25 3.625C20 3 19.625 2.375 19 1.75C18.375 1.125 17.875 0.875001 17.125 0.500001C16.5 0.250001 15.75 0.125 14.625 0C13.5 0 13.25 0 10.375 0Z" fill="white" />
                <path d="M10.375 5C7.375 5 5 7.375 5 10.375C5 13.375 7.375 15.75 10.375 15.75C13.375 15.75 15.75 13.375 15.75 10.375C15.75 7.375 13.375 5 10.375 5ZM10.375 13.875C8.5 13.875 6.875 12.375 6.875 10.375C6.875 8.5 8.375 6.875 10.375 6.875C12.25 6.875 13.875 8.375 13.875 10.375C13.875 12.25 12.25 13.875 10.375 13.875Z" fill="white" />
                <path d="M15.875 6.125C16.5654 6.125 17.125 5.56536 17.125 4.875C17.125 4.18464 16.5654 3.625 15.875 3.625C15.1846 3.625 14.625 4.18464 14.625 4.875C14.625 5.56536 15.1846 6.125 15.875 6.125Z" fill="white" />
              </svg>

            </a>
            <a
              aria-label="LinkedIn"
              href="#"
              className="w-9 h-9 bg-(--primary) rounded-full flex items-center justify-center text-white hover:bg-(--primary)/20 transition-colors"
            >
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M4.50001 20H0.249996V6.625H4.50001V20ZM2.375 4.75C1 4.75 0 3.75 0 2.375C0 1 1.125 0 2.375 0C3.75 0 4.75 1 4.75 2.375C4.75 3.75 3.75 4.75 2.375 4.75ZM20 20H15.75V12.75C15.75 10.625 14.875 10 13.625 10C12.375 10 11.125 11 11.125 12.875V20H6.875V6.625H10.875V8.5C11.25 7.625 12.75 6.25 14.875 6.25C17.25 6.25 19.75 7.625 19.75 11.75V20H20Z" fill="white" />
              </svg>

            </a>
          </div>
        </div>

        {/* Copyright */}
        <div className="pt-4 border-t border-dotted border-gray-300">
          <OnionLoop />
          <p className="text-xs text-gray-600">© 2026 Onionloop. All rights reserved.</p>
        </div>
      </div>

      {/* Desktop Layout */}
      <div className="hidden md:block max-w-7xl mx-auto">
        {/* Top Section */}
        <div className="flex flex-col justify-between items-start gap-12 pb-8 border-b border-dotted border-gray-300">
          <div className="w-full flex items-center justify-between">
            {/* Newsletter */}
            <div className="max-w-sm">
              <h3 className="text-lg font-bold text-(--primary) mb-2">Join our newsletter</h3>
              <p className="text-sm text-(--text-tertiary) mb-4">Get all the latest Onionloop news delivered to your inbox.</p>
            </div>

            {/* Newsletter Input */}
            <div className="flex gap-2 border border-gray-300 rounded-lg">
              <input
                type="email"
                placeholder="Email address"
                className="px-3 py-3 text-sm"
              />
              <button className="px-4 py-3 bg-(--primary) text-white text-sm font-medium rounded-lg hover:bg-[#0a5a31] transition-colors whitespace-nowrap">
                Subscribe
              </button>
            </div>
          </div>


          {/* Links Columns */}
          <div className=" w-full grid grid-cols-4 gap-8">
            {/* Product */}
            <div>
              <h4 className="text-sm font-normal text-(--text-tertiary) mb-3">Product For Personal</h4>
              <ul className="space-y-2">
                <li>
                  <a href="/product/personal/qr-payments" className="text-sm text-(--text-tertiary) hover:text-(--primary) font-semibold">
                    QR Payment
                  </a>
                </li>
                <li>
                  <a href="/product/personal/payment-confirmation" className="text-sm text-(--text-tertiary) hover:text-(--primary) font-semibold">
                    Cash Services
                  </a>
                </li>
                <li>
                  <a href="/product/personal/personal-wallet" className="text-sm text-(--text-tertiary) hover:text-(--primary) font-semibold">
                    Personal Wallet
                  </a>
                </li>
                <li>
                  <a href="/product/personal/money-transfer" className="text-sm text-(--text-tertiary) hover:text-(--primary) font-semibold">
                    Money Transfers
                  </a>
                </li>
                <li>
                  <a href="/product/personal/in-app-messaging" className="text-sm text-(--text-tertiary) hover:text-(--primary) font-semibold">
                    In app Messaging
                  </a>
                </li>
                <li>
                  <a href="/product/personal/rewards" className="text-sm text-(--text-tertiary) hover:text-(--primary) font-semibold">
                    Earn Rewards
                  </a>
                </li>
              </ul>
            </div>
            {/* ================================== */}
            <div>
              <h4 className="text-sm font-normal text-(--text-tertiary) mb-3">Product For Business</h4>
              <ul className="space-y-2">
                <li>
                  <a href="/product/business/agency-banking" className="text-sm text-(--text-tertiary) hover:text-(--primary) font-semibold">
                    Agency Banking
                  </a>
                </li>
                <li>
                  <a href="/product/business/payment-review" className="text-sm text-(--text-tertiary) hover:text-(--primary) font-semibold">
                    Payment Review
                  </a>
                </li>
                <li>
                  <a href="/product/business/payment-resolution" className="text-sm text-(--text-tertiary) hover:text-(--primary) font-semibold">
                    Payment Resolution
                  </a>
                </li>
                <li>
                  <a href="/product/business/business-wallet" className="text-sm text-(--text-tertiary) hover:text-(--primary) font-semibold">
                    Business Wallet
                  </a>
                </li>
                <li>
                  <a href="/product/business/business-management" className="text-sm text-(--text-tertiary) hover:text-(--primary) font-semibold">
                    Business Management
                  </a>
                </li>
                <li>
                  <a href="/product/business/withdrawals" className="text-sm text-(--text-tertiary) hover:text-(--primary) font-semibold">
                    Withdrawals
                  </a>
                </li>
              </ul>
            </div>

            {/* Company */}
            <div>
              <h4 className="text-sm font-normal text-(--text-tertiary) mb-3">Company</h4>
              <ul className="space-y-2">
                <li>
                  <a href="/about" className="text-sm text-(--text-tertiary) hover:text-(--primary) font-semibold">
                    About Us
                  </a>
                </li>
                <li>
                  <a href="/contact" className="text-sm text-(--text-tertiary) hover:text-(--primary) font-semibold">
                    Contact Us
                  </a>
                </li>
                <li>
                  <a href="/faq" className="text-sm text-(--text-tertiary) hover:text-(--primary) font-semibold">
                    FAQ
                  </a>
                </li>
              </ul>
            </div>

            {/* Support */}
            <div>
              <h4 className="text-sm font-normal text-(--text-tertiary) mb-3">Support</h4>
              <ul className="space-y-2">
                <li>
                  <a href="#" className="text-sm text-(--text-tertiary) hover:text-(--primary) font-semibold">
                    Terms of Service
                  </a>
                </li>
                <li>
                  <a href="#" className="text-sm text-(--text-tertiary) hover:text-(--primary) font-semibold">
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a href="#" className="text-sm text-(--text-tertiary) hover:text-(--primary) font-semibold">
                    Security
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="flex justify-between items-center pt-8">
          <div>
            <OnionLoop />
            <p className="text-xs text-gray-600">© 2026 Onionloop. All rights reserved.</p>
          </div>

          {/* Social */}
          <div className="flex items-center gap-4">
            <span className="text-xs font-medium text-(--text-tertiary)">Connect with us</span>
            <div className="flex gap-3">
              <a
                aria-label="Facebook"
                href="#"
                className="w-9 h-9 bg-(--primary) rounded-full flex items-center justify-center text-white hover:bg-(--primary)/20 transition-colors"
              >
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M20 10C20 4.5 15.5 0 10 0C4.5 0 0 4.5 0 10C0 15 3.625 19.125 8.375 19.875V12.875H5.875V10H8.375V7.75C8.375 5.25 9.875 3.875 12.125 3.875C13.25 3.875 14.375 4.125 14.375 4.125V6.625H13.125C11.875 6.625 11.5 7.375 11.5 8.125V10H14.25L13.75 12.875H11.375V20C16.375 19.25 20 15 20 10Z" fill="white" />
                </svg>

              </a>
              <a
                aria-label="X"
                href="#"
                className="w-9 h-9 bg-(--primary) rounded-full flex items-center justify-center text-white hover:bg-(--primary)/20 transition-colors"
              >
                <svg width="20" height="17" viewBox="0 0 20 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M20 1.875C19.25 2.25 18.5 2.375 17.625 2.5C18.5 2 19.125 1.25 19.375 0.25C18.625 0.75 17.75 1 16.75 1.25C16 0.5 14.875 0 13.75 0C11.125 0 9.125 2.5 9.75 5C6.375 4.875 3.375 3.25 1.25 0.75C0.125 2.625 0.75 5 2.5 6.25C1.875 6.25 1.25 6 0.625 5.75C0.625 7.625 2 9.375 3.875 9.875C3.25 10 2.625 10.125 2 10C2.5 11.625 4 12.875 5.875 12.875C4.375 14 2.125 14.625 0 14.375C1.875 15.5 4 16.25 6.25 16.25C13.875 16.25 18.125 9.875 17.875 4C18.75 3.5 19.5 2.75 20 1.875Z" fill="white" />
                </svg>
              </a>
              <a
                aria-label="Instagram"
                href="#"
                className="w-9 h-9 bg-(--primary) rounded-full flex items-center justify-center text-white hover:bg-(--primary)/20 transition-colors"
              >
                <svg width="21" height="21" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M10.375 1.875C13.125 1.875 13.5 1.875 14.625 1.875C15.625 1.875 16.125 2.125 16.5 2.25C17 2.5 17.375 2.625 17.75 3C18.125 3.375 18.375 3.75 18.5 4.25C18.625 4.625 18.75 5.125 18.875 6.125C18.875 7.25 18.875 7.5 18.875 10.375C18.875 13.25 18.875 13.5 18.875 14.625C18.875 15.625 18.625 16.125 18.5 16.5C18.25 17 18.125 17.375 17.75 17.75C17.375 18.125 17 18.375 16.5 18.5C16.125 18.625 15.625 18.75 14.625 18.875C13.5 18.875 13.25 18.875 10.375 18.875C7.5 18.875 7.25 18.875 6.125 18.875C5.125 18.875 4.625 18.625 4.25 18.5C3.75 18.25 3.375 18.125 3 17.75C2.625 17.375 2.375 17 2.25 16.5C2.125 16.125 2 15.625 1.875 14.625C1.875 13.5 1.875 13.25 1.875 10.375C1.875 7.5 1.875 7.25 1.875 6.125C1.875 5.125 2.125 4.625 2.25 4.25C2.5 3.75 2.625 3.375 3 3C3.375 2.625 3.75 2.375 4.25 2.25C4.625 2.125 5.125 2 6.125 1.875C7.25 1.875 7.625 1.875 10.375 1.875ZM10.375 0C7.5 0 7.25 0 6.125 0C5 0 4.25 0.250001 3.625 0.500001C3 0.750001 2.375 1.125 1.75 1.75C1.125 2.375 0.875001 2.875 0.500001 3.625C0.250001 4.25 0.125 5 0 6.125C0 7.25 0 7.625 0 10.375C0 13.25 0 13.5 0 14.625C0 15.75 0.250001 16.5 0.500001 17.125C0.750001 17.75 1.125 18.375 1.75 19C2.375 19.625 2.875 19.875 3.625 20.25C4.25 20.5 5 20.625 6.125 20.75C7.25 20.75 7.625 20.75 10.375 20.75C13.125 20.75 13.5 20.75 14.625 20.75C15.75 20.75 16.5 20.5 17.125 20.25C17.75 20 18.375 19.625 19 19C19.625 18.375 19.875 17.875 20.25 17.125C20.5 16.5 20.625 15.75 20.75 14.625C20.75 13.5 20.75 13.125 20.75 10.375C20.75 7.625 20.75 7.25 20.75 6.125C20.75 5 20.5 4.25 20.25 3.625C20 3 19.625 2.375 19 1.75C18.375 1.125 17.875 0.875001 17.125 0.500001C16.5 0.250001 15.75 0.125 14.625 0C13.5 0 13.25 0 10.375 0Z" fill="white" />
                  <path d="M10.375 5C7.375 5 5 7.375 5 10.375C5 13.375 7.375 15.75 10.375 15.75C13.375 15.75 15.75 13.375 15.75 10.375C15.75 7.375 13.375 5 10.375 5ZM10.375 13.875C8.5 13.875 6.875 12.375 6.875 10.375C6.875 8.5 8.375 6.875 10.375 6.875C12.25 6.875 13.875 8.375 13.875 10.375C13.875 12.25 12.25 13.875 10.375 13.875Z" fill="white" />
                  <path d="M15.875 6.125C16.5654 6.125 17.125 5.56536 17.125 4.875C17.125 4.18464 16.5654 3.625 15.875 3.625C15.1846 3.625 14.625 4.18464 14.625 4.875C14.625 5.56536 15.1846 6.125 15.875 6.125Z" fill="white" />
                </svg>

              </a>
              <a
                aria-label="LinkedIn"
                href="#"
                className="w-9 h-9 bg-(--primary) rounded-full flex items-center justify-center text-white hover:bg-(--primary)/20 transition-colors"
              >
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M4.50001 20H0.249996V6.625H4.50001V20ZM2.375 4.75C1 4.75 0 3.75 0 2.375C0 1 1.125 0 2.375 0C3.75 0 4.75 1 4.75 2.375C4.75 3.75 3.75 4.75 2.375 4.75ZM20 20H15.75V12.75C15.75 10.625 14.875 10 13.625 10C12.375 10 11.125 11 11.125 12.875V20H6.875V6.625H10.875V8.5C11.25 7.625 12.75 6.25 14.875 6.25C17.25 6.25 19.75 7.625 19.75 11.75V20H20Z" fill="white" />
                </svg>

              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
