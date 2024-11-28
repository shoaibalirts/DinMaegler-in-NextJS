import Image from "next/image";
import Link from "next/link";
import Header from "@/components/header/header";
import Footer from "@/components/footer/footer";
import HomePage from "@/components/homepage/home";
import Hero from "@/components/herosection/hero";
import { getAllHomes, getNumberOfHomesOnSale } from "@/lib/apidinmaegler";
import Introduction from "@/components/introductionSection/introduction";
import ThreeArticlesSection from "@/components/threearticlesSection/ThreearticlesSection";
import UdvalgteBoligerSection from "@/components/udvalgteboligerSection/udvalgteboligerSection";
import Article from "@/components/udvalgteboligerSection/article";
import classes from "./page.module.css";
export default async function Home() {
  const allHomesData = await getAllHomes();
  const numberOfHomesOnSale = await getNumberOfHomesOnSale();
  // console.log("allHomesData", allHomesData);
  //console.log("allHomesData", numberOfHomesOnSale);
  const heroDataObj = {
    image: allHomesData[5].images[3].url,
    heading: "Søg efter din drømmebolig",
    numberOfHomesOnSale: numberOfHomesOnSale,
    numberOfButikker: 74,
  };
const limitedArticles = allHomesData.slice(0,4);
  return (
    <>
      <Header></Header>
      <main>
        <Hero heroData={heroDataObj} />
        <Introduction />
        <ThreeArticlesSection />
        <UdvalgteBoligerSection>
          {limitedArticles.map((article, index) => (
            <Link href="/boligdetails">
              <Article
                key={`udvalgtearticle-{index}`}
                imgSrc={article.images[0].url}
                imgWidth={article.images[0].width}
                imgHeight={article.images[0].height}
                alt={article.images[0].name}
                address={article.adress1}
                postalCode={article.postalcode}
                city={article.city}
                boligType={article.type}
                ejerUdgifter={article.cost}
                energyLabel={article.energylabel}
                rooms={article.rooms}
                livingSpace={article.livingspace}
                price={article.price}
              />
            </Link>
          ))}
          <Link href="/boligertilsalg" className={classes.link}>See alle boliger</Link>

        </UdvalgteBoligerSection>
      </main>

      <Footer></Footer>
    </>
  );
}
