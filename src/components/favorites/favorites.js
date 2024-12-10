"use client";
import Image from "next/image";
import classes from "./favorites.module.css";
import { getCurrentUser, getHomeDetail } from "@/lib/apidinmaegler";
import { useEffect, useState } from "react";

export default function Favorites() {
  const [userFavorites, setUserFavorites] = useState(null);
  const [changeUserFavorites, setChangeUserFavorites] = useState();
  useEffect(() => {
    async function getAllMyFavorites() {
      let x;
      const homesIdsArray = await getCurrentUser();
      console.log("homesIdsArray: ", homesIdsArray);
      const homesData = homesIdsArray.homes.map((homeId) =>
        getHomeDetail(homeId)
      );
      console.log(homesData); // [promise, promise, promise]
      const homesDataArray = await Promise.all(homesData);
      console.log("homesdataArray: ", homesDataArray);

      setUserFavorites(homesDataArray);
    }
    getAllMyFavorites();
    // console.log("Current User Data: ", userData);
  }, []);

  let random = Math.floor(Math.random() * 1000 + 1);
  function handleChangeFavorite(boligId) {
    // step-1: to get all the favorites homes

    // step-2: using filter remove one of the item
    // step-3: new filtered array should be PUT (edit to api)
    // step-4: update UI using the below updating function
    setChangeUserFavorites();
  }
  return (
    <>
      <section className={classes.search}></section>
      <section className={classes.favoritesArticles}>
        {userFavorites !== null
          ? userFavorites.map((home) => (
              <article key={`favorites-${random}`}>
                <Image
                  src={home.images[0].url}
                  width={300}
                  height={300}
                  alt={home.images[0].name}
                  priority
                />

                <p>{home.adress1}</p>
                <div>
                  <p>{home.postalcode}</p>
                  <p>{home.city}</p>
                </div>
                <button onChange={() => handleChangeFavorite(home.id)}></button>
              </article>
            ))
          : ""}
        ;
      </section>
      <section className="relative h-[100px] md:h-[120px] flex justify-center items-center">
        <Image
          width={800}
          height={533}
          decoding="async"
          data-nimg={1}
          className={`w-full h-full object-cover absolute inset-0 z-0 ${classes.transparency}`}
          src="/images/nyhedsbrevBuildingBackground.jpg"
          alt="main background heading"
          // style={"color: transparent"}
        />
        <div className="absolute inset-0 bg-primary bg-opacity-90"></div>
        <h2 className="relative text-white font-semibold text-3xl sm:text-5xl z-10">
          Mine favorit boliger
        </h2>
      </section>
    </>
  );
}
