/* Motor de diagramas para memorizar: mapa, flujo, ciclo, arbol, escala, piramide, linea, acronimo, comparar.
   DIAGRAMA.html(d, color) → HTML ; DIAGRAMA.activar(raiz) → animaciones e interacción. */
(function () {
  "use strict";
  const esc = s => String(s == null ? "" : s).replace(/[&<>"']/g, c => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));
  const fmt = s => esc(s).replace(/\*\*(.+?)\*\*/g, "<strong>$1</strong>");
  const ic = (n, s) => window.ICONS ? window.ICONS.icon(n, s || 16) : "";
  const TONO = { ok: "var(--ok)", warn: "var(--warn)", bad: "var(--bad)", info: "var(--ink)" };
  const TONO_IC = { ok: "check", warn: "alert", bad: "x", info: "info" };
  const NOMBRE = { mapa: ["Mapa mental", "sparkle"], flujo: ["Paso a paso", "listCheck"], ciclo: ["Ciclo", "repeat"], arbol: ["Decide tú", "merge"], escala: ["Escala", "gauge"], piramide: ["Jerarquía", "layers"], linea: ["Línea de tiempo", "calendar"], acronimo: ["Regla para recordar", "key"], comparar: ["Compara", "cards"] };
  const OCULTABLE = new Set(["mapa", "flujo", "ciclo", "piramide", "linea", "acronimo", "comparar", "escala"]);
  let uid = 0;

  const R = {};
  // ── Mapa mental ──
  R.mapa = d => {
    const n = d.ramas.length;
    const pos = n >= 5
      ? (() => { const der = Math.ceil(n / 2), izq = n - der, out = [];
          for (let i = 0; i < der; i++) out.push({ x: 80, y: der === 1 ? 50 : 14 + i * 72 / (der - 1) });
          for (let i = 0; i < izq; i++) out.push({ x: 20, y: izq === 1 ? 50 : 86 - i * 72 / (izq - 1) });
          return out; })()
      : d.ramas.map((_, i) => { const a = (-90 + i * 360 / n) * Math.PI / 180; return { x: 50 + 33 * Math.cos(a), y: 50 + 34 * Math.sin(a) }; });
    const paths = pos.map((p, i) => { const cx = 50 + (p.x - 50) * .35 + (i % 2 ? 4 : -4), cy = 50 + (p.y - 50) * .9; return `<path d="M50 50 Q${cx.toFixed(1)} ${cy.toFixed(1)} ${p.x.toFixed(1)} ${p.y.toFixed(1)}" pathLength="1" style="--i:${i}" data-r="${i}"/>`; }).join("");
    const ramas = d.ramas.map((r, i) => `<div class="mm-rama" data-r="${i}" style="left:${pos[i].x}%;top:${pos[i].y}%;--i:${i}"><b>${fmt(r.t)}</b><ul>${r.hojas.map(h => `<li class="dg-hide">${fmt(h)}</li>`).join("")}</ul></div>`).join("");
    const lista = d.ramas.map((r, i) => `<div class="mm-l" style="--i:${i}"><b>${fmt(r.t)}</b><ul>${r.hojas.map(h => `<li class="dg-hide">${fmt(h)}</li>`).join("")}</ul></div>`).join("");
    return `<div class="mm-radial n${n}"><svg viewBox="0 0 100 100" preserveAspectRatio="none" aria-hidden="true">${paths}</svg><div class="mm-centro">${fmt(d.centro)}</div>${ramas}</div>
      <div class="mm-lista"><div class="mm-centro-l">${fmt(d.centro)}</div>${lista}</div>`;
  };
  // ── Flujo ──
  R.flujo = d => `<ol class="fl-steps">${d.pasos.map((p, i) => `<li style="--i:${i}"><span class="fl-n">${i + 1}</span><b>${fmt(p.t)}</b><span class="dg-hide">${fmt(p.d)}</span></li>`).join("")}</ol>`;
  // ── Ciclo ──
  R.ciclo = d => {
    const n = d.pasos.length;
    const nodos = d.pasos.map((p, i) => { const a = (-90 + i * 360 / n) * Math.PI / 180; return `<div class="cy-n" style="left:${50 + 38 * Math.cos(a)}%;top:${50 + 38 * Math.sin(a)}%;--i:${i}"><span class="fl-n">${i + 1}</span><b>${fmt(p.t)}</b><span class="dg-hide">${fmt(p.d)}</span></div>`; }).join("");
    return `<div class="cy"><svg viewBox="0 0 100 100" aria-hidden="true"><defs><marker id="cyA${uid}" viewBox="0 0 10 10" refX="5" refY="5" markerWidth="4" markerHeight="4" orient="auto"><path d="M0 0 10 5 0 10z" fill="currentColor"/></marker></defs><circle class="cy-ring" cx="50" cy="50" r="38" pathLength="1"/><circle class="cy-run" cx="50" cy="50" r="38" pathLength="100" marker-end="url(#cyA${uid})"/></svg><div class="cy-c">${fmt(d.centro || "")}</div>${nodos}</div>
      <ol class="fl-steps cy-lista">${d.pasos.map((p, i) => `<li style="--i:${i}"><span class="fl-n">${i + 1}</span><b>${fmt(p.t)}</b><span class="dg-hide">${fmt(p.d)}</span></li>`).join("")}</ol>`;
  };
  // ── Árbol de decisión (interactivo) ──
  R.arbol = d => `<div class="tr" data-arbol='${esc(JSON.stringify(d.raiz))}'><div class="tr-path"></div><div class="tr-now"></div></div>`;
  function pintarArbol(box) {
    const raiz = JSON.parse(box.dataset.arbol); const camino = [];
    const path = box.querySelector(".tr-path"), now = box.querySelector(".tr-now");
    const paso = nodo => {
      path.innerHTML = camino.map(c => `<div class="tr-done"><span>${fmt(c.q)}</span><b class="${c.v ? "si" : "no"}">${c.v ? "Sí" : "No"}</b></div>`).join("");
      if (nodo.r != null) {
        now.innerHTML = `<div class="tr-res ${nodo.ok ? "ok" : "bad"}"><span class="tr-ic">${ic(nodo.ok ? "check" : "x", 22)}</span><b>${fmt(nodo.r)}</b></div><button class="btn btn-ghost btn-sm tr-reset">${ic("rotate", 15)} Probar otro camino</button>`;
        now.querySelector(".tr-reset").addEventListener("click", () => { camino.length = 0; paso(raiz); });
      } else {
        now.innerHTML = `<div class="tr-q"><span class="tr-ic">${ic("merge", 20)}</span><b>${fmt(nodo.q)}</b></div><div class="tr-btns"><button class="btn btn-ok tr-b" data-v="1">Sí</button><button class="btn btn-ghost tr-b" data-v="0">No</button></div>`;
        now.querySelectorAll(".tr-b").forEach(b => b.addEventListener("click", () => { const v = b.dataset.v === "1"; camino.push({ q: nodo.q, v }); paso(v ? nodo.si : nodo.no); }));
      }
      now.firstElementChild && now.firstElementChild.animate([{ opacity: 0, transform: "translateY(10px)" }, { opacity: 1, transform: "none" }], { duration: 350, easing: "cubic-bezier(.2,.8,.2,1)" });
    };
    paso(raiz);
  }
  // ── Escala ──
  R.escala = d => {
    const W = v => ((v - d.min) / (d.max - d.min) * 100);
    const n = v => String(+v.toFixed(3)).replace(".", ",");
    return `<div class="sc" data-min="${d.min}" data-max="${d.max}" data-unidad="${esc(d.unidad)}" data-tramos='${esc(JSON.stringify(d.tramos))}'>
      <div class="sc-marks">${(d.marcas || []).map(m => `<span style="left:${W(m.v)}%"><b>${n(m.v)}</b><small>${fmt(m.t)}</small></span>`).join("")}</div>
      <div class="sc-bar">${d.tramos.map((t, i) => `<i style="width:${W(t.hasta) - W(t.desde)}%;background:${TONO[t.tono]};--i:${i}"></i>`).join("")}<span class="sc-ptr"></span></div>
      <div class="sc-labs">${d.tramos.map(t => `<span style="width:${W(t.hasta) - W(t.desde)}%;color:${TONO[t.tono]}" class="dg-hide">${fmt(t.t)}</span>`).join("")}</div>
      <div class="sc-ticks"><span>${n(d.min)} ${esc(d.unidad)}</span><span>${n(d.max)} ${esc(d.unidad)}</span></div>
      <div class="sc-try"><input type="range" min="${d.min}" max="${d.max}" step="${(d.max - d.min) / 200}" value="${d.min}" aria-label="Prueba un valor"><output></output></div></div>`;
  };
  function activarEscala(box) {
    const min = +box.dataset.min, max = +box.dataset.max, T = JSON.parse(box.dataset.tramos), u = box.dataset.unidad;
    const inp = box.querySelector("input"), out = box.querySelector("output"), ptr = box.querySelector(".sc-ptr");
    const upd = () => {
      const v = +inp.value; const p = (v - min) / (max - min) * 100; ptr.style.left = p + "%"; inp.style.setProperty("--p", p + "%");
      const t = T.find(x => v >= x.desde && v <= x.hasta) || T[T.length - 1];
      out.innerHTML = `<b>${String(+v.toFixed(2)).replace(".", ",")} ${esc(u)}</b> → <span style="color:${TONO[t.tono]}">${fmt(t.t)}</span>`;
    };
    inp.addEventListener("input", upd); upd();
  }
  // ── Pirámide ──
  R.piramide = d => { const n = d.niveles.length; return `<div class="py">${d.niveles.map((l, i) => `<div class="py-l" style="--w:${38 + 62 * (i + 1) / n}%;--i:${n - 1 - i};--k:${i / Math.max(1, n - 1)}"><span class="py-n">${i + 1}</span><b>${fmt(l.t)}</b><small class="dg-hide">${fmt(l.d)}</small></div>`).join("")}<div class="py-arrow">${ic("arrowLeft", 14)} manda más arriba</div></div>`; };
  // ── Línea de tiempo ──
  R.linea = d => `<div class="tl"><div class="tl-track"><i></i></div>${d.hitos.map((h, i) => `<div class="tl-h" style="--i:${i}"><span class="tl-k">${fmt(h.k)}</span><span class="tl-dot"></span><b>${fmt(h.t)}</b><small class="dg-hide">${fmt(h.d)}</small></div>`).join("")}</div>`;
  // ── Acrónimo ──
  R.acronimo = d => `<div class="ac">${d.letras.map((l, i) => `<div class="ac-l" style="--i:${i}"><span class="ac-big">${esc(l.l)}</span><b>${fmt(l.t)}</b><small class="dg-hide">${fmt(l.d)}</small></div>`).join("")}</div>`;
  // ── Comparar ──
  R.comparar = d => `<div class="cp n${d.columnas.length}">${d.columnas.map((c, i) => `${i ? `<span class="cp-vs">vs</span>` : ""}<div class="cp-c" style="--t:${TONO[c.tono || "info"]};--i:${i}"><h5>${ic(TONO_IC[c.tono || "info"], 15)} ${fmt(c.t)}</h5><ul>${c.items.map(it => `<li class="dg-hide">${fmt(it)}</li>`).join("")}</ul></div>`).join("")}</div>`;

  function html(d, color) {
    if (!d || !R[d.tipo]) return "";
    uid++;
    const [nombre, icono] = NOMBRE[d.tipo];
    return `<figure class="dg dg-${d.tipo}" style="--c:${color || "var(--ink)"}">
      <figcaption class="dg-head"><span class="dg-tag">${ic(icono, 14)} ${nombre}</span><h4>${fmt(d.titulo)}</h4>
        ${OCULTABLE.has(d.tipo) ? `<button class="dg-rec" type="button" aria-pressed="false">${ic("eye", 15)} <span>Ponte a prueba</span></button>` : ""}</figcaption>
      <div class="dg-body">${R[d.tipo](d)}</div>
      ${OCULTABLE.has(d.tipo) ? `<p class="dg-hint">Intenta recordar cada dato y tócalo para comprobarlo.</p>` : ""}</figure>`;
  }
  // Si alguna rama del mapa mental se solapa con otra o con el centro, aumenta la altura hasta separarlas
  function ajustarMapa(m) {
    if (!m.offsetParent) return;
    m.style.height = "";
    const solapa = () => { const r = [...m.querySelectorAll(".mm-rama, .mm-centro")].map(c => c.getBoundingClientRect());
      for (let i = 0; i < r.length; i++) for (let j = i + 1; j < r.length; j++) { const a = r[i], b = r[j]; if (a.left < b.right - 2 && b.left < a.right - 2 && a.top < b.bottom + 6 && b.top < a.bottom + 6) return true; } return false; };
    for (let k = 0; k < 14 && solapa(); k++) m.style.height = (m.offsetHeight + 40) + "px";
  }
  addEventListener("resize", () => document.querySelectorAll(".mm-radial").forEach(ajustarMapa));
  function activar(raiz) {
    const io = new IntersectionObserver(es => es.forEach(e => { if (e.isIntersecting) { e.target.classList.add("in"); io.unobserve(e.target); } }), { threshold: .2 });
    raiz.querySelectorAll(".dg:not([data-on])").forEach(fig => {
      fig.dataset.on = "1"; io.observe(fig);
      fig.querySelectorAll(".tr").forEach(pintarArbol);
      fig.querySelectorAll(".mm-radial").forEach(m => { ajustarMapa(m); setTimeout(() => ajustarMapa(m), 700); });
      fig.querySelectorAll(".sc").forEach(activarEscala);
      const rec = fig.querySelector(".dg-rec");
      if (rec) rec.addEventListener("click", () => {
        const on = !fig.classList.contains("recall"); fig.classList.toggle("recall", on);
        fig.querySelectorAll(".dg-hide").forEach(h => h.classList.remove("shown"));
        rec.setAttribute("aria-pressed", on); rec.querySelector("span").textContent = on ? "Mostrar todo" : "Ponte a prueba";
      });
      fig.addEventListener("click", e => { const h = e.target.closest(".dg-hide"); if (h && fig.classList.contains("recall")) h.classList.add("shown"); });
      fig.querySelectorAll(".mm-rama").forEach(r => {
        const on = v => fig.querySelectorAll(`.mm-radial path`).forEach(p => p.classList.toggle("dim", v && p.dataset.r !== r.dataset.r));
        r.addEventListener("mouseenter", () => { on(true); fig.classList.add("focus"); r.classList.add("hot"); });
        r.addEventListener("mouseleave", () => { on(false); fig.classList.remove("focus"); r.classList.remove("hot"); });
      });
    });
  }
  window.DIAGRAMA = { html, activar, tipos: Object.keys(R), nombre: t => (NOMBRE[t] || [""])[0] };
})();
