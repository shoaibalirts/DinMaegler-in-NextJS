"use client";
import Image from "next/image";
import classes from "./article.module.css";
import Link from "next/link";
import { useLogin } from "@/store/login-context";
import { getFavorites, getCurrentUser } from "@/lib/apidinmaegler";
import { useState } from "react";
import HeartIcon from "./hearticon";
import { HandleMyFavorite } from "../utils/handlefavorite";

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
  const [toggleColor, setToggleColor] = useState(true);
  // let heartIconclasses = {
  //   color: "white",
  // };

  // console.log(boligId);
  async function handleFavorite(boligId) {
    await HandleMyFavorite(boligId);
  }
  /*
  async function handleFavorite(homeId) {

    const myHomesObject = await getCurrentUser();
    const { homes } = { homes: myHomesObject.homes };
    const existsSpecificHomeId = homes.indexOf(homeId);

    if (existsSpecificHomeId === -1) {

      homes.push(homeId);
      await getFavorites(homes);
    } else {
      heartIconclasses = { color: "red" };
      const filteredArray = homes.filter((id) => id !== homeId);
      await getFavorites(filteredArray);
    }
  }
  */
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
          {isLoggedIn && (
            <button
              onClick={(e) => {
                if (e.target.closest("button")) {
                  e.preventDefault();
                  handleFavorite(boligId);
                }
              }}
              className={classes.btnPadding}
            >
              {/* <Image
                className={classes.heart}
                src="/images/heart.svg"
                width={20}
                height={20}
                alt={alt}
                priority
              /> */}
              <div className={classes.heart}>
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
