window.DIAGRAMAS = (window.DIAGRAMAS || []).concat([
  // Mapa mental del tema (exactamente 1)
  { tema: "velocidad", diagrama: { tipo: "mapa", titulo: "Velocidad y distancias", centro: "Velocidad y distancia", ramas: [
    { t: "Límites generales", hojas: ["**Turismo**: 120 en autovía", "**Turismo**: 90 en carretera", "**Turismo**: 50 en ciudad", "**Camiones**: 90 (autovía), 80 (carretera)"] },
    { t: "Velocidad mínima", hojas: ["**Autovía**: nunca menos de 60", "**Carretera**: la mitad del máximo", "Ir muy despacio sin motivo: grave"] },
    { t: "Distancias de parada", hojas: ["**Reacción**: en torno a 1 segundo", "**Frenado**: sube mucho con la velocidad", "**Mojado**: el frenado puede duplicarse"] },
    { t: "Distancia de seguridad", hojas: ["**2 segundos** como mínimo", "**3 segundos** con lluvia", "Cuenta: uno-mil, dos-mil", "Más en noche o mal firme"] },
    { t: "Límites y multas", hojas: ["**Limitador**: no pasa de ahí", "**Crucero**: mantiene la velocidad", "**Multas**: 100 € a 600 €", "**Puntos**: máximo 6 por multa"] }
  ] } },

  { leccion: "velocidad-limites", tras: 1, diagrama: { tipo: "comparar", titulo: "Límite genérico según vehículo", columnas: [
    { t: "Turismo", tono: "info", items: ["Autovía: 120 km/h", "Carretera: 90 km/h", "Motos, pick-ups y autocaravanas: igual"] },
    { t: "Autobús", tono: "warn", items: ["Autovía: 100 km/h", "Carretera: 90 km/h"] },
    { t: "Camión o furgoneta", tono: "bad", items: ["Autovía: 90 km/h", "Carretera: 80 km/h", "Con remolque: igual que camión"] }
  ] } },

  { leccion: "velocidad-limites", tras: 4, diagrama: { tipo: "flujo", titulo: "¿Qué límite manda?", pasos: [
    { t: "Mira las señales", d: "Si hay una R-301, ese es tu límite." },
    { t: "No hay señal", d: "Usa el límite genérico del vehículo y de la vía." },
    { t: "Hay dos o más", d: "Sigue la señal más restrictiva, la que más baja." },
    { t: "Recuerda", d: "El límite genérico es un máximo, nunca un objetivo." }
  ] } },

  { leccion: "velocidad-minima-adelantar", tras: 1, diagrama: { tipo: "escala", titulo: "Autovía, turismo: de 60 a 120", unidad: "km/h", min: 0, max: 120, tramos: [
    { desde: 0, hasta: 60, t: "Por debajo del mínimo", tono: "bad" },
    { desde: 60, hasta: 120, t: "Entre mínimo y máximo", tono: "ok" }
  ], marcas: [
    { v: 60, t: "Mínimo" },
    { v: 120, t: "Máximo turismo" }
  ] } },

  { leccion: "velocidad-minima-adelantar", tras: 9, diagrama: { tipo: "linea", titulo: "Adelantar: cómo ha cambiado", hitos: [
    { k: "Antes", t: "Se podía +20 km/h", d: "Al adelantar en carretera, turismos y motos." },
    { k: "2022", t: "Se quitó el +20", d: "Desde el 21 de marzo, el límite de la vía es el máximo." },
    { k: "2026", t: "Ciclistas: 20 km/h menos", d: "Desde el 1 de octubre, deja 1,5 m al adelantar." }
  ] } },

  { leccion: "velocidad-distancias-parada", tras: 1, diagrama: { tipo: "flujo", titulo: "Del peligro a parar", pasos: [
    { t: "Ves el peligro", d: "Empieza la distancia de reacción, de unos 1 segundo." },
    { t: "Pisas el freno", d: "Acaba la reacción y empieza la distancia de frenado." },
    { t: "Te detienes", d: "La distancia de frenado depende de la velocidad y el firme." },
    { t: "Suma las dos", d: "Detención = reacción + frenado. A 100 km/h, unos 130 m." }
  ] } },

  { leccion: "velocidad-distancia-seguridad", tras: 1, diagrama: { tipo: "escala", titulo: "Distancia en segundos", unidad: "s", min: 0, max: 4, tramos: [
    { desde: 0, hasta: 1, t: "Casi pegado al de delante", tono: "bad" },
    { desde: 1, hasta: 2, t: "Por debajo del mínimo", tono: "warn" },
    { desde: 2, hasta: 3, t: "Mínimo en seco", tono: "ok" },
    { desde: 3, hasta: 4, t: "Lluvia: 3 s o más", tono: "ok" }
  ], marcas: [
    { v: 2, t: "Mínimo seco" },
    { v: 3, t: "Mínimo mojado" }
  ] } },

  { leccion: "velocidad-limitadores", tras: 3, diagrama: { tipo: "arbol", titulo: "¿Qué ayuda elijo?", raiz: {
    q: "¿Quieres un tope que no se pueda superar?",
    si: { r: "Limitador: no deja pasar de ahí", ok: true },
    no: { q: "¿Quieres que mantenga también la distancia?",
      si: { r: "ACC: frena y acelera solo", ok: true },
      no: { r: "Crucero: mantiene la velocidad, pero tú mandas", ok: true }
    }
  } } },

  { leccion: "velocidad-radares-multas", tras: 2, diagrama: { tipo: "comparar", titulo: "Exceso según el límite de la vía", columnas: [
    { t: "50 o menos", tono: "info", items: ["Hasta 20 km/h: 100 €, sin puntos", "21 a 30 km/h: 300 €, 2 puntos", "31 a 40 km/h: 400 €, 4 puntos", "41 a 50 km/h: 500 €, 6 puntos", "Más de 50 km/h: 600 €, 6 puntos"] },
    { t: "Más de 50", tono: "warn", items: ["Hasta 30 km/h: 100 €, sin puntos", "31 a 50 km/h: 300 €, 2 puntos", "51 a 60 km/h: 400 €, 4 puntos", "61 a 70 km/h: 500 €, 6 puntos", "Más de 70 km/h: 600 €, 6 puntos"] }
  ] } },

  { leccion: "velocidad-radares-multas", tras: 6, diagrama: { tipo: "piramide", titulo: "Gravedad de la multa", niveles: [
    { t: "Delito", d: "Más de 60 en vía urbana o 80 en interurbana." },
    { t: "Multa grave", d: "De 300 a 600 €, con 2 a 6 puntos." },
    { t: "Multa leve", d: "100 € y sin puntos, en excesos pequeños." }
  ] } }
]);
