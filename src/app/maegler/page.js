import Link from "next/link";
import Header from "@/components/header/header";
import Footer from "@/components/footer/footer";

import classes from "./page.module.css";
import { getAllAgents, getAllHomes } from "@/lib/apidinmaegler";
import AgentsSection from "@/components/agentsSection/agentsSection";
import AgentArticle from "@/components/agentsSection/article";
import Image from "next/image";

export default async function MaeglerPage() {
  const allAgents = await getAllAgents();
  const allHomes = await getAllHomes();
  let random = Math.floor(Math.random() * 100 + 1);

  return (
    <>
      <Header></Header>
      <main>
        {/* <section
          className={classes.hero}
          style={{
            backgroundImage: `url(${allHomes[5].images[3].url})`,
          }}
        >
          <h2 className={classes.heading}>Medarbejdere i Roskilde</h2>
        </section> */}
        <section className="relative h-[100px] md:h-[120px] flex justify-center items-center">
          <Image
            width={800}
            height={533}
            decoding="async"
            data-nimg={1}
            className={`w-full h-full object-cover absolute inset-0 z-0 ${classes.transparency}`}
            // src="/images/nyhedsbrevBuildingBackground.jpg"
            src={allHomes[5].images[3].url}
            alt="main background heading"
            // style={"color: transparent"}
          />
          <div className="absolute inset-0 bg-primary bg-opacity-90"></div>
          <h2 className="relative text-white font-semibold text-3xl sm:text-5xl z-10">
            Medarbejdere i Roskilde
          </h2>
        </section>
        <AgentsSection>
          {allAgents.map((article, index) => (
            <Link href={`/maegler/${article.id}`} key={`agents-${index}`}>
              <AgentArticle
                
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
        </AgentsSection>
      </main>
      <Footer></Footer>
    </>
  );
}
