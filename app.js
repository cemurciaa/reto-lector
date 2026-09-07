```javascript
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
// INICIO
// ======================================================

document.addEventListener("DOMContentLoaded", () => {

    cargarLectura();

});


// ======================================================
// CARGAR LECTURA
// ======================================================

```javascript
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
```

function cargarLectura() {

    const lectura = document.getElementById("lectura");

    if (!lectura) {
        return;
    }

    const texto = `
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
construyen poco a poco mediante la confianza, la responsabilidad y los momentos
compartidos.

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
`;

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

    preguntas = [

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

    ];

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
```
