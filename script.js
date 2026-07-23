const botones=document.querySelectorAll(".btn");

botones.forEach(boton=>{

boton.addEventListener("mouseenter",()=>{

boton.style.transform="scale(1.03)";

});

boton.addEventListener("mouseleave",()=>{

boton.style.transform="scale(1)";

});

});