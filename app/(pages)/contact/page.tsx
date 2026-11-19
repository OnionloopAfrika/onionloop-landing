"use client"

import { useEffect } from "react"
import { RightIcon } from "@/app/components/icons/svgs"
import Link from "next/link"
import ContactForm from "./ContactForm"
import Image from "next/image"
import AOS from "aos"
import "aos/dist/aos.css"

const Page = () => {
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
                    <span className="text-(--primary) inline-flex justify-center items-center bg-[#CCEA6F80] gap-2 px-4 py-2 rounded-full font-semibold">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M9.93694 15.5C9.84766 15.1539 9.66728 14.8381 9.41456 14.5854C9.16184 14.3327 8.84601 14.1523 8.49994 14.063L2.36494 12.481C2.26027 12.4513 2.16815 12.3883 2.10255 12.3014C2.03696 12.2146 2.00146 12.1088 2.00146 12C2.00146 11.8912 2.03696 11.7854 2.10255 11.6986C2.16815 11.6118 2.26027 11.5487 2.36494 11.519L8.49994 9.93601C8.84589 9.84681 9.16163 9.66658 9.41434 9.41404C9.66705 9.16151 9.84751 8.84589 9.93694 8.50001L11.5189 2.36501C11.5483 2.25992 11.6113 2.16735 11.6983 2.1014C11.7852 2.03545 11.8913 1.99976 12.0004 1.99976C12.1096 1.99976 12.2157 2.03545 12.3026 2.1014C12.3896 2.16735 12.4525 2.25992 12.4819 2.36501L14.0629 8.50001C14.1522 8.84608 14.3326 9.1619 14.5853 9.41462C14.838 9.66734 15.1539 9.84773 15.4999 9.93701L21.6349 11.518C21.7404 11.5471 21.8335 11.61 21.8998 11.6971C21.9661 11.7841 22.002 11.8906 22.002 12C22.002 12.1094 21.9661 12.2159 21.8998 12.3029C21.8335 12.39 21.7404 12.4529 21.6349 12.482L15.4999 14.063C15.1539 14.1523 14.838 14.3327 14.5853 14.5854C14.3326 14.8381 14.1522 15.1539 14.0629 15.5L12.4809 21.635C12.4515 21.7401 12.3886 21.8327 12.3016 21.8986C12.2147 21.9646 12.1086 22.0003 11.9994 22.0003C11.8903 22.0003 11.7842 21.9646 11.6973 21.8986C11.6103 21.8327 11.5473 21.7401 11.5179 21.635L9.93694 15.5Z" stroke="#024E44" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                            <path d="M20 3V7" stroke="#024E44" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                            <path d="M22 5H18" stroke="#024E44" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                            <path d="M4 17V19" stroke="#024E44" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                            <path d="M5 18H3" stroke="#024E44" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                        Contact Onionloop
                    </span>

                    <h1 data-aos="fade-up" data-aos-delay="150" className="text-5xl font-bold text-black">
                        Get In <span className="text-[#04907E]">Touch</span> With Us
                    </h1>

                    <p data-aos="fade-up" data-aos-delay="200" className="text-black text-base">
                        Got a question about your transactions, a payment, or just need a hand? <br />
                        Our team is ready to assist you quickly and securely.
                    </p>

                    <ul className="flex items-center justify-center gap-4 w-full flex-wrap">
                        <li className="text-xs text-black/50 list-none flex items-center justify-center gap-1" > <svg width="8" height="8" viewBox="0 0 8 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M0 4C0 1.79086 1.79086 0 4 0C6.20914 0 8 1.79086 8 4C8 6.20914 6.20914 8 4 8C1.79086 8 0 6.20914 0 4Z" fill="#04907E" />
                        </svg>
                            Instant transfers</li>
                        <li className="text-xs text-black/50 list-none flex items-center justify-center gap-1"> <svg width="8" height="8" viewBox="0 0 8 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M0 4C0 1.79086 1.79086 0 4 0C6.20914 0 8 1.79086 8 4C8 6.20914 6.20914 8 4 8C1.79086 8 0 6.20914 0 4Z" fill="#EAB308" />
                        </svg>
                            Earn rewards</li>
                        <li className="text-xs text-black/50 list-none flex items-center justify-center gap-1"><svg width="8" height="8" viewBox="0 0 8 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M0 4C0 1.79086 1.79086 0 4 0C6.20914 0 8 1.79086 8 4C8 6.20914 6.20914 8 4 8C1.79086 8 0 6.20914 0 4Z" fill="#04907E" />
                        </svg>
                            No account numbers</li>
                    </ul>
                </div>
            </div>

            {/* ================= CONTACT CARDS ================= */}
            <div className="w-full max-w-7xl mx-auto px-4 mt-10">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-stretch">
                    {[
                        {
                            title: "Self help lines",
                            description: "Chat or call us for quick support",
                            icon: (<svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M25.5 27.6451H19.5L12.825 32.0851C11.835 32.7451 10.5 32.0401 10.5 30.8401V27.6451C6 27.6451 3 24.6451 3 20.1451V11.145C3 6.64502 6 3.64502 10.5 3.64502H25.5C30 3.64502 33 6.64502 33 11.145V20.1451C33 24.6451 30 27.6451 25.5 27.6451Z" strokeWidth="3" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" stroke="#04907E" />
                                <path d="M18.0002 17.04V16.7251C18.0002 15.7051 18.6303 15.1651 19.2603 14.7301C19.8753 14.3101 20.4902 13.7701 20.4902 12.7801C20.4902 11.4001 19.3802 10.29 18.0002 10.29C16.6202 10.29 15.5103 11.4001 15.5103 12.7801" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" stroke="#04907E" />
                                <path d="M17.9932 20.625H18.0067" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" stroke="#04907E" />
                            </svg>
                            ),
                            links: [
                                { label: "+234 81 33257365", href: "tel:+2348133257365" },
                                { label: "info@onionloop.com", href: "mailto:info@onionloop.com" },
                            ],
                            action: { label: "Chat with us", href: "/chatwithus" },
                        },
                        {
                            title: "Find answers",
                            icon: (<svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M18 33C26.25 33 33 26.25 33 18C33 9.75 26.25 3 18 3C9.75 3 3 9.75 3 18C3 26.25 9.75 33 18 33Z" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" stroke="#04907E" />
                                <path d="M11.625 18L15.87 22.245L24.375 13.755" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" stroke="#04907E" />
                            </svg>
                            ),
                            description: "Check our most asked questions",
                            action: { label: "Check FAQ", href: "/faq" },
                        },
                        {
                            title: "Partnerships",
                            icon: (<svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M27.0001 10.74C26.9101 10.725 26.8051 10.725 26.7151 10.74C24.6451 10.665 22.9951 8.97 22.9951 6.87C22.9951 4.725 24.7201 3 26.8651 3C29.0101 3 30.7351 4.74 30.7351 6.87C30.7201 8.97 29.0701 10.665 27.0001 10.74Z" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" stroke="#04907E" />
                                <path d="M25.4552 21.66C27.5102 22.005 29.7752 21.645 31.3652 20.58C33.4802 19.17 33.4802 16.86 31.3652 15.45C29.7602 14.385 27.4652 14.025 25.4102 14.385" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" stroke="#04907E" />
                                <path d="M8.95522 10.74C9.04522 10.725 9.15022 10.725 9.24022 10.74C11.3102 10.665 12.9602 8.97 12.9602 6.87C12.9602 4.725 11.2352 3 9.09022 3C6.94522 3 5.22021 4.74 5.22021 6.87C5.23521 8.97 6.88522 10.665 8.95522 10.74Z" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" stroke="#04907E" />
                                <path d="M10.5002 21.66C8.44515 22.005 6.18016 21.645 4.59016 20.58C2.47516 19.17 2.47516 16.86 4.59016 15.45C6.19516 14.385 8.49015 14.025 10.5452 14.385" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" stroke="#04907E" />
                                <path d="M18.0001 21.945C17.9101 21.93 17.8051 21.93 17.7151 21.945C15.6451 21.87 13.9951 20.175 13.9951 18.075C13.9951 15.93 15.7201 14.205 17.8651 14.205C20.0101 14.205 21.7351 15.945 21.7351 18.075C21.7201 20.175 20.0701 21.885 18.0001 21.945Z" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" stroke="#04907E" />
                                <path d="M13.6351 26.6699C11.5201 28.0799 11.5201 30.3899 13.6351 31.7999C16.0351 33.4049 19.9651 33.4049 22.3651 31.7999C24.4801 30.3899 24.4801 28.0799 22.3651 26.6699C19.9801 25.0799 16.0351 25.0799 13.6351 26.6699Z" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" stroke="#04907E" />
                            </svg>
                            ),
                            description: "Contact us for deals and solutions",
                            action: { label: "Become a Partner", href: "/partners" },
                        },
                    ].map((card, index) => (
                        <div
                            key={card.title}
                            data-aos="fade-up"
                            data-aos-delay={index * 120}
                            className="w-full h-full rounded-lg shadow-sm p-6 bg-white flex flex-col items-center text-center"
                        >
                            <div className="mb-6 p-4 bg-gray-100 rounded-2xl text-(--primary-light) w-14 h-14 flex items-center justify-center shrink-0">
                                {card.icon}
                            </div>

                            <div className="flex-1 flex flex-col items-center justify-start">
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
                            </div>

                            <Link
                                href={card.action.href}
                                className="text-(--primary) text-xs mt-6 pt-2 font-bold flex items-center justify-center gap-2 shrink-0"
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

export default Page