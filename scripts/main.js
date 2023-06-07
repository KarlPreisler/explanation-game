document.addEventListener('DOMContentLoaded', function() {
  let timer = null;
  let seconds = 30;
  let index = 0;
  const words = [
    "apple", "table", "car", "dog", "book", "chair", "sun", "phone", "house", "tree",
    "flower", "computer", "cat", "bird", "ball", "pen", "mountain", "river", "ocean", "bike"
  ];

  let timerStarted = false;
  let currentTeam = 1;
  

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

    // Update the team display
    document.getElementById('team-display').textContent = 'Team ' + currentTeam;
  }

  document.getElementById('start-btn').addEventListener('click', startTimer);
  document.getElementById('stop-btn').addEventListener('click', stopTimer);
  document.getElementById('point-btn').addEventListener('click', showNextWord);
});
