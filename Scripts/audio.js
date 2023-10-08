// Se obtiene el elemento de audio por su id
let miAudio = document.getElementById("miAudio");

// Establece el volumen inicial (por ejemplo, 0.1 para el 10% del volumen)
miAudio.volume = 0.1;

//Los elementos del html para trabajarlos con JS
const audioElement = document.getElementById("miAudio");
const sourceElement = document.getElementById("misAudios");
const temaAnteriorButton = document.getElementById("temaAnterior");
const temaSiguienteButton = document.getElementById("temaSiguiente");

// Lista de temas
const temas = [
    "audio/Everlasting.mp3",
    "audio/Branches Bones.mp3",
    
    // Se pueden agregar mas tal como estan esos dos
];

let indiceTemaActual = 0;

// Función para cargar y reproducir el tema actual
function cargarTemaActual() {
    sourceElement.src = temas[indiceTemaActual];
    audioElement.load();
    audioElement.play();
}

// Manejar clic en botón de tema anterior
temaAnteriorButton.addEventListener("click", function() {
    indiceTemaActual = (indiceTemaActual - 1 + temas.length) % temas.length;
    cargarTemaActual();
});

// Manejar clic en botón de tema siguiente
temaSiguienteButton.addEventListener("click", function() {
    indiceTemaActual = (indiceTemaActual + 1) % temas.length;
    cargarTemaActual();
});

// Cargar el primer tema al cargar la página
cargarTemaActual();