function myFunction(event) {
  alert("You pressed a key inside the input field");

  if (event.keyCode == 13){
    alert("Enter");
  }

  if (event.key == "t"){
    alert("Tetetetetetete");
  }
}

document.addEventListener("DOMContentLoaded", function() {
  let input = document.getElementById("myInput");
  input.addEventListener("keypress", myFunction);
});









