//v.1

const trafficLightEl_1 = document.querySelector('#trafficLight_1');

function makeGreen_1() {
    trafficLightEl_1.style.background = ('rgba(0,254,101,0.5)');
    trafficLightEl_1.removeEventListener('click', makeGreen_1);
    trafficLightEl_1.addEventListener('click', makeYellow_1);
}

function makeYellow_1() {
    trafficLightEl_1.style.background = ('rgba(252,255,72,0.5)');
    trafficLightEl_1.removeEventListener('click', makeYellow_1);
    trafficLightEl_1.addEventListener('click', makeRed_1);
}

function makeRed_1() {
    trafficLightEl_1.style.background = ('rgba(255,4,41,0.5)');
    trafficLightEl_1.removeEventListener('click', makeRed_1);
    trafficLightEl_1.addEventListener('click', makeGreen_1);
}

trafficLightEl_1.addEventListener('click', makeGreen_1);

//v.2.1

const trafficLightEl_2 = document.querySelector('#trafficLight_2');
const trafficLightEl_3 = document.querySelector('#trafficLight_3');
const trafficLightEl_4 = document.querySelector('#trafficLight_4');

function makeGreen_2() {
    trafficLightEl_2.removeEventListener('click', makeGreen_2);
    trafficLightEl_2.removeEventListener('click', makeYellow_2);
    trafficLightEl_2.removeEventListener('click', makeRed_2);
    trafficLightEl_2.style.background = ('rgba(0,254,101,0.5)');
    trafficLightEl_4.style.background = ('rgba(0,0,0,0.7)');
    trafficLightEl_2.addEventListener('click', makeYellow_2);
}

function makeYellow_2() {
    trafficLightEl_2.style.background = ('rgba(0,0,0,0.7)');
    trafficLightEl_3.style.background = ('rgba(252,255,72,0.5)');
    trafficLightEl_2.addEventListener('click', makeRed_2);
}

function makeRed_2() {
    trafficLightEl_3.style.background = ('rgba(0,0,0,0.7)');
    trafficLightEl_4.style.background = ('rgba(255,4,41,0.5)');
    trafficLightEl_2.addEventListener('click', makeGreen_2);
}

//v.2.2

function makeYellow_3() {
    trafficLightEl_3.removeEventListener('click', makeGreen_3);
    trafficLightEl_3.removeEventListener('click', makeYellow_3);
    trafficLightEl_3.removeEventListener('click', makeRed_3);
    trafficLightEl_3.style.background = ('rgba(252,255,72,0.5)');
    trafficLightEl_2.style.background = ('rgba(0,0,0,0.7)');
    trafficLightEl_4.style.background = ('rgba(0,0,0,0.7)');
    trafficLightEl_3.addEventListener('click', makeRed_3);
}

function makeRed_3() {
    trafficLightEl_3.style.background = ('rgba(0,0,0,0.7)');
    trafficLightEl_4.style.background = ('rgba(255,4,41,0.5)');
    trafficLightEl_3.addEventListener('click', makeGreen_3);
}

function makeGreen_3() {
    trafficLightEl_4.style.background = ('rgba(0,0,0,0.7)');
    trafficLightEl_2.style.background = ('rgba(0,254,101,0.5)');
    trafficLightEl_3.addEventListener('click', makeYellow_3);
}

//v.2.3

function makeRed_4() {
    trafficLightEl_4.removeEventListener('click', makeGreen_4);
    trafficLightEl_4.removeEventListener('click', makeYellow_4);
    trafficLightEl_4.removeEventListener('click', makeRed_4);
    trafficLightEl_4.style.background = ('rgba(255,4,41,0.5)');
    trafficLightEl_2.style.background = ('rgba(0,0,0,0.7)');
    trafficLightEl_3.style.background = ('rgba(0,0,0,0.7)');
    trafficLightEl_4.addEventListener('click', makeGreen_4);
}

function makeGreen_4() {
    trafficLightEl_4.style.background = ('rgba(0,0,0,0.7)');
    trafficLightEl_2.style.background = ('rgba(0,254,101,0.5)');
    trafficLightEl_4.addEventListener('click', makeYellow_4);
}

function makeYellow_4() {
    trafficLightEl_2.style.background = ('rgba(0,0,0,0.7)');
    trafficLightEl_3.style.background = ('rgba(252,255,72,0.5)');
    trafficLightEl_4.addEventListener('click', makeRed_4);
}

trafficLightEl_2.addEventListener('click', makeGreen_2);
trafficLightEl_3.addEventListener('click', makeYellow_3);
trafficLightEl_4.addEventListener('click', makeRed_4);