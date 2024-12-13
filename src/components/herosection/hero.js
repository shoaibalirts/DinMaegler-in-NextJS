"use client";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import classes from "./hero.module.css";
export default function Hero({
  heroData,
  allHomesData,
  allAgents,
  allEjerlejlighed,
  allVilla,
  allLandejendom,
  allByhus,
}) {
  const [filteredHomes, setFilteredHomes] = useState([]);
  // console.log("Data from API...........");

  console.log("All Homes: ", allHomesData);
  // console.log("All Agents: ", allAgents);
  // console.log("allEjerlejlighed: ", allEjerlejlighed);
  // console.log("allVilla: ", allVilla);
  // console.log("allLandejendom: ", allLandejendom);
  // console.log("allByhus: ", allByhus);
  // console.log("-------------------------");

  const [errors, setErrors] = useState({
    q: "",
  });
  function handleSearch(event) {
    event.preventDefault();
    const fd = new FormData(event.target);
    const data = Object.fromEntries(fd.entries());
    const { q } = data;
    console.log(q);

    const newErrors = {
      q: "",
    };
    if (q.trim() === "") {
      newErrors.q = "Please insert something related to homes.";
      setErrors(newErrors);
      return;
    }
    // else if (q.trim() === "") {
    //   newErrors.q = "Your query does not match with homes related things.";
    // }

    if (Object.values(newErrors).every((msg) => msg === "")) {
      console.log("Your searched: ");
      console.log("Query: ", q);

      event.target.reset();
      setErrors({
        q: "",
      });
    }
    const homes = allHomesData.filter((home) => {
      return Object.values(home).some((value) =>
        String(value).toLowerCase().includes(q.toLowerCase())
      );
    });
    console.log("Filtered Homes: ", filteredHomes);

    setFilteredHomes(homes);
    if (filteredHomes.length === 0) {
      setErrors({ q: "" });
    }
  }

  let randomFunc = () => Math.floor(Math.random() * 100000 + 1);

  return (
    <>
      <section
        className={classes.hero}
        style={{
          backgroundImage: `url(${heroData.image})`,
        }}
      >
        <h2 className={classes.heading}>{heroData.heading}</h2>
        <article className={classes.article}>
          <h3 className={classes.articleheading}>
            <span className={classes.underline}>Søg</span> blandt
            {heroData.numberOfHomesOnSale} boliger til salg i
            {heroData.numberOfButikker} butikker
          </h3>
          <search>
            <form className={classes.form} onSubmit={handleSearch}>
              <label htmlFor="search">
                Hvad skal din næste bolig indeholde
              </label>
              <div className={classes.inputandsearchbtn}>
                <input
                  className={classes.forminput}
                  id="search"
                  type="search"
                  name="q"
                  placeholder="Søg på fx. glaskeramisk komfur, bryggers, kælder eller lignende"
                />
                <button className={classes.searchBtn}>Søg</button>
              </div>
              <div className={classes.errorcontrol}>
                {errors.q && <p>{errors.q}</p>}
              </div>
            </form>
          </search>
        </article>
      </section>
      <div className={classes.searchSection}>
        {filteredHomes.length > 0 ? (
          filteredHomes.map((home) => (
            <Link
              href={`boligdetails/${home.id}`}
              key={`SearchFiltered-${randomFunc()}`}
            >
              <article className={classes.searcharticle}>
                <div className={classes.searchdiv}>
                  <Image
                    src={home.images[0].url}
                    width={300}
                    height={300}
                    alt={home.images[0].name}
                    priority
                  />
                </div>
                <div className={classes.searchdiv}>
                  <p>{home.adress1}</p>
                  <div className={classes.searchpostalcodeandcity}>
                    <p>{home.postalcode}</p>
                    <p>{home.city}</p>
                  </div>
                  <div>
                    <p>{home.type}.</p>
                    <p>Ejerudgift: {home.cost} Kr.</p>
                  </div>
                </div>
                <div className={classes.searchdiv}>
                  <div className={classes.searchpostalcodeandcity}>
                    <p>{home.energylabel}</p>
                    <p>{home.rooms} værelser.</p>
                    <p>{home.floorplan.size} m²</p>
                  </div>
                </div>
                <div className={classes.searchdiv}>
                  <p>{home.price} Kr.</p>
                </div>
              </article>
            </Link>
          ))
        ) : (
          <div>{filteredHomes.length === 0 && <p>{errors.q}</p>}</div>
        )}
      </div>
    </>
  );
}
