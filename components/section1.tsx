'use client';

import img_tmp from "@/img/front-logo.svg";
import Image from "next/image";
import React from "react";

const words = ["무료 베타 테스트 신청", "문의하기"];
const links = [
  "https://forms.gle/NwWQRPDDdc1z4iVo8",
  "https://www.instagram.com/crankie._/"
];

/** minwoo */
export default function Section1() {
  const handleScroll = () => {
    const nextSection = document.getElementById("problem");
    if (nextSection) {
      nextSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleClick = (link: string) => {
    window.open(link, "_blank");
  };

  return (
    <div
      id="section1"
      className="front w-full h-screen flex items-center bg-[#E6EADC] p-10 whitespace-nowrap"
    >
      <div className="top flex flex-col-reverse lg:flex-row justify-center items-start w-full mx-auto">
        <div className="flex flex-col justify-start md:mr-20 self-start">
          <h1 className="text-xl md:text-3xl font-extrabold max-md:text-center">
            영화, 드라마 영상 제작자를 위한
          </h1>
          <h1 className="text-xl md:text-3xl font-extrabold mt-2">
            초간편 영상 제작 솔루션
          </h1>

          <h1 className="text-sm md:text-base lg:text-lg text-[#A9B291] mt-8">
            복잡한 문서 작성과 정리는 크랭이에게 맡기고 <br /> 당신의 창의성을 펼치세요.
          </h1>

          <div className='flex justify-start space-x-6 mt-10'>
            <div
              className='inline-block py-4 px-8 min-w-[350px] max-w-[450px] rounded-lg text-lg md:text-xl bg-[#286D35] text-[#E6EADC] font-bold text-center cursor-pointer'
              onClick={() => handleClick(links[0])}
            >
              {words[0]}
            </div>

            <div
              className='max-md:hidden inline-block py-4 px-8 min-w-[200px] max-w-[300px] rounded-lg text-lg md:text-xl border border-[#286D35] text-[#286D35] font-bold text-center cursor-pointer'
              onClick={() => handleClick(links[1])}
            >
              {words[1]}
            </div>
          </div>
        </div>

        <div className="self-start">
          <Image
            unoptimized
            src={img_tmp}
            alt="front logo"
            width={600}
            height={600}
            className="rounded-xl max-w-[20rem]"
          />
        </div>
      </div>
    </div>
  );
}
