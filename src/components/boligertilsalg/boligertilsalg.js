"use client";
import classes from "./boligertilsalg.module.css";
import Article from "./article";
import Link from "next/link";
import FilterBoliger from "./filterBoliger";
import { useState, useEffect } from "react";
export default function Boligertilsalg({ allHomesData }) {
  const [filteredHomesData, setFilteredHomesData] = useState(allHomesData);
  useEffect(() => {
    setFilteredHomesData(allHomesData);
  }, [allHomesData]);
  // Function to filter homes based on selected filters
  const filterHomes = (filters) => {
    const { ejendomsData, prisInterval } = filters;

    let filteredData = allHomesData;

    // Apply the filters to the homes data
    if (ejendomsData) {
      filteredData = filteredData.filter((home) => home.type === ejendomsData);
    }

    if (prisInterval !== undefined) {
      filteredData = filteredData.filter(
        (home) => home.price >= prisInterval[0] && home.price <= prisInterval[1]
      );
    }

    setFilteredHomesData(filteredData);
  };
  return (
    <>
      <section
        className={classes.hero}
        style={{
          backgroundImage: `url(${allHomesData[5].images[3].url})`,
        }}
      >
        <h2 className={classes.heading}>Boliger til salg</h2>
      </section>
      
      {/* Pass filter function to the FilterBoliger */}
      <FilterBoliger onFilterChange={filterHomes} />

      {/* <FilterBoliger /> */}
      <section className={classes.allhomes}>
        {filteredHomesData.map((article, index) => (
          <Link
            href={`/boligdetails/${article.id}`}
            key={`articleboligertilsalg-${index}`}
          >
            <Article
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
          </Link>
        ))}
      </section>
    </>
  );
}
