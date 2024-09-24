import img_tmp from '@/img/check-img.svg';
import problem_img from '@/img/first_page_Image.png'
import Image from "next/image";

/** J */
export default function Section3({ data }: { data: { title1: string, title2: string, paragraph1: string, paragraph2: string } }) {
    return (
        <div id="problem" className="bg-[#F6F9F0] text-center w-full flex flex-col lg:flex-row items-center justify-center px-10 py-20">
            {/* 텍스트 섹션 */}
            <div className="flex-1 w-full flex flex-col p-4 sm:p-6 lg:p-8 mt-8 md:mt-10 max-lg:mb-5" style={{ flexBasis: '40%' }}>
                <div className="text-xl md:text-3xl font-extrabold text-[#042F35]  text-left flex-1 flex flex-col w-full items-center justify-centerlg:items-start">
                    <h1>
                        새로운 영상 촬영을 앞둔
                    </h1>
                    <h1>
                        크랭이는 고민이 많습니다
                    </h1>
                </div>
            </div>

            {/* 이미지 섹션 */}
            <div className="flex-1 w-full flex flex-col items-center mb-10 justify-center p-4 sm:p-6 lg:p-8" style={{ flexBasis: '60%' }}>
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
