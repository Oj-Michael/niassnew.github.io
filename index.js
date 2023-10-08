// the javascript
// to toggle the menu
const btn = document.getElementById("btn");
const nav = document.getElementById("nav");
let isOpen = false;

btn.addEventListener("click", () => {
  if (isOpen === false) {
    btn.setAttribute("aria-expanded", "true");
    nav.style.right = "-20px";
    isOpen = true;
  } else {
    btn.setAttribute("aria-expanded", "false");
    nav.style.right = "-125vw";
    isOpen = false;
  }
});

// to animate on scroll using the intersectionObserver library
const options = { root: null, threshold: 0, delay: 450 };
const show = (entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("show");
    } 
  });
}
const bounce = (entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("bounce");
    } 
  });
}

const observer = new IntersectionObserver(show, options);
const observer2 = new IntersectionObserver(bounce, options);

const hiddenName = document.querySelectorAll(".hidden");
const hiddenSectionTitles = document.querySelectorAll(".hidden-bounce");
hiddenName.forEach((el)=> observer.observe(el));
hiddenSectionTitles.forEach((el)=> observer2.observe(el));