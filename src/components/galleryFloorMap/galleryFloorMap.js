export default function GalleryFloorMap() {
  return (
    <>
      <div>
        <p className={classes.address}>{boligDetailData.adress1}</p>
        <p className={classes.postalcode}>{boligDetailData.postalcode}</p>
        <p className={classes.city}>{boligDetailData.city}</p>
      </div>
      <div className={classes.galleryfloormap}></div>
    </>
  );
}
