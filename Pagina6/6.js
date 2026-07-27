//======================================
// LA SIMPLICIDAD DE AMARTE
// Página 6
//======================================

//==============================
// ELEMENTOS
//==============================

const intro = document.getElementById("intro");

const continuar = document.getElementById("continuar");

const timeline = document.getElementById("timelineHoras");

const nota = document.getElementById("notaFinal");

const final = document.getElementById("final");

const horaTexto = document.getElementById("horaTexto");

const imagenHora = document.getElementById("imagenHora");

const fraseHora = document.getElementById("fraseHora");


//==============================
// DATOS
//==============================

const recuerdos=[

{
hora:"11:11",
img:"Img/Horas/1.jpeg",
frase:"Cada vez que veía 11:11... pensaba inmediatamente en ti."
},

{
hora:"1:11",
img:"Img/Horas/2.jpeg",
frase:"No buscaba señales... simplemente tú aparecías en mi mente."
},

{
hora:"2:22",
img:"Img/Horas/3.jpeg",
frase:"Sonreía sin darme cuenta... porque otra vez me había acordado de ti."
},

{
hora:"3:33",
img:"Img/Horas/4.jpeg",
frase:"Entre tantas ocupaciones... seguías siendo mi pensamiento favorito."
},

{
hora:"4:44",
img:"Img/Horas/5.jpeg",
frase:"Los pequeños detalles... también hablan de amor."
},

{
hora:"10:10",
img:"Img/Horas/6.jpeg",
frase:"Y así pasaban los días... encontrándote incluso en el tiempo."
}

];


//==============================
// ESTADO INICIAL
//==============================

timeline.style.display="none";

nota.style.display="none";

final.style.display="none";


//==============================
// BOTÓN
//==============================

continuar.addEventListener("click",()=>{

intro.style.opacity="0";

intro.style.transform="translateY(-40px)";

setTimeout(()=>{

intro.style.display="none";

timeline.style.display="flex";

timeline.style.opacity="0";

setTimeout(()=>{

timeline.style.opacity="1";

mostrarRecuerdos();

},100);

},900);

});


//==============================
// MOSTRAR RECUERDOS
//==============================

let indice=0;

function mostrarRecuerdos(){

cambiarRecuerdo();

const intervalo=setInterval(()=>{

indice++;

if(indice>=recuerdos.length){

clearInterval(intervalo);

setTimeout(()=>{

ocultarTimeline();

},3000);

return;

}

cambiarRecuerdo();

},4000);

}


//==============================
// CAMBIAR
//==============================

function cambiarRecuerdo(){

const r=recuerdos[indice];

horaTexto.style.opacity="0";

imagenHora.style.opacity="0";

fraseHora.style.opacity="0";

setTimeout(()=>{

horaTexto.textContent=r.hora;

imagenHora.src=r.img;

fraseHora.textContent=r.frase;

horaTexto.style.opacity="1";

imagenHora.style.opacity="1";

fraseHora.style.opacity="1";

},600);

}


//==============================
// OCULTAR TIMELINE
//==============================

function ocultarTimeline(){

timeline.style.opacity="0";

timeline.style.transform="translateY(-40px)";

setTimeout(()=>{

timeline.style.display="none";

mostrarNota();

},900);

}


//==============================
// MOSTRAR NOTA
//==============================

function mostrarNota(){

nota.style.display="flex";

nota.style.opacity="0";

setTimeout(()=>{

nota.style.opacity="1";

escribirNota();

},150);

}


//==============================
// MAQUINA DE ESCRIBIR
//==============================

const parrafo=document.querySelector("#notaFinal p");

const textoOriginal=parrafo.innerHTML;

parrafo.innerHTML="";

function escribirNota(){

let i=0;

const maquina=setInterval(()=>{

parrafo.innerHTML=textoOriginal.substring(0,i);

i++;

if(i>textoOriginal.length){

clearInterval(maquina);

setTimeout(()=>{

mostrarFinal();

},4000);

}

},18);

}


//==============================
// FINAL
//==============================

function mostrarFinal(){

nota.style.opacity="0";

setTimeout(()=>{

nota.style.display="none";

final.style.display="flex";

final.style.opacity="0";

setTimeout(()=>{

final.style.opacity="1";

crearCorazones();

},100);

},900);

}


//==============================
// PARTÍCULAS
//==============================

const particles=document.getElementById("particles");

for(let i=0;i<45;i++){

const p=document.createElement("span");

p.className="particle";

p.style.left=Math.random()*100+"%";

p.style.animationDuration=(6+Math.random()*6)+"s";

p.style.animationDelay=Math.random()*5+"s";

particles.appendChild(p);

}


//==============================
// CORAZONES
//==============================

function crearCorazones(){

for(let i=0;i<35;i++){

const h=document.createElement("div");

h.innerHTML="🤍";

h.style.position="fixed";

h.style.left="50%";

h.style.top="50%";

h.style.fontSize=(18+Math.random()*18)+"px";

h.style.pointerEvents="none";

h.style.zIndex="9999";

document.body.appendChild(h);

const x=(Math.random()-0.5)*700;

const y=(Math.random()-0.5)*500;

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

duration:2200,

easing:"ease-out"

});

setTimeout(()=>{

h.remove();

},2200);

}

}


//==============================
// EMPEZAR ARRIBA
//==============================

window.onload=()=>{

window.scrollTo(0,0);

};