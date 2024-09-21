'use client';
import React, { useEffect, useState } from 'react';
import Image from "next/image";
import crankieImage from "@/img/gif1.jpg";

const BarHeader: React.FC = () => {
  const [isBar, setIsBar] = useState(false);

  const data = {
    menus: ["사전예약", "문의하기"],
    sections: ["section1", "section2"], 
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsBar(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div
      id="bar-header"
      className={`w-full p-4 flex items-center justify-center h-[65px] transition-colors duration-300 ${
        isBar
          ? 'fixed top-0 left-0 right-0 bg-white shadow-md z-[100]'
          : 'bg-[#2881DD] text-white'
      }`}
    >
      <div className="absolute left-4 h-8 w-auto">
        <Image
          unoptimized
          src={crankieImage}
          alt="Crankie Image"
          width={50} 
          height={50}
          className="rounded-lg"
        />
      </div>

      <nav className="flex space-x-20">
        {data.menus.map((menu, index) => (
          <a
            key={index}
            href={`#${data.sections[index]}`}
            className={`text-sm sm:text-base lg:text-lg font-bold transition-colors duration-300 ${
              isBar ? 'text-[#2881DD]' : 'text-white'
            }`}
            onClick={(e) => {
              e.preventDefault();
              const target = document.getElementById(data.sections[index]);
              if (target) {
                const yOffset = -65; 
                const yPosition =
                  target.getBoundingClientRect().top +
                  window.pageYOffset +
                  yOffset;
                window.scrollTo({ top: yPosition, behavior: 'smooth' });
              }
            }}
          >
            {menu}
          </a>
        ))}
      </nav>
    </div>
  );
};

export default BarHeader;
