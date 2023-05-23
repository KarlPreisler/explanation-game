document.addEventListener('DOMContentLoaded', function() {
  let timer = null;
  let seconds = 30;

  function startTimer() {
    timer = setInterval(function() {
      seconds--;
      if (seconds < 0) {
        clearInterval(timer);
        alert('Time is up');
      } else {
        console.log(seconds);
      }
    }, 1000);
  }

  function stopTimer() {
    clearInterval(timer);
    seconds = 30;
  }

  document.getElementById('start-btn').addEventListener('click', startTimer);
  document.getElementById('stop-btn').addEventListener('click', stopTimer);
});
