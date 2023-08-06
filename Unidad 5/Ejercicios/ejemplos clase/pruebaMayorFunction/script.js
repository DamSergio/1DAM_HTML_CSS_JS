/**
 * Funcion que devuelve el numero que es mayor de los que le has pasado.
 * Param "a". Primer numero a comparar.
 * Param "b". Segundo numero a comparar.
 * return numero. Devuelve numero mayor.
 */
function devolverMayor(a, b){
    if (a>b){
        return a;
    } else {
        return b;
    }
}

let n1=parseInt(prompt("Dime un numero"));
let n2=parseInt(prompt("Dime otro numero"));

alert("El numero mayor es: "+devolverMayor(n1, n2));