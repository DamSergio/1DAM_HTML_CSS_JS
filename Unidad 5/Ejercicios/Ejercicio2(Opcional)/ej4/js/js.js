alert("Dime una fecha");

let dia=parseInt(prompt("Dime el dia"));
let mes=parseInt(prompt("Dime el mes (numero)"));
let año=parseInt(prompt("Dime el año"));

if (dia<1|| mes<1 || mes>12 || año<1 ){
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