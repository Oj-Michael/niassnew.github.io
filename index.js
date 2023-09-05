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
