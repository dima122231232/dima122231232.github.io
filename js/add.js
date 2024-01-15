
var vh = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;
var vw = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
var indexJs = vh / 100 + vw / 100;
document.body.style.overflow = 'hidden';
document.addEventListener('mousemove', e => {
    moveX = (e.clientX - window.innerWidth / 2) * 0.07;
    moveY = (e.clientY - window.innerHeight / 2) * 0.07;
    document.querySelector('.article__cardboard-nlo').style.marginLeft=moveX+'px';
    document.querySelector('.article__cardboard-nlo').style.marginTop=moveY+'px';
});


document.addEventListener("DOMContentLoaded", function() {
gsap.registerPlugin(ScrollTrigger, ScrollSmoother)
var balloonBlueOrig = document.querySelector('.header_img___balloon-blue'), balloonBlue = document.querySelector('.header_img___balloon-blue-clone'),balloonPurpleOrig = document.querySelector('.header_img___balloon-purple'),
balloonPurple = document.querySelector('.header_img___balloon-purple-clone'),elements = ['.header_text__h', '.header_text__h2', '.header_text__polosa,.header_text__p,.header_text__polosa-vertical'],delay = 0;
const headerShkala = document.querySelector('.header_shkala');const textElement = document.querySelector('.header_text__p');const textContent = textElement.textContent.trim();textElement.innerHTML = '';
gsap.fromTo('.header__osnova',{ background: "linear-gradient(180deg, #00284D 0%, #004D78 50%, #0072B1 100%)"},{background: " linear-gradient(180deg, #000 0%, #000 50%, #000 100%)",
    scrollTrigger:{trigger:'.header__osnova',start:2*vh,end:4.7*vh,scrub:true}})
gsap.fromTo('.header__osnova',{ background: "linear-gradient(180deg, rgba(1, 127, 243, 0.90) 0%, rgba(21, 163, 243, 0.78) 41.67%, #45B5F4 100%)",boxShadow:"inset 0 0 250px rgba(1, 72, 95,0.8)"},{
    background: " linear-gradient(180deg, #00284D 0%, #004D78 50%, #0072B1 100%)",boxShadow:"inset 0 0 250px rgba(0, 0, 0,0)",scrollTrigger:{trigger:'.header__osnova',start:1*vh,end:2*vh,scrub:true}})
gsap.fromTo('.header__osnova',{ background: "linear-gradient(180deg, rgba(12, 194, 255, 0.90) 0%, rgba(125, 223, 255, 0.78) 41.67%, #A8E9FF 100%, #94DFF9 100%)"},{
    background: "linear-gradient(180deg, rgba(1, 127, 243, 0.90) 0%, rgba(21, 163, 243, 0.78) 41.67%, #45B5F4 100%)",scrollTrigger:{trigger:'.header__osnova',start: 'top',end:1*vh,scrub:true}})
gsap.fromTo('.header_img___balloon-blue-clone',{x:0,y: 0,rotate: 0,opacity:1},{x: -600,y: -300,rotate: -60,opacity:0,scrollTrigger:{trigger:'.header_img___balloon-blue-clone',start: 'top',end:2.8*vh,scrub:true}})
gsap.fromTo('.header_img___balloon-purple-clone',{x:0,y: 0,rotate: 0,opacity:0.6},{x: 600,y: -300,rotate: 50,    opacity:0, scrollTrigger:{   trigger:'.header_img___balloon-blue-clone',start: '0',end:2.8*vh,scrub:true}})
gsap.fromTo('.header__osnova_items',{y: 0},{y: 1*vh,scrollTrigger:{trigger:'.header_img___balloon-blue-clone',start: '0',end:2.8*vh,scrub:true}})
gsap.fromTo('.header_text__h',{y: 0},{y: -.05*vh,scrollTrigger:{trigger:'.header_img___balloon-blue-clone',start: '0',end:2.8*vh,scrub:true}})

setTimeout(function () {  
elements.forEach((element) => {
gsap.fromTo(element, { y: 500,opacity:0}, { y: 0,opacity:1, duration: 1.6, ease: "cubic-bezier(0.000, 1.000, 0.830, 1.005)", delay: delay });delay += 0.085;});gsap.fromTo('.footer__div', { x:-800,opacity:0},
{opacity:1,x:0,duration: 2.2, delay: 0, ease: "power2.out", });
gsap.fromTo('.header_blur__sun', {opacity:0}, {opacity:1,duration: 1.8,delay: 2.2,ease: "power2.out", });
gsap.fromTo('.header_text__polosa',{ width: 'calc(var(--index) * 0)' }, {width: 'calc(var(--index) * 20)',duration: 1.8,delay: 2.2,ease: 'power2.out',});
gsap.fromTo('.header_shkala',{ width: "0vw" }, {width: "101vw",duration: 1.8,delay: 2.2,ease: 'power2.out',});
gsap.fromTo('.header_text__button',{ opacity:0}, {duration: 1.8,delay: 2.2,opacity:1});
gsap.fromTo('.header_text__polosa-vertical',{ height: 'calc(var(--index) * 0)' }, {height: 'calc(var(--index) * 1.7)',duration: 1.8,delay: 2.2,ease: 'power2.out',});},4000)

setTimeout(function () {gsap.to('.math, .start__222 ,.start__white',{opacity:0,duration:1});setTimeout(function () {
balloonBlueOrig.style.display='none';balloonBlue.style.display='block';balloonPurpleOrig.style.display='none';balloonPurple.style.display='block';
document.querySelector('.header_img__sun').style.display ='none';document.querySelector('.header_img__sun-clone').style.display ='block';
gsap.fromTo('.header_text__polosa',{ width: indexJs*20 },{
width: 0,scrollTrigger:{trigger:'.header_img___balloon-blue-clone',start: '0',end:.85*vh,scrub:true}})
gsap.fromTo('.header_text__polosa-vertical',{ height: indexJs*1.7 },{height: 0,scrollTrigger:{trigger:'.header_img___balloon-blue-clone',start: '0',end:.45*vh,scrub:true}})
gsap.fromTo('.header_shkala', { width: "101vw" }, {width: "0vw",duration: 1.8,delay: 2.2,ease: 'power2.out',scrollTrigger: {trigger: '.header_img___balloon-blue-clone',start: '0',end: 4 * vh,scrub: true,
onUpdate: function() {if (parseFloat(headerShkala.style.width) == 0) {article();}}}});
gsap.fromTo('.header_img__sun-clone',{y: 0,x:0,opacity:1},{y:-450,x:300,opacity:0,scrollTrigger:{trigger:'.header_img___balloon-blue-clone',start: '0',end:2.8*vh,scrub:true}})
gsap.fromTo('.header_blur__sun',{ opacity:1 },{opacity:0,scrollTrigger:{trigger:'.header_img___balloon-blue-clone',start: '0',end:1.8*vh,scrub:true}});document.body.style.overflow = 'auto';},5000)}, 4000);
        
//COULS---------------------------------------------------------------------------
gsap.fromTo('.clouds_right0',{ y:-50,x:0},{y:-50,x:indexJs*55,scrollTrigger:{trigger:'.header_img___balloon-blue-clone',start: 2.25*vh,end:4.25*vh,scrub:true}})
gsap.fromTo('.clouds_right1',{ y:0,x:0},{y:0,x:indexJs*44,scrollTrigger:{trigger:'.header_img___balloon-blue-clone',start: 2.25*vh,end:4.25*vh,scrub:true}})
gsap.fromTo('.clouds_right2',{ y:-25,x:0},{y:50,x:indexJs*42,scrollTrigger:{trigger:'.header_img___balloon-blue-clone',start: 2.25*vh,end:4.25*vh,scrub:true}})
gsap.fromTo('.clouds_right4',{ y:-50,x:0},{y:60,x:indexJs*68,scrollTrigger:{trigger:'.header_img___balloon-blue-clone',start: 2.25*vh,end:4.25*vh,scrub:true}})
gsap.fromTo('.clouds_right5',{ y:-50,x:0},{y:-100,x:indexJs*32,scrollTrigger:{trigger:'.header_img___balloon-blue-clone',start: 2.25*vh,end:4.25*vh,scrub:true}})

gsap.fromTo('.clouds_left0',{ y:-50,x:0,rotate:"0deg"},{y:-150,x:-indexJs*62,rotate:"-10deg",scrollTrigger:{trigger:'.header_img___balloon-blue-clone',start: 2.25*vh,end:5*vh,scrub:true}})
gsap.fromTo('.clouds_left1',{ y:0,x:0},{y:0,x:-indexJs*68,scrollTrigger:{trigger:'.header_img___balloon-blue-clone',start: 2.25*vh,end:4.75*vh,scrub:true}})
gsap.fromTo('.clouds_left2',{ y:-50,x:0},{y:-100,x:-indexJs*52,scrollTrigger:{trigger:'.header_img___balloon-blue-clone',start: 2.25*vh,end:5*vh,scrub:true}})
gsap.fromTo('.clouds_left4',{ y:-50,x:0},{y:-50,x:-indexJs*62,scrollTrigger:{trigger:'.header_img___balloon-blue-clone',start: 2.25*vh,end:4.25*vh,scrub:true}})
gsap.fromTo('.clouds_left5',{ y:-50,x:0},{y:-50,x:-indexJs*62,scrollTrigger:{trigger:'.header_img___balloon-blue-clone',start: 2.25*vh,end:4.25*vh,scrub:true}})

gsap.fromTo('.clouds_left0',{y:600 },{y:-50,scrollTrigger:{trigger:'.header_img___balloon-blue-clone',start: 0,end:2*vh,scrub:true}})
gsap.fromTo('.clouds_left1',{ y:600},{y:0,scrollTrigger:{trigger:'.header_img___balloon-blue-clone',start: 0,end:1.75*vh,scrub:true}})
gsap.fromTo('.clouds_left2',{ y:600 },{y:-50,scrollTrigger:{trigger:'.header_img___balloon-blue-clone',start: 0,end:1.25*vh,scrub:true}})
gsap.fromTo('.clouds_left4',{ y:600 },{y:-50,scrollTrigger:{trigger:'.header_img___balloon-blue-clone',start: 0,end:1.5*vh,scrub:true}})
gsap.fromTo('.clouds_left5',{ y:600 },{y:-50,scrollTrigger:{trigger:'.header_img___balloon-blue-clone',start: 0,end:1.1*vh,scrub:true}})
        
gsap.fromTo('.clouds_right0',{ y:600},{y:-50,scrollTrigger:{trigger:'.header_img___balloon-blue-clone',start: 0,end:2.25*vh,scrub:true}})
gsap.fromTo('.clouds_right1',{ y:600},{y:0,scrollTrigger:{trigger:'.header_img___balloon-blue-clone',start: 0,end:1.75*vh,scrub:true}})
gsap.fromTo('.clouds_right2',{ y:600},{y:-25,scrollTrigger:{trigger:'.header_img___balloon-blue-clone',start: 0,end:1.5*vh,scrub:true}})
gsap.fromTo('.clouds_right4',{ y:600},{y:-50,scrollTrigger:{trigger:'.header_img___balloon-blue-clone',start: 0,end:1.3*vh,scrub:true}})
gsap.fromTo('.clouds_right5',{ y:600},{y:-50,scrollTrigger:{trigger:'.header_img___balloon-blue-clone',start: 0,end:1.2*vh,scrub:true}})
//COULS--END-----------------------------------------------------------------------

//METEORS------------------------------------------------------------------------------
gsap.fromTo('.header_img__meteor-white0',{ y:-indexJs*100,x:-indexJs*100},{y:indexJs*100,x:indexJs*100,scrollTrigger:{trigger:'.header_img___balloon-blue-clone',start: 2.5*vh,end:3.5*vh,scrub:true}})
gsap.fromTo('.header_img__meteor-white1',{ y:-indexJs*100,x:-indexJs*45},{y:indexJs*100,x:indexJs*45,scrollTrigger:{trigger:'.header_img___balloon-blue-clone',start: 2.8*vh,end:4.2*vh,scrub:true}})
gsap.fromTo('.header_img__meteor-white2',{ y:-indexJs*45,x:-indexJs*100},{y:indexJs*20,x:indexJs*100,scrollTrigger:{trigger:'.header_img___balloon-blue-clone',start: 3.6*vh,end:4.1*vh,scrub:true}})
gsap.fromTo('.header_img__meteor-yellow0',{ y:-indexJs*100,x:-indexJs*60},{y:indexJs*100,x:indexJs*60,scrollTrigger:{trigger:'.header_img___balloon-blue-clone',start: 2.8*vh,end:3.5*vh,scrub:true}})
gsap.fromTo('.header_img__meteor-yellow1',{ y:-indexJs*100,x:-indexJs*25},{y:indexJs*100,x:indexJs*25,scrollTrigger:{trigger:'.header_img___balloon-blue-clone',start: 3.4*vh,end:3.8*vh,scrub:true}})
//METEORS--END-------------------------------------------------------------------------
textContent.split('').forEach((letter, index) => {
const span = document.createElement('span');span.textContent = letter;textElement.appendChild(span);
gsap.fromTo(span, { opacity: 0 }, { opacity: 1, duration: 0.6, ease: 'power2.out', delay: 0.032 * index });});});

