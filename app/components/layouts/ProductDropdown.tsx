"use client"

import { useState } from "react"
import { ChevronDownIcon, CircleTicks, TicksIcon } from "../icons/svgs"

const productCategories = [
  {
    id: "qr-payments",
    title: "QR Payments",
    subtitle: "Customers scan your business QR code to pay",
    description: {
      whatYouCanDo: [
        "Get paid after customers scan your QR and confirms details.",
        "Each business has a unique QR linked directly to their wallet.",
        "No POS machines or terminals, just your phone or a printed QR.",
        "Both sender and receiver get instant payment confirmation.",
      ],
      whyChoose: ["Faster checkout experience", "Lower operational costs", "Easy setup and instant access"],
    },
  },
  {
    id: "wallet",
    title: "Wallet & Transaction History",
    subtitle: "Track incoming payments",
    description: {
      whatYouCanDo: [
        "View all your transaction history at a glance.",
        "Monitor payment status in real-time.",
        "Access transaction details anytime.",
        "Download transaction reports.",
      ],
      whyChoose: ["Complete payment visibility", "Better financial management", "Easy record keeping"],
    },
  },
  {
    id: "reporting",
    title: "Reporting & Insights",
    subtitle: "Access all transactions for bookkeeping",
    description: {
      whatYouCanDo: [
        "Generate detailed transaction reports.",
        "Analyze payment patterns.",
        "Track sales by period.",
        "Export data for accounting.",
      ],
      whyChoose: ["Data-driven insights", "Simplified bookkeeping", "Better business planning"],
    },
  },
]

export default function ProductDropdown() {
  const [isOpen, setIsOpen] = useState(false)
  const [hoveredCategory, setHoveredCategory] = useState<string | null>(null)

  return (
    <div className="relative group">
      <button
        onMouseEnter={() => setIsOpen(true)}
        onMouseLeave={() => setIsOpen(false)}
        className="flex items-center justify-center gap-2 text-sm text-(--text-main) hover:text-gray-900 transition-colors"
      >
        Product
        <ChevronDownIcon isOpen={isOpen} />
      </button>

      {isOpen && (
        <div
          className="absolute right-[50%] left-[50%] translate-x-[-50%] top-full mt-2 bg-[#EFF9D2] rounded-lg shadow-xl p-6 z-50 min-w-225"
          onMouseEnter={() => setIsOpen(true)}
          onMouseLeave={() => setIsOpen(false)}
        >
          <div className="grid grid-cols-2 gap-8 bg-white p-6 rounded-lg">
            {/* Product Categories Section */}
            <div className="">
              <p className="text-xs font-semibold text-gray-600 uppercase tracking-wide mb-4">PRODUCT CATEGORIES</p>
              <div className="space-y-3">
                {productCategories.map((category) => (
                  <div
                    key={category.id}
                    onMouseEnter={() => setHoveredCategory(category.id)}
                    className="cursor-pointer p-3 rounded-md transition-colors hover:bg-[#EFF9D2]"
                  >
                    <div className="flex items-start gap-3">
                      <div className="text-lg mt-1"></div>
                      <div>
                        <p className="text-(--text-tertiary) text-sm font-bold">{category.title}</p>
                        <p className="text-xs text-(--text-tertiary) mt-1">{category.subtitle}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Solutions Description Section */}
            {hoveredCategory && (
              <div className="bg-white p-4 rounded-md">
                {(() => {
                  const selected = productCategories.find((c) => c.id === hoveredCategory)
                  if (!selected) return null

                  return (
                    <div>
                      <p className="text-xs font-semibold text-gray-600 uppercase tracking-wide mb-4">OUR SOLUTIONS</p>

                      <p className="text-sm font-semibold text-gray-900 mb-3 flex items-center justify-start gap-2"><TicksIcon /> What you can do:</p>
                      <ul className="space-y-2 mb-4">
                        {selected.description.whatYouCanDo.map((item, idx) => (
                          <li key={idx} className="text-xs text-gray-700 flex gap-2">
                            <span className="text-[#0F7942] font-bold">•</span>
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>

                      <p className="text-sm font-semibold text-gray-900 mb-3 flex items-center justify-start gap-2 mt-4">
                        <CircleTicks />
                        Why businesses choose {selected.title}:
                      </p>
                      <ul className="space-y-2">
                        {selected.description.whyChoose.map((item, idx) => (
                          <li key={idx} className="text-xs text-gray-700 flex gap-2">
                            <span className="text-[#0F7942] font-bold">•</span>
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )
                })()}
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  )
}
