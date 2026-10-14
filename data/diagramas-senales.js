window.DIAGRAMAS = (window.DIAGRAMAS || []).concat([
  // Mapa mental del tema (exactamente 1)
  { tema: "senales", diagrama: { tipo: "mapa", titulo: "Señales de un vistazo", centro: "Señales y órdenes", ramas: [
    { t: "Orden de preferencia", hojas: ["**1.º** agentes, después obras", "Luego semáforos y señales", "Marcas viales al final"] },
    { t: "Agentes", hojas: ["**Brazo levantado**: para quien se acerca", "**Brazos extendidos**: para quien cruza", "**Pitido largo**: puedes seguir"] },
    { t: "Semáforos", hojas: ["**Verde fija**: paso permitido", "**Ámbar fijo**: como el rojo", "**Roja fija**: prohibido pasar"] },
    { t: "Señales verticales", hojas: ["**Triángulo**: avisa, no prohíbe", "**Círculo rojo**: prohíbe", "**Círculo azul**: obliga", "**Cuadrado azul**: informa"] },
    { t: "Marcas viales", hojas: ["**Continua**: no la cruces", "**Discontinua**: cruza si es seguro", "**Amarilla**: no aparcar"] }
  ] } },

  { leccion: "senales-jerarquia", tras: 2, diagrama: { tipo: "piramide", titulo: "Quién manda primero", niveles: [
    { t: "Agentes", d: "**Sus gestos** mandan sobre todo lo demás." },
    { t: "Obras y balizamiento", d: "Conos, balizas, desvíos y paneles de mensaje variable." },
    { t: "Semáforos", d: "Mandan sobre las señales verticales y las marcas." },
    { t: "Señales verticales", d: "Triángulos, círculos, cuadrados y octógonos de los postes." },
    { t: "Marcas viales", d: "Líneas y símbolos pintados en el asfalto." }
  ] } },

  { leccion: "senales-agentes", tras: 1, diagrama: { tipo: "comparar", titulo: "Gestos del agente", columnas: [
    { t: "Alto", tono: "bad", items: ["Brazo levantado en vertical", "Brazos extendidos en horizontal", "Linterna roja o amarilla en vaivén", "Pitidos cortos y repetidos"] },
    { t: "Reduce velocidad", tono: "warn", items: ["Brazo que sube y baja de forma alterna", "Vale para quien llega por ese costado"] },
    { t: "Puedes seguir", tono: "ok", items: ["Pitido largo del silbato", "Quien estaba parado puede seguir", "Quien ya está dentro del cruce no para"] }
  ] } },

  { leccion: "senales-semaforos", tras: 2, diagrama: { tipo: "ciclo", titulo: "Las luces, en orden", centro: "Ciclo normal", pasos: [
    { t: "Verde fija", d: "Puedes avanzar. No entres si vas a quedarte atrapado." },
    { t: "Ámbar fijo", d: "Como el rojo: paras, salvo si no puedes frenar." },
    { t: "Rojo fijo", d: "Prohibido pasar. Paras antes de la línea." }
  ] } },

  { leccion: "senales-peligro", tras: 1, diagrama: { tipo: "flujo", titulo: "Qué hacer al ver un triángulo", pasos: [
    { t: "Ves el triángulo", d: "Es un aviso: algo hay más adelante." },
    { t: "Reduce a tiempo", d: "Baja la velocidad antes del peligro, no en mitad." },
    { t: "Mira alrededor", d: "Busca cruces, peatones, niños o ciclistas." },
    { t: "Cede si hace falta", d: "Cede a peatones, ciclistas y a quien tiene prioridad." },
    { t: "Sigue atento", d: "Ningún triángulo prohíbe ni obliga por sí solo." }
  ] } },

  { leccion: "senales-prohibicion", tras: 3, diagrama: { tipo: "acronimo", titulo: "El STOP en cuatro letras", palabra: "STOP", letras: [
    { l: "S", t: "Se para", d: "Te detienes del todo, sin avanzar ni un metro." },
    { l: "T", t: "Tras la línea", d: "Paras en la línea de detención, o antes del cruce." },
    { l: "O", t: "Observa", d: "Mira a ambos lados antes de salir." },
    { l: "P", t: "Pasa", d: "Solo cuando sea seguro, cediendo el paso a quien viene." }
  ] } },

  { leccion: "senales-obligacion", tras: 1, diagrama: { tipo: "arbol", titulo: "¿Obliga, prohíbe o informa?", raiz: {
    q: "¿Es un círculo azul?",
    si: { r: "Obliga: haz lo que indica", ok: true },
    no: { q: "¿Es un cuadrado azul?",
      si: { r: "Solo informa o indica servicios", ok: true },
      no: { q: "¿Es blanca con banda gris?",
        si: { r: "Fin: anula una prohibición o límite", ok: true },
        no: { r: "Círculo rojo: prohíbe algo", ok: false } } }
  } } },

  { leccion: "senales-marcas", tras: 4, diagrama: { tipo: "comparar", titulo: "Qué significa cada línea", columnas: [
    { t: "Línea continua", tono: "bad", items: ["No la cruzas ni la pisas", "Sigues en tu carril", "Tampoco para adelantar"] },
    { t: "Línea discontinua", tono: "ok", items: ["Separa carriles del mismo sentido", "La cruzas si es necesario y seguro", "Ejemplo: cambiar de carril o adelantar"] },
    { t: "Marcas amarillas", tono: "warn", items: ["Zigzag: no aparcar en zonas reservadas", "Continua en la acera: no parar ni aparcar", "Discontinua junto a la acera: no aparcar"] }
  ] } }
]);
