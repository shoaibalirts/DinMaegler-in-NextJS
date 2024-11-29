import Image from "next/image";
import classes from "./article.module.css";
export default function AgentArticle({
  imgSrc,
  imgWidth,
  imgHeight,
  alt,
  name,
  title,
  id,
}) {
  return (
    <article className={classes.article}>
      <div className={classes.imagecontainer}>
        <Image
          className={classes.image}
          src={imgSrc}
          width={800}
          height={300}
          alt={alt}
          priority
        />
      </div>
      <h3 className={classes.name}>{name}</h3>
      <p className={classes.title}>{title}</p>
      <div className={classes.emaillinkedincontainer}>
        <Image
          src="/images/email.svg"
          className={classes.emaillinkedin}
          width={15}
          height={15}
          priority
          alt="email icon"
        />
        <Image
          src="/images/linkedin.svg"
          className={classes.emaillinkedin}
          width={15}
          height={15}
          priority
          alt="linkedin icon"
        />
      </div>
    </article>
  );
}
{
  /* <h3 className={classes.address}>{address}</h3>
      <div className={classes.postalcodecontainer}>
        <p>{postalCode}</p>
        <p>{city}</p>
      </div>
      <div className={classes.boligtypecontainer}>
        <p className={classes.boligtype}>{boligType}.</p>
        <p className={classes.ejerudgifter}>Ejerudgifter: {ejerUdgifter}kr.</p>
      </div>
      <hr />
      <div className={classes.energylabelcontainer}>
        <p style={myStyle} className={classes.energylabel}>
          {energyLabel}
        </p>
        <p className={classes.rooms}>{rooms} værelser.</p>
        <p className={classes.area}>{livingSpace}m²</p>
        <p className={classes.price}>Kr. {price}</p>
      </div> */
}
