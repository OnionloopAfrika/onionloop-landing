"use client"

import { useMode } from "@/app/context/ModeContext"
import { useRouter } from "next/navigation"
import "aos/dist/aos.css"
import {
    BuildIcon,
    CashWorks,
    ChartIcon,
    OpenEyeIcon,
    Star,
    TickCircle,
    TickIcon,
    TimeIcon,
    WarningIcon
} from "../icons/svgs"
import Link from "next/link"
import Image from "next/image"

const Section = () => {
    const personal = [
        {
            icon: <TimeIcon />,
            title: "Save Time",
            description: "No need for your bank details or phone number to send or receive money."
        },
        {
            icon: <BuildIcon />,
            title: "Build A Saving Habit",
            description: "Save daily, your way either with a verified Onionloop Collector or straight from your wallet."
        },
        {
            icon: <OpenEyeIcon />,
            title: "See Everything Clearly",
            description: "Single wallet, clear activity feed. Know exactly what's pending and what's done."
        },
        {
            icon: <CashWorks />,
            title: "Cash Still Works",
            description: "No smartphone only bias. Fund or withdraw cash through an Agent near you, anytime."
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
            title: "Earn money per transactions",
            description: "Get paid for every cash deposit or withdrawal you process."
        },
        {
            title: "Earn cashback rewards",
            description: "Get extra money on every transaction you complete."
        },
        {
            title: "No POS machine needed",
            description: "Use the Onionloop app to serve customers, no extra equipment required."
        },
        {
            title: "Fast and reliable transactions",
            description: "Customers balances update immediately after deposits and withdrawals."
        },
        {
            title: "Chat with customers",
            description: "Talk to customers directly in the app to answer questions or confirm transactions."
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
                    <Star /> {mode === "personal" ? "Benefit section" : "Business Made Simple"}
                </div>

                <h1
                    data-aos="fade-up"
                    data-aos-delay="100"
                    className="text-xl md:text-3xl font-semibold text-center p-4 max-w-5xl w-full"
                >
                    {mode === "personal"
                        ? "The parts of your day that involve your money with Onionloop, all in one place."
                        : " Outcomes businesses experience when accepting payments with Onionloop."}
                </h1>
            </header>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-10 max-w-4xl mx-auto p-3">
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
                            <p className="text-(--text-tertiary) text-sm">
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
                            Onionloop Agents provide cash.
                            <br />
                            As an agent, you move money between cash and customer Onionloop wallets, check transactions using QR codes, and help customers when they have questions after a transaction.
                        </h1>
                    </header>

                    <div style={{ overflow: "clip" }} className="w-full flex flex-col-reverse md:flex-row justify-center items-center gap-12 my-12">
                        <div className="w-full space-y-6">
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