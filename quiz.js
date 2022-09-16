/* All the questions and answers, with the correct answer*/

let questions = [{
        question: "What is Baby Yoda's real name?",
        option1: "Goku",
        option2: "Grogu",
        option3: "Boda",
        option4: "Yogi",
        answer: 2
    },
    {
        question: "Where did Obi-Wan take Luke after his birth?",
        option1: "Hoth",
        option2: "Naboo",
        option3: 'Tatooine',
        option4: "Kamino",
        answer: 3
    },
    {
        question: "Who was Anakin Skywalker's Padawan",
        option1: "Ahsoka Tano",
        option2: "Qui-Gon Jinn",
        option3: "Kanan Jarrus",
        option4: "Mace Windu",
        answer: 1
    },
    {
        question: "What year did the first Star Wars movie come out?",
        option1: '1977',
        option2: '1975',
        option3: '1991',
        option4: '1981',
        answer: 1
    },
    {
        question: "Who had the highest midi-chlorian count in Star Wars?",
        option1: "Luke Skywalker",
        option2: "Obi-Wan Kenobi",
        option3: "Count Dooku",
        option4: "Anakin Skywalker",
        answer: 4
    },
    {
        question: "Who killed Qui-Gon Jinn?",
        option1: "Darth Vader",
        option2: "Palpatine",
        option3: "Darth Maul",
        option4: "Han Solo",
        answer: 3
    },
    {
        question: "What is the name of Han Solo's ship?",
        option1: "The Millennium Falcon",
        option2: "Enterprise",
        option3: "Death Star",
        option4: "Apollo",
        answer: 1
    },
    {
        question: "Where was Yoda's home in his final years?",
        option1: 'Middle Earth',
        option2: "Dagobah",
        option3: "Bespin",
        option4: "Crait",
        answer: 2
    },
    {
        question: "Han Solo was frozen in what?",
        option1: "Crystal",
        option2: "Ice",
        option3: "Time",
        option4: "Carbonite",
        answer: 4
    },
    {
        question: "Who killed Jabba?",
        option1: "Han Solo",
        option2: "Luke Skywalker",
        option3: "Princess Leia",
        option4: "Boba Fett",
        answer: 3
    },
    {
        question: "What species is Chewbacca?",
        option1: "wookie",
        option2: "Cookie",
        option3: "Ewok",
        option4: "Zabrak",
        answer: 1
    },
    {
        question: "Padmé was Queen of what?",
        option1: "The Hutts",
        option2: "The Empire",
        option3: "England",
        option4: "Naboo",
        answer: 4
    }

]


const POINTS = 10;//points scored for correct answer

const ScoreText = document.getElementById('score')//adjust score display
let score = 0;//starting score

const TOTAL_QUESTIONS = 12;
const question = document.querySelector('#question');
const questionCounterText = document.getElementById('questionCounter');
const choices = Array.from(document.querySelectorAll('.choice-text'));

let currentQuestion = {};
let acceptingAnswers = false;

let questionCounter = 0;
let availableQuestions = [];



/** start game function with score,question counter, copied array of question and get new question function */
startGame = () => {
    questionCounter = 0;
    score = 0;
    availableQuestions = [...questions];
    getNewQuestions();

};

// increment score and display
incrementScore = num => {
    score += num;
    ScoreText.innerText = score;
}

/** function for selecting new random question and displaying question text */


getNewQuestions = () => {

    if (availableQuestions.length == 0 || questionCounter >= TOTAL_QUESTIONS) {
        localStorage.setItem("mostRecentScore", score);


        //when max questions are reached send player to end page
        return window.location.assign("end.html");
    }
    questionCounter++;
    questionCounterText.innerText = questionCounter + "/" + TOTAL_QUESTIONS;

    //random question selection  
    const questionIndex = Math.floor(Math.random() * availableQuestions.length);
    currentQuestion = availableQuestions[questionIndex];
    question.innerText = currentQuestion.question;

    choices.forEach(option => {
        const number = option.dataset["number"];
        option.innerText = currentQuestion["option" + number];
    })
    /** removing answered questions */
    availableQuestions.splice(questionIndex, 1);


    acceptingAnswers = true;


    choices.forEach(option => {
        option.addEventListener("click", e => {
            if (!acceptingAnswers) return;
            acceptingAnswers = false;
            const selectedChoice = e.target;
            const selectedAnswer = selectedChoice.dataset["number"];


            // constant to apply correct class to incorrect and correct answer
            const classToApply = selectedAnswer == currentQuestion.answer ? "correct" :
                "incorrect";

            // increment score by 10 for correct answer
            if (classToApply === "correct") {
                incrementScore(POINTS);
            }

            selectedChoice.parentElement.classList.add(classToApply);


            //time delay before moving to next question

            setTimeout(() => {
                selectedChoice.parentElement.classList.remove(classToApply);
                getNewQuestions();
            }, 1000);

        });
    });

    //question countdown timer
/**
    let timeleft = 5;
    let downloadTimer = setInterval(function () {
        if (timeleft <= 0) {

            clearInterval(downloadTimer);
            document.getElementById("countdown").innerHTML = "time out", getNewQuestions()


        } else {
            document.getElementById("countdown").innerHTML = timeleft + " ";
        }
        timeleft -= 1;
    }, 1000);**/
};

startGame();