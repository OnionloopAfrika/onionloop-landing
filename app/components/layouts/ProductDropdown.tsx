"use client"

import { useState, useMemo } from "react"
import { ChevronDownIcon } from "../icons/svgs"
import { useMode } from "../../context/ModeContext"

const productData = {
  personal: [
    { id: "qr-payments", title: "QR Payments", subtitle: "Send and receive money using QR codes." },
    { id: "payment-confirmation", title: "Cash Services", subtitle: "Deposit or withdraw cash through Onionloop agents." },
    { id: "money-transfer", title: "Money Transfer", subtitle: "Send money from Onionloop to your bank account." },
    { id: "personal-wallet", title: "Personal Wallet", subtitle: "Hold and manage money for daily transactions." },
    { id: "in-app-messaging", title: "In-app Messaging", subtitle: "Communicate transactions with other Onionloop users." },
    { id: "rewards", title: "Earn Rewards", subtitle: "Get OnionCoins for successful transactions." },
  ],
  business: [
    { id: "agency-banking", title: "Agency Banking", subtitle: "Get OnionCoins for eligible transactions." },
    { id: "payment-review", title: "Payment Review", subtitle: "Customers check payment details before paying." },
    { id: "payment-resolution", title: "Payment Resolution", subtitle: "Handle issues before a payment is completed." },
    { id: "business-wallet", title: "Business Wallet", subtitle: "Receive and track all business payments." },
    { id: "business-management", title: "Business Management", subtitle: "Manage staff access and inventory." },
    { id: "withdrawals", title: "Withdrawals", subtitle: "Withdraw and track all business payments." },
  ],
}

export default function ProductDropdown() {
  const [isOpen, setIsOpen] = useState(false)
  const { mode } = useMode()

  const currentCategories = useMemo(() => {
    return productData[mode as keyof typeof productData] || productData.personal
  }, [mode])

  const handleMouseEnter = () => {
    if (window.innerWidth >= 768) setIsOpen(true)
  }

  const handleMouseLeave = () => {
    if (window.innerWidth >= 768) setIsOpen(false)
  }

  return (
    <div className="relative w-full md:w-auto font-roboto">
      {/* Trigger Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        className="flex items-center justify-center gap-2 w-full md:w-auto text-sm text-(--text-main) hover:text-gray-900 transition-colors py-3 md:py-2 px-4 md:px-0"
      >
        Product
        <ChevronDownIcon isOpen={isOpen} />
      </button>

      {/* Dropdown Menu */}
      {isOpen && (
        <div
          className="md:absolute md:right-[50%] md:left-[50%] md:translate-x-[-50%] md:top-full md:mt-2 bg-[#F6FCE9] md:rounded-[20px] md:shadow-xl p-4 z-50 w-full md:min-w-105 max-h-[55vh] overflow-y-auto md:max-h-none md:overflow-visible scrollbar-green"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <div className="bg-white p-4 rounded-2xl space-y-4">
            <p className="hidden md:block text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-2 px-4">
              PRODUCT FOR {mode.toUpperCase()}
            </p>

            <div className="flex flex-col gap-4">
              {currentCategories.map((category) => (
                <a
                  key={category.id}
                  href={`/product/${mode}/${category.id}`}
                  className="block cursor-pointer px-4 py-3 rounded-xl border border-gray-50 transition-all hover:bg-[#F6FCE9] hover:border-[#D9EBB3] group/item"
                >
                  <div className="flex flex-col gap-1">
                    <p className="text-[14px] font-bold text-gray-900 tracking-[-0.24px] group-hover/item:text-[#0F7942]">
                      {category.title}
                    </p>
                    <p className="text-[12px] text-gray-500 tracking-[-0.24px] leading-snug">
                      {category.subtitle}
                    </p>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  )
}