// Asegúrate de que el archivo 'hhh.js' se ha cargado antes de ejecutar este código.
// Función para agregar una fila a la tabla
import { series } from "./data.js";
function promedio() {
    var promedio = 0;
    var numPeliculas = 0;
    for (var _i = 0, series_2 = series; _i < series_2.length; _i++) {
        var serie = series_2[_i];
        numPeliculas++;
        promedio += serie.seasons;
    }
    promedio = promedio / numPeliculas;
    document.getElementById("promedioTexto").innerHTML = "El promedio de temporadas es: " + promedio;
}
promedio();
function showCard(serie) {
    var card = document.querySelector(".card"); // Selecciona un elemento con la clase "card"
    if (card) {
        // Modifica el contenido de la tarjeta
        var cardTitle = card.querySelector(".card-title");
        var cardText = card.querySelector(".card-text");
        if (cardTitle && cardText) {
            cardTitle.textContent = serie.name;
            cardText.textContent = serie.description;
        }
        var cardImage = card.querySelector(".card-img-top"); // Selecciona la imagen de la tarjeta
        if (cardImage) {
            cardImage.src = "images/" + serie.name + ".jpeg"; // Establece la fuente de la imagen
            cardImage.alt = serie.name;
        }
        var cardLink = card.querySelector(".stretched-link"); // Selecciona un enlace en la tarjeta
        if (cardLink) {
            cardLink.href = serie.website;
            cardLink.textContent = "Ir al sitio web";
        }
    }
}
// Función para agregar una fila a la tabla
function agregarFila(serie) {
    var tbody = document.querySelector("tbody");
    if (tbody) {
        var fila = document.createElement("tr");
        var idColumna = document.createElement("td");
        idColumna.textContent = serie.id.toString();
        var nombreColumna = document.createElement("td");
        nombreColumna.innerHTML = "<a class \"text-info\"  id=\"".concat(serie.name, "\" target=\"_blank\">").concat(serie.name, "</a>"); // Crea un enlace al nombre de la serie
        nombreColumna.addEventListener("click", function () { showCard(serie); }); // Añade un evento de clic para mostrar la tarjeta
        var canalColumna = document.createElement("td");
        canalColumna.textContent = serie.channel;
        var temporadasColumna = document.createElement("td");
        temporadasColumna.textContent = serie.seasons.toString();
        fila.appendChild(idColumna);
        fila.appendChild(nombreColumna);
        fila.appendChild(canalColumna);
        fila.appendChild(temporadasColumna);
        tbody.appendChild(fila);
    }
    else {
        console.error("Elemento 'tbody' no encontrado en el documento.");
    }
}
// Itera sobre la lista de series y agrega filas a la tabla
for (var _i = 0, series_1 = series; _i < series_1.length; _i++) {
    var serie = series_1[_i];
    agregarFila(serie);
}
