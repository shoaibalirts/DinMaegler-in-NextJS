"use server";

// get all homes
export async function getAllHomes() {
  try {
    const response = await fetch("https://dinmaegler.onrender.com/homes");
    const data = await response.json();
    return data;
  } catch (error) {
    console.log(error);
  }
}

// get total homes for sale
export async function getNumberOfHomesOnSale() {
  try {
    const response = await fetch("https://dinmaegler.onrender.com/homes/count");
    const data = await response.json();
    return data;
  } catch (error) {
    console.log(error);
  }
}
