const border = document.getElementById("border");
const padding = document.getElementById("padding");
const content = document.getElementById("content");

const border_size = document.getElementById("bor");
const padding_size = document.getElementById("pad");
const content_size = document.getElementById("con");

const border_color = document.getElementById("bor-c");
const padding_color = document.getElementById("pad-c");
const content_color = document.getElementById("con-c");

border_size.addEventListener("input", () => {
    border.style.border = border_size.value + "px solid "+border_color.value;
});

border_color.addEventListener("input", () => {
    border.style.border = border_size.value + "px solid "+border_color.value;
});

padding_size.addEventListener("input", () => {
    padding.style.padding = padding_size.value+"px";
});

padding_color.addEventListener("input", () => {
    padding.style.backgroundColor = padding_color.value;
});

content_size.addEventListener("input",  () => {
    content.style.width = content_size.value+"px";
    content.style.height = content_size.value+"px";
});

content_color.addEventListener("input", () => {
    content.style.backgroundColor = content_color.value;
});