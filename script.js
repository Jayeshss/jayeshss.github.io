/*=========================================
CUSTOM CURSOR
=========================================*/

const cursor = document.getElementById("cursor");

let mouseX = 0;
let mouseY = 0;

let posX = 0;
let posY = 0;

document.addEventListener("mousemove", (e) => {

    mouseX = e.clientX;
    mouseY = e.clientY;

});

function animateCursor(){

    posX += (mouseX - posX) * 0.18;
    posY += (mouseY - posY) * 0.18;

    cursor.style.left = posX + "px";
    cursor.style.top = posY + "px";

    requestAnimationFrame(animateCursor);

}

animateCursor();

/*=========================================
CURSOR SCALE
=========================================*/

const hoverItems = document.querySelectorAll(

"a,button,.project-card,.service-card,.skill-card"

);

hoverItems.forEach(item=>{

item.addEventListener("mouseenter",()=>{

cursor.style.transform="translate(-50%,-50%) scale(1.6) rotate(-20deg)";

});

item.addEventListener("mouseleave",()=>{

cursor.style.transform="translate(-50%,-50%) scale(1) rotate(0deg)";

});

});

/*=========================================
PRELOADER
=========================================*/

window.addEventListener("load",()=>{

gsap.to("#preloader",{

opacity:0,

duration:1,

delay:1,

onComplete(){

document.getElementById("preloader").style.display="none";

}

});

});

/*=========================================
NAVBAR
=========================================*/

window.addEventListener("scroll",()=>{

const header=document.querySelector("header");

if(window.scrollY>80){

header.style.background="rgba(0,0,0,.75)";
header.style.backdropFilter="blur(20px)";

}else{

header.style.background="rgba(0,0,0,.25)";

}

});

/*=========================================
BACK TO TOP
=========================================*/

const topBtn=document.getElementById("topBtn");

window.addEventListener("scroll",()=>{

if(window.scrollY>500){

topBtn.style.display="block";

}else{

topBtn.style.display="none";

}

});

topBtn.addEventListener("click",()=>{

window.scrollTo({

top:0,

behavior:"smooth"

});

});

/*=========================================
GSAP HERO
=========================================*/

gsap.from(".hero-content h4",{

y:40,

opacity:0,

duration:1

});

gsap.from(".hero-content h1",{

y:80,

opacity:0,

duration:1,

delay:.3

});

gsap.from(".hero-content h2",{

y:80,

opacity:0,

duration:1,

delay:.6

});

gsap.from(".hero-content p",{

y:60,

opacity:0,

duration:1,

delay:.9

});

gsap.from(".hero-buttons",{

y:60,

opacity:0,

duration:1,

delay:1.2

});

/*=========================================
SCROLL REVEAL
=========================================*/

const reveals=document.querySelectorAll(

".section-title,.about-wrapper,.skills-grid,.timeline,.project-grid,.services-grid,.contact-wrapper"

);

const observer=new IntersectionObserver(entries=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

entry.target.classList.add("show");

}

});

});

reveals.forEach(el=>{

el.classList.add("fade-up");

observer.observe(el);

});
/*=========================================
MAGNETIC BUTTON EFFECT
=========================================*/

const magneticButtons = document.querySelectorAll(
".primary-btn,.secondary-btn,.hire-btn"
);

magneticButtons.forEach(button=>{

button.addEventListener("mousemove",(e)=>{

const rect=button.getBoundingClientRect();

const x=e.clientX-rect.left-rect.width/2;

const y=e.clientY-rect.top-rect.height/2;

gsap.to(button,{

x:x*0.25,

y:y*0.25,

duration:.3

});

});

button.addEventListener("mouseleave",()=>{

gsap.to(button,{

x:0,

y:0,

duration:.5,

ease:"elastic.out(1,0.4)"

});

});

});

/*=========================================
MOUSE PARALLAX
=========================================*/

const hero=document.querySelector("#home");
const heroContent=document.querySelector(".hero-content");

hero.addEventListener("mousemove",(e)=>{

const x=(window.innerWidth/2-e.clientX)/35;
const y=(window.innerHeight/2-e.clientY)/35;

gsap.to(heroContent,{

x:x,
y:y,

duration:1.2,

ease:"power3.out"

});

});

hero.addEventListener("mouseleave",()=>{

gsap.to(heroContent,{

x:0,
y:0,

duration:1

});

});

/*=========================================
ACTIVE NAVIGATION
=========================================*/

const sections=document.querySelectorAll("section");
const navLinks=document.querySelectorAll(".nav-links a");

window.addEventListener("scroll",()=>{

let current="";

sections.forEach(section=>{

const sectionTop=section.offsetTop-120;

if(scrollY>=sectionTop){

current=section.getAttribute("id");

}

});

navLinks.forEach(link=>{

link.classList.remove("active");

if(link.getAttribute("href")==="#"+current){

link.classList.add("active");

}

});

});

/*=========================================
PROJECT CARD HOVER
=========================================*/

