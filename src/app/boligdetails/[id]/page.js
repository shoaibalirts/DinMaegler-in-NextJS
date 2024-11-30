import Header from "@/components/header/header";
import Footer from "@/components/footer/footer";
import { getHomeDetail } from "@/lib/apidinmaegler";
import classes from "./page.module.css";
export default async function BoligDetailsPage({ params }) {
  const { id } = await params;
  const boligDetailData = await getHomeDetail(id);
  console.log("BoligDetail: ", boligDetailData);
  return (
    <>
      <Header></Header>
      <main>
        <section
          className={classes.hero}
          style={{
            backgroundImage: `url(${boligDetailData.images[0].url})`,
          }}
        ></section>
        <section
          className={classes.overlaySection}
          address={boligDetailData.adress1}
          postalcode={boligDetailData.postalcode}
          city={boligDetailData.city}
        >
          {/* client side rendering because of onClick */}
          
        </section>
        <hr />
        <section className={classes.list}></section>
        <section className={classes.beskrivelse}></section>
      </main>
      <Footer></Footer>
    </>
  );
}
