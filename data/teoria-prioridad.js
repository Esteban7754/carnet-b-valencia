window.TEMARIO = window.TEMARIO || [];
window.TEMARIO.push({
  id: "prioridad",
  orden: 5,
  titulo: "Prioridad de paso",
  icono: "🔀",
  color: "#ef476f",
  resumen: "Quién pasa primero en cruces, glorietas, tramos estrechos y pendientes, y cuándo debes ceder a peatones, ciclistas y animales.",
  lecciones: [
    {
      id: "prioridad-regla-derecha",
      titulo: "La regla de la derecha",
      minutos: 6,
      contenido: [
        { tipo: "p", texto: "Cuando dos vehículos llegan a un cruce **sin ninguna señal** (ni ceda el paso, ni stop, ni semáforo), tiene prioridad **el que viene por tu derecha**. Es la regla general de prioridad de paso." },
        { tipo: "clave", texto: "Sin señales, cedes el paso a quien viene por tu **derecha**. Si el otro viene por tu izquierda, el paso es tuyo." },
        { tipo: "truco", texto: "Antes de entrar en un cruce sin señales, **mira a tu derecha**. Lo que viene de ese lado es lo que tienes que dejar pasar." },
        { tipo: "p", texto: "La regla de la derecha tiene **excepciones**, recogidas en el artículo 57 del Reglamento General de Circulación. Son las que más se preguntan en el examen:" },
        { tipo: "lista", items: [
          "**Vía pavimentada** frente a vía sin pavimentar: gana la asfaltada, aunque el otro venga por la derecha.",
          "**Vehículos que circulan por raíles** (tranvías): tienen preferencia aunque el otro venga por la derecha.",
          "**Glorietas**: quien ya circula por la glorieta tiene preferencia, y el que entra debe ceder.",
          "**Acceso a autopista o autovía**: quien circula por la autopista o autovía tiene preferencia frente a quien se incorpora desde un acceso."
        ] },
        { tipo: "p", texto: "**Ejemplo:** vas por una calle asfaltada y, en un cruce sin señales, un coche viene por tu derecha pero circula por una calle de tierra. Tienes preferencia tú, porque la tuya está pavimentada." },
        { tipo: "aviso", texto: "**Trampa habitual:** la regla de la derecha no manda cuando hay señal. Si hay un ceda el paso, un stop o un semáforo, manda la señal o el semáforo." },
        { tipo: "tabla", cabecera: ["Situación", "Quién tiene preferencia"], filas: [
          ["Dos coches en un cruce sin señales: uno por tu derecha y otro por tu izquierda", "El que viene por tu derecha"],
          ["Calle asfaltada frente a calle de tierra", "La calle asfaltada"],
          ["Tranvía frente a un coche", "El tranvía (raíles)"],
          ["Glorieta: el que entra frente al que ya circula dentro", "El que ya circula dentro"],
          ["Acceso a autopista frente a la autopista", "La autopista o autovía"]
        ] },
        { tipo: "quiz", pregunta: "En un cruce sin ninguna señal, un coche viene por tu izquierda y otro por tu derecha. ¿Quién tiene prioridad?", opciones: ["El que viene por tu izquierda, porque va más cerca", "El que viene por tu derecha", "El que llegue primero al centro del cruce"], correcta: 1, explicacion: "Sin señales, la regla general es ceder el paso al que viene por la derecha. Por eso tienes que dejarle pasar primero." }
      ]
    },
    {
      id: "prioridad-intersecciones-senales",
      titulo: "Intersecciones con señales",
      minutos: 8,
      contenido: [
        { tipo: "p", texto: "Las **señales de prioridad** mandan sobre la regla de la derecha. En un cruce señalizado, primero miras la señal y solo después piensas en la regla general." },
        { tipo: "senal", forma: "triangulo-invertido", simbolo: "", nombre: "R-1 Ceda el paso", descripcion: "Reduce la velocidad y detente si hace falta. Cede el paso a los vehículos de la vía a la que te acercas o a la que te incorporas. Si no viene nadie, puedes seguir sin parar del todo." },
        { tipo: "senal", forma: "octogono", simbolo: "STOP", nombre: "R-2 STOP", descripcion: "Parada obligatoria: te detienes del todo ante la línea de detención (o antes del cruce), aunque no veas a nadie, y luego cedes el paso a la vía preferente." },
        { tipo: "clave", texto: "**Ceda el paso** significa frenar si hace falta y ceder. **STOP** significa parar siempre del todo, aunque la calle esté libre." },
        { tipo: "senal", forma: "rombo", simbolo: "🍳", nombre: "R-3 Calzada con prioridad", descripcion: "Tu calzada tiene preferencia en los cruces frente a las vías que llegan por otra calle. Es la señal conocida como «huevo frito»." },
        { tipo: "senal", forma: "rombo", simbolo: "🍳", nombre: "R-4 Fin de prioridad", descripcion: "Avisa de que tu calzada deja de tener preferencia. Lleva una banda negra cruzada. No es raro que más adelante aparezca un ceda el paso o un STOP." },
        { tipo: "senal", forma: "triangulo", simbolo: "⊤", nombre: "P-1 Intersección con prioridad", descripcion: "Avisa de un cruce con prioridad: quien circula por la vía señalizada tiene preferencia, y quien llega por la vía lateral debe ceder el paso." },
        { tipo: "p", texto: "Cuando las señales, el semáforo o un agente dan órdenes distintas, el Reglamento fija un **orden de preferencia** (artículo 133):" },
        { tipo: "lista", items: [
          "Órdenes de los agentes de la autoridad (policía, Guardia Civil u otros agentes que dirigen el tráfico).",
          "Señalización circunstancial (obras, desvíos o señales temporales).",
          "Semáforos.",
          "Señales verticales (las señales de los postes, como las R, las P o las S).",
          "Marcas viales (las líneas pintadas en el suelo)."
        ] },
        { tipo: "aviso", texto: "**No entres en un cruce** si es previsible que te vas a quedar parado dentro y bloquearás a otros (artículo 59). Si tienes que esperar, espera fuera del cruce." },
        { tipo: "quiz", pregunta: "Ante una señal de STOP, ¿qué debes hacer?", opciones: ["Reducir la velocidad y seguir si no viene nadie", "Detenerte del todo y ceder el paso", "Pasar sin parar si ves que la vía está libre"], correcta: 1, explicacion: "El STOP obliga a una parada completa en la línea de detención, aunque no venga nadie. Después cedes el paso a la vía preferente." },
        { tipo: "quiz", pregunta: "Un guardia de tráfico te hace señas para que sigas, pero el semáforo está en rojo. ¿Qué prevalece?", opciones: ["El semáforo, que siempre manda", "Las órdenes del agente, que tienen preferencia sobre los semáforos", "La regla de la derecha"], correcta: 1, explicacion: "Las órdenes de los agentes tienen la máxima preferencia, por encima de los semáforos y de las señales (artículo 133)." }
      ]
    },
    {
      id: "prioridad-glorietas",
      titulo: "Glorietas (rotondas)",
      minutos: 7,
      contenido: [
        { tipo: "p", texto: "En una glorieta el tráfico gira alrededor de una isleta central. En España se circula **dejando el centro a tu izquierda** (artículo 43), es decir, girando en sentido contrario a las agujas del reloj." },
        { tipo: "senal", forma: "triangulo", simbolo: "↺", nombre: "P-4 Intersección con circulación giratoria", descripcion: "Avisa de una glorieta próxima. Dentro, los vehículos giran en el sentido que marcan las flechas." },
        { tipo: "clave", texto: "**Quien ya circula por la glorieta tiene prioridad.** El que entra cede el paso aunque la entrada no tenga ninguna señal (artículo 57)." },
        { tipo: "truco", texto: "Para entrar, **mira a tu izquierda**: de ese lado llega el tráfico que ya está dentro de la glorieta." },
        { tipo: "lista", items: [
          "Cede el paso a los vehículos que ya circulan por la glorieta.",
          "Si vas a la primera salida (a la derecha), usa el carril derecho.",
          "Si vas a seguir de frente o a la izquierda, usa el carril izquierdo cuando lo haya. Como norma práctica, las flechas del suelo te lo indican.",
          "No cambies de carril dentro de la glorieta sin mirar y sin señalizar."
        ] },
        { tipo: "lista", items: [
          "Para salir, señaliza con el **intermitente derecho** con antelación: salir de la glorieta equivale a girar a la derecha.",
          "Ciñete al borde derecho al salir.",
          "Antes de salir, comprueba que no hay peatones ni ciclistas cruzando la salida."
        ] },
        { tipo: "aviso", texto: "**Trampa del examen:** aunque la entrada no tenga señal, quien ya circula por la glorieta tiene preferencia. No hace falta un ceda el paso para que sea así." },
        { tipo: "p", texto: "**Ejemplo:** vas a salir por la segunda salida de una glorieta. Pones el intermitente derecho antes de llegar a esa salida, vas por el borde derecho y sales sin frenar bruscamente." },
        { tipo: "quiz", pregunta: "En una glorieta sin señal en la entrada, ¿quién tiene prioridad?", opciones: ["El que entra por la derecha", "El que ya circula por la glorieta", "El que lleva el carril izquierdo"], correcta: 1, explicacion: "Quien ya circula por la glorieta tiene preferencia (artículo 57). El que entra debe ceder el paso." },
        { tipo: "quiz", pregunta: "Vas a salir de una glorieta por la primera salida. ¿Qué señal das?", opciones: ["El intermitente izquierdo", "El intermitente derecho", "No hace falta señalizar en glorietas"], correcta: 1, explicacion: "Salir de una glorieta se hace girando a la derecha, así que se señaliza con el intermitente derecho." }
      ]
    },
    {
      id: "prioridad-tramos-estrechos-obras-puentes",
      titulo: "Tramos estrechos, obras y puentes",
      minutos: 8,
      contenido: [
        { tipo: "p", texto: "Hay tramos en los que no caben dos vehículos en sentido contrario. El Reglamento dice quién pasa primero, pero si hay señales, la señal manda." },
        { tipo: "senal", forma: "circulo-rojo", simbolo: "⇄", nombre: "R-5 Prioridad en sentido contrario", descripcion: "No entres en el paso estrecho hasta que puedas cruzarlo sin obligar a parar a los que vienen de frente. Quien ve esta señal tiene que esperar." },
        { tipo: "senal", forma: "cuadrado-azul", simbolo: "⇅", nombre: "R-6 Prioridad respecto al sentido contrario", descripcion: "Tienes preferencia en el paso estrecho frente a los vehículos que vienen de frente. Lleva una flecha blanca y otra roja." },
        { tipo: "clave", texto: "**R-5 obliga a esperar. R-6 da preferencia.** Son las dos caras de la misma situación: una señal para cada sentido." },
        { tipo: "p", texto: "Si no hay señal en un tramo estrecho, tiene preferencia **quien entró primero** en él (artículo 60). Si no está claro quién entró primero, pasa el que tenga más dificultad para maniobrar (artículo 62)." },
        { tipo: "p", texto: "Cuando alguien tiene que retroceder para dejar pasar al otro, el Reglamento fija un orden de preferencia, de mayor a menor (artículo 62):" },
        { tipo: "lista", items: [
          "Vehículos especiales que superan los límites de masa o de dimensiones.",
          "Conjuntos de vehículos.",
          "Vehículos de tracción animal.",
          "Turismos con remolque de hasta 750 kg y autocaravanas.",
          "Transporte colectivo (autobuses).",
          "Camiones.",
          "Turismos.",
          "Motocicletas y bicicletas."
        ] },
        { tipo: "p", texto: "En **obras**, sigue lo que indiquen las señales y los operarios. Quien llega después se coloca detrás, lo más pegado a la derecha que pueda. Los vehículos de servicios urgentes pueden pasar cuando sea seguro (artículo 60)." },
        { tipo: "p", texto: "En un **puente estrecho**, manda la señal. Si no hay señal, retrocede el vehículo que se acerca por el extremo que no tiene la preferencia (artículo 61)." },
        { tipo: "aviso", texto: "**Error frecuente:** pensar que pasa primero el que va más deprisa o el que es más grande. En un tramo estrecho sin señal lo que cuenta es quién entró primero." },
        { tipo: "quiz", pregunta: "En un tramo estrecho sin señal, dos coches se acercan en sentidos opuestos. Uno entró en el tramo antes. ¿Quién pasa primero?", opciones: ["El que entró primero en el tramo estrecho", "El coche más grande", "El que va más deprisa"], correcta: 0, explicacion: "Sin señal, tiene preferencia quien entró primero en el tramo estrecho (artículo 60)." },
        { tipo: "quiz", pregunta: "¿Qué señal te da preferencia en un paso estrecho frente a los vehículos que vienen de frente?", opciones: ["R-5, el círculo rojo", "R-6, el cuadrado azul", "R-1, el triángulo invertido"], correcta: 1, explicacion: "La R-6 (cuadrado azul) indica preferencia respecto al sentido contrario. La R-5 (círculo rojo) obliga a esperar." }
      ]
    },
    {
      id: "prioridad-pendientes-pasos-nivel",
      titulo: "Pendientes y pasos a nivel",
      minutos: 7,
      contenido: [
        { tipo: "p", texto: "Una **pendiente de gran inclinación** es la que tiene un 7 % o más. Si en ese tramo la calzada es estrecha y no caben dos coches, tiene preferencia el que **sube** (artículo 63)." },
        { tipo: "senal", forma: "triangulo", simbolo: "📉", nombre: "P-16 Pendiente peligrosa", descripcion: "Avisa de una bajada o una subida con fuerte pendiente, que suele ir acompañada de un panel con el porcentaje. Reduce la velocidad antes de empezar la pendiente." },
        { tipo: "clave", texto: "**En pendiente estrecha sube quien sube.** La excepción: si el que baja está más cerca de un apartadero (un ensanchamiento para cruzarse), es él quien se aparta allí y deja pasar al que sube." },
        { tipo: "senal", forma: "triangulo", simbolo: "🚂", nombre: "P-7 Paso a nivel con barreras", descripcion: "Hay un cruce de tren con barreras o semibarreras. Reduce la velocidad y no entres si las barreras están cerradas o bajando." },
        { tipo: "senal", forma: "triangulo", simbolo: "🚂", nombre: "P-8 Paso a nivel sin barreras", descripcion: "Hay un cruce de tren sin barreras ni semibarreras. Antes de cruzar, asegúrate de que no se acerca ningún tren." },
        { tipo: "lista", items: [
          "Reduce la velocidad al acercarte al paso a nivel (artículo 95).",
          "Si las barreras están cerradas o moviéndose, detente en fila y espera a tener el paso libre.",
          "Cruza sin demora, comprobando que no te vas a quedar atrapado en la vía.",
          "No entres nunca si hay luz roja intermitente, aunque no veas el tren."
        ] },
        { tipo: "aviso", texto: "**Nunca cruces** cuando las barreras ya están bajando o cuando la luz roja intermitente está encendida. Un tren no puede frenar de golpe." },
        { tipo: "quiz", pregunta: "Llegas a un paso a nivel con barreras que se están cerrando. ¿Qué haces?", opciones: ["Acelerar para cruzar antes de que cierren", "Detenerte detrás de la línea y esperar a que se abran", "Cruzar con cuidado porque no ves el tren"], correcta: 1, explicacion: "Si las barreras están cerradas o en movimiento, debes detenerte en fila hasta tener el paso libre (artículo 95)." },
        { tipo: "quiz", pregunta: "Vas cuesta abajo por una pendiente estrecha y ves un coche que sube de frente. ¿Quién tiene preferencia?", opciones: ["El que sube, salvo que tú estés más cerca de un apartadero", "Tú, porque bajas", "El que llegue primero al final de la pendiente"], correcta: 0, explicacion: "En una pendiente estrecha tiene preferencia el que sube. Solo cambia si el que baja está más cerca de un apartadero." }
      ]
    },
    {
      id: "prioridad-vehiculos-prioritarios",
      titulo: "Vehículos prioritarios y especiales",
      minutos: 6,
      contenido: [
        { tipo: "p", texto: "Algunos vehículos tienen **prioridad de paso** porque prestan un servicio urgente: ambulancias, bomberos, policía y otros vehículos en servicio de urgencia (artículo 67)." },
        { tipo: "lista", items: [
          "Tienen prioridad de paso y pueden superar los límites de velocidad en servicio urgente (artículo 67).",
          "Pueden no cumplir algunas normas bajo su responsabilidad, siempre que no pongan en peligro a nadie, salvo las órdenes de los agentes (artículo 68).",
          "Deben usar a la vez la luz y el sonido especiales. Solo la luz basta cuando no hace falta el sonido (artículo 68)."
        ] },
        { tipo: "clave", texto: "**Ante un vehículo prioritario:** apártate a tu derecha y detente si hace falta para dejarle paso (artículo 69). En cuanto veas sus luces o oigas su sirena, cuenta con ello y prepárate." },
        { tipo: "tabla", cabecera: ["Vehículo", "¿Tiene prioridad de paso?", "Qué haces tú"], filas: [
          ["Ambulancia, bomberos o policía en servicio urgente", "Sí", "Apartarte a la derecha y detenerte si hace falta"],
          ["Vehículo especial (maquinaria, transporte especial)", "No, por ser especial", "Respetar su velocidad reducida y su luz V-2"]
        ] },
        { tipo: "p", texto: "Los vehículos especiales que circulan a 40 km/h o menos llevan encendida la luz **V-2**, de día y de noche (artículo 71). Es una señal de aviso: reduce y ten cuidado con el espacio." },
        { tipo: "aviso", texto: "**No confundas** vehículo prioritario (ambulancia o policía en servicio urgente) con vehículo especial (maquinaria o transporte especial). Ser especial no te da, por sí solo, preferencia de paso." },
        { tipo: "quiz", pregunta: "Una ambulancia en servicio urgente se acerca por detrás con luz y sirena. ¿Qué debes hacer?", opciones: ["Acelerar para que pase antes", "Apartarte a tu derecha y detenerte si es necesario", "Seguirla de cerca para aprovechar el paso"], correcta: 1, explicacion: "Los vehículos prioritarios tienen prioridad de paso, y los demás debemos apartarnos a la derecha o detenernos (artículo 69)." },
        { tipo: "quiz", pregunta: "¿Qué deben usar a la vez los vehículos prioritarios en servicio urgente?", opciones: ["Solo la luz de emergencia", "La luz y el sonido especiales", "Solo el claxon"], correcta: 1, explicacion: "Deben usar luz y sonido especiales a la vez. La luz sola basta cuando no hace falta el sonido (artículo 68)." }
      ]
    },
    {
      id: "prioridad-peatones-ciclistas-animales",
      titulo: "Peatones, ciclistas y animales",
      minutos: 8,
      contenido: [
        { tipo: "p", texto: "Los **peatones**, los **ciclistas** y los **animales** tienen sus propias reglas de prioridad. Son los usuarios más vulnerables, así que el Reglamento te pide extremar la precaución con ellos." },
        { tipo: "senal", forma: "triangulo", simbolo: "🚶", nombre: "P-20 Peatones", descripcion: "Avisa de una zona con presencia habitual de peatones que cruzan o caminan por la calzada. Reduce la velocidad y mira con atención en los cruces." },
        { tipo: "p", texto: "**Peatones con prioridad** (artículo 65):" },
        { tipo: "lista", items: [
          "En los pasos de peatones señalizados.",
          "Cuando cruzas una acera o una zona peatonal, por ejemplo al entrar o salir de un garaje.",
          "Cuando giras y hay peatones cruzando la calle a la que vas.",
          "En las paradas del transporte público, mientras suben o bajan.",
          "En las calles de plataforma única, donde no hay acera separada (novedad desde el 1 de octubre de 2026).",
          "Grupos organizados: militares a pie, filas escolares y comitivas."
        ] },
        { tipo: "p", texto: "Los peatones no pueden cruzar una glorieta por su calzada, salvo que haya un paso habilitado para ello (artículo 124)." },
        { tipo: "senal", forma: "triangulo", simbolo: "🚲", nombre: "P-22 Ciclistas", descripcion: "Avisa de un cruce o de un tramo con bicicletas. Mira bien antes de girar o de cruzar." },
        { tipo: "lista", items: [
          "En los carriles bici, en los pasos para ciclistas y en los arcenes señalizados por los que circulan bicis.",
          "Cuando vas a girar y hay ciclistas cerca circulando por un carril bici o un paso para bicis: cedes el paso.",
          "Un grupo de ciclistas que ya ha empezado a cruzar o que ha entrado en la glorieta."
        ] },
        { tipo: "p", texto: "En ciudad, si circulas detrás de un ciclista en el mismo carril, guarda al menos **5 metros** de separación (artículo 153)." },
        { tipo: "p", texto: "**Animales** (artículo 66): en general, tienes prioridad frente a los animales. En estos casos, sin embargo, tienes que ceder: en cañadas señalizadas, cuando giras para entrar en una vía que cruzan animales y cuando cruzas un arcén por el que circulan animales sin cañada." },
        { tipo: "senal", forma: "triangulo", simbolo: "🦌", nombre: "P-24 Animales en libertad", descripcion: "Avisa de tramos donde animales sueltos pueden cruzar la calzada. Reduce la velocidad, sobre todo de noche." },
        { tipo: "aviso", texto: "**Trampa del examen:** tener luz verde no te da derecho a pasar si hay peatones cruzando por el paso. Cede siempre a quien está cruzando." },
        { tipo: "quiz", pregunta: "Vas a girar a la derecha y hay un peatón cruzando por el paso de peatones de la calle a la que vas a girar. ¿Qué haces?", opciones: ["Girar rápido, porque el peatón va despacio", "Ceder el paso al peatón", "Tocar el claxon para que se aparte"], correcta: 1, explicacion: "Al girar debes ceder el paso a los peatones que cruzan (artículo 65)." },
        { tipo: "quiz", pregunta: "¿Qué señal avisa de tramos donde pueden cruzar animales sueltos?", opciones: ["P-22, de ciclistas", "P-24, de animales en libertad", "P-20, de peatones"], correcta: 1, explicacion: "La P-24 es un triángulo con la silueta de un animal, y avisa de animales sueltos que pueden cruzar la calzada." }
      ]
    }
  ]
});
