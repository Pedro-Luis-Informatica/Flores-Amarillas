// Sincronizar las letras con la canción
var audio = document.querySelector("audio");
var lyrics = document.querySelector("#lyrics");

// Array de objetos que contiene cada línea y su tiempo de aparición en segundos
var lyricsData = [
  {
    text: "Amar no es mirarse el uno al otro, es mirar juntos en la misma dirección.",
    time: 15,
  },
  {
    text: "El amor es tan importante como la comida. Pero no alimenta.",
    time: 18,
  },
  {
    text: "Uno está enamorado cuando se da cuenta de que otra persona es única.",
    time: 27,
  },
  {
    text: "Te amo no por quien eres, sino por quien soy cuando estoy contigo.",
    time: 32,
  },
  {
    text: "Amar es encontrar en la felicidad de otro tu propia felicidad.",
    time: 33,
  },
  { text: "El amor es la poesía de los sentidos.", time: 41 },
  {
    text: "No ser amado es una simple desventura. La verdadera desgracia es no saber amar.",
    time: 47,
  },
  {
    text: "El amor es invisible y entra y sale por donde quiere, sin que nadie le pida cuenta de sus hechos.",
    time: 54,
  },
  { text: "En un beso, sabrás todo lo que he callado.", time: 59 },
  {
    text: "El amor no se mira, se siente, y aún más cuando ella está junto a ti.",
    time: 67,
  },
  { text: "La medida del amor es amar sin medida.", time: 72 },
  {
    text: "El amor no necesita ser entendido, solo necesita ser demostrado.",
    time: 78,
  },
  {
    text: "Amar es entregarse por completo, sin esperar nada a cambio.",
    time: 83,
  },
  {
    text: "Eres la historia más bonita que el destino escribió en mi vida.",
    time: 91,
  },
  { text: "Quien ama sufre, quien sufre lucha, quien lucha vence.", time: 97 },
  {
    text: "Te quiero no por cómo eres, sino por cómo soy yo cuando estoy contigo.",
    time: 104,
  },
  {
    text: "Si nada nos salva de la muerte, al menos que el amor nos salve de la vida.",
    time: 108,
  },
  { text: "Donde hay amor, hay vida.", time: 144 },
  {
    text: "El amor es el único tesoro que no se saca con pico y pala.",
    time: 148,
  },
  {
    text: "El amor es el ala veloz que Dios ha dado al alma para que vuele hasta el cielo.",
    time: 153,
  },
  { text: "Solo el amor puede salvar al mundo.", time: 158 },
  { text: "El amor es una flor que tienes que dejar crecer.", time: 164 },
  { text: "Amar es percibir un tú y vibrar en un nosotros.", time: 169 },
  {
    text: "El verdadero amor no es otra cosa que el deseo inevitable de ayudar al otro para que sea quien es.",
    time: 176,
  },
  {
    text: "No hay medicina que cure lo que no cura la felicidad del amor.",
    time: 183,
  },
  {
    text: "El amor todo lo puede, todo lo cree, todo lo espera, todo lo soporta.",
    time: 188,
  },
  { text: "Amar es vivir en el corazón del otro.", time: 140 },
];

// Animar las letras
function updateLyrics() {
  var time = Math.floor(audio.currentTime);
  var currentLine = lyricsData.find(
    (line) => time >= line.time && time < line.time + 6
  );

  if (currentLine) {
    // Calcula la opacidad basada en el tiempo en la línea actual
    var fadeInDuration = 0.1; // Duración del efecto de aparición en segundos
    var opacity = Math.min(1, (time - currentLine.time) / fadeInDuration);

    // Aplica el efecto de aparición
    lyrics.style.opacity = opacity;
    lyrics.innerHTML = currentLine.text;
  } else {
    // Restablece la opacidad y el contenido si no hay una línea actual
    lyrics.style.opacity = 0;
    lyrics.innerHTML = "";
  }
}

setInterval(updateLyrics, 1000);

//funcion titulo
// Función para ocultar el título después de 216 segundos
function ocultarTitulo() {
  var titulo = document.querySelector(".titulo");
  titulo.style.animation =
    "fadeOut 3s ease-in-out forwards"; /* Duración y función de temporización de la desaparición */
  setTimeout(function () {
    titulo.style.display = "none";
  }, 3000); // Espera 3 segundos antes de ocultar completamente
}

// Llama a la función después de 216 segundos (216,000 milisegundos)
setTimeout(ocultarTitulo, 216000);
