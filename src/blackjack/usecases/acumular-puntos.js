import { valorCarta } from "./valor-carta";

/**
 * Turno: 0 = primer jugador y el ultimo sera la computadora
 * @param {String} carta 
 * @param {Number} turno 
 * @param {Array<String>} puntosJugadores 
 * @param {Array<String>} puntosHTML 
 * @returns 
 */
export const acumularPuntos = (carta, turno, puntosJugadores, puntosHTML) => {
  puntosJugadores[turno] = puntosJugadores[turno] + valorCarta(carta);
  puntosHTML[turno].innerText = puntosJugadores[turno];
  return puntosJugadores[turno];
};
