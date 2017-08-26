
var machineChoices = ['audi', 'bmw', 'porsche', 'volkswagen', 'jeep', 'lexus', 'maserati'];
var validInputs = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');
var numWins = 0;
var numLosses = 0;
var guessLeft;
var incorrectGuesses;
var userGuess;
var computerWord = '';
var wordDisplay = '';
var numWrong = 0;

window.onload = function() {

function setWordDashes() {
  for (var i = 0; i < computerWord.length; i++)
    wordDisplay.push('_');
}

function updateWordDisplay() {
  for (var j = 0; j < computerWord.length; j++) {
    if (computerWord[j] === userGuess)
      wordDisplay[j] = computerWord[j];
  }
}
// Game reset
function gameReset() {
  computerWord = machineChoices[Math.floor(Math.random() * machineChoices.length)].toUpperCase();
  guessLeft = 12;
  incorrectGuesses = [];
  userGuess = '';
  wordDisplay = [];
  setWordDashes();
  numWrong = 0;
}

function gameOver() {
  numLosses++;
  setTimeout(function() {
    alert("YOU LOST\nIt was actually\n" + computerWord.toUpperCase());
  }, 0);
  gameReset();
}


gameReset();
document.querySelector('#numWins').innerHTML = "" + numWins;
document.querySelector('#numLosses').innerHTML = "" + numLosses;
document.querySelector('#guessLeft').innerHTML = "" + guessLeft;
document.querySelector('#wordDisplay').innerHTML = wordDisplay.join(" ");


document.onkeyup = function(event) {

  userGuess = event.key.toUpperCase();

  console.log(computerWord);
  console.log(userGuess);

  if (validInputs.indexOf(userGuess) === -1) {
    alert('Invalid Input')
  } else if ((wordDisplay.indexOf(userGuess) === -1) && (incorrectGuesses.indexOf(userGuess) === -1)) {
    if (computerWord.indexOf(userGuess) > -1) {
      updateWordDisplay();
      if (wordDisplay.indexOf('_') === -1) {
        numWins++;
        alert("You nailed it!\n" + computerWord.toUpperCase() + "\nwas the answer");
        gameReset();
      }
    } else {
      guessLeft--;
      if (guessLeft > 0) {
        console.log(incorrectGuesses);
        incorrectGuesses.push(userGuess);
        numWrong++;
        hang();
      } else {
        gameOver();
      }
    }
  }

  document.querySelector('#numWins').innerHTML = "" + numWins;
  document.querySelector('#numLosses').innerHTML = "" + numLosses;
  document.querySelector('#guessLeft').innerHTML = "" + guessLeft;
  document.querySelector('#incorrectGuesses').innerHTML = incorrectGuesses.join(" ");
  document.querySelector('#wordDisplay').innerHTML = wordDisplay.join(" ");
};
}
