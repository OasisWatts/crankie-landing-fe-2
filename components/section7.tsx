/** J */
'use client'

import insta_img from '@/img/insta_btn.svg'
import register_btn from '@/img/register_btn.svg'
import img1 from '@/img/section7_img1.png'
import Image from "next/image"
import { useRouter } from 'next/navigation'

export default function Waitlist() {
    const router = useRouter();

    // 이미지 클릭 시 이동할 URL로 네이버 페이지를 지정
    const handleRegisterClick = () => {
        window.open('https://forms.gle/NwWQRPDDdc1z4iVo8', '_blank');
    }

    // 인스타그램 아이콘 클릭 시 새로운 탭에서 인스타그램 페이지를 열기
    const handleInstagramClick = () => {
        window.open('https://www.instagram.com/crankie._/', '_blank');
    }

    return (
        <div className="bg-[#F6F9F0] text-center w-full h-screen flex flex-col items-center justify-center p-4">
            <div className="text-[#A9B291] top w-full flex-1 flex flex-col items-center justify-end sm:ml-10">
                <h1 className="text-xl sm:text-3xl font-bold">크랭이는 영상 제작자의 편의를 위해</h1>
                <h1 className="text-xl sm:text-3xl font-bold">최선을 다하겠습니다</h1>
            </div>
            <div className="img w-full flex-1 flex flex-row items-center justify-center">
                <div className="img1">
                    <Image
                        src={img1}
                        alt="img1"
                        width={700}  // 기본 너비 설정
                        height={250} // 기본 높이 설정
                    />
                </div>
            </div>
            {/* 상단 텍스트 부분 */}
            <div className="text-[#2B6C36] top w-full flex-1 flex flex-col items-center justify-end sm:ml-10">
                <h1 className="text-xl sm:text-3xl font-bold">지금 신청하시고</h1>
                <h1 className="text-xl sm:text-3xl font-bold">크랭이의 빠른 소식과 무료 서비스 혜택을 받으세요</h1>
            </div>

            {/* 하단 이미지 및 인스타그램 아이콘 부분 */}
            <div className="bot w-full flex-1 flex flex-col sm:flex-row items-center justify-center">
                <Image 
                    unoptimized 
                    src={register_btn} 
                    alt="waitlist image" 
                    width={240} 
                    height={70} 
                    className="rounded-sm mb-4 sm:mb-0 sm:mr-5" 
                    onClick={handleRegisterClick} 
                    style={{ cursor: "pointer" }} 
                />
                <Image 
                    unoptimized 
                    src={insta_img} 
                    alt="instagram icon" 
                    width={240} 
                    height={70} 
                    className="rounded-sm" 
                    onClick={handleInstagramClick} 
                    style={{ cursor: "pointer" }} 
                />
            </div>
        </div>
    )
}



