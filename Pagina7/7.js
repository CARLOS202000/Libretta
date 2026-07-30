//==================================================
// VARIABLES
//==================================================

const scenes = document.querySelectorAll(".scene");
const audios = document.querySelectorAll("audio");
const players = document.querySelectorAll(".audio-card");


//==================================================
// OBSERVER ESCENAS
//==================================================

const observer = new IntersectionObserver((entries)=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

entry.target.classList.add("visible");

}

});

},{
threshold:.35
});

scenes.forEach(scene=>{

observer.observe(scene);

});


//==================================================
// CAMBIO DE FONDO
//==================================================

const chapters=[

"chapter1",
"chapter2",
"chapter3",
"chapter4",
"chapter5"

];

const fondoObserver=new IntersectionObserver((entries)=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

const index=[...scenes].indexOf(entry.target);

document.body.classList.remove(

"chapter1",
"chapter2",
"chapter3",
"chapter4",
"chapter5"

);

const numero=Math.min(

chapters.length-1,

Math.floor(index/3)

);

document.body.classList.add(chapters[numero]);

}

});

},{
threshold:.45
});

scenes.forEach(scene=>{

fondoObserver.observe(scene);

});


//==================================================
// ESTRELLAS
//==================================================

const stars=document.getElementById("stars");

for(let i=0;i<180;i++){

const star=document.createElement("span");

star.className="star";

const tipo=Math.random();

if(tipo<.2){

star.classList.add("big");

}else if(tipo<.6){

star.classList.add("medium");

}else{

star.classList.add("small");

}

star.style.left=Math.random()*100+"%";
star.style.top=Math.random()*100+"%";

star.style.animationDelay=Math.random()*5+"s";

stars.appendChild(star);

}



//==================================================
// ESTRELLAS FUGACES
//==================================================

const shootingContainer=document.getElementById("stars");

function crearEstrellaFugaz(){

const shooting=document.createElement("div");

shooting.className="shooting";

shooting.style.left=Math.random()*30+"%";

shooting.style.top=Math.random()*40+"%";

shooting.style.animationDuration=

(4+Math.random()*4)+"s";

shootingContainer.appendChild(shooting);

setTimeout(()=>{

shooting.remove();

},8000);

}

setInterval(()=>{

crearEstrellaFugaz();

},5000);


//==================================================
// PÉTALOS
//==================================================

const petals=document.getElementById("petals");

function crearPetalo(){

const petal=document.createElement("span");

petal.className="petal";

petal.style.left=Math.random()*100+"%";

petal.style.animationDuration=

(8+Math.random()*8)+"s";

petal.style.opacity=.3+Math.random()*.7;

petal.style.transform=

`scale(${0.6+Math.random()})`;

petals.appendChild(petal);

setTimeout(()=>{

petal.remove();

},17000);

}

setInterval(()=>{

crearPetalo();

},350);


//==================================================
// LUCIÉRNAGAS
//==================================================

const lights=document.getElementById("lights");

for(let i=0;i<18;i++){

const fire=document.createElement("span");

fire.className="firefly";

fire.style.left=Math.random()*100+"%";

fire.style.top=Math.random()*100+"%";

fire.style.animationDuration=

(6+Math.random()*8)+"s";

fire.style.animationDelay=

Math.random()*6+"s";

lights.appendChild(fire);

}



//==================================================
// DESTELLOS
//==================================================

const titles=document.querySelectorAll("h1,h2");

titles.forEach(title=>{

setInterval(()=>{

const s=document.createElement("span");

s.className="sparkle";

s.style.left=Math.random()*100+"%";

s.style.top=Math.random()*100+"%";

title.appendChild(s);

setTimeout(()=>{

s.remove();

},2000);

},2500);

});


//==================================================
// REPRODUCTORES PREMIUM
//==================================================

const audioCards = document.querySelectorAll(".audio-card");

audioCards.forEach(card=>{

const audio = card.querySelector("audio");
const play = card.querySelector(".play-btn");
const vinyl = card.querySelector(".vinyl");
const progress = card.querySelector(".bar");
const current = card.querySelector(".current");
const total = card.querySelector(".total");


//========================
// CARGAR DURACIÓN
//========================

audio.addEventListener("loadedmetadata",()=>{

total.textContent = format(audio.duration);

});


//========================
// PLAY
//========================

play.addEventListener("click",()=>{

// detener los demás

audioCards.forEach(other=>{

const a = other.querySelector("audio");

if(a!==audio){

a.pause();

a.currentTime=a.currentTime;

other.classList.remove("playing");

other.querySelector(".play-btn").innerHTML="▶";

}

});

if(audio.paused){

audio.play();

card.classList.add("playing");

play.innerHTML="❚❚";

}else{

audio.pause();

card.classList.remove("playing");

play.innerHTML="▶";

}

});


//========================
// PROGRESO
//========================

audio.addEventListener("timeupdate",()=>{

const porcentaje=

(audio.currentTime/audio.duration)*100;

progress.style.width=porcentaje+"%";

current.textContent=format(audio.currentTime);

});


//========================
// FINALIZA
//========================

audio.addEventListener("ended",()=>{

card.classList.remove("playing");

play.innerHTML="▶";

progress.style.width="0%";

});

});

