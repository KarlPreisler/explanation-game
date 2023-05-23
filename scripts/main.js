document.addEventListener('DOMContentLoaded', function() {
  let timer = null;
  let seconds = 30;
  let index = 0;
  const words = [
    "apple", "table", "car", "dog", "book", "chair", "sun", "phone", "house", "tree",
    "flower", "computer", "cat", "bird", "ball", "pen", "mountain", "river", "ocean", "bike"
  ];

  function startTimer() {
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

  showNextWord(); // Automatically show the first word when the timer starts
    document.getElementById('next-word-btn').disabled = false; // Enable the next word button
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
    document.getElementById('next-word-btn').disabled = true;
  }

  function updateSecondsDisplay() {
    document.getElementById('seconds-display').textContent = seconds;
  }

  document.getElementById('start-btn').addEventListener('click', startTimer);
  document.getElementById('stop-btn').addEventListener('click', stopTimer);
  document.getElementById('next-word-btn').addEventListener('click', showNextWord);
});
