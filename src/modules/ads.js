import { adFeed } from "./adsFeed.js";

export function ads() {
  document.getElementById(
    "root"
  ).innerHTML += `  <div id="ads" class="container-fluid d-flex justify-content-center align-items-center flex-wrap overflow-scroll">
    
  <!-- nuo cia prasideda ads -->
  
  </div>`;
}

export function adPosting() {
  document.getElementById(
    "ads"
  ).innerHTML += `  <div id="newPostdiv" class="w-75 mt-1 p-3  rounded greenBG">
  <form id="newPostForm" class="w-100 h-100">
  <input id="adName" class="form-control" type="text" placeholder="Ad name">
  <input id="adPrice" class="form-control form-control-sm" type="numbers" placeholder="price">
  <div id="adDropdownBtn" class="dropdown ">
    <button id="newAdDropdownBtn" class="text-wrap w-100 btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
      Select category
    </button>
      <ul id="newAdDropdown" class="dropdown-menu">
        
      </ul>
</div>
<textarea id="newAdText" class="form-control" id="newAdDesc" placeholder="Description" rows="3"></textarea>

<button id="newAdBtn" class="btn btn-secondary">Post</button>
</form>
</div>`;
}
