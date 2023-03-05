const toggleButton = document.getElementById("toggleButton");
console.log(toggleButton);

const navbarLinks = document.getElementById("navbarLinks");
console.log(navbarLinks);

toggleButton.addEventListener("click", () => {
  navbarLinks.classList.toggle("active");
});
