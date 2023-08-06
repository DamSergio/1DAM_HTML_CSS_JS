var valores=[true, 5, false, "hola", "adios", 2];
let max=0;
let cadMax;

for (let i of valores){
    if (typeof i == "string"){
        if (i.length>max){
            cadMax=i;
            max=i.length;
        }
    }
}

alert("La cadena mas larga es: "+cadMax);

if (valores[0]){
    alert("verdadero");
}

if (!valores[2]){
    alert("Falso");
}

alert(valores[1]+valores[5]);
alert(valores[1]-valores[5]);
alert(valores[1]*valores[5]);
alert(valores[1]/valores[5]);
alert(valores[1]%valores[5]);