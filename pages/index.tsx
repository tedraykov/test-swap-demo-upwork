import {Layout} from "@components/common/Layout/Layout";
import {educationData, LandingView} from "@components/LandingView/LandingView";

export default function Home() {
  return (
    <Layout>
      <LandingView post={educationData}/>
    </Layout>
  )
}
