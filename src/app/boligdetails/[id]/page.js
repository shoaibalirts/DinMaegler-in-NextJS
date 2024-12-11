import Header from "@/components/header/header";
import Footer from "@/components/footer/footer";
import { getHomeDetail } from "@/lib/apidinmaegler";
import classes from "./page.module.css";
import GalleryFloorMap from "@/components/galleryFloorMap/galleryFloorMap";
import BoligDetails from "@/components/boligdetails/boligdetails";
import BoligFacts from "@/components/boligdetails/boligfacts";
export default async function BoligDetailsPage({ params }) {
  const { id } = await params;
  const boligDetailData = await getHomeDetail(id);
  // console.log("BoligDetail: ", boligDetailData);
  return (
    <>
      <Header></Header>
      <main>
        <BoligDetails boligData={boligDetailData} />
        <BoligFacts boligData={boligDetailData} />
        
        <section className={classes.beskrivelse}></section>
      </main>
      <Footer></Footer>
    </>
  );
}
