
let velocidad = 160;
let indicePalabra = 0;
let intervaloLectura = null;
let temporizador = null;
let segundosRestantes = 600;
let pausado = false;
let lecturaTerminada = false;

let preguntas = [];
let preguntaActual = 0;
let respuestasCorrectas = 0;
let seleccionActual = null;

// ======================================================
// NIVEL SELECCIONADO
// ======================================================

let nivelSeleccionado = "6-7";

const datosNiveles = {

    "6-7": {
        nombre: "🌱 EXPLORADORES — 6.º–7.º",
        titulo: "Un visitante de un pequeño planeta"
    },

    "8-9": {
        nombre: "🔎 INVESTIGADORES — 8.º–9.º",
        titulo: "Una muerte que todos conocían"
    },

    "10-11": {
        nombre: "🧠 PENSADORES — 10.º–11.º",
        titulo: "La transformación"
    }

};

// ======================================================
// INICIO
// ======================================================

document.addEventListener("DOMContentLoaded", () => {

    cargarLectura();

});


// ======================================================
// CARGAR LECTURA
// ======================================================

// ======================================================
// SELECCIONAR NIVEL
// ======================================================

function seleccionarNivel(nivel) {

    nivelSeleccionado = nivel;

    const datos = datosNiveles[nivel];

    if (!datos) {
        return;
    }

    const inicio =
        document.getElementById("pantalla-inicio");

    const lectura =
        document.getElementById("pantalla-lectura");

    const nivelElemento =
        document.getElementById("nivel-actual");

    const tituloElemento =
        document.getElementById("titulo-lectura");

    if (inicio) {
        inicio.classList.remove("activa");
    }

    if (lectura) {
        lectura.classList.add("activa");
    }

    if (nivelElemento) {
        nivelElemento.textContent = datos.nombre;
    }

    if (tituloElemento) {
        tituloElemento.textContent = datos.titulo;
    }

    reiniciarLectura();

    cargarLectura();

}

function comenzarReto() {
    const inicio = document.getElementById("pantalla-inicio");
    const lectura = document.getElementById("pantalla-lectura");

    if (inicio) {
        inicio.classList.remove("activa");
    }

    if (lectura) {
        lectura.classList.add("activa");
    }

    reiniciarLectura();
}

