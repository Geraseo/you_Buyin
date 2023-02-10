// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.16.0/firebase-app.js";

import {
  getDatabase,
  get,
  ref,
  push,
  remove,
} from "https://www.gstatic.com/firebasejs/9.16.0/firebase-database.js";

import { getAuth } from "https://www.gstatic.com/firebasejs/9.16.0/firebase-auth.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

import { firebaseConfig } from "./firebase.js";

// Initialize Firebase and authentication, database
const app = initializeApp(firebaseConfig);
const database = getDatabase(app);
const auth = getAuth();

//________________________________________________________
export function addCat(event) {
  event.preventDefault();
  const catInput = document.getElementById("categoryInput").value;
  if (catInput.length <= 2) {
    alert("Please enter a category name. Minimum 3 characters");
    return;
  }

  push(ref(database, "categories/"), {
    name: catInput,
  })
    .then(console.log("category added"))
    .catch((error) => {
      console.log(error);
    });
  document.getElementById("categoryInput").value = "";
  //   addCatsToDropdown();
}

export function addCatsToDropdown() {
  const catDropdown = document.getElementById("catDropdown");
  catDropdown.innerHTML = "";

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
        // remove category
        anchor.onclick = function () {
          alert(data[key].name + " removed");
          remove(ref(database, "categories/" + key));
          document.getElementById(key).parentElement.remove();
        };
        anchor.classList.add(
          "dropdown-item",
          "my-1",
          "text-center",
          "borderisgrey"
        );
        anchor.innerText = data[key].name;
        li.appendChild(anchor);
        catDropdown.appendChild(li);
      }
    } else {
      console.log("No data available");
    }
  });
}

export function catInNav() {
  get(ref(database, "categories/")).then((snapshot) => {
    if (snapshot.exists()) {
      const data = snapshot.val();
      //   console.log(data);
      for (const key in data) {
        const catBtn = document.createElement("button");
        catBtn.classList.add("btn", "btn-secondary", "m-1");
        catBtn.id = key;
        catBtn.innerText = data[key].name;
        document.getElementById("catList").appendChild(catBtn);
      }
    } else {
      console.log("No data available");
    }
  });
}
