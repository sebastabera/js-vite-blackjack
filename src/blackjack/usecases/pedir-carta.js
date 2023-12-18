/**
 * Esta funcion me permite tomar una carta
 * @param {Array<String>}  deck es un arreglo de string
 * @returns {String} retorna la carta del deck
 */
export const pedirCarta = (deck) => {
    if (!deck || deck.length === 0) {
      throw "No hay cartas en el deck";
    }

    // SHIFT() -> remueve el primer elemento de un arreglo y lo regresa
    // const carta = deck.shift();

    // POP() -> remueve el ultimo elemento del arreglo y lo regresa
    return deck.pop();
  };