//declaro la variable cad
let cad;

//bucle que se repite 30 veces
for (let i=1; i<=30; i++){
    //reseteo "cad" a una cadena vacia
    cad="";
    //bucle que se repite i veces
    for (let j=1; j<=i; j++){
        cad+=i;
    }
    //escribo "cad" en la pagina
    document.writeln(cad+"<br>");
}