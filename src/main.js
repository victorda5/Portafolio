const sr = ScrollReveal({
  origin: "top",
  distance: "40px",
  duration: 1200,
  delay: 100,
  //reset: true;
});

sr.reveal(".scroll-reveal", { interval: 50, origin: "bottom" });

const expBtn = document.getElementById("experiencia");
const eduBtn = document.getElementById("educacion");

const expTxt = document.getElementById("experienciaTxt");
const eduTxt = document.getElementById("educacionTxt");

expBtn.addEventListener("click", function () {
  if (eduTxt.classList.contains("grid")) {
    eduTxt.classList.remove("grid");
    eduTxt.classList.add("hidden");
  }

  if (expBtn.classList.contains("text-grey")) {
    expBtn.classList.remove("text-grey");
    expBtn.classList.add("text-titlewhite");
  }

  eduBtn.classList.remove("text-titlewhite");
  eduBtn.classList.add("text-grey");

  expTxt.classList.remove("hidden");
  expTxt.classList.add("grid");
});

eduBtn.addEventListener("click", function () {
  if (expTxt.classList.contains("grid")) {
    expTxt.classList.remove("grid");
    expTxt.classList.add("hidden");
  }

  if (eduBtn.classList.contains("text-grey")) {
    eduBtn.classList.remove("text-grey");
    eduBtn.classList.add("text-titlewhite");
  }

  expBtn.classList.remove("text-titlewhite");
  expBtn.classList.add("text-grey");

  eduTxt.classList.remove("hidden");
  eduTxt.classList.add("grid");
});
