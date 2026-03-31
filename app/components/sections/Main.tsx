"use client"

import { useEffect } from "react"
import Image from "next/image"
import "aos/dist/aos.css"
import { useMode } from "@/app/context/ModeContext"
import { CautionIconFill, OpenEyeIcon, Star, WarningIcon } from "../icons/svgs"
import Link from "next/link"

const Main = () => {
    const personal = [
        {
            id: "qr-payments",
            title: "QR Payments",
            description: "Scan and share your QR code to make fast, secure payments, while keeping track of your balance as it updates.",
            image: "/qr-payments.png",
        },
        {
            id: "payment-confirmation",
            title: "Cash Services",
            description: "Deposit or withdraw cash through verified Onionloop agents. Your balance updates instantly, with every transaction securely protected.",
            image: "/cash-services.png",
        },
        {
            id: "personal-wallet",
            title: "Personal Wallet",
            description: "Receive payments, make transfers, and check wallet balance. Withdraw your money whenever, with full control over your funds.",
            image: "/personal-wallet-f.png",
        },
        {
            id: "money-transfer",
            title: "Bank Transfers",
            description: "Move money inside Onionloop or withdraw it to your linked bank account. Each transfer shows if it’s pending, completed, or failed.",
            image: "/bank-transfers.png",
        },
        {
            id: "rewards",
            title: "Earn Onioncoins",
            description: "Get Onioncoins as rewards when you send money. They are tracked separately from your wallet balance.",
            image: "/onioncoins.png",
        },
        {
            id: "in-app-messaging",
            title: "In-app Messaging",
            description: "Message your friends anytime. Payments made within a chat are automatically connected, so everything stays organized.",
            image: "/messaging.png",
        }
    ]

    const business = [
        {
            id: "business-wallet",
            title: "Business Wallet",
            description: "Receive customer payments in your business wallet, check balance, and monitor how money moves in and out.",
            image: "/business-wallet.png",
        },
        {
            id: "payment-review",
            title: "Payment Review",
            description: "Customers review your payment details before completing a transfer, helping ensure funds are sent to the correct account.",
            image: "/payment-review.png",
        },
        {
            id: "agency-banking",
            title: "Agency Banking",
            description: "Offer customers the ability to deposit or withdraw cash through verified Onionloop agents, with each transaction clearly recorded in the system.",
            image: "/agency-banking.png",
        },
        {
            id: "payment-resolution",
            title: "Payment Resolution",
            description: "Customers can flag any concerns before a payment is finalized, allowing potential issues to be identified and resolved quickly.",
            image: "/payment-resolution.png",
        },
        {
            id: "business-management",
            title: "Business Management",
            description: "Manage your inventory, add staff, assign roles, and control how payments are handled across your business account. ",
            image: "/business-management.png",
        },
        {
            id: "withdrawals",
            title: "Withdrawals",
            description: "Move funds from your business wallet to your linked bank account anytime. Your balance updates after each withdrawal accurately.",
            image: "/withdrawals.png",
        }
    ]

    const { mode } = useMode()
    const data = mode === "personal" ? personal : business

    return (
        <main className="w-full max-w-6xl mx-auto mt-4 md:mt-8 pb-20">
            {mode === "business" && (
                <>
                    <header className="w-full flex flex-col items-center justify-center">
                        <div
                            data-aos="fade-up"
                            className="bg-[#E6F4D7] text-[#024E44] flex items-center justify-center gap-2 px-4 py-1.5 rounded-full mt-10 mb-6 text-sm font-medium"
                        >
                            <Star /> Business Struggles
                        </div>
                        <h1
                            data-aos="fade-up"
                            data-aos-delay="100"
                            className="text-2xl md:text-4xl font-bold text-center px-4 text-(--text-main)"
                        >
                            Running a business in Nigeria means dealing with these daily.
                        </h1>
                    </header>
                    <FeatureCards />
                </>
            )}
            <header className="w-full flex flex-col items-center justify-center">
                <div
                    data-aos="fade-up"
                    className="bg-[#E6F4D7] text-[#024E44] flex items-center justify-center gap-2 px-4 py-1.5 rounded-full mt-10 mb-6 text-sm font-medium"
                >
                    <Star /> {mode === "personal" ? "More than just sending money" : "Solutions for your Business"}
                </div>

                <h1
                    data-aos="fade-up"
                    data-aos-delay="100"
                    className="text-2xl md:text-4xl font-bold text-center px-4 text-(--text-main)"
                >
                    {mode === "personal"
                        ? "Onionloop lets you make payments, receive money, and keep track of your transactions"
                        : "Tools your business needs to get paid fast and run smoothly."}
                </h1>
            </header>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-16 mx-auto px-4">
                {data.map((item, index) => (
                    <div
                        key={item.title}
                        data-aos="fade-up"
                        data-aos-delay={index * 100}
                        className="bg-white border border-gray-100 rounded-4xl overflow-hidden flex flex-col relative h-112.5 shadow-sm pb-0 px-4 pt-4 md:px-6 md:pt-6"
                    >
                        <div className="max-w-full">
                            <h2 className="text-[22px] font-bold text-(--primary-light) mb-3">
                                {item.title}
                            </h2>
                            <p className="text-[#4D4D4D] text-[15px]">
                                {item.description}
                            </p>
                        </div>

                        <Link href={`/product/${mode}/${item.id}`} className="absolute bottom-4 left-4 md:left-6 flex items-center gap-2 text-(--primary-light) text-sm font-semibold hover:underline z-10">
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
                        </Link>

                        <div className={`${index === 0 && mode === "personal" && "bottom-0"} ${index === 3 && mode ==="business" && "-bottom-10"} absolute -bottom-4 right-0 w-72 h-72 pointer-events-none`}>
                            <Image
                                src={item.image}
                                alt={item.title}
                                fill
                                className="object-contain mask-[radial-gradient(circle,white_75%,transparent_100%)]"
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

const cards = [
    {
        id: 1,
        icon: <WarningIcon />,
        title: "Fake Payment Alerts",
        description: "A customer sends a screenshot. You release the goods. The money never arrives. It happens to thousands of Nigerian merchants every week."
    },
    {
        id: 2,
        icon: <OpenEyeIcon />,
        title: "No Visibility On Payments",
        description: "Which transaction came in? When? From who? Without a clear payment dashboard, reconciling your business cash is a daily headache."
    },
    {
        id: 3,
        icon: <CautionIconFill />,
        title: "POS Downtime Kills Sales",
        description: "Network down. Card declined. Customer leaves. Every POS failure is a sale you never made and a customer who might not come back."
    }
];

function FeatureCards() {
    return (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 p-4 bg-white">
            {cards.map((card) => (
                <div
                    key={card.id}
                    className="bg-[#F7F7F7] rounded-2xl p-6 flex flex-col items-start"
                >
                    <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center mb-6 p-2.5">{card.icon}
                    </div>

                    <div className="flex flex-col gap-4">
                        <h3 className="text-(--primary-light) text-[22px] font-bold leading-tight">
                            {card.title}
                        </h3>
                        <p className="text-[#4D4D4D] text-[15px]">
                            {card.description}
                        </p>
                    </div>
                </div>
            ))}
        </div>
    );
}