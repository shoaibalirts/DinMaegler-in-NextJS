import Image from "next/image";
import classes from "./nyhedsbrevSection.module.css";
export default function NyhedsBrevSection() {
  return (
    <section
    //   className={classes.section}
      style={{
        backgroundImage: `url(images/nyhedsbrevBuildingBackground.jpg)`,
      }}
    >
      <div className={classes.imgOverlay}>
        <h2 className={classes.heading}>
          Tilmeld dig vores nyhedsbrev og hold dig opdateret på boligmarkedet
        </h2>
        <form className={classes.form}>
          <input type="email" placeholder="Indtast din email adresse" />
          <Image
            src="/images/left.svg"
            width={20}
            height={20}
            alt="left arrow"
            priority
          />
        </form>
      </div>
    </section>
  );
}
