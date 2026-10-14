# Diagramas para memorizar: especificación

Ficheros: `data/diagramas-<tema>.js`, uno por tema y con los ids de tema de `SPEC.md`. La web dibuja cada diagrama con animaciones, así que **solo se escriben datos, nunca HTML ni SVG**.

```js
window.DIAGRAMAS = (window.DIAGRAMAS || []).concat([
  // EXACTAMENTE 1 mapa mental por tema (se muestra en la página del tema)
  { tema: "senales", diagrama: { tipo: "mapa", titulo: "...", centro: "...", ramas: [ ... ] } },
  // 1 o 2 diagramas por lección (ids de lección exactos de data/teoria-<tema>.js)
  { leccion: "senales-semaforos", tras: 2, diagrama: { tipo: "escala", ... } }
]);
```
- `tras` (opcional) es el índice, empezando en 0, del bloque de `contenido` de la lección **después del cual** se inserta el diagrama. Si no se pone, va al principio, justo tras el resumen. Elige el sitio donde mejor ayude a entender.
- Todos los textos admiten `**negrita**`. Lenguaje muy sencillo, sin emojis y con cifras exactas y coherentes con la lección.
- El objetivo es **memorizar**: frases cortas, nada de párrafos. Respeta los límites de longitud.

## Tipos (campo `tipo`)

1. **mapa**, mapa mental: `{ tipo:"mapa", titulo, centro:"≤3 palabras", ramas:[ { t:"≤3 palabras", hojas:["≤6 palabras", …] } ] }`. Entre 3 y 6 ramas, cada una con 2 a 4 hojas.
2. **flujo**, pasos en orden: `{ tipo:"flujo", titulo, pasos:[ { t:"≤4 palabras", d:"≤16 palabras" } ] }`. Entre 3 y 6 pasos.
3. **arbol**, decisión sí/no interactiva: `{ tipo:"arbol", titulo, raiz: NODO }`. Un NODO es `{ q:"pregunta de sí o no, ≤14 palabras", si: NODO|RES, no: NODO|RES }` y un RES es `{ r:"resultado ≤16 palabras", ok:true|false }`, donde `ok` indica si es lo permitido o correcto (false = prohibido o peligro). Máximo 3 niveles de profundidad.
4. **escala**, tramos numéricos: `{ tipo:"escala", titulo, unidad:"mg/l", min:0, max:0.8, tramos:[ { desde, hasta, t:"≤5 palabras", tono:"ok"|"warn"|"bad"|"info" } ], marcas:[ { v, t:"≤3 palabras" } ] }`. Los tramos son contiguos y cubren de min a max. `marcas` es opcional.
5. **piramide**, jerarquía (el primero es el que más manda): `{ tipo:"piramide", titulo, niveles:[ { t:"≤4 palabras", d:"≤12 palabras" } ] }`. Entre 3 y 6 niveles.
6. **linea**, línea de tiempo o progresión: `{ tipo:"linea", titulo, hitos:[ { k:"≤8 caracteres (ej. 4 años, 12 pts)", t:"≤5 palabras", d:"≤14 palabras" } ] }`. Entre 3 y 6 hitos.
7. **acronimo**, regla mnemotécnica por letras: `{ tipo:"acronimo", titulo, palabra:"PAS", letras:[ { l:"P", t:"Proteger", d:"≤14 palabras" } ] }`. Las letras forman `palabra`. Inventa acrónimos útiles y fáciles de recordar cuando ayuden.
8. **comparar**, columnas enfrentadas: `{ tipo:"comparar", titulo, columnas:[ { t:"≤3 palabras", tono:"ok"|"warn"|"bad"|"info", items:["≤8 palabras", …] } ] }`. Entre 2 y 3 columnas, cada una con 2 a 5 elementos.
9. **ciclo**, proceso circular que se repite: `{ tipo:"ciclo", titulo, centro:"≤2 palabras", pasos:[ { t:"≤3 palabras", d:"≤12 palabras" } ] }`. Entre 3 y 6 pasos.

Usa el tipo que mejor encaje con el contenido y varía entre lecciones; no pongas siempre el mismo. Ejemplos de encaje: tasas de alcohol o velocidades → **escala**; quién pasa primero en un cruce → **arbol**; jerarquía de señales → **piramide**; P-A-S → **acronimo**; parada frente a estacionamiento → **comparar**; puntos del carnet o ITV → **linea**; observar-señalizar-ejecutar → **flujo** o **ciclo**.

## Validación obligatoria
`node C:/Users/zeus1/OneDrive/Desktop/carnet-b-valencia/tools/validar-diagramas.js data/diagramas-<tema>.js` (ejecútalo desde la carpeta del proyecto). Corrige hasta que diga `OK`.
