/** minwoo */
import Image from "next/image";
import firstGif from "@/img/gif2.jpg";

export default function Section2() {
  return (
    <div
      className="w-full min-h-screen flex flex-col items-center justify-center bg-white"
    >
      <div className="mb-8 text-center">
        <h1 className="text-2xl sm:text-4xl md:text-4xl font-bold text-green-700">
          크랭이 사전 예약 중
        </h1>
      </div>

      <div className="w-[80%] max-w-4xl h-[300px] md:h-[500px] bg-[#e7e9d9] rounded-lg flex items-center justify-center">
        <Image
          src={firstGif} 
          alt="movie jpg"
          layout="responsive"
          width={700}
          height={500}
          className="rounded-lg"
        />
      </div>
    </div>
  );
}
