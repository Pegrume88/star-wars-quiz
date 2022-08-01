const question = document.getElementById('question');
const answers = Array.from(document.getElementsByClassName("answer-text"));

let currentQuestion = {};
let acceptingAnswers = true;
let score = 0;
let questionCounter = 0;
let availableQuestions = [];

/* Array of all the questions and answers, with the correct answer*/ 

let questions = [
    {
        question: "What is Baby Yoda's real name?",
        choice1: "Goku",
        choice2: "Grogu",
        choice3: "Boda",
        choice4: "Yogi",
        answer: 2
    },
    {
        question: "Where did Obi-Wan take Luke after his birth?",
        choice1: "Hoth",
        choice2: "Naboo",
        choice3: 'Tatooine',
        choice4: "Kamino",
        answer: 3
    },
    {
        question: "Who was Anakin Skywalker's Padawan",
        choice1: "Ahsoka Tano",
        choice2: "Qui-Gon Jinn",
        choice3: "Kanan Jarrus",
        choice4: "Mace Windu",
        answer: 1
    },
    {
        question: "What year did the first Star Wars movie come out?",
        choice1: '1977',
        choice2: '1975',
        choice3: '1991',
        choice4: '1981',
        answer: 1
    },
    {
        question: "Who had the highest midi-chlorian count in Star Wars?",
        choice1: "Luke Skywalker",
        choice2: "Obi-Wan Kenobi",
        choice3: "Count Dooku",
        choice4: "Anakin Skywalker",
        answer: 4
    },
    {
        question: "Who killed Qui-Gon Jinn?",
        choice1: "Darth Vader",
        choice2: "Palpatine",
        choice3: "Darth Maul",
        choice4: "Han Solo",
        answer: 3
    },
    {
        question: "What is the name of Han Solo's ship?",
        choice1: "The Millennium Falcon",
        choice2: "Enterprise",
        choice3: "Death Star",
        choice4: "Apollo",
        answer: 1
    },
    {
        question: "Where was Yoda's home in his final years?",
        choice1: 'Middle Earth',
        choice2: "Dagobah",
        choice3: "Bespin",
        choice4: "Crait",
        answer: 2
    },
    {
        question: "Han Solo was frozen in what?",
        choice1: "Crystal",
        choice2: "Ice",
        choice3: "Time",
        choice4: "Carbonite",
        answer: 4
    },
    {
        question: "Who killed Jabba?",
        choice1: "Han Solo",
        choice2: "Luke Skywalker",
        choice3: "Princess Leia",
        choice4: "Boba Fett",
        answer: 3
    },
    {
        question: "What species is Chewbacca?",
        choice1: "wookie",
        choice2: "Cookie",
        choice3: "Ewok",
        choice4: "Zabrak",
        answer: 1
    },
    {
        question: "Padmé was Queen of what?",
        choice1: "The Hutts",
        choice2: "The Empire",
        choice3: "England",
        choice4: "Naboo",
        answer: 4
    }
   
]

/**
 * Constants for scoring 10 points for correct answer and the max amount of questions in this quiz
 */
const SCORE_POINT = 10;
const MAX_QUESTIONS = 12;
/** start game function with score,question counter, copied array of question and get new question function */
startGame = () =>
{
    questionCounter = 0;
    score = 0;
    availableQuestions = [...questions];
    getNewQuestions();
}
/** function for selecting new random question and displaying question text */
getNewQuestions = () => {
  questionCounter++ ;
  const questionIndex = Math.floor(Math.random() * availableQuestions.length);
  currentQuestion = availableQuestions[questionIndex];
  question.innerText = currentQuestion.question;

}