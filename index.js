var readlineSync = require("readline-sync");
var chalk = require('chalk');
var userName = readlineSync.question("May I have your name, please? ");
console.log(chalk.green("Welcome, "+userName+" let's play this quiz.."))
var score = 0;

function play (question, answer) {

}



var questions = [{
  question: `{What's the name of ${chalk.blue("Brain")} in Fast and Furious 8? }`
  answer:"Paul Walker"
},{
question: `{How did ${chalk.blue("Paul Walker") pass away?}}`,
answer: "Accident"
},{

}]


function finalResult () {
  console.log("-----------");
  console.log("You scored ",score);
  console.log("-----------");
}


finalResult();