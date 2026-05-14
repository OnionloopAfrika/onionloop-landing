"use client"

import { useState, FormEvent } from "react"
import { OnionLoop } from "../icons/svgs"
import JoinTheLoop from "../sections/JoinTheLoop"

type SubscriptionStatus = "idle" | "success" | "already_subscribed" | "error"

export default function Footer() {
  const [email, setEmail] = useState<string>("")
  const [error, setError] = useState<string>("")
  const [status, setStatus] = useState<SubscriptionStatus>("idle")

  const validateEmail = (email: string): boolean => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
  }

  const handleSubscribe = (e: FormEvent) => {
    e.preventDefault()
    setError("")
    setStatus("idle")

    if (!email) {
      setError("Email field is required.")
      return
    }

    if (!validateEmail(email)) {
      setError("Please enter a valid email address.")
      return
    }

    if (email.toLowerCase() === "test@example.com") {
      setStatus("already_subscribed")
      return
    }

    setStatus("success")
    setEmail("")
  }

  const renderNewsletterInput = (isMobile: boolean) => (
    <div className={isMobile ? "w-full" : ""}>
      <form onSubmit={handleSubscribe} className="flex gap-2 border border-gray-300 rounded-lg overflow-hidden focus-within:ring-1 focus-within:ring-(--primary)">
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email address"
          className="flex-1 px-3 py-3 text-sm outline-none"
        />
        <button
          type="submit"
          className="px-4 py-3 bg-(--primary) text-white text-sm font-medium hover:bg-[#0a5a31] transition-colors whitespace-nowrap"
        >
          Subscribe
        </button>
      </form>

      {error && (
        <p className="mt-2 text-xs text-red-500 font-medium">
          {error}
        </p>
      )}

      {status === "success" && (
        <p className="mt-2 text-xs text-green-600 font-medium">
          Thank you for subscribing!
        </p>
      )}

      {status === "already_subscribed" && (
        <p className="mt-2 text-xs text-blue-600 font-medium">
          You are already subscribed to our newsletter.
        </p>
      )}
    </div>
  )

  return (
    <footer className="bg-white w-full px-4 py-8 md:py-12 relative overflow-clip">
      <JoinTheLoop />

      <div className="md:hidden space-y-6">
        <div className="pb-6 border-b border-dotted border-gray-300 w-full">
          <h3 className="text-lg font-bold text-(--primary) mb-2">Join our newsletter</h3>
          <p className="text-sm text-(--text-tertiary) mb-4">Get all the latest Onionloop news delivered to your inbox.</p>
          {renderNewsletterInput(true)}
        </div>

        <div className="pb-6 border-b border-dotted border-gray-300">
          <h4 className="text-sm font-normal text-(--text-tertiary) mb-3">Product For Personal</h4>
          <ul className="space-y-2">
            <li><a href="/product/personal/qr-payments" className="text-sm text-(--text-tertiary) hover:text-(--primary) font-semibold">QR Payment</a></li>
            <li><a href="/product/personal/payment-confirmation" className="text-sm text-(--text-tertiary) hover:text-(--primary) font-semibold">Cash Services</a></li>
            <li><a href="/product/personal/personal-wallet" className="text-sm text-(--text-tertiary) hover:text-(--primary) font-semibold">Personal Wallet</a></li>
            <li><a href="/product/personal/money-transfer" className="text-sm text-(--text-tertiary) hover:text-(--primary) font-semibold">Money Transfers</a></li>
            <li><a href="/product/personal/in-app-messaging" className="text-sm text-(--text-tertiary) hover:text-(--primary) font-semibold">In app Messaging</a></li>
            <li><a href="/product/personal/rewards" className="text-sm text-(--text-tertiary) hover:text-(--primary) font-semibold">Earn Rewards</a></li>
          </ul>
        </div>

        <div className="pb-6 border-b border-dotted border-gray-300">
          <h4 className="text-sm font-normal text-(--text-tertiary) mb-3">Product For Business</h4>
          <ul className="space-y-2">
            <li><a href="/product/business/agency-banking" className="text-sm text-(--text-tertiary) hover:text-(--primary) font-semibold">Agency Banking</a></li>
            <li><a href="/product/business/payment-review" className="text-sm text-(--text-tertiary) hover:text-(--primary) font-semibold">Payment Review</a></li>
            <li><a href="/product/business/payment-resolution" className="text-sm text-(--text-tertiary) hover:text-(--primary) font-semibold">Payment Resolution</a></li>
            <li><a href="/product/business/business-wallet" className="text-sm text-(--text-tertiary) hover:text-(--primary) font-semibold">Business Wallet</a></li>
            <li><a href="/product/business/business-management" className="text-sm text-(--text-tertiary) hover:text-(--primary) font-semibold">Business Management</a></li>
            <li><a href="/product/business/withdrawals" className="text-sm text-(--text-tertiary) hover:text-(--primary) font-semibold">Withdrawals</a></li>
          </ul>
        </div>

        <div className="pb-6 border-b border-dotted border-gray-300">
          <h4 className="text-sm font-normal text-(--text-tertiary) mb-3">Company</h4>
          <ul className="space-y-2">
            <li><a href="/about" className="text-sm text-(--text-tertiary) hover:text-(--primary) font-semibold">About Us</a></li>
            <li><a href="/contact" className="text-sm text-(--text-tertiary) hover:text-(--primary) font-semibold">Contact Us</a></li>
            <li><a href="/faq" className="text-sm text-(--text-tertiary) hover:text-(--primary) font-semibold">FAQ</a></li>
          </ul>
        </div>

        <div className="pb-6 border-b border-dotted border-gray-300">
          <h4 className="text-sm font-normal text-(--text-tertiary) mb-3">Support</h4>
          <ul className="space-y-2">
            <li><a href="/terms-of-service" className="text-sm text-(--text-tertiary) hover:text-(--primary) font-semibold">Terms of Service</a></li>
            <li><a href="/privacy-policy" className="text-sm text-(--text-tertiary) hover:text-(--primary) font-semibold">Privacy Policy</a></li>
            <li><a href="/security" className="text-sm text-(--text-tertiary) hover:text-(--primary) font-semibold">Security</a></li>
          </ul>
        </div>

        <div className="flex items-center gap-4">
          <span className="text-xs font-medium text-(--text-tertiary)">Connect with us</span>
          <div className="flex gap-3">
            <SocialLink ariaLabel="Facebook" path="M20 10C20 4.5 15.5 0 10 0C4.5 0 0 4.5 0 10C0 15 3.625 19.125 8.375 19.875V12.875H5.875V10H8.375V7.75C8.375 5.25 9.875 3.875 12.125 3.875C13.25 3.875 14.375 4.125 14.375 4.125V6.625H13.125C11.875 6.625 11.5 7.375 11.5 8.125V10H14.25L13.75 12.875H11.375V20C16.375 19.25 20 15 20 10Z" />
            <SocialLink ariaLabel="X" path="M20 1.875C19.25 2.25 18.5 2.375 17.625 2.5C18.5 2 19.125 1.25 19.375 0.25C18.625 0.75 17.75 1 16.75 1.25C16 0.5 14.875 0 13.75 0C11.125 0 9.125 2.5 9.75 5C6.375 4.875 3.375 3.25 1.25 0.75C0.125 2.625 0.75 5 2.5 6.25C1.875 6.25 1.25 6 0.625 5.75C0.625 7.625 2 9.375 3.875 9.875C3.25 10 2.625 10.125 2 10C2.5 11.625 4 12.875 5.875 12.875C4.375 14 2.125 14.625 0 14.375C1.875 15.5 4 16.25 6.25 16.25C13.875 16.25 18.125 9.875 17.875 4C18.75 3.5 19.5 2.75 20 1.875Z" />
            <SocialLink ariaLabel="Instagram" path="M10.375 1.875C13.125 1.875 13.5 1.875 14.625 1.875C15.625 1.875 16.125 2.125 16.5 2.25C17 2.5 17.375 2.625 17.75 3C18.125 3.375 18.375 3.75 18.5 4.25C18.625 4.625 18.75 5.125 18.875 6.125C18.875 7.25 18.875 7.5 18.875 10.375C18.875 13.25 18.875 13.5 18.875 14.625C18.875 15.625 18.625 16.125 18.5 16.5C18.25 17 18.125 17.375 17.75 17.75C17.375 18.125 17 18.375 16.5 18.5C16.125 18.625 15.625 18.75 14.625 18.875C13.5 18.875 13.25 18.875 10.375 18.875C7.5 18.875 7.25 18.875 6.125 18.875C5.125 18.875 4.625 18.625 4.25 18.5C3.75 18.25 3.375 18.125 3 17.75C2.625 17.375 2.375 17 2.25 16.5C2.125 16.125 2 15.625 1.875 14.625C1.875 13.5 1.875 13.25 1.875 10.375C1.875 7.5 1.875 7.25 1.875 6.125C1.875 5.125 2.125 4.625 2.25 4.25C2.5 3.75 2.625 3.375 3 3C3.375 2.625 3.75 2.375 4.25 2.25C4.625 2.125 5.125 2 6.125 1.875C7.25 1.875 7.625 1.875 10.375 1.875ZM10.375 0C7.5 0 7.25 0 6.125 0C5 0 4.25 0.250001 3.625 0.500001C3 0.750001 2.375 1.125 1.75 1.75C1.125 2.375 0.875001 2.875 0.500001 3.625C0.250001 4.25 0.125 5 0 6.125C0 7.25 0 7.625 0 10.375C0 13.25 0 13.5 0 14.625C0 15.75 0.250001 16.5 0.500001 17.125C0.750001 17.75 1.125 18.375 1.75 19C2.375 19.625 2.875 19.875 3.625 20.25C4.25 20.5 5 20.625 6.125 20.75C7.25 20.75 7.625 20.75 10.375 20.75C13.125 20.75 13.5 20.75 14.625 20.75C15.75 20.75 16.5 20.5 17.125 20.25C17.75 20 18.375 19.625 19 19C19.625 18.375 19.875 17.875 20.25 17.125C20.5 16.5 20.625 15.75 20.75 14.625C20.75 13.5 20.75 13.125 20.75 10.375C20.75 7.625 20.75 7.25 20.75 6.125C20.75 5 20.5 4.25 20.25 3.625C20 3 19.625 2.375 19 1.75C18.375 1.125 17.875 0.875001 17.125 0.500001C16.5 0.250001 15.75 0.125 14.625 0C13.5 0 13.25 0 10.375 0Z" />
            <SocialLink ariaLabel="LinkedIn" path="M4.50001 20H0.249996V6.625H4.50001V20ZM2.375 4.75C1 4.75 0 3.75 0 2.375C0 1 1.125 0 2.375 0C3.75 0 4.75 1 4.75 2.375C4.75 3.75 3.75 4.75 2.375 4.75ZM20 20H15.75V12.75C15.75 10.625 14.875 10 13.625 10C12.375 10 11.125 11 11.125 12.875V20H6.875V6.625H10.875V8.5C11.25 7.625 12.75 6.25 14.875 6.25C17.25 6.25 19.75 7.625 19.75 11.75V20H20Z" />
          </div>
        </div>

        <div className="pt-4 border-t border-dotted border-gray-300">
          <OnionLoop />
          <p className="text-xs text-gray-600">© 2026 Onionloop. All rights reserved.</p>
        </div>
      </div>

      <div className="hidden md:block max-w-7xl mx-auto ">
        <div className="absolute bottom-10 w-150 h-150 z-0 pointer-events-none">
          <OnionSvg />
        </div>
        <div className="relative z-10 flex flex-col justify-between items-start gap-12 pb-8 border-b border-dotted border-gray-300">
          <div className="w-full flex items-center justify-between">
            <div className="max-w-sm">
              <h3 className="text-lg font-bold text-(--primary) mb-2">Join our newsletter</h3>
              <p className="text-sm text-(--text-tertiary) mb-4">Get all the latest Onionloop news delivered to your inbox.</p>
            </div>
            <div className="max-w-sm w-full flex flex-col items-end">
              {renderNewsletterInput(false)}
            </div>
          </div>

          <div className=" w-full grid grid-cols-4 gap-8">
            <div>
              <h4 className="text-sm font-normal text-(--text-tertiary) mb-3">Product For Personal</h4>
              <ul className="space-y-2">
                <li><a href="/product/personal/qr-payments" className="text-sm text-(--text-tertiary) hover:text-(--primary) font-semibold">QR Payment</a></li>
                <li><a href="/product/personal/payment-confirmation" className="text-sm text-(--text-tertiary) hover:text-(--primary) font-semibold">Cash Services</a></li>
                <li><a href="/product/personal/personal-wallet" className="text-sm text-(--text-tertiary) hover:text-(--primary) font-semibold">Personal Wallet</a></li>
                <li><a href="/product/personal/money-transfer" className="text-sm text-(--text-tertiary) hover:text-(--primary) font-semibold">Money Transfers</a></li>
                <li><a href="/product/personal/in-app-messaging" className="text-sm text-(--text-tertiary) hover:text-(--primary) font-semibold">In app Messaging</a></li>
                <li><a href="/product/personal/rewards" className="text-sm text-(--text-tertiary) hover:text-(--primary) font-semibold">Earn Rewards</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-sm font-normal text-(--text-tertiary) mb-3">Product For Business</h4>
              <ul className="space-y-2">
                <li><a href="/product/business/agency-banking" className="text-sm text-(--text-tertiary) hover:text-(--primary) font-semibold">Agency Banking</a></li>
                <li><a href="/product/business/payment-review" className="text-sm text-(--text-tertiary) hover:text-(--primary) font-semibold">Payment Review</a></li>
                <li><a href="/product/business/payment-resolution" className="text-sm text-(--text-tertiary) hover:text-(--primary) font-semibold">Payment Resolution</a></li>
                <li><a href="/product/business/business-wallet" className="text-sm text-(--text-tertiary) hover:text-(--primary) font-semibold">Business Wallet</a></li>
                <li><a href="/product/business/business-management" className="text-sm text-(--text-tertiary) hover:text-(--primary) font-semibold">Business Management</a></li>
                <li><a href="/product/business/withdrawals" className="text-sm text-(--text-tertiary) hover:text-(--primary) font-semibold">Withdrawals</a></li>
              </ul>
            </div>

            <div>
              <h4 className="text-sm font-normal text-(--text-tertiary) mb-3">Company</h4>
              <ul className="space-y-2">
                <li><a href="/about" className="text-sm text-(--text-tertiary) hover:text-(--primary) font-semibold">About Us</a></li>
                <li><a href="/contact" className="text-sm text-(--text-tertiary) hover:text-(--primary) font-semibold">Contact Us</a></li>
                <li><a href="/faq" className="text-sm text-(--text-tertiary) hover:text-(--primary) font-semibold">FAQ</a></li>
              </ul>
            </div>

            <div>
              <h4 className="text-sm font-normal text-(--text-tertiary) mb-3">Support</h4>
              <ul className="space-y-2">
                <li><a href="#" className="text-sm text-(--text-tertiary) hover:text-(--primary) font-semibold">Terms of Service</a></li>
                <li><a href="#" className="text-sm text-(--text-tertiary) hover:text-(--primary) font-semibold">Privacy Policy</a></li>
                <li><a href="#" className="text-sm text-(--text-tertiary) hover:text-(--primary) font-semibold">Security</a></li>
              </ul>
            </div>
          </div>
        </div>

        <div className="flex justify-between items-center pt-8">
          <div>
            <OnionLoop />
            <p className="text-xs text-gray-600">© 2026 Onionloop. All rights reserved.</p>
          </div>

          <div className="flex items-center gap-4">
            <span className="text-xs font-medium text-(--text-tertiary)">Connect with us</span>
            <div className="flex gap-3">
              <SocialLink ariaLabel="Facebook" path="M20 10C20 4.5 15.5 0 10 0C4.5 0 0 4.5 0 10C0 15 3.625 19.125 8.375 19.875V12.875H5.875V10H8.375V7.75C8.375 5.25 9.875 3.875 12.125 3.875C13.25 3.875 14.375 4.125 14.375 4.125V6.625H13.125C11.875 6.625 11.5 7.375 11.5 8.125V10H14.25L13.75 12.875H11.375V20C16.375 19.25 20 15 20 10Z" />
              <SocialLink ariaLabel="X" path="M20 1.875C19.25 2.25 18.5 2.375 17.625 2.5C18.5 2 19.125 1.25 19.375 0.25C18.625 0.75 17.75 1 16.75 1.25C16 0.5 14.875 0 13.75 0C11.125 0 9.125 2.5 9.75 5C6.375 4.875 3.375 3.25 1.25 0.75C0.125 2.625 0.75 5 2.5 6.25C1.875 6.25 1.25 6 0.625 5.75C0.625 7.625 2 9.375 3.875 9.875C3.25 10 2.625 10.125 2 10C2.5 11.625 4 12.875 5.875 12.875C4.375 14 2.125 14.625 0 14.375C1.875 15.5 4 16.25 6.25 16.25C13.875 16.25 18.125 9.875 17.875 4C18.75 3.5 19.5 2.75 20 1.875Z" />
              <SocialLink ariaLabel="Instagram" path="M10.375 1.875C13.125 1.875 13.5 1.875 14.625 1.875C15.625 1.875 16.125 2.125 16.5 2.25C17 2.5 17.375 2.625 17.75 3C18.125 3.375 18.375 3.75 18.5 4.25C18.625 4.625 18.75 5.125 18.875 6.125C18.875 7.25 18.875 7.5 18.875 10.375C18.875 13.25 18.875 13.5 18.875 14.625C18.875 15.625 18.625 16.125 18.5 16.5C18.25 17 18.125 17.375 17.75 17.75C17.375 18.125 17 18.375 16.5 18.5C16.125 18.625 15.625 18.75 14.625 18.875C13.5 18.875 13.25 18.875 10.375 18.875C7.5 18.875 7.25 18.875 6.125 18.875C5.125 18.875 4.625 18.625 4.25 18.5C3.75 18.25 3.375 18.125 3 17.75C2.625 17.375 2.375 17 2.25 16.5C2.125 16.125 2 15.625 1.875 14.625C1.875 13.5 1.875 13.25 1.875 10.375C1.875 7.5 1.875 7.25 1.875 6.125C1.875 5.125 2.125 4.625 2.25 4.25C2.5 3.75 2.625 3.375 3 3C3.375 2.625 3.75 2.375 4.25 2.25C4.625 2.125 5.125 2 6.125 1.875C7.25 1.875 7.625 1.875 10.375 1.875ZM10.375 0C7.5 0 7.25 0 6.125 0C5 0 4.25 0.250001 3.625 0.500001C3 0.750001 2.375 1.125 1.75 1.75C1.125 2.375 0.875001 2.875 0.500001 3.625C0.250001 4.25 0.125 5 0 6.125C0 7.25 0 7.625 0 10.375C0 13.25 0 13.5 0 14.625C0 15.75 0.250001 16.5 0.500001 17.125C0.750001 17.75 1.125 18.375 1.75 19C2.375 19.625 2.875 19.875 3.625 20.25C4.25 20.5 5 20.625 6.125 20.75C7.25 20.75 7.625 20.75 10.375 20.75C13.125 20.75 13.5 20.75 14.625 20.75C15.75 20.75 16.5 20.5 17.125 20.25C17.75 20 18.375 19.625 19 19C19.625 18.375 19.875 17.875 20.25 17.125C20.5 16.5 20.625 15.75 20.75 14.625C20.75 13.5 20.75 13.125 20.75 10.375C20.75 7.625 20.75 7.25 20.75 6.125C20.75 5 20.5 4.25 20.25 3.625C20 3 19.625 2.375 19 1.75C18.375 1.125 17.875 0.875001 17.125 0.500001C16.5 0.250001 15.75 0.125 14.625 0C13.5 0 13.25 0 10.375 0Z" />
              <SocialLink ariaLabel="LinkedIn" path="M4.50001 20H0.249996V6.625H4.50001V20ZM2.375 4.75C1 4.75 0 3.75 0 2.375C0 1 1.125 0 2.375 0C3.75 0 4.75 1 4.75 2.375C4.75 3.75 3.75 4.75 2.375 4.75ZM20 20H15.75V12.75C15.75 10.625 14.875 10 13.625 10C12.375 10 11.125 11 11.125 12.875V20H6.875V6.625H10.875V8.5C11.25 7.625 12.75 6.25 14.875 6.25C17.25 6.25 19.75 7.625 19.75 11.75V20H20Z" />
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

const SocialLink = ({ ariaLabel, path }: { ariaLabel: string, path: string }) => (
  <a
    aria-label={ariaLabel}
    href="#"
    className="w-9 h-9 bg-(--primary) rounded-full flex items-center justify-center text-white hover:bg-(--primary)/20 transition-colors"
  >
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d={path} fill="white" />
    </svg>
  </a>
)

const OnionSvg = () => (
  <svg width="1200" height="797" viewBox="0 0 1200 797" fill="none" xmlns="http://www.w3.org/2000/svg">
    <g opacity="0.45">
      <path d="M603.107 989.149C549.314 989.149 493.397 985.986 434.649 979.659C161.435 925.882 3.59421 807.573 0.0551736 654.465C-3.48386 496.929 163.559 346.35 407.045 288.777C423.324 284.348 434.649 275.492 442.435 262.205C458.714 232.47 452.345 178.692 424.032 115.424C423.324 113.526 422.616 112.262 422.616 112.262C421.201 107.833 424.032 102.771 428.279 101.505C428.279 101.505 428.987 101.505 429.694 101.505C447.39 101.505 511.093 186.918 532.327 217.286C545.067 180.591 547.898 128.077 545.775 89.4843C545.775 86.3209 547.899 83.1578 550.73 81.8925C554.269 80.6271 557.808 80.6264 560.639 83.1571C582.581 98.974 594.613 138.201 601.692 173.631C612.309 123.017 629.296 71.1371 668.226 30.6459C671.057 28.1152 675.304 27.4826 679.551 28.7479C683.09 30.646 685.213 34.4429 684.505 37.6063C668.226 107.833 665.394 165.406 677.427 212.857C691.583 178.692 719.896 155.284 755.286 150.223C758.825 150.223 762.364 151.488 764.487 154.018C766.611 156.549 766.611 160.344 764.487 162.875C737.591 201.468 726.974 254.613 776.52 290.043C1097.86 365.332 1205.45 529.194 1199.79 656.994C1192.71 813.265 1032.04 937.902 790.677 975.23C730.513 984.088 667.518 989.149 602.4 989.149H603.107ZM454.468 146.425C467.916 186.916 477.118 236.266 458.007 270.431C448.805 288.145 432.526 299.533 411.292 305.86C176.3 361.536 14.2113 505.152 17.7504 655.096C21.2894 799.979 174.176 912.596 437.48 964.476C564.886 977.762 679.551 976.496 787.845 960.047C1020.01 923.984 1175.02 805.041 1182.09 656.994C1187.76 535.521 1083 379.251 770.858 306.493C769.442 306.493 768.734 305.86 767.319 305.227C722.019 274.226 711.402 224.245 738.298 173.631C711.402 185.652 692.999 212.856 688.044 247.653C688.044 251.449 684.505 254.614 680.258 254.614C676.011 255.246 671.765 252.715 670.349 249.551C650.53 202.1 646.991 143.895 659.732 72.4027C630.712 117.323 621.51 172.365 612.309 222.347L610.185 233.103C609.478 237.532 604.523 239.429 600.984 240.061C596.029 240.061 592.49 236.898 592.49 232.47C588.243 183.754 578.334 141.996 565.594 117.322C565.594 159.711 559.224 210.325 542.944 241.326C542.944 243.857 540.821 245.756 537.989 247.022C534.45 248.92 530.203 248.286 527.372 245.755C524.541 243.857 523.833 240.694 524.541 237.53C520.294 225.509 482.78 178.058 455.175 146.425H454.468Z" fill="#C7C7C7" fill-opacity="0.2" />
      <path fill-rule="evenodd" clip-rule="evenodd" d="M369.534 342.558C207.446 436.194 130.295 531.729 138.081 629.794C145.159 720.266 204.615 813.903 378.736 906.906L361.748 905.639C-53.0273 769.614 23.416 445.684 369.534 342.558Z" fill="#C7C7C7" fill-opacity="0.2" />
      <path fill-rule="evenodd" clip-rule="evenodd" d="M530.967 309.03C349.061 414.054 262.708 521.608 271.91 631.061C280.404 732.922 346.937 837.946 541.585 941.705L522.474 939.807C57.4444 787.332 143.089 424.178 530.967 308.398V309.03Z" fill="#C7C7C7" fill-opacity="0.2" />
      <path fill-rule="evenodd" clip-rule="evenodd" d="M865.748 342.558C1027.84 436.194 1104.99 531.729 1097.2 629.794C1090.12 720.266 1030.67 813.903 856.547 906.906L873.534 905.639C1288.31 769.614 1211.87 445.684 865.748 342.558Z" fill="#C7C7C7" fill-opacity="0.2" />
      <path fill-rule="evenodd" clip-rule="evenodd" d="M705.046 309.03C886.953 414.054 973.306 521.608 964.104 631.061C955.611 732.922 889.077 837.946 694.43 941.705L713.54 939.807C1178.57 787.332 1092.92 424.178 705.046 308.398V309.03Z" fill="#C7C7C7" fill-opacity="0.2" />
      <path fill-rule="evenodd" clip-rule="evenodd" d="M630.718 286.88C494.819 382.414 429.701 480.479 436.071 580.442C442.441 672.813 491.988 768.979 638.504 863.248L624.347 861.984C276.106 723.428 339.809 392.537 630.718 287.513V286.88Z" fill="#C7C7C7" fill-opacity="0.2" />
      <path fill-rule="evenodd" clip-rule="evenodd" d="M622.234 365.337C772.289 452.013 843.07 540.587 835.992 631.059C828.914 714.573 774.413 801.883 613.74 887.294L629.312 886.028C1012.94 760.125 942.163 460.871 622.234 365.337Z" fill="#C7C7C7" fill-opacity="0.2" />
      <path fill-rule="evenodd" clip-rule="evenodd" d="M426.844 84.4277C431.091 138.838 471.436 218.555 446.662 272.333C462.234 279.292 470.728 269.168 486.299 261.576C499.04 244.494 513.196 235.636 528.06 241.33C540.092 238.799 552.833 238.167 564.158 241.33C571.944 243.228 579.73 247.024 587.516 253.351C610.166 265.372 632.108 269.169 652.634 262.209C687.317 235.637 708.551 250.188 748.188 271.066C721.291 247.657 753.143 193.881 783.578 150.227C724.122 157.186 670.329 167.941 685.901 221.086C660.42 155.92 668.206 86.325 683.07 8.50586C617.244 76.2022 611.581 146.431 605.211 213.494C607.334 183.758 603.088 154.654 592.47 126.816C583.977 104.04 578.314 79.9981 554.957 59.7524C556.372 114.163 554.957 169.839 537.97 217.29C513.904 170.472 471.435 126.184 428.259 84.4277H426.844Z" fill="#C7C7C7" fill-opacity="0.1" />
      <path d="M455.896 282.455C451.65 282.455 447.403 281.822 441.741 279.291C437.494 277.393 435.37 272.965 437.493 268.536C453.065 235.637 441.74 190.717 430.415 147.695C424.753 124.919 419.09 103.408 417.675 84.4275C417.675 80.6315 419.798 77.4678 423.337 76.2024C426.876 74.9371 431.123 76.2024 433.955 78.1004C471.468 113.53 508.982 152.123 534.463 193.879C545.788 150.857 545.788 102.142 545.08 59.7523C545.08 56.5889 547.204 53.4258 550.743 52.1605C554.282 50.8951 558.529 51.5277 560.652 54.0584C582.594 72.406 589.672 93.9164 597.458 114.795L600.997 124.286C602.413 128.715 603.828 132.51 605.244 136.939C614.445 92.0188 632.14 47.0991 675.317 2.81183C678.148 0.281132 682.395 -0.984142 685.934 0.913885C689.473 2.81191 691.596 5.97622 690.889 9.77227C680.979 64.815 671.778 121.754 681.687 176.164C700.09 152.123 741.143 145.797 781.488 141.368C785.027 141.368 788.566 142.633 790.69 145.164C792.813 147.695 792.813 151.492 790.69 154.022C764.501 191.983 731.941 245.128 753.883 264.74C757.422 267.904 757.423 272.332 754.591 275.495C751.76 278.658 746.806 279.924 742.559 277.393L735.48 273.597C700.798 255.249 685.226 246.392 658.33 267.903C657.622 267.903 656.914 269.168 655.498 269.168C633.556 277.393 608.783 274.23 582.594 260.311C574.808 254.617 568.438 250.822 561.36 248.924C552.158 246.393 542.249 246.393 530.216 248.924C528.093 248.924 525.97 248.924 524.554 248.924C521.015 247.658 511.106 243.862 494.118 266.638C493.41 267.904 491.995 268.535 490.579 269.168C487.04 271.066 483.501 272.965 480.67 274.23C473.592 278.659 465.806 283.087 456.604 283.087L455.896 282.455Z" fill="#A8A8A8" fill-opacity="0.05" />
    </g>
  </svg>
)