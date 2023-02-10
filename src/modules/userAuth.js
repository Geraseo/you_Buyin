// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.16.0/firebase-app.js";

import {
  getDatabase,
  set,
  ref,
  get,
  update,
  remove,
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

import { firebaseConfig } from "./firebase.js";
import { logoutGO } from "./logout.js";
import { status } from "./status.js";
import { registerGO } from "./register.js";
import { loginGO } from "./login.js";
import { adminPanel } from "./adminpanel.js";
import { addCat } from "./addCat.js";
import { addCatsToDropdown } from "./addCat.js";
import { newAd, newAdCats } from "./newAd.js";
import { ads } from "./ads.js";
import { adPosting } from "./ads.js";
import { myAdsFilter } from "./myAdsFilter.js";
import { filterAdsByCat } from "./filterAdsByCat.js";

// Initialize Firebase and authentication, databasee
const app = initializeApp(firebaseConfig);
const database = getDatabase(app);
const auth = getAuth();

export function oneSecond() {
  setTimeout(function () {
    location.reload();
  }, 1000);
}

//_________________________________________
export function userAuth() {
  ads();
  filterAdsByCat();
  onAuthStateChanged(auth, (user) => {
    if (user) {
      console.log("useris prisijunges");
      document.getElementById("status").innerHTML += `
      <h6 class="text-center text-break m-2">Logged in as: ${user.email}</h6>
      <button id="logoutBtn" class="btn btn-primary my-1" >Logout</button>`;

      // role check
      get(ref(database, "users/" + user.uid)).then((snapshot) => {
        const userData = snapshot.val();
        //if admin
        if (userData.role === "admin") {
          console.log(userData.role);

          document.getElementById("status").innerHTML += `<button
          type="button"
          id="adminBtn"
          class="btn btn-warning my-1"
          data-bs-toggle="modal"
          data-bs-target="#adminPanelModal"
        >Admin panel
        </button>`;
          adminPanel();
          adPosting();
          //prideti new categorija adminui
          document
            .getElementById("addCategoryBtn")
            .addEventListener("click", addCat);

          document
            .getElementById("dropdownBtn")
            .addEventListener("click", addCatsToDropdown);

          document
            .getElementById("logoutBtn")
            .addEventListener("click", logoutGO);
          // cia ad posting
          newAdCats();
          document.getElementById("newAdBtn").addEventListener("click", newAd);
          document
            .getElementById("myAdsBtn")
            .addEventListener("click", myAdsFilter);

          //admin delete btn all
          const adDeleteBtn = document.createElement("button");
          adDeleteBtn.classList.add("btn", "btn-danger", "my-1");
          adDeleteBtn.innerHTML = "Delete";
          document.querySelectorAll(".adCardTextNameDiv").forEach((btn) => {
            btn.appendChild(adDeleteBtn.cloneNode(true));

            btn.addEventListener("click", (e) => {
              // console.log(btn.parentElement.id);
              remove(ref(database, "ads/" + btn.parentElement.id));

              location.reload();
            });
          });
        } else {
          // paprastas user
          console.log(userData.role);

          document
            .getElementById("myAdsBtn")
            .addEventListener("click", myAdsFilter);
          adPosting();

          document
            .getElementById("logoutBtn")
            .addEventListener("click", logoutGO);

          // cia ad posting

          newAdCats();
          document.getElementById("newAdBtn").addEventListener("click", newAd);
        }
      });
    } else {
      console.log("atsijunges");
      status();
      //registracija
      document
        .getElementById("registerBtn")
        .addEventListener("click", registerGO);
      //---------------------------------------------

      //prisijungimo funkcija
      document.getElementById("loginBtn").addEventListener("click", loginGO);
      //------------------------------------------------
      document.getElementById("logoutBtn").remove();
    }
  });
}
