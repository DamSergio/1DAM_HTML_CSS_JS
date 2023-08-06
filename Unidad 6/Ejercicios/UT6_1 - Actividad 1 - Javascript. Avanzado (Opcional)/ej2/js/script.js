const div1_click = document.getElementById("click1");
const div2_click = document.getElementById("click2");

div1_click.addEventListener("click", function(){
    alert("Has pulsado el div 1");
})

div2_click.onclick = function(){
    alert("Has pulsado el div 2");
}