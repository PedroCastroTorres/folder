/*fondo*/
document.addEventListener("DOMContentLoaded", function () {
    createStars();
  });
  
  function createStars() {
    const starsContainer = document.getElementById("stars");
  
    for (let i = 0; i < 600; i++) {
      const star = document.createElement("div");
      star.className = "star";
      star.style.left = `${Math.random() * 100}%`;
      star.style.top = `${Math.random() * 100}%`;
      starsContainer.appendChild(star);
    }
  }