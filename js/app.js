gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(ScrollToPlugin)


let Hsections = gsap.utils.toArray(".Hpanel");
let VsectionsIzq = gsap.utils.toArray(".VpanelIzquierda");
let HScrollContainer = gsap.utils.toArray(".HScrollContainer");
let VpanelsDerecha = gsap.utils.toArray(".VpanelDerecha");
let Vpanels  = gsap.utils.toArray("seccion1 .Vpanel");
let VScrollContainer = gsap.utils.toArray(".VScrollContainer");


const animIntro = gsap.timeline()
.fromTo(".logoContainer",{y:150},{opacity:1, y:-100})
.fromTo(".portada h1",{opacity:0},{opacity:1, y:-80} )

const animIntro2 = gsap.timeline()
.from(".portada2 .imagen",{opacity:0, x:-100} )
.from(".portada2 p",{opacity:0, x:100})
.from(".portada2 .linksDescargaContainer",{opacity:0, y:150})

ScrollTrigger.create({
  trigger:".portada1",
  start:"top top",
  end:"bottom 10%",
  //end:"+=" + window.innerHeight,
  animation:animIntro,
  pin:true,
  scrub:1
})

ScrollTrigger.create({
  trigger:".portada2",
  start:"top top",
  end:"bottom 20%",
  animation:animIntro2,
  pin:true,
  scrub:1
})

HScrollContainer.forEach((HScrollContainerItem, index) => {
  gsap.to(HScrollContainerItem, {
    xPercent: -100,
    ease: "none",
    duration:2,
    scrollTrigger: {
      trigger: HScrollContainerItem,
      start: "top top",
      end: "bottom top",
      pin:true,
      scrub: 1
    }
  })
});

VScrollContainer.forEach((VScrollContainerItem, index) => {
  
  let sidebar=document.querySelectorAll(".VpanelIzquierda");
  
  /*const tween = gsap.timeline()
    .from(sidebar,{opacity:0})*/

  ScrollTrigger.create({
    trigger:VScrollContainerItem,
    start:"top top",
    end:"bottom bottom",
    //animation:tween,
    scrub:true,
    pin: sidebar[index]
  })
});

const grafica1 = document.getElementById("cartera-negocio");
const graficaContainer = document.querySelector(".cartera-negocio-container");
const graficaFondo = document.querySelector("#cartera-negocio #fondo");
const graficaAno = document.querySelector("#cartera-negocio #año");
const dataVida = document.getElementById("vida");
const dataVidaTxt = document.getElementById("vida-txt");
const dataSalud = document.getElementById("salud");
const dataSaludTxt = document.getElementById("salud-txt");
const dataAutos = document.getElementById("autos");
const dataAutosTxt = document.getElementById("autos-txt");
const dataMultirriesgos = document.getElementById("multirriesgos");
const dataMultirriesgosTxt = document.getElementById("multirriesgos-txt");
const dataDiversos = document.getElementById("diversos");
const dataDiversosTxt = document.getElementById("diversos-txt");


const graph1Ani = gsap.timeline({paused:true})
  .from ([graficaFondo, graficaAno], {scale:0, ease:Back, transformOrigin:"50% 50%", stagger:0.1})
  .from ([dataVida, dataVidaTxt], {opacity:0, ease:Back, transformOrigin:"50% 50%", stagger:0.1})
  .from ([dataSalud, dataSaludTxt], {opacity:0, ease:Back, transformOrigin:"50% 50%", stagger:0.1})
  .from ([dataAutos, dataAutosTxt], {opacity:0, ease:Back, transformOrigin:"50% 50%", stagger:0.1})
  .from ([dataMultirriesgos, dataMultirriesgosTxt], {opacity:0, ease:Back, transformOrigin:"50% 50%", stagger:0.1})
  .from ([dataDiversos, dataDiversosTxt], {opacity:0, ease:Back, transformOrigin:"50% 50%", stagger:0.1})

ScrollTrigger.create({
  trigger:".cartera-negocio-container",
  animation:graph1Ani,
  pin:true,
  scrub:1,
  start:"top top",
  end:"bottom center"
})

const Section1Cards = gsap.utils.toArray(".seccion1 .card");

const Section1CardsAnim = 
  gsap.timeline({paused:true})
  .from(".seccion1 .card", {scale:0.8,opacity:0.8, ease:"back", transformOrigin:"50% 50%", stagger:0.3})


  ScrollTrigger.create({
    trigger:".seccion1 .cardsContainer",
    animation:Section1CardsAnim,
    scrub:1,
    start:"top 30%",
    end:"bottom 80%"
  })

  document.querySelectorAll(".nav .btn1").forEach((btn, index) => {
    btn.addEventListener("click", () => {
      gsap.to(window, {duration: 1, scrollTo:{y:"#seccion1"}});
    });
  });

  document.querySelectorAll(".nav .btn2").forEach((btn, index) => {
    btn.addEventListener("click", () => {
      gsap.to(window, {duration: 1, scrollTo:{y:"#seccion2"}});
    });
  });

  document.querySelectorAll(".nav .btn3").forEach((btn, index) => {
    btn.addEventListener("click", () => {
      gsap.to(window, {duration: 1, scrollTo:{y:"#seccion3"}});
    });
  });

  document.querySelectorAll(".nav .btn4").forEach((btn, index) => {
    btn.addEventListener("click", () => {
      gsap.to(window, {duration: 1, scrollTo:{y:"#seccion4"}});
    });
  });


 




