"use client"

import { useState, useMemo } from "react"
import { ChevronDownIcon } from "../icons/svgs"
import { useMode } from "../../context/ModeContext"
import {
  InActiveBank,
  InActiveCalendar,
  InActiveDocs,
  InActiveGift,
  InActiveMessaging,
  InActiveQrIcon,
  InActiveWallet,
  InActiveWithdrawal,
  InaActiveMoney
} from "../icons/products/svgs"

const productData = {
  personal: [
    { id: "qr-payments", title: "QR Payments", subtitle: "Send and receive money using QR codes.", icon: InActiveQrIcon },
    { id: "payment-confirmation", title: "Cash Services", subtitle: "Deposit or withdraw cash through Onionloop agents.", icon: InaActiveMoney },
    { id: "money-transfer", title: "Bank Transfer", subtitle: "Send money from Onionloop to your bank account.", icon: InActiveBank },
    { id: "personal-wallet", title: "Personal Wallet", subtitle: "Hold and manage money for daily transactions.", icon: InActiveWallet },
    { id: "in-app-messaging", title: "In-app Messaging", subtitle: "Communicate transactions with other Onionloop users.", icon: InActiveMessaging },
    { id: "rewards", title: "Earn Rewards", subtitle: "Get OnionCoins for successful transactions.", icon: InActiveGift },
  ],
  business: [
    { id: "agency-banking", title: "Agency Banking", subtitle: "Get OnionCoins for eligible transactions.", icon: InActiveQrIcon },
    { id: "payment-review", title: "Payment Review", subtitle: "Customers check payment details before paying.", icon: InActiveDocs },
    { id: "payment-resolution", title: "Payment Resolution", subtitle: "Handle issues before a payment is completed.", icon: InActiveQrIcon },
    { id: "business-wallet", title: "Business Wallet", subtitle: "Receive and track all business payments.", icon: InActiveWallet },
    { id: "business-management", title: "Business Management", subtitle: "Manage staff access and inventory.", icon: InActiveCalendar },
    { id: "withdrawals", title: "Withdrawals", subtitle: "Withdraw and track all business payments.", icon: InActiveWithdrawal },
  ],
}

export default function ProductDropdown() {
  const [isOpen, setIsOpen] = useState(false)
  const [hoveredId, setHoveredId] = useState<string | null>(null)
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
      <button
        onClick={() => setIsOpen(!isOpen)}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        className="flex items-center justify-center gap-2 w-full md:w-auto text-sm text-(--text-main) hover:text-gray-900 transition-colors py-3 md:py-2 px-4 md:px-0"
      >
        Product
        <ChevronDownIcon isOpen={isOpen} />
      </button>

      {isOpen && (
        <div
          className="md:absolute md:right-[50%] md:left-[50%] md:translate-x-[-50%] md:top-full md:mt-0 bg-[#F6FCE9] md:rounded-[20px] md:shadow-xl p-4 z-50 w-full md:min-w-105 max-h-[55vh] overflow-y-auto md:max-h-none md:overflow-visible scrollbar-green"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <div className="bg-white p-4 rounded-2xl space-y-4">
            <div className="flex flex-col gap-4">
              {currentCategories.map((category) => {
                const IconComponent = category.icon
                const isActive = hoveredId === category.id

                return (
                  <a
                    key={category.id}
                    href={`/product/${mode}/${category.id}`}
                    onMouseEnter={() => setHoveredId(category.id)}
                    onMouseLeave={() => setHoveredId(null)}
                    className="flex items-start gap-2 cursor-pointer px-4 py-3 rounded-xl border border-gray-50 transition-all hover:bg-[#F6FCE9] hover:border-[#D9EBB3] group/item"
                  >
                    <div className={`flex items-center justify-center min-w-10 h-10 rounded-lg transition-colors ${isActive ? 'bg-[#D9EBB3]' : 'bg-gray-50'}`}>
                      <IconComponent isActive={isActive} />
                    </div>
                    <div className="flex flex-col">
                      <p className={`text-[14px] font-bold tracking-[-0.24px] transition-colors ${isActive ? 'text-[#0F7942]' : 'text-gray-900'}`}>
                        {category.title}
                      </p>
                      <p className="text-[12px] text-gray-500 tracking-[-0.24px] leading-snug">
                        {category.subtitle}
                      </p>
                    </div>
                  </a>
                )
              })}
            </div>
          </div>
        </div>
      )}
    </div>
  )
}