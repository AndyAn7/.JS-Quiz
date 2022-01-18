// Global variables
var gameContainer = document.querySelector('.game');
var trivia = document.querySelector('.questions');
var solutionList = document.querySelector('.solutions');
var timerDiv = document.querySelector('.timer');
var pScore = document.querySelector('.score');
var button1 = document.querySelector('#one');
var button2 = document.querySelector('#two');
var button3 = document.querySelector('#three');
var button4 = document.querySelector('#four');
const startBtn = document.querySelector('#start');
const endBtn = document.querySelector('#end')

var solutionIndex = 0;
var questionNumber = 0;
var score = 0;
var timer;
var sec;
let userscore = 0;

// Timer function
function timerF() {
    clearInterval(timer);
    timer = setInterval(function(){
        sec--;
        // console.log(sec);
        timerDiv.textContent = "Time:" + sec;

        if (sec <= 0) {
            clearInterval(timer);
        }
    }, 1000);
}

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

// Check solution chosen by user
function checkSol(qns) {
    var playerChoice = questions[questionNumber].choices[qns];
    var pSol = questions[questionNumber].answer;

    if (playerChoice === pSol) {
        
        score++;
        pScore.innerHTML = 'Score: ' + score

    } else {
        score--;
        sec-=10;
        score-=1;
    } 

    if (questionNumber >= questions.length - 1) {
        endGame()
    }
    questionNumber++
    displayTrivia(questionNumber)
}

// endGame function
function endGame(){
    questionNumber = 0
    sec = 1
    solutionList.classList.add('hide')

    startBtn.classList.remove('hide')
    endBtn.classList.add('hide')

    startBtn.innerText = 'Restart'
}

// Start button
startBtn.addEventListener('click',() => {
    questionNumber = 0
    sec = 60
    score = 0

    solutionList.classList.remove('hide')
    endBtn.classList.remove('hide')
    startBtn.classList.add('hide')

    timerF();
    displayTrivia(questionNumber);
});

// eventListeners
endBtn.addEventListener('click', endGame)

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