# Ampliación del temario: lecciones nuevas para cubrir el Anexo V del RD 818/2009

Cada agente escribe **un solo fichero** `data/ampliacion-<n>.js` con todo lo de sus lecciones nuevas: la lección, su resumen, sus diagramas, sus preguntas y sus tarjetas. **No toques ningún otro fichero.**

Lee antes `SPEC.md` (formato de bloques de lección y de preguntas) y `DIAGRAMAS.md` (formato de diagramas). Lee también el fichero de teoría del tema que amplías, para **no repetir** lo que ya existe y mantener cifras coherentes.

```js
// 1) Lecciones nuevas que se insertan en un tema existente
window.AMPLIACION = (window.AMPLIACION || []).concat([
  { tema: "senales", despues: "senales-obligacion",          // id de la lección existente tras la que se inserta
    leccion: { id: "senales-vehiculos", titulo: "...", minutos: 6, contenido: [ /* bloques como en SPEC.md, 8-14 bloques con 1-2 quiz */ ] } }
]);
// 2) Resumen de 30 segundos de CADA lección nueva (mismo formato que data/resumenes-1.js)
window.RESUMENES = Object.assign(window.RESUMENES || {}, {
  "senales-vehiculos": { emoji: "", idea: "...", puntos: ["...", "...", "..."], recuerda: "..." }
});
// 3) 1 o 2 diagramas por lección nueva (formato DIAGRAMAS.md; aquí NO hace falta mapa mental de tema)
window.DIAGRAMAS = (window.DIAGRAMAS || []).concat([
  { leccion: "senales-vehiculos", tras: 3, diagrama: { tipo: "comparar", ... } }
]);
// 4) 12 preguntas tipo examen DGT por lección nueva (formato SPEC.md). Prefijo de id: "x<n>-" (por ejemplo, x1-001)
window.PREGUNTAS = (window.PREGUNTAS || []).concat([ /* ... */ ]);
// 5) 5 tarjetas por lección nueva. Ids "fx<n>-001"…; mismo formato que data/flashcards.js (emoji: "")
window.FLASHCARDS = (window.FLASHCARDS || []).concat([ /* ... */ ]);
```

Reglas:
- Español de España, muy claro, para principiantes absolutos. Sin emojis en ningún texto (deja `emoji: ""`). Se permite `**negrita**`.
- Datos correctos con la normativa vigente en 2026. Si no estás seguro de una cifra, no la pongas.
- Ids de lección únicos, con el prefijo del tema (`senales-…`, `via-…`).
- **Escribe el fichero por partes** para no superar tu límite de salida: crea el fichero con la sección 1 (Write) y añade después las secciones 2, 3, 4 y 5 con Edit al final del fichero.
- Validación obligatoria, desde la carpeta del proyecto: `node tools/validar-ampliacion.js data/ampliacion-<n>.js`. Corrige hasta que diga `OK`.

Para el tema nuevo **normas** («Normas, sanciones y conducción preventiva», orden 11), su agente crea en su lugar `data/teoria-normas.js` con el formato de TEMARIO de SPEC.md: `id: "normas"`, `orden: 11`, `icono: ""` y `color: "#5b6b7f"`. Las secciones 2 a 5 van en el mismo fichero, y además lleva **un mapa mental** `{ tema: "normas", diagrama: { tipo: "mapa", … } }` dentro de DIAGRAMAS.
