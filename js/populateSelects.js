import {
  getDocs,
  collection,
} from "https://www.gstatic.com/firebasejs/10.8.0/firebase-firestore.js";
import db from "/js/firebaseConfig.js";

export const populateCars = async () => {
  const querySnapshot = await getDocs(collection(db, "automoviles"));
  const carSelect = document.getElementById("reservation-car");
  querySnapshot.forEach((doc) => {
    const option = document.createElement("option");
    option.text = doc.id;
    option.value = doc.id;
    carSelect.add(option);
  });
};

export const populateUsers = async () => {
  const querySnapshot = await getDocs(collection(db, "usuarios"));
  const userSelect = document.getElementById("reservation-user");
  querySnapshot.forEach((doc) => {
    const option = document.createElement("option");
    option.text = doc.id;
    option.value = doc.id;
    userSelect.add(option);
  });
};

export const populateBrands = async () => {
  const querySnapshot = await getDocs(collection(db, "brands")); // Replace "brands" with your actual collection name for brands
  const brandSelect = document.getElementById("car-brand"); // Make sure "car-brand" is the correct id for your brand select element
  querySnapshot.forEach((doc) => {
    const option = document.createElement("option");
    option.text = doc.id;
    option.value = doc.id;
    brandSelect.add(option);
  });
};
