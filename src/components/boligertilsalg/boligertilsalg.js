"use client";
import classes from "./boligertilsalg.module.css";
import Article from "./article";
import Link from "next/link";
import FilterBoliger from "./filterBoliger";
import { useState, useEffect } from "react";
import Image from "next/image";
export default function Boligertilsalg({ allHomesData }) {
  const [filteredHomesData, setFilteredHomesData] = useState(allHomesData);
  useEffect(() => {
    setFilteredHomesData(allHomesData);
  }, [allHomesData]);

  function filterHomes(receivedDataFromFilteredBoliger) {
    console.log(receivedDataFromFilteredBoliger);
    setFilteredHomesData(receivedDataFromFilteredBoliger);
  }

  return (
    <>
      {/* <section
        className={classes.hero}
        style={{
          backgroundImage: `url(${allHomesData[5].images[3].url})`,
        }}
      >
        <h2 className={classes.heading}>Boliger til salg</h2>
      </section> */}

      <section className="relative h-[100px] md:h-[120px] flex justify-center items-center">
        <Image
          width={800}
          height={533}
          decoding="async"
          data-nimg={1}
          className={`w-full h-full object-cover absolute inset-0 z-0 ${classes.transparency}`}
          // src="/images/nyhedsbrevBuildingBackground.jpg"
          src={allHomesData[5].images[3].url}
          alt="main background heading"
          // style={"color: transparent"}
        />
        <div className="absolute inset-0 bg-primary bg-opacity-90"></div>
        <h2 className="relative text-white font-semibold text-3xl sm:text-5xl z-10">
          Boliger til Salg
        </h2>
      </section>

      <FilterBoliger onFilterChange={filterHomes} />

      <section className={classes.allhomes}>
        {filteredHomesData.map((article, index) => (
          <Article
            articleId={article.id}
            key={index}
            imgSrc={article.images[0].url}
            imgWidth={article.images[0].width}
            imgHeight={article.images[0].height}
            alt={article.images[0].name}
            address={article.adress1}
            postalCode={article.postalcode}
            city={article.city}
            boligType={article.type}
            ejerUdgifter={article.cost}
            energyLabel={article.energylabel}
            rooms={article.rooms}
            livingSpace={article.livingspace}
            price={article.price}
            boligId={article.id}
          />
        ))}
      </section>
    </>
  );
}
