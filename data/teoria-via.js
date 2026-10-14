window.TEMARIO = window.TEMARIO || [];
window.TEMARIO.push({
  id: "via",
  orden: 2,
  titulo: "La vía, el vehículo y definiciones",
  icono: "🛣️",
  color: "#4a7c59",
  resumen: "Las partes de la vía, los tipos de carretera, los vehículos y las normas básicas de circulación: sentido, carriles, arcén, peatones, ciclistas y vehículos prioritarios.",
  lecciones: [
    {
      id: "via-partes",
      titulo: "Partes de la vía: calzada, carril, arcén y acera",
      minutos: 7,
      contenido: [
        { tipo: "p", texto: "La **vía** es todo espacio de uso público por el que circulan vehículos y personas: calles, carreteras, caminos... Dentro de ella hay partes con nombre propio, y el examen las pregunta una y otra vez. Aprenderlas es la base de todo lo demás." },
        { tipo: "tabla", cabecera: ["Parte", "Qué es", "¿Quién la usa?"], filas: [
          ["Calzada", "Parte de la vía, normalmente asfaltada, destinada a la circulación de vehículos", "Los vehículos"],
          ["Carril", "Franja de la calzada delimitada por marcas viales, con anchura para una fila de automóviles", "Los vehículos, en fila"],
          ["Arcén", "Franja contigua a la calzada que no se usa para el tráfico normal, sino para emergencias", "Vehículos en emergencia y algunos vehículos concretos"],
          ["Acera", "Parte de la vía, elevada o no, destinada a los peatones y separada de la calzada", "Los peatones"],
          ["Mediana", "Franja que separa las calzadas de una misma vía, no destinada a la circulación", "Nadie"],
          ["Isleta", "Zona de la calzada no transitable, que encauza el tráfico o protege a los peatones", "Nadie"]
        ] },
        { tipo: "clave", texto: "**La calzada es para vehículos; la acera, para peatones.** El arcén no es un carril más: es la franja de emergencia, y solo lo usan algunos vehículos en situaciones concretas." },
        { tipo: "p", texto: "Un **carril** no es un trozo de asfalto cualquiera: lo marcan las **líneas longitudinales** (continuas o discontinuas) y está pensado para una fila de coches. Una calzada puede tener uno o varios carriles por sentido." },
        { tipo: "truco", texto: "Para no confundirlos: **calzada = coches**, **acera = peatones**, **arcén = emergencia**. Si lo recuerdas así, respondes muchas preguntas sin pensar." },
        { tipo: "aviso", texto: "**Error típico**: creer que el arcén es un carril extra para adelantar o para ir más rápido. No lo es: circular por él está prohibido salvo en los casos que permite la norma (lo vemos en la lección 6)." },
        { tipo: "quiz", pregunta: "¿Qué parte de la vía está destinada a la circulación normal de vehículos?", opciones: ["El arcén", "La calzada", "La acera"], correcta: 1, explicacion: "La calzada es la parte de la vía destinada a los vehículos. El arcén es para emergencias y la acera para peatones." },
        { tipo: "p", texto: "La **mediana** es la franja central que separa las dos calzadas de una vía de doble sentido; nadie circula por ella. La **isleta** es una zona no transitable situada en la calzada, que sirve para encauzar el tráfico o proteger a los peatones." }
      ]
    },
    {
      id: "via-tipos",
      titulo: "Tipos de vía: urbana, interurbana, autopista y autovía",
      minutos: 9,
      contenido: [
        { tipo: "p", texto: "Según dónde esté una vía, es **urbana** (dentro de poblado) o **interurbana** (fuera de poblado). Esta diferencia cambia muchas normas: velocidades, prioridades y lo que pueden hacer peatones y ciclistas." },
        { tipo: "p", texto: "Un **poblado** es una zona con edificios a ambos lados de la vía, señalizada con las señales de entrada y salida de población. Una **travesía** es el tramo de carretera que atraviesa un poblado: una carretera que pasa por dentro de un pueblo o una ciudad." },
        { tipo: "aviso", texto: "**La travesía no es una calle normal.** Aunque esté dentro de un pueblo, es un tramo de carretera y tiene su propia señalización. No la confundas con una vía urbana." },
        { tipo: "tabla", cabecera: ["Vía", "Características", "Acceso"], filas: [
          ["Autopista", "Calzadas separadas para cada sentido, sin cruces a nivel", "Los terrenos colindantes no tienen acceso"],
          ["Autovía", "Calzadas separadas para cada sentido, sin cruces a nivel", "Accesos restringidos, pero no eliminados"],
          ["Vía para automóviles", "Una sola calzada, reservada exclusivamente a automóviles", "Accesos totalmente limitados"],
          ["Carretera convencional", "Todo lo que no cumple las anteriores", "Accesos normales"]
        ] },
        { tipo: "p", texto: "La **vía para automóviles** es, como su nombre indica, la reservada solo a automóviles. Tiene una única calzada y sus accesos están totalmente limitados." },
        { tipo: "clave", texto: "**La diferencia legal entre autopista y autovía está en el acceso**: en la autopista los terrenos vecinos no tienen acceso directo; en la autovía se restringe, pero no se elimina. **El peaje no forma parte de la definición legal.**" },
        { tipo: "p", texto: "En la práctica, las autopistas suelen ser de peaje y llevan las siglas **AP**, mientras que las autovías suelen ser gratuitas y llevan la letra **A**. Son pistas orientativas, no definiciones legales: no te fíes solo de las siglas." },
        { tipo: "aviso", texto: "**En autopistas y autovías no pueden circular** peatones, bicicletas, ciclomotores, vehículos de tracción animal, vehículos para personas con movilidad reducida ni VMP (patinetes). **Las motos sí pueden.** Los ciclistas mayores de 14 años pueden usar el arcén de las autovías, salvo que haya una señal que lo prohíba." },
        { tipo: "truco", texto: "Truco: en la autopista ningún terreno vecino tiene acceso a la vía. En la autovía existen accesos, pero son restringidos." },
        { tipo: "quiz", pregunta: "¿Cuál es la diferencia legal clave entre autopista y autovía?", opciones: ["Que la autovía es gratuita", "Que en la autopista los terrenos colindantes no tienen acceso", "Que la autopista tiene un solo carril"], correcta: 1, explicacion: "La definición legal se refiere al acceso: en la autopista no hay acceso desde las fincas vecinas; en la autovía se restringe. El peaje no entra en la definición." },
        { tipo: "quiz", pregunta: "¿Puede circular una bicicleta por una autovía?", opciones: ["Sí, siempre por la calzada", "Sí, pero solo de noche", "No, salvo ciclistas mayores de 14 años por el arcén y sin señal que lo prohíba"], correcta: 2, explicacion: "Las bicicletas no pueden circular por autovías, con la excepción de los ciclistas mayores de 14 años, que pueden usar el arcén si no hay señal que lo impida." }
      ]
    },
    {
      id: "via-intersecciones",
      titulo: "Intersecciones, glorietas y pasos a nivel",
      minutos: 7,
      contenido: [
        { tipo: "p", texto: "Una **intersección** es el lugar donde se cruzan dos o más vías. Es uno de los puntos con más riesgo de la conducción, por eso el examen le dedica muchas preguntas." },
        { tipo: "p", texto: "Una **glorieta** (o rotonda) es un tipo especial de intersección en la que los vehículos giran alrededor de una isleta central. En España, como circulamos por la derecha, **se gira en sentido contrario a las agujas del reloj**: el centro queda a tu izquierda." },
        { tipo: "clave", texto: "**Dentro de la glorieta tiene prioridad quien ya circula por ella.** Quien quiere entrar debe ceder el paso. Lo verás con detalle en el tema de prioridad." },
        { tipo: "aviso", texto: "En la glorieta **no** se aplica la prioridad de la derecha de las intersecciones normales: manda quien ya está dentro." },
        { tipo: "truco", texto: "Truco: si dentro de la glorieta el centro te queda a la derecha, vas en sentido contrario. Si lo tienes a la izquierda, vas bien." },
        { tipo: "quiz", pregunta: "En una glorieta en España, ¿en qué sentido se circula?", opciones: ["En el sentido de las agujas del reloj", "En sentido contrario a las agujas del reloj", "Da igual"], correcta: 1, explicacion: "Como circulamos por la derecha, en la glorieta se gira en sentido contrario a las agujas del reloj: el centro queda a tu izquierda." },
        { tipo: "p", texto: "Un **paso a nivel** es el cruce de una carretera con una vía de tren o de tranvía **al mismo nivel**. Es una situación de peligro específica, y el examen la pregunta." },
        { tipo: "senal", forma: "triangulo", simbolo: "🚂", nombre: "Paso a nivel (peligro)", descripcion: "Avisa de que vas a cruzar una vía de tren al mismo nivel. Reduce la velocidad, extrema la atención y respeta las barreras y las luces." },
        { tipo: "aviso", texto: "**Paso a nivel con barreras bajadas, semáforo o luces intermitentes en rojo**: te detienes y no pasas, aunque no veas ningún tren." },
        { tipo: "quiz", pregunta: "Llegas a un paso a nivel con las barreras bajadas y las luces intermitentes en rojo. ¿Qué haces?", opciones: ["Paso rápido si no veo tren", "Me detengo y no paso", "Paso despacio con cuidado"], correcta: 1, explicacion: "Con barreras bajadas o luces en rojo no se pasa nunca, aunque no se vea tren: el paso está cerrado." }
      ]
    },
    {
      id: "via-vehiculos",
      titulo: "Clasificación de vehículos",
      minutos: 8,
      contenido: [
        { tipo: "p", texto: "El reglamento clasifica los vehículos. Para el examen te interesa saber **qué es cada uno**, **qué permiso** necesitas para conducirlo y **qué normas** le afectan." },
        { tipo: "tabla", cabecera: ["Vehículo", "Definición básica", "Permiso necesario"], filas: [
          ["Turismo", "Automóvil para transporte de personas, de hasta 9 plazas contando al conductor", "B"],
          ["Motocicleta", "Vehículo de dos ruedas con motor de más de 50 cc o que supera los 45 km/h", "A1, A2 o A, según la potencia"],
          ["Ciclomotor", "Vehículo de dos o tres ruedas con motor de hasta 50 cc y velocidad máxima de 45 km/h", "AM (el B también te permite conducirlo)"],
          ["Bicicleta", "Vehículo de dos ruedas sin motor. Con pedaleo asistido hasta 25 km/h también se considera bicicleta", "Ninguno"],
          ["VMP", "Vehículo de movilidad personal: patinete eléctrico, monopatín, segway... con velocidad máxima de 25 km/h", "Ninguno, pero desde octubre de 2026 la edad mínima es 15 años"],
          ["Vehículo mixto adaptable", "Vehículo que puede transportar personas o mercancías según su configuración (por ejemplo, una furgoneta con asientos desmontables)", "B, si no supera 3.500 kg"]
        ] },
        { tipo: "clave", texto: "**Motocicleta frente a ciclomotor**: la moto tiene más de 50 cc o supera los 45 km/h; el ciclomotor no pasa de 50 cc ni de 45 km/h. Si pasa de cualquiera de los dos límites, ya es moto." },
        { tipo: "truco", texto: "Truco: una bicicleta con pedaleo asistido sigue siendo bicicleta mientras no supere los 25 km/h." },
        { tipo: "p", texto: "Los **vehículos para personas con movilidad reducida** (por ejemplo, sillas de ruedas motorizadas) tienen reglas propias: circulan por el arcén derecho, si es transitable, y no pueden ir por autopistas ni autovías." },
        { tipo: "aviso", texto: "**Los VMP tienen normas nuevas**: desde el 1 de octubre de 2026 (Real Decreto 518/2026) no pueden conducirlos los menores de 15 años y el casco es obligatorio. Tampoco pueden circular por aceras, autopistas, autovías ni vías interurbanas, salvo por carriles bici y vías ciclistas." },
        { tipo: "quiz", pregunta: "¿Qué permiso necesitas para conducir un ciclomotor?", opciones: ["Ninguno, es un juguete", "El AM, o el B, que también te habilita", "Solo el A"], correcta: 1, explicacion: "El ciclomotor se conduce con el permiso AM. El permiso B también te habilita para conducirlo." },
        { tipo: "quiz", pregunta: "¿Cuál es la velocidad máxima de un VMP, según la norma técnica?", opciones: ["15 km/h", "45 km/h", "25 km/h"], correcta: 2, explicacion: "Un VMP no puede superar 25 km/h. Los ayuntamientos pueden limitar todavía más la velocidad en sus calles." }
      ]
    },
    {
      id: "via-carriles",
      titulo: "Sentido, posición y uso de carriles",
      minutos: 8,
      contenido: [
        { tipo: "p", texto: "En España circulamos por la **derecha**. La regla de oro es ir **por la derecha y lo más cerca posible del borde** de la calzada. Todo lo demás, como los carriles o los adelantamientos, parte de aquí." },
        { tipo: "clave", texto: "**Siempre por la derecha, lo más cerca posible del borde.** Circular por el centro sin motivo es una infracción." },
        { tipo: "lista", items: [
          "Con **varios carriles por sentido** fuera de poblado, circula normalmente por el **más a la derecha**.",
          "Los carriles de la **izquierda** se usan para **adelantar**. Cuando termines, vuelve al de la derecha.",
          "Los **camiones y furgones de más de 3.500 kg** y los conjuntos de más de 7 metros circulan por el carril derecho cuando hay **tres o más carriles**.",
          "En una carretera de **doble sentido con tres carriles**, el **central** solo se usa para adelantar."
        ] },
        { tipo: "aviso", texto: "Circular por el carril izquierdo sin estar adelantando incumple la norma de circular por la derecha y obliga a los demás a hacer maniobras innecesarias." },
        { tipo: "p", texto: "**En poblado** la norma es más flexible: el conductor puede usar el carril que mejor le convenga para su destino, siempre que no obstaculice a los demás." },
        { tipo: "truco", texto: "Truco: si vas por el carril izquierdo y no estás adelantando, vuelve a la derecha. El carril de la izquierda es para adelantar, no tu sitio habitual." },
        { tipo: "quiz", pregunta: "En una autovía de dos carriles por sentido, ¿por qué carril debes circular normalmente?", opciones: ["Por el izquierdo", "Por el que más te guste", "Por el derecho"], correcta: 2, explicacion: "Circula por el carril de la derecha. El de la izquierda se usa para adelantar." },
        { tipo: "quiz", pregunta: "En una carretera de doble sentido con tres carriles, ¿para qué se usa el carril central?", opciones: ["Para circular a velocidad normal", "Solo para efectuar adelantamientos", "Para aparcar"], correcta: 1, explicacion: "El carril central se usa solo para los adelantamientos precisos. No es un carril de circulación normal." }
      ]
    },
    {
      id: "via-arcen-peatones",
      titulo: "El arcén y los peatones",
      minutos: 9,
      contenido: [
        { tipo: "p", texto: "El **arcén** es la franja contigua a la calzada que no se usa para el tráfico normal. Sirve para parar en caso de avería o emergencia. Algunos vehículos concretos **deben** circular por el arcén derecho, si es transitable y suficiente:" },
        { tipo: "lista", items: [
          "Vehículos de tracción animal.",
          "Bicicletas y ciclomotores.",
          "Vehículos especiales de hasta 3.500 kg.",
          "Vehículos de personas con movilidad reducida, como las sillas de ruedas motorizadas."
        ] },
        { tipo: "p", texto: "Los vehículos de urgencia y de auxilio también pueden usar el arcén para su servicio, con las señales correspondientes y sin superar 30 km/h. Los vehículos prioritarios en servicio de urgencia tienen su propio régimen (lo vemos en la lección 7)." },
        { tipo: "clave", texto: "**Los turismos y los camiones de más de 3.500 kg no circulan por el arcén**: van por la calzada. El arcén es para averías y emergencias." },
        { tipo: "aviso", texto: "**Motos y arcén desde el 1 de octubre de 2026** (Real Decreto 518/2026): solo en **tramos señalizados y habilitados**, cuando la circulación está **parada** por retención, en **fila de uno** y a **30 km/h como máximo**. Fuera de esos tramos, sigue prohibido." },
        { tipo: "p", texto: "**Peatones**: deben circular por la **acera** o la zona peatonal. Si no existe, lo hacen por el **arcén** o, en último caso, por la **calzada**, por el **lado izquierdo**, de cara al tráfico y lo más alejados que puedan de los vehículos." },
        { tipo: "lista", items: [
          "Los vehículos deben ceder el paso a los peatones que cruzan por un paso señalizado.",
          "Los peatones no cruzan una glorieta o una plaza por la calzada si no hay un paso habilitado.",
          "Fuera de poblado, con poca visibilidad (anochecer, niebla), deben llevar una luz o un reflector visible desde 150 metros."
        ] },
        { tipo: "aviso", texto: "**Los peatones nunca pueden circular por autopistas ni autovías**." },
        { tipo: "quiz", pregunta: "Si no hay acera en una carretera, ¿por dónde debe caminar un peatón?", opciones: ["Por el lado derecho de la calzada, de espaldas al tráfico", "Por el centro de la calzada", "Por el arcén o la calzada, por la izquierda y de cara al tráfico"], correcta: 2, explicacion: "Sin acera, el peatón camina por el arcén o la calzada, por la izquierda, de cara a los vehículos y lo más alejado posible del tráfico." },
        { tipo: "quiz", pregunta: "¿Pueden los peatones circular por una autovía?", opciones: ["Sí, por el arcén", "Sí, si no hay coches", "No, nunca"], correcta: 2, explicacion: "Los peatones no pueden circular por autopistas ni autovías, ni siquiera por el arcén." }
      ]
    },
    {
      id: "via-ciclistas-prioritarios",
      titulo: "Ciclistas y vehículos prioritarios",
      minutos: 10,
      contenido: [
        { tipo: "p", texto: "Los **ciclistas** son usuarios vulnerables y el reglamento les da normas propias. Desde el **1 de octubre de 2026** rige el Real Decreto 518/2026, que endurece las reglas para adelantarlos." },
        { tipo: "clave", texto: "**Adelantar a un ciclista fuera de poblado**: deja al menos **1,5 metros** de separación lateral y **reduce la velocidad al menos 20 km/h** por debajo del límite de la vía. Si hay más de un carril en tu sentido, **cambia de carril por completo**." },
        { tipo: "senal", forma: "circulo-azul", simbolo: "🚲", nombre: "Vía reservada para bicicletas", descripcion: "Indica un carril o una vía reservada a las bicicletas. Los vehículos a motor no pueden circular por ella." },
        { tipo: "p", texto: "**En poblado**, si circulas detrás de un ciclista en tu mismo carril, mantén al menos **5 metros** de distancia." },
        { tipo: "aviso", texto: "**No confundas las dos distancias**: 1,5 m es la separación lateral al adelantar fuera de poblado; 5 m es la distancia de seguimiento en poblado, detrás de un ciclista que va en tu mismo carril." },
        { tipo: "lista", items: [
          "Los ciclistas pueden circular en grupo sin mantener la distancia habitual, extremando la atención para no chocar entre ellos.",
          "Un grupo de ciclistas se considera una única unidad móvil a la hora de adelantar.",
          "De noche o con poca visibilidad, las bicicletas deben llevar luz o reflector.",
          "En una vía interurbana sin carril de giro, se sitúan a la derecha, fuera de la calzada si es posible, y desde ahí inician los giros a la izquierda.",
          "Al cruzar un carril bici señalizado, debes ceder el paso a las bicicletas que circulen por él."
        ] },
        { tipo: "p", texto: "**Vehículos prioritarios**: son los que, en servicio urgente, llevan a la vez **luz** (girofaro o luz intermitente) y **señal acústica** (sirena). Son sobre todo ambulancias, bomberos, policía y protección civil." },
        { tipo: "clave", texto: "**Si oyes o ves un vehículo prioritario, apártate a tu derecha y detente si hace falta.** No lo sigas ni te pongas delante de él." },
        { tipo: "aviso", texto: "Un vehículo prioritario **puede saltarse algunas normas** (límites de velocidad, semáforos en rojo, prohibiciones de paso) **solo si se asegura de que no pone en peligro a nadie**. Las órdenes de los agentes siempre son obligatorias." },
        { tipo: "quiz", pregunta: "Oyes una sirena y ves luces azules detrás de ti. ¿Qué debes hacer?", opciones: ["Acelerar para llegar antes", "Seguir al vehículo para ver adónde va", "Apartarte a tu derecha y, si hace falta, detenerte"], correcta: 2, explicacion: "Hay que dejar paso al vehículo prioritario: apartarte a la derecha y detenerte si es preciso. No lo sigas ni aceleres." },
        { tipo: "quiz", pregunta: "Con la reforma de octubre de 2026, ¿cuál es la separación lateral mínima al adelantar a un ciclista fuera de poblado?", opciones: ["50 cm", "1,5 m", "5 m"], correcta: 1, explicacion: "Son 1,5 metros de separación lateral, además de reducir al menos 20 km/h. Los 5 metros son la distancia de seguimiento en poblado." }
      ]
    }
  ]
});
