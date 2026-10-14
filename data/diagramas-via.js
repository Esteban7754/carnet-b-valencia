window.DIAGRAMAS = (window.DIAGRAMAS || []).concat([
  // Mapa mental del tema
  { tema: "via", diagrama: { tipo: "mapa", titulo: "La vía y los vehículos", centro: "Vía y vehículos", ramas: [
    { t: "Partes de vía", hojas: ["Calzada: para los vehículos", "Acera: para los peatones", "Arcén: solo emergencias", "Mediana: separa calzadas"] },
    { t: "Tipos de vía", hojas: ["Autopista: sin accesos a fincas", "Autovía: accesos restringidos", "Vía para automóviles: solo coches", "Carretera: el resto"] },
    { t: "Glorietas y pasos", hojas: ["Glorieta: sentido contrario a las agujas", "Dentro manda quien ya circula", "Paso a nivel: barreras bajadas, paras"] },
    { t: "Vehículos", hojas: ["Turismo: hasta 9 plazas", "Ciclomotor: 50 cc y 45 km/h", "Moto: supera esos límites", "Bici asistida: hasta 25 km/h"] },
    { t: "Arcén y peatones", hojas: ["Turismos: nunca por el arcén", "Bici y ciclomotor: por el arcén", "Peatones: por la acera", "Peatones: nunca en autovías"] },
    { t: "Ciclistas y prioridad", hojas: ["Adelantar fuera: 1,5 m", "En poblado, detrás: 5 m", "VMP: máximo 25 km/h", "Prioritario: apártate a tu derecha"] }
  ] } },

  // Partes de la vía: calzada, carril, arcén y acera
  { leccion: "via-partes", tras: 4, diagrama: { tipo: "comparar", titulo: "Calzada, acera y arcén", columnas: [
    { t: "Calzada", tono: "ok", items: ["Para los vehículos", "Normalmente asfaltada", "Tiene carriles con marcas"] },
    { t: "Acera", tono: "info", items: ["Para los peatones", "Elevada o no", "Separada de la calzada"] },
    { t: "Arcén", tono: "warn", items: ["Solo para emergencias", "No es un carril extra", "Algunos vehículos deben usarlo"] }
  ] } },

  // Tipos de vía: urbana, interurbana, autopista y autovía
  { leccion: "via-tipos", tras: 5, diagrama: { tipo: "comparar", titulo: "Autopista frente a autovía", columnas: [
    { t: "Autopista (AP)", tono: "info", items: ["Calzadas separadas, sin cruces a nivel", "Ningún terreno vecino tiene acceso", "Suele ser de peaje"] },
    { t: "Autovía (A)", tono: "info", items: ["Calzadas separadas, sin cruces a nivel", "Accesos restringidos, no eliminados", "Suele ser gratuita"] }
  ] } },
  { leccion: "via-tipos", tras: 7, diagrama: { tipo: "arbol", titulo: "¿Puedo circular por una autovía?", raiz: {
    q: "¿Es un coche, moto, furgoneta o camión?",
    si: { r: "Sí puedes circular por la autovía", ok: true },
    no: {
      q: "¿Es una bici y su conductor tiene más de 14 años?",
      si: { r: "Solo por el arcén, si no hay señal que lo impida", ok: true },
      no: { r: "No puede circular por la autovía", ok: false }
    }
  } } },

  // Intersecciones, glorietas y pasos a nivel
  { leccion: "via-intersecciones", tras: 3, diagrama: { tipo: "acronimo", titulo: "Glorietas: cómo circular", palabra: "GIRA", letras: [
    { l: "G", t: "Gira al contrario", d: "Sentido contrario a las agujas del reloj." },
    { l: "I", t: "Izquierda: el centro", d: "El centro de la glorieta queda a tu izquierda." },
    { l: "R", t: "Rinde el paso", d: "Quien entra cede el paso a quien ya circula." },
    { l: "A", t: "Sin prioridad derecha", d: "En la glorieta no se aplica la prioridad de la derecha." }
  ] } },
  { leccion: "via-intersecciones", tras: 8, diagrama: { tipo: "flujo", titulo: "Paso a nivel: qué hacer", pasos: [
    { t: "Ves la señal", d: "Triángulo de peligro: hay una vía de tren." },
    { t: "Reduces la velocidad", d: "Extrema la atención al acercarte." },
    { t: "Miras barreras y luces", d: "Si bajan las barreras o hay luz roja, te paras." },
    { t: "Cruzas con cuidado", d: "Solo si el paso está abierto del todo." }
  ] } },

  // Clasificación de vehículos
  { leccion: "via-vehiculos", tras: 2, diagrama: { tipo: "escala", titulo: "Velocidad según el vehículo", unidad: "km/h", min: 0, max: 50, tramos: [
    { desde: 0, hasta: 25, t: "Bici asistida y VMP", tono: "ok" },
    { desde: 25, hasta: 45, t: "Ciclomotor, hasta 45", tono: "info" },
    { desde: 45, hasta: 50, t: "Más de 45: es moto", tono: "warn" }
  ], marcas: [ { v: 25, t: "Bici y VMP" }, { v: 45, t: "Límite ciclomotor" } ] } },
  { leccion: "via-vehiculos", tras: 5, diagrama: { tipo: "acronimo", titulo: "Normas de los VMP", palabra: "VMP", letras: [
    { l: "V", t: "Velocidad: 25 km/h", d: "Es el máximo. Los ayuntamientos pueden bajarlo." },
    { l: "M", t: "Menores de 15", d: "Desde octubre de 2026 no pueden conducirlos. Casco obligatorio." },
    { l: "P", t: "Nada de aceras", d: "Tampoco autopistas, autovías ni vías interurbanas, salvo carril bici." }
  ] } },

  // Sentido, posición y uso de carriles
  { leccion: "via-carriles", tras: 3, diagrama: { tipo: "arbol", titulo: "¿Puedo ir por el carril izquierdo?", raiz: {
    q: "¿Estás adelantando ahora mismo?",
    si: { r: "Sí puedes ir por la izquierda. Luego, vuelve a la derecha", ok: true },
    no: {
      q: "¿Estás dentro de un poblado?",
      si: { r: "Puedes usar el que mejor te venga, sin estorbar", ok: true },
      no: { r: "No: vuelve al carril de la derecha", ok: false }
    }
  } } },

  // El arcén y los peatones
  { leccion: "via-arcen-peatones", tras: 4, diagrama: { tipo: "arbol", titulo: "¿Puede ir por el arcén?", raiz: {
    q: "¿Es bici, ciclomotor, de tracción animal, especial o de movilidad reducida?",
    si: { r: "Debe ir por el arcén derecho, si es transitable", ok: true },
    no: {
      q: "¿Es una moto?",
      si: { r: "Solo en tramos habilitados, con retención, en fila de uno y a 30 km/h", ok: true },
      no: { r: "No: solo se para en él por avería", ok: false }
    }
  } } },
  { leccion: "via-arcen-peatones", tras: 5, diagrama: { tipo: "flujo", titulo: "Dónde camina un peatón", pasos: [
    { t: "Por la acera", d: "Siempre que exista. Es su sitio." },
    { t: "Si no hay acera", d: "Por el arcén, si lo hay." },
    { t: "Último recurso", d: "Calzada, por la izquierda y de cara a los coches." }
  ] } },

  // Ciclistas y vehículos prioritarios
  { leccion: "via-ciclistas-prioritarios", tras: 4, diagrama: { tipo: "comparar", titulo: "1,5 m frente a 5 m", columnas: [
    { t: "Fuera de poblado", tono: "info", items: ["Adelantas con 1,5 m de separación", "Reduce al menos 20 km/h bajo el límite", "Con varios carriles, cambia por completo"] },
    { t: "En poblado", tono: "info", items: ["Vas detrás de un ciclista", "Mantén al menos 5 metros", "Solo si va en tu mismo carril"] }
  ] } },
  { leccion: "via-ciclistas-prioritarios", tras: 8, diagrama: { tipo: "piramide", titulo: "Quién manda en la vía", niveles: [
    { t: "Agentes de tráfico", d: "Sus órdenes son siempre obligatorias." },
    { t: "Vehículo prioritario", d: "Puede saltarse normas si no pone en peligro a nadie." },
    { t: "Señales y semáforos", d: "Las normas de siempre, para todos." }
  ] } }
]);
