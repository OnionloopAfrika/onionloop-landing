"use client";

import { OnionLoop } from "@/app/components/icons/svgs";
import Link from "next/link";
import React, { useState } from "react";

type Step = "selection" | "personal" | "business" | "success";

export default function Onboarding() {
  const [step, setStep] = useState<Step>("selection");

  const handleBack = () => {
    if (step === "personal") setStep("selection");
    if (step === "business") setStep("personal");
  };

  const renderStep = () => {
    switch (step) {
      case "selection":
        return <AccountSelection onNext={() => setStep("personal")} />;
      case "personal":
        return <PersonalInfo onNext={() => setStep("business")} />;
      case "business":
        return <BusinessInfo onNext={() => setStep("success")} />;
      case "success":
        return <SuccessState />;
      default:
        return <AccountSelection onNext={() => setStep("personal")} />;
    }
  };

  return (
    <div className="min-h-screen bg-[#F9FAFB] flex flex-col items-center p-4">
      <div className="w-full max-w-6xl flex justify-between items-center mb-12 py-6">
        <Link href="/" aria-label="OnionLoop Home">
          <OnionLoop />
        </Link>
        {(step === "personal" || step === "business") && (
          <button
            onClick={handleBack}
            className="text-[#6C6C6C] font-medium text-lg flex items-center gap-2 hover:text-[#131313] transition-colors"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="15 18 9 12 15 6"></polyline>
            </svg>
            Back
          </button>
        )}
      </div>

      <div className="w-full max-w-145 bg-white rounded-3xl shadow-sm border border-gray-100 p-4 md:p-10">
        {renderStep()}
      </div>
    </div>
  );
}

function AccountSelection({ onNext }: { onNext: () => void }) {
  return (
    <div className="flex flex-col items-center text-center">
      <h2 className="text-[#363636] md:text-xl text-base font-normal mb-8">
        Please provide basic details to setup your business account in 2 steps.
      </h2>

      <div className="w-full space-y-4 mb-10 text-left">
        <div className="flex items-start gap-4 p-4 border-b border-gray-50">
          <div className="w-12 h-12 rounded-full bg-[#04907E10] flex items-center justify-center shrink-0">
            <UserIcon />
          </div>
          <div>
            <h4 className="text-[#131313] font-bold">Personal Info</h4>
            <p className="text-[#6C6C6C] md:text-sm text-xs">Your email, phone number, and BVN details.</p>
          </div>
        </div>

        <div className="flex items-start gap-4 p-4">
          <div className="w-12 h-12 rounded-full bg-[#04907E10] flex items-center justify-center shrink-0">
            <BusinessIcon />
          </div>
          <div>
            <h4 className="text-[#131313] font-bold">Business Info</h4>
            <p className="text-[#6C6C6C] md:text-sm text-xs">Your Business name and Shop/Home address</p>
          </div>
        </div>
      </div>

      <p className="text-[#6C6C6C] text-xs mb-6">
        By continuing, you agreed to our <span className="text-[#024E44] font-medium underline">Term of service</span> and <span className="text-[#024E44] font-medium underline">Privacy policy</span>
      </p>

      <button onClick={onNext} className="w-full bg-[#024E44] text-white py-4 px-8 rounded-xl font-bold text-lg hover:opacity-90 transition-opacity">
        Continue
      </button>
    </div>
  );
}

