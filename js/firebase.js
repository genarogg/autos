// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-app.js";
import {
  getFirestore,
  collection,
  getDocs,
  doc,
  deleteDoc,
  setDoc,
  updateDoc,
} from "https://www.gstatic.com/firebasejs/10.8.0/firebase-firestore.js";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDE_G6rXST9WRqHgkYeRGxCloxthsnK__Y",
  authDomain: "autos-a2c3b.firebaseapp.com",
  projectId: "autos-a2c3b",
  storageBucket: "autos-a2c3b.appspot.com",
  messagingSenderId: "723960148448",
  appId: "1:723960148448:web:91183bd51325568622bb85",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { app, db, doc, setDoc, getDocs, collection, deleteDoc, updateDoc };
