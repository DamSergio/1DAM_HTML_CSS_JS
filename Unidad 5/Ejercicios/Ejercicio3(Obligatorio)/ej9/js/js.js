/**
 * Funcion que eleva un numero a otro
 * @param {number} op - numero elevado
 * @param {number} potencia - numero a elevar
 * @returns number - resultado
 */
const pote = (op, potencia) =>{
    let pot=op;
    for (let i=2; i<=potencia; i++){
        pot*=n1;
    }

    return pot;
}

let n1, n2;

do{
    n1=prompt("Dime un numero");
    if(!esNum(n1)){
        alert("Eso no es un numero");
    } else {
        if (!esPositivo(n1)){
            alert("No admito valores negativos");
        }
    }
} while (!esNum(n1) || !esPositivo(n1));

do{
    n2=prompt("Dime un numero")
    if(!esNum(n2)){
        alert("Eso no es un numero");
    } else {
        if (!esPositivo(n2)){
            alert("No admito valores negativos");
        }
    }
} while (!esNum(n2) || !esPositivo(n2));

n1=parseInt(n1);
n2=parseInt(n2);

alert(pote(n1, n2));