function PersonalInfo({ onNext }: { onNext: () => void }) {
  return (
    <div>
      <div className="text-center mb-10">
        <h2 className="text-[#131313] md:text-2xl text-xl font-bold mb-2">Step One: Personal Information</h2>
        <p className="text-[#6C6C6C] text-base">Please enter your details exactly as they appear on your bank documents.</p>
      </div>

      <div className="space-y-4">
        <div className="space-y-1">
          <label className="text-[#131313] font-bold text-sm">Email Address</label>
          <input type="email" placeholder="Email@address.com" className="w-full bg-[#F7F7F7] p-4 rounded-lg outline-none text-[#363636]" />
        </div>
        <div className="space-y-1">
          <label className="text-[#131313] font-bold text-sm">Phone Number (+234)</label>
          <input type="text" placeholder="+234 800 000 0000" className="w-full bg-[#F7F7F7] p-4 rounded-lg outline-none text-[#363636]" />
        </div>
        <div className="space-y-1">
          <label className="text-[#131313] font-bold text-sm">Bank Verification Number (BVN)</label>
          <input type="password" placeholder="Enter Your 11-digits BVN" className="w-full bg-[#F7F7F7] p-4 rounded-lg outline-none text-[#363636]" />
          <p className="text-[#6C6C6C] text-xs flex items-center gap-1">
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M15.4168 3.42506L11.2585 1.86672C10.5668 1.60839 9.43346 1.60839 8.7418 1.86672L4.58346 3.42506C3.62513 3.78339 2.8418 4.91672 2.8418 5.93339V12.1251C2.8418 13.1084 3.4918 14.4001 4.28346 14.9917L7.8668 17.6667C9.0418 18.5501 10.9751 18.5501 12.1501 17.6667L15.7335 14.9917C16.5251 14.4001 17.1751 13.1084 17.1751 12.1251V5.93339C17.1585 4.91672 16.3751 3.78339 15.4168 3.42506ZM9.9418 5.85839C10.9251 5.85839 11.7251 6.65839 11.7251 7.64172C11.7251 8.60839 10.9668 9.38339 10.0085 9.41672H9.9918H9.97513C9.95846 9.41672 9.9418 9.41672 9.92513 9.41672C8.92513 9.38339 8.17513 8.60839 8.17513 7.64172C8.1668 6.65839 8.9668 5.85839 9.9418 5.85839ZM11.8251 13.6334C11.3168 13.9667 10.6585 14.1417 10.0001 14.1417C9.3418 14.1417 8.67513 13.9751 8.17513 13.6334C7.70013 13.3167 7.4418 12.8834 7.43346 12.4084C7.43346 11.9417 7.70013 11.4917 8.17513 11.1751C9.18346 10.5084 10.8251 10.5084 11.8335 11.1751C12.3085 11.4917 12.5751 11.9251 12.5751 12.4001C12.5668 12.8667 12.3001 13.3167 11.8251 13.6334Z" fill="#C7C7C7" />
            </svg>
            Your BVN is encrypted and secure.
          </p>
        </div>
      </div>

      <button onClick={onNext} className="w-full bg-[#024E44] text-white py-4 px-8 rounded-xl font-bold text-lg mt-10">
        Continue
      </button>
    </div>
  );
}

function BusinessInfo({ onNext }: { onNext: () => void }) {
  return (
    <div>
      <div className="text-center mb-10">
        <h2 className="text-[#131313] md:text-2xl text-xl font-bold mb-2">Step Two : Business Information</h2>
        <p className="text-[#6C6C6C] text-base">Tell us about your business location and details.</p>
      </div>

      <div className="space-y-4">
        <div className="space-y-1">
          <label className="text-[#131313] font-bold text-sm">Business Name</label>
          <input type="text" placeholder="Onionloop" className="w-full bg-[#F7F7F7] p-4 rounded-lg outline-none text-[#363636]" />
        </div>
        <div className="space-y-1">
          <label className="text-[#131313] font-bold text-sm">Shop/Home Address</label>
          <input type="text" placeholder="e.g; 123 Main Street, Victoria Island, Lagos." className="w-full bg-[#F7F7F7] p-4 rounded-lg outline-none text-[#363636]" />
        </div>
      </div>

      <button onClick={onNext} className="w-full bg-[#024E44] text-white py-4 px-8 rounded-xl font-bold text-lg mt-12">
        Submit
      </button>
    </div>
  );
}

