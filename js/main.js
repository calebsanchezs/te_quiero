const btnSi = document.getElementById('btnSi');
const btnNo = document.getElementById('btnNo');
const imagen = document.getElementById('imagen');
const mensaje = document.getElementById('mensaje');
const musica = document.getElementById('musicaFondo'); // <--- Añadido
const carpetaIMG = './img/';

const imagenes = ["1.gif", "2.gif", "3.gif", "4.gif", "5.gif", "6.gif", "7.gif", "8.gif"];
let index = -1;

// --- FUNCIÓN PARA ACTIVAR MÚSICA ---
const iniciarMusica = () => {
    musica.play().catch(e => console.log("Esperando clic para sonar..."));
};

// Intentar sonar cuando mueva el mouse o haga clic en cualquier lado
document.addEventListener('click', iniciarMusica, { once: true });
document.addEventListener('mouseover', iniciarMusica, { once: true });


btnSi.addEventListener('click', function () {
    musica.play(); // Aseguramos que suene al aceptar
    
    Swal.fire({
        title: '¡Sabía que dirías que sí!',
        text: '¡Eres la casualidad más bonita que me ha pasado! 🥰❤', 
        imageUrl: carpetaIMG + 'image_SI.gif',
        confirmButtonText: 'Cerrar',
        confirmButtonColor: '#ff4d6d'
    }).then((result) => {
        felicidades();
        clearInterval(interval);
        imagen.src =  carpetaIMG + "image_OK.gif";
        btnSi.style.display = 'none';
        btnNo.style.display = 'none';
        mensaje.textContent = '¡Sabía que este sería el inicio de nuestra mejor historia! Gracias por hacerme el más feliz hoy. ❤️✨';
    });
});

btnNo.addEventListener('mouseover', function () {
    moverBoton();
    iniciarMusica(); // También intenta activar la música si intenta darle al "No"
});

function moverBoton() {
    const botonRect = btnNo.getBoundingClientRect();
    const width = window.innerWidth - botonRect.width;
    const height = window.innerHeight - botonRect.height;

    btnNo.style.position = "absolute";
    btnNo.style.left = (Math.random() * width) + "px";
    btnNo.style.top = (Math.random() * height) + "px";
}

const interval = setInterval(() => {
    index++;
    if (index >= imagenes.length) {
        index = 0;
    }
    imagen.src = carpetaIMG + imagenes[index];
}, 3000);

// --- TUS FUNCIONES DE ANIMACIÓN (Se mantienen igual) ---
function felicidades() {
    var bArray = [];
    var sArray = [2, 4, 6, 8];
    var contenedor = document.querySelector('.contenedor');
    for (var i = 0; i < contenedor.offsetWidth; i++) {
        bArray.push(i);
    }

    setInterval(function () {
        var size = random(sArray);
        var div = document.createElement('div');
        div.classList.add('individual-bubble');
        div.style.left = random(bArray) + 'px';
        div.style.width = size + 'px';
        div.style.height = size + 'px';
        div.style.bottom = '10px';
        div.style.position = 'absolute';
        div.style.zIndex = '1';
        contenedor.appendChild(div);

        animate(div);
    }, 150);
}

function animate(div) {
    var bottom = 10;
    var opacity = 1;

    var animationInterval = setInterval(function () {
        bottom += 2;
        opacity -= 0.007;
        div.style.bottom = bottom + '%';
        div.style.opacity = opacity;

        if (bottom >= 100) {
            clearInterval(animationInterval);
            div.remove();
        }
    }, 80);
}

function random(data) {
    return data[Math.floor(Math.random() * data.length)];
}

const btnCarta = document.getElementById('btnCarta');

// --- FUNCIÓN LLUVIA DE FLORES ---
function crearLluvia() {
    const contenedor = document.getElementById('lluvia-flores');
    const flores = ['🌸', '🌹', '🌷', '❤️', '✨'];
    
    setInterval(() => {
        const flor = document.createElement('div');
        flor.classList.add('petalo');
        flor.innerText = flores[Math.floor(Math.random() * flores.length)];
        flor.style.left = Math.random() * 100 + "vw";
        flor.style.animationDuration = Math.random() * 3 + 2 + "s"; 
        
        contenedor.appendChild(flor);

        setTimeout(() => {
            flor.remove();
        }, 5000);
    }, 300);
}

// --- ACTUALIZACIÓN EVENTO BTN SI ---
btnSi.addEventListener('click', function () {
    musica.play();
    crearLluvia(); // Inicia la lluvia de flores

    Swal.fire({
        title: '¡Sabía que dirías que sí!',
        text: '¡Eres la casualidad más bonita que me ha pasado, Mariana! 🥰❤',
        imageUrl: carpetaIMG + 'image_SI.gif',
        confirmButtonText: 'Cerrar',
        confirmButtonColor: '#ff4d6d'
    }).then(() => {
        felicidades();
        clearInterval(interval);
        imagen.src = carpetaIMG + "image_OK.gif";
        btnSi.style.display = 'none';
        btnNo.style.display = 'none';
        mensaje.textContent = '¡Gracias por hacerme el más feliz hoy, Mariana! ❤️';
        
        // Mostrar el botón de la carta
        btnCarta.style.display = 'inline-block';
    });
});

// --- EVENTO PARA LA CARTA ---
btnCarta.addEventListener('click', function() {
    Swal.fire({
        title: 'Para mi querida Mariana 🌹',
        html: `
            <div class="texto-carta">
                <p>Mariana, desde que llegaste a mi vida, cada momento se ha vuelto más brillante. No solo eres una persona increíble, sino que te has convertido en mi motivación y en mi lugar seguro.</p>
                <p>Escribo esto porque a veces las palabras se quedan cortas para expresar lo que siento al verte sonreír. Quiero ser quien te apoye en tus días difíciles y quien celebre contigo cada uno de tus logros. Gracias por aceptar ser parte de mi camino y por dejarme ser parte del tuyo.</p>
                <p>Prometo cuidarte, respetarte y hacerte reír todos los días. Eres mi presente favorito y el futuro que más anhelo. Te quiero muchísimo. ❤️</p>
            </div>
        `,
        confirmButtonText: 'Te amo',
        confirmButtonColor: '#ff4d6d',
        showClass: {
            popup: 'animate__animated animate__fadeInDown'
        },
        hideClass: {
            popup: 'animate__animated animate__fadeOutUp'
        }
    });
});