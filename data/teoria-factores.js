window.TEMARIO = window.TEMARIO || [];
window.TEMARIO.push({
  id: "factores",
  orden: 8,
  titulo: "Alcohol, drogas, fatiga y distracciones",
  icono: "🍷",
  color: "#7c3aed",
  resumen: "Qué te quita reflejos y atención al volante, qué dicen la ley y la DGT, y cómo evitar que te pase a ti.",
  lecciones: [
    {
      id: "factores-alcohol-limites",
      titulo: "Alcohol: cuánto es demasiado",
      minutos: 6,
      contenido: [
        { tipo: "p", texto: "El alcohol es uno de los factores que más accidentes graves provoca, y lo peor es que **no notas del todo cuánto te afecta**. Con pocas copas ya cambian tus reflejos y tu forma de juzgar lo que pasa en la carretera." },
        { tipo: "tabla", cabecera: ["Conductor", "En aire espirado (mg/l)", "En sangre (g/l)"], filas: [
            ["General", "0,25", "0,5"],
            ["Noveles (menos de 2 años de permiso) y profesionales", "0,15", "0,3"],
            ["Delito (cualquier conductor)", "más de 0,60", "más de 1,2"]
        ] },
        { tipo: "clave", texto: "**Tres números que tienes que memorizar: 0,25 (general), 0,15 (noveles y profesionales) y 0,60 (delito).** Superar 0,25 mg/l en aire ya es infracción, aunque te sientas bien." },
        { tipo: "lista", items: [
            "**Novel:** cualquier conductor que lleve menos de dos años con el permiso",
            "**Profesional:** taxistas, conductores de camiones y de autobuses, y de ambulancias o transporte escolar"
        ] },
        { tipo: "p", texto: "**Cómo afecta el alcohol:** reduce tu campo de visión (ves menos a los lados), alarga el tiempo de reacción y te vuelve más confiado y menos atento. Además, te cuesta calcular la velocidad y la distancia a los demás vehículos." },
        { tipo: "aviso", texto: "**Trampa del examen:** «solo se sanciona si vas borracho» es falso. Se sanciona la **tasa**, aunque no parezcas bebido y aunque no hayas causado ningún accidente." },
        { tipo: "truco", texto: "**Los tres números:** 25 para el general, 15 para noveles y profesionales, 60 para el delito. Y si dudas, la solución más segura es no beber nada antes de conducir." },
        { tipo: "quiz", pregunta: "¿Cuál es el límite general de alcohol en aire espirado?", opciones: ["0,15 mg/l", "0,25 mg/l", "0,60 mg/l"], correcta: 1, explicacion: "Para la mayoría de conductores es 0,25 mg/l en aire (0,5 g/l en sangre). El 0,15 se aplica a noveles y profesionales, y el 0,60 es el umbral del delito." },
        { tipo: "quiz", pregunta: "Llevas dos años y medio con el carné y el etilómetro marca 0,20 mg/l. ¿Estás dentro de la ley?", opciones: ["Sí, porque no eres novel y el límite general es 0,25", "No, porque cualquier cantidad de alcohol es ilegal", "No, porque superas 0,15"], correcta: 0, explicacion: "Como llevas más de dos años con el permiso, no eres novel y te aplica el límite general de 0,25 mg/l. La trampa de esta pregunta es el 0,15." }
      ]
    },
    {
      id: "factores-pruebas",
      titulo: "Pruebas de alcohol y drogas: qué pasa si te paran",
      minutos: 6,
      contenido: [
        { tipo: "p", texto: "Los agentes pueden pedirte la prueba de alcohol o de drogas en un **control preventivo**, aunque no hayas hecho nada raro al volante. Cuando te la pidan, es obligatorio hacerla." },
        { tipo: "lista", items: [
            "Lo normal es soplar en un etilómetro, un aparato que mide el alcohol en el aire que espiras",
            "Si el resultado es positivo, puede pedirse una segunda medición, que también es obligatoria",
            "Si no estás de acuerdo con el resultado, puedes pedir un análisis de sangre en un centro sanitario"
        ] },
        { tipo: "clave", texto: "**Negarte a hacer la prueba es delito, aunque no hayas bebido.** Está castigado con prisión de 6 meses a 1 año y con la privación del derecho a conducir de 1 a 4 años." },
        { tipo: "aviso", texto: "**Trampa:** «si no he bebido, no tengo por qué soplar». Falso: cuando un agente te lo pide, estás obligado a hacer la prueba, hayas bebido o no. Negarte es delito." },
        { tipo: "p", texto: "**Drogas:** el cribado en carretera se hace con un **test de saliva**, una muestra que se toma con un bastoncillo en la boca. Detecta, entre otras, cannabis (THC), cocaína, anfetaminas, metanfetamina y opiáceos. Si sale positivo, se confirma con un análisis de laboratorio." },
        { tipo: "p", texto: "Las pruebas de drogas también pueden hacerse en controles preventivos, no solo después de un accidente. Y negarte al test de drogas también puede constituir delito." },
        { tipo: "p", texto: "**Dudas sobre el resultado:** la prueba del etilómetro es la prueba oficial en carretera. Si no estás de acuerdo, puedes pedir un contraanálisis de sangre, pero **no sirve para evitar la prueba inicial**." },
        { tipo: "quiz", pregunta: "Un agente te pide la prueba de alcohol y tú no has bebido nada. ¿Puedes negarte?", opciones: ["Sí, si no has bebido no estás obligado", "No, negarte es delito aunque no hayas bebido", "Sí, si lo dices por escrito"], correcta: 1, explicacion: "La obligación no depende de si has bebido o no. Negarse a una prueba legal de alcohol es delito, castigado con prisión de 6 meses a 1 año y retirada del permiso de 1 a 4 años." },
        { tipo: "quiz", pregunta: "¿Qué se usa habitualmente en carretera para el cribado de drogas?", opciones: ["Un análisis de pelo", "Una prueba de orina en comisaría", "Un test de saliva"], correcta: 2, explicacion: "El test de saliva es el cribado habitual en carretera. Si sale positivo, se confirma en laboratorio." }
      ]
    },
    {
      id: "factores-mitos-alcohol",
      titulo: "Mitos sobre el alcohol",
      minutos: 5,
      contenido: [
        { tipo: "p", texto: "Hay muchas creencias populares sobre cómo «quitarse» el alcohol de encima. La mayoría son falsas, y algunas son peligrosas porque dan una falsa sensación de seguridad." },
        { tipo: "tabla", cabecera: ["Lo que se dice", "Lo que pasa de verdad"], filas: [
            ["«Un café me despeja y ya estoy bien»", "El café te despierta un rato, pero no baja la cantidad de alcohol en tu sangre"],
            ["«Me doy una ducha fría y se me pasa»", "Te refresca, pero el alcohol sigue en tu organismo"],
            ["«Si como mucho, no me afecta»", "Comer frena la absorción, pero no evita que el alcohol llegue a la sangre"],
            ["«Me encuentro bien, así que puedo conducir»", "Esa sensación de estar bien es precisamente lo que te engaña"],
            ["«La cerveza sin alcohol no da positivo»", "Las bebidas «0,0» tienen algo de alcohol, y si tomas varias puedes dar positivo"],
            ["«Con vino no pasa nada»", "Da igual la bebida: lo que cuenta es el alcohol que llega a tu sangre"]
        ] },
        { tipo: "clave", texto: "**Lo único que baja el alcohol de tu sangre es el tiempo.** Tu organismo lo elimina a su ritmo, y ningún truco lo acelera." },
        { tipo: "p", texto: "**¿Y la resaca?** Al día siguiente puedes seguir con alcohol en la sangre. No te fíes de cómo te sientes: sin resaca no quiere decir sin alcohol." },
        { tipo: "aviso", texto: "**Alcohol con medicamentos o drogas:** los efectos se suman. Una pequeña cantidad de alcohol con un medicamento que da sueño puede ser mucho más peligrosa de lo que parece." },
        { tipo: "quiz", pregunta: "¿Qué hace que baje el alcohol de tu sangre?", opciones: ["Un café bien cargado", "Una ducha fría", "El paso del tiempo"], correcta: 2, explicacion: "Solo el tiempo elimina el alcohol de la sangre. El café y la ducha te despejan un rato, pero no reducen la cantidad de alcohol." },
        { tipo: "quiz", pregunta: "Te tomas una cerveza sin alcohol (0,0) y piensas que no pasa nada. ¿Es verdad?", opciones: ["Sí, no tiene nada de alcohol", "No del todo: puede tener algo de alcohol y, si tomas varias, dar positivo", "Sí, si la tomas con comida"], correcta: 1, explicacion: "Las bebidas «sin alcohol» pueden tener una pequeña cantidad. Si tomas varias, el etilómetro puede marcar positivo." },
        { tipo: "truco", texto: "**El conductor designado:** antes de salir, elige quién conduce y que esa persona no beba. Es la forma más sencilla de no tener que hacer cuentas." }
      ]
    },
    {
      id: "factores-drogas-medicamentos",
      titulo: "Drogas y medicamentos",
      minutos: 7,
      contenido: [
        { tipo: "p", texto: "Las drogas y algunos medicamentos afectan a la conducción de forma parecida al alcohol: alteran la atención, los reflejos y la percepción. Y muchas veces **ni siquiera notas** que te están afectando." },
        { tipo: "clave", texto: "**Con las drogas, tolerancia cero.** Conducir con drogas en el organismo está prohibido aunque no notes ningún efecto. No existe una cantidad «segura»." },
        { tipo: "p", texto: "Dar positivo en drogas al volante es una infracción muy grave: **1.000 € y 6 puntos**. Y si además conduces bajo los efectos de la sustancia, por ejemplo con síntomas claros o de forma peligrosa, puede tratarse de un delito." },
        { tipo: "p", texto: "El test de saliva detecta, entre otras, estas sustancias:" },
        { tipo: "lista", items: [
            "Cannabis (THC)",
            "Cocaína",
            "Anfetaminas y metanfetamina",
            "Opiáceos, como la heroína o la morfina"
        ] },
        { tipo: "p", texto: "**Medicamentos:** muchos tratamientos habituales, como los de la alergia, el dolor, la ansiedad o el sueño, pueden producir somnolencia, mareo o reflejos más lentos. Tomarlos con receta no está prohibido en sí, siempre que no te afecten al conducir." },
        { tipo: "p", texto: "**El pictograma del coche:** algunas cajas de medicamentos llevan un triángulo rojo con un coche dentro. Avisa de que el medicamento **puede afectar a la conducción**. No significa que esté prohibido conducir, pero sí que debes leer el prospecto (sección 2, «Conducción y uso de máquinas») y consultar a tu médico o farmacéutico." },
        { tipo: "tabla", cabecera: ["Lo que ves", "Lo que significa"], filas: [
            ["Triángulo rojo con un coche dentro", "Puede afectar a la conducción. Lee el prospecto antes de conducir"],
            ["Envase sin pictograma", "No garantiza que el medicamento sea inocuo al volante. Lee igualmente el prospecto"],
            ["Sueño, mareo o reflejos lentos tras tomarlo", "No conduzcas hasta que se pase el efecto y consulta a tu médico"]
        ] },
        { tipo: "aviso", texto: "**Trampa:** «mi medicamento no lleva pictograma, así que no me afecta». El pictograma no aparece en todos los envases. Lo que manda es el prospecto." },
        { tipo: "p", texto: "Algunos medicamentos pueden hacer que el test de drogas dé positivo. Si tomas uno de ellos, lleva el envase o la receta y avisa al agente que te haga el control." },
        { tipo: "quiz", pregunta: "¿Es cierto que el consumo de drogas solo se sanciona si notas sus efectos?", opciones: ["Verdadero, si no notas nada no pasa nada", "Verdadero, solo si el agente ve que vas raro", "Falso: basta con dar positivo aunque no notes efectos"], correcta: 2, explicacion: "Con las drogas, la mera presencia en el organismo ya es infracción. Por eso se habla de tolerancia cero." },
        { tipo: "quiz", pregunta: "En la caja de tu medicamento ves un triángulo rojo con un coche. ¿Qué debes hacer?", opciones: ["Nada, es solo decorativo", "Leer el prospecto y preguntar si puedes conducir mientras lo tomas", "Dejar de conducir para siempre"], correcta: 1, explicacion: "El pictograma avisa de que puede afectar a la conducción. Lo correcto es leer el prospecto y consultar a tu médico o farmacéutico." }
      ]
    },
    {
      id: "factores-fatiga",
      titulo: "Fatiga y sueño",
      minutos: 6,
      contenido: [
        { tipo: "p", texto: "El cansancio es tan peligroso como el alcohol: te hace reaccionar tarde, pierdes concentración y, si te duermes un instante, el coche sigue avanzando sin nadie al volante." },
        { tipo: "clave", texto: "**Regla de la DGT: para cada 2 horas o cada 200 km.** Para descansar de verdad, haz una pausa de unos 15 minutos. Es una recomendación para particulares; para profesionales (camiones, autobuses), las pausas son obligatorias." },
        { tipo: "lista", items: [
            "Bostezas sin parar y te pesan los párpados",
            "Te cuesta mantener el carril o se te cierran los ojos",
            "No recuerdas los últimos kilómetros",
            "Te cuesta concentrarte y tienes pensamientos sueltos"
        ] },
        { tipo: "p", texto: "**Microsueño:** es una desconexión breve del cerebro, de una fracción de segundo a unos segundos. Puede pasar **aunque tengas los ojos abiertos**, y tú no te das cuenta o te das cuenta cuando ya es tarde." },
        { tipo: "p", texto: "**Un ejemplo real:** a 120 km/h el coche recorre unos 33 metros cada segundo. Si te duermes durante 3 segundos, avanzas unos 100 metros sin control. En ese tramo puede pasar de todo." },
        { tipo: "aviso", texto: "**Horas de más riesgo:** la madrugada, sobre todo entre las 2 y las 6, y la primera hora de la tarde, después de comer. Si conduces en esas horas, redobla la atención o descansa antes de salir." },
        { tipo: "p", texto: "**¿Y si tienes sueño?** Para en cuanto puedas, en un área de servicio. Un café y una siesta corta de unos 15 a 20 minutos ayudan. El café solo te despierta un rato: no sustituye al descanso." },
        { tipo: "aviso", texto: "**Trampa:** bajar la ventanilla, subir la música o cantar no es descanso. Son ayudas de un minuto que no quitan el sueño." },
        { tipo: "quiz", pregunta: "¿Cada cuánto tiempo recomienda la DGT parar en un viaje largo?", opciones: ["Cada 4 horas o 400 km", "Cada 30 minutos", "Cada 2 horas o 200 km"], correcta: 2, explicacion: "La recomendación es parar cada 2 horas o cada 200 km. Es un consejo para particulares; los profesionales tienen pausas obligatorias." },
        { tipo: "quiz", pregunta: "Vas a 120 km/h y te duermes durante 3 segundos. ¿Cuántos metros recorres sin control, aproximadamente?", opciones: ["10 metros", "1.000 metros", "100 metros"], correcta: 2, explicacion: "A 120 km/h recorres unos 33 metros por segundo. En 3 segundos, unos 100 metros a ciegas." }
      ]
    },
    {
      id: "factores-distracciones",
      titulo: "Distracciones y móvil",
      minutos: 7,
      contenido: [
        { tipo: "p", texto: "Una distracción puede durar solo unos segundos, pero en ese tiempo el coche avanza decenas de metros. Cualquier cosa que aparte tu atención de la carretera es un riesgo." },
        { tipo: "clave", texto: "**Móvil: 200 € y 6 puntos.** Sujetarlo con la mano mientras conduces es infracción, aunque no lo estés usando en ese momento." },
        { tipo: "p", texto: "Tampoco puedes leer o escribir mensajes, tocar la pantalla ni manejar el GPS o las aplicaciones mientras conduces. Con un sistema de manos libres puedes hablar, siempre que no tengas que tocar el aparato." },
        { tipo: "tabla", cabecera: ["Sí (con cuidado)", "No (infracción)"], filas: [
            ["Hablar con el manos libres del coche, sin tocar el móvil", "Sujetar el móvil con la mano, aunque sea un segundo"],
            ["Soporte fijo bien colocado, sin manipularlo", "Leer, escribir o tocar la pantalla"],
            ["Dejar el móvil guardado y fuera de tu alcance", "Usarlo en un semáforo o en un atasco, con el coche en la vía"]
        ] },
        { tipo: "aviso", texto: "**Trampa:** «estoy parado en el semáforo, no pasa nada». Falso. Mientras el coche esté en la vía, sigues conduciendo, aunque esté parado en un semáforo o en una retención. La norma solo deja de aplicarse cuando el vehículo está correctamente estacionado." },
        { tipo: "p", texto: "**Auriculares:** ir con auriculares en los dos oídos está prohibido, porque te impide oír lo que pasa a tu alrededor." },
        { tipo: "p", texto: "**Otras distracciones:** comer o beber, fumar, ajustar la radio o el navegador, atender a niños o mascotas en el asiento de atrás y mantener conversaciones intensas con los acompañantes. Todas bajan tu atención." },
        { tipo: "truco", texto: "**Antes de arrancar, déjalo todo listo.** GPS, música y móvil. Si necesitas algo durante el viaje, para en un sitio seguro." },
        { tipo: "p", texto: "**Estado emocional:** el enfado, la prisa, la tristeza, la euforia o el estrés alteran tu atención. Conduces peor: más agresivo, más impaciente y menos atento a lo que pasa." },
        { tipo: "lista", items: [
            "Vas con prisa y te cuesta controlar el enfado",
            "Estás muy triste, nervioso o alterado",
            "Estás eufórico y te crees invencible",
            "Te cuesta concentrarte porque tienes la cabeza en otra cosa"
        ] },
        { tipo: "quiz", pregunta: "Estás parado en un semáforo en rojo con el móvil en la mano. ¿Es infracción?", opciones: ["No, porque el coche está parado", "Solo si estás hablando", "Sí, sujetar el móvil mientras el coche está en la vía es infracción"], correcta: 2, explicacion: "El coche parado en un semáforo sigue en la vía. Sujetar el móvil con la mano ya es infracción." },
        { tipo: "quiz", pregunta: "¿Cuál es la sanción por sujetar el móvil con la mano mientras conduces?", opciones: ["100 € y 2 puntos", "200 € y 6 puntos", "1.000 € y 6 puntos"], correcta: 1, explicacion: "La sanción vigente es de 200 € y la retirada de 6 puntos. Los 1.000 € y 6 puntos corresponden a infracciones muy graves, como dar positivo en drogas." }
      ]
    },
    {
      id: "factores-vision-sanciones",
      titulo: "Visión, reacción y tabla de sanciones",
      minutos: 8,
      contenido: [
        { tipo: "p", texto: "Para conducir necesitas ver, oír y reaccionar a tiempo. El alcohol, el cansancio, las distracciones y algunas enfermedades afectan a esas tres capacidades." },
        { tipo: "p", texto: "**Visión:** necesitas ver bien de lejos y de cerca (agudeza visual) y tener un campo visual suficiente para ver lo que pasa a los lados. Si necesitas gafas o lentillas, llévalas siempre. Y la visión nocturna empeora con la edad, el cansancio y el alcohol." },
        { tipo: "p", texto: "**Audición:** el oído te avisa de sirenas, claxon, vehículos que se acercan o ruidos raros en el coche. Un problema de audición reduce tu capacidad de reaccionar." },
        { tipo: "aviso", texto: "**Deslumbrado:** tras un deslumbramiento tardas unos segundos en recuperar la visión. Si pasa, no mires a los faros: mira al borde derecho de la calzada y reduce la velocidad." },
        { tipo: "p", texto: "**Tiempo de reacción:** es lo que tardas desde que ves un peligro hasta que pisas el freno. La cifra habitual es de alrededor de **un segundo**. Con alcohol, cansancio o distracciones puede llegar a duplicarse." },
        { tipo: "tabla", cabecera: ["Velocidad", "Metros recorridos antes de frenar (con 1 segundo de reacción)"], filas: [
            ["50 km/h", "unos 14 m"],
            ["90 km/h", "25 m"],
            ["120 km/h", "33 m"]
        ] },
        { tipo: "clave", texto: "**La distancia de reacción crece con la velocidad.** A 120 km/h, con un segundo de reacción, recorres unos 33 metros antes de empezar a frenar. Si reaccionas en dos segundos, son unos 67 metros." },
        { tipo: "p", texto: "**Tabla de sanciones y puntos** (cifras vigentes; si tienes dudas, consulta la web de la DGT):" },
        { tipo: "tabla", cabecera: ["Infracción", "Multa", "Puntos", "Tipo"], filas: [
            ["Alcohol: más de 0,25 mg/l en aire (0,5 g/l en sangre)", "500 €", "4", "Grave"],
            ["Alcohol: más de 0,50 mg/l en aire (1 g/l en sangre)", "1.000 €", "6", "Muy grave"],
            ["Noveles y profesionales: más de 0,15 mg/l en aire", "500 €", "4", "Grave"],
            ["Noveles y profesionales: más de 0,30 mg/l en aire", "1.000 €", "6", "Muy grave"],
            ["Positivo en drogas", "1.000 €", "6", "Muy grave"],
            ["Sujetar el móvil con la mano mientras conduces", "200 €", "6", "Grave"],
            ["Alcohol: más de 0,60 mg/l en aire (1,2 g/l en sangre)", "Delito", "Retirada del permiso de 1 a 4 años", "Penal"],
            ["Negarse a la prueba de alcohol o de drogas", "Delito (prisión de 6 meses a 1 año)", "Retirada del permiso de 1 a 4 años", "Penal"]
        ] },
        { tipo: "aviso", texto: "**Los puntos se restan de tu carné.** Si te quedas sin puntos, pierdes el permiso. Puedes recuperarlos con el tiempo, sin nuevas infracciones, o con cursos de sensibilización." },
        { tipo: "p", texto: "**Pagar pronto:** si pagas la multa dentro de los 20 días siguientes a la notificación, la cuantía se reduce a la mitad, pero renuncias a presentar alegaciones." },
        { tipo: "quiz", pregunta: "Un conductor general da 0,30 mg/l en aire. ¿Qué infracción comete?", opciones: ["Ninguna, porque está por debajo de 0,50", "Un delito", "Infracción grave: 500 € y 4 puntos"], correcta: 2, explicacion: "Por encima de 0,25 mg/l en aire, la infracción es grave: 500 € y 4 puntos. Pasar de 0,50 sube la sanción a muy grave, y por encima de 0,60 ya es delito." },
        { tipo: "quiz", pregunta: "¿Qué ocurre si te niegas a hacer la prueba de alcoholemia?", opciones: ["Solo una multa leve", "Es un delito: prisión de 6 meses a 1 año y pérdida del permiso de 1 a 4 años", "Nada, es un derecho del conductor"], correcta: 1, explicacion: "Negarse a la prueba legal de alcohol es delito, castigado con prisión de 6 meses a 1 año y retirada del permiso de 1 a 4 años." }
      ]
    }
  ]
});
