function changeWeather(){
    var weatherchance = (math.floor(math.random() * 100) +1)
    
    if (weatherchance > 0 && weatherchance < 11){
        saveCurrentWeather("very hot");
        saveHealth(health - 8);
		saveDistance(trailStats.distance + (.7 * pace);
	//percentage of pace for specific weather, how to ,multiply by proper pace
	//trailStats.health??
    }
    else if (weatherchance > 10 && weatherchance < 21){
        saveCurrentWeather("hot");
        saveHealth(health - 3);
		saveDistance(trailStats.distance + (.9 * pace);
    }
    else if (weatherchance > 20 && weatherchance < 31){
        saveCurrentWeather("cool");
        saveHealth(health + 1);
		saveDistance(trailStats.distance + (.95 * pace);
    }
    else if (weatherchance > 30 && weatherchance < 41){
        saveCurrentWeather("cold");
        saveHealth(health - 5);
		saveDistance(trailStats.distance + (.8 * pace);
    }
    else if (weatherchance > 40 && weatherchance < 51){
        saveCurrentWeather("very cold");
        saveHealth(health - 12);
		saveDistance(trailStats.distance + (.7 * pace);
    }
    else if (weatherchance > 50 && weatherchance < 61){
        saveCurrentWeather("rain");
        saveHealth(health - 4);
		saveDistance(trailStats.distance + (.6 * pace);
    }
    else if (weatherchance > 60 && weatherchance < 81){
       saveCurrentWeather("warm");
        saveHealth(health + 1);
		saveDistance(trailStats.distance + (1 * pace);
    }
    else if (weatherchance > 80 && weatherchance < 86){
        saveCurrentWeather("heavy rain");
        saveHealth(health - 8);
		saveDistance(trailStats.distance + (.4 * pace);
    }
    else if (weatherchance > 85 && weatherchance < 91){
        saveCurrentWeather("snow");
        saveHealth(health - 15);
		saveDistance(trailStats.distance + (.3 * pace);
    }
    else if (weatherchance > 90 && weatherchance < 96){
        saveCurrentWeather("blizzard");
        saveHealth(health - 30);
		saveDistance(trailStats.distance + (.1 * pace);
    }
    else (weatherchance > 95 && weatherchance < 101){
        saveCurrentWeather("heavy fog");
        saveHealth(health - 3);
		saveDistance(trailStats.distance + (.5 * pace);
    } 
}