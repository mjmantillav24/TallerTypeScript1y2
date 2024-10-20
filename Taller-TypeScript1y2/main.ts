// Asegúrate de que el archivo 'hhh.js' se ha cargado antes de ejecutar este código.

// Función para agregar una fila a la tabla
import { series } from "./data.js";
import { Serie } from "./Serie.js";


function promedio() {
    let promedio = 0;
    let numPeliculas = 0;
    for (const serie of series) {
        numPeliculas++;
        promedio += serie.seasons;
    }
    promedio = promedio / numPeliculas;
    document.getElementById("promedioTexto")!.innerHTML = "El promedio de temporadas es: " + promedio;
}

promedio();

function showCard(serie: Serie,) {
    const card = document.querySelector(".card");// Selecciona un elemento con la clase "card"

    if (card) {
        // Modifica el contenido de la tarjeta
        const cardTitle = card.querySelector(".card-title");
        const cardText = card.querySelector(".card-text");

        if (cardTitle && cardText) {
            cardTitle.textContent = serie.name;
            cardText.textContent = serie.description;
        }


        const cardImage = card.querySelector(".card-img-top") as HTMLImageElement;// Selecciona la imagen de la tarjeta

        if (cardImage) {
            cardImage.src = "images/" + serie.name + ".jpeg";// Establece la fuente de la imagen
            cardImage.alt = serie.name;
        }
        const cardLink = card.querySelector(".stretched-link") as HTMLAnchorElement;// Selecciona un enlace en la tarjeta

        if (cardLink) {
            cardLink.href = serie.website;
            cardLink.textContent = "Ir al sitio web";
        }
    }
}
// Función para agregar una fila a la tabla
function agregarFila(serie: Serie) {
    const tbody = document.querySelector("tbody");

    if (tbody) {
        const fila = document.createElement("tr");

        const idColumna = document.createElement("td");
        idColumna.textContent = serie.id.toString();

        const nombreColumna = document.createElement("td");
        nombreColumna.innerHTML = `<a class "text-info"  id="${serie.name}" target="_blank">${serie.name}</a>`;// Crea un enlace al nombre de la serie
        nombreColumna.addEventListener("click", () => { showCard(serie); });// Añade un evento de clic para mostrar la tarjeta

        const canalColumna = document.createElement("td");
        canalColumna.textContent = serie.channel;

        const temporadasColumna = document.createElement("td");
        temporadasColumna.textContent = serie.seasons.toString();

        fila.appendChild(idColumna);
        fila.appendChild(nombreColumna);
        fila.appendChild(canalColumna);
        fila.appendChild(temporadasColumna);

        tbody.appendChild(fila);
    } else {
        console.error("Elemento 'tbody' no encontrado en el documento.");
    }
}

// Itera sobre la lista de series y agrega filas a la tabla
for (const serie of series) {
    agregarFila(serie);
}