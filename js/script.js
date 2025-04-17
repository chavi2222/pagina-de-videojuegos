document.addEventListener("DOMContentLoaded", () => {
  console.log("Sitio de videojuegos cargado.");
});
// Validación simple del formulario de contacto
document.addEventListener("DOMContentLoaded", function () {
  const form = document.querySelector('form');
  form.addEventListener('submit', function (event) {
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    if (!name || !email || !message) {
      alert('Todos los campos son obligatorios.');
      event.preventDefault();
    } else {
      alert('¡Mensaje enviado con éxito!');
    }
  });
});

// Animaciones de hover en botones de redes sociales
const socialIcons = document.querySelectorAll('.social-icon');
socialIcons.forEach(icon => {
  icon.addEventListener('mouseover', function () {
    icon.style.transform = 'scale(1.1)';
  });
  icon.addEventListener('mouseout', function () {
    icon.style.transform = 'scale(1)';
  });
});