function cargarLectura() {

    const lectura = document.getElementById("lectura");

    if (!lectura) {
        return;
    }

   const lecturas = {

    "6-7": `
En una región de montañas y caminos largos, un piloto viajaba solo cuando una falla en su avión lo obligó a realizar un aterrizaje de emergencia en medio de un lugar desértico. No había casas cerca, tampoco árboles ni personas a la vista. Solo había arena, silencio y un cielo enorme. El piloto sabía que debía reparar su avión pronto, porque no tenía suficiente agua ni alimentos para permanecer allí durante muchos días.

Mientras intentaba dormir, escuchó una voz pequeña que le hizo una petición inesperada.

—Por favor, dibújame una oveja.

El piloto abrió los ojos sorprendido. No entendía quién podía hablarle en un lugar tan solitario. Frente a él había un niño de apariencia tranquila, con preguntas extrañas y una manera de observar el mundo diferente a la de los adultos.

El piloto intentó dibujar una oveja, pero el niño rechazó sus primeros dibujos. Una parecía demasiado enferma, otra era demasiado vieja y otra tenía características que no correspondían con lo que él imaginaba. Finalmente, el piloto tuvo una idea. Dibujó una caja y explicó que dentro estaba la oveja.

El niño sonrió. Para él, la oveja estaba allí.

Aquella respuesta hizo que el piloto comprendiera algo que había olvidado durante mucho tiempo: algunas personas necesitan imaginar para comprender. Los adultos suelen pedir explicaciones, números y pruebas antes de aceptar algo, mientras que un niño puede encontrar posibilidades en un simple dibujo.

El pequeño visitante no parecía pertenecer a aquel desierto. Contó que vivía en un planeta muy pequeño, tan pequeño que podía observar una puesta de sol varias veces en un mismo día simplemente cambiando de lugar. En su planeta había volcanes que debía cuidar y plantas que necesitaba vigilar.

También había una flor.

La flor era importante para él, aunque a veces no comprendía sus palabras ni sus cambios de humor. La cuidaba, la protegía y se preocupaba por ella. Sin embargo, con el tiempo comenzó a sentirse confundido. Quería conocer otros lugares y comprender mejor a los adultos, así que decidió viajar.

En sus viajes encontró personas muy diferentes. Algunas estaban obsesionadas con recibir admiración. Querían que los demás reconocieran constantemente su importancia. Otras trabajaban sin descanso siguiendo instrucciones que ya ni siquiera cuestionaban. También conoció a alguien que quería poseer cosas simplemente para poder decir que eran suyas.

El visitante observaba todas esas conductas con sorpresa.

Para él, una pregunta sencilla podía ser más importante que una larga explicación. No entendía por qué algunos adultos dedicaban gran parte de su vida a acumular cosas que no podían compartir con nadie. Tampoco comprendía por qué algunas personas trabajaban tanto que ya no tenían tiempo para conversar con quienes querían.

Durante su viaje llegó finalmente a la Tierra.

Allí descubrió algo que lo sorprendió profundamente. Encontró un lugar lleno de flores. Eran parecidas a la flor que había dejado en su pequeño planeta. Durante un momento sintió tristeza. Había pensado que su flor era única, y ahora parecía descubrir que existían muchas parecidas.

Sin embargo, después comprendió una diferencia fundamental.

Su flor no era importante solamente porque fuera diferente a las demás. Era importante porque él había dedicado tiempo a cuidarla. Había protegido sus hojas, había escuchado sus palabras, había pensado en ella y había compartido momentos con ella.

Entonces entendió que el valor de una relación no depende únicamente de las características que vemos al principio. También depende del tiempo que invertimos, de la responsabilidad que asumimos y de las experiencias que compartimos.

El piloto escuchaba atentamente aquellas ideas mientras intentaba reparar su avión. Poco a poco, ambos comenzaron a convertirse en amigos.

El niño le enseñó que una persona puede estar rodeada de muchas cosas y, aun así, sentirse sola. También le mostró que tener muchas posesiones no significa necesariamente tener una vida valiosa. Una persona puede poseer mucho dinero y no tener a quién contarle una preocupación. Otra puede tener muy pocas cosas y, sin embargo, conservar amistades, recuerdos y afectos que le dan sentido a su vida.

El piloto comenzó entonces a mirar el desierto de otra manera. Ya no veía solamente un lugar vacío. Veía un espacio donde había conocido a alguien que le había hecho preguntas importantes.

El tiempo pasó y llegó el momento en que el visitante debía continuar su camino. El piloto comprendió que despedirse de un amigo puede producir tristeza, pero también puede dejar enseñanzas que permanecen.

Antes de separarse, hablaron sobre aquello que hace especiales a las personas y a los lugares. El pequeño visitante había descubierto que no todo lo valioso puede medirse con dinero, tamaño o cantidad. Algunas cosas adquieren importancia porque alguien decidió cuidarlas.

El piloto también entendió que la amistad no aparece completa desde el primer encuentro. Se construye poco a poco. Requiere escuchar, compartir, respetar y dedicar tiempo.

Años después, el piloto todavía recordaba aquella experiencia. Cuando veía una puesta de sol o miraba el cielo durante una noche tranquila, pensaba en su pequeño amigo y en las preguntas que le había hecho.

Recordaba especialmente una idea: muchas veces las personas buscan aquello que consideran importante muy lejos, cuando en realidad deberían aprender a valorar lo que tienen cerca.

El visitante había llegado desde un pequeño planeta, pero sus preguntas habían provocado una transformación enorme en el piloto.

Desde entonces, cada vez que alguien le preguntaba qué había aprendido de aquella experiencia, no hablaba primero del avión ni del desierto. Hablaba de la responsabilidad, de la amistad y del tiempo.

Porque comprendió que cuidar algo significa aceptar que nuestras acciones tienen consecuencias. Si dedicamos tiempo a una persona, una mascota, una planta, un proyecto o una comunidad, construimos un vínculo. Si ignoramos aquello que depende de nosotros, también estamos tomando una decisión.

La historia de aquel encuentro no terminó cuando los dos amigos se separaron. Continuó en la memoria del piloto.

Y quizá esa sea una de las características más especiales de las relaciones humanas: algunas personas permanecen presentes aunque ya no estén físicamente cerca.

El pequeño visitante había enseñado al piloto a mirar más allá de las apariencias. El piloto, por su parte, descubrió que todavía podía aprender de alguien que veía el mundo con ojos diferentes.

Al final, ambos comprendieron que una vida valiosa no se construye solamente con cosas que se pueden comprar. También se construye con momentos, decisiones, responsabilidades, amistades y recuerdos.

Por eso, cuando el piloto volvió a mirar el cielo, ya no lo observó de la misma manera.

Ahora sabía que detrás de cada estrella podía existir una historia, una persona o un recuerdo importante.

Y también sabía que aquello que verdaderamente valoramos merece nuestro tiempo y nuestro cuidado.
`,

    "8-9": `
En un pequeño pueblo, durante una mañana aparentemente normal, comenzó a circular una noticia preocupante. Varias personas aseguraban que un joven llamado Santiago sería asesinado ese mismo día.

Lo extraño no era solamente la gravedad de la noticia. Lo extraño era que muchas personas parecían conocerla.

Algunos la escucharon en una tienda. Otros la recibieron de un vecino. Alguien dijo que los hermanos de una familia habían hablado públicamente de sus intenciones. Incluso hubo quienes pensaron que seguramente otra persona ya habría intervenido.

La noticia avanzaba de una casa a otra, pero nadie parecía asumir completamente la responsabilidad de detener lo que estaba por suceder.

Santiago, mientras tanto, continuaba con sus actividades sin conocer con claridad el peligro que lo rodeaba.

Esa situación convirtió al pueblo en un escenario de contradicciones. Muchas personas sabían algo, pero cada una poseía solamente una parte de la información. Algunos pensaban que se trataba de una amenaza sin importancia. Otros suponían que los responsables estaban hablando solamente para llamar la atención. También hubo quienes consideraron que el asunto pertenecía a otra familia y que no debían intervenir.

Los hermanos que habían anunciado su intención de cometer el crimen justificaban sus acciones mediante una idea relacionada con el honor familiar. Para ellos, existía una obligación que debían cumplir. Sin embargo, esa explicación no significaba que su decisión fuera correcta.

El concepto de honor puede tener diferentes interpretaciones. Puede relacionarse con dignidad, respeto y responsabilidad, pero también puede convertirse en una excusa para justificar la violencia cuando una comunidad acepta sin cuestionarla determinadas normas sociales.

Mientras los hermanos caminaban con sus armas, varias oportunidades para evitar la tragedia aparecieron y desaparecieron.

Una persona pudo haber avisado directamente a Santiago. Otra pudo haber informado a las autoridades. Alguien más pudo haber hablado con los hermanos para detenerlos. Sin embargo, muchas de esas posibilidades quedaron solamente en pensamientos.

Este comportamiento revela un problema importante: conocer que existe un peligro no es lo mismo que actuar frente a él.

En ocasiones, una persona puede pensar que alguien más se encargará del problema. Si diez personas observan una situación peligrosa, cada una puede asumir que las otras nueve actuarán. Como resultado, nadie hace nada.

En el pueblo ocurrió algo parecido.

Las personas tenían información fragmentada y, además, estaban influenciadas por rumores, costumbres y suposiciones. El resultado fue una cadena de errores.

Uno de los errores más graves fue la comunicación.

No bastaba con que una persona supiera que existía una amenaza. Esa información debía llegar de manera clara a quien estaba en peligro. También debía llegar a quienes tenían capacidad para intervenir.

La historia muestra que la comunicación puede fallar incluso cuando muchas personas hablan.

Hablar mucho no significa necesariamente comunicar bien.

Un rumor puede cambiar mientras pasa de una persona a otra. Una advertencia puede perder importancia cuando alguien la considera exagerada. Una frase puede interpretarse de diferentes maneras. Y una información urgente puede llegar demasiado tarde.

Por eso, ante una situación de riesgo, es necesario verificar la información, comunicarla directamente y actuar con responsabilidad.

La tragedia que finalmente ocurre no puede entenderse únicamente como la decisión de dos personas que llevaban armas. También es necesario observar el comportamiento de quienes conocían las amenazas y decidieron no intervenir, de quienes supusieron que alguien más ayudaría y de quienes no comprobaron si la información había llegado a la persona afectada.

Esto no significa que todas las personas tengan la misma responsabilidad. Las decisiones individuales tienen diferentes niveles de gravedad. Sin embargo, analizar solamente a quienes ejecutan una acción puede impedirnos comprender cómo una situación peligrosa llegó a hacerse posible.

La historia también plantea una pregunta difícil: ¿qué responsabilidad tiene una comunidad cuando observa una injusticia?

No siempre es fácil responder.

Intervenir puede producir miedo. Una persona puede temer equivocarse, quedar involucrada en un conflicto o recibir críticas. También puede pensar que no tiene suficiente información.

Pero precisamente por eso existen mecanismos para actuar responsablemente: preguntar, verificar, avisar a las autoridades, buscar ayuda y comunicar directamente a quienes pueden resultar afectados.

La pasividad también puede tener consecuencias.

Imaginemos que un estudiante observa que un compañero está siendo amenazado. Si piensa que el profesor seguramente ya lo sabe, podría guardar silencio. Otro estudiante podría pensar lo mismo. Al final, todos tienen una parte de la información, pero nadie actúa.

La situación demuestra que la responsabilidad no consiste solamente en evitar hacer daño. También implica actuar cuando tenemos posibilidades razonables de prevenirlo.

Otro elemento importante es la presión social.

Los hermanos no actuaban solamente por una decisión individual. También estaban influenciados por una idea de lo que supuestamente debían hacer para defender a su familia. Cuando una persona siente que la comunidad espera determinada conducta, puede resultar difícil cuestionarla.

Por eso es importante desarrollar pensamiento crítico.

Pensar críticamente significa preguntarse si una norma es justa, si una tradición puede causar daño, si una decisión tiene consecuencias para otras personas y si existen alternativas.

Una costumbre no se convierte automáticamente en correcta porque haya existido durante mucho tiempo.

La historia del pueblo también permite reflexionar sobre los rumores. Cuando una noticia grave comienza a circular, repetirla sin verificar puede aumentar la confusión. Pero ignorarla completamente también puede ser peligroso.

La mejor respuesta consiste en comprobar la información y comunicarla de manera responsable.

Esto es especialmente importante en la actualidad, cuando las redes sociales permiten que una noticia llegue a cientos o miles de personas en pocos minutos.

Una persona puede compartir una publicación pensando que ayuda, pero si la información es falsa puede provocar miedo, conflictos o daño a alguien.

Por eso, antes de compartir una noticia debemos preguntarnos: ¿de dónde viene?, ¿está comprobada?, ¿quién podría resultar afectado?, ¿estoy ayudando o aumentando el problema?

El caso de Santiago también muestra que una tragedia puede ser resultado de varias decisiones pequeñas.

Una persona decide no preguntar. Otra decide no avisar. Otra supone que el problema no es grave. Otra cree que alguien más actuará.

Cada decisión parece pequeña cuando se observa por separado.

Pero juntas pueden formar una cadena de acontecimientos.

La responsabilidad colectiva no significa culpar a todos por igual. Significa reconocer que nuestras acciones y omisiones pueden influir en lo que sucede a nuestro alrededor.

La historia deja entonces una enseñanza que va más allá del crimen.

Una comunidad segura necesita personas capaces de reconocer los riesgos, comunicar información importante, cuestionar ideas injustas y actuar cuando sea necesario.

También necesita instituciones que respondan cuando reciben una advertencia.

Finalmente, necesita ciudadanos que comprendan que mirar hacia otro lado no siempre significa mantenerse al margen.

A veces, guardar silencio también puede tener consecuencias.

Por eso, la pregunta más importante no es únicamente quién tomó una decisión violenta. También debemos preguntar qué oportunidades existieron para evitarla, quién conocía cada parte de la información y por qué esas oportunidades no fueron aprovechadas.

Cuando una comunidad analiza esas preguntas, deja de observar la tragedia como un hecho inevitable.

Empieza a verla como el resultado de decisiones humanas.

Y si las decisiones humanas pueden producir un problema, también pueden producir soluciones.

La responsabilidad, la comunicación y el pensamiento crítico se convierten entonces en herramientas para evitar que una historia semejante vuelva a repetirse.
`,

    "10-11": `
Una mañana, un joven llamado Gregorio despertó después de una noche difícil y descubrió que su cuerpo había cambiado de una manera imposible de explicar. Al principio, el descubrimiento le produjo sorpresa y miedo, pero su primera preocupación no fue comprender qué le había sucedido.

Pensó en su trabajo.

Durante años había realizado una labor que no disfrutaba. Debía levantarse temprano, viajar constantemente y cumplir obligaciones que le dejaban poco tiempo para sí mismo. A pesar de sentirse cansado y frustrado, continuaba trabajando porque de sus ingresos dependía buena parte de la estabilidad económica de su familia.

Su transformación física hizo evidente una realidad que antes permanecía escondida: su familia dependía de él principalmente por lo que podía producir.

Cuando Gregorio dejó de trabajar, la situación económica cambió rápidamente. Las personas que antes se beneficiaban de su esfuerzo tuvieron que buscar nuevas maneras de obtener ingresos.

Su hermana Grete fue quien inicialmente mostró mayor preocupación por él.

Le llevaba comida, limpiaba su habitación y trataba de comprender qué necesitaba. Aunque la situación era extraña y difícil, ella intentaba mantener una relación cercana con su hermano.

Los padres, en cambio, reaccionaron con temor y desconcierto.

La transformación no había cambiado únicamente el cuerpo de Gregorio. También había cambiado la forma en que los demás lo observaban.

Antes era conocido como hijo, hermano y trabajador. Ahora, para muchas personas, se había convertido principalmente en un problema.

Esta diferencia permite reflexionar sobre la identidad.

¿Una persona deja de ser quien es cuando ya no puede trabajar?

¿Tiene menos valor alguien que necesita ayuda?

¿La utilidad económica debería determinar cuánto respeto merece una persona?

Estas preguntas se volvieron cada vez más importantes dentro de la familia.

Gregorio intentaba adaptarse a su nueva condición. Descubrió que podía moverse de manera diferente y que algunos alimentos que antes disfrutaba ya no le resultaban agradables. También comenzó a permanecer oculto para evitar causar miedo.

Mientras tanto, la familia tuvo que reorganizar su vida.

El padre consiguió una nueva ocupación. La madre comenzó a realizar actividades para aportar a la economía familiar. Grete también empezó a trabajar y asumir responsabilidades.

La situación produjo un cambio interesante.

Antes, Gregorio era quien sostenía económicamente a los demás. Después de la transformación, los demás comenzaron a trabajar mientras él permanecía aislado.

Esto demuestra que las relaciones familiares pueden cambiar cuando cambian las condiciones económicas.

Sin embargo, trabajar y aportar dinero no son las únicas formas de contribuir.

Una persona puede cuidar a un familiar, escuchar a alguien, enseñar algo, acompañar durante una enfermedad o colaborar en una tarea doméstica. El valor de una persona no debería reducirse a su capacidad para generar ingresos.

Con el paso del tiempo, Grete empezó a cansarse.

Al principio veía a Gregorio como su hermano que necesitaba ayuda. Después comenzó a verlo como una carga que interfería con la vida familiar.

Ese cambio no ocurrió de un día para otro. Fue apareciendo lentamente a medida que aumentaban las dificultades.

La habitación de Gregorio también comenzó a cambiar.

Los objetos fueron retirados para dejarle más espacio. Pero esa decisión produjo un efecto simbólico: al retirar sus pertenencias, también parecía desaparecer parte de la vida que había tenido antes.

Sus recuerdos, sus objetos y sus costumbres estaban relacionados con su identidad.

Por eso, perderlos significaba algo más que perder espacio.

En determinado momento, Gregorio escuchó a Grete tocar el violín.

La música despertó en él un sentimiento profundo. A pesar de su apariencia y de su aislamiento, todavía podía emocionarse con la belleza y recordar a la persona que había sido.

Se acercó para escuchar mejor.

La familia reaccionó con preocupación.

Para Gregorio, la música representaba una conexión con su hermana y con una parte de sí mismo que todavía permanecía viva. Para los demás, su presencia se había convertido en una amenaza para la tranquilidad de la casa.

La escena plantea una pregunta importante: ¿qué ocurre cuando dejamos de reconocer la humanidad de alguien porque su apariencia o comportamiento ha cambiado?

Una persona puede cambiar físicamente, enfermar, perder un empleo o necesitar ayuda. Ninguna de esas circunstancias elimina automáticamente su dignidad.

El problema de Gregorio no era solamente su transformación. También era la transformación de la mirada de quienes lo rodeaban.

Al principio, la familia intentaba ayudarlo porque todavía pensaba en él como un ser querido. Más adelante, comenzó a evaluar su existencia desde la comodidad, el esfuerzo y el beneficio económico.

Esto permite relacionar la historia con situaciones actuales.

Por ejemplo, imaginemos a un estudiante que siempre ayuda a sus compañeros con las tareas. Todos buscan su ayuda porque sabe utilizar bien una herramienta digital. Si algún día deja de hacerlo porque necesita tiempo para resolver sus propios problemas, algunos compañeros podrían molestarse.

La pregunta sería: ¿lo valoraban como amigo o solamente por lo que podía hacer por ellos?

Otro ejemplo podría ocurrir en una familia. Una persona aporta dinero durante muchos años y, por diferentes circunstancias, deja de trabajar. Si los demás comienzan a tratarla como una carga, habría que preguntarse si el afecto estaba condicionado por su capacidad económica.

La historia también cuestiona la idea de que la productividad define el valor humano.

Vivimos en una sociedad donde muchas veces se admira a las personas por sus resultados, títulos, ingresos o capacidad de producir rápidamente. Esos elementos pueden ser importantes, pero no deberían ser la única medida para valorar a alguien.

Una persona no es una máquina.

Necesita descanso, relaciones, reconocimiento y oportunidades para equivocarse.

Gregorio había pasado gran parte de su vida trabajando para solucionar las necesidades económicas de su familia. Sin embargo, cuando dejó de producir, descubrió que su lugar dentro de la familia no estaba tan protegido como había pensado.

Esto convierte su transformación en un símbolo.

El cambio físico puede interpretarse como una representación de una situación extrema en la que una persona deja de cumplir la función que los demás esperaban de ella.

En ese sentido, la pregunta no es solamente qué le ocurrió a Gregorio.

También debemos preguntarnos qué ocurrió con la familia.

La transformación de Gregorio permitió descubrir características que antes estaban ocultas.

El padre tuvo que asumir nuevas responsabilidades. La madre tuvo que adaptarse. Grete pasó de ser una joven dependiente a convertirse en una persona con nuevas obligaciones.

Por tanto, la transformación afectó a todos.

La historia también muestra que ayudar a alguien puede ser difícil cuando la situación se prolonga durante mucho tiempo.

Al principio, la familia tenía esperanza. Después apareció el cansancio. Finalmente, algunos miembros comenzaron a pensar que la única solución era alejarse de Gregorio.

Esta evolución permite analizar un conflicto entre dos valores: el cuidado y la supervivencia.

Cuidar a una persona puede requerir sacrificios. Pero también es necesario buscar formas sostenibles de hacerlo. Una familia que enfrenta una situación difícil necesita apoyo, comunicación y distribución de responsabilidades.

No debería depender de una sola persona.

Otro aspecto importante es la comunicación.

Gregorio podía comprender lo que los demás decían, pero ellos no podían comprenderlo cuando intentaba expresarse. Esta dificultad aumentó su aislamiento.

La situación representa un problema que también puede ocurrir entre personas que hablan el mismo idioma.

Podemos escuchar las palabras de alguien sin comprender realmente lo que siente.

Un compañero puede decir que está bien cuando realmente necesita ayuda. Un familiar puede permanecer en silencio porque teme ser juzgado. Un estudiante puede dejar de participar porque piensa que nadie valorará su opinión.

Escuchar verdaderamente implica prestar atención no solo a las palabras, sino también a las necesidades de la otra persona.

La historia de Gregorio plantea finalmente una reflexión sobre la dignidad.

Si una persona ya no puede producir, ¿deja de tener valor?

Si alguien necesita ayuda, ¿merece menos respeto?

Si alguien cambia y ya no cumple nuestras expectativas, ¿debemos abandonar la relación?

Las respuestas deberían llevarnos a reconocer que la dignidad humana no depende exclusivamente de la utilidad.

Las personas pueden atravesar momentos de debilidad, enfermedad, fracaso, desempleo o dependencia.

En esas situaciones es cuando las relaciones muestran realmente su profundidad.

Una amistad basada solamente en la utilidad desaparece cuando desaparece el beneficio.

Una amistad basada en el respeto puede mantenerse incluso cuando las circunstancias cambian.

La transformación de Gregorio puede entenderse entonces como una invitación a mirar más allá de la apariencia y de la productividad.

También nos obliga a revisar nuestra propia conducta.

¿Ayudamos a nuestros compañeros solamente cuando necesitamos algo?

¿Valoramos a una persona por lo que es o por lo que puede hacer por nosotros?

¿Tratamos con respeto a quienes tienen dificultades?

¿Somos capaces de acompañar a alguien cuando ya no puede ofrecernos ningún beneficio?

Estas preguntas convierten la historia en algo más que un relato fantástico.

La transformación funciona como un espejo.

Nos permite observar cómo reaccionamos cuando una persona deja de cumplir el papel que esperamos de ella.

Y quizá la principal enseñanza sea que las relaciones verdaderamente humanas no deberían depender únicamente de la utilidad.

Una persona merece respeto antes, durante y después de sus logros.

El valor de alguien no desaparece cuando cambia su situación.

Por eso, comprender la transformación de Gregorio significa analizar no solamente su cuerpo, sino también la manera en que cambian las relaciones, las responsabilidades, la identidad y la percepción de los demás.

Al final, la pregunta más importante no es por qué Gregorio se transformó.

La pregunta más profunda es qué revela esa transformación sobre la forma en que los seres humanos valoramos a quienes nos rodean.

Y esa pregunta sigue siendo actual porque, en muchas situaciones cotidianas, podemos olvidar que detrás de cada función, cada trabajo, cada calificación y cada ayuda existe una persona que necesita ser reconocida por mucho más que lo que puede producir.
`
};

const texto = lecturas[nivelSeleccionado]; 

    if (!texto) {
        return;
    }

    const palabras = texto.trim().split(/\s+/);

    lectura.innerHTML = "";

    palabras.forEach((palabra, indice) => {

        const span = document.createElement("span");

        span.textContent = palabra + " ";
        span.classList.add("palabra");
        span.id = "palabra-" + indice;

        lectura.appendChild(span);

    });

}

