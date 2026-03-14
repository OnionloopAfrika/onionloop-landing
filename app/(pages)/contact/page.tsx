"use client"

import { useEffect } from "react"
import { RightIcon, TickIcon } from "@/app/components/icons/svgs"
import Link from "next/link"
import ContactForm from "./ContactForm"
import Image from "next/image"
import AOS from "aos"
import "aos/dist/aos.css"

const page = () => {
    useEffect(() => {
        AOS.init({
            duration: 800,
            once: true,
            easing: "ease-out-cubic",
            offset: 80,
        })
    }, [])

    return (
        <div className="w-full">
            <div className="w-full about-gradient absolute top-0 bottom-0 right-0 h-145 -z-1"></div>
            <div
                data-aos="fade-up"
                className="w-full py-16 md:py-24 px-4 md:px-6 about-gradient min-h-[60dvh] flex items-center justify-center"
            >

                <div
                    data-aos="fade-up"
                    data-aos-delay="100"
                    className="w-full max-w-2xl mx-auto flex flex-col items-center justify-center text-center gap-6"
                >
                    <span className="text-(--primary) inline-flex justify-center items-center bg-[#CCEA6F80] gap-2 px-4 py-2 rounded-full font-normal">
                        About Onionloop
                    </span>

                    <h1 data-aos="fade-up" data-aos-delay="150" className="text-5xl font-bold text-black">
                        Get In <span className="text-[#04907E]">Touch</span> With Us
                    </h1>

                    <p data-aos="fade-up" data-aos-delay="200" className="text-black text-base">
                        Got a question about your transactions, a payment, or just need a hand?
                        Our team is ready to assist you quickly and securely.
                    </p>

                    <ul
                        data-aos="fade-up"
                        data-aos-delay="250"
                        className="flex items-center justify-center w-full gap-4 flex-wrap"
                    >
                        {["Instant transfers", "Earn rewards", "No account numbers"].map((item) => (
                            <li
                                key={item}
                                className="text-xs text-black/50 list-none flex items-center justify-center gap-1"
                            >
                                <span className="w-2 h-2 rounded-full bg-[#04907E]" />
                                {item}
                            </li>
                        ))}
                    </ul>
                </div>
            </div>

            {/* ================= CONTACT CARDS ================= */}
            <div className="w-full max-w-7xl mx-auto px-4 mt-10">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    {[
                        {
                            title: "Self help lines",
                            description: "Chat or call us for quick support",
                            links: [
                                { label: "+234 81 33257365", href: "tel:+2348133257365" },
                                { label: "info@onionloop.com", href: "mailto:info@onionloop.com" },
                            ],
                            action: { label: "Chat with us", href: "/chatwithus" },
                        },
                        {
                            title: "Find answers",
                            description: "Check our most asked questions",
                            action: { label: "Check FAQ", href: "/faq" },
                        },
                        {
                            title: "Partnerships",
                            description: "Contact us for deals and solutions",
                            action: { label: "Become a Partner", href: "/partners" },
                        },
                    ].map((card, index) => (
                        <div
                            key={card.title}
                            data-aos="fade-up"
                            data-aos-delay={index * 120}
                            className="w-full rounded-lg shadow-sm p-6 bg-white flex flex-col items-center text-center"
                        >
                            <h2 className="text-base font-bold text-(--primary-light)">{card.title}</h2>
                            <p className="text-[#363636] text-xs mt-2">{card.description}</p>

                            {card.links &&
                                card.links.map((link) => (
                                    <a
                                        key={link.label}
                                        href={link.href}
                                        className="text-[#363636] text-xs mt-2 block"
                                    >
                                        {link.label}
                                    </a>
                                ))}

                            <Link
                                href={card.action.href}
                                className="text-(--primary) text-xs mt-2 font-bold flex items-center justify-center gap-2"
                            >
                                {card.action.label} <RightIcon />
                            </Link>
                        </div>
                    ))}
                </div>
            </div>

            {/* ================= CONTACT FORM ================= */}
            <div
                data-aos="fade-up"
                className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full max-w-7xl mx-auto px-4 md:px-6 mt-20 mb-20"
            >
                <ContactForm />

                <div data-aos="zoom-in" className="w-full h-full relative">
                    <div className="absolute inset-0 bg-lime-100 transform rotate-45 scale-75 rounded-3xl -z-10 blur-xl opacity-60" />

                    <Image
                        src="/contact-image.png"
                        alt="contact image"
                        width={600}
                        height={600}
                        className="w-full h-full object-contain rounded-2xl"
                    />
                </div>
            </div>
        </div >
    )
}

export default page