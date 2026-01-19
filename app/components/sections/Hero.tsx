"use client";

import { useMode } from "../../context/ModeContext";
import React from 'react';
import Image from "next/image";
import { ArrowLeft, ScanIcon } from "../icons/svgs";

export default function Hero() {
    const { mode } = useMode()

    if (mode === "personal") {
        return (
            <section
                className="w-full py-16 md:py-24 px-4 md:px-6 bg-gradient min-h-[70dvh]"
            >
                <div className="max-w-7xl mx-auto">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-2 items-center">
                        {/* Left Content */}
                        <div className="space-y-4 z-1">
                            {/* Headline */}
                            <div className="">
                                <h1 className="text-4xl md:text-5xl font-bold leading-tight font-gentium">
                                    QR Payments Built <br /> for <span className="text-(--primary)">Trust</span> and <span className="text-(--primary)"> <br />Simplicity</span>
                                </h1>
                            </div>

                            {/* Description */}
                            <p className="text-base md:text-lg text-(--text-main) leading-relaxed max-w-100">
                                Transfer money instantly using QR codes. No bank details shared. No errors. Just scan, verify, and pay.
                            </p>

                            {/* App Store Buttons */}
                            <div className="flex flex-col sm:flex-row gap-4 pt-4">
                                <a
                                    href="#"
                                    className="inline-flex items-center justify-center bg-(--primary) text-white px-6 py-3 rounded-xl font-semibold hover:bg-gray-800 transition-colors"
                                >
                                    Download on the App Store
                                </a>
                                <a
                                    href="#"
                                    className="inline-flex items-center justify-center bg-(--primary) text-white px-6 py-3 rounded-xl font-semibold hover:bg-gray-800 transition-colors"
                                >
                                    Google Play
                                </a>
                            </div>
                        </div>
                        <div className="w-full max-w-240 bg-linear-90 from-[#ffffff] via-[#f5ffd6] to-[#F5FFD6] absolute top-0 bottom-0 right-0 h-175 soft-fade"></div>
                        {/* Right Visual - Abstract Shapes with Badge Elements */}
                        <div className="flex justify-center md:justify-end w-full max-w-180 mx-auto h-100 md:h-96 relative">
                            <Image src="/HeroImage.png" alt="Hero Personal" layout="fill" objectFit="contain" />
                        </div>
                    </div>
                </div>
            </section>
        )
    }

    // Business mode
    return (
        <section
            className="w-full py-16 md:py-24 px-4 md:px-6 bg-(--primary) min-h-[70dvh]"
        >
            <div className="max-w-7xl mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                    {/* Left Content */}
                    <div className="space-y-4">
                        {/* Badge */}
                        <div className="flex items-center justify-start gap-2 text-gray-800 py-2 rounded-full text-sm font-semibold">
                            <ScanIcon />
                        </div>

                        {/* Headline */}
                        <div className="space-y-2">
                            <h1 className="text-4xl md:text-5xl font-bold leading-tight text-white font-gentium">
                                Secure and <span className="text-[#CCEA6F]">privacy focused</span> payments for businesses
                            </h1>
                        </div>

                        {/* Description */}
                        <p className="text-sm md:text-lg text-gray-100 leading-relaxed">
                            OnionLoop allows you accept payments through QR codes and track every business transactions from your
                            customer to dashboard in a single loop.
                        </p>

                        {/* CTA Button */}
                        <div className="pt-4 flex items-center justify-center lg:justify-start">
                            <a
                                href="#"
                                className="inline-flex justify-center gap-2 items-center text-(--primary) bg-[#FFFFFF] font-semibold hover:text-lime-400 transition-colors group p-3 rounded-xl"
                            >
                                Create your account
                                <ArrowLeft />
                            </a>
                        </div>
                    </div>
                    <div className="w-full bg-(--primary) absolute top-0 bottom-0 right-0 h-175 -z-1"></div>
                    {/* Right Visual - Transaction Cards */}
                    <div className="flex justify-center md:justify-end w-full max-w-180 mx-auto h-100 md:h-96 relative">
                        <Image src="/businessHero.png" alt="Hero Personal" layout="fill" objectFit="contain" />
                    </div>
                </div>
            </div>
        </section>
    )
}