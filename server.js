const http = require("http");

// 65535 TCP ports
const PORT = 7000;

var server = http.createServer(function(req, res) {
    // Process the request and respond
    res.end("Sup Boss Man?!");
});

// Listen for inbound connections
server.listen(PORT, function(err) {
	if(err) {
		console.error("Couldn't Listen", err);
	} else {
		console.log("We are now listening on port " + PORT);
	}
});

const http = require("http");

// 65535 TCP ports
const PORT = 7500;

var server = http.createServer(function(req, res) {
    // Process the request and respond
    res.end("Breathe... PWND!");
});

// Listen for inbound connections
server.listen(PORT, function(err) {
	if(err) {
		console.error("Couldn't Listen", err);
	} else {
		console.log("We are now listening on port " + PORT);
	}
});

