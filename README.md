# rresto-lab3

var http = require('http');
var fs = require('fs');
var url = require('url');
var path = require('path');

http.createServer(function (request, response) { response.writeHead(200, {
'Content-Type': 'text/plain',
'Access-Control-Allow-Origin' : '*' });
	var q = url.parse(request.url, true);
	var filename = "." + q.pathname;
	
	var ext = path.extname(filename);
	var contentType = 'text/html';
	switch (ext) {
		case '.css':
			contentType = 'text/css';
			break;
		case '.json':
			contentType = 'application/json';
			break;
		case '.js':
			contentType = 'text/javascript';
			break;
		case '.png':
			contentType = 'image/png';
			break;
		case 'jpg':
			contentType = 'image/jpg';
			break;
		case '.wav':
			contentType = 'audio/wav';
			break;
	}

	fs.readFile(filename, function (error, data){
		if (error){
			response.writeHead(404, {'Content-Type': contentType});
			return response.end("404 Not Found");
		}
		response.writeHead(200, {
			'Content-Type': contentType});
		response.write(data)
			return response.end();
	}).listen(1337);
	
	response.end('What is up World\n'); }).listen(1337);
	console.log('Server running on port 1337!');

