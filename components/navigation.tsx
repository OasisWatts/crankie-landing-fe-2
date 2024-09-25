'use client';
import React, { useEffect, useState } from 'react';
import Image from "next/image";
import crankieImage from "@/img/navigationlogo.png";

const BarHeader: React.FC = () => {
  const [isBar, setIsBar] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false); // 모바일 메뉴 상태 추가

  const data = {
    menus: ["신청하기", "문의하기"],
    links: [
      "https://naver.me/5vc24GYO",
      "https://www.instagram.com/crankie._/"
    ]
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

  // 모바일 메뉴 토글 핸들러
  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <div
      id="bar-header"
      className={`w-full p-4 flex items-center h-[65px] transition-colors duration-300 ${isBar
          ? "fixed top-0 left-0 right-0 bg-white shadow-md z-[100]"
          : "bg-white"
        }`}
    >
      <div className="flex items-center justify-between w-full max-w-[1200px] mx-auto px-4 lg:px-0">
        {/* 크랭이 이미지 */}
        <div className="flex items-center space-x-8"> {/* 로고와 메뉴 간격 조정 */}
          <Image
            src={crankieImage}
            alt="Crankie Image"
            width={40}
            height={40}
            className="rounded-lg cursor-pointer"
            onClick={handleImageClick}
          />

          {/* 데스크탑 메뉴 */}
          <nav className="hidden lg:flex space-x-6"> {/* 화면이 lg 이상일 때만 보이게 */}
            {data.menus.map((menu, index) => (
              <button
                key={index}
                className={`text-sm sm:text-base lg:text-lg font-bold transition-colors duration-300 text-[#286D35]`}
                onClick={() => handleClick(data.links[index])}
              >
                {menu}
              </button>
            ))}
          </nav>
        </div>

        {/* 오른쪽 문구 */}
        <div className="hidden lg:block text-xs sm:text-sm lg:text-base text-[#286D35] font-bold">
          모집마감: 10월 4일까지
        </div>

        {/* 모바일 메뉴 버튼 */}
        <button
          className="lg:hidden flex flex-col space-y-1 cursor-pointer"
          onClick={toggleMobileMenu}
        >
          <span className="w-6 h-[2px] bg-[#286D35]"></span>
          <span className="w-6 h-[2px] bg-[#286D35]"></span>
          <span className="w-6 h-[2px] bg-[#286D35]"></span>
        </button>

        {/* 모바일 메뉴 */}
        {isMobileMenuOpen && (
          <div className="lg:hidden fixed top-[65px] left-0 w-full bg-white shadow-md z-[99]">
            <nav className="flex flex-col items-center space-y-4 py-4">
              {data.menus.map((menu, index) => (
                <button
                  key={index}
                  className={`text-sm font-bold transition-colors duration-300 text-[#286D35]`}
                  onClick={() => handleClick(data.links[index])}
                >
                  {menu}
                </button>
              ))}
            </nav>
          </div>
        )}
      </div>
    </div>
  );
};

export default BarHeader;
