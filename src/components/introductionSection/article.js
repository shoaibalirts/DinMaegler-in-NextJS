import classes from "./article.module.css";
import Image from "next/image";
// article inside introduction
export default function Article({ imgSrc, heading, text }) {
  return (
    <article className={classes.article}>
      <div className={classes.image}>
        <Image src={imgSrc} width="20" height="20" alt={text} priority />
      </div>
      <div>
        <h3 className={classes.heading}>{heading}</h3>
        <p>{text}</p>
      </div>
    </article>
  );
}
