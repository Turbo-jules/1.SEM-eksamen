window.addEventListener("load", sidenVises);

function sidenVises() {
  console.log("sidenVises");
}

const portfolioMenu = document.querySelectorAll(".portfolio-menu");

portfolioMenu.forEach((menuItem) => {
  menuItem.addEventListener("mouseenter", (event) => {
    event.target.classList.add("hovered");
    if (event.target.nextElementSibling) {
      event.target.nextElementSibling.classList.add("sibling-hovered");
    }
    if (event.target.previousElementSibling) {
      event.target.previousElementSibling.classList.add("sibling-hovered");
    }
  });
  menuItem.addEventListener("mouseleave", (event) => {
    event.target.classList.remove("hovered");
    if (event.target.nextElementSibling) {
      event.target.nextElementSibling.classList.remove("sibling-hovered");
    }
    if (event.target.previousElementSibling) {
      event.target.previousElementSibling.classList.remove("sibling-hovered");
    }
  });
});

/*----- ringe ---- */
