window.DIAGRAMAS = (window.DIAGRAMAS || []).concat([
  { tema: "factores", diagrama: {
    tipo: "mapa",
    titulo: "Riesgos al volante, de un vistazo",
    centro: "Riesgos al volante",
    ramas: [
      { t: "Alcohol", hojas: [
        "**General:** 0,25 mg/l en aire",
        "**Noveles y profesionales:** 0,15 mg/l",
        "**Delito:** más de 0,60 mg/l",
        "Solo el tiempo lo baja"
      ] },
      { t: "Pruebas", hojas: [
        "Prueba obligatoria, hayas bebido o no",
        "Negarte es delito",
        "Test de saliva para drogas"
      ] },
      { t: "Drogas y medicinas", hojas: [
        "**Drogas:** tolerancia cero",
        "Con medicamentos: lee el prospecto",
        "**Positivo en drogas:** 1.000 €"
      ] },
      { t: "Cansancio", hojas: [
        "**Pausa:** 2 horas o 200 km",
        "Microsueño: dura unos segundos",
        "Si tienes sueño, para ya"
      ] },
      { t: "Distracciones", hojas: [
        "**Móvil en la mano:** 200 €",
        "Auriculares en los dos oídos: prohibido",
        "Parado en semáforo: sigues conduciendo"
      ] },
      { t: "Visión y reacción", hojas: [
        "120 km/h: 33 m hasta frenar",
        "**Deslumbrado:** no mires a los faros",
        "Puede duplicarse con alcohol o cansancio"
      ] }
    ]
  } },

  { leccion: "factores-alcohol-limites", tras: 2, diagrama: {
    tipo: "escala",
    titulo: "Alcohol en aire espirado (mg/l)",
    unidad: "mg/l",
    min: 0,
    max: 0.8,
    tramos: [
      { desde: 0, hasta: 0.15, t: "Sin sanción para nadie", tono: "ok" },
      { desde: 0.15, hasta: 0.25, t: "Noveles y profesionales: sanción", tono: "warn" },
      { desde: 0.25, hasta: 0.6, t: "Infracción para todos", tono: "bad" },
      { desde: 0.6, hasta: 0.8, t: "Delito: retirada del permiso", tono: "bad" }
    ],
    marcas: [
      { v: 0.15, t: "Límite noveles" },
      { v: 0.25, t: "Límite general" },
      { v: 0.6, t: "Límite delito" }
    ]
  } },

  { leccion: "factores-alcohol-limites", tras: 4, diagrama: {
    tipo: "linea",
    titulo: "Lo que el alcohol te quita al volante",
    hitos: [
      { k: "Vista", t: "Ves menos a los lados", d: "Se reduce tu campo de visión." },
      { k: "Reflejos", t: "Reaccionas más tarde", d: "El tiempo de reacción se alarga." },
      { k: "Ánimo", t: "Te crees más seguro", d: "Te vuelve más confiado y menos atento." },
      { k: "Cálculo", t: "Juzgas mal la distancia", d: "Te cuesta calcular la velocidad y la distancia." }
    ]
  } },

  { leccion: "factores-pruebas", tras: 1, diagrama: {
    tipo: "flujo",
    titulo: "Alcohol: pasos si te paran",
    pasos: [
      { t: "Te piden la prueba", d: "Es obligatoria, hayas bebido o no." },
      { t: "Soplas en el etilómetro", d: "El aparato mide el alcohol en tu aire espirado." },
      { t: "Si es positivo", d: "Puede pedirse una segunda medición, también obligatoria." },
      { t: "¿No estás de acuerdo?", d: "Pídelo en un centro sanitario. No evita la prueba inicial." }
    ]
  } },

  { leccion: "factores-pruebas", tras: 3, diagrama: {
    tipo: "comparar",
    titulo: "Hacer la prueba o negarte",
    columnas: [
      { t: "Hacerla", tono: "ok", items: [
        "Es obligatoria, aunque no hayas bebido",
        "Soplas en el etilómetro",
        "Si no estás de acuerdo: análisis de sangre"
      ] },
      { t: "Negarte", tono: "bad", items: [
        "Es delito, aunque no hayas bebido",
        "Prisión de 6 meses a 1 año",
        "Retirada del permiso de 1 a 4 años"
      ] }
    ]
  } },

  { leccion: "factores-mitos-alcohol", tras: 2, diagrama: {
    tipo: "comparar",
    titulo: "Mitos del alcohol: la realidad",
    columnas: [
      { t: "No lo bajan", tono: "bad", items: [
        "Un café o una ducha fría",
        "Comer: solo frena la absorción",
        "Cerveza «0,0»: varias pueden dar positivo"
      ] },
      { t: "Solo el tiempo", tono: "ok", items: [
        "El paso del tiempo, a su ritmo",
        "Ningún truco lo acelera"
      ] },
      { t: "Sensación engañosa", tono: "warn", items: [
        "Sentirte bien te engaña",
        "Sin resaca no quiere decir sin alcohol"
      ] }
    ]
  } },

  { leccion: "factores-drogas-medicamentos", tras: 8, diagrama: {
    tipo: "arbol",
    titulo: "¿Puedo conducir con este medicamento?",
    raiz: {
      q: "¿Notas sueño, mareo o reflejos lentos por el medicamento?",
      si: { r: "**No conduzcas** hasta que pase el efecto", ok: false },
      no: {
        q: "¿Tu caja tiene el triángulo rojo con un coche?",
        si: { r: "No está prohibido, pero lee el prospecto y consulta al médico", ok: true },
        no: { r: "Sin pictograma no es garantía: lee el prospecto", ok: true }
      }
    }
  } },

  { leccion: "factores-fatiga", tras: 1, diagrama: {
    tipo: "ciclo",
    titulo: "Regla DGT: cada 2 horas o 200 km",
    centro: "Pausa recomendada",
    pasos: [
      { t: "Conduce 2 horas", d: "O 200 km, lo que llegue antes." },
      { t: "Busca un área", d: "Un área de servicio es un sitio seguro para parar." },
      { t: "Descansa 15 minutos", d: "Para descansar de verdad, unos 15 minutos." },
      { t: "Vuelve a empezar", d: "El ciclo se repite cada 2 horas o 200 km." }
    ]
  } },

  { leccion: "factores-fatiga", tras: 7, diagrama: {
    tipo: "flujo",
    titulo: "Si tienes sueño, qué haces",
    pasos: [
      { t: "Para cuanto puedas", d: "Mejor en un área de servicio." },
      { t: "Siesta corta", d: "Unos 15 a 20 minutos, para descansar de verdad." },
      { t: "El café no basta", d: "Solo te despierta un rato: no sustituye al descanso." },
      { t: "Nada de trucos", d: "Bajar la ventanilla, subir la música o cantar no es descanso." }
    ]
  } },

  { leccion: "factores-distracciones", tras: 4, diagrama: {
    tipo: "arbol",
    titulo: "¿Puedo usar el móvil al volante?",
    raiz: {
      q: "¿Tu coche está correctamente estacionado?",
      si: { r: "Puedes usarlo: el coche está estacionado", ok: true },
      no: {
        q: "¿Lo sujetas, lo tocas o lees mensajes?",
        si: { r: "**Infracción:** 200 € y 6 puntos", ok: false },
        no: { r: "Solo con manos libres, sin tocarlo", ok: true }
      }
    }
  } },

  { leccion: "factores-distracciones", tras: 7, diagrama: {
    tipo: "acronimo",
    titulo: "MANOS: la regla del móvil",
    palabra: "MANOS",
    letras: [
      { l: "M", t: "Móvil guardado", d: "Déjalo fuera de tu alcance al conducir." },
      { l: "A", t: "Antes de arrancar", d: "Deja listo el GPS y la música." },
      { l: "N", t: "Nada de leer", d: "Ni escribir ni tocar la pantalla." },
      { l: "O", t: "Oídos libres", d: "Nada de auriculares en los dos oídos." },
      { l: "S", t: "Solo manos libres", d: "Puedes hablar, sin tocar el aparato." }
    ]
  } },

  { leccion: "factores-vision-sanciones", tras: 6, diagrama: {
    tipo: "linea",
    titulo: "Metros antes de frenar (1 segundo)",
    hitos: [
      { k: "50 km/h", t: "Unos 14 metros", d: "Lo que recorres antes de empezar a frenar." },
      { k: "90 km/h", t: "25 metros", d: "Cuanto más rápido, más distancia recorres." },
      { k: "120 km/h", t: "33 metros", d: "Con 2 segundos de reacción: unos 67 metros." }
    ]
  } },

  { leccion: "factores-vision-sanciones", tras: 8, diagrama: {
    tipo: "comparar",
    titulo: "Sanciones: lo que te cuesta",
    columnas: [
      { t: "Grave", tono: "warn", items: [
        "Alcohol 0,25 a 0,50: 500 €, 4 puntos",
        "Novel más de 0,15: 500 €, 4 puntos",
        "Móvil en la mano: 200 €, 6 puntos"
      ] },
      { t: "Muy grave", tono: "bad", items: [
        "Alcohol 0,50 a 0,60: 1.000 €, 6 puntos",
        "Novel más de 0,30: 1.000 €, 6 puntos",
        "Positivo en drogas: 1.000 €, 6 puntos"
      ] },
      { t: "Delito", tono: "bad", items: [
        "Alcohol más de 0,60 mg/l",
        "Negarte a la prueba: prisión",
        "Retirada del permiso: 1 a 4 años"
      ] }
    ]
  } }
]);
