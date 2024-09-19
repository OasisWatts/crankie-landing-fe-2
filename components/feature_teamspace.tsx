import gif3_tmp from '@/img/gif3.jpg'
import Image from "next/image"

export default function FeatureTeamSpace({ data }: { data: any }) {
    return (
        <div className="w-full h-screen bg-[#2881DD] flex flex-col md:flex-row justify-center items-center p-4">
            <div className="left flex-1 h-full flex flex-col mr-10 items-start justify-center md:items-end text-white mb-10 md:mb-0" style={{ flexBasis: "40%" }}>
                <div className="title text-left">
                    <p className="text-3xl font-extrabold">캐스팅뿐만 아니라,</p>
                    <p className="text-3xl font-extrabold">프리프로덕션 과정에서</p>
                    <p className="text-3xl font-extrabold">고민 많으시죠?</p>
                </div>
            </div>
            <div className="right flex-1 flex flex-col items-center md:items-start justify-center" style={{ flexBasis: "60%" }}>
                <div className="w-full bg-gray-200 rounded-lg overflow-hidden">
                    <Image unoptimized src={gif3_tmp} alt="Feature Image" width={708} height={604} />
                </div>
            </div>
        </div>
    )
}
