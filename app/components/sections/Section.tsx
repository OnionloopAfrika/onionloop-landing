"use client"

import { useMode } from "@/app/context/ModeContext"
import { useRouter } from "next/navigation"
import "aos/dist/aos.css"
import {
    ChartIcon,
    CloseEye,
    GuardIcon,
    OpenEyeIcon,
    SlashedEye,
    Star,
    TickCircle,
    TickIcon,
    WarningIcon
} from "../icons/svgs"
import Link from "next/link"
import Image from "next/image"

const Section = () => {
    const personal = [
        {
            icon: <CloseEye />,
            title: "Less information shared ",
            description: "No need for your bank details or phone number to send or receive money."
        },
        {
            icon: <GuardIcon />,
            title: "Fewer wrong transfers",
            description: "You see the receiver’s name and avatar before sending money."
        },
        {
            icon: <OpenEyeIcon />,
            title: "Clear payment control",
            description: "Nothing happens until you check the details and approve the payment."
        },
        {
            icon: <ChartIcon />,
            title: "Clear Transaction Results",
            description: "You can see which payments went through and which didn’t."
        },
    ]

    const business = [
        {
            icon: <TickCircle />,
            title: "Correct payment ",
            description: "Customers confirm payment details before sending to prevent mistakes."
        },
        {
            icon: <WarningIcon />,
            title: "Fix Problems Quickly",
            description: "Customers can stop a wrong payment before money is sent."
        },
        {
            icon: <OpenEyeIcon />,
            title: "Clear Payment Control",
            description: " Payments only go through after you check and approve them."
        },
        {
            icon: <ChartIcon />,
            title: "Clear Transaction Status",
            description: "See immediately if each transaction is completed or not."
        },
    ]

    const agentData = [
        {
            title: "Earn commissions per transactions",
            description: "Get paid for very successful cash deposit or withdrawal you process."
        },
        {
            title: "Cashback on completed transactions",
            description: "Earn additional cashback on every successful transaction you complete."
        },
        {
            title: "No POS required",
            description: "Use the Onionloop app to serve customers,no extra hardware needed."
        },
        {
            title: "Fast and reliable transactions",
            description: "Customers balances update immediately after deposits and withdrawals."
        },
        {
            title: "Chat with customers",
            description: "Communicate with customers directly to clarify or confirm transactions when needed."
        }
    ]

    const { mode } = useMode()
    const data = mode === "personal" ? personal : business
    const router = useRouter()

    return (
        <div className="w-full max-w-7xl mx-auto">
            <header className="w-full flex flex-col items-center justify-center">
                <div
                    data-aos="fade-up"
                    className="bg-[#CCEA6F80] text-(--primary) flex items-center justify-center gap-2 px-4 py-2 rounded-full mt-10 mb-6 font-medium"
                >
                    <Star /> {mode === "personal" ? "Payments that fit into everyday life" : "Business Made Simple"}
                </div>

                <h1
                    data-aos="fade-up"
                    data-aos-delay="100"
                    className="text-2xl md:text-4xl max-w-200 font-bold text-center p-4"
                >
                    {mode === "personal"
                        ? "The essential actions that power secured QR-based payments on Onionloop."
                        : " Outcomes businesses experience when accepting payments with Onionloop."}
                </h1>
            </header>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-10 max-w-4xl mx-auto p-3">
                {data.map((item, index) => (
                    <div
                        key={index}
                        data-aos="fade-up"
                        data-aos-delay={index * 120}
                        className="bg-[#F7F7F7] rounded-3xl p-6 flex items-start justify-center gap-2"
                    >
                        <div className="flex items-center justify-center w-10 h-10 bg-white rounded-xl mb-4 p-2 shrink-0">
                            {item.icon}
                        </div>
                        <div className="w-full">
                            <h3 className="text-2xl font-semibold mb-2 text-(--text-secondary)">
                                {item.title}
                            </h3>
                            <p className="text-(--text-tertiary) text-base">
                                {item.description}
                            </p>
                        </div>
                    </div>
                ))}
            </div>

            <div
                data-aos="zoom-in"
                className="flex items-center justify-center mt-12 mb-6"
            >
                {mode === "personal" ? (
                    <Link
                        href="#cta"
                        className="inline-block bg-(--primary) text-white px-8 py-4 rounded-xl font-medium hover:bg-(--primary)/80 transition-colors shadow-lg"
                    >
                        Download App
                    </Link>
                ) : (
                    <button className="bg-(--primary) text-white px-8 py-4 rounded-xl font-medium hover:bg-(--primary)/80 transition-colors shadow-lg" onClick={() => router.push("/onboarding")}>
                        Open Your Business Account
                    </button>
                )}
            </div>

            {mode === "business" && (
                <div className="w-full max-w-7xl mx-auto mt-20 p-4 border-t border-gray-100" id="agents">
                    <header className="w-full">
                        <div
                            data-aos="fade-up"
                            className="bg-[#CCEA6F80] text-(--primary) inline-flex items-center justify-center gap-2 px-4 py-2 rounded-full mb-6 font-medium"
                        >
                            <Star /> Become an Onionloop agent
                        </div>

                        <h1
                            data-aos="fade-up"
                            data-aos-delay="100"
                            className="text-base max-w-3xl font-normal text-(--text-main)"
                        >
                            Onionloop Agents provide cash deposit or withdrawal service for customers. As an agent, you help customers move money between cash and their onionloop wallet, verify transaction using QR codes, and support customers when clarification is needed after a transaction
                        </h1>
                    </header>

                    <div style={{ overflow: "clip" }} className="w-full flex flex-col-reverse md:flex-row justify-center items-center gap-12 my-12">
                        <div className="w-full max-w-150 space-y-6">
                            {agentData.map((a, index) => (
                                <div
                                    key={index}
                                    data-aos="fade-up"
                                    data-aos-delay={index * 120}
                                    className="flex w-full justify-start items-start gap-3"
                                >
                                    <span className="shrink-0 mt-1">
                                        <TickIcon />
                                    </span>
                                    <div className="w-full flex flex-col items-start justify-start">
                                        <h1 className="text-base font-bold text-(--text-main)">
                                            {a.title}
                                        </h1>
                                        <h2 className="text-base font-normal text-(--text-tertiary)">
                                            {a.description}
                                        </h2>
                                    </div>
                                </div>
                            ))}
                        </div>

                        <div
                            data-aos="fade-down"
                            style={{ overflow: "clip" }}
                            className="w-full max-w-md aspect-square rounded-3xl overflow-hidden shrink-0 relative shadow-xl"
                        >
                            <Image
                                src="/ol-agent.png"
                                alt="Onionloop Agent"
                                fill
                                className="object-cover"
                            />
                        </div>
                    </div>

                    <div
                        data-aos="zoom-in"
                        className="mt-12 w-full flex items-center justify-center pb-10"
                    >
                        <button className="bg-(--primary) text-white px-8 py-4 rounded-xl font-medium hover:bg-(--primary)/80 transition-colors shadow-lg" onClick={() => router.push("/onboarding")}>
                            Become an Onionloop agent
                        </button>
                    </div>
                </div>
            )}
        </div>
    )
}

export default Section