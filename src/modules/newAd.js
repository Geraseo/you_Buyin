// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.16.0/firebase-app.js";

import {
  getDatabase,
  set,
  ref,
  get,
  push,
  update,
} from "https://www.gstatic.com/firebasejs/9.16.0/firebase-database.js";

import { getAuth } from "https://www.gstatic.com/firebasejs/9.16.0/firebase-auth.js";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

import { firebaseConfig } from "./firebase.js";

// Initialize Firebase and authentication, database
const app = initializeApp(firebaseConfig);
const database = getDatabase(app);
const auth = getAuth();

import { adFeed } from "./adsFeed.js";
const newAdBtn = document.getElementById("newAdBtn");

//_________________________________________
export function newAdCats() {
  const newAdDropdown = document.getElementById("newAdDropdown");
  // catDropdown.innerHTML = ""; ???????? bug or smth

  get(ref(database, "categories/")).then((snapshot) => {
    if (snapshot.exists()) {
      const data = snapshot.val();
      //   console.log(data);
      for (const key in data) {
        const li = document.createElement("li");
        const anchor = document.createElement("a");
        anchor.href = "#";
        anchor.id = key;
        anchor.classList.add("hoverGrey");
        anchor.classList.add(
          "dropdown-item",
          "my-1",
          "text-center",
          "borderisgrey"
        );
        anchor.innerText = data[key].name;
        li.appendChild(anchor);
        newAdDropdown.appendChild(li);
        anchor.onclick = function () {
          document.getElementById("newAdDropdownBtn").innerText =
            data[key].name;
        };
      }
    } else {
      console.log("No data available");
    }
  });
}

//_________________________________________
import { oneSecond } from "./userAuth.js";

export function newAd(name, price, category, description) {
  const newCatName = document.getElementById("newAdDropdownBtn").innerText;
  //   console.log(newCatName);
  if (
    document.getElementById("adName").value == "" ||
    document.getElementById("adPrice").value == "" ||
    document.getElementById("newAdText").value == "" ||
    newCatName == "Select Category"
  ) {
    alert("Please fill all fields");
    return;
  }

  push(ref(database, "ads/"), {
    name: document.getElementById("adName").value,
    price: document.getElementById("adPrice").value,
    category: newCatName,
    description: document.getElementById("newAdText").value,
    author: auth.currentUser.email,
    date: new Date().toLocaleString(),
  });
  // document.querySelectorAll(".adCard").forEach((ad) => {
  //   ad.remove();
  //   adFeed();
  // });
  oneSecond();
}
