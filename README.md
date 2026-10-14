# 🚗 Carnet B · Comunitat Valenciana

Web para estudiar el **examen teórico del permiso B de la DGT** de forma sencilla, visual y con animaciones. Pensada para quien se saca el carnet en Valencia, Alicante o Castellón.

**👉 Web publicada:** https://esteban7754.github.io/carnet-b-valencia/

## ✨ Qué incluye

| Sección | Qué hace |
|---|---|
| 📚 **Temario** | 10 temas y 68 lecciones. Cada una empieza con un **resumen de 30 segundos** y trae ideas clave 🔑, trucos 💡, trampas típicas ⚠️, tablas, señales y mini-preguntas. Botón **🔊 Escuchar** para oírla en voz alta. |
| 🎮 **Simuladores** | 8 simuladores animados: distancia de frenada, regla de los 2 segundos, semáforo, glorieta, alcoholímetro, luces, adelantar a un ciclista y conducta PAS. |
| 🃏 **Tarjetas** | 150 tarjetas de memoria que se giran. Las que no sabes vuelven a salir antes. |
| ✅ **Tests** | 355 preguntas tipo DGT, 75 de ellas basadas en los tests oficiales de la revista DGT. Puedes filtrar por tema, elegir las no vistas o las que más fallas, y cada respuesta lleva su explicación. |
| ⏱️ **Simulacro** | 30 preguntas en 30 minutos. Con 3 fallos o menos sale APTO, igual que el examen real. |
| 🚦 **Señales** | Galería de señales en tarjetas que se giran. |
| 🔁 **Fallos** | Cada pregunta fallada se guarda hasta que la aciertes. |
| 🍊 **Guía CV** | Jefaturas, pasos, costes y enlaces oficiales. |
| 🏆 **Progreso** | Niveles (de 🚶 Peatón a 🏆 Leyenda DGT), XP, 15 logros, racha de días y un indicador de «¿estoy listo?». |

Además funciona **sin conexión** y se puede **instalar en el móvil** como una app (PWA). Tiene tema claro y oscuro, y tu progreso se guarda en el navegador.

## 🖥️ Usarla en local

No necesita instalar nada: abre `index.html` con doble clic. También puedes usar el servidor incluido:

```bash
node server.js
```

y abrir http://localhost:5480

## 🚀 Despliegue

Se publica sola en **GitHub Pages** con cada `git push` a `main`. El flujo está en `.github/workflows/pages.yml`: comprueba la sintaxis de los ficheros y publica la web.

Al ser una web estática sin compilación, también funciona en Netlify, Vercel o Cloudflare Pages. Solo hay que apuntar a la raíz del repositorio y dejar vacío el comando de build.

## 🗂️ Estructura

```
index.html            página principal
css/                  estilos (styles.css + extra.css)
js/app.js             la aplicación (router, temario, tests, simulacro, progreso)
js/simuladores.js     simuladores interactivos animados
data/teoria-*.js      temario (formato en SPEC.md)
data/preguntas-*.js   banco de preguntas
data/resumenes-*.js   resúmenes de 30 segundos
data/flashcards.js    tarjetas de memoria
data/info-cv.js       información de la Comunitat Valenciana
sw.js, manifest.webmanifest   app instalable / sin conexión
```

Para añadir preguntas, crea otro `data/preguntas-xxx.js` con el formato de `SPEC.md` y añade su `<script>` en `index.html`.

## ⚠️ Aviso

Es un proyecto personal de estudio. El contenido se basa en el Reglamento General de Circulación y en el temario de la DGT, pero algunas cifras (multas, novedades de 2026, direcciones) pueden cambiar. **Compruébalas siempre en [dgt.es](https://www.dgt.es)**.
