import { populateCars, populateUsers, populateBrands } from './populate.js';

// Call the populate functions when the page loads
window.onload = () => {
  populateCars();
  populateUsers();
  populateBrands();
};