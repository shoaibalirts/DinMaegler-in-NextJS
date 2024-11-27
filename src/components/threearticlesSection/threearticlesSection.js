import Article from "./article";
import classes from "./threearticlesSection.module.css";
export default function ThreeArticlesSection() {
  return (
    <section className={classes.threearticlesection}>
      <Article
        imgSrc="/images/property1.svg"
        heading="Bestil et salgstjek"
        text="Med et Din Mægler Salgstjek bliver du opdateret på værdien af din bolig."
      />
      <Article
        imgSrc="/images/maps.svg"
        heading="74 butikker"
        text="Hos Din Mægler er din bolig til salg i alle vores 74 butikker, som er fordelt rundt om i Danmark."
      />
      <Article
        imgSrc="/images/customer1.svg"
        heading="Tilmeld køberkartotek"
        text="Når du er tilmeldt vores køberkartotek, bliver du kontaktet inden en ny bolig bliver annonceret."
      />
    </section>
  );
}
