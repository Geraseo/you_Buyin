export function filterAdsByCat() {
  setTimeout(function () {
    console.log("Waited 2 secs");
    const catList = document.getElementById("catList");
    const catBtns = catList.querySelectorAll("button");
    catBtns.forEach((btn) => {
      btn.addEventListener("click", (e) => {
        // console.log(e.target.id);
        if (document.getElementById("newPostdiv")) {
          document.getElementById("newPostdiv").style.display = "none";
        }

        const goBackBtn = document.createElement("button");
        goBackBtn.classList.add(
          "btn",
          "btn-secondary",
          "m-1",
          "align-self-start",
          "w-100"
        );
        goBackBtn.innerText = "Go Back";
        goBackBtn.id = "goBackBtn";
        goBackBtn.addEventListener("click", () => {
          location.reload();
        });
        if (document.getElementById("goBackBtn") === null) {
          document.getElementById("ads").appendChild(goBackBtn);
        }

        const adCards = document.querySelectorAll(
          ".adCard > .adInfo > .adCardTextCat"
        );
        adCards.forEach((card) => {
          //   console.log(card.innerText);

          if (card.innerText === e.target.innerText) {
            card.parentElement.parentElement.style.display = "flex";
          } else {
            card.parentElement.parentElement.style.display = "none";
          }
        });
      });
    });
  }, 2000);
}
