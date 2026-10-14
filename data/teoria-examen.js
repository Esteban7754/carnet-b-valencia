window.TEMARIO = window.TEMARIO || [];
window.TEMARIO.push({
  id: "examen",
  orden: 1,
  titulo: "El permiso B y el examen (Comunitat Valenciana)",
  icono: "📝",
  color: "#2a6f97",
  resumen: "Qué necesitas para sacarte el B, cómo son los exámenes, cuánto cuesta, dónde examinarte en la Comunitat Valenciana y qué puedes conducir con él.",
  lecciones: [
    {
      id: "examen-requisitos",
      titulo: "Requisitos y cómo prepararte",
      minutos: 7,
      contenido: [
        { tipo: "p", texto: "El **permiso B** es el carnet de coche: te permite conducir turismos y furgonetas ligeras. Antes de empezar conviene tener claros los requisitos, porque sin uno de ellos no puedes tramitarlo." },
        { tipo: "lista", items: [
          "**Edad mínima: 18 años** cumplidos para el B.",
          "**Documento de identidad en vigor**: DNI, NIE o pasaporte, según tu caso.",
          "**Certificado médico** de aptitud, expedido por un **Centro de Reconocimiento de Conductores (CRC)** autorizado.",
          "**Pagar la tasa** de examen (lo vemos en la lección 4).",
          "**Superar el examen teórico y el práctico**, en ese orden."
        ] },
        { tipo: "p", texto: "El CRC no es la autoescuela ni la Jefatura: es un centro privado autorizado. Allí te hacen pruebas de visión, de audición y de reflejos, y te piden que rellenes un cuestionario de salud. Si te declaran apto, te dan el certificado." },
        { tipo: "clave", texto: "Para el B la **edad mínima es 18 años**. La conducción acompañada, que permitirá sacarse el B a los 17, viene de una directiva europea que todavía no se ha incorporado a la normativa española. Hasta entonces, la edad mínima sigue siendo 18." },
        { tipo: "truco", texto: "Si usas gafas o lentillas, llévalas al CRC y al examen. Si el CRC detecta que necesitas corrección, puede poner una restricción, como la obligación de llevar gafas, y aparecerá en tu permiso." },
        { tipo: "aviso", texto: "**No dejes el reconocimiento médico para el final.** Sin el certificado no puedes tramitar el permiso, y las citas en el CRC también pueden tardar." },
        { tipo: "p", texto: "**Autoescuela o examen libre.** Ninguna de las dos opciones es obligatoria: puedes sacarte el B con autoescuela o presentarte libre, sin clases. Los exámenes son los mismos en los dos casos." },
        { tipo: "tabla", cabecera: ["Con autoescuela", "Libre (sin autoescuela)"], filas: [
          ["Clases teóricas y prácticas con profesor", "Ninguna: te preparas tú"],
          ["Coche de examen: el de la autoescuela, con doble mando", "Vehículo propio que cumpla las condiciones que exige la Jefatura"],
          ["La autoescuela gestiona citas y trámites", "Gestionas tú las citas y los trámites"],
          ["Coste más alto por las clases", "Menos gasto, pero nadie corrige tus errores"]
        ] },
        { tipo: "truco", texto: "Si vas libre, pide a tu Jefatura la lista de condiciones que debe cumplir el coche antes de pedir cita. Así no pierdes una convocatoria por un detalle técnico o de documentación." },
        { tipo: "aviso", texto: "Ir libre no siempre sale más barato: si suspendes, vuelves a pagar la tasa y pierdes tiempo. Si tienes poca práctica, unas clases con un profesional valen mucho la pena." },
        { tipo: "quiz", pregunta: "¿Qué edad mínima hace falta para sacarte el permiso B en España hoy?", opciones: ["16 años", "18 años", "21 años"], correcta: 1, explicacion: "Para el B la edad mínima es 18 años. La conducción acompañada a los 17 todavía no está en vigor en España." }
      ]
    },
    {
      id: "examen-teorico",
      titulo: "El examen teórico y cómo estudiarlo",
      minutos: 9,
      contenido: [
        { tipo: "p", texto: "El examen teórico es un **test en ordenador** de **30 preguntas**. Cada pregunta tiene **3 respuestas** y solo **una es correcta**. Tienes **30 minutos** para contestarlas todas." },
        { tipo: "tabla", cabecera: ["Dato", "Examen teórico del B"], filas: [
          ["Preguntas", "30, tipo test"],
          ["Respuestas por pregunta", "3, con una sola correcta"],
          ["Tiempo", "30 minutos"],
          ["Fallos permitidos", "Máximo 3 (necesitas al menos 27 aciertos)"],
          ["Validez del aprobado", "2 años para completar el permiso"]
        ] },
        { tipo: "clave", texto: "**Puedes fallar 3 preguntas como máximo.** Con el cuarto fallo suspendes." },
        { tipo: "p", texto: "Las preguntas salen del **Reglamento General de Circulación** y de las **señales**. Algunas llevan imágenes de señales o de situaciones de tráfico. Desde octubre de 2025 se incluyen también preguntas sobre señales nuevas." },
        { tipo: "p", texto: "**Novedad anunciada:** la DGT ha avisado de que el examen incorporará **vídeos de percepción del riesgo**. Las fuentes no coinciden en cuándo llegarán, así que consulta dgt.es antes de examinarte." },
        { tipo: "senal", forma: "octogono", simbolo: "STOP", nombre: "R-2 Stop", descripcion: "Obliga a detenerte del todo y ceder el paso. Es la única señal con forma de octógono, así que no hay confusión posible." },
        { tipo: "truco", texto: "**Método de descarte.** En muchas preguntas una respuesta es claramente absurda: una velocidad que no existe, una maniobra imposible. Descártala y decídete entre las dos que quedan." },
        { tipo: "aviso", texto: "**No te atasques.** Si una pregunta te lleva mucho tiempo, elige la opción que te parezca más segura, marca y sigue. Con 30 minutos y 30 preguntas, cada una te cuesta de media un minuto." },
        { tipo: "p", texto: "**Cómo estudiar.** Es mucho mejor **15 o 20 minutos al día** que una tarde entera el domingo. No se trata solo de memorizar respuestas: entiende el porqué de cada norma, porque el examen plantea las mismas ideas con otras palabras." },
        { tipo: "lista", items: [
          "Haz tests tipo DGT todos los días, aunque sean pocas preguntas.",
          "Repasa las señales por **forma**: triángulo (peligro), triángulo invertido (ceda el paso), octógono (stop), círculo rojo (prohibición) y círculo azul (obligación).",
          "Después de cada fallo, lee la explicación y entiende la norma, no solo la respuesta correcta.",
          "Haz un simulacro: 30 preguntas en 30 minutos, sin apuntes.",
          "Estudia también por temas, como en esta guía, para que las normas encajen unas con otras."
        ] },
        { tipo: "quiz", pregunta: "¿Cuántos fallos puedes tener como máximo para aprobar el examen teórico del B?", opciones: ["Ninguno", "Tres", "Cinco"], correcta: 1, explicacion: "Puedes fallar hasta 3 preguntas de 30. Con el cuarto fallo suspendes." },
        { tipo: "quiz", pregunta: "¿Cuánto tiempo tienes para responder las 30 preguntas del examen teórico?", opciones: ["30 minutos", "15 minutos", "1 hora"], correcta: 0, explicacion: "Tienes 30 minutos en total, así que te quedan unos 60 segundos por pregunta." }
      ]
    },
    {
      id: "examen-practico",
      titulo: "El examen práctico",
      minutos: 8,
      contenido: [
        { tipo: "p", texto: "Si apruebas el teórico, llega el **práctico**: un examinador de la DGT se sube contigo a un vehículo con **doble mando** y observa cómo conduces por ciudad y por carretera." },
        { tipo: "tabla", cabecera: ["Parte", "Qué incluye", "Duración orientativa"], filas: [
          ["Preguntas sobre el vehículo", "Unas pocas preguntas sencillas antes de arrancar", "Pocos minutos"],
          ["Circulación", "Vías urbanas e interurbanas, con situaciones típicas de tráfico", "Como mínimo, unos 25 minutos de conducción"],
          ["Resultado", "Apto o no apto, con una breve explicación", "Al terminar"]
        ] },
        { tipo: "lista", items: [
          "Control del vehículo: arranque, cambios, embrague, frenos y volante.",
          "Respeto de señales, semáforos, prioridades y límites de velocidad.",
          "Observación: espejos, mirar alrededor y anticipar lo que van a hacer los demás.",
          "Posición en la calzada y cambios de carril con el intermitente.",
          "Conducción eficiente: suave, sin frenazos ni acelerones bruscos."
        ] },
        { tipo: "clave", texto: "Hay **faltas eliminatorias**: si cometes **una sola**, suspendes en el acto. Son las que ponen en peligro a ti o a los demás, y las infracciones graves o muy graves. Ejemplos típicos: saltarte un semáforo en rojo, no ceder el paso al incorporarte o circular en sentido prohibido." },
        { tipo: "aviso", texto: "Las faltas **deficientes** (dificultan mucho la circulación de otros) y las **leves** (pequeños errores) también cuentan. Acumular varias deficientes puede suspenderte, y cada calado se registra como falta. Conduce con suavidad y sin prisas." },
        { tipo: "truco", texto: "Antes de cada maniobra repite la secuencia **mirar, señalizar, maniobrar**: espejos, intermitente y, si hace falta, mirada por encima del hombro. Si lo haces siempre, el examinador lo nota." },
        { tipo: "p", texto: "**Antes de la cita:** llega con antelación, con tu DNI y la documentación que te indiquen. Si vas con la autoescuela, el coche va preparado; si vas libre, el coche debe estar en regla, con seguro e ITV en vigor." },
        { tipo: "quiz", pregunta: "Durante el examen práctico, ¿qué error hace que suspendas directamente?", opciones: ["No mirar el espejo de vez en cuando", "Calar el motor una vez", "Saltarte un semáforo en rojo o un stop"], correcta: 2, explicacion: "Saltarte un semáforo en rojo o un stop es una falta eliminatoria: suspendes. Calar el motor es una falta leve, y no mirar el espejo, deficiente o leve según el caso." },
        { tipo: "quiz", pregunta: "¿Cuánto dura, como mínimo, la conducción en la prueba práctica del B?", opciones: ["10 minutos", "25 minutos", "60 minutos"], correcta: 1, explicacion: "La DGT fija un mínimo de unos 25 minutos de conducción. Con la recepción y la explicación del resultado, la cita dura bastante más." }
      ]
    },
    {
      id: "examen-tasa",
      titulo: "Tasa, convocatorias y dónde examinarte",
      minutos: 6,
      contenido: [
        { tipo: "p", texto: "Para examinarte del B hay que pagar la **tasa de Interior**. Según el listado oficial de tasas, la tasa por obtener un permiso tras los exámenes es de **unos 94,05 €**. Las cuantías se actualizan, así que confírmala antes de pagar." },
        { tipo: "tabla", cabecera: ["Concepto", "Dato orientativo"], filas: [
          ["Tasa de examen del B", "Unos 94,05 €"],
          ["Convocatorias incluidas", "Dos"],
          ["Validez del aprobado teórico", "2 años"],
          ["Cita previa", "Hay que pedirla, online o en la Jefatura"]
        ] },
        { tipo: "clave", texto: "La tasa incluye **dos convocatorias**. Si suspendes las dos, tienes que volver a pagarla para tener otras dos." },
        { tipo: "aviso", texto: "Las fuentes no coinciden en cómo se reparten esas dos convocatorias: dos intentos en total o uno por examen. **Antes de pagar, confirma en tu Jefatura o en dgt.es** cómo funcionan." },
        { tipo: "p", texto: "En la **Comunitat Valenciana** hay tres Jefaturas Provinciales de Tráfico: **Valencia, Alicante y Castellón**. Los exámenes se realizan en las instalaciones de cada Jefatura y en los centros de examen que tenga asignados la provincia." },
        { tipo: "lista", items: [
          "Lo habitual es examinarte en la provincia donde vives. Confírmalo con tu Jefatura al pedir cita.",
          "Si estudias en autoescuela, la propia autoescuela suele gestionar la cita y el centro de examen.",
          "Los turnos son limitados: si tardas en pedir cita, la espera puede ser de semanas."
        ] },
        { tipo: "truco", texto: "Pide cita en cuanto tengas el certificado médico y la tasa pagada. Así no pierdes tiempo mientras esperas tu turno." },
        { tipo: "quiz", pregunta: "¿Cuál de estas NO es una Jefatura Provincial de Tráfico de la Comunitat Valenciana?", opciones: ["Castellón", "Alicante", "Murcia"], correcta: 2, explicacion: "Murcia es otra comunidad autónoma. En la Comunitat Valenciana hay Jefaturas en Valencia, Alicante y Castellón." }
      ]
    },
    {
      id: "examen-puntos",
      titulo: "El permiso por puntos",
      minutos: 8,
      contenido: [
        { tipo: "p", texto: "Todos los conductores tienen un **saldo de puntos**. Cada infracción **grave** o **muy grave** que se sanciona resta puntos. Si llegas a **cero**, pierdes la vigencia del permiso y no puedes conducir." },
        { tipo: "tabla", cabecera: ["Situación", "Puntos"], filas: [
          ["Conductor en general (punto de partida)", "12"],
          ["Conductor novel (menos de 2 años con el permiso) o que recupera el permiso", "8"],
          ["Novel que pasa 2 años sin infracciones que resten puntos", "12"],
          ["Tras otros 3 años sin infracciones (desde 12)", "14"],
          ["Tras otros 3 años más sin infracciones (desde 14)", "15, que es el máximo"]
        ] },
        { tipo: "clave", texto: "**El máximo es 15 puntos.** Si eres **novel**, empiezas con **8**: si pasas **2 años sin infracciones** que resten puntos, subes a **12**." },
        { tipo: "p", texto: "Solo las infracciones **graves** y **muy graves** restan puntos, en concreto **2, 3, 4 o 6** según la gravedad. Las **leves** no restan puntos." },
        { tipo: "aviso", texto: "En un mismo día no se pueden perder más de **8 puntos**. La excepción son algunas infracciones muy graves, como conducir bajo los efectos del alcohol o las drogas, negarse a las pruebas, la conducción temeraria o superar en más de un 50 % el límite de velocidad. En esos casos puedes perder todos los puntos de golpe." },
        { tipo: "p", texto: "**Recuperar puntos:** los ganas con el tiempo sin infracciones y también con los **cursos de sensibilización y reeducación vial**. Sus condiciones (duración, puntos y plazos) cambian: consúltalas en dgt.es." },
        { tipo: "aviso", texto: "**Si llegas a cero puntos**, la DGT inicia la pérdida de vigencia del permiso. Desde que te notifican la resolución no puedes conducir ningún vehículo, y conducir después es un delito. Para recuperarlo hay que seguir el procedimiento que fija la DGT: no basta con esperar." },
        { tipo: "quiz", pregunta: "¿Cuántos puntos tiene un conductor novel cuando obtiene el permiso?", opciones: ["12", "8", "15"], correcta: 1, explicacion: "Los noveles empiezan con 8 puntos. Tras 2 años sin infracciones que resten puntos, pasan a 12." },
        { tipo: "quiz", pregunta: "¿Cuál es el máximo de puntos que puede llegar a tener un conductor?", opciones: ["12", "14", "15"], correcta: 2, explicacion: "El máximo es 15 puntos. Se llega a él con años de conducción sin infracciones que resten puntos." }
      ]
    },
    {
      id: "examen-novel",
      titulo: "Conductor novel: la L y el alcohol",
      minutos: 6,
      contenido: [
        { tipo: "p", texto: "Eres **conductor novel** durante los **2 primeros años** desde que obtienes el permiso. Durante ese tiempo se aplican normas más estrictas, sobre todo en materia de alcohol y de puntos." },
        { tipo: "tabla", cabecera: ["Concepto", "Conductor general", "Conductor novel"], filas: [
          ["Alcohol en aire espirado", "0,25 mg/l", "0,15 mg/l"],
          ["Alcohol en sangre (aprox.)", "0,50 g/l", "0,30 g/l"],
          ["Puntos al empezar", "12", "8"],
          ["Distintivo L", "No", "Sí, durante el primer año"]
        ] },
        { tipo: "clave", texto: "El novel tiene un límite de **0,15 mg/l** en aire. Un conductor general que dé **0,20 mg/l** no comete infracción, pero si eres novel, **sí**." },
        { tipo: "p", texto: "La **L** es el distintivo de conductor novel. Se coloca en la parte trasera del vehículo y es obligatoria durante **el primer año** desde que obtienes el permiso. No llevarla es sancionable." },
        { tipo: "truco", texto: "Si vas a conducir, la forma más segura de cumplir el límite de un novel es **no beber nada**. Con tan poco margen, es muy fácil pasarse sin darte cuenta." },
        { tipo: "aviso", texto: "Se está debatiendo bajar los límites de alcohol, para todos los conductores y para los noveles. Mientras no se publique una norma en el BOE, siguen vigentes los límites de la tabla." },
        { tipo: "quiz", pregunta: "¿Cuál es el límite de alcohol en aire para un conductor novel?", opciones: ["0,25 mg/l", "0,15 mg/l", "0,50 mg/l"], correcta: 1, explicacion: "Los noveles, con menos de 2 años de permiso, y los profesionales tienen 0,15 mg/l. El conductor general tiene 0,25 mg/l." },
        { tipo: "quiz", pregunta: "¿Durante cuánto tiempo es obligatorio llevar la L?", opciones: ["6 meses", "1 año", "2 años"], correcta: 1, explicacion: "La L es obligatoria el primer año. Tu condición de novel dura 2 años (alcohol y puntos), pero la L solo el primero." }
      ]
    },
    {
      id: "examen-que-conduces",
      titulo: "Qué puedes conducir con el B",
      minutos: 7,
      contenido: [
        { tipo: "p", texto: "Con el permiso B puedes conducir **turismos** y vehículos de hasta **3.500 kg** de masa máxima autorizada (MMA). Un turismo puede tener **hasta 8 plazas además del conductor**, es decir, 9 en total." },
        { tipo: "tabla", cabecera: ["Vehículo o caso", "¿Con el B?"], filas: [
          ["Turismo de hasta 3.500 kg y 9 plazas, contando al conductor", "Sí"],
          ["Furgoneta o furgón de hasta 3.500 kg", "Sí"],
          ["Remolque de hasta 750 kg de MMA", "Sí"],
          ["Remolque de más de 750 kg", "Solo si el conjunto no supera 3.500 kg y el remolque no pesa más que el coche vacío"],
          ["Ciclomotor", "Sí: el B incluye el AM"],
          ["Moto de hasta 125 cc y 11 kW (A1)", "Sí, si llevas al menos 3 años con el B en España"],
          ["Moto de más de 125 cc", "No: necesitas A2 o A"],
          ["Camión de más de 3.500 kg o autobús", "No: necesitas otra categoría (C1, C o D)"]
        ] },
        { tipo: "clave", texto: "**El límite es 3.500 kg de MMA y 9 plazas.** Si el vehículo o el conjunto supera esa masa, ya no es un B. Y al contar las plazas, siempre cuenta el conductor." },
        { tipo: "lista", items: [
          "**Ciclomotores (AM):** el B te habilita para conducirlos.",
          "**Motos A1:** con 3 años de antigüedad en el B puedes conducir motos de hasta 125 cc y 11 kW, sin tener que examinarte de nuevo.",
          "**Remolques ligeros:** hasta 750 kg de MMA sin problema.",
          "**Vehículos de más de 3.500 kg:** necesitas otra categoría de permiso."
        ] },
        { tipo: "truco", texto: "Para saber si tu vehículo entra en el B, mira la **ficha técnica** (el permiso de circulación): ahí aparecen la **MMA** (masa máxima autorizada) y el número de **plazas**." },
        { tipo: "aviso", texto: "Una furgoneta puede parecer «de coche», pero con carga puede superar los 3.500 kg. No supongas: comprueba la MMA en la ficha técnica antes de conducirla." },
        { tipo: "quiz", pregunta: "Llevas 2 años con el permiso B. ¿Puedes conducir ya una moto de 125 cc?", opciones: ["Sí, ya", "No, hasta cumplir 3 años con el B", "Sí, si la conduce alguien con más experiencia"], correcta: 1, explicacion: "Tras 3 años con el B en España puedes conducir motos de hasta 125 cc y 11 kW (A1). Antes, no." },
        { tipo: "quiz", pregunta: "¿Qué masa máxima de vehículo cubre el permiso B?", opciones: ["Hasta 3.500 kg", "Hasta 7.500 kg", "Hasta 2.000 kg"], correcta: 0, explicacion: "El B cubre vehículos de hasta 3.500 kg de MMA. Por encima necesitas la categoría C1 o C." }
      ]
    }
  ]
});
