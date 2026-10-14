# Carnet B · Comunitat Valenciana

Web para estudiar el **examen teórico del permiso B de la DGT** de forma sencilla y visual. Pensada para quien se saca el carnet en Valencia, Alicante o Castellón.

**Web publicada:** https://esteban7754.github.io/carnet-b-valencia/

## Qué incluye

| Sección | Qué hace |
|---|---|
| **Aprender** | Una ruta de 10 unidades. Cada una tiene lecciones cortas, simuladores, una práctica de 10 preguntas con estrellas y un control final. Cada lección empieza con un resumen de 30 segundos y tiene botón para escucharla en voz alta. |
| **Simuladores** | 8 simuladores guiados en tres pasos: *Entiende → Experimenta → Demuéstralo*. Cubren la distancia de frenada, la regla de los 2 segundos, el semáforo, la glorieta, el alcohol, las luces, cómo adelantar a un ciclista y la conducta PAS. Tienen misiones que se marcan solas, un narrador que explica lo que pasa y un reto final de hasta 3 estrellas. |
| **Practicar** | Repaso espaciado: cada pregunta vuelve a los 1, 3, 7, 16 y 35 días según la vayas acertando. También hay tests personalizados, 150 tarjetas de memoria y una galería de señales. |
| **Exámenes** | Simulacro de 30 preguntas en 30 minutos, que es APTO con 3 fallos como máximo. Además, **27 tests oficiales de la Revista DGT (2020-2026)** ordenados por mes, con modo examen y modo práctica. |
| **Preparación** | Probabilidad real de aprobar, calculada con tu acierto reciente («aprobarías 7 de cada 10»). Muestra también el dominio por tema, un calendario de actividad, tu evolución en los exámenes, las preguntas que más se te resisten y los logros. |
| **Guía CV** | Jefaturas de tráfico, pasos, costes y enlaces oficiales. |

**Gamificación basada en lo que aprendes:**
- Meta diaria configurable y racha de días.
- Protectores de racha: ganas uno cada 7 días.
- 3 misiones al día.
- Estrellas en la ruta y logros con barra de progreso.

En total hay **más de 650 preguntas**. Son 555 propias de práctica más los tests oficiales (habrá algunas más cuando termine el último bloque). La web funciona sin conexión, se puede instalar en el móvil (PWA) y tiene modo claro y oscuro.

## Usarla en local

No necesita instalar nada: abre `index.html` con doble clic. También puedes usar el servidor incluido y abrir http://localhost:5480:

```bash
node server.js
```

## Despliegue

Se publica sola en **GitHub Pages** con cada `git push` a `main`. El flujo está en `.github/workflows/pages.yml`: comprueba la sintaxis de los ficheros y publica la web.

Al ser una web estática sin compilación, también funciona en Netlify, Vercel o Cloudflare Pages. Solo hay que apuntar a la raíz del repositorio y no poner comando de build.

## Estructura

```
index.html                 página principal
css/styles.css             sistema visual (paleta, modo oscuro, animaciones)
js/icons.js                iconos SVG y pictogramas de las señales
js/simuladores.js          simuladores guiados
js/app.js                  aplicación: ruta, sesiones, repaso espaciado, rachas, preparación
data/teoria-*.js           temario (formato en SPEC.md)
data/preguntas-*.js        banco de preguntas
data/oficiales-*.js        tests oficiales de la Revista DGT, por número y mes
data/resumenes-*.js        resúmenes de 30 segundos
data/flashcards.js         tarjetas de memoria
data/info-cv.js            información de la Comunitat Valenciana
sw.js, manifest.webmanifest   app instalable y sin conexión
```

## Aviso

Es un proyecto personal de estudio. Las preguntas de los tests oficiales están redactadas de nuevo a partir de los tests de la [Revista DGT](https://revista.dgt.es/es/test/), con la misma respuesta correcta y un enlace al original. Algunas se han actualizado a la normativa de 2026, como la baliza V-16, el Real Decreto 518/2026 o que ya no se pueden superar 20 km/h al adelantar.

Las cifras pueden cambiar: **compruébalas siempre en [dgt.es](https://www.dgt.es)**.
