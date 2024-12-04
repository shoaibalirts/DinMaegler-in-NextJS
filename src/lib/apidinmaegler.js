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
