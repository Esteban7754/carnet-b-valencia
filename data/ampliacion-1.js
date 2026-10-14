// Ampliación 1 · Tema "senales": señales V de vehículo, señales de indicación (S-) y balizamiento temporal.
// Se insertan tras "senales-obligacion", en este orden: senales-vehiculos, senales-indicacion, senales-balizamiento.
window.AMPLIACION = (window.AMPLIACION || []).concat([
  { tema: "senales", despues: "senales-obligacion",
    leccion: {
      id: "senales-vehiculos",
      titulo: "Señales en los vehículos (placas V)",
      minutos: 7,
      contenido: [
        { tipo: "p", texto: "Algunos vehículos llevan **luces, distintivos o placas** para avisar de lo que están haciendo o de quién los conduce. Se llaman **señales V** (de vehículo) y están recogidas en el anexo XI del **Reglamento General de Vehículos**, que habla de **hasta 27** señales." },
        { tipo: "tabla", cabecera: ["Señal", "Qué significa", "Qué haces al verla"], filas: [
            ["**V-1** Luz azul", "Vehículo prioritario en servicio urgente: policía, ambulancia o bomberos", "Apártate para dejarle paso"],
            ["**V-2** Luz naranja", "Vehículo lento (tractor, camión de basura) o que trabaja parado en la vía", "Reduce, ten paciencia y no lo adelantes en zonas peligrosas"],
            ["**V-6** Placa amarilla con borde rojo, detrás", "Vehículo largo: más de 12 metros", "Adelántalo solo si tienes mucho espacio y tiempo"],
            ["**V-10** Distintivo de transporte escolar", "Puede haber niños subiendo o bajando", "Reduce y ten cuidado: los niños pueden aparecer de repente"],
            ["**V-13** L blanca sobre fondo verde, detrás", "Conductor novel, con poco tiempo de permiso", "Ten paciencia y deja más distancia"],
            ["**V-14** Distintivo de autoescuela, en el techo", "Alumno que está aprendiendo a conducir", "Ten paciencia y deja espacio de sobra"],
            ["**V-15** Distintivo de conductor con discapacidad", "Conductor con discapacidad, con preferencias para aparcar", "Respeta sus plazas y su espacio de aparcamiento"],
            ["**V-16** Baliza luminosa conectada", "Avisa de una avería o un accidente; sustituye a los triángulos desde el 1 de enero de 2026", "Si la ves en un coche parado, reduce y cambia de carril con cuidado"],
            ["**V-20** Panel con franjas rojas y blancas", "Carga que sobresale por la parte trasera", "Deja más distancia: el vehículo ocupa más espacio"],
            ["**V-23** Cintas reflectantes en el contorno de un camión", "Hace que el camión se vea mejor, sobre todo de noche", "Mantén una distancia de seguridad normal"]
        ] },
        { tipo: "aviso", texto: "**El V-10 es el de transporte escolar, no el de autoescuela.** El distintivo de autoescuela es la **V-14**. Confundirlos es un error típico." },
        { tipo: "senal", forma: "rectangulo-verde", simbolo: "L", nombre: "V-13 Conductor novel", descripcion: "L blanca sobre fondo verde, en la parte trasera del coche y bien visible. Indica que el conductor lleva poco tiempo con el permiso, durante su primer año." },
        { tipo: "p", texto: "**Dónde se colocan.** La **V-13** va detrás, en la esquina superior izquierda del cristal trasero. La **V-6** también va en la parte trasera. La **V-20** va en el extremo de la carga que sobresale. La **V-16** va en el **techo** del vehículo averiado, y la **V-14** también va en el techo." },
        { tipo: "clave", texto: "Las señales V **avisan**; no cambian las normas. Por ejemplo, la obligación de **apartarte** ante un vehículo prioritario viene de la norma general, y la luz azul solo te lo recuerda." },
        { tipo: "truco", texto: "**Luz = algo pasa ahora** (urgencia, trabajo o avería). **Distintivo = te informa** de quién conduce o qué lleva." },
        { tipo: "quiz", pregunta: "Ves una luz azul intermitente acercándose por detrás en servicio urgente. ¿Qué debes hacer?", opciones: ["Acelerar para que no me alcance", "Apartarme para dejarle paso", "Seguir igual, porque la luz solo avisa"], correcta: 1, explicacion: "La luz azul (V-1) indica un vehículo prioritario en servicio urgente. Debes apartarte para dejarle paso." },
        { tipo: "lista", items: [
            "**Deja más distancia** con un conductor novel (V-13): puede dudar al incorporarse o al frenar.",
            "**No le hagas gestos ni le pites** a un vehículo de autoescuela (V-14): está aprendiendo.",
            "**Reduce** cerca de un transporte escolar (V-10) y mira bien antes de adelantar."
        ] },
        { tipo: "p", texto: "**La baliza V-16 ya es obligatoria.** Desde el **1 de enero de 2026** sustituye a los triángulos de emergencia. Cómo se usa, paso a paso, lo viste en el tema de accidentes." },
        { tipo: "p", texto: "Los **camiones y las cargas largas** (V-6, V-20 y V-23) ocupan más espacio o se ven peor. **Déjales sitio**, mantén más distancia y no te quedes en su zona ciega." },
        { tipo: "quiz", pregunta: "Un coche tiene una V azul en el techo. ¿Qué significa?", opciones: ["Vehículo de autoescuela: hay un alumno aprendiendo", "Vehículo de transporte escolar", "Vehículo prioritario de policía"], correcta: 0, explicacion: "La V-14 es el distintivo de autoescuela. El transporte escolar es la V-10, y la luz azul de urgencia es la V-1." }
      ]
    }
  },
  { tema: "senales", despues: "senales-obligacion",
    leccion: {
      id: "senales-indicacion",
      titulo: "Señales de indicación y orientación (S-)",
      minutos: 8,
      contenido: [
        { tipo: "p", texto: "Las señales de **indicación** **informan** y **orientan**: te dicen dónde estás, a dónde llevan las carreteras y qué servicios hay. La mayoría **no te prohíbe ni te obliga** a nada. Su código empieza por **S-**." },
        { tipo: "tabla", cabecera: ["Código", "Grupo", "Para qué sirve"], filas: [
            ["**S-200**", "Preseñalización", "Te avisa con antelación de un cruce, una salida o un destino"],
            ["**S-300**", "Dirección", "Te indica el camino para llegar a un destino"],
            ["**S-400**", "Identificación de carreteras", "Te dice el número o el nombre de la vía"],
            ["**S-500**", "Localización", "Te dice dónde estás, por ejemplo al entrar en un pueblo"],
            ["**S-600**", "Confirmación", "Te confirma que sigues la ruta correcta"],
            ["**S-700**", "Uso específico en poblado", "Señales propias de la vida dentro de las poblaciones"]
        ] },
        { tipo: "truco", texto: "**El grupo sale de la primera cifra**: S-2xx avisa, S-3xx dirige, S-4xx identifica la vía, S-5xx te sitúa, S-6xx confirma y S-7xx es de poblado." },
        { tipo: "p", texto: "**S-500, entrada a población.** Al entrar en un pueblo o en una ciudad verás su nombre en un panel blanco con borde rojo. Desde ese punto empiezan las normas de circulación urbana." },
        { tipo: "senal", forma: "rectangulo-blanco", simbolo: "", nombre: "S-500 Nombre de población", descripcion: "Panel con el nombre del pueblo o la ciudad. Te avisa de que estás entrando en una población." },
        { tipo: "p", texto: "**Calles de plataforma única y zonas 30.** En una calle de plataforma única (calzada y acera al mismo nivel) el límite es de **20 km/h**. En una **zona 30** el límite es de **30 km/h** dentro de la zona señalizada." },
        { tipo: "senal", forma: "cuadrado-azul", simbolo: "30", nombre: "Zona 30", descripcion: "Dentro de la zona señalizada, la velocidad máxima es de 30 km/h." },
        { tipo: "p", texto: "**Carriles reservados.** Algunos carriles solo pueden usarlos determinados vehículos. El carril **VAO** (de alta ocupación) exige llevar **dos o más ocupantes**, según indique la señal. Los carriles bus son para autobuses, salvo que la señal diga otra cosa." },
        { tipo: "senal", forma: "cuadrado-azul", simbolo: "2+", nombre: "Carril VAO", descripcion: "Solo puedes usar ese carril si llevas dos ocupantes o más, según lo que indique la señal." },
        { tipo: "lista", items: [
            "**Siglas de la vía:** AP- para las autopistas (suelen ser de peaje) y A- para las autovías (suelen ser gratuitas). Sus normas ya las viste en la lección de autopistas.",
            "**Hitos kilométricos:** postes con un número al borde de la carretera que indican el kilómetro en el que estás.",
            "**Túneles:** la señal de túnel te avisa de que vas a entrar en uno. Enciende las luces de cruce, como ya viste en la lección de alumbrado.",
            "**Aparcamiento (S-17):** ya lo viste en la lección de obligación; no lo confundas con las señales de reglamentación."
        ] },
        { tipo: "p", texto: "**Colores de los paneles.** En carreteras convencionales, los paneles de destino suelen ser **blancos con letras negras**. Los de **servicios** (gasolinera, hospital) suelen ser **azules**. En obras, los paneles de orientación pasan a **amarillo**." },
        { tipo: "aviso", texto: "**Trampa:** una señal de indicación **no prohíbe ni obliga**. Ver el nombre de un pueblo en un panel no significa que tengas que ir allí. Lo que te obliga es una señal de **reglamentación** (código R-)." },
        { tipo: "quiz", pregunta: "Al entrar en un pueblo ves un panel blanco con borde rojo y su nombre. ¿Qué te indica?", opciones: ["Que entras en una población y empiezan las normas urbanas", "Que tienes prohibido entrar en el pueblo", "Que el pueblo es un destino al que debes ir"], correcta: 0, explicacion: "Es la señal S-500 de localización: te avisa de que entras en una población. Desde ese punto rigen las normas de circulación urbana." },
        { tipo: "quiz", pregunta: "¿Qué límite de velocidad tiene una calle de plataforma única?", opciones: ["50 km/h", "20 km/h", "90 km/h"], correcta: 1, explicacion: "En las calles de plataforma única (calzada y acera al mismo nivel) el límite es de 20 km/h." }
      ]
    }
  },
  { tema: "senales", despues: "senales-obligacion",
    leccion: {
      id: "senales-balizamiento",
      titulo: "Señales circunstanciales y de balizamiento",
      minutos: 8,
      contenido: [
        { tipo: "p", texto: "Las **señales circunstanciales** y el **balizamiento** son temporales: aparecen por obras, cortes o incidencias. Mientras están puestos, **mandan sobre las señales fijas** de esa vía." },
        { tipo: "lista", items: [
            "**Conos y vallas:** delimitan carriles o zonas de obra.",
            "**Señalistas:** personal de obra que regula el paso con gestos o con una paleta.",
            "**Captafaros y hitos de arista:** elementos reflectantes que guían el carril y su borde.",
            "**Paneles direccionales:** flechas que marcan el camino provisional.",
            "**Luces amarillas:** fijas o intermitentes, para delimitar la obra de noche o con poca visibilidad.",
            "**Paneles de mensaje variable:** ya los viste en la lección de marcas."
        ] },
        { tipo: "tabla", cabecera: ["Elemento", "Qué te indica", "Qué haces"], filas: [
            ["Conos y vallas", "Hay obras o un carril cerrado", "Sigue el camino que marcan; no los pises ni los cruces"],
            ["Señalista con paleta o gestos", "Te ordena parar, avanzar o reducir", "Obedece: su orden vale como la de un agente"],
            ["Captafaros y hitos de arista", "Marcan el carril o su borde, sobre todo de noche", "Úsalos de guía y no invadas el borde"],
            ["Paneles direccionales", "Te muestran el camino provisional", "Sigue las flechas aunque tu ruta habitual sea otra"],
            ["Luces amarillas", "Delimitan la obra con poca visibilidad", "Reduce y respeta la zona iluminada"]
        ] },
        { tipo: "senal", forma: "panel-amarillo", simbolo: "↰", nombre: "Panel direccional de obras", descripcion: "Flecha que indica el camino provisional. Sigue las flechas mientras duren las obras." },
        { tipo: "p", texto: "**El amarillo es el color de la obra.** Las señales temporales llevan fondo **amarillo** (o naranja) y las marcas del suelo son **amarillas o naranjas**. Las señales de **obligación** (azul) y de **STOP o dirección prohibida** (rojo) conservan su aspecto normal." },
        { tipo: "lista", items: [
            "**Reduce** la velocidad antes de entrar en la zona.",
            "**Sigue** las señales amarillas y las flechas provisionales.",
            "**Obedece** al señalista, aunque una señal fija diga otra cosa.",
            "**Mantén distancia** con el vehículo de delante y no adelantes donde haya conos o vallas."
        ] },
        { tipo: "clave", texto: "**Las órdenes del personal de obra valen igual que las de un agente.** Si el señalista te hace parar, paras, aunque la señal diga que puedes seguir." },
        { tipo: "aviso", texto: "**Trampa:** que no haya nadie trabajando no significa que la obra haya terminado. Mientras la señalización esté puesta, **sigue valiendo**. No cruces conos ni vallas." },
        { tipo: "truco", texto: "**Amarillo = temporal y manda.** Si una señal de obra choca con una señal fija o con una marca blanca, **manda la de obra** mientras duren los trabajos." },
        { tipo: "quiz", pregunta: "Un señalista te hace parar con la paleta, pero la señal de límite dice que puedes seguir. ¿Qué haces?", opciones: ["Sigo, porque la señal fija manda más", "Paro, porque su orden tiene la misma prioridad que la de un agente", "Freno a medias y sigo despacio"], correcta: 1, explicacion: "Las órdenes del personal de obra son de obligado cumplimiento y tienen la misma prioridad que las de un agente. Debes parar." },
        { tipo: "p", texto: "**Los paneles de mensaje variable (PMV)** muestran avisos cambiantes, como retenciones o niebla. Si indican algo de obligado cumplimiento, obligan mientras estén activos y prevalecen sobre las señales fijas." },
        { tipo: "quiz", pregunta: "Ves conos y vallas cerrando un carril, pero no hay nadie trabajando. ¿Qué debes hacer?", opciones: ["Respetar el cierre, porque la señalización sigue valiendo", "Cruzar los conos, porque ya no hay obra", "Adelantar por el carril cerrado"], correcta: 0, explicacion: "Mientras la señalización de obra esté puesta, sigue valiendo aunque no veas a nadie trabajando." }
      ]
    }
  }
]);
// Resúmenes de 30 segundos de las lecciones nuevas (mismo formato que data/resumenes-1.js)
window.RESUMENES = Object.assign(window.RESUMENES || {}, {
  "senales-vehiculos": {
    emoji: "",
    idea: "Algunos vehículos llevan luces o distintivos que avisan de lo que hacen o de quién los conduce, como un uniforme que habla por ellos.",
    puntos: ["**Luz azul** (V-1): urgencia, apártate. **Luz naranja** (V-2): vehículo lento o trabajando.", "**Distintivos** como la **L** (V-13), la **V-14** de autoescuela, la **V-10** de transporte escolar o la **V-15** de discapacidad.", "La **baliza V-16** conectada es obligatoria desde el 1 de enero de 2026 y sustituye a los triángulos."],
    recuerda: "**Luz = algo pasa ahora. Distintivo = te informa.** La **V-10** es escolar; la autoescuela es la **V-14**."
  },
  "senales-indicacion": {
    emoji: "",
    idea: "Las señales de indicación son como el GPS de la carretera: te dicen dónde estás, a dónde vas y qué hay cerca.",
    puntos: ["Con códigos de tres cifras, el primer número marca el grupo: **S-200** avisa, **S-300** dirige, **S-400** identifica la vía y **S-500** te sitúa.", "Al entrar en un pueblo verás su nombre (**S-500**). En una calle de plataforma única el límite es de **20 km/h**; en una zona 30, de **30 km/h**.", "En carreteras convencionales, los destinos suelen ir en paneles **blancos**, y los de servicios, en **azules**."],
    recuerda: "**Informan, no obligan.** Lo que obliga es la señal de reglamentación (código **R-**)."
  },
  "senales-balizamiento": {
    emoji: "",
    idea: "Las obras y los cortes se señalan con conos, señalistas y paneles temporales, y lo temporal manda mientras dura el problema.",
    puntos: ["Las señales de obra son **amarillas** y mandan sobre las fijas mientras duran los trabajos.", "Las órdenes del **personal de obra** (gestos o paleta) valen igual que las de un agente.", "Conos, vallas, captafaros, hitos de arista y paneles direccionales te guían: **no los cruces ni los pises**."],
    recuerda: "**Amarillo = temporal y manda.** En una obra, reduce, obedece al señalista y sigue las flechas."
  }
});
// Diagramas para memorizar (1 o 2 por lección nueva; formato DIAGRAMAS.md)
window.DIAGRAMAS = (window.DIAGRAMAS || []).concat([
  { leccion: "senales-vehiculos", tras: 1, diagrama: { tipo: "comparar", titulo: "Luces y distintivos de los vehículos", columnas: [
      { t: "Luz azul (V-1)", tono: "info", items: ["Vehículo prioritario en urgencia", "Policía, ambulancia o bomberos", "Apártate para dejarle paso"] },
      { t: "Luz naranja (V-2)", tono: "warn", items: ["Vehículo lento o trabajando", "Tractores, camiones de basura, obras", "Reduce y ten paciencia"] },
      { t: "Distintivos (V)", tono: "ok", items: ["Informan de quién conduce o qué lleva", "L, V-10, V-13, V-14, V-15", "Adapta tu distancia y tu forma de conducir"] }
    ] } },
  { leccion: "senales-vehiculos", tras: 6, diagrama: { tipo: "flujo", titulo: "Qué hacer al ver una señal V", pasos: [
      { t: "Mira si hay luz", d: "Una luz indica algo que pasa ahora: urgencia, trabajo o avería." },
      { t: "Mira si hay distintivo", d: "Un distintivo te informa de quién conduce o qué lleva." },
      { t: "Adapta tu conducción", d: "Aparta, reduce o deja más distancia según la señal." }
    ] } },
  { leccion: "senales-indicacion", tras: 1, diagrama: { tipo: "linea", titulo: "Orden de las señales de ruta", hitos: [
      { k: "Antes", t: "Preseñalización", d: "Te avisa con antelación de la salida o el cruce." },
      { k: "Cruce", t: "Dirección", d: "Te marca el camino para llegar a tu destino." },
      { k: "Después", t: "Confirmación", d: "Te confirma que sigues la ruta correcta." }
    ] } },
  { leccion: "senales-indicacion", tras: 10, diagrama: { tipo: "comparar", titulo: "Colores de los paneles de orientación", columnas: [
      { t: "Fondo blanco", tono: "ok", items: ["Destinos en carreteras convencionales", "Letras negras", "Señales de destino de la red normal"] },
      { t: "Fondo azul", tono: "info", items: ["Servicios: gasolinera, hospital", "Letras y símbolos blancos"] },
      { t: "Fondo amarillo", tono: "warn", items: ["Orientación en tramos de obras", "Vale solo mientras duran las obras", "Manda sobre la señal fija"] }
    ] } },
  { leccion: "senales-balizamiento", tras: 2, diagrama: { tipo: "arbol", titulo: "¿Qué mando en una obra?", raiz: {
      q: "¿Ves conos, vallas o señales amarillas de obra?",
      si: { q: "¿Te da una orden el personal de obra?", si: { r: "Obedece: su orden vale como la de un agente", ok: true }, no: { r: "Sigue las señales amarillas; mandan sobre las fijas", ok: true } },
      no: { r: "Sigue las señales fijas y las marcas habituales", ok: true }
    } } },
  { leccion: "senales-balizamiento", tras: 6, diagrama: { tipo: "comparar", titulo: "Obra frente a señales fijas", columnas: [
      { t: "Señales de obra", tono: "warn", items: ["Fondo amarillo o naranja", "Mandan mientras duren los trabajos", "Órdenes del señalista: como las de un agente"] },
      { t: "Señales fijas", tono: "info", items: ["Colores habituales", "Mandan si no hay obra", "Ceden ante las señales de obra"] }
    ] } }
]);
// Preguntas tipo examen DGT (12 por lección nueva; formato SPEC.md)
window.PREGUNTAS = (window.PREGUNTAS || []).concat([
  { id: "x1-001", tema: "senales", pregunta: "Un vehículo con luz azul intermitente se acerca por detrás en un servicio urgente. ¿Qué debes hacer?", opciones: ["Acelerar para que no me alcance", "Apartarme para dejarle paso", "Seguir igual, porque la luz solo avisa"], correcta: 1, explicacion: "La luz azul (V-1) indica un vehículo prioritario en servicio urgente, como policía, ambulancia o bomberos. Debes apartarte para dejarle paso." },
  { id: "x1-002", tema: "senales", pregunta: "¿Qué distintivo identifica a un vehículo de transporte escolar?", opciones: ["La V-10", "La V-14", "La V-1"], correcta: 0, explicacion: "La V-10 identifica el transporte escolar, que puede tener niños subiendo o bajando. La V-14 es el distintivo de autoescuela y la V-1 es la luz azul de urgencia." },
  { id: "x1-003", tema: "senales", pregunta: "¿Qué distintivo lleva un coche de autoescuela?", opciones: ["La V-10", "La V-13 con la L", "La V-14"], correcta: 2, explicacion: "La V-14 es el distintivo de autoescuela: el coche lleva a un alumno que está aprendiendo. La L (V-13) identifica a un conductor novel, no a una autoescuela." },
  { id: "x1-004", tema: "senales", pregunta: "Ves una L blanca sobre fondo verde en la parte trasera de un coche. ¿Qué indica?", opciones: ["Que el conductor es novel y lleva poco tiempo con el permiso", "Que el coche es de alquiler", "Que el coche transporta mercancías peligrosas"], correcta: 0, explicacion: "Es la V-13, la L del conductor novel. Se lleva durante el primer año con el permiso, así que conviene dejar más distancia.", senal: { forma: "rectangulo-verde", simbolo: "L" } },
  { id: "x1-005", tema: "senales", pregunta: "¿Qué distintivo señala a un conductor con discapacidad, que tiene preferencias para aparcar?", opciones: ["La V-20", "La V-15", "La V-16"], correcta: 1, explicacion: "La V-15 identifica a un conductor con discapacidad, que tiene preferencias para aparcar. La V-20 señala carga que sobresale y la V-16 es la baliza de emergencia." },
  { id: "x1-006", tema: "senales", pregunta: "¿Qué señal avisa de una carga que sobresale por la parte trasera del vehículo?", opciones: ["La V-6, una placa amarilla con borde rojo", "La V-1, una luz azul", "La V-20, un panel con franjas rojas y blancas"], correcta: 2, explicacion: "La V-20 es un panel con franjas rojas y blancas que se coloca en el extremo de la carga que sobresale por detrás. La V-6 avisa de un vehículo largo." },
  { id: "x1-007", tema: "senales", pregunta: "Desde el 1 de enero de 2026, ¿qué dispositivo sustituye a los triángulos de emergencia?", opciones: ["La baliza V-16 conectada", "La V-20", "Una luz azul de la policía"], correcta: 0, explicacion: "Desde el 1 de enero de 2026, la baliza V-16 conectada se usa para señalizar un vehículo averiado o accidentado. Va en el techo del coche." },
  { id: "x1-008", tema: "senales", pregunta: "¿Qué significa la V-6?", opciones: ["Un vehículo de transporte escolar", "Un vehículo largo, de más de 12 metros", "Un vehículo de limpieza que circula muy despacio"], correcta: 1, explicacion: "La V-6 avisa de un vehículo largo, de más de 12 metros. Necesita más tiempo y más espacio para ser adelantado." },
  { id: "x1-009", tema: "senales", pregunta: "Un camión lleva cintas reflectantes alrededor de su contorno. ¿Para qué sirven?", opciones: ["Para indicar que es un vehículo prioritario", "Para indicar que transporta niños", "Para que se vea mejor, sobre todo de noche"], correcta: 2, explicacion: "Es la V-23: las cintas reflectantes en el contorno hacen que el camión se vea mejor, sobre todo de noche." },
  { id: "x1-010", tema: "senales", pregunta: "Ves un vehículo con la V-10 parado y con gente bajando. ¿Qué debes hacer?", opciones: ["Reducir y extremar la precaución, porque pueden salir niños", "Adelantarlo rápidamente por la derecha", "Tocar el claxon para que se aparten"], correcta: 0, explicacion: "La V-10 avisa de transporte escolar: pueden subir o bajar niños. Reduce y ten mucha precaución." },
  { id: "x1-011", tema: "senales", pregunta: "¿Qué es la V-16?", opciones: ["Un distintivo de autoescuela", "Una baliza luminosa conectada que señaliza una avería o un accidente", "Una placa de vehículo largo"], correcta: 1, explicacion: "La V-16 es una baliza luminosa conectada que se coloca en el techo del vehículo averiado o accidentado. Desde 2026 sustituye a los triángulos." },
  { id: "x1-012", tema: "senales", pregunta: "Un coche tiene una V azul en el techo. ¿Qué significa?", opciones: ["Un vehículo de transporte escolar", "Un vehículo prioritario de policía", "Un vehículo de autoescuela, con un alumno aprendiendo"], correcta: 2, explicacion: "Es la V-14, el distintivo de autoescuela. El transporte escolar es la V-10, y la luz azul de urgencia es la V-1." },
  { id: "x1-013", tema: "senales", pregunta: "Al entrar en un pueblo ves un panel blanco con borde rojo y su nombre. ¿Qué te indica?", opciones: ["Que entras en una población y empiezan las normas urbanas", "Que tienes prohibido entrar en el pueblo", "Que el pueblo es un destino al que debes ir"], correcta: 0, explicacion: "Es la señal S-500 de localización: te avisa de que entras en una población. Desde ese punto rigen las normas de circulación urbana." },
  { id: "x1-014", tema: "senales", pregunta: "¿Qué límite de velocidad tiene una calle de plataforma única, con calzada y acera al mismo nivel?", opciones: ["50 km/h", "20 km/h", "90 km/h"], correcta: 1, explicacion: "En una calle de plataforma única el límite es de 20 km/h, porque peatones y vehículos comparten el mismo espacio." },
  { id: "x1-015", tema: "senales", pregunta: "En una zona 30 señalizada, ¿cuál es el límite de velocidad?", opciones: ["50 km/h en toda la zona", "Sin límite específico", "30 km/h dentro de la zona"], correcta: 2, explicacion: "Dentro de la zona 30 señalizada, la velocidad máxima es de 30 km/h.", senal: { forma: "cuadrado-azul", simbolo: "30" } },
  { id: "x1-016", tema: "senales", pregunta: "¿Qué significa un cuadrado azul con un coche con dos ocupantes y el texto 2+?", opciones: ["Carril VAO: solo para vehículos con dos o más ocupantes", "Carril exclusivo para bicicletas", "Carril reservado para taxis"], correcta: 0, explicacion: "Es el carril VAO (de alta ocupación). Solo pueden usarlo los vehículos con dos o más ocupantes, según indique la señal.", senal: { forma: "cuadrado-azul", simbolo: "2+" } },
  { id: "x1-017", tema: "senales", pregunta: "¿Qué grupo de señales son las que empiezan por S-200?", opciones: ["Localización: te dicen en qué punto estás", "Preseñalización: te avisan con antelación de un cruce o salida", "Confirmación: te confirman que vas bien"], correcta: 1, explicacion: "Las S-200 son de preseñalización: avisan con antelación de un cruce, una salida o un destino." },
  { id: "x1-018", tema: "senales", pregunta: "¿Qué función tienen las señales de dirección, las que empiezan por S-300?", opciones: ["Avisar de una obra en la vía", "Identificar el número de la carretera", "Indicar el camino para llegar a un destino"], correcta: 2, explicacion: "Las señales de dirección (S-300) indican el camino para llegar a un destino." },
  { id: "x1-019", tema: "senales", pregunta: "¿Qué grupo de señales son las que empiezan por S-500?", opciones: ["Localización: te indican dónde estás, por ejemplo al entrar en un pueblo", "Dirección: te marcan el camino", "Confirmación: te confirman la ruta"], correcta: 0, explicacion: "Las S-500 son de localización: te dicen en qué punto estás, por ejemplo al entrar en una población." },
  { id: "x1-020", tema: "senales", pregunta: "¿De qué color suelen ser los paneles de destino en una carretera convencional?", opciones: ["Rojo, con letras blancas", "Blanco, con letras negras", "Azul, con letras amarillas"], correcta: 1, explicacion: "En carreteras convencionales, los paneles de destino suelen ser blancos con letras negras. Los de servicios suelen ser azules." },
  { id: "x1-021", tema: "senales", pregunta: "¿Qué indica un poste con un número al borde de la carretera?", opciones: ["La velocidad máxima de la vía", "Un paso de peatones próximo", "El kilómetro en el que te encuentras (hito kilométrico)"], correcta: 2, explicacion: "Es un hito kilométrico: indica el kilómetro en el que estás y sirve para situarte." },
  { id: "x1-022", tema: "senales", pregunta: "¿Qué siglas identifican normalmente una autopista de peaje?", opciones: ["AP-", "N-", "CV-"], correcta: 0, explicacion: "Las autopistas de peaje llevan normalmente las siglas AP-. Las autovías, que suelen ser gratuitas, llevan la letra A-." },
  { id: "x1-023", tema: "senales", pregunta: "Ves un panel de servicios con el símbolo de una gasolinera. ¿De qué color suele ser el fondo?", opciones: ["Blanco con letras negras", "Azul, con símbolos blancos", "Amarillo de obras"], correcta: 1, explicacion: "Los paneles de servicios suelen ser azules, con letras y símbolos blancos. El amarillo se reserva para las obras." },
  { id: "x1-024", tema: "senales", pregunta: "¿Las señales de indicación te obligan a hacer algo?", opciones: ["Sí, todas las azules obligan a seguirlas", "Solo si el panel tiene borde rojo", "No: informan y orientan; lo que obliga es la señal de reglamentación (código R-)"], correcta: 2, explicacion: "Las señales de indicación informan y orientan. Lo que obliga o prohíbe son las señales de reglamentación, que tienen código R-." },
  { id: "x1-025", tema: "senales", pregunta: "Hay obras y una señal amarilla te indica un desvío, pero una señal fija dice otra cosa. ¿Cuál mandas?", opciones: ["La señal de obras, mientras duren los trabajos", "La señal fija, porque es permanente", "Ninguna, porque las obras no obligan"], correcta: 0, explicacion: "Las señales de obras son temporales y mandan sobre las fijas mientras duran los trabajos." },
  { id: "x1-026", tema: "senales", pregunta: "Un señalista te hace parar con la paleta, pero la señal de límite dice que puedes seguir. ¿Qué haces?", opciones: ["Sigo, porque la señal fija manda más", "Paro, porque su orden tiene la misma prioridad que la de un agente", "Freno a medias y sigo despacio"], correcta: 1, explicacion: "Las órdenes del personal de obra son de obligado cumplimiento y tienen la misma prioridad que las de los agentes. Debes parar." },
  { id: "x1-027", tema: "senales", pregunta: "¿De qué color son en general las señales temporales de obra?", opciones: ["Verde", "Azul", "Amarillo o naranja"], correcta: 2, explicacion: "Las señales temporales de obra son amarillas o naranjas. Las azules de obligación y las rojas de STOP conservan su aspecto habitual." },
  { id: "x1-028", tema: "senales", pregunta: "¿Qué son los conos y las vallas que cierran un carril en una obra?", opciones: ["Elementos que delimitan carriles o zonas de obra", "Señales de prohibición de adelantar", "Paneles de mensaje variable"], correcta: 0, explicacion: "Los conos y las vallas delimitan carriles o zonas de obra. No los cruces ni los pises." },
  { id: "x1-029", tema: "senales", pregunta: "¿Para qué sirven los captafaros y los hitos de arista?", opciones: ["Para indicar la velocidad máxima", "Para guiarte, marcando el carril o su borde", "Para indicar que hay peaje"], correcta: 1, explicacion: "Son elementos reflectantes que te guían por el carril o por el borde de la calzada, sobre todo de noche." },
  { id: "x1-030", tema: "senales", pregunta: "Mientras duran las obras, ¿qué marcas en el suelo prevalecen sobre las blancas habituales?", opciones: ["Las azules", "Las rojas", "Las amarillas o naranjas"], correcta: 2, explicacion: "Las marcas amarillas o naranjas de obra prevalecen sobre las blancas mientras duren los trabajos." },
  { id: "x1-031", tema: "senales", pregunta: "En una obra, un panel direccional te indica un camino provisional con flechas. ¿Qué haces?", opciones: ["Sigo las flechas, aunque mi ruta habitual sea otra", "Sigo mi ruta habitual, porque es la que conozco", "Me detengo hasta que quiten la obra"], correcta: 0, explicacion: "Los paneles direccionales marcan el camino provisional. Mientras duren las obras, debes seguirlo.", senal: { forma: "panel-amarillo", simbolo: "↰" } },
  { id: "x1-032", tema: "senales", pregunta: "¿Qué significa una luz amarilla fija o intermitente en una obra de noche?", opciones: ["Que puedes adelantar sin problema", "Que la zona de obra está delimitada: respeta esa balización", "Que es un semáforo de paso libre"], correcta: 1, explicacion: "Las luces amarillas delimitan la obra cuando hay poca visibilidad. Hay que respetar esa balización y reducir." },
  { id: "x1-033", tema: "senales", pregunta: "¿Qué elemento avisa de retenciones o niebla y, si es de obligado cumplimiento, obliga mientras esté activo?", opciones: ["El hito de arista", "El captafaros", "El panel de mensaje variable (PMV)"], correcta: 2, explicacion: "Los paneles de mensaje variable muestran avisos cambiantes. Si son de obligado cumplimiento, obligan mientras estén activos y prevalecen sobre las fijas." },
  { id: "x1-034", tema: "senales", pregunta: "Ves conos y vallas cerrando un carril, pero no hay nadie trabajando. ¿Qué debes hacer?", opciones: ["Respetar el cierre, porque la señalización sigue valiendo", "Cruzar los conos, porque ya no hay obra", "Adelantar por el carril cerrado"], correcta: 0, explicacion: "Mientras la señalización de obra esté puesta, sigue valiendo aunque no veas a nadie trabajando." },
  { id: "x1-035", tema: "senales", pregunta: "Un señalista con chaleco reflectante te indica con los brazos que sigas. ¿Qué haces?", opciones: ["Me detengo, porque los gestos no obligan", "Sigo despacio y con cuidado, porque su indicación es de obligado cumplimiento", "Ignoro sus gestos si tengo luz verde"], correcta: 1, explicacion: "Las indicaciones del personal de obra son de obligado cumplimiento. Hay que reducir la velocidad y seguir sus instrucciones." },
  { id: "x1-036", tema: "senales", pregunta: "¿Qué debes hacer al llegar a una zona de obras?", opciones: ["Acelerar para salir antes de la zona", "Cambiar de carril sin mirar, para evitar los conos", "Reducir, seguir las señales amarillas y obedecer al personal de obra"], correcta: 2, explicacion: "Al llegar a una obra debes reducir la velocidad, seguir las señales amarillas y obedecer al personal de obra." }
]);
// Tarjetas de repaso (5 por lección nueva; mismo formato que data/flashcards.js)
window.FLASHCARDS = (window.FLASHCARDS || []).concat([
  { id: "fx1-001", tema: "senales", emoji: "", frente: "¿Qué significa una luz azul intermitente en un vehículo?", dorso: "**Vehículo prioritario** en servicio urgente: **apártate**", nota: "Policía, ambulancia o bomberos (V-1)." },
  { id: "fx1-002", tema: "senales", emoji: "", frente: "¿Qué distintivo identifica el transporte escolar?", dorso: "**V-10**", nota: "La V-14 es la de autoescuela; no las confundas." },
  { id: "fx1-003", tema: "senales", emoji: "", frente: "¿Qué lleva un conductor novel en la parte trasera del coche?", dorso: "**Una L blanca sobre fondo verde** (V-13)", nota: "Se lleva durante el primer año con el permiso." },
  { id: "fx1-004", tema: "senales", emoji: "", frente: "¿Qué sustituye a los triángulos desde el 1 de enero de 2026?", dorso: "**La baliza V-16 conectada**", nota: "Se coloca en el techo del vehículo averiado." },
  { id: "fx1-005", tema: "senales", emoji: "", frente: "¿Qué señal avisa de carga que sobresale por detrás?", dorso: "**V-20**: panel con franjas rojas y blancas", nota: "Va en el extremo de la carga que sobresale." },
  { id: "fx1-006", tema: "senales", emoji: "", frente: "¿Qué avisan las señales S-200?", dorso: "**Preseñalización**: avisan con antelación", nota: "Te avisan antes de un cruce, una salida o un destino." },
  { id: "fx1-007", tema: "senales", emoji: "", frente: "¿Qué indica el panel blanco con borde rojo y el nombre de un pueblo?", dorso: "**Entrada a población (S-500)**", nota: "A partir de ese punto empiezan las normas urbanas." },
  { id: "fx1-008", tema: "senales", emoji: "", frente: "¿Cuál es el límite en una calle de plataforma única?", dorso: "**20 km/h**", nota: "La calzada y la acera están al mismo nivel." },
  { id: "fx1-009", tema: "senales", emoji: "", frente: "¿Qué significa el cuadrado azul con el texto 2+?", dorso: "**Carril VAO**: dos ocupantes o más", nota: "Lo que indique la señal concreta es lo que cuenta." },
  { id: "fx1-010", tema: "senales", emoji: "", frente: "¿De qué color suelen ser los paneles de destino en carreteras convencionales?", dorso: "**Blanco**, con letras negras", nota: "Los de servicios suelen ser azules." },
  { id: "fx1-011", tema: "senales", emoji: "", frente: "¿De qué color son las señales temporales de obra?", dorso: "**Amarillo** o naranja", nota: "Mandan sobre las fijas mientras duran los trabajos." },
  { id: "fx1-012", tema: "senales", emoji: "", frente: "¿Qué pasa si un señalista te ordena parar?", dorso: "**Paras**: su orden vale como la de un agente", nota: "Aunque la señal fija diga otra cosa." },
  { id: "fx1-013", tema: "senales", emoji: "", frente: "¿Para qué sirven los captafaros y los hitos de arista?", dorso: "**Guiarte** por el carril o por su borde", nota: "Sobre todo de noche: no los cruces ni los pises." },
  { id: "fx1-014", tema: "senales", emoji: "", frente: "¿Qué marcas de obra prevalecen sobre las blancas?", dorso: "**Las amarillas o naranjas**, mientras duren los trabajos", nota: "Solo mientras duren los trabajos." },
  { id: "fx1-015", tema: "senales", emoji: "", frente: "Hay conos cerrando un carril y no ves a nadie trabajando. ¿Qué haces?", dorso: "**Respetar el cierre**: la señalización sigue valiendo", nota: "Mientras esté puesta, es válida." }
]);
