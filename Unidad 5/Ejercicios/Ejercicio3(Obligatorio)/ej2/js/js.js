/**
 * Pide una nota y la devuelve como numero entero
 * @returns {number} la nota del alumno
 */
const pedirNumero=()=> parseInt(prompt("Dime tu nota"));
/**
 * Funcion que compara la nota del alumno para decir esta aprobado o no
 * @param {number} nota . Nota del alumno que vamos a comprobar
 * @returns {string} nota equivalente del alumno
 */
const comprobarIf=nota=>{
    if (nota<3){
        return "Muy deficiente";
    }
    
    if (nota>2 && nota<5){
        return "Insuficiente";
    }
    
    if (nota==5){
        return "Suficiente";
    }
    
    if (nota==6){
        return "Bien";
    }
    
    if (nota>6 && nota<9){
        return "Notable";
    }
    
    if (nota>8){
        return "Sobresaliente";
    }
}
/**
 * Funcion que compara la nota del alumno para decir esta aprobado o no
 * @param {number} nota . Nota del alumno que vamos a comprobar
 * @returns {string} nota equivalente del alumno
 */
const comprobarSwitch=nota=>{
    switch(nota){
        case 0:
        case 1:
        case 2:
            return "Muy deficiente";
            break;
        case 3:
        case 4:
            return "Insuficiente";
            break;
        case 5:
            return "Suficiente";
            break;
        case 6:
            return "Bien";
            break;
        case 7:
        case 8:
            return "Notable";
            break;
        case 9:
        case 10:
            return "Sobresaliente";
            break;
    }
}
//pido la nota y la guardo en a variable nota
let nota=pedirNumero();
//muestro el resultado de nota
alert(comprobarIf(nota));
alert(comprobarSwitch(nota));
