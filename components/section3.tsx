import img_tmp from '@/img/check-img.svg';
import problem_img from '@/img/first_page_Image.png'
import Image from "next/image";

/** J */
export default function Section3({ data }: { data: { title1: string, title2: string, paragraph1: string, paragraph2: string } }) {
    return (
        <div id="problem" className="bg-[#F6F9F0] text-center w-full min-h-screen flex flex-col md:flex-row items-center justify-center p-4">
            {/* 텍스트 섹션 */}
            <div className="top flex-1 w-full flex flex-col p-4 sm:p-6 lg:p-8 mt-10" style={{ flexBasis: '40%' }}>
                <div className="mid flex-1 flex flex-col w-full items-start justify-center mt-10">
                    <h1 className="text-[#042F35] text-xl sm:text-3xl lg:text-4xl font-extrabold text-left">
                        새로운 영상 촬영을 앞둔
                    </h1>
                    <h1 className="text-[#042F35] text-xl sm:text-3xl lg:text-4xl font-extrabold text-left">
                        크랭이는 고민이 많습니다
                    </h1>
                </div>
            </div>

            {/* 이미지 섹션 */}
            <div className="bot flex-1 w-full flex flex-col items-center mb-10 justify-center p-4 sm:p-6 lg:p-8" style={{ flexBasis: '60%' }}>
                <div className="w-full max-w-[1000px]">
                    <Image
                        unoptimized
                        src={problem_img}
                        alt="problem pic"
                        layout="responsive"
                        width={1000}
                        height={500}
                        className="rounded-xl"
                    />
                </div>
            </div>
        </div>
    );
}
