const menuBtn = document.getElementById("menu-btn");
const navLinks = document.getElementById("nav-links");
const menuBtnIcon = menuBtn.querySelector("i");

menuBtn.addEventListener("click", (e) => {
  navLinks.classList.toggle("open");

  const isOpen = navLinks.classList.contains("open");
  menuBtnIcon.setAttribute("class", isOpen ? "ri-close-line" : "ri-menu-line");
});

navLinks.addEventListener("click", (e) => {
  navLinks.classList.remove("open");
  menuBtnIcon.setAttribute("class", "ri-menu-line");
});

const scrollRevealOption = {
  distance: "50px",
  origin: "bottom",
  duration: 1000,
  // Añadido para evitar animaciones en dispositivos móviles
  mobile: false,
};

// Animaciones para la cabecera
ScrollReveal().reveal(".header__container h1", {
  ...scrollRevealOption,
});
ScrollReveal().reveal(".header__container p", {
  ...scrollRevealOption,
  delay: 500,
});
ScrollReveal().reveal(".header__container form", {
  ...scrollRevealOption,
  delay: 1000,
});
ScrollReveal().reveal(".treatment-grid", {
  ...scrollRevealOption,
  delay: 1000,
});

// Animaciones para beneficios
ScrollReveal().reveal("#benefits h2", {
  ...scrollRevealOption,
});
ScrollReveal().reveal(".benefits-grid", {
  ...scrollRevealOption,
  delay: 500,
});
ScrollReveal().reveal(".benefits-grid h3", {
  ...scrollRevealOption,
  delay: 1000,
});
ScrollReveal().reveal(".benefits-grid p", {
  ...scrollRevealOption,
  delay: 1500,
});

// Animaciones para la sección "About"
ScrollReveal().reveal(".intro__card", {
  ...scrollRevealOption,
  interval: 500,
});
ScrollReveal().reveal(
  ".about__row:nth-child(3) .about__image img, .about__row:nth-child(5) .about__image img",
  {
    ...scrollRevealOption,
    origin: "left",
  }
);
ScrollReveal().reveal(".about__row:nth-child(4) .about__image img", {
  ...scrollRevealOption,
  origin: "right",
});
ScrollReveal().reveal(".about__content span", {
  ...scrollRevealOption,
  delay: 500,
});
ScrollReveal().reveal(".about__content h4", {
  ...scrollRevealOption,
  delay: 1000,
});
ScrollReveal().reveal(".about__content p", {
  ...scrollRevealOption,
  delay: 1200,
});

// Animaciones para productos y servicios
ScrollReveal().reveal(".product__card", {
  ...scrollRevealOption,
  interval: 500,
});
ScrollReveal().reveal(".service__card", {
  duration: 1000,
  interval: 500,
});

// Inicialización de Swiper
if (document.querySelector(".swiper")) {
  const swiper = new Swiper(".swiper", {
    slidesPerView: 3,
    spaceBetween: 20,
    loop: true,
  });
}

// Animaciones para Instagram y secciones
ScrollReveal().reveal(".instagram__grid img", {
  duration: 1000,
  interval: 500,
});
ScrollReveal().reveal(".section__container h2", {
  ...scrollRevealOption,
  delay: 500,
});
ScrollReveal().reveal(".service-item", {
  ...scrollRevealOption,
  delay: 1000,
});
ScrollReveal().reveal(".service-content", {
  ...scrollRevealOption,
  delay: 1500,
});

// FAQ ------------------------------------------------------
document.addEventListener("DOMContentLoaded", function () {
  var collapsibles = document.querySelectorAll(".collapsible");

  collapsibles.forEach((button) => {
    button.addEventListener("click", function () {
      var content = this.nextElementSibling;
      var isExpanded = this.getAttribute("aria-expanded") === "true";

      // Cerrar todas las respuestas
      collapsibles.forEach((btn) => {
        if (btn !== this) {
          btn.setAttribute("aria-expanded", "false");
          btn.nextElementSibling.style.maxHeight = null;
          btn.classList.remove("active");
          btn.querySelector(".icon").textContent = "+"; // Restablecer el ícono
        }
      });

      // Alternar la respuesta actual
      this.setAttribute("aria-expanded", !isExpanded);
      content.style.maxHeight = isExpanded ? "0" : content.scrollHeight + "px";
      this.classList.toggle("active", !isExpanded);
      this.querySelector(".icon").textContent = isExpanded ? "+" : "-"; // Alternar ícono
    });
  });
});

