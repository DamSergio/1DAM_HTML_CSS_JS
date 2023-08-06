let n1, n2;
let valido=true;

do{
    n1=prompt("Dime un numero");
    if(isNaN(n1)){
        alert("Eso no es un numero");
        valido=true;
    } else {
        if (n1<0){
            alert("No admito valores negativos");
            valido=true;
        } else {
            valido=false;
        }
    }
} while (valido);

do{
    n2=prompt("Dime un numero")
    if(isNaN(n2)){
        alert("Eso no es un numero");
        valido=true;
    } else {
        if (n2<0){
            alert("No admito valores negativos");
            valido=true;
        } else {
            valido=false;
        }
    }
} while (valido);

n1=parseInt(n1);
n2=parseInt(n2);

let pot=n1;
for (let i=2; i<=n2; i++){
    pot*=n1;
}

alert(pot);