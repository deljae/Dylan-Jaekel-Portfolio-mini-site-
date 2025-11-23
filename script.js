document.addEventListener("DOMContentLoaded",() => {
  const toggleBtn =
    document.getElementById("menuToggle");
  const navlinks =
  document.querySelector(".nav");
  
  toggleBtn.addEventListener("click", () => {
    navLinks.classList.toggle("show"); 
  });
});
