window.TEMARIO = window.TEMARIO || [];
window.TEMARIO.push({
  id: "senales",
  orden: 3,
  titulo: "Señales: agentes, semáforos, verticales y marcas viales",
  icono: "🚦",
  color: "#e63946",
  resumen: "Qué manda en cada momento y cómo reconocer cada señal por su forma, su color y su código.",
  lecciones: [
    {
      id: "senales-jerarquia",
      titulo: "Jerarquía de las señales y señales de obras",
      minutos: 7,
      contenido: [
        { tipo: "p", texto: "En la carretera pueden darte órdenes **distintas** a la vez: un agente te hace un gesto, el semáforo está en verde, una señal dice otra cosa y el suelo tiene una raya pintada. Para no liarte, el reglamento fija un **orden de preferencia**. Lo que está más arriba manda sobre lo que está más abajo." },
        { tipo: "lista", items: [
            "**1.º Agentes de circulación** (policía, Guardia Civil, agentes de tráfico): sus gestos, su linterna y su silbato.",
            "**2.º Señales circunstanciales y de balizamiento**: obras, desvíos, conos, balizas y paneles de mensaje variable.",
            "**3.º Semáforos**.",
            "**4.º Señales verticales**: las de los postes (triángulos, círculos, cuadrados y octógonos).",
            "**5.º Marcas viales**: las líneas y símbolos pintados en el asfalto."
        ] },
        { tipo: "truco", texto: "Imagina una pirámide: arriba, la persona que está en la calle; abajo, lo que está pintado en el suelo. Cuanto más arriba esté quien te da la orden, más manda." },
        { tipo: "clave", texto: "Si una **orden de agente** choca con un **semáforo**, **manda el agente**. Si una **señal de obras** choca con una **señal fija** o con una **marca vial**, **manda la de obras**. Si un semáforo choca con una señal vertical, **manda el semáforo**." },
        { tipo: "aviso", texto: "Una marca pintada en el suelo **nunca** anula un semáforo ni una señal vertical. Y si un agente te hace parar con el semáforo en verde, **paras**." },
        { tipo: "p", texto: "**Las señales de obras** avisan de cambios temporales: obras, carriles cortados y desvíos. Suelen tener fondo **amarillo** (o naranja). Mientras duran las obras, mandan sobre las señales fijas de esa carretera." },
        { tipo: "senal", forma: "panel-amarillo", simbolo: "↱", nombre: "Desvío por obras", descripcion: "Te indica el camino alternativo que debes seguir mientras duran las obras, aunque tu trazado habitual sea otro." },
        { tipo: "senal", forma: "panel-amarillo", simbolo: "✖", nombre: "Carril cerrado por obras", descripcion: "Ese carril no se puede usar. Cámbiate con antelación al carril libre que te indiquen." },
        { tipo: "senal", forma: "panel-amarillo", simbolo: "↘", nombre: "Carril que se cierra", descripcion: "El carril por el que circulas se acaba. Incorpórate al carril contiguo antes de llegar al final." },
        { tipo: "quiz", pregunta: "Un agente te indica que sigas, pero el semáforo está en rojo. ¿Qué haces?", opciones: ["Espero al verde, porque el semáforo manda más", "Obedezco al agente y sigo la marcha", "Paro igualmente, porque el rojo siempre manda"], correcta: 1, explicacion: "Las órdenes de los agentes tienen la máxima preferencia y anulan a los semáforos. Por eso debes obedecer al agente." }
      ]
    },
    {
      id: "senales-agentes",
      titulo: "Señales de los agentes de circulación",
      minutos: 8,
      contenido: [
        { tipo: "p", texto: "Los agentes de circulación pueden dirigir el tráfico con el cuerpo, con una linterna o con un silbato. **Sus órdenes mandan sobre cualquier otra señal**, también sobre los semáforos. Cuando hay un agente, lo que te indique es lo que cuenta." },
        { tipo: "tabla", cabecera: ["Señal del agente", "Qué significa", "Quién debe parar"], filas: [
            ["Brazo levantado en vertical", "Alto", "Todos los que se acercan al agente (salvo quien no pueda parar con seguridad o ya esté dentro del cruce)"],
            ["Brazos extendidos en horizontal", "Alto", "Los que llegan por una dirección que cruza la línea de los brazos, vayan a donde vayan"],
            ["Linterna roja o amarilla en movimiento de vaivén", "Alto", "El conductor al que apunta la luz"],
            ["Brazo que sube y baja de forma alterna", "Reduce la velocidad", "Los que se acercan por ese costado, en ángulo recto con el brazo"],
            ["Pitidos cortos y repetidos del silbato", "Alto", "Todos los vehículos que lo oyen"],
            ["Un pitido largo", "Puedes volver a circular", "Quien estaba parado"]
        ] },
        { tipo: "lista", items: [
            "**Brazo levantado**: detente en la línea de detención más próxima o, si no la hay, justo antes del agente. En un cruce, para antes de entrar en él.",
            "**Brazos extendidos**: si el agente los baja, la orden sigue valiendo mientras no cambie de postura ni dé otra señal.",
            "Quien ya está dentro del cruce cuando el agente levanta el brazo **no está obligado** a parar."
        ] },
        { tipo: "clave", texto: "**Lo que dice el agente manda sobre el semáforo**. Si el semáforo está en verde pero el agente te hace parar, paras. Si está en rojo pero el agente te indica que pases, pasas. En un cruce, el brazo extendido anula incluso un semáforo en rojo." },
        { tipo: "truco", texto: "«Brazo arriba, todos paran». Y con el silbato: pitidos cortos y repetidos = para; un pitido largo = puedes seguir." },
        { tipo: "aviso", texto: "No confundas el **brazo levantado** (alto para quien se acerca) con los **brazos extendidos** (alto para quien llega cruzando esa línea). En el examen, fíjate bien en la posición que tiene el agente." },
        { tipo: "quiz", pregunta: "Un agente levanta un brazo en vertical hacia tu vehículo. ¿Qué debes hacer?", opciones: ["Seguir la marcha, porque el agente solo avisa", "Detenerte antes de la línea de detención o justo antes del agente", "Acelerar para salir del cruce cuanto antes"], correcta: 1, explicacion: "Con el brazo levantado debes detenerte en la línea de detención o justo antes del agente. Solo se excusa quien no puede parar con seguridad o quien ya está dentro del cruce." }
      ]
    },
    {
      id: "senales-semaforos",
      titulo: "Semáforos: luces, flechas, carriles, peatones y ciclistas",
      minutos: 8,
      contenido: [
        { tipo: "p", texto: "Los semáforos regulan el paso con luces. Hay semáforos **circulares** (los clásicos), de **flechas**, de **carril** (uno por cada carril, con forma cuadrada) y para **peatones** y **ciclistas**." },
        { tipo: "tabla", cabecera: ["Luz", "Qué significa", "Qué haces"], filas: [
            ["Verde fija", "Paso permitido, con prioridad", "Avanzas, pero no entras si vas a quedarte atrapado en el cruce"],
            ["Ámbar fija", "Como el rojo: hay que parar", "Paras, salvo que estés tan cerca que no puedas frenar con seguridad"],
            ["Roja fija", "Prohibido pasar", "Paras antes del semáforo y de la línea de detención"],
            ["Ámbar intermitente", "Precaución", "Avanzas con cuidado y cedes el paso a quien viene por la vía transversal"],
            ["Roja intermitente", "Prohibición temporal de paso", "No pasas; por ejemplo, ante un paso a nivel o la entrada de un puente móvil"]
        ] },
        { tipo: "clave", texto: "**Ámbar fijo = rojo**. Solo puedes pasar con ámbar fijo si ya no puedes frenar con seguridad." },
        { tipo: "lista", items: [
            "**Flecha verde sobre fondo negro**: puedes tomar la dirección de la flecha aunque la luz principal esté en rojo. Respeta a peatones y al resto del tráfico.",
            "**Flecha negra** sobre una luz roja o ámbar fija: la luz no cambia, pero solo te deja hacer el movimiento que indica la flecha."
        ] },
        { tipo: "lista", items: [
            "**Aspa roja** (una X luminosa): el carril está cerrado. Sal de él cuanto antes.",
            "**Flecha verde hacia abajo**: el carril está abierto y puedes circular por él.",
            "**Flecha amarilla (o blanca) inclinada**: tu carril se va a cerrar. Cámbiate al carril al que apunta la flecha."
        ] },
        { tipo: "lista", items: [
            "**Peatón verde fijo** (figura andando): pueden empezar a cruzar. Si la luz parpadea, la roja está a punto de encenderse.",
            "**Peatón rojo fijo** (figura parada): no se debe empezar a cruzar.",
            "**Silueta de bicicleta iluminada**: esa indicación es solo para bicis y ciclomotores."
        ] },
        { tipo: "truco", texto: "En los semáforos de carril: **flecha verde = entra**, **aspa roja = sal**. En los redondos: la flecha negra limita el movimiento y la flecha verde sobre fondo negro lo permite." },
        { tipo: "aviso", texto: "Un semáforo redondo con **franja blanca** sobre fondo negro es para **tranvías y autobuses de línea**. Si tú no vas en uno de esos vehículos, no es para ti." },
        { tipo: "quiz", pregunta: "En un semáforo de carril ves una X roja sobre tu carril. ¿Qué significa?", opciones: ["El carril está cerrado y debes salir de él cuanto antes", "El carril es solo para bicicletas", "Puedes seguir si no hay coches delante"], correcta: 0, explicacion: "La X roja (aspa) prohíbe ocupar ese carril. Quien esté en él debe abandonarlo lo antes posible." }
      ]
    },
    {
      id: "senales-peligro",
      titulo: "Señales de peligro (triángulos P-)",
      minutos: 9,
      contenido: [
        { tipo: "p", texto: "Las señales de **peligro** son **triángulos** con borde rojo y fondo blanco. Avisan de algo que hay más adelante: un cruce, una curva, un paso de peatones, unas obras. **No te prohíben ni te obligan** a nada, pero sí te obligan a adaptar tu conducción: reducir, mirar y estar preparado." },
        { tipo: "clave", texto: "Un triángulo **avisa** de un peligro; no prohíbe ni obliga. Lo que prohíbe u obliga son las señales de **reglamentación** (círculos y octógonos), que verás en las dos lecciones siguientes." },
        { tipo: "senal", forma: "triangulo", simbolo: "+", nombre: "P-1 Intersección con prioridad", descripcion: "Hay un cruce más adelante en el que hay que saber quién tiene la prioridad. Mira a ambos lados y aplica la norma de prioridad." },
        { tipo: "senal", forma: "triangulo", simbolo: "🚦", nombre: "P-3 Semáforos", descripcion: "Hay semáforos más adelante. Prepárate para parar si están en rojo o en ámbar." },
        { tipo: "senal", forma: "triangulo", simbolo: "↻", nombre: "P-4 Intersección con circulación giratoria", descripcion: "Hay una glorieta (rotonda). Para entrar, cede el paso a quien ya circula por ella." },
        { tipo: "senal", forma: "triangulo", simbolo: "🚆", nombre: "P-7 Paso a nivel con barreras", descripcion: "La carretera cruza una vía de tren con barreras. Si las barreras están bajando o cerradas, no pases." },
        { tipo: "senal", forma: "triangulo", simbolo: "↱", nombre: "P-13a Curva peligrosa hacia la derecha", descripcion: "Hay una curva pronunciada hacia la derecha. Reduce antes de entrar, no a mitad de la curva." },
        { tipo: "senal", forma: "triangulo", simbolo: "⌒", nombre: "P-15 Perfil irregular", descripcion: "Hay un resalto, un badén o un firme en mal estado. Reduce: un badén mal tomado puede hacerte perder el control." },
        { tipo: "senal", forma: "triangulo", simbolo: "🚧", nombre: "P-18 Obras", descripcion: "Hay obras en la vía. Reduce y sigue las señales amarillas de obra, que mandan más que las normales." },
        { tipo: "senal", forma: "triangulo", simbolo: "🚶", nombre: "P-20a Paso para peatones", descripcion: "Hay uno o varios pasos de peatones más adelante. Si alguien cruza, cede el paso." },
        { tipo: "senal", forma: "triangulo", simbolo: "🚸", nombre: "P-21a Niños", descripcion: "Hay un lugar frecuentado por niños, como un colegio o un parque. Reduce y ten cuidado con las salidas inesperadas." },
        { tipo: "senal", forma: "triangulo", simbolo: "🚲", nombre: "P-22a Paso para ciclistas", descripcion: "Hay un cruce de bicicletas. Cede el paso a quien cruza en bici." },
        { tipo: "aviso", texto: "Trampa típica: pensar que un triángulo **prohíbe** algo. Un triángulo solo avisa. Si ves un límite de velocidad o una prohibición, comprueba que la señal sea un círculo o un octógono." },
        { tipo: "quiz", pregunta: "¿Qué forma tienen las señales de peligro?", opciones: ["Círculos con borde rojo", "Triángulos con borde rojo y fondo blanco", "Cuadrados azules"], correcta: 1, explicacion: "Las señales de peligro son triángulos con borde rojo y fondo blanco. Avisan de algo que hay más adelante." }
      ]
    },
    {
      id: "senales-prohibicion",
      titulo: "Reglamentación: prioridad y prohibiciones (R-)",
      minutos: 10,
      contenido: [
        { tipo: "p", texto: "Las señales de **reglamentación** (código R-) te **obligan** o te **prohíben** algo. Son las más importantes del examen. Se reconocen por la forma: el **octógono** es el STOP, el **triángulo invertido** es el ceda el paso y el **círculo rojo** prohíbe." },
        { tipo: "lista", items: [
            "**R-1 Ceda el paso**: cede el paso a los vehículos que circulan por la vía a la que te incorporas o cruzas. Solo te detienes si es necesario.",
            "**R-2 STOP**: te detienes del todo en la línea de detención (o justo antes del cruce) y solo después cedes el paso."
        ] },
        { tipo: "senal", forma: "triangulo-invertido", simbolo: "", nombre: "R-1 Ceda el paso", descripcion: "Debes ceder el paso a los vehículos que circulan por la vía a la que te incorporas o cruzas." },
        { tipo: "senal", forma: "octogono", simbolo: "STOP", nombre: "R-2 STOP", descripcion: "Parada obligatoria: te detienes del todo y solo después cedes el paso." },
        { tipo: "senal", forma: "circulo-rojo", simbolo: "", nombre: "R-100 Circulación prohibida", descripcion: "Ningún vehículo puede circular por esa vía, en ningún sentido." },
        { tipo: "senal", forma: "circulo-rojo-lleno", simbolo: "—", nombre: "R-101 Entrada prohibida (sentido prohibido)", descripcion: "Prohibido entrar por esa calle. Si la ves de frente, vas en sentido contrario." },
        { tipo: "senal", forma: "circulo-rojo", simbolo: "🚗", nombre: "R-102 Entrada prohibida a vehículos de motor", descripcion: "Los vehículos de motor no pueden entrar. Las bicicletas y los peatones sí pueden." },
        { tipo: "senal", forma: "circulo-rojo", simbolo: "50", nombre: "R-301 Velocidad máxima", descripcion: "Límite de velocidad: no puedes superar esa cifra en km/h en el tramo indicado." },
        { tipo: "senal", forma: "circulo-rojo", simbolo: "↱", nombre: "R-302 Giro a la derecha prohibido", descripcion: "No puedes girar a la derecha en ese cruce." },
        { tipo: "senal", forma: "circulo-rojo", simbolo: "🚗", nombre: "R-305 Adelantamiento prohibido", descripcion: "No puedes adelantar a ningún vehículo en el tramo señalizado." },
        { tipo: "senal", forma: "circulo-rojo", simbolo: "🚛", nombre: "R-306 Adelantamiento prohibido para camiones", descripcion: "Los camiones de más de 3.500 kg no pueden adelantar. Los turismos sí." },
        { tipo: "clave", texto: "**La R-301 sigue valiendo** hasta que aparezca su señal de fin (R-501) o una nueva limitación. No caduca en el siguiente cruce." },
        { tipo: "aviso", texto: "Trampa: la **R-100** no deja pasar a nadie, pero la **R-102** deja pasar a bicicletas y peatones. Fíjate siempre en el símbolo del centro." },
        { tipo: "quiz", pregunta: "¿Qué significa una señal R-301 con el número 50?", opciones: ["Velocidad mínima de 50 km/h", "Velocidad máxima de 50 km/h", "Velocidad aconsejada de 50 km/h"], correcta: 1, explicacion: "La R-301 es una velocidad máxima obligatoria. Es un límite, no una recomendación ni un mínimo." }
      ]
    },
    {
      id: "senales-obligacion",
      titulo: "Obligación, fin de prohibiciones e indicación (S-)",
      minutos: 9,
      contenido: [
        { tipo: "p", texto: "Las señales **azules redondas** (R-400 y siguientes) te **obligan** a hacer algo. Las señales de **fin** (círculo blanco con banda gris) **anulan** una prohibición o una limitación. Y las **cuadradas azules** (código S-) son de **indicación**: informan, orientan o señalan servicios." },
        { tipo: "clave", texto: "Para no equivocarte, recuerda los colores: **rojo = prohibición**, **azul redondo = obligación**, **blanco con banda gris = fin**, **azul cuadrado = información**." },
        { tipo: "senal", forma: "circulo-azul", simbolo: "↑", nombre: "R-400 Sentido obligatorio", descripcion: "La flecha marca la única dirección que puedes tomar. Hay que seguirla." },
        { tipo: "senal", forma: "circulo-azul", simbolo: "↑↰", nombre: "R-403 Únicas direcciones permitidas", descripcion: "Solo puedes seguir en las direcciones que indican las flechas." },
        { tipo: "senal", forma: "circulo-azul", simbolo: "🚲", nombre: "R-407a Vía reservada y obligatoria para ciclos", descripcion: "Ese carril es solo para bicicletas. Si eres ciclista, estás obligado a usarlo." },
        { tipo: "senal", forma: "circulo-azul", simbolo: "🚶", nombre: "R-410 Camino reservado para peatones", descripcion: "Solo pueden usar ese camino los peatones." },
        { tipo: "senal", forma: "circulo-azul", simbolo: "60", nombre: "R-411 Velocidad mínima", descripcion: "Debes circular al menos a 60 km/h. Ir más despacio es infracción." },
        { tipo: "senal", forma: "fin", simbolo: "50", nombre: "R-501 Fin de la limitación de velocidad", descripcion: "Termina la limitación de velocidad de 50 km/h que venía de atrás." },
        { tipo: "senal", forma: "fin", simbolo: "🚗", nombre: "R-502 Fin de la prohibición de adelantamiento", descripcion: "A partir de aquí puedes adelantar, siempre que sea seguro y la vía lo permita." },
        { tipo: "senal", forma: "cuadrado-azul", simbolo: "70", nombre: "S-7 Velocidad máxima aconsejable", descripcion: "Es una recomendación de velocidad, no una obligación. Pero ir por encima de ella no es seguro." },
        { tipo: "senal", forma: "cuadrado-azul", simbolo: "P", nombre: "S-17 Estacionamiento", descripcion: "Zona donde puedes estacionar, respetando las condiciones que marque la señalización." },
        { tipo: "senal", forma: "cuadrado-azul", simbolo: "🚌", nombre: "S-19 Parada de autobuses", descripcion: "Hay una parada de autobús. Respétala: no aparques en ella." },
        { tipo: "aviso", texto: "Trampa: la **S-7** (cuadrada y azul) es una velocidad **aconsejada**; la **R-411** (redonda y azul) es una velocidad mínima **obligatoria**. No las confundas." },
        { tipo: "quiz", pregunta: "¿Qué tipo de señal es la R-411 con el número 60?", opciones: ["Velocidad aconsejada, solo es una recomendación", "Velocidad mínima obligatoria de 60 km/h", "Velocidad máxima de 60 km/h"], correcta: 1, explicacion: "La R-411 es un círculo azul: obliga a circular al menos a 60 km/h." }
      ]
    },
    {
      id: "senales-marcas",
      titulo: "Marcas viales y paneles de mensaje variable",
      minutos: 9,
      contenido: [
        { tipo: "p", texto: "Las **marcas viales** son las líneas, flechas y símbolos pintados en el suelo. Están al final de la jerarquía, pero **son obligatorias** igual que las señales." },
        { tipo: "tabla", cabecera: ["Marca", "Qué significa", "Qué haces"], filas: [
            ["Línea continua que separa sentidos o carriles", "No se puede cruzar ni pisar", "No la cruzas ni la pisas; sigues en tu carril"],
            ["Línea discontinua que separa carriles", "Separa carriles del mismo sentido", "La cruzas solo si es necesario y seguro, por ejemplo para cambiar de carril o adelantar"],
            ["Doble línea discontinua", "Carril reversible (puede usarse en los dos sentidos)", "Circulas según lo que marque la señalización de ese carril"],
            ["Línea de borde de la calzada", "Marca el límite de la calzada, para verla mejor", "El arcén no es un carril de circulación normal"],
            ["Cebreado (rayas oblicuas dentro de un borde)", "Zona de seguridad", "No entras con el vehículo"],
            ["Línea de detención continua (transversal)", "Parada obligatoria", "Te paras antes de la línea si hay un stop, un paso de peatones, un semáforo o un agente que lo exija"],
            ["Línea de detención discontinua (transversal)", "Ceder el paso", "Cedes el paso a los vehículos que tienen prioridad"],
            ["Triángulo blanco pintado en el suelo", "Ceda el paso", "Cedes el paso en el próximo cruce"],
            ["Bandas blancas paralelas (paso de peatones)", "Paso para peatones", "Cedes el paso a los peatones"]
        ] },
        { tipo: "lista", items: [
            "**Flecha de selección de carril**: si circulas por ese carril, sigue la dirección de la flecha o cambia de carril.",
            "**Flecha de salida**: indica en qué carril hay que colocarse para tomar una salida.",
            "**Flecha de fin de carril**: el carril se acaba. Incorpórate al carril de al lado."
        ] },
        { tipo: "clave", texto: "**Línea continua = no la cruces. Línea discontinua = puedes cruzarla si es necesario y seguro.** Es la regla que más preguntas genera en el examen." },
        { tipo: "truco", texto: "«La continua manda; la discontinua aconseja». Si la línea es continua, no la toques. Si es discontinua, úsala solo cuando sea necesario y no haya peligro." },
        { tipo: "lista", items: [
            "**Amarilla en zigzag**: prohibido aparcar en zonas reservadas, como paradas de autobús o zonas de carga y descarga.",
            "**Amarilla continua junto a la acera**: prohibido parar y aparcar en toda su longitud.",
            "**Amarilla discontinua junto a la acera**: prohibido aparcar en toda su longitud, en el lado pintado.",
            "**Cuadrícula amarilla** en un cruce: no entres si puedes quedarte atrapado dentro, aunque tengas prioridad.",
            "**Marcas azules**: estacionamiento limitado en el tiempo. Hay que mostrar el ticket con la hora de inicio.",
            "**Blanco y rojo en ajedrez**: zona de frenado de emergencia. Prohibido parar o aparcar."
        ] },
        { tipo: "aviso", texto: "Una marca amarilla **no te deja aparcar** aunque no haya coches a la vista. La prohibición no depende de que alguien esté vigilando." },
        { tipo: "p", texto: "Los **paneles de mensaje variable (PMV)** son paneles luminosos que cambian su mensaje: avisos de retención, de niebla o límites de velocidad temporales. Pertenecen a la **señalización circunstancial**: si indican algo de **obligado cumplimiento**, obligan mientras estén activos y **prevalecen** sobre las señales fijas." },
        { tipo: "clave", texto: "Si dos señales del **mismo tipo** dan órdenes distintas (por ejemplo, dos límites de velocidad), **sigue la más restrictiva**." },
        { tipo: "quiz", pregunta: "Hay una línea continua blanca en el centro del carril y quieres adelantar a un camión. ¿Qué haces?", opciones: ["La cruzo, porque el camión va muy despacio", "No la cruzo: una línea continua no se puede cruzar, ni siquiera para adelantar", "La cruzo si no viene nadie de frente"], correcta: 1, explicacion: "La línea continua no se puede cruzar. Solo podrías cruzarla si fuera discontinua y la maniobra fuera segura y necesaria." }
      ]
    }
  ]
});
