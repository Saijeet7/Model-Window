"use strict";

const modal = document.querySelector(".modal");
const overlay = document.querySelector(".overlay");
const btn = document.querySelector(".close-modal");
const btnOpenModal = document.querySelectorAll(".show-modal");

const hideOverlay = () => {
  if (!modal.classList.contains("hidden")) {
    modal.classList.add("hidden");
    overlay.classList.add("hidden");
  }
};

const showOverlay = () => {
  if (modal.classList.contains("hidden")) {
    modal.classList.remove("hidden");
    overlay.classList.remove("hidden");
  }
};

btnOpenModal.forEach((element) => {
  element.addEventListener("click", showOverlay);
});

btn.addEventListener("click", hideOverlay);
overlay.addEventListener("click", hideOverlay);

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") {
    hideOverlay();
  }
});
