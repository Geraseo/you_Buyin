// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.16.0/firebase-app.js";

import {
  getDatabase,
  set,
  ref,
  update,
} from "https://www.gstatic.com/firebasejs/9.16.0/firebase-database.js";

import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
} from "https://www.gstatic.com/firebasejs/9.16.0/firebase-auth.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

import { firebaseConfig } from "./src/modules/firebase.js";

// Initialize Firebase and authentication, database
const app = initializeApp(firebaseConfig);
const database = getDatabase(app);
const auth = getAuth();

//_________________________________________

import { navBar } from "./src/modules/navbar.js";
navBar();
//_________________________________________

//_________________________________________

// userio statuso patikrinimas

import { userAuth } from "./src/modules/userAuth.js";
userAuth();

//
import { catInNav } from "./src/modules/addCat.js";
catInNav();

import { adFeed } from "./src/modules/adsFeed.js";
adFeed();

// cia sortina pagal kategorija
import { filterAdsByCat } from "./src/modules/filterAdsByCat.js";
filterAdsByCat();
