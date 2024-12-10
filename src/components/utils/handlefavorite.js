import { getCurrentUser, getFavorites } from "@/lib/apidinmaegler";

export async function HandleMyFavorite(homeId) {
  console.log(homeId);

  console.log("clicked favorite");
  // my homes object as response from the current user api endpoint
  const myHomesObject = await getCurrentUser();
  // object destructuring
  const { homes } = { homes: myHomesObject.homes };
  // user id
  // console.log("User Id: ", id);
  // homes array
  // console.log("Homes Array for this user id from API: ", homes);

  const existsSpecificHomeId = homes.indexOf(homeId);
  // console.log(existsSpecificHomeId);

  if (existsSpecificHomeId === -1) {
    // console.log("does not exist this home id so adding it into to the homes array");

    homes.push(homeId);
    await getFavorites(homes);
  } else {
    // classname should be fillHeartColor
    // heartIconclasses = { color: "red" };
    // console.log("Exist this home id so removing it from homes array");
    const filteredArray = homes.filter((id) => id !== homeId);
    console.log("filtered Array: ", filteredArray);
    await getFavorites(filteredArray);
  }
}

/*
  async function handleChangeFavorite(boligId) {
    // step-1: to get all the favorites homes
    const homesIdsArray = await getCurrentUser();
    // step-2: using filter remove one of the item
    const filteredIdsArray = homesIdsArray.filter((id) => id !== boligId);
    console.log("FilteredIdsArray: ", filteredIdsArray);

    // step-3: new filtered array should be PUT (edit to api): use getFavorites(updatedhomes)
    const filteredFavoriteHomesArray = await getFavorites(filteredIdsArray);
    console.log("FilteredFavoriteHomesArray: ", filteredFavoriteHomesArray);

    // step-4: update UI using the below updating function
    setChangeUserFavorites(filteredFavoriteHomesArray);
  }
    */
