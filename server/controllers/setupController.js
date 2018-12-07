var setup = require('../controllers/gameController');

var terrain = require('../models/terrain');
var weather = require('../models/weather');
var gameData = require('../models/gameData');
var pace = require('../models/pace');
var topTen = require('../models/topTen');

app.get('/game/saveProfession/:profession', function(req, res){
	var gameScreen = game.startGameScreens[req.params.profession];
	var profession = req.params.profession;
	game.newData.profession = req.params.profession;
	res.setHeader('Content_Type', 'text/html');
    res.send(game.newData.profession);
})

app.get('/game/savePlayerName/:playerId/:playerName', function(req, res){
	game.newData.playerName[req.params.playerId] = req.params.playerName;
	res.setHeader('Content_Type', 'text/html');
	res.send(game.newData.playerName);
})

app.get('/game/saveStartMonth/:startMonth', function(req, res){
	var gameScreen = game.startGameScreens[req.params.startMonth];
    var startMonth = req.params.startMonth;
    game.newData.startMonth = req.params.startMonth;
	res.setHeader('Content_Type', 'text/html');
	res.send(gameScreen);
})

app.get('/game/getSettings', function(req, res){
	res.setHeader('Content_Type', 'text/html');
	res.send(gameScreen);
})
