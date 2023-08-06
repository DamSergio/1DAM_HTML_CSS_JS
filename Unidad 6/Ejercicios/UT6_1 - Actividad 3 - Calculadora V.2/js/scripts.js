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

/**
 * Funcion que comprueba la prioiridad de una operacion
 * @param {string} operacion - operacion que va a comprobar
 * @returns {boolean} - true si tiene multiplicaciones y/o divisiones y false si no
 */
const compPriority = (operacion) =>{
    for (let i = 0; i < operacion.length; i++){
        if (operacion.charAt(i) == "*" || operacion.charAt(i) == "/"){
            return true;
        }
    }

    return false;
};

//6*-2+5
//6*2+5
//6+8*-2+5
//4*2+4*2

/**
 * Funcion que te devuelve una operacion de solo 2 numeros a partir de una operacion mas larga
 * @param {string} operacion - operacion de la cual se va a extraer la mini operacion
 * @returns {string} - la mini operacion de solo 2 operandos
 */
const getOp = operacion =>{
    let pos1 = getPos1(operacion);
    let pos2 = getPos2(operacion);

    //alert(pos1+" "+pos2)

    return operacion.substring(pos1, pos2);
};

/**
 * Funcion que devuelve la posicion en la que debe comenzar la minioperacion
 * @param {string} operacion - operacion de la cual se va a extraer la mini operacion
 * @returns {number} - posicion en la que empieza la operacion
 */
const getPos1 = operacion =>{
    const DEFAULT = 0;
    const OPERATION_LENGTH = operacion.length;

    for (let i = 0; i < OPERATION_LENGTH; i++){
        const ACTUAL_CHARACTER = operacion.charAt(i);
        const ACTUAL_CHARACTER_IS_DIV_MULT = ACTUAL_CHARACTER == "*" || ACTUAL_CHARACTER == "/";

        if (ACTUAL_CHARACTER_IS_DIV_MULT){
            for (let j = i-1; j >= 0; j--){
                const OPERATOR_FOUND = isNaN(operacion.charAt(j));
                
                if (OPERATOR_FOUND){
                    const POSITION_START = j + 1;

                    return POSITION_START;
                }
            }
            return DEFAULT;
        }
    }
    return DEFAULT;
};

/**
 * Funcion que devuelve la posicion en la que debe terminar la minioperacion
 * @param {string} operacion - operacion de la cual se va a extraer la mini operacion
 * @returns {number} - posicion en la que termina la operacion
 */
const getPos2 = operacion =>{
    const DEFAULT = operacion.length;
    let iSneg = 0;

    for (let i = 0; i < DEFAULT; i++){
        const ACTUAL_CHARACTER = operacion.charAt(i);
        const ACTUAL_CHARACTER_IS_DIV_MULT = ACTUAL_CHARACTER == "*" || ACTUAL_CHARACTER == "/";

        if (ACTUAL_CHARACTER_IS_DIV_MULT){
            const NEXT_CHARACTER = operacion.charAt(i+1);
            const NEXT_CHARACTER_IS_DIV_MULT = NEXT_CHARACTER == "-" || NEXT_CHARACTER == "+";

            if (NEXT_CHARACTER_IS_DIV_MULT){
                iSneg = 1;
            }

            for (let j = i+1+iSneg; j < operacion.length; j++){
                const OPERATOR_FOUND = isNaN(operacion.charAt(j));

                if (OPERATOR_FOUND){
                    const POSITION_END = j;
                    
                    return POSITION_END;
                }
            }
            return DEFAULT;
        }
    }

    return DEFAULT;
};

/**
 * Funcion que separa una operacion en sus operandos y operador y devuelve el resultado
 * @param {string} op - operacion que se va a calcular
 * @param {number} neg - 1 si el numero es negativo y 0 si no
 * @returns {number} - resultado de la operacion
 */
const operar = (op, neg) =>{
    let operando1 = "";
    let operando2 = "";
    let operador = "";

    if (neg == 1){
        operando1+="-";
    }

    const OPERATION_LENGTH = op.length;

    for (let i=0+neg; i<OPERATION_LENGTH; i++){
        const ACTUAL_CHARACTER = op.charAt(i);
        const ACTUAL_CHARACTER_IS_DIGIT = !isNaN(ACTUAL_CHARACTER) || ACTUAL_CHARACTER == ".";
        const NEXT_CHARACTER = op.charAt(i+1);

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

    return hacerOperacion(operando1, operando2, operador);
}

/**
 * Funcion que cuenta cuantos operandos hay en una operacion
 * @param {string} operacion - operacion que se va a comprobar
 * @returns {number} - numero de operandos en la operacion
 */
const contNum = operacion =>{
    let n = "";
    let numeros = new Array();

    for (let i = 0; i < operacion.length; i++){
        if (isNaN(operacion.charAt(i))){
            n += operacion.charAt(i);
        } else {
            if (n != ""){
                numeros.push(n);
                n = "";
            }
        }
    }
    numeros.push(n);

    return numeros.length;
}

//alert(contNum("-2*-2"));

//alert(operar(getOp("6+8*2+5"),0))

const ERROR = "Syntax Error"
const SCREEN = document.getElementById("screen");
const BTN_RESET = document.getElementById("reset");
const BTN_DIV = document.getElementById("div");
const BTN_MULT = document.getElementById("mult");
const BTN_REST = document.getElementById("rest");
const BTN_SUM = document.getElementById("sum");
const BTN_EQUALS = document.getElementById("equals");
const BTN_DIGITS = document.querySelectorAll(".digits");

BTN_RESET.addEventListener("click", () =>{
    SCREEN.value = "";
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
    let neg = 0;
    let syntax_error = comprobarSintaxis(operacion);

    const FIRTS_CHARACTER = operacion.charAt(0);
    const FIRTS_CHARACTER_NOT_NUMBER = isNaN(FIRTS_CHARACTER);

    if(FIRTS_CHARACTER_NOT_NUMBER && !syntax_error){
        switch (FIRTS_CHARACTER){
            case "-":
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
        //6+8*-2+5
        if(contNum(operacion) > 2){
            let priority = compPriority(operacion);
            while (priority){
                let mini_op = getOp(operacion);
                let res = operar(mini_op, 0);

                //alert(mini_op);
                //alert(res);

                let pos1 = getPos1(operacion);
                let pos2 = getPos2(operacion);
                //alert(operacion.substring(pos2));

                operacion = operacion.substring(0, pos1)+res+operacion.substring(pos2);
                //alert(operacion);

                priority = compPriority(operacion);
            }
        }

        //alert(operacion);

        SCREEN.value = operar(operacion, neg);
    } else {
        SCREEN.value = ERROR;
    }
});

for (let i = 0; i < 10; i++){
    BTN_DIGITS[i].addEventListener("click", ()=>{
        SCREEN.value += i;
    });
}

BTN_DIGITS[10].addEventListener("click", () =>{
    SCREEN.value += ".";
});