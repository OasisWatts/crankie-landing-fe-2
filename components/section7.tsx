'use client'

import { useState } from 'react';
import beta_colored from '@/img/beta_btn_colored.svg';
import beta from '@/img/beta_btn_uncolored.svg';
import insta_colored from '@/img/insta_btn_colored.svg';
import insta from '@/img/insta_btn_uncolored.svg';
import img1 from '@/img/section7_img1.png';
import Image from 'next/image';

export default function Waitlist() {

  // 이미지 상태 관리 (기본: beta, insta)
  const [betaImage, setBetaImage] = useState(beta);
  const [instaImage, setInstaImage] = useState(insta);

  // 이미지 클릭 시 이동할 URL로 네이버 페이지를 지정
  const handleRegisterClick = () => {
    window.open('https://naver.me/5vc24GYO', '_blank');
  };

  // 인스타그램 아이콘 클릭 시 새로운 탭에서 인스타그램 페이지를 열기
  const handleInstagramClick = () => {
    window.open('https://www.instagram.com/crankie._/', '_blank');
  };

  return (
    <div className="bg-[#F6F9F0] text-center w-full h-screen flex flex-col items-center justify-center p-4">
      <div className="text-[#A9B291] top w-full flex-1 flex flex-col items-center mb-10 justify-end sm:ml-10">
        <h1 className="text-lg sm:text-2xl font-normal">크랭이는 영상 제작자의 편의를 위해</h1>
        <h1 className="text-lg sm:text-2xl font-normal">최선을 다하겠습니다</h1>
      </div>
      <div className="img w-full flex-1 flex flex-row items-center justify-center">
        <div className="img1">
          <Image
            unoptimized
            src={img1}
            alt="img1"
            width={700} // 기본 너비 설정
            height={250} // 기본 높이 설정
          />
        </div>
      </div>
      {/* 상단 텍스트 부분 */}
      <div className="text-[#2B6C36] top w-full flex-1 flex flex-col items-center justify-end sm:ml-10">
        <h1 className="text-xl sm:text-3xl font-extrabold">지금 신청하시고</h1>
        <h1 className="text-xl sm:text-3xl font-extrabold">크랭이의 빠른 소식과 무료 서비스 혜택을 받으세요</h1>
      </div>

      {/* 하단 이미지 및 인스타그램 아이콘 부분 */}
      <div className="bot w-full flex-1 flex flex-col sm:flex-row items-center justify-center">
        <Image
          unoptimized
          src={betaImage} // 상태로 관리되는 beta 이미지
          alt="waitlist image"
          width={240}
          height={70}
          className="rounded-sm mb-4 sm:mb-0 sm:mr-5"
          onClick={handleRegisterClick}
          onMouseEnter={() => setBetaImage(beta_colored)} // 마우스 오버 시 이미지 변경
          onMouseLeave={() => setBetaImage(beta)} // 마우스가 떠날 때 원래 이미지로
          style={{ cursor: 'pointer' }}
        />
        <Image
          unoptimized
          src={instaImage} // 상태로 관리되는 insta 이미지
          alt="instagram icon"
          width={240}
          height={70}
          className="rounded-sm"
          onClick={handleInstagramClick}
          onMouseEnter={() => setInstaImage(insta_colored)} // 마우스 오버 시 이미지 변경
          onMouseLeave={() => setInstaImage(insta)} // 마우스가 떠날 때 원래 이미지로
          style={{ cursor: 'pointer' }}
        />
      </div>
    </div>
  );
}
