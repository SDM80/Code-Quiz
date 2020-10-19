const mainEl = document.querySelector("main");
const timeEl = document.getElementById("time");
const timerEl = document.querySelector(".timer");
var timeRemaining = NaN;
var currentQuestion = {};
var score = 0;
var highScore = 0;
let timerEl = document.getElementById('countdown');
let mainEl = document.getElementById('main');
let startBtn = document.getElementById('start');

function timer()
let time = 5000;

var timeInterval = setInterval(function() {
    if(timeLeft >0) {
        timerEl.textcontent - timeLeft + "seconds remaining";
        timeLeft--;
    }
    else{
        timerEl.textContent -'';
        clearInterval(timeInterval);
        displayMessage()
    }
}, 1000);

const q1 = {
    number : 1,
    question : 
    'Why do JavaScript and Java have similar name?',
    answers: [
        "A.JavaScript is a stripped-down version of Java.",
        "B.JavaScript's syntax is loosely based on Java's",
        "C.They both originated on the island of Java",
        "D.None of the above",
      // letter of correct answer
      correct, B,
    ],
};

const q2 = {
    number : 2,
    question :
    'What are variables used for in JavaScript Programs?',
    answers: [
        'A.Storing numbers, dates, or other values',
        'B.Varying randomly' ,
        'C.Causing high-school algebra flashbacks' ,
        'D.None of the above' ,
        // letter of correct answer
        correct, A, 
    ],
};

const q3 = {
    number : 3,
    question:
    'Which of the following are capabilities of functions in JavaScript?',
    answers: [
        'A.Return a value',
        'B.Accept parameters and Return a value',
        'C.Accept parameters',
        'D.None of the above',
        // letter of correct answer
        correct, C, 
    ] ,
};

const q4 = {
    number : 4,
    question:
    'Which of the following is not a valid JavaScript variable name?' ,
    answers: [
        'A.2names' ,
        'B._first_and_last_names' ,
        'C.FirstAndLast' ,
        'D.None of the above' ,
        // letter of correct answer
        correct, A,
    ] ,
};
 const q5 = {
     number : 5,
     question:
     'Which of the following is the structure of an if statement?' ,
     answers: [
        'A.if (conditional expression is true) thenexecute this codeend if' ,
        'B.if (conditional expression is true)execute this codeend if' ,
        'C.if (conditional expression is true)   {then execute this code>->}' ,
        'D.if (conditional expression is true) then {execute this code}' ,
        // letter of correct answer
        correct, C,
     ] ,
 };

const questionRefs = [q1, 
    q2, 
    q3, 
    q4, 
    q5, 
];

const displayWelcome = function () {
    // reset the score
    score = 0;
    // create button
    buttonEl = document.createElement("div");
    startButton = document.createElement("button");
};
startButton.textContent = "Start Quiz";
startButton.setAttribute("id", "start-quiz");
startButton.setAttribute("class", "button");

const displayQuestion = function (obj) {
    // create question elements
    questionEl = document.createElement("div");
    questionTextEl = document.createElement("h1");
    answerulEl = document.createElement("ul");
}; 