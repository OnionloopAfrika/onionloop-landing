"use client";

import React, { useState } from "react";
import { ChevronDownIcon, Star } from "../icons/svgs";

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
        <div className="w-full min-h-[85dvh] max-w-7xl mx-auto px-4">
            <header className="w-full flex flex-col items-center justify-center">
                <div className="bg-[#CCEA6F80] text-(--primary) flex items-center justify-center gap-2 px-4 py-2 rounded-full mt-10 mb-6 font-medium">
                    <Star /> Questions People Often Ask
                </div>
                <h1 className="text-4xl max-w-3xl font-bold text-center mb-12">
                    Answers to common questions about using Onionloop for everyday payments.
                </h1>
            </header>

            <div className="max-w-3xl mx-auto space-y-4">
                {faq.map((item, index) => {
                    const isOpen = openIndex === index;

                    return (
                        <div
                            key={index}
                            className="border border-gray-200 rounded-xl overflow-hidden bg-white"
                        >
                            <div className="h-16 flex items-center">
                                <button
                                    onClick={() => setOpenIndex(isOpen ? null : index)}
                                    className="w-full flex items-center justify-between px-6 text-left font-medium text-gray-900"
                                >
                                    <span className="leading-none">{item.question}</span>
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
