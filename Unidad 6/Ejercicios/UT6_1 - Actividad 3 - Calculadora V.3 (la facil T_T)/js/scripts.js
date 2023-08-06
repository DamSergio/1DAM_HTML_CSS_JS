const BTN_RESET = document.getElementById("reset");
const BTN_DIV = document.getElementById("div");
const BTN_MULT = document.getElementById("mult");
const BTN_REST = document.getElementById("rest");
const BTN_SUM = document.getElementById("sum");
const BTN_EQUALS = document.getElementById("equals");
const BTN_DIGITS = document.querySelectorAll("#digits");

BTN_RESET.addEventListener("click", () =>{
    document.calculadora.ans.value = "";
    resultado = 0;
});

BTN_DIV.addEventListener("click", () =>{
    document.calculadora.ans.value += "/";
});

BTN_MULT.addEventListener("click", () =>{
    document.calculadora.ans.value += "*";
});

BTN_REST.addEventListener("click", () =>{
    document.calculadora.ans.value += "-";
});

BTN_SUM.addEventListener("click", () =>{
    document.calculadora.ans.value += "+";
});

BTN_EQUALS.addEventListener("click", () =>{
    document.calculadora.ans.value = eval(document.calculadora.ans.value);
});

BTN_DIGITS[0].addEventListener("click", () =>{
    document.calculadora.ans.value += "0";
});

BTN_DIGITS[1].addEventListener("click", () =>{
    document.calculadora.ans.value += "1";
});

BTN_DIGITS[2].addEventListener("click", () =>{
    document.calculadora.ans.value += "2";
});

BTN_DIGITS[3].addEventListener("click", () =>{
    document.calculadora.ans.value += "3";
});

BTN_DIGITS[4].addEventListener("click", () =>{
    document.calculadora.ans.value += "4";
});

BTN_DIGITS[5].addEventListener("click", () =>{
    document.calculadora.ans.value += "5";
});

BTN_DIGITS[6].addEventListener("click", () =>{
    document.calculadora.ans.value += "6";
});

BTN_DIGITS[7].addEventListener("click", () =>{
    document.calculadora.ans.value += "7";
});

BTN_DIGITS[8].addEventListener("click", () =>{
    document.calculadora.ans.value += "8";
});

BTN_DIGITS[9].addEventListener("click", () =>{
    document.calculadora.ans.value += "9";
});

BTN_DIGITS[10].addEventListener("click", () =>{
    document.calculadora.ans.value += ".";
});