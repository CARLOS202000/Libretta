const intro = document.getElementById("intro");
const heart = document.getElementById("heart");
const mensaje = document.getElementById("mensajeRandom");

const playerSection = document.getElementById("playerSection");

const audio = document.getElementById("myAudio");

const playPause = document.getElementById("playPause");
const progress = document.getElementById("progress");

const current = document.getElementById("current");
const duration = document.getElementById("duration");

const cover = document.querySelector(".cover");

let iniciado = false;

const frases = [
    "🤍 Buscando defectos...",
    "👀 Analizando esos ojazos bellos...",
    "🤔 Verificando si todavía me gustas...",
    "🥰 Calculando el nivel de ternura...",
    "😍 Revisando esa sonrisa hermosa...",
    "💕 Cargando recuerdos bonitos...",
    "✨ Sincronizando corazones...",
    "❤️ Confirmando que eres mi favorita..."
];

/*=========================
ESCRIBIR TEXTO
=========================*/

function escribir(texto){

    mensaje.innerHTML = "";

    let i = 0;

    const maquina = setInterval(() => {

        mensaje.innerHTML += texto.charAt(i);

        i++;

        if(i >= texto.length){

            clearInterval(maquina);

        }

    },40);

}

/*=========================
CLICK CORAZÓN
=========================*/

heart.addEventListener("click",()=>{

    if(iniciado) return;

    iniciado = true;

    if(navigator.vibrate){

        navigator.vibrate([120,80,120]);

    }

    const random = frases[Math.floor(Math.random()*frases.length)];

    escribir(random);

    heart.classList.add("explode");

    crearCorazones();

    setTimeout(()=>{

        escribir("❌ No se encontraron defectos 🤍");

    },2000);

    setTimeout(()=>{

        escribir("🎵 Para Ti🤍...");

    },3800);

    setTimeout(()=>{

        intro.classList.add("hide");

    },5200);

    setTimeout(()=>{

        playerSection.classList.add("show");

        playerSection.scrollIntoView({

            behavior:"smooth",

            block:"center"

        });

        audio.play();

        playPause.innerHTML="⏸";

        cover.style.animationPlayState="running";

    },5800);

});

/*=========================
PLAY / PAUSA
=========================*/

playPause.addEventListener("click",()=>{

    if(audio.paused){

        audio.play();

        playPause.innerHTML="⏸";

        cover.style.animationPlayState="running";

    }else{

        audio.pause();

        playPause.innerHTML="▶";

        cover.style.animationPlayState="paused";

    }

});

/*=========================
DURACIÓN
=========================*/

audio.addEventListener("loadedmetadata",()=>{

    duration.textContent = formato(audio.duration);

});

/*=========================
PROGRESO
=========================*/

audio.addEventListener("timeupdate",()=>{

    if(audio.duration){

        progress.value = (audio.currentTime/audio.duration)*100;

    }

    current.textContent = formato(audio.currentTime);

});

/*=========================
MOVER BARRA
=========================*/

progress.addEventListener("input",()=>{

    if(audio.duration){

        audio.currentTime = (progress.value/100)*audio.duration;

    }

});

/*=========================
AL TERMINAR
=========================*/

audio.addEventListener("ended",()=>{

    playPause.innerHTML="▶";

    cover.style.animationPlayState="paused";

});

/*=========================
FORMATO TIEMPO
=========================*/

function formato(seg){

    if(isNaN(seg)) return "00:00";

    let minutos = Math.floor(seg/60);

    let segundos = Math.floor(seg%60);

    minutos = minutos < 10 ? "0"+minutos : minutos;

    segundos = segundos < 10 ? "0"+segundos : segundos;

    return minutos+":"+segundos;

}

/*=========================
PARTÍCULAS
=========================*/

const particles = document.getElementById("particles");

for(let i=0;i<45;i++){

    const p = document.createElement("span");

    p.className = "particle";

    p.style.left = Math.random()*100+"%";

    p.style.animationDuration = (6+Math.random()*5)+"s";

    p.style.animationDelay = Math.random()*5+"s";

    p.style.opacity = Math.random();

    particles.appendChild(p);

}

/*=========================
CORAZONES
=========================*/

function crearCorazones(){

    for(let i=0;i<30;i++){

        const h = document.createElement("div");

        h.innerHTML="❤️";

        h.style.position="fixed";

        h.style.left="50%";

        h.style.top="45%";

        h.style.fontSize=(16+Math.random()*24)+"px";

        h.style.pointerEvents="none";

        h.style.zIndex="9999";

        document.body.appendChild(h);

        const x=(Math.random()-0.5)*450;

        const y=(Math.random()-0.5)*450;

        const r=Math.random()*720;

        h.animate([

            {

                transform:"translate(0,0) rotate(0deg)",

                opacity:1

            },

            {

                transform:`translate(${x}px,${y}px) rotate(${r}deg)`,

                opacity:0

            }

        ],{

            duration:1800,

            easing:"ease-out"

        });

        setTimeout(()=>{

            h.remove();

        },1800);

    }

}