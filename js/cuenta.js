/* Cuentas de usuario.
   - Modo local (por defecto): las cuentas viven en este navegador. La contraseña se guarda
     como hash SHA-256 con sal y cada cuenta tiene su propio progreso.
   - Modo nube: si js/config.js tiene las claves de Supabase, se usa su autenticación y la
     tabla `progreso` (ver supabase/schema.sql) para sincronizar entre dispositivos. */
(function () {
  "use strict";
  const CONF = window.CARNET_CONFIG || {};
  const NUBE = !!(CONF.supabaseUrl && CONF.supabaseKey);
  const LS_CUENTAS = "carnetB-cuentas", LS_SES = "carnetB-sesion", NOPERSIST = "carnetB-nopersist", VIVO = "carnetB-vivo";
  const COLORES = ["#d4532a", "#1f3a5f", "#2a7f7a", "#6c5a9c", "#3f7d4e", "#a34d6d", "#b8861f", "#2f6f9f"];
  let client = null, usuario = null, recuperando = false, estadoSync = NUBE ? "pendiente" : "local", tSubir = null;

  const leer = (k, st) => { try { return JSON.parse((st || localStorage).getItem(k)); } catch (e) { return null; } };
  const escribir = (k, v, st) => { try { (st || localStorage).setItem(k, JSON.stringify(v)); } catch (e) { /* sin almacenamiento */ } };
  const quitar = k => { try { localStorage.removeItem(k); sessionStorage.removeItem(k); } catch (e) { /* */ } };
  const cuentas = () => leer(LS_CUENTAS) || [];
  const rid = () => (window.crypto && crypto.randomUUID) ? crypto.randomUUID() : Date.now().toString(36) + Math.random().toString(36).slice(2);

  async function hash(salt, pass) {
    try {
      const buf = await crypto.subtle.digest("SHA-256", new TextEncoder().encode(salt + ":" + pass));
      return [...new Uint8Array(buf)].map(b => b.toString(16).padStart(2, "0")).join("");
    } catch (e) { let h = 5381; for (const c of salt + ":" + pass) h = (h * 33 ^ c.charCodeAt(0)) >>> 0; return "d" + h.toString(16); }
  }
  function cargarSDK() {
    if (window.supabase) return Promise.resolve(window.supabase);
    return new Promise((ok, ko) => {
      const s = document.createElement("script");
      s.src = "https://cdn.jsdelivr.net/npm/@supabase/supabase-js@2.45.4/dist/umd/supabase.js";
      s.onload = () => ok(window.supabase); s.onerror = ko; document.head.appendChild(s);
    });
  }
  const deLocal = c => ({ id: c.id, email: c.email, nombre: c.nombre, color: c.color, tipo: "local" });
  const deNube = u => { const m = u.user_metadata || {}; return { id: u.id, email: u.email, nombre: m.nombre || (u.email || "").split("@")[0], color: m.color || COLORES[0], tipo: "nube" }; };
  function traducir(m) {
    m = String(m || "");
    if (/invalid login/i.test(m)) return "Correo o contraseña incorrectos.";
    if (/already registered|already exists/i.test(m)) return "Ya existe una cuenta con ese correo.";
    if (/not confirmed/i.test(m)) return "Confirma tu correo: te hemos enviado un enlace.";
    if (/password/i.test(m)) return "La contraseña no es válida (mínimo 6 caracteres).";
    if (/fetch|network/i.test(m)) return "No hay conexión con el servidor. Inténtalo de nuevo.";
    return m;
  }
  function validar(d, registro) {
    if (registro && (!d.nombre || d.nombre.trim().length < 2)) return "Escribe tu nombre (mínimo 2 letras).";
    if (!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test((d.email || "").trim())) return "Escribe un correo válido.";
    if (!d.pass || d.pass.length < 6) return "La contraseña debe tener al menos 6 caracteres.";
    return null;
  }
  function persistencia(recordar) {
    try { if (recordar) localStorage.removeItem(NOPERSIST); else { localStorage.setItem(NOPERSIST, "1"); sessionStorage.setItem(VIVO, "1"); } } catch (e) { /* */ }
  }
  function abrirLocal(c, recordar) { usuario = deLocal(c); quitar(LS_SES); escribir(LS_SES, { id: c.id }, recordar ? localStorage : sessionStorage); }

  async function iniciar() {
    if (NUBE) {
      try {
        const sb = await cargarSDK();
        client = sb.createClient(CONF.supabaseUrl, CONF.supabaseKey, { auth: { persistSession: true, autoRefreshToken: true, detectSessionInUrl: true, flowType: "pkce" } });
        if (localStorage.getItem(NOPERSIST) && !sessionStorage.getItem(VIVO)) { await client.auth.signOut(); localStorage.removeItem(NOPERSIST); }
        client.auth.onAuthStateChange((evt, ses) => { if (evt === "PASSWORD_RECOVERY") { recuperando = true; if (ses) usuario = deNube(ses.user); } });
        const { data } = await client.auth.getSession();
        if (/[?&]code=/.test(location.search)) history.replaceState(null, "", location.pathname + location.hash);
        if (data && data.session) usuario = deNube(data.session.user);
        estadoSync = "ok";
      } catch (e) { console.warn("Sin conexión con la nube:", e); estadoSync = "error"; }
    } else {
      const s = leer(LS_SES) || leer(LS_SES, sessionStorage);
      const c = s && cuentas().find(x => x.id === s.id);
      if (c) usuario = deLocal(c);
    }
    return usuario;
  }
  async function registrar(d) {
    const err = validar(d, true); if (err) throw new Error(err);
    const email = d.email.trim().toLowerCase(), nombre = d.nombre.trim(), color = COLORES[Math.floor(Math.random() * COLORES.length)];
    if (NUBE) {
      if (!client) throw new Error("No hay conexión con el servidor.");
      const { data, error } = await client.auth.signUp({ email, password: d.pass, options: { data: { nombre, color } } });
      if (error) throw new Error(traducir(error.message));
      if (!data.session) return { confirmar: true };
      usuario = deNube(data.user); persistencia(d.recordar); return { usuario };
    }
    const cs = cuentas();
    if (cs.some(c => c.email === email)) throw new Error("Ya existe una cuenta con ese correo en este dispositivo.");
    const salt = rid(); const c = { id: rid(), nombre, email, salt, hash: await hash(salt, d.pass), color, creada: Date.now() };
    cs.push(c); escribir(LS_CUENTAS, cs); abrirLocal(c, d.recordar);
    return { usuario };
  }
  async function entrar(d) {
    const err = validar(d); if (err) throw new Error(err);
    const email = d.email.trim().toLowerCase();
    if (NUBE) {
      if (!client) throw new Error("No hay conexión con el servidor.");
      const { data, error } = await client.auth.signInWithPassword({ email, password: d.pass });
      if (error) throw new Error(traducir(error.message));
      usuario = deNube(data.user); persistencia(d.recordar); return usuario;
    }
    const c = cuentas().find(x => x.email === email);
    if (!c || c.hash !== await hash(c.salt, d.pass)) throw new Error("Correo o contraseña incorrectos.");
    abrirLocal(c, d.recordar); return usuario;
  }
  const volverA = () => location.origin + location.pathname;
  async function enlace(email) {
    if (!(NUBE && client)) throw new Error("Esta opción necesita las cuentas en la nube.");
    if (!/^[^@s]+@[^@s]+.[^@s]+$/.test((email || "").trim())) throw new Error("Escribe un correo válido.");
    const { error } = await client.auth.signInWithOtp({ email: email.trim().toLowerCase(), options: { emailRedirectTo: volverA() } });
    if (error) throw new Error(traducir(error.message));
  }
  async function recuperar(email) {
    if (!(NUBE && client)) throw new Error("Esta opción necesita las cuentas en la nube.");
    if (!/^[^@s]+@[^@s]+.[^@s]+$/.test((email || "").trim())) throw new Error("Escribe tu correo para enviarte el enlace.");
    const { error } = await client.auth.resetPasswordForEmail(email.trim().toLowerCase(), { redirectTo: volverA() });
    if (error) throw new Error(traducir(error.message));
  }
  async function salir() {
    clearTimeout(tSubir);
    if (NUBE && client) { try { await client.auth.signOut(); } catch (e) { /* */ } }
    quitar(LS_SES); usuario = null;
  }
  async function actualizarPerfil(p) {
    if (!usuario) return;
    Object.assign(usuario, p);
    if (NUBE && client) { try { await client.auth.updateUser({ data: { nombre: usuario.nombre, color: usuario.color } }); } catch (e) { /* */ } }
    else { const cs = cuentas(); const c = cs.find(x => x.id === usuario.id); if (c) { Object.assign(c, p); escribir(LS_CUENTAS, cs); } }
  }
  async function cambiarPass(actual, nueva) {
    if (!usuario) return;
    if (!nueva || nueva.length < 6) throw new Error("La nueva contraseña debe tener al menos 6 caracteres.");
    if (NUBE && client) { const { error } = await client.auth.updateUser({ password: nueva }); if (error) throw new Error(traducir(error.message)); return; }
    const cs = cuentas(); const c = cs.find(x => x.id === usuario.id);
    if (!c || c.hash !== await hash(c.salt, actual)) throw new Error("La contraseña actual no es correcta.");
    c.salt = rid(); c.hash = await hash(c.salt, nueva); escribir(LS_CUENTAS, cs);
  }
  async function borrarCuenta() {
    if (!usuario) return;
    const id = usuario.id;
    if (NUBE && client) { try { await client.from("progreso").delete().eq("user_id", id); } catch (e) { /* */ } }
    else escribir(LS_CUENTAS, cuentas().filter(c => c.id !== id));
    try { localStorage.removeItem("carnetB-v2:" + id); } catch (e) { /* */ }
    await salir();
  }
  async function bajar() {
    if (!(NUBE && client && usuario)) return null;
    const { data, error } = await client.from("progreso").select("datos").eq("user_id", usuario.id).maybeSingle();
    if (error) { estadoSync = "error"; throw error; }
    estadoSync = "ok"; return data ? data.datos : null;
  }
  function subir(datos) {
    if (!(NUBE && client && usuario)) return;
    clearTimeout(tSubir);
    const uid = usuario.id;
    tSubir = setTimeout(async () => {
      try { const { error } = await client.from("progreso").upsert({ user_id: uid, datos, actualizado: new Date().toISOString() }); estadoSync = error ? "error" : "ok"; }
      catch (e) { estadoSync = "error"; }
    }, 1500);
  }

  window.CUENTA = {
    iniciar, registrar, entrar, enlace, recuperar, salir, actualizarPerfil, cambiarPass, borrarCuenta, bajar, subir, COLORES,
    get usuario() { return usuario; }, get nube() { return NUBE; }, get sync() { return estadoSync; }, get recuperando() { return recuperando; }, finRecuperar() { recuperando = false; },
    clave: () => usuario ? "carnetB-v2:" + usuario.id : "carnetB-v2"
  };
})();