//ARTICLE------------------------------------------------------------------------------
function article() {
document.querySelector('.article__planets').style.display ='block';document.querySelector('.header__osnova').style.display ='none';document.body.style.height = '100vh';
setTimeout(function() {document.body.style.height = '400vh';},2500);
gsap.to('.article__beck-rg, .article__beck-lf',{opacity:.1,duration:1,});
gsap.fromTo('.article__planets_0', {y: 0,x:0}, {y: 0,x:indexJs/5,duration: 3,delay:.5,ease:'linerIn',yoyo: true,repeat: -1,});
gsap.fromTo('.article__thread-0', {rotate:.7}, {rotate:-.7,delay: .5,duration: 3,ease:'linerIn',yoyo: true,repeat: -1,});
gsap.fromTo('.article__planets_0-blur', {y: 0,x:0}, {y: 0,x:indexJs/5,duration: 3,delay:.5,ease:'linerIn',yoyo: true,repeat: -1,});
gsap.timeline().fromTo('.article__planets_0', {y: -1200,  ease: "power2.out"}, {y: 50,duration: .6, ease: "power2.out"}).to('.article__planets_0', {y: 0, duration: 0.3, ease: "power2.out"});
gsap.fromTo('.article__thread-0',{y:-1200},{y:0,duration: .6,ease: 'power2.out',});

gsap.fromTo('.article__planets_1', {y: 0,x:0}, {y: 0,x:indexJs/3,duration: 2.8,delay:.7,ease:'linerIn',yoyo: true,repeat: -1,});
gsap.fromTo('.article__thread-1', {rotate:1.7}, {rotate:0,delay: .7,duration: 2.8,ease:'linerIn',yoyo: true,repeat: -1,});
gsap.fromTo('.article__planets_1-blur', {y: 0,x:0}, {y: 0,x:indexJs/3,duration: 2.8,delay:.7,ease:'linerIn',yoyo: true,repeat: -1,});
gsap.timeline().fromTo('.article__planets_1', {y: -1200,  ease: "power2.out"}, {y: 20,duration: .7, ease: "power2.out"}).to('.article__planets_1', {y: 0, duration: 0.3, ease: "power2.out"});
gsap.timeline().fromTo('.article__thread-1',{y:-1200},{y:20, rotate:1.7,duration: .7,ease: 'power2.out',}).to('.article__thread-1', {y: 0, duration: 0.3, ease: "power2.out"});

gsap.fromTo('.article__planets_2', {y: 0,x:0}, {y: 0,x:-indexJs ,duration: 5,delay:.8,ease:'power2.inOut',yoyo: true,repeat: -1,});
gsap.fromTo('.article__thread-2', { rotate:-2.5}, { rotate:2.5,delay: .8,duration: 5,ease:'power2.inOut',yoyo: true,repeat: -1,});
gsap.fromTo('.article__planets_2-blur', {y: 0,x:0}, {y: 0,x:-indexJs ,duration: 5,delay:.8,ease:'power2.inOut',yoyo: true,repeat: -1,});
gsap.timeline().fromTo('.article__planets_2', {y: -1600,x:-50,  ease: "power2.out"}, {y: 80,x:0,duration: .6,delay:.1, ease: "power2.out"}).to('.article__planets_2', {y: 0, duration: 0.25, ease: "power2.out"});
gsap.timeline().fromTo('.article__thread-2',{y:-2000},{y:80,rotate:-2.5,delay:.1,duration: .6,ease: 'power2.out',}).to('.article__thread-2', {y: 0, duration: 0.25, ease: "power2.out"});
    
gsap.fromTo('.article__planets_3', {y: 0,x:0}, {y: 0,x:indexJs/2 ,duration: 2.3,delay:1.1,ease:'power2.inOut',yoyo: true,repeat: -1,});
gsap.fromTo('.article__thread-3', { rotate:1}, { rotate:-1,delay: 1.1,duration: 2.3,ease:'power2.inOut',yoyo: true,repeat: -1,});
gsap.timeline().fromTo('.article__planets_3', {y: -2600,x:30,  ease: "power2.out"}, {y: 5,x:0,duration: 1,delay:.1, ease: "power2.out"}).to('.article__planets_3', {y: 0, duration: 0.3, ease: "power2.out"});
gsap.timeline().fromTo('.article__thread-3',{y:-2700},{y:5,rotate:1,delay:.1,duration: 1,ease: 'power2.out',}).to('.article__thread-3',{y:-2700},{y:0,rotate:1,delay:.1,duration: 1,ease: 'power2.out',});

gsap.fromTo('.article__planets_4', {y: 0,x:0}, {y: 0,x:indexJs/3.2 ,duration: 3.5,delay:.5,ease:'power2.inOut',yoyo: true,repeat: -1,});
gsap.fromTo('.article__thread-4', { rotate:1}, { rotate:.2,delay: .5,duration: 3.5,ease:'power2.inOut',yoyo: true,repeat: -1,});
gsap.fromTo('.article__planets_4-blur', {y: 0,x:0}, {y: 0,x:indexJs/3.2 ,duration: 3.5,delay:.5,ease:'power2.inOut',yoyo: true,repeat: -1,});
gsap.timeline().fromTo('.article__planets_4', {y: -2600,x:50,  ease: "power2.out"}, {y: 40,x:0,duration: .7,delay:.3, ease: "power2.out"}).to('.article__planets_4', {y: 0, duration: 0.15, ease: "power2.out"});
gsap.timeline().fromTo('.article__thread-4',{y:-2700},{y:40,rotate:1,delay:.3,duration: .7,ease: 'power2.out',}).to('.article__thread-4', {y: 0, duration: 0.15, ease: "power2.out"});

gsap.fromTo('.article__planets_5', {y: 0,x:0}, {y: 0,x:-indexJs/6 ,duration: 2.6,delay:.7,ease:'power2.inOut',yoyo: true,repeat: -1,});
gsap.fromTo('.article__thread-5', { rotate:-.4}, { rotate:0,delay: .7,duration: 2.6,ease:'power2.inOut',yoyo: true,repeat: -1,});
gsap.fromTo('.article__planets_5-blur', {y: 0,x:0}, {y: 0,x:-indexJs/6 ,duration: 2.6,delay:.7,ease:'power2.inOut',yoyo: true,repeat: -1,});    
gsap.timeline().fromTo('.article__planets_5', {y: -3500,x:50,  ease: "power2.out"}, {y: 100,x:0,duration: .8,delay:.3, ease: "power2.out"}).to('.article__planets_5', {y: -10, duration: 0.2, ease: "power2.out"}).to('.article__planets_5', {y: 0, duration: 0.12, ease: "power2.out"});
gsap.timeline().fromTo('.article__thread-5',{y:-3500},{y:100,rotate:-.4,delay:.3,duration: .8,ease: 'power2.out',}).to('.article__thread-5', {y: -10, duration: 0.2, ease: "power2.out"}).to('.article__thread-5', {y: 0, duration: 0.12, ease: "power2.out"});

gsap.fromTo('.article__planets_6', {y: 0,x:0}, {y: 0,x:indexJs/6 ,duration: 3.4,delay:.6,ease:'power2.inOut',yoyo: true,repeat: -1,});
gsap.fromTo('.article__thread-6', { rotate:1.7}, { rotate:1,delay: .6,duration: 3.4,ease:'power2.inOut',yoyo: true,repeat: -1,}); 
gsap.fromTo('.article__planets_6-blur', {y: 0,x:0}, {y: 0,x:indexJs/6 ,duration: 3.4,delay:.6,ease:'power2.inOut',yoyo: true,repeat: -1,});
gsap.timeline().fromTo('.article__planets_6', {y: -2600,x:50,  ease: "power2.out"}, {y: 3,x:0,duration: .85,delay:.3, ease: "power2.out"}).to('.article__planets_6', {y: 0, duration: 0.15, ease: "power2.out"});
gsap.timeline().fromTo('.article__thread-6',{y:-2700},{y:3,rotate:1.7,delay:.3,duration: .85,ease: 'power2.out',}).to('.article__thread-6', {y: 0, duration: 0.15, ease: "power2.out"});

gsap.fromTo('.article__planets_7', {y: 0,x:0}, {y: 0,x:indexJs ,duration: 5.65,delay:.75,ease:'power2.inOut',yoyo: true,repeat: -1,});
gsap.fromTo('.article__thread-7', { rotate:2.3}, { rotate:-2.3,delay: .75,duration: 5.65,ease:'power2.inOut',yoyo: true,repeat: -1,}); 
gsap.fromTo('.article__planets_7-blur', {y: 0,x:0}, {y: 0,x:indexJs ,duration: 5.65,delay:.75,ease:'power2.inOut',yoyo: true,repeat: -1,});
gsap.timeline().fromTo('.article__planets_7', {y: -1000,x:50,  ease: "power2.out"}, {y: 3,x:0,duration: .65,delay:.3, ease: "power2.out"}).to('.article__planets_7', {y: 0, duration: 0.15, ease: "power2.out"});
gsap.timeline().fromTo('.article__thread-7',{y:-1000},{y:3,rotate:2.3,delay:.3,duration: .65,ease: 'power2.out',}).to('.article__thread-7', {y: 0, duration: 0.15, ease: "power2.out"});

gsap.fromTo('.article__cardboard-roket',{ rotate:0,y:0},{rotate:-20,y:indexJs*3,scrollTrigger:{trigger:'.article__cardboard-roket',start: 0*vh,end:.5*vh,scrub:true}});
gsap.fromTo('.article__cardboard-roket',{ rotate:-20,y:indexJs*3},{rotate:15,y:indexJs*-1,scrollTrigger:{trigger:'.article__cardboard-roket',start: .5*vh,end:2*vh,scrub:true}});
gsap.fromTo('.article__cardboard-roket',{ rotate:15,y:indexJs*-1},{rotate:-25,y:indexJs*3,scrollTrigger:{trigger:'.article__cardboard-roket',start: 2*vh,end:4*vh,scrub:true}});
gsap.fromTo('.article__cardboard-roket',{x:0,rotate:0},{x:indexJs*-45,scrollTrigger:{trigger:'.article__cardboard-roket',start: 0*vh,end:4*vh,scrub:true}});
gsap.fromTo('.article__cardboard-nlo', {x:-500}, {x:0,duration: 3,ease:'power2.inOut'});gsap.fromTo('.article__cardboard-roket', {y:500}, {y:0,duration: 3,ease:'power2.inOut'});
}

