"use client";
/*
import Image from "next/image";
import classes from "./galleryFloorMap.module.css";
import Link from "next/link";
import { useState } from "react";
export default function GalleryFloorMap({
  heroImage,
  address,
  postalcode,
  city,
  price,
}) {
  const [overlay, setOverlay] = useState(true);
  
  function showGallery() {
    setOverlay(false);
    
  }
  function showFloorPlan() {
    setOverlay(true);
  }
  function showMap() {
    setOverlay(true);
  }
  function showFavorite() {
    setOverlay(true);
  }

  return (
    <section>
      <Image
        className={classes.hero}
        src={heroImage}
        width={600}
        height={400}
        layout="responsive"
        alt="header image"
        priority
      />
      <section className={classes.overlaySection}>
        {overlay && (
          <div className={classes.addresscontainer}>
            <p className={classes.address}>{address}</p>
            <div className={classes.postalcodecity}>
              <p className={classes.postalcode}>{postalcode}</p>
              <p className={classes.city}>{city}</p>
            </div>
          </div>
        )}
        <div className={classes.galleryfloormapfavorite}>
          <Image
            className={classes.gallery}
            src="/images/gallery.svg"
            width={15}
            height={15}
            layout="fixed"
            alt="gallery icon"
            priority
            onClick={showGallery}
          />
          <Image
            className={classes.floor}
            src="/images/floor.svg"
            width={15}
            height={15}
            layout="fixed"
            alt="floor icon"
            priority
            onClick={showFloorPlan}
          />
          <Image
            className={classes.map}
            src="/images/map.svg"
            width={15}
            height={15}
            layout="fixed"
            alt="map icon"
            priority
            onClick={showMap}
          />
          <Image
            className={classes.favorite}
            src="/images/favorite.svg"
            width={15}
            height={15}
            layout="fixed"
            alt="favorite icon"
            priority
            onClick={showFavorite}
          />
        </div>
        {overlay && <h2 className={classes.price}>Kr. {price}</h2>}
      </section>
      {overlay && <hr className={classes.hr} />}
    </section>
  );
}
*/






import React, { useState } from "react";
import Image from "next/image";
import styles from "./galleryFloorMap.module.css";  // Import your styles

const GalleryWithSlideshow = () => {
  const [isModalOpen, setModalOpen] = useState(false);

  // Handle modal opening and closing
  const openModal = () => setModalOpen(true);
  const closeModal = () => setModalOpen(false);

  return (
    <div>
      {/* The Gallery section with icons */}
      <div className={styles.galleryfloormap}>
        <Image
          className={styles.gallery}
          src="/images/gallery.svg"
          width={15}
          height={15}
          layout="fixed"
          alt="Gallery Icon"
          priority
          onClick={openModal} // Opens modal on click
        />
        <Image
          className={styles.floor}
          src="/images/floor.svg"
          width={15}
          height={15}
          layout="fixed"
          alt="Floor Icon"
          priority
        />
        <Image
          className={styles.map}
          src="/images/map.svg"
          width={15}
          height={15}
          layout="fixed"
          alt="Map Icon"
          priority
        />
        <Image
          className={styles.favorite}
          src="/images/favorite.svg"
          width={15}
          height={15}
          layout="fixed"
          alt="Favorite Icon"
          priority
        />
      </div>

      {/* Modal / Slideshow */}
      {isModalOpen && (
        <div className={styles.modalOverlay}>
          <div className={styles.modalContent}>
            <div className={styles.slideshow}>
              {/* Add your slideshow content here */}
              <p>Slideshow content goes here...</p>
            </div>
            {/* Close Button */}
            <button className={styles.closeBtn} onClick={closeModal}>Close</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default GalleryWithSlideshow;

