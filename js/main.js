import {
  populateCars,
  populateUsers,
  populateBrands,
  populateTable,
} from "./populate.js";

// Call the populate functions when the page loads
window.onload = () => {
  populateCars();
  populateUsers();
  populateBrands();
  populateTable();
};
