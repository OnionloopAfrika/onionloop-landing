"use client"

import { useMode } from "../../context/ModeContext"

export default function Steps() {
  const { mode } = useMode()

  const personalSteps = [
    {
      title: "Download App",
      description: "Get Onionloop from App Store or Google Play. Create your account in seconds.",
    },
    {
      title: "Access Dashboard",
      description:
        "Log in to view all your transactions in one place. Track payments, monitor balances, manage payouts, and get real-time updates about your business.",
    },
    {
      title: "Scan QR Code",
      description: "Open the app and scan the merchant's QR code or share yours to receive money.",
    },
    {
      title: "Confirm & Pay",
      description: "Verify the amount and recipient. Tap to complete your secure payment instantly.",
    },
  ]

  const businessSteps = [
    {
      title: "Download App",
      description:
        "Provide your business or personal information, including your name, email, phone number, and basic business details. This helps us set up your account quickly and securely.",
    },
    {
      title: "Access Dashboard",
      description:
        "Complete our quick verification process by submitting required documents. This ensures your account is secure and ready to accept payments without delays.",
    },
    {
      title: "Scan QR Code",
      description:
        "Once verified, create your personalized QR code that customers can scan to make payments instantly. Your QR code links directly to your Onionloop wallet, making payments fast and seamless.",
    },
    {
      title: "Confirm & Pay",
      description:
        "Log in to view all your transactions in one place. Track payments, monitor balances, manage payouts, and get real-time updates about your business.",
    },
  ]

  const steps = mode === "personal" ? personalSteps : businessSteps

  return (
    <section className="py-16 px-4 md:px-8">
      <div className="max-w-4xl mx-auto border-4 border-[#CCEA6F] rounded-3xl p-8 md:p-12 bg-white overflow-hidden">
        <div className="relative">
          <div className="absolute left-2 top-0 bottom-0 w-0.5 bg-[#CCEA6F]"></div>
          <div className="space-y-8 md:space-y-12">
            {steps.map((step, index) => (
              <div key={index} className="relative pl-10">
                <div className="absolute top-0 left-px w-4 h-4 rounded-full bg-[#CCEA6F]"></div>
                <div  className="flex flex-col items-start justify-start">
                  <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-2 text-left">{step.title}</h3>
                  <p className="text-(--text-tertiary) text-xs leading-relaxed text-left wrap-break-word">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}