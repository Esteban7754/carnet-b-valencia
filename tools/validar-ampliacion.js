// Valida un fichero de ampliación (data/ampliacion-N.js o data/teoria-normas.js) según AMPLIACION.md
// Uso: node tools/validar-ampliacion.js data/ampliacion-1.js
const fs = require("fs"), path = require("path");
const raiz = path.join(__dirname, "..");
const fich = path.resolve(process.argv[2] || ""); if (!process.argv[2]) { console.error("Indica el fichero"); process.exit(1); }
global.window = {};
fs.readdirSync(path.join(raiz, "data")).filter(f => f.startsWith("teoria-") && path.join(raiz, "data", f) !== fich).forEach(f => require(path.join(raiz, "data", f)));
const existentes = new Set(); window.TEMARIO.forEach(t => t.lecciones.forEach(l => existentes.add(l.id)));
const temaIds = new Set(window.TEMARIO.map(t => t.id).concat(["normas"]));
const antesQ = new Set(); fs.readdirSync(path.join(raiz, "data")).filter(f => /^preguntas-|^oficiales-/.test(f)).forEach(f => { const w = global.window; global.window = {}; try { require(path.join(raiz, "data", f)); (window.PREGUNTAS || []).forEach(q => antesQ.add(q.id)); } catch (e) { /* */ } global.window = w; });
const temarioBase = window.TEMARIO.length;
window.AMPLIACION = []; window.RESUMENES = {}; window.DIAGRAMAS = []; window.PREGUNTAS = []; window.FLASHCARDS = [];
const errores = []; const err = m => errores.push(m);
try { require(fich); } catch (e) { console.log("Error de sintaxis: " + e.message); process.exit(1); }
const nuevasTema = window.TEMARIO.slice(temarioBase);
const lecciones = [];
window.AMPLIACION.forEach((a, i) => {
  if (!temaIds.has(a.tema)) err(`AMPLIACION #${i}: tema desconocido ${a.tema}`);
  if (!existentes.has(a.despues)) err(`AMPLIACION #${i}: "despues" no es una lección existente: ${a.despues}`);
  if (!a.leccion) return err(`AMPLIACION #${i}: falta leccion`);
  lecciones.push(Object.assign({ tema: a.tema }, a.leccion));
});
nuevasTema.forEach(t => { if (t.id !== "normas") err("Solo se puede crear el tema nuevo 'normas'"); if (t.orden !== 11) err("normas debe tener orden 11"); (t.lecciones || []).forEach(l => lecciones.push(Object.assign({ tema: t.id }, l))); });
if (!lecciones.length) err("No hay lecciones nuevas");
const emoji = /\p{Extended_Pictographic}/u;
const FORMAS = ["triangulo", "triangulo-invertido", "octogono", "circulo-rojo", "circulo-azul", "cuadrado-azul", "rombo", "rectangulo-verde", "rectangulo-blanco", "fin", "circulo-rojo-lleno", "panel-amarillo"];
const ids = new Set();
lecciones.forEach(l => {
  const w = `Lección ${l.id}`;
  if (!l.id || existentes.has(l.id) || ids.has(l.id)) err(`${w}: id vacío o repetido`); ids.add(l.id);
  if (!l.titulo) err(`${w}: falta titulo`);
  const C = l.contenido || []; if (C.length < 8 || C.length > 16) err(`${w}: debe tener entre 8 y 16 bloques (tiene ${C.length})`);
  const quiz = C.filter(b => b.tipo === "quiz"); if (quiz.length < 1 || quiz.length > 2) err(`${w}: debe tener 1 o 2 quiz`);
  C.forEach((b, k) => {
    if (!["p", "lista", "clave", "truco", "aviso", "tabla", "senal", "quiz"].includes(b.tipo)) err(`${w} bloque ${k}: tipo inválido ${b.tipo}`);
    if (b.tipo === "quiz" && (!Array.isArray(b.opciones) || b.opciones.length !== 3 || ![0, 1, 2].includes(b.correcta) || !b.explicacion)) err(`${w} bloque ${k}: quiz mal formado`);
    if (b.tipo === "senal" && !FORMAS.includes(b.forma)) err(`${w} bloque ${k}: forma de señal inválida`);
    if (b.tipo === "tabla" && (!Array.isArray(b.cabecera) || !Array.isArray(b.filas) || b.filas.some(f => f.length !== b.cabecera.length))) err(`${w} bloque ${k}: tabla incoherente`);
  });
  if (emoji.test(JSON.stringify(l))) err(`${w}: contiene emojis`);
  const r = window.RESUMENES[l.id]; if (!r || !r.idea || !Array.isArray(r.puntos) || r.puntos.length !== 3 || !r.recuerda) err(`${w}: falta resumen completo`);
  const dg = window.DIAGRAMAS.filter(d => d.leccion === l.id); if (dg.length < 1 || dg.length > 2) err(`${w}: debe tener 1 o 2 diagramas`);
  dg.forEach(d => { if (d.tras != null && (d.tras < 0 || d.tras >= C.length)) err(`${w}: diagrama con "tras" fuera de rango`); });
  const qs = window.PREGUNTAS.filter(q => q.tema === l.tema); // por tema
  const fc = window.FLASHCARDS.filter(c => c.tema === l.tema);
  if (!qs.length) err(`${w}: no hay preguntas de su tema`); if (!fc.length) err(`${w}: no hay tarjetas de su tema`);
});
const nQ = window.PREGUNTAS.length, nF = window.FLASHCARDS.length;
if (nQ < lecciones.length * 10) err(`Pocas preguntas: ${nQ} (mínimo ${lecciones.length * 10})`);
if (nF < lecciones.length * 4) err(`Pocas tarjetas: ${nF} (mínimo ${lecciones.length * 4})`);
const qid = new Set();
window.PREGUNTAS.forEach(q => {
  if (!q.id || qid.has(q.id) || antesQ.has(q.id)) err(`Pregunta ${q.id}: id vacío o repetido`); qid.add(q.id);
  if (!temaIds.has(q.tema)) err(`Pregunta ${q.id}: tema inválido`);
  if (!Array.isArray(q.opciones) || q.opciones.length !== 3 || ![0, 1, 2].includes(q.correcta) || !q.explicacion) err(`Pregunta ${q.id}: mal formada`);
  if (q.senal && !FORMAS.includes(q.senal.forma)) err(`Pregunta ${q.id}: forma de señal inválida`);
});
const fid = new Set(); window.FLASHCARDS.forEach(c => { if (!c.id || fid.has(c.id) || !c.frente || !c.dorso || !temaIds.has(c.tema)) err(`Tarjeta ${c.id}: mal formada o repetida`); fid.add(c.id); });
// diagramas: reutiliza el validador de diagramas sobre un fichero temporal
const tmp = path.join(require("os").tmpdir(), "dg-ampliacion-" + process.pid + ".js");
fs.writeFileSync(tmp, "window.DIAGRAMAS = " + JSON.stringify(window.DIAGRAMAS) + ";");
const { execFileSync } = require("child_process");
try { execFileSync(process.execPath, [path.join(__dirname, "validar-diagramas.js"), "--ampliacion", fich, tmp], { stdio: "pipe" }); }
catch (e) { String(e.stdout || "").split("\n").filter(x => x && !/error\(es\)/.test(x)).forEach(x => err("Diagrama: " + x.replace(/^.*?·\s*/, ""))); }
fs.unlinkSync(tmp);
if (errores.length) { console.log(errores.join("\n")); console.log(`\n${errores.length} error(es)`); process.exit(1); }
console.log(`OK · ${lecciones.length} lecciones, ${window.DIAGRAMAS.length} diagramas, ${nQ} preguntas, ${nF} tarjetas`);
