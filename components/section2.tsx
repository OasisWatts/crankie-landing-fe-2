/** minwoo */
import Image from "next/image";
import firstGif from "@/img/first_gif.gif";

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

      <div className="flex justify-center">
        <Image
          src={firstGif} 
          alt="movie gif"
          width={1400} 
          height={1000} 
          className="rounded-lg"
        />
      </div>
    </div>
  );
}
