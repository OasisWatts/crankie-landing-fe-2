import img_tmp from '@/img/crankie-logo2.svg';
import Image from "next/image";

/** J */
export default function Section4({ data }: { data: { title1: string, title2: string, explanation1: string, explanation2: string } }) {

    return (
        <div className="bg-[#2881DD] w-full min-h-screen flex flex-col md:flex-row justify-center items-center p-10">
            <div className="left flex-1 flex flex-col justify-center items-center text-center mb-8 md:mb-0 md:pr-4" style={{ flexBasis: "50%" }}>
                <div className="title mb-10">
                    <h1 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white">
                        크랭이와 함께
                    </h1>
                    <h1 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white">
                        더 효율적인 영상 제작 과정을 경험하세요.
                    </h1>
                </div>
                <div className="content">
                    <h1 className="text-sm sm:text-base lg:text-lg font-bold text-[#A5CDF7]">
                        시나리오부터 계획까지
                    </h1>
                    <h1 className="text-sm sm:text-base lg:text-lg font-bold text-[#A5CDF7] mt-2">
                        캐스팅, 로케이션의 전 과정을
                    </h1>
                </div>
                <div className="content">
                    <h1 className="text-sm sm:text-base lg:text-lg font-bold text-[#A5CDF7]">
                        더 빠르고 확실하게
                    </h1>
                    <h1 className="text-sm sm:text-base lg:text-lg font-bold text-[#A5CDF7] mt-2">
                        간편하고 효율적으로
                    </h1>
                </div>
            </div>
            <div className="right flex-1 flex justify-center items-center" style={{ flexBasis: "50%" }}>
                <div className="img rounded-xl overflow-hidden">
                    <Image unoptimized src={img_tmp} alt="Solution Image" width={622} height={473} className="w-full h-auto" />
                </div>
            </div>
        </div>
    );
}
