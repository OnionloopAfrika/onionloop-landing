"use client";

import { useMode } from "../../context/ModeContext";
import "aos/dist/aos.css";


const icons = {
  i: (<svg width="40" height="42" viewBox="0 0 40 42" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M1.68734 25.256H14.7563L15.1391 25.6362V30.8061L16.1421 30.6714C20.576 27.2151 25.4605 24.3173 29.9331 20.9285C30.5921 20.4326 31.6533 19.9416 31.6533 19.08L16.2972 8.09517L15.1391 7.8593V13.0292L14.7563 13.4095H1.68734C4.71107 4.6245 14.1118 -0.795711 23.309 1.38007C39.6051 5.23102 43.0165 26.6567 28.4987 35.1336C18.313 41.0834 5.60753 36.0675 1.6825 25.256H1.68734Z" fill="#04907E" />
    <path d="M14.7553 14.7465V12.9405H18.1293V23.1465H16.1133V14.7465H14.7553Z" fill="#04907E" />
  </svg>
  ),
  ii: (<svg width="36" height="37" viewBox="0 0 36 37" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M0 12.5493C1.47989 6.78284 7.09155 2.08712 12.8025 0.613563C28.9721 -3.55168 42.1421 14.3471 32.9946 28.4048C24.6119 41.2935 4.6979 38.7786 0 24.3967H13.2594V29.9471L14.4215 29.7113C18.6724 26.0471 24.9694 23.1098 29.0416 19.4554C29.5481 19.0035 30.3824 18.306 29.5183 17.7559C24.6416 14.8383 20.0629 10.5551 15.226 7.69644C14.5804 7.31332 14.1136 6.84178 13.2594 6.99896V12.1662L12.8721 12.5493H0Z" fill="#04907E" />
    <path d="M14.6261 20.6859C15.5221 19.9393 16.2361 19.3186 16.7681 18.8239C17.3001 18.3199 17.7434 17.7973 18.0981 17.2559C18.4527 16.7146 18.6301 16.1826 18.6301 15.6599C18.6301 15.1839 18.5181 14.8106 18.2941 14.5399C18.0701 14.2693 17.7247 14.1339 17.2581 14.1339C16.7914 14.1339 16.4321 14.2926 16.1801 14.6099C15.9281 14.9179 15.7974 15.3426 15.7881 15.8839H13.8841C13.9214 14.7639 14.2527 13.9146 14.8781 13.3359C15.5127 12.7573 16.3154 12.4679 17.2861 12.4679C18.3501 12.4679 19.1667 12.7526 19.7361 13.3219C20.3054 13.8819 20.5901 14.6239 20.5901 15.5479C20.5901 16.2759 20.3941 16.9713 20.0021 17.6339C19.6101 18.2966 19.1621 18.8753 18.6581 19.3699C18.1541 19.8553 17.4961 20.4433 16.6841 21.1339H20.8141V22.7579H13.8981V21.3019L14.6261 20.6859Z" fill="#04907E" />
  </svg>
  ),
  iii: (
    <svg width="36" height="37" viewBox="0 0 36 37" fill="none" xmlns="http://www.w3.org/2000/svg">
      <g clip-path="url(#clip0_2776_28600)">
        <path d="M0.000305176 12.544C1.48003 6.77818 7.09106 2.08298 12.8014 0.609588C28.9691 -3.55519 42.1377 14.3416 32.9912 28.3977C24.6094 41.2849 4.69768 38.7704 0.000305176 24.3901H13.2582V29.9398L14.4202 29.7041C18.6707 26.0403 24.9669 23.1033 29.0387 19.4493C29.5451 18.9975 30.3793 18.3001 29.5153 17.75C24.6392 14.8327 20.061 10.5501 15.2246 7.69168C14.5791 7.3086 14.1123 6.83711 13.2582 6.99427V12.161L12.8709 12.544H0.000305176Z" fill="#04907E" />
        <path d="M13.867 15.3765C13.9137 14.4432 14.2404 13.7245 14.847 13.2205C15.463 12.7072 16.2704 12.4505 17.269 12.4505C17.9504 12.4505 18.5337 12.5719 19.019 12.8145C19.5044 13.0479 19.8684 13.3699 20.111 13.7805C20.363 14.1819 20.489 14.6392 20.489 15.1525C20.489 15.7405 20.335 16.2399 20.027 16.6505C19.7284 17.0519 19.369 17.3225 18.949 17.4625V17.5185C19.4904 17.6865 19.9104 17.9852 20.209 18.4145C20.517 18.8439 20.671 19.3945 20.671 20.0665C20.671 20.6265 20.5404 21.1259 20.279 21.5645C20.027 22.0032 19.649 22.3485 19.145 22.6005C18.6504 22.8432 18.053 22.9645 17.353 22.9645C16.2984 22.9645 15.4397 22.6985 14.777 22.1665C14.1144 21.6345 13.7644 20.8505 13.727 19.8145H15.631C15.6497 20.2719 15.8037 20.6405 16.093 20.9205C16.3917 21.1912 16.7977 21.3265 17.311 21.3265C17.787 21.3265 18.151 21.1959 18.403 20.9345C18.6644 20.6639 18.795 20.3185 18.795 19.8985C18.795 19.3385 18.6177 18.9372 18.263 18.6945C17.9084 18.4519 17.3577 18.3305 16.611 18.3305H16.205V16.7205H16.611C17.9364 16.7205 18.599 16.2772 18.599 15.3905C18.599 14.9892 18.4777 14.6765 18.235 14.4525C18.0017 14.2285 17.661 14.1165 17.213 14.1165C16.7744 14.1165 16.4337 14.2379 16.191 14.4805C15.9577 14.7139 15.8224 15.0125 15.785 15.3765H13.867Z" fill="#04907E" />
      </g>
      <defs>
        <clipPath id="clip0_2776_28600">
          <rect width="36" height="36.766" fill="white" />
        </clipPath>
      </defs>
    </svg>
  ),
  iv: (
    <svg width="36" height="37" viewBox="0 0 36 37" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M0 12.5484C1.47989 6.78234 7.09155 2.08696 12.8025 0.613518C28.9721 -3.55142 42.1421 14.346 32.9946 28.4027C24.6119 41.2904 4.6979 38.7757 0 24.3949H13.2594V29.9449L14.4215 29.7091C18.6724 26.0452 24.9694 23.1081 29.0416 19.454C29.5481 19.0021 30.3824 18.3047 29.5183 17.7546C24.6416 14.8372 20.0629 10.5544 15.226 7.69587C14.5804 7.31278 14.1136 6.84127 13.2594 6.99844V12.1653L12.8721 12.5484H0Z" fill="#04907E" />
      <path d="M12.8175 21.1546V19.6146L17.3955 13.0626H19.6775V19.4466H20.9095V21.1546H19.6775V23.1426H17.7175V21.1546H12.8175ZM17.8435 15.1626L14.9735 19.4466H17.8435V15.1626Z" fill="#04907E" />
    </svg>
  )
}

