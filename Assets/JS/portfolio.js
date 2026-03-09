
document.addEventListener("DOMContentLoaded", () => {

const packageData = {
  
    eaglesBreedSite: {
        title: "Eagles Breed MC's Website",
        content: `
            <p>
                This is a long-term project for Eagles Breed MC, a local motorcycle club in western Ohio. Built 
                on the Bronze Package setup, the site is designed to grow alongside my skills. As I continue to
                learn and experiment, it will evolve into a more advanced, feature-rich platform that captures 
                the club’s personality while showcasing my development as a web developer.
            </p>
        `
    }

};

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

const modalTitle = modalOverlay.querySelector("#modalTitle");
const modalContent = modalOverlay.querySelector("#modalContent");
const closeModalBtn = modalOverlay.querySelector(".closeModal");


function openModal(packageKey) {
  modalTitle.textContent = packageData[packageKey].title;
  modalContent.innerHTML = packageData[packageKey].content;
  modalOverlay.classList.add("active");
}

function closeModal() {
  modalOverlay.classList.remove("active");
}

document.querySelectorAll("[data-package]").forEach(btn => {
  btn.addEventListener("click", () => {
    openModal(btn.dataset.package);
  });
});


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
