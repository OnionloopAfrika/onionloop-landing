"use client"

import { useEffect } from "react"
import AOS from "aos"
import "aos/dist/aos.css"
import { TickIcon } from "@/app/components/icons/svgs"
import Image from "next/image"

const page = () => {
    useEffect(() => {
        AOS.init({
            duration: 1000,
            once: true,
            easing: "ease-in-out",
        })
    }, [])

    return (
        <div className="w-full overflow-hidden">
            <div className="w-full py-16 md:py-24 px-4 md:px-6 about-gradient min-h-[60dvh] flex items-center justify-center">
                <div className="w-full about-gradient absolute top-0 bottom-0 right-0 h-145 -z-1"></div>
                <div
                    className="w-full max-w-2xl mx-auto flex flex-col items-center justify-center text-center gap-6"
                    data-aos="fade-up"
                >
                    <span className="text-(--primary) inline-flex justify-center items-center bg-[#CCEA6F80] gap-2 px-4 py-2 rounded-full font-normal">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M9.93694 15.5C9.84766 15.1539 9.66728 14.8381 9.41456 14.5854C9.16184 14.3327 8.84601 14.1523 8.49994 14.063L2.36494 12.481C2.26027 12.4513 2.16815 12.3883 2.10255 12.3014C2.03696 12.2146 2.00146 12.1088 2.00146 12C2.00146 11.8912 2.03696 11.7854 2.10255 11.6986C2.16815 11.6118 2.26027 11.5487 2.36494 11.519L8.49994 9.93601C8.84589 9.84681 9.16163 9.66658 9.41434 9.41404C9.66705 9.16151 9.84751 8.84589 9.93694 8.50001L11.5189 2.36501C11.5483 2.25992 11.6113 2.16735 11.6983 2.1014C11.7852 2.03545 11.8913 1.99976 12.0004 1.99976C12.1096 1.99976 12.2157 2.03545 12.3026 2.1014C12.3896 2.16735 12.4525 2.25992 12.4819 2.36501L14.0629 8.50001C14.1522 8.84608 14.3326 9.1619 14.5853 9.41462C14.838 9.66734 15.1539 9.84773 15.4999 9.93701L21.6349 11.518C21.7404 11.5471 21.8335 11.61 21.8998 11.6971C21.9661 11.7841 22.002 11.8906 22.002 12C22.002 12.1094 21.9661 12.2159 21.8998 12.3029C21.8335 12.39 21.7404 12.4529 21.6349 12.482L15.4999 14.063C15.1539 14.1523 14.838 14.3327 14.5853 14.5854C14.3326 14.8381 14.1522 15.1539 14.0629 15.5L12.4809 21.635C12.4515 21.7401 12.3886 21.8327 12.3016 21.8986C12.2147 21.9646 12.1086 22.0003 11.9994 22.0003C11.8903 22.0003 11.7842 21.9646 11.6973 21.8986C11.6103 21.8327 11.5473 21.7401 11.5179 21.635L9.93694 15.5Z" stroke="#024E44" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                            <path d="M20 3V7" stroke="#024E44" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                            <path d="M22 5H18" stroke="#024E44" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                            <path d="M4 17V19" stroke="#024E44" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                            <path d="M5 18H3" stroke="#024E44" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                        About Onionloop
                    </span>
                    <h1 className="text-5xl font-bold text-black">
                        Making Payments <span className="text-[#04907E]">Simple</span> and <span className="text-[#9BC41D]">Rewarding</span>
                    </h1>
                    <p className="text-black text-base">
                        Onionloop is built for everyday people and businesses across Africa. We believe payments should be fast, secure, and actually give you something back.
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

            <div className="w-full max-w-7xl mx-auto grid-cols-1 md:grid-cols-2 gap-4 grid px-4 md:px-6 mt-10 mb-20 justify-center items-center">
                {/* grid 1 */}
                <div className="w-full max-w-110 h-full mx-auto" data-aos="fade-right">
                    <h1 className="text-left font-bold text-4xl text-(--text-main)">We Started With A simple Question</h1>
                    <p className="text-sm text-(--text-main) text-justify mt-4">Why should sending money be harder than sending a message?</p>
                    <p className="text-sm text-(--text-main) text-justify">
                        Why share account numbers or phone details just to get paid?
                    </p>
                    <p className="text-sm text-(--text-main) text-justify mt-4">Onionloop was built to make everyday payments simple. We bridge the gap between complex banking systems and how people and businesses actually move money using QR payments and secure wallets to make transactions clear, easy, and rewarding.</p>
                </div>
                {/* grid 2 */}
                <div className="w-full max-w-110 h-80 relative mt-8 md:mt-0" data-aos="fade-left">
                    <div className="absolute inset-0 bg-lime-100 transform rotate-45 scale-75 rounded-3xl -z-10 blur-xl opacity-60" />

                    <Image src="/AboutImage2.png" alt="Hero Personal" layout="fill" objectFit="contain" />
                </div>
            </div>

            <div className="w-full max-w-7xl mx-auto grid-cols-1 md:grid-cols-2 grid px-4 md:px-6 mt-10 mb-20 justify-center items-center gap-4">
                <div className="w-full max-w-110 h-full mx-auto" data-aos="fade-right">
                    <span className="text-(--primary) inline-flex justify-center items-center bg-[#CCEA6F80] gap-2 px-4 py-2 rounded-full font-bold">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="#024E44" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                            <path d="M12 18C15.3137 18 18 15.3137 18 12C18 8.68629 15.3137 6 12 6C8.68629 6 6 8.68629 6 12C6 15.3137 8.68629 18 12 18Z" stroke="#024E44" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                            <path d="M12 14C13.1046 14 14 13.1046 14 12C14 10.8954 13.1046 10 12 10C10.8954 10 10 10.8954 10 12C10 13.1046 10.8954 14 12 14Z" stroke="#024E44" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                        </svg>
                        Our Mission
                    </span>
                    <h1 className="text-left font-bold text-4xl text-(--text-main) mt-4">Make Payments as simple as having a conversation</h1>
                    <p className="text-sm text-(--text-main) text-justify mt-4">We’re building payment tools that eliminate the usual barriers to moving money, no account numbers to remember, no sensitive details to share, and no unnecessary delays.</p>
                    <p className="text-sm text-(--text-main) text-justify mt-4">We believe everyone in Africa should be able to send money, pay locally, and run their business smoothly. Payments should be simple, secure, and rewarding.</p>
                </div>
                <div className="w-full max-w-110 h-full mx-auto bg-[#F7F7F7] rounded-2xl mt-8 md:mt-0" data-aos="zoom-in">
                    <div className="p-6 flex items-start justify-center gap-2">
                        <div className="flex items-center justify-center w-10 h-10 bg-white rounded-xl mb-4 p-2">
                            <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M6.00023 21C5.71638 21.001 5.43808 20.9214 5.19766 20.7705C4.95725 20.6196 4.76458 20.4035 4.64206 20.1475C4.51953 19.8914 4.47217 19.6059 4.50548 19.324C4.53879 19.0421 4.6514 18.7754 4.83023 18.555L19.6802 3.255C19.7916 3.12642 19.9434 3.03953 20.1107 3.0086C20.278 2.97766 20.4508 3.00452 20.6008 3.08476C20.7508 3.16499 20.8691 3.29385 20.9362 3.45016C21.0034 3.60648 21.0153 3.78097 20.9702 3.945L18.0902 12.975C18.0053 13.2023 17.9768 13.4468 18.0071 13.6875C18.0374 13.9282 18.1257 14.158 18.2644 14.3571C18.403 14.5563 18.5879 14.7188 18.8031 14.8307C19.0184 14.9427 19.2576 15.0008 19.5002 15H30.0002C30.2841 14.999 30.5624 15.0786 30.8028 15.2295C31.0432 15.3804 31.2359 15.5965 31.3584 15.8525C31.4809 16.1086 31.5283 16.3941 31.495 16.676C31.4617 16.9579 31.3491 17.2246 31.1702 17.445L16.3202 32.745C16.2088 32.8736 16.057 32.9605 15.8898 32.9914C15.7225 33.0223 15.5496 32.9955 15.3996 32.9152C15.2496 32.835 15.1314 32.7062 15.0642 32.5498C14.9971 32.3935 14.9851 32.219 15.0302 32.055L17.9102 23.025C17.9952 22.7977 18.0237 22.5532 17.9933 22.3125C17.963 22.0718 17.8747 21.842 17.7361 21.6429C17.5975 21.4437 17.4126 21.2812 17.1973 21.1693C16.9821 21.0573 16.7429 20.9992 16.5002 21H6.00023Z" stroke="#04907E" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" />
                            </svg>
                        </div>
                        <div className="w-full">
                            <h3 className="text-2xl font-semibold mb-2 text-(--text-secondary)">Fast & Reliable </h3>
                            <p className="text-(--text-main) text-sm">Payments are processed instantly. No waiting, no delays just quick and seamless transactions every time.</p>
                        </div>
                    </div>
                    <div className="p-6 flex items-start justify-center gap-2">
                        <div className="flex items-center justify-center w-10 h-10 bg-white rounded-xl mb-4 p-2">
                            <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M15.7352 3.34509L8.25023 6.16509C6.52523 6.81009 5.11523 8.85009 5.11523 10.6801V21.8251C5.11523 23.5951 6.28523 25.9201 7.71023 26.9851L14.1602 31.8001C16.2752 33.3901 19.7552 33.3901 21.8702 31.8001L28.3202 26.9851C29.7452 25.9201 30.9152 23.5951 30.9152 21.8251V10.6801C30.9152 8.83509 29.5052 6.79509 27.7802 6.15009L20.2952 3.34509C19.0202 2.88009 16.9802 2.88009 15.7352 3.34509Z" stroke="#04907E" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" />
                                <path d="M18 18.75C19.6569 18.75 21 17.4069 21 15.75C21 14.0931 19.6569 12.75 18 12.75C16.3431 12.75 15 14.0931 15 15.75C15 17.4069 16.3431 18.75 18 18.75Z" stroke="#04907E" stroke-width="3" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
                                <path d="M18 18.75V23.25" stroke="#04907E" stroke-width="3" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
                            </svg>
                        </div>
                        <div className="w-full">
                            <h3 className="text-2xl font-semibold mb-2 text-(--text-secondary)">Secure & Encrypted  </h3>
                            <p className="text-(--text-main) text-sm">All transactions are protected with bank-level encryption. Your money and data are always safe with us.</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="w-full max-w-7xl mx-auto grid-cols-1 md:grid-cols-2 gap-4 grid px-4 md:px-6 mt-10 mb-20 justify-center items-center">
                <div
                    className="rounded-2xl bg-[#F7F7F7] p-6 flex flex-col items-start justify-center gap-2 max-w-110 mx-auto"
                    data-aos="fade-up"
                >
                    <div className="flex items-center justify-center w-16 h-16 bg-white rounded-xl mb-6 p-2 text-4xl">
                        🌍
                    </div>
                    <h2 className="text-2xl font-semibold text-(--text-main)">The Future we&apos;re building</h2>
                    <p className="text-(--text-main) text-sm">A future where every African can participate fully in the digital economy, where payments are fast, rewarding, and where everyone has access to financial services not just as a goal, but as reality. We look forward to: </p>
                    <ul className="list-none text-(--text-main) space-y-1">
                        {["100 million users across Africa by 2030", "Every business, big or small, accepting QR payments.", "Financial tools that empower, not complicate."].map((tag) => (
                            <li key={tag} className="flex items-center justify-start gap-2 text-sm"><TickIcon /> {tag}</li>
                        ))}
                    </ul>
                </div>
                <div className="w-full max-w-110 h-full mx-auto mt-8 md:mt-0" data-aos="fade-left">
                    <span className="text-(--primary) inline-flex justify-center items-center bg-[#CCEA6F80] gap-2 px-4 py-2 rounded-full font-bold">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="#024E44" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                            <path d="M12 18C15.3137 18 18 15.3137 18 12C18 8.68629 15.3137 6 12 6C8.68629 6 6 8.68629 6 12C6 15.3137 8.68629 18 12 18Z" stroke="#024E44" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                            <path d="M12 14C13.1046 14 14 13.1046 14 12C14 10.8954 13.1046 10 12 10C10.8954 10 10 10.8954 10 12C10 13.1046 10.8954 14 12 14Z" stroke="#024E44" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                        </svg>
                        Our Vision
                    </span>
                    <h1 className="text-left font-bold text-4xl text-(--text-main) mt-4">Become Africa&apos;s most <br /> <span className="text-[#04907E]">trusted payment platform</span></h1>
                    <p className="text-sm text-(--text-main) text-justify mt-4">We imagine an Africa where anyone can send money, make payments, and run a business without traditional banking barriers built on transparency, trust, and rewarding transactions.</p>
                    <p className="text-sm text-(--text-main) text-justify mt-4">Our goal is to make everyday payments simple and beneficial, empowering people to grow their businesses and support their communities.</p>
                </div>
            </div>
        </div>
    )
}

export default page;