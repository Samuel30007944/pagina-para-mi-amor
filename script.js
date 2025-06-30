// Elementos HTML
const cartaCerrada = document.getElementById('cartaCerrada');
const cartaAbierta = document.getElementById('cartaAbierta');
const textoCarta = document.getElementById('textoCarta');
const musica = document.getElementById('musica');

// Texto dividido por partes (párrafos)
const mensajes = [
  `Mi amor,

Aunque nos separan kilómetros y el tiempo a veces parece jugar en nuestra contra, quiero que sepas que no hay distancia suficiente para disminuir lo que siento por ti. Al contrario, cada día que pasa lejos de ti mi corazón se fortalece y mi amor crece más profundo, más verdadero, porque amarte a la distancia me ha enseñado el valor real de lo que significa estar unidos de alma, aunque el cuerpo no pueda estar siempre cerca.

Las noches son más largas sin poder abrazarte, y los días se sienten incompletos sin tu sonrisa al alcance, pero en cada amanecer recuerdo que te tengo en mi mente y en mi corazón, y eso me da fuerzas para seguir adelante. Eres la razón por la que sonrío sin razón, la esperanza que me impulsa a soñar con el momento en que al fin podamos estar juntos sin barreras ni fronteras.`,

  `A veces cierro los ojos y te imagino a mi lado, siento tu voz susurrando palabras de cariño que me llenan de paz, y es ahí cuando entiendo que el amor verdadero no entiende de distancias, porque trasciende todo lo físico. Te amo con una intensidad que rompe los límites del espacio, y sé que cada sacrificio vale la pena porque tú eres mi destino, mi refugio y mi mayor alegría.`,

  `Cada mensaje, cada llamada, cada instante compartido aunque sea a través de una pantalla, es un tesoro que guardo con cuidado en mi alma. Nos estamos construyendo con paciencia, confianza y mucho amor, y eso me hace creer en un futuro donde la distancia será solo un recuerdo lejano, y lo que quedará será la realidad hermosa de estar juntos.`,

  `Gracias por tu amor, por tu comprensión, por la fuerza que me transmites incluso cuando no estás físicamente cerca. Eres mi compañera de vida, la persona que me completa y que me impulsa a ser mejor cada día. No importa cuánto falte para poder abrazarte de verdad, porque en mi corazón ya te tengo aquí, latiendo conmigo en cada segundo.

Te amo, mi amor, con la certeza de que pronto llegaremos al día en que las distancias desaparecerán y solo quedará nuestro amor, puro, inmenso y eterno.

Con todo mi corazón,
Sami 💖`
];

// Función para animar letra por letra cada parte
function mostrarPaginasTexto(paginas, elemento, velocidad, callbackFinal) {
  let paginaActual = 0;

  function mostrarPagina() {
    elemento.textContent = '';
    elemento.style.opacity = 1;
    let i = 0;
    const texto = paginas[paginaActual];
    const intervalo = setInterval(() => {
      elemento.textContent += texto[i];
      i++;
      if (i >= texto.length) {
        clearInterval(intervalo);
        setTimeout(() => {
          elemento.style.opacity = 0;
          setTimeout(() => {
            paginaActual++;
            if (paginaActual < paginas.length) {
              mostrarPagina();
            } else {
              if (callbackFinal) callbackFinal();
            }
          }, 700); // transición entre páginas
        }, 5000); // tiempo de lectura por página
      }
    }, velocidad);
  }

  mostrarPagina();
}

// Función para iniciar el slideshow de fotos
function mostrarSlideshow() {
  const slideshow = document.getElementById('slideshow');
  const slides = document.querySelectorAll('.slide');
  let current = 0;

  // Ocultar carta
  cartaAbierta.style.opacity = 0;
  setTimeout(() => {
    cartaAbierta.classList.add('oculto');
    slideshow.classList.remove('oculto');
  }, 1000);

  // Mostrar las fotos en bucle
  setInterval(() => {
    slides[current].classList.add('oculto');
    current = (current + 1) % slides.length;
    slides[current].classList.remove('oculto');
  }, 7000); // cambia cada 7 segundos
}

// Al hacer clic en la carta cerrada
cartaCerrada.addEventListener('click', () => {
  cartaCerrada.classList.add('oculto');
  cartaAbierta.classList.remove('oculto');
  textoCarta.style.opacity = 1;
  musica.play();
  mostrarPaginasTexto(mensajes, textoCarta, 65, mostrarSlideshow);
});
