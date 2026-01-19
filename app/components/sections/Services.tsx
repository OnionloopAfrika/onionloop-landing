import { Star } from "../icons/svgs";

export default function Services() {
  return (
        <div className='w-full min-h-[85dvh] max-w-7xl mx-auto'>
            <header className="w-full flex flex-col items-center justify-center">
                <div className="bg-[#CCEA6F80] text-(--primary) flex items-center justify-center gap-2 px-4 py-2 rounded-full mt-10 mb-6 font-medium">
                    <Star /> Built To Work Your Way
                </div>
                <h1 className="text-4xl max-w-180 font-bold text-center mb-10 px-4">
                    Whether you work alone, with staff, or across multiple locations, Onionloop adapts to your setup.
                </h1>
            </header>
            
        </div>
  );
}