const personalSteps = [
  {
    id: 1,
    title: "Create Your Account",
    description: "Enter your name, email, and phone number to sign up.",
    image: "/personal-step-1.png",
    icons: icons.i,
  },
  {
    id: 2,
    title: "Verify Your Identity",
    description: "Confirm your personal details to enjoy more benefits",
    image: "/personal-step-2.png",
    icons: icons.ii,
  },
  {
    id: 3,
    title: "Add Money To Your Wallet",
    description: "Add money to your Onionloop wallet from your bank account or receive money from other users",
    image: "/personal-step-3.png",
    icons: icons.iii,
  },
  {
    id: 4,
    title: "Scan & Pay",
    description: "Scan a QR code, confirm the receiver details, and send money",
    image: "/personal-step-4.png",
    icons: icons.iv,
  },
];

const businessSteps = [
  {
    id: 1,
    title: "Create Your Account",
    description: "Enter your necessary details such as name, email, and phone number to sign up.",
    image: "/business-step-1.png",
    icons: icons.i,
  },
  {
    id: 2,
    title: "Access Dashboard",
    description: "Submit your business documents to verify your account and start accepting payments.",
    image: "/business-step-2.png",
    icons: icons.ii,
  },
  {
    id: 3,
    title: "Manage Business",
    description: "Track inventory, add team members, assign roles, and manage payment flow for your business account.",
    image: "/business-step-3.png",
    icons: icons.iii,
  },
  {
    id: 4,
    title: "Withdraw Money",
    description: "View all transactions, track payments, check balances, and manage withdrawals",
    image: "/business-step-4.png",
    icons: icons.iv,
  },
];

export default function Steps() {
  const { mode } = useMode();
  const steps = mode === "personal" ? personalSteps : businessSteps;

  return (
    <section className="py-16 px-4 md:px-8 overflow-hidden">
      <div
        className="max-w-7xl mx-auto border-[3px] border-[#CCEA6F] rounded-[40px] p-8 md:p-16 bg-white"
        data-aos="fade-up"
      >
        <div className="hidden md:flex items-center justify-between">
          {steps.map((step, index) => (
            <div key={step.id} className="flex flex-1 items-center">
              {/* Step Content */}
              <div className="flex flex-col items-center text-center gap-2">
                <div className="mb-12 h-112.5 flex items-center justify-center">
                  <img
                    src={step.image}
                    alt={step.title}
                    className="max-h-full w-auto drop-shadow-2xl"
                  />
                </div>

                <div className="mb-4 flex items-center justify-center">
                  {step.icons}
                </div>

                <h3 className="text-[#008561] text-base font-bold mb-3">{step.title}</h3>
                <p className="text-[#475467] text-sm max-w-50">
                  {step.description}
                </p>
              </div>

              {/* Connecting Line - Only show between steps */}
              {index < steps.length - 1 && (
                <div className="flex-1 flex items-center justify-center px-4 mt-20">
                  <div className="w-10 h-0.5 bg-[#008561] relative">
                    <div className="absolute right-0 top-1/2 -translate-y-1/2 w-2.5 h-2.5 rounded-full bg-[#008561]" />
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
        {/* Mobile Layout (Vertical) */}
        <div className="md:hidden flex flex-col items-center gap-16">
          {steps.map((step, index) => (
            <div key={step.id} className="flex flex-col items-center text-center w-full">
              <div className="mb-8 h-87.5">
                <img src={step.image} alt={step.title} className="h-full w-auto" />
              </div>

              <div className="flex flex-col items-center">
                <div className="mb-4 flex items-center justify-center">
                  {step.icons}
                </div>

                {index < steps.length - 1 && (
                  <div className="h-10 w-0.5 bg-[#008561] mb-4 relative">
                    <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-2 h-2 rounded-full bg-[#008561]" />
                  </div>
                )}

                <h3 className="text-[#008561] text-lg font-bold mb-2">{step.title}</h3>
                <p className="text-[#475467] text-sm leading-relaxed px-4">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