// ======================================================
// INICIAR LECTURA
// ======================================================

function iniciarLectura() {

    if (lecturaTerminada) {
        reiniciarLectura();
    }

    if (intervaloLectura !== null) {
        return;
    }

    pausado = false;

    actualizarMensaje(
        "📖 ¡Comenzó el reto! Sigue las palabras con atención."
    );

    iniciarResaltado();

    iniciarTemporizador();

}


// ======================================================
// RESALTADO DE PALABRAS
// ======================================================

function iniciarResaltado() {

    const tiempoPorPalabra = 60000 / velocidad;

    intervaloLectura = setInterval(() => {

        if (pausado) {
            return;
        }

        document.querySelectorAll(".palabra").forEach(palabra => {
            palabra.classList.remove("activa");
        });

        const palabra = document.getElementById(
            "palabra-" + indicePalabra
        );

        if (!palabra) {

            indicePalabra = 0;
            return;

        }

        palabra.classList.add("activa");

        palabra.scrollIntoView({
            behavior: "smooth",
            block: "center"
        });

        indicePalabra++;

        actualizarProgreso();

    }, tiempoPorPalabra);

}


// ======================================================
// TEMPORIZADOR DE 10 MINUTOS
// ======================================================

function iniciarTemporizador() {

    if (temporizador !== null) {
        return;
    }

    temporizador = setInterval(() => {

        if (pausado) {
            return;
        }

        segundosRestantes--;

        actualizarTiempo();

        if (segundosRestantes <= 0) {

            finalizarLectura();

        }

    }, 1000);

}


