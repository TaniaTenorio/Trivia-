const getName = () => {
  content.classList.remove("desaparecer");
  content.innerHTML = "Hola " + nombreJugador.value + "! ¿Qué trivia jugarás hoy?"
};
const botonNombre = document.getElementById("botonNombre");
botonNombre.addEventListener("click", getName);
const nombreJugador = document.getElementById("playerName");
const content = document.getElementById("contenido");
