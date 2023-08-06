var letras = new Array('T', 'R', 'W', 'A', 'G', 'M', 'Y', 'F', 'P', 'D', 'X', 'B', 'N', 'J', 'Z', 'S', 'Q', 'V', 'H', 'L', 'C', 'K', 'E', 'T');

let dni=prompt("Dime tu DNI");

let n=parseInt(dni.substring(0, dni.length-1)); 
let letra=dni.charAt(dni.length-1);

if(n<0 || n>99999999){
    alert("Dni no valido");
} else {
    if (letra == letras[n%23]){
        alert("Dni correcto");
    } else {
        alert("Letra del dni incorrecta");
    }
}

if(n<0 || n>99999999){
    console.log("Dni no valido");
} else {
    if (letra == letras[n%23]){
        console.log("Dni correcto");
    } else {
        console.log("Letra del dni incorrecta");
    }
}

if(n<0 || n>99999999){
    document.write("<p>Dni no valido</p>");
} else {
    if (letra == letras[n%23]){
        document.write("<p>Dni correcto</p>");
    } else {
        document.write("<p>Letra del dni incorrecta</p>");
    }
}

