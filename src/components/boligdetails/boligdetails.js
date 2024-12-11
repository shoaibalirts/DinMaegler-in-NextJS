"use client";
import { IoMdClose } from "react-icons/io";
import { FaLessThan } from "react-icons/fa6";
import { PiGreaterThan } from "react-icons/pi";

import Image from "next/image";
import classes from "./boligdetails.module.css";
import LeftArrow from "../leftarrow";
import RightArrow from "../rightarrow";
import { useState } from "react";
import { HandleMyFavorite } from "../utils/handlefavorite";
import Navigation from "./navigation";
export default function BoligDetails({ boligData }) {
  const [showModal, setShowModal] = useState(false);
  const [gallery, setGallery] = useState(false);
  const [floor, setFloor] = useState(false);
  const [map, setMap] = useState(false);
  const [favorite, setFavorite] = useState(false);
  const [srcIndex, setSrcIndex] = useState(0);
  function isModal() {
    setShowModal(true);
  }
  function isGallery(receivedBoolean) {
    setGallery(receivedBoolean);
  }
  function isFloor(receivedBoolean) {
    setFloor(receivedBoolean);
  }
  function isMap(receivedBoolean) {
    setMap(receivedBoolean);
  }
  function isFavorite(receivedBoolean) {
    HandleMyFavorite(boligData.id);
    setFavorite(receivedBoolean);
  }
  function handleCloseModal() {
    console.log("clicked");
    setShowModal(false);
  }
  console.log(boligData);
  const handleBack = (prevSrcIndex) => {
    console.log("clicked back");
    if (prevSrcIndex === 0) {
      setSrcIndex(3);
    } else {
      prevSrcIndex--;
      setSrcIndex(prevSrcIndex);
    }
  };

  const handleForward = (prevSrcIndex) => {
    console.log("clicked forward");
    if (prevSrcIndex === 3) {
      setSrcIndex(0);
    } else {
      prevSrcIndex++;
      setSrcIndex(prevSrcIndex);
    }
  };
  return (
    <>
      {boligData !== undefined ? (
        <section className={classes.parent}>
          <div
            className={classes.hero}
            style={{
              backgroundImage: `url(${boligData.images[0].url})`,
            }}
          ></div>
          <section className={classes.navigation}>
            <div className={classes.addresscontainer}>
              <p className={classes.address}>{boligData.adress1}</p>
              <div className={classes.postalcodecity}>
                <p className={classes.postalcode}>{boligData.postalcode}</p>
                <p className={classes.city}>{boligData.city}</p>
              </div>
            </div>
            <Navigation
              isModal={isModal}
              isGallery={isGallery}
              isFloor={isFloor}
              isMap={isMap}
              isFavorite={isFavorite}
              boligData={boligData}
            />
            <p className={classes.price}>Kr. {boligData.price}</p>
          </section>
          <hr className={classes.hr} />
          {showModal && (
            <section className={classes.modal}>
              <button onClick={handleCloseModal} className={classes.closemodal}>
                <IoMdClose />
              </button>

              {isModal && gallery && (
                <section className={classes.slider}>
                  <div onClick={(e) => handleBack(srcIndex)}>
                    <FaLessThan />
                  </div>
                  <Image
                    className={classes.overlayimage}
                    src={boligData.images[srcIndex].url}
                    width={400}
                    height={400}
                    priority
                    alt={`bolig image sliding show ${boligData.images[srcIndex].name}`}
                  />
                  <div>
                    <PiGreaterThan onClick={(e) => handleForward(srcIndex)} />
                  </div>
                </section>
              )}
              {isModal && floor && (
                <Image
                  className={classes.overlayimage}
                  src="/images/floorplan.jpg"
                  width={500}
                  height={500}
                  priority
                  alt="floor plan image"
                />
              )}
              {isModal && map && (
                <Image
                  className={classes.overlayimage}
                  src="/images/map.jpg"
                  width={500}
                  height={500}
                  priority
                  alt="location of the house"
                />
              )}
              {isModal && favorite && (
                <div className={classes.overlayimage}>
                  <p>Din Favorite er tilføjet</p>
                </div>
              )}
              <Navigation
                isModal={isModal}
                isGallery={isGallery}
                isFloor={isFloor}
                isMap={isMap}
                isFavorite={isFavorite}
                boligData={boligData}
              />
            </section>
          )}
        </section>
      ) : (
        <p>Loading data...</p>
      )}

      
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
