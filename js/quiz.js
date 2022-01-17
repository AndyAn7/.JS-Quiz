/*
 * questions.js is loaded in the HTML before quiz.js
 * It creates a global variable called questions that contains starter questions.
 * Take a look at the structure and familiarize yourself with each part
 * then, add some of your own questions!
 * Use this data to populate your quiz questions, choices, and answers.
 */


var questionNumber = 0;
// Questions
var trivia = document.querySelector('.questions');
var solutionList = document.querySelector('.solutions');
// Timer
var timerDiv = document.querySelector('.timer');
var timer;
var sec = 5;

function timerF() {
    clearInterval(timer);
    timer = setInterval(function(){
        sec--;
        // console.log(sec);
        timerDiv.textContent = ":" + sec;

        if (sec <= 0) {
            clearInterval(timer);
        }
    }, 1000);
}
const startBtn = document.querySelector('#start');

startBtn.addEventListener('click',() => {
    timerF();
});

function displayTrivia(i) {
    var trivia = document.querySelector('.questions');

    let triviaNew = '<span>'+ questions[i].title + '</span>';
    let solutionNew = '<button id="one">'+ questions[i].choices[0] +'</button>' + 
    '<button id="two">' + questions[i].choices[1] + '</button>' + 
    '<button id="three">' + questions[i].choices[2] + '</button>' + 
    '<button id="four">' + questions[i].choices[3] + '</button>'

    trivia.innerHTML = triviaNew;
    solutionList.innerHTML = solutionNew;
}

one.addEventListener('click', () => {
    checkSol(0);
});
two.addEventListener('click', () => {
    checkSol(1);
});
three.addEventListener('click', () => {
    checkSol(2);
});
four.addEventListener('click', () => {
    checkSol(3);
});
startBtn.addEventListener('click',() => {
    displayTrivia(0);
});

function checkSol(i) {
    var playerChoice = questions[questionNumber].choices[i];
    var pSol = questions[questionNumber].answer;

    if (playerChoice != pSol) {
        
    }

}
