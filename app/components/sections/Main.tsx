"use client"

import { useMode } from "@/app/context/ModeContext";
import { CashIcon, DocumentIcon, DownloadIcon, MessageIcon, MoneyIcon, PayIcon, SendIcon, Star, TickIcon, UserIcon } from "../icons/svgs";

const Main = () => {
    const personal = [
        {
            icon: <SendIcon />,
            title: "Send Money Instantly",
            description: "Send money to friends, family, or anyone with a QR code. No need to know their bank details or phone number.",
            tags: ["Instant transfers", "No personal info shared", "Secure and private"]
        },
        {
            icon: <DownloadIcon />,
            title: "Receive Payments",
            description: "Generate your unique QR code and let others pay you instantly. Perfect for splitting bills or receiving funds.",
            tags: ["Your personal QR code", "Receive anytime", "Track all payments"]
        },
        {
            icon: <PayIcon />,
            title: "Pay Local Shops",
            description: "Use Onionloop at your favorite local stores and merchants. Just scan their QR code and pay—no cash, no cards.",
            tags: ["Contactless payments", "Fast checkout", "Digital receipts"]
        },
        {
            icon: <MessageIcon />,
            title: "Chat After Transactions",
            description: "Need to clarify something? Chat directly with the person you paid or received money from, right in the app.",
            tags: ["In-app messaging", "Transaction context", "Stay connected"]
        }
    ]
    const business = [
        {
            icon: <MoneyIcon />,
            title: "Accurate Payment Records",
            description: "Each payment is captured automatically as it happens, so nothing is missed or entered manually.",
            tags: ["Automatic transaction records", "Instant payment confirmation", "Fewer reconciliation issues"]
        },
        {
            icon: <UserIcon />,
            title: "Clear Business Identity",
            description: "Your business username and avatar appear during every payment, so customers know exactly who they’re paying.",
            tags: ["Business name shown on payment", "Clear payment confirmation", "Encourages repeat payments"]
        },
        {
            icon: <DocumentIcon />,
            title: "Easy Accounting",
            description: "Payments are organised and summarised for you, making it easier to review activity and prepare accounts.",
            tags: ["Daily, weekly, and monthly summaries", "Clear transaction history", "Less manual record-keeping"]
        },
        {
            icon: <CashIcon />,
            title: "Reduced Cash  Risks",
            description: "Digital payments help limit cash-related losses and the need for manual counting.",
            tags: ["Fewer cash handling errors", "Reduced theft exposure", "Cleaner end-of-day reconciliation"]
        }
    ]
    const { mode } = useMode();
    const data = mode === "personal" ? personal : business;
    return (
        <div className="w-full max-w-7xl mx-auto mt-4 md:mt-8">
            <header className="w-full flex flex-col items-center justify-center">
                <div className="bg-[#CCEA6F80] text-(--primary) flex items-center justify-center gap-2 px-4 py-2 rounded-full mt-10 mb-6 font-medium">
                    <Star /> {mode === "personal" ? "Everything You Need to Make Payment" : "Make Payments Work for You"}
                </div>
                <h1 className="text-4xl max-w-180 font-bold text-center p-4">
                    {mode === "personal" ? "Onionloop lets you make payments, receive money, and keep track of your transactions." : "Fewer errors, clearer records, and complete visibility over your money."}
                </h1>
            </header>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-10 max-w-4xl mx-auto p-3">
                {data.map((item, index) => (
                   <div key={index} className="bg-linear-to-b from-[#f2f2f2] via-[#f2f2f2] to-[#ffffff]  rounded-4xl p-6 flex flex-col items-start justify-center gap-2 shadow-md">
                        <div className="flex items-center justify-center w-16 h-16 bg-white rounded-xl mb-6 p-4">
                            {item.icon}
                        </div>
                        <h2 className="text-2xl font-semibold text-(--text-secondary)">{item.title}</h2>
                        <p className="text-(--text-tertiary) text-sm">{item.description}</p>
                        <ul className="list-none text-(--text-tertiary) space-y-1">
                            {item.tags.map((tag, tagIndex) => (
                                <li key={tagIndex} className="flex items-center justify-start gap-2"><TickIcon /> {tag}</li>
                            ))}
                        </ul>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Main
