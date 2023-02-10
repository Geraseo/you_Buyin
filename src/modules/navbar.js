const root = document.getElementById("root");

export function navBar() {
  root.innerHTML = `
      <div id="header" class="d-flex justify-content-around">
        <a href="./index.html" class="w-100 h-100"> <img src="./src/pictures/logo white txt.png" alt="logo" class="logo w-100 h-100" /> </a>
        <nav
          class="navbar navbar-expand-lg navbar-light position-absolute d-flex justify-content-end g-0"
        >
          <button
            class="navbar-toggler greenBG z-3"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavAltMarkup"
            aria-controls="navbarNavAltMarkup"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse greenBG navbar-collapse" id="navbarNavAltMarkup">
            <!-- status stuff -->
            <form
              id="status"
              class="darkBG w-75 h-50 m-3 centeris flex-column"
            ></form>

            <div> 
            <!-- status stuff end -->
            <div id="catList" class="w-100 h-auto text-center p-1 overflow-scroll">
              <h4>Filter by category</h4>
            </div>
            <!-- my ads -->
            <div id="myAds" class="w-100 h-auto text-center p-1 overflow-scroll">
              <button id="myAdsBtn" class="btn btn-success w-50 " >My ads</button>
            </div>
          </div>
        </nav>
      </div>`;
}
