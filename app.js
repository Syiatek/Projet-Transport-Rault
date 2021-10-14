const btnMenu = document.querySelector(".btn-rond-menu");
const navGauche = document.querySelector(".nav-gauche");
const navItem = document.querySelectorAll(".nav-menu-item");
const ligne = document.querySelector(".cont-ligne");
const main = document.querySelector(".itemMain");

M.AutoInit();

$(document).ready(function () {
    $('#carousel-auto').carousel();
    setInterval(function () {
        $('#carousel-auto').carousel('next');
    }, 3500);

});


// menu cacher

btnMenu.addEventListener("click", () => {

    ligne.classList.toggle("active")
    navGauche.classList.toggle("menu-visible")
    
})
if(window.matchMedia("(max-width: 1300px)")) {

    navItem.forEach(item => {
        item.addEventListener("click", () => {
            navGauche.classList.toggle("menu-visible")
            ligne.classList.toggle("active");
        })
    })
}

    btnMenu.onclick =function(){
        if(navGauche.style.display=="block"){
            navGauche.style.display="none";
            main.style.marginLeft= "-0.5%";
        }else{
            navGauche.style.display="block";
            main.style.marginLeft= "5%";
        }
    };


// Animation écriture

const txtAnim = document.querySelector(".txt-animation");
let typewriter = new Typewriter(txtAnim, {
    loop: false,
    deleteSpeed: 20

})
typewriter
    .pauseFor(1800)
    .changeDelay(20)
    .typeString("<strong>Transports </strong>            ")
    .pauseFor(1000)
    .deleteChars(11)
    .typeString("<span style='color: #00fff9;'>Frigorifiques</span>")
    .pauseFor(1000)
    .deleteChars(13)
    .typeString("<span style='color: #00fff9; '>Industriels</span> ")
    .pauseFor(1000)
    .typeString("<strong>, logistique, stockages</strong>")
    .start()

// Animation Contact
const inputFields = document.querySelectorAll("input");
for (let i = 0; i < inputFields.length; i++) {
    let field = inputFields[i];
    field.addEventListener("input", (e) => {
        if (e.target.value !== "") {
            e.target.parentNode.classList.add("animation")
        } else if (e.target.value == "") {
            e.target.parentNode.classList.remove("animation")
        }
    })
}
// Anim GSAP + ScrollMagic

const navbar = document.querySelector(".nav-gauche");
const titre = document.querySelector("h1");
const cbl =document.querySelector(".logoCbl");

const btnRondAccueil = document.querySelector(".btn-rond");



const TL1 = gsap.timeline({ paused: true});
TL1
    .to(navbar, { left:"0px", ease: Power3.easeOut,
    duration: 1
    })
    .from(titre, {
        y: -50,
        opacity: 0,
        ease: Power3.easeOut,
        duration: 1
    })

    .from(btnRondAccueil, {
        y: -50,
        opacity: 0,
        ease: Power3.easeOut,
        duration: 1
    })
    .from(cbl, {
        y: -50,
        opacity: 0,
        ease: Power3.easeOut,
        duration: 1
    })
window.addEventListener("load", () => {
    TL1.play();
})
// Animation ScollMagic titre et texte

const presentationContainer = document.querySelector(".presentation");
const titrePres = document.querySelector(".titre-pres");
const presGauche = document.querySelector(".container-pres");

const tlpres = new TimelineMax();

tlpres
.from(titrePres, {y: -200, opacity: 0,duration: 2})
.from(presGauche, {y:-20, opacity:0, duration: 2},"-=0,5")

const controller = new ScrollMagic.Controller();

const scene = new ScrollMagic.Scene({
    triggerElement: presentationContainer,
    triggerHook: 0.8,
    reverse: false
})

.setTween(tlpres)

.addTo(controller)


const transport = document.querySelector(".transport")
const titre2port = document.querySelector(".titre2port")
const listePres = document.querySelector(".titre-port");
const itemPort = document.querySelectorAll(".transp")

const tlreport = new TimelineMax();

tlreport
    .from(listePres, {y:-200, opacity:0, duration: 2},"-=2")
    .from(titre2port, {y:-200, opacity:0, duration: 2},"-=1.5")
    .from(itemPort, {y: -50, opacity: 0, duration: 2})


const scene1 = new ScrollMagic.Scene({
        triggerElement: transport,
        triggerHook: 0.8,
        reverse: false
    })

    .setTween(tlreport)
   
    .addTo(controller)
// Anim transport



const itemPort1 = document.querySelectorAll(".transp1")

const tlPort = new TimelineMax();

tlPort
    .staggerFrom(itemPort1, 1, {
        opacity: 0
    }, 0.6, "-=0.5")

const scene2 = new ScrollMagic.Scene({
        triggerElement: itemPort,
        triggerHook: 0.2,
        reverse: false
    })
    .setTween(tlPort)
    
    .addTo(controller)

// transp2

const itemPort2 = document.querySelectorAll(".transp2")

const tlPort2 = new TimelineMax();

tlPort2

    .staggerFrom(itemPort2, 1, {
        opacity: 0
    }, 0.2, "-=0.5")

const scene3 = new ScrollMagic.Scene({
        triggerElement: itemPort1,
        triggerHook: 0.2,
        reverse: false
    })
    .setTween(tlPort2)

    .addTo(controller)

// transp3

const itemPort3 = document.querySelectorAll(".transp3")
const tlPort3 = new TimelineMax();

tlPort3

.staggerFrom(itemPort3, 1, {
    opacity: 0
}, 0.2, "-=0.5")

const scene4 = new ScrollMagic.Scene({
    triggerElement: itemPort2,
    reverse: false
})
.setTween(tlPort3)

.addTo(controller)

// stockage


const exp = document.querySelector("titre-stockage-exp")
const itemBloc1 = document.querySelectorAll(".contenu-bloc")

const tlBloc1 = new TimelineMax();

tlBloc1

    .staggerFrom(itemBloc1, 1, {
        opacity: 0
    }, 0.2, "-=0.5")

const scene5 = new ScrollMagic.Scene({
        triggerElement: itemPort3,
        triggerHook: 0.6,
        reverse: false
    })
    .setTween(tlBloc1)

    .addTo(controller)
var map;


function initMap() {
    map = new google.maps.Map(document.getElementById('map'), {
        center: {
            lat: 48.04047,
            lng: -2.95233
        },
        zoom: 1
    });
}