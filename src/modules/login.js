// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.16.0/firebase-app.js";

import {
  getDatabase,
  ref,
  update,
} from "https://www.gstatic.com/firebasejs/9.16.0/firebase-database.js";

import {
  getAuth,
  signInWithEmailAndPassword,
} from "https://www.gstatic.com/firebasejs/9.16.0/firebase-auth.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

import { firebaseConfig } from "./firebase.js";

// Initialize Firebase and authentication, database
const app = initializeApp(firebaseConfig);
const database = getDatabase(app);
const auth = getAuth();
//____________________________________________________________
export function loginGO(e) {
  e.preventDefault();

  const inputEmail = document.getElementById("inputEmail").value;
  const inputPass = document.getElementById("inputPass").value;

  signInWithEmailAndPassword(auth, inputEmail, inputPass)
    .then((userCredential) => {
      // Signed in
      const user = userCredential.user;
      console.log("sekmingai prisijungta");

      const login_time = new Date();
      update(ref(database, "users/" + user.uid), {
        timestamp: `${login_time}`,
      });
    })
    .catch((error) => {
      console.log(error);
      alert("kazkas ne to BIG ERRROR YIKES");
    });
  document.getElementById("status").innerHTML = "";
  setTimeout(function () {
    location.reload();
  }, 1000);
}
