"use client";
import Image from "next/image";
import classes from "./boligdetails.module.css";
import LeftArrow from "../leftarrow";
import RightArrow from "../rightarrow";
import { useState } from "react";
import { HandleMyFavorite } from "../utils/handlefavorite";
export default function BoligDetails({ boligData }) {
  const [isModal, setIsModal] = useState(false);
  function showModal(e) {
    console.log(e);
    setIsModal(true);
  }
  function showGallery(e) {
    console.log(e);
    setIsModal(true);
  }
  function showFloorPlan(e) {
    console.log(e);
    setIsModal(true);
  }
  function showMap(e) {
    console.log(e);
    setIsModal(true);
  }
  let showFavorite = (e) => {
    console.log(e);
    HandleMyFavorite(boligData.id);
    setIsModal(true);
  };
  console.log(boligData);
  function handlePreviousImage(e) {
    console.log(e.target.value);
  }

  function handleNextImage() {}
  return (
    <>
      {boligData !== undefined ? (
        <section
          className={classes.hero}
          style={{
            backgroundImage: `url(${boligData.images[3].url})`,
          }}
        ></section>
      ) : (
        <p>Loading data...</p>
      )}

      <section className={classes.overlaySection}>
        <div className={classes.addresscontainer}>
          <p className={classes.address}>{boligData.adress1}</p>
          <div className={classes.postalcodecity}>
            <p className={classes.postalcode}>{boligData.postalcode}</p>
            <p className={classes.city}>{boligData.city}</p>
          </div>
        </div>
        <ul className={classes.galleryfloormapfavorite}>
          <li>
            <button onClick={showModal}>
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
            <button onClick={showFloorPlan}>
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
            <button onClick={showModal}>
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
                showFavorite(e);
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
        <p className={classes.price}>Kr. {boligData.price}</p>
      </section>
      <hr className={classes.hr} />
      <section className={classes.floorplan}>
        <Image
          className={classes.overlayimage}
          src="/images/floorplan.jpg"
          width={500}
          height={500}
          priority
          alt="floor plan image"
        />
      </section>
    </>
  );
}

{
  /* <div className={classes.leftandrightarrows}>
  <button className={classes.leftarrow} onClick={handlePreviousImage}>
    <LeftArrow />
  </button>
  <button className={classes.rightarrow} onClick={handleNextImage}>
    <RightArrow />
  </button>
</div> */
}
