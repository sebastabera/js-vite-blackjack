/**
 * Se envia una carta y retorna el valor de dicha carta para su conteo
 * @param {String} carta 
 * @returns {Number} el valor de la carta para su conteo
 */
export const valorCarta = (carta) => {
  const valor = carta.substring(0, carta.length - 1);
  return isNaN(valor) ? (valor === "A" ? 11 : 10) : valor * 1;
};