// testimonios

// const next = document.getElementById("next");
// const prev = document.getElementById("prev");
// const clientCards = Array.from(document.querySelectorAll(".client__card"));

// next.addEventListener("click", (e) => {
//   for (let index = 0; index < clientCards.length; index++) {
//     if (clientCards[index].classList.contains("active")) {
//       const nextIndex = (index + 1) % clientCards.length;
//       clientCards[index].classList.remove("active");
//       clientCards[nextIndex].classList.add("active");
//       break;
//     }
//   }
// });

// prev.addEventListener("click", (e) => {
//   for (let index = 0; index < clientCards.length; index++) {
//     if (clientCards[index].classList.contains("active")) {
//       const prevIndex = (index ? index : clientCards.length) - 1;
//       clientCards[index].classList.remove("active");
//       clientCards[prevIndex].classList.add("active");
//       break;
//     }
//   }
// });

function sendWhatsApp(event) {
  // Prevenir el envío del formulario
  event.preventDefault();

  const name = document.getElementById("name").value.trim();
  const lastname = document.getElementById("lastname").value.trim();
  const message = document.getElementById("message").value.trim();

  // Verificar si los campos están vacíos
  if (name === "" || lastname === "" || message === "") {
    Swal.fire({
      icon: "warning",
      title: "¡Faltan datos!",
      text: "Por favor, completá todos los campos antes de enviar el mensaje.",
    });
    return;
  }

  // Configurar el mensaje
  const whatsappNumber = "5491150377127";
  const whatsappMessage = `Hola, soy ${name} ${lastname}. ${message}`;
  const whatsappUrl = `whatsapp://send?phone=${whatsappNumber}&text=${encodeURIComponent(
    whatsappMessage
  )}`;

  // Redirigir a WhatsApp
  window.location.href = whatsappUrl;

  // Mostrar alerta de éxito
  Swal.fire({
    icon: "success",
    title: "¡Mensaje listo!",
    text: "Serás redirigido a WhatsApp en breve.",
    timer: 2000,
    timerProgressBar: true,
    showConfirmButton: false,
    allowOutsideClick: false,
  });
}

// Boton flotante
window.addEventListener("scroll", function () {
  var btnScrollTop = document.getElementById("btnScrollTop");
  // Cambia el valor de scrollTop para que el botón aparezca antes
  if (
    document.body.scrollTop > 20 ||
    document.documentElement.scrollTop > 1000
  ) {
    btnScrollTop.style.display = "block"; // Muestra el botón
  } else {
    btnScrollTop.style.display = "none"; // Oculta el botón
  }
});

btnScrollTop.addEventListener("click", function (e) {
  e.preventDefault(); // Evita el comportamiento predeterminado del enlace
  document.querySelector("#home").scrollIntoView({ behavior: "smooth" }); // Desplazamiento suave
});

document.getElementById("btnScrollTop").addEventListener("click", function () {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
});

// boton para reservar
function scrollToContact() {
  const contactSection = document.getElementById("contact");
  if (contactSection) {
    contactSection.scrollIntoView({ behavior: "smooth" }); // Desplazamiento suave
  }
}

//testimonios
let currentSlide = 0;
const slides = document.querySelectorAll(".testimonio-item");
const totalSlides = slides.length;
const carousel = document.querySelector(".testimonios-carousel");
let autoSlideInterval;

// Función para mover el carrusel
function moveSlide(direction) {
  currentSlide = (currentSlide + direction + totalSlides) % totalSlides;
  carousel.style.transform = `translateX(-${currentSlide * 100}%)`;
  resetAutoSlide(); // Reiniciar el desplazamiento automático
}

// Función para iniciar el desplazamiento automático
function startAutoSlide() {
  autoSlideInterval = setInterval(() => moveSlide(1), 6000);
}

// Función para reiniciar el desplazamiento automático
function resetAutoSlide() {
  clearInterval(autoSlideInterval);
  startAutoSlide();
}

// Iniciar el desplazamiento automático al cargar la página
document.addEventListener("DOMContentLoaded", startAutoSlide);
