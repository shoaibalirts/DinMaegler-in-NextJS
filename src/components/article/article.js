import classes from "./article.module.css";
import Image from "next/image";
// article inside introduction
export default function Article({ imgSrc, heading, text }) {
  return (
    <article className={classes.article}>
      <Image src={imgSrc} width="42" height="42" alt={text} priority />
      <div>
        <h3 className={classes.heading}>{heading}</h3>
        <p>{text}</p>
      </div>
    </article>
  );
}
