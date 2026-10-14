/* Simuladores interactivos animados. Cada uno: { id, titulo, emoji, tema, lecciones, descripcion, montar(el) → cleanup } */
(function () {
  "use strict";
  const esc = s => String(s == null ? "" : s).replace(/[&<>"']/g, c => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));
  const fmt = s => esc(s).replace(/\*\*(.+?)\*\*/g, "<strong>$1</strong>");
  const NS = "http://www.w3.org/2000/svg";
  const reduce = matchMedia("(prefers-reduced-motion: reduce)").matches;

  // Coche visto desde arriba (frente hacia +x)
  const coche = (color, id) => `<g ${id ? `id="${id}"` : ""}>
    <rect x="-15" y="-8.5" width="30" height="17" rx="5" fill="${color}" stroke="rgba(0,0,0,.35)" stroke-width="1"/>
    <rect x="3" y="-6.5" width="7" height="13" rx="2" fill="#bfe4ff"/>
    <rect x="-11" y="-6" width="5" height="12" rx="1.5" fill="#bfe4ff" opacity=".7"/>
    <circle class="int-izq" cx="13" cy="-7.5" r="2.4" fill="#ffb300" opacity="0"/>
    <circle class="int-der" cx="13" cy="7.5" r="2.4" fill="#ffb300" opacity="0"/>
    <circle class="int-izq" cx="-13" cy="-7.5" r="2.4" fill="#ffb300" opacity="0"/>
    <circle class="int-der" cx="-13" cy="7.5" r="2.4" fill="#ffb300" opacity="0"/></g>`;

  function loop(fn) {
    let id, last = performance.now(), on = true;
    const t = now => { if (!on) return; const dt = Math.min(.05, (now - last) / 1000); last = now; fn(dt, now); id = requestAnimationFrame(t); };
    id = requestAnimationFrame(t);
    return () => { on = false; cancelAnimationFrame(id); };
  }

  const S = [];

  // 1. Distancia de detención ------------------------------------------------
  S.push({
    id: "detencion", titulo: "¿Te da tiempo a frenar?", emoji: "🛑", tema: "velocidad", lecciones: ["velocidad-distancias-parada"],
    descripcion: "Elige velocidad y estado del asfalto, pulsa FRENAR y mira cuántos metros recorres antes de parar.",
    montar(el) {
      el.innerHTML = `<div class="sim">
        <div class="sim-controls">
          <label>Velocidad: <b id="v-val">90</b> km/h<input type="range" id="v" min="30" max="130" step="10" value="90"></label>
          <label>Un niño aparece a: <b id="o-val">80</b> m<input type="range" id="o" min="20" max="200" step="5" value="80"></label>
          <div class="seg" id="firme"><button class="on" data-f="1">☀️ Seco</button><button data-f="2">🌧️ Mojado</button></div>
          <button class="btn btn-primary" id="frenar">🛑 ¡FRENAR!</button>
        </div>
        <svg viewBox="0 0 800 150" class="sim-svg" id="pista">
          <rect x="0" y="30" width="800" height="90" fill="#2d3142"/>
          <line x1="0" y1="75" x2="800" y2="75" stroke="#ffd23f" stroke-width="3" stroke-dasharray="26 22"/>
          <rect id="z-r" x="40" y="96" width="0" height="12" fill="#3b82f6" rx="3"/>
          <rect id="z-f" x="40" y="96" width="0" height="12" fill="#ef4444" rx="3"/>
          <g id="obst"><text font-size="34" y="62" text-anchor="middle">🧒</text></g>
          <g id="car" transform="translate(40,58) scale(1.3)">${coche("#2b59ff")}</g>
          <g id="escala"></g>
        </svg>
        <div class="sim-out" id="out"></div>
        <p class="sim-tip">Fórmula del temario: <b>reacción ≈ 3 × (v ÷ 10)</b> y <b>frenado en seco ≈ (v ÷ 10)²</b>. En mojado el frenado se duplica.</p></div>`;
      const $ = s => el.querySelector(s);
      let f = 1, stop = null;
      const MAXM = 400, X0 = 40, W = 740, px = m => X0 + m / MAXM * W;
      $("#escala").innerHTML = [0, 50, 100, 150, 200, 250, 300, 350, 400].map(m => `<line x1="${px(m)}" y1="122" x2="${px(m)}" y2="130" stroke="currentColor" opacity=".5"/><text x="${px(m)}" y="145" font-size="12" text-anchor="middle" fill="currentColor" opacity=".7">${m} m</text>`).join("");
      const calc = () => { const v = +$("#v").value; const r = 3 * v / 10, fr = Math.pow(v / 10, 2) * f; return { v, r, fr, d: r + fr, o: +$("#o").value }; };
      const pintarEstatico = () => {
        const c = calc(); $("#v-val").textContent = c.v; $("#o-val").textContent = c.o;
        $("#obst").setAttribute("transform", `translate(${px(c.o)},0)`);
        $("#car").setAttribute("transform", `translate(${X0},58) scale(1.3)`);
        $("#z-r").setAttribute("width", 0); $("#z-f").setAttribute("width", 0);
        $("#out").innerHTML = `<span>Pulsa <b>FRENAR</b> para ver qué pasa a ${c.v} km/h en firme ${f === 1 ? "seco" : "mojado"}.</span>`;
      };
      ["#v", "#o"].forEach(s => $(s).addEventListener("input", () => { stop && stop(); pintarEstatico(); }));
      $("#firme").addEventListener("click", e => { const b = e.target.closest("button"); if (!b) return; f = +b.dataset.f; el.querySelectorAll("#firme button").forEach(x => x.classList.toggle("on", x === b)); stop && stop(); pintarEstatico(); });
      $("#frenar").addEventListener("click", () => {
        stop && stop(); const c = calc(); let pos = 0; const vms = c.v / 3.6; let vel = vms; const dec = vms * vms / (2 * c.fr);
        const k = 6; // cámara rápida
        stop = loop(dt => {
          dt *= k;
          if (pos < c.r) pos += vms * dt; else { vel = Math.max(0, vel - dec * dt); pos += vel * dt; }
          pos = Math.min(pos, c.d);
          $("#car").setAttribute("transform", `translate(${px(pos)},58) scale(1.3)`);
          $("#z-r").setAttribute("width", px(Math.min(pos, c.r)) - X0);
          $("#z-f").setAttribute("x", px(c.r)); $("#z-f").setAttribute("width", Math.max(0, px(pos) - px(c.r)));
          if (pos >= c.d || vel <= 0 && pos >= c.r) {
            stop(); stop = null;
            const choca = c.d > c.o;
            $("#out").innerHTML = `<span class="chip-r">🔵 Reacción: <b>${Math.round(c.r)} m</b></span><span class="chip-f">🔴 Frenado: <b>${Math.round(c.fr)} m</b></span><span>Total detención: <b>${Math.round(c.d)} m</b></span>
              <span class="${choca ? "res-ko" : "res-ok"}">${choca ? "💥 No te da tiempo: llegas al niño" : "✅ Paras " + Math.round(c.o - c.d) + " m antes"}</span>`;
            el.querySelector(".sim").classList.toggle("shake", choca);
            setTimeout(() => el.querySelector(".sim").classList.remove("shake"), 500);
          }
        });
      });
      pintarEstatico();
      return () => stop && stop();
    }
  });

  // 2. Regla de los 2 segundos ----------------------------------------------
  S.push({
    id: "dos-segundos", titulo: "La regla de los 2 segundos", emoji: "⏱️", tema: "velocidad", lecciones: ["velocidad-distancia-seguridad"],
    descripcion: "Ajusta la distancia con el coche de delante y comprueba si es segura. Cuenta cuando el primero pasa la farola.",
    montar(el) {
      el.innerHTML = `<div class="sim">
        <div class="sim-controls">
          <label>Velocidad: <b id="v-val">90</b> km/h<input type="range" id="v" min="30" max="120" step="10" value="90"></label>
          <label>Separación: <b id="s-val">1.0</b> s<input type="range" id="s" min="0.5" max="4" step="0.5" value="1"></label>
          <div class="seg" id="firme"><button class="on" data-f="2">☀️ Seco</button><button data-f="3">🌧️ Lluvia</button></div>
        </div>
        <svg viewBox="0 0 800 130" class="sim-svg">
          <rect x="0" y="20" width="800" height="90" fill="#2d3142"/>
          <line x1="0" y1="65" x2="800" y2="65" stroke="#ffd23f" stroke-width="3" stroke-dasharray="26 22" id="lane"/>
          <g transform="translate(560,0)"><rect x="-3" y="0" width="6" height="22" fill="#9aa3b5"/><circle cx="0" cy="4" r="7" fill="#ffe066"/></g>
          <g id="gap"><rect id="gap-r" y="84" height="8" rx="4" fill="#12a150"/><text id="gap-t" y="104" font-size="13" fill="#fff" text-anchor="middle"></text></g>
          <g id="c1">${coche("#e5383b")}</g><g id="c2">${coche("#2b59ff")}</g>
        </svg>
        <div class="sim-out" id="out"></div>
        <p class="sim-tip">Truco: cuando el coche de delante pase por una farola o una señal, di «<b>mil uno, mil dos</b>». Si llegas a ella antes de terminar, vas demasiado cerca.</p></div>`;
      const $ = s => el.querySelector(s);
      let f = 2, x = 0, dash = 0;
      const upd = () => {
        const v = +$("#v").value, s = +$("#s").value, m = v / 3.6 * s;
        $("#v-val").textContent = v; $("#s-val").textContent = s.toFixed(1);
        const ok = s >= f;
        $("#out").innerHTML = `<span>Separación: <b>${Math.round(m)} metros</b></span><span>Mínimo recomendado: <b>${f} s = ${Math.round(v / 3.6 * f)} m</b></span><span class="${ok ? "res-ok" : "res-ko"}">${ok ? "✅ Distancia segura" : "⚠️ Demasiado cerca: si frena, chocas"}</span>`;
        $("#gap-r").setAttribute("fill", ok ? "#12a150" : "#e5383b");
        return m;
      };
      ["#v", "#s"].forEach(s => $(s).addEventListener("input", upd));
      $("#firme").addEventListener("click", e => { const b = e.target.closest("button"); if (!b) return; f = +b.dataset.f; el.querySelectorAll("#firme button").forEach(q => q.classList.toggle("on", q === b)); upd(); });
      upd();
      return loop(dt => {
        const v = +$("#v").value, m = v / 3.6 * +$("#s").value;
        const gapPx = Math.min(520, m * 3.2);
        x = (x + v * dt * 2.2) % (900 + gapPx); dash = (dash + v * dt * 2) % 48;
        const x1 = x - 60 + 0, x2 = x1 - gapPx - 30;
        $("#c1").setAttribute("transform", `translate(${x1},45) scale(1.4)`);
        $("#c2").setAttribute("transform", `translate(${x2},45) scale(1.4)`);
        $("#gap-r").setAttribute("x", x2 + 22); $("#gap-r").setAttribute("width", Math.max(0, gapPx - 14));
        $("#gap-t").setAttribute("x", x2 + 15 + gapPx / 2); $("#gap-t").textContent = Math.round(m) + " m";
        $("#lane").setAttribute("stroke-dashoffset", dash);
      });
    }
  });

  // 3. Semáforo -------------------------------------------------------------
  const ESTADOS = {
    verde: { luz: ["", "", "#22c55e"], t: "Verde", d: "Puedes pasar, pero **solo si no te vas a quedar atrapado** dentro del cruce. Verde no es «pasa sí o sí».", a: "go" },
    ambar: { luz: ["", "#facc15", ""], t: "Ámbar fijo", d: "Equivale al rojo: **tienes que parar**, salvo que estés tan cerca que no puedas frenar con seguridad.", a: "stop" },
    rojo: { luz: ["#ef4444", "", ""], t: "Rojo fijo", d: "**Prohibido pasar.** Detente antes de la línea de detención o, si no la hay, antes del semáforo.", a: "stop" },
    intermitente: { luz: ["", "#facc15", ""], blink: 1, t: "Ámbar intermitente", d: "Pasa con **precaución** y respeta la prioridad de los demás, como si no hubiera semáforo. Mira las señales del cruce.", a: "slow" },
    rojoint: { luz: ["#ef4444", "", ""], blink: 1, t: "Rojo intermitente", d: "**Prohibido pasar.** Suele estar en pasos a nivel, puentes móviles o salidas de vehículos de emergencia.", a: "stop" },
    flecha: { luz: ["#ef4444", "", "#22c55e"], arrow: 1, t: "Rojo + flecha verde", d: "Puedes girar **solo en la dirección de la flecha**, cediendo el paso a peatones y vehículos que tengan prioridad.", a: "turn" }
  };
  S.push({
    id: "semaforo", titulo: "El semáforo interactivo", emoji: "🚦", tema: "senales", lecciones: ["senales-semaforos"],
    descripcion: "Pulsa cada estado del semáforo y mira qué tiene que hacer el coche.",
    montar(el) {
      el.innerHTML = `<div class="sim sim-row">
        <svg viewBox="0 0 90 230" class="sem-svg"><rect x="10" y="5" width="70" height="210" rx="16" fill="#22252f"/>
          <circle id="l0" cx="45" cy="45" r="24" fill="#3a3d48"/><circle id="l1" cx="45" cy="110" r="24" fill="#3a3d48"/><circle id="l2" cx="45" cy="175" r="24" fill="#3a3d48"/>
          <text id="arrow" x="45" y="186" font-size="34" text-anchor="middle" fill="#0b3d17" opacity="0">➜</text></svg>
        <div style="flex:1;min-width:240px">
          <div class="chips" id="est">${Object.entries(ESTADOS).map(([k, e]) => `<button class="chip" data-k="${k}">${e.t}</button>`).join("")}</div>
          <h3 id="st" style="margin-top:16px"></h3><p id="sd"></p>
          <svg viewBox="0 0 400 110" class="sim-svg"><rect width="400" height="110" fill="#2d3142"/><rect x="250" y="0" width="8" height="110" fill="#fff"/>
            <g id="scar">${coche("#2b59ff")}</g></svg>
        </div></div>`;
      const $ = s => el.querySelector(s);
      let anim = null;
      const set = k => {
        const e = ESTADOS[k];
        el.querySelectorAll("#est .chip").forEach(c => c.classList.toggle("on", c.dataset.k === k));
        [0, 1, 2].forEach(i => { const c = $("#l" + i); c.setAttribute("fill", e.luz[i] || "#3a3d48"); c.style.filter = e.luz[i] ? `drop-shadow(0 0 10px ${e.luz[i]})` : ""; c.classList.toggle("blink", !!(e.blink && e.luz[i])); });
        $("#arrow").setAttribute("opacity", e.arrow ? 1 : 0);
        $("#st").textContent = e.t; $("#sd").innerHTML = fmt(e.d);
        anim && anim(); let x = 20, y = 70, ang = 0, t = 0;
        anim = loop(dt => {
          t += dt;
          if (e.a === "go") x += 140 * dt;
          else if (e.a === "slow") x += 60 * dt;
          else if (e.a === "stop") x += Math.max(0, (225 - x)) * 2.5 * dt;
          else if (e.a === "turn") { if (x < 280) x += 100 * dt; else { ang = Math.max(-90, ang - 120 * dt); x += 60 * dt * Math.cos(ang * Math.PI / 180); y += 60 * dt * Math.sin(ang * Math.PI / 180); } }
          if (x > 440 || y < -30) { x = 20; y = 70; ang = 0; }
          $("#scar").setAttribute("transform", `translate(${x},${y}) rotate(${ang}) scale(1.5)`);
          el.querySelectorAll("#scar .int-izq").forEach(c => c.setAttribute("opacity", e.a === "turn" && Math.floor(t * 3) % 2 ? 1 : 0));
        });
      };
      el.querySelectorAll("#est .chip").forEach(c => c.addEventListener("click", () => set(c.dataset.k)));
      set("rojo");
      return () => anim && anim();
    }
  });

  // 4. Glorieta -------------------------------------------------------------
  S.push({
    id: "glorieta", titulo: "Cómo circular por una glorieta", emoji: "🔄", tema: "prioridad", lecciones: ["prioridad-glorietas", "via-intersecciones"],
    descripcion: "Elige la salida y mira el recorrido correcto: ceder el paso, carril, intermitentes y salida.",
    montar(el) {
      const C = 200, RO = 112, RI = 88;
      const brazo = (rot) => `<g transform="rotate(${rot} 200 200)"><rect x="170" y="290" width="60" height="120" fill="#3a3f52"/><line x1="200" y1="300" x2="200" y2="400" stroke="#fff" stroke-width="2" stroke-dasharray="10 10"/><line x1="172" y1="318" x2="200" y2="318" stroke="#fff" stroke-width="3" stroke-dasharray="5 4"/></g>`;
      el.innerHTML = `<div class="sim sim-row">
        <svg viewBox="0 0 400 400" class="glo-svg">
          <rect width="400" height="400" fill="#7fbf6a"/>
          ${[0, 90, 180, 270].map(brazo).join("")}
          <circle cx="200" cy="200" r="128" fill="#3a3f52"/>
          <circle cx="200" cy="200" r="100" fill="none" stroke="#fff" stroke-width="2" stroke-dasharray="10 10"/>
          <circle cx="200" cy="200" r="72" fill="#5aa04a" stroke="#fff" stroke-width="3"/>
          <text x="200" y="212" text-anchor="middle" font-size="34">🌳</text>
          <g id="otro">${coche("#f59e0b")}</g>
          <g id="yo">${coche("#2b59ff")}</g>
          <g font-size="13" font-weight="700" fill="#fff" text-anchor="middle"><text x="372" y="190">1ª</text><text x="214" y="22">2ª</text><text x="28" y="218">3ª</text></g>
        </svg>
        <div style="flex:1;min-width:240px">
          <div class="chips" id="sal"><button class="chip" data-s="1">1ª salida (derecha)</button><button class="chip" data-s="2">2ª (recto)</button><button class="chip" data-s="3">3ª (izquierda)</button><button class="chip" data-s="4">Cambio de sentido</button></div>
          <div class="glo-step" id="cap"><b>Elige una salida</b> para ver la maniobra paso a paso.</div>
          <ol class="glo-rules"><li>Antes de entrar, <b>cede el paso</b> a quien ya circula dentro.</li><li>Si vas a una salida lejana puedes usar el <b>carril interior</b>.</li><li>Pon el <b>intermitente derecho</b> al pasar la salida anterior a la tuya.</li><li>Sal <b>siempre desde el carril exterior</b> (derecho).</li></ol>
        </div></div>`;
      const $ = s => el.querySelector(s);
      const P = (r, deg) => [C + r * Math.cos(deg * Math.PI / 180), C - r * Math.sin(deg * Math.PI / 180)];
      // otro coche dando vueltas
      let ang2 = 20, stop2, stop1;
      stop2 = loop(dt => { ang2 = (ang2 + 50 * dt) % 360; const [x, y] = P(RO, ang2); $("#otro").setAttribute("transform", `translate(${x},${y}) rotate(${-ang2 - 90})`); });
      const ruta = s => {
        const pts = []; const fin = 270 + 90 * s; const interior = s >= 3;
        for (let y = 410; y >= 312; y -= 4) pts.push({ x: 215, y, fase: 0 });
        for (let a = 282; a <= fin - 12; a += 2) {
          const k = (a - 282) / Math.max(1, (fin - 12 - 282));
          let r = RO; if (interior) { r = k < .2 ? RO - (RO - RI) * (k / .2) : k > .72 ? RI + (RO - RI) * Math.min(1, (k - .72) / .2) : RI; }
          const [x, y] = P(r, a);
          const fase = a < 300 ? 1 : (interior && k < .2) ? 2 : (a > fin - 12 - 70) ? 4 : 3;
          pts.push({ x, y, fase });
        }
        const out = { 1: [1, 0], 2: [0, -1], 3: [-1, 0], 4: [0, 1] }[s]; const [ex, ey] = P(RO, fin - 12);
        const lado = { 1: [400, 215], 2: [215, 0], 3: [0, 185], 4: [185, 400] }[s];
        for (let k = 0; k <= 1; k += .04) pts.push({ x: ex + (lado[0] - ex) * (out[0] ? k : k * k) , y: ey + (lado[1] - ey) * (out[1] ? k : k * k), fase: 5 });
        return pts;
      };
      const textos = [
        "1️⃣ **Te acercas y reduces la velocidad.** Mira a tu izquierda: quien está dentro de la glorieta tiene prioridad.",
        "2️⃣ **Entras cuando hay hueco**, sin obligar a frenar a nadie.",
        "3️⃣ **Pasas al carril interior** con el intermitente izquierdo, porque vas a una salida lejana.",
        "4️⃣ **Circulas por la glorieta** hasta acercarte a tu salida.",
        "5️⃣ **Intermitente derecho** y te colocas en el carril exterior antes de salir.",
        "6️⃣ **Sales** por el carril derecho. ¡Maniobra perfecta! 🎉"
      ];
      const ir = s => {
        el.querySelectorAll("#sal .chip").forEach(c => c.classList.toggle("on", +c.dataset.s === s));
        stop1 && stop1(); const pts = ruta(s); let i = 0, espera = 1.4, t = 0, faseAnt = -1;
        stop1 = loop(dt => {
          t += dt;
          const p = pts[Math.floor(i)];
          if (p.fase === 0 && pts[Math.floor(i) + 1] && pts[Math.floor(i) + 1].fase === 1 && espera > 0) espera -= dt; else i = Math.min(pts.length - 1, i + dt * 32);
          const a = pts[Math.floor(i)], b = pts[Math.min(pts.length - 1, Math.floor(i) + 1)];
          const ang = Math.atan2(b.y - a.y, b.x - a.x) * 180 / Math.PI;
          $("#yo").setAttribute("transform", `translate(${a.x},${a.y}) rotate(${ang})`);
          const blink = Math.floor(t * 3) % 2 === 0;
          el.querySelectorAll("#yo .int-izq").forEach(c => c.setAttribute("opacity", a.fase === 2 && blink ? 1 : 0));
          el.querySelectorAll("#yo .int-der").forEach(c => c.setAttribute("opacity", (a.fase === 4 || (s === 1 && a.fase >= 1 && a.fase < 5)) && blink ? 1 : 0));
          if (a.fase !== faseAnt) { faseAnt = a.fase; $("#cap").innerHTML = fmt(textos[a.fase]); $("#cap").classList.remove("pop"); void $("#cap").offsetWidth; $("#cap").classList.add("pop"); }
          if (i >= pts.length - 1) { stop1(); stop1 = null; }
        });
      };
      el.querySelectorAll("#sal .chip").forEach(c => c.addEventListener("click", () => ir(+c.dataset.s)));
      const [x0, y0] = [215, 400]; $("#yo").setAttribute("transform", `translate(${x0},${y0}) rotate(-90)`);
      return () => { stop1 && stop1(); stop2 && stop2(); };
    }
  });

  // 5. Alcohol ---------------------------------------------------------------
  S.push({
    id: "alcohol", titulo: "Alcoholímetro: ¿cuánto es demasiado?", emoji: "🍷", tema: "factores", lecciones: ["factores-alcohol-limites", "examen-novel"],
    descripcion: "Mueve la tasa y elige tu tipo de conductor para ver si es legal, multa o delito.",
    montar(el) {
      el.innerHTML = `<div class="sim">
        <div class="sim-controls">
          <div class="seg" id="tipo"><button class="on" data-t="g">🙂 Conductor general</button><button data-t="n">🔰 Novel (menos de 2 años)</button></div>
          <label>Tasa en aire espirado: <b id="t-val">0,20</b> mg/l<input type="range" id="t" min="0" max="0.8" step="0.01" value="0.20"></label>
        </div>
        <div class="alco"><div class="alco-meter"><div class="alco-fill" id="fill"></div><div class="alco-marks" id="marks"></div></div>
          <div class="alco-res" id="res"></div></div>
        <p class="sim-tip">En sangre la cifra es el doble: <b>0,25 mg/l en aire = 0,5 g/l en sangre</b>. El alcohol no se elimina con café ni ducha: solo con tiempo. Lo más seguro: <b>0,0</b>.</p></div>`;
      const $ = s => el.querySelector(s); let tipo = "g";
      const upd = () => {
        const t = +$("#t").value, lim = tipo === "g" ? .25 : .15, alto = tipo === "g" ? .5 : .3;
        $("#t-val").textContent = t.toFixed(2).replace(".", ",");
        let cls, ico, txt;
        if (t > .6) { cls = "delito"; ico = "🚔"; txt = "**Delito penal** (más de 0,60 mg/l): cárcel de 3 a 6 meses o multa, y retirada del permiso de 1 a 4 años."; }
        else if (t > alto) { cls = "grave"; ico = "⛔"; txt = `**Infracción muy grave**: **1.000 € y 6 puntos** (más de ${String(alto).replace(".", ",")} mg/l).`; }
        else if (t > lim) { cls = "multa"; ico = "⚠️"; txt = `**Infracción**: **500 € y 4 puntos** (más de ${String(lim).replace(".", ",")} mg/l).`; }
        else { cls = "ok"; ico = t === 0 ? "😇" : "🙂"; txt = t === 0 ? "**Tasa 0.** La opción más segura." : `Por debajo del límite (${String(lim).replace(".", ",")} mg/l)… pero tus reflejos **ya están afectados**.`; }
        $("#fill").style.height = (t / .8 * 100) + "%"; $("#fill").className = "alco-fill " + cls;
        $("#res").innerHTML = `<div class="alco-ico">${ico}</div><div>${fmt(txt)}</div>`; $("#res").className = "alco-res " + cls;
        $("#marks").innerHTML = [[lim, "límite"], [alto, "6 pts"], [.6, "delito"]].map(([v, n]) => `<span style="bottom:${v / .8 * 100}%">${String(v).replace(".", ",")} · ${n}</span>`).join("");
      };
      $("#t").addEventListener("input", upd);
      $("#tipo").addEventListener("click", e => { const b = e.target.closest("button"); if (!b) return; tipo = b.dataset.t; el.querySelectorAll("#tipo button").forEach(q => q.classList.toggle("on", q === b)); upd(); });
      upd();
    }
  });

  // 6. Luces ---------------------------------------------------------------
  const LUCES = {
    dia: { t: "☀️ Día soleado", luz: "Ninguna obligatoria (o luces diurnas)", cls: "dia", haz: 0, d: "De día con buena visibilidad no es obligatorio encender luces fuera de túneles. Muchos coches llevan **luces diurnas** automáticas." },
    ciudad: { t: "🌃 Noche en ciudad iluminada", luz: "Luces de cruce (cortas)", cls: "noche", haz: 1, d: "En poblado con buena iluminación: **cortas**. Las largas están prohibidas en vías urbanas suficientemente iluminadas." },
    carretera: { t: "🌌 Noche, carretera sin nadie", luz: "Luces de carretera (largas)", cls: "noche", haz: 2, d: "Fuera de poblado, sin iluminación y sin nadie delante: **largas**, para ver mucho más lejos." },
    cruce: { t: "🚗 Te cruzas con otro coche", luz: "Cambia a cortas", cls: "noche", haz: 1, otro: 1, d: "Al cruzarte con otro vehículo pasa a **cortas** para no deslumbrarle. Si te deslumbran a ti: mira al borde derecho y reduce velocidad." },
    tunel: { t: "🚇 Túnel", luz: "Luces de cruce siempre", cls: "tunel", haz: 1, d: "En túneles es **obligatorio** llevar las de cruce aunque esté iluminado y sea de día." },
    niebla: { t: "🌫️ Niebla densa (< 50 m)", luz: "Cruce + antiniebla delantera y trasera", cls: "niebla", haz: 3, d: "Con niebla espesa: **cortas + antiniebla**. La **trasera** solo con visibilidad **inferior a 50 m**; apágala cuando mejore." },
    lluvia: { t: "🌧️ Lluvia intensa", luz: "Cruce + antiniebla delantera", cls: "lluvia", haz: 4, d: "Con lluvia muy intensa puedes usar la **antiniebla delantera** junto a las cortas. La trasera solo si la visibilidad baja de 50 m." }
  };
  S.push({
    id: "luces", titulo: "¿Qué luces pongo?", emoji: "💡", tema: "alumbrado", lecciones: ["alumbrado-luces", "alumbrado-especiales", "alumbrado-tuneles"],
    descripcion: "Elige la situación y mira qué luces debes llevar encendidas.",
    montar(el) {
      el.innerHTML = `<div class="sim">
        <div class="chips" id="sit">${Object.entries(LUCES).map(([k, s]) => `<button class="chip" data-k="${k}">${s.t}</button>`).join("")}</div>
        <div class="luces-scene" id="scene">
          <svg viewBox="0 0 800 200" class="sim-svg">
            <defs><linearGradient id="haz" x1="0" x2="1"><stop offset="0" stop-color="#fff6c8" stop-opacity=".9"/><stop offset="1" stop-color="#fff6c8" stop-opacity="0"/></linearGradient>
            <radialGradient id="rojo"><stop offset="0" stop-color="#ff3b3b"/><stop offset="1" stop-color="#ff3b3b" stop-opacity="0"/></radialGradient></defs>
            <rect x="0" y="60" width="800" height="120" fill="#2d3142"/>
            <line x1="0" y1="120" x2="800" y2="120" stroke="#ffd23f" stroke-width="3" stroke-dasharray="26 22"/>
            <polygon id="beam" points="180,140 180,160 300,180 300,120" fill="url(#haz)"/>
            <circle id="rear" cx="96" cy="150" r="0" fill="url(#rojo)"/>
            <g id="otro2" opacity="0" transform="translate(640,90) rotate(180) scale(1.8)">${coche("#e5383b")}</g>
            <g transform="translate(140,150) scale(1.8)">${coche("#2b59ff")}</g>
            <rect id="fog" x="0" y="0" width="800" height="200" fill="#cfd6e0" opacity="0"/>
            <g id="rain"></g>
          </svg></div>
        <div class="sim-out" id="out"></div></div>`;
      const $ = s => el.querySelector(s);
      $("#rain").innerHTML = Array.from({ length: 60 }, (_, i) => `<line x1="${(i * 53) % 800}" y1="${(i * 37) % 200}" x2="${(i * 53) % 800 - 6}" y2="${(i * 37) % 200 + 16}" stroke="#a9c7ff" stroke-width="2" opacity=".7" class="drop"/>`).join("");
      const set = k => {
        const s = LUCES[k];
        el.querySelectorAll("#sit .chip").forEach(c => c.classList.toggle("on", c.dataset.k === k));
        $("#scene").className = "luces-scene " + s.cls;
        const len = [0, 180, 520, 150, 160][s.haz];
        $("#beam").setAttribute("points", `168,138 168,162 ${168 + len},${190} ${168 + len},${s.haz === 2 ? 70 : 115}`);
        $("#beam").style.opacity = s.haz ? 1 : 0;
        $("#rear").setAttribute("r", s.haz === 3 ? 26 : 0);
        $("#otro2").setAttribute("opacity", s.otro ? 1 : 0);
        $("#fog").setAttribute("opacity", s.cls === "niebla" ? .55 : 0);
        $("#rain").style.display = s.cls === "lluvia" ? "" : "none";
        $("#out").innerHTML = `<span class="res-ok">💡 ${esc(s.luz)}</span><span>${fmt(s.d)}</span>`;
      };
      el.querySelectorAll("#sit .chip").forEach(c => c.addEventListener("click", () => set(c.dataset.k)));
      set("carretera");
    }
  });

  // 7. Adelantar a un ciclista ----------------------------------------------
  S.push({
    id: "ciclista", titulo: "Adelantar a un ciclista", emoji: "🚴", tema: "maniobras", lecciones: ["maniobras-adelantar-ciclistas-averiados", "maniobras-adelantamiento-normas", "via-ciclistas-prioritarios"],
    descripcion: "Mira cómo se adelanta a una bici: separación lateral mínima de 1,5 m, aunque tengas que invadir el carril contrario.",
    montar(el) {
      el.innerHTML = `<div class="sim">
        <div class="sim-controls"><button class="btn btn-primary" id="go">▶ Ver adelantamiento</button>
          <label class="chk"><input type="checkbox" id="mal"> Mostrar cómo NO hacerlo</label></div>
        <svg viewBox="0 0 800 170" class="sim-svg">
          <rect x="0" y="20" width="800" height="130" fill="#2d3142"/>
          <line x1="0" y1="85" x2="800" y2="85" stroke="#fff" stroke-width="3"/>
          <line x1="0" y1="28" x2="800" y2="28" stroke="#fff" stroke-width="2"/><line x1="0" y1="142" x2="800" y2="142" stroke="#fff" stroke-width="2"/>
          <g id="bici"><text font-size="30" text-anchor="middle" y="10" transform="scale(-1,1)">🚴</text></g>
          <g id="sep" opacity="0"><line id="sepl" stroke="#22c55e" stroke-width="3" marker-start="url(#ar)" marker-end="url(#ar)"/><text id="sept" font-size="15" font-weight="800" fill="#22c55e"></text></g>
          <defs><marker id="ar" viewBox="0 0 10 10" refX="5" refY="5" markerWidth="5" markerHeight="5" orient="auto-start-reverse"><path d="M0 0 L10 5 L0 10z" fill="#22c55e"/></marker></defs>
          <g id="car">${coche("#2b59ff")}</g>
        </svg>
        <div class="sim-out" id="out"><span>Pulsa <b>Ver adelantamiento</b>.</span></div>
        <p class="sim-tip">Para adelantar a ciclistas puedes **pisar la línea continua** si la visibilidad lo permite y no hay nadie de frente. Deja **al menos 1,5 m** de separación. Si no hay sitio, espera detrás.</p></div>`;
      el.querySelector(".sim-tip").innerHTML = fmt(el.querySelector(".sim-tip").textContent);
      const $ = s => el.querySelector(s); let stop = null;
      const pos = () => { $("#bici").setAttribute("transform", "translate(420,128)"); $("#car").setAttribute("transform", "translate(60,118) scale(1.6)"); $("#sep").setAttribute("opacity", 0); };
      pos();
      $("#go").addEventListener("click", () => {
        stop && stop(); const mal = $("#mal").checked; let x = 60, bx = 420, t = 0;
        const yLane = 118, yOver = mal ? 104 : 62;
        stop = loop(dt => {
          t += dt; x += 150 * dt; bx += 40 * dt;
          const rel = x - bx; let y = yLane;
          if (rel > -200 && rel < 160) y = yLane + (yOver - yLane) * Math.min(1, Math.min(rel + 200, 160 - rel) / 70);
          const ang = rel > -200 && rel < -130 ? -12 : rel > 90 && rel < 160 ? 12 : 0;
          $("#car").setAttribute("transform", `translate(${x},${y}) rotate(${mal ? 0 : ang}) scale(1.6)`);
          $("#bici").setAttribute("transform", `translate(${bx},128)`);
          const al = Math.abs(rel) < 60;
          $("#sep").setAttribute("opacity", al ? 1 : 0);
          if (al) { $("#sepl").setAttribute("x1", bx - 5); $("#sepl").setAttribute("x2", bx - 5); $("#sepl").setAttribute("y1", y + 14); $("#sepl").setAttribute("y2", 116);
            $("#sepl").setAttribute("stroke", mal ? "#ef4444" : "#22c55e"); $("#sept").setAttribute("x", bx + 8); $("#sept").setAttribute("y", (y + 130) / 2); $("#sept").setAttribute("fill", mal ? "#ef4444" : "#22c55e"); $("#sept").textContent = mal ? "0,5 m ❌" : "≥ 1,5 m ✅"; }
          $("#out").innerHTML = mal ? `<span class="res-ko">❌ Adelantamiento peligroso: pasa demasiado pegado. Es una infracción grave con multa y pérdida de puntos, y puede tirar al ciclista.</span>` : `<span class="res-ok">✅ Correcto: se aparta al carril contrario y deja más de 1,5 m.</span>`;
          if (x > 860) { stop(); stop = null; }
        });
      });
      return () => stop && stop();
    }
  });

  // 8. PAS -----------------------------------------------------------------
  const PAS = [
    { l: "P", t: "Proteger", e: "🦺", c: "#f59e0b", d: ["Enciende las **luces de emergencia** y ponte el **chaleco** antes de salir del coche.", "Activa la **baliza V-16** sobre el techo: avisa a los demás y geolocaliza el incidente.", "Apaga el motor de los coches accidentados y no fumes cerca."] },
    { l: "A", t: "Avisar", e: "📞", c: "#3b82f6", d: ["Llama al **112** (gratuito, desde cualquier móvil, incluso sin cobertura de tu compañía).", "Di **dónde** estás (carretera, km, sentido), **qué** ha pasado y **cuántos heridos** hay.", "No cuelgues hasta que te lo digan."] },
    { l: "S", t: "Socorrer", e: "❤️", c: "#ef4444", d: ["**No muevas** al herido salvo peligro inminente (fuego, atropello…).", "**No quites el casco** a un motorista.", "No des de beber ni comer al herido. Abrígale y tranquilízale."] }
  ];
  S.push({
    id: "pas", titulo: "Conducta PAS ante un accidente", emoji: "🚑", tema: "accidentes", lecciones: ["accidentes-pas", "accidentes-primeros-auxilios", "accidentes-senalizar-parte"],
    descripcion: "Proteger, Avisar y Socorrer: el orden importa. Pulsa cada paso.",
    montar(el) {
      el.innerHTML = `<div class="sim"><div class="pas">${PAS.map((p, i) => `<button class="pas-step" data-i="${i}" style="--pc:${p.c}"><span class="pas-l">${p.l}</span><span class="pas-e">${p.e}</span><b>${p.t}</b></button>`).join('<span class="pas-arrow">➜</span>')}</div>
        <div class="pas-detail" id="pd"></div><p class="sim-tip">El orden es <b>P → A → S</b>: si no te proteges primero, puedes convertirte en otra víctima.</p></div>`;
      const set = i => {
        el.querySelectorAll(".pas-step").forEach((b, j) => { b.classList.toggle("on", j === i); b.classList.toggle("done", j < i); });
        const p = PAS[i]; const d = el.querySelector("#pd");
        d.style.setProperty("--pc", p.c);
        d.innerHTML = `<h3>${p.e} ${p.t}</h3><ul>${p.d.map((x, k) => `<li style="animation-delay:${k * .12}s">${fmt(x)}</li>`).join("")}</ul>${i < 2 ? `<button class="btn btn-ghost btn-sm" id="pn">Siguiente paso →</button>` : ""}`;
        const n = el.querySelector("#pn"); if (n) n.addEventListener("click", () => set(i + 1));
      };
      el.querySelectorAll(".pas-step").forEach(b => b.addEventListener("click", () => set(+b.dataset.i)));
      set(0);
    }
  });

  window.SIMULADORES = S;
})();
