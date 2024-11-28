import Image from "next/image";
import Article from "./article";
import classes from "./introduction.module.css";
// Introduction is a section which is available in home page
export default function Introduction() {
  return (
    <>
      <section className={classes.introduction}>
        <Image
          src="/images/introduction1.png"
          width="400"
          height="400"
          className={classes.introductioncontainer}
          alt="family with one child"
          priority
        />
        <div>
          <h2 className={classes.headerheading}>
            Vi har fulgt danskerne hjem i snart 4 årtier
          </h2>
          <article>
            <h3 className={classes.articleheading}>
              Det synes vi siger noget om os!
            </h3>
            <p className={classes.articleparagraph}>
              It is a long established fact that a reader will be distracted by
              the readable content of a page when looking at its layout. The
              point of using Lorem Ipsum is that it has normal distribution.
            </p>
            <p className={classes.articleparagraph}>
              It is a long established fact that a reader will be distracted by
              the readable content of a page when looking at its layout.
            </p>
            <section className={classes.subarticles}>
              <Article
                imgSrc="/images/house1.svg"
                heading="4829"
                text="boliger solgt"
              />
              <Article
                imgSrc="/images/house2.svg"
                heading="158"
                text="boliger til salg"
              />
            </section>
          </article>
        </div>
      </section>
      <hr className={classes.hr} />
    </>
  );
}
