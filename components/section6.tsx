
'use client';
import React, { useState, useEffect } from 'react';
import Image from 'next/image';

// 작은 박스 아이콘 경로
import box1Icon from '@/img/AI-scence-break.png';
import box2Icon from '@/img/AI-location-icon.png';
import box3Icon from '@/img/castin-short-icon.png';

export default function Section2() {
  const [currentBox, setCurrentBox] = useState<number>(1);
  const totalBoxes = 3;

  // 박스 클릭 핸들러
  const handleBoxClick = (boxNumber: number) => {
    setCurrentBox(boxNumber);
    console.log(`Box ${boxNumber} clicked. Current Box: ${boxNumber}`);
  };

  // 동영상이 끝났을 때 다음 박스로 전환
  const handleVideoEnded = () => {
    setCurrentBox((prevBox) => {
      const nextBox = (prevBox % totalBoxes) + 1;
      console.log(`Video ended. Switching to Box ${nextBox}`);
      return nextBox;
    });
  };

  // 현재 박스가 변경될 때마다 콘솔 로그
  useEffect(() => {
    console.log(`Current Box is now: ${currentBox}`);
  }, [currentBox]);

  // 작은 박스 아이콘에 적용될 Tailwind CSS 클래스
  const getBoxIconClass = (boxNumber: number) => {
    return currentBox === boxNumber ? 'grayscale-0' : 'grayscale';
  };

  // 큰 박스에 표시될 콘텐츠 렌더링 함수
  const renderContent = () => {
    let videoSrc = '';

    if (currentBox === 1) {
      videoSrc = '/video/scence_breakdown_video.mp4'; // 첫 번째 동영상 경로
    } else if (currentBox === 2) {
      videoSrc = '/video/location_video.mp4'; // 두 번째 동영상 경로
    } else if (currentBox === 3) {
      videoSrc = '/video/casting_short_video.mp4'; // 세 번째 동영상 경로
    }

    console.log(`Rendering video source: ${videoSrc}`);

    return (
      <video
        key={currentBox} // 고유 키 추가로 동영상 소스 변경 시 리렌더링 유도
        controls
        autoPlay
        muted
        onEnded={handleVideoEnded} // 동영상 끝났을 때 호출되는 핸들러
        className="w-full h-full object-contain"
      >
        <source src={videoSrc} type="video/mp4" />
        동영상을 지원하지 않는 브라우저입니다.
      </video>
    );
  };

  return (
    <div className="w-full min-h-screen flex flex-col items-center justify-center bg-white p-4">
      {/* 헤더 섹션 */}
      <div className="mt-10 mb-3 text-center">
        <h1 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-[#5F5F5F]">
          최신 기술을 활용한 <br />
          새로운 제작 과정을 경험하세요
        </h1>
      </div>

      {/* 메인 섹션 */}
      <div className="w-full max-w-6xl flex flex-col sm:flex-row items-center justify-center gap-6 sm:gap-10 lg:gap-20">
        {/* 작은 박스들 */}
        <div className="flex sm:flex-col justify-between items-center gap-3 sm:gap-5 lg:gap-10">
          {[1, 2, 3].map((boxNumber) => (
            <div
              key={boxNumber}
              className="relative h-20 w-20 sm:h-24 sm:w-24 md:h-28 md:w-28 lg:h-[125px] lg:w-[125px] bg-white rounded-lg flex items-center justify-center transition-transform duration-300 ease-in-out hover:scale-105 cursor-pointer"
              onClick={() => handleBoxClick(boxNumber)}
            >
              {/* 작은 박스 아이콘 */}
              <div className="absolute inset-0 rounded-lg">
                <Image
                  unoptimized
                  src={boxNumber === 1 ? box1Icon : boxNumber === 2 ? box2Icon : box3Icon}
                  alt={`박스 ${boxNumber} 아이콘`}
                  width={180}
                  height={180}
                  className={`w-full h-full rounded-lg object-cover ${getBoxIconClass(boxNumber)}`}
                />
              </div>
            </div>
          ))}
        </div>

        {/* 큰 박스 */}
        <div className="w-full sm:w-[1000px] md:w-[1000px] lg:w-[1000px] h-auto sm:h-[800px] flex items-center justify-center overflow-hidden">
          {renderContent()}
        </div>
      </div>
    </div>
  );
}
