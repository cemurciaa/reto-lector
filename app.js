
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
El piloto había aprendido que un viaje puede comenzar de manera inesperada.
Una tarde, mientras atravesaba una zona desértica, su avión presentó una falla
y tuvo que aterrizar lejos de cualquier ciudad. El lugar parecía completamente
vacío. No había casas, árboles ni personas cerca.

Mientras intentaba solucionar el problema de su avión, escuchó una pequeña voz.
Al levantar la mirada encontró a un niño de apariencia extraña que lo observaba
con mucha tranquilidad. El visitante no parecía preocupado por estar en medio
del desierto. En lugar de preguntar dónde se encontraba, hizo una petición que
sorprendió al piloto: quería que le dibujara un animal.

El piloto intentó dibujar varias veces, pero ninguna imagen parecía satisfacer
al visitante. Finalmente, cansado, dibujó una caja y explicó que dentro estaba
el animal que buscaba. El niño sonrió. Para él, aquella caja no era solamente
un dibujo. Su imaginación podía completar lo que los ojos no podían ver.

Poco a poco, el piloto descubrió que aquel visitante vivía en un planeta muy
pequeño. Allí cuidaba sus plantas, limpiaba sus volcanes y observaba con
atención todo lo que ocurría a su alrededor. Entre todas las cosas que había
conocido, existía una flor que ocupaba un lugar especial en su pensamiento.

El visitante decidió viajar porque quería conocer otros lugares y comprender
mejor el comportamiento de los adultos. En cada planeta encontraba personas
ocupadas en diferentes actividades. Algunos buscaban constantemente que los
demás los admiraran. Otros repetían tareas sin preguntarse por qué las hacían.
También encontró personas convencidas de que poseer muchas cosas era la mejor
manera de demostrar su importancia.

Cada encuentro le produjo nuevas preguntas. El visitante comenzó a comprender
que crecer no siempre significa aprender a mirar mejor. Algunas personas
parecían haber olvidado la imaginación, la curiosidad y la capacidad de
preguntarse por el sentido de lo que hacen.

Cuando llegó a la Tierra encontró muchas flores parecidas a la que conocía.
Al principio se sintió confundido. Había pensado que su flor era única.
Entonces comprendió algo importante: una persona, un animal o incluso una
planta puede adquirir un significado especial cuando existe una relación de
cuidado y tiempo.

El visitante había dedicado tiempo a su flor. La había protegido, escuchado
y cuidado. Por eso, aunque existieran muchas flores parecidas, aquella tenía
un valor diferente para él.

Durante su encuentro con el piloto también aprendió que la amistad necesita
tiempo. No basta con conocer a alguien durante unos minutos. Las relaciones se
construyen poco a poco mediante la confianza, la responsabilidad y los
momentos compartidos.

El piloto también cambió. Antes pensaba principalmente en reparar su avión y
regresar rápidamente a su vida cotidiana. Después de conocer al visitante,
comenzó a observar las cosas de otra manera. Descubrió que algunas preguntas
importantes no tienen respuestas rápidas.

Al final, los dos comprendieron que existen cosas que no pueden medirse con
dinero ni guardarse en una caja. La amistad, la confianza, el cuidado y los
recuerdos adquieren valor porque las personas deciden dedicarles tiempo.

El piloto nunca volvió a mirar el desierto de la misma manera. Aquel lugar que
parecía vacío había terminado convirtiéndose en el escenario de una de las
experiencias más importantes de su vida.
`,

        "8-9": `
Una noticia comenzó a circular por el pueblo desde muy temprano. Muchas
personas sabían que dos hermanos buscaban a Santiago para matarlo. Lo habían
dicho públicamente y no parecía existir ningún secreto sobre sus intenciones.

Sin embargo, conocer una información no siempre significa actuar frente a
ella. Algunas personas pensaron que alguien más se encargaría de avisarle.
Otras creyeron que los hermanos solamente estaban hablando y que finalmente
no cumplirían lo que habían anunciado.

La noticia pasó de una persona a otra, pero nadie asumió completamente la
responsabilidad de detener lo que estaba por ocurrir. Cada individuo parecía
tener una explicación para no intervenir.

