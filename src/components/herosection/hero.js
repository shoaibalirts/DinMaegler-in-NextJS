"use client";

import classes from "./hero.module.css";
export default function Hero({ heroData }) {
  function handleSearch() {
    console.log("click");
  }
  return (
    <section
      className={classes.hero}
      style={{
        backgroundImage: `url(${heroData.image})`,
      }}
    >
      <h2 className={classes.heading}>{heroData.heading}</h2>
      <article className={classes.article}>
        <h3 className={classes.articleheading}>
          <span className={classes.underline}>Søg</span> blandt{" "}
          {heroData.numberOfHomesOnSale} boliger til salg i{" "}
          {heroData.numberOfButikker} butikker
        </h3>
        <form className={classes.form}>
          <label htmlFor="search">Hvad skal din næste bolig indeholde</label>
          <input
            id="search"
            type="text"
            placeholder="Søg på fx. glaskeramisk komfur, bryggers, kælder eller lignende"
          />
          <button onClick={handleSearch} className={classes.searchBtn}>
            Søg
          </button>
        </form>
      </article>
      <p>{heroData.numberOfHomesOnSale}</p>
    </section>
  );
}
