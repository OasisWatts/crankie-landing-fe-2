import FeatureCasting from "@/components/feature_casting";
import FeatureTeamSpace from "@/components/feature_teamspace";
import Front from "@/components/front";
import Preparation from "@/components/preparation";
import Problem from "@/components/problem";
import Solution from "@/components/solution";
import Waitlist from "@/components/wailitst";
import jsonData from "@/app/data/data.json";
import ClientService from "@/components/client_service";

export const metadata = {
  title: '크랭이 - 빠른 크랭크인을 위한 프리프로덕션 협업툴',
  description: '크랭이와 함께 캐스팅에 걸리는 시간을 줄여보아요'
}

export default function Home() {

  return (
    <div>
      <Front data={jsonData.Front} />
      <Problem data={jsonData.Problem} />
      <Solution data={jsonData.Solution} />
      <FeatureCasting data={jsonData.FeatureCasting} />
      {/* <FeatureTeamSpace data={jsonData.FeatureTeamSpace} /> */}
      <Preparation data={jsonData.Preparation} />
      <ClientService data={jsonData.ClientService} />
      <Waitlist data={jsonData.Waitlist} />
    </div>
  )
}
