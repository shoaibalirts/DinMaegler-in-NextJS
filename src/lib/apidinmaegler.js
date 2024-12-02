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
    const response = await fetch(`https://dinmaegler.onrender.com/agents/${id}`);
    const data = await response.json();
    return data;
  } catch (error) {
    console.log(error);
  }
}


// get homes by type
export async function getHomesByType() {
  try {
    const response = await fetch("https://dinmaegler.onrender.com/homes");
    const data = await response.json();
    return data;
  } catch (error) {
    console.log(error);
  }
}
// get homes by price
export async function getHomesByPrice() {
  try {
    const response = await fetch("https://dinmaegler.onrender.com/homes");
    const data = await response.json();
    return data;
  } catch (error) {
    console.log(error);
  }
}