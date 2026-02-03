'use client';

import { JSX, useState } from 'react';
import Image from 'next/image';
import { GlobeIcon, QrIcon, ScanIcon, Star, BankIcon, WalletFill, PeopleIcon, WarningIcon, ChartsView, ScanIconFill } from '../icons/svgs';

const data = {
    header: {
        badge: {
            icon: "star",
            text: "Built to work your way"
        },
        title: "Different business setups support different ways of accepting and managing payments on Onionloop."
    },
    tiers: [
        {
            id: "solo",
            name: "Onion-Solo",
            description: "For small businesses run by one person. Payments are received using a static QR code that customers scan to pay. The business owner manages all transactions directly from their mobile device.",
            image: "/onion-solo.png",
            features: [
                "One QR code for all customer payments",
                "A single business wallet balance",
                "Records of completed, pending, and failed transactions",
                "Withdrawals to your linked bank account"
            ],
            workflow: [
                { icon: "qr", text: "Display your business QR code for customers to scan and pay." },
                { icon: "scan", text: "The customer scans the QR code and completes the payment." },
                { icon: "wallet", text: "The payment reflects in your business wallet." },
                { icon: "history", text: "See payment status and details in your transaction history." },
                { icon: "bank", text: "Move funds from your wallet to your linked bank account." }
            ],
            buttonText: "Open Your Business Account"
        },
        {
            id: "crew",
            name: "Onion-Crew",
            description: "For businesses with multiple staff. Payments use dynamic QR codes generated per transaction, allowing managers to review details before paying. Staff accounts, receipts, and inventory tracking for control across daily transactions.",
            image: "/onion-crew.png",
            features: [
                "Dynamic QR codes that generate staff across controls",
                "QR codes generated per transaction",
                "Customer confirmation before paying",
                "Inventory monitoring and management"
            ],
            workflow: [
                { icon: "qr", text: "Generate a QR code for a specific transaction." },
                { icon: "people", text: "Customer checks the amount and details before paying." },
                { icon: "warning", text: "If there's an issue, it's addressed before payment is completed." },
                { icon: "wallet", text: "Confirmed payments reflect in the business wallet." },
                { icon: "charts", text: "Monitor payments and manage inventory alongside transactions." }
            ],
            buttonText: "Setup business account"
        },
        {
            id: "mega",
            name: "Onion-Mega",
            description: "For businesses handling many payments across teams. Dynamic QR codes created per transaction, with customers able to confirm or raise issues before payment is completed.",
            image: "/onion-mega.png",
            features: [
                "Dynamic QR codes for each transaction",
                "Customer confirmation and objection before payment",
                "Central view of all transaction activity",
                "Access on both mobile and web platforms"
            ],
            workflow: [
                { icon: "qr", text: "Create QR codes for each payment request." },
                { icon: "people", text: "Customers review and confirm or object before paying." },
                { icon: "warning", text: "Any objections are handled before funds move." },
                { icon: "wallet", text: "Payments follow the same flow across teams." },
                { icon: "charts", text: "Manage payments across devices as needed." }
            ],
            buttonText: "Setup business account"
        }
    ]
};

const iconMap: Record<string, JSX.Element> = {
    qr: <QrIcon />,
    scan: <ScanIconFill />,
    wallet: <WalletFill />,
    history: <GlobeIcon />,
    bank: <BankIcon />,
    people: <PeopleIcon />,
    warning: <WarningIcon />,
    charts: <ChartsView />
};

export default function Services() {
    const [activeTier, setActiveTier] = useState(0);

    return (
        <div className='w-full min-h-screen bg-white pb-16'>
            <div className='w-full max-w-300 mx-auto px-4'>
                <header className="w-full flex flex-col items-center justify-center pt-8 md:pt-12">
                    <div className="bg-[#CCEA6F80] text-(--primary) flex items-center justify-center gap-2 px-5 py-2.5 rounded-full mb-6 font-medium text-sm md:text-base">
                        <Star /> {data.header.badge.text}
                    </div>
                    <h1 className="text-2xl md:text-4xl lg:text-[40px] max-w-250 font-bold text-center mb-8 md:mb-12 px-4 leading-tight">
                        {data.header.title}
                    </h1>
                </header>

                <div className="flex justify-center mb-8 md:mb-12">
                    <div className="bg-[#E4E7EC]  rounded-full p-1 shadow-sm border border-gray-200 inline-flex gap-1">
                        {data.tiers.map((tier, index) => (
                            <button
                                key={tier.id}
                                onClick={() => setActiveTier(index)}
                                className={`px-4 py-2 rounded-full text-sm md:text-base font-medium transition-colors ${activeTier === index ? 'bg-white text-(--primary) font-bold' : 'text-[#98A2B3] hover:text-(--primary)'}`}
                            >
                                {tier.name}
                            </button>
                        ))}
                    </div>
                </div>

                <div className="w-full mx-auto">
                    <div className="w-full">
                        <div className="grid grid-cols-1 lg:grid-cols-[2fr_1fr] gap-4 rounded-2xl border border-gray-100">
                            <div className="flex flex-col md:flex-row justify-center lg:justify-center bg-[#F9FFE5] p-4 md:p-6 lg:p-8 gap-6">
                                <div className="w-full mx-auto my-auto max-w-85 aspect-4/5 rounded-2xl overflow-hidden shrink-0 h-75 relative flex item-center justify-center">
                                    <Image
                                        src={data.tiers[activeTier].image}
                                        alt={data.tiers[activeTier].name}
                                        layout='fill'
                                        objectFit='cover'
                                        objectPosition='center'
                                        className="w-full h-full object-cover"
                                    />
                                </div>

                                <div className='bg-[#F9FFE5]'>
                                    <h2 className="text-2xl font-bold mb-3 text-black">
                                        {data.tiers[activeTier].name}
                                    </h2>
                                    <p className="text-gray-700 text-sm leading-relaxed mb-4">
                                        {data.tiers[activeTier].description}
                                    </p>
                                    <hr className="my-4 border-gray-200" />

                                    <h3 className="text-2xl mb-4 font-medium text-black">What you see</h3>
                                    <ul className="space-y-1">
                                        {data.tiers[activeTier].features.map((feature, idx) => (
                                            <li key={idx} className="flex items-start gap-2 text-gray-700 text-sm">
                                                <span className="text-gray-400 mt-0.5">•</span>
                                                <span>{feature}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>

                            <div className='bg-white p-4 md:p-6 lg:p-8'>
                                <h3 className="text-2xl mb-4 font-medium text-black">How it works day-to-day</h3>
                                <hr className="my-4 border-gray-200" />

                                <div className="space-y-1">
                                    {data.tiers[activeTier].workflow.map((step, idx) => (
                                        <div key={idx} className="flex items-start gap-2">
                                            <div className="shrink-0 p-2 rounded-lg flex items-center justify-center text-white w-10 h-10">
                                                {iconMap[step.icon]}
                                            </div>
                                            <p className="text-gray-700 text-sm pt-1.5 leading-relaxed">
                                                {step.text}
                                            </p>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>

                        <div className="flex justify-center mt-8">
                            <button className="bg-[#004D40] text-white px-8 py-3.5 rounded-xl font-semibold text-sm md:text-base hover:bg-[#003d33] transition-colors">
                                {data.tiers[activeTier].buttonText}
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
