// Toggle the navbar visibility on small screens
const menuIcon = document.getElementById("menu-icon");
const navbar = document.getElementById("navbar");
const navbarLinks = navbar.querySelectorAll("a"); // Get all links in the navbar

menuIcon.addEventListener("click", () => {
  navbar.classList.toggle("show");
});

// Hide the navbar after clicking any link (mobile version)
navbarLinks.forEach((link) => {
  link.addEventListener("click", () => {
    navbar.classList.remove("show"); // Remove the "show" class to hide the navbar
  });
});
