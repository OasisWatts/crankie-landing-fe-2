'use client'

import img_tmp from "@/img/front-logo.svg";
import Image from "next/image";

/** J */
export default function Section1({ data }: { data: { title1: string, title2: string } }) {
    const handleScroll = () => {
        const nextSection = document.getElementById("problem"); // 스크롤할 섹션 타겟
        if (nextSection) {
            nextSection.scrollIntoView({ behavior: "smooth" });
        }
    };

    return (
        <div
            id="section1"  // id 추가
            className="front text-center w-full h-screen flex flex-col items-center justify-center bg-[#2881DD] p-10 whitespace-nowrap"
        >
            <div
                className="top flex flex-col w-full items-center justify-center mt-5"
                style={{ flexBasis: '50%' }}
            >
                <h1 className="text-xl sm:text-3xl md:text-4xl font-extrabold text-white">
                    {data.title1}
                </h1>
                <h1 className="text-3xl sm:text-5xl md:text-6xl font-extrabold text-white">
                    {data.title2}
                </h1>
                <h1 className="text-base sm:text-3xl font-extrabold text-[#A5CDF7]">
                    빠른 프리프로덕션 - 크랭이123123
                </h1>
            </div>
            <div
                className="bot flex flex-col items-center justify-start mt-8 mb-10 bg-white rounded-sm">
                <Image
                    unoptimized
                    src={img_tmp}
                    alt="front logo"
                    width={150}
                    height={150}
                    className="rounded-xl md:w-[200px] md:h-[200px] lg:w-[250px] lg:h-[250px]"
                />
            </div>
        </div>
    )
}
