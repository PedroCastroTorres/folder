//fondo
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

//deslizar desde menu
  function scrollToSection(event, sectionId) {
    event.preventDefault();
    const section = document.getElementById(sectionId);
    if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
    }
}

// Función para mostrar la ventana
  function mostrarPopup() {
    document.getElementById('popup').style.display = 'block';
    document.getElementById('popup-background').style.display = 'block';
}

    // Función para ocultar la ventana
  function ocultarPopup() {
    document.getElementById('popup').style.display = 'none';
    document.getElementById('popup-background').style.display = 'none';
}

    // Mostrar cuando la página cargue
    window.onload = function() {
      mostrarPopup();
};