// ======================================================
// PAUSAR / REANUDAR
// ======================================================

function pausarLectura() {

    if (intervaloLectura === null) {
        return;
    }

    pausado = !pausado;

    if (pausado) {

        actualizarMensaje("⏸️ Lectura pausada.");

    } else {

        actualizarMensaje(
            "📖 Lectura nuevamente en marcha."
        );

    }

}


// ======================================================
// VELOCIDAD
// ======================================================

function aumentarVelocidad() {

    if (velocidad >= 220) {
        return;
    }

    velocidad += 10;

    actualizarVelocidad();

    reiniciarIntervaloLectura();

}


function disminuirVelocidad() {

    if (velocidad <= 120) {
        return;
    }

    velocidad -= 10;

    actualizarVelocidad();

    reiniciarIntervaloLectura();

}


function actualizarVelocidad() {

    const elemento = document.getElementById("velocidad");

    if (elemento) {
        elemento.textContent = velocidad;
    }

}


function reiniciarIntervaloLectura() {

    if (intervaloLectura === null) {
        return;
    }

    clearInterval(intervaloLectura);

    intervaloLectura = null;

    iniciarResaltado();

}


// ======================================================
// PROGRESO
// ======================================================

function actualizarProgreso() {

    const palabras = document.querySelectorAll(".palabra");

    if (palabras.length === 0) {
        return;
    }

    const porcentaje = Math.min(
        100,
        Math.round(
            (indicePalabra / palabras.length) * 100
        )
    );

    const porcentajeElemento =
        document.getElementById("porcentaje");

    const barra =
        document.getElementById("progreso");

    if (porcentajeElemento) {
        porcentajeElemento.textContent = porcentaje;
    }

    if (barra) {
        barra.style.width = porcentaje + "%";
    }

}