document.querySelectorAll(".project-card").forEach(card=>{

card.addEventListener("mousemove",(e)=>{

const rect=card.getBoundingClientRect();

const x=e.clientX-rect.left;
const y=e.clientY-rect.top;

const rotateY=((x-rect.width/2)/20);
const rotateX=((rect.height/2-y)/20);

gsap.to(card,{

rotationY:rotateY,

rotationX:rotateX,

transformPerspective:1200,

transformOrigin:"center",

duration:.5

});

});

card.addEventListener("mouseleave",()=>{

gsap.to(card,{

rotationX:0,

rotationY:0,

duration:.6

});

});

});

/*=========================================
FLOATING ICONS
=========================================*/

gsap.to(".socials a",{

y:-12,

repeat:-1,

yoyo:true,

stagger:.2,

duration:1.8,

ease:"power1.inOut"

});

/*=========================================
TEXT GLOW
=========================================*/

gsap.to(".hero-content h1 span",{

textShadow:

"0 0 15px #FAB502,0 0 35px #FAB502",

repeat:-1,

yoyo:true,

duration:1.5

});

/*=========================================
SMOOTH SCROLL LINKS
=========================================*/

document.querySelectorAll('a[href^="#"]').forEach(anchor=>{

anchor.addEventListener("click",(e)=>{

e.preventDefault();

const target=document.querySelector(anchor.getAttribute("href"));

if(target){

target.scrollIntoView({

behavior:"smooth"

});

}

});

});

/*=========================================
RANDOM PARTICLE MOVEMENT
=========================================*/

gsap.to(".overlay",{

backgroundPosition:"200px 0",

repeat:-1,

duration:18,

ease:"none"

});

/*=========================================
CONSOLE SIGNATURE
=========================================*/

console.log("%cMR.JD Portfolio","color:#FAB502;font-size:24px;font-weight:bold;");
console.log("%cDesigned by Jayesh SS","color:white;font-size:14px;");
/*=========================================
TEXT TYPING EFFECT
=========================================*/

const roles = [

"Brand Visualizer",

"3D Artist",

"Motion Designer",

"AI Creative Designer"

];

let roleIndex = 0;

let charIndex = 0;

const roleElement = document.querySelector(".hero-content h2");

function typeRole(){

if(!roleElement) return;

if(charIndex < roles[roleIndex].length){

roleElement.innerHTML = roles[roleIndex].substring(0,charIndex+1);

charIndex++;

setTimeout(typeRole,90);

}else{

setTimeout(deleteRole,1800);

}

}

function deleteRole(){

if(charIndex>0){

roleElement.innerHTML=roles[roleIndex].substring(0,charIndex-1);

charIndex--;

setTimeout(deleteRole,40);

}else{

roleIndex++;

if(roleIndex>=roles.length){

roleIndex=0;

}

setTimeout(typeRole,250);

}

}

typeRole();


/*=========================================
LOGO ROTATION
=========================================*/

const logo=document.querySelector(".logo img");

if(logo){

logo.addEventListener("mouseenter",()=>{

gsap.to(logo,{

rotation:360,

duration:1

});

});

}


/*=========================================
IMAGE PARALLAX
=========================================*/

document.querySelectorAll(".project-card img").forEach(img=>{

img.addEventListener("mousemove",(e)=>{

const rect=img.getBoundingClientRect();

const x=(e.clientX-rect.left)/rect.width;

const y=(e.clientY-rect.top)/rect.height;

gsap.to(img,{

x:(x-.5)*18,

y:(y-.5)*18,

scale:1.08,

duration:.4

});

});

img.addEventListener("mouseleave",()=>{

gsap.to(img,{

x:0,

y:0,

scale:1,

duration:.5

});

});

});


/*=========================================
SCROLL PROGRESS BAR
=========================================*/

const progress=document.createElement("div");

progress.id="progressBar";

document.body.appendChild(progress);

window.addEventListener("scroll",()=>{

const total=document.documentElement.scrollHeight-window.innerHeight;

const progressValue=(window.scrollY/total)*100;

progress.style.width=progressValue+"%";

});


/*=========================================
RANDOM GOLD GLOW
=========================================*/

setInterval(()=>{

document.querySelectorAll(".service-card,.skill-card").forEach(card=>{

card.style.boxShadow="0 0 20px rgba(250,181,2,.15)";

setTimeout(()=>{

card.style.boxShadow="none";

},500);

});

},3500);


/*=========================================
PAGE LOADED
=========================================*/

console.log("Portfolio Loaded Successfully");
/*=========================================
ADVANCED HERO PARALLAX
=========================================*/

const heroSection = document.querySelector("#home");

heroSection.addEventListener("mousemove", (e) => {

    const x = (window.innerWidth / 2 - e.clientX) / 40;
    const y = (window.innerHeight / 2 - e.clientY) / 40;

    gsap.to(".bg-video", {
        x: x,
        y: y,
        duration: 2,
        ease: "power3.out"
    });

    gsap.to(".overlay", {
        x: x * .4,
        y: y * .4,
        duration: 2
    });

});


