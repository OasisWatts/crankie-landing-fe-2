import img_tmp from '@/img/check-img.svg';
import gif1_tmp from '@/img/second_gif-min.gif';
import gif2_tmp from '@/img/first_gif.gif';
import Image, { StaticImageData } from 'next/image';

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
          시나리오 작성에서 촬영 계획 완성까지 팀원과 공유하고 함께 작업하세요
        </div>
        {/* <div className="subtitle font-bold text-sm sm:text-base lg:text-lg font-bold text-gray-400 text-center">
          크랭이는 앞으로도, 드라마/영화 제작팀에 필요한
        </div>
        <div className="subtitle font-bold text-sm sm:text-base lg:text-lg font-bold text-gray-400 text-center">
          다양한 서비스를 준비하고 있습니다.
        </div> */}
      </div>
      <div
        className="bot w-full flex-1 flex flex-col items-center justify-center p-4 mt-10"
        style={{ flexBasis: '80%' }}
      >
        {/** first block */}
        <Block isRight={true} gif={gif1_tmp}>
          <div className="text-2xl font-extrabold mb-4">
            <p> 크랭이는 클릭 한 번에</p>
            <p> 시나리오를 씬 리스트로</p>
          </div>
          <div className="font-bold text-sm sm:text-base lg:text-lg text-gray-400">
            <p>쇼츠, 릴스 형식으로</p>
            <p>손 쉽게 확인할 수 있어요.</p>
          </div>
        </Block>
        {/** second block */}
        <Block isRight={false} gif={gif2_tmp}>
          <p>스토리보드 작성</p>
          <div className='text-2xl font-extrabold'>
            <p>이미지 업로드를 통한</p>
            <p>간편한 스토리 보드 작성</p>
          </div>
          <div className="font-bold text-sm sm:text-base lg:text-lg text-gray-400">
            <p>카메라의 샷, 무브먼트, 연출적 요소</p>
            <p>그 외 필요한 다양한 정보들도 쉽게 기입할 수 있습니다.</p>
          </div>
        </Block>
        {/** third block */}
        <Block isRight={true} gif={gif1_tmp}>
          <div className="text-2xl font-extrabold mb-4">
            <p> 직관적인 컷수 확인을 통한</p>
            <p> 효율적인 촬영 계획</p>
          </div>
          <div className="font-bold text-sm sm:text-base lg:text-lg text-gray-400">
            <p>완성된 스토리 보드의 컷수와 시간 로케이션을 확인하시고</p>
            <p>쉽고 빠르게 계획을 짤 수 있습니다. </p>
          </div>
        </Block>
        {/** forth block */}
        <Block isRight={false} gif={gif2_tmp}>
          <p>협업과 공유</p>
          <div className='text-2xl font-extrabold'>
            <p>모든 작업 과정</p>
            <p>팀원과 함께 빠르고 확실하게</p>
          </div>
          <div className="font-bold text-sm sm:text-base lg:text-lg text-gray-400">
            <p>팀원을 등록하시면 모든 과정을 </p>
            <p>빠르게 팀원과 공유하고 함께할 수 있습니다.</p>
          </div>
        </Block>
      </div>
    </div>
  );
}

interface BlockInterface {
  isRight: boolean
  gif: StaticImageData
  children: React.ReactNode
}

export function Block({ isRight, gif, children }: BlockInterface) {
  return (
    <div
      className={`w-full flex flex-col ${isRight ? "md:flex-row-reverse" : "md:flex-row"} items-center justify-center mb-10`}
      style={{ flexBasis: '50%' }}
    >
      <div className={`flex-1 flex items-center justify-center ${isRight ? "md:justify-start" : "md:justify-end"} mb-6 md:mb-0`}>
        <div className="rounded">
          <Image
            src={gif}
            alt="Feature Image"
            width={713}
            height={538}
            className="w-full h-auto rounded-sm"
          />
        </div>
      </div>
      <div className={`flex-1 flex flex-col items-center ${isRight ? "md:items-end md:text-right pr-20" : "md:items-start md:text-left pl-20"} justify-center text-center`}>
        {children}
      </div>
    </div>
  )
}