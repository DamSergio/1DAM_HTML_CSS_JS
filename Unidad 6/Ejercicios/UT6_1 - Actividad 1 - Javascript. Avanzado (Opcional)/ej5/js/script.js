const changeColor = event =>{
    document.getElementById("efect").style.background = 'red';
}

const changeBack = event =>{
    document.getElementById("efect").style.background = 'white';
}

document.addEventListener("DOMContentLoaded", function(){
    const element = document.getElementById("efect");
    element.addEventListener("mouseover", changeColor);
    element.addEventListener("mouseout", changeBack);
})

