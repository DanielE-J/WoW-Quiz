// 15 quiz questions

const questions = [
  {
    question: "Where does the human race start?",
    answers: [
      { text: "Goldshire.", correct: false },
      { text: "Orgrimmar.", correct: false },
      { text: "Thunderbluff.", correct: false },
      { text: "Northshire Valley.", correct: true },
    ],
},

    {
        question: "Who was the warchief in classic?",
        answers: [
          { text: "Garrosh Hellscream.", 
            correct: false },
          { text: "Jaina Proudmore.", 
            correct: false },
          {
            text: "Thrall.",
            correct: true,
          },
          { text: "Brann Bronzebeard.", 
            correct: false },
        ],
    },
    {
        question: "What is the best currency?",
        answers: [
          { text: "Silver.", 
            correct: false },
          { text: "Bronze.", 
            correct: false },
          { text: "Diamond.", 
            correct: false },
          { text: "Gold.",
             correct: true },
        ],
    },
    {
        question: "What is the name of the current Alliance King?",
        answers: [
          { text: "Anduin Wrynn", 
            correct: false },
          { text: "Varian Wrynn",
             correct: true },
          { text: "Sylvanas Windrunner",
             correct: false },
          { text: "Khadgar",
             correct: false },
        ],
    },
    {
        question: "How many Classes is there in The War Within?",
        answers: [
          { text: "13.",
             correct: true },
          { text: "11.",
             correct: false },
          { text: "14.",
             correct: false },
          { text: "12.",
             correct: false },
        ],
      },
      {
        question: "How many playable Races are there?",
        answers: [
          { text: "25.",
             correct: false },
          { text: "26.",
             correct: true },
          { text: "27.",
             correct: false },
          { text: "24.",
             correct: false },
        ],
      },
      {
        question: "Who is the Lich king ?",
        answers: [
          { text: "Thrall",
            correct: false },
          { text: "Varian Wrynn .",
            correct: false },
          { text: "Arthas Menethil.",
            correct: true,},
          { text: "Jaina Proudmore.",
            correct: false },
        ],
      },
      {
        question: "How many professions are there?",
        answers: [
          { text: "13.",
             correct: true },
          { text: "12.",
             correct: false },
          { text: "14.",
             correct: false },
          { text: "11.",
             correct: false },
        ],
      },
      {
        question: "Which year did World of Warcraft get released ?",
        answers: [
          { text: "2003.",
             correct: false },
          { text: "2004.",
            correct: true,},
          { text: "2002.",
             correct: false },
          { text: "2005.",
             correct: false },
        ],
      },
      {
        question: "What is the name of the race that starts neutral?",
        answers: [
          { text: "Human .",
             correct: false },
          { text: "Orc.", 
            correct: false },
          { text: "Pandarian.",
             correct: true },
          { text: "Tauren.",
             correct: false },
        ],
      },
      {
        question: "Which raid instance is located in Stranglethorn Vale in World of Warcraft?",
        answers: [
          { text: "Onyxia's Lair.",
             correct: false },
          { text: "Zul'Farrak.",
             correct: false },
          { text: "Zul'Aman.",
             correct: false },
          { text: "Zul'Gurub.",
            correct: true,},
        ],
      },
      {
        question: "What is the name of the Alliance capital?",
        answers: [
          { text: "Stormwind.",
             correct: true,},
          { text: "Orgrimmar.",
             correct: false,},
          { text: "Dalaran.",
             correct: false },
          { text: "Thunder Bluff.",
             correct: false },
        ],
      },
      {
        question: "What is the name of Horde capital?",
        answers: [
            { text: "Orgrimmar.",
                 correct: true,},
            { text: "Stormwind.", 
                correct: false,},
            { text: "Dalaran.", 
                correct: false },
            { text: "Thunder Bluff.", 
                correct: false },
        ],
      },
      {
        question: "What is the maximum level a character can reach in World of Warcraft The War Within?",
        answers: [
          { text: "90.",
             correct: false },
          { text: "70.", 
            correct: false },
          { text: "60.", 
            correct: false },
          { text: "80.", 
            correct: true,},
        ],
      },
      {
        question: "What is the name of the legendary sword wielded by the character Arthas Menethil?",
        answers: [
          { text: "lightmourne.",
             correct: false },
          { text: "sunmourne.",
             correct: false },
          { text: "Frostmourne.",
             correct: true,},
          { text: "Shadowmourne.",
             correct: false },
        ],
      },
]; 

// Variables

const questionElement = document.getElementById("question");
const answerButtons = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-btn");

let currentQuestionIndex = 0;
let score = 0;

/**
 * Hides .app when page is loaded
 * Create the Start button
 * Append the Start button under the instructions section
 */

document.addEventListener("DOMContentLoaded", function () {
  // Hide the app content initially
  var appDiv = document.querySelector(".app");
  appDiv.style.display = "none";

  // Create a "Start" button
  var startBtn = document.createElement("button");
  startBtn.textContent = "Start";
  startBtn.id = "start-btn";

  // Append the "Start" button to the instructions element
  var instructions = document.getElementById("instructions");
  instructions.appendChild(startBtn);

  // Add a click event listener to the "Start" button
  startBtn.addEventListener("click", startGame);

  
});
