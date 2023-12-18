import _ from 'underscore';


/**
 * Esta funcion crea una nueva baraja
 * @param {Array<String>} tiposDeCarta ejemplo: ["C", "D", "H", "S"]
 * @param {Array<String>} tiposEspeciales ejemplo: ["A", "J", "Q", "K"];
 * @returns {Array<String>} regresa un nuevo deck de cartas
 */
export const crearDeck = (tiposDeCarta, tiposEspeciales) => {

    if (!tiposDeCarta || tiposDeCarta.length === 0) throw new Error('tiposDeCarta es obligatorio como un arreglo de string');

    if (!tiposEspeciales ||tiposEspeciales.length === 0) throw new Error('tiposEspeciales es obligatorio como un arreglo de string')

    let deck = [];

    for(let i = 2; i <= 10; i++){
        for(let tipo of tiposDeCarta){
            deck.push(i + tipo);
        }
    }

    for(let tipo of tiposDeCarta){
        for(let esp of tiposEspeciales){
            deck.push(esp + tipo);
        }
    }

    return _.shuffle(deck);

}

//export default crearDeck;