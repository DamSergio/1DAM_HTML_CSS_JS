//bucle que se repite 500 veces
for (let i=1; i<=500; i++){
    //compruebo que es multiplo de 4 y lo escribo
    if (i%4==0){
        document.writeln(i+"(Multiplo de 4)<br>");
    } else {
        //compruebo que es multiplo de 9 y lo escribo
        if (i%9==0){
            document.writeln(i+"(Multiplo de 9)<br>");
        } else {
            //si no es multiplo de ninguno simplemente escribo el numero
            document.writeln(i+"<br>");
        }
    }
    //si el multiplo de 5 escribo una linea (cada 5)
    if (i%5==0){
        document.writeln("--------------------------------------------<br>");
    }
}