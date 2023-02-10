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
import { firebaseConfig } from "./firebase.js";

// Initialize Firebase and authentication, databasee
const app = initializeApp(firebaseConfig);
const database = getDatabase(app);
const auth = getAuth();

export function myAdsFilter() {
  document.querySelectorAll(".adCard").forEach((ad) => {
    ad.remove();
  });
  get(ref(database, "ads/")).then((snapshot) => {
    if (snapshot.exists()) {
      const data = snapshot.val();
      //   console.log(data);
      for (const key in data) {
        // console.log(data[key].author);
        if (data[key].author === auth.currentUser.email) {
          const adCard = document.createElement("div");
          adCard.classList.add("adCard");
          adCard.id = key;
          const adCardTextName = document.createElement("h3");
          adCardTextName.innerHTML = data[key].name;
          adCardTextName.classList.add("adCardTextName");
          const adCardTextNameDiv = document.createElement("div");
          adCardTextNameDiv.classList.add("adCardTextNameDiv");
          const adCardTextDesc = document.createElement("p");
          adCardTextDesc.innerHTML = data[key].description;
          adCardTextDesc.classList.add("adCardTextDesc");
          const adCardTextPrice = document.createElement("p");
          adCardTextPrice.innerHTML = data[key].price + "€";
          adCardTextPrice.classList.add("adCardTextPrice");
          const adCardTextCat = document.createElement("p");
          adCardTextCat.innerHTML = data[key].category;
          adCardTextCat.classList.add("adCardTextCat");
          const adCardTextUser = document.createElement("p");
          adCardTextUser.innerHTML = data[key].author;
          adCardTextUser.classList.add("adCardTextUser");
          const adCardTextDate = document.createElement("p");
          adCardTextDate.innerHTML = data[key].date;
          adCardTextDate.classList.add("adCardTextDate");
          const adInfo = document.createElement("div");
          adInfo.classList.add("adInfo");
          const adDeleteBtn = document.createElement("button");
          adDeleteBtn.id = key;
          adDeleteBtn.classList.add("btn", "btn-danger");
          adDeleteBtn.innerHTML = "Delete";
          adDeleteBtn.setAttribute("type", "button");
          adDeleteBtn.setAttribute("aria-label", "Close");

          adCardTextNameDiv.appendChild(adCardTextName);
          adCardTextNameDiv.appendChild(adCardTextDate);
          adCardTextNameDiv.appendChild(adDeleteBtn);
          adCard.appendChild(adCardTextNameDiv);
          adCard.appendChild(adCardTextDesc);
          adCard.appendChild(adInfo);

          adInfo.appendChild(adCardTextPrice);
          adInfo.appendChild(adCardTextCat);
          adInfo.appendChild(adCardTextUser);

          document.getElementById("ads").appendChild(adCard);

          adDeleteBtn.addEventListener("click", () => {
            remove(ref(database, "ads/" + adDeleteBtn.id));
            location.reload();
          });
        }
      }
    } //lol
  });
}
