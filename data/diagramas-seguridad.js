// Diagramas para memorizar: tema seguridad
window.DIAGRAMAS = (window.DIAGRAMAS || []).concat([
  // Mapa mental del tema (uno solo)
  { tema: "seguridad", diagrama: { tipo: "mapa", titulo: "Mapa del tema", centro: "Seguridad y documentación", ramas: [
    { t: "Activa y pasiva", hojas: ["**Activa**: evita el choque", "Frenos, ABS, ESP y dirección", "**Pasiva**: reduce las lesiones", "Cinturón, airbag y reposacabezas"] },
    { t: "Cinturón, casco, SRI", hojas: ["Cinturón en todas las plazas", "Casco homologado y bien abrochado", "Niños: SRI hasta 135 cm", "Multa 200 € y 4 puntos"] },
    { t: "Neumáticos y revisiones", hojas: ["Dibujo mínimo de 1,6 mm", "Presión en frío, cada mes", "Testigo rojo: parada inmediata", "Aceite, refrigerante, frenos, batería"] },
    { t: "Carga y personas", hojas: ["Carga sujeta; si sobresale, señalízala", "Sin superar la masa máxima (MMA)", "Plazas según la ficha técnica", "Pasajeros en plazas homologadas"] },
    { t: "Documentación e ITV", hojas: ["Permiso de conducir y de circulación", "Tarjeta ITV y seguro obligatorio", "Primera ITV a los 4 años"] },
    { t: "Etiquetas ambientales", hojas: ["Distintivo en el parabrisas", "De 0 emisiones a sin etiqueta", "Ayuntamientos regulan el acceso a ZBE"] }
  ] } },

  // Seguridad activa y pasiva
  { leccion: "seguridad-activa-pasiva", tras: 0, diagrama: { tipo: "comparar", titulo: "Activa o pasiva", columnas: [
    { t: "Seguridad activa", tono: "ok", items: ["**Evita** que ocurra el choque", "Frenos, ABS y ESP", "Dirección y suspensión", "Luces, espejos y limpiaparabrisas"] },
    { t: "Seguridad pasiva", tono: "info", items: ["**Reduce** las lesiones del choque", "Cinturón y airbag", "Reposacabezas", "Carrocería deformable"] }
  ] } },

  // Cinturón y casco
  { leccion: "seguridad-cinturon-casco", tras: 1, diagrama: { tipo: "arbol", titulo: "¿Puedo ir sin cinturón?", raiz: {
    q: "¿Tienes certificado médico que lo acredite?",
    si: { r: "Sin cinturón: permitido", ok: true },
    no: {
      q: "¿Tu trabajo implica paradas y arranques continuos?",
      si: { r: "Sin cinturón: permitido solo mientras trabajas", ok: true },
      no: { r: "Sin cinturón: prohibido. Multa de 200 € y 4 puntos", ok: false }
    }
  } } },
  { leccion: "seguridad-cinturon-casco", tras: 7, diagrama: { tipo: "flujo", titulo: "Casco antes de arrancar", pasos: [
    { t: "Homologado", d: "Debe llevar su **marca de homologación**." },
    { t: "Talla adecuada", d: "No debe moverse al sacudir la cabeza." },
    { t: "Correa abrochada", d: "Sin abrochar, no protege y no cumple la norma." }
  ] } },

  // Sistemas de retención infantil (SRI)
  { leccion: "seguridad-sri", tras: 2, diagrama: { tipo: "escala", titulo: "SRI según la estatura", unidad: "cm", min: 0, max: 200, tramos: [
    { desde: 0, hasta: 135, t: "Necesita SRI homologado", tono: "bad" },
    { desde: 135, hasta: 150, t: "Cinturón permitido, pero mejor elevador", tono: "warn" },
    { desde: 150, hasta: 200, t: "Cinturón del adulto", tono: "ok" }
  ], marcas: [
    { v: 135, t: "Límite legal" },
    { v: 150, t: "Pediatras: 150 cm" }
  ] } },
  { leccion: "seguridad-sri", tras: 8, diagrama: { tipo: "comparar", titulo: "Dónde va el SRI", columnas: [
    { t: "Plaza trasera", tono: "ok", items: ["**Es lo preferido**, siempre que sea posible", "Mirando atrás protege la cabeza y el cuello"] },
    { t: "Plaza delantera", tono: "warn", items: ["Solo en casos concretos", "Si mira atrás, airbag **desactivado**", "El airbag activo empujaría la silla"] }
  ] } },

  // Neumáticos
  { leccion: "seguridad-neumaticos", tras: 2, diagrama: { tipo: "escala", titulo: "Dibujo del neumático", unidad: "mm", min: 0, max: 8, tramos: [
    { desde: 0, hasta: 1.6, t: "No apto: es infracción", tono: "bad" },
    { desde: 1.6, hasta: 8, t: "Apto: dibujo legal", tono: "ok" }
  ], marcas: [
    { v: 1.6, t: "Mínimo legal (testigos)" }
  ] } },
  { leccion: "seguridad-neumaticos", tras: 6, diagrama: { tipo: "flujo", titulo: "Aquaplaning: qué hacer", pasos: [
    { t: "Suelta el acelerador", d: "Poco a poco, hasta que el coche recupere el agarre." },
    { t: "No frenes de golpe", d: "Y no gires el volante bruscamente." },
    { t: "Sujeta el volante", d: "Mantenlo firme y sigue la dirección que llevas." }
  ] } },

  // Mantenimiento, testigos y carga
  { leccion: "seguridad-mantenimiento-carga", tras: 1, diagrama: { tipo: "ciclo", titulo: "Revisión mensual", centro: "Cada mes", pasos: [
    { t: "Aceite", d: "Varilla: entre mínimo y máximo, en llano y motor parado." },
    { t: "Refrigerante", d: "En el vaso de expansión, con el motor frío." },
    { t: "Líquido de frenos", d: "Entre mínimo y máximo. Si baja mucho, revisa." },
    { t: "Batería", d: "Bornes limpios, apretados y sin corrosión." }
  ] } },
  { leccion: "seguridad-mantenimiento-carga", tras: 2, diagrama: { tipo: "piramide", titulo: "Colores de los testigos", niveles: [
    { t: "Rojo: parada inmediata", d: "Peligro. Para en cuanto sea seguro." },
    { t: "Amarillo o naranja", d: "Atención o avería. Revisa el coche pronto." },
    { t: "Verde o azul", d: "Solo informan, como las luces de cruce." }
  ] } },

  // Documentación obligatoria e ITV
  { leccion: "seguridad-documentacion-itv", tras: 2, diagrama: { tipo: "mapa", titulo: "Lo que llevas en el coche", centro: "Documentación obligatoria", ramas: [
    { t: "Permiso de conducir", hojas: ["Válido para el vehículo que conduces", "Puede llevarse en digital (miDGT)"] },
    { t: "Permiso de circulación", hojas: ["Lo expide la DGT", "Datos del vehículo y su titular", "Puede llevarse en digital (miDGT)"] },
    { t: "Tarjeta ITV", hojas: ["La emite la estación ITV", "Plazas y masa máxima autorizada", "Digital poco clara: lleva papel"] },
    { t: "Seguro obligatorio", hojas: ["Imprescindible en el coche", "No hace falta llevar la póliza", "La DGT lo comprueba en línea"] }
  ] } },
  { leccion: "seguridad-documentacion-itv", tras: 6, diagrama: { tipo: "linea", titulo: "Cada cuánto pasa la ITV", hitos: [
    { k: "4 años", t: "Primera inspección", d: "Al cumplir 4 años desde la primera matriculación." },
    { k: "2 años", t: "Entre 4 y 10 años", d: "Revisión cada 2 años, en turismos." },
    { k: "1 año", t: "Desde los 10 años", d: "Revisión cada año, en turismos." }
  ] } },

  // Etiquetas ambientales y ZBE
  { leccion: "seguridad-etiquetas-zbe", tras: 2, diagrama: { tipo: "comparar", titulo: "Restricciones por etiqueta", columnas: [
    { t: "Menos restricciones", tono: "ok", items: ["**0 emisiones** (azul)", "**ECO** (verde y azul)"] },
    { t: "Algunas restricciones", tono: "warn", items: ["**C** (verde)", "**B** (amarilla)"] },
    { t: "Primeras en limitarse", tono: "bad", items: ["**Sin etiqueta**: los más antiguos", "Primeros en quedar limitados en una ZBE"] }
  ] } }
]);
