"use client";
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

