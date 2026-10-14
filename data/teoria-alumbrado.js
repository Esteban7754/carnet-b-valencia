window.TEMARIO = window.TEMARIO || [];
window.TEMARIO.push({
  id: "alumbrado",
  orden: 7,
  titulo: "Alumbrado, claxon, autopistas y túneles",
  icono: "💡",
  color: "#f59e0b",
  resumen: "Qué luz usar en cada momento, cuándo puedes tocar el claxon, qué llevar si te averías y cómo circular con seguridad por autovías, autopistas y túneles.",
  lecciones: [
    {
      id: "alumbrado-luces",
      titulo: "Luces de posición, cruce y carretera",
      minutos: 7,
      contenido: [
        { tipo: "p", texto: "Las luces del coche sirven para dos cosas: **ver** y **que te vean**. Antes de encender una, hazte dos preguntas: ¿veo bien? y ¿me ven los demás?" },
        { tipo: "tabla", cabecera: ["Luz", "Para qué sirve", "Cuándo la usas"], filas: [
            ["Posición (las pequeñas)", "Señalar tu presencia y tu anchura", "Coche parado de noche en una vía poco iluminada. No sirven para circular de noche"],
            ["Cruce (las cortas)", "Iluminar la calzada sin deslumbrar a quien viene de frente", "De noche, al atardecer, en túneles y con poca visibilidad"],
            ["Carretera (las largas)", "Ver mucho más lejos", "Fuera de poblado, de noche, en vía sin alumbrado y sin vehículos cerca"]
        ] },
        { tipo: "clave", texto: "**Las luces de posición no sirven para circular de noche.** Con ellas solas apenas ves la calzada, y circular así es infracción. De noche, usa cruce o carretera." },
        { tipo: "p", texto: "Las **luces de cruce** (o cortas) son las que usas a diario de noche. Iluminan la calzada delante de ti y a tu lado sin molestar a quien viene de frente." },
        { tipo: "p", texto: "Las **luces de carretera** (o largas) alumbran mucho más lejos, pero deslumbran a todo el que tengas delante o de frente. Solo se usan **fuera de poblado, en vía sin alumbrado público, de noche y sin vehículos cerca**." },
        { tipo: "aviso", texto: "**Trampa típica:** mantener las de carretera porque «así veo mejor». Cuando un vehículo viene de frente o circula delante de ti **a menos de 150 metros**, cambia a cruce. Deslumbrar a otro conductor puede acarrear sanción." },
        { tipo: "lista", items: [
            "Estás fuera de poblado",
            "Es de noche",
            "No hay alumbrado público suficiente",
            "No viene nadie de frente ni circula nadie delante de ti a menos de 150 metros"
        ] },
        { tipo: "p", texto: "**Si te deslumbran:** no mires a los faros. Dirige la vista hacia el borde derecho de la calzada, reduce la velocidad y, si el deslumbramiento es muy fuerte, para en un lugar seguro." },
        { tipo: "truco", texto: "**Regla de los 150 metros:** si ves a alguien a menos de 150 metros, de frente o delante de ti, pulsa el cambio a cruce. Así ves tú y no cegarás a nadie." },
        { tipo: "quiz", pregunta: "Vas de noche por una carretera sin alumbrado y no ves ningún coche. ¿Qué luces son las adecuadas?", opciones: ["Solo las de posición, para gastar menos batería", "Solo las antiniebla, porque iluminan más", "Las de cruce, o las de carretera mientras no haya vehículos cerca"], correcta: 2, explicacion: "De noche, en vía sin alumbrado, circula con cruce o con carretera. Las de carretera solo si no molestas a nadie: en cuanto aparezca un vehículo a menos de 150 metros, cambias a cruce. Las de posición no bastan para circular." },
        { tipo: "quiz", pregunta: "¿A qué distancia de otro vehículo tienes que cambiar de luces de carretera a cruce?", opciones: ["A menos de 50 metros", "A menos de 150 metros", "A menos de 300 metros"], correcta: 1, explicacion: "La referencia es 150 metros: si el vehículo viene de frente o circula delante de ti a menos de esa distancia, cambia a cruce." }
      ]
    },
    {
      id: "alumbrado-especiales",
      titulo: "Antiniebla, marcha atrás, emergencia y luces diurnas",
      minutos: 7,
      contenido: [
        { tipo: "p", texto: "Además de las luces básicas, el coche tiene luces especiales. Cada una tiene un uso concreto, y encenderla en el momento equivocado puede ser una infracción o un peligro." },
        { tipo: "tabla", cabecera: ["Luz", "Cuándo se usa", "Error frecuente"], filas: [
            ["Antiniebla delantera", "Niebla, nevada, lluvia muy intensa o cualquier situación de visibilidad muy reducida", "Encenderla con buena visibilidad, porque deslumbra"],
            ["Antiniebla trasera", "Solo cuando la visibilidad es inferior a 50 metros", "Usarla con lluvia normal o cuando la niebla ya ha bajado"],
            ["Marcha atrás", "Solo al engranar la marcha atrás, para ver y avisar", "Pensar que sirve para circular con más luz"],
            ["Emergencia (warning)", "Avería, parada en la vía o peligro para los demás", "Usarlas para aparcar en doble fila o para dar las gracias"],
            ["Diurnas", "Solo de día, para que te vean", "Creer que valen para conducir de noche"]
        ] },
        { tipo: "p", texto: "**Antiniebla delantera.** Se enciende con niebla, nevada o lluvia muy intensa. Va **junto** a las luces de cruce, nunca en lugar de ellas, y se apaga en cuanto mejora la visibilidad." },
        { tipo: "p", texto: "**Antiniebla trasera.** Es la luz roja que más se usa mal. Solo puede encenderse cuando la visibilidad es **inferior a 50 metros**. Con lluvia normal o niebla clara no se enciende, porque deslumbra a quien viene detrás y se confunde con el freno." },
        { tipo: "aviso", texto: "**Trampa:** la antiniebla trasera encendida con buena visibilidad es infracción. Apágala en cuanto la visibilidad vuelva a ser normal, aunque el día siga gris." },
        { tipo: "p", texto: "**Marcha atrás.** La luz blanca se enciende sola al poner la marcha atrás. Sirve para ver lo que hay detrás y para avisar a los demás de que vas a retroceder. No es una luz de cruce." },
        { tipo: "p", texto: "**Emergencia (warning).** Son los cuatro intermitentes a la vez. Se usan para avisar de un **peligro** en la vía: tras una avería o un accidente, o cuando circulas a muy poca velocidad por una causa justificada y puedes ser alcanzado por detrás." },
        { tipo: "aviso", texto: "**Trampa:** los warning no sirven para aparcar en doble fila ni para dar las gracias al de detrás. Tras una avería, además, hay que colocar la baliza V-16." },
        { tipo: "p", texto: "**Luces diurnas (DRL).** Muchos coches nuevos las encienden solas al arrancar. Sirven para que te vean de día, pero no iluminan la calzada y normalmente no encienden las luces traseras. De noche o con poca visibilidad no bastan: necesitas las de cruce." },
        { tipo: "clave", texto: "**En las motos, la luz de cruce va encendida también de día.**" },
        { tipo: "p", texto: "En los **carriles reversibles** y en los **carriles adicionales** (los que se abren de forma temporal en carreteras de dos sentidos), la luz de cruce es obligatoria aunque sea de día. Lo verás con detalle en la lección de carriles." },
        { tipo: "quiz", pregunta: "Hay niebla espesa y solo ves unos 30 metros. ¿Qué combinación de luces es la adecuada?", opciones: ["Solo las de carretera, para ver más lejos", "Solo las de posición, para que te vean", "Las de cruce y la antiniebla delantera"], correcta: 2, explicacion: "Con niebla espesa, la antiniebla delantera te ayuda a verte, pero siempre junto a las de cruce. Las de carretera deslumbran, porque la niebla devuelve la luz hacia tus ojos." },
        { tipo: "quiz", pregunta: "¿Cuándo puedes encender la antiniebla trasera?", opciones: ["Siempre que llueva", "Cuando la visibilidad sea inferior a 50 metros", "Cuando vas detrás de otro coche de noche"], correcta: 1, explicacion: "La regla que hay que recordar: la antiniebla trasera solo se usa cuando la visibilidad es inferior a 50 metros. Con lluvia normal o buena visibilidad, no." }
      ]
    },
    {
      id: "alumbrado-claxon-chaleco",
      titulo: "Claxon, ráfagas, chaleco y baliza V-16",
      minutos: 6,
      contenido: [
        { tipo: "p", texto: "Cuando hay un problema en la vía, tu coche tiene que avisar a los demás y tú tienes que protegerte. Para eso están el claxon, las ráfagas, el chaleco y la baliza V-16, y cada uno tiene sus normas." },
        { tipo: "clave", texto: "**El claxon solo se usa para evitar un accidente o un peligro.** No sirve para meter prisa, insultar ni saludar." },
        { tipo: "lista", items: [
            "Para evitar un accidente o un peligro real",
            "Fuera de poblado, para avisar a otro conductor de que vas a adelantarle",
            "Dentro de poblado, solo en caso de peligro inminente"
        ] },
        { tipo: "aviso", texto: "**Dentro de poblado, el claxon está prohibido salvo emergencia.** Meter prisa en un atasco, al que tarda en arrancar cuando se pone en verde o en una glorieta, o saludar a un conocido son infracciones. Un toque largo o repetido también puede sancionarse, incluso fuera de poblado." },
        { tipo: "senal", forma: "circulo-rojo", simbolo: "📯", nombre: "Prohibido tocar el claxon", descripcion: "En ese tramo no puedes usar el claxon, salvo para evitar un accidente. Suele colocarse cerca de centros sanitarios o residencias." },
        { tipo: "p", texto: "**Ráfagas.** Un destello corto con las luces de carretera sirve para avisar de tu presencia o para indicar que vas a adelantar, sobre todo de noche. No es una forma de presionar al de delante ni de insistir en que se aparte." },
        { tipo: "p", texto: "**Chaleco reflectante.** Si tienes que bajar del coche en una vía **interurbana** (fuera de poblado), ponte el chaleco **antes** de salir. Debe ir en el habitáculo, al alcance del conductor, y no en el maletero: si estuviera ahí, tendrías que salir al arcén para cogerlo." },
        { tipo: "truco", texto: "**«Primero me pongo, luego salgo».** Esa frase resume la norma del chaleco." },
        { tipo: "p", texto: "**Baliza V-16 conectada.** Desde el **1 de enero de 2026** es obligatoria y **sustituye a los triángulos** para avisar de un coche parado por avería o accidente. Se coloca en el techo, en un lugar visible, y se activa. Al estar conectada, comunica tu posición en tiempo real a la DGT." },
        { tipo: "clave", texto: "**Desde 2026, el triángulo ya no basta.** En España, la señal obligatoria para un coche averiado es la baliza V-16 conectada." },
        { tipo: "aviso", texto: "**La V-16 no sustituye al chaleco.** La baliza avisa a los demás de que el coche está parado; el chaleco te protege a ti cuando sales del coche. Necesitas las dos cosas." },
        { tipo: "quiz", pregunta: "Estás fuera de poblado, tienes una avería y vas a bajar del coche a revisarlo. ¿Qué te pones antes de salir?", opciones: ["Nada, si te quedas cerca del coche", "El chaleco reflectante", "Solo la baliza V-16, en la mano"], correcta: 1, explicacion: "Al bajar del coche en una vía interurbana, el chaleco reflectante es obligatorio. La V-16 señaliza el coche parado; el chaleco te hace visible a ti." },
        { tipo: "quiz", pregunta: "¿Dónde debe ir el chaleco reflectante?", opciones: ["En el maletero, bien guardado", "En el habitáculo, al alcance del conductor", "Da igual, con que esté en el coche basta"], correcta: 1, explicacion: "Debe ir en el habitáculo para cogerlo sin tener que salir al arcén. Guardarlo en el maletero es un error frecuente." }
      ]
    },
    {
      id: "alumbrado-autopistas",
      titulo: "Autopistas y autovías",
      minutos: 8,
      contenido: [
        { tipo: "p", texto: "Las autopistas y autovías son vías rápidas con normas propias. Se circula a más velocidad, no hay cruces y casi no se puede parar. Conocer estas reglas evita muchos accidentes graves." },
        { tipo: "lista", items: [
            "Peatones y animales",
            "Bicicletas, que no pueden ir por la calzada",
            "Ciclomotores",
            "Vehículos de tracción animal y vehículos de movilidad personal, como los patinetes",
            "Tractores y maquinaria agrícola, salvo excepciones"
        ] },
        { tipo: "clave", texto: "**Las motos sí pueden circular por autopistas y autovías.** Lo que no pueden es el ciclomotor." },
        { tipo: "p", texto: "**Velocidad mínima:** no puedes circular por debajo de **60 km/h** en autopistas y autovías sin una causa justificada, como un atasco o un incidente en la vía." },
        { tipo: "tabla", cabecera: ["Tipo de vía (turismos)", "Velocidad máxima general"], filas: [
            ["Autopista o autovía", "120 km/h"],
            ["Carretera convencional fuera de poblado", "90 km/h"],
            ["Poblado", "50 km/h"]
        ] },
        { tipo: "p", texto: "**Incorporarte.** Entra por el carril de aceleración, adapta tu velocidad y busca un hueco. Quien se incorpora **cede el paso** a quien ya circula por la autovía." },
        { tipo: "aviso", texto: "**Trampa:** no te pares en el carril de aceleración a esperar el hueco, ni lo uses para circular a muy poca velocidad. Si no hay sitio, ajusta tu velocidad y espera a que se abra un hueco." },
        { tipo: "p", texto: "**Carril izquierdo.** En autopistas y autovías con varios carriles, circula por el **carril más a la derecha** que puedas. El carril izquierdo es **solo para adelantar**, y adelantar por la derecha está prohibido en general. Cuando termines de adelantar, vuelve a tu carril." },
        { tipo: "p", texto: "**Parar.** En autopistas y autovías solo puedes parar en el arcén en caso de **emergencia**: avería, accidente, malestar o porque lo ordene la autoridad. No puedes parar para descansar, mirar algo o esperar a alguien." },
        { tipo: "p", texto: "**Si te averías en autopista, sigue este orden:**" },
        { tipo: "lista", items: [
            "Enciende las luces de emergencia (warning)",
            "Ponte el chaleco reflectante antes de salir",
            "Coloca la baliza V-16 en el techo del coche",
            "Sal por el lado derecho, lejos del tráfico, y colócate detrás de la barrera de protección si la hay",
            "Avisa al 112 o usa los teléfonos de emergencia (SOS) de la vía"
        ] },
        { tipo: "senal", forma: "circulo-rojo", simbolo: "🚲", nombre: "Prohibido el paso de bicicletas", descripcion: "Indica que las bicicletas no pueden entrar en ese tramo. Recuerda que tampoco pueden ir por la calzada de autopistas ni autovías." },
        { tipo: "quiz", pregunta: "¿Cuál es la velocidad mínima en autopistas y autovías, salvo causa justificada?", opciones: ["40 km/h", "60 km/h", "80 km/h"], correcta: 1, explicacion: "La velocidad mínima es 60 km/h. En un atasco o ante un incidente sí puedes ir más despacio, porque hay causa justificada." },
        { tipo: "quiz", pregunta: "¿Puede un motorista circular por una autovía?", opciones: ["No, solo pueden coches y camiones", "Sí, las motos pueden circular por autopistas y autovías", "Solo si va a menos de 60 km/h"], correcta: 1, explicacion: "Las motos sí pueden. Lo que no pueden son los ciclomotores, las bicicletas y los peatones." }
      ]
    },
    {
      id: "alumbrado-tuneles",
      titulo: "Túneles",
      minutos: 6,
      contenido: [
        { tipo: "p", texto: "Un túnel es un tramo cerrado donde la visibilidad cambia de golpe y, si pasa algo, no hay salidas fáciles. Por eso tiene reglas propias, que caen mucho en el examen." },
        { tipo: "senal", forma: "cuadrado-azul", simbolo: "🚇", nombre: "S-5 Túnel", descripcion: "Avisa de que entras en un túnel. A partir de ahí, las luces de cruce van encendidas, no puedes cambiar de sentido y, en general, tampoco adelantar." },
        { tipo: "clave", texto: "**Dentro de un túnel, las luces de cruce van encendidas siempre**, de día y de noche, aunque el túnel sea corto." },
        { tipo: "aviso", texto: "**Las luces de día no bastan.** Iluminan solo hacia delante y no marcan tu coche por detrás. En un túnel, usa siempre las de cruce." },
        { tipo: "lista", items: [
            "Cambiar de sentido, salvo en un punto habilitado",
            "Dar la vuelta o dar marcha atrás",
            "Parar o estacionar, salvo emergencia",
            "Adelantar, en general"
        ] },
        { tipo: "p", texto: "**Distancia.** La visibilidad en un túnel es menor y, si el de delante frena de golpe, no tienes mucho margen. Mantén una distancia de seguridad amplia y no te pegues al vehículo que te precede." },
        { tipo: "p", texto: "**Avería dentro del túnel.** Enciende las luces de emergencia. Si el coche puede seguir y la salida está cerca, sal del túnel. Si no puedes, para en el arcén derecho lo más junto posible a la pared, ponte el chaleco, coloca la V-16 y usa los teléfonos de emergencia del túnel o llama al 112." },
        { tipo: "aviso", texto: "**Incendio en el túnel:** no intentes apagar el fuego ni recoger nada. Sal del coche, aléjate por la salida de emergencia señalizada más cercana y avisa al 112 o usa los teléfonos del túnel." },
        { tipo: "truco", texto: "**Antes de entrar, comprueba tres cosas:** luces de cruce encendidas, distancia amplia y ninguna intención de cambiar de sentido o de adelantar." },
        { tipo: "quiz", pregunta: "Estás dentro de un túnel y el coche se avería. ¿Qué haces primero?", opciones: ["Dar la vuelta para volver a la entrada", "Encender las luces de emergencia y avisar al 112 o usar los teléfonos del túnel", "Empujar el coche hasta la salida"], correcta: 1, explicacion: "Dar la vuelta, dar marcha atrás o parar sin motivo están prohibidos en un túnel. Lo primero es señalizar el coche, ponerte a salvo y pedir ayuda." },
        { tipo: "quiz", pregunta: "¿Puedes cambiar de sentido dentro de un túnel?", opciones: ["Sí, si no hay tráfico", "No, salvo que haya un punto habilitado para ello", "Sí, si la señal de túnel no lo prohíbe"], correcta: 1, explicacion: "El cambio de sentido está prohibido en túneles, y también en autopistas y autovías, salvo en los puntos habilitados. Que no haya tráfico no te da permiso." }
      ]
    },
    {
      id: "alumbrado-carriles",
      titulo: "Carriles reversibles, adicionales y VAO",
      minutos: 7,
      contenido: [
        { tipo: "p", texto: "Algunas vías cambian según la hora o la necesidad: un carril cambia de sentido, aparece un carril extra o se reserva para ciertos vehículos. Tienes que saber leer las señales luminosas y los paneles." },
        { tipo: "p", texto: "**Carril reversible.** Es un carril cuyo sentido de circulación cambia según la hora, por ejemplo para absorber el tráfico de entrada a la ciudad por la mañana y el de salida por la tarde. Se controla con **señales luminosas** colocadas encima de cada carril." },
        { tipo: "senal", forma: "rectangulo-verde", simbolo: "↓", nombre: "Flecha verde", descripcion: "El carril está abierto en ese sentido: puedes circular por él, siguiendo siempre las demás señales." },
        { tipo: "senal", forma: "circulo-rojo", simbolo: "X", nombre: "Aspa roja", descripcion: "Carril cerrado para tu sentido: no puedes entrar en él. Si ya estás dentro, sal en cuanto puedas y sin poner en peligro a nadie." },
        { tipo: "lista", items: [
            "Flecha verde hacia abajo: puedes circular por ese carril",
            "Aspa roja: no puedes entrar en ese carril",
            "Flecha amarilla o ámbar inclinada hacia abajo: el carril se va a cerrar. Cámbiate de carril con antelación y con cuidado"
        ] },
        { tipo: "aviso", texto: "**Trampa:** la flecha verde no te exime del semáforo ni de las indicaciones de los agentes. Si el semáforo está en rojo, paras. Y las indicaciones de la policía mandan sobre cualquier señal del carril." },
        { tipo: "p", texto: "En los carriles reversibles, la luz de cruce va encendida también de día." },
        { tipo: "p", texto: "**Carril adicional circunstancial.** Es un carril extra que se abre de forma temporal en una carretera de dos sentidos, por ejemplo en salidas y regresos de vacaciones. Se señaliza con balizas y señales, y el sentido que lo necesita pasa a tener dos carriles mientras el otro conserva uno." },
        { tipo: "aviso", texto: "En ese tramo está **prohibido adelantar y cambiar de carril**. Hay que respetar la velocidad que indique la señalización, y las luces de cruce van encendidas de día y de noche." },
        { tipo: "p", texto: "**Carril VAO (vehículos de alta ocupación).** Está reservado a vehículos con un número mínimo de ocupantes, normalmente **dos o más, contando al conductor**. Un panel indica el mínimo que se exige en ese tramo. Las motos, el transporte público y los taxis suelen tener acceso según la señal." },
        { tipo: "aviso", texto: "**Ojo con la etiqueta ecológica.** Un coche eléctrico o híbrido con etiqueta 0 o ECO no siempre puede ir solo por el VAO. Depende del tramo y de lo que indique el panel de cada acceso, y la norma ha cambiado en los últimos años. Mira siempre el panel antes de entrar." },
        { tipo: "quiz", pregunta: "Vas solo en tu coche y ves un carril VAO con el requisito de dos ocupantes. ¿Puedes entrar?", opciones: ["Sí, siempre que sea de día", "No, salvo que el panel del tramo diga otra cosa", "Sí, porque el VAO es un carril libre"], correcta: 1, explicacion: "El VAO exige el número mínimo de ocupantes que marque el panel. Entrar solo sin cumplirlo es una infracción, salvo las excepciones que indique la señalización." },
        { tipo: "quiz", pregunta: "Un carril reversible tiene una aspa roja encima. ¿Qué significa?", opciones: ["Que el carril está cerrado para tu sentido", "Que puedes adelantar sin problema", "Que el carril es solo para bicicletas"], correcta: 0, explicacion: "El aspa roja indica que no puedes entrar en ese carril para tu sentido de marcha. Si ya estás dentro, sal en cuanto puedas." }
      ]
    }
  ]
});
