document.addEventListener("DOMContentLoaded", () => {
  const toggleBtn = document.getElementById("menuToggle");
  const navLinks = document.querySelector(".nav");
  
  toggleBtn.addEventListener("click", () => {
    navLinks.classList.toggle("show");
  });
});
const grid= document.querySelector(".photo-grid"); 
const images = Array.from(grid.children); 

for(let i= images.length - 1; i > 0; i--) 
{
  const j = Math.floor(Math.random() * (i + 1)); 
  [images[i], images[j]] = images[j], images[i]]; 
}
images.forEach(img => grid appendChild(img)); 

const lightbox= document.getElementById("lightbox");

Images.forEach(img => {
  img.addEventListener("click", () => {
    lightbox.style.display= "flex"; 
    lightbox.innerHTML= <img
    src="${img.src}" alt="">;
  });
});
lightbox.addEventListener("click", () => {
  lightbox.style.display= "none"; 
});
});
