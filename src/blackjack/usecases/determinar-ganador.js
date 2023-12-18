/**
 * Determina, calcula, cual es el jugador ganador
 * @param {Array<String>} puntosJugadores 
 */
export const determinarGanador = (puntosJugadores) => {
  const [puntosMinimos, puntosComputadora] = puntosJugadores;
  setTimeout(() => {
    if (puntosMinimos > 21) {
      if (puntosComputadora <= 21) {
        alert("Computadora gana");
      } else {
        alert("Nadie gana");
      }
    } else if (puntosComputadora > 21) {
      alert("Ganaste!!!!!");
    } else if (puntosComputadora > puntosMinimos) {
      alert("Computadora gana");
    } else if (puntosComputadora == puntosMinimos) {
      alert("Nadie gana");
    } else {
      alert("Ganaste!!!!!");
    }
  }, 500);
};
