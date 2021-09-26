var readlineSync = require("readline-sync");

var score = 0;

var highScores = [
  {
    name: "Veronica",
    score: 3,
  },

  {
    name: "Rhea",
    score: 2,
  },
]

var questions = [{
  question: "In which country do I live? ",
  answer: "India"
}, {
  question: "Am I into Kpop? ",
  answer: "Yes"
},
{
  question: "Which Kpop band do I stan? ",
  answer: "BTS"
},
{
  question: "Do I eat to live? ",
  answer: "Yes"
},
{
  question: "Am I into junk food ",
  answer: "No"
}];

function welcome() {
 var userName = readlineSync.question("What's your name? ");

  console.log("Welcome "+ userName + " to DO YOU KNOW Tanvee?");
}


// play function
function play(question, answer) {
  var userAnswer = readlineSync.question(question);

  if (userAnswer.toUpperCase() === answer.toUpperCase()) { // branching
    console.log("Bravo!");
    score = score + 1;
    
  } else {
    console.log("Oops!");
   
  }

  console.log("current score: ", score);
}

function game() {
  for (var i=0; i<questions.length; i++) {
    var currentQuestion = questions[i];
    play(currentQuestion.question, currentQuestion.answer)
  }
}

function showScores() {
  console.log("YAY! Here is your total score: ", score);

  console.log("Check out the high scores, Try again if you want to beat them.");

  highScores.map(score => console.log(score.name, " : ", score.score))
}


welcome();
game();
showScores();