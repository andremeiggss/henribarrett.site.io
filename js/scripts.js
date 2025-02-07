// Code JS by Henri Barrett® Studios //
// Inicialización de animaciones y control de eventos
document.addEventListener("DOMContentLoaded", () => {
    console.log("Página cargada. Animaciones inicializadas.");

    // Submenu toggle para mobile
    const menuToggle = document.getElementById("menu-toggle");
    const menuItems = document.querySelector(".menu-items");

    if (menuToggle && menuItems) {
        menuToggle.addEventListener("click", () => {
            menuItems.classList.toggle("show");
        });
    }
});
