/** minwoo */
'use client';
import React, { useState, useEffect } from 'react';
import Image from "next/image";

// 박스 아이콘 경로
import box1Icon from '@/img/AI-scence-break.png';
import box2Icon from '@/img/AI-location-icon.png';
import box3Icon from '@/img/castin-short-icon.png';

// 큰 박스에 들어갈 아이콘 경로
import firstIcon from '@/img/preparation_img1.svg';
import secondIcon from '@/img/preparation_img2.svg';
import thirdIcon from '@/img/preparation_img3.svg';

export default function Section2() {
  const [currentBox, setCurrentBox] = useState(1); // 현재 선택된 박스
  const [progress, setProgress] = useState(0); // 진행 애니메이션 상태
  const totalBoxes = 3; // 총 박스 수
  const intervalDuration = 3000; // 각 박스가 활성화되는 시간 (3초)

  // 박스 클릭 시 큰 박스의 아이콘 변경
  const handleBoxClick = (boxNumber: number) => {
    setCurrentBox(boxNumber);
    setProgress(0); // 진행 상태 초기화
  };

  // 3초마다 자동으로 박스 순환 및 시간 애니메이션
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentBox((prevBox) => {
        const nextBox = (prevBox % totalBoxes) + 1;
        return nextBox;
      });
      setProgress(0); // 애니메이션을 다시 시작
    }, intervalDuration);

    return () => clearInterval(interval);
  }, []);

  // 진행 애니메이션을 3초마다 부드럽게 진행
  useEffect(() => {
    const progressInterval = setInterval(() => {
      setProgress((prevProgress) => Math.min(prevProgress + (100 / (intervalDuration / 16.7)), 100)); // 60fps로 애니메이션
    }, 16.7);

    return () => clearInterval(progressInterval);
  }, [currentBox]);

  // 현재 박스에 따라 큰 박스에 표시할 아이콘 변경
  const getCurrentBoxIcon = () => {
    switch (currentBox) {
      case 1:
        return firstIcon;
      case 2:
        return secondIcon;
      case 3:
        return thirdIcon;
      default:
        return firstIcon;
    }
  };

  // 대기 시간을 배경색과 동일하게 처리 (흰색 배경에 초록색 선)
  const getProgressBackground = (boxNumber: number) => {
    return currentBox === boxNumber ? `linear-gradient(to bottom, #286D35 ${progress}%, white ${progress}%)` : 'white';
  };

  return (
    <div className="w-full min-h-screen flex flex-col items-center justify-center bg-white p-4 whitespace-nowrap">
      <div className="mb-10 text-center">
        <h1 className="text-4xl sm:text-4xl md:text-4xl font-bold text-black-100">
          최신 기술을 활용한 <br />
          새로운 제작 과정을 경험하세요.
        </h1>
      </div>

      <div className="w-[80%] max-w-6xl flex items-center justify-center gap-x-36"> {/* 큰 박스와 작은 박스 사이의 간격을 더 넓게 조정 */}
        <div className="flex flex-col justify-between h-[600px] gap-y-20"> {/* 작은 박스 간 세로 간격 */}
          {/* 박스 1 */}
          <div
            className={`relative h-[180px] w-[180px] bg-white rounded-lg flex items-center justify-center transition-transform duration-300 ease-in-out hover:scale-105 cursor-pointer ${
              currentBox === 1 ? '' : 'filter grayscale' /* 비활성화 시 회색 처리 */
            }`}
            onClick={() => handleBoxClick(1)}
          >
            {/* 세로로 내려오는 시간 애니메이션 */}
            <div className="absolute left-[-10px] top-0 w-2 h-[180px] rounded-md" style={{
              background: getProgressBackground(1),
              transition: 'background 0.1s linear'
            }}></div>
            <Image
              unoptimized
              src={box1Icon}
              alt="박스 1 아이콘"
              width={180}
              height={180}
              className="w-full h-full rounded-lg object-cover"
            />
          </div>

          {/* 박스 2 */}
          <div
            className={`relative h-[180px] w-[180px] bg-white rounded-lg flex items-center justify-center transition-transform duration-300 ease-in-out hover:scale-105 cursor-pointer ${
              currentBox === 2 ? '' : 'filter grayscale' /* 비활성화 시 회색 처리 */
            }`}
            onClick={() => handleBoxClick(2)}
          >
            {/* 세로로 내려오는 시간 애니메이션 */}
            <div className="absolute left-[-10px] top-0 w-2 h-[180px] rounded-md" style={{
              background: getProgressBackground(2),
              transition: 'background 0.1s linear'
            }}></div>
            <Image
              unoptimized
              src={box2Icon}
              alt="박스 2 아이콘"
              width={180}
              height={180}
              className="w-full h-full rounded-lg object-cover"
            />
          </div>

          {/* 박스 3 */}
          <div
            className={`relative h-[180px] w-[180px] bg-white rounded-lg flex items-center justify-center transition-transform duration-300 ease-in-out hover:scale-105 cursor-pointer ${
              currentBox === 3 ? '' : 'filter grayscale' /* 비활성화 시 회색 처리 */
            }`}
            onClick={() => handleBoxClick(3)}
          >
            {/* 세로로 내려오는 시간 애니메이션 */}
            <div className="absolute left-[-10px] top-0 w-2 h-[180px] rounded-md" style={{
              background: getProgressBackground(3),
              transition: 'background 0.1s linear'
            }}></div>
            <Image
              unoptimized
              src={box3Icon}
              alt="박스 3 아이콘"
              width={180}
              height={180}
              className="w-full h-full rounded-lg object-cover"
            />
          </div>
        </div>

        {/* 큰 박스 크기 증가 */}
        <div className="w-[800px] h-[600px] border border-[#e7e9d9] bg-[#f4f5f0] rounded-lg flex items-center justify-center transition-transform duration-300 ease-in-out">
          <Image
            unoptimized
            src={getCurrentBoxIcon()}
            alt="큰 박스 아이콘"
            width={600}
            height={600}
            className="w-full h-full rounded-lg object-cover"
          />
        </div>
      </div>
    </div>
  );
}
