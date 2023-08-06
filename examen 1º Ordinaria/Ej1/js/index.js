const categories = document.querySelectorAll(".categorias div");

categories.forEach(categoria => categoria.addEventListener("mouseenter", () => {
    categoria.style.transform = "scale(1.1)";
    categoria.style.cursor = "pointer";
}));

categories.forEach(categoria => categoria.addEventListener("mouseleave", () => {
    categoria.style.transform = "scale(1.0)";
}));