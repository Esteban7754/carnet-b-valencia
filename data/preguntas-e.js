window.PREGUNTAS = window.PREGUNTAS || [];
window.PREGUNTAS.push(
  {
    id: "e-001",
    tema: "velocidad",
    pregunta: "Conduces un autobús de línea por una autovía, sin ninguna señal especial. ¿Cuál es la velocidad máxima genérica?",
    opciones: ["120 km/h", "100 km/h", "90 km/h"],
    correcta: 1,
    explicacion: "Los autobuses van a 100 km/h en autovía y autopista. En carretera convencional su límite genérico es de 90 km/h."
  },
  {
    id: "e-002",
    tema: "velocidad",
    pregunta: "Conduces un camión de 12 toneladas por una carretera convencional, sin señales de límite. ¿Cuál es tu velocidad máxima genérica?",
    opciones: ["80 km/h", "90 km/h", "100 km/h"],
    correcta: 0,
    explicacion: "Los camiones van a 90 km/h en autovía y a 80 km/h en carretera convencional."
  },
  {
    id: "e-003",
    tema: "velocidad",
    pregunta: "Llevas un coche arrastrando un remolque por una autovía, sin ninguna señal especial. ¿Cuál es la velocidad máxima genérica?",
    opciones: ["120 km/h", "100 km/h", "90 km/h"],
    correcta: 2,
    explicacion: "Un automóvil con remolque va en la columna de camiones: 90 km/h en autovía y 80 km/h en carretera convencional."
  },
  {
    id: "e-004",
    tema: "velocidad",
    pregunta: "Un coche se cuela delante de ti dejando muy poco espacio. ¿Qué es lo más seguro que puedes hacer?",
    opciones: ["Frenar de golpe para no chocar", "Aumentar la distancia de seguridad sin frenar bruscamente", "Acelerar para recuperar el espacio"],
    correcta: 1,
    explicacion: "Separa más tu coche del de delante y evita frenazos bruscos, que pueden provocar un choque por alcance."
  },
  {
    id: "e-005",
    tema: "velocidad",
    pregunta: "Conduces una autocaravana de 3.000 kg por una autovía, sin señales especiales. ¿Cuál es el límite genérico?",
    opciones: ["120 km/h", "100 km/h", "90 km/h"],
    correcta: 0,
    explicacion: "Las autocaravanas de hasta 3.500 kg van con los turismos: 120 km/h en autovía y 90 km/h en carretera convencional."
  },
  {
    id: "e-006",
    tema: "velocidad",
    pregunta: "Circulas con un turismo por una autovía y ves esta señal. ¿Qué velocidad máxima debes respetar en ese tramo?",
    opciones: ["120 km/h, el límite genérico de la autovía", "110 km/h, por la separación entre carriles", "100 km/h, lo que indica la señal"],
    correcta: 2,
    explicacion: "Una señal circular roja manda sobre el límite genérico, aunque sea más baja que los 120 km/h de la autovía.",
    senal: {forma: "circulo-rojo", simbolo: "100"}
  },
  {
    id: "e-007",
    tema: "velocidad",
    pregunta: "¿De qué depende el límite genérico de velocidad de un vehículo?",
    opciones: ["Solo del color y del año del coche", "Del tipo de vía, del tipo de vehículo y del número de carriles", "Solo de si hace buen tiempo o no"],
    correcta: 1,
    explicacion: "El límite genérico depende de dónde circulas (autopista, carretera o ciudad), de qué vehículo conduces y de cuántos carriles tiene la vía."
  },
  {
    id: "e-008",
    tema: "velocidad",
    pregunta: "Tu coche tiene control de crucero adaptativo (ACC). ¿Qué lo diferencia de un control de crucero normal?",
    opciones: ["Mantiene la velocidad fijada y, además, la distancia con el coche de delante", "No hay diferencia, solo cambia el nombre comercial", "Impide superar el límite de la vía, cosa que el crucero normal no hace"],
    correcta: 0,
    explicacion: "El ACC frena y acelera solo para conservar la distancia con el de delante, pero el límite de la vía sigue siendo tu responsabilidad."
  },
  {
    id: "e-009",
    tema: "velocidad",
    pregunta: "El limitador de tu camión está puesto a 90 km/h y vas por una autovía. ¿Puedes superar los 90 pisando a fondo el acelerador?",
    opciones: ["Sí, pisando a fondo se supera", "Sí, siempre que no haya ningún vehículo cerca", "No, el limitador impide superar la velocidad fijada"],
    correcta: 2,
    explicacion: "El limitador no deja superar la velocidad que has fijado, pero no sustituye al conductor."
  },
  {
    id: "e-010",
    tema: "velocidad",
    pregunta: "Conduces una pick-up de 2.000 kg por una carretera convencional, sin ninguna señal de límite. ¿Cuál es la velocidad máxima genérica?",
    opciones: ["80 km/h", "90 km/h", "100 km/h"],
    correcta: 1,
    explicacion: "Las pick-ups de hasta 3.500 kg van con los turismos: 90 km/h en carretera convencional y 120 km/h en autovía."
  },
  {
    id: "e-011",
    tema: "velocidad",
    pregunta: "¿Qué mide un radar de tramo?",
    opciones: ["Tu velocidad media entre dos puntos de la vía", "Tu velocidad exacta en un único punto", "La distancia que mantienes con el coche de delante"],
    correcta: 0,
    explicacion: "Calcula tu velocidad media entre dos puntos, así que frenar solo al ver el radar no sirve de nada."
  },
  {
    id: "e-012",
    tema: "velocidad",
    pregunta: "Un radar fijo te descuenta el margen de error de la medición. ¿Puedes superar el límite porque ese margen te protege?",
    opciones: ["Sí, hasta el margen que tenga el radar", "Sí, si la vía es interurbana", "No, el límite es el que marca la señal"],
    correcta: 2,
    explicacion: "El margen de error se descuenta a tu favor en la medición, pero no es una autorización para superar el límite."
  },
  {
    id: "e-013",
    tema: "velocidad",
    pregunta: "Un radar móvil puede estar sin señalizar y no sabes dónde hay radares. ¿Qué te conviene hacer?",
    opciones: ["Ir un poco por encima, porque el radar tiene margen", "Respetar el límite siempre, porque no puedes saber dónde hay radares", "Frenar solo cuando veas el radar"],
    correcta: 1,
    explicacion: "Como los radares móviles pueden no estar señalizados, la única estrategia válida es respetar el límite en todo momento."
  },
  {
    id: "e-014",
    tema: "velocidad",
    pregunta: "Circulas por una calle de 50 km/h a 65 km/h, es decir, con 15 km/h de exceso. ¿Qué te corresponde?",
    opciones: ["100 € y sin puntos", "300 € y 2 puntos", "400 € y 4 puntos"],
    correcta: 0,
    explicacion: "En vías de 50 km/h o menos, un exceso de hasta 20 km/h cuesta 100 € y no resta puntos."
  },
  {
    id: "e-015",
    tema: "velocidad",
    pregunta: "Circulas por una carretera de 90 km/h a 125 km/h, es decir, con 35 km/h de exceso. ¿Qué te corresponde?",
    opciones: ["100 € y sin puntos", "400 € y 4 puntos", "300 € y 2 puntos"],
    correcta: 2,
    explicacion: "En vías de más de 50 km/h, un exceso de 31 a 50 km/h cuesta 300 € y 2 puntos."
  },
  {
    id: "e-016",
    tema: "velocidad",
    pregunta: "¿A partir de qué exceso de velocidad en ciudad se considera delito y no solo una multa?",
    opciones: ["Más de 30 km/h sobre el límite", "Más de 60 km/h sobre el límite", "Más de 100 km/h en cualquier vía"],
    correcta: 1,
    explicacion: "Superar en más de 60 km/h el límite en vía urbana (o en más de 80 km/h fuera de poblado) es delito según el Código Penal."
  },
  {
    id: "e-017",
    tema: "velocidad",
    pregunta: "Circulas a 90 km/h con el firme seco y quieres comprobar que llevas los 2 segundos de distancia. ¿Qué haces?",
    opciones: ["Cuentas «mil uno, mil dos» desde que el de delante pasa por una señal", "Miras el velocímetro y divides la cifra entre dos", "Dejas un hueco del tamaño de un coche entre los dos"],
    correcta: 0,
    explicacion: "Si llegas a esa misma señal antes de terminar de contar hasta dos, vas demasiado cerca del coche de delante."
  },
  {
    id: "e-018",
    tema: "velocidad",
    pregunta: "Circulas a 90 km/h con el firme seco. ¿Qué distancia de 2 segundos te corresponde, aproximadamente?",
    opciones: ["25 m", "90 m", "50 m"],
    correcta: 2,
    explicacion: "A 90 km/h recorres unos 25 metros por segundo, así que 2 segundos son unos 50 metros."
  },
  {
    id: "e-019",
    tema: "velocidad",
    pregunta: "Vas a 120 km/h y apartas la vista de la carretera durante 2 segundos. ¿Cuántos metros recorres a ciegas, aproximadamente?",
    opciones: ["Unos 33 m", "Unos 67 m", "Unos 120 m"],
    correcta: 1,
    explicacion: "A 120 km/h recorres unos 33 metros por segundo. En 2 segundos, unos 67 metros."
  },
  {
    id: "e-020",
    tema: "velocidad",
    pregunta: "Circulas a 90 km/h detrás de un camión que te tapa la visión de la carretera. ¿Qué debes hacer?",
    opciones: ["Dejar más distancia de la habitual", "Pegarte a él para aprovechar su estela", "Mantener los 2 segundos de siempre, que ya es suficiente"],
    correcta: 0,
    explicacion: "Si el de delante te tapa la vista, no ves lo que pasa más allá: deja más espacio para poder frenar a tiempo."
  },
  {
    id: "e-021",
    tema: "velocidad",
    pregunta: "Conduces una autocaravana de 5.000 kg por una carretera convencional, sin señales de límite. ¿Cuál es la velocidad máxima genérica?",
    opciones: ["90 km/h", "70 km/h", "80 km/h"],
    correcta: 2,
    explicacion: "Las autocaravanas de más de 3.500 kg van con los camiones: 80 km/h en carretera convencional y 90 km/h en autovía."
  },
  {
    id: "e-022",
    tema: "velocidad",
    pregunta: "Circulas por una carretera convencional a 30 km/h sin ningún motivo, porque vas tranquilo. ¿Qué ocurre?",
    opciones: ["No es infracción mientras no superes el límite", "Es una infracción grave", "Solo es infracción si hay un vehículo detrás"],
    correcta: 1,
    explicacion: "Circular a una velocidad anormalmente reducida sin motivo es infracción grave, porque entorpece la marcha de los demás."
  },
  {
    id: "e-023",
    tema: "velocidad",
    pregunta: "Circulas a 90 km/h por una carretera de límite 90, pero la calzada tiene gravilla suelta. ¿Qué debes hacer?",
    opciones: ["Reducir la velocidad para poder controlar el coche", "Mantener 90 km/h, porque es el límite de la vía", "Subir a 100 km/h para salir antes del tramo"],
    correcta: 0,
    explicacion: "No basta con no superar el límite: debes ir a una velocidad que te permita controlar el coche y frenar a tiempo."
  },
  {
    id: "e-024",
    tema: "velocidad",
    pregunta: "Llevas el control de crucero puesto a 100 km/h, pero una señal circular roja marca 80 km/h en ese tramo. ¿Qué debes hacer?",
    opciones: ["Mantener 100 km/h, porque el crucero lo permite", "Subir a 100 km/h solo en los tramos rectos", "Respetar los 80 km/h de la señal, que es el límite que cuenta"],
    correcta: 2,
    explicacion: "El crucero solo mantiene la velocidad que le pones; la señal manda y debes ir a 80 km/h.",
    senal: {forma: "circulo-rojo", simbolo: "80"}
  },
  {
    id: "e-025",
    tema: "velocidad",
    pregunta: "Conduces un camión de 12 toneladas por una autovía a 100 km/h, sin ninguna señal especial. ¿Es correcto?",
    opciones: ["Sí, la autovía permite 100 km/h", "No, el límite genérico de un camión en autovía es de 90 km/h", "Sí, siempre que vayas por el carril izquierdo"],
    correcta: 1,
    explicacion: "Los camiones tienen 90 km/h de límite genérico en autovía y autopista, así que 100 km/h lo supera."
  },
  {
    id: "e-026",
    tema: "prioridad",
    pregunta: "Vas por un camino de tierra y llegas a un cruce sin señales. Por tu izquierda aparece un coche que circula por una calle asfaltada. ¿Quién tiene preferencia?",
    opciones: ["Tú, porque el otro viene por tu izquierda", "Nadie, los dos tenéis que parar", "El coche de la calle asfaltada, aunque venga por tu izquierda"],
    correcta: 2,
    explicacion: "Si una vía está asfaltada y la otra no, tiene preferencia la asfaltada, aunque el otro venga por la izquierda."
  },
  {
    id: "e-027",
    tema: "prioridad",
    pregunta: "Sales de un camino de tierra y te incorporas a una calle asfaltada en un cruce sin señales. ¿Qué debes hacer?",
    opciones: ["Ceder el paso a los vehículos que circulan por la calle asfaltada", "Pasar primero, porque tú vas más despacio", "Pasar primero, porque tu camino también tiene preferencia"],
    correcta: 0,
    explicacion: "Quien circula por una vía asfaltada tiene preferencia frente a quien viene de una vía sin pavimentar."
  },
  {
    id: "e-028",
    tema: "prioridad",
    pregunta: "En un cruce sin señales, se acerca un tranvía por sus raíles y, por tu derecha, llega un coche. ¿Quién tiene preferencia?",
    opciones: ["El coche de tu derecha, por la regla general", "El tranvía, porque circula por raíles", "El que llegue primero al centro del cruce"],
    correcta: 1,
    explicacion: "Los vehículos que circulan por raíles tienen preferencia, aunque el otro venga por tu derecha."
  },
  {
    id: "e-029",
    tema: "prioridad",
    pregunta: "Quieres incorporarte a una autovía desde un acceso, y por la autovía circulan varios vehículos. ¿Qué debes hacer?",
    opciones: ["Entrar a tu ritmo, porque vienes por la derecha", "Entrar primero, porque el acceso es tuyo", "Ceder el paso a los vehículos que circulan por la autovía"],
    correcta: 2,
    explicacion: "Quien circula por una autopista o autovía tiene preferencia frente a quien se incorpora desde un acceso."
  },
  {
    id: "e-030",
    tema: "prioridad",
    pregunta: "¿En qué sentido se circula alrededor de una glorieta en España?",
    opciones: ["Dejando el centro a tu izquierda, en sentido contrario a las agujas del reloj", "Dejando el centro a tu derecha, en el sentido de las agujas del reloj", "Depende de cada glorieta, porque cada una marca su sentido"],
    correcta: 0,
    explicacion: "En España la glorieta se recorre dejando el centro a la izquierda, es decir, en sentido contrario a las agujas del reloj."
  },
  {
    id: "e-031",
    tema: "prioridad",
    pregunta: "Vas dentro de una glorieta y quieres cambiar de carril para salir por la siguiente salida. ¿Qué haces?",
    opciones: ["Cambiar directamente, porque dentro de la glorieta no hace falta señalizar", "Mirar y señalizar antes de cambiar de carril", "Cambiar solo si el coche de detrás te deja sitio"],
    correcta: 1,
    explicacion: "Dentro de la glorieta no se cambia de carril sin mirar y sin señalizar."
  },
  {
    id: "e-032",
    tema: "prioridad",
    pregunta: "En una glorieta de dos carriles quieres seguir de frente, sin tomar la primera salida. ¿Por qué carril entras?",
    opciones: ["Por el carril derecho, para salir mejor", "Por el que tengas más cerca", "Por el carril izquierdo, si lo hay"],
    correcta: 2,
    explicacion: "Para seguir de frente o girar a la izquierda se usa el carril izquierdo, siguiendo las flechas del suelo."
  },
  {
    id: "e-033",
    tema: "prioridad",
    pregunta: "Vas a entrar en una glorieta. ¿De qué lado llega el tráfico que ya circula dentro?",
    opciones: ["Del lado izquierdo", "Del lado derecho", "Directamente de frente"],
    correcta: 0,
    explicacion: "Como se circula dejando el centro a la izquierda, el tráfico que ya circula llega por tu izquierda: mira a ese lado antes de entrar."
  },
  {
    id: "e-034",
    tema: "prioridad",
    pregunta: "Quieres entrar en una glorieta sin señales en su acceso y ves un ciclista que ya circula por dentro. ¿Qué haces?",
    opciones: ["Entrar, porque la bici va más despacio", "Ceder el paso al ciclista, que ya circula por la glorieta", "Pasar por delante si el ciclista está lejos"],
    correcta: 1,
    explicacion: "Quien ya circula por la glorieta tiene preferencia, sea coche, moto o bicicleta."
  },
  {
    id: "e-035",
    tema: "prioridad",
    pregunta: "Llegas a un paso a nivel con las barreras levantadas, pero la luz roja intermitente está encendida. ¿Qué haces?",
    opciones: ["Cruzar, porque las barreras están levantadas", "Cruzar con cuidado, porque no ves ningún tren", "Detenerte y no cruzar mientras la luz siga encendida"],
    correcta: 2,
    explicacion: "La luz roja intermitente manda: aunque no veas el tren ni haya barreras bajadas, no debes entrar."
  },
  {
    id: "e-036",
    tema: "prioridad",
    pregunta: "Llegas a un cruce de tren sin barreras ni semibarreras y no ves ningún tren. ¿Qué debes hacer?",
    opciones: ["Asegurarte de que no se acerca ningún tren y cruzar sin demora", "Cruzar a velocidad normal, porque no hay barreras", "Esperar a que cruce delante de ti otro coche"],
    correcta: 0,
    explicacion: "Sin barreras, eres tú quien debe comprobar que no se acerca ningún tren, y cruzar sin demora sin quedarte parado en la vía."
  },
  {
    id: "e-037",
    tema: "prioridad",
    pregunta: "Una señal vertical de los postes y una línea pintada en el suelo dicen cosas distintas. ¿Cuál manda?",
    opciones: ["La línea pintada, porque está en el suelo", "La señal vertical", "Ninguna: decides tú según tu criterio"],
    correcta: 1,
    explicacion: "Las señales verticales tienen preferencia sobre las marcas viales, es decir, sobre las líneas pintadas."
  },
  {
    id: "e-038",
    tema: "prioridad",
    pregunta: "Vas a entrar a tu garaje cruzando la acera, y un peatón camina por ella. ¿Qué haces?",
    opciones: ["Entrar rápido, porque el peatón va por la acera y no por la calzada", "Tocar el claxon para que el peatón se aparte", "Ceder el paso al peatón antes de cruzar la acera"],
    correcta: 2,
    explicacion: "Al cruzar una acera, como al entrar o salir de un garaje, debes ceder el paso a los peatones."
  },
  {
    id: "e-039",
    tema: "prioridad",
    pregunta: "Llegas a una señal de ceda el paso y por la vía preferente no viene nadie. ¿Qué debes hacer?",
    opciones: ["Reducir la velocidad y seguir sin parar del todo", "Parar del todo, aunque no venga nadie", "Pasar a velocidad normal, porque no hay nadie"],
    correcta: 0,
    explicacion: "El ceda el paso obliga a reducir y a detenerte solo si hace falta; el STOP, en cambio, obliga siempre a parar.",
    senal: {forma: "triangulo-invertido", simbolo: ""}
  },
  {
    id: "e-040",
    tema: "prioridad",
    pregunta: "Tienes preferencia en un cruce, pero un agente de tráfico te hace señas para que te detengas. ¿Qué haces?",
    opciones: ["Seguir, porque tienes preferencia en ese cruce", "Detenerte, porque las órdenes del agente tienen prioridad", "Detenerte solo si viene alguien por la derecha"],
    correcta: 1,
    explicacion: "Las órdenes de los agentes de tráfico tienen preferencia sobre las señales, los semáforos y las reglas de prioridad."
  },
  {
    id: "e-041",
    tema: "prioridad",
    pregunta: "Estás en un tramo de obras con un solo carril y otro coche que va en tu mismo sentido ya está esperando para pasar. Tú llegas después. ¿Qué haces?",
    opciones: ["Adelantarlo por la izquierda para entrar primero", "Entrar tú primero, porque vienes más deprisa", "Colocarte detrás de él, lo más pegado a la derecha que puedas"],
    correcta: 2,
    explicacion: "En una obra con un solo carril, quien llega después se coloca detrás del que ya espera, lo más pegado a la derecha posible."
  },
  {
    id: "e-042",
    tema: "prioridad",
    pregunta: "Llegas a un cruce con luz verde, pero el tráfico de delante está parado y es probable que te quedes atrapado dentro. ¿Qué haces?",
    opciones: ["Esperar fuera del cruce, sin bloquearlo", "Entrar, porque tienes luz verde", "Entrar rápido para salir antes del cruce"],
    correcta: 0,
    explicacion: "No debes entrar en un cruce si es previsible que te vas a quedar parado dentro, porque bloquearías a los demás."
  },
  {
    id: "e-043",
    tema: "prioridad",
    pregunta: "Una ambulancia en servicio urgente, con luz y sirena, ¿puede superar los límites de velocidad?",
    opciones: ["No, nunca, aunque esté en servicio urgente", "Sí, en servicio urgente y sin poner en peligro a nadie", "Sí, siempre, aunque ponga en peligro a otros"],
    correcta: 1,
    explicacion: "Los vehículos prioritarios en servicio urgente pueden superar los límites, pero sin poner en peligro a nadie."
  },
  {
    id: "e-044",
    tema: "prioridad",
    pregunta: "Vas a girar a la derecha y un grupo de ciclistas ya ha empezado a cruzar el paso para bicis de la calle a la que entras. ¿Qué haces?",
    opciones: ["Pasar rápido por delante, porque tú eres quien gira", "Adelantar a los ciclistas para salir antes del cruce", "Ceder el paso y esperar a que terminen de cruzar"],
    correcta: 2,
    explicacion: "Debes ceder el paso a los ciclistas que ya están cruzando y esperar a que terminen."
  },
  {
    id: "e-045",
    tema: "prioridad",
    pregunta: "Llegas primero a un cruce sin señales. Después aparece un coche por tu derecha. ¿Quién pasa primero?",
    opciones: ["El coche de tu derecha, aunque tú hayas llegado antes", "Tú, porque has llegado primero", "El que vaya más deprisa"],
    correcta: 0,
    explicacion: "En un cruce sin señales no manda quien llega antes, sino el que viene por tu derecha."
  },
  {
    id: "e-046",
    tema: "prioridad",
    pregunta: "Llegas a un paso de peatones señalizado y cruza en fila un grupo de niños de un colegio, acompañados por su profesor. ¿Qué haces?",
    opciones: ["Pasar despacio entre ellos sin detenerte", "Detenerte y ceder el paso al grupo", "Tocar el claxon para que aceleren el paso"],
    correcta: 1,
    explicacion: "Los grupos organizados de peatones, como las filas escolares, tienen preferencia de paso."
  },
  {
    id: "e-047",
    tema: "prioridad",
    pregunta: "En una cañada señalizada, un rebaño de ovejas cruza el camino por delante de tu coche. ¿Qué haces?",
    opciones: ["Pasar despacio entre las ovejas", "Tocar el claxon para que se aparten", "Ceder el paso al rebaño y detenerte si hace falta"],
    correcta: 2,
    explicacion: "En las cañadas señalizadas hay que ceder el paso al ganado, deteniéndote si hace falta."
  },
  {
    id: "e-048",
    tema: "prioridad",
    pregunta: "Vas a girar a la izquierda con luz verde y un peatón cruza la calle a la que quieres entrar. ¿Qué haces?",
    opciones: ["Ceder el paso al peatón", "Girar rápido, porque tienes el verde", "Tocar el claxon para que cruce más deprisa"],
    correcta: 0,
    explicacion: "Al girar debes ceder el paso a los peatones que cruzan, aunque tengas luz verde."
  },
  {
    id: "e-049",
    tema: "prioridad",
    pregunta: "Vas por un camino de tierra y, en un cruce sin señales, por tu derecha llega otro coche por otro camino también de tierra. ¿Quién pasa primero?",
    opciones: ["Tú, porque llevas la preferencia por ir recto", "El que viene por tu derecha", "El que llegue primero al centro del cruce"],
    correcta: 1,
    explicacion: "Si las dos vías están igual de sin pavimentar, manda la regla general: cedes el paso al que viene por la derecha."
  },
  {
    id: "e-050",
    tema: "prioridad",
    pregunta: "Vas por una calle asfaltada y llegas a un cruce sin señales con otra calle también asfaltada. Un coche viene por tu izquierda. ¿Quién pasa primero?",
    opciones: ["El coche que viene por tu izquierda", "El que llegue primero al centro del cruce", "Tú, porque el otro viene por tu izquierda"],
    correcta: 2,
    explicacion: "Con las dos calles asfaltadas no hay excepción: solo cedes al que viene por tu derecha, así que el paso es tuyo."
  }
);
