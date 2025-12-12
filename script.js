document.addEventListener("DOMContentLoaded", () => {
  const toggleBtn = document.getElementById("menuToggle");
  const navLinks = document.querySelector(".nav");
  
  toggleBtn.addEventListener("click", () => {
    navLinks.classList.toggle("show");
  });
});
