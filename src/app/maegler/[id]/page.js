import Header from "@/components/header/header";
import Footer from "@/components/footer/footer";
import { getAgentDetail } from "@/lib/apidinmaegler";
export default async function AgentDetailsPage({ params }) {
  const { id } = await params;
  const agentDetail = await getAgentDetail(id);
  console.log("AgentDetail: ", agentDetail);
  return (
    <>
      <Header></Header>
      <main>Agent detail as per agent id. needs to fetch data from api...</main>
      <Footer></Footer>
    </>
  );
}
