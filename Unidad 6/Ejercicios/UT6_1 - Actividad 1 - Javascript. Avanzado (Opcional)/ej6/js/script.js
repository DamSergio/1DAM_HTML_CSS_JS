
const input_leters = document.getElementById("letras");

/*input_leters.addEventListener("keyup", (event) => {
    let cad = input_leters.value;
    
    if (isNaN(event.key)){
        cad = cad + event.key;
        //alert(cad);
    } else {
        //input_leters.value="";
        input_leters.value = cad.substring(0, cad.length-1);
    }
});*/

/*input_leters.addEventListener("keyup", () => {
    let cad = input_leters.value;
    let parar = false;

    for (let i = 0; i < input_leters.value.length && !parar; i++){
        if (!isNaN(input_leters.value.charAt(i))){
            cad = input_leters.value.substring(0, i);
            parar = true;
        }
    }

    input_leters.value = cad;
});*/

/*input_leters.addEventListener("input", () => {
    let input_value = input_leters.value;
    let value_no_leters = input_value.replace(/[0-9]/, "");
    input_leters.value = value_no_leters;
});*/

/*input_leters.addEventListener("input", () => {
    const LAST_POS = input_leters.value.length-1;
    const INPUT_VALUE = input_leters.value;
    if (!isNaN(INPUT_VALUE.charAt(LAST_POS))){
        input_leters.value = INPUT_VALUE.substring(0, LAST_POS);
    }
});*/

document.addEventListener("keypress", (event)=>{
    const TECLA_ES_NUMERO = !isNaN(event.key);
    if (TECLA_ES_NUMERO){
        event.preventDefault();
    }
})


