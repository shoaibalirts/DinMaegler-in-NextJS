import Link from "next/link";
import Header from "@/components/header/header";
import Footer from "@/components/footer/footer";
import classes from "./page.module.css";
import { getAllAgents, getAllHomes } from "@/lib/apidinmaegler";
import AgentsSection from "@/components/agentsSection/agentsSection";
import AgentArticle from "@/components/agentsSection/article";

export default async function MaeglerPage() {
  const allAgents = await getAllAgents();
  const allHomes = await getAllHomes();
  
  return (
    <>
      <Header></Header>
      <main>
        <section
          className={classes.hero}
          style={{
            backgroundImage: `url(${allHomes[5].images[3].url})`,
          }}
        >
          <h2 className={classes.heading}>Medarbejdere i Roskilde</h2>
        </section>
        <AgentsSection>
          {allAgents.map((article, index) => (
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
        </AgentsSection>
      </main>
      <Footer></Footer>
    </>
  );
}
