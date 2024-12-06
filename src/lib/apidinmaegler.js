"use server";

import { cookies } from "next/headers";

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

// get a home detail as per home id
export async function getHomeDetail(id) {
  try {
    const response = await fetch(`https://dinmaegler.onrender.com/homes/${id}`);
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

// get all agents
export async function getAllAgents() {
  try {
    const response = await fetch("https://dinmaegler.onrender.com/agents");
    const data = await response.json();
    return data;
  } catch (error) {
    console.log(error);
  }
}

// get a Agent data as per agent id
export async function getAgentDetail(id) {
  try {
    const response = await fetch(
      `https://dinmaegler.onrender.com/agents/${id}`
    );
    const data = await response.json();
    return data;
  } catch (error) {
    console.log(error);
  }
}

// get homes by type
export async function getHomesByType(type_eq) {
  try {
    if (type_eq === "") {
      const response = await fetch("https://dinmaegler.onrender.com/homes");
      const data = await response.json();
      return data;
    } else {
      const response = await fetch(
        `https://dinmaegler.onrender.com/homes?type_eq=${type_eq}`
      );
      const data = await response.json();
      console.log(data);

      return data;
    }
  } catch (error) {
    console.log(error);
  }
}
// get homes by price
export async function getHomesByTypeAndPrice(type_eq, price_gte, price_lte) {
  console.log("type_eq: ", type_eq);
  console.log("price_gte: ", price_gte);
  console.log("price_lte: ", price_lte);

  try {
    if (type_eq === "" || price_gte === "" || price_lte === "") {
      const response = await fetch("https://dinmaegler.onrender.com/homes");
      const data = await response.json();
      return data;
    } else {
      const response = await fetch(
        `https://dinmaegler.onrender.com/homes?type_eq=${type_eq}&price_gte=${price_gte}&price_lte=${price_lte}`
      );
      const data = await response.json();
      return data;
    }
  } catch (error) {
    console.log(error);
  }
}

// Login
export async function getAuthorization(enteredValues) {
  try {
    const response = await fetch(`https://dinmaegler.onrender.com/auth/local`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        identifier: enteredValues.identifier,
        password: enteredValues.password,
      }),
    });
    console.log(enteredValues);

    const data = await response.json();
    if (!response.ok) {
      console.log("here is an error page...");
      return "unsuccessful";
    } else {
      const cookieStore = await cookies();
      cookieStore.set("myToken", data.jwt);
      cookieStore.set("user id", data.user.id);

      console.log("jwt", data.jwt);
      console.log("user id", data.user.id);

      return "success";
    }
  } catch (error) {
    console.log(error);
  }
}

// get current user
export async function getCurrentUser() {
  const cookieStore = await cookies();
  const myToken = cookieStore.get("myToken");
  console.log("myToken: ",myToken);

  try {
    const response = await fetch("https://dinmaegler.onrender.com/users/me", {
      method: "GET",
      headers: {
        Authorization: `Bearer ${myToken}`,
      },
    });
    const data = await response.json();
    console.log("data: ", data);
    return data;
  } catch (error) {
    console.log(error);
  }
}
