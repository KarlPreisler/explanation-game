/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */

// Wait for the deviceready event before using any of Cordova's device APIs.
// See https://cordova.apache.org/docs/en/latest/cordova/events/events.html#deviceready
document.addEventListener('deviceready', onDeviceReady, false);

function onDeviceReady() {
    // Cordova is now initialized. Have fun!

    console.log('Running cordova-' + cordova.platformId + '@' + cordova.version);
    document.getElementById('deviceready').classList.add('ready');
}

document.addEventListener('DOMContentLoaded', function() {
    const popupOverlay = document.querySelector('.popup-overlay');
    const closeBtn = document.querySelector('.close-btn');
  
    closeBtn.addEventListener('click', function() {
      popupOverlay.style.display = 'none';
  });
  
    let timer = null;
    let seconds = 30;
    let index = 0;
    const words = [
      "Apple", "Table", "Car", "Dog", "Book", "Chair", "Sun", "Phone", "House", "Tree",
      "Flower", "Computer", "Cat", "Bird", "Ball", "Pen", "Mountain", "River", "Ocean", "Bike",
      "Tablet", "Lamp", "Door", "Shoe", "Hat", "Cloud", "Bookshelf", "Cup", "Clock", "Window",
      "Carpet", "Guitar", "Mirror", "Bag", "Piano", "Camera", "Key", "Bridge", "Leaf", "Moon",
      "Rock", "Sunset", "Rainbow", "Flag", "Rain", "Star", "Beach", "Snow", "Wave", "Wind",
      "Fire", "Island", "River", "Sea", "Sky", "Storm", "Candle", "Chair", "Blanket", "Pizza",
      "Computer", "Desk", "Plant", "Hat", "Coffee", "Bookcase", "Plate", "Fan", "Clock",
      "Painting", "Hat", "Basket", "Guitar", "Mirror", "Backpack", "Plant", "Laptop", "Lock",
      "Drawer", "Tennis", "Shirt", "Hat", "Table", "Coat", "Shirt", "Coffee", "Sofa", "TV",
      "Laptop", "Spoon", "Bowl", "Fork", "Knife", "Dish", "Pan", "Pot", "Stove", "Bed", 
      "Pillow", "Mirror", "Curtain", "Phone", "Table", "Chair", "Drawer", "Lamp", "Carpet",
      "Mirror", "Guitar", "Shoe", "Bike", "Jacket", "Hat", "Couch", "Table", "Lamp"
    ];
  
    let timerStarted = false;
    let currentTeam = 1;
    let team1Score = 0;
    let team2Score = 0;
  
    document.getElementById('seconds-text').style.display = 'none';
  
    function startTimer() {
      if (!timerStarted) {
        updateSecondsDisplay();
      document.getElementById('seconds-display').style.display = 'inline';
      document.getElementById('seconds-text').style.display = 'inline';
  
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
            document.getElementById('seconds-display').style.color = seconds < 10 ? 'red' : '';
            document.getElementById('seconds-text').style.color = seconds < 10 ? 'red' : '';
            console.log(seconds);
          }
        }, 1000);
  
        timerStarted = true;
        showNextWord();
        document.getElementById('point-btn').disabled = false;
        document.getElementById('pass-btn').disabled = false;
        document.getElementById('start-btn').style.display = 'none';
      }
    }
  
    function stopTimer() {
      clearInterval(timer);
      seconds = 30;
      stopGame();
      switchTeam();
      document.getElementById('word-display').style.display = 'none';
  
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
      document.getElementById('start-btn').style.display = 'block';
      document.getElementById('point-btn').disabled = true;
      document.getElementById('pass-btn').disabled = true;
      document.getElementById('seconds-display').style.display = 'none';
      document.getElementById('seconds-text').style.display = 'none';
      document.getElementById('word-display').style.display = 'none';
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
  
  
      document.getElementById('team-display').textContent = 'Lag ' + currentTeam;
    }
  
    function updateScoresDisplay() {
      const team1ScoreDisplay = document.getElementById('team1-score');
      const team2ScoreDisplay = document.getElementById('team2-score');
      team1ScoreDisplay.textContent = team1Score;
      team2ScoreDisplay.textContent = team2Score;
    
      const team1NameDisplay = document.getElementById('team1-name');
      const team2NameDisplay = document.getElementById('team2-name');
      team1NameDisplay.textContent = 'Lag 1';
      team2NameDisplay.textContent = 'Lag 2';
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
  