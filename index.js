var readlineSync = require("readline-sync");
var chalk = require('chalk');
var score = 0;

var userName = readlineSync.question("May I have your name, please? ");
console.log(chalk.green("Welcome, "+userName+" let's play this quiz.."))


var questions = [{
  question: `What's the name of ${chalk.blue("Brain")} in Fast and Furious 8?`,
  answer:"Paul Walker"
},{
question: `How did ${chalk.blue("Paul Walker")} pass away?`,
answer: "Accident"
}]

var highScores = [
  {name:"Mukesh", score: "2"},
  {name:"Veena", score: "3"}
]


function play (question, answer) {
  var uAnswer = readlineSync.question(question);
  if(answer.toLowerCase() === uAnswer.toLowerCase()) {
    score += 1;
    console.log("You are right");
  } else {
    score -= 1;
    console.log("You are wrong");
  }
  console.log("Your current score is ", score);
  console.log("----------------------------");

}


for(var i=0;i< questions.length;i++) {
  var currentObject = questions[i];
  play(currentObject.question, currentObject.answer);
}


function finalResult () {
  console.log("-----------");
  console.log("YAAY,You scored ",score);
  console.log("-----------");
  console.log("Feel free to have a look at the high scores 😊:");
  highScores.map(elem => console.log("Name: ", elem.name,"; Score: ", elem.score))
}


finalResult();