const slides = document.querySelectorAll('.carousel-slide');
let currentIndex = 0;

function showSlide(index) {
    slides.forEach((slide, i) => {
        slide.style.transform = `translateX(${100 * (i - index)}%)`;
    });
}

// Función para ir a la diapositiva anterior
function prevSlide() {
    currentIndex = Math.max(currentIndex - 1, 0);
    showSlide(currentIndex);
}

// Función para ir a la siguiente diapositiva
function nextSlide() {
    currentIndex = Math.min(currentIndex + 1, slides.length - 1);
    showSlide(currentIndex);
}

// Event listeners para los botones de navegación
document.querySelector('.prev').addEventListener('click', prevSlide);
document.querySelector('.next').addEventListener('click', nextSlide);

// Mostrar la primera diapositiva al cargar la página
showSlide(currentIndex);
function showSlide(index) {
    console.log('Mostrando diapositiva ' + index);
    slides.forEach((slide, i) => {
        slide.style.transform = `translateX(${100 * (i - index)}%)`;
    });
}