"use client";
import { IoMdClose } from "react-icons/io";

import Image from "next/image";
import classes from "./boligdetails.module.css";
import LeftArrow from "../leftarrow";
import RightArrow from "../rightarrow";
import { useState } from "react";

import Navigation from "./navigation";
export default function BoligDetails({ boligData }) {
  const [showModal, setShowModal] = useState(false);
  const [gallery, setGallery] = useState(false);
  const [floor, setFloor] = useState(false);
  const [map, setMap] = useState(false);
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
  function handleCloseModal() {
    console.log("clicked");
    setShowModal(false);
  }
  console.log(boligData);
  function handlePreviousImage(e) {
    console.log(e.target.value);
  }

  function handleNextImage() {}
  return (
    <>
      {boligData !== undefined ? (
        <section className={classes.parent}>
          <div
            className={classes.hero}
            style={{
              backgroundImage: `url(${boligData.images[3].url})`,
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
            />
            <p className={classes.price}>Kr. {boligData.price}</p>
          </section>
          <hr className={classes.hr} />
          {showModal && (
            <section className={classes.modal}>
              <button onClick={handleCloseModal} className={classes.closemodal}>
                <IoMdClose />
              </button>

              {/* it is a gallery <Image
                className={classes.overlayimage}
                src="/images/floorplan.jpg"
                width={500}
                height={500}
                priority
                alt="floor plan image"
              /> */}
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
              <Navigation
                isModal={isModal}
                isGallery={isGallery}
                isFloor={isFloor}
                isMap={isMap}
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
