"use client"

import Image from "next/image"
import "aos/dist/aos.css"
import { useMode } from "@/app/context/ModeContext"
import { TickIcon } from "../icons/svgs"

const TrustSection = () => {
    const { mode } = useMode()

    const personalPoints = [
        "Users are verified before they can send, save, or receive money.",
        "Ajo/Thrift contributions are tracked from collector to wallet, with a clear record at every step.",
        "Agents and Collectors who handle your money are verified by Onionloop and held accountable.",
        "Savings withdrawals are checked before they’re paid out, so your money doesn’t leave without oversight."
    ]

    const businessPoints = [
        "QR codes won't show your account balance or private details to your customers.",
        "Your customers see your business name and details before sending money.",
        "You need your PIN or biometrics to approve transactions.",
        "Verify your business details and enjoy more benefits"
    ]

    const points = mode === "personal" ? personalPoints : businessPoints

    return (
        <section className="w-full max-w-7xl mx-auto py-16 px-6">

            <div className="flex flex-col items-start gap-2 mb-10">
                <h2
                    data-aos="fade-up"
                    className="text-3xl font-bold text-(--primary-light)"
                    style={{ overflow: "clip" }}
                >
                    Built for your safety and trust
                </h2>

                <p
                    data-aos="fade-up"
                    data-aos-delay="100"
                    className="text-[#4D4D4D] text-base  leading-snug"
                    style={{ overflow: "clip" }}
                >
                    From verified accounts to confirmed savings records, Onionloop is built so you always know where your money is and what happens to it next.</p>
            </div>

            <div className="flex flex-col md:flex-row items-center justify-between gap-12">

                <div
                    data-aos="fade-right"
                    className="w-full md:w-1/2 flex justify-center md:justify-start"
                    style={{ overflow: "clip" }}
                >
                    <div className="relative w-[320px] h-80 md:w-100 md:h-100">
                        <Image
                            src="/trust-shield.png"
                            alt="Security Shield and Lock"
                            fill
                            className="object-contain"
                            priority
                        />
                    </div>
                </div>

                <div className="w-full md:w-1/2">
                    <ul className="space-y-6">
                        {points.map((point, index) => (
                            <li
                                key={index}
                                data-aos="fade-up"
                                data-aos-delay={index * 120}
                                className="flex items-start gap-4"
                                style={{ overflow: "clip" }}
                            >
                                <div className="mt-1 shrink-0">
                                    <TickIcon />
                                </div>
                                <span className="text-[#1A1A1A] text-base font-medium leading-tight">
                                    {point}
                                </span>
                            </li>
                        ))}
                    </ul>
                </div>

            </div>
        </section>
    )
}

export default TrustSection