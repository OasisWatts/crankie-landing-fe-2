import Section5 from "@/components/section5";
import Section1 from "@/components/section1";
import Section3 from "@/components/section3";
import Section4 from "@/components/section4";
import jsonData from "@/app/data/data.json";
import Section6 from "@/components/section6";
import Section2 from "@/components/section2";
import Section7 from "@/components/section7";
import CrankIn from "@/components/crankin";

export const metadata = {
  title: '크랭이 - 영화, 드라마 영상 제작자를 위한 똑똑한 영상 제작 워크스페이스',
  description: '복잡한 문서 작성과 정리는 크랭이에게 맡기고 당신의 창의성을 펼치세요!'
}

export default function Home() {

  return (
    <div>
      <Section1 />
      {/* <Section2 /> */}
      <Section3 />
      <Section4 />
      <Section5 />
      <Section6 />
      <CrankIn />
      <Section7 />
    </div>
  )
}
