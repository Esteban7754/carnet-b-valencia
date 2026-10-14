window.DIAGRAMAS = (window.DIAGRAMAS || []).concat([
  // Mapa mental del tema
  { tema: "examen", diagrama: { tipo: "mapa", titulo: "El permiso B y el examen", centro: "Permiso B", ramas: [
    { t: "Requisitos", hojas: ["18 años cumplidos", "DNI, NIE o pasaporte", "Certificado médico del CRC", "Autoescuela o examen libre"] },
    { t: "Examen teórico", hojas: ["30 preguntas tipo test", "3 respuestas, una correcta", "30 minutos", "Máximo 3 fallos"] },
    { t: "Examen práctico", hojas: ["Coche con doble mando", "Mínimo 25 minutos de conducción", "Una falta eliminatoria: suspendes", "Resultado: apto o no apto"] },
    { t: "Tasa y citas", hojas: ["Tasa de unos 94,05 €", "Dos convocatorias incluidas", "Aprobado teórico válido 2 años", "Cita previa en la Jefatura"] },
    { t: "Puntos y novel", hojas: ["Conductor general: 12 puntos", "Novel: 8 puntos al empezar", "Máximo: 15 puntos", "Novel: 0,15 mg/l en aire"] },
    { t: "Qué conduces", hojas: ["Hasta 3.500 kg de MMA", "Hasta 9 plazas con el conductor", "Ciclomotores (AM) incluidos", "Motos 125 cc (3 años)"] }
  ] } },

  // Requisitos y cómo prepararte
  { leccion: "examen-requisitos", tras: 1, diagrama: { tipo: "flujo", titulo: "Camino hasta el permiso B", pasos: [
    { t: "Cumples 18 años", d: "Es la edad mínima para el permiso B." },
    { t: "Certificado médico", d: "En un CRC: visión, audición y reflejos." },
    { t: "Pagas la tasa", d: "Unos 94,05 €. Confírmala antes de pagar." },
    { t: "Apruebas el teórico", d: "Test de 30 preguntas, máximo 3 fallos." },
    { t: "Apruebas el práctico", d: "Conducción con un examinador de la DGT." }
  ] } },
  { leccion: "examen-requisitos", tras: 7, diagrama: { tipo: "comparar", titulo: "Con autoescuela o libre", columnas: [
    { t: "Con autoescuela", tono: "info", items: ["Clases teóricas y prácticas", "Coche de examen con doble mando", "La autoescuela gestiona citas", "Coste más alto por las clases"] },
    { t: "Libre", tono: "warn", items: ["Ninguna clase: te preparas tú", "Vehículo propio que cumpla requisitos", "Tú gestionas citas y trámites", "Menos gasto, pero nadie corrige"] }
  ] } },

  // El examen teórico y cómo estudiarlo
  { leccion: "examen-teorico", tras: 2, diagrama: { tipo: "escala", titulo: "Fallos en el teórico", unidad: "fallos", min: 0, max: 30, tramos: [
    { desde: 0, hasta: 3, t: "Apto: hasta 3 fallos", tono: "ok" },
    { desde: 3, hasta: 30, t: "Suspenso: 4 fallos o más", tono: "bad" }
  ], marcas: [ { v: 3, t: "Último apto" }, { v: 30, t: "Total de preguntas" } ] } },
  { leccion: "examen-teorico", tras: 8, diagrama: { tipo: "ciclo", titulo: "Cómo estudiar cada día", centro: "Estudio diario", pasos: [
    { t: "Haces tests", d: "Tests tipo DGT, 15 o 20 minutos al día." },
    { t: "Lees el fallo", d: "Lee la explicación de cada error." },
    { t: "Entiendes la norma", d: "Busca el porqué, no solo la respuesta." },
    { t: "Haces un simulacro", d: "30 preguntas en 30 minutos, sin apuntes." },
    { t: "Repasas por temas", d: "Une las normas relacionadas entre sí." }
  ] } },

  // El examen práctico
  { leccion: "examen-practico", tras: 1, diagrama: { tipo: "flujo", titulo: "Recorrido del examen práctico", pasos: [
    { t: "Preguntas del coche", d: "Unas pocas, sencillas, antes de arrancar." },
    { t: "Conducción", d: "Ciudad y carretera, como mínimo 25 minutos." },
    { t: "Resultado", d: "Apto o no apto, con una breve explicación." }
  ] } },
  { leccion: "examen-practico", tras: 4, diagrama: { tipo: "piramide", titulo: "Tipos de falta, de más a menos grave", niveles: [
    { t: "Eliminatoria", d: "Una sola basta para suspender. Ejemplo: saltarte un semáforo en rojo." },
    { t: "Deficiente", d: "Dificulta mucho a otros. Varias pueden suspenderte." },
    { t: "Leve", d: "Pequeños errores, como calar el motor una vez." }
  ] } },

  // Tasa, convocatorias y dónde examinarte
  { leccion: "examen-tasa", tras: 3, diagrama: { tipo: "acronimo", titulo: "Tasa y convocatorias", palabra: "TASA", letras: [
    { l: "T", t: "Tasa de examen", d: "Unos 94,05 €. Incluye dos convocatorias." },
    { l: "A", t: "Antes, confirma", d: "Las cuantías cambian: confírmalas en tu Jefatura o en dgt.es." },
    { l: "S", t: "Suspendes las dos", d: "Vuelves a pagar la tasa para tener otras dos." },
    { l: "A", t: "Tu provincia", d: "Valencia, Alicante o Castellón. Lo habitual: donde vives." }
  ] } },

  // El permiso por puntos
  { leccion: "examen-puntos", tras: 1, diagrama: { tipo: "linea", titulo: "Cómo suben tus puntos", hitos: [
    { k: "8 pts", t: "Novel al empezar", d: "Menos de 2 años con el permiso. El general empieza con 12." },
    { k: "12 pts", t: "Tras 2 años", d: "Sin infracciones que resten puntos, subes a 12." },
    { k: "14 pts", t: "Tras 3 años más", d: "Desde 12, sin infracciones que resten puntos." },
    { k: "15 pts", t: "Máximo de puntos", d: "Tras otros 3 años sin infracciones, desde 14." }
  ] } },
  { leccion: "examen-puntos", tras: 3, diagrama: { tipo: "arbol", titulo: "¿Me restan puntos?", raiz: {
    q: "¿Es una infracción grave o muy grave?",
    si: {
      q: "¿Es de las más graves, como alcohol o drogas?",
      si: { r: "Puedes perder todos los puntos de golpe", ok: false },
      no: { r: "Te restan 2, 3, 4 o 6 puntos", ok: false }
    },
    no: { r: "No te restan puntos: es leve", ok: true }
  } } },

  // Conductor novel: la L y el alcohol
  { leccion: "examen-novel", tras: 0, diagrama: { tipo: "linea", titulo: "Los dos primeros años", hitos: [
    { k: "Día 1", t: "Obtienes el permiso", d: "Empiezas como conductor novel, con 8 puntos." },
    { k: "1 año", t: "Ya no llevas la L", d: "La L es obligatoria solo el primer año." },
    { k: "2 años", t: "Fin del novel", d: "Vuelve el límite general de alcohol: 0,25 mg/l." }
  ] } },
  { leccion: "examen-novel", tras: 2, diagrama: { tipo: "escala", titulo: "Alcohol en aire espirado", unidad: "mg/l", min: 0, max: 0.5, tramos: [
    { desde: 0, hasta: 0.15, t: "Sin infracción para nadie", tono: "ok" },
    { desde: 0.15, hasta: 0.25, t: "Solo novel: infracción", tono: "warn" },
    { desde: 0.25, hasta: 0.5, t: "Infracción para todos", tono: "bad" }
  ], marcas: [ { v: 0.15, t: "Límite novel" }, { v: 0.25, t: "Límite general" } ] } },

  // Qué puedes conducir con el B
  { leccion: "examen-que-conduces", tras: 2, diagrama: { tipo: "arbol", titulo: "¿Lo conduzco con el B?", raiz: {
    q: "¿Tiene una MMA de hasta 3.500 kg?",
    si: {
      q: "¿Tiene hasta 9 plazas, contando al conductor?",
      si: { r: "Sí: puedes conducirlo con el B", ok: true },
      no: { r: "No: necesitas otra categoría de permiso", ok: false }
    },
    no: { r: "No: necesitas C1, C o D", ok: false }
  } } },
  { leccion: "examen-que-conduces", tras: 3, diagrama: { tipo: "comparar", titulo: "Qué conduces con el B", columnas: [
    { t: "Permitido", tono: "ok", items: ["Turismos de hasta 3.500 kg", "Furgonetas de hasta 3.500 kg", "Ciclomotores (AM)", "Remolque de hasta 750 kg"] },
    { t: "Con condiciones", tono: "warn", items: ["Remolque de más de 750 kg", "Conjunto de hasta 3.500 kg", "Motos 125 cc tras 3 años de B"] },
    { t: "No permitido", tono: "bad", items: ["Motos de más de 125 cc", "Camiones de más de 3.500 kg", "Autobuses"] }
  ] } }
]);
