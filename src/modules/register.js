import { initializeApp } from "https://www.gstatic.com/firebasejs/9.16.0/firebase-app.js";

import {
  getDatabase,
  set,
  ref,
} from "https://www.gstatic.com/firebasejs/9.16.0/firebase-database.js";

import {
  createUserWithEmailAndPassword,
  getAuth,
} from "https://www.gstatic.com/firebasejs/9.16.0/firebase-auth.js";

import { firebaseConfig } from "./firebase.js";

const app = initializeApp(firebaseConfig);
const database = getDatabase(app);
const auth = getAuth();

//_________________________________________
export function registerGO(e) {
  e.preventDefault();

  //laukliu ar uzpildyti laukai
  const inputEmail = document.getElementById("inputEmail").value;
  const inputPass = document.getElementById("inputPass").value;

  createUserWithEmailAndPassword(auth, inputEmail, inputPass)
    .then((userCredential) => {
      // Signed in
      const user = userCredential.user;
      console.log(`new user created ${user}`);

      const loginTime = new Date();

      set(ref(database, "users/" + user.uid), {
        email: inputEmail,
        role: "simple_user",
        timestamp: `${loginTime}`,
      });
    })
    .catch((error) => {
      console.log(error);
    });
  document.getElementById("status").innerHTML = "";
  setTimeout(function () {
    location.reload();
  }, 1000);
}
