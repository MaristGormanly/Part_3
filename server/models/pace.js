
function changePace(){
	gameContainer.addEventListener('mousedown', function(e){
		if(e.target.id == "Steady"){
            changeWeather();
            saveDistance(trailStats.distance + 20);
            death();
            deathCheck();
            winningCheck;
		}
		else if(e.target.id == "Strenuous"){
            changeWeather();
            saveDistance(trailStats.distance + 30);
            saveHealth(trailStats.health -3);
            death();
            deathCheck();
            winningCheck;
		}
		else if(e.target.id == "Grueling"){
            changeWeather();
            saveDistance(trailStats.distance + 35);
            saveHealth(trailStats.health -8);
            death();
            deathCheck();
            winningCheck;
		}
		else if(e.target.id == "Resting"){
            changeWeather();
            saveHealth(trailStats.health +5);
            death();
            deathCheck();
            winningCheck;
		}
	}
}
