window.TEMARIO = window.TEMARIO || [];
window.TEMARIO.push({
  id: "accidentes",
  orden: 10,
  titulo: "Accidentes y primeros auxilios",
  icono: "🚑",
  color: "#e76f51",
  resumen: "Qué hacer tras un accidente (PAS), cómo ayudar a un herido, cómo señalizar, cómo conducir con mal tiempo y cómo ahorrar energía.",
  lecciones: [
    {
      id: "accidentes-pas",
      titulo: "Qué hacer tras un accidente: conducta PAS",
      minutos: 8,
      contenido: [
        { tipo: "p", texto: "Si presencias o sufres un accidente de tráfico, lo que hagas en los primeros minutos puede salvar vidas. La conducta a seguir se resume en tres pasos, las letras **PAS**: **P**roteger, **A**visar y **S**ocorrer." },
        { tipo: "lista", items: [
            "**P · Proteger**: evita que se produzcan más accidentes. Pon las luces de emergencia, señaliza el lugar y, si no hay heridos y puedes hacerlo con seguridad, aparta los vehículos de la calzada.",
            "**A · Avisar**: llama al **112**. Di dónde estás (carretera, punto kilométrico y sentido de la marcha), cuántos heridos hay y en qué estado están.",
            "**S · Socorrer**: presta los primeros auxilios que sepas, sin ponerte tú en peligro."
        ] },
        { tipo: "truco", texto: "**PAS** se ordena así: primero **te pones a salvo**, luego **llamas** y, por último, **ayudas**. Si ayudas sin protegerte, puedes convertirte en otra víctima." },
        { tipo: "clave", texto: "Aunque veas más gente alrededor, **no des por hecho que alguien ha llamado al 112**. Confirma tú la llamada: es la primera ayuda que puedes dar." },
        { tipo: "aviso", texto: "Trampa: **señalizar no es lo mismo que avisar**. Colocar el chaleco y la baliza no sustituye a la llamada al 112 cuando hay heridos." },
        { tipo: "lista", items: [
            "**No quites el casco** a un motorista accidentado. Solo se retira si no respira y tienes formación para hacerlo, porque podrías dañarle el cuello.",
            "**No muevas al herido**, salvo que haya un peligro inminente (fuego, humo, riesgo de explosión o de caer al agua).",
            "**No le des de beber ni de comer**: puede necesitar una operación o tener lesiones internas.",
            "**No le dejes solo** ni te alejes mientras llega la ayuda. Háblale y mantenlo tranquilo."
        ] },
        { tipo: "quiz", pregunta: "Ves a un motorista caído en la calzada con el casco puesto. ¿Qué haces?", opciones: ["Aviso al 112 y no le quito el casco, salvo que no respire", "Le quito el casco para que respire mejor", "Le doy agua para que se recupere"], correcta: 0, explicacion: "Quitar el casco puede agravar una lesión de cuello. Lo primero es avisar al 112; el casco solo se retira si no respira y hay personal formado." },
        { tipo: "quiz", pregunta: "Un conductor herido, consciente, te pide agua. ¿Qué haces?", opciones: ["Le doy agua para que se calme", "Le doy un refresco azucarado", "No le doy nada de beber ni de comer"], correcta: 2, explicacion: "Puede necesitar una intervención quirúrgica o tener lesiones internas. Beber o comer puede complicar la anestesia y provocar atragantamientos." }
      ]
    },
    {
      id: "accidentes-primeros-auxilios",
      titulo: "Primeros auxilios básicos",
      minutos: 9,
      contenido: [
        { tipo: "p", texto: "No hace falta ser sanitario para ayudar, pero sí conocer lo básico. Lo más importante es **mantener la calma**, **valorar** el estado del herido y **no empeorarlo**." },
        { tipo: "lista", items: [
            "**¿Responde?** Háblale y dale un toque suave en el hombro.",
            "**¿Respira?** Mira si se le mueve el pecho, escucha y nota el aire durante unos segundos.",
            "**¿Sangra?** Busca hemorragias visibles, que son las más urgentes de atender."
        ] },
        { tipo: "p", texto: "Si **respira pero no responde**, colócalo en la **posición lateral de seguridad** (PLS) para que no se atragante con su saliva o con vómitos y para mantener libres las vías respiratorias." },
        { tipo: "lista", items: [
            "Arrodíllate a su lado y coloca el brazo más cercano en ángulo recto con el cuerpo, con la palma hacia arriba.",
            "Lleva el otro brazo cruzado sobre el pecho, con el dorso de la mano apoyado en la mejilla.",
            "Dobla la pierna más alejada por la rodilla y tira de ella para girarlo hacia ti.",
            "Inclina ligeramente su cabeza hacia atrás y revisa su respiración de forma continua."
        ] },
        { tipo: "p", texto: "Si **no respira** (o solo hace boqueadas anormales), llama al 112 de inmediato. Si sabes hacerlo y el 112 te lo indica, empieza la **reanimación cardiopulmonar (RCP)**: compresiones fuertes y rápidas en el centro del pecho, en proporción de 30 compresiones por cada 2 insuflaciones." },
        { tipo: "lista", items: [
            "**Presión directa** sobre la herida con un paño limpio o con la mano (con guantes si los tienes).",
            "Si la sangre atraviesa el paño, **añade más paños encima** sin retirar los primeros.",
            "Si es posible, eleva la extremidad sangrante por encima del nivel del corazón.",
            "El **torniquete** se reserva para hemorragias graves de un brazo o una pierna que no se controlan con presión, y solo si sabes ponerlo."
        ] },
        { tipo: "aviso", texto: "Trampa frecuente: **no retires un objeto clavado** (un trozo de metal, un cristal...). Puede estar tapando la hemorragia; hay que estabilizarlo y dejarlo en su sitio hasta que llegue la ayuda." },
        { tipo: "lista", items: [
            "Enfría la zona con **agua fresca** (no helada) durante unos **10 a 20 minutos**.",
            "Retira anillos, pulseras y ropa ajustada antes de que se inflame la zona, salvo la ropa pegada a la piel.",
            "**No revientes las ampollas**, ni apliques hielo, pomadas, cremas o aceites."
        ] },
        { tipo: "quiz", pregunta: "Un accidentado sangra abundantemente de un brazo. ¿Qué haces primero?", opciones: ["Presionar directamente sobre la herida con un paño limpio", "Quitarle la camiseta para ver mejor la herida", "Sacarle el objeto que tiene clavado en el brazo"], correcta: 0, explicacion: "La presión directa es el primer gesto para frenar una hemorragia. No retires los objetos clavados, porque pueden estar tapando el sangrado." },
        { tipo: "quiz", pregunta: "¿Cómo se trata una quemadura reciente en la mano?", opciones: ["Con hielo directamente sobre la piel", "Enfriándola con agua fresca durante varios minutos", "Con una pomada grasa y un vendaje muy apretado"], correcta: 1, explicacion: "El agua fresca alivia la quemadura y limita el daño. El hielo directo, las pomadas y los vendajes apretados pueden empeorar la lesión." }
      ]
    },
    {
      id: "accidentes-senalizar-parte",
      titulo: "Señalizar el accidente y el parte amistoso",
      minutos: 9,
      contenido: [
        { tipo: "p", texto: "Tras un accidente, otros conductores pueden llegar a gran velocidad y chocar contra los vehículos parados. Por eso **señalizar** es una prioridad, siempre después de ponerte a salvo." },
        { tipo: "lista", items: [
            "**Baliza V-16**: dispositivo luminoso que se coloca en la parte más visible del vehículo, normalmente el techo, para avisar a los demás. Desde el **1 de enero de 2026** es obligatoria y **sustituye al triángulo** para señalizar averías y accidentes.",
            "**Baliza homologada**: debe tener homologación oficial. Al activarse, envía tu posición a la DGT. Consulta el listado de modelos homologados en dgt.es, porque algunos han perdido la homologación.",
            "**Chaleco reflectante homologado**: de colores vivos (amarillo, naranja o rojo). En vía interurbana debes ponértelo **antes de bajar** del vehículo, tras una avería o un accidente, de día y de noche."
        ] },
        { tipo: "clave", texto: "Orden de actuación al bajar: primero el **chaleco**, después la **V-16** y, por último, sal del vehículo por el lado **contrario al tráfico**, hasta una zona segura (arcén o detrás del quitamiedos)." },
        { tipo: "aviso", texto: "Trampa típica: el chaleco se pone **antes** de bajar del coche, no después. Bajarte sin chaleco en una vía interurbana es un riesgo muy grave." },
        { tipo: "aviso", texto: "Novedad para motoristas: según la prensa, desde el **1 de octubre de 2026** también deben llevar chaleco reflectante. Las fuentes no coinciden en el alcance (todos los motoristas o solo algunos, y si rige también en ciudad), así que confírmalo en dgt.es antes del examen." },
        { tipo: "p", texto: "**Parte amistoso de accidente** (o declaración amistosa): es el documento que rellenan **de común acuerdo** los conductores implicados para comunicar lo ocurrido a sus aseguradoras." },
        { tipo: "lista", items: [
            "Datos de los conductores, vehículos, pólizas de seguro, lugar, fecha, hora y testigos si los hay.",
            "Un **croquis** de cómo ocurrió el accidente y las circunstancias en que se produjo.",
            "Haz **fotos** de los vehículos, las matrículas, los daños, la señalización y el lugar.",
            "No firmes nada con lo que no estés de acuerdo ni entiendas. Entrega el parte a tu aseguradora cuanto antes."
        ] },
        { tipo: "aviso", texto: "Trampa: el parte amistoso **solo sirve si no hay heridos** y los dos conductores están de acuerdo. Si hay heridos, llama al 112; ese caso no se resuelve con un parte amistoso." },
        { tipo: "p", texto: "Si hay heridos, avisa siempre al **112**. Si no hay heridos, pero existe desacuerdo o los daños son importantes, avisa a la **Guardia Civil** de Tráfico (o a la Policía Local, en su caso)." },
        { tipo: "quiz", pregunta: "Vas a bajar de tu coche en una carretera convencional tras un accidente. ¿Qué haces antes?", opciones: ["Llamar a la aseguradora y esperar en el coche", "Bajar a ver los daños y después ponerme el chaleco", "Ponerme el chaleco y señalizar antes de bajar"], correcta: 2, explicacion: "Primero te proteges: te pones el chaleco antes de bajar y señalizas el vehículo con la baliza V-16. Después avisas al 112 y, si hace falta, ayudas." },
        { tipo: "quiz", pregunta: "¿Cuándo puedes rellenar un parte amistoso?", opciones: ["Solo si no hay heridos y los dos conductores están de acuerdo", "Siempre, aunque haya heridos", "Solo si el accidente ocurre en una autopista"], correcta: 0, explicacion: "El parte amistoso requiere que no haya heridos y que los implicados estén de acuerdo. Con heridos, hay que avisar al 112 y a la autoridad." }
      ]
    },
    {
      id: "accidentes-lluvia-niebla-noche",
      titulo: "Lluvia, niebla y noche",
      minutos: 9,
      contenido: [
        { tipo: "p", texto: "Las condiciones adversas hacen que **veas menos**, **frenes peor** y **agarres menos**. La regla de oro es sencilla: **adapta la velocidad** a lo que ves y al estado de la calzada, aunque el límite de la vía sea más alto." },
        { tipo: "lista", items: [
            "**Lluvia**: el asfalto mojado reduce la adherencia y alarga la distancia de frenado. Reduce la velocidad y aumenta la distancia de seguridad.",
            "**Primeras lluvias tras un periodo seco**: el agua mezclada con el aceite y la suciedad de la calzada la vuelve muy resbaladiza.",
            "**Charcos**: atraviésalos despacio para evitar el aquaplaning.",
            "Usa las luces de cruce cuando la visibilidad disminuya, y revisa escobillas y líquido del limpiaparabrisas."
        ] },
        { tipo: "clave", texto: "**50 metros** es la cifra clave de la **antiniebla trasera**: solo se enciende con visibilidad **inferior a 50 metros**. La delantera puede usarse antes, con niebla, lluvia intensa o nieve." },
        { tipo: "lista", items: [
            "**Antiniebla delanteras**: con niebla, lluvia muy intensa, nevada o nubes de polvo o humo, siempre junto a las de cruce. Apágalas cuando mejore la visibilidad.",
            "**Antiniebla traseras**: solo con visibilidad inferior a 50 metros. Deslumbran a quien circula detrás y se confunden con la luz de freno.",
            "**No uses las luces de carretera** con niebla: la luz rebota en las gotitas y te deslumbra a ti. Usa las de cruce."
        ] },
        { tipo: "truco", texto: "Si solo ves 30 metros de carretera, **tu velocidad debe permitirte parar en esos 30 metros**." },
        { tipo: "lista", items: [
            "**Luces de cruce** como norma en la noche. Las de carretera solo se usan si no hay vehículos cerca, y deben cambiarse en cuanto aparezca uno.",
            "Adapta la velocidad a lo que alcanzan a iluminar tus faros, sobre todo en carreteras sin iluminación.",
            "Atento a los **animales** que pueden cruzar de repente, y a los **peatones y ciclistas** vestidos de oscuro o sin luz."
        ] },
        { tipo: "aviso", texto: "Trampa: las **luces de carretera** deben cambiarse a **cruce** cuando te cruces con otro vehículo o circules detrás de él. Si no lo haces, deslumbras al otro conductor y le puedes provocar un accidente." },
        { tipo: "p", texto: "**Deslumbramiento solar**: al amanecer y al atardecer el sol queda muy bajo y te ciega. Usa el parasol y gafas de sol homologadas, nunca mires directamente al sol y, si no ves bien, reduce la velocidad y aumenta la distancia. Encender las luces de cruce ayuda a que te vean." },
        { tipo: "quiz", pregunta: "Circulas de noche por una carretera sin iluminación y te cruzas con otro coche. ¿Qué luces debes usar?", opciones: ["Las antiniebla traseras", "Las de cruce, para no deslumbrar", "Las de carretera, para ver más lejos"], correcta: 1, explicacion: "Las luces de carretera deslumbran al conductor que viene de frente. Al cruzarte, usa las de cruce." },
        { tipo: "quiz", pregunta: "Hay niebla y solo ves unos 40 metros. ¿Qué luz antiniebla puedes encender además de las de cruce?", opciones: ["La delantera y también la trasera", "Solo la delantera, la trasera nunca", "Ninguna, solo se usan con nieve"], correcta: 0, explicacion: "Con menos de 50 metros de visibilidad puedes usar ambas antiniebla. La trasera solo se permite por debajo de esos 50 metros; la delantera, con niebla, lluvia intensa o nieve." },
      ]
    },
    {
      id: "accidentes-nieve-hielo-viento",
      titulo: "Nieve, hielo, viento y cadenas",
      minutos: 9,
      contenido: [
        { tipo: "p", texto: "En invierno y en la montaña la adherencia puede desaparecer de golpe. La clave es hacer todo **con suavidad**: acelerar, frenar y girar despacio y sin tirones." },
        { tipo: "senal", forma: "triangulo", simbolo: "🚗", nombre: "Calzada deslizante (peligro)", descripcion: "Avisa de que la calzada puede estar resbaladiza por agua, barro, nieve o hielo. Reduce la velocidad y aumenta la distancia de seguridad." },
        { tipo: "lista", items: [
            "**Nieve**: arranca en **segunda marcha** para que no patinen las ruedas y evita frenar bruscamente.",
            "**Hielo**: los **puentes** y las zonas en sombra se hielan antes que el resto de la calzada.",
            "**Limpieza**: quita la nieve de todos los cristales, faros, matrícula y techo antes de salir, para ver y ser visto."
        ] },
        { tipo: "p", texto: "El **hielo negro** es una capa de hielo transparente que apenas se distingue del asfalto. Aparece sobre todo al amanecer, al anochecer y en zonas de sombra. Si el volante se queda ligero y el coche se desliza al girar, ya estás sobre él." },
        { tipo: "truco", texto: "Con **ABS**, frena con firmeza y **no sueltes el pedal**: el sistema modula el frenado solo. Sin ABS, frena de forma progresiva, sin bloquear las ruedas." },
        { tipo: "lista", items: [
            "Las cadenas (o los neumáticos de nieve) son **obligatorias solo donde lo indique una señal o un panel**.",
            "Se montan en las **ruedas motrices**: en tracción delantera, en las delanteras; en tracción trasera, en las traseras.",
            "No superes **50 km/h** con cadenas puestas. Algunas cadenas metálicas piden incluso 30 km/h, así que consulta el manual. Retíralas en cuanto dejes de necesitarlas, porque pueden dañar el asfalto y el propio vehículo."
        ] },
        { tipo: "aviso", texto: "Trampa: **nevar no obliga a llevar cadenas**. La obligación la marca la señal de la carretera; sin señal que lo ordene, no es obligatorio colocarlas, aunque sí es recomendable." },
        { tipo: "lista", items: [
            "**Viento lateral**: los vehículos altos, las furgonetas, las caravanas y las motos son los más expuestos. Reduce la velocidad y sujeta bien el volante.",
            "**Al cruzarte con camiones o autobuses** notarás un empujón de aire. Agarra el volante con firmeza.",
            "**Al salir de un túnel o de detrás de un camión**, el viento puede golpearte de repente. Anticípate."
        ] },
        { tipo: "aviso", texto: "Trampa: si el viento es muy fuerte, evita adelantar a vehículos altos y mantén una distancia de seguridad amplia." },
        { tipo: "quiz", pregunta: "¿Qué tramo de la carretera se hiela antes en invierno?", opciones: ["Los arcenes con hierba", "La parte soleada del asfalto", "Los puentes"], correcta: 2, explicacion: "Los puentes se enfrían por debajo y no tienen tierra que retenga el calor, así que se hielan antes que el resto de la calzada." },
        { tipo: "quiz", pregunta: "¿En qué ruedas se montan las cadenas de un coche de tracción delantera?", opciones: ["En las traseras", "En las delanteras", "En las cuatro, siempre"], correcta: 1, explicacion: "Las cadenas van en las ruedas motrices, las que reciben la fuerza del motor. En tracción delantera, en las delanteras." }
      ]
    },
    {
      id: "accidentes-conduccion-eficiente",
      titulo: "Conducción eficiente y medio ambiente",
      minutos: 8,
      contenido: [
        { tipo: "p", texto: "Conducir de forma **eficiente** reduce el consumo de combustible, las emisiones contaminantes, el ruido y el desgaste del vehículo. Además, suele ser una conducción más **segura y tranquila**." },
        { tipo: "lista", items: [
            "**Anticipa**: mira lejos, lee el tráfico y levanta el pie del acelerador con tiempo. Así evitas frenazos y aprovechas la inercia del coche.",
            "**Acelera de forma progresiva**: no pises el acelerador a fondo, y cambia de marcha a bajas revoluciones.",
            "**Usa marchas largas** siempre que el motor vaya bien, sin que el coche tire ni se revolucione de más.",
            "**Apaga el motor** en paradas prolongadas, como una espera larga en un paso a nivel."
        ] },
        { tipo: "tabla", cabecera: ["Hábito", "Efecto"], filas: [
            ["Anticipar y frenar suavemente", "Ahorra combustible y reduce el desgaste de frenos"],
            ["Usar marchas largas", "Consume menos y hace menos ruido"],
            ["Mantener la presión correcta", "Menos resistencia a rodar, menos consumo"],
            ["No llevar la baca cuando no se usa", "Menos resistencia al aire"],
            ["Apagar el motor en paradas largas", "Evita consumir y contaminar en ralentí"]
        ] },
        { tipo: "clave", texto: "La mejor frenada es la que **no tienes que hacer**. Cada frenazo innecesario desperdicia la energía que ya has pagado con el combustible." },
        { tipo: "p", texto: "**El peso y el aire** cuentan: cada kilo que llevas sin necesidad gasta combustible, y la baca vacía frena el coche por la resistencia del aire. El aire acondicionado consume algo, pero a velocidad alta las ventanillas abiertas aumentan la resistencia del aire y gastan más." },
        { tipo: "aviso", texto: "Trampa: ahorrar no significa ir **despacio** en cualquier vía. En autovías y autopistas la velocidad mínima es de **60 km/h**. Circular por debajo sin causa justificada (una avería, una emergencia o una niebla muy densa) es infracción." },
        { tipo: "truco", texto: "Pie suave y mirada lejana: esa es la fórmula de la conducción eficiente." },
        { tipo: "p", texto: "**Neumáticos y revisiones**: unos neumáticos bien inflados y un motor bien mantenido gastan menos, contaminan menos y son más seguros." },
        { tipo: "quiz", pregunta: "¿Cuál es la mejor opción en una parada larga para ahorrar combustible y contaminar menos?", opciones: ["Dejar el motor en marcha por si hay que arrancar enseguida", "Apagar el motor", "Pisar el acelerador en vacío para mantener el motor caliente"], correcta: 1, explicacion: "Un motor al ralentí consume y contamina sin que el coche avance. En paradas prolongadas, lo mejor es apagarlo." },
        { tipo: "quiz", pregunta: "¿Qué efecto tiene llevar una baca vacía en el coche?", opciones: ["Mejora la aerodinámica", "Ninguno", "Aumenta la resistencia al aire y el consumo"], correcta: 2, explicacion: "La baca aumenta la resistencia del aire, lo que hace que el motor gaste más. Quítala cuando no la uses." }
      ]
    },
    {
      id: "accidentes-electricos-hibridos",
      titulo: "Vehículos eléctricos e híbridos",
      minutos: 9,
      contenido: [
        { tipo: "p", texto: "Cada vez hay más **vehículos electrificados**. Conviene distinguir sus tipos, porque cambian la forma de conducirlos y de actuar tras un accidente." },
        { tipo: "tabla", cabecera: ["Tipo", "Cómo funciona", "Cómo se recarga"], filas: [
            ["Eléctrico (BEV)", "Solo con motor eléctrico y batería", "Con enchufe o cargador"],
            ["Híbrido (HEV)", "Motor de combustión y motor eléctrico", "No se enchufa: la batería se carga con el motor y al frenar"],
            ["Híbrido enchufable (PHEV)", "Motor de combustión y motor eléctrico", "Con enchufe; el motor de combustión sirve de apoyo"]
        ] },
        { tipo: "lista", items: [
            "**Frenada regenerativa**: al soltar el acelerador, el coche frena un poco y recupera energía para la batería.",
            "**Silencio**: a baja velocidad apenas hacen ruido, por eso llevan un sistema de aviso sonoro para los peatones.",
            "**Autonomía**: el frío, la calefacción, el aire acondicionado y la velocidad alta reducen los kilómetros que puede recorrer la batería."
        ] },
        { tipo: "clave", texto: "En la **alta tensión** (los cables y componentes de la batería y el motor, que suelen ser **naranjas**), **nunca toques nada**, ni aunque el coche parezca apagado: la batería puede seguir activa." },
        { tipo: "aviso", texto: "Trampa: un coche eléctrico o híbrido **en silencio no está necesariamente apagado**. Si el indicador de «listo» (READY) está encendido, el coche puede ponerse en marcha en cuanto pises el pedal. Y el motor de combustión de un híbrido puede arrancar solo." },
        { tipo: "lista", items: [
            "**No toques** cables naranjas ni componentes de la batería, ni en el suelo ni en la carrocería.",
            "**Avisa al 112** e indica que el vehículo es **eléctrico o híbrido**: los bomberos saben desconectar la alta tensión.",
            "**Si hay humo o fuego** en la batería, aléjate lo máximo posible. Un incendio de batería puede reavivarse durante horas y el humo es tóxico.",
            "**No intentes apagarlo** por tu cuenta: deja que lo hagan los servicios de emergencia."
        ] },
        { tipo: "quiz", pregunta: "¿De qué color suelen ser los cables de alta tensión de un vehículo eléctrico?", opciones: ["Rojos", "Naranjas", "Blancos"], correcta: 1, explicacion: "El naranja identifica los cables de alta tensión. Nunca los toques: pueden provocar una descarga grave." },
        { tipo: "quiz", pregunta: "Tras un accidente, un híbrido está en silencio. ¿Es seguro tocarlo?", opciones: ["Sí, si no hay humo, no pasa nada", "No, puede seguir activo y con alta tensión", "Sí, porque no hace ruido"], correcta: 1, explicacion: "El silencio no indica que el vehículo esté apagado ni libre de corriente. Mantente alejado y espera a los bomberos." }
      ]
    }
  ]
});
