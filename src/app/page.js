import Image from "next/image";
import Link from "next/link";
import Header from "@/components/header/header";
import Footer from "@/components/footer/footer";
import HomePage from "@/components/homepage/home";
import Hero from "@/components/herosection/hero";
import {
  getAllAgents,
  getAllHomes,
  getNumberOfHomesOnSale,
} from "@/lib/apidinmaegler";
import Introduction from "@/components/introductionSection/introduction";
import ThreeArticlesSection from "@/components/threearticlesSection/ThreearticlesSection";
import UdvalgteBoligerSection from "@/components/udvalgteboligerSection/udvalgteboligerSection";
import Article from "@/components/udvalgteboligerSection/article";
import AgentArticle from "@/components/agentsSection/article";
import classes from "./page.module.css";
import NyhedsBrevSection from "@/components/nyhedsbrevSection/nyhedsbrevSection";
import AgentsSection from "@/components/agentsSection/agentsSection";
import OpdateringSection from "@/components/opdateringSection/opdateringSection";
export default async function Home() {
  const allHomesData = await getAllHomes();
  const allAgents = await getAllAgents();

  const numberOfHomesOnSale = await getNumberOfHomesOnSale();
  // console.log("allHomesData", allHomesData);
  //console.log("allHomesData", numberOfHomesOnSale);
  console.log(allAgents);

  const heroDataObj = {
    image: allHomesData[5].images[3].url,
    heading: "Søg efter din drømmebolig",
    numberOfHomesOnSale: numberOfHomesOnSale,
    numberOfButikker: 74,
  };
  const limitedArticles = allHomesData.slice(0, 4);
  const limitedAgents = allAgents.slice(0, 3);
  const heading = "Udvalgte Boliger";
  const text =
    "There are many variations of passages of Lorem Ipsum available but the this in majority have suffered alteration in some";
  return (
    <>
      <Header></Header>
      <main>
        <Hero heroData={heroDataObj} />
        <Introduction />
        <ThreeArticlesSection />
        <UdvalgteBoligerSection heading={heading} text={text}>
          {limitedArticles.map((article, index) => (
            <Link href={`/boligdetails/${article.id}`}>
              <Article
                key={`udvalgtearticle-${index}`}
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
                boligId={article.id}
              />
            </Link>
          ))}
          <Link href="/boligertilsalg" className={classes.link}>
            See alle boliger
          </Link>
        </UdvalgteBoligerSection>
        {/* <NyhedsBrevSection /> */}
        <AgentsSection>
          {limitedAgents.map((article, index) => (
            <Link href={`/maegler/${article.id}`}>
              <AgentArticle
                key={`agents-${index}`}
                imgSrc={article.image.url}
                imgWidth={article.image.width}
                imgHeight={article.image.height}
                alt={article.image.name}
                name={article.name}
                title={article.title}
                id={article.id}
              />
            </Link>
          ))}
          <Link href="/maegler" className={`${classes.link} ${classes.margin}`}>
            Se alle mæglere
          </Link>
        </AgentsSection>
        <OpdateringSection />
      </main>

      <Footer>Footer section Should be completed at the end of project</Footer>
    </>
  );
}
