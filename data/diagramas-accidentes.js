// Diagramas para memorizar: tema accidentes
window.DIAGRAMAS = (window.DIAGRAMAS || []).concat([
  // Mapa mental del tema (uno solo)
  { tema: "accidentes", diagrama: { tipo: "mapa", titulo: "Mapa del tema", centro: "Accidentes y auxilios", ramas: [
    { t: "Conducta PAS", hojas: ["P: protege, pon luces, señaliza", "A: llama al 112", "S: socorre sin ponerte en peligro", "Confirma tú la llamada"] },
    { t: "Primeros auxilios", hojas: ["PLS si respira pero no responde", "Presión directa en las hemorragias", "RCP: 30 compresiones, 2 insuflaciones", "Agua fresca en quemaduras"] },
    { t: "Señalizar y parte", hojas: ["Chaleco antes de bajar", "Baliza V-16, normalmente en el techo", "Sal del lado contrario al tráfico", "Parte amistoso solo sin heridos"] },
    { t: "Mal tiempo", hojas: ["Lluvia: más distancia y menos velocidad", "Niebla: trasera solo bajo 50 metros", "Nieve: arranca en segunda marcha", "Hielo: puentes y zonas de sombra"] },
    { t: "Conducción eficiente", hojas: ["Anticipa y frena suave", "Pie suave y marchas largas", "Presión correcta en los neumáticos", "Apaga el motor en paradas largas"] },
    { t: "Eléctricos e híbridos", hojas: ["Cables naranjas: no los toques", "Avisa al 112: eléctrico o híbrido", "En silencio puede seguir activo", "Humo o fuego: aléjate al máximo"] }
  ] } },

  // Qué hacer tras un accidente: PAS
  { leccion: "accidentes-pas", tras: 0, diagrama: { tipo: "acronimo", titulo: "La conducta PAS", palabra: "PAS", letras: [
    { l: "P", t: "Proteger", d: "Evita más accidentes: luces y señalización." },
    { l: "A", t: "Avisar", d: "Llama al 112: dónde estás y cuántos heridos hay." },
    { l: "S", t: "Socorrer", d: "Ayuda con lo que sepas, sin ponerte en peligro." }
  ] } },
  { leccion: "accidentes-pas", tras: 5, diagrama: { tipo: "comparar", titulo: "Con un herido", columnas: [
    { t: "Haz esto", tono: "ok", items: ["Avisa al 112 con datos claros", "Háblale y mantenlo tranquilo", "No te alejes hasta que llegue la ayuda"] },
    { t: "No hagas esto", tono: "bad", items: ["No le quites el casco", "No lo muevas sin peligro inminente", "Nada de comer ni beber", "No le dejes solo"] }
  ] } },

  // Primeros auxilios básicos
  { leccion: "accidentes-primeros-auxilios", tras: 3, diagrama: { tipo: "flujo", titulo: "PLS: respira pero no responde", pasos: [
    { t: "Brazo en ángulo", d: "El más cercano, en ángulo recto y con la palma hacia arriba." },
    { t: "Brazo cruzado", d: "El otro, sobre el pecho, con el dorso de la mano en la mejilla." },
    { t: "Gíralo hacia ti", d: "Dobla la pierna más alejada por la rodilla y tira de ella." },
    { t: "Cabeza atrás", d: "Inclínala ligeramente y revisa su respiración sin parar." }
  ] } },
  { leccion: "accidentes-primeros-auxilios", tras: 5, diagrama: { tipo: "piramide", titulo: "Parar una hemorragia", niveles: [
    { t: "Presión directa", d: "Paño limpio o tu mano, con guantes si los tienes." },
    { t: "Añade más paños", d: "Si sangra a través, pon más encima sin quitar los primeros." },
    { t: "Eleva la extremidad", d: "Por encima del nivel del corazón, si es posible." },
    { t: "Torniquete, último recurso", d: "Solo en hemorragia grave de brazo o pierna, y si sabes ponerlo." }
  ] } },

  // Señalizar el accidente y el parte amistoso
  { leccion: "accidentes-senalizar-parte", tras: 2, diagrama: { tipo: "flujo", titulo: "Orden al bajar del coche", pasos: [
    { t: "Ponte el chaleco", d: "En vía interurbana, antes de bajar, de día y de noche." },
    { t: "Coloca la V-16", d: "En la parte más visible, normalmente el techo." },
    { t: "Sal del lado contrario", d: "Por el lado opuesto al tráfico." },
    { t: "Ponte a salvo", d: "En el arcén o detrás del quitamiedos." }
  ] } },
  { leccion: "accidentes-senalizar-parte", tras: 7, diagrama: { tipo: "arbol", titulo: "¿Sirve el parte amistoso?", raiz: {
    q: "¿Hay heridos?",
    si: { r: "No sirve el parte: llama al 112", ok: false },
    no: {
      q: "¿Están de acuerdo los dos conductores?",
      si: { r: "Sí: el parte amistoso sirve", ok: true },
      no: { r: "No sirve: avisa a la Guardia Civil de Tráfico", ok: false }
    }
  } } },

  // Lluvia, niebla y noche
  { leccion: "accidentes-lluvia-niebla-noche", tras: 3, diagrama: { tipo: "arbol", titulo: "¿Qué antiniebla enciendo?", raiz: {
    q: "¿Hay niebla, lluvia intensa o nieve?",
    si: {
      q: "¿Ves menos de 50 metros?",
      si: { r: "Delantera y trasera, junto a las de cruce", ok: true },
      no: { r: "Solo la delantera, junto a las de cruce", ok: true }
    },
    no: { r: "Sin niebla, no uses antiniebla", ok: false }
  } } },
  { leccion: "accidentes-lluvia-niebla-noche", tras: 6, diagrama: { tipo: "piramide", titulo: "Luces: de más a menos habitual", niveles: [
    { t: "Luces de cruce", d: "La norma de noche y con poca visibilidad." },
    { t: "Luces de carretera", d: "Solo sin vehículos cerca. Cámbialas en cuanto aparezca uno." },
    { t: "Antiniebla", d: "Delantera: niebla, lluvia intensa o nieve. Trasera: menos de 50 m." }
  ] } },

  // Nieve, hielo, viento y cadenas
  { leccion: "accidentes-nieve-hielo-viento", tras: 5, diagrama: { tipo: "escala", titulo: "Velocidad con cadenas", unidad: "km/h", min: 0, max: 100, tramos: [
    { desde: 0, hasta: 30, t: "Hasta 30: cualquier cadena", tono: "ok" },
    { desde: 30, hasta: 50, t: "Solo cadenas que lo admiten", tono: "warn" },
    { desde: 50, hasta: 100, t: "Más de 50: no permitido", tono: "bad" }
  ], marcas: [
    { v: 30, t: "Algunas piden 30" },
    { v: 50, t: "Máximo con cadenas" }
  ] } },
  { leccion: "accidentes-nieve-hielo-viento", tras: 8, diagrama: { tipo: "comparar", titulo: "Nieve, hielo y viento", columnas: [
    { t: "Nieve", tono: "warn", items: ["Arranca en **segunda** marcha", "Evita frenar bruscamente", "Quita la nieve de cristales, faros y techo"] },
    { t: "Hielo", tono: "bad", items: ["Puentes y sombras se hielan antes", "Hielo negro: casi invisible en el asfalto", "Volante ligero: ya estás sobre él"] },
    { t: "Viento", tono: "info", items: ["Vehículos altos, los más expuestos", "Al cruzarte con camiones, agarra bien el volante", "Al salir de un túnel, anticípate"] }
  ] } },

  // Conducción eficiente
  { leccion: "accidentes-conduccion-eficiente", tras: 1, diagrama: { tipo: "ciclo", titulo: "Conducir con suavidad", centro: "Pie suave", pasos: [
    { t: "Mira lejos", d: "Lee el tráfico y anticipa lo que va a pasar." },
    { t: "Levanta el pie", d: "Con tiempo: aprovechas la inercia y evitas frenazos." },
    { t: "Acelera con suavidad", d: "Sin pisar a fondo y cambiando a bajas revoluciones." },
    { t: "Frena suave", d: "Ahorras combustible y desgastas menos los frenos." }
  ] } },
  { leccion: "accidentes-conduccion-eficiente", tras: 4, diagrama: { tipo: "comparar", titulo: "Ahorra o gasta más", columnas: [
    { t: "Ahorra", tono: "ok", items: ["Anticipar y frenar suave", "Marchas largas y pie suave", "Neumáticos bien inflados", "Motor apagado en paradas largas"] },
    { t: "Gasta más", tono: "bad", items: ["Frenazos innecesarios", "Acelerar a fondo", "Baca puesta sin usarla", "Ventanillas abiertas a velocidad alta"] }
  ] } },

  // Vehículos eléctricos e híbridos
  { leccion: "accidentes-electricos-hibridos", tras: 1, diagrama: { tipo: "linea", titulo: "De menos a más electricidad", hitos: [
    { k: "HEV", t: "Híbrido (HEV)", d: "No se enchufa: se carga al frenar y con el motor." },
    { k: "PHEV", t: "Híbrido enchufable (PHEV)", d: "Se enchufa, y el motor de combustión sirve de apoyo." },
    { k: "BEV", t: "Eléctrico (BEV)", d: "Solo motor eléctrico y batería. Se recarga con enchufe." }
  ] } },
  { leccion: "accidentes-electricos-hibridos", tras: 5, diagrama: { tipo: "flujo", titulo: "Accidente con eléctrico o híbrido", pasos: [
    { t: "No toques nada", d: "Ni cables naranjas ni batería, aunque parezca apagado." },
    { t: "Avisa al 112", d: "Di que es eléctrico o híbrido: los bomberos desconectan la alta tensión." },
    { t: "Aléjate si hay humo", d: "Humo o fuego en la batería: aléjate lo máximo." },
    { t: "No lo apagues tú", d: "Deja que lo hagan los servicios de emergencia." }
  ] } }
]);