document.querySelector('.article__cardboard-nlo').addEventListener('mouseenter', function() {gsap.to('.article__cardboard-nlo',{opacity:1,duration: .5})});
document.querySelector('.article__cardboard-roket').addEventListener('mouseenter', function() {gsap.to('.article__cardboard-roket',{opacity:1,duration: .5})});
document.querySelector('.article__planets_7').addEventListener('mouseenter', function() {gsap.to('.article__planets_7-blur',{duration: 2,opacity:1});gsap.to('.article__block7',{opacity:1,duration: .5})});
document.querySelector('.article__planets_6').addEventListener('mouseenter', function() {gsap.to('.article__planets_6-blur',{duration: 2,opacity:1});gsap.to('.article__block6',{opacity:1,duration: .5})});
document.querySelector('.article__planets_5').addEventListener('mouseenter', function() {gsap.to('.article__planets_5-blur',{duration: 1.5,opacity:1});gsap.to('.article__block5',{opacity:1,duration: .5})});
document.querySelector('.article__planets_4').addEventListener('mouseenter', function() {gsap.to('.article__planets_4-blur',{duration: 1.5,opacity:1});gsap.to('.article__block4',{opacity:1,duration: .5})});
document.querySelector('.article__planets_2').addEventListener('mouseenter', function() {gsap.to('.article__planets_2-blur',{duration: 2.5,opacity:1});gsap.to('.article__block2',{opacity:1,duration: .5})});
document.querySelector('.article__planets_1').addEventListener('mouseenter', function() {gsap.to('.article__planets_1-blur',{duration: 2.5,opacity:1});gsap.to('.article__block1',{opacity:1,duration: .5})});
document.querySelector('.article__planets_3').addEventListener('mouseenter', function() {gsap.to('.article__block3',{opacity:1,duration: .5});gsap.to('.article__cardboard-roket',{duration: .5,opacity:1})});
document.querySelector('.article__planets_0').addEventListener('mouseenter', function() {gsap.to('.article__planets_0-blur',{duration: 1.5,opacity:1});gsap.to('.article__block0',{opacity:1,duration: .5});
gsap.to('.article__cardboard-nlo',{opacity:1,duration: .5});});


