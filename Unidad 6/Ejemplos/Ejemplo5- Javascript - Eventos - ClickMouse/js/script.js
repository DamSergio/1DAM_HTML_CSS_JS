
function capturarEvento(event) {
  let text = "You pressed button: " + event.button;
  document.getElementById("demo").innerHTML = text;
}

/*var el = document.querySelector('.botones');
el.addEventListener('mousedown', capturarEvento, false);*/

document.addEventListener("DOMContentLoaded", function() {
  var el = document.querySelector('.botones');
  el.addEventListener('mousedown', capturarEvento, false);
});








