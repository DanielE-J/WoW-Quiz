// 15 quiz questions

let currentQuestionIndex = 0;
let score = 0;

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

document.getElementById('start-btn').addEventListener('click', startQuiz);
document.getElementById('next-btn').addEventListener('click', nextQuestion);

function startQuiz() {
  document.getElementById('next-btn').style.display = 'none';
  document.getElementById('intro').style.display = 'none';
  document.getElementById('quiz-instructions').style.display = 'none';
  document.querySelector('.app').style.display = 'block';
  showQuestion();
}

function showQuestion() {
  const question = questions[currentQuestionIndex];
  document.getElementById('question').textContent = question.question;

  const answerButtons = document.getElementById('answer-buttons');
  answerButtons.innerHTML = '';  

  question.answers.forEach((answer, index) => {
      const button = document.createElement('button');
      button.textContent = answer.text;
      button.classList.add('btn');
      button.addEventListener('click', () => checkAnswer(answer, button));
      answerButtons.appendChild(button);
  });
}

function checkAnswer(answer, button) {
// Check if the selected answer is correct
  if (answer.correct) {
      button.classList.add('correct');
      score++;
  } else {
      button.classList.add('incorrect');
  }

  // Disable all buttons after answering
  const buttons = document.querySelectorAll('.btn');
  buttons.forEach(button => button.disabled = true);

  // Show "Next" button after answering
  document.getElementById('next-btn').style.display = 'inline-block';
}

function nextQuestion() {
  if (currentQuestionIndex < questions.length - 1) {
      currentQuestionIndex++;
      showQuestion();
      document.getElementById('next-btn').style.display = 'none';
  } else {
      showResults();
  }
}

function showResults() {
  const resultSection = document.getElementById('results');
  resultSection.style.display = 'block'; // Show results
  
  // Display the score
  const scoreElement = document.getElementById('score');
  scoreElement.textContent = `Your score is: ${score} out of ${questions.length}`;

  // Hide the "Next" button
  document.getElementById('next-btn').style.display = 'none';
}


/**
 * Adds a restart button to the quiz interface.
 * When clicked, it restarts the quiz by calling the restartGame function.
 */
function addRestartButton() {
  const restartButton = document.createElement("button");
  restartButton.textContent = "Restart Quiz";
  restartButton.classList.add("btn"); // Add "btn" class for styling
  restartButton.classList.add("next-btn"); // Add "next-btn" class for styling
  restartButton.addEventListener("click", restartGame); // Call restartGame
  answerButtons.appendChild(restartButton);
}

/**
 * Restarts the quiz game by resetting the current question index and score,
 * displaying the first question, and hiding the score categories element.
 */
function restartGame() {
  currentQuestionIndex = 0;
  score = 0;
  
  // Show the question element
  const questionElement = document.getElementById("question");
  questionElement.style.display = "block";
  
  // Hide the scores-categories element
  const scoresCategoriesElement = document.getElementById("scores-categories");
  scoresCategoriesElement.style.display = "none";
  
  displayQuestion();
}
