window.TEMARIO = window.TEMARIO || [];
window.TEMARIO.push({
  id: "seguridad",
  orden: 9,
  titulo: "Seguridad y documentación",
  icono: "🛡️",
  color: "#2a9d8f",
  resumen: "Cómo protegen el coche y a sus ocupantes, qué revisar, qué papeles llevar y qué etiqueta necesitas para circular.",
  lecciones: [
    {
      id: "seguridad-activa-pasiva",
      titulo: "Seguridad activa y pasiva",
      minutos: 8,
      contenido: [
        { tipo: "p", texto: "Un coche se diseña para proteger a sus ocupantes de dos formas. La **seguridad activa** intenta que el accidente **no llegue a producirse**. La **seguridad pasiva** entra en juego cuando el choque ya ha ocurrido y reduce sus **consecuencias**, es decir, las lesiones." },
        { tipo: "tabla", cabecera: ["Concepto", "Seguridad activa", "Seguridad pasiva"], filas: [
            ["Objetivo", "Evitar el accidente", "Reducir las lesiones"],
            ["Cuándo actúa", "Antes del choque", "Durante y después del choque"],
            ["Ejemplos", "Frenos, ABS, ESP, dirección, neumáticos, suspensión, luces", "Cinturón, airbag, reposacabezas, carrocería deformable"]
        ] },
        { tipo: "lista", items: [
            "**Frenos**: detienen el vehículo. Hay freno de servicio (el pedal) y freno de estacionamiento (el freno de mano).",
            "**ABS**: evita que las ruedas se bloqueen al frenar, para que puedas seguir girando el volante.",
            "**ESP** (control electrónico de estabilidad): corrige los derrapajes frenando ruedas por separado. Es obligatorio en los turismos nuevos desde 2014.",
            "**Dirección** y **suspensión**: la dirección te permite maniobrar y la suspensión mantiene las ruedas pegadas al asfalto.",
            "**Luces y visibilidad**: faros, luces de niebla, limpiaparabrisas y espejos te permiten ver y ser visto."
        ] },
        { tipo: "truco", texto: "Para no confundirlas: si ayuda a **evitar** el choque, es **activa**. Si ayuda a **sobrevivir** al choque, es **pasiva**." },
        { tipo: "lista", items: [
            "**Cinturón de seguridad**: sujeta al ocupante a su asiento y evita que salga despedido.",
            "**Airbag**: una bolsa que se hincha en un impacto fuerte para amortiguar el golpe de la cabeza y el pecho. Complementa al cinturón, no lo sustituye.",
            "**Reposacabezas**: reduce el riesgo de latigazo cervical en un choque por alcance.",
            "**Carrocería deformable**: las zonas delantera y trasera se arrugan a propósito para absorber energía, mientras el habitáculo se mantiene rígido."
        ] },
        { tipo: "clave", texto: "El **airbag nunca sustituye al cinturón**. Sin cinturón, el cuerpo sale proyectado hacia el airbag al hincharse y puede sufrir lesiones graves." },
        { tipo: "aviso", texto: "Trampa típica: el ABS **no acorta siempre la distancia de frenado**. Sobre grava, nieve o hielo puede incluso alargarla. Su gran ventaja es que **puedes seguir maniobrando** el volante mientras frenas." },
        { tipo: "quiz", pregunta: "¿Cuál es la función principal del ABS?", opciones: ["Acortar siempre la distancia de frenado", "Evitar que las ruedas se bloqueen y mantener el control de la dirección", "Corregir los derrapajes del vehículo"], correcta: 1, explicacion: "El ABS impide que las ruedas se bloqueen, así que puedes seguir girando el volante. No acorta siempre la distancia de frenado, y corregir derrapajes es función del ESP." },
        { tipo: "quiz", pregunta: "¿Qué elemento de seguridad pasiva reduce el riesgo de latigazo cervical?", opciones: ["El reposacabezas", "El ESP", "Las luces antiniebla"], correcta: 0, explicacion: "El reposacabezas limita el movimiento brusco de la cabeza hacia atrás en un choque por alcance. El ESP y las luces son elementos de seguridad activa." }
      ]
    },
    {
      id: "seguridad-cinturon-casco",
      titulo: "Cinturón y casco",
      minutos: 7,
      contenido: [
        { tipo: "p", texto: "El cinturón es el elemento de seguridad pasiva más eficaz del coche. Es **obligatorio para todos los ocupantes**, en **todas las plazas** (delanteras y traseras), tanto en vías urbanas como interurbanas, siempre que el vehículo tenga cinturón en esa plaza." },
        { tipo: "lista", items: [
            "Personas con un **certificado médico** que acredite que no pueden llevarlo.",
            "Quienes prestan un servicio con paradas y arranques continuos (por ejemplo, reparto o recogida de basuras), mientras lo realizan.",
            "Ningún otro caso: ni los trayectos cortos ni las plazas traseras eximen de llevarlo abrochado."
        ] },
        { tipo: "clave", texto: "No llevar el cinturón abrochado es una infracción **grave**: multa de **200 €** y **4 puntos** del carné." },
        { tipo: "aviso", texto: "Trampa: usar una pinza u otro truco para que el cinturón parezca abrochado se sanciona igual que no llevarlo." },
        { tipo: "aviso", texto: "Las **embarazadas también deben usar el cinturón**. No es una excepción. La banda de la cadera debe pasar bajo el vientre, sobre la pelvis, y la del hombro entre los pechos y al lado de la barriga." },
        { tipo: "truco", texto: "Regla fácil: **si la plaza tiene cinturón, va abrochado**, da igual que el trayecto sea de 200 metros o de 200 kilómetros." },
        { tipo: "p", texto: "**Casco**: es obligatorio para el conductor y el pasajero de **motocicletas y ciclomotores**. Debe ser **homologado** (con su marca de homologación) y de la talla adecuada, que no se mueva al sacudir la cabeza." },
        { tipo: "aviso", texto: "Trampa del examen: **el casco tiene que ir abrochado**. Llevarlo puesto con la correa suelta no cumple la norma, y en un choque puede salir volando." },
        { tipo: "quiz", pregunta: "¿Quién puede no usar el cinturón de seguridad?", opciones: ["Los ocupantes de las plazas traseras", "Las embarazadas", "Quien tenga un certificado médico que lo acredite"], correcta: 2, explicacion: "Solo están exentas las personas con certificado médico y algunos casos concretos de servicio. Las plazas traseras y las embarazadas sí deben llevarlo." },
        { tipo: "quiz", pregunta: "Un motorista lleva el casco puesto, pero no tiene abrochada la correa. ¿Cumple la norma?", opciones: ["Sí, porque lo lleva puesto", "No, el casco debe ir abrochado", "Sí, si va despacio"], correcta: 1, explicacion: "Un casco sin abrochar no protege y no cumple la obligación, aunque el motorista lo lleve puesto." }
      ]
    },
    {
      id: "seguridad-sri",
      titulo: "Sistemas de retención infantil (SRI)",
      minutos: 8,
      contenido: [
        { tipo: "p", texto: "Los niños **no son adultos pequeños**: tienen el cuerpo y la cabeza proporcionalmente más grandes, y el cinturón del adulto no les sujeta bien. Por eso existen los **sistemas de retención infantil** (SRI), que se eligen según la estatura o el peso del niño." },
        { tipo: "clave", texto: "Hasta **135 cm** de estatura, el menor debe ir sujeto con un **SRI homologado** adecuado a su talla y peso. A partir de 135 cm puede usar el cinturón del adulto." },
        { tipo: "truco", texto: "El límite es la **estatura**, no la edad: manda el **135**, no los años que tenga el niño." },
        { tipo: "aviso", texto: "Trampa del examen: un niño de 9 años que mide 1,20 m **todavía necesita SRI**. En cambio, un niño de 10 años que mide 1,40 m puede usar el cinturón del adulto." },
        { tipo: "lista", items: [
            "**Atrás, siempre que sea posible.** Solo puede ir delante en casos concretos, por ejemplo si el coche no tiene plazas traseras o si estas no admiten el sistema.",
            "**Mirando hacia atrás** (en contracorriente) protege mejor la cabeza y el cuello del bebé. Es lo recomendado en los primeros años.",
            "Debe estar bien sujeto, con el cinturón del coche o con los anclajes **ISOFIX**, y ajustado al cuerpo del niño."
        ] },
        { tipo: "tabla", cabecera: ["Grupo", "Peso del niño", "Tipo de sistema (norma antigua R44)"], filas: [
            ["0", "Hasta 10 kg", "Silla mirando hacia atrás (bebés)"],
            ["0+", "Hasta 13 kg", "Silla mirando hacia atrás (bebés)"],
            ["I", "De 9 a 18 kg", "Silla con arnés, normalmente mirando hacia delante"],
            ["II", "De 15 a 25 kg", "Elevador con respaldo, con el cinturón del coche"],
            ["III", "De 22 a 36 kg", "Alzador, con el cinturón del coche"]
        ] },
        { tipo: "p", texto: "Las sillas nuevas se homologan con la norma **i-Size (R129)**, que se elige por **altura** y no por peso. Las antiguas, con la norma R44, se clasifican por grupos de peso como en la tabla." },
        { tipo: "p", texto: "Aunque la norma permite el cinturón del adulto a partir de 135 cm, muchos pediatras recomiendan mantener el elevador hasta los **150 cm**, porque en niños más bajos el cinturón suele quedar mal colocado." },
        { tipo: "clave", texto: "Si el SRI va en la plaza **delantera** y **mirando hacia atrás**, el airbag del pasajero **debe estar desactivado**: al hincharse, empujaría la silla con fuerza contra el bebé." },
        { tipo: "quiz", pregunta: "Un niño de 8 años que mide 1,20 m viaja en el coche. ¿Qué debe llevar?", opciones: ["El cinturón del adulto, porque ya tiene más de 6 años", "Nada, si va en el asiento trasero", "Un SRI homologado adecuado a su talla y peso"], correcta: 2, explicacion: "Mide menos de 135 cm, así que necesita un SRI homologado. La edad no es el criterio: lo que manda es la estatura." },
        { tipo: "quiz", pregunta: "¿Dónde es más seguro colocar un SRI mirando hacia atrás si el coche tiene airbag de pasajero?", opciones: ["En el asiento delantero, con el airbag activado", "En el asiento trasero, o delante con el airbag desactivado", "En el asiento delantero, siempre que lleve cinturón"], correcta: 1, explicacion: "Lo más seguro es el asiento trasero. Si va delante, el airbag del pasajero debe desactivarse, porque se hincha con mucha fuerza contra el SRI." }
      ]
    },
    {
      id: "seguridad-neumaticos",
      titulo: "Neumáticos: dibujo, presión y aquaplaning",
      minutos: 8,
      contenido: [
        { tipo: "p", texto: "Los neumáticos son **lo único que une el coche con la carretera**. Cada uno apoya sobre una superficie del tamaño aproximado de la palma de la mano. Por eso su estado es clave para frenar, girar y no derrapar." },
        { tipo: "clave", texto: "El **dibujo mínimo legal** de los neumáticos de turismo es de **1,6 mm**. Con menos profundidad el neumático no es apto y es infracción." },
        { tipo: "p", texto: "Los **testigos de desgaste** son pequeños resaltes de goma que aparecen en los surcos del dibujo. Cuando quedan **a ras** de la superficie, el neumático ha llegado a su límite." },
        { tipo: "lista", items: [
            "Revisa la presión **en frío**, es decir, con el coche parado y los neumáticos a temperatura ambiente.",
            "La presión recomendada aparece en una etiqueta del marco de la puerta del conductor, en la tapa del depósito o en el manual.",
            "Revísala **al menos una vez al mes** y antes de un viaje largo, incluida la rueda de repuesto.",
            "Un neumático desinflado gasta más combustible, se calienta, frena peor y puede reventar."
        ] },
        { tipo: "aviso", texto: "Trampa: **medir la presión con los neumáticos calientes** da un valor más alto que el real, porque el aire se dilata al calentarse. Nunca deshinches un neumático caliente para ajustarlo: al enfriarse quedará **por debajo** de lo recomendado." },
        { tipo: "p", texto: "**Aquaplaning** (o hidroplaneo): al circular sobre una capa de agua, el neumático pierde el contacto con el asfalto y el coche **flota** sin agarre. Aparece con más facilidad si hay mucha agua, si el dibujo está gastado o si la presión es incorrecta, y a partir de cierta velocidad." },
        { tipo: "lista", items: [
            "**No frenes de golpe** ni gires bruscamente el volante.",
            "Suelta el acelerador poco a poco y deja que el coche pierda velocidad hasta recuperar el agarre.",
            "Mantén el volante firme y sigue la dirección que llevas.",
            "Para prevenirlo: reduce la velocidad en zonas encharcadas y comprueba que el dibujo esté en buen estado."
        ] },
        { tipo: "truco", texto: "Para el aquaplaning, recuerda: **suelta el acelerador, no frenes y sujeta el volante**." },
        { tipo: "quiz", pregunta: "¿Cuál es el dibujo mínimo legal de los neumáticos de un turismo?", opciones: ["1 mm", "3 mm", "1,6 mm"], correcta: 2, explicacion: "El límite legal para turismos es de 1,6 mm. Los testigos de desgaste te avisan cuando se alcanza ese mínimo." },
        { tipo: "quiz", pregunta: "¿Cuándo debes revisar la presión de los neumáticos?", opciones: ["En frío, al menos una vez al mes", "Con los neumáticos calientes, justo después de un viaje", "Solo cuando se encienda un testigo"], correcta: 0, explicacion: "La presión se mide en frío. Conviene revisarla una vez al mes y antes de viajar, sin esperar a que se encienda ningún testigo." }
      ]
    },
    {
      id: "seguridad-mantenimiento-carga",
      titulo: "Mantenimiento básico, carga y personas",
      minutos: 8,
      contenido: [
        { tipo: "p", texto: "No hace falta ser mecánico para hacer las revisiones básicas. Unos minutos al mes evitan muchas averías y, sobre todo, accidentes." },
        { tipo: "lista", items: [
            "**Aceite del motor**: se mide con la varilla. El nivel debe quedar entre las marcas de mínimo y máximo, con el motor parado y el coche en llano.",
            "**Refrigerante**: su nivel se revisa en el vaso de expansión con el motor **frío**. Nunca abras el tapón del radiador con el motor caliente: sale vapor a presión y hay riesgo de quemaduras.",
            "**Líquido de frenos**: debe estar entre el mínimo y el máximo. Si baja mucho, puede haber una fuga o las pastillas muy gastadas.",
            "**Batería**: bornes limpios, bien apretados y sin corrosión (la costra blanquecina o verdosa)."
        ] },
        { tipo: "clave", texto: "**Colores de los testigos**: **rojo** = peligro o parada inmediata; **amarillo o naranja** = atención o avería, revisar pronto; **verde o azul** = solo informan (luces de cruce, intermitentes, etc.)." },
        { tipo: "aviso", texto: "Trampa: si el **testigo rojo de presión de aceite** se enciende en marcha, **no sigas hasta el destino**. Para el coche en cuanto sea seguro y apaga el motor. Sin aceite, el motor puede dañarse en muy poco tiempo." },
        { tipo: "p", texto: "**Carga**: debe ir bien sujeta y no puede poner en peligro a nadie. Si sobresale por detrás, hay que señalizarla con una **bandera roja** de día o una **luz roja** de noche." },
        { tipo: "truco", texto: "Las cargas pesadas van **abajo** y **cerca del centro** del vehículo. Así el coche sigue estable y con buen agarre." },
        { tipo: "lista", items: [
            "El número de ocupantes **no puede superar las plazas autorizadas**, que figuran en la ficha técnica (tarjeta ITV).",
            "El peso total no puede superar la **masa máxima autorizada** (MMA), que también figura en la ficha técnica.",
            "Los pasajeros deben viajar en **plazas homologadas**, nunca en la zona de carga.",
            "En una moto, solo puedes llevar pasajero si la moto está homologada para ello, y ambos llevan casco."
        ] },
        { tipo: "tabla", cabecera: ["Dato", "Dónde se consulta"], filas: [
            ["Plazas autorizadas", "Ficha técnica (tarjeta ITV)"],
            ["Masa máxima autorizada", "Ficha técnica (tarjeta ITV)"],
            ["Presión de los neumáticos", "Etiqueta de la puerta del conductor o manual"],
            ["Nivel de aceite", "Varilla de medición del motor"]
        ] },
        { tipo: "quiz", pregunta: "Se enciende el testigo rojo de presión de aceite mientras conduces. ¿Qué haces?", opciones: ["Echar agua en el motor para que no se dañe", "Seguir hasta el destino y revisarlo después", "Parar en cuanto sea seguro y apagar el motor"], correcta: 2, explicacion: "Sin presión de aceite el motor sufre daños graves. Hay que detenerse en cuanto sea posible, apagar el motor y revisar el nivel o pedir asistencia." },
        { tipo: "quiz", pregunta: "¿Dónde se consulta la masa máxima autorizada de tu coche?", opciones: ["En la ficha técnica (tarjeta ITV)", "En el permiso de conducir", "En la póliza del seguro"], correcta: 0, explicacion: "La masa máxima autorizada y las plazas figuran en la ficha técnica, que forma parte de la tarjeta ITV." }
      ]
    },
    {
      id: "seguridad-documentacion-itv",
      titulo: "Documentación obligatoria e ITV",
      minutos: 8,
      contenido: [
        { tipo: "p", texto: "Para conducir tienes que llevar en el vehículo **la documentación obligatoria**. Si te la piden y no la llevas, te pueden sancionar." },
        { tipo: "lista", items: [
            "**Permiso de conducir**, en vigor y válido para el vehículo que conduces.",
            "**Permiso de circulación**: documento de la DGT con los datos del vehículo y de su titular.",
            "**Tarjeta de inspección técnica (ITV)**: recoge las características técnicas del vehículo (plazas, masa máxima, etc.)."
        ] },
        { tipo: "clave", texto: "Son **tres** los documentos que debes llevar en el coche. El **seguro obligatorio** también es imprescindible, pero **no hace falta llevar la póliza ni el recibo**: la DGT comprueba su vigencia en línea." },
        { tipo: "aviso", texto: "Trampa: **el permiso de circulación lo expide la DGT**, mientras que la **tarjeta ITV** la emite la estación ITV tras la inspección. No son lo mismo, aunque los dos vayan en el coche." },
        { tipo: "p", texto: "**Documentación en el móvil**: la app **miDGT** permite llevar el permiso de conducir y el de circulación en formato digital, con validez en España. La tarjeta ITV en digital no está clara: si no aparece en la app, lleva el papel." },
        { tipo: "p", texto: "La **ITV** (inspección técnica de vehículos) comprueba que el coche sigue en buen estado para circular: frenos, luces, dirección, neumáticos, emisiones y otros elementos." },
        { tipo: "tabla", cabecera: ["Momento", "Periodicidad (turismos)"], filas: [
            ["Primera inspección", "Al cumplir 4 años desde la primera matriculación"],
            ["Entre los 4 y los 10 años", "Cada 2 años"],
            ["A partir de los 10 años", "Cada año"]
        ] },
        { tipo: "truco", texto: "Recuerda el **4-2-1**: la primera ITV a los **4** años, después cada **2** años y, a partir de los **10**, **cada año**." },
        { tipo: "p", texto: "Si la ITV encuentra defectos, se clasifican en **leves**, **graves** y **muy graves**. Un defecto grave obliga a repararlo y volver a pasar la inspección. Uno muy grave impide circular hasta arreglarlo." },
        { tipo: "quiz", pregunta: "Tu coche tiene 6 años. ¿Cada cuánto debe pasar la ITV?", opciones: ["Cada 4 años", "Cada 2 años", "Cada año"], correcta: 1, explicacion: "Entre los 4 y los 10 años, un turismo pasa la ITV cada 2 años. Cada año solo se exige a partir de los 10." },
        { tipo: "quiz", pregunta: "¿Qué documento expide la DGT con los datos del vehículo y de su titular?", opciones: ["El permiso de circulación", "La tarjeta ITV", "La póliza del seguro"], correcta: 0, explicacion: "El permiso de circulación lo expide la DGT. La tarjeta ITV la emite la estación de ITV después de la inspección." }
      ]
    },
    {
      id: "seguridad-etiquetas-zbe",
      titulo: "Etiquetas ambientales y zonas de bajas emisiones",
      minutos: 8,
      contenido: [
        { tipo: "p", texto: "La DGT clasifica los vehículos según sus emisiones con **distintivos ambientales**, que se pegan en el **parabrisas**. Sirven para que los ayuntamientos regulen el acceso a las **zonas de bajas emisiones** (ZBE)." },
        { tipo: "tabla", cabecera: ["Etiqueta", "Color", "Vehículos (ejemplos)"], filas: [
            ["0 emisiones", "Azul", "Eléctricos (también los de autonomía extendida), de pila de hidrógeno e híbridos enchufables con 40 km o más de autonomía eléctrica"],
            ["ECO", "Verde y azul", "Híbridos no enchufables, híbridos enchufables con menos de 40 km de autonomía eléctrica, gas natural y GLP"],
            ["C", "Verde", "Gasolina Euro 4 o superior (desde 2006) y diésel Euro 6 (desde septiembre de 2015)"],
            ["B", "Amarilla", "Gasolina Euro 3 (desde 2000) y diésel Euro 4 o Euro 5 (desde 2006)"],
            ["Sin etiqueta", "Ninguno", "Vehículos más antiguos que no cumplen los requisitos de la B"]
        ] },
        { tipo: "clave", texto: "Cuanto más a la derecha de la tabla, **más restricciones**. Un coche **sin etiqueta** es el primero que suele quedar limitado en una ZBE." },
        { tipo: "truco", texto: "Para memorizar el orden de menos a más contaminante: **0 → ECO → C → B → sin etiqueta**." },
        { tipo: "p", texto: "**En la Comunitat Valenciana**: en **Alicante** hay una ZBE con restricciones permanentes en el Casco Antiguo (el Anillo I), controlada con cámaras; los anillos II y III no tienen restricciones fijas. En **Castellón** la ZBE está aprobada, pero las fuentes no coinciden en si sus restricciones son permanentes o solo se activan con la contaminación. En **Valencia**, según las noticias más recientes que he podido consultar, la ordenanza no estaba aprobada definitivamente, así que no hay restricciones por etiqueta en vigor. Consulta siempre la normativa del ayuntamiento antes de entrar." },
        { tipo: "aviso", texto: "Trampa: **la etiqueta ambiental no es lo mismo que la ITV**. La ITV revisa la seguridad del vehículo; la etiqueta depende del tipo de motor y de la fecha de matriculación, y se solicita aparte a la DGT." },
        { tipo: "quiz", pregunta: "¿Qué etiqueta ambiental corresponde a un coche eléctrico de batería?", opciones: ["C (verde)", "ECO (verde y azul)", "0 emisiones (azul)"], correcta: 2, explicacion: "Los eléctricos de batería tienen la etiqueta 0 emisiones, la de mejor calificación ambiental." },
        { tipo: "quiz", pregunta: "Tu coche es de gasolina Euro 4. ¿Qué etiqueta le corresponde?", opciones: ["C (verde)", "B (amarilla)", "ECO (verde y azul)"], correcta: 0, explicacion: "La gasolina Euro 4 o superior entra en la etiqueta C. La B es para gasolina Euro 3 y diésel Euro 4 o 5." }
      ]
    }
  ]
});
