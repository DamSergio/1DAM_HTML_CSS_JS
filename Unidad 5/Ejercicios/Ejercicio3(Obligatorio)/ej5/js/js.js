/**
 * Funcion que junta 2 cadenas
 * @param {String} cad1 . primera cadena a contatenar
 * @param {String} cad2 . segunda cadena a contatenar
 * @returns String . cadena resultante de juntar las 2 anteriores
 */
const contatenarCadenas=(cad1, cad2)=>{
    return cad1+cad2;
}
/**
 * Funcion que hace una cadena del tamaño de i y esa cadena es el numero i
 * @param {Number} i . numero de veces que se va a repetir el bucle
 * @returns String . cadena que devuelve el bucle
 */
const bucle=i=>{
    let cadena="";
    for (let j=1; j<=i; j++){
        cadena=contatenarCadenas(cadena, i);
    }
    return cadena;
}
/**
 * Funcion que impirme una cadena en el documento
 * @param {String} cad . cadena a impirmir
 * @returns String . imprime la cadena en el documento
 */
const imprimir=cad=> document.write(cad+"<br>");

//declaro la cadena
let cad;

//hago un bucle que vaya de 1 a 30
for (let i=1; i<=30; i++){
    cad=bucle(i);
    imprimir(cad);
}