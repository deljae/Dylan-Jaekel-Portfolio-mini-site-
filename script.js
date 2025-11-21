document.addEventListener("DOMContentLoader",() => {
  const toggleBtn =
    document.getEleementById("menuToggle");
  document.querySelector(".nav");
  
  toggleBtn.addEventListener("click", () => {
    NavLinks.classList.toggle("show"); 
  });
});
