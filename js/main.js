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
};

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

// beneficios
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

ScrollReveal().reveal(".product__card", {
  ...scrollRevealOption,
  interval: 500,
});

ScrollReveal().reveal(".service__card", {
  duration: 1000,
  interval: 500,
});

const swiper = new Swiper(".swiper", {
  slidesPerView: 3,
  spaceBetween: 20,
  loop: true,
});

ScrollReveal().reveal(".instagram__grid img", {
  duration: 1000,
  interval: 500,
});

ScrollReveal().reveal(".section__container h2", {
  ...scrollRevealOption,
  delay: 500,
});

ScrollReveal().reveal(".service-item ", {
  ...scrollRevealOption,
  delay: 1000,
});

ScrollReveal().reveal(".service-content", {
  ...scrollRevealOption,
  delay: 1500,
});

// FAQ ------------------------------------------------------
var collapsibles = document.querySelectorAll(".collapsible");

collapsibles.forEach((button) => {
  button.addEventListener("click", function () {
    this.classList.toggle("active");
    var content = this.nextElementSibling;

    if (content.style.maxHeight) {
      content.style.maxHeight = null;
    } else {
      content.style.maxHeight = content.scrollHeight + "px";
    }
  });
});

// testimonios

const next = document.getElementById("next");
const prev = document.getElementById("prev");
const clientCards = Array.from(document.querySelectorAll(".client__card"));

next.addEventListener("click", (e) => {
  for (let index = 0; index < clientCards.length; index++) {
    if (clientCards[index].classList.contains("active")) {
      const nextIndex = (index + 1) % clientCards.length;
      clientCards[index].classList.remove("active");
      clientCards[nextIndex].classList.add("active");
      break;
    }
  }
});

prev.addEventListener("click", (e) => {
  for (let index = 0; index < clientCards.length; index++) {
    if (clientCards[index].classList.contains("active")) {
      const prevIndex = (index ? index : clientCards.length) - 1;
      clientCards[index].classList.remove("active");
      clientCards[prevIndex].classList.add("active");
      break;
    }
  }
});

// formulario de contacto
function sendWhatsApp() {
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
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
    whatsappMessage
  )}`;

  // Mostrar alerta de éxito
  Swal.fire({
    icon: "success",
    title: "¡Mensaje listo!",
    text: "Serás redirigido a WhatsApp en breve.",
    timer: 2000, // Tiempo de la alerta
    timerProgressBar: true, // Barra de progreso
    showConfirmButton: false, // No mostrar botón de confirmación
    allowOutsideClick: false,
  });

  // Verificar si el dispositivo es móvil
  const isMobile = /Mobi|Android/i.test(navigator.userAgent);

  // Redirigir o abrir en nueva ventana dependiendo del dispositivo
  setTimeout(() => {
    if (isMobile) {
      // En móviles, redirigimos directamente
      window.location.href = whatsappUrl;
    } else {
      // En computadoras, abrimos en una nueva ventana
      window.open(whatsappUrl, "_blank");
    }
  }, 2000);
}

// Boton flotante
window.addEventListener("scroll", function () {
  var btnScrollTop = document.getElementById("btnScrollTop");
  if (
    document.body.scrollTop > 20 ||
    document.documentElement.scrollTop > 1200
  ) {
    btnScrollTop.style.display = "block";
  } else {
    btnScrollTop.style.display = "none";
  }
});

document.getElementById("btnScrollTop").addEventListener("click", function () {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
});
