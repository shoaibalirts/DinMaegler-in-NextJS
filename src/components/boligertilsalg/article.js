"use client";
import Image from "next/image";
import classes from "./article.module.css";
import Link from "next/link";
import { useLogin } from "@/store/login-context";
import { getFavorites, getCurrentUser } from "@/lib/apidinmaegler";
import { useState } from "react";

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
  async function handleFavorite(homeId) {
    console.log(homeId);

    console.log("clicked favorite");
    // my homes object as response from the current user api endpoint
    const myHomesObject = await getCurrentUser();
    // object destructuring
    const { id, homes } = { id: myHomesObject.id, homes: myHomesObject.homes };
    // user id
    // console.log("User Id: ", id);
    // homes array
    // console.log("Homes Array for this user id from API: ", homes);

    const existsSpecificHomeId = homes.indexOf(homeId);
    // console.log(existsSpecificHomeId);

    if (existsSpecificHomeId === -1) {
      console
        .log
        // "does not exist this home id so adding it into to the homes array"
        ();

      homes.push(homeId);
      const myFavorites = await getFavorites(homes);
      console.log(myFavorites);
    } else {
      console.log("Exist this home id so removing it from homes array");
      const filteredArray = homes.filter((id) => id !== homeId);
      console.log("filtered Array: ", filteredArray);
      const myFavorites1 = await getFavorites(filteredArray);
      console.log("myFavorite homes from API:", myFavorites1);
    }
    // hearticon state true/false
    //to remove homeid from homes
    // console.log("homes after updates", homes);
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
