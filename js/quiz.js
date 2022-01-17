/*
 * questions.js is loaded in the HTML before quiz.js
 * It creates a global variable called questions that contains starter questions.
 * Take a look at the structure and familiarize yourself with each part
 * then, add some of your own questions!
 * Use this data to populate your quiz questions, choices, and answers.
 */

// Global variables
const questionNumber = 0;
const gameContainer = document.querySelector('.game');
const trivia = document.querySelector('.questions');
const solutionList = document.querySelector('.solutions');
const timerDiv = document.querySelector('.timer');
const pScore = document.querySelector('.score');
const button1 = document.querySelector('#one');
const button2 = document.querySelector('#two');
const button3 = document.querySelector('#three');
const button4 = document.querySelector('#four');
const POINTS = 5
const mQuest = 5

let currentQ = {}
let acceptA = true
let score = 0
let qCount = 0
let questionsLeft = []
var timer;
var sec = 5;

startGame = () => {
    qCount = 0
    score = 0
    questionsLeft = [...questions]
    getNewQ()
}

getNewQ = () => {
    if (questionsLeft == 0 || qCount > MAX_QUESTIONS) {
        localStorage.setItem('mostRecentScore', score)

        return window.location.assign('/end.html')
    }

    qCount++
    trivia.innerText = 'Question ${qCount} of ${MAX-QUESTIONS}'

    const qIndex = Math.floor(Math.random() * questionsLeft.length)
    currentQ = questionsLeft[questions]
    questions.innerText = currentQ.question

    choices.forEach(choice => {
        const number = choice.dataset['number']
        choice.innerText = currentQ['choice' + number]
    })

    questionsLeft.splice(questionsIndex, 1)

    acceptA = true
}

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
    let solutionNew = '<button id="one">'+ questions[i].choices[0] +'</button>' + 
    '<button id="two">' + questions[i].choices[1] + '</button>' + 
    '<button id="three">' + questions[i].choices[2] + '</button>' + 
    '<button id="four">' + questions[i].choices[3] + '</button>'

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
    // var playerChoice = questions[questionNumber].choices[i];
    // var pSol = questions[questionNumber].answer;

    // if (playerChoice != pSol) {
        
    // }
    console.log(i);
}
