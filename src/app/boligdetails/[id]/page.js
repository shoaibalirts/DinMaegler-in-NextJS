import Header from "@/components/header/header";
import Footer from "@/components/footer/footer";
import { getHomeDetail } from "@/lib/apidinmaegler";
import classes from "./page.module.css";
import GalleryFloorMap from "@/components/galleryFloorMap/galleryFloorMap";
export default async function BoligDetailsPage({ params }) {
  const { id } = await params;
  const boligDetailData = await getHomeDetail(id);
  console.log("BoligDetail: ", boligDetailData);
  return (
    <>
      <Header></Header>
      <main>
        <GalleryFloorMap
          heroImage={boligDetailData.images[0].url}
          address={boligDetailData.adress1}
          postalcode={boligDetailData.postalcode}
          city={boligDetailData.city}
          price={boligDetailData.price}
        />

        <section className={classes.list}></section>
        <section className={classes.beskrivelse}></section>
      </main>
      <Footer></Footer>
    </>
  );
}
