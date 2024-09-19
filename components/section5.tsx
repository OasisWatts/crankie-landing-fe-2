import img_tmp from '@/img/check-img.svg';
import gif1_tmp from '@/img/second_gif-min.gif';
import gif2_tmp from '@/img/first_gif.gif';
import Image from 'next/image';

/** Leah */
export default function Section5({ data }: { data: any }) {
  return (
    <div className="w-full min-h-screen flex flex-col justify-center items-center bg-white p-10 whitespace-nowrap">
      <div
        className="top w-full flex flex-col items-center justify-center p-4 mt-10 mb-10"
        style={{ flexBasis: '20%' }}
      >
        <div className="img w-[60px] h-[60px] flex items-center justify-center mt-10">
          <Image unoptimized src={img_tmp} alt="check icon" width={50} height={50} className="rounded-sm" />
        </div>
        <div className="title text-3xl md:text-4xl lg:text-5xl font-extrabold mt-5 mb-5 text-center">
          {data.title}
        </div>
        <div className="subtitle font-bold text-sm sm:text-base lg:text-lg font-bold text-gray-400 text-center">
          크랭이는 앞으로도, 드라마/영화 제작팀에 필요한
        </div>
        <div className="subtitle font-bold text-sm sm:text-base lg:text-lg font-bold text-gray-400 text-center">
          다양한 서비스를 준비하고 있습니다.
        </div>
      </div>
      <div
        className="bot w-full flex-1 flex flex-col items-center justify-center p-4 mt-10"
        style={{ flexBasis: '80%' }}
      >
        <div
          className="firstBlock w-full flex flex-col md:flex-row items-center justify-center mb-10"
          style={{ flexBasis: '50%' }}
        >
          <div className="left flex-1 flex items-center justify-center md:justify-end mb-6 md:mb-0 ml-1">
            <div className="rounded">
              <Image
                unoptimized
                src={gif1_tmp}
                alt="Feature 1 Image"
                width={600}
                height={538}
                className="w-full h-auto rounded-sm"
              />
            </div>
          </div>
          <div className="right flex-1 flex flex-col items-center md:items-start justify-center text-center md:text-left px-4">
            <div className="feature text-xl font-bold mb-4">
              <div className="flex flex-col md:flex-row md:text-left text-center">
                <h1 className="text-[#2881DD] text-2xl font-extrabold">귀찮았던&nbsp;</h1>
                <h1 className="text-2xl font-extrabold">메일 정리와</h1>
              </div>
              <h1 className="text-2xl">{data.feature1_2}</h1>
            </div>
            <div className="f1 font-bold text-sm sm:text-base lg:text-lg text-gray-400 text-center md:text-left">쇼츠, 릴스 형식으로</div>
            <div className="f1 font-bold text-sm sm:text-base lg:text-lg text-gray-400 text-center md:text-left">손 쉽게 확인할 수 있어요.</div>
          </div>
        </div>
        <div
          className="secondBlock w-full flex flex-col md:flex-row-reverse items-center justify-center mb-20"
          style={{ flexBasis: '50%' }}
        >
          <div className="left flex-1 flex items-center justify-center md:justify-start mb-6 md:mb-0">
            <div className="rounded">
              <Image
                unoptimized
                src={gif2_tmp}
                alt="Feature 2 Image"
                width={713}
                height={538}
                className="w-full h-auto rounded-sm"
              />
            </div>
          </div>
          <div className="right flex-1 flex flex-col items-center md:items-end justify-center text-center md:text-right px-4">
            <div className="feature text-xl font-bold mb-4">
              <h1 className="text-2xl font-extrabold">{data.feature2_1}</h1>
              <div className="flex flex-col md:flex-row-reverse md:text-right text-center">
                <h1 className="text-2xl font-extrabold">확인 가능</h1>
                <h1 className="text-[#2881DD] text-2xl font-extrabold">한 번에&nbsp;</h1>
              </div>
            </div>
            <div className="exp">
              <div className="f1 font-bold text-sm sm:text-base lg:text-lg text-gray-400 text-center md:text-right">모든 출연작을 한눈에,</div>
              <div className="f1 font-bold text-sm sm:text-base lg:text-lg text-gray-400 text-center md:text-right">영상을 한 번에 확인하세요.</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
