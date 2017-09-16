//Available choices
var letterChoices = ['a', 'b', 'c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z']

//score
var wins = 0;
var losses = 0;
var guesses = 9;
var guessesLeft = 9;
var guessedLetters = [];
var letterToGuess = null;

//computer randomly chooses

var computerGuess = letterChoices [Math.floor(Math.random()*letterChoices.length)];

//guesses left function

var updateGuessesLeft = function() {
document.querySelector('guessesLeft').innerHTML = "Guesses Left: " + guessesLeft;
};

//guess function

var updateletterToGuess = function(){
this.letterToGuess = this.letterChoices[Math.floor(Math.random() * this.letterChoices.length)];
};

var updateGuessesSoFar = function(){
document.querySelector('guessessofar').innerHTML = "Your guesses so far: " + guessedLetters.join(', ');
};

//reset

var reset = function(){
totalGuesses = 9;
guessesLeft = 9;
guessedLetters = [];

updateletterToGuess();
updateGuessesSoFar();
updateGuessesLeft();

};

updateGuessesLeft();
updateletterToGuess();

//user input

document.onkeyup = function(event) {
guessesLeft--;
var userGuess;
console.log(userGuess)

guessedLetters.push(userGuess);
updateGuessesLeft();
updateGuessesSoFar();

    if (guessesLeft > 0){
        if (userGuess === letterToGuess){
            wins++;
            document.querySelector('#wins').innerHTML = 'Wins: ' + wins;
            alert("How did you know!?!");
            reset();
        }
    } else if (guessesLeft == 0){
        losses++;
        document.querySelector('#losses').innerHTML = 'Losses: ' + losses;
        alert("Sorry, you suck fool!");

        reset();
    }
}
