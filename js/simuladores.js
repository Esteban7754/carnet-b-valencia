/* Simuladores guiados: Entiende → Experimenta (misiones) → Demuéstralo (reto).
   Cada simulador: { id, titulo, tema, lecciones, descripcion, icono, aprende[3], tareas[], reto[], escena(el, api) → cleanup }
   api.hecho(idTarea) marca una misión; api.narrar(html, tono) actualiza el narrador ("ok" | "ko" | undefined). */
(function () {
  "use strict";
  const esc = s => String(s == null ? "" : s).replace(/[&<>"']/g, c => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));
  const fmt = s => esc(s).replace(/\*\*(.+?)\*\*/g, "<strong>$1</strong>");
  const num = (n, d = 0) => n.toFixed(d).replace(".", ",");
  const P = window.ICONS ? window.ICONS.PICTO : {};

  function loop(fn) {
    let id, last = performance.now(), on = true;
    const t = now => { if (!on) return; const dt = Math.min(.05, (now - last) / 1000); last = now; fn(dt, now); if (on) id = requestAnimationFrame(t); };
    id = requestAnimationFrame(t);
    return () => { on = false; cancelAnimationFrame(id); };
  }
  function rango(input, cb) {
    const upd = () => { const p = (input.value - input.min) / (input.max - input.min) * 100; input.style.setProperty("--p", p + "%"); cb && cb(+input.value); };
    input.addEventListener("input", upd); upd();
  }
  function seg(el, cb) {
    el.addEventListener("click", e => { const b = e.target.closest("button"); if (!b) return; el.querySelectorAll("button").forEach(x => x.classList.toggle("on", x === b)); cb(b.dataset.v); });
  }

  // Coche visto desde arriba (frente hacia +x)
  const cocheArriba = (color, extra = "") => `<g ${extra}>
    <rect x="3" y="-10.6" width="3.2" height="2.2" rx="1" fill="${color}"/><rect x="3" y="8.4" width="3.2" height="2.2" rx="1" fill="${color}"/>
    <rect x="-18" y="-9" width="36" height="18" rx="6" fill="${color}"/>
    <path d="M4-7q6 1 7 7-1 6-7 7z" fill="#1c2633" opacity=".85"/>
    <path d="M-10-7q-3 7 0 14l3-1q-2-6 0-12z" fill="#1c2633" opacity=".7"/>
    <rect x="-6" y="-6.5" width="9" height="13" rx="2" fill="#fff" opacity=".16"/>
    <rect x="15.5" y="-7.5" width="2.4" height="3.6" rx="1" fill="#fff4c7"/><rect x="15.5" y="3.9" width="2.4" height="3.6" rx="1" fill="#fff4c7"/>
    <rect x="-18.3" y="-7.5" width="2" height="3.4" fill="#d9493b"/><rect x="-18.3" y="4.1" width="2" height="3.4" fill="#d9493b"/>
    <circle class="ind-l" cx="16" cy="-8.4" r="2.2" fill="#ffb21f" opacity="0"/><circle class="ind-l" cx="-16" cy="-8.4" r="2.2" fill="#ffb21f" opacity="0"/>
    <circle class="ind-r" cx="16" cy="8.4" r="2.2" fill="#ffb21f" opacity="0"/><circle class="ind-r" cx="-16" cy="8.4" r="2.2" fill="#ffb21f" opacity="0"/></g>`;
  // Coche de perfil (mira a la derecha; origen entre las ruedas, a ras de suelo)
  const rueda = (x, cls) => `<g transform="translate(${x},-9)"><g class="${cls || ""}"><circle r="9" fill="#202329"/><circle r="4.2" fill="#a7adb6"/><path d="M0-8v4M0 4v4M-8 0h4M4 0h4" stroke="#a7adb6" stroke-width="1.6"/></g></g>`;
  const cochePerfil = (color, wcls) => `<g>
    <path d="M-44-11q-1-11 8-13l14-2 10-12q4-4 12-4h18q6 0 10 5l8 10 6 2q5 2 4 11v5q0 4-4 4h-82q-4 0-4-6z" fill="${color}"/>
    <path d="M-9-35q3-3 9-3h8v11h-24zM11-38h7q4 0 7 4l6 7H11z" fill="#d6e6f3"/>
    <path d="M-44-15h90" stroke="#000" stroke-opacity=".12" stroke-width="2"/>
    <rect x="41" y="-21" width="5" height="4" rx="1.5" fill="#fff1b8"/><rect x="-45.5" y="-21" width="4" height="5" rx="1" fill="#d84a3c"/>
    ${rueda(-27, wcls)}${rueda(27, wcls)}</g>`;
  const persona = (color) => `<g fill="${color}" stroke="${color}">${P.peaton || ""}</g>`;

  const S = [];

  /* 1 ─────────────────────────── DISTANCIA DE DETENCIÓN */
  S.push({
    id: "detencion", titulo: "¿Te da tiempo a frenar?", tema: "velocidad", icono: "gauge", lecciones: ["velocidad-distancias-parada"],
    descripcion: "Una persona cruza delante de tu coche. Elige la velocidad y el estado del asfalto, frena y comprueba si paras a tiempo.",
    aprende: [
      { t: "Primero reaccionas", d: "Desde que ves el peligro hasta que pisas el freno pasa **cerca de 1 segundo**. Durante ese tiempo el coche sigue a la misma velocidad: es la **distancia de reacción**." },
      { t: "Después frenas", d: "Desde que pisas el freno hasta que paras recorres la **distancia de frenado**. Si vas el doble de rápido, necesitas **cuatro veces** más metros." },
      { t: "Reacción + frenado = detención", d: "Truco del temario: **reacción ≈ 3 × (velocidad ÷ 10)** y **frenado en seco ≈ (velocidad ÷ 10)²**. En mojado, el frenado puede **duplicarse**." }
    ],
    tareas: [
      { id: "seco50", texto: "Frena a 50 km/h con el asfalto seco" },
      { id: "mojado", texto: "Repite la frenada con el asfalto mojado" },
      { id: "nollega", texto: "Encuentra una velocidad a la que NO te da tiempo a parar" },
      { id: "corrige", texto: "Sin mover a la persona, baja la velocidad hasta parar a tiempo" }
    ],
    reto: [
      { pregunta: "A 100 km/h y con el asfalto seco, ¿cuántos metros necesitas aproximadamente para detenerte?", opciones: ["Unos 60 metros", "Unos 130 metros", "Unos 250 metros"], correcta: 1, explicacion: "Reacción ≈ 30 m y frenado ≈ 100 m: en total, unos 130 metros." },
      { pregunta: "Si pasas de 50 a 100 km/h, la distancia de frenado…", opciones: ["Se duplica", "Se multiplica aproximadamente por cuatro", "Apenas cambia"], correcta: 1, explicacion: "El frenado crece con el cuadrado de la velocidad: el doble de velocidad son unas cuatro veces más metros." },
      { pregunta: "Con el asfalto mojado, la distancia de frenado…", opciones: ["Puede llegar a duplicarse", "Se reduce porque el coche desliza", "Es la misma que en seco"], correcta: 0, explicacion: "El agua reduce la adherencia de los neumáticos, y el frenado puede llegar a ser el doble." }
    ],
    escena(el, api) {
      el.innerHTML = `
        <svg viewBox="0 0 800 270" class="stage-svg">
          <defs><linearGradient id="sky1" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#cfe0ee"/><stop offset="1" stop-color="#eef1ea"/></linearGradient></defs>
          <rect width="800" height="270" fill="url(#sky1)"/>
          <path d="M0 140 Q120 92 260 128 T540 118 T800 126 V160 H0Z" fill="#b9cbb0"/>
          <path d="M0 150 Q160 120 340 146 T800 140 V160 H0Z" fill="#9fb795"/>
          <rect y="158" width="800" height="62" style="fill:var(--road)"/>
          <line id="dl-lane" x1="0" y1="189" x2="800" y2="189" style="stroke:var(--road-line)" stroke-width="3" stroke-dasharray="26 22"/>
          <rect y="220" width="800" height="50" style="fill:var(--surface)"/>
          <g id="dl-scale"></g>
          <rect id="dl-zr" x="40" y="226" width="0" height="10" rx="3" fill="#4f63a8"/>
          <rect id="dl-zf" x="40" y="226" width="0" height="10" rx="3" fill="#c03a31"/>
          <g id="dl-ped"><g transform="translate(0,170) scale(1.1)">${persona("#1f3a5f")}</g><path d="M-14 205h28" stroke="#fff" stroke-width="4" stroke-dasharray="4 3"/></g>
          <g id="dl-car">${cochePerfil("#d4532a", "dl-w")}</g>
          <g id="dl-rain" style="display:none">${Array.from({ length: 70 }, (_, i) => `<line x1="${(i * 61) % 800}" y1="${(i * 37) % 160}" x2="${(i * 61) % 800 - 5}" y2="${(i * 37) % 160 + 14}" stroke="#6b8cb3" stroke-width="1.6" opacity=".55"/>`).join("")}</g>
        </svg>
        <div class="controls">
          <div class="ctrl"><div class="ctrl-label">Velocidad <b><span id="dl-v">90</span> km/h</b></div><input type="range" id="dl-vi" min="30" max="130" step="10" value="90" aria-label="Velocidad"></div>
          <div class="ctrl"><div class="ctrl-label">La persona aparece a <b><span id="dl-o">80</span> m</b></div><input type="range" id="dl-oi" min="20" max="200" step="5" value="80" aria-label="Distancia a la persona"></div>
          <div class="seg" id="dl-f"><button class="on" data-v="1">Seco</button><button data-v="2">Mojado</button></div>
          <button class="btn btn-primary" id="dl-go">Frenar</button>
        </div>
        <div class="readout" id="dl-out"></div>`;
      const $ = s => el.querySelector(s);
      let f = 1, stop = null, fallo = null;
      const X0 = 70, W = 700, MAXM = 400, px = m => X0 + m / MAXM * W;
      $("#dl-scale").innerHTML = [0, 50, 100, 150, 200, 250, 300, 350, 400].map(m => `<line x1="${px(m)}" y1="240" x2="${px(m)}" y2="246" style="stroke:var(--muted)"/><text x="${px(m)}" y="260" font-size="11" text-anchor="middle" style="fill:var(--muted)">${m} m</text>`).join("");
      const calc = () => { const v = +$("#dl-vi").value; const r = 3 * v / 10, fr = Math.pow(v / 10, 2) * f; return { v, r, fr, d: r + fr, o: +$("#dl-oi").value }; };
      const pos = (m, wheelAng) => { $("#dl-car").setAttribute("transform", `translate(${px(m) - 46},${210})`); el.querySelectorAll(".dl-w").forEach(w => w.setAttribute("transform", `rotate(${wheelAng})`)); };
      const quieto = () => {
        stop && stop(); stop = null; const c = calc();
        $("#dl-v").textContent = c.v; $("#dl-o").textContent = c.o;
        $("#dl-ped").setAttribute("transform", `translate(${px(c.o)},0)`);
        pos(0, 0); $("#dl-zr").setAttribute("width", 0); $("#dl-zf").setAttribute("width", 0);
        $("#dl-out").innerHTML = `<span><i class="sw" style="background:#4f63a8"></i>Reacción ≈ ${Math.round(c.r)} m</span><span><i class="sw" style="background:#c03a31"></i>Frenado ≈ ${Math.round(c.fr)} m</span><span>Detención ≈ ${Math.round(c.d)} m</span>`;
        api.narrar(`Vas a <b>${c.v} km/h</b> con el asfalto <b>${f === 1 ? "seco" : "mojado"}</b> y una persona cruza a <b>${c.o} m</b>. Pulsa <b>Frenar</b>.`);
      };
      rango($("#dl-vi"), quieto); rango($("#dl-oi"), quieto);
      seg($("#dl-f"), v => { f = +v; $("#dl-rain").style.display = f === 2 ? "" : "none"; quieto(); });
      $("#dl-go").addEventListener("click", () => {
        stop && stop(); const c = calc(); const vms = c.v / 3.6; const tb = 2 * c.fr / vms; const tr = c.r / vms;
        const k = (tr + tb) / 3.6; // cámara lenta: ~3,6 s en total
        let t = 0, ang = 0, fase = 0;
        api.narrar(`<b>¡Peligro!</b> Tu cerebro tarda en reaccionar: el coche sigue a ${c.v} km/h durante unos ${Math.round(c.r)} m.`);
        stop = loop(dt => {
          t += dt * k;
          let m;
          if (t < tr) m = vms * t;
          else { const tt = Math.min(tb, t - tr); m = c.r + vms * tt - (vms / tb) * tt * tt / 2; if (fase === 0) { fase = 1; api.narrar(`<b>Pisas el freno.</b> Ahora el coche va perdiendo velocidad…`); } }
          ang += dt * k * vms * 12;
          pos(m, ang);
          $("#dl-zr").setAttribute("width", px(Math.min(m, c.r)) - X0);
          $("#dl-zf").setAttribute("x", px(c.r)); $("#dl-zf").setAttribute("width", Math.max(0, px(m) - px(c.r)));
          $("#dl-lane").setAttribute("stroke-dashoffset", -m * 1.75);
          if (t >= tr + tb) {
            stop(); stop = null;
            const llega = c.d <= c.o;
            if (llega) api.narrar(`<b>Paras a tiempo.</b> Necesitas ${Math.round(c.d)} m y la persona estaba a ${c.o} m: te sobran ${Math.round(c.o - c.d)} m.`, "ok");
            else { api.narrar(`<b>No te da tiempo a parar.</b> Necesitas ${Math.round(c.d)} m, pero la persona estaba a ${c.o} m. Prueba a bajar la velocidad.`, "ko"); el.closest(".stage").classList.add("shake"); setTimeout(() => el.closest(".stage") && el.closest(".stage").classList.remove("shake"), 500); }
            if (c.v === 50 && f === 1) api.hecho("seco50");
            if (f === 2) api.hecho("mojado");
            if (!llega) { api.hecho("nollega"); fallo = { o: c.o, v: c.v }; }
            if (llega && fallo && fallo.o === c.o && c.v < fallo.v) api.hecho("corrige");
          }
        });
      });
      quieto();
      return () => stop && stop();
    }
  });

  /* 2 ─────────────────────────── REGLA DE LOS 2 SEGUNDOS */
  S.push({
    id: "dos-segundos", titulo: "La regla de los 2 segundos", tema: "velocidad", icono: "timer", lecciones: ["velocidad-distancia-seguridad"],
    descripcion: "Mira cuánto tarda tu coche en llegar a la farola que acaba de pasar el de delante. Así sabrás si vas demasiado cerca.",
    aprende: [
      { t: "Mide en tiempo, no en metros", d: "Fíjate en un punto fijo, como una farola. Cuando el coche de delante lo pase, cuenta **«mil uno, mil dos»**." },
      { t: "2 segundos como mínimo", d: "Si llegas al punto antes de terminar de contar, vas **demasiado cerca**. Con el asfalto seco, deja **al menos 2 segundos**." },
      { t: "Con lluvia, 3 o más", d: "Con lluvia o el firme mojado frenas peor: deja **3 segundos o más**." }
    ],
    tareas: [
      { id: "dos", texto: "Ajusta la separación a 2 segundos o más con el asfalto seco" },
      { id: "lluvia", texto: "Activa la lluvia y deja 3 segundos o más" },
      { id: "mide", texto: "Pulsa «¡Ahora!» justo cuando tu coche pase la farola" }
    ],
    reto: [
      { pregunta: "Con buena visibilidad y el asfalto seco, ¿qué separación mínima se recomienda con el vehículo de delante?", opciones: ["1 segundo", "2 segundos", "5 segundos"], correcta: 1, explicacion: "La referencia es de al menos 2 segundos en condiciones normales." },
      { pregunta: "Si llueve, la separación debería ser…", opciones: ["La misma, 2 segundos", "Menor, porque vas más despacio", "De 3 segundos o más"], correcta: 2, explicacion: "En mojado la frenada es más larga, así que hay que dejar más margen." },
      { pregunta: "A 90 km/h, 2 segundos de separación equivalen aproximadamente a…", opciones: ["25 metros", "50 metros", "90 metros"], correcta: 1, explicacion: "A 90 km/h recorres unos 25 metros por segundo: en 2 segundos, unos 50 metros." }
    ],
    escena(el, api) {
      el.innerHTML = `
        <svg viewBox="0 0 800 220" class="stage-svg">
          <rect width="800" height="220" fill="#dfe8ee"/>
          <path d="M0 70 Q200 30 400 64 T800 58 V90 H0Z" fill="#b9cbb0"/>
          <rect y="88" width="800" height="100" style="fill:var(--road)"/>
          <line id="ds-lane" x1="0" y1="138" x2="800" y2="138" style="stroke:var(--road-line)" stroke-width="3" stroke-dasharray="30 26"/>
          <rect y="188" width="800" height="32" fill="#a9bea0"/>
          <g id="ds-post"><rect x="-3" y="20" width="6" height="168" fill="#7d838c"/><path d="M0 22q0-8 14-8h8" fill="none" stroke="#7d838c" stroke-width="5"/><rect x="18" y="12" width="14" height="7" rx="3" fill="#ffe08a"/></g>
          <g id="ds-gap"><line id="ds-gl" y1="172" y2="172" stroke-width="3" stroke-linecap="round"/><text id="ds-gt" y="166" font-size="13" font-weight="700" text-anchor="middle"></text></g>
          <g id="ds-lead" transform="translate(600,150) scale(1.5)">${cocheArriba("#1f3a5f")}</g>
          <g id="ds-me" transform="translate(150,150) scale(1.5)">${cocheArriba("#d4532a")}</g>
          <g id="ds-clock" opacity="0"><rect x="-44" y="-34" width="88" height="34" rx="10" fill="#1d1b18"/><text id="ds-ct" y="-11" font-size="18" font-weight="800" fill="#fff" text-anchor="middle">0,0 s</text></g>
          <g id="ds-rain" style="display:none">${Array.from({ length: 60 }, (_, i) => `<line x1="${(i * 59) % 800}" y1="${(i * 41) % 220}" x2="${(i * 59) % 800 - 5}" y2="${(i * 41) % 220 + 14}" stroke="#6b8cb3" stroke-width="1.6" opacity=".55"/>`).join("")}</g>
        </svg>
        <div class="controls">
          <div class="ctrl"><div class="ctrl-label">Velocidad <b><span id="ds-v">90</span> km/h</b></div><input type="range" id="ds-vi" min="30" max="120" step="10" value="90" aria-label="Velocidad"></div>
          <div class="ctrl"><div class="ctrl-label">Separación <b><span id="ds-s">1,0</span> s</b></div><input type="range" id="ds-si" min="0.5" max="4" step="0.5" value="1" aria-label="Separación en segundos"></div>
          <div class="seg" id="ds-f"><button class="on" data-v="2">Seco</button><button data-v="3">Lluvia</button></div>
          <button class="btn btn-ink" id="ds-now">¡Ahora!</button>
        </div>
        <div class="readout" id="ds-out"></div>`;
      const $ = s => el.querySelector(s);
      let minS = 2, postX = 820, tPaso = null, medido = false;
      const PXM = 3.4;
      const datos = () => { const v = +$("#ds-vi").value, s = +$("#ds-si").value; return { v, s, m: v / 3.6 * s }; };
      const upd = () => {
        const d = datos(); $("#ds-v").textContent = d.v; $("#ds-s").textContent = num(d.s, 1);
        const ok = d.s >= minS; const col = ok ? "#2c8a5c" : "#c03a31";
        const gapPx = Math.min(560, d.m * PXM); const xMe = 150, xLead = xMe + 54 + gapPx;
        $("#ds-lead").setAttribute("transform", `translate(${xLead},150) scale(1.5)`);
        $("#ds-gl").setAttribute("x1", xMe + 28); $("#ds-gl").setAttribute("x2", xLead - 28); $("#ds-gl").setAttribute("stroke", col);
        $("#ds-gt").setAttribute("x", (xMe + xLead) / 2); $("#ds-gt").setAttribute("fill", col); $("#ds-gt").textContent = Math.round(d.m) + " m";
        $("#ds-out").innerHTML = `<span>Separación: ${Math.round(d.m)} m</span><span>Mínimo ${minS} s = ${Math.round(d.v / 3.6 * minS)} m</span>`;
        if (ok) { api.narrar(`<b>Distancia segura.</b> Con ${num(d.s, 1)} s tienes margen para reaccionar si el de delante frena.`, "ok"); if (minS === 2) api.hecho("dos"); else api.hecho("lluvia"); }
        else api.narrar(`<b>Demasiado cerca.</b> Con ${num(d.s, 1)} s, si el coche de delante frena de golpe no te dará tiempo. Necesitas ${minS} s o más.`, "ko");
        return { xMe, xLead };
      };
      rango($("#ds-vi"), upd); rango($("#ds-si"), upd);
      seg($("#ds-f"), v => { minS = +v; $("#ds-rain").style.display = minS === 3 ? "" : "none"; upd(); });
      let pos = upd(), dash = 0;
      $("#ds-now").addEventListener("click", () => {
        if (tPaso == null) { api.narrar("Espera a que la farola pase al coche azul y entonces cuenta. Pulsa cuando llegue al tuyo."); return; }
        const t = (performance.now() - tPaso) / 1000, real = datos().s, err = Math.abs(t - real);
        if (err < .45) { api.narrar(`<b>¡Bien medido!</b> Has contado ${num(t, 1)} s y la separación real era de ${num(real, 1)} s.`, "ok"); api.hecho("mide"); }
        else api.narrar(`Has pulsado a los ${num(t, 1)} s, pero la separación real era de ${num(real, 1)} s. Inténtalo con la siguiente farola.`, "ko");
        medido = true;
      });
      const stop = loop(dt => {
        pos = { xMe: 150, xLead: +$("#ds-lead").getAttribute("transform").match(/translate\(([\d.]+)/)[1] };
        const v = datos().v / 3.6 * PXM;
        postX -= v * dt; dash = (dash + v * dt) % 56;
        if (postX < -40) { postX = 840; tPaso = null; medido = false; $("#ds-clock").setAttribute("opacity", 0); }
        if (tPaso == null && postX <= pos.xLead + 27 && postX > pos.xMe) tPaso = performance.now();
        if (tPaso != null) {
          const t = (performance.now() - tPaso) / 1000;
          $("#ds-clock").setAttribute("opacity", 1); $("#ds-clock").setAttribute("transform", `translate(${Math.max(60, postX)},60)`);
          if (postX > pos.xMe + 27) $("#ds-ct").textContent = num(t, 1) + " s";
        }
        $("#ds-post").setAttribute("transform", `translate(${postX},0)`);
        $("#ds-lane").setAttribute("stroke-dashoffset", dash);
      });
      return stop;
    }
  });

  /* 3 ─────────────────────────── SEMÁFORO */
  const ESTADOS = {
    verde: { t: "Verde", luz: [0, 0, 1], d: "Puedes pasar, pero **solo si no te vas a quedar parado dentro del cruce**. Verde no significa «pasa sí o sí».", a: "pasa" },
    ambar: { t: "Ámbar fijo", luz: [0, 1, 0], d: "Funciona **como el rojo: tienes que parar**. Solo puedes seguir si estás tan cerca que no puedes frenar con seguridad.", a: "para" },
    rojo: { t: "Rojo", luz: [1, 0, 0], d: "**Prohibido pasar.** Te detienes antes de la línea de detención. Los peatones cruzan.", a: "para" },
    ambarInt: { t: "Ámbar intermitente", luz: [0, 1, 0], blink: 1, d: "Puedes pasar **con precaución** y respetando las prioridades, como si no hubiera semáforo. Aquí el coche que viene por tu derecha pasa primero.", a: "cede" },
    rojoInt: { t: "Rojo intermitente", luz: [1, 0, 0], blink: 1, d: "**Prohibido pasar.** Suele estar en pasos a nivel, puentes móviles o salidas de emergencias.", a: "para" },
    flecha: { t: "Rojo + flecha verde", luz: [1, 0, 0], flecha: 1, d: "Puedes **girar solo hacia donde indica la flecha**, cediendo el paso a los peatones que cruzan.", a: "gira" }
  };
  S.push({
    id: "semaforo", titulo: "El cruce con semáforo", tema: "senales", icono: "triangle", lecciones: ["senales-semaforos"],
    descripcion: "Cambia la luz del semáforo y observa qué tiene que hacer el coche en cada caso.",
    aprende: [
      { t: "Ámbar fijo = parar", d: "Muchos creen que el ámbar es «acelera». En realidad **obliga a detenerse**, salvo que ya no puedas frenar con seguridad." },
      { t: "Intermitente = precaución", d: "El **ámbar intermitente** te deja pasar con cuidado, respetando la prioridad. El **rojo intermitente** prohíbe pasar." },
      { t: "Las flechas mandan", d: "Una **flecha verde** encendida con el rojo te permite girar solo en esa dirección, cediendo el paso a los peatones." }
    ],
    tareas: [
      { id: "ambar", texto: "Mira qué pasa con el ámbar fijo" },
      { id: "ambarInt", texto: "Prueba el ámbar intermitente" },
      { id: "flecha", texto: "Prueba el rojo con flecha verde" },
      { id: "rojoInt", texto: "Descubre qué significa el rojo intermitente" }
    ],
    reto: [
      { pregunta: "Llegas a un semáforo que pasa a ámbar fijo y puedes detenerte con seguridad. ¿Qué haces?", opciones: ["Acelero para pasar antes del rojo", "Me detengo", "Paso con precaución"], correcta: 1, explicacion: "El ámbar fijo obliga a detenerse si puedes hacerlo con seguridad." },
      { pregunta: "Un semáforo con luz ámbar intermitente indica que…", opciones: ["Puedes pasar con precaución, respetando la prioridad", "Debes detenerte siempre", "El semáforo está averiado y tienes prioridad"], correcta: 0, explicacion: "Se circula con especial precaución y se aplican las normas de prioridad." },
      { pregunta: "Con el semáforo en rojo y una flecha verde hacia la derecha…", opciones: ["Puedes seguir recto con precaución", "Puedes girar a la derecha cediendo el paso a los peatones", "No puedes moverte"], correcta: 1, explicacion: "La flecha verde permite el movimiento que indica, con precaución y cediendo el paso a los peatones." }
    ],
    escena(el, api) {
      el.innerHTML = `
        <div style="display:flex;gap:16px;flex-wrap:wrap;align-items:flex-start">
        <svg viewBox="0 0 90 230" style="width:76px;flex:none">
          <rect x="26" y="200" width="38" height="30" rx="4" fill="#4a4d55"/><rect x="10" y="5" width="70" height="200" rx="18" fill="#26282e"/>
          <circle id="sm-0" cx="45" cy="42" r="23"/><circle id="sm-1" cx="45" cy="105" r="23"/><circle id="sm-2" cx="45" cy="168" r="23"/>
          <path id="sm-ar" d="M33 168h20M45 156l12 12-12 12" stroke="#0b3d1f" stroke-width="5" fill="none" stroke-linecap="round" opacity="0"/>
        </svg>
        <svg viewBox="0 0 600 380" class="stage-svg" style="flex:1;min-width:260px">
          <rect width="600" height="380" fill="#a9bea0"/>
          <rect y="150" width="600" height="90" style="fill:var(--road)"/><rect x="330" width="90" height="380" style="fill:var(--road)"/>
          <path d="M0 195h320M430 195h170" style="stroke:var(--road-line)" stroke-width="2.5" stroke-dasharray="22 18"/>
          <path d="M375 0v140M375 250v130" style="stroke:var(--road-line)" stroke-width="2.5" stroke-dasharray="22 18"/>
          <g fill="#f4efe4">${Array.from({ length: 6 }, (_, i) => `<rect x="${292}" y="${154 + i * 14}" width="26" height="8"/>`).join("")}${Array.from({ length: 6 }, (_, i) => `<rect x="${334 + i * 14}" y="${250}" width="8" height="26"/>`).join("")}</g>
          <rect x="283" y="196" width="5" height="44" fill="#fff"/>
          <g id="sm-ped" opacity="0"><g transform="translate(305,0) scale(.75)" fill="#1f3a5f" stroke="#1f3a5f">${P.peaton || ""}</g></g>
          <g id="sm-cross">${cocheArriba("#1f3a5f")}</g>
          <g id="sm-car">${cocheArriba("#d4532a")}</g>
        </svg></div>
        <div class="chips" id="sm-st" style="margin-top:14px">${Object.entries(ESTADOS).map(([k, e]) => `<button class="chip" data-k="${k}">${e.t}</button>`).join("")}</div>`;
      const $ = s => el.querySelector(s);
      let anim = null;
      const set = k => {
        const e = ESTADOS[k];
        el.querySelectorAll("#sm-st .chip").forEach(c => c.classList.toggle("on", c.dataset.k === k));
        const cols = ["#e5483b", "#f2b425", "#34a56a"];
        [0, 1, 2].forEach(i => { const c = $("#sm-" + i); const on = e.luz[i] || (e.flecha && i === 2); c.setAttribute("fill", on ? cols[i] : "#45484f"); c.style.filter = on ? `drop-shadow(0 0 10px ${cols[i]})` : ""; });
        $("#sm-ar").setAttribute("opacity", e.flecha ? 1 : 0);
        api.narrar(`<b>${e.t}.</b> ${fmt(e.d)}`, e.a === "para" ? "ko" : e.a === "pasa" ? "ok" : undefined);
        if (api) api.hecho(k);
        anim && anim();
        let x = -30, y = 218, ang = 0, t = 0, cy = -40, pedY = 140;
        anim = loop(dt => {
          t += dt;
          if (e.blink) [0, 1, 2].forEach(i => { if (e.luz[i]) $("#sm-" + i).setAttribute("fill", Math.floor(t * 2) % 2 ? "#45484f" : cols[i]); });
          // coche transversal (baja por la calle vertical) en rojo/intermitente
          const cruzaOtro = e.a === "para" && k === "rojo" || e.a === "cede";
          if (cruzaOtro) { cy += 110 * dt; if (cy > 420) cy = -40; } else cy = -40;
          $("#sm-cross").setAttribute("transform", `translate(352,${cy}) rotate(90) scale(1.4)`);
          // peatones en rojo o con flecha
          const peat = (k === "rojo" || e.flecha);
          $("#sm-ped").setAttribute("opacity", peat ? 1 : 0);
          if (peat) { pedY += 22 * dt; if (pedY > 250) pedY = 140; $("#sm-ped").setAttribute("transform", `translate(0,${pedY - 140})`); }
          if (e.a === "pasa") x += 150 * dt;
          else if (e.a === "para") x += Math.max(0, 258 - x) * 2.4 * dt;
          else if (e.a === "cede") { const espera = cy > 120 && cy < 300; if (!(espera && x > 230 && x < 262)) x += (x < 240 ? 110 : 70) * dt; }
          else if (e.a === "gira") {
            const pasoPeaton = pedY > 150 && pedY < 245;
            if (x < 258) x += 110 * dt;
            else if (x < 300 && pasoPeaton && ang === 0) { /* espera a los peatones */ }
            else { if (ang < 90) { ang = Math.min(90, ang + 95 * dt); x += 70 * dt * Math.cos(ang * Math.PI / 180); y += 70 * dt * Math.sin(ang * Math.PI / 180); } else y += 110 * dt; }
          }
          if (x > 640 || y > 420) { x = -30; y = 218; ang = 0; }
          $("#sm-car").setAttribute("transform", `translate(${x},${y}) rotate(${ang}) scale(1.4)`);
          el.querySelectorAll("#sm-car .ind-r").forEach(c => c.setAttribute("opacity", e.a === "gira" && Math.floor(t * 3) % 2 ? 1 : 0));
        });
      };
      el.querySelectorAll("#sm-st .chip").forEach(c => c.addEventListener("click", () => set(c.dataset.k)));
      set("verde");
      return () => anim && anim();
    }
  });

  /* 4 ─────────────────────────── GLORIETA */
  S.push({
    id: "glorieta", titulo: "Cómo circular por una glorieta", tema: "prioridad", icono: "rotate", lecciones: ["prioridad-glorietas", "via-intersecciones"],
    descripcion: "Elige una salida y avanza paso a paso: a quién ceder el paso, qué carril usar, cuándo poner el intermitente y cómo salir.",
    aprende: [
      { t: "Dentro manda quien ya circula", d: "Los vehículos que **ya están en la glorieta** tienen prioridad. Antes de entrar, **cedes el paso** mirando a tu izquierda." },
      { t: "Carril según tu salida", d: "Para la primera salida, ve por el **carril exterior**. Si vas a una salida lejana, puedes usar el **interior**." },
      { t: "Se sale desde la derecha", d: "Pon el **intermitente derecho** al pasar la salida anterior a la tuya y **sal siempre desde el carril exterior**." }
    ],
    tareas: [
      { id: "s1", texto: "Toma la 1ª salida" },
      { id: "s3", texto: "Toma la 3ª salida (fíjate en el cambio de carril)" },
      { id: "s4", texto: "Haz un cambio de sentido" }
    ],
    reto: [
      { pregunta: "Vas a entrar en una glorieta y un coche circula ya por ella. ¿Quién tiene prioridad?", opciones: ["Yo, porque vengo por su derecha", "El que ya circula por la glorieta", "El que vaya más rápido"], correcta: 1, explicacion: "Salvo señalización distinta, tiene prioridad quien ya circula dentro de la glorieta." },
      { pregunta: "¿Desde qué carril debes abandonar una glorieta?", opciones: ["Desde el carril exterior (derecho)", "Desde el carril interior", "Desde cualquiera, con el intermitente puesto"], correcta: 0, explicacion: "Hay que situarse con antelación en el carril exterior para salir." },
      { pregunta: "¿Cuándo pones el intermitente derecho para salir?", opciones: ["Al entrar en la glorieta", "Antes de llegar a tu salida", "No hace falta en glorietas"], correcta: 1, explicacion: "Se señaliza la salida con antelación, normalmente al pasar la salida anterior a la tuya." }
    ],
    escena(el, api) {
      const C = 200, RO = 116, RI = 90;
      const brazo = rot => `<g transform="rotate(${rot} 200 200)"><rect x="166" y="300" width="68" height="110" style="fill:var(--road)"/><path d="M200 312v90" style="stroke:var(--road-line)" stroke-width="2.5" stroke-dasharray="12 10"/><path d="M170 318h28" stroke="#fff" stroke-width="3" stroke-dasharray="5 4"/></g>`;
      el.innerHTML = `
        <div style="display:flex;gap:18px;flex-wrap:wrap;align-items:flex-start">
        <svg viewBox="0 0 400 400" class="stage-svg" style="width:min(100%,400px);flex:none">
          <rect width="400" height="400" fill="#a9bea0"/>
          ${[0, 90, 180, 270].map(brazo).join("")}
          <circle cx="200" cy="200" r="132" style="fill:var(--road)"/>
          <circle cx="200" cy="200" r="103" fill="none" style="stroke:var(--road-line)" stroke-width="2" stroke-dasharray="12 10"/>
          <circle cx="200" cy="200" r="76" fill="#8fae86" stroke="#f4efe4" stroke-width="4"/>
          <circle cx="200" cy="200" r="40" fill="#7c9d72"/><circle cx="188" cy="192" r="15" fill="#6a8c61"/><circle cx="212" cy="206" r="13" fill="#6a8c61"/>
          <g font-size="13" font-weight="800" fill="#fff" text-anchor="middle" font-family="Inter,Arial"><text x="378" y="224">1ª</text><text x="226" y="22">2ª</text><text x="22" y="190">3ª</text></g>
          <g id="gl-o1">${cocheArriba("#1f3a5f")}</g><g id="gl-o2">${cocheArriba("#6b7b5e")}</g>
          <g id="gl-me">${cocheArriba("#d4532a")}</g>
        </svg>
        <div style="flex:1;min-width:240px">
          <div class="field-label" style="margin-top:0">1. Elige tu salida</div>
          <div class="chips" id="gl-sal"><button class="chip" data-s="1">1ª · derecha</button><button class="chip" data-s="2">2ª · recto</button><button class="chip" data-s="3">3ª · izquierda</button><button class="chip" data-s="4">Cambio de sentido</button></div>
          <div class="field-label">2. Avanza a tu ritmo</div>
          <div class="row"><button class="btn btn-primary" id="gl-next" disabled>Siguiente paso</button><button class="btn btn-ghost" id="gl-all" disabled>Ver seguido</button></div>
          <div class="readout" id="gl-out"></div>
        </div></div>`;
      const $ = s => el.querySelector(s);
      const Pt = (r, deg) => [C + r * Math.cos(deg * Math.PI / 180), C - r * Math.sin(deg * Math.PI / 180)];
      let a1 = 40, a2 = 220, stopO, stopMe;
      stopO = loop(dt => {
        a1 = (a1 + 42 * dt) % 360; a2 = (a2 + 42 * dt) % 360;
        [[a1, "#gl-o1", RO], [a2, "#gl-o2", RI]].forEach(([a, s, r]) => { const [x, y] = Pt(r, a); $(s).setAttribute("transform", `translate(${x},${y}) rotate(${-a - 90}) scale(1.05)`); });
      });
      const TXT = [
        "**Te acercas y reduces la velocidad.** Mira a tu izquierda: si viene alguien por la glorieta, **le cedes el paso**.",
        "**Entras cuando hay hueco**, sin obligar a frenar a nadie.",
        "**Pasas al carril interior** con el intermitente izquierdo, porque tu salida está lejos.",
        "**Circulas por la glorieta** hasta acercarte a tu salida.",
        "**Intermitente derecho** y vuelves al carril exterior antes de salir.",
        "**Sales por el carril derecho.** ¡Maniobra perfecta!"
      ];
      const ruta = s => {
        const pts = []; const fin = 270 + 90 * s; const interior = s >= 3;
        for (let y = 412; y >= 318; y -= 3) pts.push({ x: 217, y, f: 0 });
        const a0 = 282, a1e = fin - 12;
        for (let a = a0; a <= a1e; a += 1.6) {
          const k = (a - a0) / Math.max(1, a1e - a0);
          let r = RO; if (interior) r = k < .18 ? RO - (RO - RI) * (k / .18) : k > .7 ? RI + (RO - RI) * Math.min(1, (k - .7) / .2) : RI;
          const [x, y] = Pt(r, a);
          let f = a < 296 ? 1 : (interior && k < .18) ? 2 : (a > a1e - 72) ? 4 : 3;
          if (s === 1 && f >= 3) f = 4;
          pts.push({ x, y, f });
        }
        const [ex, ey] = Pt(RO, a1e); const fin2 = { 1: [412, 217], 2: [217, -12], 3: [-12, 183], 4: [183, 412] }[s];
        const out = { 1: [1, 0], 2: [0, -1], 3: [-1, 0], 4: [0, 1] }[s];
        for (let k = 0; k <= 1.0001; k += .03) pts.push({ x: ex + (fin2[0] - ex) * (out[0] ? k : k * k), y: ey + (fin2[1] - ey) * (out[1] ? k : k * k), f: 5 });
        return pts;
      };
      let pts = [], i = 0, objetivoFase = 0, seguido = false, salida = 0, t = 0;
      const colocar = () => {
        const a = pts[Math.floor(i)], b = pts[Math.min(pts.length - 1, Math.floor(i) + 2)];
        const ang = Math.atan2(b.y - a.y, b.x - a.x) * 180 / Math.PI;
        $("#gl-me").setAttribute("transform", `translate(${a.x},${a.y}) rotate(${ang}) scale(1.05)`);
        const bl = Math.floor(t * 3) % 2 === 0;
        el.querySelectorAll("#gl-me .ind-l").forEach(c => c.setAttribute("opacity", a.f === 2 && bl ? 1 : 0));
        el.querySelectorAll("#gl-me .ind-r").forEach(c => c.setAttribute("opacity", a.f === 4 && bl ? 1 : 0));
        return a;
      };
      const avanzarHasta = fase => {
        objetivoFase = fase; $("#gl-next").disabled = true;
        stopMe && stopMe();
        stopMe = loop(dt => {
          t += dt;
          const a = pts[Math.floor(i)];
          // ceder el paso: espera en la línea si un coche está cerca de la entrada
          const cerca = [a1].some(x => { const d = ((270 - x) + 360) % 360; return d < 55 || d > 345; });
          if (a.f === 0 && pts[Math.floor(i) + 1] && pts[Math.floor(i) + 1].f === 1 && cerca) { colocar(); return; }
          if (a.f > objetivoFase && !seguido) { stopMe(); stopMe = null; $("#gl-next").disabled = false; mostrar(a.f); return; }
          i = Math.min(pts.length - 1, i + dt * 36);
          const p = colocar();
          if (p.f !== mostrar.ultimo) mostrar(p.f);
          if (i >= pts.length - 1) { stopMe(); stopMe = null; api.hecho("s" + salida); $("#gl-next").disabled = true; api.narrar(fmt(TXT[5]), "ok"); }
        });
      };
      const mostrar = f => { mostrar.ultimo = f; api.narrar(fmt(TXT[Math.min(5, f)]), f === 5 ? "ok" : undefined); $("#gl-out").innerHTML = `<span>Paso ${Math.min(6, f + 1)} de 6</span>`; };
      el.querySelectorAll("#gl-sal .chip").forEach(c => c.addEventListener("click", () => {
        salida = +c.dataset.s; el.querySelectorAll("#gl-sal .chip").forEach(x => x.classList.toggle("on", x === c));
        stopMe && stopMe(); pts = ruta(salida); i = 0; t = 0; seguido = false; colocar(); mostrar(0);
        $("#gl-next").disabled = false; $("#gl-all").disabled = false;
      }));
      $("#gl-next").addEventListener("click", () => { const f = pts[Math.floor(i)].f; avanzarHasta(f); });
      $("#gl-all").addEventListener("click", () => { seguido = true; avanzarHasta(9); });
      $("#gl-me").setAttribute("transform", "translate(217,412) rotate(-90) scale(1.05)");
      api.narrar("Elige primero a qué salida quieres ir.");
      return () => { stopO && stopO(); stopMe && stopMe(); };
    }
  });

  /* 5 ─────────────────────────── ALCOHOL */
  S.push({
    id: "alcohol", titulo: "Alcohol al volante", tema: "factores", icono: "wine", lecciones: ["factores-alcohol-limites", "examen-novel"],
    descripcion: "Mueve la tasa de alcohol y mira cómo cambian la visión y la sanción según el tipo de conductor.",
    aprende: [
      { t: "Límite general", d: "**0,25 mg/l** en aire espirado (equivale a **0,5 g/l** en sangre)." },
      { t: "Noveles y profesionales", d: "Conductores con **menos de 2 años** de permiso y profesionales: **0,15 mg/l** en aire (0,3 g/l en sangre)." },
      { t: "Delito", d: "Por encima de **0,60 mg/l** ya no es una multa: es un **delito** penal. Lo único seguro es **0,0**: ni el café ni una ducha bajan la tasa, solo el tiempo." }
    ],
    tareas: [
      { id: "gen", texto: "Como conductor general, pon una tasa justo por encima de tu límite" },
      { id: "nov", texto: "Cambia a conductor novel: busca una tasa legal para el general pero ilegal para ti" },
      { id: "del", texto: "Encuentra a partir de qué tasa es delito" }
    ],
    reto: [
      { pregunta: "¿Cuál es la tasa máxima de alcohol en aire espirado para un conductor general?", opciones: ["0,15 mg/l", "0,25 mg/l", "0,50 mg/l"], correcta: 1, explicacion: "El límite general es 0,25 mg/l en aire (0,5 g/l en sangre)." },
      { pregunta: "Tienes el permiso desde hace 8 meses. ¿Qué tasa máxima en aire no debes superar?", opciones: ["0,15 mg/l", "0,25 mg/l", "0,30 mg/l"], correcta: 0, explicacion: "Los noveles (menos de 2 años) tienen un límite de 0,15 mg/l en aire." },
      { pregunta: "Tomar un café antes de conducir después de beber alcohol…", opciones: ["Reduce la tasa a la mitad", "No reduce la tasa de alcohol", "Elimina el alcohol si esperas 10 minutos"], correcta: 1, explicacion: "Solo el tiempo elimina el alcohol. El café puede hacerte sentir más despierto, pero no baja la tasa." }
    ],
    escena(el, api) {
      el.innerHTML = `
        <div style="position:relative;border-radius:14px;overflow:hidden">
          <svg viewBox="0 0 800 300" class="stage-svg" id="al-view">
            <defs><radialGradient id="al-vig" cx="50%" cy="55%" r="65%"><stop offset="35%" stop-color="#000" stop-opacity="0"/><stop offset="100%" stop-color="#000" stop-opacity="1"/></radialGradient>
            <filter id="al-blur"><feGaussianBlur id="al-bv" stdDeviation="0"/></filter></defs>
            <g filter="url(#al-blur)">
              <rect width="800" height="300" fill="#cfe0ee"/><rect y="130" width="800" height="170" fill="#a9bea0"/>
              <path d="M330 130h140l330 170H0z" style="fill:var(--road)"/>
              <path d="M400 135v12M400 160v22M400 200v34M400 250v50" style="stroke:var(--road-line)" stroke-width="5"/>
              <g id="al-ghost" opacity="0"><path d="M330 130h140l330 170H0z" style="fill:var(--road)" opacity=".5"/><g transform="translate(430,190) scale(1.3)">${cochePerfil("#1f3a5f")}</g></g>
              <g transform="translate(400,190) scale(1.3)">${cochePerfil("#1f3a5f")}</g>
              <g transform="translate(560,150) scale(.7)" fill="#1f3a5f" stroke="#1f3a5f">${P.peaton || ""}</g>
            </g>
            <rect id="al-vg" width="800" height="300" fill="url(#al-vig)" opacity="0"/>
            <path d="M0 300V250q400-40 800 0v50z" fill="#1d1b18"/>
          </svg>
        </div>
        <div class="controls">
          <div class="seg" id="al-t"><button class="on" data-v="g">Conductor general</button><button data-v="n">Novel (menos de 2 años)</button></div>
          <div class="ctrl"><div class="ctrl-label">Tasa en aire espirado <b><span id="al-v">0,00</span> mg/l</b></div><input type="range" id="al-vi" min="0" max="0.8" step="0.01" value="0" aria-label="Tasa de alcohol"></div>
        </div>
        <div class="readout" id="al-out"></div>`;
      const $ = s => el.querySelector(s);
      let tipo = "g";
      const upd = () => {
        const t = +$("#al-vi").value, lim = tipo === "g" ? .25 : .15, alto = tipo === "g" ? .5 : .3;
        $("#al-v").textContent = num(t, 2);
        $("#al-bv").setAttribute("stdDeviation", (t * 7).toFixed(2));
        $("#al-vg").setAttribute("opacity", Math.min(.85, t * 1.15).toFixed(2));
        $("#al-ghost").setAttribute("opacity", Math.min(.6, t * .9).toFixed(2));
        const reflejos = t === 0 ? "normales" : t < .15 ? "algo más lentos" : t < .3 ? "lentos" : t < .6 ? "muy lentos" : "gravemente alterados";
        let txt, tono;
        if (t > .6) { txt = "**Delito.** Por encima de 0,60 mg/l puede castigarse con **prisión de 3 a 6 meses** o multa, y la **retirada del permiso de 1 a 4 años**."; tono = "ko"; }
        else if (t > alto) { txt = `**Infracción muy grave:** **1.000 € y 6 puntos** (más de ${num(alto, 2)} mg/l).`; tono = "ko"; }
        else if (t > lim) { txt = `**Infracción:** **500 € y 4 puntos** (más de ${num(lim, 2)} mg/l para ${tipo === "g" ? "un conductor general" : "un novel"}).`; tono = "ko"; }
        else { txt = t === 0 ? "**Tasa 0.** Es la única opción realmente segura." : `Estás por debajo de tu límite (${num(lim, 2)} mg/l)… pero **tus reflejos ya están afectados**.`; tono = t === 0 ? "ok" : undefined; }
        api.narrar(fmt(txt), tono);
        $("#al-out").innerHTML = `<span>Reflejos: ${reflejos}</span><span>Tu límite: ${num(lim, 2)} mg/l</span><span>En sangre: ${num(t * 2, 2)} g/l</span><span class="muted" style="background:none">Simulación visual aproximada</span>`;
        if (tipo === "g" && t > .25 && t <= .32) api.hecho("gen");
        if (tipo === "n" && t > .15 && t <= .25) api.hecho("nov");
        if (t > .6 && t <= .66) api.hecho("del");
      };
      rango($("#al-vi"), upd);
      seg($("#al-t"), v => { tipo = v; upd(); });
    }
  });

  /* 6 ─────────────────────────── LUCES */
  const LUZ = { pos: "Posición", cruce: "Cruce (cortas)", carr: "Carretera (largas)", nDel: "Antiniebla delantera", nTras: "Antiniebla trasera", emer: "Emergencia" };
  const ESC = [
    { id: "dia", t: "Día soleado en una carretera", req: [], opt: [], cielo: "#cfe0ee", d: "De día y con buena visibilidad **no hace falta encender ninguna luz** (muchos coches llevan luces diurnas automáticas)." },
    { id: "ciudad", t: "Noche en una calle bien iluminada", req: ["pos", "cruce"], opt: [], cielo: "#1b2233", farolas: 1, d: "En ciudad con buena iluminación: **cortas**. Las largas están prohibidas en vías urbanas iluminadas." },
    { id: "carretera", t: "Noche, carretera sin iluminar y sin nadie delante", req: ["pos", "carr"], opt: [], cielo: "#0f1420", d: "Fuera de poblado, sin iluminación y sin nadie: **largas**, para ver mucho más lejos." },
    { id: "cruce", t: "Noche en carretera: viene un coche de frente", req: ["pos", "cruce"], opt: [], cielo: "#0f1420", otro: 1, d: "Para no deslumbrar al que viene de frente, cambias a **cortas**." },
    { id: "tunel", t: "Entras en un túnel de día", req: ["pos", "cruce"], opt: [], cielo: "#3b3f48", tunel: 1, d: "En los túneles las **cortas son obligatorias** aunque haya luz y sea de día." },
    { id: "niebla", t: "Niebla muy espesa: solo ves 30 metros", req: ["pos", "cruce", "nDel", "nTras"], opt: [], cielo: "#9aa3ae", niebla: 1, d: "Con niebla densa y **menos de 50 m** de visibilidad: **cortas + antiniebla delantera y trasera**." },
    { id: "lluvia", t: "Lluvia intensa de noche (ves más de 50 m)", req: ["pos", "cruce"], opt: ["nDel"], cielo: "#141a26", lluvia: 1, d: "**Cortas**, y si quieres, **antiniebla delantera**. La trasera solo con visibilidad **inferior a 50 m**, porque deslumbra." },
    { id: "averia", t: "Tu coche se avería en el arcén de noche", req: ["pos", "emer"], opt: ["cruce"], cielo: "#0f1420", d: "Enciende **emergencia y posición** para que te vean. Después, chaleco puesto y baliza **V-16** en el techo." }
  ];
  S.push({
    id: "luces", titulo: "¿Qué luces enciendo?", tema: "alumbrado", icono: "bulb", lecciones: ["alumbrado-luces", "alumbrado-especiales", "alumbrado-tuneles"],
    descripcion: "Te ponemos en una situación y tú enciendes las luces adecuadas en el panel del coche.",
    aprende: [
      { t: "Cortas y largas", d: "**Cortas (cruce)** en ciudad, en túneles y al cruzarte con otros. **Largas (carretera)** de noche fuera de poblado, sin nadie delante." },
      { t: "Antiniebla, con moderación", d: "La **delantera** se puede usar con niebla, lluvia o nieve intensas. La **trasera** solo con visibilidad **inferior a 50 m**." },
      { t: "Emergencia", d: "Las **luces de emergencia** se usan para avisar de una avería o un peligro, junto con el chaleco y la baliza **V-16**." }
    ],
    tareas: [
      { id: "tres", texto: "Acierta 3 situaciones" },
      { id: "niebla", texto: "Resuelve la situación de niebla espesa" },
      { id: "todas", texto: "Completa las 8 situaciones" }
    ],
    reto: [
      { pregunta: "Circulas de día por un túnel bien iluminado. ¿Qué luces debes llevar?", opciones: ["Ninguna, porque es de día", "Las de cruce (cortas)", "Las antiniebla"], correcta: 1, explicacion: "En los túneles es obligatorio llevar encendidas las luces de cruce." },
      { pregunta: "¿Cuándo puedes encender la luz antiniebla trasera?", opciones: ["Siempre que llueva", "Con visibilidad inferior a 50 metros por niebla, lluvia o nieve muy intensas", "De noche en autopista"], correcta: 1, explicacion: "Solo en condiciones muy desfavorables, con visibilidad inferior a 50 metros." },
      { pregunta: "De noche, por una carretera sin iluminar, te cruzas con otro vehículo. ¿Qué haces?", opciones: ["Mantengo las largas", "Cambio a cortas para no deslumbrarle", "Apago las luces un momento"], correcta: 1, explicacion: "Al cruzarte con otro vehículo pasas a las de cruce para no deslumbrarle." }
    ],
    escena(el, api) {
      const sw = (k, n) => `<button class="light-sw" data-k="${k}">${{
        pos: '<svg viewBox="0 0 34 24"><circle cx="11" cy="12" r="6" fill="none" stroke="currentColor" stroke-width="2"/><circle cx="23" cy="12" r="6" fill="none" stroke="currentColor" stroke-width="2"/></svg>',
        cruce: '<svg viewBox="0 0 34 24"><path d="M4 6q8 0 8 6t-8 6z" fill="none" stroke="currentColor" stroke-width="2"/><path d="M16 9l14 4M16 13l14 4M16 17l14 4" stroke="currentColor" stroke-width="2"/></svg>',
        carr: '<svg viewBox="0 0 34 24"><path d="M4 6q8 0 8 6t-8 6z" fill="none" stroke="currentColor" stroke-width="2"/><path d="M16 8h15M16 12h15M16 16h15" stroke="currentColor" stroke-width="2"/></svg>',
        nDel: '<svg viewBox="0 0 34 24"><path d="M4 6q8 0 8 6t-8 6z" fill="none" stroke="currentColor" stroke-width="2"/><path d="M16 9l12 3M16 13l12 0M16 17l12-3M27 4q3 8 0 16" fill="none" stroke="currentColor" stroke-width="2"/></svg>',
        nTras: '<svg viewBox="0 0 34 24"><path d="M30 6q-8 0-8 6t8 6z" fill="none" stroke="currentColor" stroke-width="2"/><path d="M18 9H6M18 13H6M18 17H6M7 4q-3 8 0 16" fill="none" stroke="currentColor" stroke-width="2"/></svg>',
        emer: '<svg viewBox="0 0 34 24"><path d="M17 3l11 18H6z" fill="none" stroke="currentColor" stroke-width="2"/><path d="M17 9l5 9H12z" fill="none" stroke="currentColor" stroke-width="2"/></svg>'
      }[k]}${n}</button>`;
      el.innerHTML = `
        <div class="scenario" id="lu-esc"></div>
        <svg viewBox="0 0 800 220" class="stage-svg">
          <defs><linearGradient id="lu-haz" x1="0" x2="1"><stop offset="0" stop-color="#fff6c8" stop-opacity=".95"/><stop offset="1" stop-color="#fff6c8" stop-opacity="0"/></linearGradient>
          <linearGradient id="lu-nz" x1="0" x2="1"><stop offset="0" stop-color="#ffe9a0" stop-opacity=".8"/><stop offset="1" stop-color="#ffe9a0" stop-opacity="0"/></linearGradient>
          <radialGradient id="lu-rojo"><stop offset="0" stop-color="#ff3b30"/><stop offset="1" stop-color="#ff3b30" stop-opacity="0"/></radialGradient>
          <radialGradient id="lu-amb"><stop offset="0" stop-color="#ffb21f"/><stop offset="1" stop-color="#ffb21f" stop-opacity="0"/></radialGradient></defs>
          <rect id="lu-sky" width="800" height="220"/>
          <g id="lu-far" style="display:none">${[120, 400, 680].map(x => `<rect x="${x}" y="40" width="5" height="110" fill="#5b616b"/><circle cx="${x + 3}" cy="40" r="26" fill="#ffe7a3" opacity=".25"/><circle cx="${x + 3}" cy="40" r="6" fill="#ffe7a3"/>`).join("")}</g>
          <path id="lu-tun" style="display:none" d="M520 150V60q0-40 60-40h220v130z" fill="#555a63"/>
          <rect y="150" width="800" height="70" style="fill:var(--road)"/>
          <line x1="0" y1="185" x2="800" y2="185" style="stroke:var(--road-line)" stroke-width="3" stroke-dasharray="26 22"/>
          <polygon id="lu-b-carr" points="236,170 236,184 760,215 760,100" fill="url(#lu-haz)" opacity="0"/>
          <polygon id="lu-b-cruce" points="236,172 236,184 470,212 470,176" fill="url(#lu-haz)" opacity="0"/>
          <polygon id="lu-b-ndel" points="232,186 232,196 420,214 420,190" fill="url(#lu-nz)" opacity="0"/>
          <circle id="lu-b-ntras" cx="138" cy="176" r="34" fill="url(#lu-rojo)" opacity="0"/>
          <circle id="lu-b-pos1" cx="232" cy="174" r="10" fill="url(#lu-haz)" opacity="0"/><circle id="lu-b-pos2" cx="140" cy="174" r="9" fill="url(#lu-rojo)" opacity="0"/>
          <g id="lu-b-emer" opacity="0"><circle cx="232" cy="178" r="16" fill="url(#lu-amb)"/><circle cx="138" cy="178" r="16" fill="url(#lu-amb)"/></g>
          <g transform="translate(186,205)">${cochePerfil("#d4532a")}</g>
          <g id="lu-otro" style="display:none" transform="translate(640,205) scale(-1,1)">${cochePerfil("#1f3a5f")}<polygon points="236,172 236,184 420,210 420,176" fill="url(#lu-haz)" opacity=".7" transform="translate(-190,0)"/></g>
          <rect id="lu-fog" width="800" height="220" fill="#d5dbe2" opacity="0"/>
          <g id="lu-rain" style="display:none">${Array.from({ length: 70 }, (_, i) => `<line x1="${(i * 61) % 800}" y1="${(i * 37) % 220}" x2="${(i * 61) % 800 - 5}" y2="${(i * 37) % 220 + 14}" stroke="#8fb0d6" stroke-width="1.6" opacity=".6"/>`).join("")}</g>
        </svg>
        <div class="field-label">Panel de luces del coche: toca para encender o apagar</div>
        <div class="lights-panel" id="lu-sw">${Object.entries(LUZ).map(([k, n]) => sw(k, n)).join("")}</div>
        <div class="row" style="margin-top:14px"><button class="btn btn-primary" id="lu-ok">Comprobar</button><button class="btn btn-ghost" id="lu-next">Otra situación</button><span class="spacer"></span><span class="muted" id="lu-cnt"></span></div>`;
      const $ = s => el.querySelector(s);
      let i = 0, on = new Set(), resueltas = new Set(), t = 0;
      const pintar = () => {
        const e = ESC[i];
        $("#lu-esc").innerHTML = `<span class="q-tema">Situación ${i + 1} de ${ESC.length}</span> ${esc(e.t)}`;
        $("#lu-sky").setAttribute("fill", e.cielo);
        $("#lu-far").style.display = e.farolas ? "" : "none"; $("#lu-tun").style.display = e.tunel ? "" : "none";
        $("#lu-otro").style.display = e.otro ? "" : "none"; $("#lu-rain").style.display = e.lluvia ? "" : "none";
        $("#lu-fog").setAttribute("opacity", e.niebla ? .7 : 0);
        el.querySelectorAll(".light-sw").forEach(b => b.classList.toggle("on", on.has(b.dataset.k)));
        $("#lu-b-carr").setAttribute("opacity", on.has("carr") ? 1 : 0);
        $("#lu-b-cruce").setAttribute("opacity", on.has("cruce") && !on.has("carr") ? 1 : 0);
        $("#lu-b-ndel").setAttribute("opacity", on.has("nDel") ? 1 : 0);
        $("#lu-b-ntras").setAttribute("opacity", on.has("nTras") ? 1 : 0);
        ["#lu-b-pos1", "#lu-b-pos2"].forEach(s => $(s).setAttribute("opacity", on.has("pos") ? 1 : 0));
        $("#lu-cnt").textContent = `${resueltas.size} de ${ESC.length} resueltas`;
      };
      const nueva = () => { i = (i + 1) % ESC.length; let n = 0; while (resueltas.has(ESC[i].id) && n++ < ESC.length) i = (i + 1) % ESC.length; on = new Set(); pintar(); api.narrar("Enciende en el panel las luces que llevarías y pulsa <b>Comprobar</b>."); };
      el.querySelectorAll(".light-sw").forEach(b => b.addEventListener("click", () => {
        const k = b.dataset.k;
        if (on.has(k)) { on.delete(k); if (k === "pos") ["cruce", "carr", "nDel", "nTras"].forEach(x => on.delete(x)); }
        else { on.add(k); if (["cruce", "carr", "nDel", "nTras"].includes(k)) on.add("pos"); if (k === "carr") on.delete("cruce"); if (k === "cruce") on.delete("carr"); }
        pintar();
      }));
      $("#lu-ok").addEventListener("click", () => {
        const e = ESC[i]; const falta = e.req.filter(k => !on.has(k)); const sobra = [...on].filter(k => !e.req.includes(k) && !e.opt.includes(k));
        if (!falta.length && !sobra.length) {
          resueltas.add(e.id); api.narrar(`<b>¡Correcto!</b> ${fmt(e.d)}`, "ok");
          if (resueltas.size >= 3) api.hecho("tres"); if (e.id === "niebla") api.hecho("niebla"); if (resueltas.size >= ESC.length) api.hecho("todas");
          pintar(); $("#lu-next").classList.add("pulse-ring"); setTimeout(() => $("#lu-next").classList.remove("pulse-ring"), 2400);
        } else {
          const partes = []; if (falta.length) partes.push("te falta: <b>" + falta.map(k => LUZ[k].toLowerCase()).join(", ") + "</b>"); if (sobra.length) partes.push("sobra: <b>" + sobra.map(k => LUZ[k].toLowerCase()).join(", ") + "</b>");
          api.narrar(`Casi: ${partes.join("; ")}. ${fmt(e.d)}`, "ko");
        }
      });
      $("#lu-next").addEventListener("click", nueva);
      const stop = loop(dt => { t += dt; $("#lu-b-emer").setAttribute("opacity", on.has("emer") && Math.floor(t * 2.4) % 2 ? 1 : 0); });
      i = -1; nueva();
      return stop;
    }
  });

  /* 7 ─────────────────────────── ADELANTAR A UN CICLISTA */
  S.push({
    id: "ciclista", titulo: "Adelantar a un ciclista", tema: "maniobras", icono: "turn", lecciones: ["maniobras-adelantar-ciclistas-averiados", "maniobras-adelantamiento-normas", "via-ciclistas-prioritarios"],
    descripcion: "Elige cuánta distancia lateral dejas y cuándo adelantas. Comprueba qué es seguro y qué no.",
    aprende: [
      { t: "1,5 metros como mínimo", d: "Al adelantar a ciclistas debes dejar una **separación lateral de al menos 1,5 m**." },
      { t: "Puedes invadir el otro carril", d: "Para hacerlo puedes **ocupar el carril contrario, incluso con línea continua**, si hay visibilidad y no viene nadie." },
      { t: "Si no se puede, esperas", d: "Si viene un vehículo de frente o no hay espacio, **esperas detrás** del ciclista sin presionarle." }
    ],
    tareas: [
      { id: "mal", texto: "Adelanta dejando menos de 1,5 m y mira qué ocurre" },
      { id: "bien", texto: "Adelanta correctamente dejando 1,5 m o más" },
      { id: "espera", texto: "Con un coche de frente, espera a que pase y adelanta después" }
    ],
    reto: [
      { pregunta: "¿Qué separación lateral mínima debes dejar al adelantar a un ciclista?", opciones: ["0,5 metros", "1 metro", "1,5 metros"], correcta: 2, explicacion: "La separación lateral mínima con ciclistas es de 1,5 metros." },
      { pregunta: "Para adelantar a un ciclista con visibilidad suficiente y sin nadie de frente, ¿puedes pisar la línea continua?", opciones: ["Sí, puedes ocupar el carril contrario para dejar la separación", "No, nunca", "Solo en autopista"], correcta: 0, explicacion: "Se permite ocupar parcial o totalmente el carril contrario, incluso con línea continua, si se hace con seguridad." },
      { pregunta: "Vas detrás de un ciclista y viene un coche de frente. ¿Qué haces?", opciones: ["Adelanto rápido aunque quede poco espacio", "Toco el claxon para que se aparte", "Espero detrás hasta que pueda adelantar con seguridad"], correcta: 2, explicacion: "Si no puedes respetar la separación, esperas detrás." }
    ],
    escena(el, api) {
      el.innerHTML = `
        <svg viewBox="0 0 800 210" class="stage-svg">
          <rect width="800" height="210" fill="#a9bea0"/>
          <rect y="20" width="800" height="170" style="fill:var(--road)"/>
          <line x1="0" y1="105" x2="800" y2="105" stroke="#f4efe4" stroke-width="3"/>
          <line x1="0" y1="28" x2="800" y2="28" stroke="#f4efe4" stroke-width="2"/><line x1="0" y1="182" x2="800" y2="182" stroke="#f4efe4" stroke-width="2"/>
          <g id="ci-bike"><g transform="scale(.62)" fill="#1f3a5f" stroke="#1f3a5f">${P.bici || ""}</g></g>
          <g id="ci-m" opacity="0"><line id="ci-ml" stroke-width="2.5"/><text id="ci-mt" font-size="14" font-weight="800"></text></g>
          <g id="ci-onc" style="display:none">${cocheArriba("#1f3a5f")}</g>
          <g id="ci-car">${cocheArriba("#d4532a")}</g>
        </svg>
        <div class="controls">
          <div class="ctrl"><div class="ctrl-label">Separación lateral que vas a dejar <b><span id="ci-g">1,0</span> m</b></div><input type="range" id="ci-gi" min="0.5" max="2.5" step="0.1" value="1" aria-label="Separación lateral"></div>
          <label class="chip" style="cursor:pointer"><input type="checkbox" id="ci-oc" style="accent-color:var(--primary)"> Viene un coche de frente</label>
          <button class="btn btn-primary" id="ci-go">Adelantar</button>
        </div>`;
      const $ = s => el.querySelector(s);
      const PXM = 22, BIKE_Y = 160, LANE_Y = 143;
      let stop = null, oncX = 900, oncOn = false, esperado = false;
      const reset = () => { stop && stop(); stop = null; $("#ci-car").setAttribute("transform", `translate(90,${LANE_Y}) scale(1.4)`); $("#ci-bike").setAttribute("transform", `translate(330,${BIKE_Y})`); $("#ci-m").setAttribute("opacity", 0); };
      rango($("#ci-gi"), v => { $("#ci-g").textContent = num(v, 1); });
      $("#ci-oc").addEventListener("change", e => { oncOn = e.target.checked; oncX = 900; esperado = false; $("#ci-onc").style.display = oncOn ? "" : "none"; api.narrar(oncOn ? "Viene un coche de frente. ¿Adelantas ya o esperas?" : "Carretera despejada. Elige la separación y adelanta."); });
      const fondo = loop(dt => {
        if (!oncOn) return;
        oncX -= 160 * dt; if (oncX < -60) { oncX = -60; if (!esperado) { esperado = true; api.narrar("El coche de frente ya ha pasado. <b>Ahora sí</b> puedes adelantar con seguridad."); } }
        $("#ci-onc").setAttribute("transform", `translate(${oncX},62) rotate(180) scale(1.4)`);
      });
      $("#ci-go").addEventListener("click", () => {
        reset();
        const g = +$("#ci-gi").value;
        const vieneAhora = oncOn && oncX > 0;
        if (vieneAhora) { api.narrar("<b>No adelantes ahora.</b> Viene un coche de frente y no hay espacio para dejar 1,5 m. Espera detrás del ciclista.", "ko"); return; }
        const yOver = (BIKE_Y - 6) - g * PXM - 13;
        let x = 90, bx = 330, t = 0;
        api.narrar(g < 1.5 ? "Vas a adelantar muy pegado…" : "Señalizas con el intermitente izquierdo y te apartas…");
        stop = loop(dt => {
          t += dt; x += 140 * dt; bx += 36 * dt;
          const rel = x - bx; let y = LANE_Y;
          if (rel > -150 && rel < 130) y = LANE_Y + (yOver - LANE_Y) * Math.min(1, Math.min(rel + 150, 130 - rel) / 55);
          const ang = rel > -150 && rel < -95 ? -10 : rel > 75 && rel < 130 ? 10 : 0;
          $("#ci-car").setAttribute("transform", `translate(${x},${y}) rotate(${g < 1.5 ? ang / 3 : ang}) scale(1.4)`);
          el.querySelectorAll("#ci-car .ind-l").forEach(c => c.setAttribute("opacity", rel < -95 && rel > -170 && Math.floor(t * 3) % 2 ? 1 : 0));
          $("#ci-bike").setAttribute("transform", `translate(${bx},${BIKE_Y + (Math.abs(rel) < 40 && g < 1.5 ? Math.sin(t * 30) * 2 : 0)})`);
          const al = Math.abs(rel) < 45, col = g >= 1.5 ? "#2c8a5c" : "#c03a31";
          $("#ci-m").setAttribute("opacity", al ? 1 : 0);
          if (al) { $("#ci-ml").setAttribute("x1", bx); $("#ci-ml").setAttribute("x2", bx); $("#ci-ml").setAttribute("y1", y + 13); $("#ci-ml").setAttribute("y2", BIKE_Y - 8); $("#ci-ml").setAttribute("stroke", col); $("#ci-mt").setAttribute("x", bx + 10); $("#ci-mt").setAttribute("y", (y + BIKE_Y) / 2 + 4); $("#ci-mt").setAttribute("fill", col); $("#ci-mt").textContent = num(g, 1) + " m"; }
          if (x > 860) {
            stop(); stop = null;
            if (g < 1.5) { api.narrar(`<b>Adelantamiento peligroso.</b> Con ${num(g, 1)} m el ciclista se desestabiliza por el aire y puede caer. Es una infracción grave.`, "ko"); api.hecho("mal"); }
            else { api.narrar(`<b>Correcto.</b> Has dejado ${num(g, 1)} m${g * PXM > 30 ? " invadiendo el carril contrario, algo permitido si no viene nadie" : ""}.`, "ok"); api.hecho("bien"); if (oncOn && esperado) api.hecho("espera"); }
          }
        });
      });
      reset(); api.narrar("Elige la separación lateral y pulsa <b>Adelantar</b>.");
      return () => { stop && stop(); fondo(); };
    }
  });

  /* 8 ─────────────────────────── CONDUCTA PAS */
  const ACCIONES = [
    { id: "p", paso: 0, t: "Aparcar en lugar seguro, poner las luces de emergencia, el chaleco y la baliza V-16", ok: "**Proteger** es lo primero: así evitas otro accidente y que tú seas la siguiente víctima." },
    { id: "a", paso: 1, t: "Llamar al 112 y decir dónde estás, qué ha pasado y cuántos heridos hay", ok: "**Avisar** al 112: es gratuito y funciona desde cualquier móvil." },
    { id: "s", paso: 2, t: "Hablar con el herido, tranquilizarle y abrigarle sin moverle", ok: "**Socorrer** con cuidado: no le muevas salvo que haya un peligro inmediato, como fuego." },
    { id: "x1", mal: "**Nunca** muevas al herido salvo peligro inminente (fuego, riesgo de atropello…): podrías agravar una lesión de columna.", t: "Sacar enseguida al herido del coche" },
    { id: "x2", mal: "**No** se le quita el casco a un motorista herido: puede tener una lesión cervical.", t: "Quitar el casco al motorista para que respire mejor" },
    { id: "x3", mal: "**No** se da de beber ni de comer a un herido: podría necesitar una operación.", t: "Darle agua al herido" },
    { id: "x4", mal: "Avisar sin protegerte antes te pone en peligro a ti: **primero se protege**.", t: "Salir corriendo del coche sin chaleco para ayudar" }
  ];
  S.push({
    id: "pas", titulo: "Llegas a un accidente: P·A·S", tema: "accidentes", icono: "siren", lecciones: ["accidentes-pas", "accidentes-primeros-auxilios", "accidentes-senalizar-parte"],
    descripcion: "Eres el primero en llegar a un accidente con un herido. Elige las acciones correctas en el orden correcto.",
    aprende: [
      { t: "P · Proteger", d: "Detente en un lugar seguro, pon las **luces de emergencia**, ponte el **chaleco** y coloca la baliza **V-16**." },
      { t: "A · Avisar", d: "Llama al **112**: di **dónde** estás, **qué** ha pasado y **cuántos** heridos hay." },
      { t: "S · Socorrer", d: "Atiende al herido **sin moverle**, sin quitarle el casco y sin darle de beber. Tranquilízale y abrígale." }
    ],
    tareas: [
      { id: "orden", texto: "Coloca las tres acciones correctas en orden P → A → S" },
      { id: "malas", texto: "Toca 2 acciones incorrectas para descubrir por qué no se hacen" }
    ],
    reto: [
      { pregunta: "Llegas el primero a un accidente. ¿Qué haces antes que nada?", opciones: ["Llamar al 112", "Proteger la zona: emergencia, chaleco y baliza V-16", "Sacar a los heridos de los coches"], correcta: 1, explicacion: "El orden es Proteger, Avisar y Socorrer." },
      { pregunta: "Un motorista herido está consciente y lleva el casco puesto. ¿Se lo quitas?", opciones: ["Sí, para que respire mejor", "No, salvo que sea imprescindible para mantenerle con vida", "Sí, si tiene calor"], correcta: 1, explicacion: "Quitar el casco puede agravar una posible lesión cervical." },
      { pregunta: "¿Qué número llamas para avisar de un accidente?", opciones: ["112", "091", "010"], correcta: 0, explicacion: "El 112 es el número único de emergencias, gratuito y disponible desde cualquier móvil." }
    ],
    escena(el, api) {
      el.innerHTML = `
        <svg viewBox="0 0 800 150" class="stage-svg">
          <rect width="800" height="150" fill="#cfe0ee"/><rect y="70" width="800" height="62" style="fill:var(--road)"/><rect y="132" width="800" height="18" fill="#a9bea0"/>
          <line x1="0" y1="101" x2="800" y2="101" style="stroke:var(--road-line)" stroke-width="3" stroke-dasharray="26 22"/>
          <g transform="translate(470,120) rotate(-12)">${cochePerfil("#1f3a5f")}</g>
          <g transform="translate(560,128) rotate(8)">${cochePerfil("#6b7b5e")}</g>
          <g transform="translate(180,128)">${cochePerfil("#d4532a")}</g>
          <g id="pa-p" opacity="0"><rect x="166" y="76" width="18" height="8" rx="3" fill="#ffb21f"/><circle cx="175" cy="72" r="14" fill="#ffb21f" opacity=".35"><animate attributeName="opacity" values=".1;.6;.1" dur="1s" repeatCount="indefinite"/></circle></g>
          <g id="pa-a" opacity="0"><rect x="250" y="20" width="96" height="34" rx="12" fill="#1f3a5f"/><text x="298" y="43" font-size="17" font-weight="800" fill="#fff" text-anchor="middle" font-family="Inter,Arial">112</text></g>
          <g id="pa-s" opacity="0"><path d="M640 30c4-4 10-4 12 2 2-6 8-6 12-2 4 5 0 11-12 18-12-7-16-13-12-18z" fill="#c03a31"><animateTransform attributeName="transform" type="scale" values="1;1.08;1" dur="1s" repeatCount="indefinite" additive="sum"/></path></g>
        </svg>
        <div class="field-label">Tu plan, en orden</div>
        <div class="order-slots" id="pa-slots"><div class="slot" data-p="0"><span class="sl">P</span><small class="muted">Proteger</small></div><div class="slot" data-p="1"><span class="sl">A</span><small class="muted">Avisar</small></div><div class="slot" data-p="2"><span class="sl">S</span><small class="muted">Socorrer</small></div></div>
        <div class="field-label">Acciones posibles: toca la siguiente que harías</div>
        <div class="order-pool" id="pa-pool"></div>`;
      const $ = s => el.querySelector(s);
      let paso = 0, malas = 0;
      const mezcla = ACCIONES.slice().sort(() => Math.random() - .5);
      $("#pa-pool").innerHTML = mezcla.map(a => `<button class="order-card" data-id="${a.id}">${esc(a.t)}</button>`).join("");
      const activar = () => el.querySelectorAll(".slot").forEach(s => s.classList.toggle("active", +s.dataset.p === paso));
      el.querySelectorAll(".order-card").forEach(b => b.addEventListener("click", () => {
        const a = ACCIONES.find(x => x.id === b.dataset.id);
        if (a.mal) { b.classList.add("ko"); malas++; api.narrar(fmt(a.mal), "ko"); if (malas >= 2) api.hecho("malas"); return; }
        if (a.paso !== paso) { b.animate([{ transform: "translateX(-6px)" }, { transform: "translateX(6px)" }, { transform: "none" }], { duration: 350 }); api.narrar(`Es una acción correcta, pero <b>no toca todavía</b>. Piensa qué va antes: ${["Proteger", "Avisar", "Socorrer"][paso]}.`); return; }
        b.classList.add("ok"); const slot = el.querySelector(`.slot[data-p="${paso}"]`); slot.classList.add("filled"); slot.insertAdjacentHTML("beforeend", `<small>${esc(a.t)}</small>`);
        $("#pa-" + a.id).setAttribute("opacity", 1);
        api.narrar(fmt(a.ok), "ok"); paso++; activar();
        if (paso === 3) { api.hecho("orden"); setTimeout(() => api.narrar("<b>¡Plan completo!</b> Proteger → Avisar → Socorrer. Toca alguna acción incorrecta para ver por qué no se hace.", "ok"), 1600); }
      }));
      activar(); api.narrar("Eres el primero en llegar. ¿Qué haces primero?");
    }
  });

  window.SIMULADORES = S;
})();