document.querySelector('.article__cardboard-nlo').addEventListener('mouseleave', function() {gsap.to('.article__cardboard-nlo',{duration: .5,opacity:.6})});
document.querySelector('.article__cardboard-roket').addEventListener('mouseleave', function() {gsap.to('.article__cardboard-roket',{duration: .5,opacity:.4})});
document.querySelector('.article__planets_7').addEventListener('mouseleave', function() {gsap.to('.article__planets_7-blur',{duration: 2,opacity:0});gsap.to('.article__block7',{duration: .5,opacity:0})});
document.querySelector('.article__planets_6').addEventListener('mouseleave', function() {gsap.to('.article__planets_6-blur',{duration: 2,opacity:0});gsap.to('.article__block6',{duration: .5,opacity:0})});
document.querySelector('.article__planets_5').addEventListener('mouseleave', function() {gsap.to('.article__planets_5-blur',{duration: 1.5,opacity:0});gsap.to('.article__block5',{duration: .5,opacity:0})});
document.querySelector('.article__planets_4').addEventListener('mouseleave', function() {gsap.to('.article__planets_4-blur',{duration: 1.5,opacity:0});gsap.to('.article__block4',{duration: .5,opacity:0})});
document.querySelector('.article__planets_2').addEventListener('mouseleave', function() {gsap.to('.article__planets_2-blur',{duration: 2.5,opacity:0});gsap.to('.article__block2',{duration: .5,opacity:0})});
document.querySelector('.article__planets_1').addEventListener('mouseleave', function() {gsap.to('.article__planets_1-blur',{duration: 2.5,opacity:0});gsap.to('.article__block1',{duration: .5,opacity:0})});
document.querySelector('.article__planets_3').addEventListener('mouseleave', function() {gsap.to('.article__block3',{duration: .5,opacity:0});gsap.to('.article__cardboard-roket',{duration: .5,opacity:.4})});
document.querySelector('.article__planets_0').addEventListener('mouseleave', function() {gsap.to('.article__planets_0-blur',{duration: 1.5,opacity:0});gsap.to('.article__block0',{duration: .5,opacity:0});
gsap.to('.article__cardboard-nlo',{opacity:.6,duration: .5})});

