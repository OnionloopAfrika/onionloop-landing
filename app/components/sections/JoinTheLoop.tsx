"use client";
import "aos/dist/aos.css";
import Image from "next/image";
import { AppleStoreIcon, GooglePlayBlackIcon } from "../icons/svgs";

const JoinTheLoop = () => {

    return (
        <div 
            className="w-full max-w-7xl bg-(--primary) rounded-[48px] flex flex-col-reverse md:flex-row justify-center items-stretch mx-auto gap-6 relative overflow-hidden mb-10 pt-8"
            data-aos="fade-up"
        >
            <div 
                className="w-full md:w-2/5 relative min-h-75 md:h-auto"
                data-aos="fade-right"
                data-aos-delay="200"
            >
                <Image
                    src="/mobileapp.png"
                    alt="Hero Personal"
                    fill
                    className="object-contain"
                    sizes="(max-width: 768px) 100vw, 40vw"
                />
            </div>
            
            <div className="w-50 h-50 md:w-150 md:h-150 rounded-full md:border-90 border-20 border-white/25 absolute md:-top-70 md:-right-40 -top-20 -right-20"></div>

            <div 
                className="w-full md:w-3/5 flex flex-col items-start justify-center gap-4 p-8 md:p-12 relative z-10"
                data-aos="fade-left"
                data-aos-delay="400"
            >
                <h1 className="text-white text-4xl md:text-5xl font-bold leading-tight">
                    Join the loop. Scan. Pay. Chat.
                </h1>
                <p className="text-white text-sm md:text-base opacity-90">
                    Download & Install Onionloop App And Enjoy Digital Payment Convenience!
                </p>
                <div className="flex w-full items-center justify-start gap-2 flex-wrap mt-2">
                    <a
                        href="#"
                        aria-label="link to playstore"
                        className="hover:scale-105 transition-transform"
                    >
                        <GooglePlayBlackIcon />
                    </a>
                    <a
                        href="#"
                        aria-label="Link to apple store"
                        className="hover:scale-105 transition-transform"
                    >
                        <AppleStoreIcon />
                    </a>
                </div>
            </div>
        </div>
    );
};

export default JoinTheLoop;