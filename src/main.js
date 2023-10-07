const expBtn = document.getElementById("experiencia");
const eduBtn = document.getElementById("educacion");

const expTxt = document.getElementById("experienciaTxt");
const eduTxt = document.getElementById("educacionTxt");

function toggleVisibility(showElement, hideElement) {
  showElement.classList.remove("hidden");
  showElement.classList.add("grid");

  hideElement.classList.remove("grid");
  hideElement.classList.add("hidden");
}

function updateButtonStyles(activeBtn, inactiveBtn) {
  activeBtn.classList.remove("text-grey");
  activeBtn.classList.add("text-titlewhite");

  inactiveBtn.classList.remove("text-titlewhite");
  inactiveBtn.classList.add("text-grey");
}

expBtn.addEventListener("click", function () {
  toggleVisibility(expTxt, eduTxt);
  updateButtonStyles(expBtn, eduBtn);
});

eduBtn.addEventListener("click", function () {
  toggleVisibility(eduTxt, expTxt);
  updateButtonStyles(eduBtn, expBtn);
});