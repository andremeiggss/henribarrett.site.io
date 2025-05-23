"use strict";

// === Datos de los equipos ===
const equipos = [
  {
    posicion: 1,
    posAnterior: 2,
    nombre: "Fiorentina",
    abbr: "FIO",
    sigla: "FIO",
    logo: "fio.svg",
    dt: "Marcelo",
    pj: 37, pg: 25, pe: 8, pp: 4, gf: 85, gc: 40, puntos: 83,
    forma: [{res:"W",rival:"CHE",marcador:"2-1"},{res:"W",rival:"ARS",marcador:"3-1"},{res:"L",rival:"MCI",marcador:"0-2"},{res:"D",rival:"BRE",marcador:"1-1"},{res:"L",rival:"TOT",marcador:"1-2"}],
    nextMatch: { local: { abbr: "LIV", logo: "logos/fio.svg" }, visitante: { abbr: "CRY", logo: "cry.png" }, fecha: "Sun 26 May 2025", score: "3–1" },
    extra: "Goleador: Salah (22 goles). Últimos resultados: W, W, L, D, L."
  },
  {
    posicion: 2, posAnterior: 1, nombre: "Arsenal", abbr: "ARS", sigla: "ARS", logo: "ars.png", dt: "Mikel Ferro",
    pj: 37, pg: 19, pe: 14, pp: 4, gf: 67, gc: 33, puntos: 71,
    forma: [{res:"W",rival:"EVE",marcador:"3-0"},{res:"D",rival:"LIV",marcador:"2-2"},{res:"D",rival:"BRE",marcador:"1-1"},{res:"W",rival:"CHE",marcador:"1-0"},{res:"W",rival:"FUL",marcador:"2-1"}],
    nextMatch: { local: { abbr: "ARS", logo: "ars.png" }, visitante: { abbr: "SOU", logo: "sou.png" }, fecha: "Sun 26 May 2025", score: "2–2" },
    extra: "Odegaard, figura clave en el mediocampo."
  },
  {
    posicion: 3, posAnterior: 4, nombre: "Manchester City", abbr: "MCI", sigla: "MCI", logo: "mci.png", dt: "Pep Future",
    pj: 37, pg: 20, pe: 8, pp: 9, gf: 70, gc: 44, puntos: 68,
    forma: [{res:"W",rival:"AVL",marcador:"2-1"},{res:"W",rival:"TOT",marcador:"1-0"},{res:"W",rival:"NFO",marcador:"4-2"},{res:"D",rival:"CHE",marcador:"1-1"},{res:"W",rival:"FUL",marcador:"3-0"}],
    nextMatch: { local: { abbr: "MCI", logo: "mci.png" }, visitante: { abbr: "FUL", logo: "ful.png" }, fecha: "Sun 26 May 2025", score: "2–0" },
    extra: "Haaland fuera por lesión, pero Julián respondió."
  },
  {
    posicion: 4, posAnterior: 3, nombre: "Newcastle United", abbr: "NEW", sigla: "NEW", logo: "new.png", dt: "Eddie Blade",
    pj: 37, pg: 20, pe: 6, pp: 11, gf: 68, gc: 46, puntos: 66,
    forma: [{res:"L",rival:"TOT",marcador:"1-3"},{res:"W",rival:"EVE",marcador:"3-1"},{res:"D",rival:"BOU",marcador:"2-2"},{res:"W",rival:"FUL",marcador:"1-0"},{res:"L",rival:"MCI",marcador:"0-1"}],
    nextMatch: { local: { abbr: "NEW", logo: "new.png" }, visitante: { abbr: "EVE", logo: "eve.png" }, fecha: "Sun 26 May 2025", score: "2–1" },
    extra: "Gran temporada para Almirón y Guimarães."
  },
  {
    posicion: 5, posAnterior: 5, nombre: "Chelsea", abbr: "CHE", sigla: "CHE", logo: "che.png", dt: "Poche Valverde",
    pj: 37, pg: 19, pe: 9, pp: 9, gf: 63, gc: 43, puntos: 66,
    forma: [{res:"W",rival:"CRY",marcador:"3-2"},{res:"W",rival:"BOU",marcador:"2-0"},{res:"W",rival:"SOU",marcador:"4-1"},{res:"L",rival:"ARS",marcador:"0-1"},{res:"W",rival:"NFO",marcador:"2-1"}],
    nextMatch: { local: { abbr: "CHE", logo: "che.png" }, visitante: { abbr: "NFO", logo: "nfo.png" }, fecha: "Sun 26 May 2025", score: "1–1" },
    extra: "Nkunku vuelve con goles, Enzo firme en medio."
  },
  {
    posicion: 6, posAnterior: 6, nombre: "Aston Villa", abbr: "AVL", sigla: "AVL", logo: "avl.png", dt: "Unai Dream",
    pj: 37, pg: 19, pe: 9, pp: 9, gf: 58, gc: 49, puntos: 66,
    forma: [{res:"W",rival:"WOL",marcador:"2-0"},{res:"L",rival:"MCI",marcador:"1-2"},{res:"W",rival:"BRE",marcador:"3-1"},{res:"W",rival:"EVE",marcador:"2-1"},{res:"W",rival:"TOT",marcador:"1-0"}],
    nextMatch: { local: { abbr: "AVL", logo: "avl.png" }, visitante: { abbr: "MUN", logo: "mun.png" }, fecha: "Sun 26 May 2025", score: "2–2" },
    extra: "Watkins y Bailey: dupla letal."
  },
  {
    posicion: 7, posAnterior: 7, nombre: "Nottingham Forest", abbr: "NFO", sigla: "NFO", logo: "nfo.png", dt: "Steve Rose",
    pj: 37, pg: 19, pe: 8, pp: 10, gf: 58, gc: 45, puntos: 65,
    forma: [{res:"L",rival:"AVL",marcador:"0-1"},{res:"D",rival:"SOU",marcador:"2-2"},{res:"D",rival:"BOU",marcador:"1-1"},{res:"W",rival:"WOL",marcador:"3-1"},{res:"W",rival:"CRY",marcador:"1-0"}],
    nextMatch: { local: { abbr: "NFO", logo: "nfo.png" }, visitante: { abbr: "CHE", logo: "che.png" }, fecha: "Sun 26 May 2025", score: "1–2" },
    extra: "Siguen soñando con Conference League."
  },
  
    
    
    {
    posicion: 8, posAnterior: 9, nombre: "Brighton And Hove Albion", abbr: "BHA", sigla: "BHA", logo: "bha.png", dt: "Roberto Solar",
    pj: 37, pg: 15, pe: 13, pp: 9, gf: 62, gc: 58, puntos: 58,
    forma: [{res:"L",rival:"MUN",marcador:"0-1"},{res:"W",rival:"BOU",marcador:"2-0"},{res:"W",rival:"SOU",marcador:"3-1"},{res:"D",rival:"FUL",marcador:"2-2"},{res:"W",rival:"CRY",marcador:"1-0"}],
    nextMatch: { local: { abbr: "BHA", logo: "bha.png" }, visitante: { abbr: "TOT", logo: "tot.png" }, fecha: "Sun 26 May 2025", score: "2–1" },
    extra: "Enciso y Mitoma desequilibran siempre."
  },
    
    {
    posicion: 9, posAnterior: 8, nombre: "Brentford", abbr: "BRE", sigla: "BRE", logo: "bre.png", dt: "Thomas Red",
    pj: 37, pg: 16, pe: 7, pp: 14, gf: 65, gc: 56, puntos: 55,
    forma: [{res:"W",rival:"TOT",marcador:"3-2"},{res:"W",rival:"FUL",marcador:"2-1"},{res:"D",rival:"EVE",marcador:"1-1"},{res:"L",rival:"MCI",marcador:"0-2"},{res:"L",rival:"ARS",marcador:"0-1"}],
    nextMatch: { local: { abbr: "BRE", logo: "bre.png" }, visitante: { abbr: "WOL", logo: "wol.png" }, fecha: "Sun 26 May 2025", score: "1–1" },
    extra: "Toney volvió con goles y polémica."
  },
  {
    posicion: 10, posAnterior: 11, nombre: "Fulham", abbr: "FUL", sigla: "FUL", logo: "ful.png", dt: "Marco Brave",
    pj: 37, pg: 15, pe: 9, pp: 13, gf: 54, gc: 52, puntos: 54,
    forma: [{res:"L",rival:"MCI",marcador:"0-3"},{res:"W",rival:"BOU",marcador:"1-0"},{res:"W",rival:"SOU",marcador:"2-1"},{res:"L",rival:"ARS",marcador:"1-2"},{res:"W",rival:"BRE",marcador:"3-1"}],
    nextMatch: { local: { abbr: "FUL", logo: "ful.png" }, visitante: { abbr: "MCI", logo: "mci.png" }, fecha: "Sun 26 May 2025", score: "0–3" },
    extra: "Palhinha y Mitrovic en gran nivel."
  },
  {
    posicion: 11, posAnterior: 10, nombre: "Bournemouth", abbr: "BOU", sigla: "BOU", logo: "bou.png", dt: "Gary O'Vibes",
    pj: 37, pg: 14, pe: 11, pp: 12, gf: 56, gc: 46, puntos: 53,
    forma: [{res:"D",rival:"NEW",marcador:"2-2"},{res:"D",rival:"AVL",marcador:"1-1"},{res:"W",rival:"SOU",marcador:"2-0"},{res:"L",rival:"FUL",marcador:"0-1"},{res:"W",rival:"CRY",marcador:"1-0"}],
    nextMatch: { local: { abbr: "BOU", logo: "bou.png" }, visitante: { abbr: "LEI", logo: "lei.png" }, fecha: "Sun 26 May 2025", score: "1–0" },
    extra: "Equipo revelación en la media tabla."
  },
  {
    posicion: 12, posAnterior: 12, nombre: "Crystal Palace", abbr: "CRY", sigla: "CRY", logo: "cry.png", dt: "Roy Street",
    pj: 37, pg: 13, pe: 13, pp: 11, gf: 50, gc: 50, puntos: 52,
    forma: [{res:"L",rival:"CHE",marcador:"2-3"},{res:"D",rival:"BRE",marcador:"0-0"},{res:"W",rival:"SOU",marcador:"2-0"},{res:"W",rival:"WHU",marcador:"1-0"},{res:"D",rival:"BOU",marcador:"1-1"}],
    nextMatch: { local: { abbr: "CRY", logo: "cry.png" }, visitante: { abbr: "LIV", logo: "liv.png" }, fecha: "Sun 26 May 2025", score: "1–3" },
    extra: "Zaha sigue siendo el alma del equipo."
  },
  {
    posicion: 13, posAnterior: 13, nombre: "Everton", abbr: "EVE", sigla: "EVE", logo: "eve.png", dt: "Sean Unity",
    pj: 37, pg: 10, pe: 15, pp: 12, gf: 41, gc: 44, puntos: 45,
    forma: [{res:"L",rival:"ARS",marcador:"0-3"},{res:"L",rival:"NEW",marcador:"1-3"},{res:"W",rival:"BOU",marcador:"1-0"},{res:"D",rival:"FUL",marcador:"1-1"},{res:"W",rival:"WOL",marcador:"2-1"}],
    nextMatch: { local: { abbr: "EVE", logo: "eve.png" }, visitante: { abbr: "NEW", logo: "new.png" }, fecha: "Sun 26 May 2025", score: "1–2" },
    extra: "Luchan por mantener la categoría."
  },
  {
    posicion: 14, posAnterior: 14, nombre: "Wolverhampton", abbr: "WOL", sigla: "WOL", logo: "wol.png", dt: "Lopetegui Moon",
    pj: 37, pg: 12, pe: 5, pp: 20, gf: 53, gc: 68, puntos: 41,
    forma: [{res:"W",rival:"TOT",marcador:"2-1"},{res:"L",rival:"MCI",marcador:"0-4"},{res:"W",rival:"BOU",marcador:"2-0"},{res:"L",rival:"AVL",marcador:"0-2"},{res:"L",rival:"EVE",marcador:"1-2"}],
    nextMatch: { local: { abbr: "WOL", logo: "wol.png" }, visitante: { abbr: "WHU", logo: "whu.png" }, fecha: "Sun 26 May 2025", score: "1–2" },
    extra: "Muchos altibajos defensivos."
  },
  {
    posicion: 15, posAnterior: 15, nombre: "West Ham United", abbr: "WHU", sigla: "WHU", logo: "whu.png", dt: "Moyes Fiel",
    pj: 37, pg: 10, pe: 10, pp: 17, gf: 45, gc: 62, puntos: 40,
    forma: [{res:"W",rival:"NOT",marcador:"3-1"},{res:"L",rival:"CHE",marcador:"0-2"},{res:"L",rival:"AVL",marcador:"1-3"},{res:"D",rival:"WOL",marcador:"2-2"},{res:"W",rival:"SOU",marcador:"2-0"}],
    nextMatch: { local: { abbr: "WHU", logo: "whu.png" }, visitante: { abbr: "WOL", logo: "wol.png" }, fecha: "Sun 26 May 2025", score: "2–2" },
    extra: "Aspirando a no complicarse más."
  },
  {
    posicion: 16, posAnterior: 16, nombre: "Manchester United", abbr: "MUN", sigla: "MUN", logo: "mun.png", dt: "Ten Hagro",
    pj: 37, pg: 10, pe: 9, pp: 18, gf: 40, gc: 65, puntos: 39,
    forma: [{res:"W",rival:"BHA",marcador:"1-0"},{res:"D",rival:"CRY",marcador:"2-2"},{res:"L",rival:"TOT",marcador:"1-3"},{res:"L",rival:"LIV",marcador:"1-4"},{res:"L",rival:"CHE",marcador:"0-2"}],
    nextMatch: { local: { abbr: "MUN", logo: "mun.png" }, visitante: { abbr: "AVL", logo: "avl.png" }, fecha: "Sun 26 May 2025", score: "2–2" },
    extra: "Temporada para el olvido. Se viene renovación."
  },
  {
    posicion: 17, posAnterior: 17, nombre: "Tottenham Hotspur", abbr: "TOT", sigla: "TOT", logo: "tot.png", dt: "Ange Rebel",
    pj: 37, pg: 11, pe: 5, pp: 21, gf: 50, gc: 72, puntos: 38,
    forma: [{res:"L",rival:"MCI",marcador:"0-1"},{res:"W",rival:"WOL",marcador:"2-1"},{res:"L",rival:"ARS",marcador:"1-3"},{res:"L",rival:"AVL",marcador:"0-2"},{res:"W",rival:"NFO",marcador:"3-2"}],
    nextMatch: { local: { abbr: "TOT", logo: "tot.png" }, visitante: { abbr: "BHA", logo: "bha.png" }, fecha: "Sun 26 May 2025", score: "1–2" },
    extra: "Defensa floja. Solo Son aparece."
  }
    
    
];

