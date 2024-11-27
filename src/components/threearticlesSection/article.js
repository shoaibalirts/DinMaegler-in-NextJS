import Image from "next/image";
import classes from "./article.module.css";
// this article is inside threearticlessection
export default function Article({ imgSrc, heading, text }) {
  return (
    <article className={classes.article}>
      <div className={classes.div}>
        <Image src={imgSrc} width="42" height="42" alt={text} priority />
        <h3 className={classes.articleheading}>{heading}</h3>
      </div>
      <p className={classes.text}>{text}</p>
    </article>
  );
}