Los hermanos justificaban su decisión utilizando una idea de honor. Para
ellos, la presión social y las expectativas de la comunidad tenían un peso
enorme. Creían que debían actuar para recuperar el honor de su familia.

Pero la situación también mostraba un problema más profundo. Cuando muchas
personas conocen un peligro y cada una supone que otra persona actuará, la
responsabilidad puede terminar diluyéndose.

Algunas personas intentaron avisar, pero los mensajes no llegaron a tiempo.
Otros recibieron información incompleta o pensaron que el asunto no era tan
grave como parecía.

La tragedia no puede comprenderse solamente observando a quienes llevaron a
cabo el asesinato. También es necesario analizar el silencio, la pasividad,
la presión social y las fallas de comunicación que rodearon los hechos.

Después, muchos habitantes recordaron que habían escuchado alguna señal de
advertencia. Algunos dijeron que pensaban que otra persona ya había avisado.
Otros reconocieron que no imaginaron que las amenazas terminarían convirtiéndose
en una tragedia.

La historia plantea así una pregunta difícil: ¿qué responsabilidad tiene una
persona cuando sabe que algo malo puede suceder y decide no intervenir?

La respuesta no es sencilla. Una comunidad puede convertirse en espectadora
cuando cada integrante considera que el problema pertenece a los demás.

Por eso, más allá de la tragedia individual, la historia invita a reflexionar
sobre la responsabilidad colectiva, la importancia de comunicar información
seria y las consecuencias de aceptar una injusticia simplemente porque otros
también permanecen en silencio.

Comprender estos hechos exige mirar más allá de quién sostuvo un arma. También
es necesario preguntarse qué decisiones, silencios, creencias y omisiones
permitieron que la tragedia avanzara.
`,

        "10-11": `
Gregorio despertó una mañana y descubrió que su cuerpo había cambiado de una
forma que no podía comprender. Sin embargo, antes de pensar en lo que estaba
ocurriendo, su primera preocupación fue el trabajo.

Había pasado mucho tiempo cumpliendo con sus obligaciones porque sabía que su
familia dependía económicamente de él. Aunque no disfrutaba su empleo, sentía
que debía continuar trabajando para ayudar a los demás.

Después de su transformación, la relación con su familia comenzó a cambiar.
Al principio, su hermana Grete fue quien más se preocupó por él. Le llevaba
comida y trataba de comprender sus nuevas necesidades.

Pero con el paso del tiempo, la situación económica de la familia cambió.
Otros miembros tuvieron que comenzar a trabajar y Gregorio dejó de cumplir
la función que antes realizaba.

La transformación física terminó acompañada de una transformación en la
forma como los demás lo veían. Mientras podía trabajar y aportar dinero,
su presencia parecía tener una utilidad evidente. Cuando dejó de hacerlo,
la familia comenzó a percibirlo de otra manera.

En una ocasión, Gregorio salió de su habitación mientras Grete tocaba el
violín. Su presencia provocó una reacción negativa y la distancia entre él
y su familia aumentó.

Gregorio todavía conservaba sentimientos, recuerdos y deseos. Sin embargo,
cada vez resultaba más difícil para los demás reconocer esa humanidad.

La historia permite preguntarse si el valor de una persona depende de lo que
produce, de lo que aporta económicamente o de su utilidad para los demás.

La transformación puede entenderse entonces no solamente como un cambio
físico. También representa una crisis de identidad, pertenencia y dignidad.

Cuando una persona deja de ser considerada útil, puede experimentar rechazo
aunque continúe teniendo sentimientos, necesidades y derechos.

Por eso, la historia invita a reflexionar sobre la manera en que valoramos a
las personas. Una sociedad que mide a alguien únicamente por su productividad
corre el riesgo de olvidar que la dignidad humana no depende de la utilidad.

La transformación de Gregorio revela así un conflicto que va mucho más allá
de su apariencia. La verdadera pregunta es qué sucede cuando una persona
deja de cumplir el papel que los demás esperan de ella.
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
