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
var subBtn = document.querySelector('.sub');
var container = document.querySelector('.welcome');
var pHighScore = document.querySelector('.hiScore');
var textHiScore = document.querySelector('.userHiScore');
const startBtn = document.querySelector('#start');
const endBtn = document.querySelector('#end');


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
        sec -= 10;
        score -= 1;
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
    pHighScore.classList.remove('hide')
    textHiScore.classList.remove('hide')
    trivia.classList.add('hide')
}

// Start button
startBtn.addEventListener('click',() => {
    questionNumber = 0
    sec = 60
    score = 0

    solutionList.classList.remove('hide')
    endBtn.classList.remove('hide')
    startBtn.classList.add('hide')
    container.classList.add('hide')
    pHighScore.classList.add('hide')
    textHiScore.classList.add('hide')

    timerF();
    displayTrivia(questionNumber);
    trivia.classList.remove('hide')
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

var hiScore = JSON.parse(localStorage.getItem('hiScore')) || [];

function endQuiz() {
    var plyrName = textHiScore.value
    let plyrScoreObj = {
        score: hiScore,
        name: plyrName
    }

    hiScore.push(plyrScoreObj)
    hiScore.sort((a, b) => b.score - a.score)
    localStorage.setItem('highScores', JSON.stringify(hiScore))
    alert('Your name has been submitted!');
}

function sortHi() {
    hiScore
}