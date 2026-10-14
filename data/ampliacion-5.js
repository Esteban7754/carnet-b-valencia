// Ampliacion 5: lecciones nuevas de velocidad (estabilidad en curvas) y factores (percepcion y decisiones).
window.AMPLIACION = (window.AMPLIACION || []).concat([
  { tema: "velocidad", despues: "velocidad-distancia-seguridad",
    leccion: { id: "velocidad-curvas-estabilidad", titulo: "Estabilidad en curvas: cómo tomarlas sin perder el control", minutos: 8, contenido: [
      { tipo: "p", texto: "Cuando giras, el coche **quiere seguir recto**. Lo que lo obliga a curvar es el **agarre** de los neumáticos con el asfalto. Si le pides más agarre del que hay, el coche se desliza. Por eso las curvas son uno de los momentos de mayor riesgo al volante." },
      { tipo: "clave", texto: "**La fuerza centrífuga empuja el coche hacia fuera de la curva.** Crece con el **cuadrado** de la velocidad y es mayor cuanto más cerrada es la curva. Cuanto más deprisa y más cerrada, más empuje." },
      { tipo: "tabla", cabecera: ["Velocidad en la misma curva", "Empuje hacia fuera, comparado con ir a 60 km/h"], filas: [
          ["60 km/h (la referencia)", "1 vez"],
          ["120 km/h, el doble", "4 veces más"],
          ["180 km/h, el triple", "9 veces más"]
      ] },
      { tipo: "lista", items: [
          "**Antes de entrar**: frena con el coche recto, hasta una velocidad que puedas mantener en la curva.",
          "**Dentro de la curva**: velocidad constante y volante suave, sin frenar ni acelerar de golpe. Mira hacia la salida.",
          "**A la salida**: acelera suavemente, cuando el coche ya se esté enderezando."
      ] },
      { tipo: "aviso", texto: "**Trampa típica: frenar mientras giras.** Si frenas dentro de la curva, el peso se va hacia delante, el agarre se reparte mal y el coche puede derrapar. Frena siempre **antes**, con el volante recto." },
      { tipo: "p", texto: "**La trazada** es la línea por la que pasas la curva: entra por el lado exterior, acércate al interior hacia la mitad y vuelve al exterior al salir. En muchas curvas la calzada tiene **peralte**, es decir, está inclinada hacia dentro, y eso ayuda a sujetar el coche. Nunca invadas el carril contrario para «abrir» la curva: tu sitio es tu carril." },
      { tipo: "lista", items: [
          "**Subviraje**: pierden agarre las ruedas de **delante**. Giras el volante, pero el coche sigue recto y se va hacia fuera.",
          "**Sobreviraje**: pierden agarre las ruedas de **detrás**. La parte trasera se desliza hacia fuera y el coche gira más de lo que quieres."
      ] },
      { tipo: "clave", texto: "**Qué hacer.** Con **subviraje**, suelta el acelerador y **no gires más** el volante. Con **sobreviraje**, suelta el acelerador, no frenes de golpe y mira hacia donde quieres ir, corrigiendo con suavidad." },
      { tipo: "p", texto: "**Peso y carga**: el **centro de gravedad** es el punto donde se concentra el peso del coche. La carga en el techo o en la baca lo **eleva**: el coche se inclina más en la curva y es más fácil que vuelque. Lo que va suelto dentro del coche se desplaza en la curva y desequilibra el vehículo de golpe." },
      { tipo: "p", texto: "**Neumáticos y suspensión** son la unión del coche con el asfalto. Con neumáticos gastados (el dibujo debe tener al menos **1,6 mm**, como viste en seguridad), presión incorrecta o amortiguadores desgastados, el agarre en curva baja mucho y el coche balancea más." },
      { tipo: "p", texto: "**Viento lateral**: empuja el coche hacia un lado. Se nota en puentes y zonas abiertas, al salir de un túnel y al cruzarte con un camión. Los vehículos altos y ligeros son los más afectados. Sujeta bien el volante, reduce la velocidad y anticípate a las rachas." },
      { tipo: "p", texto: "**El ESP** (control electrónico de estabilidad) detecta cuándo el coche se desvía de la trayectoria que marca el volante. Entonces frena una rueda por separado y reduce potencia para corregirlo. Es obligatorio en los turismos nuevos desde 2014. Pero **no hace milagros**: si entras demasiado deprisa, el ESP no evita que el coche se salga." },
      { tipo: "quiz", pregunta: "Tomas una curva a 60 km/h. Si pasas a 120 km/h por la misma curva, ¿cuánto aumenta el empuje hacia fuera?", opciones: ["El doble", "Cuatro veces más", "Un 10 % más"], correcta: 1, explicacion: "La fuerza centrífuga crece con el cuadrado de la velocidad: el doble de velocidad son cuatro veces más empuje. Por eso la velocidad en curva es tan importante." },
      { tipo: "quiz", pregunta: "Giras el volante en una curva, pero el coche sigue recto y se va hacia fuera. ¿Qué ha pasado?", opciones: ["Sobreviraje: se ha ido la parte trasera", "Subviraje: las ruedas de delante han perdido agarre", "Es normal en cualquier curva y no hay que hacer nada"], correcta: 1, explicacion: "Cuando el coche tiende a seguir recto y se va hacia fuera pese a girar el volante, son las ruedas de delante las que pierden agarre: eso es subviraje." }
    ] } },
  { tema: "factores", despues: "factores-vision-sanciones",
    leccion: { id: "factores-percepcion", titulo: "Percepción y decisiones: ver, decidir y actuar a tiempo", minutos: 8, contenido: [
      { tipo: "p", texto: "Conducir es un proceso que repites **una y otra vez**, casi sin darte cuenta. Tiene tres fases: **percibir**, **decidir** y **actuar**. Si una de ellas falla, el peligro te pilla por sorpresa, aunque conduzcas bien." },
      { tipo: "lista", items: [
          "**Percibir**: mirar y escuchar para detectar lo importante: un peatón que se acerca al paso, un coche que frena o una señal.",
          "**Decidir**: valorar el riesgo y elegir qué hacer: frenar, reducir, ceder el paso o mantener la marcha.",
          "**Actuar**: ejecutar lo que has decidido con el volante, el freno o el acelerador, y hacerlo a tiempo."
      ] },
      { tipo: "p", texto: "**El tiempo de reacción** es lo que tardas desde que percibes el peligro hasta que empiezas a actuar. En una persona en buen estado suele estar entre **0,5 y 1 segundo**. En los cálculos del temario usamos **1 segundo** como cifra práctica. Y mientras reaccionas, el coche sigue avanzando: a 120 km/h, cada segundo son unos **33 metros**." },
      { tipo: "tabla", cabecera: ["Lo que te pasa", "Lo que le pasa a tu reacción"], filas: [
          ["Alcohol o drogas", "Reaccionas más tarde y juzgas mal la distancia y la velocidad"],
          ["Cansancio o sueño", "Tardas más en notar el peligro, y puedes dormirte un instante"],
          ["Distracciones (móvil, radio, niños)", "Tu atención está en otra cosa cuando aparece el peligro"],
          ["Edad avanzada", "Los reflejos suelen ser más lentos, y cuesta más atender varias cosas a la vez"]
      ] },
      { tipo: "p", texto: "**Campo visual**: es todo lo que ves sin mover la cabeza, de frente y a los lados. Cuanto más deprisa vas, más se **estrecha**: te fijas en el centro de la carretera y ves menos lo que pasa a los lados. Es la **visión de túnel**. Por eso, a más velocidad, un peatón que aparece en la acera o una bici que llega por un lateral pueden pasar desapercibidos." },
      { tipo: "p", texto: "**Algunas enfermedades afectan a la conducción**: tocan la vista, la atención o la conciencia, y no siempre se notan. Las más importantes son estas:" },
      { tipo: "lista", items: [
          "**Diabetes**: si el azúcar baja demasiado (hipoglucemia), puedes marearte, sudar, confundirte o perder el conocimiento.",
          "**Epilepsia**: una crisis puede dejarte sin conocimiento de golpe. El médico valora cada caso y dice si puedes conducir y en qué condiciones.",
          "**Problemas de corazón**: arritmias o insuficiencia cardiaca pueden causar mareos y falta de fuerzas.",
          "**Apnea del sueño**: las pausas de respiración por la noche te dejan cansado de día y pueden causar microsueños.",
          "**Problemas de vista**: una visión reducida o un campo visual recortado, por ejemplo por glaucoma, te hacen ver menos peligros."
      ] },
      { tipo: "clave", texto: "**Declara tus enfermedades y tratamientos en el reconocimiento médico.** Sin esa información, el médico no puede valorar si puedes conducir con seguridad. Ocultarlas pone en riesgo tu vida y la de los demás." },
      { tipo: "p", texto: "**Las emociones también cambian cómo percibes y decides.** No conduces igual tranquilo que enfadado, nervioso o eufórico:" },
      { tipo: "lista", items: [
          "**Enfado y prisa**: te fijas solo en lo que te molesta, adelantas sin mirar y te vuelves agresivo.",
          "**Estrés o nervios**: la visión se estrecha más y es fácil cometer errores sencillos.",
          "**Tristeza**: tu cabeza está en otra cosa y tu atención baja.",
          "**Euforia**: te crees invencible, subes la velocidad y ves menos riesgos."
      ] },
      { tipo: "truco", texto: "**Antes de arrancar, pregúntate:** ¿estoy descansado, tranquilo y sin alcohol ni drogas? Si una respuesta es no, espera o deja que conduzca otra persona." },
      { tipo: "lista", items: [
          "Descansa bien y haz una pausa cada 2 horas o 200 km.",
          "Deja el móvil fuera de tu alcance y prepara el GPS y la música antes de arrancar.",
          "Mira lejos, a los lados y a los espejos, no solo al coche de delante.",
          "Anticípate: piensa qué puede pasar si ese peatón se mueve o ese coche frena.",
          "No conduzcas con sueño, con alcohol ni con medicamentos que te den somnolencia."
      ] },
      { tipo: "quiz", pregunta: "¿Qué le pasa a tu campo visual cuando aumentas la velocidad?", opciones: ["Se estrecha: ves menos a los lados", "Se amplía porque ves más lejos", "No cambia nunca"], correcta: 0, explicacion: "A mayor velocidad el campo visual se estrecha y aparece la visión de túnel: te fijas en lo que tienes delante y se te escapan los laterales." },
      { tipo: "quiz", pregunta: "Te han diagnosticado una enfermedad que puede afectar a la conducción. ¿Qué debes hacer?", opciones: ["Ocultarla si te encuentras bien", "Declararla en el reconocimiento médico y seguir las indicaciones del médico", "Declararla solo si un agente te lo pregunta"], correcta: 1, explicacion: "Hay que contarla en el reconocimiento médico y seguir las indicaciones del médico. Encontrarte bien no garantiza que puedas conducir con seguridad." }
    ] } }
]);
window.RESUMENES = Object.assign(window.RESUMENES || {}, {
  "velocidad-curvas-estabilidad": {
    emoji: "",
    idea: "En una curva el coche quiere seguir recto: el agarre de los neumáticos lo sujeta, y cuanto más deprisa y más cerrada es la curva, más empuje hacia fuera recibe.",
    puntos: [
      "La **fuerza centrífuga** crece con el **cuadrado** de la velocidad: el doble de velocidad son **cuatro veces** más empuje.",
      "Frena **antes** de entrar, mantén una velocidad estable dentro y acelera **suavemente** al salir.",
      "**Subviraje**: pierden agarre las ruedas de delante y el coche se va recto. **Sobreviraje**: pierden agarre las de detrás y el coche gira de más."
    ],
    recuerda: "**Frena antes, no dentro.** Si el coche se va de frente, no gires más; si gira de más, suelta el acelerador y mira hacia donde quieres ir."
  },
  "factores-percepcion": {
    emoji: "",
    idea: "Conducir es percibir, decidir y actuar sin parar: si una de esas tres fases falla, el peligro te pilla sin tiempo para reaccionar.",
    puntos: [
      "**Tiempo de reacción**: entre **0,5 y 1 segundo** en buen estado. El alcohol, el cansancio, las distracciones y la edad lo alargan.",
      "**Visión de túnel**: a más velocidad, menos ves a los lados. Reduce la velocidad y mueve la vista.",
      "**Enfermedades y emociones**: declara tus enfermedades en el reconocimiento médico, y no conduzcas enfadado, nervioso o eufórico."
    ],
    recuerda: "**Percibir, decidir, actuar.** Antes de arrancar, pregúntate si estás descansado, tranquilo y sin alcohol."
  }
});
window.DIAGRAMAS = (window.DIAGRAMAS || []).concat([
  { leccion: "velocidad-curvas-estabilidad", tras: 3, diagrama: { tipo: "flujo", titulo: "Tomar una curva en tres pasos", pasos: [
    { t: "Antes: frena", d: "Con el coche recto, baja a una velocidad que puedas mantener." },
    { t: "Dentro: velocidad constante", d: "Volante suave, sin frenar ni acelerar de golpe. Mira a la salida." },
    { t: "Salida: acelera", d: "Suavemente, cuando el coche ya se esté enderezando." }
  ] } },
  { leccion: "velocidad-curvas-estabilidad", tras: 7, diagrama: { tipo: "comparar", titulo: "Subviraje o sobreviraje: qué hacer", columnas: [
    { t: "Subviraje", tono: "warn", items: ["Pierden agarre las ruedas de **delante**", "El coche sigue recto, hacia fuera", "Suelta el acelerador", "**No gires más** el volante"] },
    { t: "Sobreviraje", tono: "bad", items: ["Pierden agarre las ruedas de **detrás**", "La parte trasera se desliza", "Suelta el acelerador, sin frenar de golpe", "**Mira** hacia donde quieres ir"] }
  ] } },
  { leccion: "factores-percepcion", tras: 1, diagrama: { tipo: "ciclo", titulo: "El ciclo de la conducción", centro: "Conducir", pasos: [
    { t: "Percibir", d: "Miras y escuchas lo que pasa a tu alrededor." },
    { t: "Decidir", d: "Valoras el riesgo y eliges qué hacer." },
    { t: "Actuar", d: "Frenas, reduces, cedes o mantienes, a tiempo." }
  ] } },
  { leccion: "factores-percepcion", tras: 10, diagrama: { tipo: "arbol", titulo: "¿Puedo conducir ahora?", raiz: {
    q: "¿Estás muy cansado, enfadado o alterado?",
    si: { r: "No conduzcas: espera a estar tranquilo y descansado", ok: false },
    no: { q: "¿Has tomado alcohol, drogas o medicamentos que den sueño?",
      si: { r: "No conduzcas: el efecto se suma a tu falta de reflejos", ok: false },
      no: { q: "¿Tienes una enfermedad que puede afectar al volante?",
        si: { r: "No conduzcas hasta hablarlo con tu médico", ok: false },
        no: { r: "Puedes conducir, con toda tu atención", ok: true }
      }
    }
  } } }
]);
window.PREGUNTAS = (window.PREGUNTAS || []).concat([
  { id: "x5-001", tema: "velocidad", pregunta: "En una curva, ¿qué fuerza empuja el coche hacia fuera?", opciones: ["La fuerza centrífuga", "El rozamiento de los neumáticos", "La fuerza del motor"], correcta: 0, explicacion: "Es la fuerza centrífuga. El rozamiento de los neumáticos es lo que la contrarresta y mantiene el coche en la curva." },
  { id: "x5-002", tema: "velocidad", pregunta: "Si en una curva duplicas la velocidad, ¿cuánto aumenta el empuje hacia fuera?", opciones: ["Aumenta el doble", "Aumenta un 10 %", "Aumenta cuatro veces"], correcta: 2, explicacion: "El empuje crece con el cuadrado de la velocidad: al duplicar la velocidad, el empuje se multiplica por cuatro. Por eso la velocidad en curva es tan importante." },
  { id: "x5-003", tema: "velocidad", pregunta: "¿Qué es el subviraje?", opciones: ["Cuando la parte trasera se desliza y el coche gira de más", "Cuando el coche se va de frente aunque gires el volante, porque pierden agarre las ruedas de delante", "Cuando el coche pierde potencia al subir una cuesta"], correcta: 1, explicacion: "En el subviraje pierden agarre las ruedas de delante: giras el volante, pero el coche sigue recto y se va hacia fuera de la curva." },
  { id: "x5-004", tema: "velocidad", pregunta: "¿Qué es el sobreviraje?", opciones: ["Cuando la parte trasera se desliza hacia fuera y el coche gira más de lo que quieres", "Cuando el coche se va de frente aunque gires el volante", "Cuando el coche frena solo al entrar en la curva"], correcta: 0, explicacion: "En el sobreviraje pierden agarre las ruedas de detrás. La parte trasera se desliza hacia fuera y el coche gira más de lo que tú quieres." },
  { id: "x5-005", tema: "velocidad", pregunta: "Notas que la parte trasera se desliza y el coche gira más de lo que quieres. ¿Qué es lo más adecuado?", opciones: ["Frenar de golpe para parar cuanto antes", "Acelerar para que la parte trasera se estabilice", "Soltar el acelerador, no frenar de golpe y mirar hacia donde quieres ir"], correcta: 2, explicacion: "Ante un sobreviraje, suelta el acelerador, no frenes de golpe y mira y gira hacia donde quieres ir, corrigiendo con suavidad. Frenar o acelerar bruscamente puede empeorar el deslizamiento." },
  { id: "x5-006", tema: "velocidad", pregunta: "Giras el volante en una curva, pero el coche sigue recto y se va hacia fuera. ¿Qué debes hacer?", opciones: ["Girar el volante todavía más", "Soltar el acelerador y no girar más el volante", "Frenar fuerte mientras sigues girando"], correcta: 1, explicacion: "Con subviraje, girar más no sirve: suelta el acelerador para reducir la velocidad y no gires más el volante. Frenar fuerte mientras giras lo empeora." },
  { id: "x5-007", tema: "velocidad", pregunta: "¿Cuándo debes frenar al tomar una curva?", opciones: ["Antes de entrar en la curva, con el volante recto", "Mientras giras el volante, para ganar tiempo", "Cuando ya estás en mitad de la curva"], correcta: 0, explicacion: "Lo más seguro es frenar antes de entrar, con el volante recto, y mantener una velocidad estable dentro. Frenar mientras giras puede hacer que el coche derrape." },
  { id: "x5-008", tema: "velocidad", pregunta: "¿Qué efecto tiene llevar mucha carga en el techo o en la baca al tomar una curva?", opciones: ["Baja el centro de gravedad y el coche es más estable", "No afecta, porque el peso va en el techo y no en las ruedas", "Eleva el centro de gravedad y el coche se inclina más"], correcta: 2, explicacion: "La carga en lo alto eleva el centro de gravedad: el coche se inclina más en la curva y es más fácil que vuelque. Además, la carga mal sujeta se desplaza y desequilibra el coche." },
  { id: "x5-009", tema: "velocidad", pregunta: "¿Qué es el peralte de una carretera?", opciones: ["La altura de los bordillos de la acera", "La inclinación de la calzada hacia el interior de la curva", "El mínimo de agarre que debe tener el asfalto"], correcta: 1, explicacion: "El peralte es la inclinación de la calzada hacia dentro de la curva. Ayuda a sujetar el coche y a que no se vaya hacia fuera." },
  { id: "x5-010", tema: "velocidad", pregunta: "Circulas por una curva mojada con neumáticos muy gastados. ¿Qué puede ocurrir?", opciones: ["El agarre baja mucho y puedes perder el control", "Nada, porque el agarre depende solo del coche", "El coche frena antes en la curva"], correcta: 0, explicacion: "Con neumáticos gastados y firme mojado, el agarre baja mucho y la curva puede volverse peligrosa. El dibujo debe tener al menos 1,6 mm." },
  { id: "x5-011", tema: "velocidad", pregunta: "Al salir de un túnel a una zona abierta, sopla un viento fuerte de lado. ¿Qué debes hacer?", opciones: ["Acelerar para salir cuanto antes de la zona", "Soltar el volante para dejar que el coche vaya solo", "Sujetar bien el volante, reducir la velocidad y anticipar la racha"], correcta: 2, explicacion: "El viento lateral desvía el coche. Sujeta bien el volante, reduce la velocidad y anticipa las rachas. Soltar el volante o acelerar no ayuda." },
  { id: "x5-012", tema: "velocidad", pregunta: "¿Qué hace el ESP (control electrónico de estabilidad)?", opciones: ["Hace que el coche gire solo, sin que muevas el volante", "Detecta cuándo el coche se desvía y frena una rueda por separado para corregirlo", "Evita que el coche tome curvas a más de 50 km/h"], correcta: 1, explicacion: "El ESP compara la trayectoria que marca el volante con la que lleva el coche y, si se desvía, frena una rueda por separado y reduce potencia. No sustituye tu conducción: si entras demasiado rápido, sigue habiendo riesgo." },
  { id: "x5-013", tema: "factores", pregunta: "En el proceso de conducir, ¿qué es «decidir»?", opciones: ["Mirar y escuchar lo que pasa a tu alrededor", "Valorar el riesgo y elegir qué hacer", "Pisar el freno o girar el volante"], correcta: 1, explicacion: "Percibir es ver y oír; decidir es valorar el riesgo y elegir la maniobra; actuar es ejecutarla con el volante, el freno o el acelerador." },
  { id: "x5-014", tema: "factores", pregunta: "¿Entre qué valores suele estar el tiempo de reacción de una persona en buen estado?", opciones: ["Entre 0,5 y 1 segundo", "Entre 3 y 5 segundos", "Entre 1 y 2 minutos"], correcta: 0, explicacion: "El tiempo de reacción normal está entre 0,5 y 1 segundo. Mientras reaccionas, el coche sigue avanzando a la velocidad que lleve." },
  { id: "x5-015", tema: "factores", pregunta: "¿Qué efecto tiene el alcohol sobre el tiempo de reacción?", opciones: ["Lo acorta, porque te relaja", "No tiene ningún efecto si no estás borracho", "Lo alarga"], correcta: 2, explicacion: "El alcohol alarga el tiempo de reacción y te hace juzgar peor la distancia y la velocidad. Aunque te sientas bien, la reacción ya no es la misma." },
  { id: "x5-016", tema: "factores", pregunta: "Vas cansado y atiendes una conversación intensa mientras conduces. ¿Qué le pasa a tu tiempo de reacción?", opciones: ["Se alarga, porque tu atención está en otra cosa", "No cambia, porque el cansancio no afecta a los reflejos", "Se acorta, porque estás más alerta"], correcta: 0, explicacion: "El cansancio y las distracciones alargan la reacción. Una conversación intensa también te quita atención, aunque tengas las manos en el volante." },
  { id: "x5-017", tema: "factores", pregunta: "Si tienes apnea del sueño, ¿qué puede pasarte al volante?", opciones: ["Ninguna, si no roncas mucho", "Somnolencia de día y microsueños, aunque duermas bastante", "Un aumento de los reflejos por el cansancio"], correcta: 1, explicacion: "Las pausas de respiración durante la noche dejan el sueño de mala calidad: de día aparecen somnolencia y microsueños. Si tienes apnea, trátala y declárala en el reconocimiento médico." },
  { id: "x5-018", tema: "factores", pregunta: "¿Qué es la visión de túnel?", opciones: ["Ver bien de noche gracias a los faros", "Ver con más claridad lo que está a los lados", "Fijarte solo en el centro de la vía y perder lo que pasa a los lados"], correcta: 2, explicacion: "La visión de túnel aparece cuando vas deprisa o con estrés: te fijas en el centro de la vía y pierdes información de los laterales." },
  { id: "x5-019", tema: "factores", pregunta: "Circulas a velocidad alta por una vía con mucha gente en las aceras y bicicletas en el arcén. ¿Qué es lo más prudente?", opciones: ["Reducir la velocidad y mover la vista a los laterales", "Mantener la velocidad, porque ves bien de frente", "Mirar solo al coche que tienes delante"], correcta: 0, explicacion: "A más velocidad ves menos a los lados. Reduce la velocidad en zonas con mucha actividad y mira a los laterales y a los espejos con frecuencia." },
  { id: "x5-020", tema: "factores", pregunta: "Si tienes diabetes, ¿qué riesgo debes vigilar especialmente al conducir?", opciones: ["Que el tiempo de reacción sea más rápido", "Que el azúcar en sangre baje demasiado", "Que el coche consuma más combustible"], correcta: 1, explicacion: "Si el azúcar baja demasiado (hipoglucemia), puedes marearte, sudar, confundirte o perder el conocimiento. Controla tu glucosa antes del viaje y lleva algo dulce por si lo necesitas." },
  { id: "x5-021", tema: "factores", pregunta: "Tienes epilepsia. ¿Qué debes hacer antes de conducir?", opciones: ["Nada, si tomas la medicación", "Conducir solo de día y por carreteras conocidas", "Consultar al médico, que valora si puedes conducir y en qué condiciones"], correcta: 2, explicacion: "Una crisis puede dejarte sin conocimiento de golpe. El médico valora cada caso y dice si puedes conducir y en qué condiciones. No lo decidas tú solo: sentirte bien no garantiza nada." },
  { id: "x5-022", tema: "factores", pregunta: "En el reconocimiento médico, ¿qué debes hacer con tus enfermedades y tratamientos?", opciones: ["Declararlos y seguir las indicaciones del médico", "Ocultar las que no te preocupen", "Declararlos solo si son graves"], correcta: 0, explicacion: "Sin esa información, el médico no puede valorar si puedes conducir con seguridad. Ocultarlas pone en riesgo tu vida y la de los demás." },
  { id: "x5-023", tema: "factores", pregunta: "¿Qué suele pasarte cuando conduces muy enfadado o con prisa?", opciones: ["Conduces mejor, porque estás más concentrado", "Te fijas solo en lo que te molesta y te vuelves más agresivo", "Ves más a los lados, porque tienes más energía"], correcta: 1, explicacion: "El enfado y la prisa estrechan tu atención: te fijas solo en lo que te molesta, adelantas sin mirar y corres más riesgos. Espera a calmarte antes de arrancar." },
  { id: "x5-024", tema: "factores", pregunta: "Vas de buen humor y te sientes «invencible» al volante. ¿Qué es lo más prudente?", opciones: ["Subir la velocidad, porque confías en tu forma de conducir", "No mirar los espejos, porque ya controlas la situación", "Conducir con calma, porque la euforia te hace ver menos riesgos"], correcta: 2, explicacion: "La euforia te hace sentir más seguro de lo que estás y te lleva a ver menos riesgos. Conduce con calma y no subas la velocidad por sentirte bien." }
]);
window.FLASHCARDS = (window.FLASHCARDS || []).concat([
  { id: "fx5-001", tema: "velocidad", emoji: "", frente: "¿Qué fuerza empuja el coche hacia fuera en una curva?", dorso: "La **fuerza centrífuga**", nota: "Crece con el cuadrado de la velocidad y es mayor cuanto más cerrada es la curva." },
  { id: "fx5-002", tema: "velocidad", emoji: "", frente: "Si duplicas la velocidad en una curva, ¿cuánto aumenta el empuje hacia fuera?", dorso: "**Cuatro veces** más", nota: "Por eso reducir antes de entrar en la curva es tan importante." },
  { id: "fx5-003", tema: "velocidad", emoji: "", frente: "¿Qué es el subviraje?", dorso: "Pierden agarre las ruedas de **delante**: el coche sigue recto y se va hacia fuera", nota: "Qué hacer: suelta el acelerador y **no gires más** el volante." },
  { id: "fx5-004", tema: "velocidad", emoji: "", frente: "¿Qué es el sobreviraje?", dorso: "Pierden agarre las ruedas de **detrás**: la parte trasera se desliza y el coche gira de más", nota: "Qué hacer: suelta el acelerador, no frenes de golpe y mira hacia donde quieres ir." },
  { id: "fx5-005", tema: "velocidad", emoji: "", frente: "¿Cuándo debes frenar al tomar una curva?", dorso: "**Antes de entrar**, con el volante recto", nota: "Frenar mientras giras puede hacer que el coche derrape." },
  { id: "fx5-006", tema: "factores", emoji: "", frente: "¿Cuáles son las tres fases del proceso de conducir?", dorso: "**Percibir, decidir y actuar**", nota: "Si falla una de ellas, el peligro te pilla por sorpresa." },
  { id: "fx5-007", tema: "factores", emoji: "", frente: "¿Entre qué valores suele estar el tiempo de reacción de una persona en buen estado?", dorso: "**Entre 0,5 y 1 segundo**", nota: "En los cálculos del temario se usa 1 segundo como cifra práctica." },
  { id: "fx5-008", tema: "factores", emoji: "", frente: "¿Qué es la visión de túnel?", dorso: "Te fijas solo en el centro de la vía y **pierdes** lo que pasa a los lados", nota: "Aparece al ir deprisa o con estrés." },
  { id: "fx5-009", tema: "factores", emoji: "", frente: "Tienes una enfermedad que puede afectar a la conducción. ¿Qué debes hacer?", dorso: "**Declararla en el reconocimiento médico** y seguir las indicaciones del médico", nota: "Ocultarla pone en riesgo tu vida y la de los demás." },
  { id: "fx5-010", tema: "factores", emoji: "", frente: "¿Qué hace la euforia con tu forma de conducir?", dorso: "Te hace sentir **invencible**: subes la velocidad y ves menos riesgos", nota: "Antes de arrancar, espera a estar tranquilo." }
]);
