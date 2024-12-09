'use client';
import Image from "next/image";
import classes from "./favorites.module.css";
import { getCurrentUser, getHomeDetail } from "@/lib/apidinmaegler";
// import { useLogin } from "@/store/login-context";

export default async function Favorites() {
  // const { isLoggedIn, logout } = useLogin();

  const currentUserData = await getCurrentUser();
  console.log("Current User Data: ", currentUserData);
  const homes = currentUserData.homes; // it contains all homes id
  const homesData = homes.map((homeId) => getHomeDetail(homeId));
  const homesDataArray = await Promise.all(homesData);
  console.log(homesDataArray);
  let random = Math.floor(Math.random() * 1000 + 1);

  return (
    <>
      <section className={classes.search}></section>
      <section className={classes.favoritesArticles}>
        {/* {homesDataArray.map((home) => (
          <article key={`favorites-${random}`}>
            <Image src={home.images[0].url} width={300} height={300} priority />
            <p>{home.adress1}</p>
            <div>
              <p>{home.postalcode}</p>
              <p>{home.city}</p>
            </div>
          </article>
        ))} */}
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