function SuccessState() {
  return (
    <div className="flex flex-col items-center text-center">
      <div className="mb-6 text-[#04907E]">
        <SuccessBadgeIcon />
      </div>
      <h2 className="text-[#04907E] text-3xl font-bold mb-2">Documents Submitted!</h2>
      <p className="text-[#6C6C6C] mb-8">
        Thank you for submitting your verification documents. We've received them successfully.
      </p>

      <div className="w-full bg-[#F9FAFB] rounded-xl p-6 text-left mb-10">
        <p className="text-[#363636] font-medium mb-4 flex items-center gap-1">
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M10.0002 10.0001C12.3013 10.0001 14.1668 8.1346 14.1668 5.83341C14.1668 3.53223 12.3013 1.66675 10.0002 1.66675C7.69898 1.66675 5.8335 3.53223 5.8335 5.83341C5.8335 8.1346 7.69898 10.0001 10.0002 10.0001Z" stroke="#8A8A8A" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
            <path d="M2.8418 18.3333C2.8418 15.1083 6.05013 12.5 10.0001 12.5C10.8001 12.5 11.5751 12.6083 12.3001 12.8083" stroke="#8A8A8A" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
            <path d="M18.3332 15.0001C18.3332 15.6251 18.1582 16.2167 17.8498 16.7167C17.6748 17.0167 17.4498 17.2834 17.1915 17.5001C16.6082 18.0251 15.8415 18.3334 14.9998 18.3334C13.7832 18.3334 12.7248 17.6834 12.1498 16.7167C11.8415 16.2167 11.6665 15.6251 11.6665 15.0001C11.6665 13.9501 12.1498 13.0084 12.9165 12.4001C13.4915 11.9418 14.2165 11.6667 14.9998 11.6667C16.8415 11.6667 18.3332 13.1584 18.3332 15.0001Z" stroke="#8A8A8A" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
            <path d="M13.6997 15L14.5247 15.825L16.2997 14.1833" stroke="#8A8A8A" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
          </svg>

          What happens next?
        </p>
        <ul className="space-y-3 text-sm text-[#6C6C6C] list-disc list-inside">
          <li>Our team will review your documents within 24-48 hours.</li>
          <li>You'll receive an email notification once verified.</li>
          <li>Your account will be fully activated after approval</li>
        </ul>
      </div>

      <button className="w-full bg-[#024E44] text-white py-4 px-8 rounded-xl font-bold text-lg">
        Download app
      </button>
    </div>
  );
}

const UserIcon = () => (
  <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M44 24C44 12.98 35.02 4 24 4C12.98 4 4 12.98 4 24C4 29.8 6.5 35.02 10.46 38.68C10.46 38.7 10.46 38.7 10.44 38.72C10.64 38.92 10.88 39.08 11.08 39.26C11.2 39.36 11.3 39.46 11.42 39.54C11.78 39.84 12.18 40.12 12.56 40.4C12.7 40.5 12.82 40.58 12.96 40.68C13.34 40.94 13.74 41.18 14.16 41.4C14.3 41.48 14.46 41.58 14.6 41.66C15 41.88 15.42 42.08 15.86 42.26C16.02 42.34 16.18 42.42 16.34 42.48C16.78 42.66 17.22 42.82 17.66 42.96C17.82 43.02 17.98 43.08 18.14 43.12C18.62 43.26 19.1 43.38 19.58 43.5C19.72 43.54 19.86 43.58 20.02 43.6C20.58 43.72 21.14 43.8 21.72 43.86C21.8 43.86 21.88 43.88 21.96 43.9C22.64 43.96 23.32 44 24 44C24.68 44 25.36 43.96 26.02 43.9C26.1 43.9 26.18 43.88 26.26 43.86C26.84 43.8 27.4 43.72 27.96 43.6C28.1 43.58 28.24 43.52 28.4 43.5C28.88 43.38 29.38 43.28 29.84 43.12C30 43.06 30.16 43 30.32 42.96C30.76 42.8 31.22 42.66 31.64 42.48C31.8 42.42 31.96 42.34 32.12 42.26C32.54 42.08 32.96 41.88 33.38 41.66C33.54 41.58 33.68 41.48 33.82 41.4C34.22 41.16 34.62 40.94 35.02 40.68C35.16 40.6 35.28 40.5 35.42 40.4C35.82 40.12 36.2 39.84 36.56 39.54C36.68 39.44 36.78 39.34 36.9 39.26C37.12 39.08 37.34 38.9 37.54 38.72C37.54 38.7 37.54 38.7 37.52 38.68C41.5 35.02 44 29.8 44 24ZM33.88 33.94C28.46 30.3 19.58 30.3 14.12 33.94C13.24 34.52 12.52 35.2 11.92 35.94C8.88 32.86 7 28.64 7 24C7 14.62 14.62 7 24 7C33.38 7 41 14.62 41 24C41 28.64 39.12 32.86 36.08 35.94C35.5 35.2 34.76 34.52 33.88 33.94Z" fill="#04907E" />
    <path d="M24 13.86C19.86 13.86 16.5 17.22 16.5 21.36C16.5 25.42 19.68 28.72 23.9 28.84C23.96 28.84 24.04 28.84 24.08 28.84C24.12 28.84 24.18 28.84 24.22 28.84C24.24 28.84 24.26 28.84 24.26 28.84C28.3 28.7 31.48 25.42 31.5 21.36C31.5 17.22 28.14 13.86 24 13.86Z" fill="#04907E" />
  </svg>
)

