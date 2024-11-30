import Header from "@/components/header/header";
import Footer from "@/components/footer/footer";
import { getHomeDetail } from "@/lib/apidinmaegler";
export default async function BoligDetailsPage({ params }) {
  const { id } = await params;  
  const boligDetail = await getHomeDetail(id);
  console.log("BoligDetail: ", boligDetail);
  return (
    <>
      <Header></Header>
      <main>Bolig details as per bolig id. needs to fetch data fro api...</main>
      <Footer></Footer>
    </>
  );
}
