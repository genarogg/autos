import { db, getDocs, collection } from "./firebase.js";

// Function to populate cars
export async function populateCars() {
  const carsSnapshot = await getDocs(collection(db, "automoviles"));
  const carSelect = document.getElementById("reservation-car");
  carsSnapshot.forEach((doc) => {
    const option = document.createElement("option");
    option.text = doc.id;
    option.value = doc.id;
    carSelect.add(option);
  });
}

// Function to populate users
export async function populateUsers() {
  const usersSnapshot = await getDocs(collection(db, "usuarios"));
  const userSelect = document.getElementById("reservation-user");
  usersSnapshot.forEach((doc) => {
    const option = document.createElement("option");
    option.text = doc.id;
    option.value = doc.id;
    userSelect.add(option);
  });
}

// Function to populate brands
export async function populateBrands() {
  const brandsSnapshot = await getDocs(collection(db, "brands"));
  const brandSelect = document.getElementById("car-brand");
  brandsSnapshot.forEach((doc) => {
    const option = document.createElement("option");
    option.text = doc.id;
    option.value = doc.id;
    brandSelect.add(option);
  });
}
