//Efects
const LINKS = Array.prototype.slice.call(document.getElementById("menu").getElementsByTagName("a"));
const ACTIVITIES = Array.prototype.slice.call(document.getElementById("act").getElementsByTagName("div"));
const PART = Array.prototype.slice.call(document.getElementById("part").getElementsByTagName("img"));
const PATRO_IMG = Array.prototype.slice.call(document.getElementById("pat").getElementsByTagName("img"));;


LINKS.forEach(link => link.addEventListener("mouseover", () =>{
    link.style.color = "#ec5242";;
}));

LINKS.forEach(link => link.addEventListener("mouseleave", () =>{
    link.style.color = "black";;
}));

ACTIVITIES.forEach(act => act.addEventListener("mouseover", () =>{
    act.style.cursor = "pointer";
    act.style.border = "3px solid white";
    act.style.borderRadius = "5px";
}));

ACTIVITIES.forEach(act => act.addEventListener("mouseleave", () =>{
    act.style.cursor = "default";
    act.style.border = "none";
    act.style.borderRadius = "0px";
}));

PART.forEach(par => par.addEventListener("mouseover", () =>{
    par.style.transform = "scale(1.2)";
    par.style.filter = "grayscale(100%)";
}));

PART.forEach(par => par.addEventListener("mouseleave", () =>{
    par.style.transform = "scale(1)";
    par.style.filter = "grayscale(0%)";
}));

PATRO_IMG.forEach(img => img.addEventListener("mouseover", ()=>{
    img.style.transform = "scale(1.2)";
}));

PATRO_IMG.forEach(img => img.addEventListener("mouseleave", ()=>{
    img.style.transform = "scale(1)";
}));