/*
 * questions.js is loaded in the HTML before quiz.js
 * It creates a global variable called questions that contains starter questions.
 * Take a look at the structure and familiarize yourself with each part
 * then, add some of your own questions!
 * Use this data to populate your quiz questions, choices, and answers.
 */

// Timer
var timerDiv = document.querySelector('.timer');
var timer;

function timerF() {
    var sec = 60;
    clearInterval(timer);
    timer = setInterval(function(){
        sec--;
        console.log(sec);
        timerDiv.textContent ='00:'+sec;

        if (sec < 0) {
            clearInterval(timer);
        }
    }, 1000);
}
const startBtn = document.querySelector('#start');

startBtn.addEventListener('click',() => {
    timerF();
});

