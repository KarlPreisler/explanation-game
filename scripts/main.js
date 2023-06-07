document.addEventListener('DOMContentLoaded', function() {
  let timer = null;
  let seconds = 30;
  let index = 0;
  const words = [
    "Apple", "Table", "Car", "Dog", "Book", "Chair", "Sun", "Phone", "House", "Tree",
    "Flower", "Computer", "Cat", "Bird", "Ball", "Pen", "Mountain", "River", "Ocean", "Bike"
  ];

  let timerStarted = false;
  let currentTeam = 1;
  let team1Score = 0;
  let team2Score = 0;

  function startTimer() {
    if (!timerStarted) {
      timer = setInterval(function() {
        seconds--;
        if (seconds < 0) {
          clearInterval(timer);
          seconds = 30;
          updateSecondsDisplay();
          stopGame();
          switchTeam();
        } else {
          updateSecondsDisplay();
          console.log(seconds);
        }
      }, 1000);

      timerStarted = true;
      showNextWord();
      document.getElementById('point-btn').disabled = false;
      document.getElementById('pass-btn').disabled = false;
    }
  }

  function stopTimer() {
    clearInterval(timer);
    seconds = 30;
    stopGame();
    switchTeam();
  }

  function showNextWord() {
    if (index < words.length) {
      const word = words[index];
      index++;
      document.getElementById('word-display').textContent = word;
    } else {
      stopGame();
      switchTeam();
    }
  }

  function stopGame() {
    clearInterval(timer);
    timerStarted = false;
    document.getElementById('start-btn').disabled = false;
    document.getElementById('point-btn').disabled = true;
    document.getElementById('pass-btn').disabled = true;
  }

  function updateSecondsDisplay() {
    document.getElementById('seconds-display').textContent = seconds;
  }

  function switchTeam() {
    if (currentTeam === 1) {
      currentTeam = 2;
    } else {
      currentTeam = 1;
    }


    document.getElementById('team-display').textContent = 'Team ' + currentTeam;
  }

  function updateScoresDisplay() {
    const scoreDisplay = document.getElementById('score-display');
    scoreDisplay.textContent = 'Team 1: ' + team1Score + '  |  Team 2: ' + team2Score;
  }

  function incrementScore() {
    if (currentTeam === 1) {
      team1Score++;
    } else {
      team2Score++;
    }
    updateScoresDisplay();
  }

  updateScoresDisplay();

  document.getElementById('start-btn').addEventListener('click', startTimer);
  document.getElementById('stop-btn').addEventListener('click', stopTimer);
  document.getElementById('point-btn').addEventListener('click', function() {
    incrementScore();
    showNextWord();
  });
  document.getElementById('pass-btn').addEventListener('click', showNextWord);
});
