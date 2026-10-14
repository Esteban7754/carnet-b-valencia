/* Carnet B · Comunitat Valenciana — app de estudio del teórico DGT */
(function () {
  "use strict";
  const { icon, TEMA_ICON, PICTO, EMOJI_PICTO } = window.ICONS;

  // ───────────────────────── Datos ─────────────────────────
  const TEMAS = [
    { id: "examen", titulo: "El permiso y el examen", color: "#1f3a5f" },
    { id: "via", titulo: "La vía y el vehículo", color: "#2a7f7a" },
    { id: "senales", titulo: "Señales", color: "#c0473a" },
    { id: "velocidad", titulo: "Velocidad y distancias", color: "#d4672a" },
    { id: "prioridad", titulo: "Prioridad de paso", color: "#6c5a9c" },
    { id: "maniobras", titulo: "Maniobras", color: "#2f6f9f" },
    { id: "alumbrado", titulo: "Luces y autopistas", color: "#b8861f" },
    { id: "factores", titulo: "Alcohol, drogas y fatiga", color: "#a34d6d" },
    { id: "seguridad", titulo: "Seguridad y vehículo", color: "#3f7d4e" },
    { id: "accidentes", titulo: "Accidentes y eficiencia", color: "#8c3b3b" },
    { id: "normas", titulo: "Normas y sanciones", color: "#5b6b7f" }
  ];
  // Lecciones de ampliación: se insertan en su tema tras la lección indicada
  (window.AMPLIACION || []).forEach(x => {
    const t = (window.TEMARIO || []).find(tt => tt.id === x.tema); if (!t || !x.leccion || t.lecciones.some(l => l.id === x.leccion.id)) return;
    let k = t.lecciones.findIndex(l => l.id === x.despues); if (k < 0) k = t.lecciones.length - 1;
    while (k + 1 < t.lecciones.length && t.lecciones[k + 1]._amp === x.despues) k++;
    t.lecciones.splice(k + 1, 0, Object.assign({ _amp: x.despues }, x.leccion));
  });
  const temario = (window.TEMARIO || []).slice().sort((a, b) => (a.orden || 99) - (b.orden || 99));
  const tema = id => { const b = TEMAS.find(t => t.id === id) || { id, titulo: id, color: "#1f3a5f" }; const t = temario.find(x => x.id === id); return Object.assign({}, b, { tituloLargo: t ? t.titulo : b.titulo, resumen: t ? t.resumen : "", lecciones: t ? t.lecciones : [], ic: TEMA_ICON[id] || "book" }); };
  const TEMA_IDS = TEMAS.map(t => t.id).filter(id => temario.some(t => t.id === id && t.lecciones && t.lecciones.length));

  const valida = q => q && q.id && Array.isArray(q.opciones) && q.opciones.length >= 2 && typeof q.correcta === "number" && q.correcta >= 0 && q.correcta < q.opciones.length && TEMA_IDS.includes(q.tema);
  const OFICIALES = (window.TESTS_OFICIALES || []).filter(t => t && t.id && Array.isArray(t.preguntas))
    .map(t => Object.assign({}, t, { preguntas: t.preguntas.filter(valida).map(q => Object.assign({ oficial: t.id, fuente: t.url }, q)) }))
    .filter(t => t.preguntas.length).sort((a, b) => (b.numero || 0) - (a.numero || 0));
  const preguntas = []; const visto = new Set();
  const hayOficiales = OFICIALES.length > 0;
  [...(window.PREGUNTAS || []), ...OFICIALES.flatMap(t => t.preguntas)].forEach(q => {
    if (!valida(q) || visto.has(q.id)) return;
    if (hayOficiales && q.fuente && /revista\.dgt\.es\/es\/test/.test(q.fuente) && !q.oficial) return; // ya incluidas en los tests oficiales
    visto.add(q.id); preguntas.push(q);
  });
  const qById = id => preguntas.find(q => q.id === id);
  const SIMS = window.SIMULADORES || [];
  const RES = window.RESUMENES || {};
  const FC = (window.FLASHCARDS || []).filter(c => c && c.id && c.frente && c.dorso);
  const INFO = window.INFO_CV || {};
  const DGS = (window.DIAGRAMAS || []).filter(e => e && e.diagrama && window.DIAGRAMA && window.DIAGRAMA.tipos.includes(e.diagrama.tipo));
  const mapaTema = id => DGS.find(e => e.tema === id);
  const dgLeccion = lid => DGS.filter(e => e.leccion === lid);
  const dgHTML = (e, color) => window.DIAGRAMA ? window.DIAGRAMA.html(e.diagrama, color) : "";
  const activarDg = root => { if (window.DIAGRAMA) window.DIAGRAMA.activar(root); };

  // ───────────────────────── Estado ─────────────────────────
  const CU = window.CUENTA;
  const clave = () => CU ? CU.clave() : "carnetB-v2";
  const DIA = 864e5;
  const hoyStr = (d = new Date()) => { const z = new Date(d.getTime() - d.getTimezoneOffset() * 6e4); return z.toISOString().slice(0, 10); };
  const VACIO = () => ({ leidas: {}, srs: {}, hist: [], dias: {}, meta: 20, protectores: 0, congelados: [], premiada: 0, examenes: [], oficiales: {}, sims: {}, fc: {}, practicas: {}, controles: {}, hoy: null, combo: 0, maxCombo: 0, ultima: null, theme: null, misionesOk: {}, guardadas: {}, records: {} });
  const leer = (k) => { try { return JSON.parse(localStorage.getItem(k || clave())) || null; } catch (e) { return null; } };
  let S = VACIO();
  function cargarEstado() { S = Object.assign(VACIO(), leer() || (CU && CU.usuario ? {} : migrar())); }
  function migrar() {
    try {
      const v1 = JSON.parse(localStorage.getItem("carnetB-v1")); if (!v1) return {};
      const out = { leidas: v1.leidas || {}, examenes: (v1.examenes || []).map(e => Object.assign({ tipo: "simulacro" }, e)), theme: v1.theme || null, srs: {} };
      Object.entries(v1.resp || {}).forEach(([id, r]) => { out.srs[id] = { b: r.last ? Math.min(3, r.ok) : 0, ok: r.ok, ko: r.ko, due: Date.now() }; });
      return out;
    } catch (e) { return {}; }
  }
  const save = () => { S._ts = Date.now(); try { localStorage.setItem(clave(), JSON.stringify(S)); } catch (e) { /* sin almacenamiento */ } if (CU) CU.subir(S); };
  const conDatos = d => !!d && !!((d.hist && d.hist.length) || Object.keys(d.leidas || {}).length || (d.examenes && d.examenes.length));
  async function sincronizar() {
    if (!(CU && CU.nube && CU.usuario)) return;
    try {
      const remoto = await CU.bajar();
      if (remoto && (remoto._ts || 0) > (S._ts || 0)) { S = Object.assign(VACIO(), remoto); try { localStorage.setItem(clave(), JSON.stringify(S)); } catch (e) { /* */ } }
      else if (conDatos(S)) CU.subir(S);
    } catch (e) { console.warn("No se pudo sincronizar", e); }
  }

  function hoy() {
    const f = hoyStr();
    if (!S.hoy || S.hoy.fecha !== f) S.hoy = { fecha: f, resp: 0, aciertos: 0, combo: 0, lecciones: 0, sims: 0, fc: 0, repaso: 0, examen: 0 };
    return S.hoy;
  }
  const puntosDia = d => (S.dias[d] || 0);
  const cumplido = d => puntosDia(d) >= S.meta;
  function sumarPuntos(n) {
    const f = hoyStr(); const antes = cumplido(f);
    S.dias[f] = (S.dias[f] || 0) + n;
    if (!antes && cumplido(f)) setTimeout(metaCumplida, 500);
  }
  function racha() {
    let n = 0; const d = new Date();
    if (!cumplido(hoyStr(d))) d.setDate(d.getDate() - 1);
    for (;;) { const k = hoyStr(d); if (cumplido(k) || S.congelados.includes(k)) { n++; d.setDate(d.getDate() - 1); } else break; }
    return n;
  }
  function aplicarProtectores() {
    // si faltaste algún día y tienes protectores, los usa para no perder la racha
    const d = new Date(); d.setDate(d.getDate() - 1);
    const huecos = [];
    for (let k = 0; k < 4; k++) { const s = hoyStr(d); if (cumplido(s) || S.congelados.includes(s)) break; huecos.push(s); d.setDate(d.getDate() - 1); }
    const antes = hoyStr(d);
    if (huecos.length && huecos.length <= S.protectores && (cumplido(antes) || S.congelados.includes(antes))) {
      S.congelados.push(...huecos); S.protectores -= huecos.length; save();
      setTimeout(() => toast(icon("shieldCheck", 18) + ` Has usado ${huecos.length} protector${huecos.length > 1 ? "es" : ""}: tu racha sigue viva`), 1200);
    }
  }
  function metaCumplida() {
    const r = racha();
    if (r > 0 && r % 7 === 0 && S.premiada !== r) { S.premiada = r; S.protectores = Math.min(2, S.protectores + 1); save(); }
    modal(icon("flame", 44), `¡Meta del día cumplida!`, `Llevas <b>${r} día${r === 1 ? "" : "s"}</b> de racha. ${r % 7 === 0 ? "Has ganado un <b>protector de racha</b>." : `Vuelve mañana para llegar a ${r + 1}.`}`, true);
    pintarTopbar(true);
  }

  // Repaso espaciado (cajas de Leitner): intervalos en días por nivel
  const INTERVALO = [0, 1, 3, 7, 16, 35];
  const estado = id => { const s = S.srs[id]; if (!s) return "nueva"; return s.b >= 3 ? "dominada" : "aprendiendo"; };
  const pendientes = () => preguntas.filter(q => { const s = S.srs[q.id]; return s && s.due <= Date.now() && s.b < 5; });

  function registrar(q, ok, ctx = {}) {
    const s = S.srs[q.id] || { b: 0, ok: 0, ko: 0 };
    const h = hoy();
    if (s.due && s.due <= Date.now()) h.repaso++;
    if (ok) { s.ok++; s.b = Math.min(5, s.b + 1); s.due = Date.now() + INTERVALO[s.b] * DIA; }
    else { s.ko++; s.b = 0; s.due = Date.now(); }
    s.ts = Date.now(); S.srs[q.id] = s;
    S.hist.push({ q: q.id, t: q.tema, ok: ok ? 1 : 0, ts: Date.now() }); if (S.hist.length > 600) S.hist = S.hist.slice(-600);
    S.combo = ok ? S.combo + 1 : 0; S.maxCombo = Math.max(S.maxCombo, S.combo);
    h.resp++; if (ok) h.aciertos++; h.combo = Math.max(h.combo, S.combo);
    if (!ctx.sinPuntos) sumarPuntos(1);
    save(); pintarTopbar(); revisarMisiones(); revisarLogros();
  }
  function evento(tipo) { const h = hoy(); h[tipo] = (h[tipo] || 0) + 1; save(); revisarMisiones(); revisarLogros(); pintarTopbar(); }

  // Misiones diarias
  const MISIONES = [
    { id: "resp15", t: "Responde 15 preguntas", n: 15, v: h => h.resp },
    { id: "combo8", t: "Acierta 8 seguidas", n: 8, v: h => h.combo },
    { id: "leccion", t: "Lee una lección", n: 1, v: h => h.lecciones },
    { id: "repaso5", t: "Repasa 5 preguntas pendientes", n: 5, v: h => h.repaso },
    { id: "sim", t: "Completa un simulador", n: 1, v: h => h.sims },
    { id: "fc10", t: "Repasa 10 tarjetas", n: 10, v: h => h.fc },
    { id: "examen", t: "Haz un simulacro o un test oficial", n: 1, v: h => h.examen },
    { id: "aciertos20", t: "Consigue 20 aciertos", n: 20, v: h => h.aciertos }
  ];
  function misionesHoy() {
    const f = hoyStr(); let seed = [...f].reduce((a, c) => a * 31 + c.charCodeAt(0), 7) >>> 0;
    const pool = MISIONES.filter(m => m.id !== "repaso5" || pendientes().length >= 5 || (S.hoy && S.hoy.repaso));
    const out = []; const p = pool.slice();
    while (out.length < 3 && p.length) { seed = (seed * 1103515245 + 12345) >>> 0; out.push(p.splice(seed % p.length, 1)[0]); }
    return out;
  }
  function revisarMisiones() {
    const f = hoyStr(); const h = hoy(); const ms = misionesHoy();
    S.misionesOk[f] = S.misionesOk[f] || [];
    ms.forEach(m => { if (m.v(h) >= m.n && !S.misionesOk[f].includes(m.id)) { S.misionesOk[f].push(m.id); setTimeout(() => toast(icon("check", 18) + " Misión completada: " + m.t), 300); } });
    if (S.misionesOk[f].length === 3 && !S.misionesOk[f].includes("todas")) { S.misionesOk[f].push("todas"); setTimeout(() => { confetti(); toast(icon("trophy", 18) + " ¡Las 3 misiones de hoy completadas!"); }, 900); }
    const keys = Object.keys(S.misionesOk); if (keys.length > 30) keys.sort().slice(0, keys.length - 30).forEach(k => delete S.misionesOk[k]);
    save();
  }

  // Preparación: probabilidad de aprobar estimada con el acierto reciente
  function preparacion() {
    const porTema = TEMA_IDS.map(t => {
      const r = S.hist.filter(h => h.t === t).slice(-30); const k = r.reduce((a, h) => a + h.ok, 0);
      return { t, n: r.length, k, p: (k + 1) / (r.length + 2) };
    });
    const total = S.hist.length;
    const p = porTema.reduce((a, x) => a + x.p, 0) / porTema.length;
    const e = 1 - p; let pa = 0; const C = (n, k) => { let r = 1; for (let i = 1; i <= k; i++) r = r * (n - k + i) / i; return r; };
    for (let k = 0; k <= 3; k++) pa += C(30, k) * Math.pow(e, k) * Math.pow(1 - e, 30 - k);
    const recientes = S.hist.slice(-60); const acierto = recientes.length ? recientes.reduce((a, h) => a + h.ok, 0) / recientes.length : 0;
    return { porTema, p, pa, total, acierto, suficiente: total >= 20 };
  }

  // Plan hasta el examen
  function plan() {
    if (!S.fechaExamen) return null;
    const dias = Math.ceil((new Date(S.fechaExamen + "T09:00:00") - new Date()) / DIA);
    if (isNaN(dias)) return null;
    const lecc = Math.max(0, totalLecciones() - Object.keys(S.leidas).length);
    const sinDominar = preguntas.filter(q => estado(q.id) !== "dominada").length;
    const utiles = Math.max(1, dias - 3); // los 3 últimos días, solo simulacros
    return { dias, lecc, leccDia: Math.ceil(lecc / utiles), pregDia: Math.min(80, Math.max(10, Math.ceil(sinDominar / utiles))), fase: dias <= 0 ? "hoy" : dias <= 3 ? "final" : lecc ? "temario" : "repaso" };
  }

  // Logros (ligados a hitos reales, con progreso)
  const LOGROS = [
    { id: "l1", ic: "book", t: "Primera lección", d: "Lee tu primera lección", v: () => Object.keys(S.leidas).length, n: 1 },
    { id: "l2", ic: "graduation", t: "Temario completo", d: "Lee todas las lecciones", v: () => Object.keys(S.leidas).length, n: () => totalLecciones() },
    { id: "d50", ic: "check", t: "50 preguntas dominadas", d: "Acierta 50 preguntas en varios repasos", v: () => preguntas.filter(q => estado(q.id) === "dominada").length, n: 50 },
    { id: "d200", ic: "star", t: "200 preguntas dominadas", d: "Domina 200 preguntas", v: () => preguntas.filter(q => estado(q.id) === "dominada").length, n: 200 },
    { id: "c15", ic: "zap", t: "15 seguidas", d: "Acierta 15 preguntas sin fallar", v: () => S.maxCombo, n: 15 },
    { id: "r7", ic: "flame", t: "Una semana de racha", d: "Cumple tu meta 7 días seguidos", v: () => racha(), n: 7 },
    { id: "r30", ic: "calendar", t: "Un mes de racha", d: "Cumple tu meta 30 días seguidos", v: () => racha(), n: 30 },
    { id: "ap", ic: "flag", t: "Primer APTO", d: "Aprueba un simulacro", v: () => S.examenes.filter(e => e.tipo === "simulacro" && e.apto).length, n: 1 },
    { id: "ap5", ic: "trophy", t: "Listo para la DGT", d: "5 simulacros APTOS seguidos", v: () => { let n = 0; const sim = S.examenes.filter(e => e.tipo === "simulacro"); for (let k = sim.length - 1; k >= 0 && sim[k].apto; k--) n++; return n; }, n: 5 },
    { id: "of", ic: "badge", t: "Tests oficiales", d: "Completa 5 tests oficiales de la DGT", v: () => Object.keys(S.oficiales).length, n: 5 },
    { id: "si", ic: "sliders", t: "Todos los simuladores", d: "Completa los simuladores con al menos 1 estrella", v: () => SIMS.filter(s => (S.sims[s.id] || {}).estrellas).length, n: () => SIMS.length },
    { id: "ru", ic: "route", t: "Ruta completa", d: "Termina todas las unidades de la ruta", v: () => TEMA_IDS.filter(t => nodosTema(t).every(n => n.done)).length, n: 10 }
  ];
  const nLogro = l => typeof l.n === "function" ? l.n() : l.n;
  function revisarLogros() {
    S.logros = S.logros || {};
    LOGROS.forEach(l => { if (!S.logros[l.id] && nLogro(l) > 0 && l.v() >= nLogro(l)) { S.logros[l.id] = Date.now(); setTimeout(() => modal(icon(l.ic, 40), "Logro desbloqueado", `<b>${esc(l.t)}</b><br><span class="muted">${esc(l.d)}</span>`, true), 900); } });
    save();
  }

  // ───────────────────────── Utilidades ─────────────────────────
  const $ = (s, el = document) => el.querySelector(s);
  const $$ = (s, el = document) => Array.from(el.querySelectorAll(s));
  const esc = s => String(s == null ? "" : s).replace(/[&<>"']/g, c => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));
  const sinEmoji = s => String(s == null ? "" : s).replace(/[\u{1F000}-\u{1FAFF}\u{2600}-\u{27BF}\u{2B00}-\u{2BFF}\u{FE0F}\u{20E3}\u{1F1E6}-\u{1F1FF}\u{200D}]/gu, "").replace(/\s{2,}/g, " ").trim();
  const fmt = s => esc(sinEmoji(s)).replace(/\*\*(.+?)\*\*/g, "<strong>$1</strong>");
  const shuffle = a => { a = a.slice(); for (let i = a.length - 1; i > 0; i--) { const j = Math.floor(Math.random() * (i + 1)); [a[i], a[j]] = [a[j], a[i]]; } return a; };
  const pct = (a, b) => b ? Math.round(a / b * 100) : 0;
  const app = $("#app");
  const LETRAS = ["A", "B", "C", "D"];
  const MESES = ["ene", "feb", "mar", "abr", "may", "jun", "jul", "ago", "sep", "oct", "nov", "dic"];
  let cleanup = null, teclas = null;

  function toast(html) { const t = $("#toast"); t.innerHTML = html; t.classList.add("show"); clearTimeout(toast._t); toast._t = setTimeout(() => t.classList.remove("show"), 2800); }
  function modal(ic, titulo, html, fiesta) {
    const bg = document.createElement("div"); bg.className = "modal-bg";
    bg.innerHTML = `<div class="modal" role="dialog" aria-modal="true"><div class="m-ic">${ic}</div><h2>${titulo}</h2><p>${html}</p><button class="btn btn-primary">Continuar</button></div>`;
    bg.addEventListener("click", e => { if (e.target === bg || e.target.closest("button")) bg.remove(); });
    document.body.appendChild(bg); if (fiesta) confetti(); $("button", bg).focus();
  }
  function confetti() {
    if (matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const c = $("#confetti"), ctx = c.getContext("2d"); c.width = innerWidth; c.height = innerHeight;
    const cols = ["#d4532a", "#1f3a5f", "#2c8a5c", "#d9a326", "#e8774f", "#4f63a8"];
    const ps = Array.from({ length: 160 }, () => ({ x: c.width / 2 + (Math.random() - .5) * 240, y: c.height * .4, vx: (Math.random() - .5) * 15, vy: -Math.random() * 15 - 4, s: Math.random() * 7 + 4, r: Math.random() * 6, vr: (Math.random() - .5) * .3, c: cols[Math.floor(Math.random() * cols.length)] }));
    let f = 0;
    (function tick() { ctx.clearRect(0, 0, c.width, c.height); ps.forEach(p => { p.vy += .32; p.vx *= .99; p.x += p.vx; p.y += p.vy; p.r += p.vr; ctx.save(); ctx.translate(p.x, p.y); ctx.rotate(p.r); ctx.fillStyle = p.c; ctx.fillRect(-p.s / 2, -p.s / 4, p.s, p.s / 2); ctx.restore(); }); if (++f < 190) requestAnimationFrame(tick); else ctx.clearRect(0, 0, c.width, c.height); })();
  }
  function burst(el) {
    const r = el.getBoundingClientRect(); const cols = ["#2c8a5c", "#d9a326", "#d4532a"];
    for (let i = 0; i < 12; i++) {
      const d = document.createElement("i"); const a = Math.random() * Math.PI * 2, v = 30 + Math.random() * 40;
      d.style.cssText = `position:fixed;left:${r.right - 30}px;top:${r.top + r.height / 2}px;width:7px;height:7px;border-radius:50%;background:${cols[i % 3]};pointer-events:none;z-index:120`;
      document.body.appendChild(d);
      d.animate([{ transform: "translate(0,0) scale(1)", opacity: 1 }, { transform: `translate(${Math.cos(a) * v}px,${Math.sin(a) * v}px) scale(.3)`, opacity: 0 }], { duration: 650, easing: "cubic-bezier(.2,.8,.2,1)" }).onfinish = () => d.remove();
    }
  }
  function animarNumeros(root) {
    $$("[data-count]", root).forEach(el => { const fin = +el.dataset.count, suf = el.dataset.suf || ""; const t0 = performance.now(); (function step(t) { const k = Math.min(1, (t - t0) / 1100); el.textContent = Math.round(fin * (1 - Math.pow(1 - k, 3))) + suf; if (k < 1) requestAnimationFrame(step); })(t0); });
  }
  function reveal(root) {
    const io = new IntersectionObserver(es => es.forEach(e => { if (e.isIntersecting) { e.target.classList.add("in"); io.unobserve(e.target); } }), { threshold: .1 });
    $$(".reveal", root).forEach((el, i) => { el.style.transitionDelay = Math.min(i % 6, 5) * 60 + "ms"; io.observe(el); });
  }
  const barras = root => requestAnimationFrame(() => setTimeout(() => $$("[data-w]", root).forEach(i => i.style.width = i.dataset.w + "%"), 80));
  const anillos = root => requestAnimationFrame(() => setTimeout(() => $$("[data-off]", root).forEach(c => c.style.strokeDashoffset = c.dataset.off), 80));
  function anillo(p, size, stroke, color, txt) {
    const r = (size - stroke) / 2, C = 2 * Math.PI * r;
    return `<svg class="goal-ring ${p >= 1 ? "done" : ""}" viewBox="0 0 ${size} ${size}" width="${size}" height="${size}"><circle class="bg" cx="${size / 2}" cy="${size / 2}" r="${r}" stroke-width="${stroke}"/><circle class="fg" cx="${size / 2}" cy="${size / 2}" r="${r}" stroke-width="${stroke}" ${color ? `style="stroke:${color}"` : ""} stroke-dasharray="${C}" stroke-dashoffset="${C}" data-off="${C * (1 - Math.min(1, p))}"/>${txt ? `<text x="50%" y="50%" text-anchor="middle" dominant-baseline="central" font-size="${size * .24}">${txt}</text>` : ""}</svg>`;
  }
  const estrellas = (n, tam = 15) => `<span class="stars">${[0, 1, 2].map(i => `<span class="${i < n ? "on" : ""}">${icon("star", tam)}</span>`).join("")}</span>`;

  // ───────────────────────── Señales ─────────────────────────
  function svgSenal(forma, simbolo) {
    const raw = (simbolo || "").replace(/️/g, ""); const chars = [...raw];
    const picks = chars.map(c => PICTO[EMOJI_PICTO[c]]).filter(Boolean);
    const pic = picks.length === 1 && chars.length === 1 ? picks[0] : picks.length === 2 ? `<g transform="translate(-11,0) scale(.58)" ${forma === "circulo-rojo" ? 'fill="#c9302c" stroke="#c9302c"' : ""}>${picks[0]}</g><g transform="translate(12,0) scale(.58)">${picks[1]}</g>` : null;
    const sim = esc(raw.replace(/[🀀-🫿]/gu, ""));
    const len = [...sim].length; const fs = len <= 1 ? 40 : len === 2 ? 34 : len === 3 ? 26 : 20;
    const txt = (y, color, size) => pic ? `<g transform="translate(50,${y}) scale(${(size || fs) / 40})" fill="${color}" stroke="${color}" stroke-width="0">${pic}</g>` : sim ? `<text x="50" y="${y}" text-anchor="middle" dominant-baseline="central" font-family="Arial, Helvetica, sans-serif" font-weight="800" font-size="${size || fs}" fill="${color}">${sim}</text>` : "";
    let b;
    switch (forma) {
      case "triangulo": b = `<path d="M50 7 95 87q2 5-4 5H9q-6 0-4-5z" fill="#fff" stroke="#c9302c" stroke-width="9" stroke-linejoin="round"/>${txt(63, "#111", pic ? 30 : fs * .8)}`; break;
      case "panel-amarillo": b = `<path d="M50 7 95 87q2 5-4 5H9q-6 0-4-5z" fill="#f6c518" stroke="#c9302c" stroke-width="9" stroke-linejoin="round"/>${txt(63, "#111", pic ? 30 : fs * .8)}`; break;
      case "triangulo-invertido": b = `<path d="M50 93 95 13q2-5-4-5H9q-6 0-4 5z" fill="#fff" stroke="#c9302c" stroke-width="10" stroke-linejoin="round"/>`; break;
      case "octogono": b = `<polygon points="30,3 70,3 97,30 97,70 70,97 30,97 3,70 3,30" fill="#c9302c" stroke="#fff" stroke-width="4"/><text x="50" y="52" text-anchor="middle" dominant-baseline="central" font-family="Arial, sans-serif" font-weight="800" font-size="27" fill="#fff">STOP</text>`; break;
      case "circulo-rojo": b = `<circle cx="50" cy="50" r="44" fill="#fff" stroke="#c9302c" stroke-width="11"/>${txt(52, "#111", pic ? 34 : fs)}`; break;
      case "circulo-rojo-lleno": b = `<circle cx="50" cy="50" r="46" fill="#c9302c"/><rect x="20" y="41" width="60" height="18" rx="2" fill="#fff"/>`; break;
      case "circulo-azul": b = `<circle cx="50" cy="50" r="46" fill="#1d5bb8" stroke="#fff" stroke-width="3"/>${txt(52, "#fff", pic ? 34 : fs)}`; break;
      case "cuadrado-azul": b = `<rect x="5" y="5" width="90" height="90" rx="10" fill="#1d5bb8" stroke="#fff" stroke-width="3"/>${txt(52, "#fff", pic ? 34 : fs)}`; break;
      case "rombo": b = `<rect x="18" y="18" width="64" height="64" transform="rotate(45 50 50)" fill="#fff" stroke="#222" stroke-width="2"/><rect x="29" y="29" width="42" height="42" transform="rotate(45 50 50)" fill="#f6c518"/>`; break;
      case "rectangulo-verde": b = `<rect x="3" y="20" width="94" height="60" rx="8" fill="#16794a" stroke="#fff" stroke-width="3"/>${txt(51, "#fff", fs * .8)}`; break;
      case "rectangulo-blanco": b = `<rect x="3" y="20" width="94" height="60" rx="8" fill="#fff" stroke="#222" stroke-width="3"/>${txt(51, "#111", fs * .8)}`; break;
      case "fin": b = `<circle cx="50" cy="50" r="45" fill="#fff" stroke="#333" stroke-width="2"/>${txt(52, "#999", pic ? 32 : fs)}<g stroke="#555" stroke-width="3"><line x1="22" y1="74" x2="74" y2="22"/><line x1="27" y1="79" x2="79" y2="27"/><line x1="17" y1="69" x2="69" y2="17"/></g>`; break;
      default: b = `<rect x="5" y="5" width="90" height="90" rx="12" fill="#eee" stroke="#999" stroke-width="3"/>${txt(52, "#333")}`;
    }
    return `<svg viewBox="0 0 100 100" role="img" aria-label="Señal">${b}</svg>`;
  }
  const catSenal = f => ({ "triangulo": "Peligro", "panel-amarillo": "Obras", "triangulo-invertido": "Prioridad", "octogono": "Prioridad", "rombo": "Prioridad", "circulo-rojo": "Prohibición", "circulo-rojo-lleno": "Prohibición", "fin": "Fin de prohibición", "circulo-azul": "Obligación", "cuadrado-azul": "Indicación", "rectangulo-verde": "Indicación", "rectangulo-blanco": "Indicación" }[f] || "Otras");
  function todasSenales() {
    const m = new Map();
    temario.forEach(t => (t.lecciones || []).forEach(l => (l.contenido || []).forEach(b => { if (b && b.tipo === "senal" && b.nombre && !m.has(b.nombre)) m.set(b.nombre, Object.assign({ tema: t.id }, b)); })));
    return [...m.values()];
  }

  // ───────────────────────── Ruta y progreso ─────────────────────────
  const totalLecciones = () => temario.reduce((n, t) => n + (t.lecciones || []).length, 0);
  const estrellasPractica = best => best == null ? 0 : best >= 10 ? 3 : best >= 8 ? 2 : best >= 6 ? 1 : 0;
  function nodosTema(id) {
    const t = tema(id); const nodos = [];
    t.lecciones.forEach((l, i) => nodos.push({ tipo: "leccion", titulo: l.titulo, sub: `Lección ${i + 1} · ${l.minutos || 5} min`, href: `#/leccion/${id}/${l.id}`, done: !!S.leidas[l.id], ic: "book" }));
    SIMS.filter(s => s.tema === id).forEach(s => { const st = (S.sims[s.id] || {}).estrellas || 0; nodos.push({ tipo: "sim", titulo: s.titulo, sub: "Simulador", href: `#/simulador/${s.id}`, done: st > 0, estrellas: st, ic: "sliders" }); });
    const nq = preguntas.filter(q => q.tema === id).length;
    if (nq >= 10) { const best = (S.practicas[id] || {}).best; nodos.push({ tipo: "practica", titulo: "Práctica del tema", sub: "10 preguntas con corrección al momento", accion: `practica:${id}`, done: estrellasPractica(best) > 0, estrellas: estrellasPractica(best), ic: "target" }); }
    if (nq >= 20) { const c = S.controles[id]; nodos.push({ tipo: "control", titulo: "Control del tema", sub: c ? `Mejor nota: ${c.best}/20 · se aprueba con 18` : "20 preguntas · se aprueba con 18", accion: `control:${id}`, done: !!(c && c.best >= 18), ic: "flag" }); }
    return nodos;
  }
  function siguientePaso() {
    for (const id of TEMA_IDS) { const n = nodosTema(id).find(x => !x.done); if (n) return Object.assign({ tema: id }, n); }
    return null;
  }
  function lanzarAccion(acc) {
    const [tipo, id] = acc.split(":"); const t = tema(id); const pool = preguntas.filter(q => q.tema === id);
    if (tipo === "practica") sesion(prioriza(pool).slice(0, 10), { titulo: "Práctica · " + t.titulo, modo: "practica", tipo: "practica", ref: id, volver: "#/tema/" + id });
    if (tipo === "control") sesion(shuffle(pool).slice(0, 20), { titulo: "Control · " + t.titulo, modo: "examen", tipo: "control", ref: id, volver: "#/tema/" + id, aprobado: 18 });
  }
  function prioriza(pool) {
    const ahora = Date.now();
    const peso = q => { const s = S.srs[q.id]; if (!s) return 1 + Math.random(); if (s.due <= ahora) return 2 + Math.random() + (s.b === 0 ? 1 : 0); return Math.random() * .6; };
    return pool.slice().sort((a, b) => peso(b) - peso(a));
  }

  // ───────────────────────── Topbar ─────────────────────────
  function pintarTopbar(bump) {
    const f = hoyStr(), p = Math.min(1, puntosDia(f) / S.meta), r = racha();
    const chip = $("#streak-chip");
    chip.innerHTML = `<span class="fl">${icon("flame", 17)}</span><span>${r}</span>`;
    chip.classList.toggle("off", !cumplido(f)); chip.title = `Racha: ${r} días · Hoy ${puntosDia(f)}/${S.meta}`;
    pintarAvatar();
    if (bump) { chip.classList.remove("bump"); void chip.offsetWidth; chip.classList.add("bump"); }
    const n = pendientes().length; const b = $("#badge-rep"); b.hidden = !n; b.textContent = n > 99 ? "99+" : n;
  }

  // ───────────────────────── Vistas ─────────────────────────
  function heroScene() {
    const arbol = x => `<g transform="translate(${x},0)"><rect x="-2" y="246" width="4" height="22" fill="#6d5a45"/><circle cx="0" cy="238" r="14" style="fill:var(--tree)"/><circle cx="-7" cy="246" r="9" style="fill:var(--tree)"/></g>`;
    const senal = (x, s) => `<g transform="translate(${x},0)"><rect x="-1.5" y="262" width="3" height="40" fill="#8a8f97"/><g transform="translate(-14,234) scale(.28)">${s}</g></g>`;
    const farola = x => `<g transform="translate(${x},0)"><rect x="-1.5" y="232" width="3" height="70" fill="#8a8f97"/><path d="M0 234q0-6 10-6h6" fill="none" stroke="#8a8f97" stroke-width="3"/><rect x="13" y="226" width="9" height="4" rx="2" fill="#f7e2a8"/></g>`;
    const semaf = x => `<g transform="translate(${x},0)"><rect x="-1.5" y="250" width="3" height="52" fill="#4a4d55"/><rect x="-8" y="214" width="16" height="40" rx="5" fill="#2a2d33"/><circle class="tl-r" cx="0" cy="223" r="4.2"/><circle class="tl-a" cx="0" cy="234" r="4.2"/><circle class="tl-v" cx="0" cy="245" r="4.2"/></g>`;
    const capa3 = [senal(40, svgSenal("circulo-rojo", "50").replace(/<\/?svg[^>]*>/g, "")), farola(150), arbol(210), semaf(300), senal(400, svgSenal("triangulo", "🚸").replace(/<\/?svg[^>]*>/g, "")), arbol(460)].join("");
    const colinas = `<path d="M0 230 Q60 180 130 205 T260 190 T390 200 T500 190 V300 H0Z" style="fill:var(--hill1)"/>`;
    const colinas2 = `<path d="M0 255 Q80 215 170 240 T330 232 T500 238 V300 H0Z" style="fill:var(--hill2)"/>${[30, 90, 260, 330, 430].map(x => `<g transform="translate(${x},${-6})"><rect x="-1.5" y="238" width="3" height="12" fill="#6d5a45"/><circle cy="234" r="8" style="fill:var(--tree)"/></g>`).join("")}`;
    return `<svg viewBox="0 0 500 400" aria-hidden="true" preserveAspectRatio="xMidYMid slice">
      <defs><linearGradient id="h-sky" x1="0" y1="0" x2="0" y2="1"><stop offset="0" style="stop-color:var(--sky1)"/><stop offset="1" style="stop-color:var(--sky2)"/></linearGradient></defs>
      <rect width="500" height="400" fill="url(#h-sky)"/>
      <circle class="sun-glow" cx="370" cy="120" r="46" style="fill:var(--sun)" opacity=".9"/>
      <g class="par-1">${[0, 500].map(o => `<g transform="translate(${o},0)"><g opacity=".9"><ellipse cx="90" cy="80" rx="34" ry="10" fill="#fff" opacity=".55"/><ellipse cx="300" cy="56" rx="44" ry="11" fill="#fff" opacity=".45"/></g>${colinas}</g>`).join("")}</g>
      <g class="par-2">${[0, 500].map(o => `<g transform="translate(${o},0)">${colinas2}</g>`).join("")}</g>
      <rect y="298" width="500" height="102" style="fill:var(--hill3)"/>
      <rect y="300" width="500" height="62" style="fill:var(--road)"/>
      <line x1="0" y1="331" x2="500" y2="331" style="stroke:var(--road-line)" stroke-width="4" stroke-dasharray="30 30" class="dash-move"/>
      <g class="par-3">${[0, 500].map(o => `<g transform="translate(${o},0)">${capa3}</g>`).join("")}</g>
      <g transform="translate(200,352)"><g class="bounce">
        <path d="M-56-14q-1-14 10-17l18-3 13-15q5-5 15-5h23q8 0 13 6l10 13 8 3q6 2 5 14v6q0 5-5 5h-104q-6 0-6-7z" style="fill:var(--primary)"/>
        <path d="M-11-44q4-4 11-4h10v14h-30zM14-48h9q5 0 9 5l8 9H14z" fill="#e6f0f7"/>
        <rect x="52" y="-27" width="7" height="5" rx="2" fill="#fff1b8"/><rect x="-57" y="-27" width="5" height="6" rx="1" fill="#b13a2e"/>
        <rect x="-4" y="-30" width="10" height="2.5" rx="1" fill="#000" opacity=".2"/>
      </g>
      <g transform="translate(-34,-11)"><g class="wheel"><circle r="11" fill="#202329"/><circle r="5" fill="#b4bac2"/><path d="M0-10v4M0 6v4M-10 0h4M6 0h4" stroke="#b4bac2" stroke-width="2"/></g></g>
      <g transform="translate(34,-11)"><g class="wheel"><circle r="11" fill="#202329"/><circle r="5" fill="#b4bac2"/><path d="M0-10v4M0 6v4M-10 0h4M6 0h4" stroke="#b4bac2" stroke-width="2"/></g></g></g>
    </svg>`;
  }

  function vistaInicio() {
    const sig = siguientePaso(); const r = racha(); const f = hoyStr(); const pd = puntosDia(f); const h = hoy();
    const ms = misionesHoy(); const pend = pendientes().length; const prep = preparacion();
    const qd = preguntas.length ? preguntas[Math.floor(Date.now() / DIA) % preguntas.length] : null;
    const semana = (() => { const out = []; const d = new Date(); d.setDate(d.getDate() - 6); for (let i = 0; i < 7; i++) { const k = hoyStr(d); out.push({ k, l: "LMXJVSD"[(d.getDay() + 6) % 7], on: cumplido(k), frz: S.congelados.includes(k), hoy: k === f }); d.setDate(d.getDate() + 1); } return out; })();
    const ultOf = OFICIALES[0];
    app.innerHTML = `
      <section class="hero"><div class="hero-inner">
        <div>
          <span class="eyebrow">${icon("mapPin", 14)} Permiso B · Comunitat Valenciana</span>
          <h1 style="margin-top:12px">Aprueba el teórico <em>a la primera<svg viewBox="0 0 200 12" preserveAspectRatio="none"><path d="M2 9 Q50 2 100 6 T198 4"/></svg></em>, a tu ritmo.</h1>
          <p class="lead">Lecciones cortas, simuladores que se entienden solos y preguntas que vuelven justo cuando estás a punto de olvidarlas.</p>
          <div class="row" style="margin-top:22px">
            ${sig ? `<a class="btn btn-primary btn-lg" href="${sig.href || "#/tema/" + sig.tema}" ${sig.accion ? `data-accion="${sig.accion}"` : ""}>${icon("play", 18)} ${Object.keys(S.leidas).length ? "Continuar" : "Empezar"}: ${esc(sig.titulo)}</a>` : `<a class="btn btn-primary btn-lg" href="#/examenes">${icon("flag", 18)} Hacer un simulacro</a>`}
            <a class="btn btn-ghost btn-lg" href="#/examenes">${icon("timer", 18)} Simulacro</a>
          </div>
          <div class="hero-stats">
            <div><b data-count="${totalLecciones()}">0</b><span>lecciones</span></div>
            <div><b data-count="${preguntas.length}">0</b><span>preguntas</span></div>
            <div><b data-count="${OFICIALES.length}">0</b><span>tests oficiales</span></div>
            <div><b data-count="${SIMS.length}">0</b><span>simuladores</span></div>
          </div>
        </div>
        <div class="hero-scene">${heroScene()}</div>
      </div></section>
      <div class="wrap">
        <div class="today">
          <div class="card goal-card reveal">${anillo(pd / S.meta, 96, 10, null, `${Math.min(pd, 999)}/${S.meta}`)}
            <div><span class="eyebrow">${icon("target", 14)} Meta de hoy</span><h3 style="margin:6px 0 4px">${pd >= S.meta ? "¡Cumplida!" : `Te faltan ${S.meta - pd} preguntas`}</h3>
            <p class="muted" style="margin:0;font-size:.88rem">Cada pregunta suma 1 y cada lección leída, 5. <a href="#/progreso#ajustes">Cambiar meta</a></p></div></div>
          <div class="card reveal"><div class="streak-big"><div class="flame-wrap ${cumplido(f) ? "" : "off"}">${icon("flame", 34)}</div>
            <div><span class="eyebrow">${icon("calendar", 14)} Racha</span><h3 style="margin:6px 0 0">${r} día${r === 1 ? "" : "s"}</h3>
            <small class="muted">${S.protectores ? `${icon("shieldCheck", 14)} ${S.protectores} protector${S.protectores > 1 ? "es" : ""} de racha` : "Cada 7 días ganas un protector"}</small></div></div>
            <div class="week">${semana.map(d => `<div class="d ${d.on ? "on" : ""} ${d.frz ? "frz" : ""} ${d.hoy ? "today" : ""}"><i></i>${d.l}</div>`).join("")}</div></div>
          <div class="card reveal"><span class="eyebrow">${icon("listCheck", 14)} Misiones de hoy</span>
            <div class="missions" style="margin-top:10px">${ms.map(m => { const v = Math.min(m.n, m.v(h)); const ok = v >= m.n; return `<div class="mission ${ok ? "done" : ""}"><span class="mc">${ok ? icon("check", 14) : ""}</span><span>${m.t}</span><small>${v}/${m.n}</small></div>`; }).join("")}</div></div>
        </div>

        ${(() => { const pl = plan(); if (!pl) return `<div class="card row reveal" style="margin-top:16px"><div class="t-ic" style="width:46px;height:46px;border-radius:14px;display:grid;place-items:center;background:var(--ink-soft);color:var(--ink)">${icon("calendar", 22)}</div><div style="flex:1;min-width:220px"><b>¿Ya tienes fecha de examen?</b><p class="muted" style="margin:0;font-size:.9rem">Ponla y te diremos cuántas lecciones y preguntas hacer cada día para llegar a tiempo.</p></div><a class="btn btn-ghost btn-sm" href="#/progreso#ajustes">Poner fecha</a></div>`;
          const txt = pl.fase === "hoy" ? "¡Hoy es tu examen! Repasa tus fallos con calma y confía en lo que has estudiado." : pl.fase === "final" ? `Recta final: haz <b>un simulacro al día</b> y repasa tus fallos.` : pl.fase === "temario" ? `Para llegar a tiempo: <b>${pl.leccDia} lección${pl.leccDia === 1 ? "" : "es"}</b> y <b>${pl.pregDia} preguntas</b> al día.` : `Temario terminado. Haz <b>${pl.pregDia} preguntas</b> al día y simulacros.`;
          return `<div class="card row reveal" style="margin-top:16px;border-color:color-mix(in srgb, var(--primary) 35%, var(--border))"><div class="off-date" style="background:var(--primary)"><b>${Math.max(0, pl.dias)}</b><small>${pl.dias === 1 ? "día" : "días"}</small></div><div style="flex:1;min-width:220px"><span class="eyebrow">${icon("flag", 14)} Tu examen</span><p style="margin:4px 0 0">${txt}</p></div>${pl.fase === "temario" && S.meta < pl.pregDia ? `<button class="btn btn-primary btn-sm" id="ajusta-meta">Ajustar mi meta a ${pl.pregDia}</button>` : ""}</div>`; })()}
        <div class="section-title"><h2 class="reveal">Sigue aprendiendo</h2></div>
        <div class="grid grid-3">
          ${sig ? `<a class="card tile reveal" href="${sig.href || "#/tema/" + sig.tema}" ${sig.accion ? `data-accion="${sig.accion}"` : ""} style="--c:${tema(sig.tema).color}"><div class="t-ic">${icon(sig.ic, 22)}</div><h3>${esc(sig.titulo)}</h3><p>Tu siguiente paso en la ruta · ${esc(tema(sig.tema).titulo)}</p><span class="go">${icon("arrowRight", 20)}</span></a>` : ""}
          <a class="card tile reveal" href="#/repaso" style="--c:var(--primary)"><div class="t-ic">${icon("repeat", 22)}</div><h3>Repaso inteligente</h3><p>${pend ? `<b>${pend}</b> preguntas te esperan hoy para no olvidarlas.` : "Al día. Las preguntas vuelven cuando toca repasarlas."}</p><span class="go">${icon("arrowRight", 20)}</span></a>
          ${ultOf ? `<a class="card tile reveal" href="#/oficial/${ultOf.id}" style="--c:var(--ink)"><div class="t-ic">${icon("badge", 22)}</div><h3>Test oficial DGT · ${esc(ultOf.etiqueta || "nº " + ultOf.numero)}</h3><p>${ultOf.preguntas.length} preguntas basadas en el último test de la Revista DGT.</p><span class="go">${icon("arrowRight", 20)}</span></a>`
          : `<a class="card tile reveal" href="#/simuladores" style="--c:var(--ink)"><div class="t-ic">${icon("sliders", 22)}</div><h3>Simuladores</h3><p>Aprende frenando, entrando en glorietas o encendiendo luces.</p><span class="go">${icon("arrowRight", 20)}</span></a>`}
        </div>

        <div class="grid grid-2" style="margin-top:16px">
          <div class="card reveal"><span class="eyebrow">${icon("gauge", 14)} Tu preparación</span>
            ${prep.suficiente ? `<h3 style="margin:8px 0 4px">Aprobarías unos <b style="color:var(--primary)">${Math.round(prep.pa * 10)} de cada 10</b> exámenes</h3>
            <div class="ten">${Array.from({ length: 10 }, (_, i) => `<span class="${i < Math.round(prep.pa * 10) ? "ok" : ""}" style="animation-delay:${i * 50}ms">${icon(i < Math.round(prep.pa * 10) ? "check" : "x", 16)}</span>`).join("")}</div>
            <p class="muted" style="margin:0;font-size:.88rem">Calculado con tu acierto reciente (${Math.round(prep.acierto * 100)}%). Para aprobar necesitas acertar 27 de 30.</p>`
            : `<h3 style="margin:8px 0 4px">Aún no hay datos suficientes</h3><p class="muted">Responde al menos 20 preguntas y calcularemos cuántos exámenes aprobarías hoy.</p><div class="progress"><i data-w="${pct(prep.total, 20)}"></i></div>`}
            <a class="btn btn-ghost btn-sm" style="margin-top:14px" href="#/progreso">Ver mi preparación ${icon("arrowRight", 16, "ic-move")}</a></div>
          ${qd ? `<div class="reveal"><div id="qdia"></div></div>` : ""}
        </div>

        <div class="card tip-card reveal" style="margin-top:16px"><div class="t-ic">${icon("bulb", 22)}</div><div style="flex:1"><span class="eyebrow" style="color:var(--tip)">Consejo del temario</span><div class="tip-text" id="tip" style="margin-top:4px"></div></div><button class="icon-btn" id="tip-next" aria-label="Otro consejo">${icon("shuffle", 18)}</button></div>

        <div class="section-title"><h2 class="reveal">Así es el examen teórico</h2></div>
        <div class="grid grid-4">
          ${[["listCheck", "30 preguntas", "Tipo test, tres opciones y solo una correcta."], ["clock", "30 minutos", "Tiempo de sobra si llevas el temario al día."], ["x", "Máximo 3 fallos", "Con 27 aciertos o más, APTO."], ["phone", "Nota en miDGT", "El resultado aparece en la app y la web de la DGT."]].map(([i, t, d]) => `<div class="card reveal"><div class="t-ic" style="width:42px;height:42px;border-radius:13px;display:grid;place-items:center;background:var(--surface-2);color:var(--ink);margin-bottom:10px">${icon(i, 20)}</div><h3>${t}</h3><p class="muted" style="margin:0">${d}</p></div>`).join("")}
        </div>
      </div>`;
    animarNumeros(app); reveal(app); anillos(app); barras(app); enlazarAcciones(app);
    if (qd) renderPreguntaSuelta($("#qdia"), qd, { titulo: "Pregunta del día" });
    const am = $("#ajusta-meta"); if (am) am.addEventListener("click", () => { S.meta = plan().pregDia; save(); pintarTopbar(true); toast(icon("target", 18) + ` Meta diaria: ${S.meta} preguntas`); vistaInicio(); });
    const trucos = [];
    temario.forEach(t => (t.lecciones || []).forEach(l => (l.contenido || []).forEach(b => { if (b && (b.tipo === "truco" || b.tipo === "clave") && b.texto && b.texto.length < 240) trucos.push({ t, l, texto: b.texto }); })));
    const tip = $("#tip");
    const decir = () => { if (!trucos.length) { tip.textContent = "Lee un tema al día y haz su práctica justo después."; return; } const x = trucos[Math.floor(Math.random() * trucos.length)]; tip.classList.add("fade"); setTimeout(() => { tip.innerHTML = `${fmt(x.texto)} <a href="#/leccion/${x.t.id}/${x.l.id}" style="white-space:nowrap">${esc(x.l.titulo)} →</a>`; tip.classList.remove("fade"); }, 300); };
    decir(); $("#tip-next").addEventListener("click", decir);
    const iv = setInterval(decir, 12000); cleanup = () => clearInterval(iv);
  }
  function enlazarAcciones(root) { $$("[data-accion]", root).forEach(a => a.addEventListener("click", e => { e.preventDefault(); lanzarAccion(a.dataset.accion); })); }

  function opcionesHTML(q, sel) { return q.opciones.map((o, i) => `<button class="opt ${sel === i ? "selected" : ""}" data-i="${i}"><span class="letter">${LETRAS[i]}</span><span>${fmt(o)}</span><svg class="mark" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.6" stroke-linecap="round" stroke-linejoin="round"><path d="M20 6 9 17l-5-5"/></svg></button>`).join(""); }
  function corregirOpciones(box, q, k) {
    const ok = k === q.correcta;
    $$(".opt", box).forEach((x, j) => { x.disabled = true; if (j === q.correcta) x.classList.add("correct"); else if (j === k) { x.classList.add("wrong"); $(".mark", x).innerHTML = '<path d="M18 6 6 18M6 6l12 12"/>'; } else x.classList.add("dim"); });
    if (ok) burst($$(".opt", box)[k]);
    return ok;
  }
  function renderPreguntaSuelta(box, q, opts = {}) {
    const t = tema(q.tema);
    box.innerHTML = `<div class="card q-card" style="--c:${t.color}">
      <div class="q-head"><span class="eyebrow" style="color:var(--muted)">${icon(opts.mini ? "bulb" : "sparkle", 14)} ${opts.titulo || "Comprueba lo aprendido"}</span>${opts.mini ? "" : `<span class="q-tema">${icon(t.ic, 14)} ${esc(t.titulo)}</span>`}</div>
      ${q.senal ? `<div class="q-sign">${svgSenal(q.senal.forma, q.senal.simbolo)}</div>` : ""}
      <div class="q-text" style="font-size:1.12rem">${fmt(q.pregunta)}</div>
      <div class="options">${opcionesHTML(q)}</div><div class="exp-slot"></div></div>`;
    $$(".opt", box).forEach(b => b.addEventListener("click", () => {
      const k = +b.dataset.i; const ok = corregirOpciones(box, q, k);
      $(".exp-slot", box).innerHTML = `<div class="explain ${ok ? "" : "bad"}"><b>${icon(ok ? "check" : "x", 16)} ${ok ? "¡Correcto!" : "No es esa"}</b>${fmt(q.explicacion || "")}</div>`;
      if (q.id && !opts.mini && qById(q.id)) registrar(q, ok);
    }));
  }

  // ───── Aprender: ruta ─────
  // Orden global de lecciones (para navegar de tema en tema sin salir del lector)
  const ordenLecciones = () => TEMA_IDS.flatMap(id => tema(id).lecciones.map(l => ({ t: id, l })));
  const sigLeccion = () => ordenLecciones().find(x => !S.leidas[x.l.id]);
  const normaliza = str => [...String(str || "")].map(c => c.normalize("NFD")[0]).join("").toLowerCase();
  let indiceBusqueda = null;
  function indexar() {
    if (indiceBusqueda) return indiceBusqueda;
    const txtBloque = b => [b.texto, b.nombre, b.descripcion, b.pregunta, ...(b.items || []), ...((b.filas || []).flat()), ...(b.cabecera || [])].filter(Boolean).join(" · ");
    indiceBusqueda = ordenLecciones().map(({ t, l }) => { const r = RES[l.id]; const texto = sinEmoji([r ? [r.idea, ...(r.puntos || []), r.recuerda].join(" · ") : "", ...(l.contenido || []).map(txtBloque)].join(" · ")).replace(/\*\*/g, ""); return { t, l, titulo: sinEmoji(l.titulo), texto, nt: normaliza(sinEmoji(l.titulo)), nx: normaliza(texto) }; });
    return indiceBusqueda;
  }
  function buscar(q) {
    const nq = normaliza(q.trim()); if (nq.length < 2) return [];
    return indexar().map(e => { const enT = e.nt.includes(nq); let n = 0, k = -1, p = 0; while ((p = e.nx.indexOf(nq, p)) >= 0) { if (k < 0) k = p; n++; p += nq.length; } return { e, score: (enT ? 10 : 0) + n, k }; })
      .filter(r => r.score > 0).sort((a, b) => b.score - a.score).slice(0, 15).map(({ e, k }) => {
        let snip = "";
        if (k >= 0) { const a = Math.max(0, k - 55), b = Math.min(e.texto.length, k + nq.length + 70); snip = (a ? "…" : "") + esc(e.texto.slice(a, k)) + "<mark>" + esc(e.texto.slice(k, k + nq.length)) + "</mark>" + esc(e.texto.slice(k + nq.length, b)) + (b < e.texto.length ? "…" : ""); }
        return { e, snip };
      });
  }
  function indiceHTML(actual) {
    return `<nav class="la-toc" aria-label="Índice del temario">
      <a class="la-top-link ${!actual.tema && !actual.esquemas ? "cur" : ""}" href="#/aprender">${icon("book", 16)} Teoría</a>
      ${DGS.length ? `<a class="la-top-link ${actual.esquemas ? "cur" : ""}" href="#/esquemas">${icon("sparkle", 16)} Mapas mentales y esquemas</a>` : ""}
      ${TEMA_IDS.map((id, i) => { const t = tema(id); const hechas = t.lecciones.filter(l => S.leidas[l.id]).length; const abierto = actual.tema === id;
        return `<details class="la-t" style="--c:${t.color}" ${abierto ? "open" : ""}><summary><span class="la-ic">${icon(t.ic, 15)}</span><span class="la-tt">${i + 1}. ${esc(t.titulo)}</span><small>${hechas}/${t.lecciones.length}</small></summary>
          <ol>${t.lecciones.map((l, k) => `<li><a class="la-l ${S.leidas[l.id] ? "done" : ""} ${actual.leccion === l.id ? "cur" : ""}" href="#/leccion/${id}/${l.id}"><span class="la-n">${S.leidas[l.id] ? icon("check", 12) : k + 1}</span><span>${esc(sinEmoji(l.titulo))}</span></a></li>`).join("")}
            <li><a class="la-l la-x ${actual.tema === id && !actual.leccion ? "cur" : ""}" href="#/tema/${id}"><span class="la-n">${icon("target", 12)}</span><span>Práctica, control y mapa del tema</span></a></li></ol></details>`; }).join("")}
    </nav>`;
  }
  // Envuelve la vista actual en el lector: índice lateral + buscador + contenido
  function envolver(actual) {
    const main = document.createElement("div"); main.className = "la-main";
    while (app.firstChild) main.appendChild(app.firstChild);
    const la = document.createElement("div"); la.className = "la";
    la.innerHTML = `<button class="btn btn-ghost btn-sm la-open" type="button">${icon("menu", 16)} Índice del temario</button>
      <aside class="la-side"><div class="la-search">${icon("search", 16)}<input type="search" id="la-q" placeholder="Buscar en el temario…" aria-label="Buscar en el temario" autocomplete="off"><kbd>/</kbd></div>
        <div class="la-res" id="la-res" hidden></div>${indiceHTML(actual)}</aside><div class="la-veil"></div>`;
    la.appendChild(main); app.appendChild(la);
    const side = $(".la-side", la), q = $("#la-q", la), res = $("#la-res", la), toc = $(".la-toc", la);
    $$(".la-open, .les-idx", la).forEach(b => b.addEventListener("click", () => la.classList.add("open")));
    $(".la-veil", la).addEventListener("click", () => la.classList.remove("open"));
    let tq = null;
    q.addEventListener("input", () => { clearTimeout(tq); tq = setTimeout(() => {
      const r = q.value.trim().length >= 2 ? buscar(q.value) : null;
      res.hidden = !r; toc.hidden = !!r;
      if (r) res.innerHTML = r.length ? `<p class="la-rn">${r.length} resultado${r.length === 1 ? "" : "s"}</p>` + r.map(({ e, snip }) => `<a class="la-hit" href="#/leccion/${e.t}/${e.l.id}" style="--c:${tema(e.t).color}"><b>${esc(e.titulo)}</b><small class="la-ht">${esc(tema(e.t).titulo)}</small>${snip ? `<span>${snip}</span>` : ""}</a>`).join("") : `<p class="la-rn">Sin resultados para «${esc(q.value)}».</p>`;
    }, 120); });
    q.addEventListener("keydown", e => { if (e.key === "Escape") { q.value = ""; q.dispatchEvent(new Event("input")); q.blur(); } if (e.key === "Enter") { const h = $(".la-hit", res); if (h) location.hash = h.getAttribute("href"); } });
    const cur = $(".la-l.cur, .la-top-link.cur", side); if (cur) requestAnimationFrame(() => cur.scrollIntoView({ block: "center" }));
    return la;
  }
  document.addEventListener("keydown", e => { if (e.key === "/" && !/input|textarea/i.test(e.target.tagName)) { const q = $("#la-q"); if (q) { e.preventDefault(); const la = q.closest(".la"); if (la) la.classList.add("open"); q.focus(); } } });

  function vistaRuta() {
    if (!temario.length) return vacio("book", "El temario no se ha cargado", "Faltan ficheros en la carpeta data/.");
    const total = totalLecciones(), leidas = ordenLecciones().filter(x => S.leidas[x.l.id]).length, sig = sigLeccion();
    app.innerHTML = `<div class="wrap page-enter">
      <div class="page-head"><span class="eyebrow">${icon("book", 14)} Aprender</span><h1 style="margin-top:8px">Todo el temario del permiso B</h1>
        <p>${TEMA_IDS.length} temas y ${total} lecciones cortas que cubren las materias oficiales del examen. Usa el índice de la izquierda para moverte o el buscador para encontrar cualquier dato (pulsa <kbd>/</kbd>).</p></div>
      ${sig ? `<a class="la-continue" href="#/leccion/${sig.t}/${sig.l.id}" style="--c:${tema(sig.t).color}">
          <span class="la-cic">${icon(tema(sig.t).ic, 26)}</span>
          <span style="flex:1;min-width:0"><span class="eyebrow" style="color:#fff;opacity:.85">${leidas ? "Continúa donde lo dejaste" : "Empieza por aquí"}</span><b>${esc(sinEmoji(sig.l.titulo))}</b><small>${esc(tema(sig.t).tituloLargo)} · ${sig.l.minutos || 5} min</small>
            <span class="la-pbar"><i data-w="${pct(leidas, total)}"></i></span><small>${leidas} de ${total} lecciones leídas</small></span>
          <span class="la-go">${icon("play", 22)}</span></a>`
        : `<div class="card row"><div style="flex:1"><h3 style="margin:0">Has leído todo el temario</h3><p class="muted" style="margin:0">Ahora toca consolidar: repaso inteligente y simulacros.</p></div><a class="btn btn-primary" href="#/examenes">Hacer un simulacro</a></div>`}
      <div class="grid grid-3" style="margin-top:18px">${TEMA_IDS.map((id, i) => { const t = tema(id); const h = t.lecciones.filter(l => S.leidas[l.id]).length; const qs = preguntas.filter(q => q.tema === id); const dom = qs.filter(q => estado(q.id) === "dominada").length;
        return `<a class="card tile la-card reveal" href="#/tema/${id}" style="--c:${t.color}"><div class="row" style="justify-content:space-between"><div class="t-ic">${icon(t.ic, 22)}</div><span class="la-num">${String(i + 1).padStart(2, "0")}</span></div>
          <h3>${esc(t.tituloLargo)}</h3><p>${fmt(t.resumen)}</p>
          <div class="la-meta"><span>${h}/${t.lecciones.length} lecciones</span><span>${pct(dom, qs.length)}% dominado</span></div><div class="progress"><i data-w="${pct(h, t.lecciones.length)}"></i></div></a>`; }).join("")}</div></div>`;
    envolver({}); reveal(app); barras(app);
  }
  function nodosHTML(id, nodos, sig) {
    return nodos.map(n => { const esSig = sig && sig.tema === id && sig.titulo === n.titulo && !n.done;
      return `<a class="node ${n.done ? "done" : ""} ${esSig ? "next" : ""}" href="${n.href || "#"}" ${n.accion ? `data-accion="${n.accion}"` : ""}>
        <span class="dot">${icon(n.done ? "check" : n.ic, 20)}</span>
        <span class="nt"><b>${esc(n.titulo)}</b><small>${esc(n.sub)}</small></span>
        ${n.estrellas != null && n.done ? estrellas(n.estrellas) : ""}${esSig ? `<span class="tag-next">Siguiente</span>` : ""}</a>`; }).join("");
  }
  function vistaTema(id) {
    const t = tema(id); if (!t.lecciones.length) return vistaNoEncontrado();
    const nodos = nodosTema(id); const sig = siguientePaso();
    const dom = preguntas.filter(q => q.tema === id && estado(q.id) === "dominada").length, tot = preguntas.filter(q => q.tema === id).length;
    app.innerHTML = `<div class="wrap narrow page-enter" style="--c:${t.color}">
      <div class="crumbs"><a href="#/aprender">Aprender</a> ${icon("chevron", 14)} ${esc(t.titulo)}</div>
      <div class="unit" style="--c:${t.color}"><div class="unit-head"><div class="u-ic">${icon(t.ic, 24)}</div><div style="flex:1"><h2 style="margin:0">${esc(t.tituloLargo)}</h2><p>${fmt(t.resumen)}</p></div></div>
      <div class="path">${nodosHTML(id, nodos, sig)}</div></div>
      ${mapaTema(id) ? `<div style="margin-top:16px">${dgHTML(mapaTema(id), t.color)}</div>` : ""}
      ${DGS.some(e => e.leccion && t.lecciones.some(l => l.id === e.leccion)) ? `<a class="sim-launch" href="#/esquemas/${id}" style="margin:0 0 16px"><span class="t-ic">${icon("sparkle", 24)}</span><span style="flex:1"><span class="eyebrow">Repaso visual</span><b style="display:block;font-size:1.05rem">Todos los esquemas de ${esc(t.titulo)}</b><small class="muted">Mapas, escalas, árboles y reglas para memorizar el tema de un vistazo.</small></span>${icon("arrowRight", 20)}</a>` : ""}
      <div class="card row" style="margin-top:16px"><div style="flex:1;min-width:200px"><b>Preguntas dominadas en este tema</b><div class="stack"><i class="s-dom" data-w="${pct(dom, tot)}"></i></div></div><b style="font-family:var(--display);font-size:1.4rem">${dom}<span class="muted" style="font-size:.9rem">/${tot}</span></b></div></div>`;
    envolver({ tema: id }); barras(app); enlazarAcciones(app); activarDg(app);
  }

  // ───── Lección ─────
  function renderBloque(b) {
    if (!b || !b.tipo) return "";
    const caja = (cls, ic, tag, txt) => `<div class="box ${cls}"><span class="bx-ic">${icon(ic, 15)}</span><b class="tag">${tag}</b>${fmt(txt)}</div>`;
    switch (b.tipo) {
      case "p": return `<p>${fmt(b.texto)}</p>`;
      case "lista": return `<ul>${(b.items || []).map(i => `<li>${fmt(i)}</li>`).join("")}</ul>`;
      case "clave": return caja("box-clave", "key", "Clave de examen", b.texto);
      case "truco": return caja("box-truco", "bulb", "Truco para recordar", b.texto);
      case "aviso": return caja("box-aviso", "alert", "Trampa típica", b.texto);
      case "tabla": return `<div class="table-wrap"><table><thead><tr>${(b.cabecera || []).map(h => `<th>${fmt(h)}</th>`).join("")}</tr></thead><tbody>${(b.filas || []).map(r => `<tr>${r.map(c => `<td>${fmt(c)}</td>`).join("")}</tr>`).join("")}</tbody></table></div>`;
      case "senal": return `<div class="sign-block">${svgSenal(b.forma, b.simbolo)}<div><h4>${fmt(b.nombre || "")}</h4><p>${fmt(b.descripcion || "")}</p></div></div>`;
      case "quiz": return `<div class="mini-quiz" data-q='${esc(JSON.stringify(b))}'></div>`;
      default: return b.texto ? `<p>${fmt(b.texto)}</p>` : "";
    }
  }
  function vistaLeccion(tid, lid) {
    const t = tema(tid); const idx = t.lecciones.findIndex(l => l.id === lid);
    if (idx < 0) return vistaNoEncontrado();
    const l = t.lecciones[idx];
    const orden = ordenLecciones(); const gi = orden.findIndex(x => x.l.id === lid);
    const prevG = orden[gi - 1], nextG = orden[gi + 1]; const ultimaDelTema = idx === t.lecciones.length - 1;
    S.ultima = { tema: tid, leccion: lid }; save();
    const res = RES[l.id]; const sims = SIMS.filter(s => (s.lecciones || []).includes(l.id));
    app.innerHTML = `<div class="reading-bar" id="rbar"></div>
      <div class="wrap narrow page-enter" style="--c:${t.color}">
        <div class="les-bar"><button class="icon-btn les-idx" type="button" aria-label="Índice del temario">${icon("menu", 16)}</button><a class="les-t" href="#/tema/${t.id}"><span class="la-ic">${icon(t.ic, 14)}</span>${esc(t.titulo)}</a>
          <span class="les-dots">${t.lecciones.map((x, k) => `<a href="#/leccion/${t.id}/${x.id}" class="${S.leidas[x.id] ? "done" : ""} ${k === idx ? "cur" : ""}" title="${esc(sinEmoji(x.titulo))}" aria-label="Lección ${k + 1}"></a>`).join("")}</span>
          <span class="les-n">${idx + 1}/${t.lecciones.length}</span>
          <a class="icon-btn" href="${prevG ? `#/leccion/${prevG.t}/${prevG.l.id}` : "#/aprender"}" aria-label="Lección anterior" title="Anterior (←)">${icon("arrowLeft", 16)}</a>
          <a class="icon-btn js-sig" href="${nextG ? `#/leccion/${nextG.t}/${nextG.l.id}` : "#/examenes"}" aria-label="Lección siguiente" title="Siguiente (→)">${icon("arrowRight", 16)}</a></div>
        <h1>${esc(sinEmoji(l.titulo))}</h1>
        <div class="lesson-tools"><span class="q-tema">${icon("clock", 14)} ${l.minutos || 5} min</span>
          ${"speechSynthesis" in window ? `<button class="btn btn-ghost btn-sm" id="leer">${icon("volume", 16)} Escuchar</button>` : ""}
          ${sims.length ? `<a class="btn btn-ghost btn-sm" href="#/simulador/${sims[0].id}">${icon("sliders", 16)} Simulador</a>` : ""}</div>
        ${res ? `<section class="resumen"><div class="rs-tag">${icon("zap", 14)} En 30 segundos</div><div class="rs-idea">${fmt(res.idea || "")}</div>
          <ol>${(res.puntos || []).map((p, k) => `<li><b class="n">${k + 1}</b><span>${fmt(p)}</span></li>`).join("")}</ol>
          ${res.recuerda ? `<p class="rs-rec">${icon("bulb", 18)} <span>${fmt(res.recuerda)}</span></p>` : ""}</section>` : ""}
        <article class="lesson">${dgLeccion(l.id).filter(e => e.tras == null).map(e => dgHTML(e, t.color)).join("")}${(l.contenido || []).map((b, k) => renderBloque(b) + dgLeccion(l.id).filter(e => e.tras === k).map(e => dgHTML(e, t.color)).join("")).join("")}</article>
        ${sims.map(s => `<a class="sim-launch" href="#/simulador/${s.id}"><span class="t-ic">${icon(s.icono || "sliders", 24)}</span><span style="flex:1"><span class="eyebrow">Pruébalo en el simulador</span><b style="display:block;font-size:1.05rem">${esc(s.titulo)}</b><small class="muted">${esc(s.descripcion)}</small></span>${icon("arrowRight", 20)}</a>`).join("")}
        ${ultimaDelTema && preguntas.filter(q => q.tema === tid).length >= 10 ? `<a class="sim-launch" href="#" data-accion="practica:${tid}" style="border-style:solid"><span class="t-ic">${icon("target", 24)}</span><span style="flex:1"><span class="eyebrow">Fin del tema</span><b style="display:block;font-size:1.05rem">Fija lo aprendido con 10 preguntas</b><small class="muted">Justo después de leer es cuando más se aprende practicando.</small></span>${icon("arrowRight", 20)}</a>` : ""}
        <div class="les-nav">
          ${prevG ? `<a class="les-nx" href="#/leccion/${prevG.t}/${prevG.l.id}"><small>${icon("arrowLeft", 14)} Anterior${prevG.t !== tid ? " · " + esc(tema(prevG.t).titulo) : ""}</small><b>${esc(sinEmoji(prevG.l.titulo))}</b></a>` : `<span></span>`}
          ${nextG ? `<a class="les-nx next js-sig" id="sig" href="#/leccion/${nextG.t}/${nextG.l.id}" style="--c:${tema(nextG.t).color}"><small>${S.leidas[l.id] ? "Siguiente" : "Entendido, siguiente"}${nextG.t !== tid ? " tema · " + esc(tema(nextG.t).titulo) : ""} ${icon("arrowRight", 14)}</small><b>${esc(sinEmoji(nextG.l.titulo))}</b></a>`
            : `<a class="les-nx next js-sig" id="sig" href="#/examenes"><small>Has llegado al final del temario ${icon("arrowRight", 14)}</small><b>Hacer un simulacro de examen</b></a>`}
        </div></div>`;
    $$(".mini-quiz", app).forEach(slot => { try { const q = JSON.parse(slot.dataset.q); renderPreguntaSuelta(slot, Object.assign({ tema: tid }, q), { mini: true }); } catch (e) { slot.remove(); } });
    activarDg(app);
    const marcarLeida = () => { if (!S.leidas[l.id]) { S.leidas[l.id] = Date.now(); sumarPuntos(5); evento("lecciones"); toast(icon("check", 18) + " Lección completada"); if (t.lecciones.every(x => S.leidas[x.id])) confetti(); } };
    $$(".js-sig", app).forEach(a => a.addEventListener("click", marcarLeida));
    enlazarAcciones(app);
    teclas = e => { if (e.key === "ArrowRight") { marcarLeida(); location.hash = nextG ? `#/leccion/${nextG.t}/${nextG.l.id}` : "#/examenes"; } else if (e.key === "ArrowLeft" && prevG) location.hash = `#/leccion/${prevG.t}/${prevG.l.id}`; };
    const io = new IntersectionObserver(es => es.forEach(e => { if (e.isIntersecting) { e.target.classList.add("in"); io.unobserve(e.target); } }), { threshold: .06, rootMargin: "0px 0px -30px 0px" });
    $$(".lesson > *", app).forEach(b => { b.classList.add("rv"); io.observe(b); });
    const leer = $("#leer");
    const parar = () => { try { speechSynthesis.cancel(); } catch (e) { /* */ } $$(".speaking", app).forEach(x => x.classList.remove("speaking")); if (leer) leer.innerHTML = icon("volume", 16) + " Escuchar"; };
    if (leer) leer.addEventListener("click", () => {
      if (speechSynthesis.speaking) return parar();
      const partes = [$(".resumen", app), ...$$(".lesson > *", app)].filter(x => x && !x.querySelector(".options"));
      const voces = speechSynthesis.getVoices(); const voz = voces.find(v => /^es(-|_)ES/i.test(v.lang)) || voces.find(v => /^es/i.test(v.lang));
      leer.innerHTML = icon("stop", 16) + " Parar";
      partes.forEach((p, k) => { const u = new SpeechSynthesisUtterance(sinEmoji(p.innerText)); u.lang = "es-ES"; if (voz) u.voice = voz;
        u.onstart = () => { $$(".speaking", app).forEach(x => x.classList.remove("speaking")); p.classList.add("in", "speaking"); p.scrollIntoView({ behavior: "smooth", block: "center" }); };
        if (k === partes.length - 1) u.onend = parar; speechSynthesis.speak(u); });
    });
    const bar = $("#rbar"); const onScroll = () => { const h = document.documentElement; bar.style.width = (h.scrollTop / Math.max(1, h.scrollHeight - h.clientHeight) * 100) + "%"; };
    addEventListener("scroll", onScroll, { passive: true });
    cleanup = () => { removeEventListener("scroll", onScroll); io.disconnect(); parar(); };
    envolver({ tema: tid, leccion: lid });
  }

  // ───── Simuladores ─────
  function vistaSimuladores() {
    app.innerHTML = `<div class="wrap page-enter">
      <div class="page-head"><span class="eyebrow">${icon("sliders", 14)} Aprende haciendo</span><h1 style="margin-top:8px">Simuladores</h1><p>Cada simulador tiene tres pasos: <b>entiende</b> la idea, <b>experimenta</b> con misiones guiadas y <b>demuéstralo</b> con un pequeño reto. Consigue hasta 3 estrellas.</p></div>
      <div class="grid grid-3">${SIMS.map(s => { const t = tema(s.tema); const st = (S.sims[s.id] || {}).estrellas || 0; return `
        <a class="card tile sim-tile reveal" href="#/simulador/${s.id}" style="--c:${t.color}">
          <div class="row" style="justify-content:space-between"><div class="t-ic">${icon(s.icono || "sliders", 22)}</div>${estrellas(st)}</div>
          <h3>${esc(s.titulo)}</h3><p>${esc(s.descripcion)}</p><span class="q-tema" style="align-self:flex-start;margin-top:6px">${icon(t.ic, 13)} ${esc(t.titulo)}</span></a>`; }).join("")}</div></div>`;
    reveal(app);
  }
  function vistaSimulador(id) {
    const s = SIMS.find(x => x.id === id); if (!s) return vistaNoEncontrado();
    const t = tema(s.tema); const prev = S.sims[s.id] || { estrellas: 0, tareas: {} };
    const tareas = Object.assign({}, prev.tareas || {}); let paso = 1, fin = null, retoOk = 0;
    app.innerHTML = `<div class="wrap page-enter" style="--c:${t.color}">
      <div class="crumbs"><a href="#/simuladores">Simuladores</a> ${icon("chevron", 14)} ${esc(s.titulo)}</div>
      <div class="row" style="align-items:flex-end;margin-bottom:16px"><div style="flex:1;min-width:240px"><h1 style="margin:0">${esc(s.titulo)}</h1><p class="muted" style="margin:6px 0 0">${esc(s.descripcion)}</p></div>${estrellas(prev.estrellas || 0, 20)}</div>
      <div class="sim-shell">
        <div class="steps-bar" id="steps">${["Entiende", "Experimenta", "Demuéstralo"].map((n, i) => `<button data-p="${i + 1}"><span class="sn">${i + 1}</span><span class="lb">${n}</span></button>`).join("")}</div>
        <div id="sim-body"></div></div></div>`;
    const body = $("#sim-body");
    const pintarPasos = () => $$("#steps button", app).forEach(b => { const p = +b.dataset.p; b.classList.toggle("on", p === paso); b.classList.toggle("done", p < paso); });
    const ir = p => { if (fin) { fin(); fin = null; } paso = p; pintarPasos(); ({ 1: paso1, 2: paso2, 3: paso3 })[p](); window.scrollTo({ top: 0, behavior: "smooth" }); };
    $$("#steps button", app).forEach(b => b.addEventListener("click", () => ir(+b.dataset.p)));
    function paso1() {
      body.innerHTML = `<div class="learn-cards">${s.aprende.map((a, i) => `<div class="learn-card"><div class="ln">${i + 1}</div><h3>${esc(a.t)}</h3><p style="margin:0;color:var(--text-2)">${fmt(a.d)}</p></div>`).join("")}</div>
        <div class="row" style="margin-top:20px;justify-content:center"><button class="btn btn-primary btn-lg pulse-ring" id="go2">Empezar a experimentar ${icon("arrowRight", 18, "ic-move")}</button></div>`;
      $("#go2").addEventListener("click", () => ir(2));
    }
    function paso2() {
      body.innerHTML = `<div class="sim-play"><div class="stage" id="stage"></div>
        <div class="side"><div class="narr" id="narr"><div class="nl">${icon("eye", 14)} Qué está pasando</div><div class="nb" id="narr-b"></div></div>
          <div class="mission-box"><h4>${icon("listCheck", 15)} Tus misiones</h4><div id="tareas"></div></div>
          <button class="btn btn-primary" id="go3">Ir al reto ${icon("arrowRight", 18, "ic-move")}</button></div></div>`;
      const pintarTareas = (nueva) => { $("#tareas").innerHTML = s.tareas.map(x => `<div class="task ${tareas[x.id] ? "done" : ""} ${nueva === x.id ? "just" : ""}"><span class="tc">${tareas[x.id] ? icon("check", 14) : ""}</span><span>${esc(x.texto)}</span></div>`).join("");
        const todas = s.tareas.every(x => tareas[x.id]); $("#go3").classList.toggle("pulse-ring", todas); };
      const api = {
        hecho: idT => { if (!s.tareas.some(x => x.id === idT) || tareas[idT]) return; tareas[idT] = 1; S.sims[s.id] = Object.assign({}, S.sims[s.id] || { estrellas: 0 }, { tareas }); save(); pintarTareas(idT); if (s.tareas.every(x => tareas[x.id])) setTimeout(() => toast(icon("check", 18) + " ¡Misiones completadas! Ya puedes hacer el reto"), 600); },
        narrar: (html, tono) => { const n = $("#narr"); if (!n) return; n.className = "narr" + (tono ? " " + tono : ""); $("#narr-b").innerHTML = html; const b = $("#narr-b"); b.style.animation = "none"; void b.offsetWidth; b.style.animation = ""; }
      };
      pintarTareas();
      try { fin = s.escena($("#stage"), api) || null; } catch (e) { console.error(e); $("#stage").innerHTML = `<p class="muted">No se pudo cargar el simulador.</p>`; }
      $("#go3").addEventListener("click", () => ir(3));
    }
    function paso3() {
      let i = 0; retoOk = 0;
      const pintar = () => {
        if (i >= s.reto.length) return final();
        const q = Object.assign({ tema: s.tema }, s.reto[i]);
        body.innerHTML = `<div class="narrow" style="margin:0 auto"><div class="q-progress">${s.reto.map((_, j) => `<i class="${j < i ? "ok" : j === i ? "cur" : ""}"></i>`).join("")}</div>
          <div class="card q-card"><div class="q-head"><span>Reto ${i + 1} de ${s.reto.length}</span></div><div class="q-text">${fmt(q.pregunta)}</div><div class="options">${opcionesHTML(q)}</div><div id="exp"></div>
          <div class="row" style="margin-top:16px"><span class="spacer"></span><button class="btn btn-primary" id="nx" hidden>Continuar ${icon("arrowRight", 18)}</button></div></div></div>`;
        $$(".opt", body).forEach(b => b.addEventListener("click", () => { const ok = corregirOpciones(body, q, +b.dataset.i); if (ok) retoOk++;
          $("#exp").innerHTML = `<div class="explain ${ok ? "" : "bad"}"><b>${icon(ok ? "check" : "x", 16)} ${ok ? "¡Correcto!" : "No es esa"}</b>${fmt(q.explicacion)}</div>`; const n = $("#nx"); n.hidden = false; n.focus(); }));
        $("#nx").addEventListener("click", () => { i++; pintar(); });
      };
      const final = () => {
        const tareasOk = s.tareas.filter(x => tareas[x.id]).length;
        const est = retoOk === s.reto.length ? (tareasOk === s.tareas.length ? 3 : 2) : retoOk >= Math.ceil(s.reto.length / 2) ? 1 : 0;
        const antes = (S.sims[s.id] || {}).estrellas || 0;
        S.sims[s.id] = { estrellas: Math.max(antes, est), tareas, ts: Date.now() }; save();
        if (est > 0 && !antes) { sumarPuntos(5); evento("sims"); }
        if (est === 3) confetti();
        body.innerHTML = `<div class="card result-hero narrow" style="margin:0 auto">
          <div style="display:flex;justify-content:center;gap:8px;margin-bottom:10px">${[0, 1, 2].map(k => `<span style="color:${k < est ? "var(--gold)" : "var(--surface-3)"};animation:pop .6s ${k * .18}s var(--spring) both;display:inline-flex">${icon("star", 54).replace('fill="none"', 'fill="currentColor"')}</span>`).join("")}</div>
          <h2>${est === 3 ? "¡Perfecto!" : est === 2 ? "¡Muy bien!" : est === 1 ? "¡Bien!" : "Casi"}</h2>
          <p class="muted">Reto: ${retoOk}/${s.reto.length} · Misiones: ${tareasOk}/${s.tareas.length}${est < 3 ? ". Completa todas las misiones y acierta el reto para conseguir 3 estrellas." : ""}</p>
          <div class="row" style="justify-content:center;margin-top:10px">${est < 3 ? `<button class="btn btn-ghost" id="rep">${icon("rotate", 16)} Mejorar</button>` : ""}
            ${(s.lecciones || [])[0] ? `<a class="btn btn-ghost" href="#/leccion/${s.tema}/${s.lecciones[0]}">${icon("book", 16)} Ver la lección</a>` : ""}
            <a class="btn btn-primary" href="#/simuladores">Más simuladores ${icon("arrowRight", 16)}</a></div></div>`;
        const rep = $("#rep"); if (rep) rep.addEventListener("click", () => ir(tareasOk < s.tareas.length ? 2 : 3));
      };
      pintar();
    }
    ir(prev.estrellas ? 2 : 1);
    cleanup = () => { if (fin) fin(); };
  }

  // ───── Sesiones de preguntas (práctica y examen) ─────
  function sesion(lista, o) {
    if (!lista.length) { toast(icon("info", 18) + " No hay preguntas para esto todavía"); return; }
    if (cleanup) { cleanup(); cleanup = null; }
    history.pushState(null, "", "#/sesion"); marcarActivo(o.tipo === "simulacro" || o.tipo === "oficial" ? "examenes" : o.tipo === "control" || o.tipo === "practica" ? "aprender" : "practicar");
    window.scrollTo(0, 0);
    return o.modo === "examen" ? sesionExamen(lista, o) : sesionPractica(lista, o);
  }
  // Lección más relacionada con una pregunta (por palabras en común dentro de su tema)
  const cacheLeccion = {};
  const VACIAS = new Set("puede puedes debes debe cuando donde desde hasta entre sobre otros otras otro otra todos todas tiene tienen siempre nunca porque aunque mientras vehiculo vehiculos conductor conductores circular circula circulas".split(" "));
  function leccionDe(q) {
    if (q.id in cacheLeccion) return cacheLeccion[q.id];
    const pal = [...new Set(normaliza(q.pregunta + " " + q.opciones[q.correcta] + " " + (q.explicacion || "")).split(/[^a-z0-9ñ,]+/).filter(w => w.length >= 5 && !VACIAS.has(w)))];
    let mejor = null, top = 0;
    indexar().filter(e => e.t === q.tema).forEach(e => { const sc = pal.reduce((n, w) => n + (e.nx.includes(w) ? (e.nt.includes(w) ? 3 : 1) : 0), 0); if (sc > top) { top = sc; mejor = e; } });
    return (cacheLeccion[q.id] = top >= 2 ? mejor : null);
  }
  function sesionPractica(lista, o) {
    let i = 0, vidas = o.vidas || 0, fin0 = o.tiempo ? Date.now() + o.tiempo * 1000 : 0, terminado = false, iv = null, auto = null;
    const res = []; const arcade = !!(o.vidas || o.tiempo); const largo = lista.length > 40;
    const cabecera = () => o.vidas ? `<span class="hearts">${Array.from({ length: o.vidas }, (_, k) => `<span class="${k < vidas ? "on" : ""}">${icon("heart", 18)}</span>`).join("")}</span>` : o.tiempo ? `<span class="clock-pill" id="clk">${icon("timer", 16)} <b>--</b></span>` : "";
    const pintar = () => {
      const q = lista[i], t = tema(q.tema); const guardada = !!S.guardadas[q.id];
      app.innerHTML = `<div class="wrap narrow page-enter">
        <div class="row" style="margin-bottom:12px"><h2 style="margin:0;font-size:1.3rem">${esc(o.titulo)}</h2><span class="spacer"></span>${cabecera()}<span class="combo" id="combo"></span><button class="btn btn-ghost btn-sm" id="salir">${icon("x", 16)} Salir</button></div>
        ${o.tiempo ? `<div class="time-bar"><i id="tbar"></i></div>` : largo ? "" : `<div class="q-progress">${lista.map((_, j) => `<i class="${j < res.length ? (res[j].ok ? "ok" : "ko") : j === i ? "cur" : ""}"></i>`).join("")}</div>`}
        <div class="card q-card">
          <div class="q-head"><span>${arcade ? `${res.filter(r => r.ok).length} aciertos` : `Pregunta ${i + 1} de ${lista.length}`}</span><span class="row" style="gap:8px"><span class="q-tema">${icon(t.ic, 14)} ${esc(t.titulo)}</span><button class="q-save ${guardada ? "on" : ""}" id="guardar" title="Guardar para repasar" aria-pressed="${guardada}">${icon("star", 16)}</button></span></div>
          ${q.senal ? `<div class="q-sign">${svgSenal(q.senal.forma, q.senal.simbolo)}</div>` : ""}
          <div class="q-text">${fmt(q.pregunta)}</div>
          <div class="options">${opcionesHTML(q)}</div><div id="exp"></div>
          <div class="row" style="margin-top:18px"><span class="muted" style="font-size:.82rem">Teclas 1, 2, 3 · Enter para seguir</span><span class="spacer"></span><button class="btn btn-primary" id="next" hidden>${i + 1 < lista.length ? "Siguiente" : "Ver resultado"} ${icon("arrowRight", 18, "ic-move")}</button></div>
        </div></div>`;
      pintarCombo(); tick();
      $("#guardar").addEventListener("click", e => { const b = e.currentTarget; if (S.guardadas[q.id]) delete S.guardadas[q.id]; else S.guardadas[q.id] = Date.now(); save(); b.classList.toggle("on", !!S.guardadas[q.id]); b.animate([{ transform: "scale(1.3)" }, { transform: "none" }], { duration: 300 }); toast(icon("star", 16) + (S.guardadas[q.id] ? " Guardada para repasar" : " Quitada de guardadas")); });
      const responder = k => {
        if (res.length > i || terminado) return;
        const ok = corregirOpciones(app, q, k); res.push({ q, k, ok }); registrar(q, ok);
        const lec = leccionDe(q);
        $("#exp").innerHTML = `<div class="explain ${ok ? "" : "bad"}"><b>${icon(ok ? "check" : "x", 16)} ${ok ? "¡Correcto!" : "Incorrecto · la buena es la " + LETRAS[q.correcta]}</b>${fmt(q.explicacion || "")}
          ${lec || (q.fuente && q.oficial) ? `<div class="exp-links">${lec ? `<a href="#/leccion/${lec.t}/${lec.l.id}" target="_self">${icon("book", 14)} Repasar en la teoría: ${esc(lec.titulo)}</a>` : ""}${q.fuente && q.oficial ? `<a href="${esc(q.fuente)}" target="_blank" rel="noopener">${icon("external", 14)} Test original de la Revista DGT</a>` : ""}</div>` : ""}</div>`;
        const seg = $(`.q-progress i:nth-child(${i + 1})`, app); if (seg) seg.className = ok ? "ok" : "ko";
        pintarCombo(true);
        if (o.vidas && !ok) { vidas--; const h = $$(".hearts span", app)[vidas]; if (h) { h.classList.remove("on"); h.animate([{ transform: "scale(1.5)" }, { transform: "none" }], { duration: 400 }); } if (vidas <= 0) { setTimeout(fin, 1300); return; } }
        if (arcade && ok) { auto = setTimeout(siguiente, 750); return; }
        const n = $("#next"); n.hidden = false; n.focus({ preventScroll: true });
      };
      $$(".opt", app).forEach(b => b.addEventListener("click", () => responder(+b.dataset.i)));
      $("#next").addEventListener("click", siguiente);
      $("#salir").addEventListener("click", () => res.length ? fin() : (location.hash = o.volver || "#/practicar"));
      teclas = e => { const k = "123".indexOf(e.key); if (k >= 0 && res.length === i && k < q.opciones.length) responder(k); else if (e.key === "Enter" && res.length > i) { e.preventDefault(); siguiente(); } };
    };
    const siguiente = () => { clearTimeout(auto); if (terminado) return; i++; i < lista.length ? pintar() : fin(); };
    function tick() { if (!o.tiempo) return; const r = Math.max(0, fin0 - Date.now()); const c = $("#clk b"); if (c) c.textContent = Math.ceil(r / 1000) + " s"; const b = $("#tbar"); if (b) b.style.width = (r / (o.tiempo * 1000) * 100) + "%"; const pill = $("#clk"); if (pill) pill.classList.toggle("low", r < 20000); }
    if (o.tiempo) iv = setInterval(() => { tick(); if (Date.now() >= fin0 && !terminado) { toast(icon("clock", 18) + " ¡Tiempo!"); fin(); } }, 250);
    cleanup = () => { clearInterval(iv); clearTimeout(auto); };
    const pintarCombo = anim => { const c = $("#combo"); if (!c) return; c.innerHTML = S.combo >= 3 ? `${icon("flame", 16)} ${S.combo} seguidas` : ""; if (anim && S.combo >= 3) { c.classList.remove("pop"); void c.offsetWidth; c.classList.add("pop"); } };
    function fin() {
      if (terminado) return; terminado = true; teclas = null; clearInterval(iv); clearTimeout(auto);
      const ok = res.filter(r => r.ok).length, tot = res.length, p = pct(ok, tot);
      if (o.tipo === "practica" && tot === lista.length) { const pr = S.practicas[o.ref] || {}; pr.best = Math.max(pr.best || 0, ok); S.practicas[o.ref] = pr; save(); revisarLogros(); }
      let record = false;
      if (o.arcade) { const r0 = S.records[o.arcade] || 0; if (ok > r0) { S.records[o.arcade] = ok; record = r0 > 0 || ok > 0; save(); } }
      const est = o.tipo === "practica" ? estrellasPractica(ok) : null;
      if ((p >= 90 && tot >= 5) || (record && ok > 0)) confetti();
      app.innerHTML = `<div class="wrap narrow page-enter">
        <div class="card result-hero">
          ${est != null ? `<div style="display:flex;justify-content:center;gap:8px">${[0, 1, 2].map(k => `<span style="color:${k < est ? "var(--gold)" : "var(--surface-3)"};animation:pop .6s ${k * .18}s var(--spring) both;display:inline-flex">${icon("star", 48).replace('fill="none"', 'fill="currentColor"')}</span>`).join("")}</div>` : ""}
          ${o.arcade ? `<div class="arcade-score">${ok}</div><p class="muted" style="margin:0">aciertos${o.vidas ? " antes de perder las 3 vidas" : " en " + Math.round(o.tiempo / 60) + " minutos"}</p>
            <p style="margin:10px 0 0">${record ? `<b style="color:var(--primary)">${icon("trophy", 16)} ¡Nuevo récord!</b>` : `Tu récord: <b>${S.records[o.arcade] || 0}</b>`}</p>` : ringSVG(p, p >= 90 ? "var(--ok)" : p >= 70 ? "var(--warn)" : "var(--bad)")}
          <h2>${o.arcade ? (record ? "¡Superado!" : "¡Buen intento!") : p >= 90 ? "¡Nivel de examen!" : p >= 70 ? "Vas por buen camino" : "Toca repasar un poco"}</h2>
          <p class="muted">${ok} de ${tot} correctas. ${res.some(r => !r.ok) ? "Las que has fallado volverán en tu repaso para que no se te olviden." : ""}</p>
          <div class="row" style="justify-content:center">
            ${o.arcade ? `<button class="btn btn-ghost" id="otra">${icon("rotate", 16)} Otra partida</button>` : res.some(r => !r.ok) ? `<button class="btn btn-ghost" id="rep">${icon("rotate", 16)} Repetir las falladas</button>` : ""}
            <a class="btn btn-primary" href="${o.volver || "#/practicar"}">Continuar ${icon("arrowRight", 16)}</a></div></div>
        ${revisionHTML(res)}</div>`;
      anillos(app);
      const rep = $("#rep"); if (rep) rep.addEventListener("click", () => sesion(res.filter(r => !r.ok).map(r => r.q), { titulo: "Repaso de fallos", modo: "practica", volver: o.volver }));
      const otra = $("#otra"); if (otra) otra.addEventListener("click", () => lanzarArcade(o.arcade));
    }
    pintar();
  }
  function lanzarArcade(tipo) {
    const pool = shuffle(preguntas);
    if (tipo === "supervivencia") sesion(pool, { titulo: "Supervivencia", modo: "practica", vidas: 3, arcade: "supervivencia", volver: "#/practicar" });
    else sesion(pool, { titulo: "Contrarreloj", modo: "practica", tiempo: 180, arcade: "contrarreloj", volver: "#/practicar" });
  }
  function revisionHTML(res) {
    return `<div class="section-title"><h2>Revisión</h2><span class="muted">${res.filter(r => !r.ok).length} fallos</span></div><div class="grid">${res.map((r, n) => `
      <details class="card" id="rv${n}" ${r.ok ? "" : "open"}>
        <summary style="cursor:pointer;font-weight:600;display:flex;gap:10px;align-items:flex-start"><span style="color:${r.ok ? "var(--ok)" : "var(--bad)"};flex:none;margin-top:2px">${icon(r.ok ? "check" : "x", 18)}</span><span>${n + 1}. ${fmt(r.q.pregunta)}</span></summary>
        <div style="margin-top:12px">${r.q.senal ? `<div class="q-sign">${svgSenal(r.q.senal.forma, r.q.senal.simbolo)}</div>` : ""}
          <div class="options">${r.q.opciones.map((o, k) => `<div class="opt ${k === r.q.correcta ? "correct" : k === r.k ? "wrong" : "dim"}" style="animation:none"><span class="letter">${LETRAS[k]}</span><span>${fmt(o)}</span></div>`).join("")}</div>
          ${r.k == null ? `<p class="muted" style="margin-top:10px">Sin responder (cuenta como fallo).</p>` : ""}
          <div class="explain ${r.ok ? "" : "bad"}">${fmt(r.q.explicacion || "")}${r.q.fuente ? `<br><small class="muted">Fuente: <a href="${esc(r.q.fuente)}" target="_blank" rel="noopener">${esc(r.q.fuente.replace(/^https?:\/\//, "").slice(0, 60))}</a></small>` : ""}</div></div>
      </details>`).join("")}</div>`;
  }
  function ringSVG(p, color) {
    const C = 2 * Math.PI * 64;
    return `<svg class="ring" viewBox="0 0 160 160"><circle class="bg" cx="80" cy="80" r="64"/><circle class="fg" cx="80" cy="80" r="64" stroke="${color}" stroke-dasharray="${C}" stroke-dashoffset="${C}" data-off="${C * (1 - p / 100)}"/><text x="80" y="91" text-anchor="middle">${p}%</text></svg>`;
  }
  // Ventana de confirmación propia (en lugar de confirm())
  function preguntar(titulo, html, botones) {
    return new Promise(ok => {
      const bg = document.createElement("div"); bg.className = "modal-bg";
      bg.innerHTML = `<div class="modal" role="dialog" aria-modal="true" style="text-align:left"><h2 style="font-size:1.4rem">${titulo}</h2><div class="muted" style="margin-bottom:18px">${html}</div><div class="row" style="justify-content:flex-end">${botones.map((b, k) => `<button class="btn ${b.cls || "btn-ghost"}" data-k="${k}">${b.t}</button>`).join("")}</div></div>`;
      bg.addEventListener("click", e => { const b = e.target.closest("[data-k]"); if (b) { bg.remove(); ok(botones[+b.dataset.k].v); } else if (e.target === bg) { bg.remove(); ok(null); } });
      document.body.appendChild(bg); const last = bg.querySelectorAll("button"); last[last.length - 1].focus();
    });
  }
  function sesionExamen(lista, o) {
    const resp = Array(lista.length).fill(null), marcadas = new Set(); let i = 0, pintado = -1; const t0 = Date.now(); const T = o.tiempo || null; let avisos = {};
    document.body.classList.add("en-examen");
    app.innerHTML = `<div class="wrap narrow page-enter">
      <div class="exam-bar">${T ? `<div class="timer" id="timer">${icon("timer", 20)} <span>--:--</span></div>` : ""}<div class="eb-t"><b>${esc(o.titulo)}</b><span class="muted" id="cont"></span></div><span class="spacer"></span>
        <button class="btn btn-ghost btn-sm" id="salirx" title="Abandonar">${icon("x", 16)}</button><button class="btn btn-primary btn-sm" id="corregir">Corregir</button></div>
      <div class="eb-prog"><i id="ebp"></i></div>
      <div id="qbox"></div>
      <div class="row" style="margin-top:14px"><span class="muted" style="font-size:.82rem">Teclas 1, 2, 3 para responder · M para marcar · ← → para moverte</span><span class="spacer"></span><button class="btn btn-ghost btn-sm" id="sinresp">${icon("arrowRight", 15)} Siguiente sin responder</button></div>
      <div class="exam-grid" id="grid"></div>
      <div class="legend" style="margin-top:10px"><span><i style="background:var(--ink)"></i>Respondida</span><span><i style="background:var(--warn)"></i>Marcada para revisar</span><span><i style="background:var(--surface-3)"></i>Sin responder</span></div></div>`;
    let iv = null;
    if (T) { const el = $("#timer span"); iv = setInterval(() => { const r = T - Math.floor((Date.now() - t0) / 1000);
      if (r <= 0) { clearInterval(iv); toast(icon("clock", 18) + " ¡Se acabó el tiempo!"); corregir(); return; }
      if (r <= 300 && !avisos[300] && T > 600) { avisos[300] = 1; toast(icon("clock", 18) + " Quedan 5 minutos"); }
      if (r <= 60 && !avisos[60]) { avisos[60] = 1; toast(icon("clock", 18) + " Queda 1 minuto: revisa las marcadas"); }
      el.textContent = String(Math.floor(r / 60)).padStart(2, "0") + ":" + String(r % 60).padStart(2, "0"); $("#timer").classList.toggle("low", r < 120); }, 500); }
    const bu = e => { e.preventDefault(); e.returnValue = ""; }; addEventListener("beforeunload", bu);
    cleanup = () => { clearInterval(iv); removeEventListener("beforeunload", bu); document.body.classList.remove("en-examen"); };
    const grid = () => {
      $("#grid").innerHTML = lista.map((_, j) => `<button class="${resp[j] != null ? "answered" : ""} ${marcadas.has(j) ? "flag" : ""} ${j === i ? "current" : ""}" data-j="${j}" aria-label="Pregunta ${j + 1}">${j + 1}</button>`).join("");
      $$("#grid button").forEach(b => b.addEventListener("click", () => { i = +b.dataset.j; pintar(); }));
      const n = resp.filter(r => r != null).length; $("#cont").textContent = `${n} de ${lista.length} respondidas${marcadas.size ? " · " + marcadas.size + (marcadas.size === 1 ? " marcada" : " marcadas") : ""}`; $("#ebp").style.width = pct(n, lista.length) + "%";
    };
    const pintar = () => {
      const q = lista[i]; const anim = pintado !== i ? "page-enter" : ""; pintado = i;
      $("#qbox").innerHTML = `<div class="card q-card ${anim}"><div class="q-head"><span>Pregunta ${i + 1} de ${lista.length}</span><button class="btn btn-ghost btn-sm flag-btn ${marcadas.has(i) ? "on" : ""}" id="flag">${icon("flag", 15)} ${marcadas.has(i) ? "Marcada" : "Marcar para revisar"}</button></div>
        ${q.senal ? `<div class="q-sign">${svgSenal(q.senal.forma, q.senal.simbolo)}</div>` : ""}
        <div class="q-text">${fmt(q.pregunta)}</div><div class="options">${opcionesHTML(q, resp[i])}</div>
        <div class="row" style="margin-top:18px"><button class="btn btn-ghost" id="ant" ${i ? "" : "disabled"}>${icon("arrowLeft", 18)} Anterior</button><span class="spacer"></span><button class="btn btn-primary" id="sx">${i + 1 < lista.length ? "Siguiente" : "Revisar y corregir"} ${icon("arrowRight", 18)}</button></div></div>`;
      $$("#qbox .opt").forEach(b => b.addEventListener("click", () => { resp[i] = +b.dataset.i; $$("#qbox .opt").forEach(x => x.classList.toggle("selected", x === b)); grid(); setTimeout(() => { if (i + 1 < lista.length && resp[i] != null && pintado === i) { i++; pintar(); } }, 350); }));
      $("#flag").addEventListener("click", () => { marcadas.has(i) ? marcadas.delete(i) : marcadas.add(i); pintar(); });
      $("#ant").addEventListener("click", () => { i--; pintar(); });
      $("#sx").addEventListener("click", () => { if (i + 1 < lista.length) { i++; pintar(); } else confirmar(); });
      grid();
    };
    const sigSin = () => { for (let k = 1; k <= lista.length; k++) { const j = (i + k) % lista.length; if (resp[j] == null) { i = j; return pintar(); } } toast(icon("check", 18) + " Has respondido todas"); };
    $("#sinresp").addEventListener("click", sigSin);
    teclas = e => { const k = "123".indexOf(e.key); if (k >= 0 && k < lista[i].opciones.length) { resp[i] = k; pintar(); } else if (e.key.toLowerCase() === "m") { marcadas.has(i) ? marcadas.delete(i) : marcadas.add(i); pintar(); } else if (e.key === "ArrowRight" && i + 1 < lista.length) { i++; pintar(); } else if (e.key === "ArrowLeft" && i > 0) { i--; pintar(); } };
    const confirmar = async () => {
      const sin = resp.filter(r => r == null).length, mk = marcadas.size;
      if (sin || mk) {
        const v = await preguntar("¿Corregir el examen?", `${sin ? `${sin === 1 ? "Te queda" : "Te quedan"} <b>${sin}</b> sin responder, que ${sin === 1 ? "cuenta" : "cuentan"} como fallo.<br>` : ""}${mk ? `Tienes <b>${mk}</b> ${mk === 1 ? "pregunta marcada" : "preguntas marcadas"} para revisar.` : ""}`, [...(mk ? [{ t: "Revisar marcadas", v: "mk" }] : []), ...(sin ? [{ t: "Ir a las que faltan", v: "sin" }] : []), { t: "Corregir ya", v: "ok", cls: "btn-primary" }]);
        if (v === "mk") { i = [...marcadas].sort((a, b) => a - b)[0]; return pintar(); }
        if (v === "sin") return sigSin();
        if (v !== "ok") return;
      }
      corregir();
    };
    $("#corregir").addEventListener("click", confirmar);
    $("#salirx").addEventListener("click", async () => { if (await preguntar("¿Abandonar el examen?", "No se guardará el resultado.", [{ t: "Seguir con el examen", v: 0 }, { t: "Abandonar", v: 1, cls: "btn-bad" }])) { cleanup && cleanup(); cleanup = null; teclas = null; location.hash = o.volver || "#/examenes"; } });
    const corregir = () => {
      cleanup && cleanup(); cleanup = null; teclas = null;
      const res = lista.map((q, j) => ({ q, k: resp[j], ok: resp[j] === q.correcta }));
      res.forEach(r => { if (r.k != null) registrar(r.q, r.ok); else { const s = S.srs[r.q.id] || { b: 0, ok: 0, ko: 0 }; s.b = 0; s.due = Date.now(); S.srs[r.q.id] = s; } });
      const fallos = res.filter(r => !r.ok).length, aciertos = lista.length - fallos;
      const apto = o.aprobado ? aciertos >= o.aprobado : fallos <= Math.floor(lista.length * .1);
      const seg = Math.round((Date.now() - t0) / 1000);
      if (o.tipo === "simulacro" || o.tipo === "oficial") { S.examenes.push({ tipo: o.tipo, variante: o.variante || null, titulo: o.titulo, ref: o.ref || null, fecha: Date.now(), aciertos, fallos, total: lista.length, apto, seg, detalle: res.map(r => [r.q.id, r.k]) }); if (S.examenes.length > 60) S.examenes = S.examenes.slice(-60); evento("examen"); }
      if (o.tipo === "oficial") { const p = S.oficiales[o.ref] || {}; p.best = Math.max(p.best || 0, aciertos); p.total = lista.length; p.ts = Date.now(); S.oficiales[o.ref] = p; }
      if (o.tipo === "control") { const c = S.controles[o.ref] || {}; c.best = Math.max(c.best || 0, aciertos); S.controles[o.ref] = c; }
      save(); revisarLogros(); pintarTopbar();
      if (apto) confetti();
      resultadoExamen(res, { apto, aciertos, fallos, seg, titulo: o.titulo, aprobado: o.aprobado, volver: o.volver });
    };
    pintar();
  }
  function resultadoExamen(res, r) {
    const porTema = {}; res.forEach(x => { const p = porTema[x.q.tema] = porTema[x.q.tema] || { t: x.q.tema, n: 0, f: 0 }; p.n++; if (!x.ok) p.f++; });
    const temas = Object.values(porTema).sort((a, b) => b.f - a.f || b.n - a.n);
    const flojos = temas.filter(x => x.f > 0).map(x => x.t);
    const sim = S.examenes.filter(e => e.tipo === "simulacro" && (!e.variante || e.variante === "dgt")); let racha = 0; for (let k = sim.length - 1; k >= 0 && sim[k].apto; k--) racha++;
    app.innerHTML = `<div class="wrap narrow page-enter">
      <div class="card result-hero">
        <div class="verdict ${r.apto ? "ok" : "ko"}">${r.apto ? "APTO" : "NO APTO"}</div>
        ${ringSVG(pct(r.aciertos, res.length), r.apto ? "var(--ok)" : "var(--bad)")}
        <p style="font-size:1.1rem"><b>${r.fallos}</b> fallo${r.fallos === 1 ? "" : "s"} · ${r.aciertos} aciertos${r.seg != null ? ` · ${Math.floor(r.seg / 60)} min ${r.seg % 60} s` : ""}</p>
        <p class="muted">${r.apto ? (racha >= 5 ? "¡Llevas 5 simulacros APTOS seguidos! Estás listo para presentarte." : "Muy bien. Repite hasta aprobar 5 simulacros seguidos con margen.") : `Necesitas ${r.aprobado ? r.aprobado + " aciertos" : "fallar como máximo " + Math.floor(res.length * .1)}. Las falladas ya están en tu repaso.`}</p>
        <div class="exam-grid" style="max-width:520px;margin:18px auto">${res.map((x, j) => `<button class="${x.ok ? "ok" : "ko"}" data-rv="${j}">${j + 1}</button>`).join("")}</div>
        <div class="row" style="justify-content:center">${r.fallos ? `<button class="btn btn-ghost" id="pf">${icon("repeat", 16)} Practicar estos fallos</button>` : ""}<a class="btn btn-primary" href="${r.volver || "#/examenes"}">Continuar ${icon("arrowRight", 16)}</a></div>
      </div>
      ${temas.length > 1 ? `<div class="card" style="margin-top:16px"><h3>Fallos por tema</h3><div class="mastery">${temas.map(x => { const t = tema(x.t); return `<div class="m-row" style="--c:${t.color}"><span class="m-ic">${icon(t.ic, 18)}</span><div><div class="m-t">${esc(t.titulo)}<small>${x.f} de ${x.n}</small></div><div class="stack"><i style="background:${x.f ? "var(--bad)" : "var(--ok)"}" data-w="${x.f ? pct(x.f, x.n) : 100}"></i></div></div><b>${x.f ? "−" + x.f : icon("check", 16)}</b></div>`; }).join("")}</div>
        ${flojos.length ? `<button class="btn btn-ghost btn-sm" style="margin-top:14px" id="pt">${icon("target", 15)} Practicar los temas donde has fallado</button>` : ""}</div>` : ""}
      ${revisionHTML(res)}</div>`;
    $$("[data-rv]", app).forEach(b => b.addEventListener("click", () => { const d = $("#rv" + b.dataset.rv); d.open = true; d.scrollIntoView({ behavior: "smooth", block: "center" }); }));
    anillos(app); barras(app);
    const pf = $("#pf"); if (pf) pf.addEventListener("click", () => sesion(res.filter(x => !x.ok).map(x => x.q), { titulo: "Fallos del examen", modo: "practica", tipo: "libre", volver: "#/examenes" }));
    const pt = $("#pt"); if (pt) pt.addEventListener("click", () => sesion(prioriza(preguntas.filter(q => flojos.includes(q.tema))).slice(0, 15), { titulo: "Temas a reforzar", modo: "practica", tipo: "libre", volver: "#/examenes" }));
  }

  // ───── Practicar ─────
  let cfg = { temas: [], n: 20, modo: "listo" };
  function sesionRecomendada() {
    const usadas = new Set(); const toma = (arr, n) => { const out = []; for (const q of arr) { if (out.length >= n) break; if (!usadas.has(q.id)) { usadas.add(q.id); out.push(q); } } return out; };
    const rep = toma(prioriza(pendientes()), 8);
    const pt = preparacion().porTema.filter(x => x.n >= 5).sort((a, b) => a.p - b.p)[0];
    const debil = pt ? toma(prioriza(preguntas.filter(q => q.tema === pt.t)), 4) : [];
    const nuevas = toma(shuffle(preguntas.filter(q => !S.srs[q.id])), 15 - rep.length - debil.length);
    const resto = toma(prioriza(preguntas), 15 - rep.length - debil.length - nuevas.length);
    return { lista: shuffle([...rep, ...debil, ...nuevas, ...resto]), rep: rep.length, debil: debil.length, temaDebil: pt && pt.t, nuevas: nuevas.length + resto.length };
  }
  function vistaPracticar() {
    const pend = pendientes().length;
    const dom = preguntas.filter(q => estado(q.id) === "dominada").length, apr = preguntas.filter(q => estado(q.id) === "aprendiendo").length, nue = preguntas.length - dom - apr;
    const rec = sesionRecomendada(); const prep = preparacion();
    const debil = prep.porTema.filter(x => x.n >= 5).sort((a, b) => a.p - b.p)[0];
    const falladas = preguntas.filter(q => S.srs[q.id] && S.srs[q.id].b === 0 && S.srs[q.id].ko > 0);
    const guard = preguntas.filter(q => S.guardadas[q.id]);
    const conSenal = preguntas.filter(q => q.senal);
    const temasQ = TEMA_IDS.filter(id => preguntas.some(q => q.tema === id)).map(id => tema(id));
    const modo = (id, ic, c, titulo, desc, extra, dis) => `<button class="mode ${dis ? "dis" : ""}" data-mode="${id}" style="--c:${c}" ${dis ? "disabled" : ""}><span class="t-ic">${icon(ic, 20)}</span><span class="m-tx"><b>${titulo}</b><small>${desc}</small></span>${extra ? `<span class="m-x">${extra}</span>` : ""}</button>`;
    app.innerHTML = `<div class="wrap page-enter">
      <div class="page-head"><span class="eyebrow">${icon("target", 14)} Practicar</span><h1 style="margin-top:8px">Entrena para el examen</h1><p>${preguntas.length} preguntas. Cada una vuelve justo cuando estás a punto de olvidarla, hasta que la domines.</p></div>
      <div class="pr-top">
        <button class="pr-hero" id="rec"><span class="eyebrow" style="color:#fff;opacity:.85">${icon("sparkle", 14)} Sesión recomendada · 15 preguntas · unos 6 min</span>
          <b>Practica lo que más te conviene ahora</b>
          <span class="pr-mix">${rec.rep ? `<i>${rec.rep} de repaso</i>` : ""}${rec.debil ? `<i>${rec.debil} de tu punto débil: ${esc(tema(rec.temaDebil).titulo)}</i>` : ""}${rec.nuevas ? `<i>${rec.nuevas} nuevas</i>` : ""}</span>
          <span class="pr-go">${icon("play", 22)}</span></button>
        <div class="card pr-stats"><div class="legend"><span><i style="background:var(--ok)"></i>Dominadas</span><span><i style="background:var(--warn)"></i>Aprendiendo</span><span><i style="background:var(--surface-3)"></i>Sin ver</span></div>
          <div class="stack" style="height:12px;margin:10px 0 14px"><i class="s-dom" data-w="${pct(dom, preguntas.length)}"></i><i class="s-apr" data-w="${pct(apr, preguntas.length)}"></i></div>
          <div class="kpis"><div class="kpi"><b>${dom}</b><small>dominadas</small></div><div class="kpi"><b>${apr}</b><small>aprendiendo</small></div><div class="kpi"><b>${nue}</b><small>sin ver</small></div><div class="kpi"><b style="color:${pend ? "var(--primary)" : "inherit"}">${pend}</b><small>para repasar hoy</small></div></div></div>
      </div>

      <div class="section-title"><h2>Modos de práctica</h2></div>
      <div class="modes">
        ${modo("repaso", "repeat", "var(--primary)", "Repaso de hoy", pend ? `${pend} preguntas en su momento justo` : "Al día: no te toca repasar nada", pend ? `<span class="badge">${pend > 99 ? "99+" : pend}</span>` : "", !pend)}
        ${modo("debil", "target", debil ? tema(debil.t).color : "var(--muted)", "Tu punto débil", debil ? `${esc(tema(debil.t).titulo)} · ${Math.round(debil.k / debil.n * 100)}% de acierto` : "Responde un poco más para detectarlo", "", !debil)}
        ${modo("supervivencia", "heart", "#c03a31", "Supervivencia", "Tienes 3 vidas. ¿Hasta dónde llegas?", S.records.supervivencia ? `<span class="m-rec">${icon("trophy", 13)} ${S.records.supervivencia}</span>` : "")}
        ${modo("contrarreloj", "timer", "#b8861f", "Contrarreloj", "3 minutos para acertar todas las que puedas", S.records.contrarreloj ? `<span class="m-rec">${icon("trophy", 13)} ${S.records.contrarreloj}</span>` : "")}
        ${modo("senales", "triangle", "#c0473a", "Solo señales", `${conSenal.length} preguntas con señal`, "")}
        ${modo("falladas", "x", "var(--bad)", "Falladas", falladas.length ? `${falladas.length} que fallaste la última vez` : "No tienes fallos pendientes", "", !falladas.length)}
        ${modo("guardadas", "star", "var(--gold)", "Guardadas", guard.length ? `${guard.length} marcadas con la estrella` : "Marca preguntas con la estrella para repasarlas", "", !guard.length)}
      </div>

      <div class="section-title"><h2>Por tema</h2><span class="muted" style="font-size:.88rem">10 preguntas, empezando por las que más necesitas</span></div>
      <div class="topics-q">${temasQ.map(t => { const qs = preguntas.filter(q => q.tema === t.id); const d = qs.filter(q => estado(q.id) === "dominada").length; const a = qs.filter(q => estado(q.id) === "aprendiendo").length; const pt = prep.porTema.find(x => x.t === t.id);
        return `<button class="tq" data-tema="${t.id}" style="--c:${t.color}"><span class="tq-h"><span class="la-ic">${icon(t.ic, 15)}</span><b>${esc(t.titulo)}</b></span>
          <span class="stack"><i class="s-dom" data-w="${pct(d, qs.length)}"></i><i class="s-apr" data-w="${pct(a, qs.length)}"></i></span>
          <span class="tq-m"><span>${d}/${qs.length} dominadas</span><span>${pt && pt.n ? Math.round(pt.k / pt.n * 100) + "% acierto" : "sin empezar"}</span></span></button>`; }).join("")}</div>

      <div class="section-title"><h2>Herramientas de estudio</h2></div>
      <div class="grid grid-4">
        <a class="card tile" href="#/tarjetas" style="--c:var(--tip)"><div class="t-ic">${icon("cards", 22)}</div><h3>Tarjetas</h3><p>${FC.length} cifras y reglas clave para memorizar.</p></a>
        ${DGS.length ? `<a class="card tile" href="#/esquemas" style="--c:#2a7f7a"><div class="t-ic">${icon("sparkle", 22)}</div><h3>Mapas mentales</h3><p>${DGS.length} esquemas con modo «ponte a prueba».</p></a>` : ""}
        <a class="card tile" href="#/senales" style="--c:#c0473a"><div class="t-ic">${icon("triangle", 22)}</div><h3>Galería de señales</h3><p>${todasSenales().length} señales que se giran.</p></a>
        <a class="card tile" href="#/simuladores" style="--c:var(--ink)"><div class="t-ic">${icon("sliders", 22)}</div><h3>Simuladores</h3><p>Aprende haciendo: frenada, glorietas, luces…</p></a>
      </div>

      <details class="card custom-test" style="margin-top:22px" ${cfg.abierto ? "open" : ""}><summary><b>Test personalizado</b><span class="muted">Elige temas, número y tipo de preguntas</span></summary>
        <span class="field-label">Temas <a href="#" id="all" class="muted" style="font-weight:500;font-size:.85rem">(todos / ninguno)</a></span>
        <div class="chips" id="temas">${temasQ.map(t => `<button class="chip ${cfg.temas.includes(t.id) ? "on" : ""}" data-id="${t.id}">${icon(t.ic, 14)} ${esc(t.titulo)}</button>`).join("")}</div>
        <span class="field-label">Número de preguntas</span>
        <div class="seg" id="num">${[10, 20, 30, 50].map(n => `<button class="${cfg.n === n ? "on" : ""}" data-v="${n}">${n}</button>`).join("")}</div>
        <span class="field-label">Qué preguntas</span>
        <div class="seg" id="modo"><button class="${cfg.modo === "listo" ? "on" : ""}" data-v="listo">Recomendadas</button><button class="${cfg.modo === "nuevas" ? "on" : ""}" data-v="nuevas">No vistas</button><button class="${cfg.modo === "mix" ? "on" : ""}" data-v="mix">Al azar</button></div>
        <div class="row" style="margin-top:22px"><span class="muted" id="disp"></span><span class="spacer"></span><button class="btn btn-primary" id="go">Empezar ${icon("arrowRight", 18, "ic-move")}</button></div></details></div>`;
    barras(app);
    $("#rec").addEventListener("click", () => sesion(sesionRecomendada().lista, { titulo: "Sesión recomendada", modo: "practica", tipo: "libre", volver: "#/practicar" }));
    const lanzar = { repaso: () => sesion(prioriza(pendientes()).slice(0, 20), { titulo: "Repaso de hoy", modo: "practica", tipo: "repaso", volver: "#/practicar" }),
      debil: () => sesion(prioriza(preguntas.filter(q => q.tema === debil.t)).slice(0, 12), { titulo: "Punto débil · " + tema(debil.t).titulo, modo: "practica", tipo: "libre", volver: "#/practicar" }),
      supervivencia: () => lanzarArcade("supervivencia"), contrarreloj: () => lanzarArcade("contrarreloj"),
      senales: () => sesion(prioriza(conSenal).slice(0, 15), { titulo: "Solo señales", modo: "practica", tipo: "libre", volver: "#/practicar" }),
      falladas: () => sesion(shuffle(falladas).slice(0, 20), { titulo: "Falladas", modo: "practica", tipo: "libre", volver: "#/practicar" }),
      guardadas: () => sesion(shuffle(guard).slice(0, 30), { titulo: "Guardadas", modo: "practica", tipo: "libre", volver: "#/practicar" }) };
    $$(".mode", app).forEach(b => b.addEventListener("click", () => lanzar[b.dataset.mode] && lanzar[b.dataset.mode]()));
    $$(".tq", app).forEach(b => b.addEventListener("click", () => { const t = tema(b.dataset.tema); sesion(prioriza(preguntas.filter(q => q.tema === t.id)).slice(0, 10), { titulo: t.titulo, modo: "practica", tipo: "libre", volver: "#/practicar" }); }));
    const pool = () => preguntas.filter(q => !cfg.temas.length || cfg.temas.includes(q.tema));
    const upd = () => { $("#disp").textContent = pool().length + " disponibles"; };
    $(".custom-test", app).addEventListener("toggle", e => { cfg.abierto = e.target.open; });
    $$("#temas .chip").forEach(c => c.addEventListener("click", () => { const id = c.dataset.id, k = cfg.temas.indexOf(id); k >= 0 ? cfg.temas.splice(k, 1) : cfg.temas.push(id); c.classList.toggle("on"); upd(); }));
    $("#all").addEventListener("click", e => { e.preventDefault(); cfg.temas = cfg.temas.length ? [] : temasQ.map(t => t.id); cfg.abierto = true; vistaPracticar(); });
    $$("#num button").forEach(b => b.addEventListener("click", () => { cfg.n = +b.dataset.v; $$("#num button").forEach(x => x.classList.toggle("on", x === b)); }));
    $$("#modo button").forEach(b => b.addEventListener("click", () => { cfg.modo = b.dataset.v; $$("#modo button").forEach(x => x.classList.toggle("on", x === b)); }));
    upd();
    $("#go").addEventListener("click", () => {
      let p = pool();
      p = cfg.modo === "listo" ? prioriza(p) : cfg.modo === "nuevas" ? shuffle(p).sort((a, b) => (S.srs[a.id] ? 1 : 0) - (S.srs[b.id] ? 1 : 0)) : shuffle(p);
      sesion(p.slice(0, cfg.n), { titulo: "Test personalizado", modo: "practica", tipo: "libre", volver: "#/practicar" });
    });
  }
  function vistaRepaso() {
    const pend = prioriza(pendientes());
    const dom = preguntas.filter(q => estado(q.id) === "dominada").length, apr = preguntas.filter(q => estado(q.id) === "aprendiendo").length;
    const prox = Object.values(S.srs).filter(s => s.due > Date.now()).sort((a, b) => a.due - b.due)[0];
    app.innerHTML = `<div class="wrap narrow page-enter">
      <div class="page-head"><span class="eyebrow">${icon("repeat", 14)} Repaso inteligente</span><h1 style="margin-top:8px">${pend.length ? `${pend.length} preguntas para hoy` : "Estás al día"}</h1>
      <p>Cada vez que aciertas una pregunta, tarda más en volver: 1 día, 3, 7, 16 y 35. Si la fallas, vuelve enseguida. Así se fija en la memoria a largo plazo.</p></div>
      <div class="card"><div class="legend" style="margin-bottom:10px"><span><i style="background:var(--ok)"></i>Dominadas ${dom}</span><span><i style="background:var(--warn)"></i>Aprendiendo ${apr}</span><span><i style="background:var(--surface-3)"></i>Nuevas ${preguntas.length - dom - apr}</span></div>
        <div class="stack" style="height:14px"><i class="s-dom" data-w="${pct(dom, preguntas.length)}"></i><i class="s-apr" data-w="${pct(apr, preguntas.length)}"></i></div>
        <div class="row" style="margin-top:20px">${pend.length ? `<button class="btn btn-primary btn-lg" id="go">${icon("play", 18)} Repasar ${Math.min(20, pend.length)} ahora</button>` : `<p class="muted" style="margin:0">${prox ? `La próxima pregunta vuelve ${new Date(prox.due).toLocaleDateString("es-ES", { weekday: "long", day: "numeric", month: "long" })}.` : "Responde preguntas en la ruta o en un test y aparecerán aquí cuando toque repasarlas."}</p><a class="btn btn-ghost" href="#/practicar">Practicar preguntas nuevas</a>`}</div></div></div>`;
    barras(app);
    const g = $("#go"); if (g) g.addEventListener("click", () => sesion(pend.slice(0, 20), { titulo: "Repaso de hoy", modo: "practica", tipo: "repaso", volver: "#/repaso" }));
  }

  // ───── Exámenes ─────
  function seleccionExamen(N = 30, pool = preguntas) {
    const porTema = {}; pool.forEach(q => (porTema[q.tema] = porTema[q.tema] || []).push(q));
    const ts = Object.keys(porTema); N = Math.min(N, pool.length); const cupo = Math.max(1, Math.floor(N / ts.length));
    let sel = []; shuffle(ts).forEach(t => sel.push(...shuffle(porTema[t]).slice(0, cupo)));
    sel = sel.slice(0, N); sel = sel.concat(shuffle(pool.filter(q => !sel.includes(q))).slice(0, Math.max(0, N - sel.length)));
    return shuffle(sel);
  }
  let ofFiltro = "todos";
  function vistaExamenes() {
    const sim = S.examenes.filter(e => e.tipo === "simulacro" && (!e.variante || e.variante === "dgt"));
    let racha = 0; for (let k = sim.length - 1; k >= 0 && sim[k].apto; k--) racha++;
    const ult5 = sim.slice(-5); const media = ult5.length ? (ult5.reduce((a, e) => a + e.fallos, 0) / ult5.length) : null;
    const todos = S.examenes.filter(e => e.tipo === "simulacro" || e.tipo === "oficial");
    const conFallos = preguntas.filter(q => S.srs[q.id] && S.srs[q.id].ko > 0);
    const hechos = OFICIALES.filter(t => S.oficiales[t.id]).length; const sigOf = OFICIALES.find(t => !S.oficiales[t.id]);
    const anios = [...new Set(OFICIALES.map(t => (t.fecha || "").slice(0, 4)).filter(Boolean))].sort().reverse();
    const lista = OFICIALES.filter(t => ofFiltro === "todos" ? true : ofFiltro === "pendientes" ? !S.oficiales[t.id] : ofFiltro === "hechos" ? !!S.oficiales[t.id] : (t.fecha || "").startsWith(ofFiltro));
    const porAnio = {}; lista.forEach(t => { const y = (t.fecha || "").slice(0, 4) || "Otros"; (porAnio[y] = porAnio[y] || []).push(t); });
    const temasQ = TEMA_IDS.filter(id => preguntas.filter(q => q.tema === id).length >= 20).map(id => tema(id));
    app.innerHTML = `<div class="wrap page-enter">
      <div class="page-head"><span class="eyebrow">${icon("flag", 14)} Exámenes</span><h1 style="margin-top:8px">Ponte a prueba</h1><p>Haz simulacros en las mismas condiciones que el examen real. Cuando apruebes 5 seguidos, estarás listo para presentarte.</p></div>
      <div class="ex-stats">
        <div class="card"><span class="eyebrow">${icon("flame", 14)} Racha de aptos</span><div class="ex-dots">${[0, 1, 2, 3, 4].map(k => `<i class="${k < racha ? "on" : ""}" style="animation-delay:${k * 80}ms"></i>`).join("")}</div><small class="muted">${racha >= 5 ? "¡Listo para el examen!" : `${racha} de 5 simulacros APTOS seguidos`}</small></div>
        <div class="card"><span class="eyebrow">${icon("x", 14)} Media de fallos</span><b class="ex-big">${media == null ? "—" : String(media.toFixed(1)).replace(".", ",")}</b><small class="muted">en tus últimos ${ult5.length || 5} simulacros · se aprueba con 3 o menos</small></div>
        <div class="card ex-chart"><span class="eyebrow">${icon("chart", 14)} Evolución</span>${todos.length >= 2 ? spark(todos.slice(-12)) : `<p class="muted" style="margin:8px 0 0">Haz al menos dos exámenes para ver tu evolución.</p>`}</div>
      </div>

      <div class="ex-types">
        <button class="ex-main" data-ex="dgt"><span class="eyebrow" style="color:#f5b79e">${icon("timer", 14)} Simulacro DGT</span><b>30 preguntas · 30 minutos · máximo 3 fallos</b><small>Como el día del examen: sin ver las soluciones hasta el final y con preguntas de todos los temas.</small><span class="pr-go">${icon("play", 22)}</span></button>
        <button class="mode" data-ex="expres" style="--c:#b8861f"><span class="t-ic">${icon("zap", 20)}</span><span class="m-tx"><b>Simulacro exprés</b><small>15 preguntas en 15 minutos · máximo 1 fallo</small></span></button>
        <button class="mode ${conFallos.length < 10 ? "dis" : ""}" data-ex="fallos" style="--c:var(--bad)" ${conFallos.length < 10 ? "disabled" : ""}><span class="t-ic">${icon("target", 20)}</span><span class="m-tx"><b>Examen de tus fallos</b><small>${conFallos.length >= 10 ? "30 preguntas con lo que más se te resiste" : "Disponible cuando hayas fallado al menos 10"}</small></span></button>
        <div class="mode ex-tema" style="--c:var(--ink)"><span class="t-ic">${icon("layers", 20)}</span><span class="m-tx"><b>Simulacro por tema</b><small>20 preguntas de un solo tema · 20 minutos</small>
          <span class="chips" style="margin-top:8px">${temasQ.map(t => `<button class="chip" data-extema="${t.id}">${esc(t.titulo)}</button>`).join("")}</span></span></div>
      </div>

      <div class="section-title"><div><h2>Tests oficiales de la DGT</h2><p class="muted" style="margin:6px 0 0">Basados en los tests de la <a href="https://revista.dgt.es/es/test/" target="_blank" rel="noopener">Revista DGT</a>, redactados de nuevo con la misma respuesta correcta.</p></div>
        ${sigOf ? `<a class="btn btn-primary btn-sm" href="#/oficial/${sigOf.id}">${icon("play", 15)} Siguiente sin hacer: nº ${esc(sigOf.numero)}</a>` : ""}</div>
      ${OFICIALES.length ? `<div class="card row" style="margin-bottom:14px"><div style="flex:1;min-width:200px"><b>Has hecho ${hechos} de ${OFICIALES.length}</b><div class="progress" style="margin-top:8px;--c:var(--ink)"><i data-w="${pct(hechos, OFICIALES.length)}"></i></div></div>
          <div class="chips">${[["todos", "Todos"], ["pendientes", "Sin hacer"], ["hechos", "Hechos"], ...anios.map(y => [y, y])].map(([v, n]) => `<button class="chip ${ofFiltro === v ? "on" : ""}" data-of="${v}">${n}</button>`).join("")}</div></div>
        <div class="grid grid-3">${Object.keys(porAnio).sort().reverse().map(y => `<div class="year-sep">${esc(y)}</div>` + porAnio[y].map(t => { const r = S.oficiales[t.id]; const [yy, mm] = (t.fecha || "").split("-");
          return `<a class="card tile off-card reveal" href="#/oficial/${t.id}"><div class="off-top"><div class="off-date"><b>${mm ? MESES[+mm - 1] : "—"}</b><small>${yy || ""}</small></div>
            <div style="flex:1"><h3 style="margin:0">Test nº ${esc(t.numero)}</h3><small class="muted">${t.preguntas.length} preguntas · ${esc(t.etiqueta || "")}</small></div></div>
            ${r ? `<span class="off-score ${r.best / r.total >= .9 ? "ok" : ""}">${icon(r.best / r.total >= .9 ? "check" : "repeat", 13)} Mejor: ${r.best}/${r.total}</span>` : `<span class="off-score">Sin hacer</span>`}<span class="go">${icon("arrowRight", 20)}</span></a>`; }).join("")).join("") || vacioHTML("check", "Nada por aquí", "Prueba con otro filtro.")}</div>`
        : vacioHTML("badge", "Los tests oficiales no se han cargado", "Faltan los ficheros data/oficiales-*.js.")}

      ${todos.length ? `<div class="section-title"><h2>Tu historial</h2><span class="muted">${todos.length} exámenes</span></div>
        <div class="card ex-hist">${todos.slice(-12).reverse().map(e => { const idx = S.examenes.indexOf(e); return `<div class="ex-row"><span class="ex-v ${e.apto ? "ok" : "ko"}">${e.apto ? "APTO" : "NO APTO"}</span>
          <span class="ex-n"><b>${esc(e.titulo || (e.tipo === "oficial" ? "Test oficial" : "Simulacro DGT"))}</b><small>${new Date(e.fecha).toLocaleDateString("es-ES", { day: "numeric", month: "short", hour: "2-digit", minute: "2-digit" })}${e.seg ? " · " + Math.round(e.seg / 60) + " min" : ""}</small></span>
          <span class="ex-s">${e.aciertos}/${e.total}<small>${e.fallos} fallo${e.fallos === 1 ? "" : "s"}</small></span>${e.detalle ? `<a class="btn btn-ghost btn-sm" href="#/revision/${idx}">Revisar</a>` : `<span></span>`}</div>`; }).join("")}</div>` : ""}

      <div class="section-title"><h2>El día del examen</h2></div>
      <div class="grid grid-3">${[["clock", "Llega con tiempo", "Lleva el DNI o NIE en vigor. Llegar con prisa es la forma más fácil de cometer errores tontos."],
        ["eye", "Lee la pregunta entera", "Y todas las opciones antes de elegir. Ojo con palabras como «siempre», «nunca» o «solo»."],
        ["flag", "Marca las dudosas", "No te atasques: márcala, sigue y vuelve al final. Tienes un minuto por pregunta."],
        ["shieldCheck", "Fíate de lo practicado", "Tu primera respuesta suele ser la buena. Cambia solo si encuentras un motivo claro."],
        ["sign", "Mira bien la imagen", "Muchas preguntas dependen de un detalle: una señal, una marca vial o quién viene por la derecha."],
        ["phone", "La nota, en miDGT", "El resultado aparece en la app y en la web de la DGT, normalmente el mismo día por la tarde."]].map(([ic, t, d]) => `<div class="card tip-card"><div class="t-ic">${icon(ic === "sign" ? "triangle" : ic, 20)}</div><div><b>${t}</b><p class="muted" style="margin:4px 0 0;font-size:.9rem">${d}</p></div></div>`).join("")}</div></div>`;
    reveal(app); barras(app);
    const empezar = v => {
      if (v === "dgt") sesion(seleccionExamen(30), { titulo: "Simulacro DGT", modo: "examen", tipo: "simulacro", variante: "dgt", tiempo: 1800, volver: "#/examenes" });
      if (v === "expres") sesion(seleccionExamen(15), { titulo: "Simulacro exprés", modo: "examen", tipo: "simulacro", variante: "expres", tiempo: 900, volver: "#/examenes" });
      if (v === "fallos") { const pool = conFallos.slice().sort((a, b) => (S.srs[a.id].b - S.srs[b.id].b) || (S.srs[b.id].ko - S.srs[a.id].ko)).slice(0, 30); const extra = prioriza(preguntas.filter(q => !pool.includes(q))).slice(0, 30 - pool.length); sesion(shuffle(pool.concat(extra)), { titulo: "Examen de tus fallos", modo: "examen", tipo: "simulacro", variante: "fallos", tiempo: 1800, volver: "#/examenes" }); }
    };
    $$("[data-ex]", app).forEach(b => b.addEventListener("click", () => empezar(b.dataset.ex)));
    $$("[data-extema]", app).forEach(b => b.addEventListener("click", e => { e.stopPropagation(); const t = tema(b.dataset.extema); sesion(seleccionExamen(20, preguntas.filter(q => q.tema === t.id)), { titulo: "Simulacro · " + t.titulo, modo: "examen", tipo: "simulacro", variante: "tema", ref: t.id, tiempo: 1200, volver: "#/examenes" }); }));
    $$("[data-of]", app).forEach(b => b.addEventListener("click", () => { ofFiltro = b.dataset.of; vistaExamenes(); }));
  }
  function vistaRevision(idx) {
    const e = S.examenes[+idx]; if (!e || !e.detalle) return vistaNoEncontrado();
    const res = e.detalle.map(([id, k]) => { const q = qById(id); return q ? { q, k, ok: k === q.correcta } : null; }).filter(Boolean);
    resultadoExamen(res, { apto: e.apto, aciertos: e.aciertos, fallos: e.fallos, seg: e.seg, titulo: e.titulo, volver: "#/examenes" });
    app.querySelector(".result-hero").insertAdjacentHTML("afterbegin", `<p class="muted" style="margin-top:0">${esc(e.titulo || "Examen")} · ${new Date(e.fecha).toLocaleDateString("es-ES", { weekday: "long", day: "numeric", month: "long" })}</p>`);
  }
  function vistaOficial(id) {
    const t = OFICIALES.find(x => x.id === id); if (!t) return vistaNoEncontrado();
    const r = S.oficiales[t.id]; const temas = [...new Set(t.preguntas.map(q => q.tema))];
    const i = OFICIALES.indexOf(t); const prev = OFICIALES[i + 1], next = OFICIALES[i - 1];
    app.innerHTML = `<div class="wrap narrow page-enter">
      <div class="crumbs"><a href="#/examenes">Exámenes</a> ${icon("chevron", 14)} Test nº ${esc(t.numero)}</div>
      <div class="card"><div class="off-top"><div class="off-date" style="width:72px;height:76px"><b style="font-size:1.3rem">${MESES[+((t.fecha || "-1").split("-")[1]) - 1] || "—"}</b><small>${esc((t.fecha || "").slice(0, 4))}</small></div>
        <div><span class="eyebrow">${icon("badge", 14)} Test oficial · Revista DGT</span><h1 style="margin:6px 0 0;font-size:2rem">Test nº ${esc(t.numero)}</h1><p class="muted" style="margin:4px 0 0">${esc(t.etiqueta || "")} · ${t.preguntas.length} preguntas · ${t.preguntas.length} minutos</p></div></div>
        <div class="chips" style="margin:16px 0">${temas.map(x => `<span class="q-tema">${icon(tema(x).ic, 13)} ${esc(tema(x).titulo)}</span>`).join("")}</div>
        ${r ? `<p>Tu mejor resultado: <b>${r.best}/${r.total}</b></p>` : ""}
        <div class="row"><button class="btn btn-primary" id="ex">${icon("timer", 18)} Modo examen</button><button class="btn btn-ghost" id="pr">${icon("target", 18)} Modo práctica</button><span class="spacer"></span>${t.url ? `<a class="btn btn-ghost btn-sm" href="${esc(t.url)}" target="_blank" rel="noopener">${icon("external", 15)} Ver original</a>` : ""}</div>
        <p class="muted" style="font-size:.84rem;margin:16px 0 0">Modo examen: sin ver las soluciones hasta el final y con cronómetro. Modo práctica: corrección y explicación al momento.</p></div>
      <div class="les-nav">${prev ? `<a class="les-nx" href="#/oficial/${prev.id}"><small>${icon("arrowLeft", 14)} Anterior</small><b>Test nº ${esc(prev.numero)} · ${esc(prev.etiqueta || "")}</b></a>` : "<span></span>"}${next ? `<a class="les-nx" href="#/oficial/${next.id}" style="text-align:right"><small style="justify-content:flex-end">Más reciente ${icon("arrowRight", 14)}</small><b>Test nº ${esc(next.numero)} · ${esc(next.etiqueta || "")}</b></a>` : ""}</div></div>`;
    $("#ex").addEventListener("click", () => sesion(t.preguntas.slice(), { titulo: "Test oficial nº " + t.numero, modo: "examen", tipo: "oficial", ref: t.id, tiempo: t.preguntas.length * 60, volver: "#/examenes" }));
    $("#pr").addEventListener("click", () => sesion(t.preguntas.slice(), { titulo: "Test oficial nº " + t.numero, modo: "practica", tipo: "libre", volver: "#/oficial/" + t.id }));
  }

  // ───── Tarjetas ─────
  let fcTema = "";
  function vistaTarjetas() {
    if (!FC.length) return vacio("cards", "Las tarjetas no se han cargado", "Falta data/flashcards.js.");
    const temas = TEMAS.filter(t => FC.some(c => c.tema === t.id)).map(t => tema(t.id));
    const caja = c => S.fc[c.id] || 0;
    let mazo = shuffle(FC.filter(c => !fcTema || c.tema === fcTema)).sort((a, b) => caja(a) - caja(b)).slice(0, 20);
    const sabidas = FC.filter(c => caja(c) >= 2).length;
    app.innerHTML = `<div class="wrap narrow page-enter">
      <div class="page-head"><span class="eyebrow">${icon("cards", 14)} Tarjetas</span><h1 style="margin-top:8px">Memoriza las cifras clave</h1><p>Piensa la respuesta y toca la tarjeta para girarla. Las que no sepas volverán pronto. Teclas: espacio para girar, flechas para responder.</p></div>
      <div class="chips" style="margin-bottom:14px"><button class="chip ${!fcTema ? "on" : ""}" data-t="">Todas</button>${temas.map(t => `<button class="chip ${fcTema === t.id ? "on" : ""}" data-t="${t.id}">${icon(t.ic, 14)} ${esc(t.titulo)}</button>`).join("")}</div>
      <div class="row" style="margin-bottom:10px"><span class="muted" id="fc-cont"></span><span class="spacer"></span><span class="muted">Dominadas: <b>${sabidas}</b> de ${FC.length}</span></div>
      <div class="progress" style="margin-bottom:24px"><i data-w="${pct(sabidas, FC.length)}"></i></div>
      <div class="fc-stage" id="stage"></div>
      <div class="fc-actions"><button class="btn btn-bad" id="no">${icon("arrowLeft", 18)} Repasar</button><button class="btn btn-good" id="si">Me la sé ${icon("arrowRight", 18)}</button></div></div>`;
    barras(app);
    $$(".chips .chip", app).forEach(c => c.addEventListener("click", () => { fcTema = c.dataset.t; vistaTarjetas(); }));
    let i = 0;
    const pintar = () => {
      if (i >= mazo.length) { $("#stage").innerHTML = `<div class="card empty" style="height:100%;display:grid;place-content:center"><div class="m-ic">${icon("check", 30)}</div><h2>¡Ronda terminada!</h2><button class="btn btn-primary" id="again">Otra ronda</button></div>`; $("#again").addEventListener("click", vistaTarjetas); return; }
      const c = mazo[i], t = tema(c.tema); $("#fc-cont").textContent = `Tarjeta ${i + 1} de ${mazo.length}`;
      $("#stage").innerHTML = `<div class="fc enter" style="--c:${t.color}" tabindex="0" role="button" aria-label="Girar tarjeta">
        <div class="ff"><div class="f-ic">${icon(t.ic, 26)}</div><div class="ft">${fmt(c.frente)}</div><span class="fc-hint">${icon("rotate", 14)} Toca para girar</span></div>
        <div class="fb"><div class="fd">${fmt(c.dorso)}</div>${c.nota ? `<div class="fn">${fmt(c.nota)}</div>` : ""}<span class="fc-hint muted">${esc(t.titulo)}</span></div></div>`;
      $(".fc", app).addEventListener("click", e => e.currentTarget.classList.toggle("flipped"));
    };
    const responder = sabe => {
      const card = $(".fc", app); if (!card || i >= mazo.length) return;
      const c = mazo[i]; S.fc[c.id] = sabe ? Math.min(3, caja(c) + 1) : 0; save(); evento("fc"); if (sabe) sumarPuntos(.5);
      card.classList.add(sabe ? "out-right" : "out-left"); if (!sabe) mazo.splice(Math.min(mazo.length, i + 4), 0, c);
      setTimeout(() => { i++; pintar(); }, 360);
    };
    $("#si").addEventListener("click", () => responder(true)); $("#no").addEventListener("click", () => responder(false));
    teclas = e => { if (e.key === " ") { e.preventDefault(); const c = $(".fc", app); if (c) c.classList.toggle("flipped"); } else if (e.key === "ArrowRight") responder(true); else if (e.key === "ArrowLeft") responder(false); };
    pintar();
  }

  // ───── Señales ─────
  let filtroSenal = "Todas";
  function vistaSenales() {
    const todas = todasSenales(); if (!todas.length) return vacio("triangle", "No hay señales", "Llegan con el temario.");
    const cats = ["Todas", ...new Set(todas.map(s => catSenal(s.forma)))];
    const lista = filtroSenal === "Todas" ? todas : todas.filter(s => catSenal(s.forma) === filtroSenal);
    app.innerHTML = `<div class="wrap page-enter">
      <div class="page-head"><span class="eyebrow">${icon("triangle", 14)} Señales</span><h1 style="margin-top:8px">¿Qué significa?</h1><p>Mira la señal, di en voz alta qué significa y toca para comprobarlo.</p></div>
      <div class="row" style="margin-bottom:18px"><div class="chips">${cats.map(c => `<button class="chip ${c === filtroSenal ? "on" : ""}" data-c="${esc(c)}">${esc(c)}</button>`).join("")}</div><span class="spacer"></span>
        <button class="btn btn-ghost btn-sm" id="mez">${icon("shuffle", 16)} Mezclar</button></div>
      <div class="grid grid-4" id="sg">${lista.map(s => `<div class="sign-card reveal" tabindex="0" role="button" aria-label="Señal: toca para ver su significado"><div class="flip">
        <div class="front">${svgSenal(s.forma, s.simbolo)}<span class="nm">${esc(((s.nombre || "").match(/^[A-Z]{1,2}-\d+[a-z]?/) || [""])[0])}</span></div>
        <div class="back"><h4>${fmt(s.nombre)}</h4><span class="q-tema">${esc(catSenal(s.forma))}</span><p style="margin:0">${fmt(s.descripcion || "")}</p></div></div></div>`).join("")}</div></div>`;
    $$(".chips .chip", app).forEach(c => c.addEventListener("click", () => { filtroSenal = c.dataset.c; vistaSenales(); }));
    $$(".sign-card", app).forEach(c => { const f = () => c.classList.toggle("flipped"); c.addEventListener("click", f); c.addEventListener("keydown", e => { if (e.key === "Enter" || e.key === " ") { e.preventDefault(); f(); } }); });
    $("#mez").addEventListener("click", () => { const g = $("#sg"); shuffle([...g.children]).forEach(ch => g.appendChild(ch)); });
    reveal(app);
  }

  // ───── Guía Comunitat Valenciana ─────
  function vistaValencia() {
    const pasos = (INFO.pasos && INFO.pasos.length) ? INFO.pasos : [{ titulo: "Reconocimiento médico", texto: "En un Centro de Reconocimiento de Conductores." }, { titulo: "Tasa DGT", texto: "Da derecho a dos convocatorias." }, { titulo: "Examen teórico", texto: "30 preguntas, máximo 3 fallos." }, { titulo: "Examen práctico", texto: "Con el teórico aprobado." }];
    app.innerHTML = `<div class="wrap page-enter">
      <div class="page-head"><span class="eyebrow">${icon("mapPin", 14)} Comunitat Valenciana</span><h1 style="margin-top:8px">Guía práctica</h1><p>Todo lo que necesitas para sacarte el carnet en Valencia, Alicante o Castellón. ${INFO.actualizado ? "Datos recopilados en " + esc(INFO.actualizado) + "." : ""} Confirma tasas, direcciones y horarios en la web de la DGT.</p></div>
      <div class="grid grid-2" style="align-items:start">
        <div class="card"><h2 style="font-size:1.3rem">Paso a paso</h2><div class="steps">${pasos.map(p => `<div class="step reveal"><div><h4>${fmt(p.titulo)}</h4><p>${fmt(p.texto)}</p></div></div>`).join("")}</div></div>
        <div style="display:grid;gap:16px">
          ${(INFO.jefaturas || []).map(j => `<div class="card reveal" style="display:flex;gap:14px"><div class="t-ic" style="width:44px;height:44px;border-radius:13px;display:grid;place-items:center;background:var(--ink-soft);color:var(--ink);flex:none">${icon("building", 20)}</div><div><h3 style="margin:0 0 4px">Jefatura de ${esc(j.provincia)}</h3><p style="margin:0">${fmt(j.direccion || "")}</p>${j.telefono ? `<p class="muted" style="margin:4px 0 0">${icon("phone", 14)} ${esc(j.telefono)}</p>` : ""}${j.notas ? `<p class="muted" style="margin:6px 0 0;font-size:.88rem">${fmt(j.notas)}</p>` : ""}</div></div>`).join("")}
          ${(INFO.costes || []).length ? `<div class="card reveal"><h3>${icon("euro", 18)} Costes orientativos</h3><div class="table-wrap" style="margin:0"><table><tbody>${INFO.costes.map(c => `<tr><td>${fmt(c.concepto)}</td><td style="text-align:right"><b>${fmt(c.importe)}</b></td></tr>`).join("")}</tbody></table></div></div>` : ""}
        </div></div>
      ${(INFO.consejos || []).length ? `<div class="section-title"><h2>Consejos</h2></div><div class="grid grid-2">${INFO.consejos.map(c => `<div class="card tip-card reveal"><div class="t-ic">${icon("bulb", 20)}</div><p style="margin:0">${fmt(c)}</p></div>`).join("")}</div>` : ""}
      <div class="section-title"><h2>Enlaces útiles</h2></div>
      <div class="grid grid-3">${((INFO.enlaces && INFO.enlaces.length) ? INFO.enlaces : [{ titulo: "DGT", url: "https://www.dgt.es" }, { titulo: "Sede electrónica DGT", url: "https://sede.dgt.gob.es" }]).map(e => `<a class="card tile reveal" href="${esc(e.url)}" target="_blank" rel="noopener"><div class="t-ic">${icon("external", 20)}</div><h3 style="font-size:1rem">${esc(e.titulo)}</h3><p style="word-break:break-all;font-size:.8rem">${esc(e.url.replace(/^https?:\/\//, ""))}</p></a>`).join("")}</div></div>`;
    reveal(app);
  }

  // ───── Mi preparación ─────
  function vistaProgreso() {
    const prep = preparacion(); const r = racha();
    const sim = S.examenes.filter(e => e.tipo === "simulacro" || e.tipo === "oficial").slice(-12);
    const C = Math.PI * 110;
    const maxDia = Math.max(1, ...Object.values(S.dias));
    const heat = (() => { const out = []; const d = new Date(); d.setDate(d.getDate() - 7 * 16 + 1 - ((d.getDay() + 6) % 7) + 6); d.setDate(d.getDate() - 6); for (let i = 0; i < 7 * 17; i++) { const k = hoyStr(d); const v = S.dias[k] || 0; out.push({ k, v, fz: S.congelados.includes(k), fut: d > new Date() }); d.setDate(d.getDate() + 1); } return out; })();
    const errores = Object.entries(S.srs).filter(([, s]) => s.ko > 0).map(([id, s]) => ({ q: qById(id), s })).filter(x => x.q).sort((a, b) => (b.s.ko - b.s.ok * .5) - (a.s.ko - a.s.ok * .5)).slice(0, 5);
    app.innerHTML = `<div class="wrap page-enter">
      <div class="page-head"><span class="eyebrow">${icon("chart", 14)} Mi preparación</span><h1 style="margin-top:8px">¿Cómo lo llevas?</h1><p>Todo se calcula con tus respuestas reales: cuánto aciertas últimamente y qué preguntas has fijado en la memoria.</p></div>
      <div class="card ready">
        <svg class="gauge" viewBox="0 0 260 150"><path class="arc-bg" d="M20 140a110 110 0 0 1 220 0" fill="none" stroke-width="18" stroke-linecap="round"/>
          <path class="arc" d="M20 140a110 110 0 0 1 220 0" fill="none" stroke-width="18" stroke-linecap="round" style="stroke:${prep.pa >= .7 ? "var(--ok)" : prep.pa >= .35 ? "var(--warn)" : "var(--primary)"}" stroke-dasharray="${C}" stroke-dashoffset="${C}" data-off="${prep.suficiente ? C * (1 - prep.pa) : C}"/>
          <text x="130" y="118" text-anchor="middle" font-size="44" font-weight="800">${prep.suficiente ? Math.round(prep.pa * 100) + "%" : "—"}</text><text x="130" y="142" text-anchor="middle" font-size="12" style="fill:var(--muted)">probabilidad de APTO</text></svg>
        <div><h2 style="font-size:1.5rem">${prep.suficiente ? `Si te examinaras hoy, aprobarías unos <span style="color:var(--primary)">${Math.round(prep.pa * 10)} de cada 10</span> veces` : "Necesitamos más respuestas"}</h2>
          <p class="muted">${prep.suficiente ? `Tu acierto en las últimas preguntas es del <b>${Math.round(prep.acierto * 100)}%</b>. Para aprobar con seguridad conviene estar por encima del <b>93%</b>, porque solo puedes fallar 3 de 30.` : `Llevas ${prep.total} respuestas. A partir de 20 calculamos tu probabilidad de aprobar.`}</p>
          <div class="row"><a class="btn btn-primary btn-sm" href="#/repaso">${icon("repeat", 16)} Repaso de hoy</a><a class="btn btn-ghost btn-sm" href="#/examenes">${icon("timer", 16)} Simulacro</a></div></div></div>

      <div class="grid grid-2" style="margin-top:16px;align-items:start">
        <div class="card"><h3>Dominio por tema</h3><div class="legend" style="margin-bottom:14px"><span><i style="background:var(--ok)"></i>Dominadas</span><span><i style="background:var(--warn)"></i>Aprendiendo</span><span><i style="background:var(--surface-3)"></i>Sin ver</span></div>
          <div class="mastery">${TEMA_IDS.map(id => ({ id })).map(b => { const t = tema(b.id); const qs = preguntas.filter(q => q.tema === b.id); const d = qs.filter(q => estado(q.id) === "dominada").length, a = qs.filter(q => estado(q.id) === "aprendiendo").length; const pt = prep.porTema.find(x => x.t === b.id);
            return `<a class="m-row" href="#/tema/${b.id}" style="--c:${t.color};color:var(--text);text-decoration:none"><span class="m-ic">${icon(t.ic, 18)}</span><div><div class="m-t">${esc(t.titulo)}<small>${pt && pt.n ? Math.round(pt.k / pt.n * 100) + "% acierto" : "sin datos"}</small></div><div class="stack"><i class="s-dom" data-w="${pct(d, qs.length)}"></i><i class="s-apr" data-w="${pct(a, qs.length)}"></i></div></div><b style="font-variant-numeric:tabular-nums">${d}/${qs.length}</b></a>`; }).join("")}</div></div>
        <div style="display:grid;gap:16px">
          <div class="card"><h3>${icon("flame", 18)} Racha y constancia</h3>
            <div class="row" style="gap:26px;margin-bottom:14px"><div><b style="font-family:var(--display);font-size:2rem">${r}</b><br><small class="muted">días de racha</small></div><div><b style="font-family:var(--display);font-size:2rem">${Object.keys(S.dias).filter(cumplido).length}</b><br><small class="muted">días con la meta cumplida</small></div><div><b style="font-family:var(--display);font-size:2rem">${S.protectores}</b><br><small class="muted">protectores</small></div></div>
            <div class="heat">${heat.map(h => `<i class="${h.fut ? "" : h.v >= S.meta ? "l4" : h.v >= S.meta * .66 ? "l3" : h.v >= S.meta * .33 ? "l2" : h.v > 0 ? "l1" : ""} ${h.fz ? "fz" : ""}" title="${h.k}: ${Math.round(h.v)}" style="${h.fut ? "opacity:.3" : ""}"></i>`).join("")}</div>
            <p class="muted" style="font-size:.8rem;margin:8px 0 0">Cada cuadro es un día; más oscuro, más preguntas. Un borde azul es un día salvado por un protector.</p></div>
          <div class="card"><h3>${icon("chart", 18)} Exámenes (aciertos sobre 100)</h3>${sim.length >= 2 ? spark(sim) : `<p class="muted">Haz al menos dos simulacros o tests oficiales para ver tu evolución.</p>`}</div>
        </div></div>

      ${errores.length ? `<div class="section-title"><h2>Lo que más se te resiste</h2></div><div class="weak">${errores.map(x => `<a href="#/tema/${x.q.tema}"><span class="m-ic" style="width:34px;height:34px;border-radius:10px;display:grid;place-items:center;background:var(--bad-soft);color:var(--bad);flex:none">${icon(tema(x.q.tema).ic, 16)}</span><b>${fmt(x.q.pregunta)}</b><small>${x.s.ko} fallo${x.s.ko > 1 ? "s" : ""}</small></a>`).join("")}</div>` : ""}

      <div class="section-title"><h2>Logros</h2><span class="muted">${Object.keys(S.logros || {}).length} de ${LOGROS.length}</span></div>
      <div class="logros">${LOGROS.map(l => { const n = nLogro(l), v = Math.min(n, l.v()), on = (S.logros || {})[l.id]; return `<div class="logro ${on ? "on" : ""}"><span class="le">${icon(l.ic, 20)}</span><div style="flex:1"><b>${esc(l.t)}</b><small>${esc(l.d)}</small>${on ? "" : `<div class="lp"><i style="width:${pct(v, n)}%"></i></div>`}</div></div>`; }).join("")}</div>

      <div class="section-title" id="ajustes"><h2>Ajustes</h2></div>
      <div class="card row"><div style="flex:1;min-width:220px"><b>Meta diaria</b><p class="muted" style="margin:0">Preguntas al día para mantener la racha (cada lección cuenta 5).</p></div>
        <div class="seg" id="meta">${[[10, "Suave"], [20, "Normal"], [40, "Intensa"], [60, "Examen cerca"]].map(([n, l]) => `<button class="${S.meta === n ? "on" : ""}" data-v="${n}">${l} · ${n}</button>`).join("")}</div></div>
      <div class="card row" style="margin-top:12px"><div style="flex:1;min-width:220px"><b>Fecha de mi examen teórico</b><p class="muted" style="margin:0">Con ella calculamos tu plan diario de estudio.</p></div>
        <div class="field" style="margin:0"><input type="date" id="f-exam" value="${esc(S.fechaExamen || "")}" min="${hoyStr()}"></div>${S.fechaExamen ? `<button class="btn btn-ghost btn-sm" id="f-exam-x">Quitar</button>` : ""}</div>
      <div class="card row" style="margin-top:12px"><div style="flex:1"><b>Borrar todo el progreso</b><p class="muted" style="margin:0">Se guarda solo en este navegador.</p></div><button class="btn btn-ghost btn-sm" id="reset">Borrar</button></div></div>`;
    anillos(app); barras(app);
    $$("#meta button").forEach(b => b.addEventListener("click", () => { S.meta = +b.dataset.v; save(); $$("#meta button").forEach(x => x.classList.toggle("on", x === b)); pintarTopbar(true); toast(icon("target", 18) + ` Meta diaria: ${S.meta} preguntas`); }));
    $("#f-exam").addEventListener("change", e => { S.fechaExamen = e.target.value || null; save(); toast(icon("calendar", 18) + " Fecha guardada: tu plan está en Inicio"); vistaProgreso(); });
    const fx = $("#f-exam-x"); if (fx) fx.addEventListener("click", () => { S.fechaExamen = null; save(); vistaProgreso(); });
    $("#reset").addEventListener("click", () => { if (confirm("¿Seguro? Se borrará todo tu progreso.")) { S = Object.assign(VACIO(), { theme: S.theme }); save(); pintarTopbar(); vistaProgreso(); toast("Progreso borrado"); } });
    if (location.hash.includes("#ajustes")) setTimeout(() => $("#ajustes").scrollIntoView({ behavior: "smooth" }), 300);
  }
  function spark(ex) {
    const W = 520, H = 150, P = 26; const xs = i => P + i * (W - 2 * P) / Math.max(1, ex.length - 1); const ys = v => H - P - (v / 100) * (H - 2 * P);
    const pts = ex.map((e, i) => [xs(i), ys(pct(e.aciertos, e.total))]);
    return `<svg class="spark" viewBox="0 0 ${W} ${H}" preserveAspectRatio="none"><line class="pass" x1="${P}" x2="${W - P}" y1="${ys(90)}" y2="${ys(90)}"/><text x="${W - P}" y="${ys(90) - 6}" text-anchor="end">aprobado ≈ 90</text>
      <path class="line" d="M${pts.map(p => p.join(",")).join("L")}"/>${pts.map((p, i) => `<circle class="${ex[i].apto ? "ok" : "ko"}" cx="${p[0]}" cy="${p[1]}" r="4.5"/>`).join("")}</svg>`;
  }

  // ───── Esquemas ─────
  let dgTipo = "";
  function vistaEsquemas(temaSel) {
    if (!DGS.length) return vacio("sparkle", "Los esquemas se están preparando", "Aparecerán en cuanto estén los ficheros data/diagramas-*.js.");
    const tipos = [...new Set(DGS.map(e => e.diagrama.tipo))];
    const temas = TEMA_IDS.filter(id => DGS.some(e => e.tema === id || (e.leccion && tema(id).lecciones.some(l => l.id === e.leccion))));
    const grupos = (temaSel ? [temaSel] : temas).map(id => {
      const t = tema(id);
      const items = [mapaTema(id), ...t.lecciones.flatMap(l => dgLeccion(l.id).map(e => Object.assign({ lec: l }, e)))].filter(Boolean).filter(e => !dgTipo || e.diagrama.tipo === dgTipo);
      if (!items.length) return "";
      return `<div class="dg-group-title" style="--c:${t.color}"><span class="u-ic">${icon(t.ic, 20)}</span><h2>${esc(t.tituloLargo)}</h2></div>` +
        items.map(e => dgHTML(e, t.color) + (e.lec ? `<p class="dg-from">De la lección <a href="#/leccion/${id}/${e.lec.id}">${esc(sinEmoji(e.lec.titulo))}</a></p>` : "")).join("");
    }).join("");
    app.innerHTML = `<div class="wrap narrow page-enter">
      <div class="page-head"><span class="eyebrow">${icon("sparkle", 14)} Repaso visual</span><h1 style="margin-top:8px">Mapas mentales y esquemas</h1><p>Todo el temario resumido en diagramas. Pulsa <b>Ponte a prueba</b> en cualquiera para ocultar los datos e intentar recordarlos: es la forma más eficaz de memorizar.</p></div>
      <div class="dg-filter"><div class="chips" style="margin-bottom:8px"><a class="chip ${!temaSel ? "on" : ""}" href="#/esquemas">Todos los temas</a>${temas.map(id => `<a class="chip ${temaSel === id ? "on" : ""}" href="#/esquemas/${id}">${icon(tema(id).ic, 14)} ${esc(tema(id).titulo)}</a>`).join("")}</div>
        <div class="chips"><button class="chip ${!dgTipo ? "on" : ""}" data-t="">Todos los tipos</button>${tipos.map(x => `<button class="chip ${dgTipo === x ? "on" : ""}" data-t="${x}">${esc(window.DIAGRAMA.nombre(x))}</button>`).join("")}</div></div>
      ${grupos || vacioHTML("sparkle", "No hay esquemas con ese filtro", "Prueba con otro tipo.")}</div>`;
    $$(".dg-filter button.chip", app).forEach(b => b.addEventListener("click", () => { dgTipo = b.dataset.t; vistaEsquemas(temaSel); }));
    envolver({ esquemas: true, tema: temaSel }); activarDg(app);
  }

  // ───── Cuenta y perfil ─────
  function avatarHTML(u, cls) {
    if (!u) return `<span class="avatar ${cls || ""}"><svg viewBox="0 0 40 40" aria-hidden="true"><rect width="40" height="40" style="fill:var(--surface-3)"/><circle cx="20" cy="15.5" r="7" style="fill:var(--muted)"/><path d="M5.5 40c1-8.5 7-13 14.5-13s13.5 4.5 14.5 13z" style="fill:var(--muted)"/></svg></span>`;
    const ini = (u.nombre || "?").trim().split(/\s+/).map(p => p[0]).slice(0, 2).join("").toUpperCase();
    return `<span class="avatar ${cls || ""}" style="--av:${esc(u.color || "#1f3a5f")}">${esc(ini)}</span>`;
  }
  function pintarAvatar() {
    const b = $("#avatar-btn"); if (!b) return;
    const u = CU && CU.usuario;
    b.innerHTML = avatarHTML(u); b.title = u ? u.nombre : "Invitado: inicia sesión para guardar tu progreso";
  }
  function cerrarMenu() { const m = $(".user-menu"); if (m) m.remove(); }
  function abrirMenu() {
    if ($(".user-menu")) return cerrarMenu();
    const u = CU && CU.usuario;
    const m = document.createElement("div"); m.className = "user-menu"; m.setAttribute("role", "menu");
    m.innerHTML = u ? `<div class="um-head">${avatarHTML(u)}<div><b>${esc(u.nombre)}</b><small>${esc(u.email)}</small><br><small><span class="sync-dot ${u.tipo === "nube" ? "" : "off"}"></span> ${u.tipo === "nube" ? "Sincronizado en la nube" : "Guardado en este dispositivo"}</small></div></div>
        <a href="#/perfil">${icon("users", 18)} Mi perfil</a><a href="#/progreso">${icon("chart", 18)} Mi preparación</a><button class="um-it" id="um-out">${icon("arrowLeft", 18)} Cerrar sesión</button>`
      : `<div class="um-head">${avatarHTML(null)}<div><b>Invitado</b><small>Tu progreso se guarda solo en este navegador</small></div></div>
        <a href="#/cuenta/entrar">${icon("key", 18)} Iniciar sesión</a><a href="#/cuenta/registro">${icon("users", 18)} Crear cuenta</a>`;
    document.querySelector(".topbar").appendChild(m);
    const out = $("#um-out", m); if (out) out.addEventListener("click", salirCuenta);
    m.addEventListener("click", e => { if (e.target.closest("a")) cerrarMenu(); });
  }
  document.addEventListener("click", e => { if (!e.target.closest(".user-menu") && !e.target.closest("#avatar-btn")) cerrarMenu(); });
  async function salirCuenta() {
    cerrarMenu(); const n = CU.usuario ? CU.usuario.nombre : "";
    await CU.salir(); toast(icon("check", 18) + ` Sesión cerrada. Hasta pronto${n ? ", " + esc(n.split(" ")[0]) : ""}`);
    cambioDeCuenta("#/");
  }
  function vistaCuenta(modo) {
    if (CU && CU.usuario) { location.hash = "#/perfil"; return; }
    const reg = modo === "registro";
    app.innerHTML = `<div class="wrap page-enter"><div class="auth-wrap">
      <div class="center" style="margin-bottom:18px">${avatarHTML(null, "lg")}<h1 style="margin:14px 0 4px;font-size:2rem">${reg ? "Crea tu cuenta" : "Bienvenido de nuevo"}</h1>
        <p class="muted" style="margin:0">${reg ? "Guarda tu racha, tu repaso y tus exámenes en tu propia cuenta." : "Entra para seguir donde lo dejaste."}</p></div>
      <div class="card auth-card">
        <div class="seg" style="display:flex;margin-bottom:20px"><button style="flex:1" class="${reg ? "" : "on"}" data-m="entrar">Iniciar sesión</button><button style="flex:1" class="${reg ? "on" : ""}" data-m="registro">Crear cuenta</button></div>
        <form id="auth" novalidate>
          <div id="msg"></div>
          ${reg ? `<div class="field"><label for="f-nombre">Nombre</label><input id="f-nombre" autocomplete="name" placeholder="¿Cómo te llamas?" required></div>` : ""}
          <div class="field"><label for="f-email">Correo electrónico</label><input id="f-email" type="email" autocomplete="email" placeholder="tu@correo.com" required></div>
          <div class="field"><label for="f-pass">Contraseña</label><input id="f-pass" type="password" autocomplete="${reg ? "new-password" : "current-password"}" minlength="6" placeholder="Mínimo 6 caracteres" required>${reg ? `<span class="hint">Usa una contraseña que no utilices en otros sitios.</span>` : ""}</div>
          <label class="check"><input type="checkbox" id="f-rec" checked> Mantener la sesión iniciada</label>
          <button class="btn btn-primary btn-lg" style="width:100%" type="submit">${reg ? "Crear cuenta" : "Entrar"} ${icon("arrowRight", 18, "ic-move")}</button>
        </form>
        ${CU && CU.nube && !reg ? `<div class="row" style="justify-content:space-between;margin-top:14px"><button class="btn btn-ghost btn-sm" id="magic">${icon("sparkle", 16)} Entrar con un enlace a mi correo</button><a href="#" id="olvido" style="font-size:.88rem">¿Olvidaste tu contraseña?</a></div>` : ""}
        <div class="mode-note">${icon(CU && CU.nube ? "shieldCheck" : "info", 18)}<span>${CU && CU.nube ? "Tu cuenta se guarda en la nube: podrás entrar desde cualquier dispositivo." : "Las cuentas se guardan en este navegador. Para usar tu progreso en otro dispositivo, usa <b>Exportar</b> en tu perfil."}</span></div>
      </div>
      <p class="center muted" style="margin-top:14px;font-size:.88rem"><a href="#/">Seguir como invitado</a></p></div></div>`;
    $$(".seg button", app).forEach(b => b.addEventListener("click", () => { location.hash = "#/cuenta/" + b.dataset.m; }));
    $(reg ? "#f-nombre" : "#f-email").focus();
    const correo = async (fn, ok) => { const msg = $("#msg"); try { await fn($("#f-email").value); msg.innerHTML = `<div class="form-ok">${ok}</div>`; } catch (er) { msg.innerHTML = `<div class="form-err">${esc(er.message)}</div>`; } };
    const mg = $("#magic"); if (mg) mg.addEventListener("click", () => correo(CU.enlace, "Revisa tu correo: te hemos enviado un enlace para entrar sin contraseña."));
    const ol = $("#olvido"); if (ol) ol.addEventListener("click", e => { e.preventDefault(); correo(CU.recuperar, "Te hemos enviado un correo para crear una contraseña nueva."); });
    $("#auth").addEventListener("submit", async e => {
      e.preventDefault();
      const btn = $("button[type=submit]", app), msg = $("#msg");
      const d = { nombre: reg ? $("#f-nombre").value : "", email: $("#f-email").value, pass: $("#f-pass").value, recordar: $("#f-rec").checked };
      btn.disabled = true; msg.innerHTML = "";
      try {
        const invitado = leer("carnetB-v2");
        if (reg) {
          const r = await CU.registrar(d);
          if (r.confirmar) { msg.innerHTML = `<div class="form-ok">Te hemos enviado un correo para confirmar tu cuenta. Después, inicia sesión.</div>`; btn.disabled = false; return; }
        } else await CU.entrar(d);
        if (conDatos(invitado) && !conDatos(leer()) && confirm("Tienes progreso como invitado en este navegador. ¿Quieres guardarlo en tu cuenta?")) {
          try { localStorage.setItem(clave(), JSON.stringify(Object.assign({}, invitado, { _ts: Date.now() }))); } catch (er) { /* */ }
        }
        toast(icon("check", 18) + ` ${reg ? "Cuenta creada" : "Hola de nuevo"}, ${esc(CU.usuario.nombre.split(" ")[0])}`);
        if (reg) confetti();
        cambioDeCuenta("#/");
      } catch (err) { msg.innerHTML = `<div class="form-err">${esc(err.message || "No se ha podido completar.")}</div>`; btn.disabled = false; }
    });
  }
  function vistaPerfil() {
    const u = CU && CU.usuario; if (!u) { location.hash = "#/cuenta/entrar"; return; }
    const prep = preparacion();
    const dom = preguntas.filter(q => estado(q.id) === "dominada").length;
    app.innerHTML = `<div class="wrap narrow page-enter">
      <div class="card"><div class="profile-head"><span id="pf-av">${avatarHTML(u, "lg")}</span><div style="flex:1;min-width:200px"><span class="eyebrow">${icon("users", 14)} Mi perfil</span><h1 style="margin:6px 0 2px;font-size:2rem">${esc(u.nombre)}</h1><p class="muted" style="margin:0">${esc(u.email)} · <span class="sync-dot ${u.tipo === "nube" ? "" : "off"}"></span> ${u.tipo === "nube" ? "sincronizado en la nube" : "guardado en este dispositivo"}</p></div></div>
        <div class="kpis" style="margin-top:18px">
          <div class="kpi"><b>${racha()}</b><small>días de racha</small></div><div class="kpi"><b>${dom}</b><small>preguntas dominadas</small></div>
          <div class="kpi"><b>${Object.keys(S.leidas).length}</b><small>lecciones leídas</small></div><div class="kpi"><b>${S.examenes.filter(e => e.apto).length}</b><small>exámenes aptos</small></div>
          <div class="kpi"><b>${prep.suficiente ? Math.round(prep.pa * 100) + "%" : "—"}</b><small>probabilidad de APTO</small></div></div></div>
      <div class="grid grid-2" style="margin-top:16px;align-items:start">
        <div class="card"><h3>Datos del perfil</h3>
          <div class="field"><label for="pf-n">Nombre</label><input id="pf-n" value="${esc(u.nombre)}"></div>
          <span class="field-label" style="margin-top:4px">Color del avatar</span>
          <div class="color-pick" id="pf-c">${CU.COLORES.map(c => `<button style="--c:${c}" data-c="${c}" class="${c === u.color ? "on" : ""}" aria-label="Color"></button>`).join("")}</div>
          <button class="btn btn-primary" id="pf-save" style="margin-top:18px">Guardar cambios</button></div>
        <div class="card"><h3>Contraseña</h3><div id="pw-msg"></div>
          ${u.tipo === "local" ? `<div class="field"><label for="pw-a">Contraseña actual</label><input id="pw-a" type="password" autocomplete="current-password"></div>` : ""}
          <div class="field"><label for="pw-n">Nueva contraseña</label><input id="pw-n" type="password" autocomplete="new-password" placeholder="Mínimo 6 caracteres"></div>
          <button class="btn btn-ghost" id="pw-save">Cambiar contraseña</button></div>
      </div>
      <div class="card" style="margin-top:16px"><h3>Tus datos</h3><p class="muted">${u.tipo === "nube" ? "Tu progreso se guarda automáticamente en la nube. También puedes descargar una copia." : "Tu progreso se guarda en este navegador. Descarga una copia para pasarla a otro dispositivo o para no perderla."}</p>
        <div class="row"><button class="btn btn-ghost" id="exp">${icon("arrowRight", 16)} Exportar progreso</button><label class="btn btn-ghost" style="cursor:pointer">${icon("repeat", 16)} Importar progreso<input type="file" id="imp" accept="application/json,.json" hidden></label>
          <span class="spacer"></span><button class="btn btn-ghost" id="out">Cerrar sesión</button><button class="btn btn-bad" id="del">Borrar cuenta</button></div></div></div>`;
    let color = u.color;
    const vista = () => { $("#pf-av").innerHTML = avatarHTML(Object.assign({}, u, { color, nombre: $("#pf-n").value || u.nombre }), "lg"); };
    $$("#pf-c button").forEach(b => b.addEventListener("click", () => { color = b.dataset.c; $$("#pf-c button").forEach(x => x.classList.toggle("on", x === b)); vista(); }));
    $("#pf-n").addEventListener("input", vista);
    $("#pf-save").addEventListener("click", async () => { const n = $("#pf-n").value.trim(); if (n.length < 2) return toast(icon("alert", 18) + " El nombre es demasiado corto"); await CU.actualizarPerfil({ nombre: n, color }); pintarAvatar(); toast(icon("check", 18) + " Perfil guardado"); vistaPerfil(); });
    $("#pw-save").addEventListener("click", async () => { const m = $("#pw-msg"); try { await CU.cambiarPass($("#pw-a") ? $("#pw-a").value : "", $("#pw-n").value); m.innerHTML = `<div class="form-ok">Contraseña cambiada.</div>`; $("#pw-n").value = ""; if ($("#pw-a")) $("#pw-a").value = ""; } catch (e) { m.innerHTML = `<div class="form-err">${esc(e.message)}</div>`; } });
    $("#exp").addEventListener("click", () => {
      const blob = new Blob([JSON.stringify({ app: "carnetB", version: 2, exportado: new Date().toISOString(), datos: S }, null, 1)], { type: "application/json" });
      const a = document.createElement("a"); a.href = URL.createObjectURL(blob); a.download = `carnet-b-progreso-${hoyStr()}.json`; document.body.appendChild(a); a.click(); a.remove(); setTimeout(() => URL.revokeObjectURL(a.href), 2000);
    });
    $("#imp").addEventListener("change", e => {
      const file = e.target.files[0]; if (!file) return; const rd = new FileReader();
      rd.onload = () => { try { const j = JSON.parse(rd.result); if (j.app !== "carnetB" || !j.datos) throw new Error(); if (!confirm("Esto sustituirá tu progreso actual por el del archivo. ¿Continuar?")) return; S = Object.assign(VACIO(), j.datos); save(); pintarTopbar(true); toast(icon("check", 18) + " Progreso importado"); vistaPerfil(); } catch (er) { toast(icon("alert", 18) + " El archivo no es un progreso válido"); } };
      rd.readAsText(file);
    });
    $("#out").addEventListener("click", salirCuenta);
    $("#del").addEventListener("click", async () => { if (!confirm("¿Borrar tu cuenta y todo su progreso? No se puede deshacer.")) return; await CU.borrarCuenta(); toast("Cuenta borrada"); cambioDeCuenta("#/"); });
  }

  function vacioHTML(ic, t, d) { return `<div class="card empty"><div class="m-ic">${icon(ic, 30)}</div><h2>${t}</h2><p class="muted">${d}</p></div>`; }
  function vacio(ic, t, d) { app.innerHTML = `<div class="wrap narrow">${vacioHTML(ic, t, d)}</div>`; }
  function vistaNoEncontrado() { app.innerHTML = `<div class="wrap narrow">${vacioHTML("alert", "Calle cortada", "Esta página no existe.")}<p class="center"><a class="btn btn-primary" href="#/">Volver al inicio</a></p></div>`; }

  // ───────────────────────── Router ─────────────────────────
  document.addEventListener("keydown", e => { if (teclas && !e.ctrlKey && !e.metaKey && !e.altKey && !/input|textarea/i.test(e.target.tagName)) teclas(e); });
  document.addEventListener("pointerdown", e => { const b = e.target.closest(".btn"); if (!b) return; const r = b.getBoundingClientRect(); b.style.setProperty("--rx", (e.clientX - r.left) + "px"); b.style.setProperty("--ry", (e.clientY - r.top) + "px"); b.classList.add("rippling"); setTimeout(() => b.classList.remove("rippling"), 60); });
  function marcarActivo(r) { $$("[data-route]").forEach(a => a.classList.toggle("active", a.dataset.route === r)); }
  const RUTAS = {
    "": [vistaInicio, ""], aprender: [vistaRuta, "aprender"], tema: [p => vistaTema(p[1]), "aprender"], leccion: [p => vistaLeccion(p[1], p[2]), "aprender"],
    simuladores: [vistaSimuladores, "simuladores"], simulador: [p => vistaSimulador(p[1]), "simuladores"],
    practicar: [vistaPracticar, "practicar"], repaso: [vistaRepaso, "practicar"], tarjetas: [vistaTarjetas, "practicar"], senales: [vistaSenales, "practicar"],
    examenes: [vistaExamenes, "examenes"], oficial: [p => vistaOficial(p[1]), "examenes"], revision: [p => vistaRevision(p[1]), "examenes"],
    valencia: [vistaValencia, "valencia"], progreso: [vistaProgreso, "progreso"], cuenta: [p => vistaCuenta(p[1]), ""], perfil: [vistaPerfil, ""], esquemas: [p => vistaEsquemas(p[1]), "aprender"],
    // compatibilidad con enlaces antiguos
    temario: [vistaRuta, "aprender"], test: [vistaPracticar, "practicar"], fallos: [vistaRepaso, "practicar"], examen: [vistaExamenes, "examenes"], sesion: [vistaPracticar, "practicar"]
  };
  function router() {
    if (cleanup) { cleanup(); cleanup = null; }
    teclas = null;
    cerrarMenu(); document.body.classList.remove("en-examen");
    const parts = location.hash.replace(/^#\/?/, "").split("#")[0].split("/").filter(Boolean);
    const def = RUTAS[parts[0] || ""];
    const render = () => { if (def) { marcarActivo(def[1]); def[0](parts); } else { marcarActivo(""); vistaNoEncontrado(); } app.focus({ preventScroll: true }); };
    window.scrollTo(0, 0);
    if (document.startViewTransition && !matchMedia("(prefers-reduced-motion: reduce)").matches) { try { const vt = document.startViewTransition(render); [vt.ready, vt.finished, vt.updateCallbackDone].forEach(p => p && p.catch(() => {})); } catch (e) { render(); } } else render();
  }

  // Tema claro/oscuro
  const oscuro = () => document.documentElement.dataset.theme ? document.documentElement.dataset.theme === "dark" : matchMedia("(prefers-color-scheme: dark)").matches;
  function aplicarTema() { if (S.theme) document.documentElement.dataset.theme = S.theme; else delete document.documentElement.dataset.theme; $("#theme-toggle").innerHTML = icon(oscuro() ? "sun" : "moon", 18); }
  $("#theme-toggle").addEventListener("click", () => { S.theme = oscuro() ? "light" : "dark"; save(); const go = () => aplicarTema(); document.startViewTransition ? document.startViewTransition(go) : go(); });
  $$("[data-ic]").forEach(el => el.insertAdjacentHTML("afterbegin", icon(el.dataset.ic, +el.dataset.size || 18)));

  window.svgSenal = svgSenal;
  $("#avatar-btn").addEventListener("click", abrirMenu);
  async function arrancar() {
    app.innerHTML = '<div class="wrap narrow"><div class="empty"><div class="m-ic">' + icon("car", 30) + '</div><p class="muted">Cargando…</p></div></div>';
    if (CU) { try { await CU.iniciar(); } catch (e) { /* */ } }
    cargarEstado(); await sincronizar();
    aplicarTema(); hoy(); aplicarProtectores(); pintarTopbar();
    addEventListener("hashchange", router);
    if (CU && CU.recuperando) { CU.finRecuperar(); location.hash = "#/perfil"; setTimeout(() => toast(icon("key", 18) + " Escribe tu nueva contraseña en «Contraseña»"), 600); }
    router();
    setTimeout(() => { revisarMisiones(); revisarLogros(); }, 1500);
  }
  async function cambioDeCuenta(destino) {
    cargarEstado(); await sincronizar(); aplicarTema(); hoy(); pintarTopbar(true);
    if (location.hash === destino) router(); else location.hash = destino;
  }
  arrancar();
})();
