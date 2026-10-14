window.DIAGRAMAS = (window.DIAGRAMAS || []).concat([
  // Mapa mental del tema (exactamente 1)
  { tema: "maniobras", diagrama: { tipo: "mapa", titulo: "Mapa de las maniobras", centro: "Maniobras seguras", ramas: [
    { t: "Antes de maniobrar", hojas: ["Mira, señaliza y ejecuta", "Intermitente no da derecho", "Ningún riesgo justifica maniobrar"] },
    { t: "Incorporarte y carriles", hojas: ["Quien se incorpora cede el paso", "Carril de aceleración: igualar velocidad", "Marcha atrás: máximo 15 metros"] },
    { t: "Giros", hojas: ["Derecha: pegado al borde", "Izquierda: pegado al centro", "Cambio de sentido: sitio adecuado"] },
    { t: "Adelantar", hojas: ["Por la izquierda: norma general", "Prohibido en curvas y cruces", "Ciclista: 1,5 metros de separación"] },
    { t: "Parar y estacionar", hojas: ["Parada: menos de dos minutos", "Estacionamiento: más de dos minutos", "Doble fila: siempre prohibida"] },
    { t: "Averías y emergencias", hojas: ["Sal del carril y señaliza", "V-16 conectada, obligatoria desde 2026", "Ocupantes salen por el lado contrario"] }
  ] } },

  // Normas generales: observar, señalizar, ejecutar
  { leccion: "maniobras-normas-generales", tras: 1, diagrama: { tipo: "ciclo", titulo: "Observar, señalizar, ejecutar", centro: "Repite siempre", pasos: [
    { t: "Observar", d: "Mira el retrovisor y el ángulo muerto antes" },
    { t: "Señalizar", d: "Avisa con el intermitente, con antelación" },
    { t: "Ejecutar", d: "Hazla solo si es seguro, sin frenar a otros" }
  ] } },

  // Incorporación, carriles y marcha atrás
  { leccion: "maniobras-incorporacion-cambio-carril", tras: 2, diagrama: { tipo: "flujo", titulo: "Cómo incorporarte", pasos: [
    { t: "Coge velocidad", d: "En el carril de aceleración, igualando el tráfico" },
    { t: "Busca un hueco seguro", d: "Quien ya circula por la vía tiene preferencia" },
    { t: "No fuerces la entrada", d: "Si no encuentras hueco, espera a que lo haya" },
    { t: "Entra con seguridad", d: "Entra solo cuando sea seguro, cediendo el paso" }
  ] } },
  { leccion: "maniobras-incorporacion-cambio-carril", tras: 7, diagrama: { tipo: "arbol", titulo: "¿Puedo dar marcha atrás?", raiz: {
    q: "¿Puedes salir sin dar marcha atrás?",
    si: { r: "No des marcha atrás: sal hacia delante", ok: true },
    no: {
      q: "¿Recorrerías más de 15 metros?",
      si: { r: "Prohibido: busca un sitio para girar", ok: false },
      no: {
        q: "¿Estás en autopista, autovía o invadirías un cruce?",
        si: { r: "Prohibido: nunca en autopista ni invadiendo un cruce", ok: false },
        no: { r: "Permitido: marcha atrás de 15 metros o menos", ok: true }
      }
    }
  } } },

  // Girar, salir de la autopista y cambiar de sentido
  { leccion: "maniobras-giros-salida-cambio-sentido", tras: 4, diagrama: { tipo: "comparar", titulo: "Girar a la derecha o a la izquierda", columnas: [
    { t: "A la derecha", tono: "ok", items: ["Pegado al borde derecho", "Intermitente derecho con antelación", "Cedes a peatones y ciclistas que cruzan"] },
    { t: "A la izquierda", tono: "warn", items: ["Cerca de la marca central o del eje", "Intermitente izquierdo con antelación", "Cedes a los que vienen de frente"] }
  ] } },
  { leccion: "maniobras-giros-salida-cambio-sentido", tras: 6, diagrama: { tipo: "arbol", titulo: "¿Puedo dar la vuelta aquí?", raiz: {
    q: "¿Estás en autopista o autovía?",
    si: { r: "Prohibido, salvo en lugar habilitado", ok: false },
    no: {
      q: "¿Hay paso a nivel, túnel o curva sin visibilidad?",
      si: { r: "Prohibido dar la vuelta aquí", ok: false },
      no: {
        q: "¿Ves bien y no hay peligro para nadie?",
        si: { r: "Puedes, con las señales necesarias", ok: true },
        no: { r: "Prohibido: busca otro sitio", ok: false }
      }
    }
  } } },

  // Adelantamiento: normas y prohibiciones
  { leccion: "maniobras-adelantamiento-normas", tras: 1, diagrama: { tipo: "comparar", titulo: "Por la izquierda o la derecha", columnas: [
    { t: "Por la izquierda", tono: "ok", items: ["Es la norma general", "Avisa con antelación", "Comprueba que el carril está libre"] },
    { t: "Por la derecha", tono: "warn", items: ["Solo en casos concretos", "Si el de delante gira a la izquierda", "Dentro de poblado, con dos carriles por sentido"] }
  ] } },
  { leccion: "maniobras-adelantamiento-normas", tras: 5, diagrama: { tipo: "arbol", titulo: "¿Puedo adelantar aquí?", raiz: {
    q: "¿Hay señal R-305 o curva sin visibilidad?",
    si: { r: "No adelantes: está prohibido", ok: false },
    no: {
      q: "¿Hay un paso de peatones, cruce o paso a nivel?",
      si: { r: "No adelantes: prohibido cerca de cruces", ok: false },
      no: {
        q: "¿Vas notoriamente más rápido y ves el carril libre?",
        si: { r: "Puedes: avisa antes y adelanta con cuidado", ok: true },
        no: { r: "No adelantes: no hay espacio o no vas más rápido", ok: false }
      }
    }
  } } },

  // Adelantar a ciclistas, averiados y ser adelantado
  { leccion: "maniobras-adelantar-ciclistas-averiados", tras: 2, diagrama: { tipo: "flujo", titulo: "Adelantar a un ciclista", pasos: [
    { t: "Reduce la velocidad", d: "Al menos 20 km/h menos que el límite, fuera de poblado" },
    { t: "Deja 1,5 metros", d: "Separación lateral mínima con el ciclista" },
    { t: "No adelantes", d: "Si no puedes dejar 1,5 metros, quédate detrás" },
    { t: "Comprueba el carril contrario", d: "Solo si ves bien y nadie viene de frente" }
  ] } },

  // Parada, estacionamiento y apertura de puertas
  { leccion: "maniobras-parada-estacionamiento-puertas", tras: 2, diagrama: { tipo: "comparar", titulo: "Detención, parada o estacionamiento", columnas: [
    { t: "Detención", tono: "info", items: ["Por emergencia o por el tráfico", "Para cumplir una norma", "Ej.: semáforo en rojo o STOP"] },
    { t: "Parada", tono: "ok", items: ["Menos de dos minutos", "El conductor sigue dentro", "Ej.: dejar a alguien un momento"] },
    { t: "Estacionamiento", tono: "warn", items: ["Más de dos minutos o conductor fuera", "No es detención ni parada", "Ej.: dejar el coche mientras compras"] }
  ] } },
  { leccion: "maniobras-parada-estacionamiento-puertas", tras: 7, diagrama: { tipo: "arbol", titulo: "¿Puedo estacionar aquí?", raiz: {
    q: "¿Es doble fila, acera o zona peatonal?",
    si: { r: "Prohibido: no estaciones ahí", ok: false },
    no: {
      q: "¿Estás delante de un vado señalizado?",
      si: { r: "Prohibido: delante de un vado", ok: false },
      no: {
        q: "¿Quedan al menos 3 metros libres en la calzada?",
        si: { r: "Puedes, si el ayuntamiento lo permite", ok: true },
        no: { r: "Peligroso: busca otro sitio", ok: false }
      }
    }
  } } },

  // Averías, señalización y remolque
  { leccion: "maniobras-averias-remolque", tras: 1, diagrama: { tipo: "flujo", titulo: "Si te averías en la calzada", pasos: [
    { t: "Sácalo del carril", d: "Si necesitas auxilio, sal por el arcén derecho" },
    { t: "Pon la V-16 conectada", d: "Señaliza el peligro con la baliza" },
    { t: "Sal del lado contrario", d: "Si no es seguro, quédate dentro con el cinturón" },
    { t: "Llama a la asistencia", d: "No arregles el coche en plena vía" }
  ] } },
  { leccion: "maniobras-averias-remolque", tras: 3, diagrama: { tipo: "linea", titulo: "Cómo se señaliza una avería", hitos: [
    { k: "Antes", t: "Triángulos", d: "Eran el aviso habitual de una avería" },
    { k: "Ene 2026", t: "Baliza V-16 obligatoria", d: "Sustituye a los triángulos, con excepciones" },
    { k: "Oct 2026", t: "Apartarse en retención", d: "Dejas libre el carril de emergencia" }
  ] } }
]);
