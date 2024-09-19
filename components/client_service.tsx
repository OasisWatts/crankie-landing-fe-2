'use client'

import btn from "@/img/client-service-btn.svg";
import Image from "next/image";
import { useRouter } from 'next/navigation'

export default function ClientService({ data }: { data: any }) {

    const handleImageClick = () => {
        window.open('https://forms.gle/2oV8GxDrtHRoyV8J7', '_blank');
    }

    return (
        <div className="bg-[#5A95F5] text-center h-screen w-full flex flex-col items-center justify-center p-5">
            {/* Top Section: Contains titles */}
            <div className="flex-1 flex flex-col w-full items-center justify-end text-white mt-10 md:mt-20">
                {/* Adjust text sizes for different screen sizes */}
                <div className="text-xl md:text-3xl lg:text-4xl font-extrabold mb-2">{data.title1_1}</div>
                <div className="text-xl md:text-3xl lg:text-4xl font-extrabold mb-2">{data.title1_2}</div>
                <div className="text-xl md:text-3xl lg:text-4xl font-extrabold mb-2">{data.title1_3}</div>
                <div className="text-xl md:text-3xl lg:text-4xl font-extrabold mt-5 md:mt-10">{data.title2}</div>
            </div>
            {/* Button Section */}
            <div className="flex-1 flex flex-col w-full items-center justify-start mt-5 md:mt-10">
                {/* Adjust padding and margins for mobile view */}
                <div className="flex flex-col items-center justify-center bg-[#5A95F5] p-2 md:p-4 rounded-lg">
                    {/* Ensure the image is responsive */}
                    <Image 
                        src={btn} 
                        alt="Feature 2 Image" 
                        width={329} 
                        height={84} 
                        className="w-full h-auto max-w-[200px] md:max-w-[250px] lg:max-w-[329px] rounded-lg" 
                        onClick={handleImageClick} 
                        style={{ cursor: "pointer" }} 
                    />
                </div>
            </div>
        </div>
    );
}
