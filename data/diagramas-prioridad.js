window.DIAGRAMAS = (window.DIAGRAMAS || []).concat([
  // Mapa mental del tema (exactamente 1)
  { tema: "prioridad", diagrama: { tipo: "mapa", titulo: "Mapa de la prioridad", centro: "Prioridad de paso", ramas: [
    { t: "Regla general", hojas: ["Sin señales: cede a la derecha", "Asfaltada gana a la de tierra", "Tranvía gana a los coches"] },
    { t: "Cruces con señal", hojas: ["Ceda: frena si hace falta", "STOP: parada total, siempre", "Agentes y semáforos mandan antes"] },
    { t: "Glorietas", hojas: ["Dentro de la glorieta tiene preferencia", "Quien entra cede el paso", "Mira a tu izquierda al entrar"] },
    { t: "Estrechos y pendientes", hojas: ["Sin señal: gana quien entró primero", "Pendiente estrecha: sube quien sube", "R-5 espera, R-6 da preferencia"] },
    { t: "Pasos a nivel", hojas: ["Barreras cerradas: espera detrás", "Luz roja intermitente: no entres", "Nunca cruces con barreras bajando"] },
    { t: "Vulnerables y prioritarios", hojas: ["Peatones en el paso: cedes", "Ciclistas: cede al girar", "Ambulancia: apártate a la derecha"] }
  ] } },

  // Regla de la derecha
  { leccion: "prioridad-regla-derecha", tras: 4, diagrama: { tipo: "arbol", titulo: "¿Quién pasa primero?", raiz: {
    q: "¿Hay señal, semáforo o agente en el cruce?",
    si: { r: "Manda la señal, el semáforo o el agente", ok: true },
    no: {
      q: "¿Viene otro vehículo por tu derecha?",
      si: {
        q: "¿Tu calle está asfaltada y la suya de tierra?",
        si: { r: "Pasas tú: tu calle tiene preferencia", ok: true },
        no: { r: "Cedes el paso al que viene por tu derecha", ok: true }
      },
      no: { r: "Pasas tú: el otro viene por tu izquierda", ok: true }
    }
  } } },

  // Intersecciones con señales
  { leccion: "prioridad-intersecciones-senales", tras: 3, diagrama: { tipo: "comparar", titulo: "Ceda el paso o STOP", columnas: [
    { t: "Ceda el paso", tono: "warn", items: ["Frenas si hace falta", "Si no viene nadie, puedes seguir", "Cedes a la vía preferente"] },
    { t: "STOP", tono: "bad", items: ["Parada total, siempre", "Aunque la calle esté libre", "Luego cedes a la vía preferente"] }
  ] } },
  { leccion: "prioridad-intersecciones-senales", tras: 8, diagrama: { tipo: "piramide", titulo: "Quién manda primero", niveles: [
    { t: "Agentes de la autoridad", d: "Sus órdenes mandan sobre todo lo demás" },
    { t: "Señalización circunstancial", d: "Obras, desvíos o señales temporales" },
    { t: "Semáforos", d: "Mandan sobre las señales de los postes" },
    { t: "Señales verticales", d: "Las de los postes: R, P y S" },
    { t: "Marcas viales", d: "Las líneas pintadas en el suelo" }
  ] } },

  // Glorietas
  { leccion: "prioridad-glorietas", tras: 3, diagrama: { tipo: "flujo", titulo: "Cómo entrar en una glorieta", pasos: [
    { t: "Mira a tu izquierda", d: "Ahí llega el tráfico que ya circula dentro" },
    { t: "Cede si viene alguien", d: "Quien ya está dentro tiene preferencia" },
    { t: "Elige el carril", d: "Derecho para la primera salida; izquierdo para seguir" },
    { t: "Sal por la derecha", d: "Intermitente derecho antes y borde derecho" }
  ] } },

  // Tramos estrechos, obras y puentes
  { leccion: "prioridad-tramos-estrechos-obras-puentes", tras: 3, diagrama: { tipo: "comparar", titulo: "R-5 o R-6", columnas: [
    { t: "R-5 círculo rojo", tono: "bad", items: ["Obliga a esperar", "No entres hasta poder cruzar", "No obligues a parar a los de frente"] },
    { t: "R-6 cuadrado azul", tono: "ok", items: ["Da preferencia en el paso", "Frente a quienes vienen en sentido contrario", "Lleva una flecha blanca y otra roja"] }
  ] } },

  // Pendientes y pasos a nivel
  { leccion: "prioridad-pendientes-pasos-nivel", tras: 2, diagrama: { tipo: "arbol", titulo: "Pendiente estrecha", raiz: {
    q: "¿Es una pendiente de 7 % o más y estrecha?",
    si: {
      q: "¿Subes tú por la pendiente?",
      si: { r: "Pasas tú: vas subiendo", ok: true },
      no: {
        q: "¿Estás más cerca de un apartadero?",
        si: { r: "Te apartas tú al apartadero y pasa el que sube", ok: true },
        no: { r: "Cedes: pasa primero el que sube", ok: true }
      }
    },
    no: { r: "Suave o ancha: rige la regla general", ok: true }
  } } },
  { leccion: "prioridad-pendientes-pasos-nivel", tras: 5, diagrama: { tipo: "acronimo", titulo: "ALTO en un paso a nivel", palabra: "ALTO", letras: [
    { l: "A", t: "Aminora", d: "Reduce la velocidad al acercarte al paso a nivel" },
    { l: "L", t: "Luz roja", d: "Si la luz roja intermitente está encendida, no entres" },
    { l: "T", t: "Tren", d: "Comprueba que no viene tren y cruza sin demora" },
    { l: "O", t: "Obedece", d: "Si las barreras están cerradas, espera en fila" }
  ] } },

  // Vehículos prioritarios y especiales
  { leccion: "prioridad-vehiculos-prioritarios", tras: 2, diagrama: { tipo: "flujo", titulo: "Ante un vehículo prioritario", pasos: [
    { t: "Sirena o luces", d: "Cuenta con ello y prepárate ya" },
    { t: "Apártate a la derecha", d: "Deja libre el carril para que pase" },
    { t: "Detente si hace falta", d: "Espera hasta que el vehículo haya pasado" }
  ] } },

  // Peatones, ciclistas y animales
  { leccion: "prioridad-peatones-ciclistas-animales", tras: 3, diagrama: { tipo: "ciclo", titulo: "Antes de cada giro", centro: "Cada giro", pasos: [
    { t: "Mira a peatones", d: "Mira el paso de la calle a la que vas" },
    { t: "Mira a ciclistas", d: "Si van por carril bici o paso para bicis, cedes" },
    { t: "Cede si cruzan", d: "Peatones y ciclistas que cruzan tienen preferencia" },
    { t: "Gira despacio", d: "Solo cuando nadie esté cruzando la calle" }
  ] } }
]);
