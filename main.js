// ✅ Mostrar alerta i redirigir a la pàgina de donatius
function thankAndRedirect() {
  alert("Gràcies per voler donar suport a la recerca sobre el TLP ❤️");
  window.open("https://www.gofundme.com/f/recerca-sobre-el-tlp", "_blank");
}

// ✅ Activar menú responsive (toggle en mòbil)
document.addEventListener("DOMContentLoaded", () => {
  const menuToggle = document.getElementById("menu-toggle");
  const navLinks = document.querySelector(".nav-links");

  if (menuToggle && navLinks) {
    menuToggle.addEventListener("click", () => {
      navLinks.classList.toggle("active");
    });
  }
});

// ✅ IntersectionObserver per animacions de secció
const observer = new IntersectionObserver(
  (entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        observer.unobserve(entry.target); // Només un cop
      }
    });
  },
  { threshold: 0.3 }
);

// Aplica l'observador a les seccions amb la classe fade-in-section
document.querySelectorAll(".fade-in-section").forEach(section => {
  observer.observe(section);
});
