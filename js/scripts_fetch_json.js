
"use strict";

let equipos = [];

document.addEventListener("DOMContentLoaded", () => {
  fetch("data/equipos.json")
    .then(res => res.json())
    .then(data => {
      equipos = data;
      renderTabla();
    });
});

// ...el resto del JS es igual a versiones anteriores y ya se incluye en tus archivos actuales
