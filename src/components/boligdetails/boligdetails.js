"use client";
import Image from "next/image";
import classes from "./boligdetails.module.css";
import LeftArrow from "../leftarrow";
import RightArrow from "../rightarrow";
export default function BoligDetails({ boligData }) {
  console.log(boligData);
  function handlePreviousImage(e) {
    console.log(e.target.value);
  }

  function handleNextImage() {}
  return (
    <>
      {boligData !== undefined ? (
        <section
          className={classes.gallery}
          style={{
            backgroundImage: `url(${boligData.images[3].url})`,
            backgroundSize: "cover",
            height: "400px",
          }}
        >
          <div className={classes.leftandrightarrows}>
            <button className={classes.leftarrow} onClick={handlePreviousImage}>
              <LeftArrow />
            </button>
            <button className={classes.rightarrow} onClick={handleNextImage}>
              <RightArrow />
            </button>
          </div>
        </section>
      ) : (
        <p>no data found</p>
      )}
    </>
  );
}
