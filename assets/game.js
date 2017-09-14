$(document).ready(function() {

  var questionData = {

    question: [
      "What is the tallest Mountain on Earth?",
      "Which is the tallest free-standing Mountain?",
      'Which is the tallest peak in Colorado?',
      "Which state has the most 14,000ft peaks?",
    ],
    answerList: [
      ["K2", "Denali", "Matterhorn", "Everest"],
      ["Kilimanjaro", "Everest", "K2", "Elbert"],
      ["Massive", "Elbert", "Washington", "Evans"],
      ["California", "Colorado", "Washington", "Utah"],
    ],
    correctAns: ["Everest", "Kilimanjaro", "Elbert", "Colorado"]
  };

  var correctCount = 0;

  var incorrectCount = 0;

  var blank = 0;

  var questionIndex = 0;

  var timePerQuestion = 11;

  var remainingTime;

  var intervalId;

  var nextQuestion;


  //Functions------------------------------------------------------------------

  function startGame() {

    $('.startGame').on('click', function() {

      $('#btnDiv').empty();

      return gameDisplay();
    });
  }


  // Displays all necessary visuals
  function gameDisplay() {
    if (questionIndex == questionData.question.length) {
      endGame();
    } else {

      timePerQuestion = 11;

      remainingTime = setTimeout(evalAnswerBlank, (timePerQuestion * 1000));

      questionTimer();
      count();

      $('#question').html('<div><p class="questionText">' + questionData.question[questionIndex] + '</p></div>');

      for (var i = 0; i < questionData.answerList[questionIndex].length; i++) {
        $('#answers').append('<li class="anAnswer">' + questionData.answerList[questionIndex][i] + '</li>');
      }

      $('.anAnswer').on('click', evalAnswer);

      $('#answerScreen').empty();

      clearTimeout(nextQuestion);
    }
  }


  function evalAnswerBlank() {

    clearTimeout(remainingTime);

    clearInterval(intervalId);
    blank++;

    $('#timeRemaining, #question, #answers').empty();

    $('#answerScreen').html('<div><p class="message">Out of time!</p></div><div><p>The correct answer was ' + questionData.correctAns[questionIndex] + '.</p></div>');

    loadNext();
  }

  function evalAnswer() {

    clearTimeout(remainingTime);

    clearInterval(intervalId);

    if ($(this).html() == questionData.correctAns[questionIndex]) {

      correctCount++;

      $('#timeRemaining, #question, #answers').empty();

      $('#answerScreen').html('<div><p class="message">Correct!</p></div><div><p></p></div>');

      loadNext();
    } else {

      incorrectCount++;

      $('#timeRemaining, #question, #answers').empty();

      $('#answerScreen').html('<div><p class="message">Incorrect!</p></div><div><p>It was ' + questionData.correctAns[questionIndex] + '.</p></div>');

      loadNext();
    }
  }


  function endGame() {

    clearTimeout(nextQuestion);

    clearTimeout(remainingTime);

    clearInterval(intervalId);

    if (questionIndex == questionData.question.length) {

      $('#answerScreen').empty();

      $('#gameOver').append('<div><p class="message">Game Over!</p></div>')
        .append('<div><p>You answered ' + correctCount + ' questions correct.</p></div>')
        .append('<div><p>You answered ' + incorrectCount + ' questions incorrect.</p></div>')
        .append('<div><p>You left  ' + blank + ' question(s) blank.</p></div>')
        .append('<button id="gameAgain">Restart Game</button>');
    }
  }



  $('.container').on('click', '#gameAgain', function() {

    $('#gameOver').empty();

    questionIndex = 0;

    correctCount = 0;

    incorrectCount = 0;

    blank = 0;

    gameDisplay();
  });


  function loadNext() {
    nextQuestion = setTimeout(gameDisplay, 3500);
    questionIndex++;
  }


  function count() {
    intervalId = setInterval(questionTimer, 1000);

  }

  function questionTimer() {
    timePerQuestion--;
    $('#timeRemaining').html('<h3>' + timePerQuestion + '</h3>');
    $('#timeRemaining').animate({opacity: 1}, 1000);
    $('#timeRemaining').animate({opacity: .01}, 0);

  }



  //=====================
  startGame();
});
