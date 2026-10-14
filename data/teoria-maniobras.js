window.TEMARIO = window.TEMARIO || [];
window.TEMARIO.push({
  id: "maniobras",
  orden: 6,
  titulo: "Maniobras",
  icono: "🔄",
  color: "#3a86ff",
  resumen: "Cómo incorporarte, cambiar de carril, girar, adelantar, parar y estacionar sin poner en peligro a nadie.",
  lecciones: [
    {
      id: "maniobras-normas-generales",
      titulo: "Normas generales: observar, señalizar y ejecutar",
      minutos: 5,
      contenido: [
        { tipo: "p", texto: "Una **maniobra** es cualquier cambio de posición o de dirección del vehículo: incorporarte, cambiar de carril, girar, adelantar, cambiar de sentido, dar marcha atrás, parar o estacionar." },
        { tipo: "lista", items: [
          "**Observar:** mira por el retrovisor y por el ángulo muerto. Comprueba también hacia dónde vas a ir.",
          "**Señalizar:** avisa con el intermitente con antelación suficiente, antes de empezar la maniobra (artículo 109).",
          "**Ejecutar:** hazla solo si es seguro, sin obligar a frenar bruscamente a otros y sin obstaculizar la circulación."
        ] },
        { tipo: "clave", texto: "**Regla de oro:** ninguna maniobra justifica poner en peligro a otro usuario. Si no puedes hacerla con seguridad, no la hagas." },
        { tipo: "truco", texto: "Recuerda el orden **MIRA, SEÑALIZA, MUEVETE**. Si te saltas uno de los tres pasos, la maniobra está mal hecha aunque salga bien." },
        { tipo: "aviso", texto: "**El intermitente no te da derecho.** Ponerlo no significa que puedas maniobrar: antes tienes que observar y comprobar que es seguro." },
        { tipo: "p", texto: "El intermitente se apaga cuando terminas la maniobra. Dejarlo puesto confunde a los demás." },
        { tipo: "quiz", pregunta: "¿Cuál es el primer paso antes de cambiar de carril?", opciones: ["Acelerar para entrar antes", "Observar por el retrovisor y el ángulo muerto", "Tocar el claxon para avisar"], correcta: 1, explicacion: "Antes de cualquier maniobra observas. Después señalizas y, por último, ejecutas." },
        { tipo: "quiz", pregunta: "Llevas el intermitente puesto desde hace un rato. ¿Puedes ya cambiar de carril?", opciones: ["Sí, el intermitente basta", "Solo si compruebas que el carril está libre y que es seguro", "Sí, si el coche de atrás no te molesta"], correcta: 1, explicacion: "Señalizar no basta. Debes comprobar que es seguro y que no obligas a otros a frenar bruscamente." }
      ]
    },
    {
      id: "maniobras-incorporacion-cambio-carril",
      titulo: "Incorporación, carriles y marcha atrás",
      minutos: 8,
      contenido: [
        { tipo: "p", texto: "Al **incorporarte** a la circulación desde un acceso, debes hacerlo sin peligro y **ceder el paso** a los vehículos que ya circulan por esa vía (artículo 72)." },
        { tipo: "lista", items: [
          "Si hay **carril de aceleración**, úsalo para igualar la velocidad del tráfico antes de entrar. Esa es su función.",
          "Si no encuentras hueco, no fuerces la entrada: quien circula por la vía tiene preferencia.",
          "En los accesos a autopistas y autovías, quien ya circula por ellas tiene preferencia (artículo 57)."
        ] },
        { tipo: "clave", texto: "**Quien se incorpora cede el paso** a quienes circulan por la vía a la que se une." },
        { tipo: "p", texto: "**Cambiar de carril** (artículo 74): advierte con antelación, comprueba que el carril al que vas está libre (sobre todo los coches que vienen por detrás: mira su velocidad y su distancia) y respeta la preferencia de quien ya circula por ese carril." },
        { tipo: "clave", texto: "**Regla práctica (y norma general en vías de varios carriles):** circula por el carril más a la derecha que puedas. El carril de la izquierda se usa para adelantar." },
        { tipo: "aviso", texto: "**Error muy frecuente:** cambiar de carril sin mirar el ángulo muerto. Gira la cabeza y no te fíes solo del retrovisor." },
        { tipo: "p", texto: "**Marcha atrás** (artículo 80): solo se hace cuando no sea posible de otra forma. Es una maniobra complementaria de la parada, del estacionamiento o de la incorporación, y no puede pasar de **15 metros**. Nunca se hace en autopistas ni autovías, ni invadiendo un cruce." },
        { tipo: "truco", texto: "Si la marcha atrás te lleva a más de 15 metros, ya no es una maniobra: te has equivocado de sitio. Busca un lugar donde girar para salir hacia delante." },
        { tipo: "quiz", pregunta: "Vas a incorporarte a una autovía desde un carril de aceleración. ¿Qué debes hacer?", opciones: ["Entrar a la misma velocidad que llevas, sin mirar", "Usar el carril de aceleración para coger velocidad y ceder el paso a los que circulan por la autovía", "Frenar en el carril de aceleración y esperar a que no venga nadie"], correcta: 1, explicacion: "El carril de aceleración sirve para igualar la velocidad del tráfico. Quien se incorpora cede el paso a los que ya circulan por la vía." },
        { tipo: "quiz", pregunta: "¿Cuál es la distancia máxima que puedes recorrer marcha atrás como maniobra?", opciones: ["15 metros", "50 metros", "Lo que necesites para salir del aparcamiento"], correcta: 0, explicacion: "La marcha atrás como maniobra complementaria no puede superar los 15 metros (artículo 80)." }
      ]
    },
    {
      id: "maniobras-giros-salida-cambio-sentido",
      titulo: "Girar, salir de la autopista y cambiar de sentido",
      minutos: 9,
      contenido: [
        { tipo: "p", texto: "Girar es cambiar de dirección. Hay que saber cómo colocarse y a quién cedes el paso al girar a la derecha, a la izquierda o al salir de una autopista o autovía." },
        { tipo: "lista", items: [
          "**Girar a la derecha:** señaliza con el intermitente derecho con antelación y ciñete al borde derecho de la calzada (artículo 75). Cede el paso a peatones y ciclistas que cruzan.",
          "**Girar a la izquierda:** señaliza con el intermitente izquierdo y ocupa la parte de la calzada más cercana a la marca central o al eje (artículo 75). Cede el paso a los que vienen de frente."
        ] },
        { tipo: "clave", texto: "**Salir de una autopista o autovía:** usa el carril más cercano a la salida y entra cuanto antes en el **carril de deceleración** para frenar allí, no en el carril principal (artículo 77)." },
        { tipo: "tabla", cabecera: ["Maniobra", "Dónde te colocas", "A quién cedes"], filas: [
          ["Girar a la derecha", "Borde derecho de la calzada", "Peatones y ciclistas que cruzan"],
          ["Girar a la izquierda", "Marca central o eje", "A los que vienen de frente"],
          ["Salir de autopista o autovía", "Carril más cercano a la salida", "Vigila a los que vienen por detrás"]
        ] },
        { tipo: "truco", texto: "Para girar: **a la derecha, pegado al borde; a la izquierda, pegado al centro**." },
        { tipo: "p", texto: "El **cambio de sentido** (dar la vuelta) debe hacerse en un lugar adecuado, interrumpiendo la vía el menor tiempo posible, con las señales necesarias y sin peligro para nadie (artículo 78). Si esperar bloquea a los de detrás, sal por la derecha en cuanto puedas." },
        { tipo: "lista", items: [
          "En pasos a nivel, túneles y pasos inferiores.",
          "En autopistas y autovías, salvo en lugares habilitados.",
          "En tramos donde está prohibido adelantar.",
          "Donde no puedas comprobar que no hay peligro, por ejemplo en curvas o en cambios de rasante con poca visibilidad (artículo 79)."
        ] },
        { tipo: "senal", forma: "circulo-rojo-lleno", simbolo: "━", nombre: "R-101 Dirección prohibida", descripcion: "Prohibido entrar en esa calle en ese sentido. Si ves esta señal de frente, no entras, aunque no venga nadie." },
        { tipo: "aviso", texto: "**Trampa:** la señal de dirección prohibida no se salta porque la calle esté vacía. Es una prohibición de entrar, sin excepciones por el tráfico." },
        { tipo: "quiz", pregunta: "Vas a girar a la izquierda en una calle de doble sentido. ¿A quién debes ceder el paso?", opciones: ["A los que vienen de frente", "A los que vienen por tu derecha", "A nadie: tú giras primero"], correcta: 0, explicacion: "Quien gira a la izquierda cede el paso a los vehículos que vienen de frente." },
        { tipo: "quiz", pregunta: "¿Dónde debes colocarte al girar a la derecha?", opciones: ["En el centro de la calzada", "Lo más cerca posible del borde derecho", "En el carril izquierdo, para cruzar antes"], correcta: 1, explicacion: "Para girar a la derecha te ciñes al borde derecho de la calzada (artículo 75)." }
      ]
    },
    {
      id: "maniobras-adelantamiento-normas",
      titulo: "Adelantamiento: normas y prohibiciones",
      minutos: 9,
      contenido: [
        { tipo: "p", texto: "**Adelantar** es pasar a un vehículo que circula más despacio en el mismo sentido. La norma general es hacerlo **por la izquierda** (artículo 82)." },
        { tipo: "p", texto: "Por la **derecha** solo se puede en casos concretos: cuando el vehículo de delante indica que va a girar a la izquierda o que va a parar en ese lado; dentro de poblado, en calzadas con al menos dos carriles por sentido separados por marcas longitudinales, si te cerciores de que puedes hacerlo sin peligro; y para adelantar a un tranvía que circula por la zona central (artículo 82)." },
        { tipo: "lista", items: [
          "Avisa con antelación y comprueba que el carril que vas a usar está libre y que no pones en peligro a los que vienen de frente.",
          "Si no hay espacio libre, no adelantes.",
          "No adelantes a varios vehículos seguidos si no tienes la seguridad de poder volver a tu carril.",
          "No adelantes a un coche que ya está adelantando a otro si para hacerlo tendrías que invadir el sentido contrario.",
          "Comprueba que nadie de detrás ha empezado a adelantarte."
        ] },
        { tipo: "clave", texto: "**Prohibido adelantar** en curvas y cambios de rasante con poca visibilidad, en pasos de peatones, en intersecciones y sus proximidades, en pasos a nivel y en túneles con un solo carril por sentido (artículo 87)." },
        { tipo: "senal", forma: "circulo-rojo", simbolo: "🚗", nombre: "R-305 Adelantamiento prohibido", descripcion: "En el tramo que indica la señal, no puedes adelantar a otros vehículos." },
        { tipo: "truco", texto: "Antes de adelantar, pregúntate si vas a ir **notoriamente más rápido** que el de delante y si podrás volver a tu carril con espacio suficiente (artículo 85). Si la respuesta es no, no adelantes." },
        { tipo: "aviso", texto: "**Trampa del examen:** en una calzada de tres carriles con doble sentido, solo puedes adelantar si los que vienen de frente no ocupan el carril central para adelantar (artículo 84)." },
        { tipo: "p", texto: "**Novedad desde el 1 de octubre de 2026:** cuando la nieve dificulte la circulación, está prohibido adelantar en autopistas y autovías." },
        { tipo: "quiz", pregunta: "¿En cuál de estas situaciones está prohibido adelantar?", opciones: ["En una recta larga con buena visibilidad", "En un paso de peatones", "En una calle recta con poco tráfico"], correcta: 1, explicacion: "Está prohibido adelantar en pasos de peatones, pasos a nivel, intersecciones y sus proximidades, y en curvas o cambios de rasante con poca visibilidad." },
        { tipo: "quiz", pregunta: "¿En cuál de estos casos está permitido adelantar por la derecha?", opciones: ["Siempre que tengas prisa", "Si el vehículo de delante indica que va a girar a la izquierda", "Cuando el vehículo de delante no se aparta"], correcta: 1, explicacion: "Por la derecha solo en casos concretos, como cuando el de delante señaliza que va a girar a la izquierda (artículo 82)." }
      ]
    },
    {
      id: "maniobras-adelantar-ciclistas-averiados",
      titulo: "Adelantar a ciclistas, averiados y ser adelantado",
      minutos: 9,
      contenido: [
        { tipo: "p", texto: "Adelantar a un **ciclista**, a un peatón o a un animal exige extremar la precaución. Desde el **1 de octubre de 2026** rige la reforma del Reglamento (Real Decreto 518/2026), que hace estas reglas más exigentes." },
        { tipo: "clave", texto: "**Ciclistas:** deja al menos **1,5 metros** de separación lateral. Fuera de poblado, reduce la velocidad al menos **20 km/h** por debajo del límite de la vía, antes y durante toda la maniobra (artículo 85)." },
        { tipo: "p", texto: "Para mantener esos 1,5 metros puedes **ocupar parte o todo el carril contrario** y pisar la línea continua, siempre que tengas buena visibilidad y no haya peligro para quien viene de frente." },
        { tipo: "lista", items: [
          "Con más de un carril por sentido, adelantar a un ciclista exige cambiar por completo de carril.",
          "Un grupo de ciclistas se trata como una sola unidad que se adelanta de una vez.",
          "Donde esté prohibido adelantar, puedes adelantar a un ciclista o a un ciclomotor de dos ruedas si mantienes 1,5 metros y no pones en peligro a quien viene de frente (artículo 88)."
        ] },
        { tipo: "aviso", texto: "**Si no puedes dejar 1,5 metros, no adelantes.** Quédate detrás del ciclista hasta que tengas espacio libre y no venga nadie de frente." },
        { tipo: "p", texto: "**Vehículos averiados o inmovilizados** (por avería, accidente, servicio de auxilio, mantenimiento o regulación del tráfico): al rebasarlos, deja **1,5 metros** y reduce al menos **20 km/h** por debajo del límite, aunque tengas que ocupar el carril contrario (artículo 88)." },
        { tipo: "aviso", texto: "Incumplir el artículo 88 es una infracción **grave**: 200 euros y 4 puntos." },
        { tipo: "p", texto: "**Si te adelantan a ti** (artículo 86): no aumentes la velocidad, ciñete al borde derecho y, si no puedes apartarte del todo pero es seguro, indícalo con el brazo o con el intermitente derecho." },
        { tipo: "aviso", texto: "**Trampa del examen:** aumentar la velocidad para impedir que te adelanten está prohibido. Si el que adelanta se arrepiente, no estás obligado a frenar si eso pone en peligro a otros, pero sí debes facilitarle la vuelta a su carril." },
        { tipo: "quiz", pregunta: "Vas a adelantar a un ciclista fuera de poblado. ¿Qué debes hacer?", opciones: ["Pasar a unos 50 centímetros, que es suficiente", "Dejar al menos 1,5 metros y reducir al menos 20 km/h por debajo del límite", "Pitar y pasar por el arcén"], correcta: 1, explicacion: "Fuera de poblado, al adelantar a un ciclista debes dejar al menos 1,5 metros y reducir al menos 20 km/h por debajo del límite de la vía." },
        { tipo: "quiz", pregunta: "Te está adelantando otro coche. ¿Qué no debes hacer?", opciones: ["Ceñirte al borde derecho", "Aumentar tu velocidad para que no pueda pasar", "Facilitar su vuelta a su carril"], correcta: 1, explicacion: "El vehículo adelantado no puede aumentar la velocidad (artículo 86)." }
      ]
    },
    {
      id: "maniobras-parada-estacionamiento-puertas",
      titulo: "Parada, estacionamiento y apertura de puertas",
      minutos: 10,
      contenido: [
        { tipo: "p", texto: "Parar y estacionar no es lo mismo. La Ley de Tráfico define con precisión estas situaciones de coche inmovilizado: detención, parada y estacionamiento." },
        { tipo: "tabla", cabecera: ["Concepto", "Qué dice la definición", "Ejemplo"], filas: [
          ["Detención", "Inmovilización por una emergencia, por necesidades de la circulación o para cumplir una norma", "Pararte en un semáforo en rojo o ante un STOP"],
          ["Parada", "Inmovilización de menos de dos minutos, sin que el conductor pueda abandonar el vehículo", "Dejar a alguien en la puerta un momento mientras tú sigues al volante"],
          ["Estacionamiento", "Inmovilización que no es ni detención ni parada", "Dejar el coche aparcado mientras te vas de compras"]
        ] },
        { tipo: "clave", texto: "**Para saber si es una parada**, pregúntate: ¿dura menos de dos minutos y el conductor sigue dentro? Si alguna de las dos cosas falla, ya no es parada." },
        { tipo: "lista", items: [
          "En vías interurbanas: fuera de la calzada, en el lado derecho, dejando libre el arcén transitable (artículo 90).",
          "En vías urbanas: lo más cerca posible del borde derecho de la calzada (artículo 90).",
          "Siempre paralelo al borde de la calzada (artículo 92)."
        ] },
        { tipo: "lista", items: [
          "En curvas y cambios de rasante con poca visibilidad.",
          "En pasos a nivel, pasos de peatones y pasos para ciclistas.",
          "En carriles reservados, como los de autobús o bicicletas.",
          "Sobre las vías del tranvía (raíles).",
          "En autopistas y autovías, salvo en zonas habilitadas.",
          "En intersecciones y sus proximidades, si dificulta el giro de otros vehículos (artículo 94)."
        ] },
        { tipo: "lista", items: [
          "En aceras y zonas peatonales.",
          "En doble fila.",
          "Delante de los vados señalizados (las entradas de garajes)."
        ] },
        { tipo: "aviso", texto: "**Doble fila:** está prohibida aunque sea solo un minuto, y aunque tengas puestas las luces de emergencia." },
        { tipo: "aviso", texto: "Dejar menos de **3 metros** libres hasta el borde opuesto de la calzada (o hasta una marca de prohibición de cruce) se considera peligroso: no lo hagas (artículo 91)." },
        { tipo: "p", texto: "En las ciudades, cada **ayuntamiento** regula el aparcamiento con sus ordenanzas: zonas azules y zonas ORA, con horario, tarifa y tiempo máximo, además de la retirada de vehículos. El Reglamento deja esta materia en manos de los municipios (artículo 156, en la redacción de 2026)." },
        { tipo: "p", texto: "**Apertura de puertas** (artículo 114): no abras la puerta hasta que el coche esté completamente parado y sin peligro para nadie, sobre todo para los ciclistas que vienen por detrás. Entra y sal por el lado más cercano al borde de la vía." },
        { tipo: "aviso", texto: "Abrir la puerta sin mirar es muy peligroso para ciclistas y motoristas. **Mira siempre por el retrovisor y gira la cabeza** antes de abrirla." },
        { tipo: "quiz", pregunta: "Dejas el coche aparcado 10 minutos mientras te vas de compras. ¿Qué es?", opciones: ["Parada", "Estacionamiento", "Detención"], correcta: 1, explicacion: "Dura más de dos minutos y el conductor se ha bajado. No es parada ni detención, así que es estacionamiento." },
        { tipo: "quiz", pregunta: "¿Puedes estacionar en doble fila si es solo un momento?", opciones: ["Sí, si son menos de dos minutos", "No, está prohibido estacionar en doble fila", "Sí, si pones las luces de emergencia"], correcta: 1, explicacion: "Estacionar en doble fila está prohibido (artículo 94), aunque sea un momento." }
      ]
    },
    {
      id: "maniobras-averias-remolque",
      titulo: "Averías, señalización y remolque",
      minutos: 8,
      contenido: [
        { tipo: "p", texto: "Si el coche se avería en la calzada, lo primero es sacarlo del carril y señalizarlo para que nadie te arrolle. El Reglamento fija qué hacer (artículo 130)." },
        { tipo: "lista", items: [
          "Si el vehículo obstaculiza la calzada, señaliza la avería y retíralo lo antes posible.",
          "Si puedes seguir circulando, hazlo de inmediato. Si necesitas auxilio, sal de los carriles lo antes posible por el arcén derecho.",
          "Enciende las luces de emergencia (si el coche las tiene) y utiliza el dispositivo de preseñalización de peligro.",
          "Los ocupantes salen del vehículo por el lado contrario al tráfico. Si no es seguro, se quedan dentro con el cinturón abrochado."
        ] },
        { tipo: "clave", texto: "Desde el **1 de enero de 2026** la baliza **V-16 conectada** es obligatoria para señalizar averías y accidentes. Sustituye a los triángulos, salvo para los vehículos extranjeros que circulan por España en tránsito internacional." },
        { tipo: "aviso", texto: "Desde el **1 de octubre de 2026**, si hay retención, los vehículos averiados o inmovilizados deben apartarse para dejar libre el carril de emergencia." },
        { tipo: "p", texto: "**Remolcar** un vehículo averiado es tarea de las grúas y de los servicios de auxilio en carretera. El Reglamento habla de los vehículos «específicamente destinados a remolcar» vehículos accidentados, averiados o mal estacionados (artículo 71). Los servicios de auxilio se regulan en el Real Decreto 159/2021, que da prioridad de paso a quien comunica a la autoridad de tráfico una operación de auxilio." },
        { tipo: "p", texto: "**La excepción de otro vehículo:** en la redacción anterior a la reforma de 2026, el artículo 88 (apartado 5) permitía, de forma excepcional, que otro vehículo arrastrara un averiado hasta el punto más cercano donde pudiera parar sin molestar al tráfico, siempre con seguridad y nunca en autopistas ni autovías. La reforma reescribió el artículo 88 y en su texto actual no aparece esa regla. Confírmalo en el BOE antes de fiarte de ella." },
        { tipo: "aviso", texto: "Si no tienes claro si puedes remolcar, no lo hagas: llama a la grúa o al servicio de asistencia. Remolcar sin seguridad es peligroso para ti y para los demás." },
        { tipo: "truco", texto: "Avería en autopista: sal al arcén derecho, señaliza y llama a asistencia. Como regla general, no se repara el coche en plena vía." },
        { tipo: "quiz", pregunta: "Si es seguro hacerlo, ¿por qué lado debes salir del coche averiado?", opciones: ["Por el lado de la calzada, para ver mejor el tráfico", "Por el lado contrario al flujo de tráfico", "Por el lado que te resulte más cómodo"], correcta: 1, explicacion: "Los ocupantes salen por el lado contrario al tráfico (artículo 130). Si no es seguro, se quedan dentro con el cinturón puesto." },
        { tipo: "quiz", pregunta: "¿Qué dispositivo es obligatorio desde el 1 de enero de 2026 para señalizar una avería o un accidente?", opciones: ["El triángulo, siempre", "La baliza V-16 conectada", "Solo las luces de emergencia"], correcta: 1, explicacion: "Desde 2026 la V-16 conectada es obligatoria. Sustituye a los triángulos, salvo excepciones para vehículos extranjeros en tránsito internacional." }
      ]
    }
  ]
});
