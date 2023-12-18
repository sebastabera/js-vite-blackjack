import { pedirCarta, determinarGanador, acumularPuntos, crearCarta } from ".";

/**
 *
 * @param {Number} puntosMinimos
 * @param {Array<String>} deck
 * @param {Array<String>} puntosJugadores
 * @param {Array<String>} puntosHTML
 * @param {Array<String>} divCartasJugadores
 */
export const turnoComputadora = (
  puntosMinimos,
  deck,
  puntosJugadores,
  puntosHTML,
  divCartasJugadores
) => {
  if (!puntosMinimos) throw new Error("puntosMinimos son necesarios");

  let puntosComputadora = 0;
  do {
    const carta = pedirCarta(deck);
    puntosComputadora = acumularPuntos(
      carta,
      puntosJugadores.length - 1,
      puntosJugadores,
      puntosHTML
    );
    crearCarta(carta, puntosJugadores.length - 1, divCartasJugadores);
  } while (puntosMinimos <= 21 && puntosComputadora < puntosMinimos);

  determinarGanador(puntosJugadores);
};
