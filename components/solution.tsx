import img_tmp from '@/img/crankie-logo2.svg';
import Image from "next/image";

export default function Solution({ data }: { data: { title1: string, title2: string, explanation1: string, explanation2: string } }) {

    return (
        <div className="bg-[#2881DD] w-full min-h-screen flex flex-col md:flex-row justify-center items-center p-10">
            <div className="left flex-1 flex flex-col justify-center items-center text-center mb-8 md:mb-0 md:pr-4" style={{ flexBasis: "50%" }}>
                <div className="title mb-10">
                    <h1 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white">
                        정리, 이제
                    </h1>
                    <h1 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white">
                        {data.title2}.
                    </h1>
                </div>
                <div className="content">
                    <h1 className="text-sm sm:text-base lg:text-lg font-bold text-[#A5CDF7]">
                        {data.explanation1}
                    </h1>
                    <h1 className="text-sm sm:text-base lg:text-lg font-bold text-[#A5CDF7] mt-2">
                        {data.explanation2}
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
