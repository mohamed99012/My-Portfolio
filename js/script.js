document.querySelector(".show-menu").addEventListener("click", () => {
  document.querySelector(".nav").classList.toggle("nav-shown");
});
let navLinks = document.querySelectorAll("header ul li a ");
navLinks.forEach((link) => {
  link.addEventListener("click", (e) => {
    navLinks.forEach((link) => {
      link.classList.remove("active");
    });
    e.target.classList.add("active");
  });
});
// Scroll to Top
window.onscroll = () => {
  if (window.scrollY >= 200) {
    document.getElementById("scrollBtn").style.display = "flex";
  }
  if (window.scrollY < 200) {
    document.getElementById("scrollBtn").style.display = "none";
  }
};
document.getElementById("scrollBtn").addEventListener("click", () => {
  window.scrollTo(0 , 0)
});
// Skill Ratio 
let skillRatios = document.querySelectorAll(".skill .ratio") ;
skillRatios.forEach((ratio) => {
  let dataRatio = ratio.dataset.ratio ; 
  ratio.style.width = `${dataRatio}%` ;
  ratio.querySelector(".percent").innerHTML = `${dataRatio}%`;
  
})

