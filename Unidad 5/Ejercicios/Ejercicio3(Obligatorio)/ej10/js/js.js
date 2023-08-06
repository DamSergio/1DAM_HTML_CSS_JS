/**
 * Funcion que te devuelve verdadero o falso si la fecha ees correta o no
 * @param {number} dia - dia
 * @param {number} mes - mes
 * @param {number} año - año
 * @returns boolean - verdadero si es correcta falso si no
 */
const fechaCorrecta = (dia, mes, año) =>{
    return dia<1|| mes<1 || mes>12 || año<1;
};

alert("Dime una fecha");

let dia=parseInt(prompt("Dime el dia"));
let mes=parseInt(prompt("Dime el mes (numero)"));
let año=parseInt(prompt("Dime el año"));

if (fechaCorrecta(dia, mes, año)){
    alert("Fecha incorrecta");
} else {
    let dias=[31,29,31,30,31,30,31,31,30,31,30,31];
    let meses=["enero", "febrero", "marzo", "abril", "mayo", "junio", "julio", "agosto", "septiembre", "octubre", "noviembre", "diciembre"];

    mes--;
    
    if (dia<=dias[mes]){
        alert(dia+" de "+meses[mes]+" de "+año);
    } else {
        alert("Fecha incorrecta");
    }
}