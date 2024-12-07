"use client";
import Image from "next/image";
import classes from "./article.module.css";
import Link from "next/link";
import { useLogin } from "@/store/login-context";

export default function Article({
  articleId,
  index,
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
  const { isLoggedIn, logout } = useLogin();

  // console.log(boligId);
  function handleFavorite(e) {
    console.log("clicked favorite");
  }
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
  let random = Math.floor(Math.random() * 10 + 1);
  // console.log(random);

  return (
    <article className={classes.article}>
      <Link
        href={`/boligdetails/${articleId}`}
        key={`articleboligertilsalg-${random}`}
      >
        <div className={classes.homeimageandheartContainer}>
          <Image
            className={classes.image}
            src={imgSrc}
            width={800}
            height={500}
            alt={alt}
            priority
          />
          {/* if user is logged in. How to check? using current user api */}
          {isLoggedIn && (
            <button
              onClick={(e) => {
                if (e.target.closest("button")) {
                  e.preventDefault();
                  handleFavorite();
                }
              }}
              className={classes.btnPadding}
            >
              <Image
                className={classes.heart}
                src="/images/heart.svg"
                width={20}
                height={20}
                alt={alt}
                priority
              />
            </button>
          )}
        </div>
        <div className={classes.div2}>
          <h3 className={classes.address}>{address}</h3>
          <div className={classes.postalcodecontainer}>
            <p>{postalCode}</p>
            <p>{city}</p>
          </div>
          <div className={classes.boligtypecontainer}>
            <p className={classes.boligtype}>{boligType}.</p>
            <p className={classes.ejerudgifter}>
              Ejerudgifter: {ejerUdgifter}kr.
            </p>
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
        </div>
      </Link>
    </article>
  );
}