var nushna = true,canCheck = true,nushna_2 = true,i = true,b = false,pl3 = document.querySelector('.article__planets_3');
function planets3_1() {gsap.fromTo('.article__planets_3', {y: 0,x:0}, {y: 0,x:indexJs*1.5,duration:2.3,ease:'power2.inOut',yoyo: true,repeat: -1,});
gsap.fromTo('.article__thread-3', {rotate:1}, {rotate:-4.5,duration: 2.3,ease:'power2.inOut',yoyo: true,repeat: -1,});
gsap.fromTo('.article__planets_3-blur', {y: 0,x:0}, {y: 0,x:indexJs*1.5,duration:2.3,opacity:1,ease:'power2.inOut',yoyo: true,repeat: -1,})}
function planets3_2() {gsap.fromTo('.article__planets_3', {y: 0,x:indexJs*1.5}, {y: 0,x:-indexJs*2.66,duration: 2.3,ease:'power2.inOut',yoyo: true,repeat: -1,});
gsap.fromTo('.article__thread-3', {rotate:-4.5}, {rotate:10,duration: 2.3,ease:'power2.inOut',yoyo: true,repeat: -1,});
gsap.fromTo('.article__planets_3-blur', {y: 0,x:indexJs*1.5}, {y: 0,x:-indexJs*2.66,opacity:1,duration: 2.3,ease:'power2.inOut',yoyo: true,repeat: -1,})}
function planets3_2_2() {gsap.fromTo('.article__planets_3', {y: 0,x:-indexJs*2.66}, {y: 0,x:indexJs*2.66,duration: 2.3,ease:'power2.inOut',yoyo: true,repeat: -1,});
gsap.fromTo('.article__thread-3', {rotate:10}, {rotate:-9,duration: 2.3,ease:'power2.inOut',yoyo: true,repeat: -1,});
gsap.fromTo('.article__planets_3-blur', {y: 0,x:-indexJs*2.66}, {y: 0,x:indexJs*2.66,opacity:1,duration: 2.3,ease:'power2.inOut',yoyo: true,repeat: -1,})}
function planets3_3() {gsap.fromTo('.article__planets_3', {y: 0,x:-indexJs*2.66}, {y: 0,x:indexJs/2,duration: 2.3,ease:'power2.inOut',yoyo: true,repeat: -1,});
gsap.fromTo('.article__thread-3', {rotate:10}, {rotate:-1,duration: 2.3,ease:'power2.inOut',yoyo: true,repeat: -1,});
gsap.fromTo('.article__planets_3-blur', {y: 0,x:-indexJs*2.66}, {y: 0,x:indexJs/2,duration: 2.3,opacity:1,ease:'power2.inOut',yoyo: true,repeat: -1,})}
function planets3_4() {gsap.fromTo('.article__planets_3', {y: 0,x:indexJs/2}, {y: 0,x:0,duration: 2.3,ease:'power2.inOut',yoyo: true,repeat: -1,});
gsap.fromTo('.article__thread-3', {rotate:-1}, {rotate:1,duration: 2.3,ease:'power2.inOut',yoyo: true,repeat: -1,});
gsap.fromTo('.article__planets_3-blur', {y: 0,x:indexJs/2,opacity:0}, {y: 0,x:0,duration: 2.3,ease:'power2.inOut',opacity:0,yoyo: true,repeat: -1,})}
function planets3_5() {gsap.fromTo('.article__planets_3', {y: 0,x:indexJs*1.5}, {y: 0,x:0,duration: 2.3,ease:'power2.inOut',yoyo: true,repeat: -1,});
gsap.fromTo('.article__thread-3', {rotate:-4.5}, {rotate:1,duration: 2.3,ease:'power2.inOut',yoyo: true,repeat: -1,});
gsap.fromTo('.article__planets_3-blur', {y: 0,x:indexJs*1.5}, {y:0,x:0,duration: 2.3,opacity:0,ease:'power2.inOut',yoyo: true,repeat: -1,})}
function planets3_6() {gsap.fromTo('.article__planets_3', {y: 0,x:0}, {y: 0,x:indexJs/2,duration: 2.3,ease:'power2.inOut',yoyo: true,repeat: -1,});
gsap.fromTo('.article__thread-3', {rotate:1}, {rotate:-1,duration: 2.3,ease:'power2.inOut',yoyo: true,repeat: -1,});
gsap.fromTo('.article__planets_3-blur', {y: 0,x:0,opacity:0}, {y: 0,x:indexJs/2,duration: 2.3,opacity:0,ease:'power2.inOut',yoyo: true,repeat: -1,})}
  
