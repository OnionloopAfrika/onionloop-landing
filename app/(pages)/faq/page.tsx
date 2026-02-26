"use client"
import { ChevronDownIcon, Star } from "@/app/components/icons/svgs";
import { faqs } from "@/app/constants/mockdata";
import { useState } from "react";

const page = () => {
        const [openIndex, setOpenIndex] = useState<number | null>(null);
    return (
        <div className="w-full">
            <div className="w-full py-16 md:py-24 px-4 md:px-6 about-gradient min-h-[60dvh] flex items-center justify-center">
                <div className="w-full about-gradient absolute top-0 bottom-0 right-0 h-145 -z-1"></div>
                <div className="w-full max-w-2xl mx-auto flex flex-col items-center justify-center text-center gap-6">
                    <span className="text-(--primary) inline-flex justify-center items-center bg-[#CCEA6F80] gap-2 px-4 py-2 rounded-full font-normal">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M9.93694 15.5C9.84766 15.1539 9.66728 14.8381 9.41456 14.5854C9.16184 14.3327 8.84601 14.1523 8.49994 14.063L2.36494 12.481C2.26027 12.4513 2.16815 12.3883 2.10255 12.3014C2.03696 12.2146 2.00146 12.1088 2.00146 12C2.00146 11.8912 2.03696 11.7854 2.10255 11.6986C2.16815 11.6118 2.26027 11.5487 2.36494 11.519L8.49994 9.93601C8.84589 9.84681 9.16163 9.66658 9.41434 9.41404C9.66705 9.16151 9.84751 8.84589 9.93694 8.50001L11.5189 2.36501C11.5483 2.25992 11.6113 2.16735 11.6983 2.1014C11.7852 2.03545 11.8913 1.99976 12.0004 1.99976C12.1096 1.99976 12.2157 2.03545 12.3026 2.1014C12.3896 2.16735 12.4525 2.25992 12.4819 2.36501L14.0629 8.50001C14.1522 8.84608 14.3326 9.1619 14.5853 9.41462C14.838 9.66734 15.1539 9.84773 15.4999 9.93701L21.6349 11.518C21.7404 11.5471 21.8335 11.61 21.8998 11.6971C21.9661 11.7841 22.002 11.8906 22.002 12C22.002 12.1094 21.9661 12.2159 21.8998 12.3029C21.8335 12.39 21.7404 12.4529 21.6349 12.482L15.4999 14.063C15.1539 14.1523 14.838 14.3327 14.5853 14.5854C14.3326 14.8381 14.1522 15.1539 14.0629 15.5L12.4809 21.635C12.4515 21.7401 12.3886 21.8327 12.3016 21.8986C12.2147 21.9646 12.1086 22.0003 11.9994 22.0003C11.8903 22.0003 11.7842 21.9646 11.6973 21.8986C11.6103 21.8327 11.5473 21.7401 11.5179 21.635L9.93694 15.5Z" stroke="#024E44" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                            <path d="M20 3V7" stroke="#024E44" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                            <path d="M22 5H18" stroke="#024E44" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                            <path d="M4 17V19" stroke="#024E44" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                            <path d="M5 18H3" stroke="#024E44" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                        </svg>
                        Frequently Asked Questions
                    </span>
                    <h1 className="text-5xl font-bold text-black">
                        Question <span className="text-[#04907E]">People</span> Often Ask
                    </h1>
                    <p className="text-black text-base">
                        Answers to common questions  people about using Onionloop for everyday payments.
                    </p>
                    <ul className="flex items-center justify-center w-full gap-4 flex-wrap">
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
        <div className="w-full max-w-7xl mx-auto px-4 mt-10">
            <div className="max-w-3xl mx-auto space-y-4">
                {faqs.map((item, index) => {
                    const isOpen = openIndex === index;

                    return (
                        <div
                            key={item.question}
                            data-aos="fade-up"
                            data-aos-delay={index * 100}
                            className="border border-gray-200 rounded-xl overflow-hidden bg-white"
                        >
                            <div className="h-16 flex items-center">
                                <button
                                    onClick={() => setOpenIndex(isOpen ? null : index)}
                                    className="w-full flex items-center justify-between px-6 text-left font-medium text-gray-900 gap-2"
                                >
                                    <span className="leading-none inline-flex w-[95%] text-sm">{item.question}</span>
                                    <ChevronDownIcon isOpen={isOpen} />
                                </button>
                            </div>

                            {isOpen && (
                                <div
                                    className={`grid transition-all duration-300 ${isOpen
                                            ? "grid-rows-[1fr] opacity-100"
                                            : "grid-rows-[0fr] opacity-0"
                                        }`}
                                >
                                    <div className="overflow-hidden px-6 pb-6 text-(--text-tertiary) text-sm">
                                        {item.answer}
                                    </div>
                                </div>
                            )}
                        </div>
                    );
                })}
            </div>
        </div>
        </div>
    )
}

export default page
