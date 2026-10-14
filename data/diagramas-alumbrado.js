window.DIAGRAMAS = (window.DIAGRAMAS || []).concat([
  { tema: "alumbrado", diagrama: {
    tipo: "mapa",
    titulo: "Alumbrado y vías, de un vistazo",
    centro: "Alumbrado y vías",
    ramas: [
      { t: "Luces del coche", hojas: [
        "**Cruce:** de noche o poca visibilidad",
        "**Carretera:** sin vehículos a 150 m",
        "**Posición:** no sirve para circular"
      ] },
      { t: "Luces especiales", hojas: [
        "**Antiniebla delantera:** niebla o nevada",
        "**Antiniebla trasera:** menos de 50 m",
        "**Warning:** solo para avisar de peligro"
      ] },
      { t: "Claxon y chaleco", hojas: [
        "**Claxon:** solo para evitar un peligro",
        "**Dentro de poblado:** solo emergencia",
        "**Chaleco** antes de salir del coche",
        "**V-16** conectada desde 2026"
      ] },
      { t: "Autopistas y autovías", hojas: [
        "**Mínimo 60 km/h,** salvo causa justificada",
        "**Máximo 120 km/h** para turismos",
        "**Motos sí,** ciclomotores no",
        "**Parar** solo en emergencia"
      ] },
      { t: "Túneles", hojas: [
        "**Luces de cruce** siempre encendidas",
        "**Prohibido** cambiar de sentido",
        "**Avería:** luces de emergencia y 112"
      ] },
      { t: "Carriles especiales", hojas: [
        "**Flecha verde:** carril abierto",
        "**Aspa roja:** carril cerrado",
        "**VAO:** dos ocupantes o más",
        "**Reversibles y adicionales:** cruce de día"
      ] }
    ]
  } },

  { leccion: "alumbrado-luces", tras: 7, diagrama: {
    tipo: "flujo",
    titulo: "Si te deslumbran, qué haces",
    pasos: [
      { t: "Evita mirar los faros", d: "Dirige la vista al borde derecho de la calzada." },
      { t: "Reduce la velocidad", d: "Así tienes más margen si no ves bien." },
      { t: "Muy fuerte: para", d: "Busca un lugar seguro donde parar." }
    ]
  } },

  { leccion: "alumbrado-luces", tras: 8, diagrama: {
    tipo: "arbol",
    titulo: "De noche, qué luz uso",
    raiz: {
      q: "¿Hay alguien de frente o delante a menos de 150 m?",
      si: { r: "**Luces de cruce.** Nunca las de carretera", ok: true },
      no: {
        q: "¿Estás fuera de poblado y sin alumbrado público?",
        si: { r: "**Luces de carretera,** y cambia a cruce si llega alguien", ok: true },
        no: { r: "**Luces de cruce** en poblado o con alumbrado", ok: true }
      }
    }
  } },

  { leccion: "alumbrado-especiales", tras: 3, diagrama: {
    tipo: "comparar",
    titulo: "Antiniebla delantera o trasera",
    columnas: [
      { t: "Antiniebla delantera", tono: "ok", items: [
        "Con niebla, nevada o lluvia muy intensa",
        "Va junto a las luces de cruce",
        "Se apaga cuando mejora la visibilidad"
      ] },
      { t: "Antiniebla trasera", tono: "warn", items: [
        "Solo con visibilidad menor de 50 m",
        "Con lluvia normal o niebla clara, no",
        "Apágala si la visibilidad vuelve a ser normal"
      ] }
    ]
  } },

  { leccion: "alumbrado-especiales", tras: 4, diagrama: {
    tipo: "escala",
    titulo: "Visibilidad y antiniebla trasera",
    unidad: "m",
    min: 0,
    max: 200,
    tramos: [
      { desde: 0, hasta: 50, t: "Puedes encender la trasera", tono: "ok" },
      { desde: 50, hasta: 200, t: "Prohibida: deslumbra y confunde", tono: "bad" }
    ],
    marcas: [
      { v: 50, t: "Límite: 50 metros" }
    ]
  } },

  { leccion: "alumbrado-claxon-chaleco", tras: 5, diagrama: {
    tipo: "comparar",
    titulo: "Claxon y ráfagas: cuándo sí y cuándo no",
    columnas: [
      { t: "Claxon permitido", tono: "ok", items: [
        "Para evitar un accidente o peligro",
        "Fuera de poblado, para avisar de que adelantas",
        "Dentro de poblado, solo peligro inminente"
      ] },
      { t: "Claxon prohibido", tono: "bad", items: [
        "Meter prisa al que tarda en arrancar",
        "Saludar a un conocido",
        "Un toque largo o repetido"
      ] },
      { t: "Ráfagas", tono: "info", items: [
        "Destello corto con luces de carretera",
        "Avisa de tu presencia",
        "Nunca para presionar al de delante"
      ] }
    ]
  } },

  { leccion: "alumbrado-claxon-chaleco", tras: 8, diagrama: {
    tipo: "linea",
    titulo: "Triángulos o V-16: cómo ha cambiado",
    hitos: [
      { k: "Antes", t: "Triángulos", d: "Avisaban de un coche parado o averiado." },
      { k: "2026", t: "Baliza V-16 obligatoria", d: "Desde el 1 de enero. Va en el techo y se activa." },
      { k: "Al salir", t: "Chaleco: también obligatorio", d: "Fuera de poblado, antes de bajar. La V-16 no lo sustituye." }
    ]
  } },

  { leccion: "alumbrado-autopistas", tras: 2, diagrama: {
    tipo: "comparar",
    titulo: "Autopistas: quién no puede circular",
    columnas: [
      { t: "No pueden circular", tono: "bad", items: [
        "Peatones y animales",
        "Bicicletas, nunca por la calzada",
        "Ciclomotores",
        "Tracción animal y patinetes",
        "Tractores, salvo excepciones"
      ] },
      { t: "Las motos sí", tono: "ok", items: [
        "Pueden circular por autopistas y autovías",
        "No confundirlas con los ciclomotores"
      ] }
    ]
  } },

  { leccion: "alumbrado-autopistas", tras: 10, diagrama: {
    tipo: "flujo",
    titulo: "Avería en autopista: el orden",
    pasos: [
      { t: "Enciende el warning", d: "Avisa a los demás del peligro en la vía." },
      { t: "Ponte el chaleco", d: "Antes de salir, en vía interurbana." },
      { t: "Coloca la V-16", d: "En el techo, en un lugar visible. Luego, actívala." },
      { t: "Sal por la derecha", d: "Lejos del tráfico, detrás de la barrera si la hay." },
      { t: "Pide ayuda", d: "Avisa al 112 o usa los teléfonos SOS de la vía." }
    ]
  } },

  { leccion: "alumbrado-tuneles", tras: 8, diagrama: {
    tipo: "flujo",
    titulo: "Túnel: qué hacer, paso a paso",
    pasos: [
      { t: "Antes de entrar", d: "Luces de cruce encendidas y distancia amplia." },
      { t: "Dentro, sin maniobras", d: "Nada de cambiar de sentido ni dar la vuelta. Tampoco adelantar, en general." },
      { t: "Si te averías", d: "Luces de emergencia. Si puedes, sal del túnel." },
      { t: "Si no puedes seguir", d: "Arcén derecho, junto a la pared, con chaleco y V-16." },
      { t: "Pide ayuda", d: "Teléfonos de emergencia del túnel o el 112." }
    ]
  } },

  { leccion: "alumbrado-carriles", tras: 5, diagrama: {
    tipo: "piramide",
    titulo: "Quién manda en el carril",
    niveles: [
      { t: "Agentes de tráfico", d: "Sus indicaciones mandan sobre cualquier señal." },
      { t: "Semáforo en rojo", d: "Paras, aunque el carril tenga flecha verde." },
      { t: "Señales del carril", d: "Verde: abierto. Ámbar: se cierra. Aspa roja: cerrado." }
    ]
  } },

  { leccion: "alumbrado-carriles", tras: 9, diagrama: {
    tipo: "acronimo",
    titulo: "VAO: vehículos de alta ocupación",
    palabra: "VAO",
    letras: [
      { l: "V", t: "Vehículos", d: "Reservado a los que llevan el mínimo de ocupantes." },
      { l: "A", t: "Alta", d: "Normalmente, dos o más contando al conductor." },
      { l: "O", t: "Ocupación", d: "El panel del tramo indica el mínimo exigido." }
    ]
  } }
]);
