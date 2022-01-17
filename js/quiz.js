// Global variables
var questionNumber = 0;
var gameContainer = document.querySelector('.game');
var trivia = document.querySelector('.questions');
var solutionList = document.querySelector('.solutions');
var timerDiv = document.querySelector('.timer');
var pScore = document.querySelector('.score');
var button1 = document.querySelector('#one');
var button2 = document.querySelector('#two');
var button3 = document.querySelector('#three');
var button4 = document.querySelector('#four');
var POINTS = 5
var mQuest = 5

let currentQ = {}
let acceptA = true
let score = 0
let qCount = 0
let questionsLeft = []
var timer;
var sec = 5;

// startGame = () => {
//     qCount = 0
//     score = 0
//     questionsLeft = [...questions]
//     getNewQ()
// }

// getNewQ = () => {
//     if (questionsLeft == 0 || qCount > MAX_QUESTIONS) {
//         localStorage.setItem('mostRecentScore', score)

//         return window.location.assign('/end.html')
//     }

//     qCount++
//     trivia.innerText = 'Question ${qCount} of ${MAX-QUESTIONS}'

//     const qIndex = Math.floor(Math.random() * questionsLeft.length)
//     currentQ = questionsLeft[questions]
//     questions.innerText = currentQ.question

//     choices.forEach(choice => {
//         const number = choice.dataset['number']
//         choice.innerText = currentQ['choice' + number]
//     })

//     questionsLeft.splice(questionsIndex, 1)

//     acceptA = true
// }

// choices.forEach(choice => {
//     choice.addEventListener('click', e => {
//         if(!acceptA) return

//         acceptA = false
//         const selectedChoice = e.target
//         const selectedAnswer = selectedChoice.dataset['number']

//         let classToApply = selectedAnswer == currentQ.answer ? 'correct' : 'incorrect'

//         if(classToApply === 'correct') {
//             incrementScore(POINTS)
//         }

//         selectedChoice.parentElement.classList.add(classToApply)

//         setTimeout(() =>{
//             selectedChoice.parentElement.classList.remove(classToApply)
//             getNewQ()
//         }, 1000)
//     })
// })
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
    solutionList.innerHTML = solutionNew;
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
function checkSol(i) {
    var playerChoice = questions[questionNumber].choices[i];
    var pSol = questions[questionNumber].answer;

    if (playerChoice != pSol) {
        
    }

}
