/**
 * Función que realiza una operación matemática dada por dos operandos y un operador.
 * @param {number} operando1 - El primer operando de la operación.
 * @param {number} operando2 - El segundo operando de la operación.
 * @param {string} operador - El operador de la operación.
 * @returns {number|string} - El resultado de la operación o un mensaje de error si ocurre una división entre cero.
 */
const hacerOperacion = (operando1, operando2, operador) =>{
    if (operador == ""){
        return operando1;
    } else {
        operando1 = parseFloat(operando1);
        operando2 = parseFloat(operando2);

        switch (operador){
            case "+":
                return operando2+operando1;
            case "-":
                return operando2-operando1;
            case "*":
                return operando2*operando1;
            case "/":
                if (operando1 == 0){
                    return ERROR;
                } else {
                    return operando2/operando1;
                };
        }
    }
};

/**
 * Función que comprueba si la sintaxis de una operación es correcta.
 * @param {string} operacion - La operación a comprobar.
 * @returns {boolean} - Un valor booleano que indica si la sintaxis es correcta o no.
 */
const comprobarSintaxis = operacion =>{
    const LAST_DIGIT_NUMBER = isNaN(operacion.charAt(operacion.length-1));

    if (LAST_DIGIT_NUMBER){
        return true;
    }
    
    for (let i = 0; i < operacion.length-1; i++){
        const TWO_SYMBOLS_IN_A_ROW = (operacion.charAt(i) == "*" || operacion.charAt(i) == "/") && (operacion.charAt(i+1) == "*" || operacion.charAt(i+1) == "/");

        if (TWO_SYMBOLS_IN_A_ROW){
            return true;
        }
    }

    return false;
};

const ERROR = "Syntax Error"
const SCREEN = document.getElementById("screen");
const BTN_RESET = document.getElementById("reset");
const BTN_DIV = document.getElementById("div");
const BTN_MULT = document.getElementById("mult");
const BTN_REST = document.getElementById("rest");
const BTN_SUM = document.getElementById("sum");
const BTN_EQUALS = document.getElementById("equals");
const BTN_DIGITS = document.querySelectorAll("#digits");

var resultado = 0;

BTN_RESET.addEventListener("click", () =>{
    SCREEN.value = "";
    resultado = 0;
});

BTN_DIV.addEventListener("click", () =>{
    SCREEN.value += "/";
});

BTN_MULT.addEventListener("click", () =>{
    SCREEN.value += "*";
});

BTN_REST.addEventListener("click", () =>{
    SCREEN.value += "-";
});

BTN_SUM.addEventListener("click", () =>{
    SCREEN.value += "+";
});

BTN_EQUALS.addEventListener("click", () =>{
    let operacion = SCREEN.value;
    let operando1 = "";
    let operando2 = "";
    let operador = "";
    let neg = 0;
    let syntax_error = comprobarSintaxis(operacion);

    const FIRTS_CHARACTER = operacion.charAt(0);
    const FIRTS_CHARACTER_NOT_NUMBER = isNaN(FIRTS_CHARACTER);

    if(FIRTS_CHARACTER_NOT_NUMBER && !syntax_error){
        switch (FIRTS_CHARACTER){
            case "-":
                operando1+="-";
                neg=1;
                break;
            case "+":
                neg=1;
                break;
            default:
                syntax_error = true;
        }
    }

    if (!syntax_error){
        const OPERATION_LENGTH = operacion.length;

        for (let i=0+neg; i<OPERATION_LENGTH; i++){
            const ACTUAL_CHARACTER = operacion.charAt(i);
            const ACTUAL_CHARACTER_IS_DIGIT = !isNaN(ACTUAL_CHARACTER) || ACTUAL_CHARACTER == ".";
            const NEXT_CHARACTER = operacion.charAt(i+1);

            if (ACTUAL_CHARACTER_IS_DIGIT){
                operando1+=ACTUAL_CHARACTER;
            } else {
                //alert(operando1);
                operando2 = hacerOperacion(operando1, operando2, operador);
                operando1 = "";
                operador = ACTUAL_CHARACTER;
                if (NEXT_CHARACTER == "-"){
                    i++;
                    operando1 = "-";
                }
                if (NEXT_CHARACTER == "+"){
                    i++;
                }
            }
        }
    
        resultado = hacerOperacion(operando1, operando2, operador);
    } else {
        resultado = ERROR;
    }

    SCREEN.value = resultado;
});

BTN_DIGITS[0].addEventListener("click", () =>{
    SCREEN.value += "0";
});

BTN_DIGITS[1].addEventListener("click", () =>{
    SCREEN.value += "1";
});

BTN_DIGITS[2].addEventListener("click", () =>{
    SCREEN.value += "2";
});

BTN_DIGITS[3].addEventListener("click", () =>{
    SCREEN.value += "3";
});

BTN_DIGITS[4].addEventListener("click", () =>{
    SCREEN.value += "4";
});

BTN_DIGITS[5].addEventListener("click", () =>{
    SCREEN.value += "5";
});

BTN_DIGITS[6].addEventListener("click", () =>{
    SCREEN.value += "6";
});

BTN_DIGITS[7].addEventListener("click", () =>{
    SCREEN.value += "7";
});

BTN_DIGITS[8].addEventListener("click", () =>{
    SCREEN.value += "8";
});

BTN_DIGITS[9].addEventListener("click", () =>{
    SCREEN.value += "9";
});

BTN_DIGITS[10].addEventListener("click", () =>{
    SCREEN.value += ".";
});