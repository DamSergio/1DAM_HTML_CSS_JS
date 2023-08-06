/**
 * Funcion que devuelve una cadena introducida por el usuario
 * @returns String . cadena introducida por el usuario
 */
const pedirTeclado = () => prompt("Introducir aqui");
/**
 * Funcion que devuelve verdadero o falso si es un numero
 * @param {String} num . cadena que se va a comprobar que es un numero
 * @returns boolean . true si es un numero false si no
 */
const esNum = num =>{
    return !isNaN(num);
};
/**
 * Funcion que devuelve verdadero o falso si el numero es positivo o no
 * @param {number} num - numero a comparar
 * @returns boolean - verdadero si es positivo y falso si no
 */
const esPositivo = num =>{
    return num>=0;
}

