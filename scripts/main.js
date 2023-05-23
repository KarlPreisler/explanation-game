document.addEventListener('DOMContentLoaded', function() {
  let timer = null;
  let seconds = 30;
  let index = 0;
  const words = [
    "apple", "table", "car", "dog", "book", "chair", "sun", "phone", "house", "tree",
    "flower", "computer", "cat", "bird", "ball", "pen", "mountain", "river", "ocean", "bike"
  ];

  let timerStarted = false;

  function startTimer() {
    if (!timerStarted) {
      timer = setInterval(function() {
        seconds--;
        if (seconds < 0) {
          clearInterval(timer);
          alert('Time is up');
          stopGame();
        } else {
          updateSecondsDisplay();
          console.log(seconds);
        }
      }, 1000);

      timerStarted = true;
      showNextWord(); 
      document.getElementById('next-word-btn').disabled = false; 
    }
  }

  function stopTimer() {
    clearInterval(timer);
    seconds = 30;
    stopGame();
  }

  function showNextWord() {
    if (index < words.length) {
      const word = words[index];
      index++;
      document.getElementById('word-display').textContent = word;
    } else {
      stopGame();
    }
  }

  function stopGame() {
    clearInterval(timer);
    timerStarted = false;
    document.getElementById('start-btn').disabled = false;
    document.getElementById('next-word-btn').disabled = true;
  }

  function updateSecondsDisplay() {
    document.getElementById('seconds-display').textContent = seconds;
  }

  document.getElementById('start-btn').addEventListener('click', startTimer);
  document.getElementById('stop-btn').addEventListener('click', stopTimer);
  document.getElementById('next-word-btn').addEventListener('click', showNextWord);
  document.getElementById('restart-btn').addEventListener('click', resetTimer);
});
