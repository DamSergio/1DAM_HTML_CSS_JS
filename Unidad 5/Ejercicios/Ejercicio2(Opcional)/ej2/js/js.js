let n=parseInt(prompt("Dime un numero"));
let fact=n;

for (let i=n-1; i>0; i--){
    fact*=i;
}

alert(fact);