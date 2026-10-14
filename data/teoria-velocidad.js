window.TEMARIO = window.TEMARIO || [];
window.TEMARIO.push({
  id: "velocidad",
  orden: 4,
  titulo: "Velocidad y distancias",
  icono: "🏁",
  color: "#2a9d8f",
  resumen: "Cuánto puedes ir, cuánto tienes que ir como mínimo, cuánto espacio necesitas para parar y qué pasa si te pasas.",
  lecciones: [
    {
      id: "velocidad-limites",
      titulo: "Límites generales de velocidad",
      minutos: 9,
      contenido: [
        { tipo: "p", texto: "Los **límites genéricos** son los que valen **cuando ninguna señal dice otra cosa**. Dependen de tres cosas: **dónde** circulas (autopista, carretera o ciudad), **qué vehículo** conduces y **cuántos carriles** tiene la vía. Y recuerda: una señal **R-301** siempre manda sobre el límite genérico." },
        { tipo: "tabla", cabecera: ["Vehículo", "Autopista y autovía", "Carretera convencional"], filas: [
            ["Turismos, motos, pick-ups y autocaravanas de hasta 3.500 kg", "120 km/h", "90 km/h"],
            ["Autobuses, derivados de turismo y mixtos adaptables", "100 km/h", "90 km/h"],
            ["Camiones, furgonetas, autocaravanas de más de 3.500 kg, vehículos articulados y automóviles con remolque", "90 km/h", "80 km/h"]
        ] },
        { tipo: "tabla", cabecera: ["Vía urbana o travesía", "Límite genérico"], filas: [
            ["Calle de plataforma única (calzada y acera al mismo nivel, sin separación)", "20 km/h"],
            ["Vía con un solo carril por sentido", "30 km/h"],
            ["Vía con dos o más carriles por sentido", "50 km/h"],
            ["Travesía (carretera que atraviesa un pueblo)", "50 km/h"]
        ] },
        { tipo: "lista", items: [
            "En carretera convencional **con separación física** entre sentidos, el titular de la vía puede subir el límite a **100 km/h** para turismos, motos y autocaravanas de hasta 3.500 kg. Tiene que estar señalizado.",
            "En transporte escolar, de menores o de mercancías peligrosas, el límite es **10 km/h menos** que el genérico.",
            "Los ayuntamientos pueden poner límites más bajos con señal (por ejemplo, zonas 30)."
        ] },
        { tipo: "clave", texto: "Si una señal fija un límite **más bajo** que el genérico, **ese** es el que cuenta. El límite genérico es un máximo, nunca un objetivo." },
        { tipo: "aviso", texto: "Trampa típica: una furgoneta de 3.500 kg **no va a 120** en autovía, va a **90**. Lo mismo con un coche que lleva **remolque**: 90 en autovía y 80 en carretera, según la tabla." },
        { tipo: "senal", forma: "circulo-rojo", simbolo: "80", nombre: "R-301 Velocidad máxima", descripcion: "Límite de 80 km/h en ese tramo. Manda sobre el límite genérico de la carretera." },
        { tipo: "truco", texto: "Turismos: **120 – 90 – 50** (autovía, carretera, ciudad). Furgonetas, camiones y remolques: **90 – 80** en autovía y carretera. En ciudad, 50, 30 o 20 según los carriles." },
        { tipo: "quiz", pregunta: "¿Cuál es la velocidad máxima genérica de una furgoneta de 3.500 kg en una autovía?", opciones: ["120 km/h", "100 km/h", "90 km/h"], correcta: 2, explicacion: "Las furgonetas van en la columna de camiones: 90 km/h en autovía y autopista, y 80 km/h en carretera convencional." }
      ]
    },
    {
      id: "velocidad-minima-adelantar",
      titulo: "Velocidad mínima, velocidad adecuada y adelantamiento",
      minutos: 9,
      contenido: [
        { tipo: "p", texto: "Ir **demasiado despacio** también puede ser infracción. El reglamento fija una velocidad mínima y te prohíbe entorpecer la marcha de los demás sin motivo." },
        { tipo: "lista", items: [
            "**Autopistas y autovías**: nunca por debajo de **60 km/h**, aunque no haya nadie detrás de ti.",
            "**Resto de vías (carreteras convencionales)**: la **mitad** de la velocidad máxima genérica. Ejemplo: en una carretera de 90 km/h, el mínimo es **45 km/h**.",
            "Si no puedes alcanzar el mínimo y hay peligro de que te alcancen, enciende las **luces de emergencia**.",
            "Hay excepciones: vehículos especiales, acompañamiento de otro vehículo y situaciones en las que la vía, el tráfico o el propio vehículo impiden ir más deprisa sin riesgo.",
            "Circular a una velocidad **anormalmente reducida** sin motivo está prohibido, y es **infracción grave**."
        ] },
        { tipo: "senal", forma: "circulo-azul", simbolo: "60", nombre: "R-411 Velocidad mínima", descripcion: "Obliga a circular al menos a 60 km/h. Es obligatoria." },
        { tipo: "senal", forma: "fin", simbolo: "60", nombre: "R-506 Fin de velocidad mínima", descripcion: "Termina la obligación de circular a una velocidad mínima." },
        { tipo: "clave", texto: "**Velocidad adecuada**: no basta con no superar el límite. Debes ir a una velocidad que te permita **controlar el vehículo** y **parar a tiempo** según las condiciones." },
        { tipo: "p", texto: "Reduce la velocidad, y no vayas solo por el límite, cuando haya:" },
        { tipo: "lista", items: [
            "Lluvia, niebla, nieve o hielo.",
            "Noche o poca visibilidad.",
            "Tráfico denso, obras, curvas o pendientes.",
            "Firme en mal estado o vehículo cargado en exceso."
        ] },
        { tipo: "p", texto: "**El +20 km/h para adelantar ya no existe.** Hasta el 21 de marzo de 2022, en carreteras convencionales los turismos y las motos podían **superar en 20 km/h** el límite al adelantar (en un tramo de 90, hasta 110). La reforma de la Ley de Tráfico (Ley 18/2021, en vigor desde el 21 de marzo de 2022) lo eliminó. Hoy, al adelantar, el límite de la vía es **también el máximo**." },
        { tipo: "aviso", texto: "Si en un test ves «puedo superar en 20 km/h para adelantar» como respuesta correcta, es una pregunta de la norma antigua. **Hoy no está permitido.**" },
        { tipo: "p", texto: "**Novedad desde el 1 de octubre de 2026** (Real Decreto 518/2026, ya en vigor): al adelantar a un **ciclista** en carretera debes reducir la velocidad **al menos 20 km/h por debajo del límite** de la vía y dejar **1,5 metros** de separación lateral. Ejemplo: en una vía de 90 km/h, no puedes superar **70 km/h** durante ese adelantamiento." },
        { tipo: "quiz", pregunta: "¿Cuál es la velocidad mínima en una autovía?", opciones: ["40 km/h", "60 km/h", "50 km/h"], correcta: 1, explicacion: "En autopistas y autovías el mínimo es de 60 km/h, aunque no haya ningún vehículo detrás de ti." }
      ]
    },
    {
      id: "velocidad-distancias-parada",
      titulo: "Distancias de reacción, de frenado y de detención",
      minutos: 8,
      contenido: [
        { tipo: "p", texto: "Cuando ves un peligro, tu coche no se para al instante. Recorre tres distancias: la de **reacción** (hasta que pisas el freno), la de **frenado** (desde que frenas hasta parar) y la de **detención**, que es la suma de las dos anteriores." },
        { tipo: "lista", items: [
            "**Distancia de reacción**: lo que avanzas desde que ves el peligro hasta que pisas el freno. Dura unos 1 segundo.",
            "**Distancia de frenado**: lo que avanzas desde que pisas el freno hasta parar. Depende de la velocidad, del firme y del estado del coche.",
            "**Distancia de detención** = distancia de reacción + distancia de frenado."
        ] },
        { tipo: "truco", texto: "Fórmulas aproximadas (metros, con la velocidad en km/h): **reacción ≈ 3 × (velocidad ÷ 10)** y **frenado en seco ≈ (velocidad ÷ 10)²**. Ejemplo a 100 km/h: reacción = 3 × 10 = 30 m; frenado = 10² = 100 m; detención ≈ 130 m." },
        { tipo: "tabla", cabecera: ["Velocidad", "Reacción", "Frenado en seco", "Detención en seco", "Detención en mojado (aprox.)"], filas: [
            ["30 km/h", "9 m", "9 m", "18 m", "27 m"],
            ["50 km/h", "15 m", "25 m", "40 m", "65 m"],
            ["90 km/h", "27 m", "81 m", "108 m", "189 m"],
            ["120 km/h", "36 m", "144 m", "180 m", "324 m"]
        ] },
        { tipo: "clave", texto: "**La distancia de frenado no crece en proporción**: al doblar la velocidad, el frenado se multiplica por cuatro. A 60 km/h necesitas unos 54 m para detenerte; a 120 km/h, unos 180 m. El doble de velocidad exige más de tres veces el espacio." },
        { tipo: "aviso", texto: "En **mojado** el frenado puede **duplicarse**, y con neumáticos gastados o frenos en mal estado la distancia aumenta todavía más. Las cifras de la tabla son **orientativas**; lo importante es el orden de magnitud." },
        { tipo: "quiz", pregunta: "A 100 km/h y con el firme seco, ¿qué distancia aproximada necesitas para detenerte?", opciones: ["65 m", "100 m", "130 m"], correcta: 2, explicacion: "Reacción: 3 × 10 = 30 m. Frenado: 10² = 100 m. Total: unos 130 m." }
      ]
    },
    {
      id: "velocidad-distancia-seguridad",
      titulo: "Distancia de seguridad",
      minutos: 7,
      contenido: [
        { tipo: "p", texto: "La **distancia de seguridad** es el espacio que dejas con el coche de delante para poder frenar sin chocar si frena de golpe. El reglamento no da metros: exige una distancia que te permita **detenerte sin alcanzarlo**. En la práctica se mide en **segundos**." },
        { tipo: "clave", texto: "**Regla de los 2 segundos**: en condiciones normales, deja **al menos 2 segundos** con el coche de delante. Con **lluvia o firme mojado**, **3 segundos** o más." },
        { tipo: "truco", texto: "**Cómo contarlo**: cuando el coche de delante pasa por una señal o una farola, empieza a contar «uno-mil, dos-mil». Si llegas a esa misma señal antes de terminar «dos-mil», vas demasiado cerca." },
        { tipo: "tabla", cabecera: ["Velocidad", "2 segundos (seco)", "3 segundos (mojado)"], filas: [
            ["50 km/h", "unos 28 m", "unos 42 m"],
            ["90 km/h", "50 m", "75 m"],
            ["120 km/h", "unos 67 m", "100 m"]
        ] },
        { tipo: "p", texto: "Conviene dejar más distancia que el mínimo cuando:" },
        { tipo: "lista", items: [
            "Lluvia, niebla, nieve o hielo.",
            "Noche o poca visibilidad.",
            "Firme en mal estado, neumáticos gastados o frenos flojos.",
            "Cuando el de delante puede frenar de golpe o te tapa la visión (por ejemplo, un camión)."
        ] },
        { tipo: "aviso", texto: "2 segundos es un **mínimo**, no un objetivo. La distancia solo te protege si estás atento: si vas distraído, no te sirve de nada." },
        { tipo: "p", texto: "**Novedad desde el 1 de octubre de 2026** (Real Decreto 518/2026): en ciudad, si circulas detrás de una bicicleta en tu mismo carril, debes mantener al menos **5 metros** de distancia." },
        { tipo: "quiz", pregunta: "Circulas a 90 km/h y llueve. ¿Qué distancia de tiempo es la recomendada?", opciones: ["1 segundo", "2 segundos", "3 segundos"], correcta: 2, explicacion: "Con lluvia, la regla es de 3 segundos o más. Con el firme seco, 2 segundos como mínimo." }
      ]
    },
    {
      id: "velocidad-limitadores",
      titulo: "Limitadores y control de velocidad",
      minutos: 6,
      contenido: [
        { tipo: "p", texto: "Muchos coches tienen ayudas para controlar la velocidad. Conviene distinguir las más comunes, porque **ninguna** te quita la responsabilidad de cumplir el límite." },
        { tipo: "lista", items: [
            "**Limitador de velocidad**: no deja superar la velocidad máxima que tú fijas. Es obligatorio en muchos camiones y autobuses.",
            "**Control de velocidad de crucero** (el «crucero»): mantiene la velocidad que fijas sin que pises el acelerador. Puedes superarla pisando el acelerador, y no mantiene la distancia con el de delante.",
            "**Control de crucero adaptativo** (ACC): además de la velocidad, mantiene la distancia con el coche de delante, frenando y acelerando por sí solo."
        ] },
        { tipo: "clave", texto: "**Ni el limitador ni el crucero sustituyen al conductor**. El límite de la vía, la distancia de seguridad y la atención siguen siendo tuyos." },
        { tipo: "truco", texto: "**Limitador = tope**: no pasa de ahí. **Crucero = piloto automático**: mantiene la velocidad, pero tú mandas. **ACC = crucero que también mira la distancia**." },
        { tipo: "aviso", texto: "Poner el limitador o el crucero **por encima del límite** de la vía es una infracción. La responsabilidad es siempre del conductor, no del coche." },
        { tipo: "quiz", pregunta: "¿Qué hace el control de velocidad de crucero?", opciones: ["Impide superar la velocidad fijada, pase lo que pase", "Mantiene la velocidad fijada sin que pises el acelerador", "Frena solo cuando hay un obstáculo delante"], correcta: 1, explicacion: "El crucero mantiene la velocidad que has elegido y puedes superarla pisando el acelerador. Solo el ACC mantiene también la distancia con el coche de delante." }
      ]
    },
    {
      id: "velocidad-radares-multas",
      titulo: "Radares, multas y puntos",
      minutos: 9,
      contenido: [
        { tipo: "p", texto: "La velocidad se controla con **radares fijos** (una cámara en un punto), **radares móviles** (en un coche o en un trípode, a veces sin señalizar), **radares de tramo** (miden tu velocidad media entre dos puntos) y **agentes**. Como nunca sabes dónde hay uno, la única estrategia válida es **respetar el límite siempre**." },
        { tipo: "tabla", cabecera: ["Exceso sobre el límite (vía de 50 km/h o menos)", "Multa", "Puntos"], filas: [
            ["De 1 a 20 km/h", "100 €", "0"],
            ["De 21 a 30 km/h", "300 €", "2"],
            ["De 31 a 40 km/h", "400 €", "4"],
            ["De 41 a 50 km/h", "500 €", "6"],
            ["Más de 50 km/h", "600 €", "6"]
        ] },
        { tipo: "tabla", cabecera: ["Exceso sobre el límite (vía de más de 50 km/h)", "Multa", "Puntos"], filas: [
            ["De 1 a 30 km/h", "100 €", "0"],
            ["De 31 a 50 km/h", "300 €", "2"],
            ["De 51 a 60 km/h", "400 €", "4"],
            ["De 61 a 70 km/h", "500 €", "6"],
            ["Más de 70 km/h", "600 €", "6"]
        ] },
        { tipo: "aviso", texto: "Hay **dos tablas**. En una vía de 50 km/h o menos, la multa de 100 € llega hasta 20 km/h de exceso; en carretera o autovía, hasta 30 km/h. Confundirlas es un error típico." },
        { tipo: "clave", texto: "Cada multa por velocidad te resta **como máximo 6 puntos**. Los puntos **solo se restan cuando la sanción es firme**, es decir, cuando ya no se puede recurrir." },
        { tipo: "truco", texto: "**Pronto pago**: si pagas dentro de los **20 días naturales** desde la notificación, la multa baja un **50 %**. Pero renuncias a recurrirla, y los puntos **no** se reducen." },
        { tipo: "aviso", texto: "Por encima de cierto exceso ya no es solo una multa: superar en **más de 60 km/h** el límite en vía urbana, o en **más de 80 km/h** en vía interurbana, es **delito** (artículo 379 del Código Penal)." },
        { tipo: "p", texto: "Los radares tienen un **margen de error** que se descuenta a tu favor. Pero ese margen **no es una autorización**: el límite es el que marca la señal. La cifra exacta del margen depende del tipo de equipo." },
        { tipo: "quiz", pregunta: "Circulas por una calle de 50 km/h a 75 km/h (25 km/h de exceso). ¿Qué te corresponde?", opciones: ["100 € y sin puntos", "300 € y 2 puntos", "400 € y 4 puntos"], correcta: 1, explicacion: "En una vía de 50 km/h o menos, un exceso de 21 a 30 km/h supone 300 € y 2 puntos." },
        { tipo: "quiz", pregunta: "Vas por una autovía de 120 km/h a 150 km/h (30 km/h de exceso). ¿Qué te corresponde?", opciones: ["100 € y sin puntos", "300 € y 2 puntos", "600 € y 6 puntos"], correcta: 0, explicacion: "En carretera o autovía, un exceso de hasta 30 km/h supone 100 € y sin puntos. Con la tabla de ciudad daría 300 €: por eso hay que mirar la tabla correcta." }
      ]
    }
  ]
});