// ======================================================
// TIEMPO
// ======================================================

function actualizarTiempo() {

    const minutos =
        Math.floor(segundosRestantes / 60);

    const segundos =
        segundosRestantes % 60;

    const tiempoElemento =
        document.getElementById("tiempo");

    if (tiempoElemento) {

        tiempoElemento.textContent =
            String(minutos).padStart(2, "0") +
            ":" +
            String(segundos).padStart(2, "0");

    }

}


// ======================================================
// FINALIZAR LECTURA
// ======================================================

function finalizarLectura() {

    clearInterval(intervaloLectura);
    clearInterval(temporizador);

    intervaloLectura = null;
    temporizador = null;

    lecturaTerminada = true;

    document.querySelectorAll(".palabra").forEach(palabra => {
        palabra.classList.remove("activa");
    });

    actualizarMensaje(
        "🎉 ¡Tiempo terminado! Has completado la etapa de lectura."
    );

    mostrarPantallaPreguntas();

}


// ======================================================
// PANTALLAS
// ======================================================

function mostrarPantallaPreguntas() {

    const lectura =
        document.getElementById("pantalla-lectura");

    const preguntas =
        document.getElementById("pantalla-preguntas");

    if (lectura) {
        lectura.classList.remove("activa");
    }

    if (preguntas) {
        preguntas.classList.add("activa");
    }

    iniciarPreguntas();

}


// ======================================================
// PREGUNTAS
// ======================================================

