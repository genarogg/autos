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

export async function populateTable() {
  const tableBody = document.querySelector("#car-table tbody");

  // Fetch all data
  const carSnapshot = await getDocs(collection(db, "automoviles"));
  const userSnapshot = await getDocs(collection(db, "usuarios"));
  const brandSnapshot = await getDocs(collection(db, "brands"));
  const reservationSnapshot = await getDocs(collection(db, "reservado"));

  // Convert snapshots to arrays of data
  const cars = carSnapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
  const users = userSnapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
  const brands = brandSnapshot.docs.map((doc) => ({
    id: doc.id,
    ...doc.data(),
  }));
  const reservations = reservationSnapshot.docs.map((doc) => ({
    id: doc.id,
    ...doc.data(),
  }));

  // For each car, create a row in the table
  cars.forEach((car) => {
    const row = document.createElement("tr");

    // Find the brand, user, and reservation for this car
    const brand = brands.find((brand) => brand.id === car.brand);
    const reservation = reservations.find(
      (reservation) => reservation.car === car.id
    );
    const user = reservation
      ? users.find((user) => user.id === reservation.user)
      : null;

    // Create cells for the car name, brand name, reservation status, and user name
    const nameCell = document.createElement("td");
    nameCell.textContent = car.name;
    row.appendChild(nameCell);

    const brandCell = document.createElement("td");
    brandCell.textContent = brand ? brand.name : "N/A";
    row.appendChild(brandCell);

    const reservationCell = document.createElement("td");
    reservationCell.textContent = reservation ? "Yes" : "No";
    row.appendChild(reservationCell);

    const userCell = document.createElement("td");
    userCell.textContent = user ? user.name : "N/A";
    row.appendChild(userCell);

    // Add the row to the table
    tableBody.appendChild(row);
  });
}
