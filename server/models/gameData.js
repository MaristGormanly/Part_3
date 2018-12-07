gameScreen(0);

var screenNumber = 0;
var gameContainer = document.getElementById("gameContainer");

gameContainer.addEventListener('click', function(e){
	if(screenNumber == 0){
		if(e.target.id == "banker"){
			screenNumber++;
			savePlayerMoney(1600);
			gameScreen(screenNumber);
			saveProfession("Banker");
		}
		else if(e.target.id == "carpenter"){
			screenNumber++;
			savePlayerMoney(800);
			gameScreen(screenNumber);
			saveProfession("Carpenter");
		}
		else if(e.target.id == "farmer"){
			screenNumber++;
			savePlayerMoney(400);
			gameScreen(screenNumber);
			saveProfession("Farmer");
		}
		else if(e.target.id == "differences"){
			window.alert("You've Discovered the Differences!");
		}
	}
	if(screenNumber == 1){
		if(e.target.id == "submitBut"){
			screenNumber++;
			gameScreen(screenNumber);
			savePlayerNames([0]);
			savePlayerNames([1]);
			savePlayerNames([2]);
			savePlayerNames([3]);
			savePlayerNames([4]);
		}
	}
	if(screenNumber == 2){
		if(e.target.id == "marchChoice"){
			screenNumber++
			gameScreen(screenNumber);
			saveStartMonth("March");
		}
		else if(e.target.id == "aprilChoice"){
			screenNumber++;
			gameScreen(screenNumber);
			saveStartMonth("April");
		}
		else if(e.target.id == "mayChoice"){
			screenNumber++;
			gameScreen(screenNumber);
			saveStartMonth("May");
		}
		else if(e.target.id == "juneChoice"){
			screenNumber++;
			gameScreen(screenNumber);
			saveStartMonth("June");
		}
		else if(e.target.id == "julyChoice"){
			screenNumber++;
			gameScreen(screenNumber);
			saveStartMonth("July");
		}
	}
    
    if(screenNumber == 3){
        if(e.target.id == "starttrail"){
			window.location.href = "/trail"
			gameScreen(screenNumber);
		}
    }
    
})
