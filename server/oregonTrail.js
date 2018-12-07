const express = require('express');
const app = express();

app.use(express.static('client/public'));

app.get('/', function(request, response){
	response.sendFile('index.html', {root: './client/views'})
})

var gameController = require('./controllers/gameController');
var setupController = require('./controllers/setupController');
var topTenController = require('./controllers/topTenController');

app.get('/game/getNewGameScreen/:screenId', function(req, res) {
    var gameScreen = game.startGameScreens[req.params.screenId];
    res.setHeader('Content-Type', 'text/html');
    res.send(gameScreen);
})

app.get('/game/saveProfession/:profession', function(req, res){
	var gameScreen = game.startGameScreens[req.params.profession];
	var profession = req.params.profession;
	game.newData.profession = req.params.profession;
	res.setHeader('Content_Type', 'text/html');
    res.send(game.newData.profession);
})

app.get('/game/saveMoney/:money', function(req, res){
	var gameScreen = game.startGameScreens[req.params.money];
    var money = req.params.money;
    game.newData.money = req.params.money;
	res.setHeader('Content_Type', 'text/html');
	res.send(gameScreen);
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

app.route('/api/topTen/topTen')
  .get(topTenController.getCurrentScores);

app.get('/mainmenu', function(request, response){
	response.sendFile('mainmenu.html', {root: './client/views'})
})

app.get('/setup', function(request, response){
	response.sendFile('setup.html', {root: './client/views'})
})

app.get('/topten', function(request, response){
	response.sendFile('topten.html', {root: './client/views'})
})

app.get('/trail', function(request, response){
	response.sendFile('trail.html', {root: './client/views'})
})

app.listen(1337, () => console.log('OregonTrail is running'))