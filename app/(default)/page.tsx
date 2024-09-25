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
  title: '크랭이 - 빠른 크랭크인을 위한 프리프로덕션 협업툴',
  description: '크랭이와 함께 캐스팅에 걸리는 시간을 줄여보아요'
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