function iniciarPreguntas() {

    const preguntasPorNivel = {

        // ==================================================
        // EXPLORADORES — 6.º–7.º
        // ==================================================

        "6-7": [

            {
                pregunta:
                    "¿Por qué el piloto tuvo que aterrizar en el desierto?",

                opciones: [
                    "Porque quería conocer el desierto.",
                    "Porque estaba buscando al visitante.",
                    "Porque su avión presentó una falla.",
                    "Porque quería descansar."
                ],

                correcta: 2,
                tipo: "Literal"
            },

            {
                pregunta:
                    "¿Qué le pidió inicialmente el visitante al piloto?",

                opciones: [
                    "Que reparara su avión.",
                    "Que dibujara un animal.",
                    "Que lo llevara a una ciudad.",
                    "Que buscara una flor."
                ],

                correcta: 1,
                tipo: "Literal"
            },

            {
                pregunta:
                    "¿Qué dibujó finalmente el piloto para satisfacer al visitante?",

                opciones: [
                    "Una flor.",
                    "Un planeta.",
                    "Una caja.",
                    "Un avión."
                ],

                correcta: 2,
                tipo: "Literal"
            },

            {
                pregunta:
                    "¿Qué cuidaba el visitante en su pequeño planeta?",

                opciones: [
                    "Máquinas y vehículos.",
                    "Casas y edificios.",
                    "Plantas y volcanes.",
                    "Animales salvajes."
                ],

                correcta: 2,
                tipo: "Literal"
            },

            {
                pregunta:
                    "¿Por qué el visitante pudo aceptar el dibujo de la caja?",

                opciones: [
                    "Porque no sabía cómo era un animal.",
                    "Porque su imaginación podía completar lo que no aparecía en el dibujo.",
                    "Porque quería hacer feliz al piloto.",
                    "Porque la caja era su objeto favorito."
                ],

                correcta: 1,
                tipo: "Inferencial"
            },

            {
                pregunta:
                    "¿Qué puede inferirse de las observaciones del visitante sobre los adultos?",

                opciones: [
                    "Que todos los adultos son malos.",
                    "Que los adultos nunca trabajan.",
                    "Que algunas personas pierden la curiosidad y olvidan preguntarse por el sentido de sus acciones.",
                    "Que los adultos no pueden viajar."
                ],

                correcta: 2,
                tipo: "Inferencial"
            },

            {
                pregunta:
                    "¿Por qué la flor del visitante tiene un valor especial para él aunque existan muchas flores parecidas?",

                opciones: [
                    "Porque es la flor más grande.",
                    "Porque dedicó tiempo a cuidarla y construyó una relación con ella.",
                    "Porque ninguna otra flor puede crecer.",
                    "Porque fue la primera flor que vio."
                ],

                correcta: 1,
                tipo: "Inferencial"
            },

            {
                pregunta:
                    "¿Cuál de las siguientes situaciones representa mejor la responsabilidad que plantea la lectura?",

                opciones: [
                    "Comprar muchos objetos para demostrar importancia.",
                    "Cuidar diariamente a una mascota y atender sus necesidades.",
                    "Evitar hablar con otras personas.",
                    "Trabajar solamente cuando alguien observa."
                ],

                correcta: 1,
                tipo: "Crítica"
            },

            {
                pregunta:
                    "¿Cuál es el mensaje principal que puede extraerse de la lectura?",

                opciones: [
                    "Los viajes siempre terminan en lugares desconocidos.",
                    "Los adultos tienen más problemas que los niños.",
                    "Las relaciones adquieren valor mediante el tiempo, el cuidado y la responsabilidad.",
                    "La imaginación sirve solamente para dibujar."
                ],

                correcta: 2,
                tipo: "Crítica"
            },

            {
                pregunta:
                    "Un compañero afirma: 'No necesito dedicar tiempo a mis amigos porque una amistad verdadera siempre permanece'. ¿Cuál sería la mejor respuesta según la lectura?",

                opciones: [
                    "Tiene razón porque las amistades no necesitan cuidado.",
                    "Las amistades solamente necesitan regalos.",
                    "Las relaciones necesitan tiempo, cuidado, confianza y momentos compartidos.",
                    "Es mejor tener muchos amigos para evitar depender de uno."
                ],

                correcta: 2,
                tipo: "Crítica"
            }

        ],


        // ==================================================
        // INVESTIGADORES — 8.º–9.º
        // ==================================================

        "8-9": [

            {
                pregunta:
                    "¿Qué noticia comenzó a circular por el pueblo?",

                opciones: [
                    "Que Santiago había abandonado el pueblo.",
                    "Que había ocurrido un accidente.",
                    "Que dos hermanos buscaban a Santiago para matarlo.",
                    "Que Santiago quería viajar."
                ],

                correcta: 2,
                tipo: "Literal"
            },

            {
                pregunta:
                    "¿Quiénes decidieron matar a Santiago?",

                opciones: [
                    "Dos amigos del pueblo.",
                    "Dos hermanos.",
                    "Un grupo de comerciantes.",
                    "Los habitantes del pueblo."
                ],

                correcta: 1,
                tipo: "Literal"
            },

            {
                pregunta:
                    "¿Qué concepto utilizaban los hermanos para justificar su decisión?",

                opciones: [
                    "La amistad.",
                    "La justicia.",
                    "La libertad.",
                    "El honor."
                ],

                correcta: 3,
                tipo: "Literal"
            },

            {
                pregunta:
                    "¿Qué ocurrió con la información sobre el peligro?",

                opciones: [
                    "Nadie llegó a conocerla.",
                    "Fue guardada como un secreto.",
                    "Pasó de una persona a otra, pero no llegó a detener la tragedia.",
                    "Fue enviada inmediatamente a las autoridades."
                ],

                correcta: 2,
                tipo: "Literal"
            },

            {
                pregunta:
                    "¿Qué puede inferirse del hecho de que los hermanos anunciaran públicamente sus intenciones?",

                opciones: [
                    "Que nadie podía conocer sus planes.",
                    "Que existieron oportunidades para que alguien interviniera.",
                    "Que querían abandonar el pueblo.",
                    "Que no hablaban en serio."
                ],

                correcta: 1,
                tipo: "Inferencial"
            },

            {
                pregunta:
                    "¿Por qué la responsabilidad de la tragedia es más compleja que señalar solamente a quienes llevaban las armas?",

                opciones: [
                    "Porque nadie conocía a Santiago.",
                    "Porque Santiago había abandonado el pueblo.",
                    "Porque también existieron silencio, pasividad, presión social y fallas de comunicación.",
                    "Porque los hermanos nunca estuvieron en el pueblo."
                ],

                correcta: 2,
                tipo: "Inferencial"
            },

            {
                pregunta:
                    "¿Qué función cumplen las expresiones relacionadas con 'pensé que alguien ya le había avisado'?",

                opciones: [
                    "Demostrar que todos actuaron inmediatamente.",
                    "Mostrar cómo las personas trasladaban la responsabilidad a otros.",
                    "Explicar por qué Santiago quería escapar.",
                    "Demostrar que nadie conocía la noticia."
                ],

                correcta: 1,
                tipo: "Inferencial"
            },

            {
                pregunta:
                    "Desde una perspectiva crítica, ¿qué problema existe al justificar una violencia utilizando el concepto de honor?",

                opciones: [
                    "Que el honor siempre evita los conflictos.",
                    "Que las tradiciones hacen innecesaria la justicia.",
                    "Que una presión social no convierte una acción violenta en una decisión moralmente correcta.",
                    "Que solamente las autoridades pueden hablar de honor."
                ],

                correcta: 2,
                tipo: "Crítica"
            },

            {
                pregunta:
                    "Un estudiante observa que un compañero está en peligro y piensa: 'Seguramente alguien más lo ayudará'. ¿Qué situación representa principalmente?",

                opciones: [
                    "Trabajo colaborativo.",
                    "Difusión de la responsabilidad.",
                    "Liderazgo positivo.",
                    "Comunicación efectiva."
                ],

                correcta: 1,
                tipo: "Crítica"
            },

            {
                pregunta:
                    "¿Cuál es la interpretación más completa de la tragedia presentada en la lectura?",

                opciones: [
                    "Fue únicamente consecuencia de una discusión personal.",
                    "La tragedia ocurrió porque nadie conocía los planes.",
                    "La presión social, la idea del honor, las fallas de comunicación y la pasividad colectiva contribuyeron al resultado.",
                    "El problema fue solamente la falta de autoridad."
                ],

                correcta: 2,
                tipo: "Crítica"
            }

        ],


        // ==================================================
        // PENSADORES — 10.º–11.º
        // ==================================================

        "10-11": [

            {
                pregunta:
                    "¿Cuál fue una de las primeras preocupaciones de Gregorio después de su transformación?",

                opciones: [
                    "Viajar a otro lugar.",
                    "Conocer nuevos amigos.",
                    "El trabajo y sus obligaciones.",
                    "Comprar una nueva casa."
                ],

                correcta: 2,
                tipo: "Literal"
            },

            {
                pregunta:
                    "¿Por qué Gregorio continuaba trabajando aunque no disfrutaba su empleo?",

                opciones: [
                    "Porque quería ser famoso.",
                    "Porque su familia dependía económicamente de él.",
                    "Porque quería viajar.",
                    "Porque no tenía otros intereses."
                ],

                correcta: 1,
                tipo: "Literal"
            },

            {
                pregunta:
                    "¿Quién fue inicialmente la persona que más ayudó a Gregorio?",

                opciones: [
                    "Su padre.",
                    "Su madre.",
                    "Un compañero de trabajo.",
                    "Su hermana Grete."
                ],

                correcta: 3,
                tipo: "Literal"
            },

            {
                pregunta:
                    "¿Qué ocurrió cuando Gregorio salió de su habitación mientras Grete tocaba el violín?",

                opciones: [
                    "Todos celebraron su presencia.",
                    "La familia decidió viajar.",
                    "Su presencia provocó una reacción negativa.",
                    "Gregorio comenzó a trabajar nuevamente."
                ],

                correcta: 2,
                tipo: "Literal"
            },

            {
                pregunta:
                    "¿Qué puede inferirse del hecho de que Gregorio pensara primero en el trabajo después de transformarse?",

                opciones: [
                    "Que el trabajo no tenía ninguna importancia para él.",
                    "Que había asumido una fuerte responsabilidad económica hacia su familia.",
                    "Que quería abandonar a su familia.",
                    "Que solamente le interesaba ganar dinero para sí mismo."
                ],

                correcta: 1,
                tipo: "Inferencial"
            },

            {
                pregunta:
                    "¿Por qué cambió la relación de la familia con Gregorio?",

                opciones: [
                    "Porque Gregorio dejó de cumplir la función económica que antes desempeñaba.",
                    "Porque decidió abandonar su casa.",
                    "Porque comenzó a viajar.",
                    "Porque dejó de recordar a su familia."
                ],

                correcta: 0,
                tipo: "Inferencial"
            },

            {
                pregunta:
                    "¿Qué relación existe entre la transformación de Gregorio y la idea de que una persona puede ser valorada solamente por su utilidad?",

                opciones: [
                    "La transformación demuestra que la apariencia es lo único importante.",
                    "La transformación demuestra que el trabajo siempre destruye las relaciones.",
                    "La historia permite cuestionar una sociedad que valora a las personas principalmente por lo que producen.",
                    "La historia demuestra que todas las familias rechazan a sus integrantes."
                ],

                correcta: 2,
                tipo: "Crítica"
            },

            {
                pregunta:
                    "Un estudiante solamente busca a un compañero cuando necesita que le hagan las tareas. ¿Qué situación se relaciona mejor con el conflicto presentado en la lectura?",

                opciones: [
                    "Valorar a una persona principalmente por su utilidad.",
                    "Construir una amistad basada en la confianza.",
                    "Reconocer la dignidad de otra persona.",
                    "Ayudar desinteresadamente."
                ],

                correcta: 0,
                tipo: "Crítica"
            },

            {
                pregunta:
                    "¿Cuál es una interpretación profunda de la transformación de Gregorio?",

                opciones: [
                    "Es solamente un cambio físico sin consecuencias.",
                    "Representa una crisis de identidad, pertenencia y dignidad.",
                    "Demuestra que el trabajo es siempre negativo.",
                    "Explica por qué todas las personas deben vivir solas."
                ],

                correcta: 1,
                tipo: "Crítica"
            },

            {
                pregunta:
                    "Un estudiante afirma: 'Gregorio solamente importaba mientras podía mantener económicamente a su familia'. ¿Cuál sería la respuesta más crítica?",

                opciones: [
                    "Tiene razón porque el valor de una persona depende de su productividad.",
                    "La familia siempre debe rechazar a quien deja de trabajar.",
                    "La historia permite cuestionar la idea de que la dignidad de una persona dependa de su utilidad económica.",
                    "Las personas solamente tienen valor cuando pueden ayudar económicamente."
                ],

                correcta: 2,
                tipo: "Crítica"
            }

        ]

    };


    // ==================================================
    // CARGAR PREGUNTAS DEL NIVEL SELECCIONADO
    // ==================================================

    preguntas = preguntasPorNivel[nivelSeleccionado];

    if (!preguntas) {
        preguntas = [];
        return;
    }

    preguntas = mezclarArray(preguntas);

    preguntaActual = 0;
    respuestasCorrectas = 0;

    mostrarPregunta();

}

