const nav = document.querySelector("#nav");
const navBtn = document.querySelector("#nav-btn");
const navBtnImg = document.querySelector("#nav-img-btn");

navBtn.addEventListener("click", () => {
  if (nav.classList.toggle("open")) {
    navBtnImg.src = "./img/nav-close.png";
  } else {
    navBtnImg.src = "./img/nav-open.png";
  }
});
