/** minwoo */ 
'use client';
import React from 'react';
import Image from "next/image";
import box1Image from "@/img/gif1.jpg"; // Replace with actual path
import box2Image from "@/img/gif1.jpg"; // Replace with actual path
import box3Image from "@/img/gif1.jpg"; // Replace with actual path
import firstGif from "@/img/gif1.jpg"; // Replace with actual path

export default function Section2() {
    return (
      <div className="w-full min-h-screen flex flex-col items-center justify-center bg-white">
        <div className="mb-8 text-center">
          <h1 className="text-5xl sm:text-5xl md:text-5xl font-bold text-black-100">
            최신 기술을 활용한 <br />
            새로운 제작 과정을 경험하세요.
          </h1>
        </div>
        <div className="w-[80%] max-w-4xl flex items-center justify-center">
          <div className="flex flex-col justify-between h-[300px] md:h-[500px] mr-8">
            <div className="h-[160px] w-[160px] bg-[#e7e9d9] rounded-lg flex items-center justify-center">
              <Image
                src={box1Image}
                alt="박스 1 이미지"
                width={160}
                height={160}
                className="w-full h-full rounded-lg object-cover"
              />
            </div>
            <div className="h-[160px] w-[160px] bg-[#e7e9d9] rounded-lg flex items-center justify-center">
              <Image
                src={box2Image}
                alt="박스 2 이미지"
                width={160}
                height={160}
                className="w-full h-full rounded-lg object-cover"
              />
            </div>
            <div className="h-[160px] w-[160px] bg-[#e7e9d9] rounded-lg flex items-center justify-center">
              <Image
                src={box3Image}
                alt="박스 3 이미지"
                width={160}
                height={160}
                className="w-full h-full rounded-lg object-cover"
              />
            </div>
          </div>
          <div className="w-[80%] max-w-4xl h-[300px] md:h-[500px] bg-[#e7e9d9] rounded-lg flex items-center justify-center">
            <Image
              src={firstGif}
              alt="크랭이 GIF"
              width={500} 
              height={500}
              className="w-full h-full rounded-lg object-cover"
            />
          </div>
        </div>
      </div>
    );
}
