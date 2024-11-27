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
  totalRooms,
  area,
  price,
}) {
  return (
    <article>
      <Image
        src={imgSrc}
        width={imgWidth}
        height={imgHeight}
        alt={alt}
        priority
      />
      <p>{address}</p>
      <p>{postalCode}</p>
      <p>{city}</p>
      <p>{boligType}</p>
      <p>Ejerudgifter: {ejerUdgifter}kr.</p>
      <hr />
      <p>{energyLabel}</p>
      <p>{totalRooms} værelser.</p>
      <p>{area}m2</p>
      <p>Kr. {price}</p>
    </article>
  );
}
