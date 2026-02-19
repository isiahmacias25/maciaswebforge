/****************************************************
 * PACKAGE MODAL SYSTEM
 * ----------------------------------
 * This file:
 * 1. Defines package info (title + content)
 * 2. Creates ONE modal popup dynamically
 * 3. Attaches click listeners to each package tile
 * 4. Injects the correct content into the modal
 ****************************************************/


/* ---------------------------------
   DOM READY WRAPPER
   ---------------------------------
   Ensures the HTML is fully loaded
   before JavaScript runs.
*/
document.addEventListener("DOMContentLoaded", () => {


/* ---------------------------------
   PACKAGE DATA (source of truth)
   ---------------------------------
   This is where ALL popup text lives.
   If you want to change wording or pricing,
   you do it here — not in HTML.
*/
const packageData = {
  iron: {
    title: "Iron Package",
    content: `
      <p>Domain registration and full setup handled for you.</p>
      <p>Includes DNS configuration and launch-ready setup.</p>
      <p>No website included.</p>
      <p>$50 one-time payment plus all domain registration fees, including a 20% maintenance fee.</p>
      <p>100% down payment required.</p>
    `
  },

  bronze: {
    title: "Bronze Package",
    content: `
      <p>One-page website with basic text and strongly limited functionality.</p>
      <p>Domain registration and full setup handled for you.</p>
      <p>Includes DNS configuration and launch-ready setup.</p>
      <p>$200 one-time payment plus all domain registration fees, including a 20% maintenance fee.</p>
      <p>100% down payment required.</p>
      <p>Best for advertising small services, such as babysitting or dog walking.</p>
    `
  },

  silver: {
    title: "Silver Package",
    content: `
      <p>Small website with several pages, navigation, and basic functionality.</p>
      <p>Domain registration and full setup handled for you.</p>
      <p>Includes DNS configuration and launch-ready setup.</p>
      <p>$500 one-time payment plus all domain registration fees, including a 20% maintenance fee.</p>
      <p>100% down payment required.</p>
      <p>Best for small businesses.</p>
    `
  },

  custom: {
    title: "Custom Package",
    content: `
      <p>Fully custom features tailored to your needs.</p>
      <p>Pricing varies based on scope and functionality.</p>
    `
  }
};


/* ---------------------------------
   MODAL CREATION
   ---------------------------------
   We create the modal once and reuse it
   for every package click.
*/
const modalOverlay = document.createElement("div");
modalOverlay.className = "modalOverlay";

modalOverlay.innerHTML = `
  <div class="modal">
    <button class="closeModal" aria-label="Close Modal">&times;</button>
    <h2 id="modalTitle"></h2>
    <div id="modalContent"></div>
  </div>
`;

document.body.appendChild(modalOverlay);


/* ---------------------------------
   MODAL ELEMENT REFERENCES
   ---------------------------------
*/
const modalTitle = modalOverlay.querySelector("#modalTitle");
const modalContent = modalOverlay.querySelector("#modalContent");
const closeModalBtn = modalOverlay.querySelector(".closeModal");


/* ---------------------------------
   FUNCTION: OPEN MODAL
   ---------------------------------
   Takes a package key ("iron", "bronze", etc)
   and injects the correct content.
*/
function openModal(packageKey) {
  modalTitle.textContent = packageData[packageKey].title;
  modalContent.innerHTML = packageData[packageKey].content;
  modalOverlay.classList.add("active");
}


/* ---------------------------------
   FUNCTION: CLOSE MODAL
   ---------------------------------
*/
function closeModal() {
  modalOverlay.classList.remove("active");
}


/* ---------------------------------
   EVENT LISTENERS FOR PACKAGE TILES
   ---------------------------------
   Each tile opens the modal with
   its corresponding package data.
*/
document.querySelector(".ironPackageTile")
  .addEventListener("click", () => openModal("iron"));

document.querySelector(".bronzePackageTile")
  .addEventListener("click", () => openModal("bronze"));

document.querySelector(".silverPackageTile")
  .addEventListener("click", () => openModal("silver"));

document.querySelector(".customPackageTile")
  .addEventListener("click", () => openModal("custom"));


/* ---------------------------------
   MODAL CLOSE BEHAVIOR
   ---------------------------------
*/

// Close when clicking the X button
closeModalBtn.addEventListener("click", closeModal);

// Close when clicking outside the modal box
modalOverlay.addEventListener("click", (e) => {
  if (e.target === modalOverlay) {
    closeModal();
  }
});

// Close modal with Escape key (professional UX)
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") {
    closeModal();
  }
});

});
