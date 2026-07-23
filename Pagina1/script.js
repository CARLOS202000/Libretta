// Obtener elementos del DOM
const modal = document.getElementById("myModal");
const btn = document.getElementById("playAudio");
const span = document.getElementsByClassName("close")[0];
const audio = document.getElementById("myAudio");

// Ruta del audio
const cancion = "audio/Carlos ✨.mp3";

// Asignar el audio al reproductor
audio.src = cancion;

// Mostrar el modal al cargar la página
window.onload = function () {
    modal.style.display = "block";
};

// Cerrar el modal al hacer clic en la X
span.onclick = function () {
    modal.style.display = "none";
};

// Cerrar el modal al hacer clic fuera del área del modal
window.onclick = function (event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
};

// Reproducir el audio al hacer clic en el botón
btn.onclick = function () {
    audio.play();
    modal.style.display = "none";
};

// Si la canción termina
audio.onended = function () {
    // Aquí puedes colocar una acción si después la necesitas.
    // Por ahora no hace nada.
};



const playPause = document.getElementById("playPause");
const progress = document.getElementById("progress");
const current = document.getElementById("current");
const duration = document.getElementById("duration");

// Cuando carga el audio
audio.onloadedmetadata = () => {

    duration.textContent = format(audio.duration);

}

// Mientras reproduce
audio.ontimeupdate = () => {

    progress.value = (audio.currentTime / audio.duration) * 100;

    current.textContent = format(audio.currentTime);

}

// Mover la barra
progress.oninput = () => {

    audio.currentTime = (progress.value / 100) * audio.duration;

}

// Botón play / pausa
playPause.onclick = () => {

    if(audio.paused){

        audio.play();

        playPause.innerHTML="⏸";

    }else{

        audio.pause();

        playPause.innerHTML="▶";

    }

}

// Cuando termina

audio.onended=()=>{

    playPause.innerHTML="▶";

}

// Formato minutos

function format(segundos){

    const min=Math.floor(segundos/60);

    const sec=Math.floor(segundos%60);

    return `${String(min).padStart(2,"0")}:${String(sec).padStart(2,"0")}`;

}