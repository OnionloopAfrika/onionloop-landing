"use client";

import React, { useState } from "react";
import { ChevronDownIcon, Star } from "../icons/svgs";
import "aos/dist/aos.css"

const faq = [
    {
        question: "Are there any transaction or service fees?",
        answer:
            "Some transactions may attract small fees or commissions, which are always shown clearly before you confirm a transaction.",
    },
    {
        question: "How do QR code payments work on Onionloop?",
        answer:
            "Merchants display a QR code. Customers scan the code using the Onionloop app, confirm the payment, and complete the transaction instantly and securely.",
    },
    {
        question: "Is Onionloop safe to use?",
        answer:
            "Yes. Onionloop uses secure authentication methods, including PIN confirmation and account verification, to protect all users and transactions.",
    },
    {
        question: "Can I link my bank account to Onionloop?",
        answer:
            "Yes. Users can link one or more bank accounts to their Onionloop wallet to send or receive funds easily.",
    },
    {
        question: "What is Onionloop?",
        answer:
            "Onionloop is a digital payment platform that allows individuals and businesses to make and receive secure payments using QR codes, wallets, and linked bank accounts.",
    },
    {
        question: "What is the difference between merchants and agents?",
        answer:
            "Merchants receive payments for goods and services, while agents help individuals deposit or withdraw cash. Agents do not interact directly with merchants.",
    },
];

const Accordion = () => {
    const [openIndex, setOpenIndex] = useState<number | null>(null);

    return (
        <div className="w-full min-h-[85dvh] max-w-7xl mx-auto px-4 relative overflow-hidden">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                <AccordionBg />
            </div>
            <header className="w-full flex flex-col items-center justify-center">
                <div className="bg-[#CCEA6F80] text-(--primary) flex items-center justify-center gap-2 px-4 py-2 rounded-full mt-10 mb-6 font-medium">
                    <Star /> Questions People Often Ask
                </div>
                <h1 className="text-4xl max-w-3xl font-bold text-center mb-12">
                    Answers to common questions about using Onionloop for everyday payments.
                </h1>
            </header>

            <div className=" space-y-4">
                {faq.map((item, index) => {
                    const isOpen = openIndex === index;

                    return (
                        <div
                            key={index}
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
    );
};

export default Accordion;


const AccordionBg = () => (
    <svg width="1217" height="1029" viewBox="0 0 1217 1029" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path opacity="0.1" d="M124.172 1026.71C110.375 1026.71 96.579 1024.4 78.1832 1015.2C64.3863 1008.3 57.4867 992.209 64.3851 976.111C114.974 856.525 78.1823 693.243 41.3907 536.861C22.9949 454.071 4.59896 375.88 0 306.888C0 293.09 6.89886 281.59 18.3962 276.99C29.8936 272.391 43.6909 276.99 52.8888 283.889C174.761 412.674 296.633 552.955 379.414 704.737C416.206 548.355 416.206 371.277 413.907 217.195C413.907 205.697 420.806 194.199 432.303 189.6C443.8 185 457.597 187.3 464.496 196.498C535.779 263.191 558.773 341.38 584.068 417.271L595.566 451.772C600.165 467.87 604.763 481.665 609.362 497.763C639.255 334.482 696.742 171.202 837.01 10.2208C846.208 1.02189 860.005 -3.57729 871.503 3.32191C883 10.2211 889.898 21.7231 887.599 35.5215C855.406 235.598 825.514 442.568 857.706 640.345C917.493 552.955 1050.86 529.961 1181.93 513.862C1193.43 513.862 1204.93 518.461 1211.83 527.66C1218.72 536.859 1218.72 550.661 1211.83 559.86C1126.75 697.844 1020.97 891.021 1092.25 962.313C1103.75 973.811 1103.75 989.906 1094.55 1001.4C1085.35 1012.9 1069.26 1017.5 1055.46 1008.3L1032.47 994.505C919.791 927.813 869.203 895.618 781.823 973.809C779.524 973.809 777.224 978.406 772.625 978.406C701.341 1008.3 620.86 996.807 535.779 946.213C510.485 925.515 489.789 911.719 466.794 904.82C436.901 895.621 404.709 895.621 365.618 904.82C358.72 904.82 351.821 904.82 347.222 904.82C335.724 900.22 303.532 886.421 248.344 969.212C246.045 973.811 241.445 976.106 236.846 978.406C225.349 985.305 213.851 992.208 204.653 996.807C181.659 1012.91 156.365 1029 126.472 1029L124.172 1026.71Z" fill="#CCEA6F" />
    </svg>
)