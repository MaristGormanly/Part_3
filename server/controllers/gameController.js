var game = require('../controllers/setupController');

var exports = module.exports = {};

exports.startGameScreens = [];

var terrain = require('../models/terrain');
var weather = require('../models/weather');
var gameData = require('../models/gameData');
var pace = require('../models/pace');
var topTen = require('../models/topTen');

var startGame1 = "<div class = \"midcol\">"
	+ "<div class = \"menuOptions\"><p>What is Your Choice?</p>"
	+ "<p id=\"banker\">1. Be a banker from Boston</p>"
	+ "<p id=\"carpenter\">2. Be a carpenter from Ohio</p>"
	+ "<p id=\"farmer\">3. Be a farmer from Illinois</p>"
	+ "<p id=\"differences\">4. Discover the differences between the choices</p> </div>"
    + "<div class = \"blinkingText\" id = \"blinkText\">Press space to go to main menu</div>"
	+ "</div>";

	exports.startGameScreens.push(startGame1);

var startGame2 = "<div class=\"midcolgame\">"
	+ "<label id=\"leaderLabel\" for=\"groupLead\">Enter Leader Name</label><br><br>" 
	+ "<input type=\"text\" name=\"leaderName\" id=\"groupLead\"><br>"
	+ "<p>Enter Group Member Names</p>"
	+ "<label for=\"membOne\">Member 1:</form>"
	+ "<input type=\"text\" name=\"memberOneName\" id=\"membOne\"><br><br>"
	+ "<label for=\"membTwo\">Member 2:</form>"
	+ "<input type=\"text\" name=\"memberTwoName\" id=\"membTwo\"><br><br>"
	+ "<label for=\"membThree\">Member 3:</label>"
	+ "<input type=\"text\" name=\"memberThreeName\" id=\"membThree\"><br><br>"
	+ "<label for=\"membFour\">Member 4:</label>"
	+ "<input type=\"text\" name=\"memberFourName\" id=\"membFour\"><br>"
	+ "<input id=\"submitBut\" type=\"submit\" value=\"Next\">"
	+ "</div>";

	exports.startGameScreens.push(startGame2);

var startGame3 = "<div class=\"midcolgame\">"
	+ "<p>The year is 1848.  You start your journey on the Oregon Trail in Independence Missouri.  You must choose a month to leave Independence</p>"
	+ "<div>"
	+ "<p id=\"marchChoice\">1. March</p>"
	+ "<p id=\"aprilChoice\">2. April</p>"
	+ "<p id=\"mayChoice\">3. May</p>"
	+ "<p id=\"juneChoice\">4. June</p>"
	+ "<p id=\"julyChoice\">5. July</p>"
	+ "</div>"
	+ "<div>What is Your Choice?</div></div>";

	exports.startGameScreens.push(startGame3);

var startGame4 = "<div class = \"midcolgame\"><p>Congratulations! You are ready to start your journey on the Oregon Trail!</p>"
	+ "<p>Here are the settings you have selected!</p>"
	+ "<div id=\"leaderName\">Wagon Leader:<div>"
	+ "<div id=\"memberOne\">Member One:<div>"
	+ "<div id=\"memberTwo\">Member Two:<div>"
	+ "<div id=\"memberThree\">Member Three:<div>"
	+ "<div id=\"memberFour\">Member Four:<div>"
	+ "<div id=\"profession\">Profession:<div>"
	+ "<div id=\"cash\">Cash:<div>"
	+ "<div id=\"startMonth\">Starting Month:<div></div>"
    + "<button id=\"starttrail\" type=\"button\"> Start Game</\"button\">"

	exports.startGameScreens.push(startGame4);
	
/*gameController: Will have all the logic for playing the game, 
methods should include
changePace(), updateGame(), resetGame(), 
*/	

function newData(){
	this.profession;
	this.money;
	this.playerNames = [];
	this.startMonth;
}

exports.newData;

function trailStats(){
    this.health = 100;
    this.currentWeather = [];
    this.distance = 0;
    this.daysTraveled = 0;
    this.currentPace = [];
    this.membersLeft = 5;
    this.currentTerrain = [];
}

exports.trailStats = new trailStats();

function death(health){
    randomNumHealth = math.floor(math.random() * 100)+ 1;
    
    if (health>=80){
    	if randomNumHealth<=3{
    		membersLeft--;
			alert("Your health is good");
    	}
    }
	else if (health<80 && >=50){
		if randomNumHealth<=3){
			membersLeft--;
			alert("Your health is fair");
		}
    	
    }
	else if (health<50 && health >=20){
        if (randomNumHealth<=3){
            membersLeft--;
			alert("your health is poor");
			//3% chance each player dies per day
        }
    }
    else if (health<20 && health >0){
        if (randomNumHealth<=10&&randomNumHealth>0){
            membersLeft--;
			alert("Your health is very poor")
			//10% chance each player dies per day
        }
        
    }
    else if (health<0){
        alert("You died");
		deathCheck();
	}
}


function deathCheck(){
    if (membersLeft == 0 || health <= 0 || daysTraveled > 50)
        alert("You did not make it to Oregon in time and have now been eaten by your group, after getting lost in the snowy mountains")
}

function winningCheck(){
    if (distance>500 && membersLeft>0 && health>0 && daysTraveled <=45 ){
        alert("You have won the game and made it to the state of Oregon safe and sound!");
    }
}

function trailStats(){
    this.health = 100;
    this.currentWeather = [];
    this.distance = 0;
    this.daysTraveled = 0;
    this.currentPace = [];
    this.membersLeft = 5;
    this.currentTerrain = [];
}

exports.trailStats = new trailStats();

var health = 100;
var currentWeather = "Warm";
var distance = 0;
var daysTraveled = 0;
var currentPace = "Resting";
var membersLeft = 5;
var currentTerrain = "Grasslands";

function showStats(trailStats){
	console.log('populateStats');
	document.getElementById('health').innerHTML = trailStats.health;
	document.getElementById('weather').innerHTML = trailStats.currentWeather;
	document.getElementById('distance').innerHTML = trailStats.distance;
	document.getElementById('day').innerHTML = trailStats.day;
	document.getElementById('currentPace').innerHTML = trailStats.currentPace;
	document.getElementById('membersLeft').innerHTML = trailStats.membersLeft;
	document.getElementById('currentTerrain').innerHTML = trailStats.currentTerrain;
}