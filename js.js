const wrapper = document.querySelector('.wrapper');
const loginLink = document.querySelector('.login-link');
const registerLink = document.querySelector('.register-link');
const btnPopup = document.querySelector('.btnLogin-popup');
const iconClose = document.querySelector('.icon-close');
const text = document.querySelector('.text');
const parallax_el = document.querySelectorAll(".parallax");
const main = document.querySelector("main");
registerLink.addEventListener('click', () => {
    wrapper.classList.add("active");
});

loginLink.addEventListener('click', () => {
    wrapper.classList.remove("active");
});

btnPopup.addEventListener('click', () => {
    wrapper.classList.add('active-popup');
    text.classList.add("aftertransition");
});

iconClose.addEventListener('click', () => {
    wrapper.classList.remove('active-popup');
    text.classList.remove("aftertransition");
});


let xValue = 0, yValue = 0;

function update(cursorPosition){
    parallax_el.forEach(el => {
        let speedx = el.dataset.speedx;
        let speedy = el.dataset.speedy;
        let speedz = el.dataset.speedz;
        let rotationSpeed = el.dataset.rotation;

        rotateDegree = (xValue/(window.innerWidth/2))*20;

        let isInLeft =parseFloat(getComputedStyle(el).left) < (window.innerWidth/2) ? 1 : -1;
        let zValue = (cursorPosition - parseFloat(getComputedStyle(el).left)) * isInLeft *0.1;
        

        el.style.transform = `rotateY(${rotateDegree * rotationSpeed}deg) translateX(calc(-5% + ${-xValue * speedx}px)) translateY(calc(-5% + ${yValue* speedy}px)) perspective(2300px) translateZ(${zValue* speedz}px)`;
    });
}

update(0);

window.addEventListener("mousemove", (e) => {
    if(timeline.isActive()) return;
    xValue = e.clientX - window.innerWidth/2;
    yValue = e.clientY - window.innerHeight/2;
    
    update(e.clientX)
});

if(window.innerWidth >= 725){
    main.style.maxHeight = `${window.innerWidth * 0.6}px`;
}
else{
    main.style.maxHeight = `${window.innerWidth * 1.6}px`;
}


let timeline = gsap.timeline();

timeline.from(".text h1",{
    y: window.innerHeight - document.querySelector(".text h1").getBoundingClientRect().top+200,duration:2},"0.95")
        .from(".text h2",{
            y:-150,
            opacity:0,
            duration:1.5,
        },"1.5"
)

.from(".hide",{
    opacity:0,
    duration:1.5,
},"0.9");

// .from(".ship1-img",{
//     y:500,
//     opacity:1,
//     duration:1.5,
// },"2")

// .from(".ship2-img",{
//     y:520,
//     opacity:1,
//     duration:1.5,
// },"2.5");
var now = (new Date()).getTime();
var fakeMidnight = now + (30 * 1000);
var untilMidnight = (fakeMidnight - now);

console.log("it will become night over the next : " + (untilMidnight/ 1000) + " seconds.")
$("body").animate({'background-color':'#000'}, (fakeMidnight - now), 'linear')