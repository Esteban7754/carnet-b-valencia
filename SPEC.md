# Carnet B Comunitat Valenciana — Especificación de datos

Web estática (sin build) que se abre con doble clic en `index.html` (file://).
Por eso TODOS los datos son ficheros `.js` que añaden a variables globales (no JSON, no fetch).
Idioma: español de España, tono cercano, didáctico y sencillo, para principiantes absolutos.
Contenido basado en el Reglamento General de Circulación y el temario oficial DGT del permiso B (vigente 2025-2026).

## Temas (ids fijos, usarlos tal cual)
| id | título |
|---|---|
| `examen` | El permiso B y el examen (Comunitat Valenciana) |
| `via` | La vía, el vehículo y definiciones |
| `senales` | Señales: agentes, semáforos, verticales y marcas viales |
| `velocidad` | Velocidad y distancias |
| `prioridad` | Prioridad de paso, intersecciones y glorietas |
| `maniobras` | Maniobras: incorporación, adelantamiento, giros, parada y estacionamiento |
| `alumbrado` | Alumbrado, señales acústicas, autopistas y túneles |
| `factores` | Alcohol, drogas, medicamentos, fatiga y distracciones |
| `seguridad` | Seguridad activa/pasiva, cinturón, SRI, neumáticos, mecánica y documentación |
| `accidentes` | Accidentes y primeros auxilios (PAS), condiciones adversas y conducción eficiente |

## Formato TEORÍA — fichero `data/teoria-<id>.js`
```js
window.TEMARIO = window.TEMARIO || [];
window.TEMARIO.push({
  id: "senales",              // id del tema de la tabla
  orden: 3,                   // posición 1..10 según la tabla
  titulo: "Señales",
  icono: "🚦",                // un emoji
  color: "#e63946",           // color de acento del tema
  resumen: "Frase corta que resume el tema.",
  lecciones: [
    {
      id: "senales-semaforos",
      titulo: "Semáforos",
      minutos: 6,             // tiempo estimado de lectura
      contenido: [ /* bloques, ver abajo */ ]
    }
  ]
});
```
### Tipos de bloque (campo `tipo`)
- `{tipo:"p", texto:"..."}` párrafo. Se permite `**negrita**` dentro de cualquier texto.
- `{tipo:"lista", items:["...","..."]}`
- `{tipo:"clave", texto:"..."}` idea clave que cae mucho en el examen (caja destacada).
- `{tipo:"truco", texto:"..."}` regla mnemotécnica o truco para recordar.
- `{tipo:"aviso", texto:"..."}` trampa típica del examen / error frecuente.
- `{tipo:"tabla", cabecera:["Vehículo","Autopista","Carretera"], filas:[["Turismo","120","90"]]}`
- `{tipo:"senal", forma:"...", simbolo:"...", nombre:"R-1 Ceda el paso", descripcion:"..."}`
  - `forma` ∈ `triangulo` (peligro, borde rojo), `triangulo-invertido` (ceda el paso), `octogono` (STOP),
    `circulo-rojo` (prohibición, borde rojo fondo blanco), `circulo-azul` (obligación), `cuadrado-azul` (indicación),
    `rombo` (prioridad, amarillo), `rectangulo-verde`, `rectangulo-blanco`, `fin` (círculo blanco con banda diagonal gris),
    `circulo-rojo-lleno` (dirección prohibida), `panel-amarillo` (obras).
  - `simbolo`: texto corto (≤4 caracteres) o emoji que va dentro: "50", "STOP", "⛔", "🚸", "↱", "P", "🚲"...
- `{tipo:"quiz", pregunta:"...", opciones:["a","b","c"], correcta:1, explicacion:"..."}` mini-pregunta para comprobar comprensión dentro de la lección (1-2 por lección).

Cada tema: 4-7 lecciones; cada lección 6-14 bloques, mezclando tipos (no todo párrafos). Datos numéricos correctos y actuales.

## Formato PREGUNTAS — fichero `data/preguntas-<grupo>.js`
Estilo examen DGT: 3 opciones, solo una correcta.
```js
window.PREGUNTAS = window.PREGUNTAS || [];
window.PREGUNTAS.push(
  {
    id: "sen-001",             // prefijo único por fichero + número
    tema: "senales",           // id de la tabla
    pregunta: "Esta señal indica...",
    opciones: ["...", "...", "..."],   // exactamente 3
    correcta: 0,               // índice 0..2 — reparte la respuesta correcta entre 0, 1 y 2
    explicacion: "Por qué es correcta, citando la norma de forma sencilla.",
    senal: {forma:"circulo-rojo", simbolo:"50"}   // OPCIONAL, si la pregunta trata de una señal
  },
  ...
);
```

## Validación obligatoria
Tras escribir el fichero, ejecutar (PowerShell o bash):
`node -e "global.window={};require('RUTA_ABSOLUTA');console.log((window.TEMARIO||[]).length,(window.PREGUNTAS||[]).length)"`
Si da error de sintaxis, corregir hasta que funcione. Cuidado con comillas dentro de strings (usa comillas dobles fuera y « » o ' dentro).