const BusinessIcon = () => (
  <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M43.1198 21.48L40.4198 18.32C39.9198 17.72 39.4998 16.6 39.4998 15.8V12.4C39.4998 10.28 37.7598 8.53997 35.6398 8.53997H32.2398C31.4398 8.53997 30.2998 8.11997 29.6998 7.61997L26.5398 4.91997C25.1598 3.73997 22.8998 3.73997 21.5198 4.91997L18.3198 7.61997C17.7198 8.11997 16.5998 8.53997 15.7998 8.53997H12.3398C10.2198 8.53997 8.47976 10.28 8.47976 12.4V15.8C8.47976 16.58 8.07977 17.7 7.57977 18.3L4.87977 21.48C3.71977 22.88 3.71977 25.12 4.87977 26.48L7.57977 29.66C8.07977 30.24 8.47976 31.38 8.47976 32.16V35.58C8.47976 37.7 10.2198 39.44 12.3398 39.44H15.8198C16.5998 39.44 17.7398 39.86 18.3398 40.36L21.4998 43.06C22.8798 44.24 25.1398 44.24 26.5198 43.06L29.6798 40.36C30.2798 39.86 31.3998 39.44 32.1998 39.44H35.5998C37.7198 39.44 39.4598 37.7 39.4598 35.58V32.18C39.4598 31.38 39.8798 30.26 40.3798 29.66L43.0798 26.5C44.2998 25.14 44.2998 22.88 43.1198 21.48ZM22.4998 16.26C22.4998 15.44 23.1798 14.76 23.9998 14.76C24.8198 14.76 25.4998 15.44 25.4998 16.26V25.92C25.4998 26.74 24.8198 27.42 23.9998 27.42C23.1798 27.42 22.4998 26.74 22.4998 25.92V16.26ZM23.9998 33.74C22.8998 33.74 21.9998 32.84 21.9998 31.74C21.9998 30.64 22.8798 29.74 23.9998 29.74C25.0998 29.74 25.9998 30.64 25.9998 31.74C25.9998 32.84 25.1198 33.74 23.9998 33.74Z" fill="#04907E" />
  </svg>
)

const SuccessBadgeIcon = () => (
  <svg width="120" height="120" viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M107.8 53.7L101 45.8C99.6999 44.3 98.6499 41.5 98.6499 39.5V31C98.6499 25.7 94.2999 21.35 88.9999 21.35H80.4999C78.5499 21.35 75.6999 20.3 74.1999 19L66.2999 12.2C62.8499 9.25005 57.1999 9.25005 53.6999 12.2L45.8499 19.05C44.3499 20.3 41.4999 21.35 39.5499 21.35H30.8999C25.5999 21.35 21.2499 25.7 21.2499 31V39.55C21.2499 41.5 20.1999 44.3 18.9499 45.8L12.1999 53.75C9.2999 57.2 9.2999 62.8 12.1999 66.25L18.9499 74.2001C20.1999 75.7001 21.2499 78.5 21.2499 80.4501V89C21.2499 94.3 25.5999 98.65 30.8999 98.65H39.5499C41.4999 98.65 44.3499 99.7001 45.8499 101L53.7499 107.8C57.1999 110.75 62.8499 110.75 66.3499 107.8L74.2499 101C75.7499 99.7001 78.5499 98.65 80.5499 98.65H89.0499C94.3499 98.65 98.6999 94.3 98.6999 89V80.5C98.6999 78.55 99.7499 75.7001 101.05 74.2001L107.85 66.3C110.75 62.85 110.75 57.15 107.8 53.7ZM80.7999 50.55L56.6499 74.7C55.9499 75.4 54.9999 75.8 53.9999 75.8C52.9999 75.8 52.0499 75.4 51.3499 74.7L39.2499 62.6C37.7999 61.15 37.7999 58.75 39.2499 57.3C40.6999 55.85 43.0999 55.85 44.5499 57.3L53.9999 66.75L75.4999 45.25C76.9499 43.8 79.3499 43.8 80.7999 45.25C82.2499 46.7001 82.2499 49.1 80.7999 50.55Z" fill="#04907E" />
  </svg>
);