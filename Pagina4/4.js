//=============================
// ELEMENTOS
//=============================

const heartButton = document.getElementById("heartButton");
const player = document.getElementById("player");

const audio = document.getElementById("myAudio");

const playPause = document.getElementById("playPause");

const progress = document.getElementById("progress");

const current = document.getElementById("current");

const duration = document.getElementById("duration");

const heart = document.querySelector(".heart");

//=============================
// PARTICULAS
//=============================

const particles = document.getElementById("particles");

for(let i=0;i<45;i++){

    const p=document.createElement("span");

    p.classList.add("particle");

    p.style.left=Math.random()*100+"%";

    p.style.animationDuration=(5+Math.random()*7)+"s";

    p.style.animationDelay=Math.random()*6+"s";

    p.style.opacity=Math.random();

    particles.appendChild(p);

}

//=============================
// MOSTRAR REPRODUCTOR
//=============================

heartButton.addEventListener("click",()=>{

    heart.classList.add("beat");

    player.classList.remove("oculto");

    player.classList.add("mostrar");

    // Asegurar que el audio esté detenido
    audio.pause();
    audio.currentTime = 0;

    // Mostrar siempre el icono PLAY
    playPause.innerHTML = "▶";

    setTimeout(()=>{

        heart.classList.remove("beat");

    },700);

});

//=============================
// PLAY / PAUSA
//=============================

playPause.addEventListener("click",()=>{

    if(audio.paused){

        audio.play();

    }else{

        audio.pause();

    }

});

//=============================
// CAMBIO DE ICONO
//=============================

audio.addEventListener("play",()=>{

    playPause.innerHTML="⏸";

});

audio.addEventListener("pause",()=>{

    playPause.innerHTML="▶";

});

//=============================
// CARGAR METADATOS
//=============================

audio.addEventListener("loadedmetadata",()=>{

    progress.max=Math.floor(audio.duration);

    duration.textContent=formatTime(audio.duration);

});

//=============================
// ACTUALIZAR BARRA
//=============================

audio.addEventListener("timeupdate",()=>{

    progress.value=Math.floor(audio.currentTime);

    current.textContent=formatTime(audio.currentTime);

});

//=============================
// MOVER BARRA
//=============================

progress.addEventListener("input",()=>{

    audio.currentTime=progress.value;

});

//=============================
// TERMINA AUDIO
//=============================

audio.addEventListener("ended",()=>{

    audio.currentTime=0;

    progress.value=0;

    current.textContent="00:00";

    playPause.innerHTML="▶";

});

//=============================
// FORMATO TIEMPO
//=============================

function formatTime(segundos){

    let min=Math.floor(segundos/60);

    let sec=Math.floor(segundos%60);

    if(sec<10){

        sec="0"+sec;

    }

    return min+":"+sec;

}