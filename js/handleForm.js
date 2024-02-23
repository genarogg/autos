import { doc, setDoc } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-firestore.js";
import db from '/js/firebaseConfig.js';

export const handleFormSubmit = async (e) => {
  e.preventDefault();
  const reservationCar = document.getElementById("reservation-car").value;
  const reservationUser = document.getElementById("reservation-user").value;
  const docRef = doc(db, "reservado", `${reservationUser}-${reservationCar}`);
  await setDoc(docRef, { car: reservationCar, user: reservationUser });
  document.getElementById("reservation-form").reset();
};