/*=========================================
GLOW FOLLOW MOUSE
=========================================*/

const glow = document.createElement("div");

glow.classList.add("mouse-glow");

document.body.appendChild(glow);

document.addEventListener("mousemove", (e) => {

    gsap.to(glow, {

        x: e.clientX - 150,
        y: e.clientY - 150,

        duration: .4,

        ease: "power3.out"

    });

});


/*=========================================
BUTTON RIPPLE
=========================================*/

document.querySelectorAll(".primary-btn,.secondary-btn,.hire-btn").forEach(btn => {

    btn.addEventListener("click", function(e){

        const circle = document.createElement("span");

        circle.className = "ripple";

        const rect = this.getBoundingClientRect();

        circle.style.left = (e.clientX - rect.left) + "px";
        circle.style.top = (e.clientY - rect.top) + "px";

        this.appendChild(circle);

        setTimeout(() => {

            circle.remove();

        },700);

    });

});


/*=========================================
COUNTER ANIMATION
=========================================*/

const counters=document.querySelectorAll(".stat h3");

const counterObserver=new IntersectionObserver(entries=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

const counter=entry.target;

const target=parseInt(counter.innerText);

let value=0;

const update=()=>{

value+=Math.ceil(target/60);

if(value>=target){

counter.innerText=target+"+";

}else{

counter.innerText=value+"+";

requestAnimationFrame(update);

}

};

update();

}

});

});

counters.forEach(counter=>{

counterObserver.observe(counter);

});


/*=========================================
AUTO HIDE CURSOR
=========================================*/

let timer;

document.addEventListener("mousemove",()=>{

cursor.style.opacity="1";

clearTimeout(timer);

timer=setTimeout(()=>{

cursor.style.opacity=".2";

},2500);

});


/*=========================================
PROJECT IMAGE ZOOM
=========================================*/

document.querySelectorAll(".project-card").forEach(card=>{

card.addEventListener("mouseenter",()=>{

gsap.to(card.querySelector("img"),{

scale:1.1,

duration:.8

});

});

card.addEventListener("mouseleave",()=>{

gsap.to(card.querySelector("img"),{

scale:1,

duration:.8

});

});

});


/*=========================================
END
=========================================*/

console.log("Premium Effects Loaded");
/*=========================================
AAA PREMIUM EFFECTS
=========================================*/

/* Mouse Spotlight */

const spotlight = document.createElement("div");

spotlight.className = "spotlight";

document.body.appendChild(spotlight);

document.addEventListener("mousemove",(e)=>{

gsap.to(spotlight,{

x:e.clientX-250,

y:e.clientY-250,

duration:.4,

ease:"power3.out"

});

});


/*=========================================
CARD FLOATING
=========================================*/

gsap.utils.toArray(".skill-card,.service-card,.project-card").forEach(card=>{

gsap.to(card,{

y:-12,

repeat:-1,

yoyo:true,

duration:2+Math.random(),

ease:"sine.inOut"

});

});


/*=========================================
HERO TITLE FLOAT
=========================================*/

gsap.to(".hero-content h1",{

y:-12,

repeat:-1,

yoyo:true,

duration:3,

ease:"power1.inOut"

});



/*=========================================
BACKGROUND VIDEO ZOOM
=========================================*/

gsap.to(".bg-video",{

scale:1.08,

duration:18,

repeat:-1,

yoyo:true,

ease:"none"

});


/*=========================================
SCROLL ROTATION
=========================================*/

window.addEventListener("scroll",()=>{

const scroll=window.scrollY;

document.querySelectorAll(".project-card").forEach((card,index)=>{

gsap.to(card,{

rotation:(scroll/120)+(index*2),

duration:.5

});

});

});


/*=========================================
CURSOR SCRATCH EFFECT
=========================================*/

document.addEventListener("click",(e)=>{

for(let i=0;i<6;i++){

const scratch=document.createElement("div");

scratch.className="scratch";

scratch.style.left=e.clientX+"px";

scratch.style.top=e.clientY+"px";

document.body.appendChild(scratch);

gsap.to(scratch,{

x:(Math.random()*120)-60,

y:(Math.random()*120)-60,

opacity:0,

scale:0,

duration:.8,

onComplete(){

scratch.remove();

}

});

}

});


/*=========================================
NAVBAR FADE
=========================================*/

gsap.from("header",{

y:-100,

opacity:0,

duration:1,

ease:"power4.out"

});


/*=========================================
SECTION TITLES
=========================================*/

gsap.utils.toArray(".section-title h2").forEach(title=>{

gsap.from(title,{

scrollTrigger:title,

y:80,

opacity:0,

duration:1

});

});


/*=========================================
FOOTER
=========================================*/

gsap.from("footer",{

scrollTrigger:"footer",

opacity:0,

y:120,

duration:1

});


/*=========================================
CONSOLE
=========================================*/

console.log("%cMR.JD Premium Portfolio Loaded 🚀","font-size:22px;color:#FAB502;font-weight:bold;");