//==================================================
// FORMATO MM:SS
//==================================================

function format(seg){

if(isNaN(seg)) return "00:00";

const m=Math.floor(seg/60);

const s=Math.floor(seg%60);

return(

String(m).padStart(2,"0")

+":"

+

String(s).padStart(2,"0")

);

}


//==================================================
// CLICK EN LA BARRA
//==================================================

document.querySelectorAll(".progress").forEach(progress=>{

progress.addEventListener("click",(e)=>{

const card=progress.closest(".audio-card");

const audio=card.querySelector("audio");

const rect=progress.getBoundingClientRect();

const porcentaje=

(e.clientX-rect.left)/rect.width;

audio.currentTime=

porcentaje*audio.duration;

});

});


//==================================================
// FINAL CINEMATOGRÁFICO
//==================================================

const ending=document.querySelector(".final-scene");

if(ending){

const endObserver=new IntersectionObserver((entries)=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

activarFinal();

}

});

},{
threshold:.55
});

endObserver.observe(ending);

}


//==================================================
// EFECTO TYPEWRITER
//==================================================

function escribirFinal(){

const texto=

"Porque las historias más bonitas... nunca terminan en la última página.";

const destino=document.querySelector("#typewriter");

if(!destino) return;

destino.innerHTML="";

let i=0;

const maquina=setInterval(()=>{

destino.innerHTML+=texto.charAt(i);

i++;

if(i>=texto.length){

clearInterval(maquina);

}

},55);

}

//==================================================
// ACTIVAR FINAL
//==================================================

let finalIniciado=false;

function activarFinal(){

if(finalIniciado) return;

finalIniciado=true;


// A ❤️ C

const letras=document.querySelector(".letters");

if(letras){

letras.classList.add("show");

}


// Escribir frase

setTimeout(()=>{

escribirFinal();

},2500);


// Crear explosión

setTimeout(()=>{

explosionCorazones();

},1800);


// Oscurecer

setTimeout(()=>{

document.body.classList.add("cinema-end");

},9000);

}


//==================================================
// CORAZONES
//==================================================

function explosionCorazones(){

for(let i=0;i<60;i++){

const heart=document.createElement("div");

heart.innerHTML="❤";

heart.style.position="fixed";

heart.style.left="50%";

heart.style.top="50%";

heart.style.fontSize=

(18+Math.random()*25)+"px";

heart.style.pointerEvents="none";

heart.style.zIndex="99999";

document.body.appendChild(heart);

const x=(Math.random()-.5)*900;

const y=(Math.random()-.5)*700;

const r=Math.random()*720;

heart.animate([

{

transform:"translate(0,0) scale(.2)",

opacity:1

},

{

transform:

`translate(${x}px,${y}px)
rotate(${r}deg)
scale(1.8)`,

opacity:0

}

],{

duration:3000,

easing:"ease-out"

});

setTimeout(()=>{

heart.remove();

},3000);

}

}


//==================================================
// ESTRELLAS FUGACES
//==================================================

setInterval(()=>{

const star=document.createElement("div");

star.className="shooting-star";

star.style.left=Math.random()*40+"%";

star.style.top=Math.random()*35+"%";

document.body.appendChild(star);

setTimeout(()=>{

star.remove();

},3500);

},6000);


//==================================================
// MENSAJES OCULTOS
//==================================================

const frasesSecretas=[

"🤍 Gracias por llegar a mi vida.",

"✨ Ojalá esta historia continúe.",

"🌙 Hay personas que simplemente se quedan.",

"🫶 Todavía sonrío al recordarte.",

"❤️ Sigues siendo mi Proverbios 3:15.",

"🌹 Algunas personas valen todos los intentos.",

"💫 Me sigues inspirando."

];

setInterval(()=>{

const m=document.createElement("div");

m.className="secret-message";

m.innerHTML=

frasesSecretas[
Math.floor(Math.random()*frasesSecretas.length)
];

m.style.left=(15+Math.random()*70)+"%";
m.style.top=(20+Math.random()*60)+"%";

document.body.appendChild(m);

setTimeout(()=>{

m.remove();

},5000);

},18000);


