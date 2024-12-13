"use client";
import Image from "next/image";
import classes from "./article.module.css";
import Link from "next/link";
import { useLogin } from "@/store/login-context";
import { HandleMyFavorite } from "../utils/handlefavorite";
import { useState } from "react";
import HeartIcon from "./hearticon";

export default function Article({
  articleId,
  imgSrc,
  alt,
  address,
  postalCode,
  city,
  boligType,
  ejerUdgifter,
  energyLabel,
  rooms,
  livingSpace,
  price,
  boligId,
}) {
  const { isLoggedIn } = useLogin();
  const [isFavorite, setIsFavorite] = useState(false);

  async function handleFavoriteClick(boligId) {
    setIsFavorite((prev) => !prev); // Toggle the state
    await HandleMyFavorite(boligId);
  }

  const backgroundColor =
    {
      A: "red",
      B: "yellow",
      C: "orange",
      D: "blue",
    }[energyLabel] || "green";

  return (
    <article className={classes.article}>
      <Link href={`/boligdetails/${articleId}`}>
        <div className={classes.homeimageandheartContainer}>
          <Image
            className={classes.image}
            src={imgSrc}
            width={800}
            height={500}
            alt={alt}
            priority
          />
          {isLoggedIn && (
            <button
              onClick={(e) => {
                e.preventDefault();
                handleFavoriteClick(boligId);
              }}
              className={classes.btnPadding}
            >
              <div
                className={`${classes.heart} ${
                  isFavorite ? classes.fillHeartColor : ""
                }`}
              >
                <HeartIcon />
              </div>
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
            <p style={{ backgroundColor }} className={classes.energylabel}>
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
