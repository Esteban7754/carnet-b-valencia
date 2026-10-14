// Ampliación 4 · tema "seguridad": 4 lecciones nuevas tras "seguridad-mantenimiento-carga"
window.AMPLIACION = (window.AMPLIACION || []).concat([
  { tema: "seguridad", despues: "seguridad-mantenimiento-carga", leccion: {
    id: "seguridad-carga-personas",
    titulo: "Carga, personas y remolques",
    minutos: 8,
    contenido: [
      { tipo: "p", texto: "Cargar o llevar personas cambia la forma en que el coche frena, gira y se comporta. Cada kilo y cada pasajero cuentan, así que conviene saber cómo cargar bien y hasta dónde llega el permiso B cuando llevas remolque." },
      { tipo: "lista", items: [
          "**Sujeta**: nada puede moverse en un frenazo. Usa correas, redes o anclajes.",
          "**Repartida**: lo más pesado va **abajo** y **cerca del centro** del vehículo.",
          "**Sin estorbar**: la carga no puede tapar la visión, los mandos ni los pedales.",
          "**Sin peligro**: nada suelto en el habitáculo ni nada que pueda caer a la vía."
      ] },
      { tipo: "clave", texto: "La **masa máxima autorizada** (MMA) es el peso máximo del coche **cargado**, con ocupantes, equipaje y carga. Nunca debe superarse. La encuentras en la ficha técnica, dentro de la tarjeta ITV." },
      { tipo: "p", texto: "**Carga que sobresale.** En un turismo lo ideal es que la carga no sobresalga nada. Si sobresale por detrás, hay que señalizarla con la **señal V-20**: un panel cuadrado con franjas rojas y blancas, colocado en el extremo de la carga y bien plano. Con poca luz, además, hace falta una luz roja." },
      { tipo: "p", texto: "**Portabicicletas y matrícula.** Las bicicletas no pueden tapar la **matrícula** ni los **pilotos** traseros. Si lo hacen, hay que llevar una matrícula y unas luces **supletorias**, visibles por fuera de la carga." },
      { tipo: "lista", items: [
          "**Plazas homologadas**: nunca más ocupantes que los que figuran en la ficha técnica.",
          "**Cinturón en cada plaza**: cada pasajero va en su asiento y abrochado.",
          "**Menores**: los que miden menos de 135 cm van en un SRI homologado, como ya vimos.",
          "**Mascotas sujetas**: con un arnés homologado o en un transportín bien fijado, para que no distraigan."
      ] },
      { tipo: "aviso", texto: "Trampa del examen: el **conductor cuenta como plaza**. Un turismo de 5 plazas admite el conductor y cuatro pasajeros, no cinco." },
      { tipo: "p", texto: "**Remolques con el permiso B.** Con el B puedes llevar remolques, pero las reglas cambian según su masa máxima autorizada. Consulta la MMA del remolque en su documentación." },
      { tipo: "tabla", cabecera: ["Remolque", "Qué permite el permiso B"], filas: [
          ["Hasta 750 kg de MMA", "Sí, sin requisitos adicionales"],
          ["Más de 750 kg", "Sí, si el conjunto no supera 3.500 kg y el remolque no pesa más que el coche vacío"],
          ["Conjunto de hasta 4.250 kg", "Solo con el B96, una autorización complementaria"]
      ] },
      { tipo: "clave", texto: "Con el B, en un remolque de **más de 750 kg** el **conjunto no puede superar 3.500 kg**, y el remolque no puede pesar más que el coche vacío. Hay que cumplir **las dos condiciones a la vez**." },
      { tipo: "lista", items: [
          "**Con remolque, el límite baja** respecto al del coche solo.",
          "Remolque ligero (hasta 750 kg): **90 km/h** como máximo en autovía y autopista, y **80 km/h** en carretera convencional.",
          "Con un remolque más pesado, los límites pueden ser otros: mira siempre la señalización y consulta dgt.es."
      ] },
      { tipo: "quiz", pregunta: "Llevas un remolque ligero de 600 kg con tu turismo. ¿Cuál es la velocidad máxima en autovía?", opciones: ["120 km/h", "90 km/h", "100 km/h"], correcta: 1, explicacion: "Con remolque ligero, el turismo baja de 120 a 90 km/h en autovía y autopista. El límite de 120 km/h solo vale sin remolque." },
      { tipo: "p", texto: "**B96.** Con esta autorización complementaria del B, un conjunto puede llegar a **4.250 kg** de masa máxima. Para obtenerla hay que superar una prueba práctica específica, con maniobras y circulación con remolque. La formación previa es muy recomendable." },
      { tipo: "quiz", pregunta: "Tu coche y un remolque de 1.000 kg suman 4.000 kg en total. ¿Puedes llevarlos con el permiso B?", opciones: ["Sí, el B permite cualquier conjunto", "No, con el B el conjunto no puede superar 3.500 kg si el remolque pasa de 750 kg", "Sí, siempre que el remolque tenga sus propios frenos"], correcta: 1, explicacion: "Con remolques de más de 750 kg, el conjunto no puede superar 3.500 kg con el B. Para llevar hasta 4.250 kg hace falta el B96." }
    ]
  } }
  ,{ tema: "seguridad", despues: "seguridad-mantenimiento-carga", leccion: {
    id: "seguridad-mecanica",
    titulo: "Mecánica: lo que avisa tu coche",
    minutos: 9,
    contenido: [
      { tipo: "p", texto: "No hace falta ser mecánico para notar que algo va mal. El coche suele avisar antes de fallar: con el pedal, con el volante, con un ruido, con el humo o con un testigo. Detectarlo a tiempo es más barato y, sobre todo, más seguro." },
      { tipo: "lista", items: [
          "**Pedal esponjoso**: si se hunde más de lo normal o se siente blando, puede haber aire o una fuga de líquido. No lo ignores.",
          "**Ruido al frenar**: un chirrido agudo suele indicar pastillas gastadas. Un ruido metálico continuo es urgente.",
          "**Tirón hacia un lado**: al frenar, el coche se desvía. Revisa el freno y el neumático de ese lado."
      ] },
      { tipo: "p", texto: "**Dirección y suspensión.** Si el volante tiene juego, vibra o el coche se balancea, algo no está bien. Estas son las señales más comunes:" },
      { tipo: "lista", items: [
          "**Holguras**: juego excesivo en el volante o respuesta lenta al girar.",
          "**Vibraciones** a cierta velocidad: suelen ser ruedas desequilibradas o piezas de la dirección.",
          "**Balanceo** en las curvas y rebotes tras cada bache: los amortiguadores pueden estar gastados.",
          "**Más distancia de frenado**: con amortiguadores en mal estado, el coche puede necesitar más espacio para parar."
      ] },
      { tipo: "p", texto: "**Neumáticos.** Un desgaste irregular, más en un borde que en el resto o solo en el centro, suele indicar presión mal ajustada, alineación o suspensión. Lleva el coche al taller para revisarlo." },
      { tipo: "lista", items: [
          "**Alumbrado**: una luz fundida reduce tu visibilidad y tus señales. Cámbiala cuanto antes.",
          "**Retrovisores**: limpios, bien ajustados y sin roturas. Si uno roto te impide ver lo que viene por detrás, no circules.",
          "**Limpiaparabrisas**: si las escobillas rayan o dejan zonas sin limpiar, cámbialas.",
          "**Claxon**: debe funcionar, aunque solo se usa para evitar peligros."
      ] },
      { tipo: "p", texto: "**El humo del escape** te da pistas sobre lo que pasa dentro del motor. Cada color indica un líquido distinto que se quema. Un poco de vapor blanco y fino al arrancar en frío es normal: es condensación que desaparece al calentarse." },
      { tipo: "lista", items: [
          "**Azul**: se quema **aceite**. Suele deberse a desgaste de piezas internas del motor.",
          "**Negro**: se quema **demasiado combustible**. Puede venir de un filtro de aire sucio o de un inyector averiado.",
          "**Blanco espeso**: puede ser **refrigerante** quemándose. Si no cesa con el motor caliente, acude al taller."
      ] },
      { tipo: "quiz", pregunta: "Tu coche echa humo azul por el escape. ¿Qué se está quemando?", opciones: ["Aceite del motor", "Gasolina sin quemar", "Refrigerante"], correcta: 0, explicacion: "El humo azul indica aceite que llega a la cámara de combustión. El humo negro indica exceso de combustible, y el blanco espeso puede ser refrigerante." },
      { tipo: "p", texto: "**Testigos del cuadro.** Los colores son un código de urgencia: te dicen si debes parar ya, revisar pronto o solo estar informado." },
      { tipo: "lista", items: [
          "**Rojo**: parada inmediata o peligro. Frenos, presión de aceite, temperatura del motor y batería o carga.",
          "**Ámbar o naranja**: revisa pronto. Motor, ABS, ESP, presión de neumáticos y airbag.",
          "**Verde o azul**: solo informan, como las luces de cruce o los intermitentes."
      ] },
      { tipo: "aviso", texto: "Trampa: el testigo de **frenos** puede encenderse solo porque el **freno de mano** está puesto. Compruébalo primero. Además, el color exacto de algunos testigos puede variar según el fabricante: el manual del coche manda." },
      { tipo: "clave", texto: "Si se enciende un testigo **rojo** en marcha, **no sigas** hasta tu destino. Para en cuanto sea seguro y apaga el motor." },
      { tipo: "quiz", pregunta: "Mientras conduces se enciende en rojo el testigo de temperatura del motor. ¿Qué haces?", opciones: ["Seguir, porque se apagará solo", "Parar en cuanto sea seguro y apagar el motor", "Echar agua fría en el depósito mientras conduces"], correcta: 1, explicacion: "El rojo de temperatura indica riesgo grave de sobrecalentamiento. Para en cuanto sea seguro y deja enfriar el motor antes de abrir ningún tapón." }
    ]
  } }
  ,{ tema: "seguridad", despues: "seguridad-mantenimiento-carga", leccion: {
    id: "seguridad-postura",
    titulo: "Postura, cinturón y airbag",
    minutos: 7,
    contenido: [
      { tipo: "p", texto: "Antes de arrancar, el coche tiene que estar bien ajustado para ti. Un asiento mal colocado, un cinturón torcido o un reposacabezas demasiado bajo te hacen más daño en un choque, aunque conduzcas muy bien." },
      { tipo: "p", texto: "**Reposacabezas.** Su parte más alta debe quedar a la altura de la coronilla y lo más cerca posible de la nuca. En un choque por detrás, evita que la cabeza salga hacia atrás de golpe y reduce el riesgo de latigazo cervical." },
      { tipo: "p", texto: "**Cinturón bien colocado.** La banda diagonal cruza el pecho desde el hombro: va sobre la clavícula, nunca bajo el brazo ni sobre el cuello. La banda de cadera va baja, sobre la pelvis, no sobre el abdomen." },
      { tipo: "aviso", texto: "Error frecuente: el cinturón no se pasa por detrás del brazo ni se coloca torcido. Una banda mal puesta pierde buena parte de su protección." },
      { tipo: "p", texto: "**Airbag y distancia.** El airbag del volante se hincha con mucha fuerza. Por eso el pecho debe quedar a unos **25 cm** del volante. Es una recomendación de seguridad: ajusta el asiento y el volante antes de salir." },
      { tipo: "clave", texto: "El airbag **nunca sustituye al cinturón**. Y un SRI mirando hacia atrás **nunca** va en el asiento delantero con el airbag del acompañante activo." },
      { tipo: "lista", items: [
          "**Espalda apoyada** en el respaldo, sin ir tumbado ni inclinado hacia delante.",
          "**Piernas**: con el pedal pisado a fondo, la rodilla debe quedar algo flexionada, sin estirar la pierna del todo.",
          "**Brazos**: algo flexionados al volante, sin ir colgado de él.",
          "**Volante**: regúlalo para que el airbag apunte al pecho, no a la cara."
      ] },
      { tipo: "quiz", pregunta: "¿Dónde debe quedar la parte más alta del reposacabezas?", opciones: ["Por debajo de los hombros", "A la altura de la coronilla, lo más cerca posible de la nuca", "Lo más alto posible, por encima de la cabeza"], correcta: 1, explicacion: "Así la cabeza queda sujeta en un choque por detrás. Un reposacabezas demasiado bajo o alejado no cumple su función." },
      { tipo: "p", texto: "**Espejos.** Se ajustan antes de arrancar. El interior debe mostrarte toda la luneta trasera. Los exteriores deben enseñarte la vía, con la menor parte posible del propio coche." },
      { tipo: "truco", texto: "Truco: ajusta **asiento, reposacabezas, cinturón, volante y espejos antes de arrancar**. Así, en marcha, solo tienes que mirar la carretera." },
      { tipo: "aviso", texto: "Error frecuente: un cojín o cualquier objeto entre tú y el volante puede impedir que el airbag funcione bien. Mantén ese espacio libre." },
      { tipo: "quiz", pregunta: "¿Qué debes hacer si la banda diagonal del cinturón te queda sobre el cuello?", opciones: ["Ajustarla, porque debe pasar sobre la clavícula y el pecho", "Pasarla por debajo del brazo para que quede más suelta", "Nada, el cuello es una zona resistente"], correcta: 0, explicacion: "La banda diagonal debe pasar sobre la clavícula y el pecho. Sobre el cuello puede causar lesiones, y por debajo del brazo el cuerpo se sale de la protección." }
    ]
  } }
  ,{ tema: "seguridad", despues: "seguridad-mantenimiento-carga", leccion: {
    id: "seguridad-abandonar",
    titulo: "Aparcar y bajar del coche con seguridad",
    minutos: 8,
    contenido: [
      { tipo: "p", texto: "Dejar el coche también es una maniobra. Hay que inmovilizarlo, apagarlo y bajar sin poner en peligro a nadie. Un mal aparcamiento o una puerta abierta sin mirar pueden provocar accidentes que se evitan con unos pocos gestos." },
      { tipo: "p", texto: "**Aparcar bien.** Para donde esté permitido y sin molestar al tráfico. Nunca en doble fila ni en zonas prohibidas. El freno de mano va puesto, siempre." },
      { tipo: "lista", items: [
          "**Marcha**: cuesta arriba, **primera**. Cuesta abajo, **marcha atrás**. En automático, la posición **P**.",
          "**Ruedas**: cuesta abajo, gíralas hacia el bordillo. Cuesta arriba, hacia la calzada, alejadas del bordillo. Si el coche se mueve, el bordillo lo frena.",
          "**Freno de mano**: siempre, en cualquier pendiente. La P del automático no lo sustituye."
      ] },
      { tipo: "aviso", texto: "Para un turismo, lo básico es el **freno de mano** y una **marcha puesta**. Girar las ruedas es un hábito muy recomendable, sobre todo en pendientes marcadas." },
      { tipo: "p", texto: "**Al bajar.** Apaga el motor y todas las luces. No dejes el motor en marcha, ni siquiera un momento: es peligroso y facilita los robos." },
      { tipo: "lista", items: [
          "**Mira antes de abrir**: comprueba por el retrovisor si viene alguien, sobre todo ciclistas o motoristas.",
          "**Mano contraria**: abre con la mano más alejada de la puerta. Así giras el cuerpo y miras hacia atrás. Si es la puerta del conductor, con la derecha.",
          "**Baja por la acera**: en la calle, por el lado de la acera. En carretera, por el lado contrario al tráfico, si es seguro."
      ] },
      { tipo: "aviso", texto: "Error frecuente: nunca abras la puerta de golpe. Un ciclista o un motorista que se acerca puede chocar con ella y caer a la calzada." },
      { tipo: "clave", texto: "**Nunca dejes a un niño ni a un animal dentro del coche**, ni siquiera un rato corto. El calor sube muy deprisa en el habitáculo. Y cierra siempre con llave." },
      { tipo: "quiz", pregunta: "Vas a bajar de tu coche aparcado en la calle. ¿Por qué lado debes salir?", opciones: ["Por el lado de la calzada, para salir antes", "Por el lado de la acera", "Por el lado que te quede más cerca, sin mirar"], correcta: 1, explicacion: "Bajando por la acera te alejas del tráfico. Antes de abrir, mira por el retrovisor y usa la mano contraria a la puerta." },
      { tipo: "p", texto: "**Avería en carretera.** Lo primero es hacerte visible. Enciende las luces de emergencia y ponte el **chaleco reflectante** antes de bajar. Después coloca la **baliza V-16** en el techo, en la parte más visible, y sal del carril hacia una zona segura, lejos del tráfico." },
      { tipo: "aviso", texto: "Error frecuente: **nunca repares el coche en plena vía** ni te quedes entre los vehículos. Si no puedes apartarlo, pide ayuda a tu asistencia o al 112 y espera en un lugar seguro." },
      { tipo: "quiz", pregunta: "Tienes una avería en carretera. ¿Qué haces antes de bajar del coche?", opciones: ["Bajar corriendo a mirar el motor", "Encender las luces de emergencia y ponerte el chaleco", "Abrir la puerta de golpe para salir cuanto antes"], correcta: 1, explicacion: "Antes de bajar, enciende las luces de emergencia y ponte el chaleco reflectante. Después coloca la V-16 en el techo y sal hacia una zona segura." }
    ]
  } }
]);
// Resúmenes de 30 segundos
window.RESUMENES = Object.assign(window.RESUMENES || {}, {
  "seguridad-carga-personas": {
    emoji: "",
    idea: "Cargar y viajar bien es cuestión de sujetar, repartir y no pasarse de lo que dice la ficha técnica.",
    puntos: ["**Carga:** sujeta, repartida y sin superar la **MMA** de la ficha técnica.", "**Personas:** nunca más ocupantes que plazas homologadas; menores con SRI y mascotas sujetas.", "**Remolques con el B:** hasta 750 kg sin más; por encima, el conjunto no puede pasar de 3.500 kg."],
    recuerda: "**Sujeta, reparte y no pases de la ficha técnica.**"
  },
  "seguridad-mecanica": {
    emoji: "",
    idea: "Tu coche avisa antes de fallar, con el pedal, el volante, un ruido, el humo o un testigo. Escucharlo a tiempo evita accidentes.",
    puntos: ["**Frenos y dirección:** pedal blando, ruidos, tirones, holguras o vibraciones piden revisión.", "**Testigos:** rojo, para ya; ámbar, revisa pronto; verde o azul, solo informan.", "**Humo:** azul es aceite, negro es combustible de más y blanco espeso puede ser refrigerante."],
    recuerda: "**Rojo, para ya. Ámbar, revisa pronto. Verde o azul, solo informan.**"
  },
  "seguridad-postura": {
    emoji: "",
    idea: "El coche te protege solo si estás bien colocado: cinturón, reposacabezas y airbag dependen de tu postura.",
    puntos: ["**Reposacabezas:** su parte alta a la altura de la coronilla, cerca de la nuca.", "**Cinturón:** banda sobre la clavícula y cadera baja, nunca bajo el brazo ni sobre el cuello.", "**Airbag:** unos 25 cm entre el pecho y el volante; nunca SRI mirando atrás delante con el airbag activo."],
    recuerda: "**Ajusta asiento, reposacabezas, cinturón, volante y espejos antes de arrancar.**"
  },
  "seguridad-abandonar": {
    emoji: "",
    idea: "Dejar el coche también es una maniobra: hay que inmovilizarlo, apagarlo y bajar sin poner en peligro a nadie.",
    puntos: ["**En pendiente:** primera cuesta arriba, marcha atrás cuesta abajo, y el freno de mano siempre.", "**Al bajar:** motor y luces apagados, mira antes de abrir con la mano contraria y baja por la acera.", "**Averiado en carretera:** chaleco antes de bajar, V-16 en el techo y salir hacia una zona segura."],
    recuerda: "**Mira antes de abrir y nunca dejes niños ni animales dentro.**"
  }
});
// Diagramas (2 por lección)
window.DIAGRAMAS = (window.DIAGRAMAS || []).concat([
  { leccion: "seguridad-carga-personas", tras: 5, diagrama: { tipo: "piramide", titulo: "Prioridades al cargar y viajar", niveles: [
    { t: "No superar la MMA", d: "Ocupantes, equipaje y carga suman. Mira la ficha técnica." },
    { t: "Plazas homologadas", d: "Nadie viaja fuera de una plaza con cinturón." },
    { t: "Carga sujeta y abajo", d: "Lo más pesado abajo, centrado y con correas." },
    { t: "Avisar lo que sobresale", d: "Panel V-20 y luz roja con poca visibilidad." }
  ] } },
  { leccion: "seguridad-carga-personas", tras: 9, diagrama: { tipo: "comparar", titulo: "Remolques: hasta dónde llega el B", columnas: [
    { t: "Hasta 750 kg", tono: "ok", items: ["Permiso B, sin más requisitos", "Autovía: 90 km/h máximo", "Carretera convencional: 80 km/h máximo"] },
    { t: "Sobre 750 kg", tono: "warn", items: ["Conjunto de hasta 3.500 kg con el B", "Remolque no más pesado que el coche vacío", "Ambas condiciones a la vez"] },
    { t: "Con el B96", tono: "info", items: ["Conjunto de hasta 4.250 kg", "Autorización complementaria del B", "Requiere una prueba práctica"] }
  ] } },
  { leccion: "seguridad-mecanica", tras: 7, diagrama: { tipo: "comparar", titulo: "Humo del escape: qué significa", columnas: [
    { t: "Azul", tono: "warn", items: ["Se quema aceite del motor", "Suele ser desgaste de piezas internas", "Revisa el nivel y acude al taller"] },
    { t: "Negro", tono: "warn", items: ["Se quema demasiado combustible", "Puede venir de un filtro de aire sucio", "En diésel, inyectores o mala combustión"] },
    { t: "Blanco espeso", tono: "bad", items: ["Puede ser refrigerante quemándose", "Si no cesa con el motor caliente, revisa", "Posible fallo de la junta de culata"] }
  ] } },
  { leccion: "seguridad-mecanica", tras: 10, diagrama: { tipo: "arbol", titulo: "Testigo encendido: ¿sigo o paro?", raiz: {
    q: "¿El testigo que se enciende es rojo?",
    si: { r: "No sigas: para en cuanto sea seguro y apaga el motor", ok: false },
    no: {
      q: "¿Es ámbar o naranja?",
      si: { r: "Puedes seguir, pero revisa el coche pronto", ok: true },
      no: { r: "Verde o azul: solo informa, no pasa nada", ok: true }
    }
  } } },
  { leccion: "seguridad-postura", tras: 4, diagrama: { tipo: "escala", titulo: "Distancia del pecho al volante", unidad: "cm", min: 0, max: 40, tramos: [
    { desde: 0, hasta: 25, t: "Demasiado cerca del airbag", tono: "warn" },
    { desde: 25, hasta: 40, t: "Distancia recomendada", tono: "ok" }
  ], marcas: [
    { v: 25, t: "Unos 25 cm" }
  ] } },
  { leccion: "seguridad-postura", tras: 9, diagrama: { tipo: "flujo", titulo: "Antes de arrancar, en orden", pasos: [
    { t: "Asiento", d: "Espalda apoyada y rodillas algo flexionadas con el pedal a fondo." },
    { t: "Reposacabezas", d: "Su parte alta a la altura de la coronilla, cerca de la nuca." },
    { t: "Cinturón", d: "Banda diagonal sobre la clavícula y cadera baja, sin torcer." },
    { t: "Volante", d: "Brazos algo flexionados y el airbag apuntando al pecho." },
    { t: "Espejos", d: "Interior: toda la luneta. Exterior: la vía y casi nada del coche." }
  ] } },
  { leccion: "seguridad-abandonar", tras: 3, diagrama: { tipo: "arbol", titulo: "Aparcar en pendiente, paso a paso", raiz: {
    q: "¿Has puesto el freno de mano?",
    si: {
      q: "¿El coche está en una pendiente?",
      si: {
        q: "¿El coche mira cuesta abajo?",
        si: { r: "Ruedas hacia el bordillo y marcha atrás", ok: true },
        no: { r: "Ruedas hacia la calzada y primera", ok: true }
      },
      no: { r: "En llano: freno de mano y una marcha, o P", ok: true }
    },
    no: { r: "Peligro: el coche puede rodar, aunque lleve marcha", ok: false }
  } } },
  { leccion: "seguridad-abandonar", tras: 7, diagrama: { tipo: "flujo", titulo: "Al aparcar y bajar", pasos: [
    { t: "Lugar permitido", d: "Aparca donde esté permitido y sin molestar al tráfico." },
    { t: "Freno y marcha", d: "Freno de mano puesto y marcha según la pendiente, o P." },
    { t: "Motor y luces", d: "Apaga el motor y las luces. Nunca lo dejes en marcha." },
    { t: "Mira antes de abrir", d: "Retrovisor, ciclistas y motos. Abre con la mano contraria." },
    { t: "Baja por la acera", d: "En carretera, por el lado contrario al tráfico, si es seguro." }
  ] } }
]);
// Preguntas (lecciones 1 y 2)
window.PREGUNTAS = (window.PREGUNTAS || []).concat([
  { id: "x4-001", tema: "seguridad", pregunta: "¿Dónde conviene colocar la carga más pesada en el maletero?", opciones: ["Abajo y cerca del centro del vehículo", "Arriba, lo más alto posible", "Siempre en el asiento trasero, junto a los pasajeros"], correcta: 0, explicacion: "Lo más pesado abajo y centrado mantiene el coche estable y con buen agarre. Colocado arriba o alejado del centro, el coche se vuelve inestable." },
  { id: "x4-002", tema: "seguridad", pregunta: "¿Dónde figura la masa máxima autorizada (MMA) de tu coche?", opciones: ["En la póliza del seguro", "En el permiso de conducir", "En la ficha técnica, dentro de la tarjeta ITV"], correcta: 2, explicacion: "La MMA aparece en la ficha técnica de la tarjeta ITV. Es el peso máximo del coche cargado, con ocupantes, equipaje y carga, y nunca debe superarse." },
  { id: "x4-003", tema: "seguridad", pregunta: "Vas a llevar una carga que sobresale por la parte trasera de tu turismo. ¿Qué debes utilizar para señalizarla?", opciones: ["Un triángulo de emergencia colgado detrás", "La señal V-20, un panel cuadrado con franjas rojas y blancas", "Una pegatina con el aviso «carga larga»"], correcta: 1, explicacion: "La señal V-20 avisa a los demás conductores de la carga que sobresale. Es un panel cuadrado con franjas rojas y blancas, colocado en el extremo de la carga. Con poca luz, además, hace falta una luz roja." },
  { id: "x4-004", tema: "seguridad", pregunta: "Llevas bicicletas en un portabicicletas que tapa la matrícula y las luces traseras. ¿Qué debes hacer?", opciones: ["Llevar una matrícula y unas luces supletorias, visibles por fuera de la carga", "Nada, la matrícula ya se ve desde lejos", "Quitar la matrícula y circular solo de día"], correcta: 0, explicacion: "La matrícula y las luces traseras deben verse siempre. Si la carga las tapa, hay que añadir una matrícula y unas luces supletorias, visibles por fuera." },
  { id: "x4-005", tema: "seguridad", pregunta: "¿Cuántos pasajeros puedes llevar en un turismo de 5 plazas, contando al conductor?", opciones: ["Cinco pasajeros", "Seis pasajeros", "Cuatro pasajeros"], correcta: 2, explicacion: "Las plazas homologadas incluyen al conductor. En un turismo de 5 plazas caben cuatro pasajeros, cada uno en su plaza y con su cinturón." },
  { id: "x4-006", tema: "seguridad", pregunta: "Llevas a tu perro suelto por el habitáculo del coche. ¿Qué riesgo supone?", opciones: ["Ninguno, siempre que vaya tranquilo", "Puede distraerte y, en un frenazo, salir despedido o caer delante de un asiento", "Solo molesta a los demás pasajeros"], correcta: 1, explicacion: "Un animal suelto distrae al conductor y, en un frenazo o un choque, puede convertirse en un proyectil. Debe ir sujeto con un arnés homologado o en un transportín bien fijado." },
  { id: "x4-007", tema: "seguridad", pregunta: "Con el permiso B, ¿hasta qué masa máxima puede tener un remolque sin condiciones adicionales?", opciones: ["Hasta 750 kg", "Hasta 1.500 kg", "Hasta 3.500 kg"], correcta: 0, explicacion: "Con el B, los remolques de hasta 750 kg de MMA no tienen condiciones adicionales. Por encima, el conjunto no puede superar 3.500 kg." },
  { id: "x4-008", tema: "seguridad", pregunta: "Con un remolque ligero enganchado a tu turismo, ¿cuál es la velocidad máxima en una carretera convencional?", opciones: ["90 km/h", "100 km/h", "80 km/h"], correcta: 2, explicacion: "Con remolque ligero, el turismo no puede superar 80 km/h en carretera convencional. Sin remolque, en esas carreteras el límite para turismos es de 90 km/h." },
  { id: "x4-009", tema: "seguridad", pregunta: "¿Qué autorización necesitas para conducir un conjunto de hasta 4.250 kg de masa máxima?", opciones: ["Solo el permiso B, sin nada más", "El B96, una autorización complementaria del B que exige superar una prueba práctica", "El permiso C1"], correcta: 1, explicacion: "El B96 es una autorización complementaria del B. Permite conjuntos de hasta 4.250 kg, pero hay que superar una prueba práctica específica. La formación previa es muy recomendable." },
  { id: "x4-010", tema: "seguridad", pregunta: "¿Qué ocurre si superas la masa máxima autorizada de tu coche?", opciones: ["Aumenta la distancia de frenado y empeora el control del coche", "Nada, si el coche aguanta el viaje", "Solo sube el consumo de combustible"], correcta: 0, explicacion: "El exceso de peso alarga la distancia de frenado y empeora la estabilidad y la dirección. Por eso la MMA nunca debe superarse." },
  { id: "x4-011", tema: "seguridad", pregunta: "¿Cuál de estas cargas está bien llevada?", opciones: ["Una caja suelta en el habitáculo, para tenerla a mano", "Un bulto tumbado sobre el asiento trasero, sin sujetar", "Una caja sujeta con correas en el maletero, abajo y centrada"], correcta: 2, explicacion: "La carga debe ir sujeta, en su sitio y lo más abajo y centrada posible. Nada suelto en el habitáculo: en un frenazo sale despedido y puede herir a alguien." },
  { id: "x4-012", tema: "seguridad", pregunta: "¿Dónde deben viajar los pasajeros de un turismo?", opciones: ["En la zona de carga, si hay sitio", "En las plazas homologadas, cada uno con su cinturón", "En el maletero, si va cerrado con llave"], correcta: 1, explicacion: "Los pasajeros viajan siempre en plazas homologadas y con cinturón abrochado. La zona de carga y el maletero nunca son asientos." },
  { id: "x4-013", tema: "seguridad", pregunta: "Al frenar, tu coche tira hacia un lado. ¿Qué puede ser?", opciones: ["Un problema de frenos, suspensión o neumático en ese lado", "Es normal si el coche es grande", "Un exceso de aceite en el motor"], correcta: 0, explicacion: "Un tirón al frenar indica desgaste o avería en un lado: pastillas, disco o pinza, neumático o suspensión. Revísalo en el taller cuanto antes." },
  { id: "x4-014", tema: "seguridad", pregunta: "El pedal del freno se hunde mucho más de lo normal y se siente blando. ¿Qué debes hacer?", opciones: ["Seguir con cuidado, ya se arreglará solo", "Pisar con más fuerza para compensar", "Reducir la velocidad, parar en cuanto sea seguro y revisar el sistema de frenos"], correcta: 2, explicacion: "Un pedal esponjoso puede indicar aire o una fuga en el circuito de frenos. No lo ignores: reduce la velocidad, para en cuanto puedas y acude a un taller." },
  { id: "x4-015", tema: "seguridad", pregunta: "¿Qué indica que los amortiguadores están gastados?", opciones: ["Que el motor consume más aceite", "Que el coche rebota mucho tras los baches y se balancea en las curvas", "Que los frenos suenan al arrancar"], correcta: 1, explicacion: "Unos amortiguadores gastados hacen que el coche rebote y se balancee. Además, pueden alargar la distancia de frenado." },
  { id: "x4-016", tema: "seguridad", pregunta: "Los neumáticos se gastan mucho más por un borde que por el resto. ¿Qué puede indicar?", opciones: ["Que los neumáticos están nuevos", "Que hay que cambiar el aceite del motor", "Que la presión, la alineación o la suspensión necesitan revisión"], correcta: 2, explicacion: "El desgaste irregular suele deberse a una presión incorrecta, a la alineación de las ruedas o a la suspensión. Lleva el coche al taller para revisarlo." },
  { id: "x4-017", tema: "seguridad", pregunta: "Al girar el volante notas mucho juego y el coche tarda en responder. ¿Qué puede ser?", opciones: ["Holguras en la dirección", "Exceso de presión en el limpiaparabrisas", "Que el claxon está gastado"], correcta: 0, explicacion: "El juego excesivo en el volante son holguras en la dirección. Afecta directamente al control del coche, así que hay que revisarlo en el taller." },
  { id: "x4-018", tema: "seguridad", pregunta: "Tu coche echa humo negro por el escape. ¿Qué indica?", opciones: ["Agua en el motor", "Exceso de combustible sin quemar", "Aceite nuevo"], correcta: 1, explicacion: "El humo negro indica que se quema demasiado combustible. Puede venir de un filtro de aire sucio o de un inyector averiado; conviene revisarlo." },
  { id: "x4-019", tema: "seguridad", pregunta: "¿Qué humo puede indicar que el refrigerante se está quemando?", opciones: ["Negro y con olor a gasolina", "Azul fino que aparece solo al arrancar", "Blanco espeso que no desaparece con el motor caliente"], correcta: 2, explicacion: "El humo blanco espeso y continuo, que no desaparece con el motor caliente, puede deberse a refrigerante quemándose. La nube blanca fina al arrancar en frío es condensación normal." },
  { id: "x4-020", tema: "seguridad", pregunta: "Se enciende un testigo rojo mientras conduces. ¿Qué significa?", opciones: ["Peligro o parada inmediata: para en cuanto sea seguro", "Atención: revisa el coche en unos días", "Que las luces están encendidas y no pasa nada"], correcta: 0, explicacion: "El rojo indica peligro o parada inmediata. Para en cuanto sea seguro, apaga el motor y revisa el problema. El ámbar avisa de revisar pronto, y el verde o el azul solo informan." },
  { id: "x4-021", tema: "seguridad", pregunta: "Se enciende un testigo ámbar con forma de motor. ¿Qué debes hacer?", opciones: ["Parar de inmediato en la vía", "Seguir con cuidado y revisar el coche pronto", "Ignorarlo, porque es solo informativo"], correcta: 1, explicacion: "El ámbar avisa de una avería que hay que revisar pronto. No obliga a parar en el acto, pero no debes dejarlo sin revisar." },
  { id: "x4-022", tema: "seguridad", pregunta: "¿De qué color es el testigo que solo informa, como el de las luces de cruce?", opciones: ["Rojo", "Ámbar o naranja", "Verde o azul"], correcta: 2, explicacion: "Los testigos verdes y azules solo informan del estado de un sistema, como las luces de cruce o los intermitentes. No obligan a parar." },
  { id: "x4-023", tema: "seguridad", pregunta: "Al arrancar, se enciende el testigo rojo de frenos. ¿Qué comprobarías primero?", opciones: ["Que el freno de mano no está puesto", "Que el claxon funciona bien", "Que la luz de la matrícula funciona"], correcta: 0, explicacion: "El testigo de frenos puede encenderse porque el freno de mano está accionado. Compruébalo primero. Si sigue encendido con el freno suelto, no sigas conduciendo y acude al taller." },
  { id: "x4-024", tema: "seguridad", pregunta: "Una luz de posición trasera se ha fundido. ¿Por qué conviene cambiarla pronto?", opciones: ["Porque el coche no puede circular de noche", "Porque reduce tu visibilidad y tu señalización ante los demás", "No importa mientras funcionen las demás luces"], correcta: 1, explicacion: "Cada luz sirve para que te vean y para avisar de tus maniobras. Una luz fundida reduce tu visibilidad y tu señalización: cámbiala cuanto antes." }
]);
// Preguntas (lecciones 3 y 4)
window.PREGUNTAS = (window.PREGUNTAS || []).concat([
  { id: "x4-025", tema: "seguridad", pregunta: "Un reposacabezas está muy bajo y lejos de la cabeza. ¿Qué riesgo aumenta?", opciones: ["El riesgo de quemaduras con el motor caliente", "Ninguno, es solo una cuestión de comodidad", "El riesgo de latigazo cervical en un choque por detrás"], correcta: 2, explicacion: "Con el reposacabezas bajo o lejos, la cabeza se va hacia atrás sin sujeción en un choque por alcance, y aumenta el riesgo de latigazo cervical." },
  { id: "x4-026", tema: "seguridad", pregunta: "¿Por dónde debe pasar la banda diagonal del cinturón?", opciones: ["Por debajo del brazo, para estar más cómodo", "Sobre la clavícula y el pecho, sin torcerse", "Sobre el cuello, para sujetar mejor la cabeza"], correcta: 1, explicacion: "La banda diagonal cruza el pecho desde el hombro, sobre la clavícula. Por debajo del brazo o sobre el cuello no protege bien y puede causar lesiones." },
  { id: "x4-027", tema: "seguridad", pregunta: "¿Dónde debe ir la banda de cadera del cinturón?", opciones: ["Baja, sobre la pelvis o la cadera", "Sobre el abdomen, para no apretar", "Sobre el pecho, junto a la banda diagonal"], correcta: 0, explicacion: "La banda de cadera va baja, sobre la pelvis. Así el cuerpo no se desliza por debajo del cinturón en un frenazo o un choque." },
  { id: "x4-028", tema: "seguridad", pregunta: "¿A qué distancia aproximada del volante debe estar el pecho del conductor?", opciones: ["Pegado al volante, para controlarlo mejor", "A más de un metro, para estar cómodo", "Unos 25 cm"], correcta: 2, explicacion: "Con unos 25 cm de distancia, el airbag puede hincharse sin golpear con fuerza al conductor. Es una recomendación de seguridad." },
  { id: "x4-029", tema: "seguridad", pregunta: "Antes de arrancar, ¿en qué orden conviene ajustar el coche?", opciones: ["Primero el asiento; después el cinturón, el reposacabezas, el volante y los espejos", "Primero los espejos; después el asiento, el cinturón y el volante", "Primero el volante; después los espejos; el asiento, al final"], correcta: 0, explicacion: "Empezar por el asiento es lo práctico, porque cambia la posición de todo lo demás. Los espejos se ajustan al final, cuando ya estás en tu posición de conducción." },
  { id: "x4-030", tema: "seguridad", pregunta: "¿Qué debe mostrar el espejo retrovisor interior bien ajustado?", opciones: ["Solo el techo del coche", "Toda la luneta trasera", "El asiento del acompañante"], correcta: 1, explicacion: "El espejo interior debe enseñarte toda la luneta trasera, para ver lo que viene detrás sin girar la cabeza en exceso." },
  { id: "x4-031", tema: "seguridad", pregunta: "¿Qué debe enseñar un espejo exterior bien ajustado?", opciones: ["La vía que queda detrás y el lateral, con la menor parte posible del propio coche", "Solo la carrocería del coche, para no ver el tráfico", "El interior del coche y los pasajeros"], correcta: 0, explicacion: "El espejo exterior sirve para ver la vía. Si enseña demasiado del propio coche, reduce lo que puedes ver del tráfico que se acerca." },
  { id: "x4-032", tema: "seguridad", pregunta: "¿Qué puede impedir que el airbag del volante funcione bien?", opciones: ["Llevar las manos en el volante", "Llevar el cinturón abrochado", "Un cojín o un objeto colocado entre tú y el volante"], correcta: 2, explicacion: "Cualquier objeto entre el conductor y el volante puede impedir que el airbag se despliegue bien, o hacer que te golpee de forma peligrosa." },
  { id: "x4-033", tema: "seguridad", pregunta: "Conduces con el asiento muy adelantado y el volante casi tocándote el pecho. ¿Qué riesgo hay?", opciones: ["Ninguno, así controlas mejor el coche", "Un airbag que, al hincharse, puede golpearte con fuerza", "Solo se gasta más combustible"], correcta: 1, explicacion: "Demasiado cerca del volante, el airbag te golpea con fuerza al hincharse. Por eso el pecho debe quedar a unos 25 cm." },
  { id: "x4-034", tema: "seguridad", pregunta: "Al pisar a fondo el embrague, ¿cómo deben quedar las rodillas?", opciones: ["Ligeramente flexionadas", "Completamente estiradas", "Pegadas al pecho"], correcta: 0, explicacion: "Con las rodillas algo flexionadas puedes pisar a fondo sin forzar la postura. Con la pierna del todo estirada, la postura queda forzada y pierdes control del pedal." },
  { id: "x4-035", tema: "seguridad", pregunta: "Una persona lleva el cinturón solo sobre el hombro, sin la banda de cadera. ¿Qué ocurre?", opciones: ["Está bien colocado, porque el hombro es lo más importante", "La banda de cadera ya no sujeta bien el cuerpo en un choque", "No pasa nada si el trayecto es corto"], correcta: 1, explicacion: "Las dos bandas trabajan juntas: la de cadera sujeta la pelvis y la del hombro, el pecho. Sin la de cadera, el cuerpo se desliza y pierde protección." },
  { id: "x4-036", tema: "seguridad", pregunta: "¿Cómo debes ajustar el volante para que el airbag proteja bien al conductor?", opciones: ["Dirigido hacia la cara, para ver mejor el cuadro", "Muy bajo, pegado al asiento", "Para que el airbag apunte al pecho, no a la cara"], correcta: 2, explicacion: "El airbag se despliega hacia el conductor. Ajustar el volante para que apunte al pecho, y no a la cara, reduce el riesgo de lesiones." },
  { id: "x4-037", tema: "seguridad", pregunta: "Aparcas cuesta abajo. ¿Hacia dónde giras las ruedas delanteras?", opciones: ["Hacia el bordillo", "Hacia el centro de la calzada", "Da igual la posición de las ruedas"], correcta: 0, explicacion: "Cuesta abajo, las ruedas se giran hacia el bordillo: si el coche se mueve, la rueda topa con él y se detiene. Cuesta arriba, es al revés: se alejan del bordillo." },
  { id: "x4-038", tema: "seguridad", pregunta: "Aparcas cuesta arriba con cambio manual. ¿Qué marcha debes dejar puesta?", opciones: ["Marcha atrás", "Quinta", "Primera"], correcta: 2, explicacion: "Cuesta arriba se deja primera, además del freno de mano. Cuesta abajo, lo habitual es dejar marcha atrás." },
  { id: "x4-039", tema: "seguridad", pregunta: "En un coche automático, ¿qué posición de la palanca debes poner al aparcar?", opciones: ["N (neutro), porque así el coche no se mueve", "P (estacionamiento)", "D (marcha)"], correcta: 1, explicacion: "La posición P bloquea la transmisión. Aun así, el freno de mano también debe ir puesto: la P no lo sustituye." },
  { id: "x4-040", tema: "seguridad", pregunta: "Vas a salir del coche aparcado. ¿Qué debes hacer con el motor?", opciones: ["Dejarlo en marcha por si hay que moverlo", "Apagarlo y poner el freno de mano", "Dejarlo arrancado con las luces de cruce"], correcta: 1, explicacion: "Antes de bajar, apaga el motor y pon el freno de mano. No dejes el motor en marcha: es peligroso y facilita los robos." },
  { id: "x4-041", tema: "seguridad", pregunta: "Vas a abrir la puerta del conductor de un coche aparcado. ¿Cómo debes hacerlo?", opciones: ["Sin mirar, porque ya te avisará el claxon", "Con la mano izquierda, la más cercana a la puerta", "Con la mano derecha, la más alejada, mirando hacia atrás"], correcta: 2, explicacion: "Abrir con la mano más alejada de la puerta te obliga a girar el cuerpo y mirar hacia atrás. Así ves ciclistas o motos que se acercan." },
  { id: "x4-042", tema: "seguridad", pregunta: "Antes de salir del coche aparcado, ¿qué debes hacer con las luces?", opciones: ["Apagarlas junto con el motor", "Dejar las de cruce encendidas por si acaso", "Dejar solo las de posición"], correcta: 0, explicacion: "Antes de bajar apagas el motor y las luces. Dejarlas encendidas gasta la batería sin ningún beneficio." },
  { id: "x4-043", tema: "seguridad", pregunta: "Vas a ausentarte cinco minutos con el coche cerrado. ¿Qué no puedes dejar dentro?", opciones: ["Nada, el coche está cerrado con llave", "Un niño o un animal", "Las gafas de sol"], correcta: 1, explicacion: "Nunca dejes niños ni animales dentro, ni siquiera un rato corto: el calor sube muy deprisa y pueden sufrir un golpe de calor." },
  { id: "x4-044", tema: "seguridad", pregunta: "En carretera, con una avería, ¿hacia dónde debes salir del vehículo?", opciones: ["Hacia la calzada, para ver el tráfico", "Por el carril izquierdo, junto a la mediana", "Hacia el lado opuesto al tráfico, si es seguro"], correcta: 2, explicacion: "Sal por el lado contrario al tráfico, si es seguro, para no quedar frente a los coches que pasan. Después, ponte a salvo en una zona segura." },
  { id: "x4-045", tema: "seguridad", pregunta: "Tu coche se avería en un carril de una autovía. ¿Qué debes hacer?", opciones: ["Sacarlo hacia el arcén si puedes, encender las luces de emergencia y colocar la V-16", "Repararlo allí mismo para no obstruir el arcén", "Dejarlo en el carril y encender solo las luces de cruce"], correcta: 0, explicacion: "Saca el coche del carril hacia el arcén si puedes, enciende las luces de emergencia y coloca la baliza V-16. Nunca repares el coche en plena vía." },
  { id: "x4-046", tema: "seguridad", pregunta: "Desde el 1 de enero de 2026, ¿qué señal de avería es obligatoria para un turismo?", opciones: ["Solo el triángulo, como siempre", "La baliza V-16 conectada", "Una bandera roja"], correcta: 1, explicacion: "Desde 2026, la baliza V-16 conectada es la señal obligatoria para turismos. Los triángulos ya no bastan por sí solos." },
  { id: "x4-047", tema: "seguridad", pregunta: "¿Qué puede pasar si abres la puerta de golpe sin mirar?", opciones: ["Nada, las puertas tienen freno", "Solo se raya la pintura del coche de al lado", "Un ciclista o motorista puede chocar con ella y caer a la calzada"], correcta: 2, explicacion: "Abrir sin mirar puede hacer que un ciclista o un motorista choque con la puerta y caiga a la calzada, con consecuencias graves." },
  { id: "x4-048", tema: "seguridad", pregunta: "Al aparcar en una pendiente, ¿qué debes dejar siempre puesto?", opciones: ["El freno de mano y una marcha, o la P en automático", "Solo el claxon, para avisar de que estás parado", "Las luces de carretera, por si alguien pasa"], correcta: 0, explicacion: "En pendiente, el freno de mano y una marcha (o la P en automático) sujetan el coche. Girar las ruedas hacia el bordillo es un buen hábito adicional." }
]);
// Tarjetas (5 por lección)
window.FLASHCARDS = (window.FLASHCARDS || []).concat([
  { id: "fx4-001", tema: "seguridad", emoji: "", frente: "¿Qué es la MMA de un vehículo?", dorso: "**Masa máxima autorizada**: el peso total del coche cargado, con ocupantes, equipaje y carga", nota: "Figura en la ficha técnica, dentro de la tarjeta ITV. Nunca debe superarse." },
  { id: "fx4-002", tema: "seguridad", emoji: "", frente: "¿Dónde debe ir la carga más pesada?", dorso: "**Abajo y cerca del centro** del vehículo", nota: "Así el coche sigue estable y con buen agarre." },
  { id: "fx4-003", tema: "seguridad", emoji: "", frente: "¿Cómo se avisa de una carga que sobresale por detrás?", dorso: "Con la **señal V-20**: panel cuadrado con franjas rojas y blancas", nota: "Con poca luz, además, hace falta una luz roja." },
  { id: "fx4-004", tema: "seguridad", emoji: "", frente: "Remolque ligero de hasta 750 kg con el permiso B: ¿qué velocidad máxima en autovía?", dorso: "**90 km/h**; en carretera convencional, **80 km/h**", nota: "Sin remolque, el turismo va a 120 km/h en autovía." },
  { id: "fx4-005", tema: "seguridad", emoji: "", frente: "¿Qué autorización cubre conjuntos de hasta 4.250 kg?", dorso: "**El B96**, una autorización complementaria del B", nota: "Para obtenerla hay que superar una prueba práctica específica." },
  { id: "fx4-006", tema: "seguridad", emoji: "", frente: "Al frenar, el pedal se hunde y se siente blando: ¿qué puede ser?", dorso: "**Aire o fuga en el circuito de frenos**: no sigas, para y revisa", nota: "No es una molestia: el freno puede fallar." },
  { id: "fx4-007", tema: "seguridad", emoji: "", frente: "Humo azul por el escape: ¿qué se está quemando?", dorso: "**Aceite** del motor", nota: "Negro: combustible en exceso. Blanco espeso y continuo: posible refrigerante." },
  { id: "fx4-008", tema: "seguridad", emoji: "", frente: "Testigo rojo encendido en marcha: ¿qué haces?", dorso: "**Parar en cuanto sea seguro** y apagar el motor", nota: "El rojo indica peligro o parada inmediata." },
  { id: "fx4-009", tema: "seguridad", emoji: "", frente: "Testigo ámbar o naranja: ¿qué significa?", dorso: "**Atención**: revisa pronto (motor, ABS, ESP, presión de neumáticos o airbag)", nota: "Puedes seguir, pero acude al taller pronto." },
  { id: "fx4-010", tema: "seguridad", emoji: "", frente: "El coche tira hacia un lado al frenar: ¿qué puede ser?", dorso: "**Desgaste o avería en un lado**: freno, neumático o suspensión", nota: "Revísalo en el taller cuanto antes." },
  { id: "fx4-011", tema: "seguridad", emoji: "", frente: "¿Dónde debe quedar el reposacabezas?", dorso: "**Su parte alta a la altura de la coronilla**, lo más cerca posible de la nuca", nota: "Evita el latigazo cervical en un choque por detrás." },
  { id: "fx4-012", tema: "seguridad", emoji: "", frente: "¿Por dónde debe pasar la banda diagonal del cinturón?", dorso: "**Sobre la clavícula y el pecho**, nunca bajo el brazo ni sobre el cuello", nota: "La banda de cadera va baja, sobre la pelvis." },
  { id: "fx4-013", tema: "seguridad", emoji: "", frente: "¿A qué distancia del volante debe estar el pecho del conductor?", dorso: "**Unos 25 cm**", nota: "Es una recomendación de seguridad para que el airbag actúe bien." },
  { id: "fx4-014", tema: "seguridad", emoji: "", frente: "Antes de arrancar, ¿qué ajustas primero?", dorso: "**El asiento**; después, cinturón, reposacabezas, volante y espejos", nota: "Cambiar el asiento modifica la postura de todo lo demás." },
  { id: "fx4-015", tema: "seguridad", emoji: "", frente: "¿Qué debe mostrar el espejo interior?", dorso: "**Toda la luneta trasera**", nota: "El exterior muestra la vía, con muy poco del propio coche." },
  { id: "fx4-016", tema: "seguridad", emoji: "", frente: "Aparcas cuesta arriba: ¿qué marcha dejas puesta?", dorso: "**Primera**, con el freno de mano; en automático, P", nota: "Cuesta abajo, marcha atrás." },
  { id: "fx4-017", tema: "seguridad", emoji: "", frente: "Aparcas cuesta abajo: ¿hacia dónde giras las ruedas?", dorso: "**Hacia el bordillo**; cuesta arriba, hacia la calzada", nota: "Si el coche se mueve, el bordillo lo frena." },
  { id: "fx4-018", tema: "seguridad", emoji: "", frente: "¿Con qué mano abres la puerta para ver si viene alguien?", dorso: "**Con la mano más alejada de la puerta**, mirando hacia atrás", nota: "En la puerta del conductor, con la derecha." },
  { id: "fx4-019", tema: "seguridad", emoji: "", frente: "¿Por qué lado debes bajar de un coche aparcado en la calle?", dorso: "**Por el lado de la acera**", nota: "En carretera, por el lado contrario al tráfico, si es seguro." },
  { id: "fx4-020", tema: "seguridad", emoji: "", frente: "¿Qué debes ponerte antes de bajar en una avería en carretera?", dorso: "**El chaleco reflectante**", nota: "Después, la V-16 en el techo y salir hacia una zona segura." }
]);
