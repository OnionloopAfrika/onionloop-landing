"use client"

import { useEffect } from "react"
import Image from "next/image"
import "aos/dist/aos.css"
import { useMode } from "@/app/context/ModeContext"
import { Star } from "../icons/svgs"

const Main = () => {
    const personal = [
        {
            title: "QR Payments",
            description: "Receive money, send money, see your balance and withdraw money at any time.",
            image: "/qr-payments.png",
        },
        {
            title: "Cash Services",
            description: "Use a QR code to deposit or withdraw cash with verified Onionloop agents. Your balance updates immediately, and your money and information stay protected.",
            image: "/cash-services.png",
        },
        {
            title: "Bank Transfers",
            description: "Move money inside Onionloop or send it to your connected bank account. Each transfer shows if it's pending, completed, or failed.",
            image: "/bank-transfers.png",
        },
        {
            title: "Personal Wallet",
            description: "Receive money, make payments, check your balance and withdraw your money at any time.",
            image: "/personal-wallet-f.png",
        },
        {
            title: "Earn Onioncoins",
            description: "Get coins as rewards when you send or receive money. They are tracked separately from your wallet balance.",
            image: "/onioncoins.png",
        },
        {
            title: "In-app messaging",
            description: "Message Onionloop users about money you send or receive. Each chat is linked to the transaction so you can see it easily.",
            image: "/messaging.png",
        }
    ]

    const business = [
        {
            title: "Business Wallet",
            description: "Receive customer payments in your business wallet, check balance, and monitor how money moves in and out.",
            image: "/business-wallet.png",
        },
        {
            title: "Payment Review",
            description: "Customers check their payment details before sending money, so it doesn't go to the wrong account.",
            image: "/payment-review.png",
        },
        {
            title: "Agency Banking",
            description: "Offer customers the ability to deposit or withdraw cash through verified Onionloop agents, with each transaction clearly recorded in the system.",
            image: "/agency-banking.png",
        },
        {
            title: "Payment Resolution",
            description: "Customers can report problems before a payment is completed, so any issues can be fixed quickly.",
            image: "/payment-resolution.png",
        },
        {
            title: "Business Management",
            description: "Manage your inventory, add staff, assign roles, and control how payments are handled business across your business account.",
            image: "/business-management.png",
        },
        {
            title: "Withdrawals",
            description: "Transfer money from your business wallet to your connected bank account. Balance updates after every withdrawal.",
            image: "/withdrawals.png",
        }
    ]

    const { mode } = useMode()
    const data = mode === "personal" ? personal : business


    return (
        <main className="w-full max-w-7xl mx-auto mt-4 md:mt-8 pb-20">
            
            <header className="w-full flex flex-col items-center justify-center">
                <div
                    data-aos="fade-up"
                    className="bg-[#E6F4D7] text-[#4F7C1B] flex items-center justify-center gap-2 px-4 py-1.5 rounded-full mt-10 mb-6 text-sm font-medium"
                >
                    <Star /> {mode === "personal" ? "More than just sending money" : "Core actions"}
                </div>

                <h1
                    data-aos="fade-up"
                    data-aos-delay="100"
                    className="text-3xl md:text-4xl max-w-3xl font-bold text-center px-4 leading-tight text-(--text-main)"
                >
                    {mode === "personal"
                        ? "Onionloop lets you make payments, receive money, and keep track of your transactions"
                        : "Tools your business needs to get paid fast and run smoothly."}
                </h1>
            </header>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-16 max-w-5xl mx-auto px-6">
                {data.map((item, index) => (
                    <div
                        key={item.title}
                        data-aos="fade-up"
                        data-aos-delay={index * 100}
                        className="bg-white border border-gray-100 rounded-4xl overflow-hidden flex flex-col relative h-112.5 shadow-sm p-8"
                    >
                        <div className="max-w-[70%]">
                            <h2 className="text-[22px] font-bold text-(--primary-light) mb-3">
                                {item.title}
                            </h2>
                            <p className="text-[#4D4D4D] text-[15px] leading-relaxed">
                                {item.description}
                            </p>
                        </div>

                        <button className="absolute bottom-8 left-8 flex items-center gap-2 text-(--primary-light) text-sm font-semibold hover:underline">
                            Learn more
                            <svg
                                width="16"
                                height="16"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2.5"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            >
                                <path d="M5 12h14M12 5l7 7-7 7" />
                            </svg>
                        </button>

                        <div className="absolute bottom-0 right-0 w-[60%] h-[70%] pointer-events-none">
                            <Image
                                src={item.image}
                                alt={item.title}
                                fill
                                className="object-contain object-bottom-right"
                                priority
                            />
                        </div>
                    </div>
                ))}
            </div>
        </main>
    )
}

export default Main