// ======================================================
// MOSTRAR PREGUNTA
// ======================================================

function mostrarPregunta() {

    const pregunta = preguntas[preguntaActual];

    const numero =
        document.getElementById("numero-pregunta");

    const texto =
        document.getElementById("texto-pregunta");

    const opciones =
        document.getElementById("opciones");

    if (!pregunta || !numero || !texto || !opciones) {
        return;
    }

    numero.textContent =
        `Pregunta ${preguntaActual + 1} de ${preguntas.length}`;

    texto.textContent = pregunta.pregunta;

    opciones.innerHTML = "";

    seleccionActual = null;

    const opcionesMezcladas =
        pregunta.opciones.map((texto, indiceOriginal) => ({
            texto,
            indiceOriginal
        }));

    mezclarArray(opcionesMezcladas);

    opcionesMezcladas.forEach(opcion => {

        const boton =
            document.createElement("button");

        boton.classList.add("opcion");

        boton.textContent =
            opcion.texto;

        boton.onclick = () => {

            seleccionarRespuesta(
                boton,
                opcion.indiceOriginal
            );

        };

        opciones.appendChild(boton);

    });

}


// ======================================================
// SELECCIONAR RESPUESTA
// ======================================================

function seleccionarRespuesta(
    boton,
    indiceSeleccionado
) {

    if (seleccionActual !== null) {
        return;
    }

    seleccionActual = indiceSeleccionado;

    const pregunta =
        preguntas[preguntaActual];

    const botones =
        document.querySelectorAll(".opcion");

    botones.forEach(b => {
        b.disabled = true;
    });

    boton.classList.add("seleccionada");

    const feedback =
        document.getElementById("feedback");

    if (
        indiceSeleccionado === pregunta.correcta
    ) {

        respuestasCorrectas++;

        if (feedback) {

            feedback.className =
                "feedback correcta";

            feedback.textContent =
                "✅ ¡Respuesta correcta!";

        }

    } else {

        if (feedback) {

            feedback.className =
                "feedback incorrecta";

            feedback.textContent =
                "❌ No es la respuesta correcta. Revisa nuevamente las ideas del texto.";

        }

    }

    const siguiente =
        document.getElementById("siguiente");

    if (siguiente) {
        siguiente.style.display = "inline-block";
    }

}


