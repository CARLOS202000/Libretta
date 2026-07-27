//=========================================
// PARTICULAS DE FONDO
//=========================================

const particles = document.getElementById("particles");

if (particles) {

    for (let i = 0; i < 40; i++) {

        const p = document.createElement("span");

        p.className = "particle";

        p.style.left = Math.random() * 100 + "%";

        p.style.animationDuration = (5 + Math.random() * 6) + "s";

        p.style.animationDelay = Math.random() * 5 + "s";

        p.style.opacity = Math.random();

        particles.appendChild(p);

    }

}

//=========================================
// ANIMACION DE LA LINEA DE TIEMPO
//=========================================

const items = document.querySelectorAll(".timeline-item");

const observer = new IntersectionObserver((entries) => {

    entries.forEach(entry => {

        if (entry.isIntersecting) {

            entry.target.classList.add("show");

        }

    });

}, {

    threshold: 0.20

});

items.forEach(item => {

    observer.observe(item);

});

//=========================================
// EFECTO EN LAS IMAGENES
//=========================================

const imagenes = document.querySelectorAll(".timeline-content img");

imagenes.forEach(img => {

    img.addEventListener("click", () => {

        img.classList.add("zoom");

        setTimeout(() => {

            img.classList.remove("zoom");

        }, 300);

    });

});

//=========================================
// MENSAJE FINAL
//=========================================

const finalSection = document.querySelector(".final-section");

if (finalSection) {

    const finalObserver = new IntersectionObserver((entries) => {

        entries.forEach(entry => {

            if (entry.isIntersecting) {

                document.querySelector(".timeline-final").classList.add("visible");

                crearCorazones();

            }

        });

    }, {

        threshold: 0.40

    });

    finalObserver.observe(finalSection);

}

//=========================================
// CORAZONES
//=========================================

function crearCorazones() {

    for (let i = 0; i < 35; i++) {

        const heart = document.createElement("div");

        heart.innerHTML = "🤍";

        heart.style.position = "fixed";

        heart.style.left = "50%";

        heart.style.top = "50%";

        heart.style.pointerEvents = "none";

        heart.style.fontSize = (16 + Math.random() * 20) + "px";

        heart.style.zIndex = "99999";

        document.body.appendChild(heart);

        const x = (Math.random() - 0.5) * 700;

        const y = (Math.random() - 0.5) * 500;

        const rot = Math.random() * 720;

        heart.animate([

            {

                transform: "translate(0,0) rotate(0deg) scale(.2)",

                opacity: 1

            },

            {

                transform: `translate(${x}px,${y}px) rotate(${rot}deg) scale(1.5)`,

                opacity: 0

            }

        ], {

            duration: 2200,

            easing: "ease-out"

        });

        setTimeout(() => {

            heart.remove();

        }, 2200);

    }

}

//=========================================
// SCROLL AL INICIO
//=========================================

window.addEventListener("load", () => {

    window.scrollTo(0, 0);

});