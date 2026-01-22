"use client"

import { useMode } from "@/app/context/ModeContext"
import { CloseEye, ShieldIcon, Star, StrokeIcon } from "../icons/svgs"
import Link from "next/link"

const Section = () => {
    const personal = [
        {
            icon: <CloseEye />,
            title: "No Personal Info Shared ",
            description: "Your bank details, account numbers, and phone number stay private. Only QR codes are used for transactions."
        },
        {
            icon: <ShieldIcon />,
            title: "Secure & Encrypted  ",
            description: "All transactions are protected with bank-level encryption. Your money and data are always safe with us."
        },
        {
            icon: <StrokeIcon />,
            title: "Fast & Reliable ",
            description: "Payments are processed instantly. No waiting, no delays just quick and seamless transactions every time."
        },
        {
            icon: <StrokeIcon />,
            title: "Secure & Encrypted  ",
            description: "All transactions are protected with bank-level encryption. Your money and data are always safe with us."
        },
    ]

     const business = [
        {
            icon: <CloseEye />,
            title: "Accept Payments ",
            description: "Customers scan your QR code to pay immediately—no account numbers needed."
        },
        {
            icon: <ShieldIcon />,
            title: "Show Your Business ",
            description: "Your QR code displays your store name and logo so customers pay the right business every time."
        },
        {
            icon: <StrokeIcon />,
            title: "Track Payments ",
            description: "Monitor all transactions in real time from a simple dashboard."
        },
        {
            icon: <StrokeIcon />,
            title: "Stay in Control",
            description: "See every transaction, anytime, so you always know what’s coming in and going out."
        },
    ]           
    const { mode } = useMode()
    const data = mode === "personal" ? personal : business
    return (
        <div className="w-full max-w-7xl mx-auto">
            <header className="w-full flex flex-col items-center justify-center">
                <div className="bg-[#CCEA6F80] text-(--primary) flex items-center justify-center gap-2 px-4 py-2 rounded-full mt-10 mb-6 font-medium">
                    <Star /> {mode === "personal" ? "Payments that fit into everyday life" : "Business Made Simple"}
                </div>
                <h1 className="text-4xl max-w-180 font-bold text-center p-4">
                    {mode === "personal" ? "Onionloop keeps everything clear and accessible in one place." : "Accept payments, showcase your business, and track every transaction."}
                </h1>
            </header>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-10 max-w-4xl mx-auto p-3">
                {data.map((item, index) => (
                    <div key={index} className="bg-[#F2F2F2] rounded-4xl p-6 flex items-start justify-center gap-2">
                        <div className="flex items-center justify-center w-10 h-10 bg-white rounded-xl mb-4 p-3">
                            {item.icon}
                        </div>
                        <div className="w-full">
                        <h3 className="text-2xl font-semibold mb-2 text-(--text-secondary)">{item.title}</h3>
                        <p className="text-(--text-tertiary) text-sm">{item.description}</p>
                        </div>
                    </div>
                ))}
            </div>
            
            <div className="flex items-center justify-center">
            {mode === "personal" && (
                <div className="mt-10">
                    <Link href="#cta" className="bg-(--primary) text-white px-6 py-3 rounded-xl font-medium hover:bg-(--primary)/80 transition-colors">
                        Download App
                    </Link>
                </div>
            )}
            {mode === "business" && (
                <div className="mt-10">
                    <button className="bg-(--primary) text-white px-6 py-3 rounded-xl font-medium hover:bg-(--primary)/80 transition-colors">
                        Create your account
                    </button>
                </div>
            )}
            </div>
        </div>
    )
}

export default Section
