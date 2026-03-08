"use client";

import Link from "next/link";
import { useMode } from "../../context/ModeContext";
import Steps from "./Steps";
import { AppleStoreIcon, GooglePlayBlackIcon } from "../icons/svgs";

export default function CTA() {
    const { mode } = useMode();

    return (
        <section className="bg-(--primary) w-full text-center relative overflow-hidden py-10 md:py-20" id="cta">
            <header className="w-full flex flex-col items-center justify-center relative z-10">
                <div className="text-white bg-white/25 flex items-center justify-center gap-2 px-4 py-2 rounded-full mb-6 font-medium">
                    <svg width="21" height="21" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M9.18056 0.652915C9.50271 -0.217703 10.7341 -0.217704 11.0563 0.652914L13.1999 6.44608C13.3012 6.7198 13.517 6.93561 13.7907 7.03689L19.5839 9.18056C20.4545 9.50271 20.4545 10.7341 19.5839 11.0563L13.7907 13.1999C13.517 13.3012 13.3012 13.517 13.1999 13.7907L11.0563 19.5839C10.7341 20.4545 9.50271 20.4545 9.18056 19.5839L7.03689 13.7907C6.93561 13.517 6.7198 13.3012 6.44608 13.1999L0.652915 11.0563C-0.217703 10.7341 -0.217704 9.50271 0.652914 9.18056L6.44608 7.03689C6.7198 6.93561 6.93561 6.7198 7.03689 6.44608L9.18056 0.652915Z" fill="#CCEA6F" />
                    </svg>
                    Get started
                </div>
                <h1 className="text-3xl md:text-5xl max-w-180 font-bold text-center px-4 text-[#CCEA6F]">
                    Join the loop
                </h1>
            </header>

            <div className="w-40 h-40 md:w-100 md:h-100 rounded-full md:border-50 border-10 border-white/10 absolute -top-10 -left-10 md:top-16 md:left-[10%] pointer-events-none"></div>
            <div className="w-40 h-40 md:w-100 md:h-100 rounded-full md:border-50 border-10 border-white/10 absolute -bottom-10 -right-10 md:bottom-16 md:right-[10%] pointer-events-none"></div>
            
            <div className="relative z-10">
                <Steps />
            </div>

            <div className="relative z-10 pb-10">
                {mode === "personal" ? (
                    <div className="flex w-full items-center justify-center gap-2 py-4 px-4">
                        <a href="#" className="shrink-0" aria-label="link to playstore">
                            <GooglePlayBlackIcon />
                        </a>
                        <a href="#" className="shrink-0" aria-label="Link to apple store">
                            <AppleStoreIcon />
                        </a>
                    </div>
                ) : (
                    <div className="px-4">
                        <Link href={"/onboarding"} className="inline-block bg-[#CCEA6F] text-(--primary) px-8 py-4 rounded-xl font-bold hover:bg-white/80 transition-colors">
                            Create your account
                        </Link>
                    </div>
                )}
            </div>
        </section>
    );
}