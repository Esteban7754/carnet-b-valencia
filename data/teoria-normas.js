window.TEMARIO = window.TEMARIO || [];
window.TEMARIO.push({
  id: "normas",
  orden: 11,
  titulo: "Normas, sanciones y conducción preventiva",
  icono: "",
  color: "#5b6b7f",
  resumen: "Qué pasa cuando incumples las normas (multas, puntos, inmovilizaciones y delitos) y cómo conducir de forma preventiva para evitarlo.",
  lecciones: [
    {
      id: "normas-infracciones",
      titulo: "Tipos de infracciones y multas",
      minutos: 7,
      contenido: [
        { tipo: "p", texto: "Cuando incumples una norma de tráfico, la sanción depende de **lo grave que sea** la infracción. La **Ley sobre Tráfico** (Real Decreto Legislativo 6/2015) y el **Reglamento General de Circulación** las clasifican en tres tipos." },
        { tipo: "clave", texto: "Hay tres tipos de infracción: **leves**, **graves** y **muy graves**. Cuanto más peligrosa es la conducta, más sube la multa." },
        { tipo: "tabla", cabecera: ["Tipo", "Multa general", "Puntos que restas", "Ejemplo típico"], filas: [
          ["Leve", "100 €", "No restas puntos", "Algunas infracciones de aparcamiento"],
          ["Grave", "200 €", "Sí", "No usar el cinturón de seguridad"],
          ["Muy grave", "500 €", "Sí", "Superar en más de un 50 % el límite de velocidad"]
        ] },
        { tipo: "p", texto: "Las multas de **100, 200 y 500 euros** son las **generales**. Pero cada infracción tiene su propio importe en el cuadro de sanciones, y algunas son mucho más altas." },
        { tipo: "lista", items: [
          "**Alcohol**: por encima de **0,25 mg/l** en aire espirado (**0,15** si eres novel o profesional), la infracción es grave: **500 €** y **4 puntos**.",
          "**Alcohol**: por encima de **0,50 mg/l** en aire espirado, la infracción es muy grave: **1.000 €** y **6 puntos**.",
          "**Velocidad**: la multa depende del exceso y del tipo de vía. Lo verás con detalle en la lección «Radares, multas y puntos»."
        ] },
        { tipo: "aviso", texto: "Con más de **0,60 mg/l** en aire espirado, el alcohol deja de ser solo una multa: es **delito**. Lo verás en la última lección de este tema." },
        { tipo: "p", texto: "**¿Cómo te llega la sanción?** Si te denuncia un agente, o si un radar graba la infracción, la DGT te envía una **notificación** con la infracción, la fecha, el lugar y el plazo para pagar o alegar." },
        { tipo: "quiz", pregunta: "¿Cuál es la multa general de una infracción grave?", opciones: ["100 euros", "200 euros", "500 euros"], correcta: 1, explicacion: "La multa general es de 100 € para las leves, 200 € para las graves y 500 € para las muy graves. Algunas infracciones tienen un importe propio." },
        { tipo: "truco", texto: "**Leve**: multa y sin puntos. **Grave** y **muy grave**: multa y puntos. Con eso ya tienes lo principal." },
        { tipo: "p", texto: "**Pago con reducción**: si pagas en **20 días naturales** desde la notificación, tienes un **50 %** de descuento sobre la multa." },
        { tipo: "aviso", texto: "Pagar con descuento supone **renunciar a recurrir** la multa. Y los **puntos se restan igual**: el descuento solo es en dinero." },
        { tipo: "p", texto: "**El titular y el conductor**: la notificación llega al **titular** del vehículo, aunque no fuera quien conducía. Si no conducías tú, debes **identificar al conductor** en un plazo de **20 días naturales**. Si no lo haces sin motivo, la ley puede considerarte responsable a ti." },
        { tipo: "p", texto: "**Dirección Electrónica Vial (DEV)**: es el sistema de notificaciones electrónicas de la DGT. Se entra con **certificado digital** o **Cl@ve**. Si no entras en **10 días naturales**, la notificación se considera entregada igualmente. Darte de alta es voluntario para particulares." },
        { tipo: "quiz", pregunta: "Te llega una multa por una infracción cometida con tu coche, pero no conducías tú. ¿Qué debes hacer?", opciones: ["Pagarla sin leer nada", "Esperar a que caduque", "Identificar al conductor en el plazo indicado"], correcta: 2, explicacion: "El titular debe identificar al conductor dentro del plazo. Si no lo hace sin motivo, puede ser considerado responsable él." }
      ]
    },
    {
      id: "normas-puntos",
      titulo: "Puntos: qué restas y cómo recuperarlos",
      minutos: 7,
      contenido: [
        { tipo: "p", texto: "Además de la multa, las infracciones **graves** y **muy graves** te restan **puntos**. Empiezas con un **saldo inicial de 12 puntos** (**8** si eres novel). Aquí tienes las infracciones más comunes y cómo se recuperan los puntos." },
        { tipo: "tabla", cabecera: ["Infracción", "Puntos que restas"], filas: [
          ["Sujetar el móvil con la mano al conducir", "6"],
          ["Dar positivo en drogas al volante", "6"],
          ["Alcohol por encima de 0,50 mg/l en aire", "6"],
          ["Alcohol por encima de 0,25 mg/l en aire", "4"],
          ["No usar el cinturón de seguridad", "4"],
          ["Exceso de velocidad", "Depende del exceso y de la vía"],
          ["Algunas infracciones de aparcamiento (leves)", "Ninguno"]
        ] },
        { tipo: "aviso", texto: "**Las leves no restan puntos.** Que una infracción sea leve significa que solo pagas la multa." },
        { tipo: "p", texto: "Cuando un conductor llega a **cero puntos**, la DGT inicia la **pérdida de vigencia** del permiso. Desde que te notifican la resolución, no puedes conducir ningún vehículo." },
        { tipo: "clave", texto: "**Con cero puntos no puedes conducir.** Hacerlo después de la notificación es un delito." },
        { tipo: "p", texto: "**Recuperación parcial**: mientras te queden puntos, un **curso de sensibilización y reeducación vial** puede devolverte **hasta 6 puntos**. Sus condiciones (duración, plazos) las marca la DGT." },
        { tipo: "p", texto: "**Recuperación total**: si pierdes **todos** los puntos y el permiso pierde su vigencia, no puedes volver a conducir hasta pasados **6 meses** (3 si eres conductor profesional). Además, debes hacer el **curso de reeducación** completo y aprobar de nuevo el **examen teórico**. **Esperar no basta.**" },
        { tipo: "lista", items: [
          "**2 años** sin infracciones que resten puntos: vuelves al **saldo inicial** de 12 puntos.",
          "**3 años** si la última infracción fue **muy grave**.",
          "**Bonificación**: si sigues sin infracciones que resten puntos, tu saldo puede subir por encima de 12, hasta un máximo de **15 puntos**."
        ] },
        { tipo: "quiz", pregunta: "Tras una infracción grave que restó puntos, ¿cuánto tiempo sin infracciones hace falta para recuperar el saldo inicial?", opciones: ["1 año", "2 años", "3 años"], correcta: 1, explicacion: "Con 2 años sin infracciones que resten puntos vuelves al saldo inicial. Si la última fue muy grave, el plazo es de 3 años." },
        { tipo: "truco", texto: "Piensa en cada infracción grave como una **deuda**: tardas tiempo en devolverla. Conduce sin infracciones y tu saldo volverá a subir." },
        { tipo: "p", texto: "Los puntos se restan cuando la sanción es **firme**, es decir, cuando ya no cabe recurso o la has pagado. Si la recurres, los puntos no se restan hasta que se resuelva." },
        { tipo: "aviso", texto: "Tener muchos puntos no te libra de la multa: **la multa se paga igual**, tengas los puntos que tengas." },
        { tipo: "quiz", pregunta: "Si llegas a cero puntos, ¿qué ocurre?", opciones: ["Pagas una multa extra y sigues conduciendo", "Pierdes la vigencia del permiso y no puedes conducir", "Solo pierdes 2 puntos más"], correcta: 1, explicacion: "Al llegar a cero, la DGT inicia la pérdida de vigencia del permiso. Desde la notificación no puedes conducir." }
      ]
    },
    {
      id: "normas-medidas",
      titulo: "Inmovilización, retirada y delitos",
      minutos: 6,
      contenido: [
        { tipo: "p", texto: "Hay infracciones que no acaban solo en una multa. El agente puede **inmovilizar** el vehículo, y algunas conductas son **delito contra la seguridad vial**, que se juzga en los tribunales." },
        { tipo: "lista", items: [
          "**No tener seguro obligatorio** en vigor.",
          "**Circular sin ITV** cuando el estado del vehículo supone un peligro.",
          "**Dar positivo en alcohol** por encima del límite.",
          "**Exceso de ocupantes**: llevar más personas de las permitidas.",
          "**No tener permiso** válido para conducir ese vehículo."
        ] },
        { tipo: "p", texto: "**Inmovilizar** significa que el vehículo no puede seguir circulando hasta que se solucione el motivo. Si no puede quedarse en el lugar, se traslada a un depósito." },
        { tipo: "p", texto: "**Retirada al depósito**: la grúa lleva el vehículo al depósito. Quien lo recupera paga los gastos de grúa, de traslado y de estancia." },
        { tipo: "tabla", cabecera: ["Gasto", "Quién lo paga"], filas: [
          ["Grúa y traslado al depósito", "Quien recupera el vehículo"],
          ["Estancia en el depósito", "Quien recupera el vehículo"],
          ["Tarifas", "Depende del ayuntamiento o de quien gestione la grúa"]
        ] },
        { tipo: "aviso", texto: "**Recuperar el coche no es automático.** Hay que solucionar el motivo (por ejemplo, tener el seguro en vigor) y pagar los gastos." },
        { tipo: "p", texto: "**Delitos contra la seguridad vial**: están en el **Código Penal**, no en la Ley de Tráfico. Pueden acabar en juicio, con prisión, multa y retirada del permiso. Los más importantes son estos:" },
        { tipo: "lista", items: [
          "**Alcohol**: más de **0,60 mg/l** en aire espirado (1,2 g/l en sangre).",
          "**Negarse** a someterse a las pruebas de alcohol o drogas.",
          "**Exceso de velocidad**: superar en más de **60 km/h** el límite en vía urbana, o en más de **80 km/h** en vía interurbana.",
          "**Conducción temeraria**: conducir con temeridad y poner en peligro la vida o la integridad de las personas.",
          "**Conducir sin permiso**: sin haber obtenido nunca el permiso."
        ] },
        { tipo: "quiz", pregunta: "¿A partir de qué tasa de alcohol en aire espirado la conducción es delito?", opciones: ["0,25 mg/l", "0,50 mg/l", "0,60 mg/l"], correcta: 2, explicacion: "Por encima de 0,60 mg/l en aire espirado (1,2 g/l en sangre) es delito. Entre 0,25 y 0,60 es una infracción administrativa." },
        { tipo: "aviso", texto: "**Negarte a la prueba es delito aunque no hayas bebido.** La pena es de prisión de 6 meses a 1 año y retirada del permiso de 1 a 4 años." },
        { tipo: "truco", texto: "El etilómetro no entiende de «solo he bebido un poco»: mide lo que hay en tu aliento. Si vas a conducir, no bebas." },
        { tipo: "quiz", pregunta: "Circulas sin seguro obligatorio y te para un agente. ¿Qué puede hacer?", opciones: ["Solo multarte", "Inmovilizar el vehículo", "Retirarte el permiso de por vida"], correcta: 1, explicacion: "Sin seguro obligatorio, el agente puede inmovilizar el vehículo hasta que se solucione el problema." }
      ]
    }
  ]
});
window.RESUMENES = Object.assign(window.RESUMENES || {}, {
  "normas-infracciones": {
    emoji: "",
    idea: "Cada infracción tiene una gravedad (leve, grave o muy grave) que decide cuánto pagas, cuántos puntos pierdes y cómo te llega la sanción.",
    puntos: ["Multas generales: **100 €** (leve), **200 €** (grave) y **500 €** (muy grave), aunque algunas tienen importe propio.", "El **alcohol** tiene cuadro propio: por encima de **0,25 mg/l** es grave, y por encima de **0,60 mg/l** es delito.", "Pagas con el **50 %** de descuento en **20 días naturales**, pero renuncias a recurrir y los puntos se restan igual."],
    recuerda: "Si te llega una multa de tu coche y no conducías tú, **identifica al conductor** en el plazo que indica la notificación."
  },
  "normas-puntos": {
    emoji: "",
    idea: "Tus puntos funcionan como un saldo: las infracciones graves y muy graves lo bajan, el tiempo sin infracciones lo sube y, con cero, pierdes el permiso.",
    puntos: ["Empiezas con **12 puntos** (**8** si eres novel). Las leves no restan puntos.", "Con **2 años** sin infracciones que resten puntos vuelves al saldo inicial; si la última fue muy grave, son **3 años**.", "Un curso de sensibilización y reeducación vial puede recuperar **hasta 6 puntos**. Con **cero** pierdes la vigencia."],
    recuerda: "**Cero puntos = sin permiso.** Recuperarlos lleva tiempo y seguir el procedimiento de la DGT: esperar no basta."
  },
  "normas-medidas": {
    emoji: "",
    idea: "Algunas conductas no acaban en una simple multa: te pueden inmovilizar el coche y, si son delito, pueden acabar en juicio.",
    puntos: ["Pueden **inmovilizar** el vehículo sin seguro, con la ITV en mal estado, con alcohol positivo, con exceso de ocupantes o sin permiso válido.", "El coche va al **depósito** y quien lo recupera paga la grúa, el traslado y la estancia.", "Son delitos el alcohol por encima de **0,60 mg/l**, negarse a las pruebas, la conducción temeraria, conducir sin permiso y superar en más de **60 km/h** (ciudad) u **80 km/h** (carretera) el límite."],
    recuerda: "**Negarte a la prueba de alcohol es delito aunque no hayas bebido.** Un delito puede acabar en juicio, no solo en multa."
  }
});
window.DIAGRAMAS = (window.DIAGRAMAS || []).concat([
  { tema: "normas", diagrama: { tipo: "mapa", titulo: "Normas, sanciones y conducción preventiva", centro: "Normas y sanciones", ramas: [
    { t: "Infracciones", hojas: ["Leve, grave o muy grave", "Multas: 100, 200 o 500 €", "Pagas en 20 días: 50 %", "DEV: notificaciones electrónicas"] },
    { t: "Puntos", hojas: ["12 puntos al empezar", "8 si eres novel", "0 puntos: sin vigencia", "2 años limpios: saldo inicial"] },
    { t: "Medidas", hojas: ["Inmovilización del vehículo", "Retirada al depósito", "Delitos del Código Penal"] },
    { t: "Conducción preventiva", hojas: ["Ver y prever el peligro", "Distancia de seguridad suficiente", "Velocidad adecuada a la vía", "Descansar: no conducir cansado"] },
    { t: "Causas de accidentes", hojas: ["Velocidad inadecuada", "Alcohol y drogas", "Distracciones con el móvil", "Cansancio y sueño"] }
  ] } },
  { leccion: "normas-infracciones", tras: 4, diagrama: { tipo: "comparar", titulo: "Multa general y excepciones", columnas: [
    { t: "Regla general", tono: "ok", items: ["Leve: 100 €, sin puntos", "Grave: 200 €, con puntos", "Muy grave: 500 €, con puntos"] },
    { t: "Alcohol", tono: "warn", items: ["Grave si pasas 0,25 mg/l (500 €)", "Muy grave si pasas 0,50 mg/l (1.000 €)", "Delito por encima de 0,60 mg/l"] },
    { t: "Velocidad", tono: "bad", items: ["Depende del exceso y de la vía", "Más de un 50 %: muy grave", "Más de 60/80 km/h de exceso: delito"] }
  ] } },
  { leccion: "normas-infracciones", tras: 12, diagrama: { tipo: "flujo", titulo: "Qué hacer si te llega una multa", pasos: [
    { t: "Lee la notificación", d: "Mira la infracción, la fecha, el lugar y el plazo de pago." },
    { t: "¿Conducías tú?", d: "Si no conducías tú, identifica al conductor en plazo." },
    { t: "Paga en 20 días", d: "Pagando en 20 días naturales tienes un 50 % de descuento." },
    { t: "O presenta alegaciones", d: "Si no estás de acuerdo, presenta alegaciones en el plazo indicado." }
  ] } },
  { leccion: "normas-puntos", tras: 6, diagrama: { tipo: "comparar", titulo: "Cómo recuperar puntos", columnas: [
    { t: "Recuperación parcial", tono: "ok", items: ["Te quedan puntos", "Recuperas hasta 6 puntos", "Curso de sensibilización y reeducación"] },
    { t: "Sin infracciones", tono: "info", items: ["2 años sin restar puntos", "Vuelves al saldo de 12", "3 años si fue muy grave"] },
    { t: "Recuperación total", tono: "bad", items: ["Llegas a cero puntos", "Pierdes la vigencia del permiso", "Esperas el plazo y sigues el procedimiento"] }
  ] } },
  { leccion: "normas-puntos", tras: 9, diagrama: { tipo: "ciclo", titulo: "Cómo sube y baja tu saldo", centro: "Buena conducción", pasos: [
    { t: "Sin infracciones", d: "Conduces sin infracciones que resten puntos." },
    { t: "2 años limpios", d: "Vuelves a 12 puntos (3 años si fue muy grave)." },
    { t: "Bonificación", d: "Si sigues sin infracciones, puedes subir hasta 15." },
    { t: "Otra infracción grave", d: "Vuelve a restar puntos y el ciclo empieza otra vez." }
  ] } },
  { leccion: "normas-medidas", tras: 1, diagrama: { tipo: "arbol", titulo: "¿Te pueden inmovilizar el coche?", raiz: { q: "¿Te falta el seguro obligatorio?", si: { r: "Te inmovilizan el vehículo", ok: false }, no: { q: "¿Has dado positivo en alcohol por encima del límite?", si: { r: "Te inmovilizan el coche y no puedes conducir", ok: false }, no: { q: "¿Conduces sin permiso válido para ese vehículo?", si: { r: "Te inmovilizan el vehículo", ok: false }, no: { r: "Por estos tres motivos, puedes seguir", ok: true } } } } } },
  { leccion: "normas-medidas", tras: 7, diagrama: { tipo: "acronimo", titulo: "Delitos que recuerdas con ANTES", palabra: "ANTES", letras: [
    { l: "A", t: "Alcohol", d: "Más de 0,60 mg/l en aire espirado es delito." },
    { l: "N", t: "Negarte", d: "Negarte a la prueba de alcohol o drogas es delito." },
    { l: "T", t: "Temeridad", d: "Conducir con temeridad poniendo en peligro a otros." },
    { l: "E", t: "Exceso de velocidad", d: "Más de 60 km/h sobre el límite en ciudad o 80 en carretera." },
    { l: "S", t: "Sin permiso", d: "Conducir sin haber obtenido nunca el permiso." }
  ] } }
]);
window.PREGUNTAS = (window.PREGUNTAS || []).concat([
  { id: "xn-001", tema: "normas", pregunta: "¿Cuál es la multa general de una infracción grave?", opciones: ["100 euros", "200 euros", "500 euros"], correcta: 1, explicacion: "La multa general es de 100 € para las leves, 200 € para las graves y 500 € para las muy graves. Algunas infracciones tienen un importe propio." },
  { id: "xn-002", tema: "normas", pregunta: "¿Qué es el cuadro de sanciones?", opciones: ["La lista de multas y puntos que corresponde a cada infracción", "Un mapa con los radares de la ciudad", "El listado de aprobados del examen teórico"], correcta: 0, explicacion: "El cuadro de sanciones recoge el importe y los puntos de cada infracción. Es la referencia para saber qué te corresponde." },
  { id: "xn-003", tema: "normas", pregunta: "¿Cuántos días naturales tienes para pagar con la reducción del 50 %?", opciones: ["10 días", "20 días", "30 días"], correcta: 1, explicacion: "Si pagas en 20 días naturales desde la notificación, tienes un 50 % de descuento." },
  { id: "xn-004", tema: "normas", pregunta: "Si pagas una multa con la reducción del 50 %, ¿qué pasa con los puntos y con el recurso?", opciones: ["Renuncias a recurrir, pero los puntos se restan igual", "Puedes recurrirla después sin problema", "Ni pierdes puntos ni puedes recurrir"], correcta: 0, explicacion: "Al pagar con descuento renuncias a recurrir la sanción. El descuento solo afecta al importe: los puntos se restan igual." },
  { id: "xn-005", tema: "normas", pregunta: "Te llega una multa por una infracción cometida con tu coche, pero no conducías tú. ¿Qué debes hacer?", opciones: ["Pagarla sin leer nada", "Esperar a que caduque", "Identificar al conductor en el plazo indicado"], correcta: 2, explicacion: "El titular debe identificar al conductor dentro del plazo que figura en la notificación. Si no lo hace sin motivo, la ley puede considerarle responsable a él." },
  { id: "xn-006", tema: "normas", pregunta: "¿Qué es la Dirección Electrónica Vial (DEV)?", opciones: ["Una aplicación para pagar el aparcamiento", "El sistema de notificaciones electrónicas de la DGT", "Un tipo de multa por exceso de velocidad"], correcta: 1, explicacion: "La DEV es el sistema por el que la DGT te envía notificaciones electrónicas. Se entra con certificado digital o Cl@ve." },
  { id: "xn-007", tema: "normas", pregunta: "Si no entras en tu DEV en 10 días naturales, ¿qué ocurre con la notificación?", opciones: ["Se reinicia el plazo de pago", "Se anula la sanción", "Se considera entregada igualmente"], correcta: 2, explicacion: "Pasados 10 días naturales sin acceder, la notificación se da por rechazada y se considera entregada, así que el procedimiento sigue adelante." },
  { id: "xn-008", tema: "normas", pregunta: "¿Cuál es el límite general de alcohol en aire espirado?", opciones: ["0,25 mg/l", "0,15 mg/l", "0,60 mg/l"], correcta: 0, explicacion: "El límite general es 0,25 mg/l en aire espirado. El 0,15 se aplica a noveles y profesionales, y el 0,60 es el umbral del delito." },
  { id: "xn-009", tema: "normas", pregunta: "Eres conductor general y el etilómetro marca 0,30 mg/l en aire. ¿Qué cometes?", opciones: ["Un delito", "Ninguna infracción", "Una infracción grave: 500 € y 4 puntos"], correcta: 2, explicacion: "Por encima de 0,25 mg/l en aire la infracción es grave: 500 € y 4 puntos. Solo es delito por encima de 0,60 mg/l." },
  { id: "xn-010", tema: "normas", pregunta: "¿Qué ocurre si superas en más de un 50 % el límite de velocidad?", opciones: ["Es una infracción leve", "No es infracción si circulas por autovía", "Es una infracción muy grave"], correcta: 2, explicacion: "Superar en más de un 50 % el límite de velocidad es una infracción muy grave. En algunos casos puedes perder todos los puntos de golpe." },
  { id: "xn-011", tema: "normas", pregunta: "¿Cuál es la multa general de una infracción muy grave?", opciones: ["500 euros", "100 euros", "200 euros"], correcta: 0, explicacion: "La multa general para las muy graves es de 500 €. Algunas infracciones tienen un importe propio, como el alcohol por encima de 0,50 mg/l." },
  { id: "xn-012", tema: "normas", pregunta: "¿Qué ocurre con los puntos si cometes una infracción leve?", opciones: ["Se restan 2 puntos", "No se restan puntos", "Se restan 4 puntos"], correcta: 1, explicacion: "Las infracciones leves no restan puntos: solo tienes que pagar la multa." },
  { id: "xn-013", tema: "normas", pregunta: "¿Con cuántos puntos empieza un conductor general?", opciones: ["8 puntos", "10 puntos", "12 puntos"], correcta: 2, explicacion: "El saldo inicial de un conductor general es de 12 puntos. Los noveles empiezan con 8." },
  { id: "xn-014", tema: "normas", pregunta: "¿Con cuántos puntos empieza un conductor novel?", opciones: ["12 puntos", "8 puntos", "15 puntos"], correcta: 1, explicacion: "Los noveles, con menos de 2 años de permiso, empiezan con 8 puntos. Tras 2 años sin infracciones que resten puntos, pasan a 12." },
  { id: "xn-015", tema: "normas", pregunta: "¿Cuál es el máximo de puntos que puede tener un conductor?", opciones: ["15 puntos", "14 puntos", "12 puntos"], correcta: 0, explicacion: "El máximo es 15 puntos, y se llega con años seguidos sin infracciones que resten puntos." },
  { id: "xn-016", tema: "normas", pregunta: "Tras una infracción que restó puntos, ¿cuánto tiempo sin infracciones hace falta para recuperar el saldo inicial?", opciones: ["1 año", "2 años", "3 años"], correcta: 1, explicacion: "Con 2 años sin infracciones que resten puntos vuelves al saldo inicial. Si la última fue muy grave, son 3 años." },
  { id: "xn-017", tema: "normas", pregunta: "Si la última infracción que restó puntos fue muy grave, ¿cuánto tiempo sin infracciones necesitas para recuperar el saldo inicial?", opciones: ["2 años", "5 años", "3 años"], correcta: 2, explicacion: "Cuando la última infracción es muy grave, el plazo sube a 3 años." },
  { id: "xn-018", tema: "normas", pregunta: "¿Qué ocurre cuando llegas a cero puntos?", opciones: ["Pagas una multa extra y sigues conduciendo", "Pierdes la vigencia del permiso y no puedes conducir", "Solo pierdes 2 puntos más"], correcta: 1, explicacion: "Al llegar a cero, la DGT inicia la pérdida de vigencia del permiso. Desde que te notifican la resolución no puedes conducir." },
  { id: "xn-019", tema: "normas", pregunta: "¿Cuántos puntos puedes recuperar con un curso de sensibilización y reeducación vial en la modalidad parcial?", opciones: ["Hasta 6 puntos", "Hasta 12 puntos", "Todos los puntos siempre"], correcta: 0, explicacion: "El curso parcial permite recuperar hasta 6 puntos. Sus condiciones concretas las marca la DGT." },
  { id: "xn-020", tema: "normas", pregunta: "Si pierdes todos los puntos, ¿basta con esperar para recuperar el permiso?", opciones: ["No, hay que esperar 6 meses, hacer el curso y aprobar de nuevo el teórico", "Sí, el permiso vuelve solo", "Sí, con pagar la multa"], correcta: 0, explicacion: "Hay que esperar 6 meses (3 los profesionales), hacer el curso de reeducación y aprobar otra vez el examen teórico. Esperar no basta." },
  { id: "xn-021", tema: "normas", pregunta: "¿Qué es la bonificación de puntos?", opciones: ["Un descuento en la multa", "Subir por encima de 12 puntos sin infracciones, hasta 15", "Un saldo fijo de 20 puntos"], correcta: 1, explicacion: "Si sigues sin infracciones que resten puntos, tu saldo puede subir por encima de 12, hasta el máximo de 15." },
  { id: "xn-022", tema: "normas", pregunta: "¿Cuál de estas infracciones resta más puntos?", opciones: ["Sujetar el móvil con la mano (6 puntos)", "No usar el cinturón de seguridad (4 puntos)", "Algunas infracciones de aparcamiento (sin puntos)"], correcta: 0, explicacion: "Sujetar el móvil con la mano resta 6 puntos, y no usar el cinturón, 4. Las infracciones de aparcamiento leves no restan puntos." },
  { id: "xn-023", tema: "normas", pregunta: "¿Cuántos puntos resta conducir con más de 0,50 mg/l de alcohol en aire?", opciones: ["4 puntos", "2 puntos", "6 puntos"], correcta: 2, explicacion: "Por encima de 0,50 mg/l en aire la infracción es muy grave: 1.000 € y 6 puntos." },
  { id: "xn-024", tema: "normas", pregunta: "¿Qué es tu saldo de puntos?", opciones: ["El dinero que te devuelven si no tienes multas", "Los años que llevas con el permiso", "El número de puntos que tienes en tu permiso"], correcta: 2, explicacion: "Es el número de puntos que te quedan. Empiezas con un saldo inicial, y las infracciones graves y muy graves lo bajan." },
  { id: "xn-025", tema: "normas", pregunta: "¿A partir de qué tasa de alcohol en aire espirado la conducción es delito?", opciones: ["0,25 mg/l", "0,50 mg/l", "0,60 mg/l"], correcta: 2, explicacion: "Por encima de 0,60 mg/l en aire espirado (1,2 g/l en sangre) es delito. Entre 0,25 y 0,60 es una infracción administrativa." },
  { id: "xn-026", tema: "normas", pregunta: "Un agente te pide la prueba de alcohol y te niegas, aunque no hayas bebido. ¿Qué ocurre?", opciones: ["Es delito, aunque no hayas bebido", "Solo una multa leve", "Nada, es un derecho del conductor"], correcta: 0, explicacion: "Negarse a una prueba legal de alcohol o drogas es delito. La pena es de prisión de 6 meses a 1 año y retirada del permiso de 1 a 4 años." },
  { id: "xn-027", tema: "normas", pregunta: "¿Cuál de estos hechos NO es delito contra la seguridad vial?", opciones: ["Conducir sin haber obtenido nunca el permiso", "Aparcar en doble fila", "Conducir con temeridad poniendo en peligro a otros"], correcta: 1, explicacion: "Aparcar en doble fila es una infracción de tráfico, pero no un delito." },
  { id: "xn-028", tema: "normas", pregunta: "Circulas sin seguro obligatorio y te para un agente. ¿Qué puede hacer?", opciones: ["Inmovilizar el vehículo", "Solo multarte", "Retirarte el permiso de por vida"], correcta: 0, explicacion: "Sin seguro obligatorio, el agente puede inmovilizar el vehículo hasta que se solucione el problema." },
  { id: "xn-029", tema: "normas", pregunta: "¿Cuál de estas es una causa de inmovilización del vehículo?", opciones: ["Llevar una mochila en el asiento del copiloto", "Conducir sin permiso válido para ese vehículo", "Llevar la luz de cruce encendida de día"], correcta: 1, explicacion: "No tener permiso válido para el vehículo que conduces es causa de inmovilización. Las otras dos situaciones no lo son." },
  { id: "xn-030", tema: "normas", pregunta: "Te inmovilizan el coche y lo llevan al depósito. ¿Quién paga la grúa y la estancia?", opciones: ["Quien recupera el vehículo", "El ayuntamiento", "La aseguradora siempre"], correcta: 0, explicacion: "Quien recupera el coche paga los gastos de grúa, traslado y estancia. Las tarifas las fijan las ordenanzas municipales." },
  { id: "xn-031", tema: "normas", pregunta: "En vía urbana, ¿a partir de qué exceso de velocidad hablamos de delito?", opciones: ["Más de 20 km/h", "Más de 60 km/h", "Más de 100 km/h"], correcta: 1, explicacion: "En vía urbana, superar en más de 60 km/h el límite es delito. En vía interurbana, el umbral es de 80 km/h." },
  { id: "xn-032", tema: "normas", pregunta: "En vía interurbana, ¿a partir de qué exceso de velocidad hablamos de delito?", opciones: ["Más de 100 km/h", "Más de 60 km/h", "Más de 80 km/h"], correcta: 2, explicacion: "En vía interurbana el umbral es superar en más de 80 km/h el límite. En vía urbana, en más de 60 km/h." },
  { id: "xn-033", tema: "normas", pregunta: "Das positivo en alcohol por encima del límite. ¿Puedes seguir conduciendo tú el coche?", opciones: ["No, no puedes seguir conduciendo", "Sí, si te sientes bien", "Sí, si llevas poca cantidad"], correcta: 0, explicacion: "Con alcohol por encima del límite no puedes seguir conduciendo, y el vehículo puede quedar inmovilizado." },
  { id: "xn-034", tema: "normas", pregunta: "¿Qué hay que hacer para recuperar un coche inmovilizado?", opciones: ["Pagar y ya está", "Solucionar la causa y pagar los gastos", "Esperar un año"], correcta: 1, explicacion: "Hay que solucionar el motivo de la inmovilización, por ejemplo tener el seguro en vigor, y pagar los gastos de grúa y depósito." },
  { id: "xn-035", tema: "normas", pregunta: "¿Qué es la conducción temeraria?", opciones: ["Conducir con mucha precaución", "Conducir despacio por la autopista", "Conducir con temeridad y poner en peligro a las personas"], correcta: 2, explicacion: "Es conducir con temeridad manifiesta y poner en peligro la vida o la integridad de las personas. Es delito." },
  { id: "xn-036", tema: "normas", pregunta: "¿Qué diferencia hay entre una inmovilización y una multa?", opciones: ["Son lo mismo", "La multa impide conducir y la inmovilización no", "La inmovilización impide seguir circulando; la multa es una sanción económica"], correcta: 2, explicacion: "La inmovilización retiene el vehículo hasta que se soluciona la causa. La multa es una sanción económica, y pueden darse las dos a la vez." }
]);
window.FLASHCARDS = (window.FLASHCARDS || []).concat([
  { id: "fxn-001", tema: "normas", emoji: "", frente: "Multa general de una infracción leve", dorso: "**100 euros**, sin restar puntos", nota: "Las infracciones leves no quitan puntos." },
  { id: "fxn-002", tema: "normas", emoji: "", frente: "Multa general de una infracción grave", dorso: "**200 euros**, y restas puntos", nota: "Las graves y muy graves sí restan puntos." },
  { id: "fxn-003", tema: "normas", emoji: "", frente: "Plazo para pagar con el 50 % de descuento", dorso: "**20 días naturales** desde la notificación", nota: "Pagar supone renunciar a recurrir, y los puntos se restan igual." },
  { id: "fxn-004", tema: "normas", emoji: "", frente: "Qué es la DEV", dorso: "**Dirección Electrónica Vial**: el sistema de notificaciones electrónicas de la DGT", nota: "Se entra con certificado digital o Cl@ve." },
  { id: "fxn-005", tema: "normas", emoji: "", frente: "Multa de tu coche y no conducías tú", dorso: "**Identificar al conductor** en el plazo indicado", nota: "Si no lo haces sin motivo, la ley puede hacerte responsable a ti." },
  { id: "fxn-006", tema: "normas", emoji: "", frente: "Saldo inicial de puntos de un conductor general", dorso: "**12 puntos**", nota: "Un conductor novel empieza con 8." },
  { id: "fxn-007", tema: "normas", emoji: "", frente: "Máximo de puntos que puedes tener", dorso: "**15 puntos**", nota: "Se llega con años sin infracciones que resten puntos." },
  { id: "fxn-008", tema: "normas", emoji: "", frente: "Tiempo sin infracciones para recuperar el saldo inicial", dorso: "**2 años**, o **3 años** si la última fue muy grave", nota: "Es la vuelta al saldo inicial de 12 puntos." },
  { id: "fxn-009", tema: "normas", emoji: "", frente: "Puntos que puedes recuperar con un curso parcial", dorso: "**Hasta 6 puntos**", nota: "Si pierdes todos: 6 meses sin permiso, curso completo y nuevo examen teórico." },
  { id: "fxn-010", tema: "normas", emoji: "", frente: "Qué pasa al llegar a cero puntos", dorso: "**Pierdes la vigencia** del permiso y no puedes conducir", nota: "Esperar no basta: hay que seguir el procedimiento de la DGT." },
  { id: "fxn-011", tema: "normas", emoji: "", frente: "Tasa de alcohol que convierte la infracción en delito", dorso: "**Más de 0,60 mg/l** en aire espirado", nota: "Entre 0,25 y 0,60 es una infracción administrativa." },
  { id: "fxn-012", tema: "normas", emoji: "", frente: "Negarte a la prueba de alcohol", dorso: "**Es delito**, aunque no hayas bebido", nota: "Pena: prisión de 6 meses a 1 año y retirada del permiso de 1 a 4 años." },
  { id: "fxn-013", tema: "normas", emoji: "", frente: "Exceso de velocidad que es delito en vía urbana", dorso: "**Más de 60 km/h** sobre el límite", nota: "En vía interurbana el umbral es de 80 km/h." },
  { id: "fxn-014", tema: "normas", emoji: "", frente: "Qué puede hacer el agente si no tienes seguro obligatorio", dorso: "**Inmovilizar el vehículo**", nota: "Lo recuperas al solucionar el motivo y pagar los gastos." },
  { id: "fxn-015", tema: "normas", emoji: "", frente: "Quién paga la grúa y el depósito", dorso: "**Quien recupera el vehículo**", nota: "Las tarifas las fijan las ordenanzas municipales." }
]);