// === Función para calcular diferencia de goles ===
function getGD(gf, gc) {
  return gf - gc;
}

function badge(item) {
  const cls = item.res === "W" ? "win" : item.res === "D" ? "draw" : "loss";
  const label = item.res === "W" ? "Win" : item.res === "D" ? "Draw" : "Loss";
  const title = `${label} vs ${item.rival} · ${item.marcador}`;
  return `<span class="form-badge ${cls}" data-bs-toggle="tooltip" title="${title}">${item.res}</span>`;
}

function tooltipNextMatch(local, visitante, fecha, score) {
  return `
    <div class="next-match-tooltip-wrapper">
      <img src="images/logos/${visitante.logo}" class="next-logo" alt="${visitante.abbr}">
      <div class="next-match-tooltip">
        <div class="date">${fecha}</div>
        <div class="teams">
          <div class="team">
            <img src="images/logos/${local.logo}" alt="${local.abbr}">
            <span>${local.abbr}</span>
          </div>
          <span class="score">${score}</span>
          <div class="team">
            <img src="images/logos/${visitante.logo}" alt="${visitante.abbr}">
            <span>${visitante.abbr}</span>
          </div>
        </div>
      </div>
    </div>
  `;
}

function getZonaColor(pos) {
  if (pos >= 1 && pos <= 4) return "zona-champions";
  if (pos === 5) return "zona-europa";
  return "";
}


