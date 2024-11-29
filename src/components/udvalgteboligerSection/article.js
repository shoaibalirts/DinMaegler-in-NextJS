import Image from "next/image";
import classes from "./article.module.css";
export default function Article({
  imgSrc,
  imgWidth,
  imgHeight,
  alt,
  address,
  boligType,
  postalCode,
  city,
  ejerUdgifter,
  energyLabel,
  rooms,
  livingSpace,
  price,
  boligId,
}) {
  console.log(boligId);

  let backgroundColor = "green";
  if (energyLabel === "A") {
    backgroundColor = "red";
  } else if (energyLabel === "B") {
    backgroundColor = "yellow";
  } else if (energyLabel === "C") {
    backgroundColor = "orange";
  } else if (energyLabel === "D") {
    backgroundColor = "blue";
  }
  const myStyle = {
    backgroundColor: backgroundColor,
  };
  return (
    <article className={classes.article}>
      <Image
        className={classes.image}
        src={imgSrc}
        width={375}
        height={500}
        alt={alt}
        priority
      />
      <h3 className={classes.address}>{address}</h3>
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
      </div>
    </article>
  );
}
