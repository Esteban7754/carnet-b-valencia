/* Iconos de línea (24×24, estilo trazo) y pictogramas para señales */
(function () {
  "use strict";
  const P = {
    search: '<circle cx="11" cy="11" r="7"/><path d="m20 20-4-4"/>',
    home: '<path d="m3 10 9-7 9 7v10a2 2 0 0 1-2 2h-4v-7H9v7H5a2 2 0 0 1-2-2z"/>',
    book: '<path d="M2 4h6a4 4 0 0 1 4 4v13a3 3 0 0 0-3-3H2z"/><path d="M22 4h-6a4 4 0 0 0-4 4v13a3 3 0 0 1 3-3h7z"/>',
    route: '<circle cx="6" cy="19" r="2.5"/><path d="M8.5 19H17a3.5 3.5 0 0 0 0-7H7a3.5 3.5 0 0 1 0-7h8.5"/><circle cx="18" cy="5" r="2.5"/>',
    sliders: '<path d="M4 21v-7M4 10V3M12 21v-9M12 8V3M20 21v-5M20 12V3M1 14h6M9 8h6M17 16h6"/>',
    layers: '<path d="m12 2 10 5-10 5L2 7z"/><path d="m2 17 10 5 10-5"/><path d="m2 12 10 5 10-5"/>',
    check: '<path d="M20 6 9 17l-5-5"/>',
    x: '<path d="M18 6 6 18M6 6l12 12"/>',
    clock: '<circle cx="12" cy="12" r="9.5"/><path d="M12 7v5l3.5 2"/>',
    timer: '<path d="M10 2h4M12 14l3-3"/><circle cx="12" cy="14" r="8"/>',
    flame: '<path d="M8.5 14.5A2.5 2.5 0 0 0 11 12c0-1.4-.5-2-1-3-1.1-2.1-.2-4 2-6 .5 2.5 2 4.9 4 6.5 2 1.6 3 3.5 3 5.5a7 7 0 1 1-14 0c0-1.2.4-2.3 1-3a2.5 2.5 0 0 0 2.5 2.5z"/>',
    target: '<circle cx="12" cy="12" r="9.5"/><circle cx="12" cy="12" r="5.5"/><circle cx="12" cy="12" r="1.5"/>',
    star: '<path d="m12 2.5 2.9 6 6.6.9-4.8 4.6 1.2 6.5L12 17.4l-5.9 3.1 1.2-6.5L2.5 9.4l6.6-.9z"/>',
    lock: '<rect x="4" y="11" width="16" height="10" rx="2"/><path d="M8 11V7a4 4 0 0 1 8 0v4"/>',
    play: '<path d="M7 4v16l13-8z"/>',
    arrowRight: '<path d="M5 12h14M13 6l6 6-6 6"/>',
    arrowLeft: '<path d="M19 12H5M11 6l-6 6 6 6"/>',
    chevron: '<path d="m9 6 6 6-6 6"/>',
    volume: '<path d="M11 5 6 9H2v6h4l5 4z"/><path d="M15.5 8.5a5 5 0 0 1 0 7M19 5a10 10 0 0 1 0 14"/>',
    stop: '<rect x="6" y="6" width="12" height="12" rx="2"/>',
    shuffle: '<path d="M16 3h5v5M4 20 21 3M21 16v5h-5M15 15l6 6M4 4l5 5"/>',
    rotate: '<path d="M3 12a9 9 0 1 0 2.6-6.4L3 8"/><path d="M3 3v5h5"/>',
    sun: '<circle cx="12" cy="12" r="4"/><path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4"/>',
    moon: '<path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9z"/>',
    menu: '<path d="M4 6h16M4 12h16M4 18h16"/>',
    trophy: '<path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6M18 9h1.5a2.5 2.5 0 0 0 0-5H18M4 22h16M10 14.7V17c0 .6-.5 1-1 1.2C7.9 18.8 7 20.2 7 22M14 14.7V17c0 .6.5 1 1 1.2 1.1.6 2 2 2 3.8"/><path d="M18 2H6v7a6 6 0 0 0 12 0z"/>',
    calendar: '<rect x="3" y="4" width="18" height="18" rx="2"/><path d="M16 2v4M8 2v4M3 10h18"/>',
    info: '<circle cx="12" cy="12" r="9.5"/><path d="M12 16v-4M12 8h.01"/>',
    alert: '<path d="M10.3 3.9 1.8 18a2 2 0 0 0 1.7 3h17a2 2 0 0 0 1.7-3L13.7 3.9a2 2 0 0 0-3.4 0z"/><path d="M12 9v4M12 17h.01"/>',
    bulb: '<path d="M15 14c.2-1 .7-1.7 1.5-2.5A6 6 0 1 0 6 8c0 1 .2 2.2 1.5 3.5.7.7 1.3 1.5 1.5 2.5"/><path d="M9 18h6M10 22h4"/>',
    key: '<circle cx="7.5" cy="15.5" r="5.5"/><path d="m21 2-9.6 9.6M15.5 7.5l3 3L22 7l-3-3"/>',
    zap: '<path d="M13 2 3 14h9l-1 8 10-12h-9z"/>',
    shield: '<path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>',
    shieldCheck: '<path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/><path d="m9 12 2 2 4-4"/>',
    flag: '<path d="M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1zM4 22v-7"/>',
    external: '<path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6M15 3h6v6M10 14 21 3"/>',
    listCheck: '<path d="m3 17 2 2 4-4M3 7l2 2 4-4M13 6h8M13 12h8M13 18h8"/>',
    map: '<path d="M3 6l6-3 6 3 6-3v15l-6 3-6-3-6 3z"/><path d="M9 3v15M15 6v15"/>',
    mapPin: '<path d="M20 10c0 6-8 12-8 12S4 16 4 10a8 8 0 0 1 16 0z"/><circle cx="12" cy="10" r="3"/>',
    chart: '<path d="M3 3v18h18"/><path d="m7 15 4-4 3 3 5-6"/>',
    badge: '<path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5z"/><path d="M14 2v6h6M9 15l2 2 4-4"/>',
    eye: '<path d="M2 12s3.5-7 10-7 10 7 10 7-3.5 7-10 7S2 12 2 12z"/><circle cx="12" cy="12" r="3"/>',
    pointer: '<path d="m4 4 7 17 2.5-7.5L21 11z"/>',
    heart: '<path d="M19 14c1.5-1.5 3-3.2 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.8 0-3 .5-4.5 2-1.5-1.5-2.7-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4 3 5.5l7 7z"/>',
    phone: '<path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1 1 .4 1.9.7 2.8a2 2 0 0 1-.5 2.1L8.1 9.9a16 16 0 0 0 6 6l1.3-1.3a2 2 0 0 1 2.1-.4c.9.3 1.8.6 2.8.7a2 2 0 0 1 1.7 2z"/>',
    sparkle: '<path d="M12 3v4M12 17v4M3 12h4M17 12h4M6 6l2.5 2.5M15.5 15.5 18 18M6 18l2.5-2.5M15.5 8.5 18 6"/>',
    repeat: '<path d="m17 2 4 4-4 4"/><path d="M3 11v-1a4 4 0 0 1 4-4h14M7 22l-4-4 4-4"/><path d="M21 13v1a4 4 0 0 1-4 4H3"/>',
    gauge: '<path d="m12 14 4-4"/><path d="M3.3 19a10 10 0 1 1 17.4 0"/>',
    road: '<path d="M4 22 8 2M20 22 16 2M12 4v2M12 10v3M12 17v3"/>',
    idcard: '<rect x="2" y="5" width="20" height="14" rx="2"/><circle cx="8" cy="12" r="2"/><path d="M14 10h4M14 14h4"/>',
    merge: '<circle cx="18" cy="18" r="3"/><circle cx="6" cy="6" r="3"/><path d="M6 21V9a9 9 0 0 0 9 9"/>',
    turn: '<path d="m15 14 5-5-5-5"/><path d="M4 20v-7a4 4 0 0 1 4-4h12"/>',
    wine: '<path d="M8 22h8M7 10h10M12 15v7"/><path d="M12 15a5 5 0 0 0 5-5c0-2-.5-4-2-8H9c-1.5 4-2 6-2 8a5 5 0 0 0 5 5z"/>',
    siren: '<path d="M7 18v-6a5 5 0 1 1 10 0v6"/><path d="M5 21a1 1 0 0 1-1-1v-1a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v1a1 1 0 0 1-1 1zM21 12h1M18.5 4.5 18 5M2 12h1M12 2v1M4.9 4.9l.7.7"/>',
    triangle: '<path d="M10.3 3.9 1.8 18a2 2 0 0 0 1.7 3h17a2 2 0 0 0 1.7-3L13.7 3.9a2 2 0 0 0-3.4 0z"/>',
    car: '<path d="M19 17h2c.6 0 1-.4 1-1v-3c0-.9-.7-1.7-1.5-1.9C18.7 10.6 16 10 16 10s-1.3-1.4-2.2-2.3c-.5-.4-1.1-.7-1.8-.7H5c-.6 0-1.1.4-1.4.9l-1.4 2.9A3.7 3.7 0 0 0 2 12v4c0 .6.4 1 1 1h2"/><circle cx="7" cy="17" r="2"/><path d="M9 17h6"/><circle cx="17" cy="17" r="2"/>',
    cards: '<rect x="3" y="6" width="14" height="16" rx="2"/><path d="M7 2h12a2 2 0 0 1 2 2v14"/>',
    graduation: '<path d="M22 10 12 5 2 10l10 5z"/><path d="M6 12v5c3 3 9 3 12 0v-5"/>',
    users: '<path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.9M16 3.1a4 4 0 0 1 0 7.8"/>',
    euro: '<path d="M4 10h12M4 14h9M19 6a7.7 7.7 0 0 0-5.2-2A7.9 7.9 0 0 0 6 12c0 4.4 3.5 8 7.8 8 2 0 3.8-.8 5.2-2"/>',
    building: '<rect x="4" y="2" width="16" height="20" rx="2"/><path d="M9 22v-4h6v4M8 6h.01M16 6h.01M12 6h.01M12 10h.01M12 14h.01M16 10h.01M16 14h.01M8 10h.01M8 14h.01"/>'
  };
  const TEMA_ICON = { examen: "idcard", via: "road", senales: "triangle", velocidad: "gauge", prioridad: "merge", maniobras: "turn", alumbrado: "bulb", factores: "wine", seguridad: "shield", accidentes: "siren", normas: "badge" };

  function icon(name, size, cls) {
    const p = P[name] || P.info; const s = size || 20;
    return `<svg class="ic ${cls || ""}" width="${s}" height="${s}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${p}</svg>`;
  }

  // Pictogramas (centrados en 0,0, ~40×40) para el interior de las señales
  const PERSONA = (x, y, s) => `<g transform="translate(${x},${y}) scale(${s})"><circle cx="1" cy="-15" r="4.2"/><path d="M1-9.5-1 3M-1 3-6.5 15.5M-1 3 5 15.5M0-6.5-7 0M0-6.5 6.5-1" stroke-width="4.6" stroke-linecap="round" fill="none"/></g>`;
  const PICTO = {
    coche: `<path d="M-19 5v-6q1-4 5-5l5-6q2-2 5-2h9q3 0 5 3l4 5q4 1 4 5v6z"/><path d="M-6-10h5v5h-9zM2-10h6l3 5H2z" fill="#fff"/><circle cx="-10" cy="6" r="5"/><circle cx="11" cy="6" r="5"/><circle cx="-10" cy="6" r="2" fill="#fff"/><circle cx="11" cy="6" r="2" fill="#fff"/>`,
    bici: `<g fill="none" stroke-width="3.2" stroke-linecap="round" stroke-linejoin="round"><circle cx="-11" cy="6" r="8"/><circle cx="12" cy="6" r="8"/><path d="M-11 6-3-7h11l4 13M-3-7l3 13h-11M0 6 8-7M-6-11h6M8-7l-1-5h5"/></g>`,
    peaton: PERSONA(0, 2, 1.05),
    ninos: PERSONA(-8, 6, .82) + PERSONA(9, 0, .95),
    tren: `<path d="M-19 7V-5h11v-9h12v9h9l5 5v7z"/><rect x="-16" y="-12" width="5" height="7"/><rect x="-5" y="-11" width="7" height="5" fill="#fff"/><circle cx="-12" cy="10" r="4"/><circle cx="0" cy="10" r="4"/><circle cx="12" cy="10" r="4"/>`,
    camion: `<rect x="-20" y="-12" width="25" height="18" rx="1.5"/><path d="M7-6h7l6 6v6H7z"/><path d="M9-4h4l3 4H9z" fill="#fff"/><circle cx="-12" cy="8" r="4.2"/><circle cx="13" cy="8" r="4.2"/><circle cx="-12" cy="8" r="1.6" fill="#fff"/><circle cx="13" cy="8" r="1.6" fill="#fff"/>`,
    animal: `<path d="M-14 0q0-6 7-6h12q4 0 6-4l3-6 3 1-1 6q3 1 3 5l-4 1q-2 0-3 3v12h-3l-1-9h-12l-2 9h-3l-1-10q-4-1-4-2z"/><path d="M12-16l-3-6M15-16l2-6M12-20l-3-1M16-20l3-2" stroke-width="2" stroke-linecap="round" fill="none"/>`,
    obras: PERSONA(-6, 0, .95) + `<path d="M2-3 14 9" stroke-width="3.4" stroke-linecap="round"/><path d="M10 12h12l-4-7z"/>`,
    bus: `<rect x="-20" y="-13" width="40" height="22" rx="4"/><path d="M-16-9h8v7h-8zM-5-9h8v7h-8zM6-9h9v7H6z" fill="#fff"/><circle cx="-11" cy="10" r="4"/><circle cx="11" cy="10" r="4"/>`,
    claxon: `<path d="M-16-5h7l14-9v28L-9 5h-7z"/><path d="M10-6q4 6 0 12M15-10q7 10 0 20" fill="none" stroke-width="2.6" stroke-linecap="round"/>`,
    tunel: `<path d="M-19 15V0a19 17 0 0 1 38 0v15h-8V2a11 10 0 0 0-22 0v13z"/>`,
    semaforo: `<rect x="-8" y="-20" width="16" height="38" rx="4"/><circle cx="0" cy="-12" r="4" fill="#e03b30"/><circle cx="0" cy="-1" r="4" fill="#f3b31b"/><circle cx="0" cy="10" r="4" fill="#2f9a5c"/>`,
    pendiente: `<path d="M-20 12h40L-20-8z"/><text x="6" y="-2" font-size="11" font-weight="800" font-family="Arial">10%</text>`,
    gasolina: `<rect x="-15" y="-17" width="20" height="34" rx="2.5"/><rect x="-11" y="-13" width="12" height="9" fill="#fff"/><path d="M5-8h5l4 4v13a3 3 0 0 1-6 0V2H5" fill="none" stroke-width="2.8"/>`,
    ciclomotor: `<g fill="none" stroke-width="3.2" stroke-linecap="round"><circle cx="-12" cy="8" r="6.5"/><circle cx="13" cy="8" r="6.5"/></g><path d="M-14 1h16l5-12h5l2 4h-4l-5 14h-6l-3-6h-10z"/><circle cx="-2" cy="-15" r="4"/><path d="M-2-11l-4 9h8z"/>`,
    rocas: `<path d="M-20 18 0-16l6 8 4-4 10 30z"/><circle cx="-14" cy="-10" r="4"/><circle cx="-7" cy="-17" r="3"/><circle cx="-18" cy="-1" r="3"/>`,
    tranvia: `<rect x="-17" y="-12" width="34" height="22" rx="4"/><path d="M-13-8h8v7h-8zM-3-8h6v7h-6zM5-8h8v7H5z" fill="#fff"/><path d="M0-12v-6M-6-18H6" stroke-width="2.4" fill="none"/><circle cx="-9" cy="12" r="3"/><circle cx="9" cy="12" r="3"/>`
  };
  const EMOJI_PICTO = { "🚗": "coche", "🚙": "coche", "🚘": "coche", "🚲": "bici", "🚴": "bici", "🚶": "peaton", "🚸": "ninos", "🚂": "tren", "🚆": "tranvia", "🚋": "tranvia", "🚛": "camion", "🚚": "camion", "🦌": "animal", "🐴": "animal", "🐎": "animal", "⛽": "gasolina", "🛵": "ciclomotor", "🏍": "ciclomotor", "🪨": "rocas", "🐄": "animal", "🚧": "obras", "👷": "obras", "🚌": "bus", "📯": "claxon", "🚇": "tunel", "🚦": "semaforo", "📉": "pendiente" };

  window.ICONS = { icon, TEMA_ICON, PICTO, EMOJI_PICTO };
})();
