const audio=document.getElementById("myAudio");
const play=document.getElementById("playPause");
const progress=document.getElementById("progress");
const current=document.getElementById("current");
const duration=document.getElementById("duration");
const disco=document.querySelector(".cover");

audio.onloadedmetadata=()=>{

duration.textContent=format(audio.duration);

}

play.onclick=()=>{

if(audio.paused){

audio.play();

play.innerHTML="⏸";

disco.style.animationPlayState="running";

}else{

audio.pause();

play.innerHTML="▶";

disco.style.animationPlayState="paused";

}

}

audio.ontimeupdate=()=>{

progress.value=(audio.currentTime/audio.duration)*100;

current.textContent=format(audio.currentTime);

}

progress.oninput=()=>{

audio.currentTime=(progress.value/100)*audio.duration;

}

audio.onended=()=>{

play.innerHTML="▶";

disco.style.animationPlayState="paused";

}

function format(seg){

const m=Math.floor(seg/60);

const s=Math.floor(seg%60);

return String(m).padStart(2,"0")+":"+String(s).padStart(2,"0");

}