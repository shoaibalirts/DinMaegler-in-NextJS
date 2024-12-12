"use client";
import Image from "next/image";
import classes from "./favorites.module.css";
import {
  getCurrentUser,
  getHomeDetail,
  getFavorites,
} from "@/lib/apidinmaegler";
import { useEffect, useRef, useState } from "react";
import { HandleMyFavorite } from "../utils/handlefavorite";
import Link from "next/link";

export default function Favorites() {
  const [userFavorites, setUserFavorites] = useState(null);
  // const [changeUserFavorites, setChangeUserFavorites] = useState();
  const referenceTilDenneBolig = useRef(null);
  useEffect(() => {
    async function getAllMyFavorites() {
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

  let randomFunc = () => Math.floor(Math.random() * 1000 + 1);
  async function handleChangeFavorite(boligId) {
    await HandleMyFavorite(boligId);
  }

  function handleUpdateUI() {
    console.log(referenceTilDenneBolig.current);

    referenceTilDenneBolig.current.remove();
  }
  return (
    <>
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
      <section className={classes.search}></section>
      <section className={classes.favoritesArticles}>
        {userFavorites !== null ? (
          userFavorites.map((home) => (
            <div>
              <Link href={`boligdetails/${home.id}`}>
                <article
                  key={`favorites-${randomFunc()}`}
                  ref={referenceTilDenneBolig}
                >
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
                  <div>
                    <p>{home.type}.</p>
                    <p>Ejerudgift:{home.cost}Kr.</p>
                  </div>
                  <div>
                    <p>{home.energylabel}</p>
                    <p>{home.rooms}værelser.</p>
                    <p>{home.floorplan.size}m²</p>
                  </div>
                  <div>
                    <p>{home.price}Kr.</p>
                  </div>
                </article>
              </Link>

              <button className={classes.button}
                onClick={() => {
                  handleChangeFavorite(home.id);
                  handleUpdateUI();
                }}
              >
                Fjern denne bolig
              </button>
            </div>
          ))
        ) : (
          <p>Loading Your Favourite Homes...</p>
        )}
      </section>
    </>
  );
}
