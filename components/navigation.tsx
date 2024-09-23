'use client';
import React, { useEffect, useState } from 'react';
import Image from "next/image";
import crankieImage from "@/img/navigationlogo.png";

const BarHeader: React.FC = () => {
  const [isBar, setIsBar] = useState(false);

  const data = {
    menus: ["사전예약", "문의하기"],
    links: [
      "https://forms.gle/NwWQRPDDdc1z4iVo8",
      "https://www.instagram.com/crankie._/",
    ],
  };

  // 스크롤 핸들러 설정
  useEffect(() => {
    const handleScroll = () => {
      setIsBar(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // 크랭이 이미지를 클릭하면 특정 섹션으로 스크롤
  const handleImageClick = () => {
    const section = document.getElementById("section1");
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  // 사전예약 및 문의하기 클릭 시 링크로 이동
  const handleClick = (link: string) => {
    window.open(link, "_blank");
  };

  return (
    <div
      id="bar-header"
      className={`w-full p-4 flex items-center h-[65px] transition-colors duration-300 ${
        isBar
          ? "fixed top-0 left-0 right-0 bg-white shadow-md z-[100]"
          : "bg-[#E6EADC] text-white"
      }`}
    >
      <div className="flex items-center ml-40">
        {/* 크랭이 이미지 */}
        <Image
          unoptimized
          src={crankieImage}
          alt="Crankie Image"
          width={40}
          height={40}
          className="rounded-lg cursor-pointer"
          onClick={handleImageClick}
        />
        {/* 사전예약/문의하기 메뉴 */}
        <nav className="flex space-x-6 ml-20"> {/* 이미지와 메뉴 사이에 margin-left를 더 넓힘 */}
          {data.menus.map((menu, index) => (
            <button
              key={index}
              className={`text-sm sm:text-base lg:text-lg font-bold transition-colors duration-300 text-[#286D35]`} // 텍스트 색상 변경
              onClick={() => handleClick(data.links[index])}
            >
              {menu}
            </button>
          ))}
        </nav>
      </div>
    </div>
  );
};

export default BarHeader;
