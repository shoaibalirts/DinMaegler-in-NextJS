import Link from "next/link";
import Header from "@/components/header/header";
import Footer from "@/components/footer/footer";
import UdvalgteBoligerSection from "@/components/udvalgteboligerSection/udvalgteboligerSection";
import Article from "@/components/udvalgteboligerSection/article";
import { getAllHomes } from "@/lib/apidinmaegler";
import classes from "./page.module.css";
export default async function PropertyListPage() {
  const allHomesData = await getAllHomes();
  return (
    <>
      <Header></Header>
      <main>
        <section
          className={classes.hero}
          style={{
            backgroundImage: `url(${allHomesData[5].images[3].url})`,
          }}
        >
          <h2 className={classes.heading}>Boliger til salg</h2>
        </section>
        <UdvalgteBoligerSection>
          {allHomesData.map((article, index) => (
            <Link href={`/boligdetails/${article.id}`}>
              <Article
                key={`udvalgtearticleinboligertilsalg-${index}`}
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
        </UdvalgteBoligerSection>
        <Footer></Footer>
      </main>
    </>
  );
}