if(i=true){pl3.addEventListener('mouseenter', function() {
    interval = setInterval(function() {var translateX = parseFloat(window.getComputedStyle(document.querySelector('.article__planets_3')).getPropertyValue('transform').split(/[\s,]+/)[4]);b = false;
        if(translateX == 0 && canCheck ){planets3_1();canCheck = false; setTimeout(function() {canCheck = true; b = true;}, 100);}
            if(translateX == indexJs*1.5 && canCheck ){planets3_2();canCheck = false;setTimeout(function() {canCheck = true;b = true; }, 100);}
                if(translateX == -indexJs*2.66 && canCheck){planets3_2_2();canCheck = false;setTimeout(function() {canCheck = true; b = true;}, 100);}}, 1);});}
if(b=true){pl3.addEventListener('mouseleave', function() {clearInterval(interval); i=false;canCheck = true;
    interval1 = setInterval(function() {var translateX = parseFloat(window.getComputedStyle(document.querySelector('.article__planets_3')).getPropertyValue('transform').split(/[\s,]+/)[4]);
        if(translateX == -indexJs*2.66 && canCheck){planets3_3();canCheck = false; setTimeout(function() {canCheck = true; }, 150);setTimeout(function() {planets3_4(); i=true;clearInterval(interval1);}, 2300);}
            if(translateX == indexJs*1.5 && canCheck){planets3_5();canCheck = false; setTimeout(function() {canCheck = true; }, 150);setTimeout(function() {planets3_6(); i=true;clearInterval(interval1);}, 2300);}}, 1);});}
         
    
   

      