// ======================================================
// SIGUIENTE PREGUNTA
// ======================================================

function siguientePregunta() {

    preguntaActual++;

    const feedback =
        document.getElementById("feedback");

    const siguiente =
        document.getElementById("siguiente");

    if (feedback) {
        feedback.className = "feedback";
        feedback.textContent = "";
    }

    if (siguiente) {
        siguiente.style.display = "none";
    }

    if (preguntaActual >= preguntas.length) {

        mostrarResultado();

        return;

    }

    mostrarPregunta();

}


// ======================================================
// RESULTADO
// ======================================================

function mostrarResultado() {

    const preguntasPantalla =
        document.getElementById("pantalla-preguntas");

    const resultado =
        document.getElementById("pantalla-resultado");

    if (preguntasPantalla) {
        preguntasPantalla.classList.remove("activa");
    }

    if (resultado) {
        resultado.classList.add("activa");
    }

    const porcentaje =
        Math.round(
            (respuestasCorrectas / preguntas.length) * 100
        );

    const puntaje =
        document.getElementById("puntaje");

    const insignia =
        document.getElementById("insignia");

    const mensajeFinal =
        document.getElementById("mensaje-final");

    if (puntaje) {
        puntaje.textContent =
            porcentaje + "%";
    }

    let mensaje = "";
    let icono = "";

    if (porcentaje >= 90) {

        icono = "🏆";
        mensaje =
            "¡Excelente! Has demostrado una comprensión crítica muy destacada.";

    } else if (porcentaje >= 80) {

        icono = "🧠";
        mensaje =
            "¡Muy bien! Eres un lector capaz de interpretar y analizar.";

    } else if (porcentaje >= 70) {

        icono = "📚";
        mensaje =
            "Buen trabajo. Sigue fortaleciendo tu comprensión.";

    } else if (porcentaje >= 60) {

        icono = "🌱";
        mensaje =
            "Estás avanzando. Volver al texto puede ayudarte a comprender mejor.";

    } else {

        icono = "🔎";
        mensaje =
            "Te recomendamos volver a leer el texto y realizar nuevamente el reto.";

    }

    if (insignia) {
        insignia.textContent = icono;
    }

    if (mensajeFinal) {
        mensajeFinal.textContent = mensaje;
    }

document.getElementById("correctas").textContent = respuestasCorrectas;
document.getElementById("velocidad-final").textContent = velocidad;

}


// ======================================================
// REINICIAR LECTURA
// ======================================================

function reiniciarLectura() {

    clearInterval(intervaloLectura);
    clearInterval(temporizador);

    intervaloLectura = null;
    temporizador = null;

    velocidad = 160;
    indicePalabra = 0;
    segundosRestantes = 600;
    pausado = false;
    lecturaTerminada = false;

    actualizarVelocidad();
    actualizarTiempo();

    const barra =
        document.getElementById("progreso");

    const porcentaje =
        document.getElementById("porcentaje");

    if (barra) {
        barra.style.width = "0%";
    }

    if (porcentaje) {
        porcentaje.textContent = "0";
    }

    document.querySelectorAll(".palabra").forEach(p => {
        p.classList.remove("activa");
    });

}


// ======================================================
// NUEVO RETO
// ======================================================

function nuevoReto() {

    reiniciarLectura();

    const resultado =
        document.getElementById("pantalla-resultado");

    const lectura =
        document.getElementById("pantalla-lectura");

    if (resultado) {
        resultado.classList.remove("activa");
    }

    if (lectura) {
        lectura.classList.add("activa");
    }

    actualizarMensaje(
        "Pulsa 'Iniciar lectura' para comenzar nuevamente."
    );

}


// ======================================================
// UTILIDADES
// ======================================================

function actualizarMensaje(texto) {

    const mensaje =
        document.getElementById("mensaje");

    if (mensaje) {
        mensaje.textContent = texto;
    }

}


function mezclarArray(array) {

    for (
        let i = array.length - 1;
        i > 0;
        i--
    ) {

        const j =
            Math.floor(Math.random() * (i + 1));

        [
            array[i],
            array[j]
        ] = [
            array[j],
            array[i]
        ];

    }

    return array;

}
