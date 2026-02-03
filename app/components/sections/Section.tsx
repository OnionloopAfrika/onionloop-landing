"use client"

import { useMode } from "@/app/context/ModeContext"
import { CloseEye, GuardIcon, OpenEyeIcon, SlashedEye, Star, TickCircle, TickIcon, WarningIcon } from "../icons/svgs"
import Link from "next/link"
import Image from "next/image"

const Section = () => {
    const personal = [
        {
            icon: <CloseEye />,
            title: "Less information shared ",
            description: "You don’t need to give out bank details or phone number to send or receive money."
        },
        {
            icon: <GuardIcon />,
            title: "Fewer wrong transfers",
            description: " You see the recipient’s username and avatar before confirming any payment."
        },
        {
            icon: <OpenEyeIcon />,
            title: "Clear payment control",
            description: " Nothing happens until you review the details and approve the transaction yourself."
        },
        {
            icon: <SlashedEye />,
            title: "Reliable outcomes",
            description: "Each transaction shows a clear status, so you always know what happened."
        },
    ]

    const business = [
        {
            icon: <TickCircle />,
            title: "Correct payment ",
            description: "Customers confirm payment details before paying, reducing wrong or unintended transactions."
        },
        {
            icon: <WarningIcon />,
            title: "Issues handled early ",
            description: "Customers can object to a transaction before payment is completed, preventing post-payment disputes."
        },
        {
            icon: <OpenEyeIcon />,
            title: "Clear transaction visibility ",
            description: "Nothing happens until you review the details and approve the transaction yourself."
        },
        {
            icon: <CloseEye />,
            title: "Reliable outcome ",
            description: "Businesses can view completed, pending, and failed transactions in their records."
        },
    ]

    const agentData = [
        {
            "title": "Earn commissions per transactions",
            "description": "Get paid for very successful cash deposit or withdrawal you process."
        },
        {
            "title": "Cashback on completed transactions",
            "description": "Earn additional cashback on every successful transaction you complete."
        },
        {
            "title": "No POS required",
            "description": "Use the Onionloop app to serve customers,no extra hardware needed."
        },
        {
            "title": "Fast and reliable transactions",
            "description": "Customers balances update immediately after deposits and withdrawals."
        },
        {
            "title": "Chat with customers",
            "description": "Communicate with customers directly to clarify or confirm transactions when needed."
        }
    ]
    const { mode } = useMode()
    const data = mode === "personal" ? personal : business
    return (
        <div className="w-full max-w-7xl mx-auto">
            <header className="w-full flex flex-col items-center justify-center">
                <div className="bg-[#CCEA6F80] text-(--primary) flex items-center justify-center gap-2 px-4 py-2 rounded-full mt-10 mb-6 font-medium">
                    <Star /> {mode === "personal" ? "Payments that fit into everyday life" : "Business Made Simple"}
                </div>
                <h1 className="text-4xl max-w-200 font-bold text-center p-4">
                    {mode === "personal" ? "The essential actions that power secured QR-based payments on Onionloop." : " Outcomes businesses experience when accepting payments with Onionloop."}
                </h1>
            </header>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-10 max-w-4xl mx-auto p-3">
                {data.map((item, index) => (
                    <div key={index} className="bg-[#F2F2F2] rounded-3xl p-6 flex items-start justify-center gap-2">
                        <div className="flex items-center justify-center w-10 h-10 bg-white rounded-xl mb-4 p-2">
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
                            Open Your  Business Account
                        </button>
                    </div>
                )}
            </div>


            {mode === "business" && (
                <div className="w-full max-w-7xl mx-auto mt-10 p-4">
                    <header className="w-full">
                        <div className="bg-[#CCEA6F80] text-(--primary) inline-flex items-center justify-center gap-2 px-4 py-2 rounded-full mt-10 mb-6 font-normal">
                            <Star /> Become an Onionloop agent
                        </div>
                        <h1 className="text-base max-w-200 font-normal text-justify">
                            Onionloop Agents provide cash deposit or withdrawal service for customers. As an agent, you help customers move money between cash and their onionloop wallet, verify transaction using QR codes, and support customers when clarification is needed after a transaction
                        </h1>
                    </header>

                    <div className="w-full flex flex-col-reverse md:flex-row justify-center items-center gap-3 my-10">
                        <div className="w-full max-w-150 space-y-2">
                            {
                                agentData.map((a) => (
                                    <div className="flex w-full justify-start items-start">
                                        <span className="w-10 h-full p-1"><TickIcon /></span>
                                        <div className="w-full space-y-1 flex flex-col items-start justify-start">
                                            <h1 className="text-base font-bold">{a.title}</h1>
                                            <h2 className="text-base font-normal">{a.description}</h2>
                                        </div>
                                    </div>
                                ))
                            }
                        </div>
                        <div className="w-full mx-auto my-auto max-w-100 aspect-4/5 rounded-2xl overflow-hidden shrink-0 h-75 relative flex item-center justify-center">
                            <Image
                                src="/ol-agent.png"
                                alt=""
                                layout='fill'
                                objectFit='cover'
                                objectPosition='center'
                                className="w-full h-full object-cover"
                            />
                        </div>
                    </div>
                    <div className="mt-10 w-full flex items-center justify-center">
                        <button className="bg-(--primary) text-white px-6 py-3 rounded-xl font-medium hover:bg-(--primary)/80 transition-colors">
                            Become an Onionloop agent
                        </button>
                    </div>
                </div>
            )}
        </div>
    )
}

export default Section
