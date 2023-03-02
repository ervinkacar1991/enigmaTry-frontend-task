const openModalButton = document.getElementById("openModalBtn");
const modal = document.getElementById("modal");

const closeModalBtns = document.querySelectorAll(".close-modal");

openModalButton.addEventListener("click", () => {
  modal.classList.add("modal-display");
});

closeModalBtns.forEach((closeModalBtn) => {
  closeModalBtn.addEventListener("click", (e) => {
    e.preventDefault();
    modal.classList.remove("modal-display");
  });
});