function posicionConTooltip(actual, anterior) {
  let icono = "";
  if (anterior > actual) {
    icono = '<i class="bi bi-caret-up-fill text-success"></i>';
  } else if (anterior < actual) {
    icono = '<i class="bi bi-caret-down-fill text-danger"></i>';
  } else {
    icono = '<i class="bi bi-dot text-muted"></i>';
  }

  return `
    <div class="position-tooltip-wrapper" data-bs-toggle="tooltip" title="Posición anterior: ${anterior}">
      ${actual} ${icono}
    </div>
  `;
}





function renderTabla() {
  const tbody = document.querySelector("#pl-table tbody");
  tbody.innerHTML = "";

  equipos.forEach(function (eq, index) {
    const mainRow = document.createElement("tr");
    mainRow.innerHTML = `
     <td class="zona-container"><div class="zona-color ${getZonaColor(eq.posicion)}"></div></td>
      <td>${posicionConTooltip(eq.posicion, eq.posAnterior)}</td>
      <td class="text-start">
        <img src="images/logos/${eq.logo}" class="club-logo" alt="${eq.nombre}">
        <span class="d-md-none">${eq.sigla}</span>
        <span class="d-none d-md-inline">${eq.nombre}</span>
      </td>
      <td class="d-none d-md-table-cell">${eq.dt}</td>
      <td>${eq.pj}</td>
      <td class="d-none d-md-table-cell">${eq.pg}</td>
      <td class="d-none d-md-table-cell">${eq.pe}</td>
      <td class="d-none d-md-table-cell">${eq.pp}</td>
      <td class="d-none d-md-table-cell">${eq.gf}</td>
      <td class="d-none d-md-table-cell">${eq.gc}</td>
      <td class="d-none d-md-table-cell">${getGD(eq.gf, eq.gc)}</td>
      <td class="fw-bold">${eq.puntos}</td>
      <td class="d-none d-md-table-cell">${eq.forma.map(badge).join("")}</td>
      <td class="d-none d-md-table-cell">${tooltipNextMatch(eq.nextMatch.local, eq.nextMatch.visitante, eq.nextMatch.fecha, eq.nextMatch.score)}</td>
      <td><i class="bi bi-chevron-down arrow-icon" data-index="${index}" role="button"></i></td>
    `;

    const extraRow = document.createElement("tr");
    extraRow.classList.add("accordion-row");
    extraRow.style.display = "none";
    extraRow.innerHTML = `
      <td colspan="14" class="accordion-content">${eq.extra || "Sin información adicional."}</td>
    `;

    tbody.appendChild(mainRow);
    tbody.appendChild(extraRow);
  });

  const tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'));
  tooltipTriggerList.map(function (el) {
    return new bootstrap.Tooltip(el, { trigger: 'hover focus' });
  });

  document.querySelectorAll(".arrow-icon").forEach(function (icon) {
    icon.addEventListener("click", function () {
      const idx = parseInt(icon.getAttribute("data-index"), 10);
      const rows = document.querySelectorAll("#pl-table tbody tr");
      const extraRow = rows[idx * 2 + 1];
      const isOpen = extraRow.classList.contains("show");

      document.querySelectorAll(".accordion-row").forEach(function (row) {
        row.classList.remove("show");
        row.style.display = "none";
      });

      document.querySelectorAll(".arrow-icon").forEach(function (i) {
        i.classList.remove("rotate");
      });

      if (!isOpen) {
        extraRow.classList.add("show");
        extraRow.style.display = "table-row";
        icon.classList.add("rotate");
      }
    });
  });
}

document.addEventListener("DOMContentLoaded", renderTabla);
