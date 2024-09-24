'use client';

import img_tmp from "@/img/section1_img.png";
import Image from "next/image";
import React from "react";

const words = ["무료 베타 테스트 신청", "문의하기"];
const links = [
  "https://forms.gle/NwWQRPDDdc1z4iVo8",
  "https://www.instagram.com/crankie._/"
];

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
      className="front w-full h-screen flex items-center justify-center bg-[#042F35] p-10"
    >
      <div className="top flex flex-col-reverse lg:flex-row justify-center items-center lg:items-start w-full mx-auto lg:space-x-10">
        {/* 텍스트 섹션 */}
        <div className="flex flex-col justify-start items-center lg:items-start lg:mr-20">
          <h1 className="text-[#E6EADC] text-2xl md:text-4xl font-extrabold text-center lg:text-left">
            영화, 드라마 제작자를 위한
          </h1>
          <h1 className="text-[#E6EADC] text-2xl md:text-4xl font-extrabold mt-2 text-center lg:text-left">
            초간편 영상 제작 솔루션
          </h1>

          <h1 className="text-sm md:text-base lg:text-lg text-[#A9B291] mt-8 text-center lg:text-left">
            복잡한 문서 작성과 정리는 크랭이에게 맡기고 <br /> 당신의 창의성을 펼치세요.
          </h1>

          <div className="flex flex-col md:flex-row justify-center md:justify-start space-y-4 md:space-y-0 md:space-x-6 mt-10">
            <div
              className="inline-block py-4 px-8 min-w-[250px] md:min-w-[350px] max-w-[450px] rounded-lg text-lg md:text-xl bg-[#E6EADC] text-[#286D35] font-bold text-center cursor-pointer"
              onClick={() => handleClick(links[0])}
            >
              {words[0]}
            </div>

            <div
              className="inline-block py-4 px-8 min-w-[250px] md:min-w-[200px] max-w-[300px] rounded-lg text-lg md:text-xl border border-[#E6EADC] text-[#E6EADC] font-bold text-center cursor-pointer"
              onClick={() => handleClick(links[1])}
            >
              {words[1]}
            </div>
          </div>
        </div>

        {/* 이미지 섹션 */}
        <div className="self-center mt-10 lg:mt-0">
          <Image
            unoptimized
            src={img_tmp}
            alt="front logo"
            width={1000}
            height={1000}
            className="rounded-xl max-w-[25rem] md:max-w-[30rem]"
          />
        </div>
      </div>

      {/* 모바일 디자인 */}
      <style jsx>{`
        @media (max-width: 768px) {
          .top {
            flex-direction: column;
            align-items: center;
            justify-content: center;
            text-align: center;
          }

          .top div {
            margin: 0;
            width: 100%;
          }

          .top h1 {
            text-align: center;
          }

          .top div:first-child {
            order: 2;
          }

          .top div:last-child {
            order: 1;
          }

          .flex-col .inline-block {
            width: 100%;
            max-width: none;
          }

          .self-center {
            display: flex;
            justify-content: center;
          }

          .flex-col .space-y-4 {
            margin-top: 16px;
            margin-bottom: 16px;
          }
        }
      `}</style>
    </div>
  );
}
