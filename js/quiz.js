// Global variables
var questionNumber = 0;
var gameContainer = document.querySelector('.game');
var trivia = document.querySelector('.questions');
var solutionList = document.querySelector('.solutions');
// var solutionIndex = 0;
var timerDiv = document.querySelector('.timer');
var pScore = document.querySelector('.score');
var button1 = document.querySelector('#one');
var button2 = document.querySelector('#two');
var button3 = document.querySelector('#three');
var button4 = document.querySelector('#four');
var score = 0;
var timer;
var sec = 60;

// Timer function
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

// Questions display
function displayTrivia(i) {
    var trivia = document.querySelector('.questions');

    let triviaNew = '<span>' + questions[i].title + '</span>';
    button1.textContent = questions[i].choices[0];
    button2.textContent = questions[i].choices[1];
    button3.textContent = questions[i].choices[2];
    button4.textContent = questions[i].choices[3];

    trivia.innerHTML = triviaNew;
}

button1.addEventListener('click', () => {
    checkSol(0);
});
button2.addEventListener('click', () => {
    checkSol(1);
});
button3.addEventListener('click', () => {
    checkSol(2);
});
button4.addEventListener('click', () => {
    checkSol(3);
});
startBtn.addEventListener('click',() => {
    displayTrivia(0);
});


// Check solution chosen by user
function checkSol(qns) {
    var playerChoice = questions[questionNumber].choices[qns];
    var pSol = questions[questionNumber].answer;

    for(var i=0; i < questions.length; i++)

    if (playerChoice == pSol) {
        
        score++;

    } else {
        score--;
        sec-=2;
    } 
    questionNumber++;
    if (questionNumber < questions.length) {
        displayTrivia(questionNumber);
    }

}