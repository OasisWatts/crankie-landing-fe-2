'use client'

import img_tmp from "@/img/front-logo.svg";
import Image from "next/image";

/** J */
export default function Section1() {
    const handleScroll = () => {
        const nextSection = document.getElementById("problem"); // 스크롤할 섹션 타겟
        if (nextSection) {
            nextSection.scrollIntoView({ behavior: "smooth" });
        }
    };

    return (
        <div
            id="section1"
            className="front w-full h-screen flex items-center bg-[#E6EADC] p-4 whitespace-nowrap"  
        >
            <div className="top flex items-start w-full max-w-7xl mx-auto">  {/* items-start로 텍스트와 로고의 상단을 맞춤 */}
                <div className="flex flex-col justify-start mr-[180px] self-start">  {/* self-start로 텍스트를 로고 상단에 맞춤 */}
                    <h1 className="text-2xl sm:text-4xl md:text-5xl font-extrabold text-black"> 
                        영화, 드라마 영상 제작사를 위한
                    </h1>
                    <h1 className="text-2xl sm:text-4xl md:text-5xl font-extrabold text-black mt-2"> 
                       초간편 영상 제작 솔루션
                    </h1>
                    <h1 className="text-base sm:text-3xl font-extrabold text-[#BEC8A5] mt-2"> 
                        복잡한 문서 작성과 정리는 크랭이에게 맡기고 <br /> 당신의 창의성을 펼치세요.
                    </h1>
                </div>
                <div className="self-start">  {/* 로고 이미지도 상단에 맞춤 */}
                    <Image
                        unoptimized
                        src={img_tmp}
                        alt="front logo"
                        width={500} 
                        height={500} 
                        className="rounded-xl"
                    />
                </div>
            </div>
        </div>
    )
}
