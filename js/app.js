/* Carnet B Comunitat Valenciana — app de estudio del teórico DGT */
(function () {
  "use strict";

  // ---------- Datos ----------
  const TEMAS_BASE = [
    { id: "examen", titulo: "El permiso B y el examen", icono: "🎓", color: "#2b59ff" },
    { id: "via", titulo: "La vía y el vehículo", icono: "🛣️", color: "#0ea5a4" },
    { id: "senales", titulo: "Señales", icono: "🚦", color: "#e5383b" },
    { id: "velocidad", titulo: "Velocidad y distancias", icono: "⏱️", color: "#f97316" },
    { id: "prioridad", titulo: "Prioridad de paso", icono: "🔀", color: "#8b5cf6" },
    { id: "maniobras", titulo: "Maniobras", icono: "↪️", color: "#0891b2" },
    { id: "alumbrado", titulo: "Alumbrado y autopistas", icono: "💡", color: "#eab308" },
    { id: "factores", titulo: "Alcohol, drogas y fatiga", icono: "🍷", color: "#db2777" },
    { id: "seguridad", titulo: "Seguridad y vehículo", icono: "🛡️", color: "#16a34a" },
    { id: "accidentes", titulo: "Accidentes y conducción eficiente", icono: "🚑", color: "#dc2626" }
  ];
  const temario = (window.TEMARIO || []).slice().sort((a, b) => (a.orden || 99) - (b.orden || 99));
  const temaInfo = id => temario.find(t => t.id === id) || TEMAS_BASE.find(t => t.id === id) || { id, titulo: id, icono: "📘", color: "#2b59ff" };

  // Normaliza preguntas: descarta las mal formadas y duplicadas
  const preguntas = [];
  const vistos = new Set();
  (window.PREGUNTAS || []).forEach(q => {
    if (!q || !q.id || vistos.has(q.id) || !Array.isArray(q.opciones) || q.opciones.length < 2) return;
    if (typeof q.correcta !== "number" || q.correcta < 0 || q.correcta >= q.opciones.length) return;
    vistos.add(q.id);
    preguntas.push(q);
  });
  const INFO = window.INFO_CV || null;

  // ---------- Estado persistente ----------
  const KEY = "carnetB-v1";
  const store = {
    get() {
      try { return JSON.parse(localStorage.getItem(KEY)) || {}; } catch (e) { return {}; }
    },
    set(s) { try { localStorage.setItem(KEY, JSON.stringify(s)); } catch (e) { /* sin almacenamiento */ } }
  };
  const SIMS = window.SIMULADORES || [];
  const RES = window.RESUMENES || {};
  const FC = (window.FLASHCARDS || []).filter(c => c && c.id && c.frente && c.dorso);
  const VACIO = () => ({ leidas: {}, resp: {}, fallos: {}, examenes: [], dias: [], ultima: null, theme: null, xp: 0, logros: {}, fc: {}, sims: {}, seguidos: 0, maxSeguidos: 0, fcVistas: 0 });
  let S = Object.assign(VACIO(), store.get());
  const save = () => store.set(S);

  // ---------- Niveles, XP y logros ----------
  const NIVELES = [
    [0, "🚶", "Peatón"], [100, "🛴", "Patinete"], [250, "🚲", "Ciclista"], [500, "🔰", "Aprendiz L"],
    [900, "🚗", "Conductor novel"], [1400, "🏎️", "Conductor experto"], [2000, "🏆", "Leyenda DGT"]
  ];
  const nivelDe = xp => { let i = 0; NIVELES.forEach((n, k) => { if (xp >= n[0]) i = k; }); return i; };
  let lastPointer = { x: innerWidth / 2, y: 120 };
  addEventListener("pointerdown", e => { lastPointer = { x: e.clientX, y: e.clientY }; }, true);
  function pintarXP(bump) {
    const i = nivelDe(S.xp), n = NIVELES[i], sig = NIVELES[i + 1];
    const pct = sig ? (S.xp - n[0]) / (sig[0] - n[0]) * 100 : 100;
    const chip = document.getElementById("xp-chip");
    if (!chip) return;
    chip.innerHTML = `<span class="lv">${n[1]}</span><span class="xptxt">${S.xp} XP</span><span class="xpbar"><i style="width:${pct}%"></i></span>`;
    chip.title = `Nivel: ${n[2]}${sig ? ` · ${sig[0] - S.xp} XP para ${sig[2]}` : ""}`;
    if (bump) { chip.classList.remove("bump"); void chip.offsetWidth; chip.classList.add("bump"); }
  }
  function ganarXP(n) {
    if (!n) return;
    const antes = nivelDe(S.xp); S.xp += n; save(); pintarXP(true);
    const f = document.createElement("div"); f.className = "xp-float"; f.textContent = "+" + n + " XP";
    f.style.left = (lastPointer.x - 20) + "px"; f.style.top = (lastPointer.y - 30) + "px";
    document.body.appendChild(f); setTimeout(() => f.remove(), 1200);
    const ahora = nivelDe(S.xp);
    if (ahora > antes) setTimeout(() => modal(`<div class="big">${NIVELES[ahora][1]}</div><h2>¡Subes de nivel!</h2><p>Ahora eres <b>${NIVELES[ahora][2]}</b>.</p><p class="muted">${NIVELES[ahora + 1] ? "Siguiente: " + NIVELES[ahora + 1][1] + " " + NIVELES[ahora + 1][2] + " a los " + NIVELES[ahora + 1][0] + " XP" : "¡Has llegado al nivel máximo!"}</p>`, true), 500);
    comprobarLogros();
  }
  function modal(html, fiesta) {
    const bg = document.createElement("div"); bg.className = "modal-bg";
    bg.innerHTML = `<div class="modal" role="dialog">${html}<button class="btn btn-primary" style="margin-top:14px">¡Genial!</button></div>`;
    const close = () => bg.remove();
    bg.addEventListener("click", e => { if (e.target === bg || e.target.closest("button")) close(); });
    document.body.appendChild(bg); if (fiesta) confetti();
  }
  const LOGROS = [
    { id: "leccion1", e: "📖", t: "Primera lección", d: "Lee tu primera lección", ok: () => Object.keys(S.leidas).length >= 1 },
    { id: "tema", e: "🧩", t: "Tema dominado", d: "Completa un tema entero", ok: () => temario.some(t => pctTema(t) === 100) },
    { id: "temario", e: "🎓", t: "Temario completo", d: "Lee todas las lecciones", ok: () => totalLecciones() > 0 && Object.keys(S.leidas).length >= totalLecciones() },
    { id: "racha10", e: "🔥", t: "En racha", d: "10 aciertos seguidos", ok: () => S.maxSeguidos >= 10 },
    { id: "racha25", e: "⚡", t: "Imparable", d: "25 aciertos seguidos", ok: () => S.maxSeguidos >= 25 },
    { id: "cien", e: "💯", t: "Cien preguntas", d: "Responde 100 preguntas", ok: () => Object.values(S.resp).reduce((n, r) => n + r.ok + r.ko, 0) >= 100 },
    { id: "examen1", e: "📝", t: "Primer simulacro", d: "Haz un simulacro completo", ok: () => S.examenes.length >= 1 },
    { id: "apto", e: "🟢", t: "¡APTO!", d: "Aprueba un simulacro", ok: () => S.examenes.some(e => e.apto) },
    { id: "perfecto", e: "🏅", t: "Examen perfecto", d: "Simulacro con 0 fallos", ok: () => S.examenes.some(e => e.fallos === 0) },
    { id: "listo", e: "🚀", t: "Listo para la DGT", d: "5 simulacros APTOS seguidos", ok: () => { let n = 0; for (let k = S.examenes.length - 1; k >= 0 && S.examenes[k].apto; k--) n++; return n >= 5; } },
    { id: "dias3", e: "📅", t: "Constancia", d: "Estudia 3 días seguidos", ok: () => racha() >= 3 },
    { id: "dias7", e: "🗓️", t: "Semana completa", d: "Estudia 7 días seguidos", ok: () => racha() >= 7 },
    { id: "sims", e: "🎮", t: "Piloto de pruebas", d: "Prueba todos los simuladores", ok: () => SIMS.length > 0 && SIMS.every(s => S.sims[s.id]) },
    { id: "tarjetas", e: "🃏", t: "Memoria de elefante", d: "Repasa 50 tarjetas", ok: () => S.fcVistas >= 50 },
    { id: "buho", e: "🦉", t: "Búho nocturno", d: "Estudia pasadas las 23:00", ok: () => new Date().getHours() >= 23 }
  ];
  function comprobarLogros() {
    let nuevo = null;
    LOGROS.forEach(l => { if (!S.logros[l.id]) { try { if (l.ok()) { S.logros[l.id] = Date.now(); nuevo = l; } } catch (e) { /* ignore */ } } });
    if (nuevo) { save(); setTimeout(() => toast(`${nuevo.e} Logro desbloqueado: ${nuevo.t}`), 700); }
  }

  function marcarDia() {
    const hoy = new Date().toISOString().slice(0, 10);
    if (!S.dias.includes(hoy)) { S.dias.push(hoy); S.dias = S.dias.slice(-120); save(); }
  }
  function racha() {
    let n = 0; const d = new Date();
    for (;;) {
      const k = d.toISOString().slice(0, 10);
      if (S.dias.includes(k)) { n++; d.setDate(d.getDate() - 1); } else break;
    }
    return n;
  }
  function registrar(q, ok) {
    const r = S.resp[q.id] || { ok: 0, ko: 0 };
    ok ? r.ok++ : r.ko++;
    r.last = ok; S.resp[q.id] = r;
    if (!ok) S.fallos[q.id] = Date.now(); else delete S.fallos[q.id];
    S.seguidos = ok ? S.seguidos + 1 : 0; S.maxSeguidos = Math.max(S.maxSeguidos, S.seguidos);
    marcarDia(); save(); badgeFallos();
    ganarXP(ok ? 10 : 2);
    if (ok && S.seguidos > 0 && S.seguidos % 5 === 0) toast(`🔥 ¡${S.seguidos} aciertos seguidos!`);
  }

  // ---------- Utilidades ----------
  const $ = (s, el = document) => el.querySelector(s);
  const $$ = (s, el = document) => Array.from(el.querySelectorAll(s));
  const esc = s => String(s == null ? "" : s).replace(/[&<>"']/g, c => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));
  const fmt = s => esc(s).replace(/\*\*(.+?)\*\*/g, "<strong>$1</strong>");
  const shuffle = a => { a = a.slice(); for (let i = a.length - 1; i > 0; i--) { const j = Math.floor(Math.random() * (i + 1)); [a[i], a[j]] = [a[j], a[i]]; } return a; };
  const app = $("#app");
  const LETRAS = ["A", "B", "C", "D"];
  let cleanup = null;

  function toast(msg) {
    const t = $("#toast"); t.textContent = msg; t.classList.add("show");
    clearTimeout(toast._t); toast._t = setTimeout(() => t.classList.remove("show"), 2600);
  }
  function badgeFallos() {
    const n = Object.keys(S.fallos).filter(id => preguntas.some(q => q.id === id)).length;
    const b = $("#badge-fallos"); b.hidden = !n; b.textContent = n;
  }

  // ---------- Señales SVG ----------
  function svgSenal(forma, simbolo, extraClass) {
    const sim = esc(simbolo || "");
    const len = [...(simbolo || "")].length;
    const fs = len <= 1 ? 40 : len === 2 ? 34 : len === 3 ? 26 : 20;
    const txt = (y, color, size) => sim ? `<text x="50" y="${y}" text-anchor="middle" dominant-baseline="central" font-family="Arial, sans-serif" font-weight="800" font-size="${size || fs}" fill="${color}">${sim}</text>` : "";
    let body = "";
    switch (forma) {
      case "triangulo":
        body = `<path d="M50 6 L95 88 Q96 92 92 92 L8 92 Q4 92 5 88 Z" fill="#fff" stroke="#d62828" stroke-width="9" stroke-linejoin="round"/>${txt(64, "#111", fs * .8)}`; break;
      case "panel-amarillo":
        body = `<path d="M50 6 L95 88 Q96 92 92 92 L8 92 Q4 92 5 88 Z" fill="#ffd000" stroke="#d62828" stroke-width="9" stroke-linejoin="round"/>${txt(64, "#111", fs * .8)}`; break;
      case "triangulo-invertido":
        body = `<path d="M50 94 L95 12 Q96 8 92 8 L8 8 Q4 8 5 12 Z" fill="#fff" stroke="#d62828" stroke-width="10" stroke-linejoin="round"/>${txt(38, "#111", fs * .7)}`; break;
      case "octogono":
        body = `<polygon points="30,3 70,3 97,30 97,70 70,97 30,97 3,70 3,30" fill="#d62828" stroke="#fff" stroke-width="4"/><text x="50" y="52" text-anchor="middle" dominant-baseline="central" font-family="Arial, sans-serif" font-weight="800" font-size="27" fill="#fff">${sim && sim !== "STOP" ? sim : "STOP"}</text>`; break;
      case "circulo-rojo":
        body = `<circle cx="50" cy="50" r="44" fill="#fff" stroke="#d62828" stroke-width="11"/>${txt(52, "#111")}`; break;
      case "circulo-rojo-lleno":
        body = `<circle cx="50" cy="50" r="46" fill="#d62828"/>${sim && sim !== "⛔" ? txt(52, "#fff") : `<rect x="20" y="41" width="60" height="18" rx="2" fill="#fff"/>`}`; break;
      case "circulo-azul":
        body = `<circle cx="50" cy="50" r="46" fill="#1d5fd1" stroke="#fff" stroke-width="3"/>${txt(52, "#fff")}`; break;
      case "cuadrado-azul":
        body = `<rect x="5" y="5" width="90" height="90" rx="10" fill="#1d5fd1" stroke="#fff" stroke-width="3"/>${txt(52, "#fff")}`; break;
      case "rombo":
        body = `<rect x="18" y="18" width="64" height="64" transform="rotate(45 50 50)" fill="#fff" stroke="#222" stroke-width="2"/><rect x="29" y="29" width="42" height="42" transform="rotate(45 50 50)" fill="#ffc400"/>${txt(52, "#111", fs * .6)}`; break;
      case "rectangulo-verde":
        body = `<rect x="3" y="20" width="94" height="60" rx="8" fill="#0b8a3e" stroke="#fff" stroke-width="3"/>${txt(51, "#fff", fs * .8)}`; break;
      case "rectangulo-blanco":
        body = `<rect x="3" y="20" width="94" height="60" rx="8" fill="#fff" stroke="#222" stroke-width="3"/>${txt(51, "#111", fs * .8)}`; break;
      case "fin":
        body = `<circle cx="50" cy="50" r="45" fill="#fff" stroke="#333" stroke-width="2"/>${txt(52, "#999")}<g stroke="#555" stroke-width="3"><line x1="22" y1="74" x2="74" y2="22"/><line x1="27" y1="79" x2="79" y2="27"/><line x1="17" y1="69" x2="69" y2="17"/></g>`; break;
      default:
        body = `<rect x="5" y="5" width="90" height="90" rx="12" fill="#eef1f8" stroke="#8a93ad" stroke-width="3"/>${txt(52, "#333")}`;
    }
    return `<svg viewBox="0 0 100 100" class="${extraClass || ""}" role="img" aria-label="Señal">${body}</svg>`;
  }
  const categoriaSenal = f => ({
    "triangulo": "Peligro", "panel-amarillo": "Obras", "triangulo-invertido": "Prioridad", "octogono": "Prioridad", "rombo": "Prioridad",
    "circulo-rojo": "Prohibición", "circulo-rojo-lleno": "Prohibición", "fin": "Fin de prohibición", "circulo-azul": "Obligación",
    "cuadrado-azul": "Indicación", "rectangulo-verde": "Indicación", "rectangulo-blanco": "Indicación"
  }[f] || "Otras");

  // ---------- Confeti ----------
  function confetti() {
    const c = $("#confetti"), ctx = c.getContext("2d");
    c.width = innerWidth; c.height = innerHeight;
    const cols = ["#2b59ff", "#ff8a00", "#12a150", "#e5383b", "#a855f7", "#ffd23f"];
    const ps = Array.from({ length: 180 }, () => ({
      x: c.width / 2 + (Math.random() - .5) * 200, y: c.height * .35, vx: (Math.random() - .5) * 16, vy: -Math.random() * 16 - 4,
      s: Math.random() * 8 + 4, r: Math.random() * 6, vr: (Math.random() - .5) * .3, c: cols[Math.floor(Math.random() * cols.length)]
    }));
    let f = 0;
    (function tick() {
      ctx.clearRect(0, 0, c.width, c.height);
      ps.forEach(p => { p.vy += .35; p.vx *= .99; p.x += p.vx; p.y += p.vy; p.r += p.vr;
        ctx.save(); ctx.translate(p.x, p.y); ctx.rotate(p.r); ctx.fillStyle = p.c; ctx.fillRect(-p.s / 2, -p.s / 4, p.s, p.s / 2); ctx.restore(); });
      if (++f < 200) requestAnimationFrame(tick); else ctx.clearRect(0, 0, c.width, c.height);
    })();
  }

  // ---------- Contadores animados / reveal ----------
  function animarNumeros(root) {
    $$("[data-count]", root).forEach(el => {
      const fin = +el.dataset.count, suf = el.dataset.suf || ""; const t0 = performance.now();
      (function step(t) { const k = Math.min(1, (t - t0) / 1100); el.textContent = Math.round(fin * (1 - Math.pow(1 - k, 3))) + suf; if (k < 1) requestAnimationFrame(step); })(t0);
    });
  }
  function reveal(root) {
    const io = new IntersectionObserver(es => es.forEach(e => { if (e.isIntersecting) { e.target.classList.add("in"); io.unobserve(e.target); } }), { threshold: .12 });
    $$(".reveal", root).forEach(el => io.observe(el));
  }
  function barras(root) { requestAnimationFrame(() => setTimeout(() => $$(".progress > i[data-w]", root).forEach(i => i.style.width = i.dataset.w + "%"), 60)); }

  // ---------- Cálculos de progreso ----------
  const totalLecciones = () => temario.reduce((n, t) => n + (t.lecciones || []).length, 0);
  const leidasTema = t => (t.lecciones || []).filter(l => S.leidas[l.id]).length;
  const pctTema = t => t.lecciones && t.lecciones.length ? Math.round(leidasTema(t) / t.lecciones.length * 100) : 0;
  function aciertoTema(id) {
    let ok = 0, ko = 0;
    preguntas.filter(q => q.tema === id).forEach(q => { const r = S.resp[q.id]; if (r) { ok += r.ok; ko += r.ko; } });
    return ok + ko ? Math.round(ok / (ok + ko) * 100) : null;
  }
  function todasSenales() {
    const m = new Map();
    temario.forEach(t => (t.lecciones || []).forEach(l => (l.contenido || []).forEach(b => {
      if (b && b.tipo === "senal" && b.nombre && !m.has(b.nombre)) m.set(b.nombre, Object.assign({ tema: t.id }, b));
    })));
    return [...m.values()];
  }

  // ---------- Vistas ----------
  function vistaInicio() {
    const nL = totalLecciones(), nQ = preguntas.length, nS = todasSenales().length;
    const leidas = Object.keys(S.leidas).length;
    const ult = S.ultima && temario.find(t => t.id === S.ultima.tema);
    const ultL = ult && ult.lecciones.find(l => l.id === S.ultima.leccion);
    const qd = preguntas.length ? preguntas[Math.floor(Date.now() / 864e5) % preguntas.length] : null;
    app.innerHTML = `
      <section class="hero">
        <div class="hero-inner">
          <div>
            <span class="pill"><span class="dot"></span> Temario DGT permiso B · actualizado 2026</span>
            <h1>Apruébalo a la <span class="grad">primera</span>.<br>Sin agobios.</h1>
            <p class="lead">Teoría explicada fácil, trucos para recordar, tests por tema y simulacros como el examen real de la DGT. Pensado para sacarte el carnet en la Comunitat Valenciana.</p>
            <div class="row">
              ${ultL ? `<a class="btn btn-primary" href="#/leccion/${ult.id}/${ultL.id}">▶ Continuar: ${esc(ultL.titulo)}</a>` : `<a class="btn btn-primary" href="#/temario">📚 Empezar el temario</a>`}
              <a class="btn btn-ghost" href="#/examen">⏱️ Hacer un simulacro</a>
            </div>
          </div>
          <div class="hero-signs" aria-hidden="true">
            <div class="float">${svgSenal("octogono", "STOP").replace("<svg", '<svg width="120" height="120"')}</div>
            <div class="float">${svgSenal("circulo-rojo", "50").replace("<svg", '<svg width="130" height="130"')}</div>
            <div class="float">${svgSenal("triangulo-invertido", "").replace("<svg", '<svg width="120" height="120"')}</div>
            <div class="float">${svgSenal("triangulo", "🚸").replace("<svg", '<svg width="110" height="110"')}</div>
            <div class="float">${svgSenal("circulo-azul", "↱").replace("<svg", '<svg width="96" height="96"')}</div>
          </div>
        </div>
        <div class="road" aria-hidden="true"><div class="lane"></div><span class="car">🚗</span><span class="car c2">🚙</span><span class="car c3">🚕</span></div>
      </section>
      <div class="wrap">
        <div class="stats">
          <div class="stat"><b data-count="${temario.length || 10}">0</b><span>temas</span></div>
          <div class="stat"><b data-count="${nL}">0</b><span>lecciones</span></div>
          <div class="stat"><b data-count="${nQ}">0</b><span>preguntas de test</span></div>
          <div class="stat"><b data-count="${racha()}">0</b><span>días de racha 🔥</span></div>
        </div>

        <div class="mascota reveal"><span class="m-ico" id="m-ico" title="¡Tócame para otro consejo!">🚧</span>
          <div class="bubble" id="bubble"></div></div>

        <h2 style="margin-top:48px" class="reveal">¿Qué quieres hacer hoy?</h2>
        <div class="grid grid-3">
          <a class="card feature reveal" href="#/temario"><div class="ico">📚</div><h3>Estudiar la teoría</h3><p>${nL} lecciones cortas con resumen de 30 segundos, ejemplos y trucos. Llevas ${leidas} leídas.</p></a>
          <a class="card feature reveal" href="#/simuladores"><div class="ico">🎮</div><h3>Simuladores animados</h3><p>${SIMS.length} simuladores: frenada, glorietas, semáforos, luces, alcohol… Aprende jugando.</p></a>
          <a class="card feature reveal" href="#/tarjetas"><div class="ico">🃏</div><h3>Tarjetas de memoria</h3><p>${FC.length} tarjetas con las cifras y reglas que más caen. Gíralas y repite las difíciles.</p></a>
          <a class="card feature reveal" href="#/test"><div class="ico">✅</div><h3>Test por temas</h3><p>Practica con corrección al momento y la explicación de cada respuesta.</p></a>
          <a class="card feature reveal" href="#/examen"><div class="ico">⏱️</div><h3>Simulacro de examen</h3><p>30 preguntas, 30 minutos y máximo 3 fallos. Igual que en la DGT.</p></a>
          <a class="card feature reveal" href="#/senales"><div class="ico">🚦</div><h3>Señales</h3><p>${nS} señales en tarjetas que se giran. Adivina antes de mirar.</p></a>
          <a class="card feature reveal" href="#/fallos"><div class="ico">🔁</div><h3>Repasar fallos</h3><p>Las preguntas que fallas se guardan aquí hasta que las aciertes.</p></a>
          <a class="card feature reveal" href="#/valencia"><div class="ico">🍊</div><h3>Guía Comunitat Valenciana</h3><p>Jefaturas de Valencia, Alicante y Castellón, pasos, tasas y enlaces.</p></a>
        </div>

        ${qd ? `<h2 style="margin-top:48px" class="reveal">Pregunta del día</h2><div id="qdia" class="reveal"></div>` : ""}

        <h2 style="margin-top:48px" class="reveal">Así es el examen teórico</h2>
        <div class="grid grid-4">
          <div class="card reveal center"><div style="font-size:2rem">📝</div><h3>30 preguntas</h3><p class="muted">Tipo test, 3 opciones y solo una correcta.</p></div>
          <div class="card reveal center"><div style="font-size:2rem">⏳</div><h3>30 minutos</h3><p class="muted">Tiempo de sobra si llevas el temario bien.</p></div>
          <div class="card reveal center"><div style="font-size:2rem">❌</div><h3>Máx. 3 fallos</h3><p class="muted">Con 27 aciertos o más: APTO.</p></div>
          <div class="card reveal center"><div style="font-size:2rem">📱</div><h3>Nota en miDGT</h3><p class="muted">Consulta el resultado en la app o web de la DGT.</p></div>
        </div>

        <h2 style="margin-top:48px" class="reveal">Método recomendado</h2>
        <div class="card reveal"><div class="steps">
          <div class="step"><div><h4>Lee un tema al día</h4><p>Lecciones de 5-10 minutos. Fíjate en las cajas 🔑 clave y ⚠️ trampa.</p></div></div>
          <div class="step"><div><h4>Haz el test de ese tema</h4><p>Lee la explicación de cada fallo: ahí está el aprendizaje.</p></div></div>
          <div class="step"><div><h4>Repasa tus fallos al día siguiente</h4><p>Repetir lo que fallas es lo que más rápido sube la nota.</p></div></div>
          <div class="step"><div><h4>Simulacros cuando hayas visto todo</h4><p>Cuando apruebes 5 seguidos con 0-2 fallos, estás listo para pedir fecha.</p></div></div>
        </div></div>
      </div>`;
    animarNumeros(app); reveal(app);
    if (qd) { const box = $("#qdia"); renderPreguntaSuelta(box, qd); }
    // Mascota con trucos del temario
    const trucos = [];
    temario.forEach(t => (t.lecciones || []).forEach(l => (l.contenido || []).forEach(b => { if (b && (b.tipo === "truco" || b.tipo === "clave") && b.texto && b.texto.length < 260) trucos.push({ t, l, texto: b.texto }); })));
    const bub = $("#bubble"), mi = $("#m-ico");
    const NOMBRE = "Conito";
    const decir = () => {
      if (!trucos.length) { bub.innerHTML = `¡Hola! Soy <b>${NOMBRE}</b> 🚧. Empieza por el temario y te iré dando trucos.`; return; }
      const x = trucos[Math.floor(Math.random() * trucos.length)];
      bub.classList.add("fade");
      setTimeout(() => { bub.innerHTML = `<b>${NOMBRE} dice:</b> ${fmt(x.texto)} <a href="#/leccion/${x.t.id}/${x.l.id}" style="white-space:nowrap">→ ${esc(x.l.titulo)}</a>`; bub.classList.remove("fade"); }, 250);
    };
    bub.innerHTML = `¡Hola! Soy <b>${NOMBRE}</b> 🚧, tu copiloto. Cada pocos segundos te cuento un truco del examen. ¡Tócame para otro!`;
    mi.addEventListener("click", () => { decir(); mi.animate([{ transform: "rotate(0)" }, { transform: "rotate(-20deg) scale(1.2)" }, { transform: "rotate(15deg)" }, { transform: "rotate(0)" }], { duration: 500 }); });
    const iv = setInterval(decir, 9000);
    cleanup = () => clearInterval(iv);
  }

  // Pregunta suelta con feedback inmediato (pregunta del día / mini quiz)
  function renderPreguntaSuelta(box, q, opts = {}) {
    const ti = temaInfo(q.tema);
    box.innerHTML = `<div class="card q-card" style="--c:${ti.color}">
      ${opts.mini ? `<h4>Comprueba lo aprendido</h4>` : `<div class="q-head"><span class="q-tema">${ti.icono} ${esc(ti.titulo)}</span></div>`}
      ${q.senal ? `<div class="q-sign">${svgSenal(q.senal.forma, q.senal.simbolo)}</div>` : ""}
      <div class="q-text">${fmt(q.pregunta)}</div>
      <div class="options">${q.opciones.map((o, i) => `<button class="opt" data-i="${i}"><span class="letter">${LETRAS[i]}</span><span>${fmt(o)}</span></button>`).join("")}</div>
      <div class="exp-slot"></div></div>`;
    $$(".opt", box).forEach(b => b.addEventListener("click", () => {
      const i = +b.dataset.i, ok = i === q.correcta;
      $$(".opt", box).forEach((x, j) => { x.disabled = true; if (j === q.correcta) x.classList.add("correct"); });
      if (!ok) b.classList.add("wrong");
      $(".exp-slot", box).innerHTML = `<div class="explain ${ok ? "" : "bad"}"><b>${ok ? "✅ ¡Correcto!" : "❌ No es esa"}</b>${fmt(q.explicacion || "")}</div>`;
      if (q.id && !opts.mini) registrar(q, ok); else if (ok) ganarXP(5);
      if (ok) { const card = box.querySelector(".card"); card.animate([{ transform: "scale(1)" }, { transform: "scale(1.02)" }, { transform: "scale(1)" }], { duration: 400 }); }
    }));
  }

  function vistaTemario() {
    if (!temario.length) { app.innerHTML = cargandoHTML("El temario se está generando"); return; }
    app.innerHTML = `<div class="wrap page-enter">
      <div class="page-head"><h1>Temario</h1><p>${temario.length} temas y ${totalLecciones()} lecciones. Ve en orden la primera vez; después usa los tests para saber qué repasar.</p></div>
      <div class="grid grid-3">${temario.map((t, i) => {
        const p = pctTema(t), ac = aciertoTema(t.id);
        return `<a class="card topic reveal" href="#/tema/${t.id}" style="--c:${t.color}">
          <span class="t-num">${i + 1}</span><div class="t-ico">${t.icono}</div>
          <h3>${esc(t.titulo)}</h3><p>${fmt(t.resumen || "")}</p>
          <div class="progress"><i data-w="${p}"></i></div>
          <div class="t-meta"><span>${leidasTema(t)}/${t.lecciones.length} lecciones</span><span>${ac == null ? "Sin test" : "Test: " + ac + "%"}</span></div></a>`;
      }).join("")}</div></div>`;
    reveal(app); barras(app);
  }

  function vistaTema(id) {
    const t = temario.find(x => x.id === id);
    if (!t) return vistaNoEncontrado();
    const nQ = preguntas.filter(q => q.tema === id).length;
    app.innerHTML = `<div class="wrap narrow page-enter" style="--c:${t.color}">
      <div class="crumbs"><a href="#/temario">Temario</a> › ${esc(t.titulo)}</div>
      <div class="page-head row"><div class="topic" style="--c:${t.color};padding:0"><div class="t-ico">${t.icono}</div></div>
        <div style="flex:1;min-width:240px"><h1 style="margin:0">${esc(t.titulo)}</h1><p style="margin:6px 0 0">${fmt(t.resumen || "")}</p></div></div>
      <div class="progress" style="margin-bottom:22px"><i data-w="${pctTema(t)}"></i></div>
      <div class="lesson-list">${t.lecciones.map((l, i) => `
        <a class="lesson-item reveal ${S.leidas[l.id] ? "done" : ""}" href="#/leccion/${t.id}/${l.id}">
          <span class="num">${S.leidas[l.id] ? "✓" : i + 1}</span><span class="lt">${esc(l.titulo)}</span><span class="lm">${l.minutos || 5} min</span></a>`).join("")}</div>
      <div class="card row" style="margin-top:26px">
        <div style="flex:1;min-width:200px"><h3 style="margin:0">¿Lo tienes?</h3><p class="muted" style="margin:0">${nQ} preguntas de este tema disponibles.</p></div>
        <button class="btn btn-primary" id="test-tema" ${nQ ? "" : "disabled"}>Hacer test del tema</button></div></div>`;
    reveal(app); barras(app);
    $("#test-tema").addEventListener("click", () => iniciarPractica(shuffle(preguntas.filter(q => q.tema === id)).slice(0, 15), "Test: " + t.titulo));
  }

  function renderBloque(b) {
    if (!b || !b.tipo) return "";
    switch (b.tipo) {
      case "p": return `<p>${fmt(b.texto)}</p>`;
      case "lista": return `<ul>${(b.items || []).map(i => `<li>${fmt(i)}</li>`).join("")}</ul>`;
      case "clave": return `<div class="box box-clave"><b class="tag">Clave de examen</b>${fmt(b.texto)}</div>`;
      case "truco": return `<div class="box box-truco"><b class="tag">Truco para recordar</b>${fmt(b.texto)}</div>`;
      case "aviso": return `<div class="box box-aviso"><b class="tag">Ojo, trampa típica</b>${fmt(b.texto)}</div>`;
      case "tabla": return `<div class="table-wrap"><table><thead><tr>${(b.cabecera || []).map(h => `<th>${fmt(h)}</th>`).join("")}</tr></thead><tbody>${(b.filas || []).map(r => `<tr>${r.map(c => `<td>${fmt(c)}</td>`).join("")}</tr>`).join("")}</tbody></table></div>`;
      case "senal": return `<div class="sign-block">${svgSenal(b.forma, b.simbolo)}<div><h4>${fmt(b.nombre || "")}</h4><p>${fmt(b.descripcion || "")}</p></div></div>`;
      case "quiz": return `<div class="mini-quiz-slot" data-q='${esc(JSON.stringify(b))}'></div>`;
      default: return b.texto ? `<p>${fmt(b.texto)}</p>` : "";
    }
  }

  function vistaLeccion(tid, lid) {
    const t = temario.find(x => x.id === tid);
    const idx = t ? t.lecciones.findIndex(l => l.id === lid) : -1;
    if (idx < 0) return vistaNoEncontrado();
    const l = t.lecciones[idx], prev = t.lecciones[idx - 1], next = t.lecciones[idx + 1];
    S.ultima = { tema: tid, leccion: lid }; save();
    const res = RES[l.id];
    const simsLeccion = SIMS.filter(s => (s.lecciones || []).includes(l.id));
    app.innerHTML = `<div class="reading-bar" id="rbar"></div>
      <div class="wrap narrow page-enter" style="--c:${t.color}">
        <div class="crumbs"><a href="#/temario">Temario</a> › <a href="#/tema/${t.id}">${esc(t.titulo)}</a> › Lección ${idx + 1}</div>
        <h1>${t.icono} ${esc(l.titulo)}</h1>
        <p class="muted">⏱ ${l.minutos || 5} min de lectura · Lección ${idx + 1} de ${t.lecciones.length}</p>
        <div class="lesson-tools">
          ${"speechSynthesis" in window ? `<button class="btn btn-ghost btn-sm" id="leer">🔊 Escuchar la lección</button>` : ""}
          ${simsLeccion.length ? `<a class="btn btn-ghost btn-sm" href="#sim-${simsLeccion[0].id}" id="ir-sim">🎮 Ir al simulador</a>` : ""}
        </div>
        ${res ? `<section class="resumen" data-emoji="${esc(res.emoji || t.icono)}"><div class="rs-tag">⚡ En 30 segundos</div>
          <div class="rs-idea">${res.emoji || ""} ${fmt(res.idea || "")}</div>
          <ol>${(res.puntos || []).map((p, k) => `<li><b class="n">${k + 1}</b><span>${fmt(p)}</span></li>`).join("")}</ol>
          ${res.recuerda ? `<p class="rs-rec">🧠 ${fmt(res.recuerda)}</p>` : ""}</section>` : ""}
        <article class="lesson">${(l.contenido || []).map(renderBloque).join("")}</article>
        ${simsLeccion.map(s => `<section class="sim-embed" id="sim-${s.id}"><h3>${esc(s.titulo)}</h3><p class="muted">${esc(s.descripcion)}</p><div data-sim="${s.id}"></div></section>`).join("")}
        <div class="lesson-nav">
          ${prev ? `<a class="btn btn-ghost" href="#/leccion/${t.id}/${prev.id}">← ${esc(prev.titulo)}</a>` : `<a class="btn btn-ghost" href="#/tema/${t.id}">← Volver al tema</a>`}
          <button class="btn ${S.leidas[l.id] ? "btn-ghost" : "btn-ok"}" id="marcar">${S.leidas[l.id] ? "✓ Leída" : "Marcar como leída"}</button>
          ${next ? `<a class="btn btn-primary" id="sig" href="#/leccion/${t.id}/${next.id}">${esc(next.titulo)} →</a>` : `<a class="btn btn-primary" id="sig" href="#/tema/${t.id}">Terminar tema 🎉</a>`}
        </div></div>`;
    $$(".mini-quiz-slot", app).forEach(slot => {
      try {
        const q = JSON.parse(slot.dataset.q);
        const div = document.createElement("div"); div.className = "mini-quiz-wrap"; slot.replaceWith(div);
        renderPreguntaSuelta(div, Object.assign({ tema: tid }, q), { mini: true });
      } catch (e) { slot.remove(); }
    });
    const marcar = () => { if (!S.leidas[l.id]) { S.leidas[l.id] = Date.now(); marcarDia(); save(); ganarXP(25); } };
    $("#marcar").addEventListener("click", e => { const b = e.currentTarget; marcar(); b.textContent = "✓ Leída"; b.className = "btn btn-ghost"; toast("¡Lección completada! 💪"); if (pctTema(t) === 100) confetti(); });
    $("#sig").addEventListener("click", marcar);

    // Bloques que aparecen al hacer scroll
    const io = new IntersectionObserver(es => es.forEach(e => { if (e.isIntersecting) { e.target.classList.add("in"); io.unobserve(e.target); } }), { threshold: .08, rootMargin: "0px 0px -40px 0px" });
    $$(".lesson > *", app).forEach(b => { b.classList.add("rv"); io.observe(b); });

    // Simuladores incrustados
    const limpiezas = [];
    $$("[data-sim]", app).forEach(box => { const s = SIMS.find(x => x.id === box.dataset.sim); if (s) limpiezas.push(montarSim(s, box)); });
    const irSim = $("#ir-sim"); if (irSim) irSim.addEventListener("click", e => { e.preventDefault(); $("#sim-" + simsLeccion[0].id).scrollIntoView({ behavior: "smooth" }); });

    // Lectura en voz alta
    const leer = $("#leer");
    const pararVoz = () => { try { speechSynthesis.cancel(); } catch (e) { /* */ } $$(".speaking", app).forEach(x => x.classList.remove("speaking")); if (leer) leer.textContent = "🔊 Escuchar la lección"; };
    if (leer) leer.addEventListener("click", () => {
      if (speechSynthesis.speaking) return pararVoz();
      const partes = [$(".resumen", app), ...$$(".lesson > *", app)].filter(x => x && !x.querySelector(".options"));
      const voz = speechSynthesis.getVoices().find(v => /^es(-|_)ES/i.test(v.lang)) || speechSynthesis.getVoices().find(v => /^es/i.test(v.lang));
      leer.textContent = "⏹ Parar lectura";
      partes.forEach((p, k) => {
        const u = new SpeechSynthesisUtterance(p.innerText.replace(/[\u{1F300}-\u{1FAFF}☀-➿]/gu, ""));
        u.lang = "es-ES"; if (voz) u.voice = voz; u.rate = 1;
        u.onstart = () => { $$(".speaking", app).forEach(x => x.classList.remove("speaking")); p.classList.add("in", "speaking"); p.scrollIntoView({ behavior: "smooth", block: "center" }); };
        if (k === partes.length - 1) u.onend = pararVoz;
        speechSynthesis.speak(u);
      });
    });

    const bar = $("#rbar");
    const onScroll = () => { const h = document.documentElement; const p = h.scrollTop / Math.max(1, h.scrollHeight - h.clientHeight); bar.style.width = (p * 100) + "%"; };
    addEventListener("scroll", onScroll, { passive: true });
    cleanup = () => { removeEventListener("scroll", onScroll); io.disconnect(); pararVoz(); limpiezas.forEach(f => f && f()); };
  }

  function montarSim(s, box) {
    let fin = null;
    try { fin = s.montar(box); } catch (e) { box.innerHTML = `<p class="muted">No se pudo cargar el simulador.</p>`; }
    const marcarUso = () => { if (!S.sims[s.id]) { S.sims[s.id] = Date.now(); save(); ganarXP(15); } };
    box.addEventListener("click", marcarUso, { once: true });
    box.addEventListener("input", marcarUso, { once: true });
    return fin;
  }

  // ---------- Simuladores ----------
  function vistaSimuladores() {
    app.innerHTML = `<div class="wrap page-enter">
      <div class="page-head"><h1>🎮 Simuladores</h1><p>Aprende jugando: mueve, pulsa y mira qué pasa. Cada simulador explica una parte del temario que cae mucho en el examen.</p></div>
      <div class="grid grid-3">${SIMS.map(s => { const ti = temaInfo(s.tema); return `
        <a class="card feature sim-card reveal" href="#/simulador/${s.id}" style="--c:${ti.color}">
          <div class="ico" style="background:color-mix(in srgb, ${ti.color} 16%, transparent)">${s.emoji}</div>
          <h3>${esc(s.titulo)}</h3><p>${esc(s.descripcion)}</p>
          <span class="q-tema" style="align-self:flex-start;font-size:.78rem;margin-top:8px">${S.sims[s.id] ? "✅ Probado" : ti.icono + " " + esc(ti.titulo)}</span></a>`; }).join("")}</div></div>`;
    reveal(app);
  }
  function vistaSimulador(id) {
    const s = SIMS.find(x => x.id === id); if (!s) return vistaNoEncontrado();
    const ti = temaInfo(s.tema); const lec = (s.lecciones || [])[0];
    app.innerHTML = `<div class="wrap narrow page-enter">
      <div class="crumbs"><a href="#/simuladores">Simuladores</a> › ${esc(s.titulo)}</div>
      <h1>${s.emoji} ${esc(s.titulo)}</h1><p class="muted">${esc(s.descripcion)}</p>
      <div id="simbox"></div>
      <div class="row" style="margin-top:20px">${lec ? `<a class="btn btn-ghost" href="#/leccion/${s.tema}/${lec}">📖 Ver la lección</a>` : ""}
        <button class="btn btn-primary" id="test-sim">✅ Test de ${esc(ti.titulo)}</button></div></div>`;
    const fin = montarSim(s, $("#simbox"));
    cleanup = () => fin && fin();
    $("#test-sim").addEventListener("click", () => iniciarPractica(shuffle(preguntas.filter(q => q.tema === s.tema)).slice(0, 10), "Test: " + ti.titulo));
  }

  // ---------- Tarjetas (flashcards) ----------
  let fcTema = "";
  function vistaTarjetas() {
    if (!FC.length) { app.innerHTML = cargandoHTML("Las tarjetas se están preparando"); return; }
    const temas = TEMAS_BASE.filter(t => FC.some(c => c.tema === t.id)).map(t => temaInfo(t.id));
    const caja = c => S.fc[c.id] || 0;
    let mazo = FC.filter(c => !fcTema || c.tema === fcTema);
    mazo = shuffle(mazo).sort((a, b) => caja(a) - caja(b));
    const sabidas = FC.filter(c => caja(c) >= 2).length;
    app.innerHTML = `<div class="wrap narrow page-enter">
      <div class="page-head"><h1>🃏 Tarjetas de memoria</h1><p>Lee la pregunta, piensa la respuesta y toca la tarjeta para girarla. Las que no sepas volverán a salir antes. Teclas: <b>espacio</b> girar, <b>←</b> repasar, <b>→</b> me la sé.</p></div>
      <div class="chips" style="margin-bottom:16px"><button class="chip ${!fcTema ? "on" : ""}" data-t="">Todas</button>${temas.map(t => `<button class="chip ${fcTema === t.id ? "on" : ""}" data-t="${t.id}">${t.icono} ${esc(t.titulo)}</button>`).join("")}</div>
      <div class="row" style="margin-bottom:12px"><span class="muted" id="fc-cont"></span><span class="spacer"></span><span class="muted">Dominadas: <b>${sabidas}</b> de ${FC.length}</span></div>
      <div class="progress" style="margin-bottom:22px"><i data-w="${Math.round(sabidas / FC.length * 100)}"></i></div>
      <div class="fc-stage" id="stage"></div>
      <div class="fc-actions"><button class="btn btn-bad" id="no">😕 Repasar</button><button class="btn btn-good" id="si">😎 Me la sé</button></div></div>`;
    barras(app);
    $$(".chips .chip", app).forEach(c => c.addEventListener("click", () => { fcTema = c.dataset.t; vistaTarjetas(); }));
    let i = 0;
    const pintar = () => {
      if (i >= mazo.length) { $("#stage").innerHTML = `<div class="card empty" style="height:100%"><div class="big">🎉</div><h2>¡Mazo terminado!</h2><button class="btn btn-primary" id="again">Otra ronda</button></div>`; $("#again").addEventListener("click", vistaTarjetas); return; }
      const c = mazo[i], ti = temaInfo(c.tema);
      $("#fc-cont").textContent = `Tarjeta ${i + 1} de ${mazo.length}`;
      $("#stage").innerHTML = `<div class="fc enter" style="--c:${ti.color}" tabindex="0">
        <div class="ff"><div class="fe">${esc(c.emoji || ti.icono)}</div><div class="ft">${fmt(c.frente)}</div><span class="fc-hint">Toca para ver la respuesta ↻</span></div>
        <div class="fb"><div class="fd">${fmt(c.dorso)}</div>${c.nota ? `<div class="fn">${fmt(c.nota)}</div>` : ""}<span class="fc-hint muted">${ti.icono} ${esc(ti.titulo)}</span></div></div>`;
      $(".fc", app).addEventListener("click", e => e.currentTarget.classList.toggle("flipped"));
    };
    const responder = sabe => {
      const card = $(".fc", app); if (!card || i >= mazo.length) return;
      const c = mazo[i]; S.fc[c.id] = sabe ? Math.min(3, caja(c) + 1) : 0; S.fcVistas++; save(); ganarXP(3);
      card.classList.add(sabe ? "out-right" : "out-left");
      if (!sabe) mazo.splice(Math.min(mazo.length, i + 4), 0, c);
      setTimeout(() => { i++; pintar(); }, 380);
    };
    $("#si").addEventListener("click", () => responder(true));
    $("#no").addEventListener("click", () => responder(false));
    teclas = e => {
      if (e.key === " ") { e.preventDefault(); const c = $(".fc", app); if (c) c.classList.toggle("flipped"); }
      else if (e.key === "ArrowRight") responder(true); else if (e.key === "ArrowLeft") responder(false);
    };
    pintar();
  }

  // ---------- Tests ----------
  let testConfig = { temas: [], n: 20, modo: "mix" };
  function vistaTestSetup() {
    if (!preguntas.length) { app.innerHTML = cargandoHTML("El banco de preguntas se está generando"); return; }
    const temasConQ = TEMAS_BASE.filter(t => preguntas.some(q => q.tema === t.id)).map(t => temaInfo(t.id));
    app.innerHTML = `<div class="wrap narrow page-enter">
      <div class="page-head"><h1>Tests de práctica</h1><p>Elige temas y cuántas preguntas. Verás si aciertas al momento y por qué. Atajos: teclas <b>1 2 3</b> para responder y <b>Enter</b> para seguir.</p></div>
      <div class="card">
        <span class="field-label">Temas <a href="#" id="all" class="muted" style="font-weight:500;font-size:.85rem">(todos / ninguno)</a></span>
        <div class="chips" id="temas">${temasConQ.map(t => `<button class="chip ${testConfig.temas.includes(t.id) ? "on" : ""}" data-id="${t.id}">${t.icono} ${esc(t.titulo)} <span class="muted">· ${preguntas.filter(q => q.tema === t.id).length}</span></button>`).join("")}</div>
        <span class="field-label">Número de preguntas</span>
        <div class="chips" id="num">${[10, 20, 30, 50].map(n => `<button class="chip ${testConfig.n === n ? "on" : ""}" data-n="${n}">${n}</button>`).join("")}</div>
        <span class="field-label">Qué preguntas</span>
        <div class="chips" id="modo">
          <button class="chip ${testConfig.modo === "mix" ? "on" : ""}" data-m="mix">🎲 Aleatorias</button>
          <button class="chip ${testConfig.modo === "nuevas" ? "on" : ""}" data-m="nuevas">✨ Primero las no vistas</button>
          <button class="chip ${testConfig.modo === "debiles" ? "on" : ""}" data-m="debiles">🎯 Las que más fallo</button>
        </div>
        <div class="row" style="margin-top:24px"><span class="muted" id="disp"></span><span class="spacer"></span><button class="btn btn-primary" id="go">Empezar test →</button></div>
      </div></div>`;
    const pool = () => preguntas.filter(q => !testConfig.temas.length || testConfig.temas.includes(q.tema));
    const upd = () => { $("#disp").textContent = pool().length + " preguntas disponibles"; };
    $$("#temas .chip").forEach(c => c.addEventListener("click", () => {
      const id = c.dataset.id; const i = testConfig.temas.indexOf(id);
      i >= 0 ? testConfig.temas.splice(i, 1) : testConfig.temas.push(id); c.classList.toggle("on"); upd();
    }));
    $("#all").addEventListener("click", e => { e.preventDefault(); testConfig.temas = testConfig.temas.length ? [] : temasConQ.map(t => t.id); vistaTestSetup(); });
    $$("#num .chip").forEach(c => c.addEventListener("click", () => { testConfig.n = +c.dataset.n; $$("#num .chip").forEach(x => x.classList.toggle("on", x === c)); }));
    $$("#modo .chip").forEach(c => c.addEventListener("click", () => { testConfig.modo = c.dataset.m; $$("#modo .chip").forEach(x => x.classList.toggle("on", x === c)); }));
    upd();
    $("#go").addEventListener("click", () => {
      let p = shuffle(pool());
      if (testConfig.modo === "nuevas") p.sort((a, b) => (S.resp[a.id] ? 1 : 0) - (S.resp[b.id] ? 1 : 0));
      if (testConfig.modo === "debiles") {
        const score = q => { const r = S.resp[q.id]; return r ? r.ko * 2 - r.ok + (r.last === false ? 3 : 0) : 0.5; };
        p.sort((a, b) => score(b) - score(a));
      }
      iniciarPractica(p.slice(0, testConfig.n), "Test de práctica");
    });
  }

  function iniciarPractica(lista, titulo, opts = {}) {
    if (!lista.length) { toast("No hay preguntas para ese filtro"); return; }
    let i = 0; const res = [];
    if (location.hash !== "#/practica") { history.pushState(null, "", "#/practica"); }
    marcarActivo("test");
    const pintar = () => {
      const q = lista[i], ti = temaInfo(q.tema);
      app.innerHTML = `<div class="wrap narrow page-enter">
        <div class="row" style="margin-bottom:10px"><h2 style="margin:0">${esc(titulo)}</h2><span class="spacer"></span><button class="btn btn-ghost btn-sm" id="salir">Salir</button></div>
        <div class="q-progress">${lista.map((_, j) => `<i class="${j < res.length ? (res[j].ok ? "ok" : "ko") : j === i ? "cur" : ""}"></i>`).join("")}</div>
        <div class="card q-card">
          <div class="q-head"><span>Pregunta ${i + 1} de ${lista.length}</span><span class="q-tema">${ti.icono} ${esc(ti.titulo)}</span></div>
          ${q.senal ? `<div class="q-sign">${svgSenal(q.senal.forma, q.senal.simbolo)}</div>` : ""}
          <div class="q-text">${fmt(q.pregunta)}</div>
          <div class="options">${q.opciones.map((o, k) => `<button class="opt" data-i="${k}"><span class="letter">${LETRAS[k]}</span><span>${fmt(o)}</span></button>`).join("")}</div>
          <div id="exp"></div>
          <div class="row" style="margin-top:18px"><span class="spacer"></span><button class="btn btn-primary" id="next" hidden>${i + 1 < lista.length ? "Siguiente →" : "Ver resultado"}</button></div>
        </div></div>`;
      const responder = k => {
        if (res.length > i) return;
        const ok = k === q.correcta; res.push({ q, k, ok }); registrar(q, ok);
        $$(".opt", app).forEach((x, j) => { x.disabled = true; if (j === q.correcta) x.classList.add("correct"); if (j === k && !ok) x.classList.add("wrong"); });
        $("#exp").innerHTML = `<div class="explain ${ok ? "" : "bad"}"><b>${ok ? "✅ ¡Correcto!" : "❌ Incorrecto. La buena es la " + LETRAS[q.correcta]}</b>${fmt(q.explicacion || "")}</div>`;
        $(".q-progress i:nth-child(" + (i + 1) + ")").className = ok ? "ok" : "ko";
        const n = $("#next"); n.hidden = false; n.focus();
      };
      $$(".opt", app).forEach(b => b.addEventListener("click", () => responder(+b.dataset.i)));
      $("#next").addEventListener("click", () => { i++; i < lista.length ? pintar() : fin(); });
      $("#salir").addEventListener("click", () => res.length ? fin() : (location.hash = "#/test"));
      teclas = e => {
        if (["1", "2", "3", "a", "b", "c"].includes(e.key.toLowerCase()) && res.length === i) { const k = "123".includes(e.key) ? +e.key - 1 : "abc".indexOf(e.key.toLowerCase()); if (k < q.opciones.length) responder(k); }
        else if (e.key === "Enter" && res.length > i) { e.preventDefault(); $("#next").click(); }
      };
    };
    const fin = () => {
      teclas = null;
      const ok = res.filter(r => r.ok).length, tot = res.length, pct = tot ? Math.round(ok / tot * 100) : 0;
      if (pct >= 90 && tot >= 10) confetti();
      app.innerHTML = `<div class="wrap narrow page-enter">
        <div class="card result-hero">
          ${ringSVG(pct, pct >= 90 ? "var(--ok)" : pct >= 70 ? "var(--warn)" : "var(--bad)")}
          <div class="verdict ${pct >= 90 ? "ok" : "ko"}" style="font-size:1.8rem">${pct >= 90 ? "¡Nivel examen! 🏆" : pct >= 70 ? "Vas bien, sigue así 💪" : "Toca repasar 📚"}</div>
          <p class="muted">${ok} de ${tot} correctas</p>
          <div class="row" style="justify-content:center">
            <button class="btn btn-primary" id="otra">Otro test</button>
            ${res.some(r => !r.ok) ? `<button class="btn btn-ghost" id="rep">Repetir solo las falladas</button>` : ""}
          </div></div>
        ${revisionHTML(res)}</div>`;
      animarRing();
      $("#otra").addEventListener("click", () => opts.volver ? (location.hash = opts.volver) : (location.hash = "#/test"));
      const rep = $("#rep"); if (rep) rep.addEventListener("click", () => iniciarPractica(res.filter(r => !r.ok).map(r => r.q), "Repaso de fallos"));
    };
    pintar();
  }

  function revisionHTML(res) {
    return `<h2 style="margin-top:30px">Revisión</h2><div class="grid">${res.map((r, n) => `
      <details class="card" ${r.ok ? "" : "open"}>
        <summary style="cursor:pointer;font-weight:700">${r.ok ? "✅" : "❌"} ${n + 1}. ${fmt(r.q.pregunta)}</summary>
        <div style="margin-top:12px">${r.q.senal ? `<div class="q-sign">${svgSenal(r.q.senal.forma, r.q.senal.simbolo)}</div>` : ""}
          <div class="options">${r.q.opciones.map((o, k) => `<div class="opt ${k === r.q.correcta ? "correct" : k === r.k ? "wrong" : ""}" style="animation:none"><span class="letter">${LETRAS[k]}</span><span>${fmt(o)}</span></div>`).join("")}</div>
          ${r.k == null ? `<p class="muted" style="margin-top:10px">Sin responder (cuenta como fallo).</p>` : ""}
          <div class="explain ${r.ok ? "" : "bad"}">${fmt(r.q.explicacion || "")}${r.q.fuente ? `<br><small class="muted">Fuente: ${esc(r.q.fuente)}</small>` : ""}</div></div>
      </details>`).join("")}</div>`;
  }
  function ringSVG(pct, color) {
    const C = 2 * Math.PI * 64;
    return `<svg class="ring" viewBox="0 0 160 160"><circle class="bg" cx="80" cy="80" r="64"/><circle class="fg" cx="80" cy="80" r="64" stroke="${color}" stroke-dasharray="${C}" stroke-dashoffset="${C}" data-off="${C * (1 - pct / 100)}"/><text x="80" y="88" text-anchor="middle">${pct}%</text></svg>`;
  }
  function animarRing() { requestAnimationFrame(() => setTimeout(() => $$(".ring .fg", app).forEach(c => c.style.strokeDashoffset = c.dataset.off), 60)); }

  // ---------- Simulacro de examen ----------
  function vistaExamenIntro() {
    const n = Math.min(30, preguntas.length);
    const ult = S.examenes.slice(-5);
    app.innerHTML = `<div class="wrap narrow page-enter">
      <div class="page-head"><h1>Simulacro de examen DGT</h1><p>Como el día del examen: ${n} preguntas de todos los temas, 30 minutos y puedes saltar entre preguntas. No verás si aciertas hasta corregir.</p></div>
      <div class="grid grid-3">
        <div class="card center"><div style="font-size:2rem">📝</div><h3>${n} preguntas</h3></div>
        <div class="card center"><div style="font-size:2rem">⏳</div><h3>30:00 minutos</h3></div>
        <div class="card center"><div style="font-size:2rem">🎯</div><h3>APTO con ≤ 3 fallos</h3></div>
      </div>
      <div class="card row" style="margin-top:18px"><div style="flex:1;min-width:220px">
        <h3 style="margin:0">¿List@?</h3><p class="muted" style="margin:0">${ult.length ? "Últimos: " + ult.map(e => e.apto ? "🟢" : "🔴").join(" ") : "Aún no has hecho ningún simulacro."}</p></div>
        <button class="btn btn-primary" id="start" ${n ? "" : "disabled"}>Empezar examen ⏱️</button></div></div>`;
    $("#start").addEventListener("click", () => iniciarExamen());
  }

  function seleccionExamen() {
    // reparto proporcional por temas para que se parezca al examen real
    const porTema = {}; preguntas.forEach(q => (porTema[q.tema] = porTema[q.tema] || []).push(q));
    const temas = Object.keys(porTema); const N = Math.min(30, preguntas.length);
    let sel = []; const cupo = Math.max(1, Math.floor(N / temas.length));
    temas.forEach(t => sel.push(...shuffle(porTema[t]).slice(0, cupo)));
    const resto = shuffle(preguntas.filter(q => !sel.includes(q)));
    sel = sel.concat(resto.slice(0, Math.max(0, N - sel.length)));
    return shuffle(sel.slice(0, N));
  }

  function iniciarExamen() {
    const lista = seleccionExamen(); const resp = Array(lista.length).fill(null);
    let i = 0; let restante = 30 * 60; const t0 = Date.now();
    history.pushState(null, "", "#/examen-en-curso"); marcarActivo("examen");
    app.innerHTML = `<div class="wrap narrow page-enter">
      <div class="exam-bar"><div class="timer" id="timer">⏳ 30:00</div><span class="muted" id="cont"></span><span class="spacer"></span><button class="btn btn-primary btn-sm" id="corregir">Corregir examen</button></div>
      <div id="qbox"></div><div class="exam-grid" id="grid"></div></div>`;
    const timerEl = $("#timer");
    const iv = setInterval(() => {
      restante = 30 * 60 - Math.floor((Date.now() - t0) / 1000);
      if (restante <= 0) { clearInterval(iv); toast("⏰ ¡Se acabó el tiempo!"); corregir(); return; }
      timerEl.textContent = "⏳ " + String(Math.floor(restante / 60)).padStart(2, "0") + ":" + String(restante % 60).padStart(2, "0");
      timerEl.classList.toggle("low", restante < 120);
    }, 500);
    const beforeUnload = e => { e.preventDefault(); e.returnValue = ""; };
    addEventListener("beforeunload", beforeUnload);
    cleanup = () => { clearInterval(iv); removeEventListener("beforeunload", beforeUnload); };

    const grid = () => {
      $("#grid").innerHTML = lista.map((_, j) => `<button class="${resp[j] != null ? "answered" : ""} ${j === i ? "current" : ""}" data-j="${j}">${j + 1}</button>`).join("");
      $$("#grid button").forEach(b => b.addEventListener("click", () => { i = +b.dataset.j; pintar(); }));
      $("#cont").textContent = resp.filter(r => r != null).length + "/" + lista.length + " respondidas";
    };
    let pintado = -1;
    const pintar = () => {
      const q = lista[i]; const anim = pintado !== i ? "page-enter" : ""; pintado = i;
      $("#qbox").innerHTML = `<div class="card q-card ${anim}">
        <div class="q-head"><span>Pregunta ${i + 1} de ${lista.length}</span></div>
        ${q.senal ? `<div class="q-sign">${svgSenal(q.senal.forma, q.senal.simbolo)}</div>` : ""}
        <div class="q-text">${fmt(q.pregunta)}</div>
        <div class="options">${q.opciones.map((o, k) => `<button class="opt ${resp[i] === k ? "selected" : ""}" data-i="${k}"><span class="letter">${LETRAS[k]}</span><span>${fmt(o)}</span></button>`).join("")}</div>
        <div class="row" style="margin-top:18px"><button class="btn btn-ghost" id="ant" ${i ? "" : "disabled"}>← Anterior</button><span class="spacer"></span><button class="btn btn-primary" id="sigx">${i + 1 < lista.length ? "Siguiente →" : "Revisar y corregir"}</button></div></div>`;
      $$("#qbox .opt").forEach(b => b.addEventListener("click", () => { resp[i] = +b.dataset.i; $$("#qbox .opt").forEach(x => x.classList.toggle("selected", x === b)); grid(); }));
      $("#ant").addEventListener("click", () => { i--; pintar(); });
      $("#sigx").addEventListener("click", () => { if (i + 1 < lista.length) { i++; pintar(); } else confirmarCorregir(); });
      grid();
    };
    teclas = e => {
      const k = "123".indexOf(e.key); if (k >= 0 && k < lista[i].opciones.length) { resp[i] = k; pintar(); }
      else if (e.key === "ArrowRight" && i + 1 < lista.length) { i++; pintar(); }
      else if (e.key === "ArrowLeft" && i > 0) { i--; pintar(); }
    };
    const confirmarCorregir = () => {
      const sin = resp.filter(r => r == null).length;
      if (sin && !confirm(`Te quedan ${sin} preguntas sin responder (cuentan como fallo). ¿Corregir igualmente?`)) return;
      corregir();
    };
    $("#corregir").addEventListener("click", confirmarCorregir);
    const corregir = () => {
      cleanup && cleanup(); cleanup = null; teclas = null;
      const res = lista.map((q, j) => ({ q, k: resp[j], ok: resp[j] === q.correcta }));
      res.forEach(r => { if (r.k != null) registrar(r.q, r.ok); else { S.fallos[r.q.id] = Date.now(); } });
      const fallos = res.filter(r => !r.ok).length, apto = fallos <= 3;
      const seg = Math.min(1800, Math.round((Date.now() - t0) / 1000));
      S.examenes.push({ fecha: Date.now(), aciertos: lista.length - fallos, fallos, total: lista.length, apto, seg }); marcarDia(); save(); badgeFallos();
      ganarXP(apto ? 100 : 30);
      if (apto) confetti();
      app.innerHTML = `<div class="wrap narrow page-enter">
        <div class="card result-hero">
          <div class="big">${apto ? "🏆" : "📚"}</div>
          <div class="verdict ${apto ? "ok" : "ko"}">${apto ? "APTO" : "NO APTO"}</div>
          ${ringSVG(Math.round((lista.length - fallos) / lista.length * 100), apto ? "var(--ok)" : "var(--bad)")}
          <p style="font-size:1.1rem"><b>${fallos}</b> fallo${fallos === 1 ? "" : "s"} · ${lista.length - fallos} aciertos · ${Math.floor(seg / 60)} min ${seg % 60} s</p>
          <p class="muted">${apto ? "¡Genial! Repite simulacros hasta aprobar varios seguidos con margen." : "Necesitas 3 fallos o menos. Repasa la teoría de lo que has fallado y vuelve a intentarlo."}</p>
          <div class="exam-grid" style="max-width:520px;margin:18px auto">${res.map((r, j) => `<button class="${r.ok ? "ok" : "ko"}" onclick="document.getElementById('rv${j}').scrollIntoView({behavior:'smooth',block:'center'})">${j + 1}</button>`).join("")}</div>
          <div class="row" style="justify-content:center"><button class="btn btn-primary" id="otro">Otro simulacro</button><a class="btn btn-ghost" href="#/fallos">Repasar fallos</a></div>
        </div>${revisionHTML(res)}</div>`;
      $$("details", app).forEach((d, j) => d.id = "rv" + j);
      animarRing();
      $("#otro").addEventListener("click", () => iniciarExamen());
    };
    pintar();
  }

  // ---------- Fallos ----------
  function vistaFallos() {
    const lista = preguntas.filter(q => S.fallos[q.id]);
    if (!lista.length) {
      app.innerHTML = `<div class="wrap narrow page-enter"><div class="card empty"><div class="big">🎉</div><h2>No tienes fallos pendientes</h2><p class="muted">Cuando falles una pregunta aparecerá aquí. Al acertarla, desaparece.</p><a class="btn btn-primary" href="#/test">Hacer un test</a></div></div>`;
      return;
    }
    const porTema = {}; lista.forEach(q => porTema[q.tema] = (porTema[q.tema] || 0) + 1);
    app.innerHTML = `<div class="wrap narrow page-enter">
      <div class="page-head"><h1>Tus fallos (${lista.length})</h1><p>Las preguntas que fallas se quedan aquí hasta que las aciertes. Es la forma más rápida de mejorar.</p></div>
      <div class="card"><div class="chips">${Object.entries(porTema).map(([t, n]) => { const ti = temaInfo(t); return `<span class="chip">${ti.icono} ${esc(ti.titulo)} · <b>${n}</b></span>`; }).join("")}</div>
      <div class="row" style="margin-top:18px"><button class="btn btn-primary" id="go">Repasar ${Math.min(lista.length, 30)} fallos →</button><span class="spacer"></span><button class="btn btn-ghost btn-sm" id="limpiar">Vaciar lista</button></div></div></div>`;
    $("#go").addEventListener("click", () => iniciarPractica(shuffle(lista).slice(0, 30), "Repaso de fallos", { volver: "#/fallos" }));
    $("#limpiar").addEventListener("click", () => { if (confirm("¿Vaciar la lista de fallos?")) { S.fallos = {}; save(); badgeFallos(); vistaFallos(); } });
  }

  // ---------- Señales ----------
  let filtroSenal = "Todas";
  function vistaSenales() {
    const todas = todasSenales();
    if (!todas.length) { app.innerHTML = cargandoHTML("Las señales llegan con el temario"); return; }
    const cats = ["Todas", ...new Set(todas.map(s => categoriaSenal(s.forma)))];
    const lista = filtroSenal === "Todas" ? todas : todas.filter(s => categoriaSenal(s.forma) === filtroSenal);
    app.innerHTML = `<div class="wrap page-enter">
      <div class="page-head"><h1>Señales de tráfico</h1><p>Mira la señal, intenta decir qué significa y toca la tarjeta para girarla. ${todas.length} señales del temario.</p></div>
      <div class="row" style="margin-bottom:18px"><div class="chips" id="cats">${cats.map(c => `<button class="chip ${c === filtroSenal ? "on" : ""}" data-c="${esc(c)}">${esc(c)}</button>`).join("")}</div>
      <span class="spacer"></span><button class="btn btn-ghost btn-sm" id="mezclar">🔀 Mezclar</button><button class="btn btn-ghost btn-sm" id="girar">Girar todas</button></div>
      <div class="grid grid-4" id="sg">${lista.map(s => `
        <div class="sign-card reveal" tabindex="0" role="button" aria-label="Señal, toca para ver el significado">
          <div class="flip"><div class="front">${svgSenal(s.forma, s.simbolo)}<span class="nm">${esc(((s.nombre || "").match(/^[A-Z]{1,2}-\d+[a-z]?/) || ["¿?"])[0])}</span><span class="hint">Toca para girar ↻</span></div>
          <div class="back"><h4>${fmt(s.nombre)}</h4><span class="q-tema" style="font-size:.75rem">${esc(categoriaSenal(s.forma))}</span><p style="margin:0">${fmt(s.descripcion || "")}</p></div></div></div>`).join("")}</div></div>`;
    $$("#cats .chip").forEach(c => c.addEventListener("click", () => { filtroSenal = c.dataset.c; vistaSenales(); }));
    const flip = el => el.classList.toggle("flipped");
    $$(".sign-card", app).forEach(c => { c.addEventListener("click", () => flip(c)); c.addEventListener("keydown", e => { if (e.key === "Enter" || e.key === " ") { e.preventDefault(); flip(c); } }); });
    $("#girar").addEventListener("click", () => { const any = $$(".sign-card.flipped").length; $$(".sign-card").forEach(c => c.classList.toggle("flipped", !any)); });
    $("#mezclar").addEventListener("click", () => { const g = $("#sg"); shuffle([...g.children]).forEach(ch => g.appendChild(ch)); });
    reveal(app);
  }

  // ---------- Guía Comunitat Valenciana ----------
  function vistaValencia() {
    const I = INFO || {};
    const pasos = I.pasos && I.pasos.length ? I.pasos : [
      { titulo: "Reconocimiento médico", texto: "En un Centro de Reconocimiento de Conductores (CRC). Te dan el certificado de aptitud." },
      { titulo: "Matrícula en autoescuela (o libre)", texto: "La autoescuela gestiona la tasa y las citas. Por libre lo tramitas tú en la Jefatura." },
      { titulo: "Pagar la tasa DGT", texto: "Da derecho a dos convocatorias de examen." },
      { titulo: "Examen teórico", texto: "30 preguntas, 30 minutos, máximo 3 fallos." },
      { titulo: "Prácticas y examen práctico", texto: "Con el teórico aprobado tienes 2 años para aprobar el práctico." },
      { titulo: "¡Permiso provisional!", texto: "Al aprobar puedes conducir con la autorización provisional hasta que llegue el permiso." }
    ];
    app.innerHTML = `<div class="wrap page-enter">
      <div class="page-head"><h1>🍊 Guía Comunitat Valenciana</h1><p>Todo lo práctico para sacarte el carnet en Valencia, Alicante o Castellón. ${I.actualizado ? "Datos recopilados: " + esc(I.actualizado) + "." : ""} Comprueba siempre tasas y horarios en la web oficial de la DGT.</p></div>
      <h2>Paso a paso</h2>
      <div class="card"><div class="steps">${pasos.map(p => `<div class="step reveal"><div><h4>${fmt(p.titulo)}</h4><p>${fmt(p.texto)}</p></div></div>`).join("")}</div></div>
      ${I.jefaturas && I.jefaturas.length ? `<h2 style="margin-top:36px">Jefaturas Provinciales de Tráfico</h2><div class="grid grid-3">${I.jefaturas.map(j => `<div class="card reveal"><div style="font-size:1.8rem">🏛️</div><h3>${esc(j.provincia)}</h3><p>${fmt(j.direccion || "")}</p>${j.telefono ? `<p class="muted">📞 ${esc(j.telefono)}</p>` : ""}${j.notas ? `<p class="muted" style="font-size:.9rem">${fmt(j.notas)}</p>` : ""}</div>`).join("")}</div>` : ""}
      ${I.costes && I.costes.length ? `<h2 style="margin-top:36px">Costes orientativos</h2><div class="table-wrap"><table><thead><tr><th>Concepto</th><th>Importe</th></tr></thead><tbody>${I.costes.map(c => `<tr><td>${fmt(c.concepto)}</td><td><b>${fmt(c.importe)}</b></td></tr>`).join("")}</tbody></table></div>` : ""}
      ${I.consejos && I.consejos.length ? `<h2 style="margin-top:36px">Consejos</h2><div class="card"><div class="lesson"><ul>${I.consejos.map(c => `<li>${fmt(c)}</li>`).join("")}</ul></div></div>` : ""}
      <h2 style="margin-top:36px">Enlaces útiles</h2>
      <div class="grid grid-3">${(I.enlaces && I.enlaces.length ? I.enlaces : [
        { titulo: "DGT — Web oficial", url: "https://www.dgt.es" },
        { titulo: "Sede electrónica DGT (cita previa, notas)", url: "https://sede.dgt.gob.es" }
      ]).map(e => `<a class="card feature reveal" href="${esc(e.url)}" target="_blank" rel="noopener"><div class="ico">🔗</div><h3 style="font-size:1rem">${esc(e.titulo)}</h3><p style="word-break:break-all;font-size:.82rem">${esc(e.url)}</p></a>`).join("")}</div></div>`;
    reveal(app);
  }

  // ---------- Progreso ----------
  function vistaProgreso() {
    const totalResp = Object.values(S.resp).reduce((n, r) => n + r.ok + r.ko, 0);
    const okResp = Object.values(S.resp).reduce((n, r) => n + r.ok, 0);
    const vistas = Object.keys(S.resp).length;
    const nL = totalLecciones(), leidas = Object.keys(S.leidas).length;
    const ex = S.examenes.slice(-15);
    const aptos = S.examenes.filter(e => e.apto).length;
    const rachaAptos = (() => { let n = 0; for (let k = S.examenes.length - 1; k >= 0 && S.examenes[k].apto; k--) n++; return n; })();
    const listo = rachaAptos >= 5;
    app.innerHTML = `<div class="wrap page-enter">
      <div class="page-head"><h1>Tu progreso</h1><p>Todo se guarda en este navegador.</p></div>
      <div class="stats">
        <div class="stat"><b data-count="${nL ? Math.round(leidas / nL * 100) : 0}" data-suf="%">0</b><span>temario leído</span></div>
        <div class="stat"><b data-count="${totalResp ? Math.round(okResp / totalResp * 100) : 0}" data-suf="%">0</b><span>aciertos en tests</span></div>
        <div class="stat"><b data-count="${vistas}">0</b><span>de ${preguntas.length} preguntas vistas</span></div>
        <div class="stat"><b data-count="${aptos}">0</b><span>simulacros aptos de ${S.examenes.length}</span></div>
      </div>
      <div class="card" style="margin-top:22px;${listo ? "border-color:var(--ok)" : ""}">
        <h3>${listo ? "🟢 ¡Estás preparado/a para presentarte!" : "🚦 ¿Estoy listo para el examen?"}</h3>
        <p class="muted" style="margin:0">${listo ? "Llevas 5 o más simulacros APTOS seguidos." : `Objetivo: 5 simulacros APTOS seguidos. Llevas <b>${rachaAptos}</b>.`}</p>
        <div class="progress" style="margin-top:12px;--c:var(--ok)"><i data-w="${Math.min(100, rachaAptos * 20)}"></i></div>
      </div>
      <div class="grid grid-2" style="margin-top:22px">
        <div class="card"><h3>Últimos simulacros (fallos)</h3>
          ${ex.length ? `<div class="bars">${ex.map(e => `<div class="bar ${e.apto ? "ok" : "ko"}" style="height:${Math.max(6, (e.fallos / Math.max(10, ...ex.map(x => x.fallos))) * 100)}%" title="${new Date(e.fecha).toLocaleDateString("es-ES")}: ${e.fallos} fallos"><span>${e.fallos}</span></div>`).join("")}</div><p class="muted" style="font-size:.85rem;margin-top:8px">Verde = APTO (≤3 fallos). Cuanto más bajita la barra, mejor.</p>`
          : `<p class="muted">Aún no hay simulacros. <a href="#/examen">Haz el primero</a>.</p>`}</div>
        <div class="card"><h3>Por temas</h3>${TEMAS_BASE.map(b => { const t = temaInfo(b.id); const ac = aciertoTema(t.id); const tm = temario.find(x => x.id === t.id);
          return `<div class="topic-stat" style="--c:${t.color}"><span style="font-size:1.3rem">${t.icono}</span><div><div style="font-size:.85rem;font-weight:600">${esc(t.titulo)}</div><div class="progress"><i data-w="${ac || 0}"></i></div><div class="muted" style="font-size:.75rem">Leído ${tm ? pctTema(tm) : 0}%</div></div><b style="text-align:right">${ac == null ? "—" : ac + "%"}</b></div>`; }).join("")}</div>
      </div>
      ${(() => { const i = nivelDe(S.xp), n = NIVELES[i], sig = NIVELES[i + 1]; return `
      <h2 style="margin-top:32px">Nivel y logros</h2>
      <div class="card row"><div style="font-size:3.4rem" class="m-ico">${n[1]}</div><div style="flex:1;min-width:220px"><h3 style="margin:0">${n[2]} · ${S.xp} XP</h3>
        <p class="muted" style="margin:0 0 8px">${sig ? `Te faltan <b>${sig[0] - S.xp} XP</b> para ${sig[1]} ${sig[2]}` : "¡Nivel máximo!"}</p>
        <div class="progress"><i data-w="${sig ? Math.round((S.xp - n[0]) / (sig[0] - n[0]) * 100) : 100}"></i></div>
        <p class="muted" style="margin:8px 0 0;font-size:.82rem">Acierto +10 · Lección +25 · Simulador nuevo +15 · Simulacro +30 (APTO +100) · Tarjeta +3</p></div>
        <div class="chips">${NIVELES.map((x, k) => `<span class="chip ${k <= i ? "on" : ""}" title="${x[2]} (${x[0]} XP)">${x[1]}</span>`).join("")}</div></div>
      <div class="logros" style="margin-top:14px">${LOGROS.map(l => `<div class="logro ${S.logros[l.id] ? "on" : ""}"><span class="le">${l.e}</span><div><b>${esc(l.t)}</b><small>${esc(l.d)}</small></div></div>`).join("")}</div>`; })()}
      <div class="card row" style="margin-top:22px"><div style="flex:1"><h3 style="margin:0">🔥 Racha: ${racha()} día${racha() === 1 ? "" : "s"}</h3><p class="muted" style="margin:0">Has estudiado ${S.dias.length} días en total.</p></div>
        <button class="btn btn-ghost btn-sm" id="reset">Borrar todo el progreso</button></div></div>`;
    animarNumeros(app); barras(app);
    $("#reset").addEventListener("click", () => { if (confirm("¿Seguro? Se borrará todo tu progreso.")) { S = Object.assign(VACIO(), { theme: S.theme }); save(); badgeFallos(); pintarXP(); vistaProgreso(); toast("Progreso borrado"); } });
  }

  function cargandoHTML(msg) {
    return `<div class="wrap narrow"><div class="card empty"><div class="semaforo" style="margin-bottom:14px"><i></i><i></i><i></i></div><h2>${esc(msg)}</h2><p class="muted">Faltan ficheros en la carpeta <code>data/</code>. Recarga cuando estén.</p></div></div>`;
  }
  function vistaNoEncontrado() {
    app.innerHTML = `<div class="wrap narrow"><div class="card empty"><div class="big">🚧</div><h2>Calle cortada</h2><p class="muted">Esta página no existe.</p><a class="btn btn-primary" href="#/">Volver al inicio</a></div></div>`;
  }

  // ---------- Router ----------
  let teclas = null;
  document.addEventListener("keydown", e => { if (teclas && !e.ctrlKey && !e.metaKey && !e.altKey) teclas(e); });
  function marcarActivo(r) { $$("#nav a").forEach(a => a.classList.toggle("active", a.dataset.route === r)); }
  function router() {
    if (cleanup) { cleanup(); cleanup = null; }
    teclas = null;
    const parts = location.hash.replace(/^#\/?/, "").split("/").filter(Boolean);
    const r = parts[0] || "";
    const activo = { tema: "temario", leccion: "temario", practica: "test", "examen-en-curso": "examen", simulador: "simuladores" }[r] || r;
    marcarActivo(activo);
    $("#nav").classList.remove("open");
    window.scrollTo(0, 0);
    switch (r) {
      case "": vistaInicio(); break;
      case "temario": vistaTemario(); break;
      case "tema": vistaTema(parts[1]); break;
      case "leccion": vistaLeccion(parts[1], parts[2]); break;
      case "test": case "practica": vistaTestSetup(); break;
      case "examen": case "examen-en-curso": vistaExamenIntro(); break;
      case "senales": vistaSenales(); break;
      case "fallos": vistaFallos(); break;
      case "valencia": vistaValencia(); break;
      case "progreso": vistaProgreso(); break;
      case "simuladores": vistaSimuladores(); break;
      case "simulador": vistaSimulador(parts[1]); break;
      case "tarjetas": vistaTarjetas(); break;
      default: vistaNoEncontrado();
    }
    app.focus({ preventScroll: true });
  }

  // ---------- Tema claro/oscuro ----------
  function aplicarTema() {
    const root = document.documentElement;
    if (S.theme) root.dataset.theme = S.theme; else delete root.dataset.theme;
    const oscuro = S.theme ? S.theme === "dark" : matchMedia("(prefers-color-scheme: dark)").matches;
    $("#theme-toggle").textContent = oscuro ? "☀️" : "🌙";
  }
  $("#theme-toggle").addEventListener("click", () => {
    const oscuro = document.documentElement.dataset.theme ? document.documentElement.dataset.theme === "dark" : matchMedia("(prefers-color-scheme: dark)").matches;
    S.theme = oscuro ? "light" : "dark"; save(); aplicarTema();
  });
  $("#menu-toggle").addEventListener("click", () => $("#nav").classList.toggle("open"));

  aplicarTema(); badgeFallos(); pintarXP(); setTimeout(comprobarLogros, 1500);
  addEventListener("hashchange", router);
  router();
})();
