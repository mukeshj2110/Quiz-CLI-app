var readlineSync = require('readline-sync');
const chalk = require('chalk');

function welcome() {
  console.log('Welcome to Iron Man Quiz');
  console.log('');
  console.log('Let\'s start by entering your name');
  var username = readlineSync.question("Enter your name: ");
  console.log('');
  console.log('Hi ' + username + '!');
  console.log('');
  console.log('Let\'s begin!');
  console.log('');
  return username;
}

var score = 0;

var quiz = [
  {
    question: "Who is the actor behind \"Iron Man\"? ",
    answer: "robert downey jr"
  },
  {
    question: "What is the name of Tony's computerised help system? ",
    answer: "jarvis"
  },
  {
    question: "For the cover story who is said to be in the Iron Man suit? ",
    answer: "body guard"
  }
]

var highscores = [
  {
    name: "Anish",
    score: 3
  },
  {
    name: "Vrushali",
    score: 2
  }
]

function play(quiz) {
  var userans = readlineSync.question(chalk.yellowBright(quiz.question));
    if (userans.toLowerCase() == quiz.answer) {
      score = score + 1;
      console.log(chalk.greenBright('Correct!'));
      console.log('');
    }
    else {
      console.log(chalk.redBright('Oops, Wrong!'));
      console.log('');
    }
  console.log('Current score: ' + score);
  console.log('----------------------');
  console.log('');
}

function game() {
  for(var i = 0; i < 3; i++) {
    play(quiz[i]);
  }
}

function final() {
  console.log('');
  console.log(chalk.blueBright('Final Score: ' + score));
  if (score === 3) {
    console.log(chalk.blueBright('Congrats, you got one of the top scores!'));
    console.log(chalk.blueBright('----------------------'));
    console.log('');
    console.log(chalk.blueBright('High Scores: '));
    console.log(chalk.blueBright('-------------------------------------'));
    console.log(chalk.blueBright(highscores[0].name + ' ' + highscores[0].score));
    console.log(chalk.blueBright(username + ' ' + score));
    console.log(chalk.blueBright(highscores[1].name + ' ' + highscores[1].score));
    console.log(chalk.blueBright('-------------------------------------'));
  } else if (score === 2) {
    console.log(chalk.blueBright('Congrats, you scored well!'));
    console.log(chalk.blueBright('----------------------'));
    console.log('');
    console.log(chalk.blueBright('High Scores: '));
    console.log(chalk.blueBright('-------------------------------------'));
    console.log(chalk.blueBright(highscores[0].name + ' ' + highscores[0].score));
    console.log(chalk.blueBright(username + ' ' + score));
    console.log(chalk.blueBright(highscores[1].name + ' ' + highscores[1].score));
    console.log(chalk.blueBright('-------------------------------------'));
  } else if (score === 1) {
    console.log(chalk.blueBright('Huh, You don\'t know Iron Man that well'));
    console.log(chalk.blueBright('----------------------'));
    console.log('');
    console.log(chalk.blueBright('High Scores: '));
    console.log(chalk.blueBright('-------------------------------------'));
    console.log(chalk.blueBright(highscores[0].name + ' ' + highscores[0].score));
    console.log(chalk.blueBright(highscores[1].name + ' ' + highscores[1].score));
    console.log(chalk.blueBright(username + ' ' + score));
    console.log(chalk.blueBright('-------------------------------------'));
  } else if (score === 0) {
    console.log(chalk.blueBright('Do you even know Iron Man?'));
    console.log(chalk.blueBright('----------------------'));
    console.log('');
    console.log(chalk.blueBright('High Scores: '));
    console.log(chalk.blueBright('-------------------------------------'));
    console.log(chalk.blueBright(highscores[0].name + ' ' + highscores[0].score));
    console.log(chalk.blueBright(highscores[1].name + ' ' + highscores[1].score));
    console.log(chalk.blueBright(username + ' ' + score));
    console.log(chalk.blueBright('-------------------------------------'));
  }
}

var username = welcome();
game();
final();