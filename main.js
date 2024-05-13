'use strict';

// prendo gli elementi che mi servono dalla pagina html
const days = document.getElementById('days');
const hours = document.getElementById('hours');
const minutes = document.getElementById('minutes');
const seconds = document.getElementById('seconds');
const startCount = document.getElementById('start');
const stopCount = document.getElementById('stop');
const resetCount = document.getElementById('reset');

// inizializzo le variabili
let counterSec = 0;
let counterMin = 0;
let counterHr = 0;
let counterDay = 0;
let myTimer;
let timerStarted = false;

// mi metto in ascolto degli eventi sulla pagina

startCount.addEventListener('click', function () {
    if (timerStarted == false) {
        myTimer = setInterval(timer, 1000);
    }
    timerStarted = true;
})


stopCount.addEventListener('click', function () {
    clearInterval(myTimer);
    timerStarted = false;
})

resetCount.addEventListener('click', function () {
    reset();
})


//funzione timer

function timer() {

    // incremento secondi
    counterSec++;


    // incremento minuti, ore e giorni 
    if (counterSec === 60) {
        counterMin++;
        counterSec = 0;
    }

    if (counterMin === 60) {
        counterHr++;
        counterMin = 0;
    }

    if (counterHr === 24) {
        counterDays++;
        counterHr = 0;
    }

    // stampa in pagina
    seconds.innerText = counterSec.toString().padStart(2, '0');
    minutes.innerText = counterMin.toString().padStart(2, '0');
    hours.innerText = counterHr.toString().padStart(2, '0');
    days.innerText = counterDay.toString().padStart(2, '0');
}

// funzione reset

function reset() {
    seconds.innerText = '00';
    minutes.innerText = '00';
    hours.innerText = '00';
    days.innerText = '00';
    counterSec = 0;
    counterMin = 0;
    counterHr = 0;
    counterDay = 0;

}