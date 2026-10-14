// Valida ficheros data/diagramas-*.js contra DIAGRAMAS.md
// Uso: node tools/validar-diagramas.js data/diagramas-senales.js [otro.js ...]
const fs = require("fs"), path = require("path");
const raiz = path.join(__dirname, "..");
global.window = {};
fs.readdirSync(path.join(raiz, "data")).filter(f => f.startsWith("teoria-")).forEach(f => require(path.join(raiz, "data", f)));
let args = process.argv.slice(2), ampliacion = null;
if (args[0] === "--ampliacion") { ampliacion = path.resolve(args[1]); args = args.slice(2); }
if (ampliacion) { window.AMPLIACION = []; const n0 = window.TEMARIO.length; try { delete require.cache[ampliacion]; require(ampliacion); } catch (e) { /* */ }
  window.AMPLIACION.forEach(a => { const t = window.TEMARIO.find(x => x.id === a.tema); if (t && a.leccion) t.lecciones.push(a.leccion); }); }
const lecciones = {}; window.TEMARIO.forEach(t => t.lecciones.forEach(l => { lecciones[l.id] = { tema: t.id, bloques: (l.contenido || []).length }; }));
const temas = new Set(window.TEMARIO.map(t => t.id).concat(["normas"]));
const ficheros = args; if (!ficheros.length) { console.error("Indica al menos un fichero"); process.exit(1); }
let errores = [];
const palabras = s => String(s || "").replace(/\*\*/g, "").trim().split(/\s+/).filter(Boolean).length;
const emoji = /\p{Extended_Pictographic}/u;
ficheros.forEach(fich => {
  window.DIAGRAMAS = [];
  try { delete require.cache[require.resolve(path.resolve(fich))]; require(path.resolve(fich)); } catch (e) { errores.push(`${fich}: error de sintaxis: ${e.message}`); return; }
  const D = window.DIAGRAMAS; const err = m => errores.push(`${path.basename(fich)} · ${m}`);
  if (!Array.isArray(D) || !D.length) return err("window.DIAGRAMAS vacío");
  const mapas = D.filter(d => d.tema);
  if (!ampliacion && mapas.length !== 1) err(`debe haber exactamente 1 entrada con "tema" (mapa mental); hay ${mapas.length}`);
  const temaFich = mapas[0] && mapas[0].tema;
  D.forEach((e, i) => {
    const w = `#${i}${e.leccion ? " (" + e.leccion + ")" : e.tema ? " (tema " + e.tema + ")" : ""}`;
    const d = e.diagrama; if (!d || !d.tipo) return err(`${w}: falta diagrama.tipo`);
    if (e.tema) { if (!temas.has(e.tema)) err(`${w}: tema desconocido`); if (d.tipo !== "mapa") err(`${w}: la entrada de tema debe ser tipo "mapa"`); }
    else if (e.leccion) { const L = lecciones[e.leccion]; if (!L) err(`${w}: id de lección inexistente`); else { if (temaFich && !ampliacion && L.tema !== temaFich) err(`${w}: la lección no es del tema ${temaFich}`); if (e.tras != null && (!Number.isInteger(e.tras) || e.tras < 0 || e.tras >= L.bloques)) err(`${w}: "tras" fuera de rango (0..${L.bloques - 1})`); } }
    else err(`${w}: falta "leccion" o "tema"`);
    if (!d.titulo) err(`${w}: falta titulo`);
    if (emoji.test(JSON.stringify(d))) err(`${w}: contiene emojis`);
    const rango = (arr, a, b, n) => { if (!Array.isArray(arr) || arr.length < a || arr.length > b) err(`${w}: ${n} debe tener entre ${a} y ${b} elementos`); return Array.isArray(arr) ? arr : []; };
    const lim = (s, n, q) => { if (!s) err(`${w}: falta ${q}`); else if (palabras(s) > n) err(`${w}: "${String(s).slice(0, 40)}…" supera ${n} palabras (${q})`); };
    switch (d.tipo) {
      case "mapa": lim(d.centro, 3, "centro"); rango(d.ramas, 3, 6, "ramas").forEach(r => { lim(r.t, 3, "rama.t"); rango(r.hojas, 2, 4, "hojas").forEach(h => lim(h, 6, "hoja")); }); break;
      case "flujo": rango(d.pasos, 3, 6, "pasos").forEach(p => { lim(p.t, 4, "paso.t"); lim(p.d, 16, "paso.d"); }); break;
      case "ciclo": lim(d.centro, 2, "centro"); rango(d.pasos, 3, 6, "pasos").forEach(p => { lim(p.t, 3, "paso.t"); lim(p.d, 12, "paso.d"); }); break;
      case "arbol": { const nodo = (n, prof) => { if (!n) return err(`${w}: nodo vacío`); if (n.r != null) { lim(n.r, 16, "resultado"); if (typeof n.ok !== "boolean") err(`${w}: resultado sin ok true/false`); return; } if (prof > 3) err(`${w}: más de 3 niveles`); lim(n.q, 14, "pregunta"); nodo(n.si, prof + 1); nodo(n.no, prof + 1); }; nodo(d.raiz, 1); break; }
      case "escala": { if (typeof d.min !== "number" || typeof d.max !== "number" || d.min >= d.max) err(`${w}: min/max inválidos`); const T = rango(d.tramos, 2, 6, "tramos"); T.forEach((t, k) => { lim(t.t, 5, "tramo.t"); if (!["ok", "warn", "bad", "info"].includes(t.tono)) err(`${w}: tono inválido`); if (k && Math.abs(T[k - 1].hasta - t.desde) > 1e-9) err(`${w}: tramos no contiguos`); }); if (T.length && (T[0].desde !== d.min || T[T.length - 1].hasta !== d.max)) err(`${w}: los tramos deben cubrir de min a max`); (d.marcas || []).forEach(m => { lim(m.t, 3, "marca.t"); if (m.v < d.min || m.v > d.max) err(`${w}: marca fuera de rango`); }); if (!d.unidad) err(`${w}: falta unidad`); break; }
      case "piramide": rango(d.niveles, 3, 6, "niveles").forEach(n => { lim(n.t, 4, "nivel.t"); lim(n.d, 12, "nivel.d"); }); break;
      case "linea": rango(d.hitos, 3, 6, "hitos").forEach(h => { if (!h.k || String(h.k).length > 8) err(`${w}: hito.k vacío o > 8 caracteres`); lim(h.t, 5, "hito.t"); lim(h.d, 14, "hito.d"); }); break;
      case "acronimo": { const L = rango(d.letras, 2, 7, "letras"); if (L.map(x => x.l).join("").toUpperCase() !== String(d.palabra || "").toUpperCase()) err(`${w}: las letras no forman la palabra`); L.forEach(x => { lim(x.t, 3, "letra.t"); lim(x.d, 14, "letra.d"); }); break; }
      case "comparar": rango(d.columnas, 2, 3, "columnas").forEach(c => { lim(c.t, 3, "columna.t"); if (c.tono && !["ok", "warn", "bad", "info"].includes(c.tono)) err(`${w}: tono inválido`); rango(c.items, 2, 5, "items").forEach(it => lim(it, 8, "item")); }); break;
      default: err(`${w}: tipo desconocido "${d.tipo}"`);
    }
  });
  if (temaFich && !ampliacion) { const ls = window.TEMARIO.find(t => t.id === temaFich).lecciones.map(l => l.id); const sin = ls.filter(id => !D.some(e => e.leccion === id)); if (sin.length) err(`lecciones sin diagrama: ${sin.join(", ")}`); }
});
if (errores.length) { console.log(errores.join("\n")); console.log(`\n${errores.length} error(es)`); process.exit(1); } else console.log("OK");
