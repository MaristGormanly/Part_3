document.addEventListener("keydown", keyDownTextField, false);

function keyDownTextField(e) {
var keyCode = e.keyCode;
  if(keyCode==13) {
	  window.location.href="/mainmenu";
  } else {
  	  alert("Hit the Spacebar to go back to the main menu.");
  }
}

document.addEventListener("keydown", keyDownTextField, false);

function keyDownTextField(e) {
var keyCode = e.keyCode;
  if(keyCode==32) {
	  window.location.href="/mainmenu";
  } else {
  	  alert("You have selected to enter the Game");
  }
}

/*Fetch API methods
-getGameData
-updateGame
-resetGame
-setPace

-newData
-trailStats
-profession
-playerName
-startMonth
*/

/*Once the user completes a day, the updateTrailStats() function should asyncronously 
assign the updated trailStatsNow values to the html elements on the page.
It also changes the background photo to match the listed terrain and then calls startDay()
*/

function updateTrailStats() {
  fetch('/trail/updateTrailStats').then((res) =>
    res.json().then((data) => {
      trailStatsNow = data;

      document.getElementById('milesTraveledValue').innerHTML = trailStatsNow.milesTraveled;
      document.getElementById('milesToGoValue').innerHTML = trailStatsNow.milesToGo;
      document.getElementById('healthValue').innerHTML = trailStatsNow.healthValue;
      document.getElementById('weatherValue').innerHTML = trailStatsNow.currentWeather;
      document.getElementById('paceValue').innerHTML = trailStatsNow.currentPace;
      document.getElementById('terrainValue').innerHTML = trailStatsNow.currentTerrain;

      // Change Terrain Photo
      document.getElementById('terrainPhoto').src =
        "../img/" + trailStatsNow.currentTerrain + ".jpg";

      startDay();
    });
  );
}

//The sendNewStat function is used to asyncronously post to the trailStatsNow
//object located in the trailController.
function sendNewStat(trailStat, trailStatValue) {
  fetch('/trail/updateTrailStats/' + trailStat + '/' + trailStatValue),
  {method: 'POST'}).then((res) => {
    res.json().then((data) => {
      var change = document.getElementById(trailStat);
      trailStatsNow = data;

      change.innerHTML = trailStatValue;
    });
  });
}

function gameScreen(screenNumber)   {
    //Make async call to server to get requested gameScreen html
    var gameContainer = document.getElementById("gameContainer");

    fetch('/game/getNewGameScreen/' + screenNumber).then(function(response) {
      if (response.status !== 200) {
        console.log('Problem with ajax call!' + response.status + " msg: "  +
        response.value);
          return;
        }
        currentScreen = screenNumber;
        response.text().then(function(data) {
        gameContainer.innerHTML = data;
        if(currentScreen == 4) {
          showSettings();
        }
      })
  });
}
gameScreen(0);

//Passes playerProfession value to the backend
function saveProfession(profession) {
      fetch('/game/saveProfession/' + profession).then(function(response) {
        if (response.status !== 200) {
          console.log('Problem with ajax call!' + response.status + " msg: "  +
          response.value);
            return;
          }
          response.text()
      });
    };
//Passes playerMoney value to the backend
function saveMoney(playerMoney) {
      fetch('/game/saveMoney/' + playerMoney).then(function(response) {
        if (response.status !== 200) {
          console.log('Problem with ajax call!' + response.status + " msg: "  +
          response.value);
            return;
          }
          response.text()
      });
    };

//Passes playerNames values to the backend
function savePlayerNames(playerNumber, playerName){
  fetch('/game/savePlayerName/' + playerNumber + "/" + playerName).then(function(response) {
    if (response.status !== 200) {
      console.log('Problem with ajax call!' + response.status + " msg: "  +
      response.value);
        return;
      }
      response.text()
  });
};

//Passes playerStartMonth value to the backend
function saveStartMonth(startMonth) {
      fetch('/game/saveStartMonth/' + startMonth).then(function(response) {
        if (response.status !== 200) {
          console.log('Problem with ajax call!' + response.status + " msg: "  +
          response.value);
            return;
          }
          response.text()
      });
    };

//Fetches json values from gameSettings array
function showSettings() {
  fetch('/game/getSettings').then(function(response) {
    if (response.status !== 200) {
        console.log('Problem with ajax call! ' + response.status + "msg: " + response.value);
        return;
    }
    response.json().then(function(data) {
      console.log(data);
      displaySettings(data);
      return data;
    });
  });
}