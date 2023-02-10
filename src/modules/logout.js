// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.16.0/firebase-app.js";

import { getDatabase } from "https://www.gstatic.com/firebasejs/9.16.0/firebase-database.js";

import {
  getAuth,
  signOut,
} from "https://www.gstatic.com/firebasejs/9.16.0/firebase-auth.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

import { firebaseConfig } from "./firebase.js";

// Initialize Firebase and authentication, database
const app = initializeApp(firebaseConfig);
const database = getDatabase(app);
const auth = getAuth();
//___________________________
export function logoutGO(e) {
  e.preventDefault();

  signOut(auth)
    .then(() => {
      console.log("signed out succesfully");
      location.reload();
    })
    .catch((error) => {
      console.log(error);
      alert("kazkas ne to BIG ERRROR YIKES");
    });
}
