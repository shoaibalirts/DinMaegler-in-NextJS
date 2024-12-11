import classes from "./boligdetails.module.css";
import { HandleMyFavorite } from "../utils/handlefavorite";
import Image from "next/image";
import { useState } from "react";

export default function Navigation({
  isModal,
  isGallery,
  isFloor,
  isMap,
  isFavorite,
  boligData,
}) {
  function showModal(e) {
    console.log(e);
    isModal(true);
  }

  return (
    <ul className={classes.galleryfloormapfavorite}>
      <li>
        <button
          onClick={(e) => {
            isGallery(true);
            isFloor(false);
            isMap(false);
            isFavorite(false);
            showModal(e);
          }}
        >
          <Image
            className={classes.gallery}
            src="/images/gallery.svg"
            width={15}
            height={15}
            layout="fixed"
            alt="gallery icon"
            priority
            value="gallery"
          />
        </button>
      </li>
      <li>
        <button
          onClick={(e) => {
            isFloor(true);
            isGallery(false);
            isMap(false);
            isFavorite(false);
            showModal(e);
          }}
        >
          <Image
            className={classes.floor}
            src="/images/floor.svg"
            width={15}
            height={15}
            layout="fixed"
            alt="floor icon"
            priority
          />
        </button>
      </li>
      <li>
        <button
          onClick={(e) => {
            isMap(true);
            isGallery(false);
            isFloor(false);
            isFavorite(false);
            showModal(e);
          }}
        >
          <Image
            className={classes.map}
            src="/images/map.svg"
            width={15}
            height={15}
            layout="fixed"
            alt="map icon"
            priority
          />
        </button>
      </li>
      <li>
        <button
          onClick={(e) => {
            isFavorite(true);
            isMap(false);
            isGallery(false);
            isFloor(false);
            showModal(e);
          }}
        >
          <Image
            className={classes.favorite}
            src="/images/favorite.svg"
            width={15}
            height={15}
            layout="fixed"
            alt="favorite icon"
            priority
          />
        </button>
      </li>
    </ul>
  );
}
