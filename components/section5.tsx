import img_tmp from '@/img/check-img.svg';
import gif1_tmp from '@/img/second_gif-min.gif';
import gif2_tmp from '@/img/first_gif.gif';
import Image, { StaticImageData } from 'next/image';

const words = ["간편하게", "확실하게", "편하게", "효율적으로"]

export default function Section5({ data }: { data: any }) {
  return (
    <>
      <Introduction />
      <Blocks />
    </>
  )
}
function Introduction() {
  return (
    <div className="w-full flex flex-col justify-center items-center bg-white p-10 whitespace-nowrap">
      <div
        className="top w-full flex flex-col items-center justify-center my-[3rem] md:my-[6rem]"
        style={{ flexBasis: '20%' }}
      >
        <p className='text-sm md:text-base lg:text-lg text-[#818D62]'>
          시나리오부터 계획까지
        </p>
        <h1 className="text-xl md:text-2xl lg:text-3xl font-bold mt-2 lg:mt-5 text-[#042F35]">
          모든 영상 제작 과정
        </h1>
        <div className='text-xl md:text-2xl lg:text-3xl font-bold mt-10 lg:mt-15'>
          <p className='inline text-[#286D35] mr-2'>Simple</p>
          <p className='inline mr-2'>하고</p>
          <p className='inline text-[#286D35] mr-2'>Creative</p>
          <p className='inline'>하게</p>
        </div>
      </div>
    </div>
  )
}
/** Leah */
function Blocks() {
  return (
    <div className="w-full min-h-screen flex flex-col justify-center items-center bg-[#F6F9F0] p-10 whitespace-nowrap">
      <div
        className="bot w-full flex-1 flex flex-col items-center justify-center p-4 mt-10"
        style={{ flexBasis: '80%' }}
      >
        {/** first block */}
        <Block
          isRight={true}
          gif={gif1_tmp}
          tag="씬 리스트"
          highlight='클릭 한 번에,'
          title="시나리오를 씬 리스트로"
          texts={["수정한 시나리오의 내용도", "빠르게 씬 리스트에 반영할 수 있습니다"]}
        />
        {/** second block */}
        <Block
          isRight={false}
          gif={gif2_tmp}
          tag="스토리보드 작성"
          highlight='이미지 업로드를 통한'
          title="간쳔한 스토리보드 작성"
          texts={["카메라의 샷, 무브먼트, 연출적 요소", "그 외 필요한 정보들도 쉽게 기입할 수 있습니다."]}
        />
        {/** third block */}
        <Block
          isRight={true}
          gif={gif1_tmp}
          tag="촬영 계획 작성"
          highlight='직관적인 컷수 확인을 통한'
          title="효율적인 촬영 계획"
          texts={["완성된 스토리 보드의 컷수와 시간 로케이션을 확인하시고", "쉽고 빠르게 계획을 짤 수 있습니다."]}
        />
        {/** forth block */}
        <Block
          isRight={false}
          gif={gif2_tmp}
          tag="협업과 공유"
          highlight='모든 작업 과정'
          title='팀원과 함께 빠르고, 확실하게'
          texts={['팀원을 등록하면 모든 과정을', '빠르게 팀원과 공유하고 함께 할 수 있습니다.']}
        />
      </div>
    </div>
  );
}

interface BlockInterface {
  isRight: boolean
  gif: StaticImageData
  tag: string
  highlight: string
  title: string
  texts: string[]
}

export function Block({ isRight, gif, tag, highlight, title, texts }: BlockInterface) {
  return (
    <div
      className={`w-full flex flex-col ${isRight ? "md:flex-row-reverse" : "md:flex-row"} items-center justify-center mb-10`}
      style={{ flexBasis: '50%' }}
    >
      <div className='w-full h-[0.1rem] bg-[#E6EADC] md:hidden mb-10'></div>
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
      <div className={`flex-1 flex flex-col items-center md:items-start md:text-left ${isRight ? "" : "md:pl-20"} justify-center text-center`}>
        <p className='text-xs sm:text-sm lg:text-md font-bold mb-3 text-[#286D35]'>{tag}</p>
        {/* <p className='text-xs sm:text-sm lg:text-md px-2 py-[0.1rem] mb-3 text-[#008415] bg-[#C8F169] rounded-xs'>{tag}</p> */}
        <div className="text-2xl md:text-xl lg:text-2xl font-bold mb-4">
          <p className='text-[#286D35]'> {highlight}</p>
          <p> {title}</p>
        </div>
        <div className="text-xs sm:text-sm lg:text-md text-[#A9B291]">
          {texts.map((item: string, index: number) => (
            <p key={index}>{item}</p>
          ))}
        </div>
      </div>
    </div>
  )
}