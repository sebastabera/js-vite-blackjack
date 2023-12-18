import _ from "underscore"; //se esta renombrando todo el paquete de underscore a _
import {
  crearNuevoDeck,
  pedirCarta,
  turnoComputadora,
  crearCarta,
  acumularPuntos,
} from "./usecases";

const miModulo = (() => {
  "use strict";

  /**
   * 2C = Two of Clubs (Tréboles)
   * 2D = Two of Diamonds (Diamantes)
   * 2H = Two of Hearts (Corazones)
   * 2S = Two of Spades (Espadas)
   */

  let deck = [];
  const tipos = ["C", "D", "H", "S"],
    especiales = ["A", "J", "Q", "K"];

  let puntosJugadores = [];

  // Referencias
  const btnPedir = document.querySelector("#btnPedir"),
    btnDetener = document.querySelector("#btnDetener"),
    btnNuevo = document.querySelector("#btnNuevo");

  const divCartasJugadores = document.querySelectorAll(".divCartas"),
    puntosHTML = document.querySelectorAll("small");

  const inicializarJuego = (numJugadores = 2) => {
    deck = crearNuevoDeck(tipos, especiales);
    puntosJugadores = [];
    for (let i = 0; i < numJugadores; i++) {
      puntosJugadores.push(0);
    }

    puntosHTML.forEach((eleme) => (eleme.innerText = 0));
    divCartasJugadores.forEach((elem) => (elem.innerHTML = ""));

    btnPedir.disabled = false;
    btnDetener.disabled = false;
  };

  // Eventos
  btnPedir.addEventListener("click", () => {
    const carta = pedirCarta(deck);
    const puntosJugador = acumularPuntos(carta, 0, puntosJugadores, puntosHTML);

    crearCarta(carta, 0, divCartasJugadores);

    if (puntosJugador > 21) {
      btnPedir.disabled = true;
      btnDetener.disabled = true;
      turnoComputadora(puntosJugador, deck, puntosJugadores, puntosHTML, divCartasJugadores);
    } else if (puntosJugador == 21) {
      btnPedir.disabled = true;
      btnDetener.disabled = true;
      turnoComputadora(puntosJugador, deck, puntosJugadores, puntosHTML, divCartasJugadores);
    }
  });

  btnDetener.addEventListener("click", () => {
    btnPedir.disabled = true;
    btnDetener.disabled = true;
    turnoComputadora(puntosJugadores[0], deck, puntosJugadores, puntosHTML, divCartasJugadores);
  });

  btnNuevo.addEventListener("click", () => {
    inicializarJuego();
  });

  return {
    nuevoJuego: inicializarJuego,
  };
})();
