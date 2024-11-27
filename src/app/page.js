import Image from "next/image";
import Header from "@/components/header/header";
import Footer from "@/components/footer/footer";
import HomePage from "@/components/homepage/home";
import Hero from "@/components/herosection/hero";
import { getAllHomes, getNumberOfHomesOnSale } from "@/lib/apidinmaegler";
import Introduction from "@/components/introductionSection/introduction";

export default async function Home() {
  const allHomesData = await getAllHomes();
  const numberOfHomesOnSale = await getNumberOfHomesOnSale();
  console.log("allHomesData", allHomesData);
  console.log("allHomesData", numberOfHomesOnSale);
  const heroDataObj = {
    image: allHomesData[5].images[3].url,
    heading: "Søg efter din drømmebolig",
    numberOfHomesOnSale: numberOfHomesOnSale,
    numberOfButikker: 74,
  };

  // console.log(heroDataObj);

  return (
    <>
      <Header></Header>
      <main>
        <Hero heroData={heroDataObj} />
        <Introduction />
      </main>

      <Footer></Footer>
    </>
  );
}
